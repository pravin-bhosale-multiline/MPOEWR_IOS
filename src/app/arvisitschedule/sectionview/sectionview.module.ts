import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionviewPageRoutingModule } from './sectionview-routing.module';

import { SectionviewPage } from './sectionview.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionviewPageRoutingModule,
 ComponentsModule
  ],
  declarations: [SectionviewPage]
})
export class SectionviewPageModule {}
