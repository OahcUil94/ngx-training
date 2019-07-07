import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from "highcharts";
import { UserData, UserDataService } from './user-data.service';

@Component({
  selector: 'app-user-data-section',
  templateUrl: './user-data-section.component.html',
  styleUrls: ['./user-data-section.component.scss'],
  providers: [UserDataService]
})
export class UserDataSectionComponent implements OnInit, AfterViewInit {
  chart: any;
  userData: UserData = {userTotal: 0, coUserTotal: 0};
  @ViewChild('userDataChart', {read: ElementRef, static: false}) userDataChart: ElementRef<HTMLElement>;
  constructor(private service: UserDataService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderChart(50, 50);
    this.service.getUserDataByHttp().subscribe(v => {
      this.userData = v;
      this.renderChart(
        this.userData.coUserTotal,
        this.userData.userTotal - this.userData.coUserTotal
      );
    });
  }

  renderChart(coUserCount: number, toCCount: number) {
    const options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie' // 指定饼图类型
      },
      title: {
        text: null
      },
      tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: '平台用户数据统计',
        colorByPoint: true,
        innerSize: '50%',
        data: [{
          id: 'co_user',
          name: '企业用户',
          y: coUserCount,
          color: '#35A5ED',
          dataLabels: {
            style: {
              fontSize: '0.097rem',
              color: '#111',
              lineHeight: 1
            }
          }
        }, {
          id: 'user',
          name: 'C端用户',
          y: toCCount,
          color: '#6EC9C7',
          dataLabels: {
            style: {
              fontSize: '0.097rem',
              color: '#111',
              lineHeight: 1
            }
          }
        }]
      }]
    };

    const elem = this.userDataChart.nativeElement;
    this.chart = new (Highcharts as any).Chart(elem, options);
  }

  visibleChart(id: string) {
    return ;
    // if (!this.chart) {
    //   return;
    // }
    //
    // const series = this.chart.get(id);
    // series.setVisible(!series.visible);
  }
}
