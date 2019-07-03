import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformDataVisComponent } from './platform-data-vis.component';

const routes: Routes = [
  { path: '', component: PlatformDataVisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformDataVisRoutingModule { }
