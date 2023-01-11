import {Attribute, Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Lesson} from "../../../../../../data/src/lib/model/lesson";
import {TaskKanbanComponent} from "../task-kanban/task-kanban.component";
import {Task} from "../../../../../../data/src/lib/model/task";

@Component({
  selector: 'ui-list-drag-and-drops-kanban',
  templateUrl: './list-drag-and-drops-kanban.component.html',
  styleUrls: ['./list-drag-and-drops-kanban.component.scss'],
})
export class ListDragAndDropsKanbanComponent implements OnInit{


  _title_Mural!:string;
  get titleMural(){
    return this._title_Mural;
  }
  @Input() set
  titleMural(value:string)
  {
    if(value){
      this._title_Mural=value;
    }
  }

  tasks:Task[] = [
    {
      id:1,
      title:'askkdsjakjldsa',
      description:'asdasddasdsasda dasfdasf'
    }
  ];
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.titleMural);
  }
  dropMultiList(event: CdkDragDrop<Task[]>){

    if(event.previousContainer==event.container)
    {
      moveItemInArray(this.tasks,event.previousIndex,event.currentIndex);
    }
    else{
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
    }
  }

  drop(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks,event.previousIndex,event.currentIndex);
  }


}
