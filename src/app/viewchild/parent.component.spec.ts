import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

`
    Your mission is to implement the test
    "should call updateTimeStamp() on Child via update() on parent"

          _____________________
         /  ParentComponent   /
        /____________________/
       /  + update()        /
      /____________________/

          __________________________
         /  ChildComponent         /
        /_________________________/
       /  + updateTimeStamp()    /
      /_________________________/

    When we call update, we want to verify that updateTimeStamp has been called

    If you want to see how the UI looks, go to /angular.json, and find this part of the configuration...

      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/demo",
            "index": "src/index.html",
            "main": "src/main-testing.ts",

      Change
                  "main": "src/main-testing.ts",
      to...
                  "main": "src/main.ts",

      In the Browser View, you'll see a button that when pressed updates the timestamp.

      Change back 
                  "main": "src/main-testing.ts",
      ... to bring up the test runner again

      Now, here is the code.... best of luck...
      vvvvv vvvvv vvvvv

`;

describe('ParentComponent with ViewChild', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        ChildComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTimeStamp() on Child via update() on parent', () => {

    // Magic happens here


    // End
    expect(component.childComponent.updateTimeStamp).toHaveBeenCalled();

  });
});

`
                  Scroll for Hints..
                  v v v v v v v v v






                  Expected a Spy
                  update()

                  vvvvv vvvvv vvvvv
                  Scroll down to check solution






















                  Solution appears below
                  vvvv vvvvv vvvvv vvvvv

















 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

describe('ParentComponent with ViewChild', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        ChildComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTimeStamp() on stubbed Child via update() on parent', () => {
    spyOn(component.childComponent, 'updateTimeStamp');
    component.update();
    expect(component.childComponent.updateTimeStamp).toHaveBeenCalled();
  });
});

`;

