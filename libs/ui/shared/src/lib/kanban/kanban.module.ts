import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { ListDragAndDropsKanbanComponent } from './list-drag-and-drops-kanban/list-drag-and-drops-kanban.component';
import { MaterialModule } from '@port-esdraskhan/material';
import { BoardKanbanComponent } from './board-kanban/board-kanban.component';
import { TaskKanbanComponent } from './task-kanban/task-kanban.component';
import { CreateMuralComponent } from './create-mural/create-mural.component';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListDragAndDropsKanbanComponent,
    BoardKanbanComponent,
    TaskKanbanComponent,
    CreateMuralComponent,
  ],
  imports: [CommonModule, KanbanRoutingModule, MaterialModule, FlexModule,FlexLayoutModule,ReactiveFormsModule,FormsModule],
})
export class KanbanModule {}
