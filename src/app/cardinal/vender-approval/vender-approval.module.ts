import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VenderApprovalPage } from './vender-approval.page';

const routes: Routes = [
  {
    path: '',
    component: VenderApprovalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VenderApprovalPage]
})
export class VenderApprovalPageModule {}
