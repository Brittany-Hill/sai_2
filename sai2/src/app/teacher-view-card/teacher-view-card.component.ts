import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/classes/course';

@Component({
  selector: 'app-teacher-view-card',
  templateUrl: './teacher-view-card.component.html',
  styleUrls: ['./teacher-view-card.component.css']
})
export class TeacherViewCardComponent implements OnInit {

  @Input() course!: Course;

  constructor() {}

  ngOnInit(): void {
  }

}
