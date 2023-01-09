import { Component } from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  form=this.fb.group(
    {
      email:['',{validators:[Validators.required,Validators.email],updateOn:'blur'}],
      password:['',[Validators.required,Validators.minLength(8)]]
    }
  )

  constructor(private fb:NonNullableFormBuilder) {
  }


  get email()
  {
    return this.form.controls['email'];
  }

  get password()
  {
    return this.form.controls['password'];
  }




  login() {
    const formValue=this.form.value;

    this.form.patchValue({

    })
  }

  reset() {

    this.form.reset();

    console.log(this.form.value);
  }

}
