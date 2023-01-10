import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'ui-step3-data-contact',
  templateUrl: './step3-data-contact.component.html',
  styleUrls: ['./step3-data-contact.component.css'],
})
export class Step3DataContactComponent {
  form=this.fb.group({
    contacts:this.fb.array([])
  })

  constructor(private fb:FormBuilder) {
  }

  get contacts()
  {
    return this.form.controls["contacts"] as FormArray;
  }

  addContacts()
  {
     const contactsForm=this.fb.group({
      contact:['',Validators.required],
      isPhone:[false,Validators.required],
     });
     this.contacts.push(contactsForm);
  }

  deleteContact(contactIndex:number){
    this.contacts.removeAt(contactIndex);
  }



}
