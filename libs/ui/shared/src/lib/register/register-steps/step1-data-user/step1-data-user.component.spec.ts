import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1DataUserComponent } from './step1-data-user.component';

describe('Step1DataUserComponent', () => {
  let component: Step1DataUserComponent;
  let fixture: ComponentFixture<Step1DataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step1DataUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Step1DataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
