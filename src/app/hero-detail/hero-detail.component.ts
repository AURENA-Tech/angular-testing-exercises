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
export class HeroDetailComponent implements OnInit, AfterViewInit {
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

  /* 
   Lifecycle methods calls are different in a testing environment that use TestBed:

   🆘 Please notice that without calling fixture.detectChanges() no lifecycle hooks are called in the test at all
   🆘 Please check the console and notice that ngOnChanges is not called
  
   This happens only for the component that is created with TestBed.createComponent(HeroDetailComponent)
   For every component that resides within the HeroDetailComponent everything is fine and even ngOnChanges is called automatically.
  */

  // 1)
  ngOnChanges({ hero } : SimpleChanges) {
    if (hero) {
      this.render(hero.currentValue);
    }
  }

  // 2
  ngOnInit(): void {
    console.log('HeroDetailComponent::OnInit');
    this.getHero();
  }

  // 3
  ngDoCheck() {
    console.log('HeroDetailComponent::DoCheck');
  }

  // 4
  ngAfterContentInit() {
    console.log('HeroDetailComponent::AfterContentInit');
  }

  // 5
  ngAfterContentChecked() {
    console.log('HeroDetailComponent::AfterContentChecked');
  }

  // 6
  ngAfterViewInit() {
    console.log('HeroDetailComponent::AfterViewInit');
    // Non-Static ViewChild-References are only accessible in the ngAfterViewInit hook 
    this.render(this.hero);
  }

  // 7
  ngAfterViewChecked() {
    console.log('HeroDetailComponent::AfterViewChecked');
  }

  // 8
  ngOnDestroy() {
    console.log('HeroDetailComponent::Destroy');
  }

  private render(hero: Hero) {
    this.renderer.setProperty(this.title.nativeElement, 'innerHTML', `${hero.name.toUpperCase()} Details`);
    this.renderer.setProperty(this.id.nativeElement, 'innerHTML', `id: ${hero.id}`);
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