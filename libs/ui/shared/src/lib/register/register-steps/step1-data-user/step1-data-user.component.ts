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
      sex:['',{validators:[Validators.required]}],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirm_password:['',[Validators.required,Validators.minLength(8)]],
      cpf:['',{validators:[Validators.required,Validators.pattern('/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/')]}]
    }
  )
  constructor(private fb:FormBuilder) {
  }


  get email()
  {
    return this.form.controls['email'];
  }

  get cpf(){
    return this.form.controls['cpf'];
  }

  get sex()
  {
    return this.form.controls['sex'];
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
