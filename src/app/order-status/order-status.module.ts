import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { OrderStatusPage } from './order-status.page';

const routes: Routes = [
  {
    path: '',
    component: OrderStatusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderStatusPage]
})
export class OrderStatusPageModule {}
