import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewHeroComponent } from './new-hero/new-hero.component';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';

const heroesRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'new', component: NewHeroComponent },
  { path: 'detail', component: DetailHeroComponent },
  { path: 'list', component: ListHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
