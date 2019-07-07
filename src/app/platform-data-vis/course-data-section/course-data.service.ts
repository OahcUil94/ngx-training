import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface CourseOverviewData {
  title: string;
  content: string;
}

export interface PublicCourseInfo {
  count: number;
  percent: number;
}

export interface PublicCourseData {
  total: number;
  online: PublicCourseInfo;
  live: PublicCourseInfo;
  offline: PublicCourseInfo;
}

export interface CourseInfo {
  overviewInfo: CourseOverviewData[];
  publicInfo: PublicCourseData;
}

@Injectable()
export class CourseDataService {
  constructor(private http: HttpClient) { }

  getEmptyCourseData(): CourseInfo {
    return {
      overviewInfo: [{
        title: '平台课程数量：',
        content: '-'
      }, {
        title: '课程访问量：',
        content: '-'
      }, {
        title: '课程销售量：',
        content: '-'
      }],
      publicInfo: {
        total: 0,
        online: {
          count: 0,
          percent: 0
        },
        live: {
          count: 0,
          percent: 0
        },
        offline: {
          count: 0,
          percent: 0
        }
      }
    };
  }

  getOverviewData(): Observable<CourseInfo> {
    return this.getOverviewDataByHttp().pipe(
      map(v => {
        const onlinePercent = parseInt('' + (v.publicOnlineTotal / v.publicCourseTotal * 100));
        const livePercent = parseInt('' + (v.publicLiveTotal / v.publicCourseTotal * 100));
        const offlinePercent = 100 - onlinePercent - livePercent;

        return {
          overviewInfo: [{
            title: '平台课程数量：',
            content: '' + v.courseTotal
          }, {
            title: '课程访问量：',
            content: '' + v.viewTotal
          }, {
            title: '课程销售量：',
            content: '' + v.saleTotal
          }],
          publicInfo: {
            total: v.publicCourseTotal,
            online: {
              count: v.publicOnlineTotal,
              percent: onlinePercent
            },
            live: {
              count: v.publicLiveTotal,
              percent: livePercent
            },
            offline: {
              count: v.publicOfflineTotal,
              percent: offlinePercent
            }
          }
        };
      })
    );
  }

  getOverviewDataByHttp(): Observable<any> {
    return this.http.post<any>('/api/admin/v1/stats/platform/course/data', {}).pipe(
      map(v => v.data)
    )
  }
}
