import { Hero } from './../../model/hero';
import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { HeroesService } from './../heroes.service';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {

  page = 1;
  hero: Hero;
  title: string;
  heroes: Hero[];
  message: string;

  constructor(private toastr: ToastrService,
              private heroesService: HeroesService) { }

  ngOnInit() {
    this.setarValoresModal();
    this.getListMockHeroes();
  }

  getListMockHeroes(): void {
    try {
      this.heroesService.getListHeroes().subscribe((response) => {
        this.heroes = response;
      }, (error: Error) => {
        console.log(error);
        this.toastr.error(`Ocorreu um erro ao buscar lista Heróis: ${error.message}`);
      });
    } catch (err) {
      console.log(err);
      this.toastr.error('Ocorreu um erro inesperado ao buscar lista de Heróis: ' + err);
    }
  }

  setarHeroi(hero: Hero): void {
    this.hero = hero;
  }

  deletarHeroi(): void {
    try {
      this.heroesService.deletarHeroi(this.hero).subscribe(() => {
        this.heroes = this.heroes.filter(h => h !== this.hero);
        this.toastr.success(`Herói ${this.hero.name} deletado com sucesso!`);
      }, (error: Error) => {
        console.log(error);
        this.toastr.error(`Ocorreu um erro ao deletar Herói ${this.hero.name}: ${error.message}`);
      });
    } catch (err) {
      console.log(err);
      this.toastr.error(`Ocorreu um erro inesperado ao deletar Herói: ${err}`);
    }
  }

  setarValoresModal(): void {
    this.title = 'Deletar Herói';
    this.message = `Tem certeza que você deseja excluir este Herói ?`;
  }
}
