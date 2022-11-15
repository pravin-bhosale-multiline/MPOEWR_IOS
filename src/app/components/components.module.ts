import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { FileUploadModule } from 'ng2-file-upload';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ImagePreviewDirective } from '../common/image-preview.directive';
import { ListcontrolComponent } from './listcontrol/listcontrol.component';
import { ListcontrolComponentChk} from './listcontrolchkframwork/listcontrolchk.component';





@NgModule({
  imports:[FileUploadModule,IonicModule,CommonModule,IonicSelectableModule],
  declarations: [MultiFileUploadComponent,ImagePreviewDirective,ListcontrolComponent,ListcontrolComponentChk],
  exports:[MultiFileUploadComponent,ImagePreviewDirective,ListcontrolComponent,ListcontrolComponentChk],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    ListcontrolComponent,ListcontrolComponentChk
 ]
})
export class ComponentsModule {}
