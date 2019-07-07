import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserData {
  userTotal: number;
  coUserTotal: number;
}

@Injectable()
export class UserDataService {
  constructor(private http: HttpClient) { }

  getUserDataByHttp(): Observable<UserData> {
    return this.http.post<any>('/api/admin/v1/stats/platform/user/data', {}).pipe(
      map(v => v.data)
    )
  }
}
