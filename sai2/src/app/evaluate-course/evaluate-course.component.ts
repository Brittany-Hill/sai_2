import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';
import { saiQuestions } from 'src/classes/saiQuestions.model';
import { SaiQuestionsService } from 'src/services/sai-questions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-evaluate-course',
  templateUrl: './evaluate-course.component.html',
  styleUrls: ['./evaluate-course.component.css']
})
export class EvaluateCourseComponent implements OnInit {
  constructor(public saiQuestionsService: SaiQuestionsService, public router: Router) { }

   courseForm: FormGroup= new FormGroup({
    anticipated: new FormControl(null),
    learning: new FormControl(null),
    grading: new FormControl(null),
    helpful: new FormControl(null),
    feedback: new FormControl(null)
  })

  ngOnInit(): void {
    
  }
  onSubmit(): void{
    var tempSai = new saiQuestions({
      studentsID: 96019,
      classID:2050,
      completed: true,
      question1: this.courseForm.get("anticipated")?.value,
      question2: this.courseForm.get("learning")?.value,
      question3: this.courseForm.get("grading")?.value,
      question4: this.courseForm.get("helpful")?.value,
      question5: this.courseForm.get("feedback")?.value
    }
    )
    this.saiQuestionsService.createNewAnswers(tempSai);
    this.router.navigate(["/signedin-page"])
  }
}
