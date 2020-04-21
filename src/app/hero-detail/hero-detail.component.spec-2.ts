import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";

`
Let's built up on the previous solution:
`;

describe('Hero Detail Component', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let component: HeroDetailComponent;

  /* Notice the call to async() here */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ HeroDetailComponent ]
    });
    
    /* 
       The "TestBed.compileComponents()" is an asynchronous call - that's why we need to wrap the beforeEach function within async()
       Please don't mistake this with the async / await feature of ES6 itself
       The async() is a function provided by Angular.
       It wraps everything in a NgZone and only completes when there are no asynchronous tasks left
    */
    TestBed.compileComponents(); 
  }));

  beforeEach(() => {
    /*
       Following statements are in a custom beforeEach method call - Why?
       Otherwise we would have to "await" or chain the compileComponents() - call with a Promise.then
    */
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });
});

`
I think there are some open questions:

❓What is a ComponentFixture? 
* It gives us access to the component instance under test
* It provides helper functions to interact with the rendered DOM of the

❓ Why do we need to import the FormModule?
We use the ngModel directive in our template:     <input [(ngModel)]="hero.name" placeholder="name"/>
This directive is provided by the FormsModule.
==> We need to tell our TestingModule about it!

❓ Why do we need to import the RouterTestingModule
In our component class we inject the ActivatedRoute. This enables us to read a provided routing parameter. The ActivatedRoute service is provided by the RouterModule. 
==> We need to tell our TestingModule about it!

❓ Wait! What!? We are not using the RouterModule. We are using RouterTestingModule. What is it?
As long as we don't want to test the routing mechanism itself it does not matter! 
So we could use the RouterModule or the RouterTestingModule.
We just have to import it so that the Angular compiler gets to know the ActivatedRoute service. 

❓ Why do we need to import HttpClientTestingModule?
In our HeroDetailComponent we are calling the HeroService.
The HeroService is using HttpClient.
The HttpClient service is provided by the HttpClientModule.
==> We need to tell our TestingModule about it!

ℹ️ The HeroService itself is provided in the root injector so we don't have to specify it in our TestingModule.
This is done via @Injectable({ providedIn: 'root' })  
Services that are provided in the root do not have to be registered in a specific module!

❓I have noticed that we are using the Location service in our component class? How does our TestingModule know about it?
Good catch! 
It is provided by the RouterModule / RouterTestingModule 
https://github.com/angular/angular/blob/master/packages/router/testing/src/router_testing_module.ts#L173


~~~~~~~~~~~~~~~~~
~~ Conclusion: ~~
~~~~~~~~~~~~~~~~~

🙆 Seems like a lot of work that has to be done to setup a test for a component. And that was just a little one.
Additionally 
  with every new component that we add in the template, 
  with every new service that we add in the components class, it is verly likely that we break all existing test setups!

We don't like this to happen. What can we do?

▪ Choice 1: Adding the NO_ERRORS_SCHEMA
This is a quick, yet dangerous choice.

"The NO_ERRORS_SCHEMA tells the Angular compiler to ignore unrecognized elements and attributes." - https://angular.io/guide/testing#no_errors_schema

So in our example above we could have made the test green by writing:

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ HeroDetailComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

The test would be green but the component would never work correctly - without a real ngModel directive

ℹ️ Using NO_ERRORS_SCHEMA or when we stub real directives we can also refer to that as "Shallow Rendering". This is a more generic term.
   Sometimes it is not avoidable to use it. 
   Especially for very big components that hold a lot of child components, and therefore are very hard to setup, we can choose this approach.

▪️️ Choice 2: ♥️♥️♥️ Use a small module that groups and registers related components in one place.
This module can then be reused in tests ♥️♥️♥️

ℹ️ We will refer to this type of module as "feature modules".

--> we'll see this is in real life in the next exercise - LINK

`;
