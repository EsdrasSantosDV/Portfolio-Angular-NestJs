import {Component} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";

@Component({
  selector: 'ui-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError:true}
    }
  ]
})
export class RegisterComponent {




  submit(step1:FormGroup, step2:FormGroup, step3:FormGroup) {

    console.log(step1, step2, step3);

  }

}
