<?php
    //====> Shared Options <====//
    $api_url    = site_url().'/wp-json/pds-blocks/v1/options';
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
            <input type="text" name="add-location-name" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('location-name');?>" required>
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
            <!-- Form Control -->
            <button type="button" name="update-location" class="btn primary radius-sm tiny ms-auto display-block"><?php echo px__('Update'); ?></button>
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
        //===> Add New Location <===//
        async function get_locations() {
            //===> Connect to the API <===//
            const response = await fetch('<?php echo $api_url; ?>', {
                method : 'GET', //===> [GET, POST, PUT, DELETE].
                headers: {      //===> WP Cookies Auth
                    "Content-Type": "application/json",
                    "X-WP-Nonce": PDS_WP_DATA.nonce
                },
            });

            //===> if Connection Faild <===//
            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            //===> Get Data as JSON <===//
            const response_json = await response.json();

            //===> Return Data <===//
            return response_json['pds_menu_locations'];
        }

        //===> Add New Location <===//
        async function add_location(locations) {
            //===> Data to Fetch <===//
            let data = {
                "pds_menu_locations": locations
            };

            //===> Connect to the API <===//
            const response = await fetch('<?php echo $api_url; ?>', {
                method : 'POST', //===> [GET, POST, PUT, DELETE].
                headers: {      //===> WP Cookies Auth
                    "Content-Type": "application/json",
                    "X-WP-Nonce": PDS_WP_DATA.nonce
                },
                body : JSON.stringify(data)
            });

            console.log(response);
            console.log(JSON.stringify(data));

            //===> Update Locations List <===//
            update_locations_list();

            //===> Return Response <===//
            return await response;
        }

        //===> Get Saved Locations <===//
        const update_locations_list = () => {
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
                        <div class="col-auto ms-auto flexbox">
                            <button type="button" class="edit-item btn light tiny square color-gray far fa-pencil"></button>
                            <button type="button" class="remove-item btn light tiny square color-danger far fa-times-circle" data-target="li"></button>
                        </div>
                    </li>`);
                }
            }).catch(error => {error.message});
        }

        update_locations_list();

        //===> Add Location Button <===//
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
                    let control_name = control.getAttribute('name').replace('add-location-','');
                    new_location[control_name] = control.value;
                }
            });

            //===> if has new Location <===//
            if (new_location['title']) {
                //===> Get Locations <===//
                get_locations().then(locations => {
                    //===> add the new location to the current ones <===//
                    locations[new_location['name']] = new_location['title'];

                    //===> Update Locations <===//
                    add_location(locations);
                }).catch(error => {error.message});
            }
        });
    });
</script>
