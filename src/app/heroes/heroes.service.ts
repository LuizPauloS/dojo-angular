import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './../model/hero';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeroesService {

  constructor(private httpClient: HttpClient) { }

  saveHero(hero: Hero): Observable<Hero> {
    this.log('Adicionando novo Hero a api!');
    return this.httpClient.post<Hero>(environment.heroes.save, hero);
  }

  getListHeroes(): Observable<Hero[]> {
    this.log('Buscando lista de heróis!');
    // return of(HEROES); // preenche lista com dados do mock
    return this.httpClient.get<Hero[]>(environment.heroes.findAll);
  }

  private log(message: string): void {
    console.log(message);
  }
}
