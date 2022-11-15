import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import {LoginauthService} from '../login/loginauth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface PlanMasterList{
  id:string;
  name: string;
  planCreator:string;
}

@Injectable({
  providedIn: 'root'
})
export class TravelExpenseService {
  readonly TAG = 'Travel Expense Service';
  
  constructor(private http:HttpClient,private genericHTTP:GenericHttpClientService,public loginauth: LoginauthService) { }

  public async getPlan(id:string) {
    let methodTAG = 'getPlan';
    try {
          return await this.genericHTTP.get('assets/data/planMaster.json'); 
    } catch (error) {
      
    }
    
  }
  getWMobileTravelExpenseList(mexp_visitplan_id?:string){
    
        
      if(mexp_visitplan_id){
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileTravelExpenseList?'
        +'user_id=' + this.loginauth.userid+'&mexp_visitplan_id=' + mexp_visitplan_id
       );
   
      }else{
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileTravelExpenseList?'
        +'user_id=' + this.loginauth.userid
       );
   
      }

     // console.log("API FOR Travel Plan",url);

      
      }
       SaveWMobileTravelExpense(template:any) {
   
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
 
         return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileTravelExpense'
         ,template, httpOptions);
    
      }
}
