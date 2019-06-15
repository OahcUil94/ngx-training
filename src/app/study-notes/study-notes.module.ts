import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyNotesRoutingModule } from './study-notes-routing.module';
import { StudyNotesComponent } from './study-notes.component';
import { DecoratorsDemoComponent } from './decorators-demo/decorators-demo.component';

@NgModule({
  declarations: [
    StudyNotesComponent,
    DecoratorsDemoComponent
  ],
  imports: [
    CommonModule,
    StudyNotesRoutingModule
  ]
})
export class StudyNotesModule { }
