import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit{
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: CLI',
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
        price: 99.99,
        code: 'A100',
        duration: 120,
        rating: 5,
        releaseDate: 'March 1, 2020'
      }
    ];
  }
}

