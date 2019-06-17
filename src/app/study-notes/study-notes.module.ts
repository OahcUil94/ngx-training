import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyNotesRoutingModule } from './study-notes-routing.module';
import { StudyNotesComponent } from './study-notes.component';
import { DecoratorsDemoComponent } from './decorators-demo/decorators-demo.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicChildComponent } from './dynamic/dynamic-child/dynamic-child.component';
import { ModalConComponent } from './modal-con/modal-con.component';
import { ModalModuleModule } from './modal-module/modal-module.module';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    StudyNotesComponent,
    DecoratorsDemoComponent,
    DynamicComponent,
    DynamicChildComponent,
    ModalConComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    StudyNotesRoutingModule,
    ModalModuleModule
  ],
  entryComponents: [
    DynamicChildComponent,
    ModalContentComponent
  ]
})
export class StudyNotesModule { }
