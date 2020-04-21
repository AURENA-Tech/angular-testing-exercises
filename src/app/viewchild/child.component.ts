import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `Timestamp: {{timeStamp}}`
})
export class ChildComponent implements OnInit {
  public timeStamp: Date;

  ngOnInit() {
    this.updateTimeStamp();
  }

  updateTimeStamp() {
    this.timeStamp = new Date();
  }
}