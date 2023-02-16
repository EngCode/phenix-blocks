<?php
    //===> Define Elements <===//
    $plugin_url = plugin_dir_url(__DIR__);
?>
<style>
    /*===> Form Wrapper <===*/
    #loginform {border: 0 none;}

    /*===> Inputs <===*/
    #loginform input:not([type="submit"]):not([type="hidden"]):not([type="checkbox"]),
    #language-switcher-locales {
        border: 1px solid rgba(0, 0, 0, 0.15);
    }

    #loginform p:first-child, .user-pass-wrap {width: 100%;}
    #backtoblog {margin: 0 !important;}
    
    /*===> Language Switcher <===*/
    #language-switcher {
        border-radius: 5px;
        padding: 15px!important;
        background: #FFF!important;
    }

    #language-switcher-locales {
        flex-grow: 1;
        font-size: 12px;
        margin: 0 5px!important;
    }

    #language-switcher .button {
        font-size: 12px!important;
        color: var(--primary-color)!important;
        background-color: transparent!important;
        border-color: var(--primary-color)!important;
    }

    /*===> Password Wrapper <===*/
    .wp-pwd {
        margin-top: 0!important;
        margin-bottom: 1rem;
        position: relative
    }


    /*===> Remember ME <===*/
    input[type="checkbox"]:checked::before {content:''!important;}
    
    #rememberme {
        top: -1px;
        width: 20px;
        height: 20px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border: 1px solid rgba(0,0,0, 0.15);
    }

    input[type="checkbox"]:checked {
        background-size: 60%;
        background-position: center;
        background-repeat: no-repeat;
        color: var(--success-color)!important;
        border-color: var(--success-color)!important;
        background-image: url('<?php echo $plugin_url; ?>assets/img/fa-check.svg')!important;
    }

    .forgetmenot label {
        font-size: 14px;
        padding: 0 3px;
    }
</style>

<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //===> Strip it <===//
        Phenix('.login').removeClass('login');

        //===> Background <===//
        Phenix("body").css({
            "background-color": "var(--primary-dark)"
        });
        
        //===> Logo Image <===//
        Phenix("#login h1 a")[0].remove();
        Phenix('#login h1').insert('append', `<img src="<?php echo $plugin_url; ?>assets/img/px-logo/px-blocks-reverse.svg" alt="logo" width="200" class="mb-30 display-block mgx-auto" />`);
        
        //===> Form <===//
        let FormElement = Phenix("#loginform"),
            LangSwitcher = document.querySelector("#language-switcher"),
            LangSwClasses = ['w-320', 'mgx-auto', 'display-flex', 'align-center-y'],
            FormClasses = ['radius-md', 'bg-white', 'pd-25', 'mb-20', 'flexbox', 'align-between', 'align-center-y'];

        //===> Convert it <===//
        FormElement = FormElement[0];
        FormClasses.forEach(cl => FormElement.classList.add(cl));
        LangSwClasses.forEach(cl => LangSwitcher.classList.add(cl));

        //===> Labels <===//
        FormElement.querySelectorAll('label:not([for="rememberme"])').forEach(label => {
            let classes = ['fs-14', 'mb-10'];
            classes.forEach(cl => label.classList.add(cl));
        });

        //===> .Links. <===//
        let links_items = [];

        Phenix('#nav, #backtoblog').forEach(element => {
            element.classList.add('fs-13');
            links_items.push(element);
        });
        
        Phenix(FormElement).insert('after', `<div class="form-links flexbox align-between mb-20"></div>`);
        links_items.forEach(element => Phenix(".form-links").insert('prepend', element));

        //===> inputs <===//
        document.querySelectorAll('input:not([type="submit"]):not([type="hidden"]):not([type="checkbox"])').forEach(input => {
            let classes = ['form-control', 'mb-20'];
            classes.forEach(cl => input.classList.add(cl));
        });

        //===> Password Button <===//
        let passBtn = FormElement.querySelector('.wp-pwd .button'),
            subBtn  = FormElement.querySelector('#wp-submit'),
            btnClasses  = ['position-ab', 'pos-center-y', 'pos-end-10', 'btn', 'square', 'tiny', 'bg-transparent'],
            btnClassesS = ['btn', 'primary', 'small', 'radius-sm', 'fs-13'],
            btnClassesX = ['button', 'button-secondary', 'button-primary', 'button-large'];

        btnClasses.forEach(cl => passBtn.classList.add(cl));
        btnClassesS.forEach(cl => subBtn.classList.add(cl));
        btnClassesX.forEach(cl => {
            passBtn.classList.remove(cl);
            subBtn.classList.remove(cl);
        });
    });
</script>
