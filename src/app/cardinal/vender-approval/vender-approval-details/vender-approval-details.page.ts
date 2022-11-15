import { VenderApprovalService } from './../vender-approval.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validator } from 'src/provider/validator-helper';
import { Complain } from 'src/assets/model/complain';
import { CustomerServiceService } from '../../customer-service/customer-service.service';
import { AlertController } from '@ionic/angular';
import { Commonfun } from 'src/provider/commonfun';

@Component({
  selector: 'app-vender-approval-details',
  templateUrl: './vender-approval-details.page.html',
  styleUrls: ['./vender-approval-details.page.scss'],
})
export class VenderApprovalDetailsPage implements OnInit {

  readonly TAG = "VenderApprovalDetailsPage";

  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();

  maxDate = this.year + "-" + this.month + "-" + this.day;

  isLinear = false;
  /**
   * 
   */
  detailsStepValid = false; equimentStepValid = false;customerDetailStepValid = false;
  /**
   * 
   */
  consumablesFormGroup: FormGroup;productCompliantFormGroup: FormGroup;detailFormGroup:FormGroup;
  equimentFormGroup:FormGroup;skuDetailsFormGroup:FormGroup;customerDetailFormGroup:FormGroup;
  validation_messages = {
    'nameOfComplainer': [{ type: 'required', message: '*Please Enter Name of complainer.' }],
    'designation_of_complainer_mss':[{ type: 'required', message: '*Please Enter designation_of_complainer.' }],
    'mobileno': [{ type: 'required', message: '*Please Enter Contact No.' },
    { type: 'InvalidNumber', message: '*Please Enter Valid Contact No.' }],
    'email': [{ type: 'required', message: '*Please Enter Email.' },
    { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }],
    'complaintDescription':[{ type: 'required', message: '*Please Enter Complaint Description' }],
    'serialNo': [{ type: 'required', message: '*Please Enter Serial no .' }],
    'customerAddress1': [{ type: 'required', message: '*Please Enter Customer Address1' }],
    'customerAddress2': [{ type: 'required', message: '*Please Enter Customer Customer Address 2' }],
    'customerAddress3': [{ type: 'required', message: '*Please Enter Customer Customer Address 3' }],
    'pinCode': [{ type: 'required', message: '*Please Enter Pin Code' }],
    'area': [{ type: 'required', message: '*Please Select Your Area' }],
    'dateOfVisitCtrlErrorMessage': [{ type: 'required', message: '*Please Select Date Of Visit' }],
    'serviceVendorRemarksCtrlErrorMessage':[{ type: 'required', message: '*Please Enter Service Vendor Remark' }],
  };
  service:any;
  serviceEngSelected;contracttype;
  serviceEngList:any;
  productToBeReturn;contractTypeList;saveComplainResponse;
  isProductCompliantTab = false;isConsumablesTab = false;isEquimentTab = false;
  constructor(private formBuilder: FormBuilder,private validator: Validator,
              private route: ActivatedRoute,private router: Router,private venderApprovalService: VenderApprovalService,
              private customerService: CustomerServiceService,
              private alertCtrl: AlertController,
              private commonFunction: Commonfun) { }

