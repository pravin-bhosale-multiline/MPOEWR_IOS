import { GenericHttpClientService } from 'src/app/common/generic-http-client.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginauthService } from '../login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(public http: HttpClient,public loginauth:LoginauthService,private genericHTTP:GenericHttpClientService) { }

 
  getViewData(body:any) {
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
     return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.exportdata.MEXDGetReportView',body,httpOptions);

  }


}