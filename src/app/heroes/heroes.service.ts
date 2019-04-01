import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { Hero } from './../model/hero';
import { HEROES } from './../shared/mock/mock-heroes';
import { MessagesService } from './../messages/messages.service';

@Injectable()
export class HeroesService {

  constructor(private messagesService: MessagesService) { }

  getListMockHeroes(): Observable<Hero[]> {
    this.messagesService.sendMessages('Buscando lista de heróis!');
    return of(HEROES);
  }
}
