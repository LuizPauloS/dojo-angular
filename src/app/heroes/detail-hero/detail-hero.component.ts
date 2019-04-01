import { Hero } from './../../model/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
