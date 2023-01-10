import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaterialModule} from "@port-esdraskhan/material";
import {ListDragAndDropsKanbanComponent} from "./list-drag-and-drops-kanban/list-drag-and-drops-kanban.component";

const routes: Routes = [
  {
    path:"",
    component:ListDragAndDropsKanbanComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),MaterialModule],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
