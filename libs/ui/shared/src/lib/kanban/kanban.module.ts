import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { ListDragAndDropsKanbanComponent } from './list-drag-and-drops-kanban/list-drag-and-drops-kanban.component';
import { MaterialModule } from '@port-esdraskhan/material';
import { BoardKanbanComponent } from './board-kanban/board-kanban.component';
import { TaskKanbanComponent } from './task-kanban/task-kanban.component';

@NgModule({
  declarations: [
    ListDragAndDropsKanbanComponent,
    BoardKanbanComponent,
    TaskKanbanComponent,
  ],
  imports: [CommonModule, KanbanRoutingModule, MaterialModule],
})
export class KanbanModule {}
