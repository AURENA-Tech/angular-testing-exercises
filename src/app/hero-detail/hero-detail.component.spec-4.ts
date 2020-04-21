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
 Topic: Testing a presentational component

 Notice the files:
 - hero-detail.component.ts
 - hero-detail.container.ts

 A presentational components are characterized by:
 -  only way for data input is through @Input()'s
 -  only way for data output is through @Output()'s
 -  usually no services are injected in the constructor

Task: Try to setup the test with TestBed to make the test green again.

`;

describe('Hero Detail Component', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let component: HeroDetailComponent;

  beforeEach(async(() => {
    // Your work here
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
    `, async () => {
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
    await fixture.whenStable();

    const debugElement = fixture.debugElement;
    
    const title = debugElement.query(By.css('h2'));
    expect(title.nativeElement.textContent).toBe('FRED FLINSTONE Details');
    
    const id = debugElement.query(By.css('div span'));
    expect(id.nativeElement.textContent).toBe('id: 1');

    const nameInput = debugElement.query(By.css('input'));
    expect(nameInput.nativeElement.value).toBe('Fred Flinstone');
  });
});

`
     
   ⬇⬇⬇⬇ Scroll down when you have problems ⬇⬇⬇⬇⬇


































   ⬇⬇⬇⬇⬇⬇⬇⬇ the solution will appear soon ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇


















Solution:

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent]
    });

Was it easier now? 🥳

 🙋‍♀️ Okay we have to admit, that in this case we just save two dependencies.
 In real life components though, this will be more significant.
 Just think of the easiness of testing a component without having to setup any services! 


`;
