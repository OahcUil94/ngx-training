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
  list: ListItemInfo[];

  @ViewChild('transDataChart', {read: ElementRef, static: false}) transDataChart: ElementRef<HTMLElement>;
  chart: any;
  dateRange = [];
  xAxis: string[] = [];
  totalMoney: number[] = [];
  orderCount: number[] = [];
  dateType: number = 7;

  constructor(private service: TransDataService) { }

  ngOnInit() {
    this.list = this.service.getTransDataEmptyList();
    this.service.getTransDataList().subscribe(v => this.list = v);
  }

  ngAfterViewInit() {
    this.renderChart(this.xAxis, this.totalMoney, this.orderCount);

    this.service.getTransDataListByDate({type: this.dateType}).subscribe(data => {
      this.xAxis = data.map(v => v.date.length === 13? v.date.slice(-2): v.date.slice(5));
      this.totalMoney = data.map(v => v.totalMoney / 100);
      this.orderCount = data.map(v => v.orderCount);

      this.renderChart(this.xAxis, this.totalMoney, this.orderCount);
    });
  }

  onChange(): void {
    this.dateType = -1;
    this.service.getTransDataListByDate({
      type: this.dateType,
      startTime: this.getDateString(this.dateRange[0]),
      endTime: this.getDateString(this.dateRange[1])
    }).subscribe(data => {
      this.xAxis = data.map(v => v.date.length === 13? v.date.slice(-2): v.date.slice(5));
      this.totalMoney = data.map(v => v.totalMoney / 100);
      this.orderCount = data.map(v => v.orderCount);

      this.renderChart(this.xAxis, this.totalMoney, this.orderCount);
    });
  }

  handleDateBtnClick(dateType: number) {
    this.dateType = dateType;
    this.dateRange = [];

    this.service.getTransDataListByDate({type: this.dateType}).subscribe(data => {
      this.xAxis = data.map(v => v.date.length === 13? v.date.slice(-2): v.date.slice(5));
      this.totalMoney = data.map(v => v.totalMoney / 100);
      this.orderCount = data.map(v => v.orderCount);

      this.renderChart(this.xAxis, this.totalMoney, this.orderCount);
    });
  }

  renderChart(xAxis: string[], totalMoney: number[], orderCount: number[]) {
    const options = {
      chart: {
        type: 'line'
      },
      title: {
        text: null
      },
      xAxis: {
        categories: xAxis
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
        data: totalMoney,
        color: '#6EC9C7'
      }, {
        id: 'order',
        name: '平台订单数',
        data: orderCount,
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

  getDateString(date: Date): string {
    return date.getFullYear() + '-'
      + ('0' + (date.getMonth() + 1)).slice(-2) + '-'
      + ('0' + date.getDate()).slice(-2) + ' 00:00:00';
  }
}
