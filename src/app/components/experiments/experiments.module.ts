import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentsComponent } from './experiments.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ExperimentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ExperimentsComponent
    }])
  ],
})
export class ExperimentsModule { }
