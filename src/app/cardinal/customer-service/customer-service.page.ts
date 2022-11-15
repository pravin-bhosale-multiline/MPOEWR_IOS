import { Complain } from './../../../assets/model/complain';
import { CustomerServiceService } from './customer-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Validator } from '../../../provider/validator-helper'
import { Area, NewcustomerService, Pincode } from 'src/app/newcustomer/newcustomer.service';
import { Commonfun } from 'src/provider/commonfun';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material';


@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.page.html',
  styleUrls: ['./customer-service.page.scss'],
})

export class CustomerServicePage implements OnInit {
  @ViewChild("stepper", { static: false }) stepper: MatStepper;

  /**
   * This variable will hold the page name for logging purpose.
   */
  readonly TAG = "CustomerServicePage";
  /**  
   * If this variable is set to true then stepper will check the validation on form control.It will now allow to navigate next page or stepper.  
   */
  isLinear = true;
  /**
   * 
   */
  firstFormGroup: FormGroup; equipmentFormGroup: FormGroup; thirdFormGroup: FormGroup; fourthFormGroup: FormGroup;consumablesFormGroup: FormGroup;productCompliantFormGroup: FormGroup;
  /**
   * 
   */
  docTypeSelected;errorCodeSelected;ProductReturnedSelected;areaSelected;designationOfComplainerSelected;contractTypeSelected;
  /**
   * 
   */
  isProductCompliant = false;
  /**
   * 
   */
  isEquipment = false;

  isConsumables = false;

  isOptional = false;

  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();
  /**
   * 
   */
  maxDate = this.year + "-" + this.month + "-" + this.day;
  today= this.year+"-"+("0" + this.month).slice(-2)+ "-" + ("0" + this.day).slice(-2);
  /**
   * 
   */
  firstStepValid = false; secondStepValid = false; thirdStepValid = false; fourthStepValid = false; consumableStepValid = false;serialNoCheckResponse;
  /**
   * 
   */
  validation_messages = {
    'mobileno': [{ type: 'required', message: '*Please Enter Contact No.' },
    { type: 'InvalidNumber', message: '*Please Enter Valid Contact No.' }],
    'email': [{ type: 'required', message: '*Please Enter Email.' },
    { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }],
    'designation': [{ type: 'required', message: '*Please Designation.' }],
    'name': [{ type: 'required', message: '*Please Enter Name.' }],
    'document_type': [{ type: 'required', message: '*Please Select Document Type.' }],
    'eventdate': [{ type: 'required', message: '*Please Select Event Date.' }],
    'serialNo': [{ type: 'required', message: '*Please Enter Serial no .' }],
    'contractType': [{ type: 'required', message: '*Please Enter Contract Type .' }],
    'SKUCode': [{ type: 'required', message: '*Please Enter SKU Code' }],
    'brandName': [{ type: 'required', message: '*Please Enter Brand Name' }],
    'customerName': [{ type: 'required', message: '*Please Enter Customer Name' }],
    'customerAddress1': [{ type: 'required', message: '*Please Enter Customer Address1' }],
    'customerAddress2': [{ type: 'required', message: '*Please Enter Customer Customer Address 2' }],
    'customerAddress3': [{ type: 'required', message: '*Please Enter Customer Customer Address 3' }],
    'pinCode': [{ type: 'required', message: '*Please Enter Pin Code' }],
    'area': [{ type: 'required', message: '*Please Select Your Area' }],
    'city': [{ type: 'required', message: '*Please Enter City' }],
    'state': [{ type: 'required', message: '*Please Enter State' }],
    'country': [{ type: 'required', message: '*Please Enter Country' }],
    'documentType': [{ type: 'required', message: '*Please Select Document Type.'}],
    'complaintDescriptionCtrl': [{ type: 'required', message: '*Please Enter Complaint Description.'}],
    'errorCodeCtrlErrorMessage':[{ type: 'required', message: '*Please Select Error Code.'}],
  }
  
  docTypeList:any;designationOfComplainerList:any;
  /**
   * 
   */
  pinCodeList: Pincode[];
  /**
   * 
   */
  inValidPinCode: string;
  /**
   * 
   */
  areaList: Area[];
  /**
   * 
   */
  errorCodeList;
  /**
   * 
   */
  contractTypeList;
  selectedArea: Area;
  city;state;country;district;
  test = true;
  ;
  constructor(private _formBuilder: FormBuilder, private val: Validator,
              private customerService: CustomerServiceService,public newcustomerservice: NewcustomerService,
              private commonFunction: Commonfun,private alertCtrl: AlertController,private router: Router) { }
  
