import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginauthService } from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SchemeInformationService {

  constructor(public http: HttpClient, public loginauth: LoginauthService, private genericHTTP: GenericHttpClientService,
    public platform: Platform) { }

  getcustmerapi(strsearch: string) {
    strsearch = strsearch.replace(/ /g, "%20")
    var ordertypeionic = "";
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomer?'
      + 'user_id=' + this.loginauth.userid
      + '&strsearch=' + strsearch
      + '&ordertypeionic=' + ordertypeionic
      + '&activity_id=' + this.loginauth.selectedactivity.id

    );
  }

  getproductapi(searchkey: string, cut_id: string) {



      return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.CustWiseProductScheme?'
        + 'searchchar=' + searchkey
        + '&cut_id=' + cut_id
      );
    


  }



  getCustProdWiseScheme(cut_id: string, prod_id: string) {

   
      return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.CustProdWiseScheme?'
        + 'user_id=' + this.loginauth.userid
        + '&activity_id=' + this.loginauth.selectedactivity.id
        + '&cut_id=' + cut_id
        + '&prod_id=' + prod_id);
    

  }

}
