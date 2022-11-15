import { CustomerQuotationService } from './../customer-quotation/customer-quotation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commonfun } from 'src/provider/commonfun';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Product } from 'src/app/addeditproduct/addeditproduct.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoginauthService } from 'src/app/login/loginauth.service';

@Component({
  selector: 'app-add-edit-service-product',
  templateUrl: './add-edit-service-product.page.html',
  styleUrls: ['./add-edit-service-product.page.scss'],
})
export class AddEditServiceProductPage implements OnInit {

  readonly TAG = "Add Edit Service Product Page";
  
  addEditServiceProductForm: FormGroup;

  serialNoList:any;
  isCardCollapse = 1;
  prodSearchTextCount=0;
  tempCartProduct:any=[];
  selectedSerialNo:any;
  btnSaveDisabled = false;
  selectedQuotationData;
  selectedSerialNumberProductListQuotation;
  tempCartHeader;
  port;
  tempSerialNumberLess10:any

  
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,
              private commonFunction: Commonfun,
              private customerQuotationService: CustomerQuotationService,private loginService: LoginauthService) { }

  ngOnInit() {
    this.addEditServiceProductForm = this.formBuilder.group({
      serialNoCtrl:[,Validators.required],
      quantityCtrl:[{ value: '', disabled: true},Validators.required],
    });

  }
   ionViewWillEnter(){
     try {
        //  console.log(this.TAG,"ionViewWillEnter"); 
          this.route.queryParams.subscribe((data) => {
              if(!!data["quotation_data"] && data["quotation_data"].length > 0 ){
                this.selectedQuotationData = JSON.parse(data["quotation_data"]);
              //  console.log(this.TAG,JSON.parse(data["quotation_data"]));
                this.selectedSerialNumberProductListQuotation = JSON.parse(data["selectedSerialNumberProductList"]);
                this.tempCartProduct = this.selectedSerialNumberProductListQuotation;

                if(!!this.selectedQuotationData){
                  if(this.selectedQuotationData.service_product_id.id){
                    this.customerQuotationService.getSerialNoProductList(this.selectedQuotationData.service_product_id.id,"").subscribe(tempSerialNumberLess10=>{
                     
                    //  console.log(this.TAG,tempSerialNumberLess10);
                      if(!!tempSerialNumberLess10){
                        // this.serialNoList = tempSerialNumberLess10;
                        if(tempSerialNumberLess10.length > this.loginService.minlistcount){
                          this.tempSerialNumberLess10 = [];
                       } else {
                        setTimeout(() => {
                          this.tempSerialNumberLess10 = tempSerialNumberLess10;
                         if(this.tempSerialNumberLess10.length == 1){
                           this.addEditServiceProductForm.controls["serialNoCtrl"].setValue(this.tempSerialNumberLess10[0]);
                           this.selectedSerialNo = this.serialNoList[0];
                         
                         }
                        }, 100);
                        
                       
                       }
                       }

                    });
                 
                  }
                }


                 if(!!this.tempCartProduct){
                  this.btnSaveDisabled = true;
                 }
                
              //  console.log(this.TAG,this.selectedSerialNumberProductListQuotation);
              }
          });
     } catch (error) {
     //  console.log(this.TAG,error);
     }
  }
  public onSerialNoClose(event:{component: IonicSelectableComponent,text: any}){
    try {
            event.component.searchText="";
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onSerialNoChange(event: {component: IonicSelectableComponent,value: any}){
    try {
          if(event.value!=undefined) {
          //  console.log(this.TAG,event.value);
           // this.tempCartProduct = event.value;
           //this.tempCartProduct.push(event.value);
            this.selectedSerialNo = event.value;
            this.addEditServiceProductForm.controls['quantityCtrl'].setValue(1);
          //  console.log(this.TAG,"Array Of Product",this.tempCartProduct);
            event.component._searchText="";
           
          }
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onSerialNoSearch(event: {component: IonicSelectableComponent,text: any}){
    try {
          this.prodSearchTextCount++;
          var custsearchtext = event.text;
          
          if(custsearchtext.length >= 3){
              this.prodSearchTextCount = 0;
              this.bindSerialNoProduct(custsearchtext);
          } else {
            this.serialNoList = this.tempSerialNumberLess10;
          }
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public async bindSerialNoProduct(strsearch:string){
    try {
          
      if(strsearch!="") {
         this.customerQuotationService.getSerialNoProductList(this.selectedQuotationData.service_product_id.id,strsearch).subscribe(response=>{
          //  console.log(this.TAG,response);
            this.serialNoList = response;
           })
      } else {
        this.serialNoList = this.tempSerialNumberLess10;
      }
            
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public removeProduct(deletedSerial){
    try {
          const result = this.tempCartProduct.filter(item => item.m_attributesetinstance_id != deletedSerial.m_attributesetinstance_id);
          this.tempCartProduct = result;
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onSaveCart(){
    try {
          if(this.tempCartProduct!=null && this.tempCartProduct!=undefined){
              let navigationExtras: NavigationExtras = {
                queryParams: {
                  cartList: JSON.stringify(this.tempCartProduct),
                  selectedQuotationData:JSON.stringify(this.selectedQuotationData)
                }
              };
            this.router.navigate(['customer-quotation'],navigationExtras); 
          } else {
            this.commonFunction.presentAlert("Add Product","Message!","Your Cart Is Empty");
          } 
          
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public async addToCart(){
    try {
           //this.tempCartProduct.push(this.selectedSerialNo);

           if(!!this.tempCartProduct){
            const result = this.tempCartProduct.filter(item => item.m_attributesetinstance_id == this.selectedSerialNo.m_attributesetinstance_id);
            if(result.length>0){
              this.commonFunction.presentAlert("Add Product","Validation","This product is already added with 1 quantity.")
              this.addEditServiceProductForm.controls['serialNoCtrl'].reset();
            } else {
              const productDetailResponse = await this.customerQuotationService.getSerialNoProductDetail(this.selectedQuotationData.selectedBusinessPartnerKey.id,this.selectedQuotationData.service_product_id.id,this.selectedQuotationData.bp_shiping_add_id.id,this.selectedQuotationData.bp_billing_add_id.id).toPromise();
            //  console.log(this.TAG,productDetailResponse);
              let tempBuild = {
                "m_attributesetinstance_id":this.selectedSerialNo.m_attributesetinstance_id,
                "serialno": this.selectedSerialNo.serialno ? this.selectedSerialNo.serialno : "",
                "taxname": productDetailResponse.taxname ? productDetailResponse.taxname: "",
                "taxrate": productDetailResponse.taxrate ? productDetailResponse.taxrate: "",
                "taxid": productDetailResponse.taxid ? productDetailResponse.taxid: "",
                "totgrossamt": productDetailResponse.totgrossamt ? productDetailResponse.totgrossamt : "",
                "netamt":productDetailResponse.newamt ? productDetailResponse.newamt : "",
                "qty":"1",
                "uomname":productDetailResponse.uomname ? productDetailResponse.uomname : "",
                "rate": productDetailResponse.rate ? productDetailResponse.rate : "",
                "c_uom_id":productDetailResponse.c_uom_id ? productDetailResponse.c_uom_id : "",
                

              }


              this.tempCartProduct.push(tempBuild);
              this.selectedSerialNo = "";
              this.addEditServiceProductForm.controls["serialNoCtrl"].setValue("");
              this.addEditServiceProductForm.controls['quantityCtrl'].setValue(""); 
              this.btnSaveDisabled = true;
            //  console.log(this.TAG,"ADDED ARRAY",this.tempCartProduct);
            }
            
          }
          
           
           

    } catch (error) {
      this.commonFunction.presentAlert("Add Product",error.status,error.error);
    //  console.log(this.TAG,error);
    }
  }
}
