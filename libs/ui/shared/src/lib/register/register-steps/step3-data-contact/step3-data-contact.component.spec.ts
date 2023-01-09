import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3DataContactComponent } from './step3-data-contact.component';

describe('Step3DataContactComponent', () => {
  let component: Step3DataContactComponent;
  let fixture: ComponentFixture<Step3DataContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step3DataContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Step3DataContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
