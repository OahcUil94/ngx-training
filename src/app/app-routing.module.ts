import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyGuideComponent } from './study-guide/study-guide.component';

const routes: Routes = [
  { path: '', component: StudyGuideComponent },
  { path: 'ngx-docs', loadChildren: './ngx-docs/ngx-docs.module#NgxDocsModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
