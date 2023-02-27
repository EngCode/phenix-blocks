<?php
    //====> Shared Options <====//
    $args = array(
        'public'   => true,
        '_builtin' => false,
    );
 
    $output = 'names'; // names or objects, note names is the default
    $operator = 'and'; // 'and' or 'or'
 
    $post_types = get_post_types( $args, $output, $operator ); 
    $args2 = array('post_type' => 'page');
    $pages = get_pages($args2); 
?>
<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Add New Pattern', 'phenix'); ?></h3>
        <p class="mb-20 fs-14"><?php echo __('you can add/edit gutenberg block patterns from the next form.', 'phenix'); ?></p>

        <!-- Grid -->
        <div class="row gpx-15 gpy-15 collection-form" data-type="block-pattern">
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="title" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', 'phenix');?>" required>
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
            <div class="col-12">
                <!-- Form Control -->
                <div class="control-icon far fa-folder mb-15">
                    <select name="category" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Categories' ,'phenix'); ?>" multiple>
                        <option value="phenix"><?php echo __("Phenix", 'phenix'); ?></option>
                        <option value="headers"><?php echo __("Headers", 'phenix'); ?></option>
                        <option value="footers"><?php echo __("Footers", 'phenix'); ?></option>
                        <option value="elements"><?php echo __("Elements", 'phenix'); ?></option>
                        <option value="sections"><?php echo __("Sections", 'phenix'); ?></option>
                        <option value="pages"><?php echo __("General Pages", 'phenix'); ?></option>
                        <option value="single"><?php echo __("Single Pages", 'phenix'); ?></option>
                    </select>
                </div>
                <!-- Form Control -->
                <div class="control-icon far fa-file large">
                    <textarea name="content" class="form-control large radius-sm fs-13 mb-15" placeholder="<?php echo __('Content', 'phenix');?>"></textarea>
                </div>
                <!-- Form Button -->
                <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo __('Add Pattern', 'phenix'); ?></button>
            </div>
        </div>
        <!-- // Grid -->
    </div>
    <!-- Column -->
    <div class="col col-lg-6 pdy-10">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Patterns List', 'phenix'); ?></h3>
                <p class="fs-14"><?php echo __('in here you can manage the patterns created by phenix-blocks.', 'phenix'); ?></p>
            </div>
        </div>
        <!-- metabox List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm fs-14 patterns-list">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-4"><?php echo __('Label', 'phenix'); ?></span>
                <span class="col-3"><?php echo __('Name', 'phenix'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->

<!-- Form Script -->
<script defer>
    // document.addEventListener('DOMContentLoaded', ready => {
    //     let metabox_name_arr=[];
        
    //     //===> Get Current metabox <===//
    //     async function get_metabox() {
    //         //===> Connect to the API <===//
    //         const response = await fetch(`${PDS_WP_KEY.root}options/pds_metabox`, {
    //             method : 'GET', //===> [GET, POST, PUT, DELETE].
    //             headers: {      //===> WP Cookies Auth
    //                 "Content-Type": "application/json",
    //                 "X-WP-Nonce": PDS_WP_KEY.nonce
    //             },
    //             credentials: "same-origin",
    //         });

    //         //===> Return Data <===//
    //         return response.json();
    //     }

    //     //===> Add New metabox <===//
    //     async function add_metabox(metabox) {
    //         //===> Get Data <===//
    //         let data = {"metabox" : metabox};

    //         //===> Connect to the API <===//
    //         const response = await fetch(`${PDS_WP_KEY.root}options/pds_metabox`, {
    //             method : 'POST', //===> [GET, POST, PUT, DELETE].
    //             headers: {       //===> WP Cookies Auth
    //                 "X-WP-Nonce"   : PDS_WP_KEY.nonce,
    //                 "Content-Type" : "application/json",
    //             },
    //             credentials: "same-origin",
    //             body : JSON.stringify(data)
    //         });

    //         //===> Update metabox List <===//
    //         update_metabox_list();

    //         //===> Return Response <===//
    //         return await response;
    //     }

    //     //===> Get Saved metabox <===//
    //     const update_metabox_list = () => {
    //         //===> Get metabox from Rest-API <===//
    //         get_metabox().then(metabox => {
    //             //===> Clear Current metabox <===//
    //             let metabox_list = document.querySelector('.metabox-list');
    //             metabox_list?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
    //             //===> Create metabox List <===//
    //             metabox.forEach(function(item,index) {
    //                 let isChecked;
    //                 if (item['open']==1) { 
    //                      isChecked = 'checked';
    //                  }
    //                  metabox_name_arr.push(item['name']);
    //                 //===> Insert the metabox in the List <===//
    //                 Phenix(metabox_list).insert('append', `<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
    //                     <!-- metabox Type Title -->
    //                     <span class="tx-icon fas fa-list col-5 item-title">${item['label']}</span>
    
    //                     <!-- metabox Name -->
    //                     <span class="tx-icon fas fa-archive col-5 item-name">${item['name']}</span>
    //                     <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
    //                         <input type="checkbox" name="${index}" class="metabox-turn" ${isChecked}><span class="switch"></span>
    //                     </label>
    //                     <!-- Action Buttons -->
    //                     <div class="col-auto ms-auto flexbox">
    //                         <button  type="button" name="${index}" class="remove-item btn light tiny square color-danger far fa-times-circle" data-target="li"></button>
    //                     </div>
    //                 </li>`);
    //                 //===> Remove Item Method <===//
    //                //===> Remove Item Method <===//
    //                Phenix('.metabox-list .remove-item').on('click', button => {
    //                     let menu_item = Phenix(button.target).ancestor('li'),
    //                         remove_number= button.target.name;;
    //                     //===> Set Loading Mode <===//
    //                     menu_item.classList.add('px-loading-inline');
    //                     //===> Loop Throgh metabox <===//
    //                     metabox.forEach(function(item,index) {
    //                         //===> When the item matches the metabox <===//
    //                         if (remove_number === `${index}`) {
    //                             //===> Delete the metabox <===//
    //                             delete metabox[remove_number];
    //                             metabox = metabox.filter(function(x) { return x !== null }); 
    //                             //===> Update metabox <===//
    //                             add_metabox(metabox);
    //                             //====> Show Notifications <====//
    //                             Phenix(document).notifications({
    //                                 type     : "success", //=== Message Type [normal, error, success, warning]
    //                                 message  : "the metabox has been Deleted.", //=== Message Content
    //                                 position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                             });
    //                             setTimeout("location.reload(true);",2000);
    //                         }
    //                     })
    //                 }, true);
    //                 //===> Turn ON/OFF Method <===//
    //                 Phenix('.metabox-list .metabox-turn').on('click', isClicked => {
    //                     //===> Set Loading Mode <===//
    //                     isClicked.target.classList.add('px-loading-inline');
    //                     let index_number=isClicked.target.name;
    //                     let x;
    //                     let text;
    //                     if(isClicked.currentTarget.checked==true) {
    //                         x=1;
    //                         text="turn on";
    //                     }else{
    //                         x=0;
    //                         text="turn off";
    //                     }
    //                     //===> Loop Throgh metabox <===//
                    
    //                         //===> When the item matches the metabox <===//
    //                         if (index_number == `${index}`) {
    //                             //===> Delete the metabox <===//
    //                             metabox[index_number]['open']=x;
    //                             //===> Update metabox <===//
    //                             add_metabox(metabox);
    //                             //====> Show Notifications <====//
    //                             Phenix(document).notifications({
    //                                 type     : "success", //=== Message Type [normal, error, success, warning]
    //                                 message  : "the metabox has been "+text+" .", //=== Message Content
    //                                 position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                             });
    //                             setTimeout("location.reload(true);",2000);
    //                         }
                        
    //                 }, true);
    //             })
    //         }).then(response => {
    //         }).catch(error => {error.message});
    //     }

    //     update_metabox_list();

    //     //===> Add metabox Form <===//
    //     document.querySelector('[name="add-metabox-btn"]')?.addEventListener('click', isClicked => {
    //         //===> Get Controls Elements <===//
    //         let form_Controls = Phenix('[name*="add-metabox"]:not(.btn)'),
    //             new_metabox  = {};

    //         //===> Get Controls Values <===//
    //         form_Controls.forEach(control => {
    //             //===> Validate Control <===//
    //             Phenix(control).validation();

    //             //===> if its valid control <===//
    //             if (!control.matches('.error')) {
    //                 //===> Get Control Name [title, name] <===//
    //                 let control_name = control.getAttribute('name').replace('add-metabox-','');

    //                 //===> Validate the metabox Name <===//
    //                 if (control_name === 'name' && !control.value) {
    //                     //===> if "name" not exist grap it from the Title <===//
    //                     let metabox_name = Phenix('[name="add-metabox-title"]')[0].value.toLowerCase().replaceAll(' ','-');
    //                     new_metabox[control_name] = metabox_name.toLowerCase().replaceAll(' ','-');
    //                 //===> Add the new metabox Title <===//
    //                 } else {
    //                     new_metabox[control_name] = control.value;
    //                 }
    //             }
    //         });

    //         //===> if has new metabox <===//
    //         if (new_metabox['name']) {
    //             //===> Set Loading Mode <===//
    //             isClicked.target.classList.add('px-loading-inline');
                
    //             //===> Update metabox List <===//
    //             get_metabox().then(metabox => {
    //                 //===> Check if its Exist <===//
    //                 let alreadyExist;
    //                 if(jQuery.inArray(new_metabox['name'], metabox_name_arr) != -1) {
    //                      alreadyExist = new_metabox['name'];
    //                 }
    //                 //===> Update metabox <===//
    //                 if (!alreadyExist) {
    //                     let postvalues=[];
    //                     let options=document.getElementById('select-post-type').options;
    //                     for (var option of options)
    //                         {
    //                             if (option.defaultSelected==true) {
    //                                 postvalues.push(option.value);
    //                             }
    //                         }
    //                     //===> add the new metabox to the current ones <===//
    //                     metabox.push({'post_type':postvalues,'label':new_metabox['title'],'name':new_metabox['name'],'label_singular':new_metabox['label-singular'],'singular':new_metabox['singular'],'open':false});
    //                     //===> Post the New metabox <===//
    //                     add_metabox(metabox).then(response => {
    //                         //===> Remove Loading Mode <===//
    //                         isClicked.target.classList.remove('px-loading-inline');
    //                         //====> Show Notifications <====//
    //                         Phenix(document).notifications({
    //                             type     : "success", //=== Message Type [normal, error, success, warning]
    //                             message  : "Success : the New metabox has been Added.", //=== Message Content
    //                             position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                         });
    //                     });
    //                 } else {
    //                     //====> Show Error <====//
    //                     Phenix(document).notifications({
    //                         type     : "error", //=== Message Type [normal, error, success, warning]
    //                         message  : "Error The metabox Already Exist.", //=== Message Content
    //                         position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                     });

    //                     //===> Remove Loading Mode <===//
    //                     isClicked.target.classList.remove('px-loading-inline');
    //                 }
    //             }).catch(error => {error.message});
    //         }
    //     });
      
    //     Phenix("#select-post-page").on('change', isChangeed => {
    //         let val = isChangeed.target.value;
    //         let pages=<?php echo json_encode($pages);?>;
    //         let post_types=<?php echo json_encode($post_types);?>;
    //         let posttypes=Object.values(post_types);
    //         let options='';
    //         let options2='';
        
    //         if (val == "page") {
    //             pages.forEach(function(item,index) {
    //                 options +="<option value="+item['ID']+">"+item['post_title']+"</option>";
    //             });
    //             Phenix(".px-select").insert('append',options);
    //         } else if (val == "post") {
    //             posttypes.forEach(function(item,index) {
    //             options2 +="<option value="+item+">"+item+"</option>";
    //             });
    //             Phenix(".px-select").insert('append',options2);
    //         }  
    //         Phenix('.px-select').select({
    //             search: true ,
    //             multiple: true
    //         });
    //     });
    // });
</script>