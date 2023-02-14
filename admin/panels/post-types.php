<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-6 w-max-480 pdy-10">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo px__('Add New Post Type'); ?></h3>
        <p class="mb-20 fs-14"><?php echo px__('you can add custom post types from below form.'); ?></p>

        <!-- Grid -->
        <div class="row gpx-15 gpy-15">
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="add-type-label" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Label');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="add-type-name" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Name');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="add-type-label-singular" class="form-control radius-sm fs-13" placeholder="<?php echo px__('singular Label');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="add-type-singular" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Singular');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-image">
                    <input type="text" name="add-type-icon" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Icon');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-file-alt">
                    <select name="add-type-template" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo px__('Pattern Template');?>">
                        <option value="slide-example"><?php echo px__("Slider Single"); ?></option>
                        <option value="blog-example"><?php echo px__("Blog Single"); ?></option>
                    </select>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12">
                <!-- Form Control -->
                <div class="control-icon far fa-boxes mb-15">
                    <select name="add-type-taxonomies" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo px__('Taxonomies');?>" multiple>
                        <option value="category"><?php echo px__("Category"); ?></option>
                        <option value="tag"><?php echo px__("Tags"); ?></option>
                    </select>
                </div>
                <!-- Elements Group -->
                <div class="flexbox align-between align-center-y">
                    <!-- Form Control -->
                    <label class="small option-control align-center-y align-between fs-15 weight-medium" data-type="custom">
                        <input type="checkbox" name="add-type-enable" checked />
                        <span class="fas fa-check-circle tx-icon"><?php echo px__("Enable this Type once added ?"); ?></span>
                    </label>
                    <!-- Form Control -->
                    <button type="button" name="add-type-btn" class="btn primary radius-sm small ms-auto display-block"><?php echo px__('Add Type'); ?></button>
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
                <h3 class="fs-16 mb-0 weight-medium"><?php echo px__('Post Types'); ?></h3>
                <p class="fs-14"><?php echo px__('in here you can manage the  post types created by phenix-blocks.'); ?></p>
            </div>
        </div>
        <!-- Post Types List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm post-types-list fs-14">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-4"><?php echo px__('Label'); ?></span>
                <span class="col-4"><?php echo px__('Name'); ?></span>
                <span class="col-4"><?php echo px__('Singular'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->

<!-- Form Script -->
<script defer>
    // document.addEventListener('DOMContentLoaded', ready => {
    //     let post_name_arr = [];

    //     //===> Get Saved Post Types <===//
    //     const update_post_types_list = () => {
    //         //===> Get Post Type from Rest-API <===//
    //         get_post_types().then(post_types => {
    //             //===> Clear Current Post Types <===//
    //             let post_types_list = document.querySelector('.post-types-list');
    //             post_types_list?.querySelectorAll(':scope > li:not(.list-head)').forEach(item => item.remove());
                
    //             post_types.forEach(function(item,index) {
    //                 let isChecked;
    //                 if (item['open']==1) { 
    //                      isChecked = 'checked';
    //                  }
    //                  post_name_arr.push(item['name']);
    //                 //===> Create Post Types List <===//
    //                 //===> Insert the Post Type in the List <===//
    //                 Phenix(post_types_list).insert('append', `<li class="flexbox divider-b align-center-y pdy-5 pds-15 pde-10 mb-0">
    //                     <!-- Post Type Title -->
    //                     <span class="tx-icon fas fa-list col-5 item-title">${item['label']}</span>
    
    //                     <!-- Post Type Name -->
    //                     <span class="tx-icon fas fa-archive col-5 item-name">${item['name']}</span>
    //                     <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
    //                         <input type="checkbox" name="${index}" class="post-type-turn" ${isChecked}><span class="switch"></span>
    //                     </label>
    //                     <!-- Action Buttons -->
    //                     <div class="col-auto ms-auto flexbox">
    //                         <button  type="button" name="${index}" class="remove-item btn light tiny square color-danger far fa-times-circle" data-target="li"></button>
    //                     </div>
    //                 </li>`);
    //                 //===> Remove Item Method <===//
    //                 Phenix('.post-types-list .remove-item').on('click', button => {
    //                     let menu_item = Phenix(button.target).ancestor('li'),
    //                         remove_number= button.target.name;;
    //                     //===> Set Loading Mode <===//
    //                     menu_item.classList.add('px-loading-inline');
    //                     //===> Loop Throgh Post Types <===//
    //                     post_types.forEach(function(item,index) {
    //                         //===> When the item matches the Post Types <===//
    //                         if (remove_number === `${index}`) {
    //                             //===> Delete the Post Type <===//
    //                             delete post_types[remove_number];
    //                             post_types = post_types.filter(function(x) { return x !== null }); 
    //                             //===> Update Post Type <===//
    //                             add_post_type(post_types);
    //                             //====> Show Notifications <====//
    //                             Phenix(document).notifications({
    //                                 type     : "success", //=== Message Type [normal, error, success, warning]
    //                                 message  : "the Post Type has been Deleted.", //=== Message Content
    //                                 position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                             });
    //                             setTimeout("location.reload(true);",2000);
    //                         }
    //                     })
    //                 }, true);
    //                 //===> Turn ON/OFF Method <===//
    //                 Phenix('.post-types-list .post-type-turn').on('click', isClicked => {
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
    //                     //===> Loop Throgh Post Types <===//
                    
    //                         //===> When the item matches the Post Types <===//
    //                         if (index_number == `${index}`) {
    //                             //===> Delete the Post Type <===//
    //                             post_types[index_number]['open']=x;
    //                             //===> Update Post Type <===//
    //                             add_post_type(post_types);
    //                             //====> Show Notifications <====//
    //                             Phenix(document).notifications({
    //                                 type     : "success", //=== Message Type [normal, error, success, warning]
    //                                 message  : "the Post Type has been "+text+" .", //=== Message Content
    //                                 position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                             });
    //                             setTimeout("location.reload(true);",2000);
    //                         }
                        
    //                 }, true);
    //             })
    //         }).then(response => {
    //         }).catch(error => {error.message});
    //     }

    //     update_post_types_list();

    //     //===> Add Post Type Form <===//
    //     document.querySelector('[name="add-post-type-btn"]')?.addEventListener('click', isClicked => {
    //         //===> Get Controls Elements <===//
    //         let form_Controls = Phenix('[name*="add-post-type"]:not(.btn)'),
    //             new_post_type  = {};

    //         //===> Get Controls Values <===//
    //         form_Controls.forEach(control => {
    //             //===> Validate Control <===//
    //             Phenix(control).validation();

    //             //===> if its valid control <===//
    //             if (!control.matches('.error')) {
    //                 //===> Get Control Name [title, name] <===//
    //                 let control_name = control.getAttribute('name').replace('add-post-type-','');

    //                 //===> Validate the Post Type Name <===//
    //                 if (control_name === 'name' && !control.value) {
    //                     //===> if "name" not exist grap it from the Title <===//
    //                     let post_type_name = Phenix('[name="add-post-type-title"]')[0].value.toLowerCase().replaceAll(' ','-');
    //                     new_post_type[control_name] = post_type_name.toLowerCase().replaceAll(' ','-');
    //                 //===> Add the new Post Type Title <===//
    //                 } else {
    //                     new_post_type[control_name] = control.value;
    //                 }
    //             }
    //         });

    //         //===> if has new Post Type <===//
    //         if (new_post_type['name']) {
    //             //===> Set Loading Mode <===//
    //             isClicked.target.classList.add('px-loading-inline');

    //             //===> Update Post Types List <===//
    //             get_post_types().then(post_types => {
    //                 //===> Check if its Exist <===//
    //                 let alreadyExist;
    //                 if(jQuery.inArray(new_post_type['name'], post_name_arr) != -1) {
    //                      alreadyExist = new_post_type['name'];
    //                 }
                   
    //                 //===> Update Post Types <===//
    //                 if (!alreadyExist) {
    //                     //===> add the new post type to the current ones <===//
    //                     post_types.push({'label':new_post_type['title'],'name':new_post_type['name'],'label_singular':new_post_type['label-singular'],'singular':new_post_type['singular'],'menu_icon':new_post_type['menu_icon'],'menu_position':new_post_type['menu_position'],'open':false});
    //                     //===> Post the New Post Type <===//
    //                     add_post_type(post_types).then(response => {
    //                         //===> Remove Loading Mode <===//
    //                         isClicked.target.classList.remove('px-loading-inline');
    //                         //====> Show Notifications <====//
    //                         Phenix(document).notifications({
    //                             type     : "success", //=== Message Type [normal, error, success, warning]
    //                             message  : "Success : the New Post Type has been Added.", //=== Message Content
    //                             position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                         });
                            
    //                     });
    //                 } else {
    //                     //====> Show Error <====//
    //                     Phenix(document).notifications({
    //                         type     : "error", //=== Message Type [normal, error, success, warning]
    //                         message  : "Error The Post Type Already Exist.", //=== Message Content
    //                         position : ["bottom", "end"],  //=== Message Position [top,center,bottom] [start,center,end]
    //                     });
    //                     //===> Remove Loading Mode <===//
    //                     isClicked.target.classList.remove('px-loading-inline');
    //                 }
    //             }).catch(error => {error.message});
    //         }
    //     });
    // });
</script>