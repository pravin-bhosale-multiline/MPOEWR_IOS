import { CustomerServiceService } from './../../customer-service/customer-service.service';
import { ServiceEngineerVisitService } from './../service-engineer-visit.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validator } from 'src/provider/validator-helper';
import { BPaddress, NeworderService } from 'src/app/neworder/neworder.service';
import { ModalController, AlertController, Platform } from '@ionic/angular';
import { Commonfun } from 'src/provider/commonfun';
import { MatStepper } from '@angular/material';
import { Complain } from 'src/assets/model/complain';
import { LoginauthService } from 'src/app/login/loginauth.service';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Message } from 'src/provider/message-helper';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File as NativeFile } from '@ionic-native/file/ngx';
import { Constants } from 'src/app/common/Constants';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'app-service-engineer-visit-detail',
  templateUrl: './service-engineer-visit-detail.page.html',
  styleUrls: ['./service-engineer-visit-detail.page.scss'],
})
export class ServiceEngineerVisitDetailPage implements OnInit {

  @ViewChild("stepper", { static: false }) stepper: MatStepper;
  @ViewChild('selectedFile',{static: false}) selectedFile: ElementRef;

  // @ViewChild('spareRequiredFormGroup',{ static: false }) spareRequiredFormGroup;
  readonly TAG = "ServiceEngineerVisitDetailPage";

  isLinear = false;
  /**
   * 
   */
  detailsStepValid = false; equimentStepValid = false; customerDetailStepValid = false; engineerDetailStepValid = false; spareRequiredStepValid = false;
  /**
   * 
   */
  img: string=''
  fileUrl: any = '';
  isdesktop:boolean=false;errorCodeSelected;
  tempNewDealer;

