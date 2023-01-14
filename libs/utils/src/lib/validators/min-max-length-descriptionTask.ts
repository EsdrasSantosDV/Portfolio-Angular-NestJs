import {FormControl} from "@angular/forms";

export function minMaxLengthValidator(min: number, max: number) {
  return (control: FormControl) => {
    const length = control.value ? control.value.length : 0;
    if (length < min || length > max) {
      return { minMaxLength: true };
    }
    return null;
  };
}
