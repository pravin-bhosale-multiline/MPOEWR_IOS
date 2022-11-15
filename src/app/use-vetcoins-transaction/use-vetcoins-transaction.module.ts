import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UseVetcoinsTransactionPage } from './use-vetcoins-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: UseVetcoinsTransactionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UseVetcoinsTransactionPage]
})
export class UseVetcoinsTransactionPageModule {}
