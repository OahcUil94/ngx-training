import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { PlatformDataVisComponent } from './platform-data-vis.component';
import { PlatformDataVisRoutingModule } from './platform-data-vis-routing.module';
import { DataSectionTitleComponent } from './data-section-title/data-section-title.component';
import { TransDataSectionComponent } from './trans-data-section/trans-data-section.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CourseDataSectionComponent } from './course-data-section/course-data-section.component';
import { UserDataSectionComponent } from './user-data-section/user-data-section.component';
import { CollegeDataSectionComponent } from './college-data-section/college-data-section.component';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
registerLocaleData(zh);

@NgModule({
  declarations: [
    PlatformDataVisComponent,
    DataSectionTitleComponent,
    TransDataSectionComponent,
    DatepickerComponent,
    CourseDataSectionComponent,
    UserDataSectionComponent,
    CollegeDataSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlatformDataVisRoutingModule,
    NzSelectModule,
    NzDatePickerModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ]
})
export class PlatformDataVisModule { }
