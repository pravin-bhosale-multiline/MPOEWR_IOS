import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { OrderApprovalServiceService } from './order-approval-service.service';
import { Commonfun } from '../../provider/commonfun';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Constants } from '../common/Constants';
import { LoginauthService } from '../login/loginauth.service';
import { Router } from '@angular/router';
import {Message} from '../../provider/message-helper'
import { ShowApprovalDetailsModalPage } from './show-approval-details-modal/show-approval-details-modal.page';


@Component({
  selector: 'app-order-approval',
  templateUrl: './order-approval.page.html',
  styleUrls: ['./order-approval.page.scss'],
})
export class OrderApprovalPage implements OnInit {
 
  readonly TAG = "OrderApprovalPage"; 


  ColumnMode = ColumnMode;
  orderData=[];
  mdOrderStatus;
  testData;
  
  filterTab=[];
  filterOrg=[];
  filterDocType=[];
  filterBusinessPartner;
  filterFromDate;
  filterToDate;
  totalFilterApplied:number = 0;
  filterStartDate;
  filterEndDate;
  totalSortApplied:number = 0; 

  emptyCart = false;
  getOrderURL:string;

  constructor(    private orderApprovalServiceService: OrderApprovalServiceService,
                  private commonfun:Commonfun,
                  public alertController: AlertController,
                  public storage: Storage,
                  public loginauth:LoginauthService,
                  public router : Router,
                  public msg:Message,
                  public modalController: ModalController
                  ) {
                   // console.log("Roouter Values",this.router.getCurrentNavigation().extras.state);
                   }

 async ngOnInit() {
   
      
  }
  
async createURL()
{
  try {
    
    this.getOrderURL = Constants.DOMAIN_URL + '/openbravo'+"/ws/in.mbs.webservice.OrderApproval?" + 
     'user_id=' + this.loginauth.userid
     +'&offset=' + this.orderApprovalServiceService.pageOffset
     +'&activity_id=' + this.loginauth.selectedactivity.id;


  //  this.getOrderURL = Constants.DOMAIN_URL + '/openbravo'+"/ws/in.mbs.webservice.OrderApproval?" 
  //  + '&user='+'hardik.pandya'+'&password='+'pass' + '&user_id=' + 'FFF202001310332122424C1A38AB7A41'
  //  +'&offset=' + this.orderApprovalServiceService.pageOffset
  //  + '&activity_id=' + 'FFF20200217114608722C4817FB0AEB1'  ;
   
    this.filterTab=this.orderApprovalServiceService.filterTab
    if(!!this.filterTab && this.filterTab.length > 0){
      this.getOrderURL =  this.getOrderURL.concat('&tab='+this.filterTab.toString());
    }

    this.filterOrg = this.orderApprovalServiceService.filterOrg;
    if(!!this.filterOrg && this.filterOrg.length > 0){
      this.getOrderURL = this.getOrderURL+'&org='+this.filterOrg.toString();
    }

   // this.filterDocType = await this.storage.get('filterDocType');
   this.filterDocType = this.orderApprovalServiceService.filterDocType;
    if(!!this.filterDocType && this.filterDocType.length > 0 ){
    //  this.totalFilterApplied = this.totalFilterApplied + 1;
      this.getOrderURL = this.getOrderURL+'&doc_type='+this.filterDocType.toString();
    }
    
   // this.filterBusinessPartner = await this.storage.get('filterBusinessPartner');
   this.filterBusinessPartner = this.orderApprovalServiceService.filterBusinessPartner;
    if(!!this.filterBusinessPartner && this.filterBusinessPartner !=='CLEAR'){
    //  this.totalFilterApplied = this.totalFilterApplied + 1;
      this.getOrderURL = this.getOrderURL+'&business='+this.filterBusinessPartner;
    }
    

    this.filterStartDate = await this.storage.get('filterStartDate');
    if(!!this.filterStartDate && this.filterStartDate !=='CLEAR'){
    //  this.totalSortApplied = this.totalSortApplied + 1;
      this.getOrderURL =  this.getOrderURL+'&start_date=this.filterStartDate' + '&end_date='+this.filterEndDate;
    }

    this.filterEndDate = await this.storage.get('filterEndDate');
  
  } catch (error) {
    
  }
}

  async ionViewWillEnter(){
    this.Pageload();
  }
  
  async Pageload()
  {
    this.commonfun.loadingPresent();
    this.orderApprovalServiceService.pageOffset = 0;
 
    this.filterTab=this.orderApprovalServiceService.filterTab
    if(!!this.filterTab && this.filterTab.length > 0){
      this.totalFilterApplied = this.totalFilterApplied + 1;
      
    
    }

    //this.filterOrg = await this.storage.get('filterOrg');
    this.filterOrg = this.orderApprovalServiceService.filterOrg;
    if(!!this.filterOrg && this.filterOrg.length > 0){
      this.totalFilterApplied = this.totalFilterApplied + 1;
      
    }

   // this.filterDocType = await this.storage.get('filterDocType');
   this.filterDocType = this.orderApprovalServiceService.filterDocType;
    if(!!this.filterDocType && this.filterDocType.length > 0){
      this.totalFilterApplied = this.totalFilterApplied + 1;
     
    }
    
   // this.filterBusinessPartner = await this.storage.get('filterBusinessPartner');
   this.filterBusinessPartner = this.orderApprovalServiceService.filterBusinessPartner;
    if(!!this.filterBusinessPartner && this.filterBusinessPartner !=='CLEAR'){
      this.totalFilterApplied = this.totalFilterApplied + 1;
     
    }
    


    this.createURL();

 
    this.getOrderURL=this.getOrderURL.replace(/ /g,"%20");

    this.orderData =  await ( await this.orderApprovalServiceService.getOrder(this.getOrderURL)).toPromise();

    if((!!this.orderData && this.orderData.length > 0)){
      this.emptyCart = true;
    } else {
      this.emptyCart = false;
    }
    
    
    this.commonfun.loadingDismiss();
  } 



