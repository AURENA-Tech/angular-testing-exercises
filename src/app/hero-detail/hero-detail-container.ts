import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Hero } from "../hero";
import { map, filter, tap, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-detail-container',
  template: `
    <app-hero-detail [hero]="hero$ | async"></app-hero-detail>
  `,
  styleUrls: [] // Containers should not have styles!
})
export class HeroDetailContainer {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.hero$ = this.route
      .paramMap
      .pipe(loadHeroById(this.heroService.getHero));
  }
}

// The following is a custom RxJs operator (like map, filter, flatMap - just use case dependent)
// This is a different beast for a different time
// It is:
// - reusable: everytime you need to fetch a hero based on it's 'id' param
// - testable: a pure function -> therefore well testable
function loadHeroById(loadHeroFn: (heroId: number) => Observable<Hero>) {
  return (routeParams$: Observable<ParamMap>) => {
    return routeParams$.pipe(
        map(params => params.get('id')),
        filter(id => !!id), 
        switchMap(id => loadHeroFn(+id))
    );
  }
}

