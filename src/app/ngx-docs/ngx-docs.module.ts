import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDocsRoutingModule } from './ngx-docs-routing.module';
import { NgxDocsComponent } from './ngx-docs.component';
import { DocsGuideComponent } from './docs-guide/docs-guide.component';

@NgModule({
  declarations: [NgxDocsComponent, DocsGuideComponent],
  imports: [
    CommonModule,
    NgxDocsRoutingModule
  ]
})
export class NgxDocsModule { }
