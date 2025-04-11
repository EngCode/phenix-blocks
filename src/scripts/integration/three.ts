/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Media Setter
 * ===> 03 - Methods
 * ========> - Background Method
 * ===> 04 - Phenix Elements
 * ===> 05 - Get Options Data
 * ===> 06 - Set Media Size
 * ===> 07 - Clean Source [URL]
 * ===> 08 - Media Handler
 * ========> - Background Type
 * ===> 09 - Lazy-Loading Mode
 * ===> 10 - None-Valid Source
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";
declare var THREE: any;

/*====> Media Setter [un-tested] <====*/
PhenixElements.prototype.three = function (options?:{
    type?:string,   //===> Viewer
    object?:string, //===> Viewer source
}) {
    //====> Loop Through Phenix Elements <====//
    this.forEach(element => {
        
    });
}