import { Heroe } from './../model/heroe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  heroe: Heroe;

  constructor() { }

  ngOnInit() {
    this.heroes = [];
    this.heroes.push(this.heroe = new Heroe(1, 'Capitão América', 'Força Sobrenatural', new Date()));
    this.heroes.push({ id: 2, name: 'Batman', power: 'Homem Morcego', dateRegister: new Date() });
  }

}
