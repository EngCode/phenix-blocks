/**======> Reference By Comment <======
 * === Three.js Viewer Utilities ===
 * ===> 01 - Ensure Import Map
 * ===> 02 - Load Three Modules
 * ===> 03 - Initialize Viewer
 * ===> 04 - Expose Public Functions
*/

//====> Global Variables <====//
let THREE_Module = null;  //====> Store the loaded THREE core module <====//
let addons = {};          //====> Stores ALL loaded addons { addonName: module } <====//
let isLoading = false;    //====> Flag to prevent concurrent loading attempts <====//
let loadPromise = null;   //====> Promise for the current loading operation <====//

//====> Dynamically creates an import map for Three.js. <====//
function three_importing_map(assetsBasePath) {
    //====> Validate Base Path <====//
    if (!assetsBasePath || !assetsBasePath.startsWith('http')) return false;

    //====> Define Map ID <====//
    const mapId = 'pds-blocks-three-importmap';
    //====> Check if Map Already Exists <====//
    if (document.getElementById(mapId)) return true;

    //====> Define Module URLs <====//
    const threeCoreUrl = assetsBasePath + 'lib/three/three.module.min.js';
    const threeAddonsUrl = assetsBasePath + 'lib/three/addons/';

    //====> Create Import Map Object (Trailing slash is important for addons) <====//
    const importMap = {
        imports: {
            'three': threeCoreUrl,
            'three/addons/': threeAddonsUrl,
        }
    };

    //====> Create and Inject Script Tag <====//
    const mapScript = document.createElement('script');
    //====> Set Type and ID <====//
    mapScript.type = 'importmap';   
    mapScript.id = mapId;
    //====> Set Content <====//
    mapScript.textContent = JSON.stringify(importMap);
    //====> Inject <====//
    document.head.appendChild(mapScript);
    //====> Return True When Successful <====//
    return true;
}

