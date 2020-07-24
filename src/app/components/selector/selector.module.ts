import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector.component';
import { SelectorRoutingModule } from './selector-routing.module';



@NgModule({
  declarations: [SelectorComponent],
  imports: [
    CommonModule,
    SelectorRoutingModule
  ],
  exports: [SelectorComponent]
})
export class SelectorModule { }
