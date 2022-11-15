import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportcategoryPageRoutingModule } from './reportcategory-routing.module';

import { ReportcategoryPage } from './reportcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportcategoryPageRoutingModule
  ],
  declarations: [ReportcategoryPage]
})
export class ReportcategoryPageModule {}
