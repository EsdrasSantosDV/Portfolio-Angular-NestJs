import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskKanbanComponent } from './task-kanban.component';

describe('TaskKanbanComponent', () => {
  let component: TaskKanbanComponent;
  let fixture: ComponentFixture<TaskKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskKanbanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
