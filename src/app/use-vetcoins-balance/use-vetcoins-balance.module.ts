import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UseVetcoinsBalancePage } from './use-vetcoins-balance.page';

const routes: Routes = [
  {
    path: '',
    component: UseVetcoinsBalancePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UseVetcoinsBalancePage]
})
export class UseVetcoinsBalancePageModule {}
