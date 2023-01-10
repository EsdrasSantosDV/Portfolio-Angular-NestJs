import { Component } from '@angular/core';
import {FormBuilder, NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ui-step2-data-adress',
  templateUrl: './step2-data-adress.component.html',
  styleUrls: ['./step2-data-adress.component.css'],
})
export class Step2DataAdressComponent {
  form=this.fb.group({
      number_house:['',{validators:[Validators.required,Validators.min(1)]}],
      complement:['',{validators:[Validators.required]}],
      district:['',{validators:[Validators.required]}],
      state:['',{validators:[Validators.required]}],
      city:['',{validators:[Validators.required]}],
      cep:['',{validators:[Validators.required]}]

  })


  constructor(private fb:FormBuilder) {

  }

  get complement()
  {
   return this.form.controls['complement'];
  }
  get number_house()
  {
    return this.form.controls['number_house'];
  }

  get district()
  {
    return this.form.controls['district'];
  }

  get state()
  {
    return this.form.controls['state'];
  }

  get cep()
  {
    return this.form.controls['cep'];
  }

  get city()
  {
    return this.form.controls['city'];
  }

}
