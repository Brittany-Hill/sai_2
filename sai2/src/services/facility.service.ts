import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Facility } from 'src/classes/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  public facilityQuestions$!: Observable<Facility[]>;
  public facilityCollectionRef;

  constructor(private firestore: AngularFirestore) {
    this.facilityCollectionRef = this.firestore.collection<Facility>('facility');
    this.facilityQuestions$ = this.facilityCollectionRef.valueChanges();
  }
  getAllQuestions(){
    return this.facilityQuestions$;
  }
  getQuestion1() {
    var temp = this.firestore.collection<Facility>('facilityQuestions',
      ref => ref.where('question1', '!=', '')).valueChanges();
    return temp;
  }
  getQuestion2() {
    var temp = this.firestore.collection<Facility>('facilityQuestions',
      ref => ref.where('question2', '!=', '')).valueChanges();
    return temp;
  }
  getQuestion3() {
    var temp = this.firestore.collection<Facility>('facilityQuestions',
      ref => ref.where('question3', '!=', '')).valueChanges();
    return temp;
  }
  getQuestion4() {
    var temp = this.firestore.collection<Facility>('facilityQuestions',
      ref => ref.where('question4', '!=', '')).valueChanges();
    return temp;
  }
  getQuestion5() {
    var temp = this.firestore.collection<Facility>('facilityQuestions',
      ref => ref.where('question5', '!=', '')).valueChanges();
    return temp;
  }
  createNewAnswers(answers: Facility) :void{
    this.facilityCollectionRef.add({
      studentsID: answers.studentsID,
      question1: answers.question1,
      question2: answers.question2,
      question3: answers.question3,
      question4: answers.question4,
      question5: answers.question5
    });

}
}