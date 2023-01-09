import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-step3-data-contact',
  templateUrl: './step3-data-contact.component.html',
  styleUrls: ['./step3-data-contact.component.css'],
})
export class Step3DataContactComponent {
  form=this.fb.group(({

  }))

  constructor(private fb:FormBuilder) {
  }
}
