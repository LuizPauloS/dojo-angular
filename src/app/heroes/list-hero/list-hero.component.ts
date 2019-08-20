import { Hero } from './../../model/hero';
import { Component, OnInit } from '@angular/core';

import { HeroesService } from './../heroes.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.getListMockHeroes();
  }

  getListMockHeroes(): void {
    this.heroesService.getListHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }

  setarHeroi(hero: Hero): void {
    this.hero = hero;
  }

  deletarHeroi() {
    this.heroes = this.heroes.filter(h => h !== this.hero);
    console.log(`DELETAR HERÓI: ${this.hero.name.toUpperCase()}`);
  }

}
