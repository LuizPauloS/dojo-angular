import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: string[];

  constructor() {
    this.messages = [];
  }

  sendMessages(message: string): void {
    this.messages.push(message);
  }

  clearMessages(): void {
    this.messages = [];
  }
}
