import {Component} from '@angular/core'
import {CourseService} from './course.service'
 
@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor="let course of courses">
                {{ course }} 
            </li>
        </ul>
        `,
        providers: [CourseService]
})
export class CoursesComponent {
    title = "the title of the courses page";
    courses: string[];

    constructor(private courseService: CourseService) {
        this.courses = this.courseService.getCourses();

    }
}