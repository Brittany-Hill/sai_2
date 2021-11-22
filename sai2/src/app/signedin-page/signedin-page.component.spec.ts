import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedinPageComponent } from './signedin-page.component';

describe('SignedinPageComponent', () => {
  let component: SignedinPageComponent;
  let fixture: ComponentFixture<SignedinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignedinPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
