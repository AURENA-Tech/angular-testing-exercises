import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Hero } from "../hero";
import { map, filter, tap, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { HeroService } from "../hero.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-hero-detail-container',
  template: `
    <app-hero-detail 
      [hero]="hero$ | async"
      (save)="save($event)"
      (back)="back()">
    </app-hero-detail>
  `,
  styleUrls: [] // Containers should not have styles!
})
export class HeroDetailContainer {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {
    this.hero$ = this.route
      .paramMap
      .pipe(loadHeroById(this.heroService.getHero.bind(this.heroService)));
  }

  save(hero: Hero) {
    this.heroService
      .updateHero(hero)
      .subscribe(this.back.bind(this))
  }

  back() {
    this.location.back();
  }
}

function loadHeroById(loadHeroFn: (heroId: number) => Observable<Hero>) {
  return (routeParams$: Observable<ParamMap>) => {
    return routeParams$.pipe(
        map(params => params.get('id')),
        filter(id => !!id), 
        switchMap(id => loadHeroFn(+id))
    );
  }
}
// Above is a custom RxJs operator (like map, filter, flatMap - just use case dependent)
// This is a different beast for a different time
// It is:
// - reusable: everytime you need to fetch a hero based on it's 'id' param
// - testable: a pure function

