import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { GenericHttpClientService } from 'src/app/common/generic-http-client.service';
import { LoginauthService } from 'src/app/login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class VenderApprovalService {

  readonly TAG = "VenderApprovalService";
  constructor(private genericHTTP: GenericHttpClientService,
    public loginService: LoginauthService,
    public httpClient: HttpClient) { }


  public getVenderApprovalList() {
    try {
          let venderApprovalListURL = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceDetails?' +
          'userid=' + this.loginService.userid
          +'&appcomplaint='+'Y'
          +'&servmanager='+'N' 
          +'&serveng='+'N'
          +'&sparesku='+'N'
          +'&activity='+this.loginService.selectedactivity.id;
        //  console.log(this.TAG,"GET Vender Approval List",venderApprovalListURL)
          return this.genericHTTP.get(venderApprovalListURL);
    } catch (error) {
      console.error(this.TAG, error);
    }
  }

  public getServiceEngList() {
    try {
          let serviceEngListURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.BusinessPartnerVendor?'+
          this.loginService.parameter + '&userid=' + this.loginService.userid +
          '&activityid='+this.loginService.selectedactivity.id
        //  console.log(this.TAG,"Service Eng URL",serviceEngListURL);
          return this.genericHTTP.get(serviceEngListURL);
    } catch (error) {
      console.error(this.TAG, error);
    }
  }

}