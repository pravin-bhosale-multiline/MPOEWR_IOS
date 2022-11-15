import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonicModule } from '@ionic/angular';
import { TravelPlanClosurePage } from './travel-plan-closure.page';
import { IonicSelectableModule } from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: TravelPlanClosurePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelPlanClosurePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TravelPlanClosurePageModule {}
