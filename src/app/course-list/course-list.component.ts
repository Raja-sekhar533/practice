import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courses = [
    {
      id: 1,
      name: 'html5'
    },
    {id: 2,
    name: 'css3'
  },
  {
    id: 3,
    name: 'javascript'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
