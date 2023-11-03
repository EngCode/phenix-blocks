/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Smoth-Scroll
 * ===> 03 - Sticky Elements
 * ===> 04 - Scroll-Spy
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

PhenixElements.prototype.connect = function (options?:{
    type?:string,    //===> Connection Type [Ajax, Fetch]
    url?:string,     //===> API Endpoint URL
    method?:string,  //===> Connection Method [POST, PUT, DELETE, GET]
    headers?:object, //===> Connection Details and Authentication

}) {
    //===> Get Options <===//
    let connection_type = options?.type || 'ajax',
        connection_method = options?.method || 'GET',
        connection_response;

    //===> Ajax Request Mode <===//
    if (connection_type === "ajax") {
        //===> Create Request <===//
        let ajax_request = new XMLHttpRequest();

        //===> Connect to the Endpoint <===//
        ajax_request.open(connection_method, options?.url);

        //===> Send the Request <===//
        ajax_request.send();

        //===> When the Request is Ready <===//
        ajax_request.onreadystatechange = function() {
            //===> Connection is Succeed <===//
            if(this.readyState === 4 && this.status === 200) {
                console.log("Success 200 : ", this.responseText);
                //===> Return the Response <===//
                connection_response = this.responseText;
            }
        };
    }
    //===> Fetch Request Mode <===//
    else if (connection_method === "fetch") {
        //===> Return the Response <===//
        // connection_response;
    }

    //====> Return Response <====//
    return connection_response;
}