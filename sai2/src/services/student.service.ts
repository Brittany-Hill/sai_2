import { Injectable } from '@angular/core';
import { Student } from 'src/classes/student.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public student$: Observable<Student[]>;
  public studentCollectionRef;

  constructor( 
    private firestore: AngularFirestore
    ) {
    this.studentCollectionRef = this.firestore.collection<Student>('student');
    this.student$ = this.studentCollectionRef.valueChanges();
   }

   public getAllStudents(){
     return this.student$;
   }
   public getStudentByName(name: string): Observable<Student[]>{
     return this.firestore.collection<Student>(
       'student', ref => ref.where('name', '==', name)
     ).valueChanges();
   }
}
