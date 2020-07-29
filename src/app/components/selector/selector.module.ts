import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector.component';
import { SelectorRoutingModule } from './selector-routing.module';
import { BarButtonComponent } from './bar-button/bar-button.component';



@NgModule({
  declarations: [SelectorComponent, BarButtonComponent],
  imports: [
    CommonModule,
    SelectorRoutingModule
  ],
  exports: [SelectorComponent]
})
export class SelectorModule { }
