import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { By } from "@angular/platform-browser";
import { Hero } from "../hero";

`
 Topic: Testing against the DOM:

 💻 Your second task is simple: 
 Make the test 'should show hero details correctly' pass ✅
 
 1) You'll need to create a hero object
 2) Pass it to the component as the @Input()
 3) You will need to call fixture.detectChanges()
 ---> Now you should be able to see the rendered component on the right

 4) Expect the correct values in the DOM for:
    + title (already done)
    + id
    + name input 
 
`;

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

  `
    Writing descriptions like the one below seems to be a bit cumbersome. Agreed! But we are trying to make a point here.

    A simple alternative that comes into mind would be: "should render hero details correctly"
    The problem with this description for example would be the word "correctly", because it implies a certain context you must have as a developer / maintainer of this test, otherwise you don't even know whether the test is working as intended. 

    So please be descriptive about the expectations you have!
  `;
  fit(`
    GIVEN a hero with an ID of 1
      AND a name of 'Fred Flinstone'
    WHEN component is rendered
    THEN the title should be 'FRED FLINSTONE Details'
      AND the id should be '1'
      AND the name input should be 'Fred Flinstone'
    `, async(() => {
    // 
    // GIVEN
    const hero: Hero = {
      id: 1,
      name: 'Fred Flinstone'
    };
    component.hero = hero;
    //
    // WHEN
    fixture.detectChanges();
    //
    // THEN
    const debugElement = fixture.debugElement;
    
    const title = debugElement.query(By.css('h2'));
    expect(title.nativeElement.textContent).toBe('FRED FLINSTONE Details');
    
    const id = debugElement.query(By.css('div span'));
    expect(id.nativeElement.textContent).toBe('id: 1');

    fixture.whenStable().then(() => {
      const nameInput = debugElement.query(By.css('input'));
      expect(nameInput.nativeElement.value).toBe('Fred Flinstone');
    });
  }));
});

`
  
ℹ️ FYI: If you just want to execute a single test - then you can FOCUS on one by writing fit('') instead of it('') 
   Don't forget to undo this before committing though.

   
   ⬇⬇⬇⬇ Scroll down when you have problems ⬇⬇⬇⬇⬇












  🔶 When you struggle with the expected value of the input field please take a look at fixture.whenStable() 🔶 
  🔶 https://angular.io/api/core/testing/ComponentFixture#whenStable                                         🔶 
     
     Using whenStable() also means we should use the async(() => {}) wrapper for our test implementation itself.
     When you leave the call to async() out - the test probably continous to work - but this is only because we are lucky.
























   ⬇⬇⬇⬇⬇⬇⬇⬇ the solution will appear soon ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇


















Solution:

  it('should show hero details correctly', async(() => {
    // 
    // GIVEN
    const hero: Hero = {
      id: 1,
      name: 'Fred Flinstone'
    };
    component.hero = hero;
    //
    // WHEN
    fixture.detectChanges();
    //
    // THEN
    const debugElement = fixture.debugElement;
    
    const title = debugElement.query(By.css('h2'));
    expect(title.nativeElement.textContent).toBe('FRED FLINSTONE Details');
    
    const id = debugElement.query(By.css('div span'));
    expect(id.nativeElement.textContent).toBe('id: 1');

    fixture.whenStable().then(() => {
      const nameInput = debugElement.query(By.css('input'));
      expect(nameInput.nativeElement.value).toBe('Fred Flinstone');
    });
  }));



`;
