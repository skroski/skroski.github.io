import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
  ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.params;
    params.subscribe(data =>{
      console.log(data.id);

      this.heroesService.getSingleHero(data.id);
    });
  }

}
