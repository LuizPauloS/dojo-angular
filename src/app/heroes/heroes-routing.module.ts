import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewHeroComponent } from './new/new-hero.component';
import { EditHeroComponent } from './edit/edit-hero.component';
import { ListHeroComponent } from './list/list-hero.component';
import { DetailHeroComponent } from './detail/detail-hero.component';

const heroesRoutes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'new', component: NewHeroComponent },
  { path: 'list', component: ListHeroComponent },
  { path: 'edit/:id', component: EditHeroComponent },
  { path: 'detail/:id', component: DetailHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
