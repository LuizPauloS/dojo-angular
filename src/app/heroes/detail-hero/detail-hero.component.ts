import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero } from './../../model/hero';
import { HeroesService } from './../heroes.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {

  hero: Hero;

  constructor(private location: Location,
              private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroById();
  }

  getHeroById(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroesService.findById(id).subscribe(response => {
      console.log(response);
      this.hero = response;
    });
  }

  voltar() {
    this.location.back();
  }

}
