import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo', () => {
    const logo = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(logo).toBeTruthy();
  })

  it('logo should have alt text', () => {
    const logo = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(logo.alt).toBe('UWF');
  })
});
