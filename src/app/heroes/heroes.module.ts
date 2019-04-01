import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeroesService } from './heroes.service';
import { HeroesComponent } from './heroes.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';

@NgModule({
  declarations: [
    HeroesComponent,
    DetailHeroComponent
  ],
  exports: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ]
})
export class HeroesModule { }
