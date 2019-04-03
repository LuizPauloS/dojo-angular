import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './../model/hero';
import { environment } from 'src/environments/environment';
import { MessagesService } from './../messages/messages.service';

@Injectable()
export class HeroesService {

  constructor(private httpClient: HttpClient,
              private messagesService: MessagesService) { }

  getListHeroes(): Observable<Hero[]> {
    this.log('Buscando lista de heróis!');
    // return of(HEROES); // preenche lista com dados do mock
    return this.httpClient.get<Hero[]>(environment.heroes.findAll);
  }

  private log(message: string): void {
    this.messagesService.sendMessages(message);
  }
}
