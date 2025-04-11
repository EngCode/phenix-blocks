/**======> Reference By Comment <======
 * === Three.js Viewer Utilities ===
 * ===> 01 - Ensure Import Map
 * ===> 02 - Load Three Modules
 * ===> 03 - Initialize Viewer
 * ===> 04 - Expose Public Functions
*/

//====> Global Variables <====//
let THREE_Module = null;  // To store the loaded THREE core module
let addons = {};          // To store loaded addon modules
let isLoading = false;    // Flag to prevent concurrent loading attempts
let loadCallbacks = [];   // Queue for callbacks waiting for loading to finish

//====> 01 - Ensure Import Map <====//
// Dynamically creates an import map if one doesn't exist for Three.js.
function ensureImportMap(assetsBasePath) {
    //====> Define Map ID <====//
    const mapId = 'pds-blocks-three-importmap';

    //====> Check if Map Already Exists <====//
    if (document.getElementById(mapId)) {
        return true;
    }

    //====> Validate Base Path <====//
    if (!assetsBasePath || !assetsBasePath.startsWith('http')) {
        console.error("Three.js Utils Error: Invalid assetsBasePath provided for import map.", assetsBasePath);
        return false;
    }

    //====> Define Module URLs <====//
    const threeCoreUrl = assetsBasePath + 'lib/three/three.module.min.js';
    const threeAddonsUrl = assetsBasePath + 'lib/three/addons/';

    //====> Create Import Map Object <====//
    const importMap = {
        imports: {
            'three': threeCoreUrl,
            'three/addons/': threeAddonsUrl, // Trailing slash is important
        }
    };

    //====> Create and Inject Script Tag <====//
    try {
        const mapScript = document.createElement('script');
        mapScript.type = 'importmap';
        mapScript.id = mapId;
        mapScript.textContent = JSON.stringify(importMap);
        document.head.appendChild(mapScript);
        return true;
    } catch (e) {
        console.error("Three.js Utils Error: Failed to create or inject import map:", e);
        return false;
    }
}

//====> 02 - Load Three Modules <====//
// Dynamically imports the Three.js core module and necessary addons.
async function loadThreeModules(requiredAddonPaths = []) {
    //====> Return if Already Loaded <====//
    if (THREE_Module) {
        // Note: This doesn't currently check if *new* addons are needed if called again.
        // Assumes all necessary addons are requested on the first call.
        return { THREE: THREE_Module, loadedAddons: addons };
    }

    //====> Handle Concurrent Loading <====//
    if (isLoading) {
        // Return a promise that resolves when the ongoing loading finishes
        return new Promise(resolve => loadCallbacks.push(resolve));
    }

    //====> Set Loading Flag <====//
    isLoading = true;

    //====> Load Core and Addons <====//
    try {
        //===> Import THREE Core (uses import map) <===//
        const THREE = await import('three');
        THREE_Module = THREE; // Store the loaded module

        //===> Import Required Addons <===//
        const addonPromises = requiredAddonPaths.map(async (relativePath) => {
            //==> Derive Addon Name and Specifier <===//
            const addonName = relativePath.split('/').pop().split('.')[0]; // e.g., OrbitControls
            const fullSpecifier = `three/addons/${relativePath}`;
            //===> Import Addon (uses import map) <===//
            try {
                const addonModule = await import(fullSpecifier);
                // Store the most likely export (e.g., OrbitControls class from OrbitControls.js)
                addons[addonName] = addonModule[addonName] || addonModule; 
            } catch (err) {
                console.error(`Three.js Utils Error: Failed to import addon: ${fullSpecifier}`, err);
                addons[addonName] = null; // Mark as failed/unavailable
            }
        });

        //===> Wait for All Addons <===//
        await Promise.all(addonPromises);

        //===> Prepare Result <===//
        const result = { THREE: THREE_Module, loadedAddons: addons };

        //===> Resolve Pending Callbacks <===//
        loadCallbacks.forEach(resolve => resolve(result));
        loadCallbacks = [];
        isLoading = false;
        
        //===> Return Result <===//
        return result;

    } catch (error) {
        //====> Handle Core Loading Failure <====//
        console.error("Three.js Utils Error: Failed to load Three.js core module:", error);
        isLoading = false;
        loadCallbacks = []; // Clear queue on failure
        THREE_Module = null; // Ensure it stays null
        addons = {};
        throw error; // Re-throw to be caught by the caller
    }
}

