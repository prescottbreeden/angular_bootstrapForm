import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static usernameTooShort(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).length < 3) {
            return { minlength: {
                requiredLength: 3,
                acutalLength: control.value.length
            }};
        }
        return null;
    }
}
