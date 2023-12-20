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

    //===> Loading Live Preview <===//
    Phenix('#pds_loading_type').on("change", isChanged => {
        //===> Get the Value <===//
        let value = isChanged.target.value;

        //===> Check if the Value is "image" <===//
        if(value == "image") {
            //===> Show the Image Controls <===//
            Phenix(".loading-preview .loading-image").removeClass("hidden");
            Phenix(".loading-preview .loading-code, #pds_loading_code").addClass("hidden");
        } else {
            //===> Show the Code Controls <===//
            Phenix(".loading-preview .loading-image").addClass("hidden");
            Phenix(".loading-preview .loading-code, #pds_loading_code").removeClass("hidden");
        }
    });

    Phenix('#pds_loading_text').on("change", isChanged => {
        //===> Get the Value <===//
        let value = isChanged.target.value;
        //===> Change the Preview <===//
        document.querySelector(".loading-preview .loading-text").innerHTML = value;
    });

    Phenix('#pds_loading_image').on("change", isChanged => {
        //===> Get the Value <===//
        let value = isChanged.target.value;
        //===> Change the Preview <===//
        document.querySelector(".loading-preview .loading-image").setAttribute("src", value);
    });

    Phenix('#pds_loading_code textarea').on("change", isChanged => {
        //===> Get the Value <===//
        let value = isChanged.target.value;
        //===> Change the Preview <===//
        document.querySelector(".loading-preview .loading-code").innerHTML = value;
    });

    Phenix('#pds_loading_background input').on("change", isChanged => {
        //===> Get the Value <===//
        let value = isChanged.target.value;
        //===> Change the Preview <===//
        document.querySelector(".loading-preview").style.background = value;
        document.querySelector("#pds_loading_background .btn").style.background = value;
    });

    Phenix('#pds_loading_showText').on("change", isChanged => {
        //===> Get the Value <===//
        let checked = isChanged.target.checked;
        //===> Change the Preview <===//
        if (checked === false) {
            document.querySelector(".loading-preview .loading-text").classList.add("hidden");
        } else {
            document.querySelector(".loading-preview .loading-text").classList.remove("hidden");
        }
    });
});