import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActualTravelPlanPage } from './actual-travel-plan.page';

const routes: Routes = [
  {
    path: '',
    component: ActualTravelPlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActualTravelPlanPage]
})
export class ActualTravelPlanPageModule {}
