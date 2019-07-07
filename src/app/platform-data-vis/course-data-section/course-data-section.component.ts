import { Component, OnInit } from '@angular/core';
import { CourseDataService, CourseInfo } from './course-data.service';

@Component({
  selector: 'app-course-data-section',
  templateUrl: './course-data-section.component.html',
  styleUrls: ['./course-data-section.component.scss'],
  providers: [CourseDataService]
})
export class CourseDataSectionComponent implements OnInit {
  courseInfo: CourseInfo;
  constructor(private service: CourseDataService) { }

  ngOnInit() {
    this.courseInfo = this.service.getEmptyCourseData();
    this.service.getOverviewData().subscribe(v => {
      this.courseInfo = v;
    });
  }
}
