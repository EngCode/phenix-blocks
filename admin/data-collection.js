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
    const location_template = (item) => {
        return (`<li class="flexbox divider-b align-center-y ${item.name !== "main-menu" ? 'pdy-5' : 'pdy-10'} pds-15 pde-10 mb-0">
            <!-- Location Title -->
            <span class="tx-icon fas fa-list col-5 item-title">${item.title}</span>

            <!-- Location Name -->
            <span class="tx-icon fas fa-location col-5 item-name">${item.name}</span>

            <!-- Action Buttons -->
            ${item.name !== "main-menu" ? `<div class="col-auto ms-auto flexbox">
                <button type="button" class="remove-item btn light tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
            </div>` : ""}
        </li>`)
    },

    //===> Types Template <===//
    type_template = (type) => {
        return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
            <!-- Label -->
            <span class="col w-max-260 tx-icon dashicons-before dashicons-${type.menu_icon ? type.menu_icon : "category"} col-4 item-label">${type.label}</span>

            <!-- Name -->
            <span class="col w-max-200 tx-icon far fa-link col-3 item-name">${type.name}</span>

            <!-- Singular -->
            <span class="col w-max-200 tx-icon far fa-link col-2 item-singular">${type.singular ? type.singular : type.name}</span>

            <!-- Taxonomies -->
            <span class="col tx-icon far fa-link col-2 item-taxonomies">${type.taxonomies?.length > 0 ? type.taxonomies : 'None'}</span>

            <!-- Buttons -->
            <div class="col-auto ms-auto flexbox align-center-y">
                <!-- Status -->
                <label class="small option-control me-5" data-type="switch">
                    <input type="checkbox" name="item-status" ${type.enable ? 'checked' : null}><span class="switch"></span>
                </label>
                <!-- Edit -->
                <button type="button" class="edit-item me-5 btn bg-transparent tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                <!-- Remove -->
                <button type="button" class="remove-item btn bg-transparent tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
            </div>
        </li>`);
    },

    //===> Taxonomies Template <===//
    taxonomy_template = (taxonomy) => {
        return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
            <!-- Label -->
            <span class="tx-icon far fa-boxes col-4 item-label">${taxonomy.label}</span>

            <!-- Name -->
            <span class="tx-icon far fa-link col-3 item-name">${taxonomy.name}</span>

            <!-- Types -->
            <span class="tx-icon far fa-link col-2 item-types tx-nowrap">${taxonomy.post_types?.length > 0 ? taxonomy.post_types : 'None'}</span>

            <!-- Buttons -->
            <div class="col-auto ms-auto flexbox align-center-y">
                <!-- Status -->
                <label class="small option-control me-5" data-type="switch">
                    <input type="checkbox" name="item-status" ${taxonomy.enable ? 'checked' : null}><span class="switch"></span>
                </label>
                <!-- Edit -->
                <button type="button" class="edit-item me-5 btn bg-transparent tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                <!-- Remove -->
                <button type="button" class="remove-item btn bg-transparent tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
            </div>
        </li>`);
    },

    //===> Taxonomies Template <===//
    pattern_template = (pattern) => {
        return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
            <!-- Label -->
            <span class="tx-icon far fa-boxes col w-max-260 item-label">${pattern.title}</span>

            <!-- Name -->
            <span class="tx-icon far fa-link col w-max-260 item-name">${pattern.name}</span>

            <!-- Categories -->
            <span class="tx-icon far fa-link col w-max-260 item-name">${pattern.category}</span>

            <!-- Buttons -->
            <div class="col-auto ms-auto flexbox align-center-y">
                <!-- Edit -->
                <button type="button" class="edit-item me-5 btn bg-transparent tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                <!-- Remove -->
                <button type="button" class="remove-item btn bg-transparent tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
            </div>
        </li>`);
    },

    //===> Metabox Template <===//
    metabox_template = (metabox) => {
        return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
            <!-- Label -->
            <span class="tx-icon far fa-boxes col-5 item-label">${metabox.title}</span>

            <!-- Name -->
            <span class="tx-icon far fa-link col-5 item-name">${metabox.name}</span>

            <!-- Buttons -->
            <div class="col-auto ms-auto flexbox align-center-y">
                <!-- Edit -->
                <button type="button" class="edit-item me-5 btn bg-transparent tiny square color-primary far fa-pencil fs-18" data-target="li"></button>
                <!-- Remove -->
                <button type="button" class="remove-item btn bg-transparent tiny square color-danger far fa-times-circle fs-18" data-target="li"></button>
            </div>
        </li>`);
    };

    //===> Success Notification <===//
    const data_success = (message) => {
        Phenix(document).notifications({
            type     : "success",
            message  : message,
            position : ["bottom", "end"],
        });
    };

    //===> Create New Item Method <===//
    createNewItem = (form_Controls) => {
        //===> Define Data <===//
        let new_item = {};

        //===> Get Data from Form <===//
        form_Controls.forEach(control => {
            //===> Define Data <===//
            let control_name = control.getAttribute('name'),
                control_value = getControlValue(control);

            //===> Validate Name as ID <===//
            if (control_name === 'name')  control_value = control_value.toLowerCase().replaceAll(' ','-');

            //===> Set Data <===//
            new_item[control_name] = control_value;
        });

        //===> Return Data <===//
        return new_item;
    },

    //===> Get Control Value Method <===//
    getControlValue = (control) => {
        //===> Define Data <===//
        let control_value = control.value;

        //===> if the Field is Boolean <===//
        if (control.getAttribute('type') === "checkbox") control_value = control.checked;

        //===> if the Field is Multiple Select <===//
        if (control.tagName === "SELECT" && control.getAttribute('multiple') !== null) {
            //===> Get and Filter Data <===//
            let values = Phenix(control).ancestor('.px-select').getAttribute('data-value').split(','),
                array_val = values.filter(val => val !== "");

            //===> Set Data <===//
            control_value = array_val;
        }

        //===> Return Data <===//
        return control_value;
    },

    //===> Update Controls Method <===//
    update_controls = (FormControls) => FormControls.forEach(control => {
        //===> Define Data <===//
        let control_name = control.getAttribute('name'),
            control_tag  = control.tagName,
            control_type = control.getAttribute('type');

        //===> Check for Data <===//
        if (control_name && dataItem[control_name]) {
            //===> Select Controls <===//
            if (control_tag === 'SELECT') {
                //===> Define Data <===//
                let pds_select = Phenix(control).ancestor('.px-select'),
                    data_value = typeof(dataItem[control_name]) === 'string' ? dataItem[control_name].split(' ') : dataItem[control_name];

                //===> Select the Options <===//
                control.querySelectorAll('option').forEach(option => {
                    //===> Check for Value <===//
                    if (option.value.length > 0) data_value.forEach(val => option.value === val ? option.setAttribute('selected', true) : null);
                });

                //===> Set the Value <===//
                control.value = dataItem[control_name];
                
                //===> Update PDS : Select <===//
                if (pds_select) {
                    pds_select.setAttribute('data-value', dataItem[control_name]);
                    control.dispatchEvent(new Event('update'));
                }
            }
            //===> Textarea Controls <===//
            else if (control_tag === 'TEXTAREA') {
                control.value = dataItem[control_name];
                control.textContent = dataItem[control_name];
            }
            //===> Normal Controls <===//
            else {
                //===> Checkbox Controls <===//
                if(control_type === 'checkbox') control.checked = dataItem[control_name];
                //===> Normal Inputs <===//
                else {control.value = dataItem[control_name];}
            }
        }
    }),

    //===> Reset Controls Method <===//
    reset_controls = (FormControls) => FormControls.forEach(control => {
        //===> Define Data <===//
        let control_tag = control.tagName;

        //===> Reset Value <===//
        if (control_tag === 'SELECT') {
            //===> Check for PDS <===//
            let pds_select = Phenix(control).ancestor('.px-select');

            //===> Unselect the Options <===//
            control.querySelectorAll('option[selected]').forEach(option => option.removeAttribute('selected'));

            //===> Reset Value <===//
            if (pds_select) {
                control.value = "";
                pds_select.setAttribute('data-value', "");
                control.dispatchEvent(new Event('update'));
            } else control.value = "";
        } 

        //===> Textarea Controls <===//
        else if (control_tag === 'TEXTAREA') {
            control.value = "";
            control.textContent = "";
        }

        //===> Other Controls <===//
        else control.getAttribute('type') === 'checkbox' ?  control.checked = false : control.value = "";
    });

    //===> Update List Method <===//
    const update_list = (type, list, template) => {
        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options,
                theData = current[type],
                dataList = document.querySelector(list),
                currentPage = 0,
                itemsShows  = theData.length > 9 ? 9 : theData.length,
                currentShow = itemsShows;

            //===> Clear Current Data List <===//
            dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());

            //===> Create First Page <===//
            for (let index = 0; index < itemsShows; index++) Phenix(dataList).insert('append', template(theData[index]));

            //===> Activate Next Page Button <===//
            dataList.parentNode.querySelector('.next-btn')?.addEventListener('click', () => {
                //===> Clear Current Data List <===//
                dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
                //===> Create New List <===//
                if (currentShow < theData.length) {
                    for (let index = currentShow; index < currentShow+9; index++) Phenix(dataList).insert('append', template(theData[index]));
                }
            });

            //===> Activate Prev Page Button <===//
            dataList.parentNode.querySelector('.prev-btn')?.addEventListener('click', () => {
                //===> Clear Current Data List <===//
                dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());

                //===> Create New List <===//
                if (currentShow > 9) {
                    for (let index = currentShow; index < currentShow-9; index--) Phenix(dataList).insert('append', template(theData[index]));
                }
            });

            //===> Activate Edit Method <===//
            Phenix(`${list} .edit-item`).on('click', event => edit_item(event.target));
            
            //===> Activate Remove Method <===//
            Phenix(`${list} .remove-item`).on('click', event => remove_item(event.target));

            //===> Activate Toggle Method <===//
            Phenix(`${list} input[name="item-status"]`).on('change', event => toggle_item(event.target));
            
        }).then(response => {}).catch(error => {error.message});
    },

    //===> Add Items Method <===//
    add_item = (trigger) => {
        //===> define Elements and Data <===//
        let data_form = Phenix(trigger).ancestor(".collection-form"),
            data_type = data_form.getAttribute('data-type'),
            form_Controls = data_form.querySelectorAll("input, select, textarea");

        //===> Validate Form <===//
        Phenix(...form_Controls).validation();

        //===> Check for Errors <===//
        if (!data_form.querySelector('.error')) {
            //===> Create New Item <===//
            let new_item = createNewItem(form_Controls);

            //===> Set Loading Mode <===//
            trigger.classList.add('px-loading-inline');

            //===> Get Data from Rest-API <===//
            get_options().then(options => {
                //===> Define Data <===//
                let current = options;
                //===> Find the item and Excluded from the new List <===//
                current[data_type] = current[data_type].filter(item => item['name'] !== new_item['name']);
                //===> Add the new Item <===//
                current[data_type].push(new_item);
                //===> Update Options <===//
                update_options(current).then(response => {
                    //===> Reset Loading Mode <===//
                    trigger.classList.remove('px-loading-inline');

                    //===> Show Notification <===//
                    data_success("Success : the Data has been Updated.");

                    //===> Update the List <===//
                    if (new_item['name'] && !new_item['enable']) {
                        update_list(data_type, `.${data_type}_list`, type_template);
                    } else if (new_item['enable']) {
                        window.location.reload();
                    }
                });
            }).catch(error => {error.message});
        }
    },

    //===> Remove Item Method <===//
    remove_item = (trigger) => {
        //===> Define Elements <===//
        let menu_item = Phenix(trigger).ancestor('li'),
            item_stats = menu_item.querySelector(`[name="item-status"]`)?.checked,
            item_name = Phenix(trigger).ancestor('li').querySelector('.item-name')?.textContent;

        //===> Set Loading Mode <===//
        menu_item.classList.add('px-loading-inline');

        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let data_type = Phenix(menu_item).ancestor('ul').getAttribute('data-type'),
                current = options;

            //===> Find the item and Excluded from the new List <===//
            current[data_type] = current[data_type].filter(type => type.name !== item_name);

            //===> Update Options <===//
            update_options(current).then(succuss => {
                //===> Show Notification <===//
                data_success("the Item has been Deleted.");
                //===> Update the List <===//
                item_stats ? location.reload() : update_list(data_type, `.${data_type}_list`, type_template);
            }).catch(error => {error.message});
        });
    },

    //===> Reset Item Method <===//
    reset_item = (trigger) => {
        //===> Define Elements <===//
        let data_target = trigger.getAttribute('data-reset');

        //===> Set Loading Mode <===//
        trigger.classList.add('px-loading-inline');

        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options;

            //===> Set Data <===//
            current.pds_reset = data_target;

            //===> Update Options <===//
            update_options(current).then(succuss => {
                //===> Show Notification <===//
                data_success("the Data has been Reset.");
                //===> Reload Page <===//
                location.reload();
            }).catch(error => {error.message});
        });
    },

    //===> Toggle Item Method <===//
    toggle_item = (trigger) => {
        //===> Define Elements <===//
        let item_stats = trigger.checked,
            menu_item = Phenix(trigger).ancestor('li'),
            dataType = Phenix(menu_item).ancestor('ul').getAttribute('data-type'),
            item_name = Phenix(trigger).ancestor('li').querySelector('.item-name')?.textContent;

        //===> Set Loading Mode <===//
        menu_item.classList.add('px-loading-inline');

        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options;
            //===> Find the item and change its status <===//
            current[dataType] = current[dataType].map(item => item.name === item_name ? {...item, enable: item_stats} : item);
            //===> Update Options <===//
            update_options(current).then(succuss => {
                //===> Show Notification <===//
                data_success("the Item has been Disabled.");
                //===> Reload Page <===//
                location.reload();
            }).catch(error => {error.message});
        });
    },

    //===> Edit Item Method <===//
    edit_item = (trigger) => {
        //===> Define Elements <===//
        let menu_item = Phenix(trigger).ancestor('li'),
            dataType  = Phenix(menu_item).ancestor('ul').getAttribute('data-type'),
            data_form = Phenix(`#${dataType}_form`),
            item_name = Phenix(trigger).ancestor('li').querySelector('.item-name')?.textContent;

        //===> Define Data and Get Controls <===//
        let FormControls = data_form[0].querySelectorAll('input, select, textarea');

        //===> Reset Controls <===//
        reset_controls(FormControls);

        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options
            //===> Get the Required Item <===//
            dataItem = current[dataType].find(item => item.name === item_name);

            //===> Check for Data Item <===//
            if (dataItem) {
                update_controls(FormControls);
                data_form.addClass('active').removeClass('hidden').fadeIn(500, 'flex');
            }
        });
    };

    //===> Initial Data <===//
    update_list("pds_types", ".pds_types_list", type_template);
    update_list("menu_locations", ".menu_locations_list", location_template);
    update_list("pds_taxonomies", ".pds_taxonomies_list", taxonomy_template);
    update_list("block_patterns", ".block_patterns_list", pattern_template);
    update_list("pds_metabox", ".pds_metabox_list", metabox_template);

    //===> Add Item Trigger <===//
    Phenix('.collection-form .add-item').on('click', event => add_item(event.target));
    //===> Reset Data Trigger <===//
    Phenix('.pds-reset-data').on('click', event => reset_item(event.target));
});