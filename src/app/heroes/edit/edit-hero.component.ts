import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';

import { Hero } from '../../model/hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  hero: Hero;
  formHero: FormGroup;

  constructor(private router: Router,
              private toastr: ToastrService,
              private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initFormHeroUpdate();
    this.getLoadHeroById();
  }

  getLoadHeroById(): void {
    try {
      const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.heroesService.findById(id).subscribe(response => {
        console.log(response);
        this.hero = response;
        this.updateFormHero(this.hero);
      }, (error: Error) => {
        console.log(error);
        this.toastr.error(`Ocorreu um erro ao buscar dados do Herói ${this.hero.name}: ${error.message}`);
      });
    } catch (err) {
      console.log(err);
      this.toastr.error(`Ocorreu um erro inesperado ao buscar dados do Herói ${this.hero.name}: ${err}`);
    }
  }

  initFormHeroUpdate(): void {
    this.formHero = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      power: new FormControl('', [Validators.required]),
      dateRegister: new FormControl('', [Validators.required])
    });
  }

  updateFormHero(hero: Hero): void {
    this.formHero.patchValue({
      id: hero.id,
      name: hero.name,
      power: hero.power,
      dateRegister: hero.dateRegister
    });
  }

  salvarHeroi(): void {
    try {
      if (!_.isUndefined(this.formHero) && this.formHero.valid) {
        this.heroesService.atualizarHeroi(this.formHero.value).subscribe(response => {
          this.updateFormHero(response);
          console.log(this.formHero.value);
          this.toastr.success('Herói atualizado com sucesso!');
          this.router.navigate(['/heroes/list']);
        });
      } else {
        this.toastr.warning('Formulário incompleto! Verifique os dados e tente novamente.');
      }
    } catch (err) {
      console.log(err);
      this.toastr.error('Ocorreu um erro inesperado ao atualizar Herói: ' + err);
    }
  }
}
