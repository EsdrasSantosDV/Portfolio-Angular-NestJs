import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ui-step1-data-user',
  templateUrl: './step1-data-user.component.html',
  styleUrls: ['./step1-data-user.component.css'],
})
export class Step1DataUserComponent {

  form=this.fb.group(
    {
      name:['',{validators:[Validators.required]}],
      email:['',{validators:[Validators.required,Validators.email],updateOn:'blur'}],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirm_password:['',[Validators.required,Validators.minLength(8)]]
    }
  )
  constructor(private fb:FormBuilder) {
  }


  get email()
  {
    return this.form.controls['email'];
  }

  get name(){
    return this.form.controls['name'];
  }

  get password()
  {
    return this.form.controls['password'];
  }


  get confirm_password()
  {
    return this.form.controls['confirm_password'];
  }



}
