import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { GenericHttpClientService } from 'src/app/common/generic-http-client.service';
import { LoginauthService } from 'src/app/login/loginauth.service';
import { Page } from './show-approval-details-modal.page';

@Injectable({
  providedIn: 'root'
})
export class ApprovalModalService {

readonly TAG = "ApprovalModalService";

constructor( private genericHTTP: GenericHttpClientService,
             public loginauth: LoginauthService,
             private http: HttpClient ) { }

public getApprovalDetails(id,record,tab_id:string){
  try {

        let url = Constants.DOMAIN_URL +"/openbravo/ws/in.mbs.webservice.approval-details?"
        +"tab_id="+tab_id  +"&approval_id="+id  +"&record_id="+record;
        return  this.genericHTTP.get(url);
  } catch (error) {
   // console.log(this.TAG,error);
    throw error;
  }
}

}
