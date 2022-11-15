import { ProductListPage } from './../product-list/product-list.page';
import { Component, OnInit } from '@angular/core';
import { NeworderService, BusinessPartnerList, Summary, BPaddress } from './neworder.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
import {  Subscription } from 'rxjs';
import { LoginauthService } from '../login/loginauth.service';
import { Commonfun } from '../../provider/commonfun';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { AddeditproductService } from '../addeditproduct/addeditproduct.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Message } from '../../provider/message-helper'
import { UploadService } from '../upload/upload/upload.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { Constants } from '../common/Constants';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { File as NativeFile } from '@ionic-native/file/ngx';
import { CustomAlertPage } from '../custom-alert/custom-alert.page';
import {  ViewChild } from '@angular/core';


@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.page.html',
  styleUrls: ['./neworder.page.scss'],
})
export class NeworderPage implements OnInit {

  @ViewChild('portComponent',{static: false}) portComponent: IonicSelectableComponent;
  
  readonly TAG = "New Order Page";
  today: any = new Date().toJSON().split('T')[0];
  portsSubscription: Subscription;
  reftextcount = 0;
  activitylist: any;
  activityIdlist: any;
  BusinessPartnerlist: any;
  primaryBusinessPartnerList:any;
  leastBusinessPartnerlist: any;
  leastPrimaryBusinessPartnerList: any;
  selectedBusinessPartner: BusinessPartnerList;
  selectedbunch: any;
  formprod: FormGroup;
  items: any[] = [];
  summary: Summary;
  ishidden = false;
  autocalculation: any;
  buttonName: string = '';
  activity: string = '';
  onecustomer: any;
  BPaddressbilling: BPaddress[];
  selectedBPaddressbilling: BPaddress;
  BPaddressshipping: BPaddress[];
  selectedBPaddressshipping: BPaddress;
  selecteddocumentno: any;
  selecteddproduct: any;
  cartproduct: any;
  onecartproduct: any;
  sumtotalamount: any;
  sumdiscount: any;
  sumGstAmount: any;
  sumamount: any;
  Iscartproduct = false;
  orderpunchresponse: any;
  mergedcart: any;
  BPtemplate: any;
  overdueinvoiceamtresponse: any;
  mainproducts: any;
  POimg64: any = '';
  edtitdocid: string = '';
  orderheader: any;
  activityid: string;
  templateproductdetailresponse: any;
  Isdruglicence: boolean = false;
  isdisabledCustomer: boolean = true;
  showhideRedeemReward: boolean = true;
  Isshowtemplate: boolean = false;
  tobeRedeem: any;
  avaliableRedeem: any;
  Showoverdue: any = true;
  showcrlimit: any = false;
  checkboxtab: any = true;
  orderlevelper: string = "0";
  ispomandatory: string;
  ispoimg: string;
  isdesktop: boolean = false;
  istriggeronOrderTypeChange = true;
  mmstOrderusrtype: string;
  showExpectedDeliveryDateCtrl = false;
  expireDateEdit = false;
  isPrimaryCustomer = true;
  fileType;
  fileName;
  selectedURI;
  sp_order_chk_box = false;
  temp_addressshipping;
  temp_addressbilling;
  dontClear;
  dontPrimaryClear;
  is_advance_payment = false;
  advance_payment_chk_status = false;
  orderTypeList;

  validation_messages = {
    'selectedBusinessPartner': [
      { type: 'required', message: ' *Please Select Customer.' }
    ],
    'selectedBPaddressshipping': [
      { type: 'required', message: '*Please Select Shipping Address.' }
    ],
    'selectedBPaddressbilling': [
      { type: 'required', message: '*Please Select Billing Address.' }
    ],
    'selectedordertype': [
      { type: 'required', message: '*Please Select Order Type.' }
    ]
  }
  issplorderonfreeqty: boolean;

  constructor(public neworderservice: NeworderService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public loginauth: LoginauthService,
    private alertCtrl: AlertController,
    public commonfun: Commonfun,
    public addeditproductservice: AddeditproductService,
    private camera: Camera,
    public platform: Platform,
    public msg: Message, private uploadService: UploadService, private fileChooser: FileChooser, private filePath: FilePath,
    private filePicker: IOSFilePicker, public modalController: ModalController, private transfer: FileTransfer,
    private file: NativeFile

  ) {

     //this.addprod();

    this.formprod = this.fb.group({
      selectedBusinessPartner: [, Validators.required],
      selectedBPaddressshipping: [, Validators.required],
      selectedBPaddressbilling: [, Validators.required],
      CreditLimit: [],
      OverdueInvoice: [],
      Overdueamount: [],
      duedatedays: [],
      selectedordertype: [, Validators.required],
      selectedBPtemplate: [],
      ponumber: [],
      avaliableRedeem: [],
      tobeRedeem: [],
      expecteddeliverydate: [],
      orderdescription: [],
      specialOrderCtrl:[],
      selectedPrimaryBusinessPartner:[],
      isAdvancePaymentChk: [false]
    });
  }


  ngOnInit() {
this.neworderservice.isadvancepaymentcheck=false;
    if (!!this.loginauth.selectedactivity.expecteddeliverytype && this.loginauth.selectedactivity.expecteddeliverytype == 'C') {
      this.showExpectedDeliveryDateCtrl = true;
      this.expireDateEdit = true;
    } else if (!!this.loginauth.selectedactivity.expecteddeliverytype && this.loginauth.selectedactivity.expecteddeliverytype == 'F') {
      this.showExpectedDeliveryDateCtrl = true;
      this.expireDateEdit = false;
    } else {
      this.showExpectedDeliveryDateCtrl = false;
    }
    this.advance_payment_chk_status= this.neworderservice.isadvancepaymentcheck;
    if(!!this.loginauth.selectedactivity.is_advance_payment)
      if(this.loginauth.selectedactivity.is_advance_payment === 'Y'){
        this.is_advance_payment = true;
      } else {
        this.is_advance_payment = false;
      }
      if(!!this.loginauth.selectedactivity.issplorderonfreeqty)
      if(this.loginauth.selectedactivity.issplorderonfreeqty === 'Y'){
        this.issplorderonfreeqty = true;
      } else {
        this.issplorderonfreeqty = false;
      }
    
    
    this.addprod();
    try {
         // this.commonfun.chkcache('neworder');
          setTimeout(() => {
            this.checkplatform();
            this.mmstOrderusrtype = this.loginauth.defaultprofile[0].mmstOrderusrtype;
            this.route.queryParams.subscribe(params => {
              this.edtitdocid = params["edtitdocid"]
            });
          }, 3000);
    } catch (error) {
    }
  }

