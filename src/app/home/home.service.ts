import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginauthService } from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  readonly TAG = "Dashboard Service"
  constructor(public http: HttpClient, public loginauth: LoginauthService, private genericHTTP: GenericHttpClientService) { }


  getdashboardapi1() {

 
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_lov?'
      + '_where=scode=\'IonicML\'',false,true);


  }

  getdashboardapi(id) {

    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_lov_val?'
      + '_selectedProperties=id,code&'
      + '_where=mmstLov%20IN(\'' + id + '\')'
      + '&_orderby=Created%20Desc',false,true);


  }

  CustomerWiseSalesInfo(date) {

    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.CustomerWiseSalesInfo?'
      + 'date=' + date
      + '&userid=' + this.loginauth.userid
      + '&activity=' + this.loginauth.selectedactivity.id);


  }
  public getDashboardTypeList(){
    try {
          let URL = this.loginauth.commonurl + 'ws/in.mbs.webservice.DashBoardSalesTarget?'
           'userid=' + this.loginauth.userid
          + '&activityid=' + this.loginauth.selectedactivity.id;
          return this.genericHTTP.get(URL);
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public getTargetSalesPeriod(){
    try {
      let URL = this.loginauth.commonurl + 'ws/in.mbs.webservice.DashBoardSalesTarget?'
       +'userid=' + this.loginauth.userid
      + '&activityid=' + this.loginauth.selectedactivity.id;
      return this.genericHTTP.get(URL);
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public getTargetSalesPeriodData(selectedTargetSalesMonth){
    try {
      let getTargetSalesPeriodDataURL = this.loginauth.commonurl + 'ws/in.mbs.webservice.DashBoardSalesTarget?'
      + 'userid=' + this.loginauth.userid
      + '&activityid=' + this.loginauth.selectedactivity.id
      + '&mmis_target_id=' + selectedTargetSalesMonth.mmis_target_id;
    //  console.log(this.TAG,"getTargetSalesPeriodData URL",getTargetSalesPeriodDataURL);
      return this.genericHTTP.get(getTargetSalesPeriodDataURL);
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }

}