  async ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      complaintDateCtrl:[,],
      documentTypeCtrl:[,Validators.required],
      mobileno: [, Validators.required, this.val.numberValid],
      email: [, Validators.required, this.val.emailValid],
      designationOfComplainerCtrl: [, Validators.required],
      name: ['', Validators.required],
      btnDetail: [,],
      eventDateCtrl:[],
      complaintDescriptionCtrl:[,Validators.required]
    });
    this.equipmentFormGroup = this._formBuilder.group({
      serialNo: ['', Validators.required],
      contractType: ['', Validators.required],
      SrNoEquipmentCtrl: [,],
      invoiceNoCtrl:[,],
      invoiceDateCtrl:[,],
      dealerNameCtrl:[,],
      installationDateCtrl:[,],
      errorCode:[,Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      SKUCode: ['', Validators.required],
      brandName: ['', Validators.required],
      skuName:[,]
    });
    this.fourthFormGroup = this._formBuilder.group({
      customerName: ['', Validators.required],
      customerAddress1: ['', Validators.required],
      customerAddress2: [,],
      customerAddress3: [,],
      pinCodeCtrl: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.consumablesFormGroup = this._formBuilder.group({
      lotNoConsumablesCtrl:[,]
    });
    this.productCompliantFormGroup = this._formBuilder.group({
      lotNoProductCompliantCtrl:[]
    });

    let temp =  await (await this.customerService.getDocumentList()).toPromise();
    // console.log(this.TAG,"API DATA TEST",temp);
    this.errorCodeList = await (await this.customerService.getErrorCodeList()).toPromise();
  //  console.log(this.TAG,"Error Code List From Server",this.errorCodeList);
    this.designationOfComplainerList = await (await this.customerService.getDesignationOfComplainerList()).toPromise();
    this.docTypeList = temp.response.data;
    this.contractTypeList = await (await this.customerService.getContractTypeList()).toPromise();
    //console.log(this.TAG,'Contract Type List From Server',this.contractTypeList);
    //console.log(this.TAG,'Document Type From Server',this.docTypeList);
 //   console.log(this.TAG,"Today Date",this.maxDate);
   // this.firstFormGroup.controls.complaintDateCtrl.patchValue(this.day + "-" + this.month + "-" +this.year);
   this.firstFormGroup.controls['eventDateCtrl'].setValue(this.today);
   this.fourthFormGroup.get('country').disable();
   this.fourthFormGroup.get('state').disable();
   this.fourthFormGroup.get('city').disable();



  }
  ionViewWillEnter() {
    this.stepper.selectedIndex = 0;
    this.firstFormGroup.get('complaintDateCtrl').disable();
    this.firstFormGroup.controls.complaintDateCtrl.patchValue(this.day + "-" + this.month + "-" +this.year);
 
  }
  public docTypeSelectedChange(docTypeSelected) {
    try {
      //console.log("Document Type Selected", docTypeSelected);
      if (docTypeSelected == "Product Compliant") {
        this.isProductCompliant = true;
        this.isEquipment = false;
        this.isConsumables = false;
        this.thirdFormGroup.enable();
      } else if (docTypeSelected == "Equipment") {
        this.isEquipment = true;
        this.isProductCompliant = false;
        this.isConsumables = false;
      } else if(docTypeSelected == "Consumables"){
        this.isConsumables = true;
        this.isProductCompliant = false;
        this.isEquipment = false;
        this.thirdFormGroup.enable();
      }

    } catch (error) {
    //  console.log(this.TAG, error);
    }

  }
  public errorCodeSelectedSelectedChange(errorCodeSelected){
    try {
          //console.log(this.TAG,errorCodeSelected);
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public ProductReturnedSelectedChange(data){
    try {
          
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public contractTypeSelectedChange(data){
    try {

    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public designationOfComplainerChange(data){
    try {

    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public onAreaSelectedChange(){
    try {
          
          this.selectedArea = this.fourthFormGroup.controls['area'].value
      //    console.log(this.TAG,'Pravin Area Is',this.selectedArea);
        
          if(this.selectedArea!=null)
          this.city = this.selectedArea.cttv$_identifier;
    } catch (error) {
   //  console.log(this.TAG,error);
    }
  }
  public RefreshPage() {
    try {
          //this.firstFormGroup.controls.complaintDateCtrl.patchValue(this.maxDate);
          this.firstFormGroup.reset();
          this.firstStepValid = false
          this.equipmentFormGroup.reset();
          this.secondStepValid = false
          this.thirdFormGroup.reset();
          this.thirdStepValid =false
          this.fourthFormGroup.reset();
          this.fourthStepValid = false
          this.consumablesFormGroup.reset();
          this.productCompliantFormGroup.reset();
          this.ionViewWillEnter();
    } catch (error) {
   //   console.log(this.TAG, error);
    }
  }
  public matSettper(event,form) {
    try {
   //   console.log(this.TAG, "matSettper Click event", event,form);
      this.firstStepValid = true;
    } catch (error) {
    //  console.error(this.TAG, error);
    }

  }
  public matSettperSecond(evnet) {
    try {
      this.secondStepValid = true;
    } catch (error) {
    //  console.error(this.TAG, error);
    }

  }
  public matSettperThird(evnet) {
    try {
      this.thirdStepValid = true;
    } catch (error) {
      console.error(this.TAG, error);
    }

  }
  public matSettperProductCom(event){
    try {
      
    } catch (error) {
   //   console.error(this.TAG,error);
    }
  }
  public matSettperConsumables(event){
    try {
      
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public async onCheckInstallationBase(){
    try {
          this.commonFunction.loadingPresent();
          this.serialNoCheckResponse = "";
          let serialNo = this.equipmentFormGroup.get('serialNo').value ? this.equipmentFormGroup.get('serialNo').value : '';
          this.serialNoCheckResponse =  await (await this.customerService.checkSerialNumber(serialNo,"2020-12-31")).toPromise();
         
       //  console.log(this.TAG,"Installation Base Data",this.serialNoCheckResponse);
          
         
         if(Object.keys(this.serialNoCheckResponse).length != 0){
           
           
            if(!!this.serialNoCheckResponse.contracttype){
              
             for (let i = 0; i < this.contractTypeList.length; i++) {
                    if(this.contractTypeList[i].code == this.serialNoCheckResponse.contracttype){
                      this.contractTypeSelected = this.contractTypeList[i];
                      }   
                
              }
              this.equipmentFormGroup.get('contractType').disable();
            }
            if(!!this.serialNoCheckResponse.invoiceno){
              this.equipmentFormGroup.controls["invoiceNoCtrl"].setValue(this.serialNoCheckResponse.invoiceno);
              this.equipmentFormGroup.get('invoiceNoCtrl').disable();
            } else {
              this.equipmentFormGroup.controls["invoiceNoCtrl"].setValue("");
            }

            if(!!this.serialNoCheckResponse.invoicedate){
              this.serialNoCheckResponse.invoicedate = this.serialNoCheckResponse.invoicedate.split(' ')[0];
              this.equipmentFormGroup.controls["invoiceDateCtrl"].setValue(this.serialNoCheckResponse.invoicedate);
              this.equipmentFormGroup.get('invoiceDateCtrl').disable();
            } else{
              this.equipmentFormGroup.controls["invoiceDateCtrl"].setValue("");
            }

            if(!!this.serialNoCheckResponse.dealername){
              this.equipmentFormGroup.controls["dealerNameCtrl"].setValue(this.serialNoCheckResponse.dealername);
              this.equipmentFormGroup.get('dealerNameCtrl').disable();
            } else {
              this.equipmentFormGroup.controls["dealerNameCtrl"].setValue("");
            }
            if(!!this.serialNoCheckResponse.installationdate){
              this.serialNoCheckResponse.installationdate = this.serialNoCheckResponse.installationdate.split(' ')[0];
              this.equipmentFormGroup.controls["installationDateCtrl"].setValue(this.serialNoCheckResponse.installationdate);
              this.equipmentFormGroup.get('installationDateCtrl').disable();
            } else {
              this.equipmentFormGroup.controls["installationDateCtrl"].setValue("");
            }
            if(!!this.serialNoCheckResponse.sku){
              this.thirdFormGroup.controls["SKUCode"].setValue(this.serialNoCheckResponse.sku);
              this.thirdFormGroup.get('SKUCode').disable();
            } else {
              this.thirdFormGroup.controls["SKUCode"].setValue("");
            }
            if(!!this.serialNoCheckResponse.sku){
              this.thirdFormGroup.controls["skuName"].setValue(this.serialNoCheckResponse.skuname);
              this.thirdFormGroup.get('skuName').disable();
            } else {
              this.thirdFormGroup.controls["skuName"].setValue("");
            }
            if(!!this.serialNoCheckResponse.brand){
              this.thirdFormGroup.controls["brandName"].setValue(this.serialNoCheckResponse.brand);
              this.thirdFormGroup.get('brandName').disable();
            } else {
              this.thirdFormGroup.controls["brandName"].setValue("");
            }

            // if(!!this.serialNoCheckResponse.custname){
            //   this.fourthFormGroup.controls["customerName"].setValue(this.serialNoCheckResponse.custname);
            //   this.fourthFormGroup.get('customerName').disable();
            // }

            // if(!!this.serialNoCheckResponse.add1){
            //   this.fourthFormGroup.controls["customerAddress1"].setValue(this.serialNoCheckResponse.add1);
            //   this.fourthFormGroup.get('customerAddress1').disable();
            // }
            
            // if(!!this.serialNoCheckResponse.add2){
            //   this.fourthFormGroup.controls["customerAddress2"].setValue(this.serialNoCheckResponse.add2);
            //   this.fourthFormGroup.get('customerAddress2').disable();
            // }

            // if(!!this.serialNoCheckResponse.add3){
            //   this.fourthFormGroup.controls["customerAddress3"].setValue(this.serialNoCheckResponse.add3);
            //   this.fourthFormGroup.get('customerAddress3').disable();
            // }
            
            // if(Object.keys(this.serialNoCheckResponse.pincode).length != 0){
              
            //   this.fourthFormGroup.controls["pinCodeCtrl"].setValue(this.serialNoCheckResponse.pincode);
            //   if(Object.keys(this.serialNoCheckResponse.area).length != 0){
            //     this.fourthFormGroup.get('pinCodeCtrl').disable();
            //   }
              
            // }

            // if(Object.keys(this.serialNoCheckResponse.area).length != 0){
            //  let areaDummyObject = [{"id":this.serialNoCheckResponse.area[0].id,"mmst_cttv_id":this.serialNoCheckResponse.area[0].id, "cttv":this.serialNoCheckResponse.area[0].id, "_identifier":this.serialNoCheckResponse.area[0].id, "area":this.serialNoCheckResponse.area[0].name, "cttv$_identifier":this.serialNoCheckResponse.area[0].id}]
            //  this.areaList = areaDummyObject;
            //  this.areaSelected = areaDummyObject[0];
            //  this.fourthFormGroup.get('area').disable();
            // }
            // if(Object.keys(this.serialNoCheckResponse.city).length != 0){
              
            //   this.fourthFormGroup.controls["city"].setValue(this.serialNoCheckResponse.city[0].name);
            //  // this.fourthFormGroup.get('city').disable();
            // }
            // if(Object.keys(this.serialNoCheckResponse.state).length != 0){
              
            //   this.fourthFormGroup.controls["state"].setValue(this.serialNoCheckResponse.state[0].name);
            //  // this.fourthFormGroup.get('state').disable();
            // }
            // if(Object.keys(this.serialNoCheckResponse.country).length != 0){
              
            //   this.fourthFormGroup.controls["country"].setValue(this.serialNoCheckResponse.country[0].name);
            //   //this.fourthFormGroup.get('country').disable();
            // }
            
          } else {
              this.equipmentFormGroup.reset();
              this.equipmentFormGroup.enable();
              this.equipmentFormGroup.controls["serialNo"].setValue(serialNo);
              this.thirdFormGroup.reset();
              this.thirdFormGroup.enable();
              this.fourthFormGroup.reset();
              this.fourthFormGroup.enable();
          }

          this.commonFunction.loadingDismiss();
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public onChangePinCode(id: string=''){
    try {
          this.newcustomerservice.getPincode(this.fourthFormGroup.controls["pinCodeCtrl"].value).subscribe(data => {
            const response = data['response'];
         //   console.log(this.TAG,"Response From Pin Code",response);
            this.pinCodeList = response.data;
            if (this.pinCodeList.length > 0) {
              this.inValidPinCode = '';
              this.newcustomerservice.getarea(this.pinCodeList[0].id).subscribe(data => {
                const response = data['response'];
                console.log(this.TAG,"AREA LIST",response.data);
                this.areaList = response.data;
                
                this.state = this.pinCodeList[0].region$_identifier;
                this.country = this.pinCodeList[0].country$_identifier;
                this.district = this.pinCodeList[0].district$_identifier;
                if (id != '' || id==undefined) {
                  this.selectedArea = this.areaList.find(item => item.id === id);
                  setTimeout( () => {
                    this.fourthFormGroup.controls["area"].setValue(this.selectedArea);
                  },1500);
                }
                
              })
            }
          });
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public async checkSerialNo(){
   let serialNumberTemp =  this.equipmentFormGroup.get('serialNo').value ? this.equipmentFormGroup.get('serialNo').value : '';
   if(!!serialNumberTemp){
    let equipmentData = await this.customerService.getSerialNumberFromBase(serialNumberTemp).toPromise();
    if(equipmentData){
      this.equipmentFormGroup.controls.SrNoEquipmentCtrl.setValue(equipmentData.srnoequipment);
      this.equipmentFormGroup.get('SrNoEquipmentCtrl').disable();
      this.equipmentFormGroup.controls.invoiceNoCtrl.setValue(equipmentData.invoiceno);
      this.equipmentFormGroup.controls.invoiceDateCtrl.setValue(equipmentData.invoicedate);
      this.equipmentFormGroup.controls.dealerNameCtrl.setValue(equipmentData.dealername);
      this.equipmentFormGroup.controls.installationDateCtrl.setValue(equipmentData.installationdate);

      this.thirdFormGroup.controls.SKUCode.setValue(equipmentData.skucode);
      this.thirdFormGroup.controls.skuName.setValue(equipmentData.skuname);
      this.thirdFormGroup.controls.brandName.setValue(equipmentData.brandname);


     
      
    }
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
          this.firstFormGroup.reset('', {emitEvent: false});
          this.firstStepValid = false
          this.equipmentFormGroup.reset('', {emitEvent: false});
          this.secondStepValid = false
          this.thirdFormGroup.reset('', {emitEvent: false});
          this.ProductReturnedSelected ='';
          this.thirdStepValid =false
          this.fourthFormGroup.reset('', {emitEvent: false});
          this.fourthStepValid = false
          this.consumablesFormGroup.reset('', {emitEvent: false});
          this.productCompliantFormGroup.reset();
          this.firstFormGroup.markAsPristine();
          this.firstFormGroup.markAsUntouched();
          this.router.navigateByUrl('/home');
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  public testForm(form){
   // console.log("Form Test",form);
  }
  public async submit() {
    try {
          this.commonFunction.loadingPresent();
          this.fourthStepValid = true;

          let complain:Complain = new Complain();
          complain.doctype = this.docTypeSelected.id;
    //  console.log("1");    
          complain.nameofcomplainer = this.firstFormGroup.get('name').value ? this.firstFormGroup.get('name').value :'';
          complain.desofcomplnr = this.firstFormGroup.get('designationOfComplainerCtrl').value.id ? this.firstFormGroup.get('designationOfComplainerCtrl').value.id : '';
    //  console.log("2");    
          complain.contnumber = this.firstFormGroup.get('mobileno').value ? this.firstFormGroup.get('mobileno').value.toString() : '';
          complain.email = this.firstFormGroup.get('email').value ? this.firstFormGroup.get('email').value : '';
          complain.eventdate = this.firstFormGroup.get('eventDateCtrl').value ? this.firstFormGroup.get('eventDateCtrl').value : '';
          complain.description = this.firstFormGroup.get('complaintDescriptionCtrl').value ? this.firstFormGroup.get('complaintDescriptionCtrl').value : '';
          if(this.docTypeSelected.name == 'Consumables'){
            complain.lotno = this.consumablesFormGroup.get('lotNoConsumablesCtrl').value ? this.consumablesFormGroup.get('lotNoConsumablesCtrl').value : '';
          } else if(this.docTypeSelected.name == 'Product Compliant'){
            complain.lotno = this.productCompliantFormGroup.get('lotNoProductCompliantCtrl').value ? this.productCompliantFormGroup.get('lotNoProductCompliantCtrl').value : '';
          } else if(this.docTypeSelected.name == 'Equipment'){
            complain.serialno = this.equipmentFormGroup.get('serialNo').value ? this.equipmentFormGroup.get('serialNo').value : '';
            complain.srnoequipment = this.equipmentFormGroup.get('SrNoEquipmentCtrl').value ? this.equipmentFormGroup.get('SrNoEquipmentCtrl').value : '';
            complain.contracttype = this.equipmentFormGroup.get('contractType').value ? this.equipmentFormGroup.get('contractType').value.code: '';
            complain.invoiceno = this.equipmentFormGroup.get('invoiceNoCtrl').value ? this.equipmentFormGroup.get('invoiceNoCtrl').value: '';
            complain.invoicedate= this.equipmentFormGroup.get('invoiceDateCtrl').value ? this.equipmentFormGroup.get('invoiceDateCtrl').value: '';
     // console.log("3");    
             
            complain.errorcode= this.errorCodeSelected.id ? this.errorCodeSelected.id: '';
            complain.dealername = this.equipmentFormGroup.get('dealerNameCtrl').value ? this.equipmentFormGroup.get('dealerNameCtrl').value: '';
            complain.installationdate = this.equipmentFormGroup.get('installationDateCtrl').value ? this.equipmentFormGroup.get('installationDateCtrl').value: '';

          }
          complain.skucode = this.thirdFormGroup.get('SKUCode').value ? this.thirdFormGroup.get('SKUCode').value : '';
          complain.skuname = this.thirdFormGroup.get('skuName').value ? this.thirdFormGroup.get('skuName').value : '';
          complain.brandname = this.thirdFormGroup.get('brandName').value ? this.thirdFormGroup.get('brandName').value : '';
          complain.producttobereturn = this.ProductReturnedSelected ? this.ProductReturnedSelected : '';
          complain.custname = this.fourthFormGroup.get('customerName').value ? this.fourthFormGroup.get('customerName').value : '';
          complain.add1 = this.fourthFormGroup.get('customerAddress1').value ? this.fourthFormGroup.get('customerAddress1').value : '';
          complain.add2 = this.fourthFormGroup.get('customerAddress2').value ? this.fourthFormGroup.get('customerAddress2').value : '';
          complain.add3 = this.fourthFormGroup.get('customerAddress3').value ? this.fourthFormGroup.get('customerAddress3').value : '';
          
          if(this.docTypeSelected.name == 'Equipment'){
            if(!!this.serialNoCheckResponse.pincode && Object.keys(this.serialNoCheckResponse.pincode).length != 0) {
              complain.pincode = this.serialNoCheckResponse.pincode;
            } else {
              complain.pincode = this.pinCodeList[0].spincode;
            }
            if(!!this.serialNoCheckResponse.area && Object.keys(this.serialNoCheckResponse.area).length != 0){
              complain.area  = this.serialNoCheckResponse.area[0].id;
              complain.city = this.serialNoCheckResponse.city[0].id;
              complain.state = this.serialNoCheckResponse.state[0].id;
              complain.country = this.serialNoCheckResponse.country[0].id;
            } else {
                let area = this.fourthFormGroup.get('area').value ? this.fourthFormGroup.get('area').value : '';
                complain.area = area.id;
                complain.city = this.selectedArea.cttv;
                complain.state = this.pinCodeList[0].region;
                complain.country = this.pinCodeList[0].country;
            }
          }
          else {
                complain.pincode = this.pinCodeList[0].spincode;
                let area = this.fourthFormGroup.get('area').value ? this.fourthFormGroup.get('area').value : '';
                complain.area = area.id;
                complain.city = this.selectedArea.cttv;
                complain.state = this.pinCodeList[0].region;
                complain.country = this.pinCodeList[0].country;
          }
          
         
         // console.log("4");    
         
         
          
          complain.assigntoservmg = "true";
          //complain.appcomplaint = "true";
        //  console.log(this.TAG,"Final Customer Service Form",complain);
          let saveComplainResponse =  await this.customerService.saveComplain(complain).toPromise();
       //   console.log(this.TAG,"Response From Save Complain",saveComplainResponse);
          if(saveComplainResponse){
            this.presentAlert("Customer Service","",saveComplainResponse.msg);
          } else {
            this.presentAlert("Customer Service","","Something went wrong please try again"+saveComplainResponse.msg);
          }

          this.commonFunction.loadingDismiss();
            

    } catch (error) {
      this.commonFunction.loadingDismiss();
      if(error.status == "200"){
        this.presentAlert("Customer Service","",error.error.text);
      }else {
        console.error(this.TAG, error);
        this.commonFunction.presentAlert("Customer Service",error.status,"Something went wrong please try again");
      }
      
      
     
    }

  }

}
