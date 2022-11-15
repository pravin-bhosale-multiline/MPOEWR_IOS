import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonicModule } from '@ionic/angular';
import { OrderApprovalPage } from './order-approval.page';
import { ShowApprovalDetailsModalPage } from './show-approval-details-modal/show-approval-details-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OrderApprovalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderApprovalPage,ShowApprovalDetailsModalPage],
  entryComponents: [ShowApprovalDetailsModalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderApprovalPageModule {}
