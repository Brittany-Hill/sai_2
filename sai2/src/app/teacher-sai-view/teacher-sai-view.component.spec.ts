import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSaiViewComponent } from './teacher-sai-view.component';

describe('TeacherSaiViewComponent', () => {
  let component: TeacherSaiViewComponent;
  let fixture: ComponentFixture<TeacherSaiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSaiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSaiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
