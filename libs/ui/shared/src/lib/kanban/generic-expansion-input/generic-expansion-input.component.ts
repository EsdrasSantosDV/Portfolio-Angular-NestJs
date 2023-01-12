import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ui-generic-expansion-input',
  templateUrl: './generic-expansion-input.component.html',
  styleUrls: ['./generic-expansion-input.component.css'],
})
export class GenericExpansionInputComponent {
  @Output()
  inputCreated= new EventEmitter<string>();

  modelInput?:string;

  @Input()
  labelProperty?:string;




  constructor() {
  }

  addInput() {
    this.inputCreated.emit(this.modelInput);
  }
}
