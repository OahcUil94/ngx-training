import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourOfHeroesRoutingModule } from './tour-of-heroes-routing.module';
import { TourOfHeroesComponent } from './tour-of-heroes.component';

@NgModule({
  declarations: [TourOfHeroesComponent],
  imports: [
    CommonModule,
    TourOfHeroesRoutingModule
  ]
})
export class TourOfHeroesModule { }
