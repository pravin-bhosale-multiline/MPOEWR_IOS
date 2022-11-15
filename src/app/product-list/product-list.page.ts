import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { AddeditproductService } from '../addeditproduct/addeditproduct.service';
import { Commonfun } from 'src/provider/commonfun';
import { AlertController, ModalController } from '@ionic/angular';
import { Message } from 'src/provider/message-helper';
import { NeworderService } from '../neworder/neworder.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  readonly TAG = "ProductListPage";
  productListForm: FormGroup;
  productList:any;
  activityid;
  
  selectedBPBillingAddress;
  selectedBPShippingAddress;
  items: FormArray;
  tempCartProductList;
  isTempCartProduct = false;
  selectedIndex;
  selectedIndexValue;


  editedProduct;
  special_order_product;
  is_advance_payment_product_param;

@Input() cust_id;activity_id;bpBillingAddress;bpShippingAddress;orderType;tempProductSelectedOn;selectedFilter;editMode=false;productToBeEdit;special_order_add_edit_param;issplorderonfreeqty;is_advance_payment_filter;

  constructor(public neworderservice: NeworderService,private formBuilder: FormBuilder,public addEditProductService: AddeditproductService,public commonfun: Commonfun,
              public viewCtrl: ModalController,public alertController: AlertController,
              private modalCtrl: ModalController,public msg: Message) {
                
               }


  ngOnInit() {
    this.cust_id = this.cust_id;
    this.activityid = this.activity_id;
    this.selectedBPBillingAddress = this.bpBillingAddress;
    this.selectedBPShippingAddress = this.bpShippingAddress;
    this.orderType = this.orderType;
    this.tempCartProductList = this.tempProductSelectedOn;
    this.selectedFilter = this.selectedFilter;
    this.editMode = this.editMode;
    this.editedProduct =  this.productToBeEdit;
    this.special_order_product = this.special_order_add_edit_param;
    this.issplorderonfreeqty= this.issplorderonfreeqty;
    
    this.is_advance_payment_product_param = this.is_advance_payment_filter;
    this.productListForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
  }
  ionViewWillEnter(){
   // console.log(this.TAG,this.editMode);
           
    if(this.editMode==false){
      if(!!this.selectedFilter && this.selectedFilter.length !=0){
        this.bindProductFromApi("",this.selectedFilter)
      }
      
    } else {
      this.productList = [{"id": this.editedProduct.product_id,"_identifier": this.editedProduct.product,"shipperqty": this.editedProduct.shipperqty,"minorderqty": this.editedProduct.minorderqty,"isreeproduct":this.editedProduct.isreeproduct,"enteredfreeqty":this.editedProduct.enteredfreeqty,"MainProductQty":this.editedProduct.MainProductQty}];
      
      this.createItem();
     
    }
    
  }
  public cancel(){
    try {
      
    } catch (error) {
      console.log(error);
    }
  }
  public onChangeProductSearch(event){
    try {
        
           if (event.detail.value.length !=0 && event.detail.value.length >= 3) {
            this.bindProductFromApi(event.detail.value,this.selectedFilter);
          } else if(event.detail.value.length==0){
            this.productList  = [];
          }
    } catch (error) {
      console.log(error);
    }
  }
   public async onAddToCart(product,i){
    this.commonfun.loadingPresent();
    try {
      
             const controlArray = <FormArray> this.productListForm.get('items');
           
             if(!!this.productListForm.get('items').value[i].key || !!this.productListForm.get('items').value[i].freeqty){
              this.selectedIndex = i;
              let QtyO = this.productListForm.get('items').value[i].key;
              //check for free qty
              let FreeQty;
              if(this.special_order_product==='Y' && product.isreeproduct && this.issplorderonfreeqty){
                 FreeQty = this.productListForm.get('items').value[i].freeqty;
                
              }
              let Qty=0

              if (QtyO === null || QtyO === '') {
                QtyO=0;
              }
              if(FreeQty===null || FreeQty === '' || FreeQty===undefined ){
                FreeQty=0;
               }
                Qty=+QtyO+(+FreeQty);
            
                if (Qty >= product.minorderqty) {
                  if (Qty % (product.shipperqty) == 0) {
                  await     this.getProductDetailAPI(QtyO,FreeQty, 'save',product.id,i,product);
               
                    
                  }
                  else {
                    this.commonfun.presentAlert("Message", "Alert!", "Quantity must be divisible by " + product.shipperqty);
                  }
                }
                else {
        
                  this.commonfun.presentAlert("Message", "Alert!", "Quantity must be greater than or equal to " + product.minorderqty);
                }
              
            } else {
              this.commonfun.presentAlert("Message", "Alert!", "Please Enter Quantity");
            }
            
            this.commonfun.loadingDismiss();
    } catch (error) {
      console.log(error);
      this.commonfun.loadingDismiss();
    }
  }
  public bindProductFromApi(txt:string,filter){
    try {
          
         
        this.addEditProductService.getFilterProductService(this.cust_id, txt, this.selectedBPBillingAddress, this.selectedBPShippingAddress, this.orderType,filter).subscribe(data => {
        
          var response = data;
          this.productList = response;
        //  console.log("Product Data",response);
          (this.productListForm.get('items') as FormArray).clear();
          this.createItem();
       
               
       }, error => {
           this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
        });
      
     
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  createItem() {
    this.items = this.productListForm.get('items') as FormArray;
    
    this.productList.forEach((elem: any) => {
      const ctrl = this.formBuilder.group({
        key: [elem.MainProductQty,[Validators.required]],
        freeqty: [elem.enteredfreeqty],
        test:''
      });
      this.items.push(ctrl);
   
   
    })
    
   }
  public async getProductDetailAPI(Qty,FreeQty, saveoradd,product_id,index,product){
    try {
           // console.log(this.TAG,"Product Detail API Started",this.todaysDataTime);
            let tempProductDetailResponse =  await this.addEditProductService.getproductdetail(this.activityid, this.cust_id, product_id, Qty, "",
            this.orderType, this.selectedBPShippingAddress, this.selectedBPBillingAddress,this.special_order_product,this.is_advance_payment_product_param,FreeQty).toPromise();
            if (tempProductDetailResponse != null) {
              tempProductDetailResponse = tempProductDetailResponse.reverse();
              
              this.addProductToCart(tempProductDetailResponse,index,Qty,FreeQty,product);
            }

    } catch (error) {
      console.log(error);
    }
  }
  public async addProductToCart(productDetailResponse,index,Qty,FreeQty,product){
    try {
            // console.log(this.TAG,"Product Detail Response",productDetailResponse);
            if (this.tempCartProductList == undefined || this.tempCartProductList == null) {
         
                    let body={
                      "productlist":productDetailResponse
                    }
                    this.neworderservice.checkCOPBlockOrder(body).subscribe((data) => {
                            if(data.resposemsg==='Success'){
                              this.tempCartProductList = productDetailResponse;
                              this.productList[index].isSelected = true;
                            }else{
                              this.commonfun.presentAlert("Message", "Error", data.logmsg)
                              return;
                            }
                           

                    },(error)=>{
                      this.commonfun.presentAlert("Message", "Error", error)
                    
                      return;
                    })
                
               
                  // console.log(this.TAG,"Product Added",this.productList);
            } else {
              //first remove same product
              productDetailResponse.forEach(element => {
                var sameProduct = this.tempCartProductList.find(e => e.MainProductid === element.MainProductid);
                if (sameProduct != null || sameProduct != undefined) {
                  this.removeProduct(sameProduct);
                }
                
              });
            
              for (var c = 0; c < productDetailResponse.length; c++) {
                let productresponse=productDetailResponse[c];
                      //console.log('inside',this.tempCartProductList)
                        // let productlist =[];
                        // productlist=this.tempCartProductList;
                        // productlist.push(productDetailResponse[c]);
                        let body={
                          "productlist":[...this.tempCartProductList,productresponse]
                        }
                      
                        this.neworderservice.checkCOPBlockOrder(body).subscribe((data) => {
                        if(data.resposemsg==='Success'){
                          this.tempCartProductList=[...this.tempCartProductList,productresponse];
                          this.productList[index].isSelected = true;
                        }else{
                          this.commonfun.presentAlert("Message", "Error", data.logmsg)
                          
                          return;
                        }
                        
                        },(error)=>{
                          this.commonfun.presentAlert("Message", "Error", error)
                          
                          return;
                        })
              }
                       
                        
                       
                      
                     
                     
            }
        
            
            this.isCartEmpty();
    } catch (error) {
      console.log(error);
    }
  }
   
  public removeProduct(post) {
    try {
      let index = this.tempCartProductList.indexOf(post);
      const result = this.tempCartProductList.filter(item => item.MainProductid != post.MainProductid);
      
      
      this.tempCartProductList = result;
      this.isCartEmpty();
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  public isCartEmpty() {

    if (this.tempCartProductList != null && this.tempCartProductList.length > 0) {
      this.isTempCartProduct = true;
    }
    else {
      this.isTempCartProduct = false;
    }
  }
  public checkProductIsExits(product_id: string):boolean{
    try {
          if (this.tempCartProductList != undefined) {
            const result = this.tempCartProductList.filter(item => item.product_id == product_id && item.MainProductid == product_id);
            if (result.length > 0) {
              return true;
              //  this.commonfun.presentAlert("Message", "Alert", "This product is already added with " + result[0].MainProductQty + " quantity.")
            } else {
              return false;
            }
          }
          this.isCartEmpty();
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onClose(){
    try {
          this.modalCtrl.dismiss(this.tempCartProductList);
    } catch (error) {
      console.log(error);
    }
  }
  public numberOnly(event): boolean {
    try {
            const charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }
            return true;


    } catch (error) {
      console.log(error);
    }
  }

}
