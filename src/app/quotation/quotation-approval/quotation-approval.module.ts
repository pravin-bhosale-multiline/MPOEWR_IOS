import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuotationApprovalPage } from './quotation-approval.page';

const routes: Routes = [
  {
    path: '',
    component: QuotationApprovalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuotationApprovalPage]
})
export class QuotationApprovalPageModule {}
