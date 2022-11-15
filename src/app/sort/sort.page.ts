import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ColumnMode,DatatableComponent,SelectionType } from '@swimlane/ngx-datatable';
import { Page } from '../order-approval/show-approval-details-modal/show-approval-details-modal.page';
import { ApprovalModalService } from '../order-approval/show-approval-details-modal/approval-modal.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {

  readonly TAG = "SortPage";
  filterList;
  active = 0;
  startDate;
  endDate;
  maxDate;

  player:any
  id: string;
  tab_id: string;
  record: string;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  page = new Page();
  rows = new Array<any>();
  column_data;
  @ViewChild("datatable", { static: true }) datatable: DatatableComponent;
  constructor(  public alertController: AlertController,
                public storage: Storage,
                private router: Router,
                private approvalModalService: ApprovalModalService,
                private screenOrientation: ScreenOrientation,
                private elementRef: ElementRef) { 
                this.page.pageNumber = 0;
                this.page.size = 20;}

  ngOnInit() {
  //  this.setPage({ offset: 0 });
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.filterList = [{"name":"Date"}]

    this.getdata();
    
  }

  public async clearFilter(){
    try {
      console.log(this,"clearFilter");
    
       const alert = await this.alertController.create({
         cssClass: 'my-custom-class',
         header: 'Filters',
         subHeader: 'Clear Filters',
         message: 'Would you like to clear all filters?',
         buttons: [
           {
             text: 'Cancel',
             role: 'cancel',
             cssClass: 'secondary',
             handler: (blah) => {
               console.log('Confirm Cancel: blah');
             }
           }, {
             text: 'Ok',
             handler:  (data) => {
               console.log('Confirm Okay');
               this.startDate = "";
               this.endDate = "";
              
             }
           }
         ]
       });
   
       await alert.present();
      } catch (error) {
        console.log(this.TAG,error);
      }
  }
  public menuItemClick(index){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }

  public applyFilter(){
    console.log(this.TAG,"applyFilter method called");
    try {
          console.log(this.TAG,"applyFilter",this.startDate.split('T')[0]); 
          console.log(this.TAG,"applyFilter",this.endDate.split('T')[0]);
          
           this.storage.set('filterStartDate',this.startDate ? this.startDate.split('T')[0]:'CLEAR');
           this.storage.set('filterEndDate',this.endDate ? this.endDate.split('T')[0]:'CLEAR');
           this.router.navigateByUrl('/order-approval'); 
          
           
      this.startDate
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.approvalModalService.getApprovalDetails("1","186","12").subscribe(data => {
      console.log("Pravin Modal DATA ",data);
      this.column_data = data.colum_names;
      this.rows = data.colum_data;

    });
  }

  getdata(){
    this.approvalModalService.getApprovalDetails("1","186","12").subscribe(data => {
      console.log("Pravin Modal DATA ",data);
      this.column_data = data.data.colum_names;
      this.rows = data.data.colum_data;

    });
  }

  adjustColumnMinWidth() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const rows = element.getElementsByTagName("datatable-body-row");
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("datatable-body-cell");
      for (let k = 0; k < cells.length; k++) {
        const cell = cells[k];
        const cellSizer = cell.children[0].children[0] as HTMLElement;
        const sizerWidth = cellSizer.getBoundingClientRect().width;
        if (this.column_data[k].minWidth < sizerWidth) {
          this.column_data[k].minWidth = sizerWidth;
        }
      }
    }
}

}
