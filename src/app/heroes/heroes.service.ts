import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './../model/hero';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeroesService {

  constructor(private httpClient: HttpClient) { }

  salvarHeroi(hero: Hero): Observable<Hero> {
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

  deletarHeroi(hero: Hero): Observable<Hero> {
    return this.httpClient.delete<Hero>(`${environment.heroes.delete}/${hero.id}`);
  }

  findById(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${environment.heroes.findById}/${id}`);
  }

  atualizarHeroi(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${environment.heroes.update}/${hero.id}`, hero);
  }
}
