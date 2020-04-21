import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, Renderer2, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  @ViewChild('title', { static: false }) title: ElementRef;
  @ViewChild('id', { static: false }) id: ElementRef;

  constructor(
    private renderer: Renderer2,
    private cdref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    console.log('HeroDetailComponent::Constructor');
  }

  ngOnChanges({ hero } : SimpleChanges) {
    if (hero) {
      this.render(hero.currentValue);
    }
  }

  private render(hero: Hero) {
    this.renderer.setProperty(this.title.nativeElement, 'innerHTML', `${hero.name.toUpperCase()} Details`);
    this.renderer.setProperty(this.id.nativeElement, 'innerHTML', `id: ${hero.id}`);
  }

  ngOnInit(): void {
    console.log('HeroDetailComponent::OnInit');
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/