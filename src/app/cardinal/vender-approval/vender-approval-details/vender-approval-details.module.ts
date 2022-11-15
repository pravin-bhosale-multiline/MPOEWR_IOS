import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VenderApprovalDetailsPage } from './vender-approval-details.page';
import { MaterialModule } from 'src/app/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: VenderApprovalDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VenderApprovalDetailsPage]
})
export class VenderApprovalDetailsPageModule {}
