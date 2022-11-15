import { CustomerQuotationService } from './../customer-quotation/customer-quotation.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Commonfun } from 'src/provider/commonfun';

@Component({
  selector: 'app-quotation-approval',
  templateUrl: './quotation-approval.page.html',
  styleUrls: ['./quotation-approval.page.scss'],
})
export class QuotationApprovalPage implements OnInit {

  readonly TAG = "Quotation Approval Page"
  quotationList:any;

  constructor(private commonFunction: Commonfun,private alertCtrl: AlertController,private customerQuotationService: CustomerQuotationService) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    try {
          this.commonFunction.loadingPresent();
          this.quotationList = await this.customerQuotationService.getQuotationList().toPromise();
        //  console.log(this.TAG,this.quotationList);
          this.commonFunction.loadingDismiss();
    } catch (error) {
      this.commonFunction.loadingDismiss();
     // console.log(this.TAG,error);
    } 
  }
  public refreshPage(){
    this.ionViewWillEnter();
  }
  
  public detailsClick(data){
    try {
          
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  async presentAlert(Header: string, SubHeader: string, Message: string) {
    const alert = await this.alertCtrl.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: [{
        text: "OK",
        handler: (ok) => {
          
         this.ionViewWillEnter();
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  public async reject(complaintno){
    try {
      try {
        this.commonFunction.loadingPresent();
        const approveQuotationResponse = await this.customerQuotationService.approveQuotation(complaintno,"",true).toPromise();
        this.commonFunction.loadingDismiss();
        if(!!approveQuotationResponse){
          this.presentAlert("Quotation Approval","",approveQuotationResponse.msg);
        }
  } catch (error) {
  //  console.log(this.TAG,error);
    this.commonFunction.loadingDismiss();
    this.commonFunction.presentAlert("Quotation Approval","Error",error.error);
  }
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }

  public async approve(complaintno){
    try {
          this.commonFunction.loadingPresent();
          const approveQuotationResponse = await this.customerQuotationService.approveQuotation(complaintno,true,"").toPromise();
          this.commonFunction.loadingDismiss();
          if(!!approveQuotationResponse){
            this.presentAlert("Quotation Approval","",approveQuotationResponse.msg);
          }
    } catch (error) {
    //  console.log(this.TAG,error);
      this.commonFunction.loadingDismiss();
      this.commonFunction.presentAlert("Quotation Approval","Error",error.error);
    }
  }


}
