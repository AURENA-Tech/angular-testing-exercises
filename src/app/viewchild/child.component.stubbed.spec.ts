import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ChildStubComponent } from './child-stub.component';

`

  Compare the code in child-stub.component.ts with 
  that in child.component.ts. Notice how the 
  stubbed version has the bare minimum implementation.
  The method we need to test is empty, the template
  is empty. There is no need to implement the OnInit
  interface.

  Task. Change the code below to replace ChildComponent
  with ChildStubComponent. 

  Hints below, if you need them.

`;

describe('ParentComponent with Stubbed ViewChild', () => {
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
    component.childComponent = TestBed.createComponent(ChildComponent).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTimeStamp', () => {
    spyOn(component.childComponent, 'updateTimeStamp');
    component.update();
    expect(component.childComponent.updateTimeStamp).toHaveBeenCalled();
  });
});



`
              Hints
              vvvv


              - ChildStubComponent has already been imported for you
              - Replace ChildComponent declaration with ChildStubComponent
              - call createComponent with ChildStubComponent with Typescript cast as ChildComponent






                SOLUTION APPEARS BELOW
                vv vvv vv vvv vv vvv vv
`;





`


















import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ChildStubComponent } from './child-stub.component';

describe('ParentComponent with Stubbed ViewChild', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParentComponent, ChildStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    component.childComponent = TestBed.createComponent(ChildStubComponent).componentInstance as ChildComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateTimeStamp', () => {
    spyOn(component.childComponent, 'updateTimeStamp');
    component.update();
    expect(component.childComponent.updateTimeStamp).toHaveBeenCalled();
  });
});
`
