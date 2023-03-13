import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const password1 = form.get('password1')?.value;
    const password2 = form.get('password2')?.value;
    if (password1 && password2) {
      return password1 === password2 ? null : { password: true };
    }
    return null;
  };
}
