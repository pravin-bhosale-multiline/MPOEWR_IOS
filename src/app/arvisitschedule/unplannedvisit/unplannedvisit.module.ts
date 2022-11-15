import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnplannedvisitPage } from './unplannedvisit.page';

const routes: Routes = [
  {
    path: '',
    component: UnplannedvisitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSelectableModule,
    ReactiveFormsModule
  ],
  declarations: [UnplannedvisitPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnplannedvisitPageModule {}
