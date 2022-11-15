import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UseVetcoinsRedemptionPage } from './use-vetcoins-redemption.page';

const routes: Routes = [
  {
    path: '',
    component: UseVetcoinsRedemptionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UseVetcoinsRedemptionPage]
})
export class UseVetcoinsRedemptionPageModule {}
