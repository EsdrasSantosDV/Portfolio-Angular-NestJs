import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors} from "@angular/forms";
import {createPassowrdStrengthValidator} from "../validators/password-strength-validator";

@Directive({
  selector: '[portEsdraskhanPasswordStrength]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:PasswordStrengthDirective,
    multi:true

  }]
})
export class PasswordStrengthDirective {

  validate(control: AbstractControl): ValidationErrors | null {
    return createPassowrdStrengthValidator()(control);
  }
}
