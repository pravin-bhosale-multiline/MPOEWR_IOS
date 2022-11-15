import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { Constants } from '../common/Constants';
import { LoginauthService } from '../login/loginauth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderApprovalServiceService {
  
    readonly TAG = "OrderApprovalServiceService"
    allFilterClearStatus = false;
    filterTab=[];
    filterOrg=[];
    filterDocType=[];
    filterBusinessPartner='';
    filterselectedBusinessPartner='';
    pageOffset:number = 0;

    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();


  constructor(private http:HttpClient,private genericHTTP:GenericHttpClientService,public loginauth:LoginauthService) { }

  
  changeMessage(message) {
    this.messageSource.next(message)
  }
  
  
  public async getOrder(URL) {
    let methodTAG = 'getPlan';
   
   // console.log(this.TAG,"Filter URL",URL);
    try {
        //  console.log(this.TAG,URL);
          return await this.genericHTTP.get(URL);
    } catch (error) {
      
    }
    
  }
  
  public  saveOrderStatus(id,record,tab_id,status,remark?){
  
  
      let data = {
        "inprecord": record,
        "inpmappApprovalId": id,
        "inpadTabId": tab_id,
        "user_id":this.loginauth.userid,
        "_params": {
            "ActionList": status,
            "Remarks": remark
        }
    }

    let login =this.loginauth.user;
    let password = this.loginauth.pass;

     
    const auth=btoa(login+":"+password);
   const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',  
        'Authorization':'Basic '+auth

        })
      };

      let SAVEURL =  Constants.DOMAIN_URL + '/openbravo'+"/ws/in.mbs.webservice.OrderStatusApprove?" 
      
           
    //  console.log(this.TAG,SAVEURL);
      return  this.genericHTTP.post(SAVEURL,data,httpOptions);
  
 
  } 
  
  public getFilterData(){
    try {
        
    let url = Constants.DOMAIN_URL + '/openbravo'+"/ws/in.mbs.webservice.Filter?"+ 'user_id=' 
    + this.loginauth.userid       
    + '&activity_id=' + this.loginauth.selectedactivity.id 
    + '&action='+'all';


      return  this.genericHTTP.get(url);
    } catch (error) {
      
    }
  }

  public getBusinessPartnerData(searchkey){
    try {
            return this.genericHTTP.get(Constants.DOMAIN_URL + '/openbravo'+"/ws/in.mbs.webservice.Filter?"
            + 'user_id=' + this.loginauth.userid
            + '&action=' + 'bs'
            + '&activity_id=' + this.loginauth.selectedactivity.id
            + '&searchkey=' + searchkey );
            
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }

  

}
