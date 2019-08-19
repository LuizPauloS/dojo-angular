import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService } from './shared.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
