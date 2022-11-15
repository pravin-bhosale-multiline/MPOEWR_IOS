import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from '../common/directives/hide-header.directive';



@NgModule({
  declarations: [HideHeaderDirective],
  exports: [HideHeaderDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
