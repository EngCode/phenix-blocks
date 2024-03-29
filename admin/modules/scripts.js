document.addEventListener('DOMContentLoaded', ready => {
    //===> Tabs <===//
    Phenix('.px-tabs').tabs();

    //===> Advanced Select <===//
    Phenix('.px-select').select();
    
    //===> Validation <===//
    Phenix('.pds-form').validation();

    //====> Phenix Uploader <====//
    Phenix('.px-uploader').uploader();
});