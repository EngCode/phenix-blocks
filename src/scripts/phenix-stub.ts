/*=====> Phenix Core Stub <=====//
 * This file is used as an alias for extension builds.
 * It replaces the direct import of the core with a read
 * from the window global. The core must be loaded first.
 */

declare global {
    interface Window {
        Phenix?: any;
    }
}

//===> Get Phenix from the Global <===//
const Phenix = window?.Phenix;
const PhenixElements = window?.Phenix?.PhenixElements || null;

//===> Fail-Safe if Core Not Loaded <===//
if (!Phenix || !PhenixElements) {
    console.error('[Phenix Extension] Core library not loaded. Extension aborted.');
}

//===> Export for TypeScript Compatibility <===//
export default Phenix;
export { PhenixElements };