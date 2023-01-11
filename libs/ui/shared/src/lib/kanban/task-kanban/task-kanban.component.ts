import {Component, Input} from '@angular/core';
import {Task} from "../../../../../../data/src/lib/model/task";

@Component({
  selector: 'ui-task-kanban',
  templateUrl: './task-kanban.component.html',
  styleUrls: ['./task-kanban.component.css'],
})
export class TaskKanbanComponent {
  @Input()
  task?:Task;


  constructor() {

  }

}
