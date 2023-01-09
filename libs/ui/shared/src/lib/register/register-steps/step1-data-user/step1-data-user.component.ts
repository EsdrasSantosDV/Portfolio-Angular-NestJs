import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-step1-data-user',
  templateUrl: './step1-data-user.component.html',
  styleUrls: ['./step1-data-user.component.css'],
})
export class Step1DataUserComponent {

  form=this.fb.group(({

  }))

  constructor(private fb:FormBuilder) {
  }
}
