import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxDocsComponent } from './ngx-docs.component';
import { DocsGuideComponent } from './docs-guide/docs-guide.component';

const routes: Routes = [
  {
    path: '', component: NgxDocsComponent, children: [
      { path: 'guide', component: DocsGuideComponent },
      { path: 'online-store', loadChildren: './online-store/online-store.module#OnlineStoreModule' },
      { path: 'tour-of-heroes', loadChildren: './tour-of-heroes/tour-of-heroes.module#TourOfHeroesModule' },
      { path: '**', redirectTo: '/ngx-docs/guide', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxDocsRoutingModule { }
