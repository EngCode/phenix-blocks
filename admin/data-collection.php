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
                    "title" => "Post Types",
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
                ),
                //==> Patterns Panel <==//
                array(
                    "title" => "Block Patterns",
                    "slug"  => "pds-patterns",
                    "icon"  => "far fa-file-alt",
                    "content" => 'pds_types_panel',
                ),
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

            //===> Return Response <===//
            return await response;
        }

        //===> Data Templates <===//
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

        type_template = (type) => {
            return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
                <!-- Label -->
                <span class="tx-icon dashicons-before dashicons-${type.menu_icon ? type.menu_icon : "category"} col-4 item-label">${type.label}</span>

                <!-- Name -->
                <span class="tx-icon far fa-link col-3 item-name">${type.name}</span>

                <!-- Singular -->
                <span class="tx-icon far fa-link col-2 item-singular">${type.singular ? type.singular : type.name}</span>

                <!-- Buttons -->
                <div class="col-auto ms-auto flexbox align-center-y">
                    <!-- Status -->
                    <label class="small option-control me-5" data-type="switch">
                        <input type="checkbox" name="item-status" ${type.enable ? 'checked' : null}><span class="switch"></span>
                    </label>
                    <!-- Edit -->
                    <button type="button" class="edit-item me-5 btn light tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                    <!-- Remove -->
                    <button type="button" class="remove-item btn light tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
                </div>
            </li>`);
        },

        //===> Success Notification <===//
        data_success = (message) => {
            Phenix(document).notifications({
                type     : "success",
                message  : message,
                position : ["bottom", "end"],
            });
        },

        //===> Update Method <===//
        update_list = (type, list, template) => {
            //===> Get Data from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let current = options,
                    theData = current[type];
                    dataList = document.querySelector(list);
    
                //===> Clear Current Data List <===//
                dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
    
                //===> Create New List <===//
                if (type === "menu_locations") {
                    for (const [key, value] of Object.entries(theData)) Phenix(dataList).insert('append', template(key, value));
                } else {
                    theData.forEach(item => Phenix(dataList).insert('append', template(item)));
                }

                //===> Activate Remove Method <===//
                Phenix(`${list} .remove-item`).on('click', event => remove_item(event.target));
            }).then(response => {}).catch(error => {error.message});
        },

        //===> Add Items Method <===//
        add_new_item = (trigger) => {
            //===> Get Elements <===//
            let data_form = Phenix(trigger).ancestor(".collection-form"),
                data_type = data_form.getAttribute('data-type'),
                form_Controls = data_form.querySelectorAll("input, select, textarea");

            //===> Define Data <===//
            let new_type = {},
                new_location = {};

            //===> Validate Controls <===//
            Phenix(...form_Controls).validation();

            //===> if the Controls is valid <===//
            if (!data_form.querySelector('.error')) {
                //===> Controls Handle <===//
                form_Controls.forEach(control => {
                    //===> Define Data <===//
                    let control_name = control.getAttribute('name');
                    
                    //===> Check the Control <===//
                    if (control_name) {
                        //===> Correct Locations <===//
                        if (data_type === "menu-locations") {
                            //===> Validate the Location Name <===//
                            if (control_name === 'location-name' && !control.value) {
                                //===> if "name" not exist get it from the Title <===//
                                let location_name = Phenix('[name="location-title"]')[0].value.toLowerCase().replaceAll(' ','-');
                                new_location[control_name.replace('location-', '')] = location_name.toLowerCase().replaceAll(' ','-');
                            }
    
                            //===> Add the new Location Title <===//
                            else new_location[control_name.replace('location-', '')] = control.value;
                        }
    
                        //===> Post Types <===//
                        else if (data_type === "post-types") {
                            //===> Define Data <===//
                            control_name = control_name.replace('type-', '');

                            //===> Check Name <===//
                            if (!control.value && control_name === "name") new_type[control_name] = new_type["label"].toLowerCase().replaceAll(' ','-');

                            //===> Check Status <===//
                            else if (control_name === "enable") new_type[control_name] = control.value === "on" ? true : false;

                            //===> Set the Value <===//
                            else if (control.value || control_name == "taxonomies") new_type[control_name] = control.value.length > 0 ? control.value : [];
                        }
                    }
                });

                //===> Set Loading Mode <===//
                trigger.classList.add('px-loading-inline');

                //===> Update Data List <===//
                get_options().then(options => {
                    //===> Define Data <===//
                    let current = options;

                    //===> Set Locations <===//
                    if (new_location['name']) {
                        current.menu_locations[new_location['name']] = new_location['title'];
                    }

                    //===> Set Types <===//
                    else if (new_type['name']) {
                        //===> Check for Existing <===//
                        let alreadyExist = false;
                        current.pds_types.forEach(type => type['name'] === new_type['name'] ? alreadyExist = true : null);

                        //===> add the New Type <===//
                        if (!alreadyExist) current.pds_types.push(new_type);
                    }

                    //===> Update Options <===//
                    update_options(options).then(response => {
                        //===> Remove Loading Mode <===//
                        trigger.classList.remove('px-loading-inline');
    
                        //====> Show Notifications <====//
                        data_success("Success : the Data has been Updated.");

                        //===> Update Types <===//
                        if (new_type['name']) {
                            !new_type['enable'] ? update_list("pds_types", ".types-list", type_template) : location.reload();
                        }

                        //===> Update Locations <===//
                        else if (new_location['name']) {
                            update_list("menu_locations", ".locations-list", location_template);
                        }
                    });
                }).catch(error => {error.message});
            }
        },

        //===> Remove Item Method <===//
        remove_item = (trigger) => {
            //===> Define Elements <===//
            let menu_item = Phenix(trigger).ancestor('li'),
                menu_element = Phenix(menu_item).ancestor('ul'),
                item_name = Phenix(trigger).ancestor('li').querySelector('.item-name')?.textContent;

            //===> Set Loading Mode <===//
            menu_item.classList.add('px-loading-inline');
            
            //===> Get Location from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let current = options;

                //===> for Locations <===//
                if (menu_element.classList.contains('locations-list')) {
                    delete current.menu_locations[`${item_name}`];
                }

                //===> for Types <===//
                else if (menu_element.classList.contains('types-list')) {
                    //===> Define Data <===//
                    let new_types = [];

                    current.pds_types.forEach((type, index) => {
                        if(type.name !== item_name) new_types.push(type);
                    });
                    
                    current.pds_types = new_types;
                }

                //===> Update Options <===//
                update_options(current).then(succuss => {
                    //===> Show Notification <===//
                    data_success("the Item has been Deleted.");

                    //===> Update Types <===//
                    if (menu_element.classList.contains('types-list')) {
                        update_list("pds_types", ".types-list", type_template);
                    }

                    //===> Update Locations <===//
                    else if (menu_element.classList.contains('locations-list')) {
                        update_list("menu_locations", ".locations-list", location_template);
                    }
                }).catch(error => {error.message});
            });
        };

        //===> Initial Data <===//
        update_list("pds_types", ".types-list", type_template);
        update_list("menu_locations", ".locations-list", location_template);

        //===> Add Item Trigger <===//
        Phenix('.collection-form .add-item').on('click', event => add_new_item(event.target));
    });
</script>
<!-- Phenix Script -->
<?php include(dirname(__FILE__) . '/modules/scripts.php'); ?>