//====> Three.js Modules Loader <====//
//====> Loads the core THREE module (once) and requested addons dynamically. <====//
async function three_modules_loader(requiredAddonPaths = []) {
    //====> 1. Handle Concurrent Loading: If a loading operation is already in progress, wait for it. <====//
    if (isLoading && loadPromise) {
        try {
            await loadPromise;
        } catch (error) {
             //====> If the pending load failed, the current call might also fail depending on requirements. <====//
             //====> We'll proceed and let the checks below handle it. <====//
             console.warn("Three.js Utils Warning: Waited for a loading operation that failed.", error);
        }
    }

    //====> 2. Identify Missing Addons <====//
    //====> Check which of the requested addons are not already in our global 'addons' store. <====//
    const missingAddonPaths = requiredAddonPaths.filter(relativePath => {
        const addonName = relativePath.split('/').pop().split('.')[0];
        //====> Check if the key exists in the addons object <====//
        return !(addonName in addons);
    });

    //====> 3. Determine if Loading is Needed <====//
    const needsCoreLoad = !THREE_Module; //====> Need to load THREE core? <====//
    const needsAddonLoad = missingAddonPaths.length > 0; //====> Need to load any addons? <====//

    if (needsCoreLoad || needsAddonLoad) {
        //====> If we are already loading (e.g., another async task triggered this after the initial await), <====//
        //====> wait again just in case the required modules were loaded by that other task. <====//
        if (isLoading && loadPromise) {
             try {
                 await loadPromise;
                 //====> Re-check missing addons after waiting again <====//
                 missingAddonPaths.length = 0; //====> Clear array <====//
                 requiredAddonPaths.forEach(relativePath => {
                    const addonName = relativePath.split('/').pop().split('.')[0];
                    if (!(addonName in addons)) {
                        missingAddonPaths.push(relativePath);
                    }
                 });
                 //====> If no longer missing addons and core is loaded, we can continue without new loading. <====//
                 if (!missingAddonPaths.length && THREE_Module) {
                     //====> Set needsAddonLoad to false if they are now loaded <====//
                     needsAddonLoad = false;
                 } else {
                     //====> If core is still missing, update flag <====//
                     needsCoreLoad = !THREE_Module;
                 }

             } catch (error) {
                 console.warn("Three.js Utils Warning: Second wait for loading operation also failed.", error);
                 //====> Proceed, likely to fail again, but let the checks run. <====//
             }
        }

        //====> Proceed only if still necessary after potential second wait <====//
        if (needsCoreLoad || needsAddonLoad) {
            isLoading = true;
            let resolveLoad, rejectLoad;
            loadPromise = new Promise((res, rej) => { resolveLoad = res; rejectLoad = rej; });

            try {
                //====> 3a. Load Core THREE (if needed) <====//
                if (needsCoreLoad) {
                    try {
                        console.log("Three.js Utils: Loading core module...");
                        const THREE = await import('three');
                        THREE_Module = THREE;
                        console.log("Three.js Utils: Core module loaded.");
                    } catch (error) {
                        console.error("Three.js Utils Error: Failed to load Three.js core module:", error);
                        isLoading = false;
                        loadPromise = null;
                        THREE_Module = null; //====> Ensure it's null on failure <====//
                        addons = {}; //====> Clear potentially partially loaded addons <====//
                        rejectLoad(error);
                        throw error; //====> Propagate <====//
                    }
                }

                //====> 3b. Load Missing Addons (if any) <====//
                if (needsAddonLoad) {
                    //====> Filter again in case the core load took time and another call loaded some addons <====//
                     const stillMissingPaths = requiredAddonPaths.filter(relativePath => {
                        const addonName = relativePath.split('/').pop().split('.')[0];
                        return !(addonName in addons);
                     });

                     if (stillMissingPaths.length > 0) {
                        console.log("Three.js Utils: Loading addons:", stillMissingPaths.map(p => p.split('/').pop().split('.')[0]));
                        const addonPromises = stillMissingPaths.map(async (relativePath) => {
                            const addonName = relativePath.split('/').pop().split('.')[0];
                            const fullSpecifier = `three/addons/${relativePath}`;
                            try {
                                const addonModule = await import(fullSpecifier);
                                //====> Store globally upon successful load <====//
                                addons[addonName] = addonModule[addonName] || addonModule;
                                console.log(`Three.js Utils: Addon ${addonName} loaded.`);
                            } catch (err) {
                                console.error(`Three.js Utils Error: Failed to import addon: ${fullSpecifier}`, err);
                                //====> Store null globally to indicate failure and prevent retries <====//
                                addons[addonName] = null;
                            }
                        });
                        await Promise.all(addonPromises);
                        console.log("Three.js Utils: Addon loading phase complete.");
                    }
                }

                //====> 3c. Loading successful for this batch <====//
                isLoading = false;
                resolveLoad(); //====> Resolve the promise for any waiters <====//
                loadPromise = null;

            } catch (error) {
                //====> This catches the core loading error if it was re-thrown <====//
                console.error("Three.js Utils Error: Error during loading process.", error)
                isLoading = false;
                if (loadPromise) rejectLoad(error); //====> Reject if promise was created <====//
                loadPromise = null;
                //====> Ensure THREE_Module reflects the potential failure state <====//
                if (!THREE_Module) addons = {}; //====> Clear addons if core failed definitively <====//
                throw error; //====> Re-throw <====//
            }
        }
    }

    //====> 4. Prepare Result for *this specific call* <====//
    //====> Create a new object containing only the addons requested by this specific call. <====//
    const requestedAddonsMap = {};
    let coreAvailable = !!THREE_Module; //====> Check if core is actually available now <====//

    if (coreAvailable) {
        requiredAddonPaths.forEach(relativePath => {
            const addonName = relativePath.split('/').pop().split('.')[0];
            if (addonName in addons) {
                //====> Add to the result map, even if value is null (indicates loading failed) <====//
                requestedAddonsMap[addonName] = addons[addonName];
            } else {
                //====> Should not happen if logic is correct, but indicates an issue. <====//
                console.warn(`Three.js Utils Warning: Requested addon '${addonName}' was unexpectedly not found in global store after loading attempt.`);
                requestedAddonsMap[addonName] = undefined;
            }
        });
    } else {
         //====> Core module failed to load, cannot fulfill request. <====//
         throw new Error("Three.js Utils Critical Error: THREE core module failed to load and is unavailable.");
    }

    //====> 5. Return core module and the specifically requested addons map <====//
    return { THREE: THREE_Module, loadedAddons: requestedAddonsMap };
}

//====> 03 - Initialize Viewer <====//
// Initializes a Three.js viewer in the given container element.
// Loads modules dynamically if needed.
async function initializeViewer(container, options = {}, assetsBasePath) {
    //====> 1. Ensure Import Map Exists <====//
    if (!three_importing_map(assetsBasePath)) {
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
        loadedModules = await three_modules_loader(requiredAddonPaths);
    } catch (error) {
        // Error already logged by three_modules_loader
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
            loadModelInternal(() => {}, (error) => {
                 //==> Model Loading Failed <==//
                 console.error("Three.js Utils Error: Failed to load model:", error);
                 container.innerHTML = '<p style="color:red;">Error loading 3D model.</p>';
                 // Cleanup on failure
                 cancelAnimationFrame(animationFrameId);
                 resizeObserver.disconnect();
            });
        }

    } catch (setupError) {
        //====> Handle Viewer Setup Error <====//
        console.error("Three.js Utils Error: Error during viewer setup:", setupError);
        container.innerHTML = '<p style="color:red;">Error setting up 3D viewer.</p>';
    }
}

//====> 04 - Expose Public Functions <====//
window.threeUtils = {
    initializeViewer
}; 