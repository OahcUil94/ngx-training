import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformDataVisComponent } from './platform-data-vis.component';
import { PlatformDataVisRoutingModule } from './platform-data-vis-routing.module';
import { DataSectionTitleComponent } from './data-section-title/data-section-title.component';
import { TransDataSectionComponent } from './trans-data-section/trans-data-section.component';

@NgModule({
  declarations: [PlatformDataVisComponent, DataSectionTitleComponent, TransDataSectionComponent],
  imports: [
    CommonModule,
    PlatformDataVisRoutingModule
  ]
})
export class PlatformDataVisModule { }
