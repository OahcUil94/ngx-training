import { Component, OnInit } from '@angular/core';
import { CourseDataService, CourseOverviewData, PublicCourseData } from './course-data.service';

@Component({
  selector: 'app-course-data-section',
  templateUrl: './course-data-section.component.html',
  styleUrls: ['./course-data-section.component.scss'],
  providers: [CourseDataService]
})
export class CourseDataSectionComponent implements OnInit {
  overviewData: CourseOverviewData[] = this.service.getOverviewEmptyData();
  publicCourseData: PublicCourseData = this.service.getPublicCourseEmptyData();
  constructor(private service: CourseDataService) { }

  ngOnInit() {
    this.overviewData = this.service.getOverviewData();
    this.publicCourseData = this.service.getPublicCourseData();
  }
}
