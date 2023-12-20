document.addEventListener('DOMContentLoaded', ready => {
    //===> Tabs <===//
    Phenix('.px-tabs').tabs();

    //===> Advanced Select <===//
    Phenix('.px-select').select();
    
    //===> Validation <===//
    Phenix('.pds-form').validation();

    //===> WP Media Uploader <===//
    Phenix(".px-custom-uploader .uploader-btn").on("click", isClicked => {
        //===> Prevent Default <===//
        isClicked.preventDefault();
        console.log(wp.media);
        let input = Phenix(isClicked.target).next(".uploader-input");

        //===> Open Media Uploader <===//
        var image = wp.media({
            title: "Upload Image",
            multiple: false
        }).open().on("select", isSelect => {
            //===> Get the Image URL <===//
            var uploaded_image = image.state().get("selection").first();
            //===> Set the URL to the Input <===//
            input.setAttribute("value", uploaded_image.toJSON().url);
        });
    });
});