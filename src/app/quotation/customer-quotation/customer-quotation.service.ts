import { Form } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Constants } from 'src/app/common/Constants';
import { Commonfun } from 'src/provider/commonfun';
import { GenericHttpClientService } from '../../common/generic-http-client.service';
import { LoginauthService } from '../../login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerQuotationService {

  readonly TAG = "Customer Quotation Service"
  constructor(private genericHttpClientService: GenericHttpClientService,
              private loginService: LoginauthService,
              private commonFunction: Commonfun,
              public platform: Platform,
              public http: HttpClient) { }


public getCustomer(strsearch?:string){
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
          + '&activity_id=' + this.loginService.selectedactivity.id;
          + '&ordertypeionic=' + ""
        //  console.log(this.TAG,"getCustomer",getCustomerURL);

        //  return this.genericHttpClientService.get(getCustomerURL).map(response =>response.slice(0.9));
        return this.genericHttpClientService.get(getCustomerURL);
  } catch (error) {
  //  console.log(this.TAG,error);
  }
}
public getcustmerbillingaddress(businessPartner_id : string){
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
public getServiceProduct(strsearch:string,bpid){
  try {
        
    let getServiceProductURL;
    if(!!strsearch) {
    getServiceProductURL = this.loginService.commonurl + '/ws/in.mbs.webservice.ActivityContractTypeWiseProd?'
      + this.loginService.parameter 
      + '&user_id=' + this.loginService.userid
      + '&activity_id=' + this.loginService.selectedactivity.id
      + '&strsearch=' +strsearch
      + '&bpid=' + bpid
    } else {
      getServiceProductURL = this.loginService.commonurl + '/ws/in.mbs.webservice.ActivityContractTypeWiseProd?'
      + this.loginService.parameter 
      + '&user_id=' + this.loginService.userid
      + '&activity_id=' + this.loginService.selectedactivity.id
      + '&strsearch=' +""
      + '&bpid=' + bpid
    }  
      
      
    //  console.log(this.TAG,"getServiceProductURL",getServiceProductURL);
      return this.genericHttpClientService.get(getServiceProductURL);
  } catch (error) {
  //  console.log(this.TAG,error);
  }
}
public getSerialNoProductList(m_product_id: string, searchchar: string){
  try {
        if(this.platform.is('android')){
          return this.http.get(this.loginService.commonurl + 'ws/in.mbs.webservice.SerialnoProdContracttypeWise?'
          + this.loginService.parameter
          + '&m_product_id=' + m_product_id
          + '&activityid=' + this.loginService.selectedactivity.id
          + '&strsearch=' + searchchar
         );
        } else if(this.platform.is('ios')){
            return this.genericHttpClientService.get(this.loginService.commonurl + 'ws/in.mbs.webservice.SerialnoProdContracttypeWise?'
            + this.loginService.parameter
            + '&m_product_id=' + m_product_id
            + '&activityid=' + this.loginService.selectedactivity.id
            + '&strsearch=' + searchchar
            );
        } else {
             
          let url = this.loginService.commonurl + 'ws/in.mbs.webservice.SerialnoProdContracttypeWise?'
          + this.loginService.parameter
          + '&m_product_id=' + m_product_id
          + '&activityid=' + this.loginService.selectedactivity.id
          + '&strsearch=' + searchchar;
       //   console.log(this.TAG,"Serial Number list url",url);
             return this.http.get(url);
        }
  } catch (error) {
  //  console.log(this.TAG,error);
  }
}
public getSerialNoProductDetail(bpid: string, m_product_id: string,shippadd: string, billadd: string){
  try {
        
        let getSerialNoProductDetailURL = this.loginService.commonurl + 'ws/in.mbs.webservice.customerproductwiserate?'
        + this.loginService.parameter
        + '&activity_id=' + this.loginService.selectedactivity.id
        + '&bpid=' + bpid
        + '&m_product_id=' + m_product_id
        + '&shipid=' + shippadd
        + '&billid=' + billadd;
      //  console.log(this.TAG,"getSerialNoProductDetailURL",getSerialNoProductDetailURL);
        return this.genericHttpClientService.get(getSerialNoProductDetailURL);

  } catch (error) {
  //  console.log(this.TAG,error);
  }
}
public saveQuotation(form,serialNumberList){
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
          let data = {
                        "userid":this.loginService.userid,
                        "bpid": form.bpid ? form.bpid : "",
                        "billid": form.billid ? form.billid : "",
                        "shipid": form.shipid ? form.shipid : "",
                        "orderdate": form.orderdate ? form.orderdate : "",
                        "m_product_id": form.m_product_id ? form.m_product_id:"",
                        "complaintno": form.complaintno ? form.complaintno:"",
                        "quatationline":serialNumberList ? serialNumberList : ""
                     };
        //  console.log(this.TAG,"Save Quotation Final Data",data);
           
          let save_quotation = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.CustomerQuotationInsert?'
          return  this.genericHttpClientService.post(save_quotation,data,httpOptions);

  } catch (error) {
  //  console.log(this.TAG,error);
  }
}
public getQuotationList(){
  try {
        let getQuotationListURL = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerQuotationDetails?' +
        this.loginService.parameter + '&userid=' + this.loginService.userid
        +'&activity='+this.loginService.selectedactivity.id;
      //  console.log(this.TAG,"GET Vender Approval List",getQuotationListURL)
        return this.genericHttpClientService.get(getQuotationListURL, {});
  } catch (error) {
  //  console.log(this.TAG,error);
  }
}
public approveQuotation(complaintno,approve,reject){
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
          let data = {
            "userid":this.loginService.userid,
            "msnr_quotationreq_id":complaintno.msnr_quotationreq_id,
            "approve":approve,
            "reject":reject,
           

          };
         



        //  console.log(this.TAG,"Approve Quotation Final Data",data);
          
          let save_quotation = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.CustomerQuotationApproval?'
          return  this.genericHttpClientService.post(save_quotation,data,httpOptions);
  } catch (error) {
  //  console.log(this.TAG,error);
  }
}




}
