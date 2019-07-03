import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-user-data-section',
  templateUrl: './user-data-section.component.html',
  styleUrls: ['./user-data-section.component.scss']
})
export class UserDataSectionComponent implements OnInit, AfterViewInit {
  chart: any;
  @ViewChild('userDataChart', {read: ElementRef, static: false}) userDataChart: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
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
          y: 45,
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
          y: 55,
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
