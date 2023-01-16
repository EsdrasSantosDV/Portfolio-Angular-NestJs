import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatExpansionPanel} from "@angular/material/expansion";

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

  @ViewChild(MatExpansionPanel) expansionPanel: MatExpansionPanel;



  constructor() {
  }

  addInput() {
    this.expansionPanel.close();
    this.inputCreated.emit(this.modelInput);
  }
}
