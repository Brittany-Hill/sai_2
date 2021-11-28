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
  public numberOfStudents: number = 0
  public courseName = 'Discrete Structures'
  private classID = 'cen3031';

  constructor(private facilityQuestionsService: FacilityService, private saiQuestionsService: SaiQuestionsService) { 
    saiQuestionsService.getAllQuestions().forEach(value => {
      value.forEach(set => {
        if(set.classID.toString() === this.classID){
          this.answers.push(set.question1);
          this.answers.push(set.question2);
          this.answers.push(set.question3);
          this.answers.push(set.question4);
          this.answers.push(set.question5);
          this.answers.push(set.question6);
          this.answers.push(set.question7);
        }
      })
    })

  }

  ngOnInit(): void {
  }

}
