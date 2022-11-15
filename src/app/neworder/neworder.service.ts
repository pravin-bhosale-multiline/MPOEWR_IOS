import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { Constants } from '../common/Constants';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';


/* get Activity ID */
export interface AllAct {
  _identifier: string;
  id: string;
}
export interface BPaddress {

id:string;
name: string;
invoiceToAddress: string;
shipToAddress: string;
}

export interface BusinessPartnerList {
  _identifier: string;
id: string;
mmstOrgAct: string;
mmstOrgAct$_identifier:  string;
creditLimit:string;
businessPartnerCategory:string;
showcrlimit:string;
orderlevelper:string;
primary_customer:string;
special_order:string;
}
export interface Summary
{
  TotalAmount:string;
  TotalDiscount:string;
  TotalTax:string;
  FinalAmount:string;
}

@Injectable({
  providedIn: 'root'
})
export class NeworderService {
  iscancelpopup=true;
  isadvancepaymentcheck=false;
  readonly TAG ="New Order Service";
  constructor(public http: HttpClient,public loginauth: LoginauthService,private genericHTTP: GenericHttpClientService,
    private cordovaHTTP: HTTP) { }


  getdocumentidbycust(businessPartner_id:string){
   // businessPartner_id="FFF20190328042044745CEDE4F2E670B";
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mbso_copord?'
      + '_where=docstatus=\'DR\'%20and%20bpartner=\'' + businessPartner_id + '\''
   );
    
  }

  getproductbydocumentid(docid:string){
  //  businessPartner_id="FFF20190328042044745CEDE4F2E670B";
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mbso_copord_line?'
    + '_where=mbsoCopord=\'' + docid + '\''
    );
    
  }
  getproductbydocumentidapi(docid:string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileExistingOrderEdit?'
    + 'existingorder_id=' + docid
    
    );
    }
  
  getexistcustmersearch(sfname:string,organization:any){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
    + '_selectedProperties=id,_identifier,mmstOrgAct$_identifier,mmstOrgAct,creditLimit,mmstArCreditlimit,businessPartnerCategory&'
    + '_where=active=true%20and%20(mmstOrgAct IN (' + organization + ')) and (lower(translate(name,\' \',\'\')) LIKE lower(\'%25' + sfname + '%25\'))'

   );
    
  }
  getnewordercustmersearchapi(strsearch:string,ordertypeionic:string){
    strsearch=strsearch.replace(/ /g,"%20")
    

    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomer?'
    + 'user_id=' + this.loginauth.userid
    + '&strsearch=' + strsearch 
    + '&ordertypeionic=' + ordertypeionic 
    + '&activity_id=' + this.loginauth.selectedactivity.id 

    );

  }
  public getPrimaryCustomerService(bp_id,strsearch:string,ordertypeionic:string){
    strsearch=strsearch.replace(/ /g,"%20");

    return this.genericHTTP.get(this.loginauth.commonurl    + 'ws/in.mbs.webservice.BusinessPartnerDetails?'
                                  + 'user_id=' + this.loginauth.userid
                                + '&strsearch=' + strsearch + '&ordertypeionic=' + ordertypeionic 
                                + '&activity_id=' + this.loginauth.selectedactivity.id
                                + '&bp_id=' + bp_id);
  }

  getexistcustmersearchapi(strsearch:string,selectedactivity:any){
   return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileActivityWiseCustomer?'
   +  'activity_id=' + selectedactivity
   + '&strsearch=' + strsearch 
   + '&user_id=' + this.loginauth.userid 
   );
  }


  getBPCategory(businessPartnerCategory: String){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerCategory?'
    + '_where=id=\'' + businessPartnerCategory + '\'');
  }
 



  bindBusinessPartner(){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
   );
    
  }

  activitywiseBusinessPartner(organization:any){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
     + '_selectedProperties=id,_identifier,mmstOrgAct$_identifier,mmstOrgAct,creditLimit,mmstArCreditlimit,businessPartnerCategory&'
     + '_where=active=true%20and%20mmstOrgAct IN (' + organization + ')'
   );
   }

   getcustmerbillingaddress(businessPartner_id : string){
    
   
   
   
   
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerLocation?'
    + '_selectedProperties=id,name,shipToAddress,invoiceToAddress&' 
    + '_where=active=true%20and%20businessPartner=\'' + businessPartner_id + '\''
    );
    
  }
  getordertypeby(WarehouseId : string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/Warehouse?'
   + '_selectedProperties=id,mmstWarehouseCode&'
    + '_where=active=true and id=\'' + WarehouseId + '\''
    ,false,true);
    
  }

  getoverdueinvoiceamt(businessPartner_id : string,order_id:string){
    
   
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileOverdueReward?'
     + 'cust_id='+businessPartner_id+ '&user_id='+this.loginauth.userid
    + '&order_id='+order_id
   // + '_selectedProperties=id,name,shipToAddress,invoiceToAddress&' 
   // + '_where=businessPartner=\'' + businessPartner_id + '\''
    );
    
  }
  checkForCashDiscountPopup(body){
  
 
    console.log("Body: ",body);
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
        
       return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.checkForCashDiscountPopup'
       ,body, httpOptions);
    
      }
      onCancelCashDiscount(body){
  
 
        console.log("Body: ",body);
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
            
           return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.OnCancelCashDiscount'
           ,body, httpOptions);
        
          }
  checkCOPBlockOrder(body){
  
 
    console.log("Body: ",body);
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
        
       return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.CheckCOPBlockOrder'
       ,body, httpOptions);
    
      }

  getOrdertemplate(businessPartner_id : string){
    return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mbso_moordtemp?'
  + '_selectedProperties=id,sname&' 
    + '_where=active=true%20and%20bpartner=\'' + businessPartner_id + '\''
    ,false,true);
    
  }

  SaveTemplate(template:any) {
    let login = this.loginauth.user;//"P2admin";
    let password = this.loginauth.pass;//"Pass2020";
    const auth=btoa(login+":"+password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
      //  'Authorization':'Basic UDJhZG1pbjpQYXNzMjAyMA=='
      'Authorization':'Basic '+auth

        })
      };
     return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileSaveTemplate'
     ,template, httpOptions);

  }

  OrderPunch(Order:any) {
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
     return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileOrderPunchOB'
     ,Order, httpOptions);

  }

  public orderPunchWithPdf(data){
    try {
      let login = this.loginauth.user;
      let password = this.loginauth.pass;
      const auth = btoa(login + ":" + password);
      const httpOptions = {
        headers: new HttpHeaders({
         
          'Authorization': 'Basic ' + auth
        })
      };
      let save_quotation = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.WMobileOrderPunchOB?'
      return this.genericHTTP.fileDevicePost(save_quotation, data, httpOptions);
    } catch (error) {
      
    }
  }
  public uploadPDFFileServiceAndroidiOS(data, path) {
    try {

      let login = this.loginauth.user;
      let password = this.loginauth.pass;

      this.cordovaHTTP.setDataSerializer('multipart');
      const filePath = [path];

      const auth = btoa(login + ":" + password);


      const httpOptions = {
        headers: new HttpHeaders({
         
          'Authorization': 'Basic ' + auth

        })
      };

      let auth1 = httpOptions.headers.get('Authorization');

      let specificHeader = {
        'Authorization': auth1
      }
      console.log(this.TAG, "file upload data", data);
      let save_file_url = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.WMobileOrderPunchOB?'

      return Observable.create( (observer) => {
        this.cordovaHTTP.uploadFile(save_file_url, data, specificHeader, filePath, "POimage").then((response) => {
          let data:any
          if(!!response.data){
            data = JSON.parse(response.data);
          } else {
            data = response;
          }
          observer.next(data);
          observer.complete();
        }).catch((error) => {
           throw error;
           
          //  this.commonFunction.loadingDismiss();
        //  console.log(this.TAG, "file upload error", error);
        })
      });

      

    } catch (error) {
      console.log(this.TAG, error);
    }
  }

  geteditorderheader(edtitdocId : string){
   return null;
    
  }

  public getExpDateDelivery(bid){
    try {
          let expDateDeliveryURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.GetExpiryDate?'+
          'bpid='+bid;
        //  console.log("Get Exp Date Delivery Url",expDateDeliveryURL);
          return this.genericHTTP.get(expDateDeliveryURL);

    } catch (error) {
     // console.log(error);
    }
  }
  public getOrderType(bid,mmstOrgAct){
    try {
          let getOrderTypeURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.OrderType?'+
          'business_partner_id='+bid+'&mmstOrgAct='+mmstOrgAct+'&user_id='+this.loginauth.userid;
        //  console.log("Get Exp Date Delivery Url",expDateDeliveryURL);
          return this.genericHTTP.get(getOrderTypeURL);

    } catch (error) {
     // console.log(error);
    }
  }

  public checkUniqueTemplateName(template_name){
    try {
          let checkUniqueTemplateNameURL = "https://jsonplaceholder.typicode.com/comments?postId=1"
         
          return this.genericHTTP.get(checkUniqueTemplateNameURL);
    } catch (error) {
      console.log(error);
    }
  }


}
