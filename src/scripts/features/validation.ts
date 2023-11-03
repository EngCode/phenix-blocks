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
                    if (errors_list.querySelector('li:last-child').textContent !== message)
                        errors_list.append(`${message}`);

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

        //===> Control Validation <===//
        let valid_control = (input, submit?) => {
            //===> Get Error Message Position <===//
            let position = input.getAttribute('data-pos') || "after";

            //====> Validation Handler <====//
            let validate = () => {
                let hasError = false;
                //===> Set Error <===//
                input.classList.add('error');
                input.classList.remove('success');

                //====> .Value Check. <====//
                if (input.validity.valueMissing) {
                    hasError = true;
                    let message = defaults?.valueMissing || input.getAttribute('data-message') || pageDir == 'ltr' ? "this field is Required Please fill this field" : "هذا الحقل مطلوب يرجي املاءه";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> .Type/Bad/Pattern Check. <====//
                else if (input.validity.typeMismatch || input.validity.badInput || input.validity.patternMismatch) {
                    hasError = true;
                    let message = defaults?.typeMismatch || input.getAttribute('data-message') || pageDir == 'ltr' ? "You have entered a wrong value please current your value." : "لقد ادخلت قيمة خاطئه يرجي التصحيح.";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> .Too-Long Check. <====//
                else if (input.validity.tooLong || input.validity.rangeOverflow) {
                    hasError = true;
                    let message = defaults?.tooLong || pageDir == 'ltr' ? "You have exceeded the maximum number, please correct the value." : "لقد تخطيت الحد الاقصي يرجي تصحيح القيمة.";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> .Too-Short Check. <====//
                else if (input.validity.tooShort || input.validity.rangeUnderflow || input.validity.stepMismatch) {
                    hasError = true;
                    let message = defaults?.tooLong || pageDir == 'ltr' ? "You entered a value less than the minimum, please correct." : "لقد ادخلت قيمة اقل من الحد الادني يرجي التصحيح.";
                    input.setCustomValidity(message);
                    errorHandler(input, message, position);
                }

                //====> Custom Pattern <====//
                // else if (input.getAttribute('pattern') || input.validity.patternMismatch) {
                //     //===> Get the input Pattern <===//
                //     let regEx = input.getAttribute('pattern');

                //     //===> Check for it <===//
                //     if (!regEx.test(input.value)) {
                //         //===> Return Error <===//
                //         hasError = true;
                //         //===> Return Message Error <===//
                //         let message = input.getAttribute('data-message') || pageDir == 'ltr' ? "You have entered a wrong value please current your value." : "لقد ادخلت قيمة خاطئه يرجي التصحيح.";
                //         input.setCustomValidity(message);
                //         errorHandler(input, message, position);
                //     }
                // }

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
            input.addEventListener("input", event => {
                //===> Remove Error <===//
                input.setCustomValidity('');
                input.classList.remove('error', 'success');
                //===> Delete Error Message <===//
                if (position === 'after') {
                    Phenix(input).next('.px-validation')?.remove();
                } else {
                    Phenix(input).prev('.px-validation')?.remove();
                }
                //====> Check for Validation <====//
                input.checkValidity();
                validate();
            });

            //====> if has invalid value <====//
            input.addEventListener("invalid", invalid => {
                //===> Validate <===//
                validate();
            });

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
                input.addEventListener('change', validate);
            });
        });
    });

    //====> Return Phenix Elements <====//
    return this;
}