import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BusinessPartnerAddressService {

  constructor(public platform: Platform,public http: HttpClient,public loginauth:LoginauthService,private genericHTTP:GenericHttpClientService) { }

  getaddressbycustid(bp_id:string){
    //  businessPartner_id="FFF20190328042044745CEDE4F2E670B";
    
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileBPartnerAddList?'
    + 'bp_id=' + bp_id 
    );
    }

    getexistcustmerapi(searchkey:string){
      
      return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileBPatnerAddCust?'
      + 'user_id=' + this.loginauth.userid
      + '&strsearch=' + searchkey
      + '&activity_id=' + this.loginauth.selectedactivity.id
      );
      }


    SaveAddress(addressjson:any) {
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

       return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileCustomerAddInsert'
       ,addressjson, httpOptions);
     }




}
