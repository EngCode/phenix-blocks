/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Animated Counter
 * ===> 03 - Get Options Data
 * ===> 04 - Counter Data
 * ===> 05 - Count Runes
 * ===> 06 - Start Counting
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Animated Counter <====*/
PhenixElements.prototype.datatable = function (options?:{
        items?:number,  //===> Items Per Page
        search?:number,   //===> Enable Search
        sortable?:number, //===> Enable Sorting
        data?:{
            labels?:[],       //===> Table Head Items [array of strings]
            source?:string,   //===> Data Source URL [csv, json]
            editable?:number, //===> Enable Data Edit
        },
    }) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element:any) => {
        //====> Data Table Options <====//
        let wrapper,
            items    = parseInt(element.getAttribute('data-items')) || options?.items || 15, //===> Rows Per Pages
            search   = element.getAttribute('data-search') || options?.search || true,  //===> Enable Search
            sortable = element.getAttribute('data-sortable') || options?.sortable || true,  //===> Enable Sorting
            source   = element.getAttribute('data-source') || options?.data?.source || false,  //===> Data Source URL [csv, json]
            labels   = element.getAttribute('data-labels') || options?.data?.labels || false,  //===> Table Head Items [array of strings]
            editable = element.getAttribute('data-editable') || options?.data?.editable || false;  //===> Enable Data Edit

        //====> Detect Responsive Wrapper <====//
        if (element.parentNode.matches('[class*="-table"]')) wrapper = element.parentNode;

        //====> Label Translate <====//
        const Label_Translate = (english, arabic) => {
            if (Phenix(document).direction() == 'ltr') return english; 
            else return arabic;
        };

        //====> Get Table Elements <====//
        let table_labels  = element.querySelectorAll('thead th'),
            original_rows = element.querySelectorAll('tbody tr'),
            table_rows    = original_rows,
            row_length    = table_rows.length;

        //====> Create Labels from Data <====//
        if (labels) {
            //====> Remove Head <====//
            element.querySelector('thead')?.remove();
            //====> Create Head Wrapper <====//
            Phenix(element).insert('append', `<thead><tr></tr></thead>`);
            let headRow = element.querySelector('thead tr');
            //====> Create Labels <====//
            for (let i = 0; labels.length-1 >= i; i++) {
                let label = labels[i];
                Phenix(headRow).insert('append', `<th>${label}</th>`);
            };
            //====> get the New Labels <====//
            table_labels = element.querySelectorAll('thead th');
        }

        //====> Editable Handler <====//
        if (editable) table_rows.forEach(row => {
            row.querySelectorAll('td').forEach(column => column.setAttribute('contenteditable',true));
        });

        //====> Per-Page Template <====//
        var itemsHTML = '';
        if (items) itemsHTML = `<!-- Per Page Selector -->
            <label class="backspace me-10 mb-20">${Label_Translate('Show', 'اظهار عدد')}</label>
            <select class="form-control small items w-auto miw-90">
                <option value="${items}">${items}</option>
                ${items*2 < row_length ? `<option value="${items*2}">${items*2}</option>` : ''};
                ${items*4 < row_length ? `<option value="${items*4}">${items*4}</option>` : ''};
                ${items*10 < row_length ? `<option value="${items*10}">${items*10}</option>` : ''};
                ${items*20 < row_length ? `<option value="${items*20}">${items*20}</option>` : ''};
                ${items*25 < row_length ? `<option value="${items*25}">${items*25}</option>` : ''};
                ${items*50 < row_length ? `<option value="${items*50}">${items*50}</option>` : ''};
                ${items*100 < row_length ? `<option value="${items*100}">${items*100}</option>` : ''};
                ${`<option value="${row_length}">${row_length}</option>`};
            </select>
            <label class="backspace ms-10 mb-20">${Label_Translate('Per Page', 'فى كل صفحة')}</label>
        `;

        //====> Search Template <====//
        var searchHTML = '';
        if (search) searchHTML = `
            <div class="control-icon small floating-end far fa-search">
                <input type="search" class="table-search form-control small" placeholder="${Label_Translate('Search in Table', 'البحث فى الجدول')}">
            </div>
        `;

        //====> Navigation Template <====//
        var tableNav = `<div class="datatable-nav flexbox align-between align-center-y">
            ${search ?             
                `<!-- Search -->
                <div class="table-filters col-5 col-md-4 col-lg-3">
                    ${searchHTML}
                </div>
                <!-- // Search -->` : ''
            }
            ${items ? 
                `<!-- Action Area -->
                <div class="table-filters flexbox align-center-y">
                    ${itemsHTML}
                </div>` : ''
            }
        </div>`;

        //====> Insert Navigation <====//
        Phenix(wrapper).insert('before', tableNav);

        //====> Pagination Template <====//
        var paginationTemplate = `<div class="datatable-pagi flexbox align-between align-center-y">
            <!-- Display Info -->
            <p>${Label_Translate(
                `Showing from <span class="start-count">1</span> to <span class="end-count">${table_rows.length}</span> out of ${original_rows.length}`,
                `اظهار <span class="start-count">1</span> الي <span class="end-count">${table_rows.length}</span> من مجموع ${original_rows.length}`
            )}</p>
            <!-- Pagination -->
            <ul class="pagination small"></ul>
        </div>`;

        //====> Insert Pagination <====//
        Phenix(wrapper).insert('after', paginationTemplate);

        //====> get Navigation and Pagination <====//
        var navigation = Phenix(wrapper).prev('.datatable-nav');
        var pagination = Phenix(wrapper).next('.datatable-pagi');

        //====> Set Page Handler <====//
        const setPage = (rows, start, end) => {
            //====> Clear Current Items <====//
            element.querySelectorAll('tbody tr')?.forEach(del => del.remove());
            //====> Define the Body <====//
            let bodyElement:any = element.querySelector('tbody');
            //====> Set Pages <====//
            while (start < end) {
                Phenix(bodyElement).insert('append', rows[start]);
                start++;
            }
            //====> Display Information <====//
            pagination.querySelector('.start-count').textContent = start+1;
            pagination.querySelector('.end-count').textContent = end+1;
        };

        //====> Pagination Handlers <====//
        const paginationHandlers = () => {
            //===> Set New Page <===//
            const setNewPage = item => {
                //====> Positions <====//
                var thisPage   = parseInt(item.textContent),
                    itemsNumber = navigation.querySelector('.items').value;

                //====> Activate <====//
                item.parentNode.querySelector('.active')?.classList.remove('active')
                item.classList.add('active');

                //====> Items Calculation <====//
                var startPoint = thisPage == 1 ? 0 : thisPage*itemsNumber-itemsNumber,
                    endPoint   = thisPage*itemsNumber-1;

                //====> Set First Page <====//
                setPage(original_rows, startPoint, endPoint);
            };

            //===> Get Pagination Items <===//
            pagination.querySelectorAll('.pagination li:not(.next-page):not(.prev-page)').forEach(item => {
                //===> On Item Click <===//
                item.addEventListener('click', event => {
                    event.preventDefault();
                    setNewPage(event.target);
                });
            });

            //===> Next Page <===//
            pagination.querySelector('.pagination .next-page')?.addEventListener('click', event => {
                event.preventDefault();
                //====> Positions <====//
                var item = Phenix(pagination.querySelector('li.active')).next('li:not(.prev-page):not(.next-page)');
                if(item) setNewPage(item);
            });

            //===> Prev Page <===//
            pagination.querySelector('.pagination .prev-page')?.addEventListener('click', event => {
                event.preventDefault();
                //====> Positions <====//
                var item = Phenix(pagination.querySelector('li.active')).prev('li:not(.prev-page):not(.next-page)');
                if (item) setNewPage(item);
            });
        };

        //====> Create Pagination <====//
        const createPagination = (rows, start, end) => {
            //====> Clear Current Items <====//
            element.querySelectorAll('tbody tr')?.forEach(del => del.remove());

            //====> Select Pagination List <====//
            var paginationList = pagination.querySelector('.pagination'),
                pagesNumber    = Math.ceil(rows.length/items);

            //===> Reset Pagination <===//
            paginationList.innerHTML = null;

            //====> Create Pagination Items <====//
            for(let i = 0; pagesNumber-1 >= i; i++) Phenix(paginationList).insert('append', `<li class="${i==0?'active':''}">${i+1}</li>`);

            //====> Create Next / Prev Buttons <====//
            if (pagesNumber > 1) {
                Phenix(paginationList.querySelector('li:first-child')).insert('before', `<li class="prev-page far fa-angle-${Phenix(document).direction('start')}"></li>`);
                Phenix(paginationList).insert('append', `<li class="next-page far fa-angle-${Phenix(document).direction('end')}"></li>`);
            }

            //====> Set First Page <====//
            setPage(rows, start, end);

            //====> Activate Pagination <====//
            paginationHandlers();
        };

        //====> Per-Page Activate <====//
        if(items) {
            //====> Create Pagination <====//
            createPagination(original_rows, 0, items-1);

            //====> Per-Page Handler <====//
            var itemsControl = navigation.querySelector('.items');
            // Forms.advancedSelect(itemsControl);

            itemsControl.addEventListener('change', event => {
                items = event.target.value;
                //====> Create Pagination <====//
                createPagination(original_rows, 0, items-1);
            });
        }

        //====> Search Handler <====//
        if(search) {
            navigation.querySelector('.table-search')?.addEventListener('keyup', event => {
                //====> Get Search Data <====//
                var currentValue = event.target.value.toString().toLowerCase(),
                    keyboard_key = event.keyCode || event.charCode,
                    filteredData = [];
    
                //====> Search Process <====//
                if(keyboard_key == 8 && currentValue == '' || null) {
                    //====> if its Empty Return Original Data <====//
                    filteredData = table_rows;
                } else {
                    //=====> Loop Through Options <=====//
                    table_rows.forEach((item,index) => {
                        //=====> Search and Options Data <=====//
                        var labelValue = item.textContent.toString().toLowerCase();
                        //=====> Show / Hide Options <=====//
                        if (labelValue.includes(currentValue)) filteredData.push(item);
                    });
                }
    
                //====> Search Result <====//
                if (items && filteredData.length > 0) createPagination(filteredData, 0, items-1);
                if (!items) setPage(filteredData, 0, filteredData.length-1);
            });
        }

        //====> Sorting Handler <====//
        if(sortable) {
            table_labels.forEach((label, tdIndex) => {
                //====> Set Sort Icons <====//
                label.classList.add('px-sortable');
                Phenix(label).insert('append', `<span class="sort-icon fas fa-sort float-end"></span>`);

                //====> Handler <====//
                label.addEventListener('click', event => {
                    event.preventDefault();
                    //====> Deactivate Handler <====//
                    const deactivateOther = () => {
                        //====> Deactivate Other <====//
                        Phenix(label).siblings('.active')?.forEach(sibling => {
                            sibling.classList.remove('active');
                            sibling.classList.remove('asc-sort');
                            sibling.classList.remove('desc-sort');
                        });
                    }

                    //====> Sort Detector <====//
                    if(!label.classList.contains('asc-sort')) {
                        var sortBy = 'asc'
                        //====> Deactivates Other <====//
                        deactivateOther();
                        //====> Activate Item <====//
                        label.classList.add('active');
                        label.classList.add('asc-sort');
                        label.classList.remove('desc-sort');
                    } else {
                        var sortBy = 'desc';
                        //====> Deactivates Other <====//
                        deactivateOther();
                        //====> Activate Item <====//
                        label.classList.add('active');
                        label.classList.add('desc-sort');
                        label.classList.remove('asc-sort');
                    }

                    //====> Clear Current Items <====//
                    if(items) {
                        var tableBody = element.querySelector('tbody');
                        tableBody.querySelectorAll('tr')?.forEach(del => del.remove());
                        //====> Show All <====//
                        if (tableBody) table_rows.forEach(row => tableBody.appendChild(row));
                    }

                    //====> Rows Sorting <====//
                    element.querySelectorAll('tbody tr')?.forEach((row, index) => {
                        var rowSiblings = Phenix(row).siblings('tr'),
                            currentValue = row.children[tdIndex].textContent;
                        //====> Compare Row to its Sibling <====//
                        rowSiblings.forEach(sibling => {
                            var siblingValue = sibling.children[tdIndex].textContent;
                            
                            //====> Compare as Number <====//
                            if (!isNaN(currentValue)) {
                                currentValue = parseFloat(currentValue);
                                siblingValue = parseFloat(siblingValue);
                            } 
                            
                            //====> Compare as String <====//
                            if (isNaN(currentValue)) {
                                currentValue = currentValue.toString();
                                siblingValue = siblingValue.toString();
                            }

                            //====> ASC Sorting <====//
                            if(sortBy == 'asc' && currentValue >= siblingValue) Phenix(row).insert('after', sibling);
                            //====> DESC Sorting <====//
                            if(sortBy == 'desc' && currentValue <= siblingValue) Phenix(row).insert('after', sibling);
                        });
                    });

                    //====> new Sorted Rows <====//
                    table_rows = element.querySelectorAll('tbody tr');
                    //====> Create Pagination <====//
                    if (items && table_rows.length > 0) createPagination(table_rows, 0, items-1);
                    if (!items) setPage(table_rows, 0, table_rows.length-1);
                });
            });
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}