//====> 03 - Initialize Viewer <====//
// Initializes a Three.js viewer in the given container element.
// Loads modules dynamically if needed.
async function initializeViewer(container, options = {}, assetsBasePath) {
    //====> Add Loading Class <====//
    container.classList.add('px-loading');

    //====> 1. Ensure Import Map Exists <====//
    if (!ensureImportMap(assetsBasePath)) {
        container.classList.remove('px-loading');
        container.innerHTML = '<p style="color:red;">Error: Could not set up Three.js import map.</p>';
        return;
    }

    //====> 2. Determine Required Addons <====//
    const requiredAddonPaths = [];
    if (options.controls === 'orbit') requiredAddonPaths.push('controls/OrbitControls.js');
    else if (options.controls === 'trackball') requiredAddonPaths.push('controls/TrackballControls.js');

    const modelType = (options.modelType || 'gltf').toLowerCase();
    if (options.modelPath) { // Only load loaders if a model path is specified
        if (modelType === 'gltf' || modelType === 'glb') requiredAddonPaths.push('loaders/GLTFLoader.js');
        else if (modelType === 'obj') requiredAddonPaths.push('loaders/OBJLoader.js');
        else if (modelType === 'fbx') requiredAddonPaths.push('loaders/FBXLoader.js');
    }

    //====> 3. Load THREE Modules <====//
    let loadedModules;
    try {
        loadedModules = await loadThreeModules(requiredAddonPaths);
    } catch (error) {
        // Error already logged by loadThreeModules
        container.classList.remove('px-loading');
        container.innerHTML = '<p style="color:red;">Error: Could not load Three.js components.</p>';
        return;
    }

    //===> Destructure Loaded Modules <===//
    const { THREE, loadedAddons } = loadedModules;

    //====> 4. Setup Viewer Scene <====//
    try {
        //===> Get Addon Constructors <===//
        const OrbitControls = loadedAddons['OrbitControls'];
        const TrackballControls = loadedAddons['TrackballControls'];
        const GLTFLoader = loadedAddons['GLTFLoader'];
        const OBJLoader = loadedAddons['OBJLoader'];
        const FBXLoader = loadedAddons['FBXLoader'];

        //===> Handle Non-Canvas Container <===//
        if (!(container instanceof HTMLCanvasElement)) {
             const canvas = document.createElement('canvas');
             canvas.style.width = '100%';
             canvas.style.height = '100%';
             container.innerHTML = ''; // Clear container
             container.appendChild(canvas);
             container = canvas; // Update container reference
        }

        //===> Get Canvas Dimensions <===//
        const width = container.clientWidth || 300;
        const height = container.clientHeight || 300;
        if (width <= 0 || height <= 0) {
            console.warn("Three.js Utils Warning: Canvas dimensions invalid (<= 0). Viewer may not render correctly.");
            // Don't return, let it try anyway, but warn.
        }

        //===> Create Scene <===//
        const scene = new THREE.Scene();
        if (options.background && options.background !== 'transparent') {
             scene.background = new THREE.Color(options.background);
        } else {
             scene.background = null; // Transparent background
        }

        //===> Create Camera <===//
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
        camera.position.z = 5; // Initial position, adjusted later by model loading

        //===> Create Renderer <===//
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: container });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.toneMapping = THREE.ACESFilmicToneMapping; // Optional: Consider for better visuals
        // renderer.outputEncoding = THREE.sRGBEncoding; // Optional: Match color space

        //===> Add Lights <===//
        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight1.position.set(1, 1, 1).normalize();
        scene.add(dirLight1);
        const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight2.position.set(-1, -1, -0.5).normalize();
        scene.add(dirLight2);
        
        //===> Setup Controls <===//
        let controls = null;
        if (options.controls === 'orbit' && OrbitControls) {
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            if (options.autoRotate) controls.autoRotate = true;
        } else if (options.controls === 'trackball' && TrackballControls) {
            controls = new TrackballControls(camera, renderer.domElement);
        } else if (options.controls) {
             console.warn(`Three.js Utils Warning: Controls type '${options.controls}' requested but addon not loaded or available.`);
        }

        //===> Animation Setup <===//
        let mixer = null;
        const clock = new THREE.Clock();
        let animationFrameId = null;

        //===> Animation Loop <===//
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const delta = clock.getDelta();
            // Update controls/mixer if they exist
            controls?.update?.(delta); 
            mixer?.update?.(delta);
            renderer.render(scene, camera);
        }
        
        //===> Resize Handling <===//
        const resizeObserver = new ResizeObserver(() => {
             const newWidth = container.clientWidth;
             const newHeight = container.clientHeight;
             if (newWidth > 0 && newHeight > 0) {
                 camera.aspect = newWidth / newHeight;
                 camera.updateProjectionMatrix();
                 renderer.setSize(newWidth, newHeight);
             }
        });
        resizeObserver.observe(container);

        //===> Model Loading Function <===//
        const loadModelInternal = (onLoadComplete, onError) => {
            //==> Select Loader <==//
            let LoaderConstructor;
            switch (modelType) {
                case 'gltf': case 'glb': LoaderConstructor = GLTFLoader; break;
                case 'obj': LoaderConstructor = OBJLoader; break;
                case 'fbx': LoaderConstructor = FBXLoader; break;
            }

            //==> Check if Loader is Available <==//
            if (!LoaderConstructor) {
                onError(new Error(`Three.js Utils Error: ${modelType.toUpperCase()}Loader addon not loaded.`));
                return;
            }
            
            //==> Load Model <==//
            const loader = new LoaderConstructor();
            loader.load(options.modelPath, 
                (result) => { // Success
                    const model = (modelType === 'gltf' || modelType === 'glb') ? result.scene : result;
                    const animations = result.animations || [];

                    //==> Configure Model Position & Camera <==//
                    const box = new THREE.Box3().setFromObject(model);
                    const size = box.getSize(new THREE.Vector3());
                    const center = box.getCenter(new THREE.Vector3());
                    model.position.sub(center); // Center the model at origin
                    scene.add(model);
                    
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const fov = camera.fov * (Math.PI / 180);
                    const cameraZ = maxDim > 0 ? Math.abs(maxDim / (2 * Math.tan(fov / 2))) * 1.5 : 5; // Calculate distance
                    
                    camera.position.copy(center); // Start camera at model center
                    camera.position.z += cameraZ; // Move camera back
                    camera.lookAt(center); // Point camera at model center
                    
                    // Adjust near/far planes based on distance
                    camera.near = cameraZ / 100 > 0.01 ? cameraZ / 100 : 0.01;
                    camera.far = cameraZ * 100;
                    camera.updateProjectionMatrix();
                    
                    // Update controls target to model center
                    if (controls?.target) { controls.target.copy(center); controls.update(); }

                    //==> Handle Animations <==//
                    if (animations.length > 0) {
                        mixer = new THREE.AnimationMixer(model);
                        animations.forEach(clip => mixer.clipAction(clip).play());
                    }
                    onLoadComplete(); // Signal success
                }, 
                undefined, // Progress callback (optional)
                (error) => onError(error) // Error callback
            );
        };

        //====> Start Animation Loop <====//
        animate(); 
        
        //====> Load Model if Path Provided <====//
        if (options.modelPath) {
            loadModelInternal(() => {
                 //==> Model Loaded Successfully <==//
                 container.classList.remove('px-loading');
            }, (error) => {
                 //==> Model Loading Failed <==//
                 console.error("Three.js Utils Error: Failed to load model:", error);
                 container.classList.remove('px-loading');
                 container.innerHTML = '<p style="color:red;">Error loading 3D model.</p>';
                 // Cleanup on failure
                 cancelAnimationFrame(animationFrameId);
                 resizeObserver.disconnect();
            });
        } else {
             //==> No Model to Load <==//
             container.classList.remove('px-loading');
        }

        // Optional: Add cleanup function when container is removed from DOM
        // Example: Use MutationObserver on parent, or specific cleanup method call
        // cleanup = () => {
        //    cancelAnimationFrame(animationFrameId);
        //    resizeObserver.disconnect();
        //    renderer.dispose();
        //    // Dispose geometry, materials, textures in scene
        // }

    } catch (setupError) {
        //====> Handle Viewer Setup Error <====//
        console.error("Three.js Utils Error: Error during viewer setup:", setupError);
        container.classList.remove('px-loading');
        container.innerHTML = '<p style="color:red;">Error setting up 3D viewer.</p>';
    }
}

//====> 04 - Expose Public Functions <====//
window.threeUtils = {
    initializeViewer
}; 