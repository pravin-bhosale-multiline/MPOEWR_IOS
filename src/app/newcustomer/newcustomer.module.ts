import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewcustomerPage } from './newcustomer.page';
import { IonicSelectableModule } from 'ionic-selectable';

const routes: Routes = [
  {
    path: '',
    component: NewcustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,IonicSelectableModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [NewcustomerPage]
})
export class NewcustomerPageModule {}
