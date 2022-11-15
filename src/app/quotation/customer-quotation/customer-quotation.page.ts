import { CustomerQuotationService } from './customer-quotation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { BPaddress, BusinessPartnerList } from 'src/app/neworder/neworder.service';
import { Commonfun } from 'src/provider/commonfun';
import { LoginauthService } from 'src/app/login/loginauth.service';
import { timeStamp } from 'console';

@Component({
  selector: 'app-customer-quotation',
  templateUrl: './customer-quotation.page.html',
  styleUrls: ['./customer-quotation.page.scss'],
})
export class CustomerQuotationPage implements OnInit {
  
  readonly TAG = "Customer Quotation Page";

  customerQuotationForm:FormGroup;
  businessPartnerList: any;
  selectedBusinessPartner: BusinessPartnerList;
  custShippingAddressList: BPaddress[];
  custBillingAddressList: BPaddress[];
  serviceProductList:any
  reftextcount = 0;
  selectedSerialNumberProductList:any;
  selectedServiceProduct:any;
  previousPageData:any;
  hasSerialNumber = false;
  Servicepricebasedon: any;
  showComplainNumber = false;
  tempbusinessPartnerList:any
  tempServiceProductResponse:any
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();
  /**
   * 
   */
  maxDate = this.year + "-" + this.month + "-" + this.day;
  today= this.year+"-"+("0" + this.month).slice(-2)+ "-" + ("0" + this.day).slice(-2);

  dontClearCustomerQuotation;

  validation_messages = {'selectedBusinessPartner': [{ type: 'required', message: '*Please Select Customer.'}],
                         'custAddShippingCtrlErrorMessage': [{ type: 'required', message: '*Please Select Shipping Address.'}],
                         'custAddBillingCtrlErrorMessage':[{ type: 'required', message: '*Please Select Billing Address.'}],
                        };


  constructor(private formBuilder: FormBuilder,private commonFunction: Commonfun,
              private alertCtrl: AlertController,private router: Router,private route: ActivatedRoute,
              private customerQuotationService: CustomerQuotationService,
              private loginService: LoginauthService,public loginauth: LoginauthService,) { }

