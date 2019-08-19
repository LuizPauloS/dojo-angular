import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<div class="container">
              <router-outlet></router-outlet>
            </div>`
})
export class AppComponent {
  title = 'ao dojo de Angular';

  constructor(private router: Router) {}

  listHero(): void {
    this.router.navigate(['heroes/list']);
  }

  newHero(): void {
    this.router.navigate(['heroes/new']);
  }

  detailHero(): void {
    this.router.navigate(['heroes/detail']);
  }
}
