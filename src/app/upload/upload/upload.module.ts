import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadPage } from './upload.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { PipesModule } from 'src/app/common/pipes/pipes.module';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';

const routes: Routes = [
  {
    path: '',
    component: UploadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,IonicSelectableModule,PipesModule,
    ReactiveFormsModule,FileUploadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadPage]
}) 
export class UploadPageModule {}
