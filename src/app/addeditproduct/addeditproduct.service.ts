import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginauthService } from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { Platform } from '@ionic/angular';
import { Constants } from '../common/Constants';



export interface Product {
  MainProduct: string;
  MainProductid: string;
  product: string;
  product_id: string;
  perqty: string;
  freeqty: string;
  MainProductQty: string;
  enteredfreeqty: string;
  isreeproduct:boolean;
  discount: string;
  rewardpoint: string;
  UOM: string;
  DiscountPer: string;
  Rate: string;
  Amount: string;
  Tax: string;
  TaxRate: string;
  GstAmount: string;
  TotalAmount: string;
  Taxid: string;
  show: string;

}



export interface ddlProduct {
  product: string;
  product_id: string;
  Quantity: string;
  perqty: string;
  freeqty: string;
  isreeproduct:boolean;
  enteredfreeqty: string;
  discount: string;
  DiscountAmount: string;
  Amount: string;
  rewardpoint: string;
  UOM: string;
  SchemeInformation: string;
  rate: string;
  Tax: string;
  TaxRate: string;
  GSTAmount: string;
  TotalAmount: string;
  show: false;
}

@Injectable({
  providedIn: 'root'
})
export class AddeditproductService {
  
  readonly TAG = "Add Edit Product Service"
  comselectedddlproductany: string;


  constructor(    public http: HttpClient, 
                  public loginauth: LoginauthService, 
                  private genericHTTP: GenericHttpClientService,
                  public platform: Platform) { }

  getproduct(searchtext: string, selectedactivity: string, Isdruglicence: boolean) {

    if (Isdruglicence == true) {
      return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/Product?'
        + '_where=active=true%20and%20mmstOrgAct=\'' + selectedactivity + '\' and (lower(translate(sku,\' \',\'\')) LIKE lower(\'%25' + searchtext + '%25\') or lower(translate(description,\' \',\'\')) LIKE lower(\'%25' + searchtext + '%25\'))'
      );
    }
    else {
      return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/Product?'
        + '_selectedProperties=id,_identifier,description&'
        + '_where=mmstOrgAct=\'' + selectedactivity + '\' and (lower(translate(sku,\' \',\'\')) LIKE lower(\'%25' + searchtext + '%25\') or lower(translate(description,\' \',\'\')) LIKE lower(\'%25' + searchtext + '%25\'))'
      );
    }
  }
  getproductapi(bpc_id: string, searchchar: string, billing: string, shipping: string, ordertypeionic: string) {

    // searchchar="w";
 
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileCustComplnsWiseProduct?'
    + 'bpc_id=' + bpc_id
    + '&billing=' + billing
    + '&shipping=' + shipping
    + '&searchchar=' + searchchar
    + '&ordertypeionic=' + ordertypeionic);

    
    
  }

  getproductdetail(activityid: string, cust_id: string, product_id: string, qty: string, ordertemp_id: string, order_type: string
    , shippadd: string, billadd: string,special_order,is_advance_payment,enteredfreeqty) {
     
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileSchemeData?'
      + 'activityid=' + activityid
      + '&cust_id=' + cust_id
      + '&product_id=' + product_id
      + '&qty=' + qty
      + '&ordertemp_id=' + ordertemp_id
      + '&order_type=' + order_type
      + '&shippadd=' + shippadd
      + '&billadd=' + billadd
      + '&special_order=' + special_order
      + '&is_advance_payment=' + is_advance_payment
      + '&enteredfreeqty=' + enteredfreeqty
    );
  }
  getFilterProductService(bpc_id: string, searchchar: string, billing: string, shipping: string, ordertypeionic: string,filter){
    try {
            let login = this.loginauth.user;
            let password = this.loginauth.pass;
            const auth=btoa(login+":"+password);
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':'application/json',
                'Accept':'application/json',  
                'Authorization':'Basic '+auth
        
                })
              };
                let temp = {
                            "bpc_id":bpc_id,
                            "searchchar":searchchar,
                            "billing":billing,
                            "shipping":shipping,
                            "ordertypeionic":ordertypeionic
                         };
                        
              let data = [temp];
              if(!!filter){
                filter.forEach(element => {
                  data.push(element)
                });
              }
             

             // console.log(this.TAG,"Get Filter Product Service",data);
           
              let filter_product_url = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.WMobileCustComplnsWiseProduct?'
              + '&bpc_id=' + bpc_id
              + '&billing=' + billing
              + '&shipping=' + shipping
              + '&searchchar=' + searchchar
              + '&ordertypeionic=' + ordertypeionic;
             // console.log(this.TAG,"Get Filter Product Service URL",filter_product_url);
             // return  this.genericHTTP.post(filter_product_url,data,httpOptions);
              if(this.platform.is('android')){
                return  this.http.post(filter_product_url,data,httpOptions);
              } else {
                return  this.genericHTTP.post(filter_product_url,data,httpOptions);
              }

              

    } catch (error) {
      console.log(error);
    }
  }

}
