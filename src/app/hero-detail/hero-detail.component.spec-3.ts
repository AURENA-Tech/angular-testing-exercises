import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HeroDetailModule } from "./hero-detail.module";
import { RouterModule } from "@angular/router";
import { By } from "@angular/platform-browser";
import { Hero } from "../hero";

`
ℹ️FYI:

 Please notice that now we are using a ♥️♥️♥️ feature module ♥️♥️♥️ for the test setup. 
 Please notice the static method forTest() 
     In it we provide the basic test setup we most likely need in every test case. 
     We can provide a reusable fake implemenation for the ActivatedRoute.
     Of course there will be still cases where we need to create a very specific test setup.
     Those should should not live in the module that provides the more "generic" setup.

 Please notice that we don't want to import the HttpClientModule anymore. 
 We want to provide a stubbed version of HeroService in the forTest() method of our HeroDetailModule.
 👃Consider mocking a HTTP request for component test as a code smell.
 👃Consider providing a HttpClientModule in a component test as a code smell as well.
 
 It usually is a sign that either the component does a HTTP request directly (without a service) or we are testing too much at once. We want to avoid both.

 Generally speaking - When you have the feeling you need multiple different test setups - think about splitting them up in multiple spec files 💁‍♀️


 💻 Your second task is simple: 
 Make the test 'should show hero details correctly' pass ✅
 
 You'll have to:
  - provide the ActivatedRouteStub (see testing/ActivatedRouteStub.ts)
  - provide and create a stub for the HeroService - you can try out useValue or useClass

 You'll have to make changes in the hero-detail.module.ts
 
`;

describe('Hero Detail Component', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let component: HeroDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HeroDetailModule.forTest() 
      ],
      declarations: []
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

  fit('should show hero details correctly', () => {
    // 
    // GIVEN

    //
    // WHEN

    //
    // THEN
    const debugElement = fixture.debugElement;
    const title = debugElement.query(By.css('h2'));
    expect(title.nativeElement.textContent).toBe('FRED FLINSTONE Details');
  });
});

`











































Solution:

-----------------------
File: hero-detail.module.ts
-----------------------
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'detail/:id', 
        component: HeroDetailComponent
      }
    ])
  ],
  declarations: [HeroDetailComponent],
  exports: [RouterModule]
})
export class HeroDetailModule {
  /*
    Setup the basic testing module. You have unlimited possibilities ;)
      - Stub ActivatedRouteStub
      - Stub the Router
      - Spy the Router
      - ...
  */
  static forTest(): ModuleWithProviders {
    return {
      ngModule: HeroDetailModule,
      /* 
        override unwanted providers
        stub services
      */
      providers: [
        {
          provide: ActivatedRoute, useValue: new ActivatedRouteStub()
        },
        {  
          provide: HeroService, 
          useValue: {
            getHero() { return empty(); }  
          }
        }
      ]
    }
  }
}

`;
