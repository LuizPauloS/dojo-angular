import { CommonComponent } from './common/common.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
//  { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' },
  { path: '', component: CommonComponent, children: [
    { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
