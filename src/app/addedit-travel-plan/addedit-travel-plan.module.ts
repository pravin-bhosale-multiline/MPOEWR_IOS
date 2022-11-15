import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { AddeditTravelPlanPage } from './addedit-travel-plan.page';

const routes: Routes = [
  {
    path: '',
    component: AddeditTravelPlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,
    FormsModule,IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddeditTravelPlanPage]
})
export class AddeditTravelPlanPageModule {}
