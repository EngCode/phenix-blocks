<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/', 'assets/img/blocks/core/', $assets_url);

    //===> Types Panel <===//
    if (!function_exists('pds_types_panel')) {
        function pds_types_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/post-types.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Taxonomies Panel <===//
    if (!function_exists('pds_taxonomies_panel')) {
        function pds_taxonomies_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/taxonomies.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Locations Panel <===//
    if (!function_exists('pds_menus_locations_panel')) {
        function pds_menus_locations_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/locations.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Metaboxes Panel <===//
    if (!function_exists('pds_metabox_panel')) {
        function pds_metabox_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/metabox.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //====> Create Page <====//
    if (function_exists('pds_add_admin_page')) :
        //===> Create New Page <===//
        echo pds_add_admin_page(
            //==> Page Title <==//
            'Custom Data Collection',
            //==> Page Description <==//
            'here you can add and remove Dynamic Custom Data like Post Types, Taxonomies, Menu Locations, Metaboxes for your data.',
            //==> Options Form Slug <==//
            'pds-data-collection',
            //==> Tabs List <==//
            array(
                //==> Locations Panel <==//
                array(
                    "title" => "Menu Locations",
                    "slug"  => "pds-locations",
                    "icon"  => "far fa-list",
                    "content" => 'pds_menus_locations_panel',
                ),
                //==> Types Panel <==//
                array(
                    "title" => "Data Types",
                    "slug"  => "pds-types",
                    "icon"  => "far fa-cube",
                    "content" => 'pds_types_panel',
                ),
                //==> Taxonomies Panel <==//
                array(
                    "title" => "Taxonomies",
                    "slug"  => "pds-taxonomy",
                    "icon"  => "far fa-boxes",
                    "content" => 'pds_taxonomies_panel',
                ),
                //==> Meta Boxes Panel <==//
                array(
                    "title" => "Metaboxes",
                    "slug"  => "pds-metabox",
                    "icon"  => "far fa-layer-group",
                    "content" => 'pds_metabox_panel',
                )
            ),
            //==> Hide Submit Button <==//
            false
        );
    endif;
?>
<!-- Form Script -->
<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //===> Get Options Method <===//
        async function get_options() {
            //===> Connect to the API <===//
            const response = await fetch(`${PDS_WP_KEY.root}options`, {
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

        //===> Update Options Method <===//
        async function update_options(options) {
            //===> Get Data <===//
            let data = {...options};

            //===> Connect to the API <===//
            const response = await fetch(`${PDS_WP_KEY.root}options`, {
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

        //===> Items Templates <===//
        const location_template = (key, value) => {
            return (`<li class="flexbox divider-b align-center-y ${key !== "main-menu" ? 'pdy-5' : 'pdy-10'} pds-15 pde-10 mb-0">
                <!-- Location Title -->
                <span class="tx-icon fas fa-list col-5 item-title">${value}</span>

                <!-- Location Name -->
                <span class="tx-icon fas fa-location col-5 item-name">${key}</span>

                <!-- Action Buttons -->
                ${key !== "main-menu" ? `<div class="col-auto ms-auto flexbox">
                    <button type="button" class="remove-item btn light tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
                </div>` : ""}
            </li>`)
        },

        //===> Menu Locations Method <===//
        update_locations_list = () => {
            //===> Get Location from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let current   = options,
                    locations = current['menu_locations'];
                    locations_list = document.querySelector('.locations-list');

                //===> Clear Current Data List <===//
                locations_list?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());

                //===> Create New List <===//
                for (const [key, value] of Object.entries(locations)) {
                    //===> Insert the Location in the List <===//
                    Phenix(locations_list).insert('append', location_template(key, value));
                }

                //===> Remove Item Method <===//
                Phenix('.locations-list .remove-item').on('click', button => {
                    //===> Define Elements <===//
                    let menu_item = Phenix(button.target).ancestor('li'),
                        menu_name = Phenix(button.target).ancestor('li').querySelector('.item-name')?.textContent;

                    //===> Set Loading Mode then Delete the Location <===//
                    menu_item.classList.add('px-loading-inline');
                    delete current.menu_locations[`${menu_name}`];

                    //===> Update Options <===//
                    update_options(current).then(succuss => {
                        //====> Show Notifications <====//
                        Phenix(document).notifications({
                            type     : "success", //=== Message Type [normal, error, success, warning]
                            message  : "the Location has been Deleted.", //=== Message Content
                            position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
                        });
                    }).catch(error => {error.message});
                });
            }).then(response => {}).catch(error => {error.message});
        }

        //===> Initial Locations List <===//
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
                        //===> if "name" not exist get it from the Title <===//
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
                get_options().then(options => {
                    //===> Define Data <===//
                    let current = options;

                    //===> add/update the location <===//
                    current.menu_locations[new_location['name']] = new_location['title'];

                    //===> Update Options <===//
                    update_options(options).then(response => {
                        //===> Remove Loading Mode <===//
                        isClicked.target.classList.remove('px-loading-inline');

                        //====> Show Notifications <====//
                        Phenix(document).notifications({
                            type: "success",
                            message: "Success : the Location has been Added/Updated.",
                            position: ["bottom", "end"],
                        });
                    });
                }).catch(error => {error.message});
            }
        });
    });
</script>
<!-- Phenix Script -->
<?php include(dirname(__FILE__) . '/modules/scripts.php'); ?>