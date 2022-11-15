import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Commonfun } from 'src/provider/commonfun';
import { Message } from 'src/provider/message-helper';
import { MprFormService } from '../mpr-form.service';
import { LoginauthService } from 'src/app/login/loginauth.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Page } from 'src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mpr-form',
  templateUrl: './mpr-form.page.html',
  styleUrls: ['./mpr-form.page.scss'],
})
export class MprFormPage implements OnInit {

 // @ViewChild('myInput',{static: false}) myInput: ElementRef;

  
  readonly TAG = "Mpr Form Page";
  MPRForm: FormGroup;
  organizationList:any;
  documentStatusList:any;
  reasonForMPRList:any;
  gradeList:any;
  jobTitleList:any;
  designationOrRoleList:any;
  departmentList:any;
  locationList:any;
  jobListingList:any;
  qualificationList:any;
  selectedQualificationList=[];
  resourceRequirementList;
  resourceDepartmentList;
  resourceRequirementMasterList;
  resourceDepartmentMasterList;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();
  maxDate = this.year + "-" + this.month + "-" + this.day;
  organizationLbl;
  activityLbl;
  taggedHRBranchLbl;
  selectedDocumentStatus;
  selectedOrganization;
  selectedJOBTitle;
  selectedGrade;
  selectedDepartment;
  selectedLocation;
  selectedDesignation;
  selectedJobListing;
  selectedQualification;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  page = new Page();
  public columns: any;
  public rows:any [];
  selectedValue;
  private observer: MutationObserver;
  workExperienceModel;
  workExperienceModel_lower = 0;
  workExperienceModel_upper = 0;
  CTCRangeModel;
  CTCRangeModel_lower;
  CTCRangeModel_upper;
  AgeRangeModel;
  AgeRangeModel_lower;
  AgeRangeModel_upper;
  maxCTCLbl = " Lakh";
  jobDescriptionList;
  selectedJDForEdit;
  MPRMasterDataList;
  resource_requirement_List;
  disable_save_jd_btn = true;
  selectedResourceRequirementList;
  existingMPR;
  existingMPRStatus = false;

  validation_messages = {
    'organizationDropDownErrorMessage': [{ type: 'required', message: ' *Please Select Organization.' }],
    'documentStatusDropDownErrorMessage': [{ type: 'required', message: ' *Please Select Document Status.' }],
    'reasonForMPRDropDownErrorMessage': [{ type: 'required', message: ' *Please Select Reason for MPR.' }],
    'gradeDropDownErrorMessage': [{ type: 'required', message: '*Please Select Grade.' }],
    'jobTitleDropDownErrorMessage': [{ type: 'required', message: '*Please Select Job Title.' }],
    'designationOrRoleDropDownErrorMessage': [{ type: 'required', message: '*Please Select Designation / Role.' }],
    'departmentDropDownErrorMessage': [{ type: 'required', message: '*Please Select Department.' }],
    'locationDropDownErrorMessage': [{ type: 'required', message: '*Please Select Location.' }],
    'numberOfPositionTxtErrorMessage': [{ type: 'required', message: '*Please Enter Number Of Position.' }],
    'positionClosedTxtErrorMessage': [{ type: 'required', message: '*Please Enter Number Of Position Closed.' }],
    'workExpFromTxtErrorMessage': [{ type: 'required', message: '*Please Select Work Experience From.' }],
    'workExpFromToTxtErrorMessage': [{ type: 'required', message: '*Please Select Work Experience To.' }],
    'ctcRangeFromTxtErrorMessage': [{ type: 'required', message: '*Please Select CTC Range From.' }],
    'ctcRangeToTxtErrorMessage': [{ type: 'required', message: '*Please Select CTC Range To.' }],
    'ageFromTxtErrorMessage': [{ type: 'required', message: '*Please Select Age Range From.' }],
    'ageToTxtErrorMessage': [{ type: 'required', message: '*Please Select Age Range To.' }],
    'jobListingDropDownErrorMessage': [{ type: 'required', message: '*Please Select Job Listing.' }],
    'onCompanyRollChkErrorMessage': [{ type: 'required', message: '*Please Select Company Roll.' }],
    'qualificationDropDownErrorMessage': [{ type: 'required', message: '*Please Select Qualification.' }],
    'jobDescriptionTxtErrorMessage': [{ type: 'required', message: '*Please Select Job Description.' }],
    'resourceRequirementDropDownErrorMessage': [{ type: 'required', message: '*Please Select Resource Requirement.' }],
    'resourceDepartmentDropDownErrorMessage': [{ type: 'required', message: '*Please Select Resource Requirement.' }],
    'resourceRequiredChkErrorMessage': [{ type: 'required', message: '*Please Select Resource Required.' }]
  
  }

