import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { BusinessPartnerAddressPage } from './business-partner-address.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessPartnerAddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,IonicSelectableModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusinessPartnerAddressPage]
})
export class BusinessPartnerAddressPageModule {}
