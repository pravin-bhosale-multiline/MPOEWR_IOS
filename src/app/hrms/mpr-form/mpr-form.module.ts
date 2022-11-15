import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MprFormPage } from './mpr-form.page';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: MprFormPage
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
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MprFormPage]
})
export class MprFormPageModule {}
