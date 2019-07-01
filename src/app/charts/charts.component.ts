import {AfterViewInit, ViewChild, Component, OnInit, ElementRef} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterViewInit {

  @ViewChild('transChartCon', {static: true, read: ElementRef}) transChartCon: ElementRef<HTMLElement>;
  @ViewChild('pieChartCon', {static: true, read: ElementRef}) pieChartCon: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderLineChart();

    this.renderPieChart();
  }

  renderLineChart() {
    const options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    };

    const elem = this.transChartCon.nativeElement;
    Highcharts.chart(elem, options);
  }

  renderPieChart() {
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
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: '企业用户',
          y: 45,
          color: '#35A5ED',
        }, {
          name: 'C端用户',
          y: 55,
          color: '#6EC9C7',
        }]
      }, c => {
        const centerY = c.series[0].center[1],
          titleHeight = parseInt(c.title.styles.fontSize);
        c.setTitle({y: centerY + titleHeight / 2});
        chart = c;
      }]
    };

    const elem = this.pieChartCon.nativeElement;
    Highcharts.chart(elem, options);
  }
}
