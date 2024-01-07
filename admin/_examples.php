<?php
function myplugin_add_meta_box() {
    add_meta_box(
        'myplugin_meta_box', // ID of the metabox
        'My Custom Metabox', // Title displayed for the metabox
        'myplugin_display_meta_box', // Callback function that displays the metabox
        'post' // Post type where the metabox should be displayed
    );
}
add_action('add_meta_boxes', 'myplugin_add_meta_box');

function myplugin_display_meta_box($post) {
    $value = get_post_meta($post->ID, '_myplugin_meta_key', true);
    echo '<label for="myplugin_new_field">My Custom Field</label>';
    echo '<input type="text" id="myplugin_new_field" name="myplugin_new_field" value="' . esc_attr($value) . '" />';
}

function myplugin_save_meta_box($post_id) {
    if (array_key_exists('myplugin_new_field', $_POST)) {
        update_post_meta(
            $post_id,
            '_myplugin_meta_key',
            $_POST['myplugin_new_field']
        );
    }
}
add_action('save_post', 'myplugin_save_meta_box');

//====> Taxonomies Example <====//
function myplugin_add_category_field($term) {
    $value = get_term_meta($term->term_id, 'myplugin_meta_key', true);
    ?>
    <tr class="form-field">
        <th scope="row"><label for="myplugin_meta_key">My Custom Field</label></th>
        <td>
            <input type="text" id="myplugin_meta_key" name="myplugin_meta_key" value="<?php echo esc_attr($value); ?>" />
        </td>
    </tr>
    <?php
}
add_action('category_edit_form_fields', 'myplugin_add_category_field');

function myplugin_save_category_field($term_id) {
    if (array_key_exists('myplugin_meta_key', $_POST)) {
        update_term_meta(
            $term_id,
            'myplugin_meta_key',
            $_POST['myplugin_meta_key']
        );
    }
}
add_action('edited_category', 'myplugin_save_category_field');