  serviceManagerList; spareInstallationStepValid = false; proposedActionList; assignToCtrlVisible = false; closureAtFieldBtnVisible = false;
  proposedActionSelected; contracttypeSelected; productToBeReturn; engineerDetailsNextButtonVisible = false; assignToSelected;
  complaintStatusSelected; isClosureATFieldCtrlVisibleActive = false
  consumablesFormGroup: FormGroup; productCompliantFormGroup: FormGroup; detailFormGroup: FormGroup; spareRequiredFormGroup: FormGroup;
  equimentFormGroup: FormGroup; skuDetailsFormGroup: FormGroup; customerDetailFormGroup: FormGroup; venderFormGroup: FormGroup;
  engineerDetailsFormGroup: FormGroup; spareInstallationFormGroup: FormGroup; serviceManagerFormGroup: FormGroup; attachmentFormGroup: FormGroup
  spareOrderedTab:FormGroup;
  validation_messages = {
    'nameOfComplainer': [{ type: 'required', message: '*Please Enter Name of complainer.' }],
    'designation_of_complainer_mss': [{ type: 'required', message: '*Please Enter designation_of_complainer.' }],
    'mobileno': [{ type: 'required', message: '*Please Enter Contact No.' },
    { type: 'InvalidNumber', message: '*Please Enter Valid Contact No.' }],
    'email': [{ type: 'required', message: '*Please Enter Email.' },
    { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }],
    'complaintDescription': [{ type: 'required', message: '*Please Enter Complaint Description' }],
    'serialNo': [{ type: 'required', message: '*Please Enter Serial no .' }],
    'customerAddress1': [{ type: 'required', message: '*Please Enter Customer Address1' }],
    'customerAddress2': [{ type: 'required', message: '*Please Enter Customer Customer Address 2' }],
    'customerAddress3': [{ type: 'required', message: '*Please Enter Customer Customer Address 3' }],
    'pinCode': [{ type: 'required', message: '*Please Enter Pin Code' }],
    'area': [{ type: 'required', message: '*Please Select Your Area' }],
    'problemObservedMessage': [{ type: 'required', message: '*Please Enter Problem Observed' }],
    'fieldVisitRemarksMessage': [{ type: 'required', message: '*Please Enter Remark' }],
    'spareSKUCodeDropDownCtrlErrorMessage': [{ type: 'required', message: '*Please Select SKU Code' }],
    'proposedActionCtrlErrorMessage': [{ type: 'required', message: '*Please Select Proposed Action' }],
    'spareReceivedDateCtrlErrorMessage': [{ type: 'required', message: '*Please Select Spare Received Date' }],
    'complaintStatusCtrlErrorMessage': [{ type: 'required', message: '*Please Select Complaint Status' }],
    'completionDateCtrlErrorMessage': [{ type: 'required', message: '*Please Select Completion Date' }],
    'serviceAttendedCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Service Attended' }],
    'quantityCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Quantity' }],
    'errorCodeCtrlErrorMessage':[{ type: 'required', message: '*Please Select Error Code' }],
    'replacedSparePartSerialNoCtrlErrorMessage':[{ type: 'required', message: '*Please Select Enter Replaced Spare Part Serial No' }],
    'defectiveSparePartNoCtrlErrorMessage':[{ type: 'required', message: '*Please Select Enter Defective Spare Part No' }],
    'copSalesOrderReferenceDropDownCtrlErrorMessage':[{ type: 'required', message: '*Please Select COP Sales Order Reference' }],
    'skuCodeCtrlErrorMessage':[{ type: 'required', message: '*Please Select SKU Code' }],
    'spareReceivedQuantityCtrlErrorMessage':[{ type: 'required', message: '*Quantity can not be empty' }],
    

    
  };
  service: any; contractTypeList; complaintStatusList;imgcomp=[];;
  serviceEngSelected; dealerBillingAddressSelected; dealerShippingAddressSelected; spareSKUCodeSelected;errorCodeList;
  serviceEngList: any;punchOrderSuccess = false;
  isPunchOrderVisible = false; isClosureATFieldCtrlVisible = false; isSpareInstallationTabVisible = false; isSpareInstallClosedCtrlVisible = false;
  isProductCompliantTab = false; isConsumablesTab = false; isEquimentTab = false; isDealerBillingAddress = false; isDealerShippingAddress = false;
  dealerShippingAddressList: BPaddress[]; dealerBillingAddressList: BPaddress[]; spareSKUCodeList;
  isAttachmentTabVisible = false; isServiceManagerTabVisible = false; isSpareRequiredTabVisible = false;tempSpareCart;
  tempCartStatus = false;copSalesOrderReferenceSelected;copSalesOrderReferenceList;skuCodeSelected;skuCodeList;
  spareOrderedTabVisible = false;complaintStatusControlVisible = false;
  spareRequiredList;pdfFileSelectedURI;cardinalFileType;cardinalFileName;selectedFileUrl;
 
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private validator: Validator,
    public neworderservice: NeworderService, public serviceEngineerVisitService: ServiceEngineerVisitService,
    public modalController: ModalController, public loginService: LoginauthService,
    private commonFunction: Commonfun, private alertCtrl: AlertController, private customerService: CustomerServiceService,
    private imagePicker: ImagePicker,private camera: Camera, public msg:Message,public platform: Platform,
    private fileChooser: FileChooser,private filePath: FilePath,private file :NativeFile,private transfer: FileTransfer,private filePicker: IOSFilePicker
    ) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.service = JSON.parse(params.special);
        console.log(this.TAG,this.service);
      
      }
    });
    this.img='';
    this.fileUrl="";
    this.detailFormGroup = this.formBuilder.group({
      nameOfComplainerCtrl: [],
      desigOfComplainerCtrl: [],
      mobilenoCtrl: [],
      emailIDCtrl: [],
      complaintDescriptionCtrl: []
    });
    this.productCompliantFormGroup = this.formBuilder.group({

    });
    this.consumablesFormGroup = this.formBuilder.group({

    });
    this.equimentFormGroup = this.formBuilder.group({
      serialNoCtrl: [{ value: '', disabled: true }, Validators.required],
      dealerNameCtrl: [{ value: '', disabled: true }, Validators.required],
      errorCodeCtrl:[,Validators.required],
    });
    this.skuDetailsFormGroup = this.formBuilder.group({

    });
    this.customerDetailFormGroup = this.formBuilder.group({
      customerAddress1Ctrl: [{ value: '', disabled: true }, Validators.required],
      customerAddress2Ctrl: [{ value: '', disabled: true }, Validators.required],
      customerAddress3Ctrl: [{ value: '', disabled: true }, Validators.required],
      pinCodeCtrl: [{ value: '', disabled: true }, Validators.required],

      approveComplaintCtrl: [,],
      rejectComplaintCtrl: [,],
    });
    this.venderFormGroup = this.formBuilder.group({
      serviceEngineerNameCtrl: [],
      serviceEngMobilenoCtrl: [],
      serviceVendorRemarksCtrl: [],
      dateOfVisitCtrl: [],
    });
    this.engineerDetailsFormGroup = this.formBuilder.group({
      problemObservedCtrl: [, Validators.required],
      fieldVisitRemarksCtrl: [, Validators.required],
      proposedActionCtrl: [, Validators.required],
      dealerBillingAddressCtrl: [,],
      dealerShippingAddressCtrl: [,],
      assignToCtrl: [,],
      punchOrderCtrl: [,],
      closureATFieldCtrl: [,],
      complaintStatusCtrl:[]
    });
    this.spareInstallationFormGroup = this.formBuilder.group({
      
      copSalesOrderReferenceDropDownCtrl: [,Validators.required],
      skuCodeCtrl:[,Validators.required],
      spareReceivedDateCtrl: [, Validators.required],
      spareReceivedQuantityCtrl: [, Validators.required],
      
      completionDateCtrl: [, Validators.required],
      replacedSparePartSerialNoCtrl: [,Validators.required],
      serviceAttendedCtrl: [, Validators.required],
      defectiveSparePartNoCtrl: [,Validators.required],
     
     
  
      repairReportCtrl: [,],
      defSpareDocketNoCtrl: [,],
      defSpareCourierCtrl: [,],
      defSpareSentDateCtrl: [,],
      spareInstallClosedCtrl: [,]
     
      
    });
    this.serviceManagerFormGroup = this.formBuilder.group({
      serviceManagerRemarkCtrl: [, Validators.required],
      defectiveSparePartNoCtrl: [,],
      defectiveSparePartReceivedDateCtrl: [,],
      smartSolveRefNoCtrl: [, Validators.required],
      finalClosureCtrl: [,]
    });
    this.spareRequiredFormGroup = this.formBuilder.group({
      spareSKUCodeDropDownCtrl: [, Validators.required],
      quantityCtrl: [],
      dealerNameSpareRequiredCtrl: [],
      copSalesOrderReferenceCtrl: [,]
     

    })
    this.attachmentFormGroup = this.formBuilder.group({
      attachmentControlCtrl:[]
    })

    this.spareOrderedTab = this.formBuilder.group({

    });

    this.serviceManagerList = await (await this.serviceEngineerVisitService.getServiceManagerList()).toPromise();
    this.proposedActionList = await (await this.serviceEngineerVisitService.getProposedActionList()).toPromise();
    this.complaintStatusList = await (await this.serviceEngineerVisitService.getComplaintStatus()).toPromise();
    //  this.spareRequiredFormGroup.statusChanges
    //  .subscribe(val => this.onFormValid(val));

  }
  async ionViewWillEnter() {

    this.spareRequiredFormGroup.statusChanges.subscribe(
      result =>{
       // console.log("From Data",result);
        if(result=="VALID"){
        //  this.tempCartStatus = true;
        }
      }
  );



    this.tempNewDealer = this.service.newdealername;
    this.commonFunction.loadingPresent();
    if(!this.msg.isplatformweb){ 
       this.isdesktop = false;
     }
    else{
      this.isdesktop = true;
    }
    this.tempSpareCart = [];
    this.errorCodeList = await (await this.customerService.getErrorCodeList()).toPromise();
    this.proposedActionList = await (await this.serviceEngineerVisitService.getProposedActionList()).toPromise();
  //  console.log(this.TAG,"Proposed action list",this.proposedActionList);
    this.complaintStatusList = await (await this.serviceEngineerVisitService.getComplaintStatus()).toPromise();
    this.serviceManagerList = await (await this.serviceEngineerVisitService.getServiceManagerList()).toPromise();

    let billingAddressResponse = await (await this.neworderservice.getcustmerbillingaddress(this.service.dealerid)).toPromise();
    const response = billingAddressResponse['response'];
    var jsondata = response.data;
    this.dealerBillingAddressList = jsondata.filter(e => e.invoiceToAddress == true);
    this.dealerShippingAddressList = jsondata.filter(e => e.shipToAddress == true);

    if (this.dealerBillingAddressList.length == 1) {
      this.engineerDetailsFormGroup.controls["dealerBillingAddressCtrl"].setValue(this.dealerBillingAddressList[0]);
    }
    if (this.dealerShippingAddressList.length == 1) {
      this.engineerDetailsFormGroup.controls["dealerShippingAddressCtrl"].setValue(this.dealerShippingAddressList[0]);
    }
    


    //this.venderFormGroup.get('serviceEngineerNameCtrl').disable();
    //this.venderFormGroup.get('serviceEngMobilenoCtrl').disable();
  //  this.venderFormGroup.get('dateOfVisitCtrl').disable();
   // this.venderFormGroup.get('serviceVendorRemarksCtrl').disable();

    this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').disable();

    

    if (this.service.doctype[0].name == 'Product Compliant') {
      this.isProductCompliantTab = true;
      this.isConsumablesTab = false;
      this.isEquimentTab = false;
    } else if (this.service.doctype[0].name == 'Consumables') {
      this.isProductCompliantTab = false;
      this.isConsumablesTab = true;
      this.isEquimentTab = false;
    } else if (this.service.doctype[0].name == 'Equipment') {
      this.isProductCompliantTab = false;
      this.isConsumablesTab = false;
      this.isEquimentTab = true;
    }
    this.spareSKUCodeList = this.service.sparesku;
   // console.log(this.TAG, "Spare SKU Code", this.spareSKUCodeList);
    this.contractTypeList = await (await this.customerService.getContractTypeList()).toPromise();
    for (let i = 0; i < this.contractTypeList.length; i++) {
      if (this.contractTypeList[i].code == this.service.contracttype) {
        this.contracttypeSelected = this.contractTypeList[i].name;
      }
    }
   
    for (let i = 0; i < this.errorCodeList.length; i++) {
      if (this.errorCodeList[i].code == this.service.errorcode[0].code) {
        this.errorCodeSelected = this.errorCodeList[i];
      }
    }
   // this.errorCodeSelected = this.service.errorcode[0];

    if (this.service.producttobereturn === 'MSNR_N') {
      this.productToBeReturn = 'No';
    } else if(this.service.producttobereturn === 'MSNR_Y') {
      this.productToBeReturn = 'Yes';
    }

    if (!!this.service.closureatfield == true) {

      this.engineerDetailsFormGroup.controls["problemObservedCtrl"].setValue(this.service.probobserv);
      this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();

      this.engineerDetailsFormGroup.controls["fieldVisitRemarksCtrl"].setValue(this.service.fieldvisitremark);
      this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();

      for (let i = 0; i < this.proposedActionList.length; i++) {
        if (this.proposedActionList[i].code == this.service.proposedaction.code) {
          this.proposedActionSelected = this.proposedActionList[i];
          this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
        }
      }
      if (this.service.proposedaction.code == 'SR') {
        this.isDealerBillingAddress = true;
        this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
        this.isDealerShippingAddress = true;
        this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
      }
      this.assignToCtrlVisible = true;

     for (let i = 0; i < this.serviceManagerList.length; i++) {
        if (this.serviceManagerList[i].id == this.service.assigntofieldvisit.id) {
          this.assignToSelected = this.serviceManagerList[i];
          this.engineerDetailsFormGroup.get('assignToCtrl').disable();

        }
      }

      this.engineerDetailsNextButtonVisible = true;
      this.isServiceManagerTabVisible = true;
      this.equimentFormGroup.get('errorCodeCtrl').disable();

      setTimeout( () => {
       
        for (let i = 0; i < this.dealerBillingAddressList.length; i++) {
             if (this.dealerBillingAddressList[i].id == this.service.engineerdetails.dealerbilladd.id) {
               this.dealerBillingAddressSelected = this.dealerBillingAddressList[i];
               this.isDealerBillingAddress  = true;
              this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
             }
           }
  
             for (let i = 0; i < this.dealerShippingAddressList.length; i++) {
             if (this.dealerShippingAddressList[i].id == this.service.engineerdetails.dealershipadd.id) {
               this.dealerShippingAddressSelected = this.dealerShippingAddressList[i];
               this.isDealerShippingAddress = true;
               this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
             }
         }
      },300);



    }

    



   try {
     //New Change
    if(!!this.service.closureatfield == !true && !!this.service.engineerdetails.proposedaction && Object.keys(this.service.engineerdetails.proposedaction).length != 0){
      this.engineerDetailsFormGroup.controls["problemObservedCtrl"].setValue(this.service.engineerdetails.probobserv);
      this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();

      this.engineerDetailsFormGroup.controls["fieldVisitRemarksCtrl"].setValue(this.service.engineerdetails.fieldvisitremark);
      this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();

      for (let i = 0; i < this.proposedActionList.length; i++) {
        if (this.proposedActionList[i].code == this.service.engineerdetails.proposedaction.code) {
          this.proposedActionSelected = this.proposedActionList[i];
          this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
        }
      }
      setTimeout( () => {
       
        for (let i = 0; i < this.dealerBillingAddressList.length; i++) {
             if (this.dealerBillingAddressList[i].id == this.service.engineerdetails.dealerbilladd.id) {
               this.dealerBillingAddressSelected = this.dealerBillingAddressList[i];
               this.isDealerBillingAddress  = true;
              this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
             }
           }
  
             for (let i = 0; i < this.dealerShippingAddressList.length; i++) {
             if (this.dealerShippingAddressList[i].id == this.service.engineerdetails.dealershipadd.id) {
               this.dealerShippingAddressSelected = this.dealerShippingAddressList[i];
               this.isDealerShippingAddress = true;
               this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
             }
         }
      },300);
         
      
      this.isSpareRequiredTabVisible = true;
      this.isSpareInstallationTabVisible = true;
      this.complaintStatusControlVisible = true;

      this.copSalesOrderReferenceList = this.service.orders;
      this.spareRequiredList = this.service.spare_required_list;
      if(!!this.spareRequiredList){
        this.spareOrderedTabVisible = true;
      }
   

     // this.spareSKUCodeList =  this.service.sparerequired;
     
     
      if(this.service.sparerequired.sparerequest == false){
        // this.spareRequiredFormGroup.valid = true;
         this.punchOrderSuccess = false;
         this.spareRequiredFormGroup.enable();
         this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').enable();
         this.spareRequiredFormGroup.get('quantityCtrl').enable();
         this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').enable();
        // console.log("Form Data",this.spareRequiredFormGroup);
       } else {
         this.punchOrderSuccess = true;
       }

    }
   } catch (error) {
    // console.log(this.TAG,error);
   }
   
   this.commonFunction.loadingDismiss();
   
    
  }
  public refreshPage() {
    try {

    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public matDetailSettper(event) {
    try {

    } catch (error) {
     // console.error(this.TAG, error);
    }
  }
  public matSettperProductCompliant(event) {
    try {

    } catch (error) {
     // console.error(this.TAG, error);
    }
  }
  public matSettperConsumables(event) {
    try {

    } catch (error) {
     // console.error(this.TAG, error);
    }
  }
  public matSettperSKUDetails(value) {
    try {

    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public matSettperEquiment(event) {
    try {
          this.equimentStepValid = true;
    } catch (error) {
     // console.log(this.TAG, error);
    }
  }
  public matSettperServiceManager() {
    try {

    } catch (error) {
     // console.log(this.TAG, error);
    }
  }
  public matSettperSpareRequired(selectedValue) {
    try {
      this.spareRequiredStepValid = true;
     // console.log("Form Spare Required", selectedValue);
    } catch (error) {
    //  console.log(this.TAG, error);
    }
  }
  public matSettperEngineerDetails() {
    try {
      this.engineerDetailStepValid = true;
    } catch (error) {
     // console.log(this.TAG, error);
    }
  }
  public errorCodeSelectedChange(selected){
    try {
        //  console.log(this.TAG,selected);
          this.service.errorcode[0] = selected;
    } catch (error) {
      
    }
  }
  public serviceEngSelectedChange(serviceEngSelected) {
    try {

    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public approveServiceCheckbox(event) {
    try {
    //  console.log(this.TAG, "CheckBox Value", event);


    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public rejectServiceCheckbox() {
    try {

    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public punchOrderCheckbox(event) {
    try {
      if (event) {
        this.isSpareInstallationTabVisible = true;
      } else {
        this.isSpareInstallationTabVisible = false;
      }
    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public proposedActionClick(actionSelected) {
    try {
     // console.log(this.TAG, "Proposed action selected", actionSelected);
      
      if (this.dealerBillingAddressList.length == 1) {
        this.engineerDetailsFormGroup.controls["dealerBillingAddressCtrl"].setValue(this.dealerBillingAddressList[0]);
      }
      if (this.dealerShippingAddressList.length == 1) {
        this.engineerDetailsFormGroup.controls["dealerShippingAddressCtrl"].setValue(this.dealerShippingAddressList[0]);
      }
     
      if (actionSelected.code == 'SR') {
        this.isPunchOrderVisible = true;
        this.isClosureATFieldCtrlVisible = false;
        this.isSpareRequiredTabVisible = true;
        this.isDealerBillingAddress = true;
        this.isDealerShippingAddress = true;
        this.isSpareInstallationTabVisible = false;
        this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').disable();
       
        setTimeout( () => {
          if (this.dealerBillingAddressList.length == 1) {
            this.engineerDetailsFormGroup.controls["dealerBillingAddressCtrl"].setValue(this.dealerBillingAddressList[0]);
          }
          if (this.dealerShippingAddressList.length == 1) {
            this.engineerDetailsFormGroup.controls["dealerShippingAddressCtrl"].setValue(this.dealerShippingAddressList[0]);
          }
          },300);
        
        
        
       // this.isAttachmentTabVisible = false;
        this.engineerDetailsNextButtonVisible = true;
        this.assignToCtrlVisible = false;
      } else if (actionSelected.code == 'SNR') {
        this.isPunchOrderVisible = false;
      //  this.isClosureATFieldCtrlVisible = true;
      //  this.isAttachmentTabVisible = true;
        this.isSpareInstallationTabVisible = false;
        this.isDealerBillingAddress = false;
        console.log("Bill",this.isDealerBillingAddress);
        this.isDealerShippingAddress = false;
        this.isSpareRequiredTabVisible = false;
        this.complaintStatusControlVisible = false;
        
        this.assignToCtrlVisible = true;
      } else if (actionSelected.code == 'NSCT') {
        this.isPunchOrderVisible = false;
        this.isClosureATFieldCtrlVisible = true;
        this.isSpareInstallationTabVisible = false;
        this.isDealerBillingAddress = false;
        console.log("Bill",this.isDealerBillingAddress);
        this.isDealerShippingAddress = false;
        this.isSpareRequiredTabVisible = false;
       // this.isAttachmentTabVisible = true;
        this.assignToCtrlVisible = true;
        this.complaintStatusControlVisible = false;
      }
    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public complaintStatusClick(complaintStatusSelected) {
    try {

     // console.log(this.TAG, complaintStatusSelected);
      if (complaintStatusSelected.code == 'NS') {
        this.isSpareInstallClosedCtrlVisible = false;
        this.spareRequiredFormGroup.reset();
       
       if(!!this.service.newdealername) {
        this.spareRequiredFormGroup.controls.dealerNameSpareRequiredCtrl.patchValue(this.service.newdealername);
       } else {
        this.spareRequiredFormGroup.controls.dealerNameSpareRequiredCtrl.patchValue(this.service.dealername);
       }
      
        this.punchOrderSuccess = false;
        this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').enable();
        this.spareRequiredFormGroup.get('quantityCtrl').enable();
        this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').enable();
        
        //New Change
        this.isSpareRequiredTabVisible = true;
        this.isSpareInstallationTabVisible = true;
        this.complaintStatusControlVisible = true;
        this.assignToCtrlVisible = false;
        


 
      } else if (complaintStatusSelected.code == 'CAHTSC') {
        this.isSpareInstallClosedCtrlVisible = false;
        this.assignToCtrlVisible = true;

        this.spareOrderedTabVisible = false;

        this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();
        this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();
        this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
        this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
        this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();

        //New Change
        this.isSpareRequiredTabVisible = false;
        this.isSpareInstallationTabVisible = false;
        this.assignToCtrlVisible = true;

      } else if (complaintStatusSelected.code == 'CL') {
        this.isSpareInstallClosedCtrlVisible = true;
        this.assignToCtrlVisible = true;
        this.spareOrderedTabVisible = false;
        this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();
        this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();
        this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
        this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
        this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();

        //New Change
        this.isSpareRequiredTabVisible = false;
        this.isSpareInstallationTabVisible = false;
        this.assignToCtrlVisible = true;
        
      }
      
    } catch (error) {
    //  console.log(this.TAG, error);
    }
  }
  public spareInstallClosedCheckbox(value) {
    try {
     // console.log(this.TAG, "Spare Install Closed", value);
      if (value) {
        //this.closureAtFieldBtnVisible = true;
      //  this.assignToCtrlVisible = true;
      } else {
        this.closureAtFieldBtnVisible = false;
       // this.assignToCtrlVisible = false;
      }


    } catch (error) {
    //  console.error(this.TAG, error);
    }
  }
  public dealerBillingAddressClick(data) {
    try {

    } catch (error) {
    //  console.log(this.TAG, error);
    }
  }
  public assignToClick() {
    try {
     // console.log("assignToClick Fired", value);
      //this.closureAtFieldBtnVisible = true;
      this.isAttachmentTabVisible = true;
      this.equimentFormGroup.get('errorCodeCtrl').disable();
      


    } catch (error) {
    //  console.log(this.TAG, error);
    }
  }
  public dealerShippingAddressClick() {
    try {

    } catch (error) {
    //  console.log(this.TAG, error);
    }
  }
  public spareSKUCodeClick(selectedSpare) {
    try {
          console.log(this.TAG,selectedSpare);
          this.spareRequiredFormGroup.controls["quantityCtrl"].setValue("1");
    } catch (error) {
     // console.log(this.TAG, error);
    }
  }
  public onFormValid(val) {
    try {
    //  console.log("Attached Form Status", val);
      this.isClosureATFieldCtrlVisibleActive = true;
    } catch (val) {

    }
  }
  public finalClosureCheckbox(finalClosureValue) {
    try {
    //  console.log(this.TAG, finalClosureValue);
      if (finalClosureValue) {
        this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').disable();
        this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').disable();
        this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').disable();
        this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').disable();
        this.isClosureATFieldCtrlVisible = true;
      } else {
        this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').enable();
        this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').enable();
        this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').enable();
        this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').enable();
        this.isClosureATFieldCtrlVisible = false;
      }

    } catch (error) {
    //  console.log(this.TAG, error);
    }
  }
  async presentAlert(Header: string, SubHeader: string, Message: string) {
    const alert = await this.alertCtrl.create({
      header: SubHeader,
      subHeader: '',
      message: Message,
      buttons: [{
        text: "OK",
        handler: (ok) => {
          if (Header == 'closer_success') {
            this.router.navigateByUrl('/service-engineer-visit');
          } else {
           // console.log(this.TAG, "In Present Alert Error");
          }

          
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  async presentSpareInstallAlert(Header: string, SubHeader: string, Message: string) {
    const alert = await this.alertCtrl.create({
      header: SubHeader,
      subHeader: '',
      message: Message,
      buttons: [{
        text: "OK",
        handler: (ok) => {
         
          let temp =  this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.code : '';
          if(temp=='NS'){
           // this.isSpareRequiredTabVisible = false;
            this.isSpareInstallationTabVisible = false;
            this.spareInstallationFormGroup.reset();
            this.stepper.previous();
          } else {
            //this.stepper.previous();
           // 
            this.isSpareRequiredTabVisible = false;
            this.isSpareInstallationTabVisible = false;
            this.isAttachmentTabVisible = true;
           
          }
         
         
         
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  async ChosePic() {
    const alert = await this.alertCtrl.create({
      header: 'Select Option',
      message: "Select Option to get Picture.",
      buttons: [
        {
          text: 'Gallery',
          handler: data => {
            this.getimage();
          }
        },
        {
          text: 'Camera',
          handler: data => {
            this.takePicture();
          }
        },
        {
          text: 'PDF',
          handler: data => {
            this.attachPDF();
          }
        }
      ]
    });

    await alert.present();
  }
  public attachPDF(){
    try {
            if(this.platform.is('android')){
              let filter={ "mime": "application/pdf" }
              this.fileChooser.open()
              .then(uri => {
                console.log(uri);
                this.filePath.resolveNativePath(uri).then(filePathResult =>{
                  console.log(this.TAG,"Selected fileInfo",filePathResult);
                  this.file.resolveLocalFilesystemUrl(filePathResult).then(fileEntry=>{

                    console.log(this.TAG,"Selected fileInfo fileEntry",fileEntry);

                    this.getFileSize(fileEntry).then((metadata:any) =>{
                        if(metadata.size / 1024 / 1024>3){
                          console.log(this.TAG,"File Size Too Large");
                          this.commonFunction.presentAlert("New Order","Validation","File size must be less than Equal to 3 MB");
                          
                       
                        } else {
                          console.log(this.TAG,"File Size IS OK");
                          this.closureAtFieldBtnVisible = true;
                         
                         
                          this.cardinalFileName   = filePathResult.substring(filePathResult.lastIndexOf("/") + 1);
                          this.cardinalFileType   = filePathResult.substring(filePathResult.lastIndexOf(".") + 1);
                          this.selectedFileUrl = uri;
                          let temp= { "uri":uri,
                                      "file_name":this.cardinalFileName,
                                      "file_type":this.cardinalFileType,
                                      "size": metadata.size
                                    }
                          this.pdfFileSelectedURI = [temp];
                          // if(this.pdfFileSelectedURI ==undefined || this.pdfFileSelectedURI == null){
                          //   this.pdfFileSelectedURI = [temp];
                          // } else {
                          //   this.pdfFileSelectedURI.push(temp);
                          // }
                                          
                        }
                    });
                 }).catch(error=>{
                    
                  });
                 });


              })
              .catch(e => console.log(e));

            } else if(this.platform.is('ios')){
              this.filePicker.pickFile()
              .then(uri => {
                this.file.resolveLocalFilesystemUrl('file:///'+uri).then(fileEntry=>{
                  console.log(this.TAG,"Selected fileInfo fileEntry",fileEntry);
                    this.getFileSize(fileEntry).then((metadata:any) =>{
                        if(metadata.size / 1024 / 1024>3){
                          console.log(this.TAG,"File Size Too Large");
                          this.commonFunction.presentAlert("New Order","Validation","File size must be less than Equal to 3 MB");
                          
                      
                        } else {
                          console.log(this.TAG,"File Size IS OK");
                          this.closureAtFieldBtnVisible = true;
                          this.cardinalFileName   = uri.substring(uri.lastIndexOf("/") + 1);
                          this.cardinalFileType   = uri.substring(uri.lastIndexOf(".") + 1);
                          this.selectedFileUrl = uri;
                          let temp= { "uri":uri,
                                      "file_name":this.cardinalFileName,
                                      "file_type":this.cardinalFileType,
                                      "size": metadata.size
                                    }
                          this.pdfFileSelectedURI = [temp];
                          // if(this.pdfFileSelectedURI ==undefined || this.pdfFileSelectedURI == null){
                          //   this.pdfFileSelectedURI = [temp];
                          // } else {
                          //   this.pdfFileSelectedURI.push(temp);
                          // }
                                          
                        }
                    });
                }).catch(error=>{
                
                });
              })
            .catch(err => console.log('File Picker Error', err));
            
            
            }
    } catch (error) {
      console.log(this.TAG, error);
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
  uploadcompImage(str:any){	
    try {	
      for (var k = 0; k < str.target.files.length; k++) 	
      {	
        this.inneruploadcompImage(str,k)	
        this.timeout(500); 	
        }	
        } catch (error) {	
        //  console.log("Catch",error);	
        }	
  }
  timeout(ms) { //pass a time in milliseconds to this function	
    return new Promise(resolve => setTimeout(resolve, ms));	
  }
  
  public inneruploadcompImage(str,k){	
    var file:File=str.target.files[k]
    console.log(this.TAG,"SElected File DATA",str.target.files[k]);
    
    this.cardinalFileName   = str.target.files[0].name.substring(str.target.files[0].name.lastIndexOf("/") + 1);
    this.cardinalFileType   = str.target.files[0].name.substring(str.target.files[0].name.lastIndexOf(".") + 1);
    console.log("File Selected name",this.cardinalFileName);
    console.log("File Selected type",this.cardinalFileType);

    if(!!this.cardinalFileType && this.cardinalFileType == 'pdf'){
      this.imgcomp = str.target.files[0];
      let temp= { "uri":"tst",
                  "file_name":this.cardinalFileName,
                  "file_type":this.cardinalFileType,
                  "size":(str.target.files[0].size / (1024*1024)).toFixed(2)
                }
                this.pdfFileSelectedURI = [temp];
                // if(this.pdfFileSelectedURI ==undefined || this.pdfFileSelectedURI == null){
              //   this.pdfFileSelectedURI = [temp];
              // } else {
              //   this.pdfFileSelectedURI.push(temp);
              // }
            console.log(this.TAG,"File Size",str.target.files[0].size / 1024 / 1024);
      if(str.target.files[0].size / 1024 / 1024>3){
        console.log(this.TAG,"File Size Too Large");
        this.commonFunction.presentAlert("New Order","Validation","File size must be less than Equal to 3 MB");
        this.imgcomp = null;
        this.cardinalFileName = "";
        this.cardinalFileType = "";
        this.pdfFileSelectedURI = [];
        this.selectedFile.nativeElement.value = '';
      } else {
            
            var myreader:FileReader = new FileReader();	
            myreader.onloadend = (e)=> {	
            var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');	
            var existinglength=this.imgcomp.length;
            this.imgcomp[existinglength] = b64;	
            this.equimentFormGroup.get('errorCodeCtrl').disable();
            this.closureAtFieldBtnVisible = true;
      
        };	
        myreader.readAsDataURL(file);
      }
    

    } else {
          this.imgcomp = [];
          this.cardinalFileType ="image";
          this.pdfFileSelectedURI = [];
          var file:File=str.target.files[k]	
          var myreader:FileReader = new FileReader();	
          myreader.onloadend = (e)=> {	
          var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');	
          var existinglength=this.imgcomp.length;
          this.imgcomp[existinglength] = b64;	
          this.equimentFormGroup.get('errorCodeCtrl').disable();
          this.closureAtFieldBtnVisible = true;
          };	
          myreader.readAsDataURL(file);

    }
  
    	
   	
  }
  async ImageViewr(img:any,rowcompliancedata?:any) {
    var msg="";
    if(rowcompliancedata!=null){
        msg='<div>' +
        '<img class="viewImagecss" src="data:image/png;base64,'+img+'">' +
        '</div>'
        
    }
    else{
      msg= '<div>' +
      '<img class="viewImagecss" src="'+img+'">' +
      '</div>'
    }
    const alert = await this.alertCtrl.create({
     
     
  
      message: msg,
      buttons: [
      {text:'Remove',
      handler: data => {
       //this.POimg64=null
       if(rowcompliancedata!=null){
     this.imgcomp=this.imgcomp.filter(item => item!=img);
  
       }
       else{
         this.fileUrl=null;
       }
      }
    },
    {text:'OK'}
    ],
      
  
    });
  
    await alert.present();
  }
  uploadImage(str:any){
    try {
      
      var file:File=str.target.files[0]
     var myreader:FileReader = new FileReader();
     myreader.onloadend = (e)=> {
     var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
     this.fileUrl=myreader.result;
     this.img=b64;
  
    };
  myreader.readAsDataURL(file);
    } catch (error) {
      
    }
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth:1500,
      targetHeight:1500
    };
    this.camera.getPicture(options).then((imageData) => {
      this.fileUrl = 'data:image/jpeg;base64,' + imageData;
      this.cardinalFileType = "image";
      if(!!this.imgcomp){
        this.imgcomp = this.imgcomp.concat(imageData);
        this.closureAtFieldBtnVisible = true;
        this.equimentFormGroup.get('errorCodeCtrl').disable();
      }else {
        this.imgcomp = imageData;
      }
     // console.log("Cameara image",this.img);
    });
  }
  //Select Image from library	
  public getimage() {

    const options: ImagePickerOptions = {
      quality: 50,
      outputType: 1,
      width: 1500,
      height: 1500
    };
    this.imagePicker.getPictures(options).then((imageData) => {
      //  console.log("this is image date",imageData);
       // this.assignToCtrlVisible = true;
       this.cardinalFileType = "image";
       this.closureAtFieldBtnVisible = true;
       this.equimentFormGroup.get('errorCodeCtrl').disable();
        if(!!this.imgcomp){
          this.imgcomp = this.imgcomp.concat(imageData);
         
        }else {
          this.imgcomp = imageData;
        }
       	
    }, (err) => {
    //  console.log(this.TAG, err);
    });

  }
  public async punchedCOPSalesOrder() {
    try {
    //  console.log(this.TAG, "punched COP Sales Order");
      this.commonFunction.loadingPresent();
      let spareComplain: Complain = new Complain();

      spareComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
      spareComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
      spareComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
      spareComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
      spareComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
      spareComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';
      spareComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
      spareComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
      spareComplain.dealername = this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value ? this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value : '';
      spareComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';
      spareComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
      spareComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '',
        spareComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : ''
      spareComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
      spareComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
      
      if(!!this.service.sparerequired.sparerequiredid){
        spareComplain.sparerequestid = this.service.sparerequired.sparerequiredid;
      } else {
        spareComplain.sparerequestid = "";
      }

      let data = {
        "complaintno": this.service.complaintno,
        "complaintid":this.service.complaintid,
        "billadd": spareComplain.dealer_billing_address,
        "shippadd": spareComplain.dealer_shipping_address,
        "proposeactn": spareComplain.proposed_action,
        "assigntofieldvisit": spareComplain.assign_to,
        "problemobserv": spareComplain.problem_observed,
        "fieldvisit": spareComplain.field_visit_remarks,
        "spares": this.tempSpareCart,
        "activity": this.loginService.selectedactivity.id
      }
      

      let punchOrderResponse = await (await this.serviceEngineerVisitService.punchedCOPSalesOrderPost(data)).toPromise();
    //  console.log(this.TAG, "Spare Request Log", punchOrderResponse);
      this.commonFunction.loadingDismiss();
      if (punchOrderResponse) {
         console.log(this.TAG,"Spare Request Log",punchOrderResponse);
        this.isSpareInstallationTabVisible = true;
        this.complaintStatusControlVisible = true;
        this.commonFunction.presentAlert("Field Visit Details", "Spare Order Status", punchOrderResponse.msg);
        this.spareRequiredFormGroup.controls["copSalesOrderReferenceCtrl"].setValue(punchOrderResponse.orderno);
        this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').disable();
        this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
     
        //  this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').disable();
      //   this.spareRequiredFormGroup.get('quantityCtrl').disable();
      //   this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').disable();
        this.punchOrderSuccess = true;
        this.tempCartStatus = false;
        this.tempSpareCart = [];
        let tempComplainDetail:any = await this.serviceEngineerVisitService.getCustomerServiceDetailById(this.service.complaintid).toPromise();
        console.log(this.TAG, "TEST Single",tempComplainDetail);
        this.copSalesOrderReferenceList = tempComplainDetail[0].orders;
        if(!!this.copSalesOrderReferenceList){
          this.spareOrderedTabVisible = true;
        } 
        this.spareRequiredList = tempComplainDetail[0].spare_required_list;
        if(!!this.spareRequiredList){
          this.spareOrderedTabVisible = true;
        }

        console.log(this.TAG, "TEST Single",this.copSalesOrderReferenceList);

      } else {
        this.commonFunction.presentAlert("Field Visit Details", "Spare Order Status", "Something went wrong");
      }
    } catch (error) {
      this.isSpareInstallationTabVisible = true;
      this.complaintStatusControlVisible = true
      this.commonFunction.loadingDismiss();
    //  console.log(this.TAG, error);
      this.commonFunction.presentAlert("Field Visit Details", "Spare Order Status", error.error);
    }
  }
  public async spareInstallationSaveToOB(event) {
    try {

      this.commonFunction.loadingPresent();
      let spareInstallComplain: Complain = new Complain();
      spareInstallComplain.complaint_no = this.service.complaintno;
      spareInstallComplain.complaintid =  this.service.complaintid;
      spareInstallComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
      spareInstallComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
      spareInstallComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';

      spareInstallComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
      spareInstallComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
      
      //New Change
      //spareInstallComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.code : '';
      
    //  spareInstallComplain.orderid = this.spareInstallationFormGroup.get('copSalesOrderReferenceDropDownCtrl').value ? this.spareInstallationFormGroup.get('copSalesOrderReferenceDropDownCtrl').value.orderno : '';
      spareInstallComplain.orderid = this.skuCodeSelected.orderid;
    
      spareInstallComplain.sapreskuid = this.spareInstallationFormGroup.get('skuCodeCtrl').value ? this.spareInstallationFormGroup.get('skuCodeCtrl').value.sapreskuid : '';
      spareInstallComplain.qty = this.spareInstallationFormGroup.get('spareReceivedQuantityCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedQuantityCtrl').value : '';
      spareInstallComplain.sparerequiredid = this.skuCodeSelected.sparerequiredid;

      spareInstallComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
      spareInstallComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
      spareInstallComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
      spareInstallComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
      spareInstallComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
      spareInstallComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
      spareInstallComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
      spareInstallComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';


      console.log(this.TAG, "Spare Install Form", spareInstallComplain);
      let saveComplainResponse = await this.serviceEngineerVisitService.spareInstallSaveToOB(spareInstallComplain).toPromise();
    //  console.log(this.TAG, "Response From Spare Install", saveComplainResponse);
      if (saveComplainResponse) {
        this.presentSpareInstallAlert("Field Visit Details", "Spare Install", saveComplainResponse.msg);
        
        let tempComplainDetail:any = await this.serviceEngineerVisitService.getCustomerServiceDetailById(this.service.complaintid).toPromise();
        console.log(this.TAG, "TEST Single",tempComplainDetail);
        this.copSalesOrderReferenceList = tempComplainDetail[0].orders;
        this.engineerDetailsFormGroup.controls['complaintStatusCtrl'].reset();
        this.spareInstallationFormGroup.reset();      
        this.stepper.selectedIndex =   5;
        this.commonFunction.loadingDismiss();
         
       
       
       
        
      } else {
        this.commonFunction.loadingDismiss();
        this.commonFunction.presentAlert("Field Visit Details", "Spare Install", "Something went wrong please try again" + saveComplainResponse.msg);
      }

      this.commonFunction.loadingDismiss();
      
      
      
      this.spareInstallationStepValid = true;
    } catch (error) {
      this.commonFunction.loadingDismiss();
    //  console.log(this.TAG, error);
      this.commonFunction.presentAlert("Field Visit Details", "Spare Install", "Something went wrong please try again" + error.error);
    }
  }
  public async closureAtFieldBtnClick() {
    try {
      // this.isSpareInstallationTabVisible = true;

      this.commonFunction.loadingPresent();
      let finalComplain: Complain = new Complain();
      finalComplain.complaint_no = this.service.complaintno;
      finalComplain.complaintid = this.service.complaintid;
      finalComplain.complaint_date = this.service.complaintdate;
      finalComplain.doctype = this.service.doctype[0].id;
      finalComplain.nameofcomplainer = this.service.nameofcomplainer;
      finalComplain.desofcomplnr = this.service.desofcomplnr[0].id;
      finalComplain.contnumber = this.service.contnumber;
      finalComplain.email = this.service.email;
      finalComplain.eventdate = this.service.eventdate;
    
      finalComplain.description = this.service.description;

      finalComplain.serialno = this.service.serialno;
      finalComplain.srnoequipment = this.service.srnoequipment;
      finalComplain.contracttype = this.service.contracttype;
      finalComplain.invoiceno = this.service.invoiceno;
      finalComplain.invoicedate = this.service.invoicedate;
      finalComplain.errorcode = this.service.errorcode[0].id;
      finalComplain.dealername = this.service.dealername;
      finalComplain.salesrepresentative = this.service.sales_representative ? this.service.sales_representative : "";
      finalComplain.installationdate = this.service.installationdate;

      finalComplain.skucode = this.service.skucode;
      finalComplain.skuname = this.service.skuname;
      finalComplain.brandname = this.service.brandname;
      finalComplain.producttobereturn = this.service.producttobereturn;

      finalComplain.custname = this.service.custname;
      finalComplain.add1 = this.service.add1;
      finalComplain.add2 = this.service.add2;
      finalComplain.add3 = this.service.add3;
      finalComplain.pincode = this.service.pincode;
      finalComplain.area = this.service.area[0].id;
      finalComplain.city = this.service.city[0].id;
      finalComplain.state = this.service.state[0].id;
      finalComplain.country = this.service.country[0].id;


      finalComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';

      finalComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
      finalComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
      finalComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
      finalComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
      finalComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';

      if (this.isSpareRequiredTabVisible) {
        finalComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
        finalComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
        finalComplain.dealername = this.spareRequiredFormGroup.get('dealerNameCtrl').value ? this.spareRequiredFormGroup.get('dealerNameCtrl').value : '';
        finalComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';

      }
      if (this.isSpareInstallationTabVisible) {
        finalComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
        finalComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
        finalComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.code : '';
        finalComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
        finalComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
        finalComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
        finalComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
        finalComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
        finalComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
        finalComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
        finalComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';
      }
      finalComplain.servicevendorremark = this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value ? this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value : '';
      //finalComplain.servicevendorremark = this.service.serivevendorremark;
      finalComplain.defective_spare_part_no = this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value : '';
      finalComplain.defective_spare_part_received_date = this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value : '';
      finalComplain.smart_solve_ref_no = this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value ? this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value : '';
      finalComplain.final_closure = this.serviceManagerFormGroup.get('finalClosureCtrl').value ? this.serviceManagerFormGroup.get('finalClosureCtrl').value : '';
      finalComplain.activity = this.loginService.selectedactivity.id;
     
      if(!!this.selectedFileUrl){
       
       } else {
            finalComplain.imagebase64 = this.imgcomp;
       }
     
      finalComplain.closureatfield = "true";
      finalComplain.complaint_status = this.engineerDetailsFormGroup.get('complaintStatusCtrl').value ? this.engineerDetailsFormGroup.get('complaintStatusCtrl').value.code : '';
      finalComplain.file_type = this.cardinalFileType;
     // finalComplain.file_selected_uri = this.pdfFileSelectedURI.uri;
      //finalComplain.imagebase64 = this.imgcomp[0];
   
   
 
     
      let saveComplainResponse:any;
      console.log(this.TAG, "Final Service Manager Form", finalComplain);
      if(this.platform.is('android') && this.cardinalFileType == "pdf"){
        console.log(this.TAG, "Android And File Type PDF");
        let oneObject:any = {
          'complaintno':finalComplain.complaint_no,
          'complaintid':finalComplain.complaintid,
          'doctype':finalComplain.doctype,
          'nameofcomplainer':finalComplain.nameofcomplainer,
          'desofcomplnr':finalComplain.desofcomplnr,
          'contnumber':finalComplain.contnumber,
          'email':finalComplain.email,
          'eventdate':finalComplain.eventdate,
          'serialno':finalComplain.serialno,
          "srnoequipment":finalComplain.srnoequipment,
          "contracttype":finalComplain.contracttype,
          'invoiceno':finalComplain.invoiceno,
          "invoicedate":finalComplain.invoicedate,
          "errorcode":finalComplain.errorcode,
          "dealername":finalComplain.dealername,
          "installationdate":finalComplain.installationdate,
          "skucode":finalComplain.skucode,
          "skuname":finalComplain.skuname,
          "brandname":finalComplain.brandname,
          "producttobereturn":finalComplain.producttobereturn,
          "custname":finalComplain.custname,
          "add1":finalComplain.add1,
          "add2":finalComplain.add2,
          "add3":finalComplain.add3,
          "pincode":finalComplain.pincode,
          "area":finalComplain.area,
          "city":finalComplain.city,
          "state":finalComplain.state,
          "country":finalComplain.country,
          "description":finalComplain.description,
          "lotno":finalComplain.lotno ? finalComplain.lotno : '',
          "appcomplaint":finalComplain.appcomplaint,
          "assigntoservvendor":finalComplain.assigntoservvendor,
          "salesrepresentative":finalComplain.salesrepresentative,
          "newdealername":finalComplain.newdealername,
          "serviceengname":finalComplain.serviceengname,
          "serviceengcontact":finalComplain.serviceengcontact,
          "visitdate":finalComplain.visitdate,
          "assigntoservmg":finalComplain.assigntoservmg,
          "activity":this.loginService.selectedactivity.id,
          "Appect":finalComplain.Appect,
          "problemobserv":finalComplain.problem_observed,
          "fieldvisit":finalComplain.field_visit_remarks,
          "proposeactn":finalComplain.proposed_action,
          "assigntofieldvisit":finalComplain.assign_to,
          "closureatfield":finalComplain.closureatfield,
          "compltstatus":finalComplain.complaint_status,
          "imagebase64":finalComplain.imagebase64,
          "file_type": this.cardinalFileType
        }
      
        saveComplainResponse = await this.serviceEngineerVisitService.uploadPDFFileServiceAndroidiOS({"postData":JSON.stringify(oneObject)},this.selectedFileUrl).toPromise();
        console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
        if (saveComplainResponse) {
          this.presentAlert("closer_success", "Field Visit Details", saveComplainResponse.msg);
        } else {
          this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + saveComplainResponse.msg);
        }
      } else if(this.platform.is('ios') && this.cardinalFileType == "pdf"){

        let oneObject:any = {
          'complaintno':finalComplain.complaint_no,
          'complaintid':finalComplain.complaintid,
          'doctype':finalComplain.doctype,
          'nameofcomplainer':finalComplain.nameofcomplainer,
          'desofcomplnr':finalComplain.desofcomplnr,
          'contnumber':finalComplain.contnumber,
          'email':finalComplain.email,
          'eventdate':finalComplain.eventdate,
          'serialno':finalComplain.serialno,
          "srnoequipment":finalComplain.srnoequipment,
          "contracttype":finalComplain.contracttype,
          'invoiceno':finalComplain.invoiceno,
          "invoicedate":finalComplain.invoicedate,
          "errorcode":finalComplain.errorcode,
          "dealername":finalComplain.dealername,
          "installationdate":finalComplain.installationdate,
          "skucode":finalComplain.skucode,
          "skuname":finalComplain.skuname,
          "brandname":finalComplain.brandname,
          "producttobereturn":finalComplain.producttobereturn,
          "custname":finalComplain.custname,
          "add1":finalComplain.add1,
          "add2":finalComplain.add2,
          "add3":finalComplain.add3,
          "pincode":finalComplain.pincode,
          "area":finalComplain.area,
          "city":finalComplain.city,
          "state":finalComplain.state,
          "country":finalComplain.country,
          "description":finalComplain.description,
          "lotno":finalComplain.lotno ? finalComplain.lotno : '',
          "appcomplaint":finalComplain.appcomplaint,
          "assigntoservvendor":finalComplain.assigntoservvendor,
          "salesrepresentative":finalComplain.salesrepresentative,
          "newdealername":finalComplain.newdealername,
          "serviceengname":finalComplain.serviceengname,
          "serviceengcontact":finalComplain.serviceengcontact,
          "visitdate":finalComplain.visitdate,
          "assigntoservmg":finalComplain.assigntoservmg,
          "activity":this.loginService.selectedactivity.id,
          "Appect":finalComplain.Appect,
          "problemobserv":finalComplain.problem_observed,
          "fieldvisit":finalComplain.field_visit_remarks,
          "proposeactn":finalComplain.proposed_action,
          "assigntofieldvisit":finalComplain.assign_to,
          "closureatfield":finalComplain.closureatfield,
          "compltstatus":finalComplain.complaint_status,
          "imagebase64":finalComplain.imagebase64,
          "file_type": this.cardinalFileType
        }
        let login = this.loginService.user;
        let password = this.loginService.pass;

        const auth = btoa(login + ":" + password);

        let save_file_url = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?'
        
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
         fileKey: 'imagebase64',
         fileName: this.cardinalFileName,
         params:{"postData":JSON.stringify(oneObject)},
         headers: { 'Authorization': 'Basic ' + auth}
         
        }
    
      fileTransfer.upload(this.selectedFileUrl,save_file_url , options)
       .then((data) => {
         console.log("pravin YESSSSS",data);
         let formatResponse = JSON.parse(data.response);
         console.log("File Uplaod Result",formatResponse);
         this.commonFunction.loadingDismiss();
          if (data != null) {
            
            console.log(this.TAG, "Response From Save Complain", formatResponse);
            if (formatResponse) {
              this.presentAlert("closer_success", "Field Visit Details", formatResponse.msg);
            } else {
              this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + formatResponse.msg);
            }
      
            
            
          }

       }, (err) => {
        this.commonFunction.presentAlert("message", "Fail", err);
        this.commonFunction.loadingDismiss();
       })

       }
       else {
        saveComplainResponse = await this.serviceEngineerVisitService.finalCloser(finalComplain).toPromise();
        console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
        if (saveComplainResponse) {
          this.presentAlert("closer_success", "Field Visit Details", saveComplainResponse.msg);
        } else {
          this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + saveComplainResponse.msg);
        }
      }
           
     

      this.commonFunction.loadingDismiss();
   
    } catch (error) {
      this.commonFunction.loadingDismiss();
      console.error(this.TAG, error);
    }
  }
  public async finalClosureCheckboxServiceManager() {
    try {
      this.commonFunction.loadingPresent();
      let finalComplain: Complain = new Complain();
      finalComplain.complaint_no = this.service.complaintno;
      finalComplain.complaintid = this.service.complaintid;
      finalComplain.complaint_date = this.service.complaintdate;
      finalComplain.doctype = this.service.doctype[0].id;
      finalComplain.nameofcomplainer = this.service.nameofcomplainer;
      finalComplain.desofcomplnr = this.service.desofcomplnr[0].id;
      finalComplain.contnumber = this.service.contnumber;
      finalComplain.email = this.service.email;
      finalComplain.eventdate = this.service.eventdate;
      finalComplain.business = this.service.business;
      finalComplain.description = this.service.description;

      finalComplain.serialno = this.service.serialno;
      finalComplain.srnoequipment = this.service.srnoequipment;
      finalComplain.contracttype = this.service.contracttype;
      finalComplain.invoiceno = this.service.invoiceno;
      finalComplain.invoicedate = this.service.invoicedate;
      finalComplain.errorcode = this.service.errorcode[0].id;
      finalComplain.dealername = this.service.dealername;
      finalComplain.salesrepresentative = this.service.sales_representative;
      finalComplain.installationdate = this.service.installationdate;

      finalComplain.skucode = this.service.skucode;
      finalComplain.skuname = this.service.skuname;
      finalComplain.brandname = this.service.brandname;
      finalComplain.producttobereturn = this.service.producttobereturn;

      finalComplain.custname = this.service.custname;
      finalComplain.add1 = this.service.add1;
      finalComplain.add2 = this.service.add2;
      finalComplain.add3 = this.service.add3;
      finalComplain.pincode = this.service.pincode;
      finalComplain.area = this.service.area[0].id;
      finalComplain.city = this.service.city[0].id;
      finalComplain.state = this.service.state[0].id;
      finalComplain.country = this.service.country[0].id;


      finalComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';

      finalComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
      finalComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
      finalComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
      finalComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
      finalComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';

      if (this.isSpareRequiredTabVisible) {
        finalComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
        finalComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
        finalComplain.dealername = this.spareRequiredFormGroup.get('dealerNameCtrl').value ? this.spareRequiredFormGroup.get('dealerNameCtrl').value : '';
        finalComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';

      }
      if (this.isSpareInstallationTabVisible) {
        finalComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
        finalComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
        finalComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.id : '';
        finalComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
        finalComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
        finalComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
        finalComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
        finalComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
        finalComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
        finalComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
        finalComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';
      }
      finalComplain.servicevendorremark = this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value ? this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value : '';
      finalComplain.defective_spare_part_no = this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value : '';
      finalComplain.defective_spare_part_received_date = this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value : '';
      finalComplain.smart_solve_ref_no = this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value ? this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value : '';
      finalComplain.final_closure = this.serviceManagerFormGroup.get('finalClosureCtrl').value ? this.serviceManagerFormGroup.get('finalClosureCtrl').value : '';

    //  console.log(this.TAG, "Final Service Manager Form", finalComplain);
      let saveComplainResponse = await this.serviceEngineerVisitService.serviceManagerClose(finalComplain).toPromise();
    //  console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
      if (saveComplainResponse) {
        this.presentAlert("closer_success", "Field Visit Details", saveComplainResponse.msg);
      } else {
        this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + saveComplainResponse.msg);
      }

      this.commonFunction.loadingDismiss();
    } catch (error) {
      this.commonFunction.loadingDismiss();
    //  console.log(this.TAG, error);
    }
  }
  public async submit(tab) {
    try {
      this.commonFunction.loadingPresent();
      let finalComplain: Complain = new Complain();
      finalComplain.complaint_no = this.service.complaintno;
      finalComplain.complaintid = this.service.complaintid,
      finalComplain.complaint_date = this.service.complaintdate;
      finalComplain.doctype = this.service.doctype[0].id;
      finalComplain.nameofcomplainer = this.service.nameofcomplainer;
      finalComplain.desofcomplnr = this.service.desofcomplnr[0].id;
      finalComplain.contnumber = this.service.contnumber;
      finalComplain.email = this.service.email;
      finalComplain.eventdate = this.service.eventdate;
      finalComplain.business = this.service.business;
      finalComplain.description = this.service.description;

      finalComplain.serialno = this.service.serialno;
      finalComplain.srnoequipment = this.service.srnoequipment;
      finalComplain.contracttype = this.service.contracttype;
      finalComplain.invoiceno = this.service.invoiceno;
      finalComplain.invoicedate = this.service.invoicedate;
      finalComplain.errorcode = this.service.errorcode[0].id;
      finalComplain.dealername = this.service.dealername;
      finalComplain.salesrepresentative = this.service.sales_representative;
      finalComplain.installationdate = this.service.installationdate;

      finalComplain.skucode = this.service.skucode;
      finalComplain.skuname = this.service.skuname;
      finalComplain.brandname = this.service.brandname;
      finalComplain.producttobereturn = this.service.producttobereturn;

      finalComplain.custname = this.service.custname;
      finalComplain.add1 = this.service.add1;
      finalComplain.add2 = this.service.add2;
      finalComplain.add3 = this.service.add3;
      finalComplain.pincode = this.service.pincode;
      finalComplain.area = this.service.area[0].id;
      finalComplain.city = this.service.city[0].id;
      finalComplain.state = this.service.state[0].id;
      finalComplain.country = this.service.country[0].id;


      finalComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';

      finalComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
      finalComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
      finalComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
      finalComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
      finalComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';

      if (this.isSpareRequiredTabVisible) {
        finalComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
        finalComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
        finalComplain.dealername = this.spareRequiredFormGroup.get('dealerNameCtrl').value ? this.spareRequiredFormGroup.get('dealerNameCtrl').value : '';
        finalComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';

      }
      if (this.isSpareInstallationTabVisible) {
        finalComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
        finalComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
        finalComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.id : '';
        finalComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
        finalComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
        finalComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
        finalComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
        finalComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
        finalComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
        finalComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
        finalComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';
      }
    //  finalComplain.servicevendorremark = this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value ? this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value : '';
      finalComplain.servicevendorremark = this.service.serivevendorremark; 
      finalComplain.defective_spare_part_no = this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value : '';
      finalComplain.defective_spare_part_received_date = this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value : '';
      finalComplain.smart_solve_ref_no = this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value ? this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value : '';
      finalComplain.final_closure = this.serviceManagerFormGroup.get('finalClosureCtrl').value ? this.serviceManagerFormGroup.get('finalClosureCtrl').value : '';
      finalComplain.Appect = "true";

    //  console.log(this.TAG, "Final Service Manager Form", finalComplain);
      let saveComplainResponse:any = await this.serviceEngineerVisitService.finalCloser(finalComplain).toPromise();
    //  console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
      if (saveComplainResponse) {
        this.presentAlert("Field Visit Details", "", saveComplainResponse.msg);
      } else {
        this.presentAlert("Field Visit Details", "", "Something went wrong please try again" + saveComplainResponse.msg);
      }

      this.commonFunction.loadingDismiss();

    } catch (error) {
      this.commonFunction.loadingDismiss();
     // console.log(this.TAG, error);
    }
  }
  public addToCart(){
    try {
          let tempObject = {
              "id":this.spareSKUCodeSelected.id,
              "name":this.spareSKUCodeSelected.name,
              "qty":this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '',
              "dealer_name":this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value ? this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value : '',
              "cop_sales_order_ref":""
          }
          
          if(this.tempSpareCart == undefined || this.tempSpareCart == null){
            this.tempSpareCart = [tempObject];
          
          } else {
            var sameProduct = this.tempSpareCart.find(e => e.id === this.spareSKUCodeSelected.id);
            if (sameProduct != null || sameProduct != undefined) {
              this.commonFunction.presentAlert("Field Visit Details","Validation","This SKU is already added");
            } else {
              this.tempSpareCart.push(tempObject);
            }

           
          }
          this.spareRequiredFormGroup.controls['spareSKUCodeDropDownCtrl'].reset();
          this.spareRequiredFormGroup.controls['quantityCtrl'].reset();
        //  this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').setErrors(null)
        this.tempCartStatus = true;
        
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public removeFromCart(spareItem){
    try {
      const result = this.tempSpareCart.filter(item => item.id != spareItem.id);
      this.tempSpareCart = result;
      if(this.tempSpareCart.length == 0){
        this.tempCartStatus = false;
      }
    } catch (error) {
      
    }
  }
  public copSalesOrderReferenceDropDownChange(salesOrder){
    try {
          console.log(this.TAG,"Selected Order",salesOrder);
          this.skuCodeList = salesOrder.order;
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public skuCodeListChange(skuObject){
    try {
          console.log(this.TAG,"skuObject",skuObject);

          this.spareInstallationFormGroup.controls["spareReceivedQuantityCtrl"].setValue(skuObject.qty);
          
    } catch (error) {
      console.log(this.TAG, error);
    }
  }


}
