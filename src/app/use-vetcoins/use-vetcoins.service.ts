import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';
@Injectable({
  providedIn: 'root'
})
export class UseVetcoinsService {

  constructor(public http: HttpClient,public loginauth:LoginauthService,private genericHTTP: GenericHttpClientService) { }

  getWMobileVetCoinCustDetailsapi(mobno:string,mytransaction:string){
    
     return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVetCoinCustDetails?'
    + 'mobno=' + mobno
    + '&mytransaction=' + mytransaction 
    + '&userid=' + this.loginauth.userid 
    + '&loginmobno=' + this.loginauth.user

    );
    }

    VetCoinRewardTranstn(tocust:string,fromcust:string,description:string,bal:string,rewardlimit:string,rewardtransfer:string,redeemlimit:string,ordvalue:string){
      
      
     
      return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVetCoinRewardTranstn?'
     + 'tocust=' + tocust
     + '&fromcust=' + fromcust 
     + '&description=' + description 
     + '&bal=' + bal 
     + '&rewardlimit=' + rewardlimit 
     + '&rewardtransfer=' + rewardtransfer 
     + '&redeemlimit=' + redeemlimit 
     + '&ordvalue=' + ordvalue 

     );
     }   


     getWMobileSendSmsViaIonic(mobno:string){
    
       return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVetcoinSmsOpt?'
      + 'mobno=' + mobno//this.loginauth.user
      + '&userid=' + this.loginauth.userid 
      );
      }
}
