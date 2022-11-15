import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import {LoginauthService} from '../login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class TermsOfAgreementService {

  constructor(public http: HttpClient,public loginauth: LoginauthService,private genericHTTP: GenericHttpClientService) { }

  getUserActivityAgreementStatus() {
   return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserActivityAgreementStatus?'
    +'userid=' + this.loginauth.userid);
  }
  getWindowAccess(activity_id){
    let windowAccessAPI = this.loginauth.commonurl + 'ws/in.mbs.webservice.WindowAccess?'
   +'userid=' + this.loginauth.userid+'&activity='+activity_id;
   // console.log("Window Access API",windowAccessAPI);
    return this.genericHTTP.get(windowAccessAPI);
  }

  SaveAgreement(id:any,status:string,fileid,agreementtype) {
    var jsondatatemp=[{
      "id": id,
      "status": status,
      "user_id": this.loginauth.userid,
      "fileid": fileid,
      "agreementtype": agreementtype
      
    }]


    let login = this.loginauth.user;//"P2admin";
    let password = this.loginauth.pass;//"Pass2020";
    const auth=btoa(login+":"+password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
      'Authorization':'Basic '+auth

        })
      };


     return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileMobileAgreement'
     ,jsondatatemp, httpOptions);

  }


  ActivityWiseLOGO(act_id:any) {
   
    var jsondata={
      "act_id": act_id      
    }


    let login = this.loginauth.user;//"P2admin";
    let password = this.loginauth.pass;//"Pass2020";
    const auth=btoa(login+":"+password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
      'Authorization':'Basic '+auth

        })
      };


     return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.ActivityWiseLOGO'
     ,jsondata, httpOptions);

  }

}