import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ColumnMode,SelectionType } from '@swimlane/ngx-datatable';
import { ApprovalModalService } from './approval-modal.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Message } from 'src/provider/message-helper';
import { Commonfun } from 'src/provider/commonfun';

/**
 * An object used to get page information from the server
 */
export class Page {
  // The number of elements in the page
  size: number = 0;
  // The total number of elements
  totalElements: number = 0;
  // The total number of pages
  totalPages: number = 0;
  // The current page number
  pageNumber: number = 0;
}


@Component({
  selector: 'app-show-approval-details-modal',
  templateUrl: './show-approval-details-modal.page.html',
  styleUrls: ['./show-approval-details-modal.page.scss'],
})
export class ShowApprovalDetailsModalPage implements OnInit{
  
  player:any
  id: string;
  tab_id: string;
  record: string;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  page = new Page();
  rows = new Array<any>();
  column_data;
  loadingIndicator: boolean = true;

  constructor(  private modalController: ModalController,
                private navParams: NavParams,
                private approvalModalService: ApprovalModalService,
                private screenOrientation: ScreenOrientation,
                public msg: Message,
                private commonfun: Commonfun) { 
   // console.log("Pravin data from approval page",navParams.get('id'),this.tab_id)
    this.id = navParams.get('id');
    this.tab_id = navParams.get('tab_id');
    this.record = navParams.get('record');
    this.page.pageNumber = 0;
    this.page.size = 20;
  }

  ngOnInit() {

    this.setPage({ offset: 0 });
    // set to landscape
    
    
  }
  ionViewWillEnter(){
    if(this.msg.isplatformweb == false){
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    
    }
     
  }
  async closeModal() {
  
    if(this.msg.isplatformweb == false){
      this.screenOrientation.unlock();
    }
    
    

      await this.modalController.dismiss();
  }
  setPage(pageInfo) {
    this.commonfun.loadingPresent();
    this.approvalModalService.getApprovalDetails(this.id,this.record,this.tab_id).subscribe(pagedData => {
     // console.log("Pravin Modal DATA ",pagedData);
      if(!!pagedData.data && !!pagedData.data.colum_names){
          this.column_data = pagedData.data.colum_names;
          this.rows = pagedData.data.colum_data;
      } else {
        this.loadingIndicator = false;
        this.commonfun.loadingDismiss();
      }
      this.loadingIndicator = false;
      this.commonfun.loadingDismiss();
    });
  }
}
