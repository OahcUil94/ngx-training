import { Injectable } from '@angular/core';

export interface ListItemInfo {
  title: string;
  content: string;
  unit: string;
  bgUrl: string;
  classList: string[];
}

@Injectable()
export class TransDataService {
  constructor() { }

  getList(): ListItemInfo[] {
    return [{
      title: '企业大学数量：',
      content: '516',
      unit: '',
      bgUrl: 'url(/assets/platform-data-vis/trans-data-section/blue.png)',
      classList: ['blue-shadow']
    }, {
      title: '平台交易总额：',
      content: '173062.06',
      unit: '￥',
      bgUrl: 'url(/assets/platform-data-vis/trans-data-section/cyan.png)',
      classList: ['cyan-shadow']
    }, {
      title: '平台累计订单数：',
      content: '15623',
      unit: '',
      bgUrl: 'url(/assets/platform-data-vis/trans-data-section/green.png)',
      classList: ['green-shadow']
    }];
  }
}
