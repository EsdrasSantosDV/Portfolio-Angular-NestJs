import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericExpansionInputComponent } from './generic-expansion-input.component';

describe('GenericExpansionInputComponent', () => {
  let component: GenericExpansionInputComponent;
  let fixture: ComponentFixture<GenericExpansionInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericExpansionInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericExpansionInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
