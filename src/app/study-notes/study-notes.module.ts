import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyNotesRoutingModule } from './study-notes-routing.module';
import { StudyNotesComponent } from './study-notes.component';
import { DecoratorsDemoComponent } from './decorators-demo/decorators-demo.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicChildComponent } from './dynamic/dynamic-child/dynamic-child.component';

@NgModule({
  declarations: [
    StudyNotesComponent,
    DecoratorsDemoComponent,
    DynamicComponent,
    DynamicChildComponent
  ],
  imports: [
    CommonModule,
    StudyNotesRoutingModule
  ],
  entryComponents: [DynamicChildComponent]
})
export class StudyNotesModule { }
