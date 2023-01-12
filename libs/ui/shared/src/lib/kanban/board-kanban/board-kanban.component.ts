import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ListDragAndDropsKanbanComponent} from "../list-drag-and-drops-kanban/list-drag-and-drops-kanban.component";
import {Mural} from "../../../../../../data/src/lib/model/Mural";

@Component({
  selector: 'ui-board-kanban',
  templateUrl: './board-kanban.component.html',
  styleUrls: ['./board-kanban.component.css'],
})
export class BoardKanbanComponent {
  murals:Mural[]=[]
  constructor() {}
  muralCreate($event: string) {
    this.murals.push({title:$event});
  }
}
