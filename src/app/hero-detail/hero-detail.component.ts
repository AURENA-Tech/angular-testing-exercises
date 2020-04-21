import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, Renderer2, AfterViewInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
  @Input() hero: Hero;

  @Output() back = new EventEmitter<void>();
  @Output() save = new EventEmitter<Hero>();

  constructor() {}

  clickedBack(): void {
    this.back.emit();
  }

 clickedSave(): void {
    this.save.emit(this.hero);
  }
}
