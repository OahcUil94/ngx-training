import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxDocsComponent } from './ngx-docs.component';

const routes: Routes = [
  { path: '', component: NgxDocsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxDocsRoutingModule { }
