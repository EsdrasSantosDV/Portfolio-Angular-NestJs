import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskKanbanComponent } from './dialog-task-kanban.component';

describe('DialogTaskKanbanComponent', () => {
  let component: DialogTaskKanbanComponent;
  let fixture: ComponentFixture<DialogTaskKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogTaskKanbanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogTaskKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
