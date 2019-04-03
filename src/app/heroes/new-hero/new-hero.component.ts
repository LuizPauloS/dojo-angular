import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  formHero: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.formHero = new FormGroup({
      name: new FormControl('', [Validators.required]),
      power: new FormControl('', [Validators.required]),
      dateRegister: new FormControl(new Date())
    });
  }

  save() {
    // TODO save hero
  }

}
