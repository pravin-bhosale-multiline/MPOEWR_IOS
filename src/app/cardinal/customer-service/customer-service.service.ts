import { LoginauthService } from './../../login/loginauth.service';
import { GenericHttpClientService } from './../../common/generic-http-client.service';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/Constants';
import { Commonfun } from 'src/provider/commonfun';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Complain } from 'src/assets/model/complain';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  /**
   * 
   */
  readonly TAG = "CustomerServiceService";

  constructor(private genericHttpClientService: GenericHttpClientService,
              private loginService:LoginauthService,
              private commonFunction: Commonfun,
              public loginAuthService:LoginauthService,
              private httpClient:HttpClient) { }


  public getDocumentList(){
    try {
           let URL = this.loginService.commonurl + 'org.openbravo.service.json.jsonrest/DocumentType?'+ this.loginService.ReadOnlyparameter + '&' +'_where=EM_Mdts_Docnature=\'SRV\''; 
           //console.log(this.TAG,"Doc Type Service",URL);
           return this.genericHttpClientService.get(URL);
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public getErrorCodeList(){
    try {
           let errorCodeURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvalues?'+
           this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
          '&type=EC';
           return this.genericHttpClientService.get(errorCodeURL);

    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public getSerialNumberFromBase(serialNumberTemp){
    try {
            let serialNumerURL;
            return this.genericHttpClientService.get(serialNumerURL);

    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public getDesignationOfComplainerList(){
    try {
          //return this.httpClient.get('assets/data/designation.json');

          let designationOfComplainerListURL =  Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvalues?'+
          this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
          '&type=DC';
          return  this.genericHttpClientService.get(designationOfComplainerListURL);

    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public getContractTypeList(){
    try {
          let contractTypeListURL =  Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.ListOfvaluesReference?'+
          this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
          '&refname=MSNR%20Contract%20Type';
          return  this.genericHttpClientService.get(contractTypeListURL);
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public checkSerialNumber(serialNo,date){
   try {
          let serialNumberCheckURL = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.CustomerServiceInstallationBase?'+
          this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
          '&serialno='+serialNo+'&activity='+this.loginService.selectedactivity.id;
        //  console.log("Insta base Url",serialNumberCheckURL);
          return this.genericHttpClientService.get(serialNumberCheckURL);
   } catch (error) {
    // console.log(this.TAG,error);
   } 
  }
  public saveComplain(complain:Complain){
    try {
            let login =this.loginAuthService.user;
            let password = this.loginAuthService.pass;
            const auth=btoa(login+":"+password);
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':'application/json',
                'Accept':'application/json',  
                'Authorization':'Basic '+auth
        
                })
              };
   
   let data = {
                'complaintno':complain.complaint_no,
                'complaintid':complain.complaintid ? complain.complaintid:'',
                'doctype':complain.doctype,
                'nameofcomplainer':complain.nameofcomplainer,
                'desofcomplnr':complain.desofcomplnr,
                'contnumber':complain.contnumber,
                'email':complain.email,
                'eventdate':complain.eventdate,
                'serialno':complain.serialno,
                "srnoequipment":complain.srnoequipment,
                "contracttype":complain.contracttype,
                'invoiceno':complain.invoiceno,
                "invoicedate":complain.invoicedate,
                "errorcode":complain.errorcode,
                "dealername":complain.dealername,
                "installationdate":complain.installationdate,
                "skucode":complain.skucode,
                "skuname":complain.skuname,
                "brandname":complain.brandname,
                "producttobereturn":complain.producttobereturn,
                "custname":complain.custname,
                "add1":complain.add1,
                "add2":complain.add2,
                "add3":complain.add3,
                "pincode":complain.pincode,
                "area":complain.area,
                "city":complain.city,
                "state":complain.state,
                "country":complain.country,
                "description":complain.description,
                "lotno":complain.lotno ? complain.lotno : '',
                "appcomplaint":complain.appcomplaint,
                "assigntoservvendor":complain.assigntoservvendor,
                "salesrepresentative":complain.salesrepresentative?complain.salesrepresentative:'',
                "newdealername":complain.newdealername,
                "serviceengname":complain.serviceengname,
                "serviceengcontact":complain.serviceengcontact,
                "servicevendor":complain.servicevendor,
                "visitdate":complain.visitdate,
                "servicevendorremark":complain.servicevendorremark,
                "assigntoservmg":complain.assigntoservmg,
                "activity":this.loginService.selectedactivity.id,
                "Appect":complain.Appect,
                "reject":complain.reject

               
               
}
        //  console.log(this.TAG,"SALES SAERVICE FINAL",data);
           
          let complain_url = Constants.DOMAIN_URL + '/openbravo'+'/ws/in.mbs.webservice.CustomerServiceInsert?'
          return  this.genericHttpClientService.post(complain_url,data,httpOptions);
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
 

}
