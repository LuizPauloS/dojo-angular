import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';

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
      dateRegister: new FormControl('', [Validators.required])
    });
  }

  cadastrar(): void {
    try {
      if (!_.isUndefined(this.formHero) && this.formHero.valid) {
        this.heroesService.salvarHeroi(this.formHero.value).subscribe(heroiResponse => {
          this.toastr.success(`Herói ${heroiResponse.name} adicionado com sucesso!`);
          this.router.navigate(['heroes/list']);
        }, (error: Error) => {
          console.log(error);
          this.toastr.error(`Ocorreu um erro inesperado ao adicionar herói ${this.formHero.get('name').value}:
            ${error.message}`);
        });
      } else {
        this.toastr.warning('Formulário incompleto! Verifique os dados e tente novamente.');
      }
    } catch (err) {
      console.log(err);
      this.toastr.error('Ocorreu um erro inesperado ao salvar novo Herói: ' + err);
    }
  }

}
