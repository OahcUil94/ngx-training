import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxCaseComponent } from "./ngx-case.component";

const routes: Routes = [
  { path: '', component: NgxCaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxCaseRoutingModule { }
