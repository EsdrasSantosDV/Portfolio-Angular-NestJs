import {Component, EventEmitter, Output} from '@angular/core';
import {ListDragAndDropsKanbanComponent} from "../list-drag-and-drops-kanban/list-drag-and-drops-kanban.component";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ui-create-mural',
  templateUrl: './create-mural.component.html',
  styleUrls: ['./create-mural.component.css'],
})
export class CreateMuralComponent {
  @Output()
  muralCreated= new EventEmitter<string>();

  titlemodel?:string;

  constructor() {
  }

  addMurals() {
    this.muralCreated.emit(this.titlemodel);
  }
}
