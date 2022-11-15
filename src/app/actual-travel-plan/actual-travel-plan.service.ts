import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ActualTravelPlanService {
  readonly TAG = 'ActualTravelPlanService';
  constructor(public http: HttpClient,public loginauth: LoginauthService,private genericHTTP: GenericHttpClientService) 
  { }
  getWMobileUserWisePlanData(istravelclosure:string,mexp_visitplan_id?:string){
    if(mexp_visitplan_id){
      return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWisePlanData?'
      + 'user_id=' + this.loginauth.userid
      + '&istravelclosure=' + istravelclosure
      + '&mexp_visitplan_id=' + mexp_visitplan_id
      );
    }else{
      return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWisePlanData?'
      + 'user_id=' + this.loginauth.userid
      + '&istravelclosure=' + istravelclosure
      );
    }
       
    
      }
      SaveActualPlan(template:any) {
   
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
       
         return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVisitActualPlan'
         ,template, httpOptions);
    
      }


}
