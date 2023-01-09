import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyOneErrorPipe } from './pipes/only-one-error.pipe';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [
    OnlyOneErrorPipe,
    PasswordStrengthDirective
  ],
  exports: [
    OnlyOneErrorPipe,
    PasswordStrengthDirective
  ]
})
export class UtilsModule {}
