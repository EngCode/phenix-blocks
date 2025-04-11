/**
 * Simple Three.js Utilities
 * Helper to load Three.js core (non-module) and addons, making THREE globally available.
 */

// Simple tracking of loaded scripts to prevent duplicates
const loadedScripts = new Set();
let isCoreLoading = false;
let coreLoadCallbacks = [];

/**
 * Load a script and track its loading status
 * @param {string} src - Script source path (absolute or root-relative expected)
 * @param {Function} callback - Callback when script is loaded
 * @param {Function} onError - Callback on loading error
 */
function loadScript(src, callback, onError) {
    // Skip if already loaded or currently loading (for core)
    if (loadedScripts.has(src)) {
        console.log(`Script already loaded: ${src}`);
        if (callback) queueMicrotask(callback); // Call callback async if already loaded
        return;
    }

    // Create script element
    const script = document.createElement('script');
    // script.type = 'module'; // <-- REMOVED: Load as standard scripts
    script.src = src;
    script.async = true; // Load async but execution order relies on dependencies

    // Set loading handlers
    script.onload = () => {
        console.log(`Script loaded successfully: ${src}`);
        loadedScripts.add(src); // Mark as loaded
        if (callback) callback();
    };

    script.onerror = (event) => {
        console.error(`Error loading script ${src}:`, event);
        if (onError) onError(event);
    };

    // Add to document head
    document.head.appendChild(script);
}

/**
 * Load Three.js core (non-module) and specified addons.
 * Ensures window.THREE is available and addons are attached.
 * @param {string[]} addons - Array of addon paths relative to '/assets/lib/three/' (e.g., 'addons/controls/OrbitControls.js')
 * @param {Function} callback - Callback function executed when core and all specified addons are loaded.
 */
function loadThree(addons = [], callback) {
    // --- 1. Load Core ('three.core.min.js') ---
    const corePath = '/assets/lib/three/three.core.min.js'; // Using the non-module version

    const onCoreReady = () => {
         // Check if THREE global was created
        if (typeof THREE === 'undefined' || !window.THREE) {
            console.error("THREE core script loaded, but window.THREE was not created.");
            // Potentially reject or signal error in callback? For now, proceed cautiously.
        } else {
            console.log("window.THREE is ready.");
        }

        // --- 2. Load Addons ---
        if (!addons || addons.length === 0) {
            console.log("No addons requested. Firing main callback.");
            if (callback) queueMicrotask(callback); // Fire main callback if no addons
            return;
        }

        let addonsLoadedCount = 0;
        let addonsErrored = false;
        const totalAddons = addons.length;

        const onAddonLoad = () => {
            addonsLoadedCount++;
            console.log(`Addons loaded: ${addonsLoadedCount}/${totalAddons}`);
            if (!addonsErrored && addonsLoadedCount === totalAddons) {
                console.log("All requested addons loaded. Firing main callback.");
                if (callback) queueMicrotask(callback); // Fire main callback once all addons are done
            }
        };
        
        const onAddonError = (addonPath, event) => {
             console.error(`Failed to load addon: ${addonPath}`, event);
             addonsErrored = true;
             // Decide how to handle addon errors - maybe fire main callback with an error flag?
             // For now, it will prevent the final callback if any addon fails.
        };

        console.log(`Loading ${totalAddons} addons...`);
        addons.forEach(addonRelativePath => {
            // Construct full path assuming three-utils.js is loaded relative to domain root
            const addonFullPath = `/assets/lib/three/${addonRelativePath}`;
            loadScript(addonFullPath, onAddonLoad, (event) => onAddonError(addonFullPath, event));
        });
    };

    // Handle concurrent requests for the core
    if (isCoreLoading) {
        console.log("THREE core is already loading, adding callback to queue.");
        coreLoadCallbacks.push(onCoreReady);
        return;
    }

    // Load core if not already loaded
    if (!loadedScripts.has(corePath)) {
        console.log("Loading THREE core:", corePath);
        isCoreLoading = true;
        loadScript(corePath, () => {
            isCoreLoading = false;
            loadedScripts.add(corePath); // Ensure it's marked loaded here
            onCoreReady(); // Process this request
            // Process queued callbacks
            coreLoadCallbacks.forEach(cb => queueMicrotask(cb));
            coreLoadCallbacks = [];
        }, (event) => {
            console.error("Failed to load THREE core:", corePath, event);
            isCoreLoading = false;
            // Handle core load failure - maybe notify callbacks?
        });
    } else {
        // Core already loaded, proceed directly
        console.log("THREE core already loaded.");
        onCoreReady();
    }
}