  ngOnInit() {
    this.customerQuotationForm = this.formBuilder.group({
      customerCtrl:[,Validators.required],
      selectedBPaddressShippingCtrl:[,Validators.required],
      selectedBPAddressBillingCtrl:[,Validators.required],
      orderDateCtrl:[,Validators.required],
      serviceProductCtrl:[,Validators.required],
      complaintNoCtrl:[,]
    });

    //this.customerQuotationForm.get('orderDateCtrl').disable();
  
  }
  async ionViewWillEnter(){
  // console.log(this.TAG,"ionViewWillEnter Fired");
   this.commonFunction.loadingPresent();
   this.Servicepricebasedon = this.loginService.selectedactivity.Servicepricebasedon;
  // console.log(this.TAG,"Servicepricebasedon",this.Servicepricebasedon);

   
   let tempResponse  = await this.customerQuotationService.getCustomer().toPromise();
  // tempResponse =  tempResponse.slice(0,9);
  
  if(!!tempResponse.length){
      if(tempResponse.length > this.loginauth.minlistcount){
        this.businessPartnerList = [];
      } else {
        this.businessPartnerList =  tempResponse;
        if(this.businessPartnerList.length == 1){
          this.customerQuotationForm.controls["customerCtrl"].setValue(this.businessPartnerList[0]);
          this.selectedBusinessPartner = this.businessPartnerList[0];
          this.bindCustomerBillingAddress();
          this.tempServiceProductResponse = await this.customerQuotationService.getServiceProduct("",this.selectedBusinessPartner.id).toPromise();
        }  else {
          this.dontClearCustomerQuotation = true;
        }
      }
  }
  if(!!this.tempServiceProductResponse) {
    if(this.tempServiceProductResponse.length > this.loginauth.minlistcount){
      this.serviceProductList = ""
    
    } else {
      this.serviceProductList = this.tempServiceProductResponse;
      if(this.serviceProductList.length == 1){
        this.customerQuotationForm.controls["serviceProductCtrl"].setValue(this.serviceProductList[0]);
        this.selectedServiceProduct = this.serviceProductList[0];
       // this.customerQuotationForm.get('serviceProductCtrl').disable();
      } else {
        this.dontClearCustomerQuotation = true;
      }
    }
  }
 
   

   this.bindData();
   
    // let routeData = this.route.snapshot.params['cartList'];
    this.commonFunction.loadingDismiss();
    
  }
  public bindData(){
    try {
          this.route.queryParams.subscribe((data) => {
            if(!!data["cartList"] && data["cartList"].length > 0 ){
              this.selectedSerialNumberProductList = JSON.parse(data["cartList"]);
            //  console.log(this.TAG,"Previous Page Data Cart List",this.selectedSerialNumberProductList);
              this.previousPageData = JSON.parse(data["selectedQuotationData"])
            //  console.log(this.TAG,"Previous Page Data",this.previousPageData);
              this.hasSerialNumber = true;
              if(!!this.previousPageData.selectedBusinessPartnerKey){
                 this.customerQuotationForm.controls["customerCtrl"].setValue(this.previousPageData.selectedBusinessPartnerKey);
                 this.selectedBusinessPartner = this.previousPageData.selectedBusinessPartnerKey;
                 this.customerQuotationForm.get('customerCtrl').disable();
                 this.customerQuotationForm.get('selectedBPaddressShippingCtrl').disable();
                 this.customerQuotationForm.get('selectedBPAddressBillingCtrl').disable();
              }
              if(!!this.previousPageData.bp_billing_add_id){
                setTimeout(() => {

                   let tempBillAdd = [] = this.previousPageData.bp_billing_add_id;
                   let tempShipAdd = [] = this.previousPageData.bp_shiping_add_id;
                  
                   this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].setValue(tempShipAdd[0]);
                   this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].setValue(tempBillAdd[0]);

                   this.customerQuotationForm.get('selectedBPaddressShippingCtrl').disable();
                   this.customerQuotationForm.get('selectedBPAddressBillingCtrl').disable();
                  
                }, 100);
              }


              if(!!this.previousPageData.order_date){
                this.customerQuotationForm.controls["orderDateCtrl"].setValue(this.previousPageData.order_date);

              }
              if(!!this.previousPageData.complaint_no){
                this.customerQuotationForm.controls["complaintNoCtrl"].setValue(this.previousPageData.complaint_no);
                this.customerQuotationForm.get('complaintNoCtrl').disable();
              }
              if(!!this.previousPageData.service_product_id){
                this.customerQuotationForm.controls["serviceProductCtrl"].setValue(this.previousPageData.service_product_id);
                this.selectedServiceProduct = this.previousPageData.service_product_id;
                this.customerQuotationForm.get('serviceProductCtrl').disable();
                
              }

            }
         });
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onCustomerChange(event: {component: IonicSelectableComponent,value: any}){
    try {
          this.custShippingAddressList = null;
          this.custBillingAddressList = null;
          this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].setValue('');
          this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].setValue('');
          this.selectedBusinessPartner = event.value;
          this.bindCustomerBillingAddress(event.value.id);
          event.component._searchText = "";
          
