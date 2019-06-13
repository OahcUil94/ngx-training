import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudyGuideComponent } from './study-guide/study-guide.component';
import { DiTrainingComponent } from './di-training/di-training.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyGuideComponent,
    DiTrainingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
