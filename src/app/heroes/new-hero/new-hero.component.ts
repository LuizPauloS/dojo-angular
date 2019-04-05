import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { isNullOrUndefined } from 'util';
import { HeroesService } from './../heroes.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  formHero: FormGroup;

  constructor(private router: Router,
              private toastr: ToastrService,
              private heroesService: HeroesService) { }

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
    if (!isNullOrUndefined(this.formHero.get('name').value && !isNullOrUndefined(this.formHero.get('power').value))) {
      this.heroesService.saveHero(this.formHero.value).subscribe();
      this.toastr.success('Hero adicionado com sucesso!');
      this.router.navigate(['heroes/list']);
    } else {
      this.toastr.error('Formulário incompleto!');
    }
  }

}
