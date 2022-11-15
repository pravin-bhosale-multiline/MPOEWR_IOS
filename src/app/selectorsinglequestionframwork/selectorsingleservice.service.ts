import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginauthService  } from '../login/loginauth.service';
export interface Data {
  id: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class SelectorsingleserviceService {

  constructor(private loginservc: LoginauthService,public http: HttpClient) { }
  json={};
  data:Data[];
  selectedData:Data;
  pageOffset=0;

}
