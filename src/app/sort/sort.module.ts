import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SortPage } from './sort.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SortPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SortPage]
})
export class SortPageModule {}
