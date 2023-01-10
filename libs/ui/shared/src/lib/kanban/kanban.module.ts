import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { ListDragAndDropsKanbanComponent } from './list-drag-and-drops-kanban/list-drag-and-drops-kanban.component';
import {MaterialModule} from "@port-esdraskhan/material";

@NgModule({
  declarations: [ListDragAndDropsKanbanComponent],
  imports: [CommonModule, KanbanRoutingModule,MaterialModule],
})
export class KanbanModule {}
