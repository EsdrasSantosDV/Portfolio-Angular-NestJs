import { Attribute, Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Lesson } from '../../../../../../data/src/lib/model/lesson';
import { TaskKanbanComponent } from '../task-kanban/task-kanban.component';
import { Task } from '../../../../../../data/src/lib/model/task';
import { Mural } from '../../../../../../data/src/lib/model/Mural';

@Component({
  selector: 'ui-list-drag-and-drops-kanban',
  templateUrl: './list-drag-and-drops-kanban.component.html',
  styleUrls: ['./list-drag-and-drops-kanban.component.scss'],
})
export class ListDragAndDropsKanbanComponent {
  _Mural!: Mural;
  get mural() {
    return this._Mural;
  }
  @Input() set mural(value: Mural) {
    if (value) {
      this._Mural = value;
    }
  }

  tasks: Task[] = [

  ];
  constructor() {}

  dropMultiList(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  taskCreate($event: string) {
    this.tasks.push({
      id: 1,
      title: $event,
      description: 'asdasddasdsasda dasfdasf',
    });
  }
}
