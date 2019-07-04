import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ListItemInfo, TransDataService } from './trans-data.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-trans-data-section',
  templateUrl: './trans-data-section.component.html',
  styleUrls: ['./trans-data-section.component.scss'],
  providers: [TransDataService]
})
export class TransDataSectionComponent implements OnInit, AfterViewInit {
  list: ListItemInfo[] = [];
  @ViewChild('transDataChart', {read: ElementRef, static: false}) transDataChart: ElementRef<HTMLElement>;
  chart: any;
  dateRange = [];
  constructor(private service: TransDataService) { }

  ngOnInit() {
    this.list = this.service.getList();
  }

  ngAfterViewInit() {
    this.renderChart();
  }

  onChange(result: Date[]): void {
    console.log(result);
  }

  renderChart() {
    const options = {
      chart: {
        type: 'line'
      },
      title: {
        text: null
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: '平台交易情况'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      series: [{
        id: 'transaction',
        name: '平台交易额',
        data: [1, 0, 4],
        color: '#6EC9C7'
      }, {
        id: 'order',
        name: '平台订单数',
        data: [5, 7, 3],
        color: '#35A5ED'
      }]
    };

    const elem = this.transDataChart.nativeElement;
    this.chart = new (Highcharts as any).Chart(elem, options);
  }

  visibleLine(id: string) {
    if (!this.chart) {
      return;
    }

    const series = this.chart.get(id);
    series.setVisible(!series.visible);
  }
}
