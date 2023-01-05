<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url  = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20">
        <!-- Area Title -->
        <h3 class="fs-16 mb-5 weight-medium"><?php echo px__('Add New Location'); ?></h3>
        <p class="mb-20 fs-14"><?php echo px__('you can add new menu locations from below form.'); ?></p>
        <!-- Form Control -->
        <div class="control-icon far fa-list mb-15">
            <input type="text" name="add-location-title" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('Location Title');?>" required>
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-location mb-15">
            <input type="text" name="add-location-name" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('location-name');?>">
        </div>
        <!-- Form Control -->
        <button type="button" name="add-location-btn" class="btn primary radius-sm small ms-auto display-block"><?php echo px__('Add Location'); ?></button>
    </div>
    <!-- Column -->
    <div class="col col-lg-6 pdy-10">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-5 weight-medium"><?php echo px__('Menu Locations'); ?></h3>
                <p class="fs-14"><?php echo px__('in here you can manage the menu locations created by phenix-blocks.'); ?></p>
            </div>
        </div>
        <!-- Locations List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm locations-list">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-5"><?php echo px__('Location Title'); ?></span>
                <span class="col-5"><?php echo px__('Location Name'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->

<!-- Form Script -->
<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //===> Get Current Locations <===//
        async function get_locations() {
            //===> Connect to the API <===//
            const response = await fetch(`${PDS_WP_KEY.root}options/pds_menu_locations`, {
                method : 'GET', //===> [GET, POST, PUT, DELETE].
                headers: {      //===> WP Cookies Auth
                    "Content-Type": "application/json",
                    "X-WP-Nonce": PDS_WP_KEY.nonce
                },
                credentials: "same-origin",
            });

            //===> Return Data <===//
            return response.json();
        }

        //===> Add New Location <===//
        async function add_location(locations) {
            //===> Get Data <===//
            let data = {"locations" : locations};

            //===> Connect to the API <===//
            const response = await fetch(`${PDS_WP_KEY.root}options/pds_menu_locations`, {
                method : 'POST', //===> [GET, POST, PUT, DELETE].
                headers: {       //===> WP Cookies Auth
                    "X-WP-Nonce"   : PDS_WP_KEY.nonce,
                    "Content-Type" : "application/json",
                },
                credentials: "same-origin",
                body : JSON.stringify(data)
            });

            //===> Update Locations List <===//
            update_locations_list();

            //===> Return Response <===//
            return await response;
        }

        //===> Get Saved Locations <===//
        const update_locations_list = () => {
            //===> Get Location from Rest-API <===//
            get_locations().then(locations => {
                //===> Clear Current Locations <===//
                let locations_list = document.querySelector('.locations-list');
                locations_list?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
                //===> Create Locations List <===//
                for (const [key, value] of Object.entries(locations)) {
                    //===> Insert the Location in the List <===//
                    Phenix(locations_list).insert('append', `<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
                        <!-- Location Title -->
                        <span class="tx-icon fas fa-list col-5 item-title">${value}</span>
    
                        <!-- Location Name -->
                        <span class="tx-icon fas fa-location col-5 item-name">${key}</span>
    
                        <!-- Action Buttons -->
                        ${key !== "main-menu" ? `<div class="col-auto ms-auto flexbox">
                            <button type="button" class="remove-item btn light tiny square color-danger far fa-times-circle" data-target="li"></button>
                        </div>` : ""}
                    </li>`);
                    //===> Remove Item Method <===//
                    Phenix('.locations-list .remove-item').on('click', button => {
                        let menu_item = Phenix(button.target).ancestor('li'),
                            menu_name = Phenix(button.target).ancestor('li').querySelector('.item-name')?.textContent;
                        //===> Set Loading Mode <===//
                        menu_item.classList.add('px-loading-inline');
                        //===> Loop Throgh Locations <===//
                        for (const [key, value] of Object.entries(locations)) {
                            //===> When the item matches the locations <===//
                            if (menu_name === `${key}`) {
                                //===> Delete the Location <===//
                                delete locations[`${key}`];
                                //===> Update Locations <===//
                                add_location(locations);
                                //====> Show Notifications <====//
                                Phenix(document).notifications({
                                    type     : "success", //=== Message Type [normal, error, success, warning]
                                    message  : "the Location has been Deleted.", //=== Message Content
                                    position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
                                });
                            }
                        }
                    }, true);
                }
            }).then(response => {
            }).catch(error => {error.message});
        }

        update_locations_list();

        //===> Add Location Form <===//
        document.querySelector('[name="add-location-btn"]')?.addEventListener('click', isClicked => {
            //===> Get Controls Elements <===//
            let form_Controls = Phenix('[name*="add-location"]:not(.btn)'),
                new_location  = {};

            //===> Get Controls Values <===//
            form_Controls.forEach(control => {
                //===> Validate Control <===//
                Phenix(control).validation();

                //===> if its valid control <===//
                if (!control.matches('.error')) {
                    //===> Get Control Name [title, name] <===//
                    let control_name = control.getAttribute('name').replace('add-location-','');

                    //===> Validate the Location Name <===//
                    if (control_name === 'name' && !control.value) {
                        //===> if "name" not exist grap it from the Title <===//
                        let location_name = Phenix('[name="add-location-title"]')[0].value.toLowerCase().replaceAll(' ','-');
                        new_location[control_name] = location_name.toLowerCase().replaceAll(' ','-');
                    //===> Add the new Location Title <===//
                    } else {
                        new_location[control_name] = control.value;
                    }
                }
            });

            //===> if has new Location <===//
            if (new_location['name']) {
                //===> Set Loading Mode <===//
                isClicked.target.classList.add('px-loading-inline');
                
                //===> Update Locations List <===//
                get_locations().then(locations => {
                    //===> Check if its Exist <===//
                    let alreadyExist = locations[new_location['name']];
                    
                    //===> Update Locations <===//
                    if (!alreadyExist) {
                        //===> add the new location to the current ones <===//
                        locations[new_location['name']] = new_location['title'];

                        //===> Post the New Location <===//
                        add_location(locations).then(response => {
                            //===> Remove Loading Mode <===//
                            isClicked.target.classList.remove('px-loading-inline');
                            //====> Show Notifications <====//
                            Phenix(document).notifications({
                                type     : "success", //=== Message Type [normal, error, success, warning]
                                message  : "Success : the New Location has been Added.", //=== Message Content
                                position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
                            });
                        });
                    } else {
                        //====> Show Error <====//
                        Phenix(document).notifications({
                            type     : "error", //=== Message Type [normal, error, success, warning]
                            message  : "Error The Location Already Exist.", //=== Message Content
                            position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
                        });

                        //===> Remove Loading Mode <===//
                        isClicked.target.classList.remove('px-loading-inline');
                    }
                }).catch(error => {error.message});
            }
        });
    });
</script>