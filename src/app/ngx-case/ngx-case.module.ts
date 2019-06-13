import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxCaseRoutingModule } from './ngx-case-routing.module';
import { NgxCaseComponent } from './ngx-case.component';

@NgModule({
  declarations: [NgxCaseComponent],
  imports: [
    CommonModule,
    NgxCaseRoutingModule
  ]
})
export class NgxCaseModule { }
