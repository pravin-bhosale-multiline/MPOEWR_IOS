import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExistingcustomerPage } from './existingcustomer.page';
import { IonicSelectableModule } from 'ionic-selectable';
const routes: Routes = [
  {
    path: '',
    component: ExistingcustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExistingcustomerPage]
})
export class ExistingcustomerPageModule {}
