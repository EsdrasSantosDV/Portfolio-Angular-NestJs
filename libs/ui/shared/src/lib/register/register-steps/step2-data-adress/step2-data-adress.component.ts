import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-step2-data-adress',
  templateUrl: './step2-data-adress.component.html',
  styleUrls: ['./step2-data-adress.component.css'],
})
export class Step2DataAdressComponent {
  form=this.fb.group(({

  }))

  constructor(private fb:FormBuilder) {
  }
}
