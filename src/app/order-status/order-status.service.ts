import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoginauthService} from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';
@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  constructor(public http: HttpClient,public loginauth:LoginauthService,private genericHTTP:GenericHttpClientService) { }

  getOrderStatus(fromdate : string,todate : string,bp_id : string,offset : string){
    
   
    return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileOrderStatus?'
    + 'fromdate=' + fromdate 
    + '&todate=' + todate 
    + '&bp_id=' + bp_id 
    + '&offset=' + offset 

    );
    
  }
}
