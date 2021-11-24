import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { saiQuestions } from 'src/classes/saiQuestions.model';

@Injectable({
  providedIn: 'root'
})
export class SaiQuestionsService {

  public questions$!: Observable<saiQuestions[]>;
  public questionCollectionRef;

  constructor(private firestore: AngularFirestore) { 
    this.questionCollectionRef = this.firestore.collection<saiQuestions>('questions');
    this.questions$ = this.questionCollectionRef.valueChanges();

  }
  getAllQuestions(){
    return this.questions$;
  }
  createNewAnswers(answers: saiQuestions) :void{
    this.questionCollectionRef.add({
      studentsID: answers.studentsID,
      classID: answers.classID,
      completed: answers.completed,
      question1: answers.question1,
      question2: answers.question2,
      question3: answers.question3,
      question4: answers.question4,
      question5: answers.question5,
      question6: answers.question6,
      question7: answers.question7
    });

  }
}

