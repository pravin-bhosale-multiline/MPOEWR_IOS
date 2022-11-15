import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { GenericHttpClientService } from 'src/app/common/generic-http-client.service';
import { LoginauthService } from 'src/app/login/loginauth.service';
import { Commonfun } from 'src/provider/commonfun';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  readonly TAG = "Upload Service"

  constructor(private genericHttpClientService: GenericHttpClientService,
    private loginService: LoginauthService,
    private httpClient: HttpClient,
    private commonFunction: Commonfun,
    private cordovaHTTP: HTTP) { }
  
  /**
   * @description This method will fetch list for Master Category List from muul_interfacecategory table.
   * @author Pravin Bhosale.
   * @param null
   * @returns {Json Array} Master Category List.
   * @kind Service Function
   */ 
  public getMasterCategoryList() {
    try {
      let getMasterCategoryURL = this.loginService.commonurl + 'ws/in.mbs.webservice.UploadService?'
        + this.loginService.parameter
        + '&user_id=' + this.loginService.userid
        + '&action=' + 'master_category_list'
        + '&activity_id=' + this.loginService.selectedactivity.id;
      console.log(this.TAG, "getMasterCategory", getMasterCategoryURL); 

      return this.genericHttpClientService.get(getMasterCategoryURL);
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public getMasterSubCategoryList(master_id) {
    try {
      let getMasterSubCategoryURL = this.loginService.commonurl + 'ws/in.mbs.webservice.UploadService?'
        + this.loginService.parameter
        + '&user_id=' + this.loginService.userid
        + '&action=' + 'master_sub_category_list'
        + '&master_id=' + master_id
        + '&activity_id=' + this.loginService.selectedactivity.id;
      console.log(this.TAG, "getMasterSubCategoryList", getMasterSubCategoryURL);

      return this.genericHttpClientService.get(getMasterSubCategoryURL);
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public getMasterNameList(master_id, master_sub_category_id) {
    try {
      let getMasterNameURL = this.loginService.commonurl + 'ws/in.mbs.webservice.UploadService?'
        + this.loginService.parameter
        + '&user_id=' + this.loginService.userid
        + '&activity_id=' + this.loginService.selectedactivity.id
        + '&action=' + 'master_name_list'
        + '&master_id=' + master_id
        + '&master_sub_category_id=' + master_sub_category_id
      //console.log(this.TAG, "getMasterNameList", getMasterNameURL);

      return this.genericHttpClientService.get(getMasterNameURL);
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public getOrganizationList(strsearch?: string) {
    try {
      if (!!strsearch) {
        strsearch = strsearch.replace(/ /g, "%20")
      } else {
        strsearch = "";
      }

      let getOrganizationListURL = this.loginService.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseOrgActivity?'
        + this.loginService.parameter
        + '&userid=' + this.loginService.userid
        + '&activityid=' + this.loginService.selectedactivity.id;
    
      //console.log(this.TAG, "getOrganizationList", getOrganizationListURL);

      return this.genericHttpClientService.get(getOrganizationListURL);
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public uploadFileServiceAndroidiOS(data, path) {
    try {

      let login = this.loginService.user;
      let password = this.loginService.pass;

      this.cordovaHTTP.setDataSerializer('multipart');
      this.cordovaHTTP.setRequestTimeout(300);
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
      let save_file_url = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?'

      return Observable.create( (observer) => {
        this.cordovaHTTP.uploadFile(save_file_url, data, specificHeader, filePath, "inpFile").then((response) => {
          let data:any
          if(!!response.data){
            data = JSON.parse(response.data);
          } else {
            data = response;
          }
         
        
      
          observer.next(data);
          observer.complete();
        }).catch((error) => {
          this.commonFunction.loadingDismiss();
          console.log(this.TAG, "file upload error", error);
        })
      });

      

    } catch (error) {
      console.log(this.TAG, error);
    }
  }

  public uploadFileService(data) {
    try {
      let login = this.loginService.user;
      let password = this.loginService.pass;
      const auth = btoa(login + ":" + password);
      const httpOptions = {
        headers: new HttpHeaders({
         
          'Authorization': 'Basic ' + auth
        })
      };
      console.log(this.TAG, "Save Quotation Final Data", data);
      let save_quotation = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?'
      return this.genericHttpClientService.fileDevicePost(save_quotation, data, httpOptions);
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public validateService(data) {
    try {

      let login = this.loginService.user;
      let password = this.loginService.pass;
      const auth = btoa(login + ":" + password);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Basic ' + auth

        })
      };
      console.log(this.TAG, "Save Quotation Final Data", data);
      let save_quotation = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?'
      return this.genericHttpClientService.post(save_quotation, data, httpOptions);

    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public processService(data) {
    try {

      let login = this.loginService.user;
      let password = this.loginService.pass;
      const auth = btoa(login + ":" + password);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Basic ' + auth

        })
      };
      console.log(this.TAG, "Save Quotation Final Data", data);
      let save_quotation = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?'
      return this.genericHttpClientService.post(save_quotation, data, httpOptions);

    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public formatService(data) {
    try {

     
      return this.genericHttpClientService.get(data);

    } catch (error) {
      console.log(this.TAG, error);
    }
  }
}
