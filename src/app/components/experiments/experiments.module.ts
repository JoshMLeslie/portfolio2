import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentsComponent } from './experiments.component';



@NgModule({
  declarations: [ExperimentsComponent],
  imports: [
    CommonModule
  ],
  exports: [ExperimentsComponent]
})
export class ExperimentsModule { }
