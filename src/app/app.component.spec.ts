import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('Hero App', () => {

  
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));


  it('should render initially', () => {
    fixture.detectChanges();

    expect(component).not.toBe(null);
  });
});