  async ngOnInit() {
   
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.service = JSON.parse(params.special);
       // console.log(this.TAG,JSON.parse(params.special));
      }
    });
    
    
   
    this.detailFormGroup = this.formBuilder.group({
      nameOfComplainerCtrl: [{value: '', disabled: true}, Validators.required],
      desigOfComplainerCtrl: [{value: '', disabled: true}, Validators.required],
      mobilenoCtrl: [{value: '', disabled: true}, Validators.required,this.validator.numberValid],
      emailIDCtrl:[{value: '', disabled: true}, Validators.required, this.validator.emailValid],
      complaintDescriptionCtrl: [{value: '', disabled: true}, Validators.required]
    });
    this.productCompliantFormGroup = this.formBuilder.group({
      lotNoCtrl:[]
    });
    this.consumablesFormGroup = this.formBuilder.group({
      lotNoConsumablesCtrl:[]
    });
    this.equimentFormGroup = this.formBuilder.group({
      serialNoCtrl: [{value: '', disabled: true}, Validators.required],
      dealerNameCtrl: [{value: '', disabled: true}, Validators.required],
      installationDateCtrl:[],
     // newDealerNameCtrl:[]
    });
    this.skuDetailsFormGroup = this.formBuilder.group({
      
    });
    this.customerDetailFormGroup = this.formBuilder.group({
      customerAddress1Ctrl:[{value: '', disabled: true}, Validators.required],
      customerAddress2Ctrl:[{value: '', disabled: true}, Validators.required],
      customerAddress3Ctrl:[{value: '', disabled: true}, Validators.required],
      pinCodeCtrl:[{value: '', disabled: true}, Validators.required],
      areaCtrl:[{value: '', disabled: true}, Validators.required],
      cityCtrl:[{value: '', disabled: true}, Validators.required],
      stateCtrl:[{value: '', disabled: true}, Validators.required],
      countryCtrl:[{value: '', disabled: true}, Validators.required],

      serviceEngMobilenoCtrl: [, Validators.required,this.validator.numberValid],
      serviceVendorRemarksCtrl:[, Validators.required],
      dateOfVisitCtrl:[,Validators.required],
      approveComplaintCtrl:[,],
      rejectComplaintCtrl:[,],
      serviceEngineerNameCtrl:[,],
    });
    this.serviceEngList = await this.venderApprovalService.getServiceEngList().toPromise();
   // console.log(this.TAG,"Service Eng List",this.serviceEngList);
    

  }
  async ionViewWillEnter(){
    this.commonFunction.loadingPresent();
   // console.log("Min Date",this.maxDate);

    if(!!this.service.newdealername){
      this.service.dealername = this.service.newdealername;
    }
  /**
   * 
   */
   // console.log("serveice",this.service);
    if(this.service.doctype[0].name == 'Product Compliant'){
      this.isProductCompliantTab = true;
      this.isConsumablesTab = false;
      this.isEquimentTab = false;
      this.productCompliantFormGroup.controls.lotNoCtrl.patchValue(this.service.lotno);
   } else if(this.service.doctype[0].name == 'Consumables') {
      this.isProductCompliantTab = false;
      this.isConsumablesTab = true;
      this.isEquimentTab = false;
      this.consumablesFormGroup.controls.lotNoCtrl.patchValue(this.service.lotno);
   } else if(this.service.doctype[0].name == 'Equipment'){
      this.isProductCompliantTab = false;
      this.isConsumablesTab = false;
      this.isEquimentTab = true;
   }
   if(this.service.producttobereturn=="MSNR_Y"){
    this.productToBeReturn = 'Yes';
   } else if(this.service.producttobereturn=="MSNR_N"){
      this.productToBeReturn = 'No';
   }
   this.contractTypeList = await (await this.customerService.getContractTypeList()).toPromise();
   // console.log("contractTypeList",this.contractTypeList);
   for (let i = 0; i < this.contractTypeList.length; i++) {
   // console.log("contractTypeList of i=",i);

        if(this.contractTypeList[i].code == this.service.contracttype){
          this.contracttype = this.contractTypeList[i].name;
          }   
    
   }
   this.customerDetailFormGroup.controls.areaCtrl.patchValue(this.service.area[0].name);
   this.customerDetailFormGroup.controls.cityCtrl.patchValue(this.service.city[0].name);
   this.customerDetailFormGroup.controls.stateCtrl.patchValue(this.service.state[0].name);
   this.customerDetailFormGroup.controls.countryCtrl.patchValue(this.service.country[0].name);
   this.commonFunction.loadingDismiss();
  }
  public refreshPage(){
    try {
      
    } catch (error) {
   //   console.error(this.TAG,error);
    }
  }
  
  public matDetailSettper(event){
    try {
      
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
  public matSettperProductCompliant(event){
    try {
      
    } catch (error) {
     // console.error(this.TAG,error);
    }
  }
  public matSettperConsumables(event){
    try {
      
    } catch (error) {
    //  console.error(this.TAG,error);
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
      
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public serviceEngSelectedChange(serviceEngSelected){
    try {
          this.customerDetailFormGroup.controls.serviceEngMobilenoCtrl.patchValue(serviceEngSelected.phone);
          this.customerDetailFormGroup.get('serviceEngMobilenoCtrl').disable();
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public approveServiceCheckbox(event){
    try {
          console.log(this.TAG,"CheckBox Value",event);
          this.detailFormGroup.patchValue({rejectComplaintCtrl:false});

    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public rejectServiceCheckbox(){
    try {
          
    } catch (error) {
      console.error(this.TAG,error);
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
          
          this.router.navigateByUrl('/vender-approval');
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
 public reject(form){
   try {
        //  console.log("Submiited from",form);
   } catch (error) {
    // console.log(error);
   }
 }
 
  public async submit(event,status){
    try {
          
         let approveVenderComplain:Complain = new Complain();
           if(status=='Accept')
           {
             approveVenderComplain.Appect='true';
             approveVenderComplain.reject=''
           }
           else
           {
            approveVenderComplain.Appect='';
            approveVenderComplain.reject='true'
           }
           approveVenderComplain.complaint_no = this.service.complaintno;
           approveVenderComplain.complaintid = this.service.complaintid;
           approveVenderComplain.complaint_date = this.service.complaintdate;
           approveVenderComplain.doctype = this.service.doctype[0].id;
           approveVenderComplain.nameofcomplainer = this.service.nameofcomplainer
           approveVenderComplain.desofcomplnr = this.service.desofcomplnr[0].id
           approveVenderComplain.contnumber = this.service.contnumber;
           approveVenderComplain.email = this.service.email;
           approveVenderComplain.eventdate = this.service.eventdate;
           approveVenderComplain.business = this.service.business;
           approveVenderComplain.description = this.service.description
           approveVenderComplain.lotno = this.service.lotno;
           approveVenderComplain.serialno = this.service.srnoequipment;
           approveVenderComplain.srnoequipment = this.service.srnoequipment;
           approveVenderComplain.contracttype  = this.service.contracttype;
           approveVenderComplain.invoiceno = this.service.invoiceno;
           approveVenderComplain.invoicedate=this.service.invoicedate;
           approveVenderComplain.errorcode= "";
          // approveVenderComplain.dealername = this.service.dealername;
          // approveVenderComplain.newdealername = this.service.newdealername;
          // approveVenderComplain.salesrepresentative = this.service.salesrepresentative;
           approveVenderComplain.installationdate = this.service.installationdate;
           
           approveVenderComplain.skucode = this.service.skucode;
           approveVenderComplain.skuname = this.service.skuname;
           approveVenderComplain.brandname = this.service.brandname;
           approveVenderComplain.producttobereturn = this.service.producttobereturn;

           approveVenderComplain.custname = this.service.custname;
           approveVenderComplain.add1 = this.service.add1;
           approveVenderComplain.add2 = this.service.add2;
           approveVenderComplain.add3 = this.service.add3;
           approveVenderComplain.pincode = this.service.pincode;
          
           approveVenderComplain.area = this.service.area[0].id;
           approveVenderComplain.city = this.service.city[0].id;
           approveVenderComplain.state = this.service.state[0].id;
           approveVenderComplain.country = this.service.country[0].id;
           approveVenderComplain.serviceengname = this.customerDetailFormGroup.get('serviceEngineerNameCtrl').value ? this.customerDetailFormGroup.get('serviceEngineerNameCtrl').value.id : '';
           approveVenderComplain.serviceengcontact = this.customerDetailFormGroup.get('serviceEngMobilenoCtrl').value ? this.customerDetailFormGroup.get('serviceEngMobilenoCtrl').value : '';
           approveVenderComplain.visitdate = this.customerDetailFormGroup.get('dateOfVisitCtrl').value ? this.customerDetailFormGroup.get('dateOfVisitCtrl').value : '';
           approveVenderComplain.servicevendorremark = this.customerDetailFormGroup.get('serviceVendorRemarksCtrl').value ? this.customerDetailFormGroup.get('serviceVendorRemarksCtrl').value : '';
           //approveVenderComplain.assigntoservvendor = "true";
           approveVenderComplain.appcomplaint = "true";

          // console.log(this.TAG,"Final Vender Approval Form",approveVenderComplain);
           this.saveComplainResponse =  await this.customerService.saveComplain(approveVenderComplain).toPromise();
          // console.log(this.TAG,"Response From Save Complain",this.saveComplainResponse);
           if(this.saveComplainResponse){
              this.presentAlert("Compliant Acceptance Details","",this.saveComplainResponse.msg);
           } else {
              this.presentAlert("Compliant Acceptance Details","","Something went wrong please try again"+this.saveComplainResponse.msg);
           }
    } catch (error) {
    //  console.error(this.TAG,error);
      this.presentAlert("Compliant Acceptance Details","",error.error);
    }
  }

}
