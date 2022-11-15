import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams } from '@ionic/angular';

import { ServiceManagerDetailsPage } from './service-manager-details.page';
import { MaterialModule } from 'src/app/material.module';
import { MatCheckbox, MatCheckboxModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ServiceManagerDetailsPage
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
  declarations: [ServiceManagerDetailsPage]
})
export class ServiceManagerDetailsPageModule {}
