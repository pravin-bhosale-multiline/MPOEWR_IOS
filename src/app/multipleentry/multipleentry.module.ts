import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleentryPageRoutingModule } from './multipleentry-routing.module';

import { MultipleentryPage } from './multipleentry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MultipleentryPageRoutingModule
  ],
  declarations: [MultipleentryPage]
})
export class MultipleentryPageModule {}
