import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyNotesComponent } from './study-notes.component';

const routes: Routes = [
  { path: '', component: StudyNotesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyNotesRoutingModule { }
