import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { SelectorsinglePageRoutingModule } from './selectorsingle-routing.module';

import { SelectorsinglePage } from './selectorsingle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectorsinglePageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [SelectorsinglePage]
})
export class SelectorsinglePageModule {}
