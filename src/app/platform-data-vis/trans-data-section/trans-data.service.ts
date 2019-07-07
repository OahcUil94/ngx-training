import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ListItemInfo {
  title: string;
  content: string;
  unit: string;
  bgUrl: string;
  classList: string[];
}

@Injectable()
export class TransDataService {
  constructor(private http: HttpClient) { }

  getTransDataEmptyList(): ListItemInfo[] {
    return [{
      title: '企业大学数量：',
      content: '-',
      unit: '',
      bgUrl: 'url(/assets/platform-data-vis/trans-data-section/blue.png)',
      classList: ['blue-shadow']
    }, {
      title: '平台交易总额：',
      content: '-',
      unit: '￥',
      bgUrl: 'url(/assets/platform-data-vis/trans-data-section/cyan.png)',
      classList: ['cyan-shadow']
    }, {
      title: '平台累计订单数：',
      content: '-',
      unit: '',
      bgUrl: 'url(/assets/platform-data-vis/trans-data-section/green.png)',
      classList: ['green-shadow']
    }];
  }

  getTransDataList(): Observable<ListItemInfo[]> {
    return this.getTransData().pipe(
      map(v => {
        const list = this.getTransDataEmptyList();
        list[0].content = v.collegeCount == null? '-': v.collegeCount + '';
        list[1].content = v.totalMoney == null? '-': (v.totalMoney / 100).toFixed(2) + '';
        list[2].content = v.orderCount == null? '-': v.orderCount + '';

        return list;
      })
    );
  }

  login(): Observable<any> {
    return this.http.post<any>('/api/admin/v1/users/login', {
      'username': 'zhixing@zhixingglobal.com',
      'password': '123456'
    })
  }

  getTransData(): Observable<any> {
    return this.http.post<any>('/api/admin/v1/stats/platform/transaction/data', {}).pipe(
      map(v => v.data)
    )
  }


  getTransDataListByDate(data: any): Observable<any> {
    return this.http.post<any>('/api/admin/v1/stats/platform/transaction/data/by/date', data).pipe(
      map(v => v.data)
    )
  }
}
