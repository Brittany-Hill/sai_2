import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from 'src/classes/student.model';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-signedin-page',
  templateUrl: './signedin-page.component.html',
  styleUrls: ['./signedin-page.component.css']
})
export class SignedinPageComponent implements OnInit {
  public holder!: Observable<Student[]>;

  constructor(private db: AngularFirestore,public studentService: StudentService) { }

  ngOnInit(): void {
    this.db.collection('student').valueChanges().subscribe(val => console.log(val));
    this.studentService.student$.subscribe( stud => {
      this.holder = this.studentService.getAllStudents();
    }
    )
  }
}
