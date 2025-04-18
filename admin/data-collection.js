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

    //===> Pattern Template <===//
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
        return (`<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0 flow-nowrap">
            <!-- Label -->
            <span class="tx-icon far fa-boxes col-3 tx-nowrap item-label">${metabox.label}</span>

            <!-- Name -->
            <span class="tx-icon far fa-link col-3 w-max-200 tx-nowrap item-name">${metabox.name}</span>
            
            <!-- Fields -->
            <span class="tx-icon far fa-link w-100 item-name pds-15">${metabox.fields.length}</span>

            <!-- Data Type -->
            <span class="tx-icon far fa-link w-150 item-name">${metabox.datatype}</span>

            <!-- Data Locations -->
            <span class="col tx-icon far fa-link col-3 item-name">${metabox.post_types.length > 0 ? metabox.post_types : metabox.taxonomies}</span>

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
                isFormRepeater = Phenix(control).ancestor('.px-form-repeater') || false,
                control_value = getControlValue(control);

            //===> Validate Name as ID <===//
            if (control_name === 'name')  control_value = control_value.toLowerCase().replaceAll(' ','-');

            //===> if Repeater Array <===//
            if (isFormRepeater) {
                //===> Convert to Keys <===//
                let control_keys = control_name.split('[').map(key => key.replace(']', ''));

                console.log(control_keys);

                //===> Create the keys if not exist <===//
                let fields_key = control_keys[0],
                    fields_row = control_keys[1],
                    field_name = control_keys[2];

                //===> Create the fields Array if not Existed <===//
                if (!new_item[fields_key]) new_item[fields_key] = [];
                if (!new_item[fields_key][parseInt(fields_row)]) new_item[fields_key][parseInt(fields_row)] = {};

                //===> Set the new Data <===//
                new_item[fields_key][parseInt(fields_row)][field_name] = control_value;
            } else {
                //===> Set Data <===//
                new_item[control_name] = control_value;
            }
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
        let isFormRepeater = Phenix(control).ancestor('.px-form-repeater') || false,
            control_name = control.getAttribute('name'),
            control_tag  = control.tagName,
            control_data = dataItem[control_name],
            control_type = control.getAttribute('type');

        //===> Check if its a Repeater Control <===//
        if (isFormRepeater) {
            //===> Get Data <===//
            let repeaterKey = isFormRepeater.getAttribute('data-fields-key'),
                repeaterRow = Phenix(control).ancestor(`.px-form-repeater-fields`).getAttribute('data-item-key'),
                real_name   = control_name.replace(`${repeaterKey}`, '').replace(`[${repeaterRow}]`, '').replace('[', '').replace(']', '');
            //===> Correct Data <===//
            control_data = dataItem[repeaterKey][parseInt(repeaterRow)][real_name];
        }

        //===> Check for Data <===//
        if (control_name && control_data) {
            //===> Select Controls <===//
            if (control_tag === 'SELECT') {
                //===> Define Data <===//
                let pds_select = Phenix(control).ancestor('.px-select'),
                    data_value = typeof(control_data) === 'string' ? control_data.split(' ') : control_data;

                //===> Select the Options <===//
                control.querySelectorAll('option').forEach(option => {
                    //===> Check for Value <===//
                    if (option.value.length > 0) data_value.forEach(val => option.value === val ? option.setAttribute('selected', true) : null);
                });

                //===> Set the Value <===//
                control.value = control_data;
                
                //===> Update PDS : Select <===//
                if (pds_select) Phenix(control).rebuildSelect();
            }
            //===> Textarea Controls <===//
            else if (control_tag === 'TEXTAREA') {
                control.value = control_data;
                control.textContent = control_data;
            }
            //===> Normal Controls <===//
            else {
                //===> Checkbox Controls <===//
                if(control_type === 'checkbox') control.checked = control_data;
                //===> Normal Inputs <===//
                else {control.value = control_data;}
            }
        }
    }),

    //===> Reset Controls Method <===//
    reset_controls = (FormControls, FormElement) => {
        //===> Repeater Reset <====//
        FormElement.querySelectorAll('[data-item-key]').forEach(repeater => {
            if (parseInt(repeater.getAttribute('data-item-key')) > 1) repeater.remove();
        });

        //===> Reset Controls <====//
        FormControls.forEach(control => {
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
    }

    //===> Update List Method <===//
    const update_list = (type, list, template) => {
        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options,
                theData  = current[type],
                dataList = document.querySelector(list),
                pagesInfo = dataList.parentNode.querySelector('.pagination-info'),
                currentPage = parseInt(dataList.getAttribute('data-current-page')) || 1,
                dataPages   = {},
                itemsShows  = theData.length > 10 ? 10 : theData.length;

            //===> Create Pagination from the Data <===//
            for(let item = 0; item < theData.length; item += itemsShows) {
                //===> Define Page Number <===//
                let pageNumber = Math.floor(item / itemsShows) + 1;

                //===> Add item to Pages Object <===//
                dataPages[pageNumber] = theData.slice(item, item + itemsShows);
            }
            
            //===> Update Pagination Info <===//
            if (pagesInfo) pagesInfo.textContent = `1/${Object.keys(dataPages).length}`;

            //===> if it is only one page hide the pagination <===//
            if (Object.keys(dataPages).length === 1) dataList.parentNode.querySelector('.data-pagination')?.classList.add('hidden');

            //===> show pagination if its more then one page <===//
            else if (Object.keys(dataPages).length > 1) dataList.parentNode.querySelector('.data-pagination')?.classList.remove('hidden');

            //===> Set Current Page to the List <===//
            dataList.setAttribute('data-current-page', currentPage);

            //===> Pagination Method <===//
            const paginationButton = (event) => {
                //===> Get the icons List Wrapper <====//
                let element = event.target,
                    buttonTarget = element.getAttribute('data-page');

                //===> Get Next Page <===//
                if (buttonTarget === 'next') {
                    //===> Exit if Last Page <===//
                    if (currentPage === Object.keys(dataPages).length) return;

                    //===> Change to Next Page <===//
                    currentPage = currentPage + 1;

                    //===> Clear Current Page <===//
                    dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());

                    //===> Create Page <===//
                    dataPages[currentPage].forEach(item => Phenix(dataList).insert('append', template(item)));
                }
    
                //===> Get Previous Page <===//
                else if (buttonTarget === 'previous') {
                    //===> Exit if First Page <===//
                    if (currentPage === 1) return;
                    //===> Change to Previous Page <===//
                    currentPage = currentPage - 1;
                    //===> Clear Current Page <===//
                    dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
                    //===> Create Page <===//
                    dataPages[currentPage].forEach(item => Phenix(dataList).insert('append', template(item)));
                }

                //===> Update Pagination Info <===//
                if (pagesInfo) pagesInfo.textContent = `${currentPage}/${Object.keys(dataPages).length}`;

                //===> Activate Edit Method <===//
                dataList.querySelectorAll(".edit-item").forEach(item => item.addEventListener('click', event => edit_item(event.target)));
                //===> Activate Remove Method <===//
                dataList.querySelectorAll(".remove-item").forEach(item => item.addEventListener('click', event => remove_item(event.target)));
                //===> Activate Toggle Method <===//
                dataList.querySelectorAll("input[name='item-status']").forEach(item => item.addEventListener('change', event => toggle_item(event.target)));
            };

            //===> Clear Current Data List <===//
            dataList?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());

            //===> Create First Page <===//
            dataPages[currentPage].forEach(item => Phenix(dataList).insert('append', template(item)));

            //===> Activate Next Page Button <===//
            dataList.parentNode.querySelector('.next-btn')?.addEventListener('click', paginationButton);

            //===> Activate Prev Page Button <===//
            dataList.parentNode.querySelector('.prev-btn')?.addEventListener('click', paginationButton);

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

                //===> Fix Empty Array <===//
                if (typeof(current[data_type]) === "string") current[data_type] = [];

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
                        //===> Get the Correct Template <===//
                        let correct_template = location_template;
                        if (current[data_type] === "pds_taxonomies") correct_template = taxonomy_template;
                        else if (current[data_type] === "block_patterns") correct_template = pattern_template;
                        else if (current[data_type] === "pds_metabox") correct_template = metabox_template;
                        else if (current[data_type] === "pds_types") correct_template = type_template;
                        
                        //===> Update the List <===//
                        update_list(current[data_type], `.${data_type}_list`, correct_template);

                        //===> Close the Form <===//
                        Phenix('.px-modal.active').fadeOut(500).removeClass('active');
                        //===> Refresh <===//
                        setTimeout(()=>window.location.reload(), 500);
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
            item_stats = menu_item.querySelector(`[name="item-status"]`)?.checked || false,
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
                //===> Get the Correct Template <===//
                let correct_template = location_template;
                if (current[data_type] === "pds_taxonomies") correct_template = taxonomy_template;
                else if (current[data_type] === "block_patterns") correct_template = pattern_template;
                else if (current[data_type] === "pds_metabox") correct_template = metabox_template;
                else if (current[data_type] === "pds_types") correct_template = type_template;

                //===> Update the List <===//
                item_stats ? location.reload() : update_list(data_type, `.${data_type}_list`, correct_template);
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
        reset_controls(FormControls, data_form[0]);

        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options
            //===> Get the Required Item <===//
            dataItem = current[dataType].find(item => item.name === item_name);

            //===> Metaboxes Repeater Pre-Set Data <===//
            if (dataType === "pds_metabox") {
                //===> Get the Fields List <===//
                let fields = dataItem.fields;
                //===> Get the First Row of the Repeater <===//
                let fields_row = Phenix('[data-fields-key="fields"] [data-item-key="0"]')[0];

                //===> Clone the Row as much as Fields <===//
                fields.forEach((field, index) => {
                    //===> Skip the First Row <===//
                    if (index === 0) return;

                    //===> Create New Row <===//
                    let newRow = fields_row.parentNode.appendChild(fields_row.cloneNode(true));

                    //===> Increase the Row Number <===//
                    newRow.setAttribute("data-item-key", index);

                    //===> Set the Row Number in the Fields Name <===//
                    newRow.querySelectorAll("[name]").forEach((element) => {
                        //====> Get the Row Field Name <====//
                        let name = element.getAttribute("name");
                        //====> Get the Original Name <====//
                        let originalName = element.getAttribute('data-original-name');
                        //====> Set the Value <====//
                        element.value = field[originalName];
                        //====> Set the Name <====//
                        element.setAttribute("name", `fields[${index}][${originalName}]`);
                    });
                });
            };

            //===> Check for Data Item <===//
            if (dataItem) {
                //====> Re-Select Controls <====//
                FormControls = data_form[0].querySelectorAll('input, select, textarea');

                //====> Update Controls Values <===//
                update_controls(FormControls);

                //===> Show the Form <===//
                data_form.addClass('active').removeClass('hidden').fadeIn(500, 0, 'flex');
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

    //===> Data Exporter <===//
    Phenix('.pds-data-exporter').on('click', event => {
        //===> ...Default... <===//
        event.preventDefault();
        let dataTarget = event.target.getAttribute('data-target');

        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options,
                data = JSON.stringify(current[dataTarget]);

            //===> Create the Element <===//
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
            element.setAttribute('download', `${dataTarget}.json`);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }).catch(error => {error.message});
    });

    //===> Data Importer <===//
    Phenix('.pds-data-importer').on('change', event => {
        //===> Get the File <===//
        let file = event.target.files[0],
            dataTarget = event.target.getAttribute('data-target');

        //===> Check for File <===//
        if (file) {
            //===> Define Data <===//
            let reader = new FileReader();

            //===> Read the File <===//
            reader.readAsText(file, "UTF-8");

            //===> On Load <===//
            reader.onload = (event) => {
                //===> Get Data from Rest-API <===//
                get_options().then(options => {
                    //===> Define Data <===//
                    let current = options;

                    //===> Replace Data <====//
                    current[dataTarget] = JSON.parse(event.target.result);

                    //===> Update Options <===//
                    update_options(current).then(response => {
                        //===> Show Notification <===//
                        data_success("the Data has been Imported.");
                        //===> Reload Page <===//
                        location.reload();
                    }).catch(error => {error.message});
                }).catch(error => {error.message});
            }
        }
    });

    //===> Export PDS Options <===//
    Phenix('#export-pds-data-btn').on('click', event => {
        //===> ...Default... <===//
        event.preventDefault();

        //===> Get Data from Rest-API <===//
        get_options().then(options => {
            //===> Define Data <===//
            let current = options,
                data = JSON.stringify(current);

            //===> Create the Element <===//
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
            element.setAttribute('download', 'pds-options.json');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }).catch(error => {error.message});
    });

    //===> Import PDS Options <===//
    Phenix('#import-pds-data-uploader').on('change', event => {
        //===> Get the File <===//
        let file = event.target.files[0];

        //===> Check for File <===//
        if (file) {
            //===> Define Data <===//
            let reader = new FileReader();

            //===> Read the File <===//
            reader.readAsText(file, "UTF-8");

            //===> On Load <===//
            reader.onload = (event) => {
                //===> Define Data <===//
                let data = JSON.parse(event.target.result);

                //===> Update Options <===//
                update_options(data).then(response => {
                    //===> Show Notification <===//
                    data_success("the Data has been Imported.");
                    //===> Reload Page <===//
                    location.reload();
                }).catch(error => {error.message});
            }
        }
    });

    //===> Import Posts <===//
    async function import_posts(data) {
        //===> Create a FormData <===//
        const formData = new FormData();

        //===> WordPress AJAX action <===//
        formData.append('action', 'pds_import_posts');

        // Convert JSON data to string <===//
        formData.append('posts_data', JSON.stringify(data));

        //===> Nonce for security <===//
        formData.append('_ajax_nonce', PDS_WP_KEY.nonce);

        //===> Connect to the API <===//
        const response = await fetch(`${PDS_WP_KEY.site}/wp-admin/admin-ajax.php`, {
            method: 'POST',
            body: formData,
            credentials: "same-origin",
        });

        //===> Check for Error <===//
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        //===> Define Data <===//
        const result = await response.json();
        
        //===> Success Notification <===//
        if (result.success) {
            data_success("Posts have been imported successfully.");
        } 
        //===> Error Notification <===//
        else {
            console.error("Error importing posts:", result.message);
        }

        //===> Return Data <===//
        return result;
    }
    
    //===> Posts Uploader <===//
    Phenix('#import-posts-uploader').on('change', event => {
        //===> Get the File <===//
        let file = event.target.files[0];

        //===> Check for File <===//
        if (file) {
            //===> Define Data <===//
            let reader = new FileReader();

            //===> Read the File <===//
            reader.readAsText(file, "UTF-8");

            //===> Send AJAX request to WordPress to import posts <===//
            reader.onload = (event) => import_posts(JSON.parse(event.target.result)).catch(error => console.error('Error:', error));
        }
    });

    //===> Remove Posts <===//
    async function remove_posts(data) {
        //===> Create a FormData <===//
        const formData = new FormData();

        //===> WordPress AJAX action <===//
        formData.append('action', 'pds_posts_remover');

        // Convert JSON data to string <===//
        formData.append('data', JSON.stringify(data));

        //===> Nonce for security <===//
        formData.append('_ajax_nonce', PDS_WP_KEY.nonce);

        //===> Connect to the API <===//
        const response = await fetch(`${PDS_WP_KEY.site}/wp-admin/admin-ajax.php`, {
            method: 'POST',
            body: formData,
            credentials: "same-origin",
        });

        //===> Check for Error <===//
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        //===> Define Data <===//
        const result = await response.json();
        
        //===> Success Notification <===//
        if (result.success) {
            data_success("Posts have been removed successfully.");
        } 
        //===> Error Notification <===//
        else {
            console.error("Error importing posts:", result.message);
        }

        //===> Return Data <===//
        return result;
    }

    //===> Posts Uploader <===//
    Phenix('#pds-posts-remover').on('click', event => {
        //===> Get the Post Type <===//
        const post_type = Phenix(event.target).ancestor(".posts-remover-wrapper").querySelector("[name='post_type']").value;
        //===> Send AJAX request to WordPress to import posts <===//
        remove_posts({"post_type": post_type}).catch(error => console.error('Error:', error));
    });

    //===> Posts Exporter <===//
    async function export_posts(data) {
        //===> Create a FormData <===//
        const formData = new FormData();

        //===> WordPress AJAX action <===//
        formData.append('action', 'pds_posts_exporter');

        // Convert JSON data to string <===//
        formData.append('data', JSON.stringify(data));

        //===> Nonce for security <===//
        formData.append('_ajax_nonce', PDS_WP_KEY.nonce);

        //===> Connect to the API <===//
        const response = await fetch(`${PDS_WP_KEY.site}/wp-admin/admin-ajax.php`, {
            method: 'POST',
            body: formData,
            credentials: "same-origin",
        });

        //===> Check for Error <===//
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        //===> Define Data <===//
        const result = await response.json();
        
        //===> Success Notification <===//
        if (result.success) {
            data_success("Posts have been removed successfully.");
        } 
        //===> Error Notification <===//
        else {
            console.error("Error importing posts:", result.message);
        }

        //===> Return Data <===//
        return result;
    }

    Phenix('#pds-posts-exporter').on('click', event => {
        //===> Get the Post Type <===//
        const exporter_wrapper = Phenix(event.target).ancestor(".posts-exporter-wrapper");
        const post_type = exporter_wrapper.querySelector("[name='post_type']").value;
        const metaboxes = exporter_wrapper.querySelector("[name='metaboxes']")?.value;
        
        //===> Send AJAX request to WordPress to import posts <===//
        export_posts({"post_type": post_type, "metaboxes": metaboxes || []}).then(options => {
            //===> Define Data <===//
            let current = options['data'],
                data = JSON.stringify(current);

            //===> Create the Element <===//
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
            element.setAttribute('download', 'posts-list.json');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }).catch(error => {error.message});
    });
});