  async RefreshPage(el: HTMLElement){
    el.scrollIntoView();
    this.orderApprovalServiceService.filterTab=[];
    this.orderApprovalServiceService.filterOrg=[];
    this.orderApprovalServiceService.filterDocType=[];
    this.orderApprovalServiceService.filterBusinessPartner=''; 
    this.orderApprovalServiceService.filterselectedBusinessPartner='';
    this.orderApprovalServiceService.pageOffset = 0;
    this.totalFilterApplied = 0;
    this.ionViewWillEnter();
  }

public async saveConfirm(id,record,tab_id,status){
try {
 
  let message;

  if(status=="C"){
    message = "Do you really want to mark this incomplete"
  } else if(status=="A"){
    message = "Do you really want to approve this order"
  }
  const alert = await this.alertController.create({
  
    header: 'Confirm!',
    message: message,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
        //  console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
        //  console.log('Confirm Okay');
          this.save(id,record,tab_id,status,"Approve from Ionic");
        }
      }
    ]
  });

  await alert.present();
} catch (error) {
  
}
}
public async getDetails(id,record,tab_id){
try {
  const modal = await this.modalController.create({
    component: ShowApprovalDetailsModalPage,
    cssClass: 'my-custom-class',
    componentProps:{
      "id":id,
      "record":record,
      "tab_id":tab_id
    }
  });
  return await modal.present();
} catch (error) {
  
}
}
public async rejectConfirm(id,record,tab_id,status){
  let methodTAG = 'rejectConfirm';
  try {
    let alert = await this.alertController.create({
  
      header: 'Confirm!',
      subHeader: 'Do you really want to reject this order',
      message: '',
      cssClass: 'my-custom-class',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          //  console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler:  (data) => {
            if(data.txtRemark != null && data.txtRemark.length > 0){
            //  console.log('Confirm Okay');
              this.save(id,record,tab_id,status,data.txtRemark);
            } else {
              alert.message='<b style="color: red;">Enter valid remark.</b>';
              return false;
            }

           
          }
        }
      ],
      inputs: [
        {
          name: 'txtRemark',
          type: 'text',
          placeholder: 'Enter Remark',
          
         
        }]
        
    });
  
    await alert.present();
  } catch (error) {
  //  console.log(this.TAG,methodTAG,error);
  }
}
public async save(id,record,tab_id,status,remark?){
    try {
            
            this.commonfun.loadingPresent();
            
            
            let response = await this.orderApprovalServiceService.saveOrderStatus(id,record,tab_id,status,remark).toPromise();
            this.commonfun.loadingDismiss();
          //  console.log(this.TAG,"Pravin",response);
              if(response.res=="Success"){
                this.orderData = this.orderData.filter((item) => item.id !== id);
                if((!!this.orderData && this.orderData.length > 0)){
                  this.emptyCart = false;
                } else {
                  this.emptyCart = true;
                }

                this.commonfun.presentAlert("Order","","Your order has been updated successfully");
              }
              else {
                this.commonfun.presentAlert("Order","","Some things went wrong please try again late");
              }

            // this.orderApprovalServiceService.saveOrderStatus(id,record,tab_id,status,remark).subscribe(response =>{

            //   this.commonfun.loadingDismiss();
            //   if(response.res=="Success"){
            //     this.orderData = this.orderData.filter((item) => item.id !== id);
            //     if((!!this.orderData && this.orderData.length > 0)){
            //       this.emptyCart = false;
            //     } else {
            //       this.emptyCart = true;
            //     }

            //     this.commonfun.presentAlert("Order","","Your order has been updated successfully");
            //   }
            //   else {
            //     this.commonfun.presentAlert("Order","","Some things went wrong please try again late");
            //   }
              

            // });
                
    } catch (error) {
    //  console.log(this.TAG,"Pravin",error);
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Order","Error",error.error);
      
    }
}
public async doInfinite(event){
    
   try {
         
         this.orderApprovalServiceService.pageOffset = this.orderApprovalServiceService.pageOffset + 20;
         this.createURL();

          

         let tempData = await ( await this.orderApprovalServiceService.getOrder(this.getOrderURL)).toPromise();
      
         if(!!tempData){
       

        this.orderData=this.orderData.concat(tempData);
    
      //  event.state = "closed";
      event.target.complete();
      
          } else {

          }
          if((!!tempData && tempData.length > 0)){
            this.emptyCart = false;
          } else {
            this.emptyCart = true;
          }

   } catch (error) {
    // console.log(this.TAG,error);
   }

}


}
