import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { ListDragAndDropsKanbanComponent } from './list-drag-and-drops-kanban/list-drag-and-drops-kanban.component';
import { MaterialModule } from '@port-esdraskhan/material';
import { BoardKanbanComponent } from './board-kanban/board-kanban.component';
import { TaskKanbanComponent } from './task-kanban/task-kanban.component';

import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericExpansionInputComponent } from './generic-expansion-input/generic-expansion-input.component';
import { DialogTaskKanbanComponent } from './dialog-task-kanban/dialog-task-kanban.component';
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {TagService} from "./kanban-services/label/tag.service";
import {TaskService} from "./kanban-services/task/task.service";
import {MuralService} from "./kanban-services/mural/mural.service";

@NgModule({
  declarations: [
    ListDragAndDropsKanbanComponent,
    BoardKanbanComponent,
    TaskKanbanComponent,
    GenericExpansionInputComponent,
    DialogTaskKanbanComponent,
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    MaterialModule,
    FlexModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatLegacyChipsModule,
  ],
  providers:[
    TagService,
    TaskService,
    MuralService
  ]
})
export class KanbanModule {}
