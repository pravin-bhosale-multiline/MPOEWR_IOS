import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsolidationOrderPage } from './consolidation-order.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { PipesModule } from '../common/pipes/pipes.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: ConsolidationOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,PipesModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConsolidationOrderPage]
})
export class ConsolidationOrderPageModule {}
