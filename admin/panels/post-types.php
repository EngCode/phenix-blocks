<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20">
        <!-- Area Title -->
        <h3 class="fs-16 mb-5 weight-medium"><?php echo px__('Add New Post Type'); ?></h3>
        <p class="mb-20 fs-14"><?php echo px__('you can add menu post types from below form.'); ?></p>
        <!-- Form Control -->
        <div class="control-icon far fa-list mb-15">
            <input type="text" name="add-post-type-title" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('Post Type Title');?>" required>
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-archive mb-15">
            <input type="text" name="add-post-type-name" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('post-type-name');?>">
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-archive mb-15">
            <input type="text" name="add-post-type-label-singular" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('Label Singular');?>">
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-archive mb-15">
            <input type="text" name="add-post-type-singular" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('Singular');?>">
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-archive mb-15">
            <input type="text" name="add-post-type-menu-icon" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('Menu Icon');?>">
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-archive mb-15">
            <input type="text" name="add-post-type-menu-position" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('Menu Position');?>">
        </div>
        <!-- Form Control -->
        <button type="button" name="add-post-type-btn" class="btn primary radius-sm small ms-auto display-block"><?php echo px__('Add Post Type'); ?></button>
    </div>
    <!-- Column -->
    <div class="col col-lg-6 pdy-10">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-5 weight-medium"><?php echo px__(' Post Types'); ?></h3>
                <p class="fs-14"><?php echo px__('in here you can manage the  post types created by phenix-blocks.'); ?></p>
            </div>
        </div>
        <!-- Post Types List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm post-types-list">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-5"><?php echo px__('Post Type Title'); ?></span>
                <span class="col-5"><?php echo px__('Post Type Name'); ?></span>
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