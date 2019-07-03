import { Injectable } from '@angular/core';

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

@Injectable()
export class CourseDataService {
  constructor() { }

  getOverviewEmptyData(): CourseOverviewData[] {
    return [{
      title: '平台课程数量：',
      content: '-'
    }, {
      title: '课程访问量：',
      content: '-'
    }, {
      title: '课程销售量：',
      content: '-'
    }];
  }

  getOverviewData(): CourseOverviewData[] {
    return [{
      title: '平台课程数量：',
      content: '7215'
    }, {
      title: '课程访问量：',
      content: '18126'
    }, {
      title: '课程销售量：',
      content: '7652'
    }];
  }

  getPublicCourseData(): PublicCourseData {
    return {
      total: 2061,
      online: {
        count: 1056,
        percent: 51
      },
      live: {
        count: 654,
        percent: 32
      },
      offline: {
        count: 351,
        percent: 17
      }
    };
  }

  getPublicCourseEmptyData(): PublicCourseData {
    return {
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
    };
  }
}
