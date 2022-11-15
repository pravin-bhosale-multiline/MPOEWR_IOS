import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { LoginauthService } from '../login/loginauth.service';

@Injectable({
  providedIn: 'root'
})
export class ArvisitscheduleService {

  constructor(public http: HttpClient,public loginauth: LoginauthService,private genericHTTP: GenericHttpClientService) { }
visitplanforchecklist;
selectedorg:any;
selectedinspection:any;
sectionQuestionJson;
   getArVisitPlan(body){
  
 
    //console.log("Body: ",body);
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
        
       return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTgetRequest'
       ,body, httpOptions);
    
      }
      saveArVisitPlan(body){
  
 
     //   console.log("Body: ",body);
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
            
           return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTSaveARVisitPlan'
           ,body, httpOptions);
        
          }
    saveArVisitUnplannedPlan(body){


      //   console.log("Body: ",body);
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
              
            return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTSaveUnplannedARVisitPlan'
            ,body, httpOptions);
          
            }
          getRequest(body){
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
            
           return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.qcinspection.MQCIgetRequest'
           ,body, httpOptions);
        
        
          }
          onSaveSectionQuestion(body){
            let login = this.loginauth.user;//"P2admin";
            let password = this.loginauth.pass;//"Pass2020";
            
          const auth=btoa(login+":"+password);
          const httpOptions = {
            headers: new HttpHeaders({
             'Authorization':'Basic '+auth
        
              })
            };
            
           
            var  specificHeader = { 'Authorization':'Basic '+auth}
        
           return this.genericHTTP.postformdata(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTonSaveChecklistTrx'
           ,body, specificHeader, httpOptions);
        
          }
}
