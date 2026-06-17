/*=====> Phenix Core Stub <=====//
 * This file is used as an alias for extension builds.
 * It replaces the direct import of the core with a read
 * from the window global. The core must be loaded first.
 */

//===> Get Phenix from the Global <===//
const Phenix = (window as any).Phenix;
const PhenixElements = (window as any).Phenix.PhenixElements;

//====> Export for TypeScript Compatibility <====//
export default Phenix;
export { PhenixElements };