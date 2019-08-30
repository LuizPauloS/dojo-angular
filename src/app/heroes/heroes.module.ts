import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeroesService } from './heroes.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from './../shared/shared.module';
import { NewHeroComponent } from './new/new-hero.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { EditHeroComponent } from './edit/edit-hero.component';
import { ListHeroComponent } from './list/list-hero.component';
import { DetailHeroComponent } from './detail/detail-hero.component';

@NgModule({
  declarations: [
    NewHeroComponent,
    DetailHeroComponent,
    ListHeroComponent,
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeroesRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule { }
