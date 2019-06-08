import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourOfHeroesComponent } from './tour-of-heroes.component';

const routes: Routes = [
  { path: '', component: TourOfHeroesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourOfHeroesRoutingModule { }
