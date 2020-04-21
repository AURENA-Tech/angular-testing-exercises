import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { HeroDetailComponent } from "./hero-detail.component";

`
Currently the Angular CLI will already create a basic test skeleton when we create new component 
with: ng generate component

This skeleton usually includes everything you need to get started with testing:
  * a simple DIE structure (Describe - It - Expect)
  * a already configured TestBed

For the sake of understanding what's going on there we will write this setup manually - only once - promised 🤞. This knowledge will become important, when we try to get already existing components under test.

💻 Your first task is simple: 
Make the test 'should create' pass ✅

🤫 Hints:
 - TestBed.configureTestingModule
 - TestModule is similar to a NgModule configuration
 - TestBed.createComponent
 - TestBed.compileComponents


FYI: 
* Auto-Import in Stackblitz is working quite well when we are writing the stuff by hand.
  So copy and pasting types will give you probably some headache.

* When you get the error:     "describe' should only be used in 'describe' function"
  Then reload 🔄 the emulated browser window on your right

* This test is referenced in main.ts (Check if it's not working)

`;

describe('Hero Detail Component', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let component: HeroDetailComponent;

  beforeEach(async(() => {
    // Let the magic happen here
  }));

  beforeEach(() => {
    // And here preferably 
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });
});


` ⬇⬇⬇⬇ Scroll down when you have problems ⬇⬇⬇⬇⬇`;

































` 
🤫 More hints:

- ngModel directive is included in the FormsModule
- RouterTestingModule
- HttpClientTestingModule
`;













` ⬇⬇⬇⬇⬇⬇⬇⬇ the solution will appear soon ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇

























🙏🙏🙏 Please open "hero-detail.component.spec-2.ts for a detailed explanation!!! 🙏🙏🙏


import { FormsModule } from "@angular/forms";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { HeroDetailComponent } from "./hero-detail.component";


describe('Hero Detail Component', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let component: HeroDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ HeroDetailComponent ]
    });
    
    TestBed.compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });
});



🙏🙏🙏 Please open "hero-detail.component.spec-2.ts for a detailed explanation!!! 🙏🙏🙏

`