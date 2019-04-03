import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Hero } from './../../model/hero';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {

  @Input() hero: Hero;
  formHero: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.formHero = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      power: new FormControl('', [Validators.required]),
      dateRegister: new FormControl(new Date())
    });
  }

}
