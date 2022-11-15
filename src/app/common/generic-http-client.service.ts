import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Message} from '../../provider/message-helper'


@Injectable({
  providedIn: 'root'
})
export class GenericHttpClientService {
  readonly TAG = 'Generic Http Client Service';
  user;
  pass;
  ReadOnlyUsername='ionic.appuser';
  ReadOnlypassword='ionic.appuser';
  constructor(private cordovaHTTP: HTTP,public platform: Platform,private http: HttpClient,private msg:Message) { }

  public get(destinationUrl: string, isfirst?: any,isReadonly?:any) {
    let login = this.user;//"P2admin";
    let password = this.pass;//"Pass2020";
    if(isReadonly){
       login = this.ReadOnlyUsername;//"P2admin";
       password = this.ReadOnlypassword;//"Pass2020";
    }
    const auth=btoa(login+":"+password);
    const httpOptions = {
      headers: new HttpHeaders({
      'Accept':'application/json, text/plain, */*',
      'Authorization':'Basic '+auth

        })
      };
      destinationUrl=destinationUrl+'&stateless=true'
    if(this.msg.isplatformweb == false){
     
      return Observable.create( (observer) => {
        this.cordovaHTTP.get(destinationUrl, {}, {
          'Content-Type' : 'application/json;charset=utf-8',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept':'application/json, text/plain, */*',
          'Authorization':'Basic '+auth
    
            })
        .then( response => {
          
          let data:any
          if(!!response.data){
            data = JSON.parse(response.data);
          } else {
            data = response;
          }
          observer.next(data);
          observer.complete();
        }) .catch( (error) => {
          console.log("cordovaHTTP get error",error);
          observer.next("Something Went Wrong Please Try Again");
          observer.complete();
        });
    })
   } else {
    //httpOptions["params"]=requestData;
     return this.http.get(destinationUrl, isfirst?{}:httpOptions);
    }
    
   



  }
   public post(URL: string, requestData: any, header: any) {
   
    let specificHeader;
       
    let auth = header.headers.get('Authorization');
    this.cordovaHTTP.setDataSerializer('json');
    
   // if(this.platform.is('cordova')){
    if(this.msg.isplatformweb == false){
           
        specificHeader = { 'Content-Type':'application/json',
                            'Accept':'application/json',
                            'Authorization':auth
                          }
     
                          return Observable.create( (observer) => {
                            this.cordovaHTTP.post(URL, requestData,  specificHeader )
                            .then( (response) => {
                              console.log("post data",response);
                              let data:any =   JSON.parse(response.data);
                              observer.next(data);
                              observer.complete();
                            }) .catch( (error) => {
                              console.log("error",error);
                            });
                        })

    } else {
          specificHeader = header;
         return this.http.post(URL, requestData,  specificHeader);
    }
  
   }

   public filePost(URL: string, requestData: any, header: any,filePath,fileKey) {
    console.log(this.TAG,"filePost Hit");
    let specificHeader;
       
    let auth = header.headers.get('Authorization');
    this.cordovaHTTP.setDataSerializer('json');
    
   // if(this.platform.is('cordova')){
    if(this.msg.isplatformweb == false){
           
        specificHeader = {  
                            'Authorization':auth
                          }
     
                          

                          return Observable.create( (observer) => {
                            this.cordovaHTTP.uploadFile(URL, requestData,  specificHeader,filePath,fileKey)
                            .then( (response) => {
                              let data:any =   JSON.parse(response.data);
                              observer.next(data);
                              observer.complete();
                            }) .catch( (error) => {
                              console.log(this.TAG,"filePost Hit",error);
                            });
                        })

    } else {
          specificHeader = header;
         return this.http.post(URL, requestData,  specificHeader);
    }
  
   }
   public fileDevicePost(URL: string, requestData: any, header: any) {
   
    let specificHeader;
       
    let auth = header.headers.get('Authorization');
    this.cordovaHTTP.setDataSerializer('multipart');
    //console.log(this.TAG, "fileDevicePost", URL,requestData);
   // if(this.platform.is('cordova')){
    if(this.msg.isplatformweb == false){
           
        specificHeader = { 
                            'Authorization':auth
                          }
     
                          return Observable.create( (observer) => {
                            this.cordovaHTTP.post(URL, requestData,  specificHeader )
                            .then( (response) => {
                              let data:any =   JSON.parse(response.data);
                              observer.next(data);
                              observer.complete();
                            }) .catch( (error) => {
                              console.log("error",error);
                            });
                        })

    } else {
           console.log(this.TAG, "else");
          specificHeader = header;
         return this.http.post(URL, requestData,  specificHeader);
    }
  
   }

   public postformdata(URL: string, requestData: any, header: any,httpOptions:any) {
   
    let specificHeader=header;
     // let auth = header.headers.get('Authorization');
      this.cordovaHTTP.setDataSerializer('multipart');
     
     // if(this.platform.is('cordova')){
      if(this.msg.isplatformweb == false){
              console.log("postformdata",URL);
          // specificHeader = { 'Content-Type':'application/json',
          //                     'Accept':'application/json',
          //                     'Authorization':auth
          //                   }
        //  return this.cordovaHTTP.post(URL, requestData,  specificHeader);
                             return Observable.create( (observer) => {
                               this.cordovaHTTP.post(URL, requestData,  specificHeader )
                              .then( (response) => {
                               // console.log("postformdata:response",response);
                                let data:any =   JSON.parse(response.data);
                                observer.next(data);
                                observer.complete();
                              }) .catch( (error) => {
                                  
                              });
                           })
  
      } else {
     //   let specificHeaderempty;
  
            specificHeader = header;
           return this.http.post(URL, requestData,  httpOptions);
                  
  
      }
  
    }


    public postformdataDownload(URL: string, requestData: any) {
      let login = this.user;
      let password = this.pass;
      const auth=btoa(login+":"+password);
           if(!this.msg.isplatformweb ){
             this.cordovaHTTP.setDataSerializer('json');
            
             console.log("postformdata:request",requestData);
           
            return new Observable( (observer) => {
              this.cordovaHTTP.sendRequest(URL,{
                                  method: 'post',
                                  data: requestData,
                                  headers: {'Authorization':'Basic '+auth},
                                  responseType: 'blob'
                              } )
             .then( response => {
               console.log("postformdata:response",response.data);
               observer.next(response.data);
               observer.complete();
             }) .catch( (error) => {
                 console.log(error);
             });
          })
           }else{

            return this.http.post(URL, requestData,  {headers:{'Authorization':'Basic '+auth},responseType:'blob'});
           }
             
 
      }
  
}