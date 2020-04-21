
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoldPipe } from './bold.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    BoldPipe
  ],
  exports: [
    BoldPipe
  ]
})
export class PipesModule {}