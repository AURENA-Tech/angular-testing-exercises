import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner.component';

/**
 * 
 *    https://angular.io/api/core/ViewContainerRef#createComponent
 *    The banner title will be an empty string before detectChanges is called
 *    Complete 3 tests below to confirm DOM has:
 *      1) empty string after createComponent is called
 *      2) original title after detectChanges is called on the fixture
 *      3) new title after component property is mutated
 * 
 *    Make tests fail first, 
 *    then make them pass, 
 *    then refactor them keeping them green
 * 
 *    Scroll page down for hints
 */

describe('The h1 in the DOM should contain a title from the component which will be updated after change detection', () => {
  let component: BannerComponent;
  let fixture:   ComponentFixture<BannerComponent>;
  let h1:        HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('it should be a blank string, immediately after the component is created by createComponent()', () => {

      // add magic here

      // end
  });

  it('after change detection, it should display original title', () => {
      // add magic here


      // end
  });

  it('after changing the title in the component the DOM should update with the new test title', () => {
    component.title = 'So funktioniert aurena.at';
      // add magic here


      // end

  });
});



/**
 * 
 *    Hints
 *        first test can be achieved in one line of code
 *        second test in two lines
 *        third test requires two more lines
 *        https://jasmine.github.io/api/2.7/matchers.html
 *        fixture.detectChanges()
 *     
 *    More hints vvv deeper vv
 */
















/**
 * 
 *    Deeper Hints
 *    
 *        https://angular.io/guide/testing#component-dom-testing
 * 
 * 
 */


//   vvvvvvvvvvvvvvvvvvvv SOLUTION BELOW vvvvvvvvvvvvvvvvvvvv





















/**
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture:   ComponentFixture<BannerComponent>;
  let h1:        HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('no title in the DOM after createComponent()', () => {
    expect(h1.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'So funktioniert aurena.at';
    fixture.detectChanges();
    expect(h1.textContent).toContain('So funktioniert aurena.at');
  });
});

 */


