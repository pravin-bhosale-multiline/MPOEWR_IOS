import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerQuotationPage } from './customer-quotation.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { PipesModule } from 'src/app/common/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: CustomerQuotationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,IonicSelectableModule,PipesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerQuotationPage]
})
export class CustomerQuotationPageModule {}
