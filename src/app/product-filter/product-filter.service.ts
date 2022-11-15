import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commonfun } from 'src/provider/commonfun';
import { Constants } from '../common/Constants';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { LoginauthService } from '../login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  readonly TAG = "Product Filter Service"
  constructor(private genericHttpClientService: GenericHttpClientService,
              private loginService: LoginauthService,
              private commonFunction: Commonfun,
              private httpClient:HttpClient) { }

public getSubFilterList(business_partner){
  try {
         
          //return this.httpClient.get('assets/data/price.json');
          let getFilterURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.DynamicFilterAsPerActivity?'+
          this.loginService.parameter + '&user_id=' + this.loginService.userid +
          '&activityid='+this.loginService.selectedactivity.id + '&bpartner_id='+business_partner.id;
          console.log("Get Filter URL",getFilterURL);
          return this.genericHttpClientService.get(getFilterURL);


    
  } catch (error) {
    console.log(this.TAG,error);
  }
}



}
