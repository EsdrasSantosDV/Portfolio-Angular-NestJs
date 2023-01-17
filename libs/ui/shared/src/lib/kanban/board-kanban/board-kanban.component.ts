import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {ListDragAndDropsKanbanComponent} from "../list-drag-and-drops-kanban/list-drag-and-drops-kanban.component";
import {MuralF} from "../../../../../../data/src/lib/model/Mural";
import {MuralService} from "../kanban-services/mural/mural.service";
import {map, Observable, skip, Subscription, take, tap} from "rxjs";
import {logger} from "nx/src/utils/logger";



@Component({
  selector: 'ui-board-kanban',
  templateUrl: './board-kanban.component.html',
  styleUrls: ['./board-kanban.component.css'],
})
export class BoardKanbanComponent {
  murals:MuralF[]=[]
  mural$:MuralF;
  constructor(private muralservice:MuralService) {}
  muralCreate($event: string) {
    const mural:MuralF={
      title: $event,
    }

    this.muralservice.createMural(mural).subscribe(  (response) => {
        this.murals.push(response);
      },
      (error) => {
        console.log("error",error);
      });



  }
}
