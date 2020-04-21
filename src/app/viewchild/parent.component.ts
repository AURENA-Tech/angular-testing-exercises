import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <button type="button" (click)="update()">Update</button>
    <br>
    <app-child></app-child>`
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent: ChildComponent;

  update() {
    this.childComponent.updateTimeStamp();
  }
}