// Export utilities to global scope for Phenix.import callback
window.threeUtils = { loadThree };

// REMOVED: export default { loadThree }; // Not needed as this isn't loaded as a module itself 

/**
 * Three.js Viewer Utilities
 * Handles dynamic loading of Three.js modules and viewer initialization.
 */

// Scope for loaded modules and status flags
let THREE_Module = null;
let addons = {}; // Store loaded addons like OrbitControls, GLTFLoader
let isLoading = false;
let loadCallbacks = [];
const loadedScriptURLs = new Set(); // Track URLs used in import map

/**
 * Dynamically creates an import map if one doesn't exist for Three.js.
 * @param {string} assetsBasePath - The absolute base URL for assets (e.g., 'http://.../pds-blocks/assets/')
 * @returns {boolean} - True if the map was created or already exists, false on error.
 */
function ensureImportMap(assetsBasePath) {
    const mapId = 'pds-blocks-three-importmap';
    if (document.getElementById(mapId)) {
        console.log("Three.js import map already exists.");
        return true;
    }

    if (!assetsBasePath || !assetsBasePath.startsWith('http')) {
        console.error("Cannot create import map: Invalid assetsBasePath provided.", assetsBasePath);
        return false;
    }

    // Define module URLs using the provided base path
    const threeCoreUrl = assetsBasePath + 'lib/three/three.module.min.js';
    const threeAddonsUrl = assetsBasePath + 'lib/three/addons/';

    const importMap = {
        imports: {
            'three': threeCoreUrl,
            'three/addons/': threeAddonsUrl, // Trailing slash is important for addon resolution
        }
    };

    // Track the URLs we are about to use
    loadedScriptURLs.add(threeCoreUrl);
    // We don't add the addons base URL itself, but individual addons will be tracked on import

    try {
        const mapScript = document.createElement('script');
        mapScript.type = 'importmap';
        mapScript.id = mapId;
        mapScript.textContent = JSON.stringify(importMap);
        document.head.appendChild(mapScript);
        console.log("Three.js import map injected.");
        return true;
    } catch (e) {
        console.error("Failed to create or inject import map:", e);
        return false;
    }
}

/**
 * Dynamically imports the Three.js core module and necessary addons.
 * @param {string[]} requiredAddonPaths - Array of addon paths relative to 'three/addons/' (e.g., 'controls/OrbitControls.js')
 * @returns {Promise<{ THREE: any, loadedAddons: Record<string, any> }>} - Resolves with THREE core and loaded addon modules.
 */
