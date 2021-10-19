import { Component, OnInit } from '@angular/core';
import { Student } from 'src/classes/student.model';
import { StudentService } from 'src/services/student.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { studentInterface } from '../interfaces/studentInterface';

@Component({
  selector: 'app-test-database',
  templateUrl: './test-database.component.html',
  styleUrls: ['./test-database.component.css']
})
export class TestDatabaseComponent implements OnInit {
  public holder!: Observable<Student[]>;
  constructor(public studentService: StudentService){};

  ngOnInit(): void {
    this.studentService.student$.subscribe( stud => {
      this.holder = this.studentService.getAllStudents();
    }
    )
  }

}
