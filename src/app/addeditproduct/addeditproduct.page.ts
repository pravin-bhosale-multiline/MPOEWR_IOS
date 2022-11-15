
import { ProductListPage } from './../product-list/product-list.page';
import {  Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Validator } from '../../provider/validator-helper';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AddeditproductService, Product, ddlProduct } from './addeditproduct.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { LoadingController, AlertController } from '@ionic/angular';
import { Commonfun } from '../../provider/commonfun';
import { LoginauthService } from '../login/loginauth.service';
import { NeworderPage } from '../neworder/neworder.page';
import { ModalController } from '@ionic/angular';
import { iFilter, ProductFilterPage } from '../product-filter/product-filter.page';
import { NeworderService } from '../neworder/neworder.service';


@Component({
  selector: 'app-addeditproduct',
  templateUrl: './addeditproduct.page.html',
  styleUrls: ['./addeditproduct.page.scss'],
})
export class AddeditproductPage implements OnInit {


  form: FormGroup;
  form1: FormGroup;
  portForm: FormGroup;
  //ddlproduct:ddlProduct[];
  ddlproduct: any;
  selectedddlproduct: Product[];enteredfreeqty: any;
  issplorderonfreeqty: any;
;
  selectedddlproductfree: ddlProduct[];
  tempcartproduct: Product[];
  Istempcartproduct = false;
  prodsearchtextcount = 0;
  allProduct: Product[];
  selectedddlproductany: any;
  isLoading = false;
  activityid: string = '';
  cust_id: string = '';
  order_type: string = '';
  businessPartnerCategory: string = '';
  product_id: string = '';
  productdetailresponse: any;
  TaxRate: string = '';
  existingcartproduct: any;
  shipperqty: any;
  minorderqty: any;
  selectedBPaddressshipping: any;
  selectedBPaddressbilling: any;
  //Isdruglicence:boolean=false;
  //#region constructor
  totalFilterApplied = 0;
  productSelected:any;
  selectedAddEditFilter: iFilter[];
  totalCartAmount= 0;
  tempSelectedBusinessPartner;
  special_order_add_edit;
  temp_selected_primary_customer;
  temp_is_advance_payment;
  validation_messages = {'productQuantityCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Quantity.' }]}

  constructor(private fb: FormBuilder,
    private val: Validator,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingController: LoadingController,
    public addeditproductservice: AddeditproductService,
    private route: ActivatedRoute,
    public commonfun: Commonfun,
    public neworderpage: NeworderPage,
    public loginauth: LoginauthService,
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public neworderservice: NeworderService,
  ) {
    this.getparam();
    this.form = this.fb.group({
      Quantity: ['', Validators.required],
      selectedddlproduct: ['', Validators.required]

    });
  }
  //#endregion constructor

  //#region ngOnInit()
  ngOnInit() {
   // this.commonfun.chkcache('neworder');
    this.portForm = this.formBuilder.group({
      productQuantityCtrl:[,Validators.required]
    });
    
  }
  //#endregion ngOnInit()


  getparam() {
    try {
      this.route.params.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          // this.selectedbunch=null;
        //  console.log("Add Edit Param GET Param",this.businessPartnerCategory);
          this.cust_id = this.router.getCurrentNavigation().extras.state.cust_id;
          this.order_type = this.router.getCurrentNavigation().extras.state.order_type;
          this.businessPartnerCategory = this.router.getCurrentNavigation().extras.state.businessPartnerCategory;
          this.tempSelectedBusinessPartner = this.router.getCurrentNavigation().extras.state.tempSelectedBusinessPartner;
          this.temp_selected_primary_customer = this.router.getCurrentNavigation().extras.state.tempPrimaryCustomer;
         // console.log("Add Edit Param GET Param",this.temp_selected_primary_customer);

          this.activityid = this.router.getCurrentNavigation().extras.state.activityid;
          this.existingcartproduct = this.router.getCurrentNavigation().extras.state.cartproduct;
          this.tempcartproduct = this.router.getCurrentNavigation().extras.state.cartproduct;
         // console.log('cart product',this.tempcartproduct);
          this.calculateTotalCartAmount();

          this.selectedBPaddressbilling = this.router.getCurrentNavigation().extras.state.addressbilling;
          this.selectedBPaddressshipping = this.router.getCurrentNavigation().extras.state.addressshipping;

          this.special_order_add_edit = this.router.getCurrentNavigation().extras.state.special_order;
          this.temp_is_advance_payment = this.router.getCurrentNavigation().extras.state.is_advance_payment_param;
          this.issplorderonfreeqty= this.router.getCurrentNavigation().extras.state.issplorderonfreeqty;
          //console.log('this.issplorderonfreeqty',this.special_order_add_edit);

          this.iscartempty();
          //------------------------------------

          var editproduct = this.router.getCurrentNavigation().extras.state.selectedproduct;
          // console.log('edit product',editproduct);
          
          if (editproduct) {
            this.selectedddlproduct = editproduct;
            this.product_id = editproduct.id;
            this.getqty(this.product_id, "Y");
            this.shipperqty = editproduct.shipperqty;
            this.minorderqty = editproduct.minorderqty;
            this.enteredfreeqty=editproduct.enteredfreeqty;
          }

          //this.ddlproduct[0]=this.selectedddlproduct
          this.form.controls["selectedddlproduct"].setValue(this.router.getCurrentNavigation().extras.state.selectedproduct);




          //----------------------------------

          // this.Isdruglicence=this.router.getCurrentNavigation().extras.state.Isdruglicence;
        }

      });

    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }

  iscartempty() {

    if (this.tempcartproduct != null && this.tempcartproduct.length > 0) {
      this.Istempcartproduct = true;
    }
    else {
      this.Istempcartproduct = false;
    }
  }
  //#region onSave(value)
  onSave(saveoradd: string) {
    this.commonfun.loadingPresent();
    try {
      
      this.iscartempty();
      var Qty = this.form.controls['Quantity'].value;

      if (Qty != "" && Qty != 0 && Qty != null) {
        if (Qty >= this.minorderqty) {
          if (Qty % (this.shipperqty) == 0) {
            this.getproductdetail(Qty, saveoradd);
          }
          else {
            this.commonfun.presentAlert("Message", "Alert!", "Quantity must be divisible by " + this.shipperqty);
          }
        }
        else {

          this.commonfun.presentAlert("Message", "Alert!", "Quantity must be greater than or equal to " + this.minorderqty);
        }
      }
      else if (this.tempcartproduct != null && this.tempcartproduct != undefined) {
        let body={
          "productlist":this.tempcartproduct,
          "activityid":this.activityid,
          "cust_id":this.cust_id,
          "billadd":this.selectedBPaddressbilling,
          "shippadd":this.selectedBPaddressshipping,
          "order_type":this.order_type,
          "isspecialorder":this.special_order_add_edit==='Y'?true:false,
          "isadvancepayment":this.neworderservice.isadvancepaymentcheck,
        }
        this.neworderservice.checkForCashDiscountPopup(body).subscribe((data) => {
          if(data.msg){
            this.checkForCashDiscountPopup(data.msg);
          }else if(data.noscheme){
            if(this.loginauth.selectedactivity.iscashdiscovertraddisc){
              this.neworderservice.isadvancepaymentcheck=false
            }
                let body={
                  "productlist":this.tempcartproduct,
                  "activityid":this.activityid,
                  "cust_id":this.cust_id,
                  "billadd":this.selectedBPaddressbilling,
                  "shippadd":this.selectedBPaddressshipping,
                  "order_type":this.order_type,
                  "isspecialorder":this.special_order_add_edit==='Y'?true:false,
                  "isadvancepayment":this.neworderservice.isadvancepaymentcheck,
                  "iscancel":true
                }
                this.neworderservice.iscancelpopup=true;
                this.neworderservice.onCancelCashDiscount(body).subscribe((data) => {
                  this.tempcartproduct=data;
                 let navigationExtras: NavigationExtras = {
                  state: {
                    selectedddlproduct: this.tempcartproduct,
                    orderType:this.order_type,
                    passTempSelectedBusinessPartner:this.tempSelectedBusinessPartner,
                    addressbilling:this.selectedBPaddressbilling,
                    addressshipping:this.selectedBPaddressshipping,
                    special_order_add_edit: this.special_order_add_edit,
                    passTempPrimaryCustomer:this.temp_selected_primary_customer,
                    passIsAdvancePayment:false
        
                  }
                };
                this.router.navigate(['neworder'], navigationExtras);
                });
          }else{
            if(this.loginauth.selectedactivity.iscashdiscovertraddisc){
              this.neworderservice.isadvancepaymentcheck=false
            }
            let navigationExtras: NavigationExtras = {
              state: {
                selectedddlproduct: this.tempcartproduct,
                orderType:this.order_type,
                passTempSelectedBusinessPartner:this.tempSelectedBusinessPartner,
                addressbilling:this.selectedBPaddressbilling,
                addressshipping:this.selectedBPaddressshipping,
                special_order_add_edit: this.special_order_add_edit,
                passTempPrimaryCustomer:this.temp_selected_primary_customer,
                passIsAdvancePayment:this.neworderservice.isadvancepaymentcheck
              }
            };
            
            
            this.neworderservice.iscancelpopup=true;
            this.router.navigate(['neworder'], navigationExtras);
          }
              
  
        },(error)=>{
          this.commonfun.presentAlert("Message", "Error", error);
          this.commonfun.loadingDismiss();
          return;
        })
        
      }
      this.commonfun.loadingDismiss();
    } catch (error) {
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message", "Error!", error);
    }


  }
  //#endregion onSave(value)
  public async checkForCashDiscountPopup(msg){
    try {
            
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Message',
              message: '<p>You are Eligible for Advance Payment Discount.</p><p>(Scheme Information:'+msg.schemename+', ('+msg.cashdiscount+'%)</p><p>Click Ok to Apply Discount.</p>',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: () => {
                    this.commonfun.loadingPresent();
                    if(this.loginauth.selectedactivity.iscashdiscovertraddisc){
                      this.neworderservice.isadvancepaymentcheck=false
                    }
                    let body={
                      "productlist":this.tempcartproduct,
                      "activityid":this.activityid,
                      "cust_id":this.cust_id,
                      "billadd":this.selectedBPaddressbilling,
                      "shippadd":this.selectedBPaddressshipping,
                      "order_type":this.order_type,
                      "isspecialorder":this.special_order_add_edit==='Y'?true:false,
                      "isadvancepayment":this.neworderservice.isadvancepaymentcheck,
                      "iscancel":true
                    }
                    this.neworderservice.iscancelpopup=true;
                    this.neworderservice.onCancelCashDiscount(body).subscribe((data) => {
                      this.tempcartproduct=data;
                      let navigationExtras: NavigationExtras = {
                        state: {
                          selectedddlproduct: this.tempcartproduct,
                          orderType:this.order_type,
                          passTempSelectedBusinessPartner:this.tempSelectedBusinessPartner,
                          addressbilling:this.selectedBPaddressbilling,
                          addressshipping:this.selectedBPaddressshipping,
                          special_order_add_edit: this.special_order_add_edit,
                          passTempPrimaryCustomer:this.temp_selected_primary_customer,
                          passIsAdvancePayment:false
              
                        }
                      };
                      this.router.navigate(['neworder'], navigationExtras);
                      this.commonfun.loadingDismiss();
                    });
                    
                  }
                }, {
                  text: 'Okay',
                  handler: () => {
                    this.commonfun.loadingPresent();
                    let body={
                      "productlist":this.tempcartproduct,
                      "activityid":this.activityid,
                      "cust_id":this.cust_id,
                      "billadd":this.selectedBPaddressbilling,
                      "shippadd":this.selectedBPaddressshipping,
                      "order_type":this.order_type,
                      "isspecialorder":this.special_order_add_edit==='Y'?true:false,
                      "isadvancepayment":true,
                      "cashdiscount":msg.cashdiscount,
                       "schemename":msg.schemename,
                       "Schemeid":msg.Schemeid,
                      "iscancel":false
                    }
                    this.neworderservice.iscancelpopup=false;
                    
                    this.neworderservice.onCancelCashDiscount(body).subscribe((data) => {
                      this.tempcartproduct=data;
                      this.neworderservice.isadvancepaymentcheck=true;
                    let navigationExtras: NavigationExtras = {
                      state: {
                        selectedddlproduct: this.tempcartproduct,
                        orderType:this.order_type,
                        passTempSelectedBusinessPartner:this.tempSelectedBusinessPartner,
                        addressbilling:this.selectedBPaddressbilling,
                        addressshipping:this.selectedBPaddressshipping,
                        special_order_add_edit: this.special_order_add_edit,
                        passTempPrimaryCustomer:this.temp_selected_primary_customer,
                        passIsAdvancePayment:true
            
                      }
                    };
                    this.commonfun.loadingDismiss();
                    this.router.navigate(['neworder'], navigationExtras);
                    });
                  }
               
                }
              ]
            });
            await alert.present();
    } catch (error) {
      this.commonfun.loadingDismiss();
      console.log(error);
    }
  }
  //#region onCancel()
  onCancel() {
    this.Resetpage();
    this.router.navigate(['neworder']);
  }
  //#endregion



  removeProduct(post) {
    try {
      let index = this.tempcartproduct.indexOf(post);
      const result = this.tempcartproduct.filter(item => item.MainProductid != post.MainProductid);
      this.tempcartproduct = result;
      this.iscartempty();
      this.calculateTotalCartAmount();
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  addproduct() {
    try {

      if (this.tempcartproduct == undefined || this.tempcartproduct == null) {
        this.tempcartproduct = this.selectedddlproductany;
      }
      else if (this.tempcartproduct.length >= 0) {
        for (var c = 0; c < this.selectedddlproductany.length; c++) {
          var sameprod = this.tempcartproduct.find(e => e.MainProductid === this.selectedddlproductany[c].MainProductid);
          if (sameprod != null || sameprod != undefined) {
            this.removeProduct(sameprod)
          }
        }
        for (var b = 0; b < this.selectedddlproductany.length; b++) {
          this.tempcartproduct.push(this.selectedddlproductany[b]);
        }
      }
      else {

      }
      this.iscartempty();
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }


  //#region getproductdetail(qty:string)
  getproductdetail(qty: string, saveoradd: string) {
    try {
      this.commonfun.loadingPresent();

      this.addeditproductservice.getproductdetail(this.activityid, this.cust_id, this.product_id, qty, "",
        this.order_type, this.selectedBPaddressshipping, this.selectedBPaddressbilling,this.special_order_add_edit,this.temp_is_advance_payment,0).subscribe(data => {
          this.commonfun.loadingDismiss();

          if (data != null) {
            this.productdetailresponse = data;

          //  console.log("Product DATA",data);

            this.selectedddlproductany = data;
            this.selectedddlproductany = this.selectedddlproductany.reverse();
            this.addproduct();
         
              if (saveoradd == "save") {
                let navigationExtras: NavigationExtras = {
                  state: {
                    selectedddlproduct: this.tempcartproduct
                  }
                };
                this.router.navigate(['neworder'], navigationExtras);
              }
              else {
                this.form.reset();
                this.shipperqty = "";
                this.minorderqty = "";
              }
          }
          else {

            //  this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error!", "No product found.");

          }

        }, error => {


          this.commonfun.loadingDismiss();
          //  this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
          this.commonfun.presentAlert("Message", "Error!", error.error.text);
        });
    }

    catch (error) {
      this.commonfun.loadingDismiss();


    }
  }
  //#endregion getproductdetail(qty:string)

  //#region onchangeproductselect()
  onchangeproductselect(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    try {
      this.shipperqty = "";
      this.minorderqty = "";
      this.form.controls['Quantity'].setValue("");

      if (event.value != undefined) {
        this.product_id = event.value.id
        this.selectedddlproduct = event.value;
        this.getqty(this.product_id, "N");
        this.shipperqty = event.value.shipperqty;
        this.minorderqty = event.value.minorderqty;
      }


      event.component._searchText = "";
    } catch (error) {
      console.log("Error:onchangeproductselect", error);

    }
  }

  //#endregion onchangeproductselect()

  getqty(product_id: string, isedit: string) {

    if (this.tempcartproduct != undefined) {
      const result = this.tempcartproduct.filter(item => item.product_id == product_id && item.MainProductid == product_id);

      if (result.length > 0) {
        this.form.controls["Quantity"].setValue(result[0].MainProductQty);
        if (isedit == "N")
          this.commonfun.presentAlert("Message", "Alert", "This product is already added with " + result[0].MainProductQty + " quantity.")
      }
    }
    this.iscartempty();
  }


  oneditProduct(post) {
    try {


      var selectedproduct = {
        id: post.product_id,
        minorderqty: post.minorderqty,
        shipperqty: post.shipperqty,
        _identifier: post.product,
      }

      //------------------------------------
      //
      var editproduct = post;//this.router.getCurrentNavigation().extras.state.selectedproduct;
      this.selectedddlproduct = editproduct;
      //this.ddlproduct[0]=this.selectedddlproduct
      this.form.controls["selectedddlproduct"].setValue(selectedproduct);


      this.product_id = editproduct.product_id;
      this.getqty(post.product_id, "Y");
      this.shipperqty = editproduct.shipperqty;
      this.minorderqty = editproduct.minorderqty;

      //----------------------------------



    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  public onEditCartProduct(editProduct){
  
    
    try {
            this.onShowProductListModel(true,editProduct);
    } catch (error) {
      console.log(error);
    }
  }


  //#region productsearchChange
  productsearchChange(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    this.prodsearchtextcount++;
    
    var custsearchtext = event.text;
    if (custsearchtext.length % 3 == 0) {
      this.prodsearchtextcount = 0;
      this.bindproduct(custsearchtext);
    }
  }
  //#endregion

  toggle(varr) {

  }

  Resetpage() {
    this.form.reset();
    this.shipperqty = "";
    this.minorderqty = "";
    this.tempcartproduct = [];
    this.selectedAddEditFilter = [];
    this.totalCartAmount = 0;
    this.totalFilterApplied = 0;
    this.iscartempty();
    this.router.navigateByUrl('/addeditproduct');
    

  }

  onClose(event: {component: IonicSelectableComponent,text: any}) {
    event.component.searchText = "";
  }

  //#region bindproduct(strsearch:string)  
  bindproduct(strsearch: string) {
    try {


      if (strsearch != "") {


        //console.log("PRavin",this.cust_id,strsearch,this.selectedBPaddressbilling,this.selectedBPaddressshipping,this.order_type);
        //  this.addeditproductservice.getproduct(strsearch,this.activityid,this.Isdruglicence).subscribe(data=>{
        this.addeditproductservice.getproductapi(this.cust_id, strsearch, this.selectedBPaddressbilling, this.selectedBPaddressshipping, this.order_type).subscribe(data => {

          //    const response= data['response'];
          var response = data;

          this.ddlproduct = response;
        //  console.log("Product Data",response);
          //shipperqty
          // this.commonfun.loadingDismiss();
        }, error => {
          //this.commonfun.loadingDismiss();
          this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
        });
      }
      else {
        this.ddlproduct = null;
      }


    } catch (error) {
      // this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);

    }
  }
  public async onShowFilterModel() {
    try {
          const modal = await this.modalController.create({
            component: ProductFilterPage,
            cssClass: 'my-custom-filter-class',
            backdropDismiss:false,
            componentProps:{selectedPreviousFilter:this.selectedAddEditFilter,business_partner:this.tempSelectedBusinessPartner,
            is_advance_payment_filter:this.temp_is_advance_payment}
          });
          modal.onDidDismiss().then(data=>{
            //console.log("Filter Model Data",data.data);
            this.selectedAddEditFilter = data.data;

            
            if(!!data.data[0] && !!data.data[0].catvalues){
           
             this.totalFilterApplied = 0;
             this.selectedAddEditFilter.forEach(ele=>{
              this.totalFilterApplied = this.totalFilterApplied+ ele.catvalues.length;
            });
              this.onShowProductListModel(false);
            } else {
              this.totalFilterApplied = 0;
            }
          })
          return await modal.present();
    } catch (error) {
      console.log("Add Edit Page",error);
    }
  }
  public async onShowProductListModel(edit?:boolean,product?) {
    try {
          const modal = await this.modalController.create({
            component: ProductListPage,
            cssClass: 'my-custom-class',
            backdropDismiss:false,
            componentProps: { editMode:edit,productToBeEdit:product,activity_id:this.activityid,cust_id: this.cust_id,bpBillingAddress:this.selectedBPaddressbilling,
                              bpShippingAddress:this.selectedBPaddressshipping,orderType:this.order_type,
                              tempProductSelectedOn:this.tempcartproduct,selectedFilter:this.selectedAddEditFilter,special_order_add_edit_param:this.special_order_add_edit,issplorderonfreeqty:this.issplorderonfreeqty}
          });
          modal.onDidDismiss().then(data=>{
          //  console.log("Product List Model Data",data);
            if(!!data.data){
              this.tempcartproduct = data.data;
              this.calculateTotalCartAmount();

              this.iscartempty();
            }
          })
          return await modal.present();
    } catch (error) {
      console.log("Add Edit Page",error);
    }
  }
  public getMoreProduct(event: {component: IonicSelectableComponent,text: string}){
    try {

    } catch (error) {
      console.log(error);
    }
  }
  public bindFilterProductFromApi(strsearch?,filter?){
    try {
          
           this.addeditproductservice.getFilterProductService(this.cust_id, strsearch, this.selectedBPaddressbilling, this.selectedBPaddressshipping, this.order_type,this.selectedAddEditFilter).subscribe(data => {
              var response = data;
              this.ddlproduct = response;
            //  console.log("Product Data",response);
            }, error => {
              this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
            });
    } catch (error) {
      console.log(error);
    }
  }
  public async clearFilter(){
    try {
            
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Confirm!',
              message: 'Do you want to clear all the filter?',
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
                    this.selectedAddEditFilter = [];
                    this.totalFilterApplied = 0;
                    
                  }
                }
              ]
            });
            await alert.present();
    } catch (error) {
      console.log(error);
    }
  }
 
  public calculateTotalCartAmount(tempCart?){
    try {
          if(!!this.tempcartproduct){
            this.totalCartAmount = 0;
            this.tempcartproduct.forEach(ele=>{
              this.totalCartAmount = this.totalCartAmount + Number(ele.TotalAmount);
            });
          }
    } catch (error) {
      console.log(error);
    }
  }
}
