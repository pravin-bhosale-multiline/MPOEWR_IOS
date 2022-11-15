import { ProductListPageModule } from './../product-list/product-list.module';
import { ProductListPage } from './../product-list/product-list.page';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';
import { NeworderPage } from './neworder.page';
import { PipesModule } from '../common/pipes/pipes.module';
import { CustomAlertPage } from '../custom-alert/custom-alert.page';

const routes: Routes = [
  {
    path: '',
    component: NeworderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,IonicSelectableModule,PipesModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes),
    ProductListPageModule
  ],
  declarations: [NeworderPage,CustomAlertPage],
  entryComponents: [CustomAlertPage,ProductListPage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NeworderPageModule {}