async function loadThreeModules(requiredAddonPaths = []) {
    if (THREE_Module) {
        console.log("Three.js modules already loaded.");
        // Potentially check if *required* addons are already loaded here if needed
        return { THREE: THREE_Module, loadedAddons: addons };
    }

    if (isLoading) {
        console.log("Three.js modules are currently loading, awaiting completion...");
        return new Promise(resolve => loadCallbacks.push(resolve));
    }

    isLoading = true;

    try {
        console.log("Dynamically importing THREE core...");
        // Use the 'three' alias defined in the import map
        const THREE = await import('three');
        THREE_Module = THREE;
        console.log("THREE core module imported successfully.");

        // Import required addons
        const addonPromises = requiredAddonPaths.map(async (relativePath) => {
            const addonName = relativePath.split('/').pop().split('.')[0]; // e.g., OrbitControls
            const fullSpecifier = `three/addons/${relativePath}`;
            try {
                console.log(`Importing addon: ${fullSpecifier}`);
                const addonModule = await import(fullSpecifier);
                // Store the primary export (heuristic: often named like the file)
                // Or store the whole module if needed
                addons[addonName] = addonModule[addonName] || addonModule; 
                console.log(`Addon ${addonName} imported successfully.`);
            } catch (err) {
                console.error(`Failed to import addon: ${fullSpecifier}`, err);
                // Decide how to handle: throw, return null, etc.
                // For now, log error and potentially skip this addon
                addons[addonName] = null; // Mark as failed/unavailable
            }
        });

        await Promise.all(addonPromises);
        console.log("All required addon imports attempted.", addons);

        const result = { THREE: THREE_Module, loadedAddons: addons };

        // Resolve pending callbacks
        loadCallbacks.forEach(resolve => resolve(result));
        loadCallbacks = [];
        isLoading = false;
        
        return result;

    } catch (error) {
        console.error("Failed to load Three.js core module:", error);
        isLoading = false;
        loadCallbacks = []; // Clear callbacks on failure
        throw error; // Re-throw the error to be caught by the caller
    }
}

/**
 * Initializes a Three.js viewer in the given container element.
 * Loads modules dynamically if needed.
 * @param {HTMLElement} container - The container element (ideally a CANVAS)
 * @param {object} options - Viewer options (modelPath, modelType, background, autoRotate, controls)
 * @param {string} assetsBasePath - The absolute base URL for the plugin's assets directory.
 */
