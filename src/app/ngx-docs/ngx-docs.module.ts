import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDocsRoutingModule } from './ngx-docs-routing.module';
import { NgxDocsComponent } from './ngx-docs.component';

@NgModule({
  declarations: [NgxDocsComponent],
  imports: [
    CommonModule,
    NgxDocsRoutingModule
  ]
})
export class NgxDocsModule { }
