import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddeditActualTravelPlanPage } from './addedit-actual-travel-plan.page';

const routes: Routes = [
  {
    path: '',
    component: AddeditActualTravelPlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddeditActualTravelPlanPage]
})
export class AddeditActualTravelPlanPageModule {}
