<?php if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif; ?>
<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //===> Tabs <===//
        Phenix('.px-tabs').tabs();

        //===> Advanced Select <===//
        Phenix('.px-select').select();
        
        //===> Validation <===//
        Phenix('.pds-form').validation();
    });
</script>