import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { UploadService } from './upload.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Commonfun } from 'src/provider/commonfun';
import { Message } from 'src/provider/message-helper';
import { LoginauthService } from 'src/app/login/loginauth.service';
import { File as NativeFile } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Platform } from '@ionic/angular';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { Constants } from 'src/app/common/Constants';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  //@ViewChild(MultiFileUploadComponent,{static: true}) fileField: MultiFileUploadComponent;
  
  @ViewChild('inputFileCtrl',{static: false}) inputFileCtrl: ElementRef;
  
  readonly TAG = "Upload Page";
  
  uploadForm: FormGroup;
  masterCategoryList:any;
  masterSubCategoryList:any;
  masterNameList:any;
  organizationList:any;

  selectedMasterCategory;
  selectedMasterSubCategory;
  selectedMasterName;
  selectedOrganization;
  file:File;
  isdesktop = false;
  selectedURI;
  formatResponse;
  fileName;
  isFile = false

  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  constructor(private formBuilder: FormBuilder,private commonFunction: Commonfun,
              private uploadService: UploadService,private fileChooser: FileChooser,
              private msg: Message,private filePlugin: NativeFile,private transfer: FileTransfer,
              private loginService: LoginauthService,
              private fileOpener: FileOpener,private androidPermissions: AndroidPermissions,
              private iab: InAppBrowser,private filePath: FilePath,private fileMeta: NativeFile,
              private platform: Platform,private filePicker: IOSFilePicker) { }

  ngOnInit() {
    
    this.uploadForm = this.formBuilder.group({
      interfaceMasterCategoryCtrl:[,Validators.required],
      interfaceMasterSubCategoryCtrl:[,Validators.required],
      interfaceMasterNameCtrl:[,Validators.required],
      interfaceOrganizationCtrl:[,Validators.required],
     
    });
    if(this.msg.isplatformweb == true){
       this.isdesktop = true;
    } else {
      this.isdesktop = false;
    }
 
  }
  async ionViewWillEnter(){
   try {
          this.commonFunction.loadingPresent();
          this.masterCategoryList  = await this.uploadService.getMasterCategoryList().toPromise();
          if(this.masterCategoryList.length ==1){
            this.selectedMasterCategory=this.masterCategoryList[0];
          }
          this.bindOrganizationFromApi();
          this.commonFunction.loadingDismiss();
   } catch (error) {
    this.commonFunction.loadingDismiss();
    console.log(this.TAG,error);
   }
    
  }
  // Master Category Start
  public async onMasterCategoryChange(){
    try {
         
          console.log(this.TAG,"Selected Master Category",this.selectedMasterCategory.id);
        //  this.selectedMasterCategory = this.selectedMasterCategory.id;
          this.commonFunction.loadingPresent();
          this.masterNameList = [];
          this.masterSubCategoryList = [];
          this.uploadForm.controls['interfaceMasterSubCategoryCtrl'].reset();
          this.uploadForm.controls['interfaceMasterNameCtrl'].reset();
          if(!!this.selectedMasterCategory.id){
            this.masterSubCategoryList  = await this.uploadService.getMasterSubCategoryList(this.selectedMasterCategory.id).toPromise();
            if(this.masterSubCategoryList.length==1){
              this.selectedMasterSubCategory = this.masterSubCategoryList[0];
            }
          }
        
          this.commonFunction.loadingDismiss();
          

    } catch (error) {
      this.commonFunction.loadingDismiss();
      console.log(this.TAG,error);
      
    }
  }
  public onMasterCategoryClose(event: {component: IonicSelectableComponent,value: any}){
    try {
          event.component._searchText = "";
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onMasterCategorySearchChange(event: {component: IonicSelectableComponent,value: any}){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  //Master Sub Category Start
  public async onMasterSubCategoryChange(){
    try {
          // event.component._searchText = "";
          console.log(this.TAG,"Selected Master Category",this.selectedMasterSubCategory);
          this.uploadForm.controls['interfaceMasterNameCtrl'].reset();
         // this.selectedMasterSubCategory = this.selectedMasterSubCategory;
          this.commonFunction.loadingPresent();
         if(!!this.selectedMasterCategory.id){
          this.masterNameList  = await this.uploadService.getMasterNameList(this.selectedMasterCategory.id,this.selectedMasterSubCategory.id).toPromise();
          console.log(this.TAG,"Master Name List From Server",this.masterNameList);
          if(this.masterNameList.length == 1){
            this.selectedMasterName = this.masterNameList[0];
          }
         }
         
          this.commonFunction.loadingDismiss();
    } catch (error) {
      console.log(this.TAG,error);
      this.commonFunction.loadingDismiss();
    }
  }
  public onMasterSubCategoryClose(event: {component: IonicSelectableComponent,value: any}){
    try {
          event.component._searchText = "";
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onMasterSubCategorySearchChange(event: {component: IonicSelectableComponent,value: any}){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }

  // Master Name Start
  public onMasterNameChange(){
    try {
           
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onMasterNameClose(event: {component: IonicSelectableComponent,value: any}){
    try {
          event.component._searchText = "";
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onMasterNameSearchChange(event: {component: IonicSelectableComponent,value: any}){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }

  // Organization Start
  public onOrganizationChange(selectedOrganization){
    try {
          
          console.log(this.TAG,"Organization Selected",selectedOrganization);
         // this.selectedOrganization = event.value;
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onOrganizationClose(event: {component: IonicSelectableComponent,value: any}){
    try {
          event.component._searchText = "";
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public onOrganizationSearchChange(event: { component: IonicSelectableComponent, text: any }){
    try {
            var custsearchtext = event.text;
            if (custsearchtext.length % 3 == 0) {
              this.bindOrganizationFromApi(custsearchtext);
            }
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public async bindOrganizationFromApi(strsearch?: string){
    try {
            
            const cust_response = await this.uploadService.getOrganizationList(strsearch).toPromise(); 
            console.log(this.TAG,cust_response);
            this.organizationList = cust_response;

            setTimeout(() => {
              if (this.organizationList.length == 1) {
                this.uploadForm.controls["interfaceOrganizationCtrl"].setValue(this.organizationList[0]);
              } 
            }, 100);
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public async uploadFileWeb(str:any){
    try {
          console.log(this.TAG,str.target.files);
          this.file  = str.target.files[0];
          console.log(this.TAG,this.file);
          this.isFile = true;
     } catch (error) {
     // this.commonFunction.loadingDismiss();
      console.log(this.TAG,error);
    }
  }
  public uploadFileDevice(){
    try {
         
      if(this.platform.is('android')){
        this.fileChooser.open()
        .then(uri => { 
          this.selectedURI = uri;
          console.log(this.TAG,"Selected File",this.selectedURI);
          this.filePath.resolveNativePath(uri).then(filePathResult =>{
            console.log(this.TAG,"Selected fileInfo",filePathResult);
             this.fileName   = filePathResult.substring(filePathResult.lastIndexOf("/") + 1);
             let fileType   = filePathResult.substring(filePathResult.lastIndexOf(".") + 1);
             console.log(this.TAG,"Selected fileInfo File Name",this.fileName);
             console.log(this.TAG,"Selected fileInfo File fileType",fileType);
             this.isFile = true;
           
               });
          
          }).catch(e => console.log(e));
      } else if(this.platform.is('ios')){
        this.filePicker.pickFile()
        .then(uri => {
          this.isFile = true;
          this.selectedURI = uri;

          this.fileName   = uri.substring(uri.lastIndexOf("/") + 1);
          let fileType   = uri.substring(uri.lastIndexOf(".") + 1);
        })

        .catch(err => console.log('File Picker Error', err));
      }
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public async validate(){
    try {
        
      if(this.msg.isplatformweb == true){
        this.commonFunction.loadingPresent();

       
      let files = this.file;
      
      if(files.name != "") {
         let formData = new FormData();
         let i= 0;
      
        formData.append('inpFile', this.file, this.file.name);
        formData.append('inpmuulinterfaceConfigId',this.selectedMasterName.id);
        formData.append('validator',this.selectedMasterName.validator);
        formData.append('java_process',this.selectedMasterName.java_process);
        formData.append('inporganizationId',this.selectedOrganization.id);
        formData.append('validatedorexecuter','VALIDATOR');
        

         this.formatResponse = await this.uploadService.uploadFileService(formData).toPromise();
          if(!!this.formatResponse){
            
              console.log(this.TAG, this.formatResponse);
              this.commonFunction.loadingDismiss();
             //  if(this.formatResponse.msgType == "ValidateError"){
               
             //  } 

              this.commonFunction.presentAlert("Upload","Validate", this.formatResponse.msg);
             
          } 
          this.commonFunction.loadingDismiss();
        } else {
             this.commonFunction.loadingDismiss();
             this.commonFunction.presentAlert("Upload","Validate", "Please Select File");
        }
      } else if(this.platform.is('android')) {
            this.commonFunction.loadingPresent();
            let validateData = {
              "inpmuulinterfaceConfigId": this.selectedMasterName.id,
              "validator": this.selectedMasterName.validator,
              "java_process": this.selectedMasterName.java_process,
              "validatedorexecuter":'VALIDATOR',
              "inporganizationId": this.selectedOrganization.id
            }
            this.formatResponse =  await this.uploadService.uploadFileServiceAndroidiOS(validateData,this.selectedURI).toPromise();
            if(!!this.formatResponse){
              console.log(this.TAG, this.formatResponse);
              this.commonFunction.loadingDismiss();
              this.commonFunction.presentAlert("Upload","Validate", this.formatResponse.msg);
            } else {
              this.commonFunction.loadingDismiss();
            }
      } else if(this.platform.is('ios')){
        let login = this.loginService.user;
        let password = this.loginService.pass;

        const auth = btoa(login + ":" + password);

        let save_file_url = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?'
        
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
         fileKey: 'inpFile',
         fileName: this.fileName,
         params:{
           "inpmuulinterfaceConfigId": this.selectedMasterName.id,
           "validator": this.selectedMasterName.validator,
           "java_process": this.selectedMasterName.java_process,
           "validatedorexecuter":'VALIDATOR',
           "inporganizationId": this.selectedOrganization.id
         },
         headers: { 'Authorization': 'Basic ' + auth}
         
      }
    
      fileTransfer.upload(this.selectedURI,save_file_url , options)
       .then((data) => {
         console.log("pravin YESSSSS",data);
         this.formatResponse = JSON.parse(data.response);
         console.log("File Uplaod Result",this.formatResponse);
         this.commonFunction.presentAlert("Upload","Validate", this.formatResponse.msg);
           this.commonFunction.loadingDismiss();

       }, (err) => {
         console.log("pravin naaaaaaaa",err); 
          this.commonFunction.loadingDismiss();

       })
      }
      
        
         

        
    } catch (error) {
      this.commonFunction.loadingDismiss();
      console.log(this.TAG,error);
    }
  }
  public async process(){
    try {
          
      if(this.msg.isplatformweb == true){
        this.commonFunction.loadingPresent();
    
        let files = this.file;
        
        if(files.name != "") {
            let processFormData = new FormData();
            let i= 0;
          
           processFormData.append('inpFile', this.file, this.file.name);
           processFormData.append('inpmuulinterfaceConfigId',this.selectedMasterName.id);
           processFormData.append('validator',this.selectedMasterName.validator);
           processFormData.append('java_process',this.selectedMasterName.java_process);
           processFormData.append('inporganizationId',this.selectedOrganization.id);
           processFormData.append('validatedorexecuter','EXECUTOR');
           processFormData.append('sessionIdval',this.formatResponse.sessionVal);
            
            
            
             let processResponse = await this.uploadService.uploadFileService(processFormData).toPromise();
             if(!!processResponse){
               console.log(this.TAG,processResponse);
              if(processResponse.msgType=="Success"){
                this.refreshPage();
              }
               this.commonFunction.presentAlert("Upload",processResponse.msgType, processResponse.msg);
             }
   
             this.commonFunction.loadingDismiss();
           } else {
            this.commonFunction.loadingDismiss();
            this.commonFunction.presentAlert("Upload","Validate", "Please Select File");
           }
      } else if(this.platform.is('android')){
              this.commonFunction.loadingPresent();
              let validateData = {
                "inpmuulinterfaceConfigId": this.selectedMasterName.id,
                "validator": this.selectedMasterName.validator,
                "java_process": this.selectedMasterName.java_process,
                "validatedorexecuter":'EXECUTOR',
                "inporganizationId": this.selectedOrganization.id,
                "sessionIdval":this.formatResponse.sessionVal
              }
              this.formatResponse =  await this.uploadService.uploadFileServiceAndroidiOS(validateData,this.selectedURI).toPromise();
              if(!!this.formatResponse){
                this.commonFunction.loadingDismiss();
                console.log(this.TAG, this.formatResponse);
                console.log(this.TAG,this.formatResponse);
                if(this.formatResponse.msgType=="Success"){
                  this.refreshPage();
                }
                 this.commonFunction.presentAlert("Upload",this.formatResponse.msgType, this.formatResponse.msg);
              } else {
                this.commonFunction.loadingDismiss();
              }
      } else if(this.platform.is('ios')){
        let login = this.loginService.user;
        let password = this.loginService.pass;

        const auth = btoa(login + ":" + password);

        let save_file_url = Constants.DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?'
        
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
         fileKey: 'inpFile',
         fileName: this.fileName,
         params:{
          "inpmuulinterfaceConfigId": this.selectedMasterName.id,
          "validator": this.selectedMasterName.validator,
          "java_process": this.selectedMasterName.java_process,
          "validatedorexecuter":'EXECUTOR',
          "inporganizationId": this.selectedOrganization.id,
          "sessionIdval":this.formatResponse.sessionVal
        },
         headers: { 'Authorization': 'Basic ' + auth}
         
      }
    
      fileTransfer.upload(this.selectedURI,save_file_url , options)
       .then((data) => {
         console.log("pravin YESSSSS",data);
         let reposnse = JSON.parse(data.response);
         console.log("File Uplaod Result",reposnse);
         this.refreshPage();
         this.commonFunction.presentAlert("Upload","Validate", reposnse.msg);
           this.commonFunction.loadingDismiss();

       }, (err) => {
         console.log("pravin naaaaaaaa",err); 
          this.commonFunction.loadingDismiss();

       })
      }
     

        
    } catch (error) {
      this.commonFunction.loadingDismiss();
      console.log(this.TAG,error);
    }
  }
  public async format(){
    try {
     if(!!this.selectedMasterName.doc_name){
      if (this.msg.isplatformweb == false) {
        this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
        .then(status => {
          if (status.hasPermission) {
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then(status => {
              if(status.hasPermission) {
                this.downloadFile();
              }
            });
          } 
          else {
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
              .then(status => {
                if(status.hasPermission) {
                  this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
                    .then(status => {
                      if(status.hasPermission) {
                        this.downloadFile();
                      }
                    });
                 
                }
              });
          }
        });
      }else {
        this.downloadFile();
      }

     } else {
      this.commonFunction.presentAlert("Upload","Download", "Server does not have a file");
     }
    } catch (error) {
     
      console.log(this.TAG,error);
    }
  }
  public async downloadFile(){
    try {
                let fileDownloadURL = this.loginService.commonurl + 'ws/in.mbs.webservice.InterfaceDownload?'
                + this.loginService.parameter
                + '&recordId=' + this.selectedMasterName.id
                + '&user_id=' + this.loginService.userid;
              
                console.log(this.TAG, "getMasterCategory", fileDownloadURL);

                if (this.msg.isplatformweb == false) {
                  let path;
                  if(this.platform.is('android')){
                     path = this.filePlugin.externalRootDirectory + '/Download/';
                  } else if(this.platform.is('ios')){
                     path = this.filePlugin.documentsDirectory;
                  }
                 
                  const fileTransfer: FileTransferObject = this.transfer.create();
                    fileTransfer.download(encodeURI(fileDownloadURL), path+this.selectedMasterName.doc_name).then((entry) => {
                      console.log('download complete: ' + entry.toURL());
                      
                      
                      
                      this.fileOpener.open(entry.toURL(), "text/csv")
                      .then(() => console.log("File is opened"))
                      .catch(e => console.log("Error opening file", e));
                  
                    }, (error) => {
                        console.log('error download complete: ', error);
                    });
                }else {
                  let target = "_blank";
                  this.iab.create(fileDownloadURL, target, this.options);
                }
              

    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public refreshPage(){
    try {
          this.masterNameList = [];
          this.masterSubCategoryList = [];
          this.selectedMasterCategory = "";
          this.selectedMasterSubCategory = "";
          this.selectedMasterName = "";
          this.selectedOrganization = "";
          this.uploadForm.reset();
          // this.uploadForm.controls['interfaceMasterCategoryCtrl'].reset();
          // this.uploadForm.controls['interfaceMasterSubCategoryCtrl'].reset();
          // this.uploadForm.controls['interfaceMasterNameCtrl'].reset();
          // this.uploadForm.controls['interfaceOrganizationCtrl'].reset();
          this.isFile = false;
          this.fileName = "";
          this.selectedURI = "";
          this.inputFileCtrl.nativeElement.value = '';
          //this.fileField.clearAllFiles();

        // this.ionViewWillEnter();
          

    } catch (error) {
      
    }
  }

}
