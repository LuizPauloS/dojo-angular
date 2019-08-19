import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeroesService } from './heroes.service';
import { SharedModule } from './../shared/shared.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NewHeroComponent } from './new-hero/new-hero.component';
import { ListHeroComponent } from './list-hero/list-hero.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';

@NgModule({
  declarations: [
    NewHeroComponent,
    DetailHeroComponent,
    ListHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeroesRoutingModule
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule { }
