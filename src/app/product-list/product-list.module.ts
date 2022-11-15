import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductListPage } from './product-list.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [ProductListPage],
 // exports: [ ProductListPage ]
})
export class ProductListPageModule { }
