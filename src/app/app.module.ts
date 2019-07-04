import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudyGuideComponent } from './study-guide/study-guide.component';
import { DiTrainingComponent } from './di-training/di-training.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    StudyGuideComponent,
    DiTrainingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN}
  ]
})
export class AppModule { }
