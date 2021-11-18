import { Component, OnInit } from '@angular/core';
import { Course } from 'src/classes/course';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {
  courses: Array<Course> = []

  constructor() { 
    this.courses.push(new Course('Discrete Structures', 3100, 25));
    this.courses.push(new Course('Software Engineering I', 3031, 30));
    this.courses.push(new Course('Client Side Programming', 4864, 20));
  }

  ngOnInit(): void {
  }

}
