import { LatLongFinderPage } from './../lat-long-finder/lat-long-finder.page';
import { Page } from './../order-approval/show-approval-details-modal/show-approval-details-modal.page';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Commonfun } from 'src/provider/commonfun';
import { Validator } from 'src/provider/validator-helper';
import { LoginauthService } from '../login/loginauth.service';
import { BPaddress, BusinessPartnerList } from '../neworder/neworder.service';
import { ConsolidationOrderService } from './consolidation-order.service';
import { CorporateEmployee } from 'src/assets/model/CorporateEmployee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

export interface Data {
  movies: string;
}

@Component({
  selector: 'app-consolidation-order',
  templateUrl: './consolidation-order.page.html',
  styleUrls: ['./consolidation-order.page.scss'],
  encapsulation: ViewEncapsulation.None

})



export class ConsolidationOrderPage implements OnInit {

  
  
  readonly TAG = "Consolidation Order Page";
  consolidationOrderForm: FormGroup;
  primaryBusinessPartnerList:any;
  secondaryBusinessPartnerList:any;
  selectedPrimaryBusinessPartner: BusinessPartnerList;
  custShippingAddressList: BPaddress[];
  custBillingAddressList: BPaddress[];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  //rows = new Array<any>();
  public data: Data;
  public columns: any;
  public rows:any [];
  selected = [];
  selectedOrder = false;
  page = new Page();
  currentPageOffset=0;
  higgestPageOffset = -1;
  dontClearConsolidate;

  validation_messages = {'selectedBusinessPartner': [{ type: 'required', message: '*Please Select Customer.'}],
                         'custAddShippingCtrlErrorMessage': [{ type: 'required', message: '*Please Select Shipping Address.'}],
                         'custAddBillingCtrlErrorMessage':[{ type: 'required', message: '*Please Select Billing Address.'}],
                        };

  constructor(private consolidationOrderService: ConsolidationOrderService,
              private formBuilder: FormBuilder,private validator: Validator,
              private commonFunction: Commonfun,public loginauth: LoginauthService,
              private http: HttpClient,private alertCtrl: AlertController,private router: Router
              ) { 
                this.columns = [
                  { name: 'Secondary Customer Name',prop:'secondary_cust' },
                  { name: 'Order No',prop:'documentno' },
                  { name: 'Date',prop:'documentdate' }
                ];

                


              }

