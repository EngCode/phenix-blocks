/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Validation
 * ===> 03 - Default Browser Api
 * ===> 04 - Multiple Validation
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Validation <====*/
PhenixElements.prototype.validation = function (options?:{
    //===> Error Message Default Api
    defaults?:{
        valueMissing?:string,  //===> Error for Missing Values
        typeMismatch?:string,  //===> Error for Type
        tooLong?:string,       //===> Error for too Long Value
        tooShort?:string,      //===> Error for too Short Value
    },
    //====> Different Pattern for Each input <====//
    patterns?:[{
        name?:string,     //===> Input Name Attribute
        pattern?:string,  //===> RegEx Pattern
        message?:string,  //===> Error Message
        position?:string, //===> Message Position [top, bottom]
    }], 
}) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element:any) => {
        //====> Get Options Data <====//
        let defaults  = options?.defaults,
            patterns  = options?.patterns,
            pageDir   = Phenix(document).direction();

        //===> Error Handler <===//
        const errorHandler = (input, message, position) => {
            //===> Set Error <===//
            input.classList.add('error');
            input.classList.remove('success');

            //===> Check for Error Message <===//
            let hasError = position === 'before' ? Phenix(input).prev('.px-validation') : Phenix(input).next('.px-validation');

            //====> if already has errors <====//
            if (hasError) {
                //===> get the errors list <===//
                let errors_list = hasError.querySelector('.errors-list');

                //====> if it has error list <====//
                if(errors_list) {
                    //===> Create a new Message <===//
                    if (errors_list.querySelector('li:last-child').textContent !== message) errors_list.append(`${message}`);
                //====> Create an Error List <====//
                } else if (hasError.textContent !== message) {
                    //===> get previous message <===//
                    let original = hasError.textContent;

                    //===> Create the List <===//
                    hasError.innerHTML = `<ul class="errors-list reset-list">
                        <li>${original}</li>
                        ${original !== message ? `<li>${message}</li>`: ''}
                    </ul>`;
                }
            }

            //===> Create Error Message <===//
            else {
                Phenix(input).insert('after', `<div class="px-validation color-danger">${message}</div>`);
            }
        };

        //====> Reset Method <====//
        const reset_status = (input, position) => {
             //===> Remove Error <===//
             input.setCustomValidity('');
             input.classList.remove('error', 'success');
             //===> Delete Error Message <===//
             if (position === 'after') {
                 Phenix(input).next('.px-validation')?.remove();
             } else {
                 Phenix(input).prev('.px-validation')?.remove();
             }
        };

        //===> Control Validation <===//
        let valid_control = (input, submit?) => {
            //===> Get Error Message Position <===//
            let position = input.getAttribute('data-pos') || "after";

            //====> Validation Handler <====//
            let validate = () => {
                let hasError = false;
                let message = input.getAttribute('data-message');
                //===> Set Error <===//
                input.classList.add('error');
                input.classList.remove('success');

                //====> .Value Check. <====//
                if (input.validity.valueMissing) {
                    hasError = true;
                    if (!message) message = pageDir == 'ltr' ? "this field is required!" : "هذا الحقل مطلوب يرجي املاءه";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> .Type/Bad/Pattern Check. <====//
                else if (input.validity.typeMismatch || input.validity.badInput || input.validity.patternMismatch) {
                    hasError = true;
                    if (!message && input.getAttribute('type') === "email") message = pageDir == 'ltr' ? "please enter a valid e-mail!" : "من فضلك ادخل عنوان بريد صحيح.";
                    if (!message) message = input.getAttribute('data-message') || defaults?.typeMismatch || pageDir == 'ltr' ? "please correct your value." : "لقد ادخلت قيمة خاطئه يرجي التصحيح.";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> .Too-Long Check. <====//
                else if (input.validity.tooLong || input.validity.rangeOverflow) {
                    hasError = true;
                    if (!message) message = defaults?.tooLong || pageDir == 'ltr' ? "you have exceeded the maximum number." : "لقد تخطيت الحد الاقصي يرجي تصحيح القيمة.";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> .Too-Short Check. <====//
                else if (input.validity.tooShort || input.validity.rangeUnderflow || input.validity.stepMismatch) {
                    hasError = true;
                    if (!message) message = pageDir == 'ltr' ? "your value is less than the minimum." : "لقد ادخلت قيمة اقل من الحد الادني يرجي التصحيح.";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> .Success. <====//
                else if (input.validity.valid) {
                    //===> Remove Error <===//
                    input.classList.remove('error');
                    //===> Delete Error Message <===//
                    if (position === 'after') {
                        Phenix(input).next('.px-validation')?.remove();
                    } else {
                        Phenix(input).prev('.px-validation')?.remove();
                    }
                }

                //===> Do not Submit <===//
                if (submit && hasError) submit.preventDefault();
                return hasError;
            }

            //====> Reset When New Value is Set <====//
            if (input.tagName !== 'SELECT') input.addEventListener("input", event => {
                reset_status(input, position);
                input.checkValidity();
                validate();
            });

            else if (input.tagName === 'SELECT') input.addEventListener("change", event => {
                reset_status(input, position);
                input.checkValidity();
                validate();
            });

            //====> if has invalid value Re-Validate <====//
            input.addEventListener("invalid", invalid => validate());

            //====> Init <====//
            validate();
        }

        //===> Active on Form Submit <===//
        if(element.tagName == 'FORM') {
            element.addEventListener('submit', isSubmitting => {
                element.querySelectorAll('input, textarea, select').forEach(item => {
                    valid_control(item, isSubmitting);
                });
            });
        }

        //===> Active for Controls <===//
        else {
            valid_control(element);
        }

        //====> Multiple Validation <====//
        if (patterns && patterns.length > 0) patterns.forEach(pattern => {
            //====> Get the Pattern Data <====//
            let inputs    = element.tagName == 'FORM' ? element.querySelectorAll(`[name="${pattern.name}"]`) : [element],
                regEx:any = pattern.pattern,
                message   = pattern.message,
                position  = pattern.position || 'after';

            //====> For Each Input <====//
            inputs.forEach(input => {
                //====> Get input Value <====//
                let validate = () => {
                    //====> Check the Pattern <====//
                    if (regEx.test(input.value)) {
                        //===> Set Success <===//
                        input.classList.add('success');
                        input.classList.remove('error');
                        //===> Delete Error Message <===//
                        if (position === 'after') {
                            Phenix(input).next('.px-validation')?.remove();
                        } else {
                            Phenix(input).prev('.px-validation')?.remove();
                        }
                    } else {
                        errorHandler(input, message, position);
                    }
                };
                //====> Check While input <====//
                if (input.tagName !== 'SELECT') input.addEventListener('input', validate);
                else if (input.tagName === 'SELECT') input.addEventListener('change', validate);
            });
        });
    });

    //====> Return Phenix Elements <====//
    return this;
}