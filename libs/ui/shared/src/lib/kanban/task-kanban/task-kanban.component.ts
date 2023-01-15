import {Component, Input} from '@angular/core';
import { TaskF} from "../../../../../../data/src/lib/model/task";
import {openEditTaskDialog} from "../dialog-task-kanban/dialog-task-kanban.component";
import {MatDialog} from "@angular/material/dialog";
import {filter} from "rxjs";
import {logger} from "nx/src/utils/logger";

@Component({
  selector: 'ui-task-kanban',
  templateUrl: './task-kanban.component.html',
  styleUrls: ['./task-kanban.component.css'],
})
export class TaskKanbanComponent {
  @Input()
  task:TaskF;


  constructor(private dialog: MatDialog) {

  }


  editTask(task: TaskF) {

    openEditTaskDialog(this.dialog,task).pipe(filter(val=>!!val)).subscribe(
      val => console.log('new task value:', val)
    );

  }
}
