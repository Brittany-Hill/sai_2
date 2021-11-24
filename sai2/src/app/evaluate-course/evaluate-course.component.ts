import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { saiQuestions } from 'src/classes/saiQuestions.model';
import { SaiQuestionsService } from 'src/services/sai-questions.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/auth.service';
@Component({
  selector: 'app-evaluate-course',
  templateUrl: './evaluate-course.component.html',
  styleUrls: ['./evaluate-course.component.css']
})
export class EvaluateCourseComponent implements OnInit {
  constructor(public saiQuestionsService: SaiQuestionsService, 
              public router: Router,
              public authService: AuthenticationService) {
              }

   courseForm: FormGroup= new FormGroup({
    question1: new FormControl(null),
    question2: new FormControl(null),
    question3: new FormControl(null),
    question4: new FormControl(null),
    question5: new FormControl(null),
    question6: new FormControl(null),
    question7: new FormControl(null),

  })

  ngOnInit(): void {

  }
  onSubmit(): void{
    var tempSai = new saiQuestions({
      studentsID: 96019,
      classID:2050,
      completed: true,
      question1: this.courseForm.get("question1")?.value,
      question2: this.courseForm.get("question2")?.value,
      question3: this.courseForm.get("question3")?.value,
      question4: this.courseForm.get("question4")?.value,
      question5: this.courseForm.get("question5")?.value,
      question6: this.courseForm.get("question6")?.value,
      question7: this.courseForm.get("question7")?.value,
    }
    )
    this.saiQuestionsService.createNewAnswers(tempSai);
    this.router.navigate(["/signedin"])
  }
}
