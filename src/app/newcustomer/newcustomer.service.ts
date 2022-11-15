import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { GenericHttpClientService } from '../common/generic-http-client.service';



export interface ComplianceData{
  mmstComplianceDetails_id:string;
  Compliance_Type:string;
  num:string;
  imgcomp:string;
  ismandatory:string;
  uploadImg:string;
  isImage:string;
}

/* get BPCategory ID */
export interface BPcategory {
  _identifier: string;
  id: string;
}
//compliancedetails

/* get BPartner ID */
export interface BPartner {
  _identifier: string;
  id: string;
}

/* get Pincode ID */
export interface Pincode {
  _identifier: string;
  id: string;
  region$_identifier: string;
  country$_identifier: string;
  spincode: string;
  country:string;
  region:string;
  district$_identifier: string;
  district:string;
}
export interface compliancedata{
  Compliance_Type: string;
id: string;
mmstComplianceDetails_id:string;
imgcomp:any;
imgcomp1:any;
isImage: string;
ismandatory: boolean;
num: string
scompType: string;
uploadImg: boolean;
}
/* get Area ID */
export interface Area {
  mmst_cttv_id: string;
  cttv:string;
  _identifier: string;
  id: string;
  area: string;
  cttv$_identifier: string;
  
}



/* get Complete Lead */
export interface LeadComplete {
  cust_id: string;
  referalcode: string;
  org_id: string;
  activity_id: string;
  cust_nature: string;
  firstname: string;
  middlename: string;
  lastname: string;
  firmname: string;
  panno: string;
  img: string;
  bpc_id: string;
  complete: string;
  mobileno: string;
  add1: string;
  add2: string;
  add3: string;
  pincode: string;
  area: string;
  city: string;
  state: string;
  country: string;
  email: string;
  billing: string;
  shipping: string;
}



export interface customerbilling{
  _identifier: string;
  id: string;
  saddress1:string;
  saddress2:string;
  saddress3:string;
  mmstCttv:string;
  region:string;
  country:string;
  spincode:string
  isbilling:string;
  isshipping:string;
  mmstPostOffVal:string;
  mmstCttv$_identifier:string;
  mmstSgstno:string;

}


@Injectable({
  providedIn: 'root'
})
export class NewcustomerService {

  constructor(public http: HttpClient,public loginauth:LoginauthService,private genericHTTP:GenericHttpClientService) { }

  getBPCategory(activityid: String){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerCategory?'
    + '_selectedProperties=id,_identifier&'
    + '_where=active=true%20and%20EM_Mmst_Org_Act=\'' + activityid + '\'',false,!this.loginauth.isloginactive);
  }
  getBPartner(activityid: String){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
    + '_selectedProperties=id,_identifier&'
    + '_where=EM_Mmst_Org_Act=\'' + activityid + '\'',false,!this.loginauth.isloginactive);
  }

  
  getPincode(pincode :string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_post_off?'
   + '_where=active=true%20and%20spincode=\'' + pincode + '\''
   ,false,!this.loginauth.isloginactive);
  }

  getregion(pincode :string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/Region?'
   + '_selectedProperties=mmstRegioncode,name&' 
    + '_where=active=true%20and%20id=\'' + pincode + '\'',false,!this.loginauth.isloginactive
    );
  }
  getarea(area_id: String){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_post_off_val?'
   + '_where=active=true%20and%20Mmst_Post_Off_ID=\'' + area_id + '\''
   ,false,!this.loginauth.isloginactive);
    
  }

  geteditcustmerheader(Cust_id : string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
    + '_where=id=\'' + Cust_id + '\''
    ,false,!this.loginauth.isloginactive);
    
  }

  geteditcustmerdetailapi(Cust_id : string){
    
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileCustomerDetails?'
   + 'cust_id='+Cust_id 
   ,false,!this.loginauth.isloginactive);
    
  }




  checkmobileno(mobile : string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
    + '_where=smobile=\'' + mobile + '\''
    ,false,!this.loginauth.isloginactive);
    
  }


  geteditcustmerbilling(Cust_id : string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer_billing?'
    + '_where=mmstCustomer=\'' + Cust_id + '\''
    ,false,!this.loginauth.isloginactive);
    
  }
 geteditcustmercompliance(Cust_id : string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_cust_compilance?'
    + '_where=mmstCustomer=\'' + Cust_id + '\''
    ,false,!this.loginauth.isloginactive);
    
  }
  getreferalcustmer(selectedactivity:string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
  + '_where=mmstOrgAct=\'' + selectedactivity + '\'',false,!this.loginauth.isloginactive);
  }


  LeadComplete(leadcomplete:any) {
    
    let login='';
    let password='';
    if(!this.loginauth.isloginactive){
       login = 'ionic.appuser';//"P2admin";
       password = 'ionic.appuser';//"Pass2020";
    }else{
      login=this.loginauth.user
      password=this.loginauth.pass
    }
    const auth=btoa(login+":"+password);
    const httpOptions = {
      headers: new HttpHeaders({
       'Authorization':'Basic '+auth
  
        })
      };
      var  specificHeader = { 'Authorization':'Basic '+auth}
    return this.genericHTTP.postformdata(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileNewLeadComplete'
     ,leadcomplete, specificHeader, httpOptions);
   }
   getCompilanceDataapi(bpc_id: String,Cust_id:string) {
     
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileComplianceData?'
     +'bpc_id=' + bpc_id +'&cust_id='+Cust_id,false,!this.loginauth.isloginactive );
  } 

  getCompilanceData(bpc_id: String) {
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_compliance_details?'
    + '_where=bpGroup=\'' + bpc_id + '\'',false,!this.loginauth.isloginactive
    );
  }

  getsalesarea(user_id: String,searchtext:string) {
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileSalesAreaUserWise?'
    + 'user_id=' + user_id
    + '&activity_id=' + this.loginauth.selectedactivity.id 
    + '&strsearch='+searchtext,false,!this.loginauth.isloginactive
    );
  }

  getUserActivityAgreementStatus() {	
     

    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserActivityAgreementStatus?'	
    + 'newregistration=Y',false,!this.loginauth.isloginactive);	
  }
  getPreferredTransportModes() {	
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.BusinessPartnerVendor?'	
    + 'transport=true');	
  }

}
