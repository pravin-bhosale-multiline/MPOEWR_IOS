import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';
import { AruserselectPage } from './aruserselect.page';

const routes: Routes = [
  {
    path: '',
    component: AruserselectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSelectableModule
  ],
 // declarations: [AruserselectPage]
})
export class AruserselectPageModule {}
