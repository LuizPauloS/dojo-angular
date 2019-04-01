import { HEROES } from './../shared/mock/mock-heroes';
import { Injectable } from '@angular/core';

import { Hero } from './../model/hero';
import { Observable, of } from 'rxjs';

@Injectable()
export class HeroesService {

  constructor() { }

  getListMockHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
