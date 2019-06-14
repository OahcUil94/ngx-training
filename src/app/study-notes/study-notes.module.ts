import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyNotesRoutingModule } from './study-notes-routing.module';
import { StudyNotesComponent } from './study-notes.component';

@NgModule({
  declarations: [StudyNotesComponent],
  imports: [
    CommonModule,
    StudyNotesRoutingModule
  ]
})
export class StudyNotesModule { }
