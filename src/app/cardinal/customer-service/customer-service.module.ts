import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerServicePage } from './customer-service.page';
import { MaterialModule } from 'src/app/material.module';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: CustomerServicePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
   
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerServicePage]
})
export class CustomerServicePageModule {}
