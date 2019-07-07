import { Component, OnInit } from '@angular/core';
import { CollegeDataService, CollegeInfo, CollegeStatsData } from './college-data.service';

@Component({
  selector: 'app-college-data-section',
  templateUrl: './college-data-section.component.html',
  styleUrls: ['./college-data-section.component.scss'],
  providers: [CollegeDataService]
})
export class CollegeDataSectionComponent implements OnInit {
  selectedValue = null;
  collegeList: CollegeInfo[] = [];
  collegeStatsData: CollegeStatsData = {
    courseTotal: 0, publicTotal: 0,
    totalMoney: 0, orderCount: 0, userTotal: 0
  };

  loading: boolean = false;

  constructor(private service: CollegeDataService) {}

  ngOnInit() {
    if (this.loading) {
      return ;
    }
    this.loading = true;
    this.service.getCollegeInfoByHttp('').subscribe(v => {
      this.loading = false;
      this.collegeList = v;
    });
  }


  onSearchChange(v: any) {
    if (this.loading) {
      return ;
    }
    this.loading = true;
    this.service.getCollegeInfoByHttp(v).subscribe(v => {
      this.loading = false;
      this.collegeList = v;
    });
  }

  onSelectChange() {
    if (!!this.selectedValue) {
      this.service.getCollegeStatsDataByHttp(this.selectedValue).subscribe(v => this.collegeStatsData = v);
    }
  }
}
