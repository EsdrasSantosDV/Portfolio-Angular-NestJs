import { Component } from '@angular/core';
import {ListDragAndDropsKanbanComponent} from "../list-drag-and-drops-kanban/list-drag-and-drops-kanban.component";

@Component({
  selector: 'ui-board-kanban',
  templateUrl: './board-kanban.component.html',
  styleUrls: ['./board-kanban.component.css'],
})
export class BoardKanbanComponent {

  murals:ListDragAndDropsKanbanComponent[]=[]
  newList=new ListDragAndDropsKanbanComponent();

  constructor() {
  }

  addMurals() {
    this.murals.push(this.newList);
  }
}
