import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../model/hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;
  heroesMock: Hero[];
  // formHero: FormGroup;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = [];
    this.heroes.push(this.hero = new Hero(1, 'Capitão América', 'Força Sobrenatural', new Date()));
    this.heroes.push({ id: 2, name: 'Batman', power: 'Homem Morcego', dateRegister: new Date() });
    this.getListMockHeroes();
  }

  onSelectHero(hero: Hero): void {
    if (hero !== undefined && hero.id !== 0) {
      this.selectedHero = hero;
      console.log('O Herói informado é: ' + hero.id + ' - ' + hero.name);
    }
  }

  selectedHeroIsNotNull(): boolean {
    if (this.selectedHero !== null && this.selectedHero !== undefined) {
      return true;
    }
    return false;
  }

  getListMockHeroes(): void {
    this.heroesService.getListHeroes().subscribe((response) => {
      this.heroesMock = response;
    });
  }

}
