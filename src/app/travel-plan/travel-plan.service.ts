import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class TravelPlanService {
  readonly TAG = 'TravelPlanService';
  constructor(public http: HttpClient,public loginauth: LoginauthService,private genericHTTP: GenericHttpClientService) 
  { }

  getUserWiseSalesPerson(offset : string,strsearch:string,ondatechange:string,lat:string,long:string,outstation:string){
    
  
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseSalesPerson?'
    + 'user_id=' + this.loginauth.userid
    + '&strsearch=' + strsearch 
    + '&offset=' + offset 
    + '&ondatechange=' + ondatechange 
    + '&lat=' + lat 
    + '&long=' + long
    + '&outstation='+outstation);
  }
  getSearchNearestPersoni(bpcutadd_id:string,offset : string,strsearch:string,outstation:string){
      
    
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileSearchNearestPerson?'
                                   + 'userid=' + this.loginauth.userid
                                   + '&strsearch=' + strsearch 
                                   + '&bpcutadd_id=' + bpcutadd_id 
                                   + '&offset=' + offset
                                   + '&outstation='+outstation);
  }
  getPlan(planname :string){
   planname=planname.replace(/ /g,"%20")
      return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mexp_visitplan?'
      + '_where=Planname=\'' + planname + '\'',false,false
      );
  }
  SavePlan(template:any) {
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
     return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVisitPlan',template,httpOptions);

  }
}
