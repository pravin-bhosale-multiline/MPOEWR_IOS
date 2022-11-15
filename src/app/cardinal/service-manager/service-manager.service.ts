import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { GenericHttpClientService } from 'src/app/common/generic-http-client.service';
import { LoginauthService } from 'src/app/login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagerService {
  
  /**
   * 
   */
  readonly TAG = "ServiceManagerService";

  constructor(private genericHTTP: GenericHttpClientService,
              public loginService: LoginauthService,
              public httpClient: HttpClient) { }

  public getComplaintList(screen?){
    try {
          let complainListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.CustomerServiceDetails?'+
          'userid=' + this.loginService.userid
           +'&appcomplaint='+'N'
           +'&servmanager='+'Y' 
           +'&serveng='+'N'
           +'&sparesku='+'N'
           +'&activity='+this.loginService.selectedactivity.id;        ;
        //  console.log("getComplaintList",complainListURL);
          return this.genericHTTP.get(complainListURL);
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  
  public getDealerList(){
    try {
          let dealerListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.BusinessPartnerAsPerCategory?'+
           'activityid=' + this.loginService.selectedactivity.id +
          '&c_bgroup_id='+this.loginService.dealer_id;
        //  console.log(this.TAG,"Dealer List URL",dealerListURL);
          return this.genericHTTP.get(dealerListURL);
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public getVenderList(){
    try {
            let venderListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.BusinessPartnerAsPerCategory?'+
             'activityid=' + this.loginService.selectedactivity.id +
            '&c_bgroup_id='+this.loginService.vender_id;
          //  console.log(this.TAG,"Vender List URL",venderListURL);
            return this.genericHTTP.get(venderListURL);
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public getSalesRepresentativeList(bid){
    try {
            let salesRepresentativeListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.CustomerServiceSalesRep?'+
             'user_id=' + this.loginService.userid +
            '&bpid='+bid;
          //  console.log(this.TAG,"Sales Representative List URL",salesRepresentativeListURL);
            return this.genericHTTP.get(salesRepresentativeListURL);
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }

  public getDesignationOfComplainerList(){
    try {
            let designationOfComplainerListURL =  Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvalues?'+
            'user_id=' + this.loginService.userid +
            '&type=DC';
            return  this.genericHTTP.get(designationOfComplainerListURL);
    } catch (error) {
    //  console.error(this.TAG,error);
    }
  }
}