import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LocationFinderService {

  constructor(public http: HttpClient,public loginauth: LoginauthService,private genericHTTP: GenericHttpClientService) { }


  getcustmerbillingaddress(leadid : string){
   
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer_billing?'
    + '_selectedProperties=id,name&' 
    + '_where=active=true%20and%20Mmst_Customer_ID=\'' + leadid + '\''
    );
    
  }

  
  getUserWiseCustomerForLatLong(strsearch:string){
    strsearch=strsearch.replace(/ /g,"%20")
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomerForLatLong?'
     +'user_id=' + this.loginauth.userid
    + '&strsearch=' + strsearch 
    + '&activity_id=' + this.loginauth.selectedactivity.id
    );

  }

  
  LatLongUpdate(addid:string,lat:string,long:string) {
    

    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileLatLongUpdate?'
    + '&addid=' + addid
    + '&lat=' + long
    + '&long=' + lat 
    );

   


   
   }

}
