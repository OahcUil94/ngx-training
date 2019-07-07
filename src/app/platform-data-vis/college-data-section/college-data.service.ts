import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CollegeInfo {
  id: string;
  name: string;
}

export interface CollegeStatsData {
  courseTotal: number;
  publicTotal: number;
  totalMoney: number;
  orderCount: number;
  userTotal: number;
}

@Injectable()
export class CollegeDataService {
  constructor(private http: HttpClient) { }

  getCollegeInfoByHttp(name: string): Observable<CollegeInfo[]> {
    return this.http.post<any>('/api/admin/v1/stats/platform/college/list', {name}).pipe(
      map(v => v.data)
    )
  }

  getCollegeStatsDataByHttp(collegeID: string): Observable<CollegeStatsData> {
    return this.http.post<any>('/api/admin/v1/stats/platform/college/data', {collegeID}).pipe(
      map(v => v.data)
    )
  }
}
