import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';
import {Heroes} from '../heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Heroes[]>;
  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

}

