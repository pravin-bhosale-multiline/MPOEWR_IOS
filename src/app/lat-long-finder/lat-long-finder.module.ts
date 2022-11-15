import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LatLongFinderPage } from './lat-long-finder.page';

const routes: Routes = [
  {
    path: '',
    component: LatLongFinderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LatLongFinderPage]
})
export class LatLongFinderPageModule {}
