import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginauthService  } from '../login/loginauth.service';
import { GenericHttpClientService } from '../common/generic-http-client.service';
export interface Data {
  id: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class SelectorsingleserviceService {

  constructor(private loginservc: LoginauthService,public http: HttpClient,private genericHTTP:GenericHttpClientService) { }
  json={};
  data:Data[];
  selectedData:Data;
  pageOffset=0;
getData(jsonreport){
  let login = this.loginservc.user;//"P2admin";
  let password = this.loginservc.pass;//"Pass2020";
  const auth=btoa(login+":"+password);
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
    'Authorization':'Basic '+auth
   
      })
    };
   return this.genericHTTP.post(this.loginservc.commonurl + 'ws/in.mbs.exportdata.MEXDGetSingleSelector'
   ,jsonreport,httpOptions);
}

}
