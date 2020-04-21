import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { HeroDetailComponent } from "./hero-detail.component";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { By } from "@angular/platform-browser";
import { Hero } from "../hero";
import { SimpleChange } from "@angular/core";

`
To learn from a example that is closer to the current webplatform architecture, we have updated the files:
 - hero-detail.component.ts
 - hero-detail.component.html 

Please notice that now we are using ViewChild decorators to access native DOM elements that we want to update.

Suddenly our test is not working anymore. Why?? 
Please help us out here 🙏 
Make the test green again ✅
 
Hints:
 - Are our lifecycle hooks called correctly? (ngOnInit, ngOnChanges, ngAfterViewInit, ....)

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








  🔶 { hero: new SimpleChange(previousValue, currentValue, isFirstChange) } 🔶





                                  























   ⬇⬇⬇⬇⬇⬇⬇⬇ the solution will appear soon ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇


















Solution:

  fit('----too long john----', async(() => {
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
    component.ngOnChanges({ hero: new SimpleChange(undefined, hero, true) }); // <-----------
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
