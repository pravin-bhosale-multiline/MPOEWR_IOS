import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commonfun } from 'src/provider/commonfun';
import { Constants } from '../common/Constants';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { LoginauthService } from '../login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class MprFormService {

readonly TAG = "Mpr Form Service";
activity_name;

  constructor(private genericHttpClientService: GenericHttpClientService,
              private loginService:LoginauthService,
              private commonFunction: Commonfun,private httpClient: HttpClient) {

                this.activity_name = loginService.selectedactivity.name;
               }


  public getOrganizationList(){
    let getOrganizationListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.WMobileUserWiseOrgActivity?'+
    this.loginService.parameter + '&userid=' + this.loginService.userid + '&activityid=' + this.loginService.selectedactivity.id;
 //   console.log(this.TAG,"get Organization List",getOrganizationListURL);
    return this.genericHttpClientService.get(getOrganizationListURL);
  }
  public getReasonForMPRList(){
    let getReasonForMPRListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvaluesReference?'+
    this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20Reason%20for%20MRP%20list';
    //console.log(this.TAG,"Doc Type Service",URL);
    return this.genericHttpClientService.get(getReasonForMPRListURL);
  }
  public getJobListingList(){
    let getReasonForMPRListURL =  Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvaluesReference?'+
    this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20job%20list';
    //console.log(this.TAG,"Doc Type Service",URL);
    return this.genericHttpClientService.get(getReasonForMPRListURL);
  }
  public getQualificationList(){
     let getQualificationListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvalues?'+
     this.loginService.parameter + '&user_id=' + this.loginService.userid + '&type=QLFC';
    //console.log(this.TAG,"Doc Type Service",URL);
    return this.genericHttpClientService.get(getQualificationListURL);
  }
  public getMPRMasterDataList(selectedOrganization){
    let getMPRMasterDataListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.MPRDetails?'+
    this.loginService.parameter + '&ad_org_id=' + selectedOrganization.id;
    // console.log(this.TAG,"Doc Type Service",getMPRMasterDataListURL);
    return this.genericHttpClientService.get(getMPRMasterDataListURL);
  }
  public getResourceRequirementMasterList(){
    let getResourceRequirementMasterListURL =  Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvaluesReference?'+
    this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20Employee%20Requirement';
    //console.log(this.TAG,"Doc Type Service",URL);
    return this.genericHttpClientService.get(getResourceRequirementMasterListURL);
  }
  public getResourceDepartmentMasterList(){
    let getResourceDepartmentMasterListURL =  Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvaluesReference?'+
    this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20Department';
    //console.log(this.TAG,"Doc Type Service",URL);
    return this.genericHttpClientService.get(getResourceDepartmentMasterListURL);
  }
  public getMPRList(){
    let getMPRListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.MPRDetails?'+
    this.loginService.parameter + '&ad_user_id=' +  this.loginService.userid;
    // console.log(this.TAG,"Doc Type Service",getMPRListURL);
    return this.genericHttpClientService.get(getMPRListURL);
  }
  public postMPRForm(data){
    let login =this.loginService.user;
    let password = this.loginService.pass;
    const auth=btoa(login+":"+password);
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json','Accept':'application/json','Authorization':'Basic '+auth})};
    let MPR_FORM_SAVE_URL;
    
    if(data.is_approve == 'true' || data.is_approve == 'false'){
      MPR_FORM_SAVE_URL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.MPRDetailsUpdate?'
    } else {
       MPR_FORM_SAVE_URL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.MPRDetailsInsert?'
    }
    return  this.genericHttpClientService.post(MPR_FORM_SAVE_URL,data,httpOptions);
  }

}
