/**======> Referance By Comment <======
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
        pattern?:string,  //===> RegEx Pattren
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

        //===> Control Validation <===//
        let valid_control = (input, submit?) => {
            //====> Validation Handler <====//
            let validate = () => {
                let hasError = false;
                //===> Set Error <===//
                input.classList.add('error');
                input.classList.remove('success');

                //====> .Value Check. <====//
                if (input.validity.valueMissing) {
                    let message = defaults?.valueMissing || pageDir == 'ltr' ? "Please fill this field is Reqiuered" : "هذا الحقل مطلوب يرجي املائه";
                    input.setCustomValidity(message);
                    hasError = true;
                }

                //====> .Type/Bad/Pattren Check. <====//
                else if (input.validity.typeMismatch || input.validity.badInput || input.validity.patternMismatch) {
                    let message = defaults?.typeMismatch || pageDir == 'ltr' ? "You have entered a wrong value please currect your value." : "لقد ادخلت قيمة خاطئه يرجي التصحيح.";
                    input.setCustomValidity(message);
                    hasError = true;
                }

                //====> .Too-Long Check. <====//
                else if (input.validity.tooLong || input.validity.rangeOverflow) {
                    let message = defaults?.tooLong || pageDir == 'ltr' ? "You have exceeded the maximum number, please correct the value." : "لقد تخطيت الحد الاقصي يرجي تصحيح القيمة.";
                    input.setCustomValidity(message);
                    hasError = true;
                }

                //====> .Too-Short Check. <====//
                else if (input.validity.tooShort || input.validity.rangeUnderflow || input.validity.stepMismatch) {
                    let message = defaults?.tooLong || pageDir == 'ltr' ? "You entered a value less than the minimum, please correct." : "لقد ادخلت قيمة اقل من الحد الادني يرجي التصحيح.";
                    input.setCustomValidity(message);
                    hasError = true;
                }

                //====> .Success. <====//
                else if (input.validity.valid) {
                    //===> Remove Error <===//
                    input.classList.remove('error');
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
            element.addEventListener('submit', isSubmiting => {
                element.querySelectorAll('input, textarea, select').forEach(item => {
                    valid_control(item, isSubmiting);
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
            let inputs    = element.querySelectorAll(`[name="${pattern.name}"]`),
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
                                    //===> get previose message <===//
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