import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMuralComponent } from './create-mural.component';

describe('CreateMuralComponent', () => {
  let component: CreateMuralComponent;
  let fixture: ComponentFixture<CreateMuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMuralComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
