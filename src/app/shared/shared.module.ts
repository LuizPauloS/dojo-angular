import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService } from './shared.service';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
