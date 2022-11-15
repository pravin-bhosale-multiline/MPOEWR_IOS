import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SectionPageRoutingModule } from './section-routing.module';
import { SectionPage } from './section.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionPageRoutingModule, 
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [SectionPage]
})
export class SectionPageModule {}
