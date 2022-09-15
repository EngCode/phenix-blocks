<?php
    //====> Shared Options <====//
    $api_url    = site_url().'/wp-json/wp/v2/settings';
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url  = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-30">
        <!-- Area Title -->
        <h3 class="fs-16 mb-5 weight-medium"><?php echo px__('Add New Location'); ?></h3>
        <p class="mb-20 fs-14">you can add new menu locations from below form.</p>
        <!-- Form Control -->
        <div class="control-icon far fa-windsock mb-15">
            <input type="text" name="location-title" class="form-control radius-md border-alpha-10" placeholder="Location Title">
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-location mb-15">
            <input type="text" name="location-name" class="form-control radius-md border-alpha-10" placeholder="location-name">
        </div>
        <!-- Form Control -->
        <button type="button" name="add-location" class="btn primary radius-sm small ms-auto display-block"><?php echo px__('Add Location'); ?></button>
        <!-- Custom Script -->
        <script defer>            
            document.addEventListener('DOMContentLoaded', ready => {
                //===> Create Async Function <===//
                async function add_location() {
                    //===> Wait Until it Connect to the API <===//
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
                    //===> Get the Response Data <===//
                    const response_json = await response.json();

                    console.log(response_json);
                    
                    //===> Return Data <===//
                    return response_json;
                }

                add_location().catch(error => {
                    error.message;
                });
            });
        </script>
    </div>
    <!-- Column -->
    <div class="col-12 col-lg-6 pdy-10">
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
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm">
            <li class="flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-5">Location Title</span>
                <span class="col-5">Location Name</span>
            </li>
            <?php foreach (get_option('pds_menu_locations') as $key => $value) { ?>
            <li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
                <span class="tx-icon fas fa-windsock col-5 item-title"><?php echo $value; ?></span>
                <span class="tx-icon fas fa-location col-5 item-name"><?php echo $key; ?></span>
                <div class="col-auto ms-auto flexbox">
                    <button type="button" class="edit-item btn light tiny square color-gray far fa-pencil"></button>
                    <button type="button" class="remove-item btn light tiny square color-danger far fa-times-circle" data-target="li"></button>
                </div>
            </li>
            <?php } ?>
        </ul>
        
    </div>
</div>
<!-- // Grid Layout -->