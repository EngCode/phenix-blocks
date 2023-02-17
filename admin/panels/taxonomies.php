<?php
    $args = array(
        'public'   => true,
        '_builtin' => false,
    );

    $output = 'names'; // names or objects, note names is the default
    $operator = 'and'; // 'and' or 'or'
    $post_types = get_post_types( $args, $output, $operator ); 
?>

<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Add New Taxonomy', 'phenix'); ?></h3>
        <p class="mb-20 fs-14"><?php echo __('you can add/edit taxonomies from the next form.', 'phenix'); ?></p>
        
        <!-- Grid -->
        <div class="row gpx-15 gpy-15 collection-form" data-type="taxonomies">
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="label" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', 'phenix');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="name" class="form-control radius-sm fs-13" placeholder="<?php echo __('Name', 'phenix');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="label-singular" class="form-control radius-sm fs-13" placeholder="<?php echo __('singular Label', 'phenix');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="singular" class="form-control radius-sm fs-13" placeholder="<?php echo __('Singular', 'phenix');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12">
                <!-- Form Control -->
                <div class="control-icon far fa-cube mb-15">
                    <select name="post_types" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Post Types', 'phenix');?>" multiple>
                        <?php
                            $post_types = get_post_types(array('public'=> true), 'objects');
                            foreach ($post_types as $post_type) {
                                if ($post_type->name !== "attachment") {
                                    echo '<option value="'.$post_type->name.'">' . $post_type->labels->name . '</option>';
                                }
                            };
                        ?>
                    </select>
                </div>
                <!-- Elements Group -->
                <div class="flexbox align-between align-center-y">
                    <!-- Form Control -->
                    <label class="small option-control align-center-y align-between fs-15 weight-medium" data-type="checkbox">
                        <input type="checkbox" name="enable" checked />
                        <span class="fas fa-check radius-circle tx-icon"><?php echo __("Enable this Taxonomy once added ?", 'phenix'); ?></span>
                    </label>
                    <!-- Form Control -->
                    <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo __('Add Taxonomy', 'phenix'); ?></button>
                </div>
                <!-- // Elements Group -->
            </div>
            <!-- // Column -->
        </div>
        <!-- // Grid -->
    </div>
    <!-- Column -->
    <div class="col col-lg-6 pdy-10">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Taxonomies List', 'phenix'); ?></h3>
                <p class="fs-14"><?php echo __('in here you can manage the taxonomies created by phenix-blocks.', 'phenix'); ?></p>
            </div>
        </div>
        <!-- taxonomies List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm fs-14 taxonomies-list">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-4"><?php echo __('Label', 'phenix'); ?></span>
                <span class="col-3"><?php echo __('Name', 'phenix'); ?></span>
                <span class="col-2"><?php echo __('Types', 'phenix'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->

<!-- Form Script -->
<script defer> 
    document.addEventListener('DOMContentLoaded', ready => {
        // let taxonomy_name_arr=[];
        // //===> Get Current Taxonomies <===//
        // async function get_taxonomies() {
        //     //===> Connect to the API <===//
        //     const response = await fetch(`${PDS_WP_KEY.root}options/pds_taxonomies`, {
        //         method : 'GET', //===> [GET, POST, PUT, DELETE].
        //         headers: {      //===> WP Cookies Auth
        //             "Content-Type": "application/json",
        //             "X-WP-Nonce": PDS_WP_KEY.nonce
        //         },
        //         credentials: "same-origin",
        //     });

        //     //===> Return Data <===//
        //     return response.json();
        // }

        // //===> Add New Taxonomy <===//
        // async function add_taxonomy(taxonomies) {
        //     //===> Get Data <===//
        //     let data = {"taxonomies" : taxonomies};

        //     //===> Connect to the API <===//
        //     const response = await fetch(`${PDS_WP_KEY.root}options/pds_taxonomies`, {
        //         method : 'POST', //===> [GET, POST, PUT, DELETE].
        //         headers: {       //===> WP Cookies Auth
        //             "X-WP-Nonce"   : PDS_WP_KEY.nonce,
        //             "Content-Type" : "application/json",
        //         },
        //         credentials: "same-origin",
        //         body : JSON.stringify(data)
        //     });

        //     //===> Update Taxonomies List <===//
        //     update_taxonomies_list();

        //     //===> Return Response <===//
        //     return await response;
        // }

        // //===> Get Saved taxonomies <===//
        // const update_taxonomies_list = () => {
        //     //===> Get Taxonomy from Rest-API <===//
        //     get_taxonomies().then(taxonomies => {
        //         //===> Clear Current Taxonomies <===//
        //         let taxonomies_list = document.querySelector('.taxonomies-list');
        //         taxonomies_list?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
        //         //===> Create Taxonomies List <===//
        //         taxonomies.forEach(function(item,index) {
        //             let isChecked;
        //             if (item['open']==1) { 
        //                  isChecked = 'checked';
        //              }
        //              taxonomy_name_arr.push(item['name']);
        //             //===> Insert the Taxonomy in the List <===//
        //             Phenix(taxonomies_list).insert('append', `<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
        //                 <!-- Taxonomy Type Title -->
        //                 <span class="tx-icon fas fa-list col-5 item-title">${item['label']}</span>
    
        //                 <!-- Taxonomy Name -->
        //                 <span class="tx-icon fas fa-archive col-5 item-name">${item['name']}</span>
        //                 <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
        //                     <input type="checkbox" name="${index}" class="taxonomy-turn" ${isChecked}><span class="switch"></span>
        //                 </label>
        //                 <!-- Action Buttons -->
        //                 <div class="col-auto ms-auto flexbox">
        //                     <button  type="button" name="${index}" class="remove-item btn light tiny square color-danger far fa-times-circle" data-target="li"></button>
        //                 </div>
        //             </li>`);
        //             //===> Remove Item Method <===//
        //            //===> Remove Item Method <===//
        //            Phenix('.taxonomies-list .remove-item').on('click', button => {
        //                 let menu_item = Phenix(button.target).ancestor('li'),
        //                     remove_number= button.target.name;;
        //                 //===> Set Loading Mode <===//
        //                 menu_item.classList.add('px-loading-inline');
        //                 //===> Loop Throgh Taxonomies <===//
        //                 taxonomies.forEach(function(item,index) {
        //                     //===> When the item matches the Taxonomies <===//
        //                     if (remove_number === `${index}`) {
        //                         //===> Delete the Taxonomy <===//
        //                         delete taxonomies[remove_number];
        //                         taxonomies = taxonomies.filter(function(x) { return x !== null }); 
        //                         //===> Update Taxonomy <===//
        //                         add_taxonomy(taxonomies);
        //                         //====> Show Notifications <====//
        //                         Phenix(document).notifications({
        //                             type     : "success", //=== Message Type [normal, error, success, warning]
        //                             message  : "the Taxonomy has been Deleted.", //=== Message Content
        //                             position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
        //                         });
        //                         setTimeout("location.reload(true);",2000);
        //                     }
        //                 })
        //             }, true);
        //             //===> Turn ON/OFF Method <===//
        //             Phenix('.taxonomies-list .taxonomy-turn').on('click', isClicked => {
        //                 //===> Set Loading Mode <===//
        //                 isClicked.target.classList.add('px-loading-inline');
        //                 let index_number=isClicked.target.name;
        //                 let x;
        //                 let text;
        //                 if(isClicked.currentTarget.checked==true) {
        //                     x=1;
        //                     text="turn on";
        //                 }else{
        //                     x=0;
        //                     text="turn off";
        //                 }
        //                 //===> Loop Throgh Taxonomies <===//
                    
        //                     //===> When the item matches the Taxonomies <===//
        //                     if (index_number == `${index}`) {
        //                         //===> Delete the Taxonomy <===//
        //                         taxonomies[index_number]['open']=x;
        //                         //===> Update Taxonomy <===//
        //                         add_taxonomy(taxonomies);
        //                         //====> Show Notifications <====//
        //                         Phenix(document).notifications({
        //                             type     : "success", //=== Message Type [normal, error, success, warning]
        //                             message  : "the Taxonomy has been "+text+" .", //=== Message Content
        //                             position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
        //                         });
        //                         setTimeout("location.reload(true);",2000);
        //                     }
                        
        //             }, true);
        //         })
        //     }).then(response => {
        //     }).catch(error => {error.message});
        // }

        // update_taxonomies_list();

        // //===> Add Taxonomy Form <===//
        // document.querySelector('[name="add-taxonomy-btn"]')?.addEventListener('click', isClicked => {
        //     //===> Get Controls Elements <===//
        //     let form_Controls = Phenix('[name*="add-taxonomy"]:not(.btn)'),
        //         new_taxonomy  = {};

        //     //===> Get Controls Values <===//
        //     form_Controls.forEach(control => {
        //         //===> Validate Control <===//
        //         Phenix(control).validation();

        //         //===> if its valid control <===//
        //         if (!control.matches('.error')) {
        //             //===> Get Control Name [title, name] <===//
        //             let control_name = control.getAttribute('name').replace('add-taxonomy-','');

        //             //===> Validate the Taxonomy Name <===//
        //             if (control_name === 'name' && !control.value) {
        //                 //===> if "name" not exist grap it from the Title <===//
        //                 let taxonomy_name = Phenix('[name="add-taxonomy-title"]')[0].value.toLowerCase().replaceAll(' ','-');
        //                 new_taxonomy[control_name] = taxonomy_name.toLowerCase().replaceAll(' ','-');
        //             //===> Add the new Taxonomy Title <===//
        //             } else {
        //                 new_taxonomy[control_name] = control.value;
        //             }
        //         }
        //     });

        //     //===> if has new taxonomy <===//
        //     if (new_taxonomy['name']) {
        //         //===> Set Loading Mode <===//
        //         isClicked.target.classList.add('px-loading-inline');
                
        //         //===> Update Taxonomies List <===//
        //         get_taxonomies().then(taxonomies => {
        //             //===> Check if its Exist <===//
        //             let alreadyExist;
        //             if(jQuery.inArray(new_taxonomy['name'], taxonomy_name_arr) != -1) {
        //                  alreadyExist = new_taxonomy['name'];
        //             }
        //             //===> Update Taxonomies <===//
        //             if (!alreadyExist) {
        //                 let postvalues=[];
        //                 let options=document.getElementById('select-post-type').options;
        //                 for (var option of options)
        //                     {
        //                         if (option.defaultSelected==true) {
        //                             postvalues.push(option.value);
        //                         }
        //                     }
        //                 //===> add the new Taxonomy to the current ones <===//
        //                 taxonomies.push({'post_type':postvalues,'label':new_taxonomy['title'],'name':new_taxonomy['name'],'label_singular':new_taxonomy['label-singular'],'singular':new_taxonomy['singular'],'open':false});
        //                 //===> Post the New Taxonomy <===//
        //                 add_taxonomy(taxonomies).then(response => {
        //                     //===> Remove Loading Mode <===//
        //                     isClicked.target.classList.remove('px-loading-inline');
        //                     //====> Show Notifications <====//
        //                     Phenix(document).notifications({
        //                         type     : "success", //=== Message Type [normal, error, success, warning]
        //                         message  : "Success : the New Taxonomy has been Added.", //=== Message Content
        //                         position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
        //                     });
        //                 });
        //             } else {
        //                 //====> Show Error <====//
        //                 Phenix(document).notifications({
        //                     type     : "error", //=== Message Type [normal, error, success, warning]
        //                     message  : "Error The Taxonomy Already Exist.", //=== Message Content
        //                     position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
        //                 });

        //                 //===> Remove Loading Mode <===//
        //                 isClicked.target.classList.remove('px-loading-inline');
        //             }
        //         }).catch(error => {error.message});
        //     }
        // });

        // Phenix('.px-select').select({
        //     search: true,
        //     multiple: true
        // });
    });
</script>