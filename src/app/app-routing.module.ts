import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonComponent } from './common/common.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: '', component: CommonComponent, children: [
    { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