  async ionViewWillEnter() {
   // console.log(this.TAG,"Selected Acitivity",this.loginauth.selectedactivity);
   //this.addprod();
   this.checkcust();
    
  }
  checkplatform() {
    try {
          if (!this.msg.isplatformweb) {
            this.isdesktop = false;
          }
          else {
            this.isdesktop = true;
          }
    } catch (error) {
        console.log("checkplatform:Erroe", error);
    }
  }
  uploadImage(str: any) {
    try {
          this.fileType = "";
          this.fileName = str.target.files[0].name.substring(str.target.files[0].name.lastIndexOf("/") + 1);
          this.fileType = str.target.files[0].name.substring(str.target.files[0].name.lastIndexOf(".") + 1);
          if (!!this.fileType && this.fileType == 'pdf') {
            this.POimg64 = str.target.files[0];
            //console.log(this.TAG, "File Size", str.target.files[0].size / 1024 / 1024);
            if (str.target.files[0].size / 1024 / 1024 > 3) {
             // console.log(this.TAG, "File Size Too Large");
              this.commonfun.presentAlert("New Order", "Validation", "File size must be less than Equal to 3 MB");
              this.POimg64 = null;
              this.fileName = "";
              this.fileType = "";
            }
          } else {
            var file: File = str.target.files[0]
         //   console.log("File Selected", str);
            var myreader: FileReader = new FileReader();
            myreader.onloadend = () => {
              var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
              this.POimg64 = b64;
            };
            myreader.readAsDataURL(file);
          }
    } catch (error) {
     }
  }
  checkcust() {
    try {
          if (this.loginauth.defaultprofile[0].mmstOrderusrtype == "CEB" || this.loginauth.defaultprofile[0].mmstOrderusrtype == "ST") {
            this.commonfun.loadingPresent();
            this.neworderservice.getnewordercustmersearchapi("", this.formprod.controls["selectedordertype"].value).subscribe(data => {
              this.commonfun.loadingDismiss();
              var response = data;
              this.BusinessPartnerlist = response;
              console.log("Customer Data ",data);

              this.leastBusinessPartnerlist = response;

              if (this.leastBusinessPartnerlist) {
                if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                 
                } else {
                 
                  this.dontClear = true;
                }
              }
              if (this.BusinessPartnerlist.length == 1) {
                this.formprod.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
                this.selectedBusinessPartner = this.BusinessPartnerlist[0]

                this.neworderservice.getOrderType(this.selectedBusinessPartner.id,this.selectedBusinessPartner.id).subscribe(result=>{
                  const distictResult = result.filter((thing, index, self) =>
                   index === self.findIndex((t) => (
                   JSON.stringify(t) === JSON.stringify(thing)
                 ))
                )

                this.orderTypeList=[];
                distictResult.forEach(element => {
                  
                  if(element.method_code == "FEFO"){
                    this.orderTypeList.push({"code":"SL","name":"Saleable"});
                  } else if(element.method_code == "LIQD"){
                    this.orderTypeList.push({"code":"NE","name":"Near Expiry"});
                  } else if(element.method_code == "COPSMPEMP"){
                    this.orderTypeList.push({"code":"ST","name":"Sample Order - Sales Team"});
                  } else if(element.method_code == "COPSMPCUST"){
                    this.orderTypeList.push({"code":"SOC","name":"Sample Order-Customer"});
                  }
                });
                })

               if (!!this.selectedBusinessPartner.primary_customer && this.selectedBusinessPartner.primary_customer == "Y") {
                  this.isPrimaryCustomer = true;
                } else {
                  this.isPrimaryCustomer = false;
                  this.bindPrimaryCustomerFromApi(this.selectedBusinessPartner.id,"");
                }
                this.activity = this.selectedBusinessPartner.mmstOrgAct$_identifier;
                this.activityid = this.selectedBusinessPartner.mmstOrgAct;
                this.formprod.controls["CreditLimit"].setValue(this.selectedBusinessPartner.creditLimit);
                this.bindcustmerbillingaddress();
                this.getTemplate();
                this.getoverdueinvoiceamt();
                this.bindDate();

                if (this.selectedBusinessPartner.showcrlimit == "N") {
                  this.showcrlimit = false;
                }
                else {
                  this.showcrlimit = true;
                }
              }
              else {
              }
              this.orderlevelper = this.selectedBusinessPartner.orderlevelper;
            }, error => {
              this.commonfun.loadingDismiss();
            
            });
            if (this.edtitdocid != undefined || this.edtitdocid != '') {
              this.editOrder(this.edtitdocid);
            }
          }
    } catch (error) {
      this.commonfun.loadingDismiss();
    }
  }
  onChangetobeRedeem() {
    this.calculation();
  }
  calculation() {
    try {
          if (this.cartproduct != undefined || this.cartproduct != null) {
            if (this.cartproduct.length == 0) this.Iscartproduct = false;
            else this.Iscartproduct = true;
            this.tobeRedeem = this.formprod.controls["tobeRedeem"].value;
            const TotalAmount = this.cartproduct.reduce((sum, item) => sum + (item.TotalAmount == "" ? 0 : Number(item.TotalAmount)), 0);
            this.sumtotalamount = TotalAmount;//-Number(this.formprod.controls["tobeRedeem"].value);
            const discount = this.cartproduct.reduce((sum, item) => sum + (item.discount == "" ? 0 : Number(item.discount)), 0);
            this.sumdiscount = discount;
            const GstAmount = this.cartproduct.reduce((sum, item) => sum + (item.GstAmount == "" ? 0 : Number(item.GstAmount)), 0);
            this.sumGstAmount = GstAmount;
            const amount = this.cartproduct.reduce((sum, item) => sum + (item.Amount == "" ? 0 : Number(item.Amount)), 0);

            // sumtotalamount
            if (this.cartproduct.some(item => item.value === 'MRP')) {
              var amt = this.cartproduct.reduce((sum, item) => sum + (item.Amount == "" ? 0 : Number(item.Amount)), 0);
              var dscamt = this.cartproduct.reduce((sum, item) => sum + (item.discount == "" ? 0 : Number(item.discount)), 0);
              this.sumamount = amt + dscamt;
            }
            else {
              this.sumamount = amount;
            }
          }
          else {
            this.Iscartproduct = false;
            this.sumtotalamount = 0;
            this.sumdiscount = 0;
            this.sumGstAmount = 0;
            this.sumamount = 0;
          }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  onChangeAdvancechk(){
    this.neworderservice.isadvancepaymentcheck=this.advance_payment_chk_status;
  }

  async addprod() {
    try {
          console.log("New Order addprod");
    
          this.route.params.subscribe(async () => {
            if(!!this.router.getCurrentNavigation())
            if (this.router.getCurrentNavigation().extras.state) {
              if (this.router.getCurrentNavigation().extras.state.selectedddlproduct) {
                this.selectedbunch = null;
                this.selectedbunch = this.router.getCurrentNavigation().extras.state.selectedddlproduct;
                this.cartproduct = this.selectedbunch;
                console.log("SET VALUE 360");

                this.orderTypeList=[{"code":"SL","name":"Saleable"},{"code":"NE","name":"Near Expiry"},
                {"code":"ST","name":"Sample Order - Sales Team"},{"code":"SOC","name":"Sample Order-Customer"}];
                
                
                if(this.router.getCurrentNavigation().extras.state.orderType == "SL"){
                  this.formprod.controls["selectedordertype"].setValue("SL");
                } else if(this.router.getCurrentNavigation().extras.state.orderType == "NE"){
                  this.formprod.controls["selectedordertype"].setValue("NE");
                } else if(this.router.getCurrentNavigation().extras.state.orderType == "ST"){
                  this.formprod.controls["selectedordertype"].setValue("ST");
                } else if(this.router.getCurrentNavigation().extras.state.orderType == "SOC"){
                  this.formprod.controls["selectedordertype"].setValue("SOC");
                }
                //this.formprod.controls["selectedordertype"].setValue(this.router.getCurrentNavigation().extras.state.orderType);
                this.formprod.controls["selectedBusinessPartner"].setValue(this.router.getCurrentNavigation().extras.state.passTempSelectedBusinessPartner);
                
                this.selectedBusinessPartner = this.router.getCurrentNavigation().extras.state.passTempSelectedBusinessPartner;
               
                if (!!this.selectedBusinessPartner.primary_customer && this.selectedBusinessPartner.primary_customer == "Y") {
                  this.isPrimaryCustomer = true;
                } else {
                  this.isPrimaryCustomer = false;
                }


                if(!!this.router.getCurrentNavigation().extras.state.passTempPrimaryCustomer){
                  this.formprod.controls["selectedPrimaryBusinessPartner"].setValue(this.router.getCurrentNavigation().extras.state.passTempPrimaryCustomer);
              
                }
                this.advance_payment_chk_status=this.neworderservice.isadvancepaymentcheck;
               
                this.temp_addressbilling = this.router.getCurrentNavigation().extras.state.addressbilling;
                this.temp_addressshipping = this.router.getCurrentNavigation().extras.state.addressshipping;
               // this.sp_order_chk_box = this.router.getCurrentNavigation().extras.state.special_order_add_edit;
                if(this.router.getCurrentNavigation().extras.state.special_order_add_edit==='Y'){
                  this.sp_order_chk_box = true;
                } else {
                  this.sp_order_chk_box = false;
                }
               //  console.log('special order',this.sp_order_chk_box);
                this.setDataFromPreviousPage(this.router.getCurrentNavigation().extras.state.passTempSelectedBusinessPartner);
              }
              else if (this.router.getCurrentNavigation().extras.state.BusinessPartnerlist) {
                this.selecteddocumentno = this.router.getCurrentNavigation().extras.state.selecteddocumentno;
                if(!!this.selecteddocumentno){
                  
                  if(this.selecteddocumentno.isgovorder==true){
                    this.sp_order_chk_box = true;
                  } else if(this.selecteddocumentno.isgovorder==false){
                    this.sp_order_chk_box = false;
                  }
                  if(this.selecteddocumentno.isadvancepay===true){
                    this.advance_payment_chk_status=true;
                    this.neworderservice.isadvancepaymentcheck=true;
                    this.formprod.get('isAdvancePaymentChk').setValue(true);
                    
                    
                  }else{
                    this.advance_payment_chk_status=false;
                    this.neworderservice.isadvancepaymentcheck=false;
                    this.formprod.get('isAdvancePaymentChk').setValue(false);
                    console.log('inside');
                  }
                  this.loadPrimaryCustomer();
                 
                }
                this.BusinessPartnerlist = this.router.getCurrentNavigation().extras.state.BusinessPartnerlist;

                this.selectedBusinessPartner = this.router.getCurrentNavigation().extras.state.selectedBusinessPartner;
                if (!!this.selectedBusinessPartner.primary_customer && this.selectedBusinessPartner.primary_customer == "Y") {
                  this.isPrimaryCustomer = true;
                 }
                // else {
                //   this.isPrimaryCustomer = false;
                // }
                this.formprod.controls["ponumber"].setValue(this.selecteddocumentno.poreference == "null" ? "" : this.selecteddocumentno.poreference);
                this.formprod.controls["tobeRedeem"].setValue(this.selecteddocumentno.ntotredeem == "null" ? "0" : this.selecteddocumentno.ntotredeem);
                this.tobeRedeem = this.selecteddocumentno.ntotredeem;
                this.istriggeronOrderTypeChange = false;
                this.getproductbydocumentid(this.selecteddocumentno.id)
                this.formprod.controls["selectedBusinessPartner"].setValue(this.selectedBusinessPartner);
                if (this.selectedBusinessPartner.showcrlimit == "N") {
                  this.showcrlimit = false;
                }
                else {
                  this.showcrlimit = true;
                }
                this.activity = this.selectedBusinessPartner.mmstOrgAct$_identifier;
                this.activityid = this.selectedBusinessPartner.mmstOrgAct;
                this.formprod.controls["CreditLimit"].setValue(this.selectedBusinessPartner.creditLimit);
                this.bindcustmerbillingaddress();
                this.getTemplate();
                this.getoverdueinvoiceamt();
                this.bindDate();

              }
              else {

              }
            } else {
             // this.formprod.controls["selectedordertype"].setValue('SL');
              console.log("SET VALUE 449");
            //  this.onOrderTypeChange();
              
            }

            this.calculation();
          });
          
          
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  async loadPrimaryCustomer(){
    try {
      if(!!this.selecteddocumentno.tagprimarycust){
        this.isPrimaryCustomer = false;
       await  this.asyncBindPrimaryCustomerFromApi(this.selecteddocumentno.bpartner,"");
       try {
        let indexPrimary = this.primaryBusinessPartnerList.findIndex(record =>record.bpid === this.selecteddocumentno.tagprimarycust);
        this.formprod.controls["selectedPrimaryBusinessPartner"].setValue(this.primaryBusinessPartnerList[indexPrimary]);
       } catch (error) {
         console.log("CATCH",error);
       }
       
      
      } else {
        this.isPrimaryCustomer = true;
      }
    } catch (error) {
      console.log(error);
    }
  }
  async bindDate() {
    try {
      let reponse = await (await this.neworderservice.getExpDateDelivery(this.selectedBusinessPartner.id)).toPromise();
         if (!!reponse.expirydate && Object.keys(reponse.expirydate).length != 0) {
        this.formprod.controls["expecteddeliverydate"].setValue(reponse.expirydate);
      }
    } catch (error) {
      // console.log(error);
    }
  }
  async getordertypeby(docid: string) {
    try {
          await this.neworderservice.getordertypeby(docid).subscribe(data => {
            const response = data['response'];
            console.log("SET VALUE 496");
            if (response.data.length > 0){
//              this.formprod.controls["selectedordertype"].setValue(response.data[0].mmstWarehouseCode);
              this.orderTypeList=[{"code":"SL","name":"Saleable"},{"code":"NE","name":"Near Expiry"},
                            {"code":"ST","name":"Sample Order - Sales Team"},{"code":"SOC","name":"Sample Order-Customer"}];
            
            
            if(response.data[0].mmstWarehouseCode == "SL"){
              this.formprod.controls["selectedordertype"].setValue("SL");
            } else if(response.data[0].mmstWarehouseCode == "NE"){
              this.formprod.controls["selectedordertype"].setValue("NE");
            } else if(response.data[0].mmstWarehouseCode == "ST"){
              this.formprod.controls["selectedordertype"].setValue("ST");
            } else if(response.data[0].mmstWarehouseCode == "SOC"){
              this.formprod.controls["selectedordertype"].setValue("SOC");
            }


            } else {
              this.formprod.controls["selectedordertype"].setValue(null);
            }
          });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  getproductbydocumentid(docid: string) {
    try {
          this.neworderservice.getproductbydocumentidapi(docid).subscribe(data => {
            this.cartproduct = data;
            this.cartproduct.reverse();
            console.log("SET VALUE 512");
            if (data != null)
            
            this.orderTypeList=[{"code":"SL","name":"Saleable"},{"code":"NE","name":"Near Expiry"},
            {"code":"ST","name":"Sample Order - Sales Team"},{"code":"SOC","name":"Sample Order-Customer"}];
            
            
            if(this.cartproduct[0].ordertypeionic == "SL"){
              this.formprod.controls["selectedordertype"].setValue("SL");
            } else if(this.cartproduct[0].ordertypeionic == "NE"){
              this.formprod.controls["selectedordertype"].setValue("NE");
            } else if(this.cartproduct[0].ordertypeionic == "ST"){
              this.formprod.controls["selectedordertype"].setValue("ST");
            } else if(this.cartproduct[0].ordertypeionic == "SOC"){
              this.formprod.controls["selectedordertype"].setValue("SOC");
            }



            this.formprod.controls["orderdescription"].setValue(this.cartproduct[0].description);
            this.calculation();
          }, error => {
            this.commonfun.presentAlert("Message", "Error", error.error.text)
          });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  bindcustomerapi(strsearch: string) {
    try {
       // console.log("bindcustomerapi");  
        if (strsearch != "") {
            this.neworderservice.getnewordercustmersearchapi(strsearch, this.formprod.controls["selectedordertype"].value).subscribe(data => {
            // console.log("Customer DAta",data);
              var response = data;
              this.BusinessPartnerlist = response;
              if (this.edtitdocid != undefined || this.edtitdocid == '') {
                this.editOrder(this.edtitdocid);
              }
            });
          } else {
            // this.BusinessPartnerlist=null;
            //=============start for top 10=================

            if (this.leastBusinessPartnerlist) {
              if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                this.BusinessPartnerlist = null;
              } else {
                this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                this.dontClear = true;
              }
            } else {
              this.neworderservice.getnewordercustmersearchapi("", this.formprod.controls["selectedordertype"].value).subscribe(data => {
                const response = data;
                if(!!response){
                  this.leastBusinessPartnerlist = response;
                }
               
                if (this.leastBusinessPartnerlist) {
                  if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                    this.BusinessPartnerlist = null;
                  } else {
                    this.dontClear = true;
                    this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                  }
                }
              });
            }
            //=============end for top 10=================
          }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
      // this.commonfun.loadingDismiss();
    }
  }
  public bindPrimaryCustomerFromApi(bp_id:string,strsearch?: string){
    try {
             //   console.log("bindPrimaryCustomerFromApi");
                //let searchText = this.portComponent.searchText;  
                //console.log("bindPrimaryCustomerFromApi",searchText);     
               // this.portComponent.clear();  
              
                if(strsearch!= ""){
                      this.neworderservice.getPrimaryCustomerService(bp_id,strsearch, this.formprod.controls["selectedordertype"].value).subscribe(data => {
                      //  console.log("Primary Customer DAta",data);
                        this.primaryBusinessPartnerList = data;
                  });

                } else {
             
                this.neworderservice.getPrimaryCustomerService(bp_id,strsearch, this.formprod.controls["selectedordertype"].value).subscribe(data => {
                  //  console.log("Primary Customer DAta",data);
                    this.leastPrimaryBusinessPartnerList = data;
                  //  this.primaryBusinessPartnerList =  this.leastPrimaryBusinessPartnerList;
                  if (this.leastPrimaryBusinessPartnerList.length > this.loginauth.minlistcount) {
                      this.primaryBusinessPartnerList = null;
                    } else {
                      this.dontPrimaryClear = true;
                      this.primaryBusinessPartnerList = this.leastPrimaryBusinessPartnerList;
                    }
                    if (this.leastPrimaryBusinessPartnerList.length == 1) {
                      this.formprod.controls["selectedPrimaryBusinessPartner"].setValue(this.leastPrimaryBusinessPartnerList[0]);
                    }
               });

              }  
             
    } catch (error) {
      console.log(this.TAG,error);
      this.commonfun.presentAlert("New Order", "Error", error);
    }
  }
  public async asyncBindPrimaryCustomerFromApi(bp_id:string,strsearch?: string){
    try {
                         
                if(strsearch!= ""){
                     let data= await this.neworderservice.getPrimaryCustomerService(bp_id,strsearch, this.formprod.controls["selectedordertype"].value).toPromise();
                    // console.log("Primary Customer async DAta",data);
                     this.primaryBusinessPartnerList = data;

                } else {
             
              let data = await  this.neworderservice.getPrimaryCustomerService(bp_id,strsearch, this.formprod.controls["selectedordertype"].value).toPromise();
               // console.log("Primary Customer DAta",data);
                this.leastPrimaryBusinessPartnerList = data;
              //  this.primaryBusinessPartnerList =  this.leastPrimaryBusinessPartnerList;
                 if (this.leastPrimaryBusinessPartnerList.length > this.loginauth.minlistcount) {
                  this.primaryBusinessPartnerList = null;
                } else {
                  this.primaryBusinessPartnerList = this.leastPrimaryBusinessPartnerList;
                  this.dontPrimaryClear = true;
                }
                if (this.leastPrimaryBusinessPartnerList.length == 1) {
                  this.formprod.controls["selectedPrimaryBusinessPartner"].setValue(this.leastPrimaryBusinessPartnerList[0]);
                }   
              
              }  
             
    } catch (error) {
      console.log(this.TAG,error);
      this.commonfun.presentAlert("New Order", "Error", error);
    }
  }
  bindBusinessPartner() {
    this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
      this.activitylist = data;
      var organization = this.activitylist.map(function (item) {
        return '\'' + item.id + '\''
      });
      this.neworderservice.activitywiseBusinessPartner(organization).subscribe(actdata => {
        const actresponse = actdata['response'];
       // this.Allcustomer = organization;
        this.BusinessPartnerlist = actresponse.data;
      });
      if (this.edtitdocid != undefined || this.edtitdocid == '') {
        this.editOrder(this.edtitdocid);
      }
    });
  }
  onTemplateChange() {
    try {
          if ((this.formprod.controls["selectedBPaddressshipping"].value != undefined && this.formprod.controls["selectedBPaddressshipping"].value != null && this.formprod.controls["selectedBPaddressshipping"].value != "") &&
            (this.formprod.controls["selectedBPaddressbilling"].value != undefined && this.formprod.controls["selectedBPaddressbilling"].value != null && this.formprod.controls["selectedBPaddressbilling"].value != "")
          ) {
            this.cartproduct = null;
            this.calculation();
            this.gettemplateproductdetail(this.formprod.controls["selectedBPtemplate"].value, this.formprod.controls["selectedordertype"].value);
          }
          else {
            if ((this.formprod.controls["selectedBPtemplate"].value != undefined && this.formprod.controls["selectedBPtemplate"].value != null && this.formprod.controls["selectedBPtemplate"].value != "")) {
              this.commonfun.presentAlert("Message", "Alert", "Please select Address first.");
              this.formprod.controls["selectedBPaddressbilling"].markAsTouched();
              this.formprod.controls["selectedBPaddressshipping"].markAsTouched();
              this.formprod.controls["selectedBPtemplate"].setValue("");
            }
          }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  bindcustmerbillingaddress() {
    try {

          //  console.log("bindcustmerbillingaddress",this.selectedBusinessPartner.id)
            this.neworderservice.getcustmerbillingaddress(this.selectedBusinessPartner.id).subscribe(data => {
            const response = data['response'];
            var jsondata = response.data;
            this.BPaddressbilling = jsondata.filter(e => e.invoiceToAddress == true);
            this.BPaddressshipping = jsondata.filter(e => e.shipToAddress == true);
           // console.log("BPaddressbilling",this.BPaddressbilling);
           // console.log("BPaddressbilling",this.BPaddressshipping);
            setTimeout(() => {
              if (this.BPaddressshipping.length == 1) {
                this.formprod.controls["selectedBPaddressshipping"].setValue(this.BPaddressshipping[0].id);
              }
              else if (this.selecteddocumentno) {
                this.formprod.controls["selectedBPaddressshipping"].setValue(this.selecteddocumentno.bpartnerLocation);
              } else if(!!this.temp_addressshipping && this.BPaddressshipping.length != 1){
                  let  index = this.BPaddressshipping.findIndex(x => x.id ===this.temp_addressshipping);
                 // console.log("YEs Selected",this.BPaddressshipping[index]);
                  this.formprod.controls["selectedBPaddressshipping"].setValue(this.BPaddressshipping[index].id);
              }
              if (this.BPaddressbilling.length == 1) {
                this.formprod.controls["selectedBPaddressbilling"].setValue(this.BPaddressbilling[0].id);
              }
              else if (this.selecteddocumentno) {

                this.formprod.controls["selectedBPaddressbilling"].setValue(this.selecteddocumentno.billto);
              }
              else if(!!this.temp_addressbilling && this.BPaddressbilling.length != 1){
                let  index = this.BPaddressbilling.findIndex(x => x.id ===this.temp_addressbilling);
               // console.log("YEs Selected",this.BPaddressbilling[index]);
                this.formprod.controls["selectedBPaddressbilling"].setValue(this.BPaddressbilling[index].id);
            }

            }, 1000);
          }, error => {
            this.commonfun.presentAlert("Message", "Error", error);
          });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  getoverdueinvoiceamt() {
    try {
            var orderno = '';
            if (this.selecteddocumentno != undefined)
              orderno = (this.selecteddocumentno.id == undefined ? "" : this.selecteddocumentno.id);
            this.neworderservice.getoverdueinvoiceamt(this.selectedBusinessPartner.id, orderno).subscribe(data => {
                if (data != null) {
                    this.overdueinvoiceamtresponse = data;
                    this.Showoverdue = this.overdueinvoiceamtresponse[0].Showoverdue;
                    this.ispomandatory = this.overdueinvoiceamtresponse[0].ispomandatory;
                    this.ispoimg = this.overdueinvoiceamtresponse[0].ispoimg;
                    this.formprod.controls["Overdueamount"].setValue(Number(this.overdueinvoiceamtresponse[0].overdueamt).toLocaleString('en-IN'));
                    this.formprod.controls["OverdueInvoice"].setValue(this.overdueinvoiceamtresponse[0].overdueinvoice);
                    this.formprod.controls["duedatedays"].setValue(this.overdueinvoiceamtresponse[0].duedatedays);
                    this.autocalculation = this.overdueinvoiceamtresponse[0].autocalculation;
                    this.formprod.controls["avaliableRedeem"].setValue(this.overdueinvoiceamtresponse[0].vetcoins);
                    if (this.overdueinvoiceamtresponse[0].usevetcoin != 0 || this.overdueinvoiceamtresponse[0].usevetcoin != "")
                      this.formprod.controls["tobeRedeem"].setValue(this.overdueinvoiceamtresponse[0].usevetcoin);
                    this.tobeRedeem = this.overdueinvoiceamtresponse[0].usevetcoin;
                    this.orderlevelper = this.overdueinvoiceamtresponse[0].orderlevelper;
                    this.checkboxtab = this.overdueinvoiceamtresponse[0].checkboxtab;
                } else {
                    this.Showoverdue = false;
                    this.checkboxtab = false
                  }
            }, error => {
              this.commonfun.presentAlert("Message", "Error", error.error);
            });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  async oncustchange(event: {component: IonicSelectableComponent,value: any}) {

   // console.log("oncustchange");
    this.BPaddressbilling = null;
    this.BPaddressshipping = null;
    this.BPtemplate = null;
    this.cartproduct = null;
    this.calculation();
    this.formprod.controls["selectedBPaddressshipping"].setValue('');
    this.formprod.controls["selectedBPaddressbilling"].setValue('');
    this.formprod.controls["CreditLimit"].setValue(null);
    this.formprod.controls["selectedBPtemplate"].setValue(null);
    this.formprod.controls["OverdueInvoice"].setValue(null);
    this.formprod.controls["duedatedays"].setValue(null);
    this.formprod.controls["avaliableRedeem"].setValue(null);
    this.formprod.controls["tobeRedeem"].setValue("0");
    this.formprod.controls["ponumber"].setValue(null);
    this.selecteddocumentno = "";
    this.BPtemplate = null;
    this.formprod.controls["selectedBPtemplate"].setValue(null);
    console.log("This Customer",event.value);

    const result = await (await this.neworderservice.getOrderType(event.value.id,event.value.id)).toPromise();  
    const distictResult = result.filter((thing, index, self) =>
     index === self.findIndex((t) => (
       JSON.stringify(t) === JSON.stringify(thing)
     ))
    )
   // console.log("RESULT FROM ORDER TYPE",distictResult);
    this.orderTypeList=[];
    distictResult.forEach(element => {
      
      if(element.method_code == "FEFO"){
        this.orderTypeList.push({"code":"SL","name":"Saleable"});
      } else if(element.method_code == "LIQD"){
        this.orderTypeList.push({"code":"NE","name":"Near Expiry"});
      } else if(element.method_code == "COPSMPEMP"){
        this.orderTypeList.push({"code":"ST","name":"Sample Order - Sales Team"});
      } else if(element.method_code == "COPSMPCUST"){
        this.orderTypeList.push({"code":"SOC","name":"Sample Order-Customer"});
      }
    });
    
   // console.log("LIST",this.orderTypeList);




    if (event.value != undefined) {
      this.activity = event.value.mmstOrgAct$_identifier;
      this.activityid = event.value.mmstOrgAct;
      if (event.value.showcrlimit == "N") {
        this.showcrlimit = false;
      }
      else {
        this.showcrlimit = true;
        this.formprod.controls["CreditLimit"].setValue(event.value.creditLimit);
      }
      this.selectedBusinessPartner = event.value;
      if (!!this.selectedBusinessPartner.primary_customer && this.selectedBusinessPartner.primary_customer == "Y") {
        this.isPrimaryCustomer = true;
        //console.log("true")
      } else {
        this.isPrimaryCustomer = false;
       // console.log("false")
        this.formprod.controls["selectedPrimaryBusinessPartner"].reset();
      }
      this.bindcustmerbillingaddress();
      this.getoverdueinvoiceamt();
      this.getTemplate();
      this.bindPrimaryCustomerFromApi(this.selectedBusinessPartner.id,"");
    }
    else {
      this.activity = '';
    }
    let reponse = await (await this.neworderservice.getExpDateDelivery(event.value.id)).toPromise();
     if (!!reponse.expirydate && Object.keys(reponse.expirydate).length != 0) {
      this.formprod.controls["expecteddeliverydate"].setValue(reponse.expirydate);
    }
    event.component._searchText = "";
  }
  public async onPrimaryCustomerChange(event: {component: IonicSelectableComponent,value: any}){
    try {

    } catch (error) {
      
    }
  }
  public async setDataFromPreviousPage(value){
    try {
     // console.log("setDataFromPreviousPage");
      this.BPaddressbilling = null;
      this.BPaddressshipping = null;
      this.BPtemplate = null;
    //  this.cartproduct = null;
      this.calculation();
      this.formprod.controls["selectedBPaddressshipping"].setValue('');
      this.formprod.controls["selectedBPaddressbilling"].setValue('');
      this.formprod.controls["CreditLimit"].setValue(null);
      this.formprod.controls["selectedBPtemplate"].setValue(null);
      this.formprod.controls["OverdueInvoice"].setValue(null);
      this.formprod.controls["duedatedays"].setValue(null);
      this.formprod.controls["avaliableRedeem"].setValue(null);
      this.formprod.controls["tobeRedeem"].setValue("0");
     // this.formprod.controls["ponumber"].setValue(null);
    //  this.selecteddocumentno = "";
      this.BPtemplate = null;
      this.formprod.controls["selectedBPtemplate"].setValue(null);

      if (value != undefined) {
        this.activity =value.mmstOrgAct$_identifier;
        this.activityid = value.mmstOrgAct;
        if (value.showcrlimit == "N") {
          this.showcrlimit = false;1
        }
        else {
          this.showcrlimit = true;
          this.formprod.controls["CreditLimit"].setValue(value.creditLimit);
        }
        this.selectedBusinessPartner = value;
        if (!!this.selectedBusinessPartner.primary_customer && this.selectedBusinessPartner.primary_customer == "Y") {
          this.isPrimaryCustomer = true;
        } else {
          this.isPrimaryCustomer = false;
        }
        this.bindcustmerbillingaddress();
        this.getoverdueinvoiceamt();
        this.getTemplate();
      }
      else {
        this.activity = '';
      }
      let reponse = await (await this.neworderservice.getExpDateDelivery(value.id)).toPromise();
       if (!!reponse.expirydate && Object.keys(reponse.expirydate).length != 0) {
        this.formprod.controls["expecteddeliverydate"].setValue(reponse.expirydate);
      }
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  onOrderTypeChange() {
    try {
     // console.log("onOrderTypeChange");
    //  this.leastBusinessPartnerlist = null;
    //  this.BusinessPartnerlist = null;
      if (this.formprod.controls["selectedordertype"].value == "ST" || this.formprod.controls["selectedordertype"].value == "SOC") {
        this.Isshowtemplate = true;
      }
      else {
        this.Isshowtemplate = false;
      }
      if (this.istriggeronOrderTypeChange == true) {

        // this.getTemplate();
     //   this.BPaddressbilling = null;
     //   this.BPaddressshipping = null;


     //   this.BPtemplate = null;
     //   this.cartproduct = null;
        this.calculation();
        //this.formprod.controls["selectedBPaddressshipping"].setValue('');
      //  this.formprod.controls["selectedBPaddressbilling"].setValue('');
       // this.formprod.controls["CreditLimit"].setValue(null);
      //  this.formprod.controls["selectedBPtemplate"].setValue(null);
     //   this.formprod.controls["OverdueInvoice"].setValue(null);
      //  this.formprod.controls["duedatedays"].setValue(null);
      //  this.formprod.controls["avaliableRedeem"].setValue(null);
      //  this.formprod.controls["tobeRedeem"].setValue("0");
      //  this.activity = '';

      //  this.formprod.controls["ponumber"].setValue(null);
        //    this.formprod.controls["selectedordertype"].setValue(null);
      //  this.selecteddocumentno = "";

      //  this.BPtemplate = null;
      //  this.formprod.controls["selectedBPtemplate"].setValue(null);




     ///   this.formprod.controls["selectedBusinessPartner"].setValue(null);
      //  this.checkcust();
      }
      else {
        this.istriggeronOrderTypeChange = true;

      }
    } catch (error) {
      //  console.log("Ordertypechange:Erroe", error);

    }
  }
  custsearchChange(event: { component: IonicSelectableComponent, text: any }) {
   console.log("custsearchChange")
    this.reftextcount++;
    var custsearchtext = event.text;//.replace(/\s/g,'');
    if (true) {
      if (custsearchtext.length >= 3) {
        this.bindcustomerapi(custsearchtext);
        this.reftextcount = 0;
      } else {
      if(!!this.dontClear && this.dontClear == true) {
        this.checkcust();
      } else {
        this.BusinessPartnerlist = [];
        this.checkcust();
      }
      
      
      // if (this.leastBusinessPartnerlist) {
      //   if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
      //     this.BusinessPartnerlist = [];
      //   } else {
      //     this.BusinessPartnerlist = this.leastBusinessPartnerlist;
      //   }
      // }
      }
    }
    else {
     // this.commonfun.presentAlert("Message", "Alert", "Please Select Order Type First.")
    }
  }
  public onPrimaryCustSearch(event: { component: IonicSelectableComponent, text: any }){
    try {
          if (event.text.length >= 3) {
            this.bindPrimaryCustomerFromApi(this.selectedBusinessPartner.id,event.text);
          } else {
                   if(!!this.dontPrimaryClear && this.dontPrimaryClear == true) {

                   } else {
                       this.primaryBusinessPartnerList = [];
                 }
          }
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  toggle(selectedcartproduct) {
    if (selectedcartproduct.show == false) {
      for (var i = 0; i < this.cartproduct.length; i++) {
        if (this.cartproduct[i].show === "true") {
          this.cartproduct[i].show = "false";
        }
      }
    }
    selectedcartproduct.show = !selectedcartproduct.show;
  }
  removeProduct(post) {
    try {


      const result = this.cartproduct.filter(item => item.MainProductid != post.MainProductid);
      let body={
        "productlist":result
      }
      this.neworderservice.checkCOPBlockOrder(body).subscribe(() => {
        this.cartproduct = result;
        this.calculation();
        this.onAddProduct();
        // if (index > -1) {
        //   this.cartproduct.splice(index, 1);
        // }
      },(error)=>{
        this.commonfun.presentAlert("Message", "Error", error)
        return;
      })
     
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  editProduct(post) {
    try {
      if (this.addproductvalidation()) {
       
        this.onShowProductListModel(post);
      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  public async onShowProductListModel(product) {
    try {
      const modal = await this.modalController.create({
        //component: EditNewOrderProductPage,
        component: ProductListPage,
        cssClass: 'my-custom-class',
        backdropDismiss: false,
        componentProps: {
          editMode: true, productToBeEdit: product, activity_id: this.activityid, cust_id: this.selectedBusinessPartner.id, bpBillingAddress: this.formprod.controls["selectedBPaddressbilling"].value,
          bpShippingAddress: this.formprod.controls["selectedBPaddressshipping"].value, orderType: this.formprod.controls["selectedordertype"].value,
          tempProductSelectedOn: this.cartproduct, selectedFilter: "",
          special_order_add_edit_param:this.sp_order_chk_box ? "Y" : "N",
          is_advance_payment_param:this.advance_payment_chk_status,
          issplorderonfreeqty:this.issplorderonfreeqty
        }
      });
      modal.onDidDismiss().then(data => {
        //  console.log("Product List Model Data",data);
        if (!!data.data) {
          this.cartproduct = data.data;
          this.calculation();
          this.onAddProduct();
        }
      })
      return await modal.present();
    } catch (error) {
      console.log(error);
    }
  }
  addproductvalidation() {
    var isvalidall = true;
    var msgs = [];

    if (this.selectedBusinessPartner != undefined && this.selectedBusinessPartner != null) {
    }
    else {
      isvalidall = false
      this.formprod.controls["selectedBusinessPartner"].markAsTouched();

      msgs[msgs.length] = "Customer"
    }

    if (this.formprod.controls["selectedBPaddressshipping"].value != undefined
      && this.formprod.controls["selectedBPaddressshipping"].value != null
      && this.formprod.controls["selectedBPaddressshipping"].value != "") {
    }
    else {
      isvalidall = false;
      msgs[msgs.length] = "Shipping Address";
      this.formprod.controls["selectedBPaddressshipping"].markAsTouched();

    }
    if (this.formprod.controls["selectedBPaddressbilling"].value != undefined
      && this.formprod.controls["selectedBPaddressbilling"].value != null
      && this.formprod.controls["selectedBPaddressbilling"].value != "") {
    }
    else {
      isvalidall = false;
      msgs[msgs.length] = "Billing Address";
      this.formprod.controls["selectedBPaddressbilling"].markAsTouched();

    }
    if (this.formprod.controls["selectedordertype"].value != undefined
      && this.formprod.controls["selectedordertype"].value != null
      && this.formprod.controls["selectedordertype"].value != "") {
    }
    else {
      //  if(isvalidall==false)msgs+=","
      isvalidall = false
      msgs[msgs.length] = "Order Type";
      this.formprod.controls["selectedordertype"].markAsTouched();

    }

    if (isvalidall == false) {
      var errmsg = "Please select "
      for (var i = 0; i < msgs.length; i++) {
        if (msgs.length == 1)//only one
          errmsg += msgs[i] + ".";
        else if (i == (msgs.length - 1))//last
          errmsg += " and " + msgs[i] + ".";
        else if (i == 0)//first
          errmsg += msgs[i];
        else//middle
          errmsg += ", " + msgs[i];

      }

      this.commonfun.presentAlert("Message", "Alert", errmsg);

    }


    return isvalidall;
  }
  onAddProduct() {
    try {
      if (this.addproductvalidation()) {
       // console.log("SELECTED selectedBPaddressshipping",this.formprod.controls["selectedBPaddressshipping"].value);
      //  console.log("SELECTED selectedBPaddressshipping",this.formprod.controls["selectedBPaddressbilling"].value);
      console.log('this.formprod.controls["specialOrderCtrl"].value',this.sp_order_chk_box )
      console.log('this.formprod.controls["specialOrderCtrl"].value',this.sp_order_chk_box ? "Y" : "N")
        let navigationExtras: NavigationExtras = {
          state: {
            cartproduct: this.cartproduct,
            cust_id: this.selectedBusinessPartner.id,
            businessPartnerCategory: this.selectedBusinessPartner.businessPartnerCategory,
            tempSelectedBusinessPartner: this.selectedBusinessPartner,
            activityid: this.selectedBusinessPartner.mmstOrgAct,
            //  Isdruglicence:this.Isdruglicence,
            order_type: this.formprod.controls["selectedordertype"].value,
            addressshipping: this.formprod.controls["selectedBPaddressshipping"].value,
            addressbilling: this.formprod.controls["selectedBPaddressbilling"].value,
            special_order:this.sp_order_chk_box ? "Y" : "N",
            tempPrimaryCustomer:this.formprod.controls["selectedPrimaryBusinessPartner"].value,
            is_advance_payment_param:this.advance_payment_chk_status,
            issplorderonfreeqty:this.issplorderonfreeqty
          }
        };
        //console.log('addedit inside');
        
        this.router.navigate(['addeditproduct'], navigationExtras);
        // this.formprod.controls["selectedBusinessPartner"].
      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);


    }

  }
  Resetpage() {
    this.formprod.reset();
    this.showhideRedeemReward = true;
    //this.hideallRedeemReward=false;

    this.activity = '';
    this.selectedBusinessPartner = null;
    this.selecteddocumentno = null;
    this.cartproduct = null;
    this.mergedcart = null;
    this.BPaddressshipping = null;
    this.BPaddressbilling = null;
    this.POimg64 = '';
    this.fileName = "";
    this.fileType = "";
    this.calculation();
    this.BPtemplate = null;
    this.autocalculation = false;
    this.Showoverdue = true;
    this.showcrlimit = false;
    this.sp_order_chk_box = false;
    this.advance_payment_chk_status = false;
    this.isPrimaryCustomer = true;
    this.primaryBusinessPartnerList = [];
    this.leastPrimaryBusinessPartnerList = [];
    // this.formprod.controls["selectedordertype"].setValue("SL");
    // this.checkcust();
    this.Isshowtemplate = false;
//    this.router.navigateByUrl('/neworder');
  }
  onClose(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    event.component.searchText = "";
  }
  public onPrimaryCustomerClose(event: {component: IonicSelectableComponent,text: any}){
    try {
            
            //  console.log(this.TAG,"onPrimaryCustomerClose",this.portComponent);
              this.portComponent._searchText="";
             // this.primaryBusinessPartnerList = [];
           //  event.component._searchText == "";
    } catch (error) {
      
    }
  }
  mergproduct() {
    try {
      this.mergedcart = this.cartproduct.filter(e => e.MainProductid === e.product_id && e.MainProduct != '');

      for (var k = 0; k < this.cartproduct.length; k++) {
        if (this.cartproduct[k].MainProduct == '') {
          var Isexistproduct = false;
          for (var l = 0; l < this.mergedcart.length; l++) {
            if (this.mergedcart[l].product_id == this.cartproduct[k].product_id) {
              Isexistproduct = true;
              var mfreeqty = this.mergedcart[l].freeqty == '' ? 0 : this.mergedcart[l].freeqty;
              var cfreeqty = this.cartproduct[k].freeqty == '' ? 0 : this.cartproduct[k].freeqty;
              this.mergedcart[l].freeqty = (Number(mfreeqty)) + (Number(cfreeqty));
              this.mergedcart[l].Scheme = "| "+ this.cartproduct[k].Scheme;
              this.mergedcart[l].Schemeid = "| "+ this.cartproduct[k].Schemeid;
              
            }
          }
          if (Isexistproduct == false) {

            this.mergedcart.push(this.cartproduct[k]);
          }
        }
      }
      //mergedcart
    } catch (error) {

      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  getTemplate() {
    try {

      if (this.selectedBusinessPartner) {



        this.neworderservice.getOrdertemplate(this.selectedBusinessPartner.id).subscribe(data => {
          const response = data['response'];


          // var jsondata = response.data;
          this.BPtemplate = response.data;

        }, error => {
          this.commonfun.presentAlert("Message", "Error", error);
          this.commonfun.loadingDismiss();
        //  console.log("getTemplate:loadingDismiss");

        });
      }
      else {
        if ((this.formprod.controls["selectedordertype"].value != undefined && this.formprod.controls["selectedordertype"].value != null && this.formprod.controls["selectedordertype"].value != "")) {
          this.BPtemplate = null;
          console.log("SET VALUE 1245");
          this.formprod.controls["selectedordertype"].setValue("");
          this.commonfun.presentAlert("Message", "Alert", "Please select customer first.");
        }
        this.commonfun.loadingDismiss();

      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);

    }
  }
  async onSaveTemplate(fvalue) {
    try {
      await this.commonfun.loadingPresent();

      this.mainproducts = this.cartproduct.filter(e => e.MainProductid === e.product_id && e.MainProduct != '');

      var jsondatatemp = {
        "cust_id": fvalue.selectedBusinessPartner.id,
        "activity_id": fvalue.selectedBusinessPartner.mmstOrgAct,
        "CreditLimit": fvalue.selectedBusinessPartner.creditLimit,
        "OverdueInvoice": (fvalue.OverdueInvoice == null ? "" : fvalue.OverdueInvoice),
        "Overdueamount": fvalue.Overdueamount == undefined ? "" : fvalue.Overdueamount,
        "template": fvalue.selectedtemplate,
        "ponumber": fvalue.ponumber,
        "ShippingAddress": fvalue.selectedBPaddressshipping,
        "BillingAddress": fvalue.selectedBPaddressbilling,
        "OrderType": fvalue.selectedordertype,
        "POimage": (this.POimg64 == undefined ? "" : this.POimg64),
        "usevetcoin": (fvalue.tobeRedeem == null ? "" : fvalue.tobeRedeem),
        "vetcoins": (fvalue.avaliableRedeem == null ? "" : fvalue.avaliableRedeem),
        "autocalculation": this.autocalculation,
        "orderlevelper": this.orderlevelper,
        "products": (this.mainproducts == undefined ? "" : this.mainproducts),
        "orderdiscription": fvalue.orderdescription,
        "expirydate": fvalue.expecteddeliverydate
      }

      this.neworderservice.SaveTemplate(jsondatatemp).subscribe(data => {
        this.commonfun.loadingDismiss();
        if (data != null) {
          this.orderpunchresponse = data;
          if (this.orderpunchresponse.resposemsg == "success") {

            this.commonfun.presentAlert("Message", "Success", "Template saved successfully.");
            //  this.Resetpage();
          }
          else {
            //  this.Resetpage();
            this.commonfun.presentAlert("message", "Fail", this.orderpunchresponse.logmsg);
          }
        }
      }, error => {
        this.commonfun.loadingDismiss();
        this.commonfun.presentAlert("Message", "Error!", error.error.text);
      });
    } catch (error) {
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message", "Error", error);

    }
  }
  public async saveTemplate(fvalue){
    try {

      this.mainproducts = this.cartproduct.filter(e => e.MainProductid === e.product_id && e.MainProduct != '');
      var jsondatatemp = {
        "cust_id": fvalue.selectedBusinessPartner.id,
        "activity_id": fvalue.selectedBusinessPartner.mmstOrgAct,
        "CreditLimit": fvalue.selectedBusinessPartner.creditLimit,
        "OverdueInvoice": (fvalue.OverdueInvoice == null ? "" : fvalue.OverdueInvoice),
        "Overdueamount": fvalue.Overdueamount == undefined ? "" : fvalue.Overdueamount,
        "template": fvalue.selectedtemplate,
        "ponumber": fvalue.ponumber,
        "ShippingAddress": fvalue.selectedBPaddressshipping,
        "BillingAddress": fvalue.selectedBPaddressbilling,
        "OrderType": fvalue.selectedordertype,
        "POimage": (this.POimg64 == undefined ? "" : this.POimg64),
        "usevetcoin": (fvalue.tobeRedeem == null ? "" : fvalue.tobeRedeem),
        "vetcoins": (fvalue.avaliableRedeem == null ? "" : fvalue.avaliableRedeem),
        "autocalculation": this.autocalculation,
        "orderlevelper": this.orderlevelper,
        "products": (this.mainproducts == undefined ? "" : this.mainproducts),
        "orderdiscription":fvalue.orderdescription,
        "expirydate":fvalue.expecteddeliverydate,

      }
          const modal = await this.modalController.create({
            component: CustomAlertPage,
            cssClass: 'custom-alert',
            backdropDismiss:false,
            componentProps: { templateData:jsondatatemp }
          });
          modal.onDidDismiss().then(data=>{
          //  console.log("CustomAlertPage",data);
            if(!!data.data){
         //   console.log("REturn DATA",data.data);
            this.orderpunchresponse = data.data;
              if (this.orderpunchresponse.resposemsg == "success") {
                        this.commonfun.presentAlert("Message", "Success", "Template saved successfully.");
                 }
            }
          })
          return await modal.present();
    } catch (error) {
      console.log(error);
    }
  }
  gettemplateproductdetail(ordertemp_id: string, order_type: string) {
    try {
      this.commonfun.loadingPresent();

      this.addeditproductservice.getproductdetail(this.activityid, this.selectedBusinessPartner.id, "", "", ordertemp_id,
        order_type,
        this.formprod.controls["selectedBPaddressshipping"].value,
        this.formprod.controls["selectedBPaddressbilling"].value,
        this.sp_order_chk_box ? "Y" : "N",this.advance_payment_chk_status,0
      ).subscribe(data => {
        this.commonfun.loadingDismiss();
        if (data != null) {
          this.templateproductdetailresponse = data;

          this.selectedbunch = null;
          this.selectedbunch = this.templateproductdetailresponse.reverse();
          if (this.cartproduct == undefined || this.cartproduct == null) {
            this.cartproduct = this.selectedbunch;
          }
          else if (this.cartproduct.length >= 0) {
            for (var c = 0; c < this.selectedbunch.length; c++) {
              var sameprod = this.cartproduct.find(e => e.MainProductid === this.selectedbunch[c].MainProductid);
              if (sameprod != null || sameprod != undefined) {
                this.removeProduct(sameprod)
              }
            }
            for (var b = 0; b < this.selectedbunch.length; b++) {

              this.cartproduct.push(this.selectedbunch[b]);
            }

          }
          else {

          }

         this.calculation();
        }
        else {

          this.commonfun.loadingDismiss();
          this.commonfun.presentAlert("Message", "Error!", "No product found.");

        }

      }, error => {
        this.commonfun.loadingDismiss();
        //  this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
        this.commonfun.presentAlert("Message", "Error!", error.error.text);
      });
    }

    catch (error) {
    //  console.log("gettemplateproductdetail:Erroe", error);

      this.commonfun.loadingDismiss();

    }
  }
  SaveOrder(jsondata, stype) {
    try {

      if (this.ispomandatory == "Y" && (this.formprod.controls['ponumber'].value == "" || this.formprod.controls['ponumber'].value == null || this.formprod.controls['ponumber'].value == undefined)) {
        this.commonfun.presentAlert("Message", "Alert!", "Please enter PO no.");
        return false;
      }
      if (this.ispoimg == "Y" && (this.POimg64 == "" || this.POimg64 == null || this.POimg64 == undefined)) {
        this.commonfun.presentAlert("Message", "Alert!", "Please select PO image.");
        return false;
      }
      this.commonfun.loadingPresent();
      if(this.fileType !='pdf'){
        this.neworderservice.OrderPunch(jsondata).subscribe(data => {
          this.commonfun.loadingDismiss();
          if (data != null) {
            this.orderpunchresponse = data;

            if (this.orderpunchresponse.resposemsg == "success") {

              if (stype == "N")

                this.commonfun.presentAlert("Message", "Success!", "Order successfully saved." + (this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));
              else
                this.commonfun.presentAlert("", "", "Order Punched Successfully." + "<br/><br/>" +this.loginauth.selectedactivity.disclaimer_text + (this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));

              // this.commonfun.presentAlert("Message","Success",);
              this.Resetpage();
            }
            else {

              // this.Resetpage();
              this.commonfun.presentAlert("message", "Fail", this.orderpunchresponse.logmsg);
            }
          }
        }, error => {
          this.commonfun.loadingDismiss();
          this.commonfun.presentAlert("message", "Fail", error);

        });
      } else {
                if(this.msg.isplatformweb == true){
                  this.neworderservice.orderPunchWithPdf(jsondata).subscribe(data => {
                    this.commonfun.loadingDismiss();
                    if (data != null) {
                      this.orderpunchresponse = data;

                      if (this.orderpunchresponse.resposemsg == "success") {

                        if (stype == "N")
                          this.commonfun.presentAlert("Message", "Success!", "Order successfully saved." + (this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));
                        else
                          this.commonfun.presentAlert("", "", "Order Punched Successfully." + "<br/><br/>" +this.loginauth.selectedactivity.disclaimer_text +(this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));

                        // this.commonfun.presentAlert("Message","Success",);
                        this.Resetpage();
                      }
                      else {

                        // this.Resetpage();
                        this.commonfun.presentAlert("message", "Fail", this.orderpunchresponse.logmsg);
                      }
                    }
                  }, error => {
                    this.commonfun.loadingDismiss();
                    this.commonfun.presentAlert("message", "Fail", error);

                  });
                } else if(this.platform.is('android')){
                  this.neworderservice.uploadPDFFileServiceAndroidiOS(jsondata,this.selectedURI).subscribe(data => {
                    this.commonfun.loadingDismiss();
                    if (data != null) {
                      this.orderpunchresponse = data;

                      if (this.orderpunchresponse.resposemsg == "success") {

                        if (stype == "N")
                          this.commonfun.presentAlert("Message", "Success!", "Order successfully saved." + (this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));
                        else
                          this.commonfun.presentAlert("", "", "Order Punched Successfully." + "<br/><br/>" +this.loginauth.selectedactivity.disclaimer_text +(this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));

                        // this.commonfun.presentAlert("Message","Success",);
                        this.Resetpage();
                      }
                      else {

                        // this.Resetpage();
                        this.commonfun.presentAlert("message", "Fail", this.orderpunchresponse.logmsg);
                      }
                    }
                  }, error => {
                    this.commonfun.loadingDismiss();
                    this.commonfun.presentAlert("message", "Fail", error);

                  });
                } else if(this.platform.is('ios')){


                  let login = this.loginauth.user;
                  let password = this.loginauth.pass;

                  const auth = btoa(login + ":" + password);

                  let save_file_url = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.WMobileOrderPunchOB?'

                  const fileTransfer: FileTransferObject = this.transfer.create();

                  let options: FileUploadOptions = {
                   fileKey: 'POimage',
                   fileName: this.fileName,
                   params:jsondata,
                   headers: { 'Authorization': 'Basic ' + auth}

                  }

                fileTransfer.upload(this.selectedURI,save_file_url , options)
                 .then((data) => {
                  // console.log("pravin YESSSSS",data);
                   let formatResponse = JSON.parse(data.response);
                  // console.log("File Uplaod Result",formatResponse);
                   this.commonfun.loadingDismiss();
                    if (data != null) {
                      this.orderpunchresponse = formatResponse;

                      if (this.orderpunchresponse.resposemsg == "success") {

                        if (stype == "N")
                          this.commonfun.presentAlert("Message", "Success!", "Order successfully saved." + (this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));
                        else
                          this.commonfun.presentAlert("", "", "Order Punched Successfully." + "<br/><br/>" +this.loginauth.selectedactivity.disclaimer_text + (this.orderpunchresponse.schemeinfo == undefined ? "" : this.orderpunchresponse.schemeinfo));

                        // this.commonfun.presentAlert("Message","Success",);
                        this.Resetpage();
                      }
                      else {

                        // this.Resetpage();
                        this.commonfun.presentAlert("message", "Fail", this.orderpunchresponse.logmsg);
                      }
                    }

                 }, (err) => {
                  this.commonfun.presentAlert("message", "Fail", err);
                  this.commonfun.loadingDismiss();
                 })


                }

      }


    } catch (error) {
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("message", "Fail", error);
    }
  }
  onSaveOrder(fvalue) {
    try {
     
      this.mergproduct();


      var jsondata = {
        "mbso_copord_id": this.selecteddocumentno == undefined || this.selecteddocumentno == "" || this.selecteddocumentno == null ? "" : this.selecteddocumentno.id,
        "cust_id": fvalue.selectedBusinessPartner.id,
        "activity_id": fvalue.selectedBusinessPartner.mmstOrgAct,
        "CreditLimit": fvalue.selectedBusinessPartner.creditLimit,
        "OverdueInvoice": (fvalue.OverdueInvoice == null ? "" : fvalue.OverdueInvoice),
        "Overdueamount": fvalue.Overdueamount == undefined ? "" : fvalue.Overdueamount,
        "template": fvalue.selectedtemplate == undefined ? "" : fvalue.selectedtemplate,
        "ponumber": fvalue.ponumber,
        "ShippingAddress": fvalue.selectedBPaddressshipping,
        "BillingAddress": fvalue.selectedBPaddressbilling,
        "OrderType": fvalue.selectedordertype,
        "complete": "false",
        "POimage": (this.POimg64 == undefined ? "" : this.POimg64),
        "usevetcoin": (fvalue.tobeRedeem == null ? "" : fvalue.tobeRedeem),
        "vetcoins": (fvalue.avaliableRedeem == null ? "" : fvalue.avaliableRedeem),
        "autocalculation": this.autocalculation,
        "orderlevelper": this.orderlevelper,
        "products": (this.mergedcart == undefined ? "" : this.mergedcart),
        "orderdiscription": fvalue.orderdescription,
        "expirydate": fvalue.expecteddeliverydate,
        "file_type": "image",
        "special_order":this.sp_order_chk_box ? "Y" : "N",
        "iscancel":this.neworderservice.iscancelpopup
      }
      if(!this.isPrimaryCustomer){
        jsondata["primary_customer"] = fvalue.selectedPrimaryBusinessPartner.bpid;
      }
      jsondata["is_advance_payment"] = fvalue.isAdvancePaymentChk;
      
      this.tobeRedeem = Number(fvalue.tobeRedeem);
      this.avaliableRedeem = Number(fvalue.avaliableRedeem);

      if ((this.tobeRedeem <= this.avaliableRedeem)) {

        if(this.fileType != 'pdf'){
          this.SaveOrder(jsondata, "N");
        } else {
          let formData = new FormData();
          formData.append('POimage', this.POimg64, this.POimg64.name);
          formData.append('mbso_copord_id',this.selecteddocumentno == undefined || this.selecteddocumentno == "" || this.selecteddocumentno == null ? "" : this.selecteddocumentno.id);
          formData.append('cust_id', fvalue.selectedBusinessPartner.id);
          formData.append('activity_id', fvalue.selectedBusinessPartner.mmstOrgAct);
          formData.append('CreditLimit', fvalue.selectedBusinessPartner.creditLimit);
          formData.append('OverdueInvoice', (fvalue.OverdueInvoice == null ? "" : fvalue.OverdueInvoice));
          formData.append('Overdueamount', fvalue.Overdueamount == undefined ? "" : fvalue.Overdueamount);
          formData.append('template', fvalue.selectedtemplate == undefined ? "" : fvalue.selectedtemplate);
          formData.append('ponumber', fvalue.ponumber);
          formData.append('ShippingAddress', fvalue.selectedBPaddressshipping);
          formData.append('BillingAddress', fvalue.selectedBPaddressbilling);
          formData.append('OrderType', fvalue.selectedordertype);
          formData.append('complete', "false");
          formData.append('usevetcoin', (fvalue.tobeRedeem == null ? "" : fvalue.tobeRedeem));
          formData.append('vetcoins', (fvalue.avaliableRedeem == null ? "" : fvalue.avaliableRedeem));
          formData.append('autocalculation', this.autocalculation);
          formData.append('orderlevelper', this.orderlevelper);
          formData.append('products', JSON.stringify(this.mergedcart));
          formData.append('orderdiscription', fvalue.orderdescription);
          formData.append('expirydate', fvalue.expecteddeliverydate);
          formData.append('file_type', this.fileType);
          formData.append('special_order',fvalue.specialOrderCtrl ? "Y" : "N");
          formData.append("iscancel",this.neworderservice.iscancelpopup?"true":"false")
          if(!this.isPrimaryCustomer){
            formData.append('primary_customer', fvalue.selectedPrimaryBusinessPartner.bpid);
          }
          
            formData.append('is_advance_payment', fvalue.isAdvancePaymentChk);
          
          this.SaveOrder(formData, "N");
        }
      }
      else {
        this.commonfun.presentAlert("Message", "Alert", "Total Points to be Redeem must be less than Points avaliable for Redeem.");
      }
      this.commonfun.loadingDismiss();
    } catch (error) {
      this.commonfun.loadingDismiss();
      if(!this.isPrimaryCustomer){
         if(fvalue.selectedPrimaryBusinessPartner == null || fvalue.selectedPrimaryBusinessPartner == undefined){
          this.commonfun.presentAlert("Message", "Error", "Primary customer can not be blank");
         } else {
          this.commonfun.presentAlert("Message", "Error", error);
         }
      } else {
        this.commonfun.presentAlert("Message", "Error", error);
      }
      
    }
  }
  async onCompleteOrder(fvalue) {
    try {
      //console.log("onCompleteOrder");
      this.mergproduct();
      if(this.fileType != 'pdf'){
       // console.log("!= 'pdf'");
        var jsondatacomplete = {
          "mbso_copord_id": this.selecteddocumentno == undefined || this.selecteddocumentno == "" || this.selecteddocumentno == null ? "" : this.selecteddocumentno.id,
          "cust_id": fvalue.selectedBusinessPartner.id,
          "activity_id": fvalue.selectedBusinessPartner.mmstOrgAct,
          "CreditLimit": fvalue.selectedBusinessPartner.creditLimit,
          "OverdueInvoice": (fvalue.OverdueInvoice == null ? "" : fvalue.OverdueInvoice),
          "Overdueamount": fvalue.Overdueamount == undefined ? "" : fvalue.Overdueamount,
          "template": fvalue.selectedtemplate == undefined ? "" : fvalue.selectedtemplate,
          "ponumber": fvalue.ponumber,
          "ShippingAddress": fvalue.selectedBPaddressshipping,
          "BillingAddress": fvalue.selectedBPaddressbilling,
          "OrderType": fvalue.selectedordertype,
          "complete": "true",
          "POimage": (this.POimg64 == undefined ? "" : this.POimg64),
          "usevetcoin": (fvalue.tobeRedeem == null ? "" : fvalue.tobeRedeem),
          "vetcoins": (fvalue.avaliableRedeem == null ? "" : fvalue.avaliableRedeem),
          "autocalculation": this.autocalculation,
          "orderlevelper": this.orderlevelper,
          "products": (this.mergedcart == undefined ? "" : this.mergedcart),
          "orderdiscription": fvalue.orderdescription,
          "expirydate": fvalue.expecteddeliverydate,
          "file_type": "image",
          "special_order":this.sp_order_chk_box ? "Y" : "N",
          "iscancel":this.neworderservice.iscancelpopup
          
        }
        if(!this.isPrimaryCustomer){
          jsondatacomplete["primary_customer"] = fvalue.selectedPrimaryBusinessPartner.bpid;
        }
        
          jsondatacomplete["is_advance_payment"] = fvalue.isAdvancePaymentChk;
        
        this.SaveOrder(jsondatacomplete, "Y");
      } else {
       // console.log("!= 'pdf else'");
        if (this.msg.isplatformweb == true) {
        //  console.log("Array Converete", this.mergedcart[0].value.toString());
          let formData = new FormData();
          formData.append('test', "12345678");
          formData.append('POimage', this.POimg64, this.POimg64.name);
          formData.append('mbso_copord_id',this.selecteddocumentno == undefined || this.selecteddocumentno == "" || this.selecteddocumentno == null ? "" : this.selecteddocumentno.id);
          formData.append('cust_id', fvalue.selectedBusinessPartner.id);
          formData.append('activity_id', fvalue.selectedBusinessPartner.mmstOrgAct);
          formData.append('CreditLimit', fvalue.selectedBusinessPartner.creditLimit);
          formData.append('OverdueInvoice', (fvalue.OverdueInvoice == null ? "" : fvalue.OverdueInvoice));
          formData.append('Overdueamount', fvalue.Overdueamount == undefined ? "" : fvalue.Overdueamount);
          formData.append('template', fvalue.selectedtemplate == undefined ? "" : fvalue.selectedtemplate);
          formData.append('ponumber', fvalue.ponumber);
          formData.append('ShippingAddress', fvalue.selectedBPaddressshipping);
          formData.append('BillingAddress', fvalue.selectedBPaddressbilling);
          formData.append('OrderType', fvalue.selectedordertype);
          formData.append('complete', "true");
          formData.append('usevetcoin', (fvalue.tobeRedeem == null ? "" : fvalue.tobeRedeem));
          formData.append('vetcoins', (fvalue.avaliableRedeem == null ? "" : fvalue.avaliableRedeem));
          formData.append('autocalculation', this.autocalculation);
          formData.append('orderlevelper', this.orderlevelper);
          formData.append('products', JSON.stringify(this.mergedcart));
          formData.append('orderdiscription', fvalue.orderdescription);
          formData.append('expirydate', fvalue.expecteddeliverydate);
          formData.append('file_type', this.fileType);
          formData.append('special_order', this.sp_order_chk_box ? "Y" : "N");
          formData.append("iscancel",this.neworderservice.iscancelpopup?"true":"false");


          if(!this.isPrimaryCustomer){
            formData.append('primary_customer', fvalue.selectedPrimaryBusinessPartner.bpid);
          }
          
            formData.append('is_advance_payment', fvalue.isAdvancePaymentChk);
          

          this.SaveOrder(formData, "Y");
        } else {
         
          let tempVetcoins = fvalue.avaliableRedeem;
          if (typeof tempVetcoins === 'string' || tempVetcoins instanceof String) {

          } else {
            tempVetcoins = JSON.stringify(tempVetcoins);
          }

          let tempUseVetCoin = fvalue.tobeRedeem;
          if (typeof tempUseVetCoin === 'string' || tempUseVetCoin instanceof String) {
          } else {
            tempUseVetCoin = JSON.stringify(tempUseVetCoin);
          }

          let validateData = {
            "mbso_copord_id": this.selecteddocumentno == undefined || this.selecteddocumentno == "" || this.selecteddocumentno == null ? "" : this.selecteddocumentno.id,
            "cust_id": fvalue.selectedBusinessPartner.id,
            "activity_id": fvalue.selectedBusinessPartner.mmstOrgAct,
            "CreditLimit": fvalue.selectedBusinessPartner.creditLimit,
            "OverdueInvoice": (fvalue.OverdueInvoice == null ? "" : fvalue.OverdueInvoice),
            "Overdueamount": fvalue.Overdueamount == undefined ? "" : fvalue.Overdueamount,
            "template": fvalue.selectedtemplate == undefined ? "" : fvalue.selectedtemplate,
            "ponumber": fvalue.ponumber == null ? "" : fvalue.ponumber,
            "ShippingAddress": fvalue.selectedBPaddressshipping,
            "BillingAddress": fvalue.selectedBPaddressbilling,
            "OrderType": fvalue.selectedordertype == null ? "" : fvalue.selectedordertype,
            "complete": "true",
            "usevetcoin": (fvalue.tobeRedeem == null ? "" : tempUseVetCoin),
            "vetcoins": (fvalue.avaliableRedeem == null ? "" : tempVetcoins),
            "autocalculation": this.autocalculation == null ? "" : JSON.stringify(this.autocalculation),
            "orderlevelper": this.orderlevelper == undefined ? "" : JSON.stringify(this.orderlevelper),
            "products": JSON.stringify(this.mergedcart),
            "orderdiscription": fvalue.orderdescription == null ? "" : fvalue.orderdescription,
            "expirydate": fvalue.expecteddeliverydate == null ? "" : fvalue.expecteddeliverydate,
            "file_type": "pdf",
            "special_order":this.sp_order_chk_box ? "Y" : "N",
            "iscancel":this.neworderservice.iscancelpopup
          }
          if(!this.isPrimaryCustomer){
            validateData["primary_customer"] = fvalue.selectedPrimaryBusinessPartner.bpid;
          }
          
            validateData["is_advance_payment"] = fvalue.isAdvancePaymentChk;
          

        //  console.log("PAram", validateData);
          this.SaveOrder(validateData, "Y");
        }

          // let formatResponse = await this.neworderservice.orderPunchWithPdf(formData).toPromise();
          //   if(!!formatResponse){
          //       console.log(formatResponse);
          //   }
      }

    } catch (error) {
      // this.commonfun.loadingDismiss();
      if(!this.isPrimaryCustomer){
        if(fvalue.selectedPrimaryBusinessPartner == null || fvalue.selectedPrimaryBusinessPartner == undefined){
         this.commonfun.presentAlert("Message", "Error", "Primary customer can not be blank");
        } else {
         this.commonfun.presentAlert("Message", "Error", error);
        }
     } else {
       this.commonfun.presentAlert("Message", "Error", error);
     }
    }
  }
  async getpoImage() {
    try {
      const alert = await this.alertCtrl.create({
        header: 'Select Option',
        message: "Select Option to get Picture.",
        buttons: [
          {
            text: 'Gallery',
            handler: () => {
              this.getimage();
            }
          },
          {
            text: 'Camera',
            handler: () => {
              this.takePicture();
            }
          },{
            text: 'PDF File',
            handler: () => {
              this.uploadPDFDevice();
            }
          }

        ]
      });

      await alert.present();
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  public uploadPDFDevice(){
    try {
            if(this.platform.is('android')){
              let filter={ "mime": "application/pdf" }
              this.fileChooser.open(filter)
              .then(uri => {
                this.selectedURI = uri;
              //  console.log(this.TAG,"Selected File",uri);
                this.filePath.resolveNativePath(uri).then(filePathResult =>{
                 //   console.log(this.TAG,"Selected fileInfo",filePathResult);
                    this.file.resolveLocalFilesystemUrl(filePathResult).then(fileEntry=>{

                     // console.log(this.TAG,"Selected fileInfo fileEntry",fileEntry);

                      this.getFileSize(fileEntry).then((metadata:any) =>{
                          if(metadata.size / 1024 / 1024>3){
                          //  console.log(this.TAG,"File Size Too Large");
                            this.commonfun.presentAlert("New Order","Validation","File size must be less than Equal to 3 MB");
                            this.POimg64 = null;
                            this.fileName = "";
                            this.fileType = "";
                            this.selectedURI = "";
                          } else {
                          //  console.log(this.TAG,"File Size IS OK");
                            this.fileName   = filePathResult.substring(filePathResult.lastIndexOf("/") + 1);
                              this.fileType   = filePathResult.substring(filePathResult.lastIndexOf(".") + 1);
                          }
                      });
                   }).catch(error=>{
                      this.commonfun.presentAlert("New Order","Error",error);
                    });
                   });
               }).catch(e => console.log(e));
            } else if(this.platform.is('ios')){
              this.filePicker.pickFile()
              .then(uri => {
                this.selectedURI = uri;
                this.fileName   = uri.substring(uri.lastIndexOf("/") + 1);
                this.fileType   = uri.substring(uri.lastIndexOf(".") + 1);
              })

              .catch(err => console.log('File Picker Error', err));

            }
    } catch (error) {

    }
  }
  public getFileSize(FileEntry):Promise<Object>{
    let self = this;
    let promise = new Promise(function(resolve, reject){
      FileEntry.getMetadata((metadata) => {
        resolve(metadata);
      })
    });
    return promise;
  }
  async ImageViewr(img: any) {
    const alert = await this.alertCtrl.create({
      message: '<div>' +
        '<img class="viewImagecss" src="data:image/jpeg;base64,' + img + '">' +
        '</div>',
      buttons: [
        {
          text: 'Remove',
          handler: () => {
            this.POimg64 = null;
            this.fileName = "";
          }
        },
        { text: 'OK' }
      ],
    });
    await alert.present();
  }
  editOrder(edtitdocId: string) {
    try {

      if (edtitdocId != '' && edtitdocId != undefined) {
        this.commonfun.loadingPresent();
        this.neworderservice.geteditorderheader(edtitdocId).subscribe(data => {
          this.commonfun.loadingDismiss();
          const response = data['response'];
          this.orderheader = response.data;
          //bind Category
          this.formprod.controls["selectedBusinessPartner"].setValue(this.orderheader[0].BPartner);
          this.formprod.controls["ponumber"].setValue(this.orderheader[0].ponumber);


        }, error => {
          this.commonfun.loadingDismiss();

        //  console.log("geteditorderheader:Erroe", error);

        });
      }

    } catch (error) {
    //  console.log("editOrder:Erroe", error);

      this.commonfun.loadingDismiss();
    }
  }
  //Capture Image from Camera
  takePicture() {
    try {

      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        targetWidth: 1500,
        targetHeight: 1500
      };
      this.camera.getPicture(options).then((imageData) => {
        this.POimg64 = imageData;
        this.fileName="";
        this.fileType="";
        // return this.img64;
      }, (err) => {
        this.commonfun.presentAlert("Message", "Error", err);

      });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);

    }
  }
  //Select Image from library
  getimage() {
    try {
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 1500,
        targetHeight: 1500
      };
      this.camera.getPicture(options).then((imageData) => {
        this.POimg64 = imageData;
        this.fileName="";
        this.fileType="";
      }, (err) => {
        this.commonfun.presentAlert("Message", "Error", err);
      });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
}
