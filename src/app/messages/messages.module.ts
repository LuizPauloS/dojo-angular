import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [
    MessagesComponent
  ],
  exports: [
    MessagesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MessagesService
  ]
})
export class MessagesModule { }
