import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateFacilityComponent } from './evaluate-facility.component';

describe('EvaluateFacilityComponent', () => {
  let component: EvaluateFacilityComponent;
  let fixture: ComponentFixture<EvaluateFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
