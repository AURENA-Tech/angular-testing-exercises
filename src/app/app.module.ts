import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BannerComponent } from './banner/banner.component';
import { ParentComponent } from './viewchild/parent.component';
import { ChildComponent } from './viewchild/child.component';
import { PipesModule } from './pipe/pipes.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, PipesModule ],
  declarations: [ AppComponent, HelloComponent, BannerComponent, ParentComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
