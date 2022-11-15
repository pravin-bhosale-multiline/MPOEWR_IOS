import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Selectedinterface } from '../profile/selectedinterface';
import { Profileinterface } from '../profile/profileinterface';
import { Constants } from '../common/Constants';
import { GenericHttpClientService } from '../common/generic-http-client.service';



export interface Profilefinalresponse {
  response: Profileresponse;
}

export interface  Port {
  id: number;
  name: string;
}
export interface Profileresponse {
  data: Profileinterface[];
  endRow: any;
  startRow: any;
  status: any;
  totalRows: any;
}
/* get role list */
export interface RolelistFinal {
  role: string;
  role$_identifier: string;
  mmsaSecurerule: string;
  userContact: string;
}
/*get Organization */
export interface UserOrglistFinal {
  organization: string;
  organization$_identifier: string;
}
/*Interface warehouse */
export interface Warehouse {
  id: string;
  _identifier: string;
}
/* get Activity ID */
export interface AllAct {
  _identifier: string;
  id: string;
}
/* get user wise Activity ID */
export interface userwiseAct {
  mmstOrgAct$_identifier: string;
  mmstOrgAct: string;
 
}
export interface customerheader {
  _identifier: string;
  id: string;
  sfname:string;
  smname:string;
  slname:string;
  sfirmName:string;
  scusNature:string;
  mmstOrgAct:string;
  spanno:string;
  uploadedImage:string;
  bpGroup:string;
  smobile:string;
  semail:string;
  tAGBpartner:string;
  mmstLovVal$_identifier:string;
  newlead:string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginauthService {
  commonurl = Constants.DOMAIN_URL + '/openbravo/';
  isexpenseaccess=false;
  isschemeinfo=false;
  

  public isNewLead = false;
  public isExistingLead = false;
  public isBusinessPartnerAddress = false; 
  public isNewOrder = false;
  public isDraftOrder = false;
  public isOrderStatus = false;

  public isLatLongFinder = false;
  public isTravelPlan = false;
  public isActualTravelPlan = false;
  public isTravelExpense = false;
  public isTravelPlanClosure = false;
  public isApprovalAccess = false;
   
  public isCustomerServiceAccess = false;
  public isComplaintReportingAccess = false;
  public isCompliantAcceptanceAccess = false;
  public isFieldVisitAccess = false;
 
  public isQuotationAccess = false;
  public isQuotationApproval = false;
  
  public isUpload = false;
  public isReport = false;
  public isMPRFormAccess = false;

  public isConsolidationOrder = false;
  public isARVisitSchedule = false;

  dashboard=false;
  logoimgeBase64='';
  selectedactivity=null;  
  parameter: string;
  user: string;
  pass: string;
  userid: string;
  mmsaSecurerule: string;
  roleid: string;
  selprofile: Selectedinterface;
  defaultprofile: Profileinterface[];
  rolelist: RolelistFinal[];
  logintype:string;
  ReadOnlyUsername:string
  ReadOnlypassword:string
  ReadOnlyparameter:string
  minlistcount:any=10;
  mindatetravelplan:any=7;
  isloginactive=false;
  //maxcustomerinplan:any=10;



  roleWiseDashboard;

  approvalScreen = false;
  Discount_Method='';
  dealer_id;
  service_manager_id;
  vender_id;

  public appPages = [
    {
      title: 'New Lead',
      url: '/newcustomer',
      icon: 'person-add'
    },

    {
      title: 'Existing Lead',
      url: '/existingcustomer',
      icon: 'person'
    },
    {
      title: 'New Order',
      url: '/neworder',
      icon: 'clipboard'
    },
    {
      title: 'Existing Order',
      url: '/existingorder',
      icon: 'list-box'
    },
    {
      title: 'Order Status',
      url: '/order-status',
      icon: 'stats'
    },
    {
      title: 'Business Partner Address',
      url: '/business-partner-address',
      icon: 'clipboard'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];

  public OldappPages = [
    {
      title: 'New Lead',
      url: '/newcustomer',
      icon: 'person-add'
    },

    {
      title: 'Existing Lead',
      url: '/existingcustomer',
      icon: 'person'
    },
    {
      title: 'New Order',
      url: '/neworder',
      icon: 'clipboard'
    },
    {
      title: 'Existing Order',
      url: '/existingorder',
      icon: 'list-box'
    },
    {
      title: 'Order Status',
      url: '/order-status',
      icon: 'stats'
    },
    {
      title: 'Business Partner Address',
      url: '/business-partner-address',
      icon: 'clipboard'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];
  selectedprof: Selectedinterface;
  reportjson={};
  selectedreport;
  iscutsomdefined=false;
  constructor(public http: HttpClient,private genericHTTP: GenericHttpClientService) { }

getreportdet(roleid: string,type:String,reportcatid:string,reportsubcatid:string) {
  return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.exportdata.MEXDGetReportCategory?'
  + 'roleid=' + roleid+ '&type=' + type+ '&reportcatid=' + reportcatid+ '&reportsubcatid=' + reportsubcatid );
}

  login(user: string, pass: string ) {
    this.parameter = 'user=' + user + '&password=' + pass + '&isextapp=Y';
    this.user = user;
    this.pass = pass;
    this.genericHTTP.user=user;
    this.genericHTTP.pass=pass;
    
     return this.genericHTTP.get(this.commonurl + 'secureApp/LoginHandler.html?'
     + this.parameter); 
     
      // const auth=btoa(user+":"+pass);
      // const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type':'application/json',
      //     'Accept':'application/json',
      //   'Authorization':'Basic '+auth
    
      //     })
      //   };
        
      //  return this.genericHTTP.post(this.commonurl + 'secureApp/LoginHandler.html?' + this.parameter
      //  ,{}, httpOptions);
    
  

   
    
  }
  insertuserlog(userid) {

    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileUserLogService?'
     +'userid=' + userid);
  }
  forgetuser(username) {
    
    return this.genericHTTP.get(this.commonurl
      + 'ws/in.mbs.webservice.MobileOtpService?user=ionic.appuser&password=ionic.appuser&action=forgetpass&username='
      + username);
  }
  getmobileno(username) {
    return this.genericHTTP.get(this.commonurl
      + 'ws/in.mbs.webservice.MobileOtpService?user=ionic.appuser&password=ionic.appuser&action=getmobileno&username='
      + username);
  }
  changepassword(username, newpass, otp) {
    return this.genericHTTP.get(this.commonurl
      + 'ws/in.mbs.webservice.MobileOtpService?user=ionic.appuser&password=ionic.appuser&action=changepass&username='
      + username + '&newpass=' + newpass + '&otp=' + otp);
  }
  getdefaultprofile() {
     return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/ADUser?'
    + '_selectedProperties=id,name,email,defaultClient,defaultClient$_identifier,defaultOrganization,'
    + 'defaultOrganization$_identifier,mmstOrderusrtype,defaultRole,defaultRole$_identifier,defaultWarehouse,defaultWarehouse$_identifier,'
    + 'mmstReward,mmstOrdercaptureapp&'
    + '_where=username=\'' + this.user + '\'');
  }
  getrolelist(userid: string) {
     return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/ADUserRoles?'
    + '_selectedProperties=role,role$_identifier,mmsaSecurerule,userContact&'
    + '_where=userContact=\'' + userid + '\'');
  }
  getuserorg(userid: string, mmsaSecurerule: string) {
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/MMSA_UserOrg?'
    + '_selectedProperties=organization,organization$_identifier&_sortBy=name&'
    + '_where=user=\'' + userid + '\'%20and%20mmsaSecurerule=\'' + mmsaSecurerule +'\'');
  }
  getorgwarehouse(orgid: string) {
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/Warehouse?'
    + '_selectedProperties=id,_identifier&_sortBy=_identifier&'
    + '_where=organization=\'' + orgid + '\'');
   // 
  }
  setdefaultprofile(selprof: Selectedinterface) {
    this.selprofile = selprof;
   // 
  }




  GetReportPage (jsonreport:any) {
    let login = this.user;//"P2admin";
    let password = this.pass;//"Pass2020";
    const auth=btoa(login+":"+password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
      'Authorization':'Basic '+auth
     
        })
      };
     return this.genericHTTP.post(this.commonurl + 'ws/in.mbs.exportdata.MEXDGetReportParaPage'
     ,jsonreport,httpOptions);
   } 
  getReportPara(rptid:string) {
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.exportdata.MEXDGetReportPara?'
    + 'rptid=' + rptid);
  } 
  sendEmailReport (jsonreport:any) {
    let login = this.user;//"P2admin";
    let password = this.pass;//"Pass2020";
    const auth=btoa(login+":"+password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
      'Authorization':'Basic '+auth
     
        })
      };
     return this.genericHTTP.post(this.commonurl + 'ws/in.mbs.exportdata.MEXDEmailAction'
     ,jsonreport,httpOptions);
   } 
   downloadExcelPDF(jsonreport:any){


     return this.genericHTTP.postformdataDownload(this.commonurl + 'ws/in.mbs.exportdata.MEXDEmailAction'
     ,jsonreport);


   
   }
  getbomlist() {
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mbom_bom?'
    + '_selectedProperties=id,_identifier');
  }
  getjoblist(userid) {
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_joblist?'
    + '_where=reject=false and mmstScomplete=false and mwmsJobassignment.user=\'' + userid + '\'');
  }
   getjob(jobid) {
   return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_joblist?'
    + '_where=id=\'' + jobid + '\'');
  }
  getjobassignment(jobassignmentid) {
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_jobassignment?'
     + '_where=id=\'' + jobassignmentid + '\'');
  }
  getuserlist(jobtypeid) {
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_wmsuser?'
   + '_selectedProperties=user,$user$_identifier&'
    + '_where=mwmsJobtype=\'' + jobtypeid + '\'');
  }
  acceptJob(joblistid) {
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJobListRequest?'
    + 'joblistid=' + joblistid + '&accept=true');
  }
  rejectJob(joblistid) {
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJobListRequest?'
     + 'joblistid=' + joblistid + '&reject=true');
  }
  transferJob(joblistid, userid, reason) {
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJobListRequest?'
    + 'joblistid=' + joblistid + '&transfer=true&userid=' + userid + '&reason=' + reason);
  }
  getProductlistFromBatch(batch) {
    
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileTask?'
     + 'batch=' + batch);
  }
  insertJobDetails(joblistid, productmovtype, batch, productid, qty, binno, tobinno, batchid, iscomplete) {
   // 
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJoblistDetails?'
     + 'joblistid=' + joblistid + '&productmovtype=' + productmovtype
    + '&batch=' + batch + '&productid=' + productid + '&qty=' + qty
    + '&binno=' + binno + '&tobinno=' + tobinno + '&batchid=' + batchid + '&iscomplete=' + iscomplete);
  }

  getuserwiseactivity(user_id: String) {
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseOrgActivity?'
    + 'userid=' + user_id);
  }
  getAllActivity(){
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mmst_org_act?'
    + '_selectedProperties=id,_identifier&');
  }
  getAllActivity1(organization:any){
  
   return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/Organization?'
    + '_selectedProperties= mmstOrgAct$_identifier,mmstOrgAct&'
    + '_where=id IN (' + organization + ')'
  );
  }
  getuserorgwise(userid: string) {
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/MMSA_UserOrg?'
    + '_selectedProperties=organization,organization$_identifier&'
    + '_where=user=\'' + userid + '\'');
  }
  getexistcustmer(selectedactivity:string,searchkey:string){
    return this.genericHTTP.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
    //+ '_selectedProperties=id,_identifier,Sfname,Slname&' 
    + '_where=scomplete=false and mmstOrgAct=\'' + selectedactivity + '\' and createdBy=\'' + this.userid + '\''
    +'and ((lower(translate(sfirmName,\' \',\'\')) LIKE lower(\'%25' + searchkey + '%25\'))'
    + 'or (lower(translate(sfname,\' \',\'\')) LIKE lower(\'%25' + searchkey + '%25\'))'
    + 'or (lower(translate(slname,\' \',\'\')) LIKE lower(\'%25' + searchkey + '%25\')))'    
    );
    
    
  }

  getexistcustmerapi(selectedactivity:string,searchkey:string){
   // 
    return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.WMobileActivityWiseLead?'
    + 'user_id=' + this.userid
    + '&strsearch=' + searchkey
    + '&activity_id=' + selectedactivity 
    );
    }
    
    checkApprovalScreenAccess(){
     
     
     
     
      this.getrolelist(this.userid);
     
      return this.genericHTTP.get(this.commonurl + 'ws/in.mbs.webservice.OrderStatusApprove?'
      + 'user_id=' + this.userid);
    }


}