async function initializeViewer(container, options = {}, assetsBasePath) {
    console.log("initializeViewer called for container:", container, "with options:", options);
    container.classList.add('px-loading');

    // 1. Ensure the import map exists
    if (!ensureImportMap(assetsBasePath)) {
        container.classList.remove('px-loading');
        container.innerHTML = '<p style="color:red;">Error: Could not set up Three.js import map.</p>';
        return;
    }

    // 2. Determine required addons based on options
    const requiredAddonPaths = [];
    if (options.controls === 'orbit') requiredAddonPaths.push('controls/OrbitControls.js');
    else if (options.controls === 'trackball') requiredAddonPaths.push('controls/TrackballControls.js');

    const modelType = (options.modelType || 'gltf').toLowerCase();
    if (options.modelPath) { // Only load loaders if a model path is provided
        if (modelType === 'gltf' || modelType === 'glb') requiredAddonPaths.push('loaders/GLTFLoader.js');
        else if (modelType === 'obj') requiredAddonPaths.push('loaders/OBJLoader.js');
        else if (modelType === 'fbx') requiredAddonPaths.push('loaders/FBXLoader.js');
    }

    // 3. Load THREE and Addons
    let loadedModules;
    try {
        loadedModules = await loadThreeModules(requiredAddonPaths);
    } catch (error) {
        console.error("Failed to load Three.js modules:", error);
        container.classList.remove('px-loading');
        container.innerHTML = '<p style="color:red;">Error: Could not load Three.js components.</p>';
        return;
    }

    const { THREE, loadedAddons } = loadedModules;

    // 4. Proceed with Viewer Setup (using imported THREE and addons)
    try {
        // Get constructors from loaded addons
        const OrbitControls = loadedAddons['OrbitControls'];
        const TrackballControls = loadedAddons['TrackballControls'];
        const GLTFLoader = loadedAddons['GLTFLoader'];
        const OBJLoader = loadedAddons['OBJLoader'];
        const FBXLoader = loadedAddons['FBXLoader'];

        // === Start of createViewer logic (adapted) ===
        if (!(container instanceof HTMLCanvasElement)) {
             console.warn("Target container is not a canvas. Creating one inside.");
             const canvas = document.createElement('canvas');
             canvas.style.width = '100%';
             canvas.style.height = '100%';
             container.innerHTML = ''; // Clear container
             container.appendChild(canvas);
             container = canvas; // Use the new canvas as the container
        }

        const width = container.clientWidth || 300;
        const height = container.clientHeight || 300;
        if (width <= 0 || height <= 0) {
            console.warn("Canvas dimensions invalid after module load.");
            container.classList.remove('px-loading');
            return;
        }

        const scene = new THREE.Scene();
        if (options.background) scene.background = new THREE.Color(options.background);
        else scene.background = null;

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: container });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        // Consider tone mapping for better visuals, especially with GLTF
        // renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // renderer.outputEncoding = THREE.sRGBEncoding;

        // Lights
        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight1.position.set(1, 1, 1).normalize();
        scene.add(dirLight1);
        const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
        dirLight2.position.set(-1, -1, -0.5).normalize();
        scene.add(dirLight2);
        
        // Controls
        let controls;
        if (options.controls === 'orbit' && OrbitControls) {
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            if (options.autoRotate) controls.autoRotate = true;
        } else if (options.controls === 'trackball' && TrackballControls) {
            controls = new TrackballControls(camera, renderer.domElement);
        } else if (options.controls) {
             console.warn(`Controls type '${options.controls}' requested but not loaded or available.`);
        }

        // Animation Loop Setup
        let mixer = null;
        const clock = new THREE.Clock();
        let animationFrameId = null;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const delta = clock.getDelta();
            if (controls?.update) controls.update(delta);
            if (mixer?.update) mixer.update(delta);
            renderer.render(scene, camera);
        }
        
        // Resize Observer
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

        // Model Loading Setup
        const loadModelInternal = (onLoadComplete, onError) => {
            let LoaderConstructor;
            switch (modelType) {
                case 'gltf': case 'glb': LoaderConstructor = GLTFLoader; break;
                case 'obj': LoaderConstructor = OBJLoader; break;
                case 'fbx': LoaderConstructor = FBXLoader; break;
            }

            if (!LoaderConstructor) {
                onError(new Error(`${modelType.toUpperCase()}Loader addon not loaded.`));
                return;
            }
            
            const loader = new LoaderConstructor();
            loader.load(options.modelPath, 
                (result) => { // Success
                    const model = (modelType === 'gltf' || modelType === 'glb') ? result.scene : result;
                    const animations = result.animations || [];

                    // Configure model, camera, controls
                    const box = new THREE.Box3().setFromObject(model);
                    const size = box.getSize(new THREE.Vector3());
                    const center = box.getCenter(new THREE.Vector3());
                    model.position.sub(center);
                    scene.add(model);
                    const maxDim = Math.max(size.x, size.y, size.z);
                    const fov = camera.fov * (Math.PI / 180);
                    const cameraZ = maxDim > 0 ? Math.abs(maxDim / (2 * Math.tan(fov / 2))) * 1.5 : 5;
                    camera.position.copy(center); camera.position.z += cameraZ;
                    camera.lookAt(center);
                    camera.near = cameraZ / 100 > 0.01 ? cameraZ / 100 : 0.01;
                    camera.far = cameraZ * 100;
                    camera.updateProjectionMatrix();
                    if (controls?.target) { controls.target.copy(center); controls.update(); }

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

        // Start animation loop immediately
        animate(); 
        
        // Load model if path provided
        if (options.modelPath) {
            loadModelInternal(() => {
                console.log("Model loaded successfully.");
                 container.classList.remove('px-loading');
            }, (error) => {
                 console.error("Failed to load model:", error);
                 container.classList.remove('px-loading');
                 container.innerHTML = '<p style="color:red;">Error loading 3D model.</p>';
                 // Optionally stop animation/cleanup?
                 // cancelAnimationFrame(animationFrameId);
                 // resizeObserver.disconnect();
            });
        } else {
             container.classList.remove('px-loading');
        }

        console.log("Three.js viewer setup complete.");
        // === End of createViewer logic ===

    } catch (setupError) {
        console.error("Error during Three.js viewer setup:", setupError);
        container.classList.remove('px-loading');
        container.innerHTML = '<p style="color:red;">Error setting up 3D viewer.</p>';
    }
}

// Expose the initializer function globally via window.threeUtils
window.threeUtils = {
    initializeViewer
}; 