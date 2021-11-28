import { Component, OnInit } from '@angular/core';
import { Course } from 'src/classes/course';
import { FacilityService } from 'src/services/facility.service';
import { SaiQuestionsService } from 'src/services/sai-questions.service';

@Component({
  selector: 'app-teacher-sai-view',
  templateUrl: './teacher-sai-view.component.html',
  styleUrls: ['./teacher-sai-view.component.css']
})
export class TeacherSaiViewComponent implements OnInit {

  courseSAI:Course = new Course("Discrete Structures",0,0);

  public answers: string[] = [];
  public questions: string[] = [];
  private something: any;
  public numberOfStudents: number = 0
  public courseName = 'Discrete Structures'
  private classID = 'cen 3031';

  constructor(private facilityQuestionsService: FacilityService, private saiQuestionsService: SaiQuestionsService) { 
    facilityQuestionsService.getAllQuestions().forEach(value => {
      if(this.numberOfStudents === 0){
        this.numberOfStudents = value.length;
      }
      value.forEach(entry => {
        this.answers.push(entry.question1);
        this.answers.push(entry.question2);
        this.answers.push(entry.question3);
        this.answers.push(entry.question4);
        this.answers.push(entry.question5);
      })
    })

    saiQuestionsService.getAllQuestions().forEach(value => {
      value.forEach(set => {
        if(set.classID.toString() === this.classID){
          this.questions.push(set.question1);
          this.questions.push(set.question2);
          this.questions.push(set.question3);
          this.questions.push(set.question4);
          this.questions.push(set.question5);
        }
      })
    })

  }

  ngOnInit(): void {
  }

}
