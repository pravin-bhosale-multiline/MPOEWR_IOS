import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermsOfAgreementPage } from './terms-of-agreement.page';

const routes: Routes = [
  {
    path: '',
    component: TermsOfAgreementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TermsOfAgreementPage]
})
export class TermsOfAgreementPageModule {}
