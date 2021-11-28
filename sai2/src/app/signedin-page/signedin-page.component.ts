import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/classes/student.model';
import { AuthenticationService } from 'src/services/auth.service';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-signedin-page',
  templateUrl: './signedin-page.component.html',
  styleUrls: ['./signedin-page.component.css']
})
export class SignedinPageComponent implements OnInit {
  public holder!: Observable<Student[]>;
  constructor(private db: AngularFirestore,
    public studentService: StudentService,
    public authService: AuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
    this.db.collection('student').valueChanges().subscribe(val => console.log(val));
    this.studentService.student$.subscribe(stud => {
      this.holder = this.studentService.getAllStudents();
    }
    )

  }
  ngOnDestroy(): void {
  }
  evaluateCourse(id: string){
    this.router.navigate(['/evaluate-course',{class: id}])
  }
}
