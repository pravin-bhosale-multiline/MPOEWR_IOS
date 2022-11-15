import { ProductListPageModule } from './../product-list/product-list.module';

import { ProductListPage } from './../product-list/product-list.page';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';
//import { NeworderPage } from '../neworder/neworder.page';

import { AddeditproductPage } from './addeditproduct.page';
import { ProductFilterPage } from '../product-filter/product-filter.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [
  {
    path: '',
    component: AddeditproductPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,IonicSelectableModule,
    IonicModule,ReactiveFormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes),
    ProductListPageModule
  ],
  declarations: [AddeditproductPage,ProductFilterPage],
  entryComponents: [ProductFilterPage,ProductListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddeditproductPageModule {}
