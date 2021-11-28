import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { StudentService } from 'src/services/student.service';

import { TestDatabaseComponent } from './test-database.component';

describe('TestDatabaseComponent', () => {
  let component: TestDatabaseComponent;
  let fixture: ComponentFixture<TestDatabaseComponent>;
  let studentService: StudentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireModule
      ],
      declarations: [ TestDatabaseComponent ],
      providers: [StudentService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
