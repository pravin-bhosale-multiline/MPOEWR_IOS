import { error } from 'protractor';
import { ServiceManagerService } from './../service-manager.service';
import { Validator } from './../../../../provider/validator-helper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commonfun } from 'src/provider/commonfun';
import { Area, NewcustomerService, Pincode } from 'src/app/newcustomer/newcustomer.service';
import { CustomerServiceService } from '../../customer-service/customer-service.service';
import { Complain } from 'src/assets/model/complain';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-service-manager-details',
  templateUrl: './service-manager-details.page.html',
  styleUrls: ['./service-manager-details.page.scss'],
})
export class ServiceManagerDetailsPage implements OnInit {
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();
  /**
   * 
   */
  maxDate = this.year + "-" + this.month + "-" + this.day;
  /**
   * 
   */
  readonly TAG = "ServiceManagerDetailsPage";
  /**  
   * If this variable is set to true then stepper will check the validation on form control.It will now allow to navigate next page or stepper.  
   */
  isLinear = true;
  /**
   * 
   */
  existingComplaint:any;docTypeSelected;docType;designationOfComplainerType;
  /**
   * 
   */
  detailsStepValid = false; equimentStepValid = false;customerDetailStepValid = false;skuDetailsStepValid = false;
  /**
   * 
   */
  consumablesFormGroup: FormGroup;productCompliantFormGroup: FormGroup;detailFormGroup:FormGroup;
  equimentFormGroup:FormGroup;skuDetailsFormGroup:FormGroup;customerDetailFormGroup:FormGroup;
  /**
   * 
   */
  validation_messages = {
    'complaintNoCtrlErrorMessage':[{ type: 'required', message: '*Please Enter Complaint Number' }],
    'complaintDateCtrlErrorMessage':[{ type: 'required', message: '*Please Select Complaint Date' }],
    'nameCtrlErrorMessage':[{ type: 'required', message: '*Please Enter The Name' }],
    'documentType':[{ type: 'required', message: '*Please Select Document Type' }],
    'nameOfComplainer': [{ type: 'required', message: '*Please Enter Name of complainer.' }],
    'designation_of_complainer_mss':[{ type: 'required', message: '*Please Select Designation Of Complainer.' }],
    'mobileno': [{ type: 'required', message: '*Please Enter Contact No.' },
    { type: 'InvalidNumber', message: '*Please Enter Valid Contact No.' }],
    'email': [{ type: 'required', message: '*Please Enter Email.' },
    { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }],
    'eventDateIDCtrlErrorMessage':[{ type: 'required', message: '*Please Select Event Date' }],
    'complaintDescription':[{ type: 'required', message: '*Please Enter existingComplaint Description' }],
    'serialNo': [{ type: 'required', message: '*Please Enter Serial no .' }],
    'customerAddress1': [{ type: 'required', message: '*Please Enter Customer Address1' }],
    'customerAddress2': [{ type: 'required', message: '*Please Enter Customer Customer Address 2' }],
    'customerAddress3': [{ type: 'required', message: '*Please Enter Customer Customer Address 3' }],
    'pinCode': [{ type: 'required', message: '*Please Enter Pin Code' }],
    'area': [{ type: 'required', message: '*Please Select Your Area' }],
    'serviceVendorMessage':[{ type: 'required', message: '*Please Select Service Vendor' }],
    'skuCodeCtrlErrorMessage':[{ type: 'required', message: '*Please Enter SKU Code'}],
    'SKUNameCtrlErrorMessage': [{ type: 'required', message: '*Please Enter SKU Name' }],
    'brandNameCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Brand Name' }],
    'errorCodeCtrlErrorMessage':[{ type: 'required', message: '*Please Select Error Code.'}],
  };
  dealerList:any;designationOfComplainerList;designationOfComplainerSelected;areaList;isServiceVender = false;dealerName;
  color='accent';isProductCompliantTab = false;isConsumablesTab = false;isEquimentTab = false;approveComplaintStatus = false;
  venderList:any;isChecked;serialNoCheckResponse;
  /**
   * 
   */
  pinCodeList: Pincode[];inValidPinCode: string;city;state;country;district;
  selectedArea: Area;productToBeReturn;
  area;areaSelected;areaType;areaType1;venderName;salesRepresentativeList;salesRepresentative;salesRepresentativeSelected
  contractTypeList;contracttypeSelected;approveCheckBoxEditable=false;
  newDealerNameSelected;errorCodeSelected;errorCodeList;
  firstStepValid=false;
  
  constructor(private route: ActivatedRoute,private router: Router,
              private formBuilder: FormBuilder,private validator: Validator,
              private serviceManagerService: ServiceManagerService,private commonFunction: Commonfun,
              public newcustomerservice: NewcustomerService,
              private customerService: CustomerServiceService,
              private alertCtrl: AlertController) { }

  async ngOnInit() {
   // console.log(this.TAG,"ngOnInit Fired");

   // console.log(this.TAG,"ionViewWillEnter Fired");
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.existingComplaint = JSON.parse(params.special);
       // console.log(this.TAG,JSON.parse(params.special));
      }
    });
    this.detailFormGroup = this.formBuilder.group({
      complaintNoCtrl:[,Validators.required],
      complaintDateCtrl:[,Validators.required],
      documentTypeCtrl:[,Validators.required],
      nameOfComplainerCtrl: [this.existingComplaint.nameofcomplainer, Validators.required],
      desigOfComplainerCtrl: [, Validators.required],
      mobilenoCtrl: [, Validators.required,this.validator.numberValid],
      emailIDCtrl:[, Validators.required, this.validator.emailValid],
      eventDateIDCtrl:[, Validators.required, this.validator.emailValid],
      complaintDescriptionCtrl: [, Validators.required],
    });
    this.productCompliantFormGroup = this.formBuilder.group({
      lotNoCtrl:[,]
    });
    this.consumablesFormGroup = this.formBuilder.group({
      lotNoConsumablesCtrl:[,]
    });
    this.equimentFormGroup = this.formBuilder.group({
      serialNoCtrl: [, Validators.required],
      dealerNameCtrl: [, Validators.required],
      errorCode: [, Validators.required],
      newDealerNameCtrl :[,],
      installationDateCtrl:[,],
      salesRepresentativeCtrl:[,]
    });
    this.skuDetailsFormGroup = this.formBuilder.group({
      skuCodeCtrl:[, Validators.required],
      skuNameCtrl:[, Validators.required],
      brandNameCtrl:[, Validators.required]
    });
    this.customerDetailFormGroup = this.formBuilder.group({
      customerAddress1Ctrl:[, Validators.required],
      customerAddress2Ctrl:[,],
      customerAddress3Ctrl:[,],
      pinCodeCtrl:[, Validators.required],
      areaCtrl:[,Validators.required],
      city:[,Validators.required],
      state:[,Validators.required],
      country:[,Validators.required],
      approveComplaintChkCtrl:[, Validators.required],
      serviceVendorCtrl:[,Validators.required],
      
    });
    this.dealerList = await (await this.serviceManagerService.getDealerList()).toPromise();

    this.salesRepresentativeList = await (await this.serviceManagerService.getSalesRepresentativeList(this.existingComplaint.olddealerid)).toPromise();

    // if(!!this.dealerList && Object.keys(this.dealerList).length == 0){
    //   this.salesRepresentativeList = await (await this.serviceManagerService.getSalesRepresentativeList("")).toPromise();
    // }
    

   
    this.venderList = await (await this.serviceManagerService.getVenderList()).toPromise();
    
   }
  async ionViewWillEnter(){
    this.commonFunction.loadingPresent();
    this.skuDetailsFormGroup.get('skuCodeCtrl').disable();
    this.skuDetailsFormGroup.get('skuNameCtrl').disable();
    this.skuDetailsFormGroup.get('brandNameCtrl').disable();
    this.bindData();
    this.equimentFormGroup.get('installationDateCtrl').disable();

    if(!!this.existingComplaint.installationdate){
      this.approveCheckBoxEditable = true;
    }
    

    let test : Area[] = this.existingComplaint.area;
     this.areaList = test;
     this.areaType = test[0];

    this.docType = this.existingComplaint.doctype[0];
    this.designationOfComplainerList = await (await this.serviceManagerService.getDesignationOfComplainerList()).toPromise();
    for (let i = 0; i < this.designationOfComplainerList.length; i++) {
       if(this.designationOfComplainerList[i].name == this.existingComplaint.desofcomplnr[0].name){
          this.designationOfComplainerType = this.designationOfComplainerList[i];
       }
    }
    
    this.errorCodeList = await (await this.customerService.getErrorCodeList()).toPromise();
    for(let i = 0; i < this.errorCodeList.length; i++){
      if(this.errorCodeList[i].name == this.existingComplaint.errorcode[0].name){
        this.errorCodeSelected = this.errorCodeList[i];
      }
    }

    this.customerDetailFormGroup.controls.pinCodeCtrl.patchValue(this.existingComplaint.pincode);
    this.customerDetailFormGroup.controls.city.patchValue(this.existingComplaint.city[0].name);
    this.customerDetailFormGroup.controls.state.patchValue(this.existingComplaint.country[0].name);
    this.customerDetailFormGroup.controls.country.patchValue(this.existingComplaint.state[0].name);
    this.customerDetailFormGroup.get('city').disable();
    this.customerDetailFormGroup.get('state').disable();
    this.customerDetailFormGroup.get('country').disable();

   this.contractTypeList = await (await this.customerService.getContractTypeList()).toPromise();
   for (let i = 0; i < this.contractTypeList.length; i++) {
        if(this.contractTypeList[i].code == this.existingComplaint.contracttype){
          this.contracttypeSelected = this.contractTypeList[i].name;
          }   
    
   }

    this.detailFormGroup.get('documentTypeCtrl').disable();
    if(this.existingComplaint.doctype[0].name == 'Product Compliant'){
      this.isProductCompliantTab = true;
      this.isConsumablesTab = false;
      this.isEquimentTab = false;
      this.productCompliantFormGroup.controls.lotNoCtrl.patchValue(this.existingComplaint.lotno);
   } else if(this.existingComplaint.doctype[0].name == 'Consumables') {
      this.isProductCompliantTab = false;
      this.isConsumablesTab = true;
      this.isEquimentTab = false;
      this.consumablesFormGroup.controls.lotNoCtrl.patchValue(this.existingComplaint.lotno);
   } else if(this.existingComplaint.doctype[0].name == 'Equipment'){
      this.isProductCompliantTab = false;
      this.isConsumablesTab = false;
      this.isEquimentTab = true;
   }
   if(this.existingComplaint.producttobereturn=="MSNR_N"){
      this.productToBeReturn = 'No';
   } else if(this.existingComplaint.producttobereturn=="MSNR_Y"){
      this.productToBeReturn = 'Yes';
   }
   this.commonFunction.loadingDismiss();
  }
  public async bindData(){
    try {
         this.detailFormGroup.controls.complaintNoCtrl.patchValue(this.existingComplaint.complaintno);
         this.detailFormGroup.get('complaintNoCtrl').disable();
         this.detailFormGroup.controls.complaintDateCtrl.patchValue(this.existingComplaint.complaintdate);
         this.detailFormGroup.get('complaintDateCtrl').disable();
         //this.detailFormGroup.controls.nameOfComplainerCtrl.patchValue(this.existingComplaint.nameofcomplainer);
         this.detailFormGroup.get('documentTypeCtrl').disable();
         
         this.detailFormGroup.controls.mobilenoCtrl.patchValue(this.existingComplaint.contnumber);
    
         this.detailFormGroup.controls.emailIDCtrl.patchValue(this.existingComplaint.email);
        
         this.detailFormGroup.controls.eventDateIDCtrl.patchValue(this.existingComplaint.eventdate);
         this.detailFormGroup.get('eventDateIDCtrl').disable();

         this.detailFormGroup.controls.complaintDescriptionCtrl.patchValue(this.existingComplaint.description);

        // this.customerDetailFormGroup.controls.approveComplaintChkCtrl.patchValue(this.existingComplaint.approvecomplaint);
       
        if(!!this.existingComplaint.approvecomplaint){
          this.isServiceVender = true;
          this.customerDetailFormGroup.get('approveComplaintChkCtrl').disable();
          this.isChecked  = this.existingComplaint.approvecomplaint;
          
        }
       
        if(!!this.existingComplaint.newdealername){
          
          this.dealerList = await (await this.serviceManagerService.getDealerList()).toPromise();
          
          for (let i = 0; i < this.dealerList.length; i++) {
            if(this.dealerList[i].id == this.existingComplaint.dealerid){
              this.dealerName = this.dealerList[i];
                // setTimeout( () => {
                //  this.newDealerNameSelected = this.dealerList[i];
                //  },300);
             }
            }
          
    


        }

        if(!!this.existingComplaint.salesrepid){

          let dealer_id= "";
          if(!!this.existingComplaint.newdealername){
            dealer_id = this.existingComplaint.dealerid;
          } else {
            dealer_id = this.existingComplaint.olddealerid;
          }

          this.salesRepresentativeList = await (await this.serviceManagerService.getSalesRepresentativeList(dealer_id)).toPromise();
         
           for (let i = 0; i < this.salesRepresentativeList.length; i++) {
           if(this.salesRepresentativeList[i].id == this.existingComplaint.salesrepid){
              
               setTimeout( () => {
                this.salesRepresentativeSelected = this.salesRepresentativeList[i];
                },300);
            }
           }
        }
         
         
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public refreshPage(){
    try {
      
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public matDetailSettper(form){
    try {
          this.detailsStepValid = true;
       //   console.log(this.TAG,"Form Error",form);
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public matSettperProductCompliant(event){
    try {
      
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public matSettperConsumables(event){
    try {
      
    } catch (error) {
   //   console.error(this.TAG,error);
    }
  }
  public matSettperSKUDetails(event){
    try {
      
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public matSettperEquiment(event){
    try {
          this.firstStepValid = true;
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public approveComplaintCheckbox(value){
    try {
        //  console.log(this.TAG,"Approve existingComplaint Checkbox",value);
          if(value){
            this.isServiceVender = true;
            this.approveComplaintStatus = true;
             this.disFormControl("dis");
          } else {
            this.isServiceVender = false;
            this.approveComplaintStatus = false;
            this.disFormControl("ena");
          }
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public disFormControl(value){
    try {
          if(value=="dis"){
            this.detailFormGroup.get('nameOfComplainerCtrl').disable();
            this.detailFormGroup.get('desigOfComplainerCtrl').disable();
            this.detailFormGroup.get('mobilenoCtrl').disable();
            this.detailFormGroup.get('emailIDCtrl').disable();
            this.detailFormGroup.get('complaintDescriptionCtrl').disable();
            this.productCompliantFormGroup.get('lotNoCtrl').disable();
            this.consumablesFormGroup.get('lotNoConsumablesCtrl').disable();
            this.equimentFormGroup.get('serialNoCtrl').disable();
            this.equimentFormGroup.get('dealerNameCtrl').disable();
            this.equimentFormGroup.get('newDealerNameCtrl').disable();
            this.equimentFormGroup.get('installationDateCtrl').disable();

            this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
            this.customerDetailFormGroup.get('customerAddress2Ctrl').disable();
            this.customerDetailFormGroup.get('customerAddress3Ctrl').disable();
            this.customerDetailFormGroup.get('pinCodeCtrl').disable();
            this.customerDetailFormGroup.get('areaCtrl').disable();
            this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
            this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
            this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
            this.customerDetailFormGroup.get('approveComplaintChkCtrl').disable();
     

            
          } else if(value=="ena") {
            this.detailFormGroup.get('nameOfComplainerCtrl').enable();
            this.detailFormGroup.get('desigOfComplainerCtrl').enable();
            this.detailFormGroup.get('mobilenoCtrl').enable();
            this.detailFormGroup.get('emailIDCtrl').enable();
            this.detailFormGroup.get('complaintDescriptionCtrl').enable();
            this.productCompliantFormGroup.get('lotNoCtrl').enable();
            this.consumablesFormGroup.get('lotNoConsumablesCtrl').enable();
            this.equimentFormGroup.get('serialNoCtrl').enable();
            this.equimentFormGroup.get('dealerNameCtrl').enable();
            this.equimentFormGroup.get('newDealerNameCtrl').enable();
            this.equimentFormGroup.get('installationDateCtrl').enable();

            this.customerDetailFormGroup.get('customerAddress1Ctrl').enable();
            this.customerDetailFormGroup.get('customerAddress2Ctrl').enable();
            this.customerDetailFormGroup.get('customerAddress3Ctrl').enable();
            this.customerDetailFormGroup.get('pinCodeCtrl').enable();
            this.customerDetailFormGroup.get('areaCtrl').enable();
            this.customerDetailFormGroup.get('customerAddress1Ctrl').enable();
            this.customerDetailFormGroup.get('customerAddress1Ctrl').enable();

          }
          
         

    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public designationOfComplainerChange(data){
    try {
      
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public docTypeSelectedChange(data){
    try {
      
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public onAreaSelectedChange(){
    try {
          this.selectedArea = this.customerDetailFormGroup.controls['areaCtrl'].value
        //  console.log(this.TAG,'Pravin Area Is',this.selectedArea);
        
          if(this.selectedArea!=null){
            this.city = this.selectedArea.cttv$_identifier;
           
          }
         
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public onChangePinCode(id: string=''){
    try {
          this.newcustomerservice.getPincode(this.customerDetailFormGroup.controls["pinCodeCtrl"].value).subscribe(data => {
            const response = data['response'];
           // console.log(this.TAG,"Response From Pin Code",response);
            this.pinCodeList = response.data;
            if (this.pinCodeList.length > 0) {
              this.inValidPinCode = '';
              this.newcustomerservice.getarea(this.pinCodeList[0].id).subscribe(data => {
                const response = data['response'];
              //  console.log(this.TAG,"AREA LIST",response.data);
                this.existingComplaint.city[0].id=response.data[0].cttv;

              //  console.log(this.TAG,this.existingComplaint.city[0].id);

                let addressArray=[];
                for (let j = 0; j < response.data.length; j++) {
                   let addressObj = {
                     "id": response.data[j].id,
                     "name":response.data[j].area,
                     "cttv$_identifier":response.data[j].cttv$_identifier
                   }
                   addressArray.push(addressObj);
                }
               this.areaList = addressArray;
               this.existingComplaint.area=this.areaList;
                
                this.state = this.pinCodeList[0].region$_identifier;
                this.existingComplaint.state[0].id = this.pinCodeList[0].region;

                this.country = this.pinCodeList[0].country$_identifier;
                this.district = this.pinCodeList[0].district$_identifier;

                if (id != '' || id==undefined) {
                  this.selectedArea = this.areaList.find(item => item.id === id);
                  setTimeout( () => {
                    this.customerDetailFormGroup.controls["areaCtrl"].setValue(this.selectedArea);
                  },1500);
                }
                
              })
            }
          });
    } catch (error) {
    //  console.log(this.TAG,error);
    }  
  }
  public async newDealerNameChange(dealer){
    try {
          // console.log(this.TAG,"PRavin DEA selected",dealer);
           this.salesRepresentativeList = await (await this.serviceManagerService.getSalesRepresentativeList(dealer.id)).toPromise();
          // console.log(this.TAG,"Sales Representative list",this.salesRepresentativeList);
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public salesRepresentativeChange(value){
    try {
      
    } catch (error) {
     // console.log(this.TAG,error);
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
          
          this.router.navigateByUrl('/service-manager');
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  public errorCodeSelectedSelectedChange(data){
    try {

    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public async onCheckInstallationBase(){
    try {
          this.commonFunction.loadingPresent();
          this.serialNoCheckResponse = "";
          let serialNo = this.equimentFormGroup.get('serialNoCtrl').value ? this.equimentFormGroup.get('serialNoCtrl').value : '';
          this.existingComplaint.serialno = serialNo;
          this.serialNoCheckResponse =  await (await this.customerService.checkSerialNumber(serialNo,"2020-12-31")).toPromise();
          console.log(this.TAG,"Installation Base Data",this.serialNoCheckResponse);
          
          if(Object.keys(this.serialNoCheckResponse).length != 0){
            
            if(!!this.serialNoCheckResponse.contracttype){
              for (let i = 0; i < this.contractTypeList.length; i++) {
                if(this.contractTypeList[i].code == this.serialNoCheckResponse.contracttype){
                  this.contracttypeSelected = this.contractTypeList[i].name;
                  this.existingComplaint.contracttype = this.contractTypeList[i].code;
                 }   
             }
            }

            if(!!this.serialNoCheckResponse.invoiceno){
             // this.equimentFormGroup.controls["invoiceNoCtrl"].setValue(this.serialNoCheckResponse.invoiceno);
             // this.equimentFormGroup.get('invoiceNoCtrl').disable();
             this.existingComplaint.invoiceno = this.serialNoCheckResponse.invoiceno;
            } else {
              this.existingComplaint.invoiceno = "";
            }
            if(!!this.serialNoCheckResponse.invoicedate){
              this.serialNoCheckResponse.invoicedate = this.serialNoCheckResponse.invoicedate.split(' ')[0];
             // this.equimentFormGroup.controls["invoiceDateCtrl"].setValue(this.serialNoCheckResponse.invoicedate);
              
             this.existingComplaint.invoicedate = this.serialNoCheckResponse.invoicedate.split(' ')[0];
            } else {
              this.existingComplaint.invoicedate = "";
            }
            if(!!this.serialNoCheckResponse.dealername){
             // this.equimentFormGroup.controls["dealerNameCtrl"].setValue(this.serialNoCheckResponse.dealername);
            //  this.equimentFormGroup.get('dealerNameCtrl').disable();
                this.existingComplaint.dealername = this.serialNoCheckResponse.dealername;
                if(!!this.serialNoCheckResponse.dealerid){
                  this.salesRepresentativeList = await (await this.serviceManagerService.getSalesRepresentativeList(this.serialNoCheckResponse.dealerid)).toPromise();
                }
            } else {
              this.equimentFormGroup.controls["dealerNameCtrl"].setValue("");
            }

            if(!!this.serialNoCheckResponse.installationdate){
              this.serialNoCheckResponse.installationdate = this.serialNoCheckResponse.installationdate.split(' ')[0];
            //  this.equimentFormGroup.controls["installationDateCtrl"].setValue(this.serialNoCheckResponse.installationdate);
              this.equimentFormGroup.get('installationDateCtrl').disable();
             this.existingComplaint.installationdate = this.serialNoCheckResponse.installationdate;
             this.approveCheckBoxEditable = true;
            } else {
              //this.equimentFormGroup.controls["installationDateCtrl"].setValue("");
              this.existingComplaint.installationdate = "";
            }
            if(!!this.serialNoCheckResponse.sku){
              this.skuDetailsFormGroup.controls["skuCodeCtrl"].setValue(this.serialNoCheckResponse.sku);
              this.skuDetailsFormGroup.get('skuCodeCtrl').disable();
              this.existingComplaint.skucode = this.serialNoCheckResponse.sku;
            } else {
              this.skuDetailsFormGroup.controls["skuCodeCtrl"].setValue("");
            }
            if(!!this.serialNoCheckResponse.sku){
              this.skuDetailsFormGroup.controls["skuNameCtrl"].setValue(this.serialNoCheckResponse.skuname);
              this.skuDetailsFormGroup.get('skuNameCtrl').disable();
              this.existingComplaint.skuname = this.serialNoCheckResponse.skuname;
            } else {
              this.skuDetailsFormGroup.controls["skuNameCtrl"].setValue("");
            }
            if(!!this.serialNoCheckResponse.brand){
              this.skuDetailsFormGroup.controls["brandNameCtrl"].setValue(this.serialNoCheckResponse.brand);
              this.skuDetailsFormGroup.get('brandNameCtrl').disable();
              this.existingComplaint.brandname = this.serialNoCheckResponse.brand;
            } else {
              this.skuDetailsFormGroup.controls["brandNameCtrl"].setValue("");
            }

          } else {
            this.equimentFormGroup.reset();
            this.equimentFormGroup.enable();
            this.equimentFormGroup.controls["serialNo"].setValue(serialNo);
            this.skuDetailsFormGroup.reset();
            this.skuDetailsFormGroup.enable();
           
        }
         
          this.commonFunction.loadingDismiss();
     
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public async submit(event){
    try {
          let date =  this.equimentFormGroup.get('installationDateCtrl').value ? this.equimentFormGroup.get('installationDateCtrl').value: '';
           if(date === '' || date === null || date === undefined){
             //this.presentAlert("Compliant Report Details","","Installation Date Can Not Be Blank");
             this.commonFunction.presentAlert("Compliant Report Details","","Installation Date Can Not Be Blank");
           } else {
            this.commonFunction.loadingPresent();
            let approveComplain:Complain = new Complain();
            approveComplain.complaint_no = this.existingComplaint.complaintno;
            approveComplain.complaintid = this.existingComplaint.complaintid;
            approveComplain.complaint_date = this.existingComplaint.complaintdate;
            approveComplain.doctype = this.existingComplaint.doctype[0].id;
            approveComplain.nameofcomplainer =  this.detailFormGroup.get('nameOfComplainerCtrl').value ? this.detailFormGroup.get('nameOfComplainerCtrl').value :'';
            approveComplain.desofcomplnr = this.detailFormGroup.get('desigOfComplainerCtrl').value.id ? this.detailFormGroup.get('desigOfComplainerCtrl').value.id :'';
            approveComplain.contnumber = this.detailFormGroup.get('mobilenoCtrl').value ? this.detailFormGroup.get('mobilenoCtrl').value.toString() : '';
            approveComplain.email = this.detailFormGroup.get('emailIDCtrl').value ? this.detailFormGroup.get('emailIDCtrl').value : '';
            approveComplain.eventdate = this.existingComplaint.eventdate;
            approveComplain.description = this.detailFormGroup.get('complaintDescriptionCtrl').value ? this.detailFormGroup.get('complaintDescriptionCtrl').value : '';
            approveComplain.lotno = this.consumablesFormGroup.get('lotNoConsumablesCtrl').value ? this.consumablesFormGroup.get('lotNoConsumablesCtrl').value : '';
            approveComplain.serialno = this.existingComplaint.serialno ? this.existingComplaint.serialno:"";
            approveComplain.srnoequipment = this.existingComplaint.srnoequipment;
            approveComplain.contracttype  = this.existingComplaint.contracttype;
            approveComplain.invoiceno = this.existingComplaint.invoiceno;
            approveComplain.invoicedate=this.existingComplaint.invoicedate;
            approveComplain.errorcode= this.errorCodeSelected.id ? this.errorCodeSelected.id: '';
            approveComplain.dealername = this.equimentFormGroup.get('dealerNameCtrl').value ? this.equimentFormGroup.get('dealerNameCtrl').value: '';
            approveComplain.newdealername = this.equimentFormGroup.get('newDealerNameCtrl').value ? this.equimentFormGroup.get('newDealerNameCtrl').value.id: '';
            approveComplain.salesrepresentative = this.equimentFormGroup.get('salesRepresentativeCtrl').value ? this.equimentFormGroup.get('salesRepresentativeCtrl').value.name: '';
            approveComplain.installationdate = this.equimentFormGroup.get('installationDateCtrl').value ? this.equimentFormGroup.get('installationDateCtrl').value: '';
            
            approveComplain.skucode = this.existingComplaint.skucode;
            approveComplain.skuname = this.existingComplaint.skuname;
            approveComplain.brandname = this.existingComplaint.brandname;
            approveComplain.producttobereturn = this.existingComplaint.producttobereturn;
 
            approveComplain.custname = this.existingComplaint.custname;
            approveComplain.add1 = this.customerDetailFormGroup.get('customerAddress1Ctrl').value ? this.customerDetailFormGroup.get('customerAddress1Ctrl').value : '';
            approveComplain.add2 = this.customerDetailFormGroup.get('customerAddress2Ctrl').value ? this.customerDetailFormGroup.get('customerAddress2Ctrl').value : '';
            approveComplain.add3 = this.customerDetailFormGroup.get('customerAddress3Ctrl').value ? this.customerDetailFormGroup.get('customerAddress3Ctrl').value : '';
            
            approveComplain.pincode = this.customerDetailFormGroup.get('pinCodeCtrl').value ? this.customerDetailFormGroup.get('pinCodeCtrl').value : '';
            let area = this.customerDetailFormGroup.get('areaCtrl').value ? this.customerDetailFormGroup.get('areaCtrl').value : '';
            approveComplain.area = area.id;
            approveComplain.city = this.existingComplaint.city[0].id;
            approveComplain.state = this.existingComplaint.state[0].id;
            approveComplain.country = this.existingComplaint.country[0].id;
            approveComplain.appcomplaint = "true";
            approveComplain.servicevendor = this.customerDetailFormGroup.get('serviceVendorCtrl').value ? this.customerDetailFormGroup.get('serviceVendorCtrl').value.id : '';
            approveComplain.assigntoservvendor = "true";
            
 
          //  console.log(this.TAG,"Final Service Manager Form",approveComplain);
            let saveComplainResponse =  await this.customerService.saveComplain(approveComplain).toPromise();
          //  console.log(this.TAG,"Response From Save Complain",saveComplainResponse);
            if(saveComplainResponse){
               this.presentAlert("Compliant Report Details","",saveComplainResponse.msg);
            } else {
               this.presentAlert("Compliant Report Details","","Something went wrong please try again"+saveComplainResponse.msg);
            }
            this.commonFunction.loadingDismiss();
           }
          
    } catch (error) {
      this.commonFunction.loadingDismiss();
     // console.error(this.TAG,error);
    }
  }

}
