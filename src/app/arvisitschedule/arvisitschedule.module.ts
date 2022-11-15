import { AruserselectPage } from './aruserselect/aruserselect.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArvisitschedulePage } from './arvisitschedule.page';

const routes: Routes = [
  {
    path: '',
    component: ArvisitschedulePage
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
  declarations: [ArvisitschedulePage,AruserselectPage],
  entryComponents:[AruserselectPage]
})
export class ArvisitschedulePageModule {}
