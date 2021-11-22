import { Component, OnInit } from '@angular/core';
import { Course } from 'src/classes/course';

@Component({
  selector: 'app-teacher-sai-view',
  templateUrl: './teacher-sai-view.component.html',
  styleUrls: ['./teacher-sai-view.component.css']
})
export class TeacherSaiViewComponent implements OnInit {

  courseSAI:Course = new Course("Discrete Structures",0,0);

  constructor() { }

  ngOnInit(): void {
  }

}