          this.bindServiceProductIfSelected(); 

    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onCustomerClose(event: {component: IonicSelectableComponent,text: any}){
    try {
          event.component.searchText = "";
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onCustomerSearchChange(event: { component: IonicSelectableComponent, text: any }){
   try {
          this.reftextcount++;
          var custsearchtext = event.text;
          if (custsearchtext.length >= 3) {
            this.bindCustomerFromApi(custsearchtext);
            this.reftextcount = 0;
          } else {
            if(!!this.dontClearCustomerQuotation && this.dontClearCustomerQuotation == true) {

            } else {
              this.businessPartnerList = [];
            }



          }
   } catch (error) {
    // console.log(this.TAG,error);
   }
  }
  public onServiceProductClose(event: {component: IonicSelectableComponent,text: any}){
    try {
          event.component.searchText = "";
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onServiceProductChange(event: {component: IonicSelectableComponent,value: any}){
    try {
        //  console.log(this.TAG,"onServiceProductChange"); 
          this.selectedServiceProduct = event.value;
          if(event.value.compnumberismandatory =='Y'){
            this.showComplainNumber =  true;
            
            this.customerQuotationForm.controls['complaintNoCtrl'].setValidators([Validators.required]);
            this.customerQuotationForm.controls['complaintNoCtrl'].updateValueAndValidity();


          } else if(event.value.compnumberismandatory =='N'){
            this.showComplainNumber =  false;
            this.customerQuotationForm.controls['complaintNoCtrl'].clearValidators();
            this.customerQuotationForm.controls['complaintNoCtrl'].updateValueAndValidity();
          }
          event.component._searchText = "";
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onServiceProductSearch(event: { component: IonicSelectableComponent, text: any }){
    try {
         
        var custsearchtext = event.text;
        if(!!custsearchtext){
          if(!!this.selectedBusinessPartner){
            this.bindServiceProduct(custsearchtext);
          } else {
            this.commonFunction.presentAlert("Customer Quotation","Validation","Please Select Customer");
          }
       
          
        }
          
       
      
      
      
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public async bindCustomerFromApi(strsearch: string){
    try {
          if (strsearch != "") {
            const cust_response = await this.customerQuotationService.getCustomer(strsearch).toPromise(); 
          //  console.log(this.TAG,cust_response);
            this.businessPartnerList = cust_response;
        } else {
          this.businessPartnerList = [];
        }
         
         
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public async bindCustomerBillingAddress(id?){
    try {
            const addressResponse = await this.customerQuotationService.getcustmerbillingaddress(this.selectedBusinessPartner.id).toPromise();
            const response = addressResponse['response'];
            var jsondata = response.data;
            this.custBillingAddressList = jsondata.filter(e => e.invoiceToAddress == true);
            this.custShippingAddressList = jsondata.filter(e => e.shipToAddress == true);

            setTimeout(() => {
              if (this.custShippingAddressList.length == 1) {
                this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].setValue(this.custShippingAddressList[0]);
              }
              if (this.custBillingAddressList.length == 1) {
                this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].setValue(this.custBillingAddressList[0]);
              }
            }, 100);
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public async bindServiceProduct(strsearch?:string){
    try {
          if(strsearch!=""){
               const serviceProductApiResponse = await this.customerQuotationService.getServiceProduct(strsearch,this.selectedBusinessPartner.id).toPromise();
             //  console.log(this.TAG,"Service Product API Response",serviceProductApiResponse);
             //  this.serviceProductList = [{"id":"FFF20200121121311736E8DB9B68EA18","name":"SC-002-Service Charges - Others","compnumberismandatory":"N"}];
             this.serviceProductList = serviceProductApiResponse;
            } else {
              this.serviceProductList = [];
              //  const serviceProductApiResponse = await this.customerQuotationService.getServiceProduct(strsearch,this.selectedBusinessPartner.id).toPromise();
              //  console.log(this.TAG,"Service Product API Response",serviceProductApiResponse);
              //  this.serviceProductList = serviceProductApiResponse;
              //  console.log(this.TAG,this.serviceProductList);
          }
    
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  toggle(selectedcartproduct) {
    if (selectedcartproduct.show == false) {
      for (var i = 0; i < this.selectedSerialNumberProductList.length; i++) {
        if (this.selectedSerialNumberProductList[i].show === "true") {
          this.selectedSerialNumberProductList[i].show = "false";
        }
      }
    }
    selectedcartproduct.show = !selectedcartproduct.show;
  }
  async presentAlert(Header: string, SubHeader: string, Message: string) {
    const alert = await this.alertCtrl.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: [{
        text: "OK",
        handler: (ok) => {
          this.customerQuotationForm.reset('', {emitEvent: false});
          this.router.navigateByUrl('/home');
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  public addSerialNo(){
    try {
      if(!!this.selectedSerialNumberProductList){
                      
      } else {
        this.selectedSerialNumberProductList = [];
      }

          if(!!this.customerQuotationForm.controls["customerCtrl"].value){
             if(!!this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].value)   {
                if(!!this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].value){
                  // if(!!this.customerQuotationForm.controls["serviceProductCtrl"].value){
                    if(true){
                    let navigationExtras: NavigationExtras = {
                   
                      queryParams: { selectedSerialNumberProductList: JSON.stringify(this.selectedSerialNumberProductList),
                                    quotation_data:JSON.stringify({ selectedBusinessPartnerKey:this.selectedBusinessPartner,
                                                      bp_billing_add_id:this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].value,
                                                      bp_shiping_add_id:this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].value,
                                                      order_date:this.customerQuotationForm.controls["orderDateCtrl"].value,
                                                      service_product_id:this.selectedServiceProduct,
                                                      complaint_no:this.customerQuotationForm.controls["complaintNoCtrl"].value
                                                    })
                      
                    } 
                    };
                    this.router.navigate(['add-edit-service-product'], navigationExtras);
                  } else {
                    this.commonFunction.presentAlert("Customer Quotation","Validation","Please Select Service Product");
                  }

                } else {
                  this.commonFunction.presentAlert("Customer Quotation","Validation","Please Select Billing Address");
                }

             } else {
              this.commonFunction.presentAlert("Customer Quotation","Validation","Please Select Shipping Address");
             }
            
             
            
          } else {
            this.commonFunction.presentAlert("Customer Quotation","Validation","Please Select Customer");
          }
      
      
          
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public removeProduct(deletedSerial){
    try {
          const result = this.selectedSerialNumberProductList.filter(item => item.m_attributesetinstance_id != deletedSerial.m_attributesetinstance_id);
          this.selectedSerialNumberProductList = result;
          if(this.selectedSerialNumberProductList.length < 1){
            this.hasSerialNumber = false;
          }
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public async onSaveQuotation(form){
    try {
          //  console.log(this.TAG,"Quotation Data From Page",form);
            this.commonFunction.loadingPresent();

            let data = {
              "bpid": this.customerQuotationForm.controls['customerCtrl'].value.id,
              "billid": this.customerQuotationForm.controls['selectedBPaddressShippingCtrl'].value.id,
              "shipid": this.customerQuotationForm.controls['selectedBPaddressShippingCtrl'].value.id,
              "orderdate": this.customerQuotationForm.controls['orderDateCtrl'].value,
              "m_product_id": this.customerQuotationForm.controls['serviceProductCtrl'].value.id,
              "complaintno": this.customerQuotationForm.controls['complaintNoCtrl'].value
            }
            
            
            
            
            
            const saveQuotationResponse = await this.customerQuotationService.saveQuotation(data,this.selectedSerialNumberProductList).toPromise();
          //  console.log(this.TAG,saveQuotationResponse);
            this.commonFunction.loadingDismiss();
            if(!!saveQuotationResponse){
              this.presentAlert("Quotation Approval","",saveQuotationResponse.msg);
            }
            
    } catch (error) {
    //  console.log(this.TAG,error);
      this.commonFunction.loadingDismiss();
    }
  }
  public async bindServiceProductIfSelected(){
    try {
          this.tempServiceProductResponse = await this.customerQuotationService.getServiceProduct("",this.selectedBusinessPartner.id).toPromise();
          if(!!this.tempServiceProductResponse) {
            if(this.tempServiceProductResponse.length > this.loginauth.minlistcount){
              this.serviceProductList = ""
            } else {
              this.serviceProductList = this.tempServiceProductResponse;
              if(this.serviceProductList.length == 1){
                this.customerQuotationForm.controls["serviceProductCtrl"].setValue(this.serviceProductList[0]);
                this.selectedServiceProduct = this.serviceProductList[0];
               // this.customerQuotationForm.get('serviceProductCtrl').disable();
              }
            }
          }
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }


}
