import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiceEngineerVisitPage } from './service-engineer-visit.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceEngineerVisitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiceEngineerVisitPage]
})
export class ServiceEngineerVisitPageModule {}
