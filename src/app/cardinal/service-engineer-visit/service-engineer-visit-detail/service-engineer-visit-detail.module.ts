import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceEngineerVisitDetailPage } from './service-engineer-visit-detail.page';
import { MaterialModule } from 'src/app/material.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule, MatListModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: ServiceEngineerVisitDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceEngineerVisitDetailPage]
})
export class ServiceEngineerVisitDetailPageModule {}
