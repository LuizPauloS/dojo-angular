import { Component, OnInit } from '@angular/core';

import { Heroe } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  hero: Heroe;

  constructor() { }

  ngOnInit() {
    this.heroes = [];
    this.heroes.push(this.hero = new Heroe(1, 'Capitão América', 'Força Sobrenatural', new Date()));
    this.heroes.push({ id: 2, name: 'Batman', power: 'Homem Morcego', dateRegister: new Date() });
  }

}