  constructor(private fb: FormBuilder,public commonfun: Commonfun,public msg: Message,
              private MPRService: MprFormService,private loginService: LoginauthService,
              private el: ElementRef,private route: ActivatedRoute,private router: Router,private alertCtrl: AlertController) {
  
    this.MPRForm = this.fb.group({
      organizationDropDown: [, Validators.required],
      reasonForMPRDropDown: [, Validators.required],
      gradeDropDown: [, Validators.required],
      jobTitleDropDown: [, Validators.required],
      designationOrRoleDropDown: [, Validators.required],
      departmentDropDown: [, Validators.required],
      locationDropDown: [, Validators.required],
      numberOfPositionTxt: [, Validators.required],
      positionClosedTxt: [],
      jobListingDropDown: [, Validators.required],
      onCompanyRollChk: [],
      qualificationDropDown: [],
      jobDescriptionTxt:[],
      resourceRequirementDropDown: [],
      resourceDepartmentDropDown: [],
      resourceRequiredChk:[],
      
    });
   

  }

  async ngOnInit() {
    try {
          this.commonfun.loadingPresent();
        
         

          this.organizationList = await this.MPRService.getOrganizationList().toPromise();
          this.qualificationList = await this.MPRService.getQualificationList().toPromise();
          this.reasonForMPRList = await this.MPRService.getReasonForMPRList().toPromise();
          this.jobListingList = await this.MPRService.getJobListingList().toPromise();
          this.resourceRequirementMasterList = await this.MPRService.getResourceRequirementMasterList().toPromise();
          this.resourceDepartmentMasterList = await this.MPRService.getResourceDepartmentMasterList().toPromise();

          if(this.selectedQualificationList == undefined || this.selectedQualificationList.length == 0){
            let qualificationDropDownTemp = null;
            qualificationDropDownTemp = this.MPRForm.get('qualificationDropDown');
            qualificationDropDownTemp.setValidators(Validators.required);
            qualificationDropDownTemp.updateValueAndValidity();
          }
          this.route.queryParams.subscribe(params => {
            if (params && params.special) {
              this.existingMPR = JSON.parse(params.special);
              if(!!this.existingMPR){
                this.existingMPRStatus = true;
                this.bindExistingData();
              }
              console.log(this.TAG,JSON.parse(params.special));
            }
          });
          
          this.commonfun.loadingDismiss();
    } catch (error) {
      this.commonfun.loadingDismiss();
      console.log(this.TAG,error);
    }
  }
  ionViewWillEnter(){
    try {
         
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public refreshPage(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  private async bindExistingData(){
    try {
         // this.existingMPRStatus
         this.organizationList.forEach((org=>{
           if(org.id == this.existingMPR.org_id){
             this.selectedOrganization = org;
             this.onOrganizationChange();
            }}));
            this.reasonForMPRList.forEach((reason=>{
             if(reason.code == this.existingMPR.mpr_reason.code){
              this.MPRForm.controls.reasonForMPRDropDown.setValue(reason);
             }
            }))
            this.MPRForm.controls.numberOfPositionTxt.setValue(this.existingMPR.number_of_position);
            this.workExperienceModel = {lower:Number(this.existingMPR.work_rang_from),upper:Number(this.existingMPR.work_rang_to)};
            this.CTCRangeModel = {lower:Number(this.existingMPR.ctc_rang_from),upper:Number(this.existingMPR.ctc_rang_to)};
            this.AgeRangeModel = {lower:Number(this.existingMPR.age_rang_from),upper:Number(this.existingMPR.age_rang_to)};

            this.jobListingList.forEach(jobList=>{
             if(jobList.code = this.existingMPR.Job_list.code)
              this.selectedJobListing = jobList;
            })
            
            this.qualificationList.forEach(qualification=>{
              if(qualification.qualification_id = this.existingMPR.Qualification_List[0].qualification_id){
                this.selectedQualificationList = [qualification];
                if(this.selectedQualificationList == undefined || this.selectedQualificationList.length == 0){
                  let control1 = null;
                  control1 = this.MPRForm.get('qualificationDropDown');
                  control1.clearValidators();
                  control1.updateValueAndValidity();
                }
              }
            })


            this.MPRForm.controls.onCompanyRollChk.setValue(this.existingMPR.on_company_roll);


    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public async onOrganizationChange(){
   try {
          this.MPRMasterDataList = await this.MPRService.getMPRMasterDataList(this.selectedOrganization).toPromise();
          console.log(this.TAG,this.MPRMasterDataList);

          this.activityLbl = this.MPRService.activity_name;
          this.organizationList.forEach((organization=>{
          if(organization.hasOwnProperty('hrbranch')){
              this.taggedHRBranchLbl =  organization.name;
            }
          }))
          this.jobTitleList = this.MPRMasterDataList.jobtitlename.JobTitleList;
          this.gradeList = this.MPRMasterDataList.Gradename.GradeList;
          this.departmentList = this.MPRMasterDataList.Department.DepartmentList;
          this.locationList = this.MPRMasterDataList.Locationname.LocationList;
          this.designationOrRoleList = this.MPRMasterDataList.Rolename.RoleList;

          if(!!this.existingMPR){
            this.jobTitleList.forEach((job=>{if(job.Standardtemp_id == this.existingMPR.Standardtemp_id){this.selectedJOBTitle = job;}}))
           
            this.gradeList.forEach((grade=>{if(grade.grade_id == this.existingMPR.grade_id){this.selectedGrade = grade;}}))
           
            this.departmentList.forEach((department=>{
              if(department.department_id==this.existingMPR.department_id){
                this.selectedDepartment = department;
              }
            }))

            this.locationList.forEach((location=>{
              if(location.location_id==this.existingMPR.location_id){
                this.selectedLocation = location;
              }
            }))
            this.designationOrRoleList.forEach((role=>{
              if(role.role_id == this.existingMPR.role_id){
                this.selectedDesignation = role;
              }
            }))
            
          }

           
          
   } catch (error) {
     console.log(this.TAG,error);
   }
    



  }
  public onReasonForMPRChange(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onGradeChange(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onJobTitleChange(){
    try {
          console.log(this.TAG,this.MPRForm.controls['jobTitleDropDown'].value);
          this.jobDescriptionList = this.MPRForm.controls['jobTitleDropDown'].value.Job_Description_List;
         // this.resourceRequirementList = this.MPRForm.controls['jobTitleDropDown'].value.Resource_requirement_List;
         this.resource_requirement_List = this.MPRForm.controls['jobTitleDropDown'].value.Resource_requirement_List;

          if(this.resource_requirement_List == undefined || this.resource_requirement_List.length == 0){
            let control1 = null;
            control1 = this.MPRForm.get('resourceRequirementDropDown');
            control1.setValidators(Validators.required);
            control1.updateValueAndValidity();
            let control2 = null;
            control2 = this.MPRForm.get('resourceDepartmentDropDown');
            control2.setValidators(Validators.required);
            control2.updateValueAndValidity();
          }
        //  console.log(this.TAG, this.resource_requirement_List);
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onDesignationOrRoleChange(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onDepartmentChange(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onLocationChange(){
    try {
          const ionSelects = document.querySelectorAll('ion-select');
          ionSelects.forEach((sel) => {
            sel.shadowRoot.querySelectorAll('.select-text')
              .forEach((elem) => {
               //  console.log("HTML",elem);


                //  setTimeout(() => {
                //   console.log("HTML",elem.textContent);
                //   let test = elem.textContent;
                //   var split_str = test.split(",");
                //   if(split_str.length > 1){
                //     console.log("HTML DATA",split_str);
                //     let tags = split_str.map(skill => `<ion-badge style="background: #27AE60 !important;margin: 2px;padding: 5px;border-radius: 10px;">${skill}</ion-badge>`).join('');
                //     elem.innerHTML = tags;
                //   }
                //  }, 1000);

                // var test = elem.toString();
                //  var result = test.match(/<div>(.*?)<\/div>/g).map(function(val){
                //   return val.replace(/<\/?div>/g,'');
                //  });
                //   console.log("TET ",test);

               
               
                          
                elem.setAttribute('style', 'white-space: break-spaces !important;');
              
              });
          });

    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onQualificationChange(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public removeSelectedQualification(selectedQualification){
    try {
          const result = this.selectedQualificationList.filter(item => item.id != selectedQualification.id);
          this.selectedQualificationList = result;
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onAddQualification(){
    try {
          //console.log(this.TAG,"onAddQualification",this.MPRForm.controls['qualificationDropDown'].value);    
          if(this.MPRForm.controls['qualificationDropDown'].value!=null){
              if(this.selectedQualificationList.length > 0){
                let sameQualificationCheck = this.selectedQualificationList.find(e => e.id === this.MPRForm.controls['qualificationDropDown'].value.id);
                if(sameQualificationCheck!=null || sameQualificationCheck!=undefined){
                  this.commonfun.presentAlert("MPR Form","Validation"," This qualification is already added");
                } else {
                  let temp1 = {
                    "code":this.MPRForm.controls['qualificationDropDown'].value.code,
                    "qualification_id":this.MPRForm.controls['qualificationDropDown'].value.id,
                    "name":this.MPRForm.controls['qualificationDropDown'].value.name
                  }
                  this.selectedQualificationList.push(temp1);
                }
              } else {
                let temp = {
                  "code":this.MPRForm.controls['qualificationDropDown'].value.code,
                  "qualification_id":this.MPRForm.controls['qualificationDropDown'].value.id,
                  "name":this.MPRForm.controls['qualificationDropDown'].value.name
                }
                this.selectedQualificationList = [temp];
              }
          } else {
            this.commonfun.presentAlert("MPR Form","Validation","Please select qualification");
          }
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onWorkExperienceChange(data) {
   // console.log(data);
    this.workExperienceModel_lower = data.lower;
    this.workExperienceModel_upper = data.upper;
  }
  public onCTCRangeChange(selectedCTC){
    this.CTCRangeModel_lower = selectedCTC.lower;
    this.CTCRangeModel_upper = selectedCTC.upper;
    if(this.CTCRangeModel_upper==100) {
      this.maxCTCLbl = " CR";
      this.CTCRangeModel_upper = 1;
    } else {
      this.maxCTCLbl = " Lakh";
    }
   


  }
  public onAgeRangeChange(selectedAgeRange){
    this.AgeRangeModel_lower = selectedAgeRange.lower;
    this.AgeRangeModel_upper = selectedAgeRange.upper;
  }
  public editSelectedJobDescription(selectedJD){
    try {
          this.disable_save_jd_btn = false;
          this.MPRForm.controls.jobDescriptionTxt.setValue(selectedJD.job_description);
          this.selectedJDForEdit = selectedJD;
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onSaveJD(){
    try {
          
          let jdId = this.jobDescriptionList.findIndex(jd=> jd.job_des_id === this.selectedJDForEdit.job_des_id);
          this.jobDescriptionList[jdId].job_description = this.MPRForm.get('jobDescriptionTxt').value;
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onAddResourceRequirement(){
    try {
          
          let resource = {
            "Resource_requirement":{
              "id":    this.MPRForm.get('resourceRequirementDropDown').value.id,
              "name":  this.MPRForm.get('resourceRequirementDropDown').value.name,
              "code":  this.MPRForm.get('resourceRequirementDropDown').value.code
            },
            "Department":{
              "id":    this.MPRForm.get('resourceDepartmentDropDown').value.id,
              "name":  this.MPRForm.get('resourceDepartmentDropDown').value.name,
              "code":  this.MPRForm.get('resourceDepartmentDropDown').value.code
            },
            "Required":{
              "isrequired":this.MPRForm.get('resourceRequiredChk').value
            }
          }
          //console.log(this.MPRForm.get('resourceRequirementDropDown').value);
          if(!!this.resource_requirement_List){
            this.resource_requirement_List.push(resource);
          } else {
            this.resource_requirement_List = [resource];
           // console.log(this.resource_requirement_List);
          }

          
    } catch (error) {
      
    }
  }
  public removeResourceRequirement(resourceRequirement){
    console.log(this.TAG,resourceRequirement);
    const result = this.resource_requirement_List.filter(item => item.Resource_requirement.id != resourceRequirement.Resource_requirement.id);
    this.resource_requirement_List = result;
  }
  async presentAlert(Header: string, SubHeader: string, Message: string) {
    const alert = await this.alertCtrl.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: [{
        text: "OK",
        handler: (ok) => {
          
          this.router.navigateByUrl('/home');
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }
  public async onMPRFormSubmit(MPRForm,status){
    try {
          console.log(this.TAG,"Location",this.MPRForm.get('locationDropDown').value);
          if(this.CTCRangeModel != undefined && this.CTCRangeModel.upper != undefined && this.CTCRangeModel.upper !=0){
            if(this.AgeRangeModel != undefined && this.AgeRangeModel.upper != undefined && this.AgeRangeModel.upper !=0){
               
                if(!!this.selectedQualificationList && this.selectedQualificationList.length > 0){
                  if(!!this.jobDescriptionList && this.jobDescriptionList.length > 0){
                  //  console.log(this.TAG,MPRForm);
                    let mprPostData = {
                      "Standardtemp_id": this.MPRForm.controls['jobTitleDropDown'].value.Standardtemp_id,
                      "org_id": this.MPRForm.get('organizationDropDown').value.id,
                      "mpr_reason_code": this.MPRForm.get('reasonForMPRDropDown').value.code,
                      "grade_id": this.MPRForm.get('gradeDropDown').value.grade_id,
                      "role_id": this.MPRForm.get('designationOrRoleDropDown').value.role_id,
                      "department_id": this.MPRForm.get('departmentDropDown').value.department_id,
                      "location_id": this.MPRForm.get('locationDropDown').value.location_id,
                      "number_of_position": this.MPRForm.get('numberOfPositionTxt').value,
                      "position_closed":"",
                      "work_rang_from": this.workExperienceModel_lower,
                      "work_rang_to": this.workExperienceModel_upper,
                      "ctc_rang_from": this.CTCRangeModel.lower,
                      "ctc_rang_to": this.CTCRangeModel.upper,
                      "age_rang_from": this.AgeRangeModel.lower,
                      "age_rang_to": this.AgeRangeModel.upper,
                      "job_list_code": this.MPRForm.get('jobListingDropDown').value.code,
                      "on_company_roll": this.MPRForm.get('onCompanyRollChk').value,
                      "qualification": this.selectedQualificationList,
                      "Job_Description_List": this.jobDescriptionList,
                      "Resource_requirement_List": this.resource_requirement_List,
                      "is_update":this.existingMPRStatus,
                      "is_approve":status,
                      "mpr_id": this.existingMPR.mpr_id ? this.existingMPR.mpr_id : '0'
                      }
                    let postMPRForm = await this.MPRService.postMPRForm(mprPostData).toPromise();
                    console.log(this.TAG,"Post Form",mprPostData);
                    if(!!postMPRForm &&postMPRForm.resposemsg == "Success")  {
                       console.log(this.TAG,postMPRForm);
                       this.presentAlert("MPR Form",postMPRForm.resposemsg,postMPRForm.logmsg);
                    } else {
                      console.log(this.TAG,postMPRForm);
                      this.commonfun.presentAlert("MPR Form","Error","Some things went wrong please try again.");
                    }


                  } else {
                    this.commonfun.presentAlert("MPR Form","Validation","Job Description Can Not Be Empty");
                  }
                  
                } else {
                  this.commonfun.presentAlert("MPR Form","Validation","Please Add Qualification");
                }
            } else {
              this.commonfun.presentAlert("MPR Form","Validation","Please Select Age Range");
            } 
          } else {
            this.commonfun.presentAlert("MPR Form","Validation","Please Select CTC Range");
          }
    } catch (error) {
      console.log(this.TAG,error);
      this.commonfun.presentAlert("MPR Form","Error",error.message);
    }
  }
  public approved(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public disApproved(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
}
