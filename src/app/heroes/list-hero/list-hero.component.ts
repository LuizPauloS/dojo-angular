import { Hero } from './../../model/hero';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {

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

}
