import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDragAndDropsKanbanComponent } from './list-drag-and-drops-kanban.component';

describe('ListDragAndDropsKanbanComponent', () => {
  let component: ListDragAndDropsKanbanComponent;
  let fixture: ComponentFixture<ListDragAndDropsKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDragAndDropsKanbanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDragAndDropsKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
