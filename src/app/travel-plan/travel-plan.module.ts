import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TravelPlanPage } from './travel-plan.page';

const routes: Routes = [
  {
    path: '',
    component: TravelPlanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelPlanPage]
})
export class TravelPlanPageModule {}
