import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2DataAdressComponent } from './step2-data-adress.component';

describe('Step2DataAdressComponent', () => {
  let component: Step2DataAdressComponent;
  let fixture: ComponentFixture<Step2DataAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Step2DataAdressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Step2DataAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
