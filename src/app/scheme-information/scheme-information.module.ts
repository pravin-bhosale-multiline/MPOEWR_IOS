import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { SchemeInformationPage } from './scheme-information.page';

const routes: Routes = [
  {
    path: '',
    component: SchemeInformationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,IonicSelectableModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SchemeInformationPage]
})
export class SchemeInformationPageModule {}
