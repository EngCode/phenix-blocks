<?php
    //===> Define Elements <===//
    $plugin_url = plugin_dir_url(__DIR__);
?>
<div class="px-page-loader" style="display: flex; align-items: center; justify-content: center; position: fixed; inset: 0; z-index: 999999999; width: 100%; min-height: 100vh; background-color: #FFF; text-align: center;">
    <!-- Content Box -->
    <div class="content-box">
        <!-- Spinner -->
        <img class="spinner" style="opacity: 0.5" width="42" height="42" src="data:image/svg+xml,%3Csvg width='42' height='42' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_9y7u%7Banimation:spinner_fUkk 2.4s linear infinite;animation-delay:-2.4s%7D.spinner_DF2s%7Banimation-delay:-1.6s%7D.spinner_q27e%7Banimation-delay:-.8s%7D@keyframes spinner_fUkk%7B8.33%25%7Bx:13px;y:1px%7D25%25%7Bx:13px;y:1px%7D33.3%25%7Bx:13px;y:13px%7D50%25%7Bx:13px;y:13px%7D58.33%25%7Bx:1px;y:13px%7D75%25%7Bx:1px;y:13px%7D83.33%25%7Bx:1px;y:1px%7D%7D%3C/style%3E%3Crect class='spinner_9y7u' x='1' y='1' rx='1' width='10' height='10'/%3E%3Crect class='spinner_9y7u spinner_DF2s' x='1' y='1' rx='1' width='10' height='10'/%3E%3Crect class='spinner_9y7u spinner_q27e' x='1' y='1' rx='1' width='10' height='10'/%3E%3C/svg%3E%0A" alt="<?php echo __('Loading', 'phenix');?>" />
        <!-- Paragraph -->
        <p style="margin-bottom: 0; font-size: 13px; padding: 10px 5px;">---<?php echo __('Loading', 'phenix');?>---</p>
    </div>
    <!-- // Content Box -->
</div>
