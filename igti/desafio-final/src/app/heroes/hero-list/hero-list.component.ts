import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Observable } from 'rxjs';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero>;
  constructor(
    private heroesService: HeroesService
  ) { }
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }
  addHero(): void{

  }
  deleteHero(): void{

  }

}