  ngOnInit() {
                this.consolidationOrderForm = this.formBuilder.group({
                  primaryCustomerCtrl:[,Validators.required],
                  selectedBPaddressShippingCtrl:[,Validators.required],
                  selectedBPAddressBillingCtrl:[,Validators.required]
                  
                });
                this.page.pageNumber = 0;
                this.page.size = 10;
    
  }
  async ionViewWillEnter(){
    try {
     // console.log(this.TAG,"Dummy REsponse",this.rows);
    //  this.getSecondaryCustomer({ offset: 0 });
    //  console.log(this.TAG,"ionViewWillEnter Fired");
          this.commonFunction.loadingPresent();
          let tempResponse  = await this.consolidationOrderService.getPrimaryCustomer().toPromise();
        //  console.log(this.TAG,tempResponse);
          if(!!tempResponse.length){
            if(tempResponse.length > this.loginauth.minlistcount){
              this.primaryBusinessPartnerList = [];
            } else {
              this.primaryBusinessPartnerList =  tempResponse;
              this.dontClearConsolidate = true;
              if(this.primaryBusinessPartnerList.length == 1){
                this.consolidationOrderForm.controls["primaryCustomerCtrl"].setValue(this.primaryBusinessPartnerList[0]);
                this.selectedPrimaryBusinessPartner = this.primaryBusinessPartnerList[0];
                this.bindCustomerBillingAddress();
                this.higgestPageOffset = -1;
                this.currentPageOffset = 0;
                this.getSecondaryCustomer({ offset: 0 });
                
              }
            }
        }
        this.commonFunction.loadingDismiss();
    } catch (error) {
      this.commonFunction.loadingDismiss();
     // console.log(this.TAG,error);
    }
  }
  public async bindCustomerBillingAddress(id?){
    try {
            const addressResponse = await this.consolidationOrderService.getPrimaryCustomerBillingAddress(this.selectedPrimaryBusinessPartner.id).toPromise();
            const response = addressResponse['response'];
            var jsondata = response.data;
            this.custBillingAddressList = jsondata.filter(e => e.invoiceToAddress == true);
            this.custShippingAddressList = jsondata.filter(e => e.shipToAddress == true);

            setTimeout(() => {
              if (this.custShippingAddressList.length == 1) {
                this.consolidationOrderForm.controls["selectedBPaddressShippingCtrl"].setValue(this.custShippingAddressList[0]);
                }
              if (this.custBillingAddressList.length == 1) {
                this.consolidationOrderForm.controls["selectedBPAddressBillingCtrl"].setValue(this.custBillingAddressList[0]);
              }
            }, 100);
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public refreshPage(){
    try {
            this.consolidationOrderForm.reset();
            this.rows=[];
            this.higgestPageOffset = -1;
            this.currentPageOffset = 0;
            this.page.totalElements = 0;

    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public onCustomerChange(event: {component: IonicSelectableComponent,value: any}){
    try {
          //  console.log(this.TAG,"onCustomerChange");
            this.higgestPageOffset = -1;
            this.currentPageOffset = 0;
            this.custShippingAddressList = null;
            this.custBillingAddressList = null;
            this.consolidationOrderForm.controls["selectedBPaddressShippingCtrl"].setValue('');
            this.consolidationOrderForm.controls["selectedBPAddressBillingCtrl"].setValue('');
            this.selectedPrimaryBusinessPartner = event.value;
            this.bindCustomerBillingAddress(event.value.id);
            this.rows = [];
            this.getSecondaryCustomer({ offset: 0 });
           // this.setPage({ offset: 0 });
            event.component._searchText = "";
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onCustomerClose(event: {component: IonicSelectableComponent,value: any}){
    try {
          event.component.searchText = "";
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onCustomerSearchChange(event: { component: IonicSelectableComponent, text: any }){
    try {
         
          var custsearchtext = event.text;
          if (custsearchtext.length >= 3) {
            this.bindPrimaryCustomerFromApi(custsearchtext);
           
          }else {
            if(!!this.dontClearConsolidate && this.dontClearConsolidate == true) {
  
            } else {
              this.primaryBusinessPartnerList = [];
            }
  
           
          }
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public async bindPrimaryCustomerFromApi(strsearch: string){
    try {
          if (strsearch != "") {
            const cust_response = await this.consolidationOrderService.getPrimaryCustomer(strsearch).toPromise(); 
           // console.log(this.TAG,cust_response);
            this.primaryBusinessPartnerList = cust_response;
        } else {
          if(!!this.dontClearConsolidate && this.dontClearConsolidate == true) {

          } else {
            this.primaryBusinessPartnerList = [];
          }

         
        }
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public toggleSecondaryBusinessPartner(event,item){
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
          this.higgestPageOffset = -1;
          this.currentPageOffset = 0;
          this.page.totalElements = 0;
          this.consolidationOrderForm.reset();
          this.rows=[];
          this.router.navigateByUrl('/home');
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  public  async onConsolidateOrder(data){
    try {
              
              if(!!this.selected && this.selected.length > 0) {
                  this.commonFunction.loadingPresent();
                  let Shipping = this.consolidationOrderForm.get('selectedBPaddressShippingCtrl').value.id;
                  let Billing = this.consolidationOrderForm.get('selectedBPAddressBillingCtrl').value.id;

                  let consolidateOrderResponse = await this.consolidationOrderService.consolidateOrderService(this.selected,this.selectedPrimaryBusinessPartner,Shipping,Billing).toPromise();
                 // console.log(this.TAG,"on Close Order Status",consolidateOrderResponse);
                  if(!!consolidateOrderResponse){
                    this.presentAlert("Consolidation Order","Status",consolidateOrderResponse.msg);

                  }
                  this.commonFunction.loadingDismiss(); 
             } else {
              this.commonFunction.presentAlert("Consolidation Order","Validation","Please Select Order");
             }


    } catch (error) {
      this.commonFunction.loadingDismiss();
      this.commonFunction.presentAlert("Consolidation Order","Error",error.error);
     // console.log(this.TAG,error);
    }
  }
  public async onCloseOrder(formData){
    try {
            if(!!this.selected && this.selected.length > 0) {
              this.commonFunction.loadingPresent();
              let Shipping = this.consolidationOrderForm.get('selectedBPaddressShippingCtrl').value.id;
              let Billing = this.consolidationOrderForm.get('selectedBPAddressBillingCtrl').value.id;
              let consolidateOrderResponse = await this.consolidationOrderService.consolidateOrderCloseService(this.selected,this.selectedPrimaryBusinessPartner,Shipping,Billing).toPromise();;
            //  console.log(this.TAG,"on Close Order Status",consolidateOrderResponse);
              if(!!consolidateOrderResponse){
                this.presentAlert("Consolidation Order","Status",consolidateOrderResponse.msg);
              }
              this.commonFunction.loadingDismiss(); 
   } else {
    this.commonFunction.presentAlert("Consolidation Order","Validation","Please Select Order");
   }
    } catch (error) {
      this.commonFunction.loadingDismiss(); 
      this.commonFunction.presentAlert("Consolidation Order","Error",error.error);
     // console.log(this.TAG,error);
    }
  }
  public async getSecondaryCustomer(pageInfo){
    try {
           // console.log(this.TAG,"getSecondaryCustomer CAlled");
            this.commonFunction.loadingPresent();
            this.page.pageNumber = pageInfo.offset;
            let offset = 0;
            
            if(this.higgestPageOffset < pageInfo.offset){

                    if(this.page.totalElements == 0){
                      offset = 0;
                      this.currentPageOffset = 0;
                    } else{
                      this.currentPageOffset = this.page.totalElements + 20;
                      offset = this.currentPageOffset;
                    }
                
                    this.secondaryBusinessPartnerList = await this.consolidationOrderService.getSecondaryCustomerFromApi(this.selectedPrimaryBusinessPartner.id,offset).toPromise();
                   // console.log(this.TAG,"Secondary Customer",this.secondaryBusinessPartnerList);
                    
                  if(!!this.rows){
                    this.higgestPageOffset = pageInfo.offset;
                        this.rows = this.rows.concat(this.secondaryBusinessPartnerList.filter(x => this.rows.every(y => y !== x)));
                      

                  } else {
                    this.higgestPageOffset = pageInfo.offset;
                    this.rows = this.secondaryBusinessPartnerList;
                   // this.getSecondaryCustomer({ offset: 1 });
                  }
                    this.page.totalElements = this.rows.length;
                    this.page.totalPages = this.page.totalElements / this.page.size;
            // this.loadingIndicator  = false;
          }
            
            this.commonFunction.loadingDismiss();
           // this.page.pageNumber = 1;
    } catch (error) {
      this.commonFunction.loadingDismiss();
    //  console.log(this.TAG,error);
    }
  }
  public onSelect({ selected }) {
  //  console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    if(!!this.selected && this.selected.length>0){
      this.selectedOrder = true;
    } else {
      this.selectedOrder = false;
    }
    
   
  }
  onActivate(event) {
  //  console.log('Activate Event', event);
  }
  
}
