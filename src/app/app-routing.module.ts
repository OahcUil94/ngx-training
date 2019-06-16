import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyGuideComponent } from './study-guide/study-guide.component';

const routes: Routes = [
  { path: '', component: StudyGuideComponent },
  { path: 'ngx-docs', loadChildren: './ngx-docs/ngx-docs.module#NgxDocsModule' },
  { path: 'ngx-case', loadChildren: './ngx-case/ngx-case.module#NgxCaseModule' },
  { path: 'study-notes', loadChildren: './study-notes/study-notes.module#StudyNotesModule' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
