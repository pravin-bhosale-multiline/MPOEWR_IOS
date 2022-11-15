import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { CorporateEmployee } from 'src/assets/model/CorporateEmployee';
import { PagedData } from 'src/assets/model/PagedData';
import { Commonfun } from 'src/provider/commonfun';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { LoginauthService } from '../login/loginauth.service';
import { Page } from '../order-approval/show-approval-details-modal/show-approval-details-modal.page';
// import data from '../../assets/data/company.json';

import data from '../../assets/data/company.json'
import { map } from 'rxjs/operators';
import { Constants } from '../common/Constants';

const companyData = data as any[];



@Injectable({
  providedIn: 'root'
})
export class ConsolidationOrderService {

  readonly TAG = "Consolidation Order Service";
    constructor(private genericHttpClientService: GenericHttpClientService,
                private loginService: LoginauthService,
                private commonFunction: Commonfun,
                public platform: Platform,
                public http: HttpClient) { }


  public getPrimaryCustomer(strsearch?:string){
    try {
           
            if(!!strsearch){
              strsearch=strsearch.replace(/ /g,"%20")
            } else {
              strsearch ="";
            }
           
            let getCustomerURL = this.loginService.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomer?'
            + this.loginService.parameter 
            + '&user_id=' + this.loginService.userid
            + '&strsearch=' + strsearch
            + '&activity_id=' + this.loginService.selectedactivity.id
            + '&ordertypeionic=' + ""
            + '&isprimary='+"Y";
          //  console.log(this.TAG,"getPrimaryCustomer",getCustomerURL);
  
            return this.genericHttpClientService.get(getCustomerURL);
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public getPrimaryCustomerBillingAddress(businessPartner_id : string){
    try {
          return this.genericHttpClientService.get(this.loginService.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerLocation?'
          + this.loginService.ReadOnlyparameter + '&'
          + '_selectedProperties=id,name,shipToAddress,invoiceToAddress&' 
          + '_where=active=true%20and%20businessPartner=\'' + businessPartner_id + '\''
          );
    } catch (error) {
      throw error;
    }
  }
  public getSecondaryCustomerFromApi(bp_id,offset){
    try {
          
        //  console.log(this.TAG,offset);
          let getCustomerURL = this.loginService.commonurl + 'ws/in.mbs.webservice.SebiaSecondaryCustList?'
          + this.loginService.parameter 
          + '&user_id=' + this.loginService.userid
          + '&bp_id=' + bp_id
          + '&offset=' + offset
          + '&activity_id=' + this.loginService.selectedactivity.id;
          let dummyURL = "https://p2test.pispl.in/openbravo/ws/in.mbs.webservice.SebiaSecondaryCustList?user=hardik.pandya&password=pass&user_id=FFF20200727061334922CD0B9DE67B63&bp_id=FFF2020030902464717516D985A526FB&offset=20&activity_id=FFF202012061211195489D3E4DD35FC1"
          console.log(this.TAG,"getSecondaryCustomerFromApi",getCustomerURL);

          return this.genericHttpClientService.get(getCustomerURL);
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public getDummy(){
    try {
            return this.http.get('assets/data/login.json');
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  /**
   * A method that mocks a paged server response
   * @param page The selected page
   * @returns {any} An observable containing the employee data
   */
  public getResults(page: Page): Observable<PagedData<CorporateEmployee>> {
    return of(companyData).pipe(map(d => this.getPagedData(page)));
  }

  /**
   * Package companyData into a PagedData object based on the selected Page
   * @param page The page data used to get the selected data from companyData
   * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
   */
  private getPagedData(page: Page): PagedData<CorporateEmployee> {
    const pagedData = new PagedData<CorporateEmployee>();
    page.totalElements = companyData.length;
    page.totalPages = page.totalElements / page.size;
    const start = page.pageNumber * page.size;
    const end = Math.min(start + page.size, page.totalElements);
    for (let i = start; i < end; i++) {
      const jsonObj = companyData[i];
      const employee = new CorporateEmployee(jsonObj.name, jsonObj.gender, jsonObj.company, jsonObj.age);
      pagedData.data.push(employee);
    }
    pagedData.page = page;
    return pagedData;
  }

  public consolidateOrderService(orderList,selectedBusinessPartner,Shipping,Billing){
    try {
            let login =this.loginService.user;
            let password = this.loginService.pass;
            const auth=btoa(login+":"+password);
            const httpOptions = {
              headers: new HttpHeaders({
                  'Content-Type':'application/json',
                  'Accept':'application/json',  
                  'Authorization':'Basic '+auth
                })
              };
            
              let mbso_copord_id=[];
             
              orderList.forEach(element => {
                mbso_copord_id.push(element.mbso_copord_id);
              });
              
              
              let dataClose={
                "consolidated_order":"Y",
                "bp_id":selectedBusinessPartner.id,
                "shiploc_id":Shipping,
                "billloc_id":Billing,
                "user_id": this.loginService.userid,
                "mbso_copord_id":mbso_copord_id
              };

            //  console.log(this.TAG,"Consolidate Order Service Post FINAL",dataClose);
              let consolidate_order_url = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.SebiaConsolidatedOrder?'
              return  this.genericHttpClientService.post(consolidate_order_url,dataClose,httpOptions);
    } catch (error) {
      //  console.log(this.TAG,error);
    }
  }
  public consolidateOrderCloseService(orderList,selectedBusinessPartner,Shipping,Billing){
    try {
            let login =this.loginService.user;
            let password = this.loginService.pass;
            const auth=btoa(login+":"+password);
            const httpOptions = {
              headers: new HttpHeaders({
                  'Content-Type':'application/json',
                  'Accept':'application/json',  
                  'Authorization':'Basic '+auth
                })
              };
              
              let mbso_copord_id=[];
             
              orderList.forEach(element => {
                mbso_copord_id.push(element.mbso_copord_id);
              });
              
              
              let dataClose={
                "consolidated_order":"N",
                "bp_id":selectedBusinessPartner.id,
                "shiploc_id":Shipping,
                "billloc_id":Billing,
                "user_id": this.loginService.userid,
                "mbso_copord_id":mbso_copord_id
              };
            
            //  console.log(this.TAG,"Consolidate Order Close Service Post FINAL",dataClose);
              let consolidate_order_close_url = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.SebiaConsolidatedOrder?'
              return  this.genericHttpClientService.post(consolidate_order_close_url,dataClose,httpOptions);
    } catch (error) {
      //  console.log(this.TAG,error);
    }
  } 

}
