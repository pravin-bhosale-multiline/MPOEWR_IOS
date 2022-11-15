import { ReportService } from './report.service';
import { Component, Injector, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginauthService } from '../login/loginauth.service';
import { Storage } from '@ionic/storage';
import { Loginresponse } from '../login/login.page';
import { SelectorsingleserviceService } from '../selectorsingle/selectorsingleservice.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Message } from 'src/provider/message-helper';
import { File as NativeFile } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { AlertController, Platform } from '@ionic/angular';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Commonfun } from 'src/provider/commonfun';
import { createCustomElement } from '@angular/elements';
import { ListcontrolComponent } from '../components/listcontrol/listcontrol.component';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

export interface ReportPara {
  inppara: string;
  scaption: string;
  isdependend: boolean;
  scontroltype: string;
  issamepagemultiselect: boolean;
}
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  readonly TAG = "Report Page"
  innerhtml: any;
  rptparalist: ReportPara[];
  txtmsg: string;
  rptid: string;
  txtTitle='Report';
  txterror: string;
  txtmessage: string;
  response: Loginresponse;
  file_name;
  fileType;
  btnName = "Excel";
  headerData;
  columnData;


  loadingIndicator = true;
  reorderable = true;

  selectedEmployeeCode;
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  columns;
  rows;
  readonly headerHeight = 50;
  readonly rowHeight = 50;
  readonly pageLimit = 50;
  options: InAppBrowserOptions = {
    location: 'no',//Or 'no' 
    hidden: 'yes', //Or  'yes'
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
  options1: InAppBrowserOptions = {
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
  prevControl: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer,
              private loginservc: LoginauthService, private router: Router, public storage: Storage,
              private singleselservc: SelectorsingleserviceService, private iab: InAppBrowser,
              private androidPermissions: AndroidPermissions,
              private msg: Message,private nativefile: NativeFile,
              private platform: Platform,private fileOpener: FileOpener,
              private commonFunction: Commonfun
              ,private alertCtrl: AlertController
              ,private injector: Injector
              ,private reportService: ReportService
              ,private el: ElementRef) {

  }
  isview=false;
  ngOnInit() {
    this.isview=false;
    this.route.params.subscribe(params => {
      this.rptid = params['rptid'];

      this.loginservc.getReportPara(this.rptid).subscribe(data => {

        this.rptparalist = data['data'];
        this.loginservc.reportjson['org'] = this.loginservc.selectedprof.organization;
        this.loginservc.reportjson['user'] = this.loginservc.selectedprof.user;
        this.loginservc.reportjson['role'] = this.loginservc.selectedprof.role;
        this.loginservc.reportjson['client'] = this.loginservc.selectedprof.client;
        this.loginservc.reportjson['wh'] = this.loginservc.selectedprof.warehouse;
        this.loginservc.reportjson['rptid'] = this.rptid;


        for (let rptpara of this.rptparalist) {
//console.log(rptpara);

          if (this.loginservc.reportjson[rptpara.inppara] === undefined)
            this.loginservc.reportjson[rptpara.inppara] = rptpara[rptpara.inppara];
  
            if(!this.loginservc.iscutsomdefined && rptpara.issamepagemultiselect){
              const element = createCustomElement(ListcontrolComponent,{injector:this.injector})
              customElements.define('app-listcontrol',element);
              this.loginservc.iscutsomdefined=true;
            }
            if(rptpara["isview"] && rptpara["scontroltype"]==='BTNVIEW'){
              this.isview=true;
            }
        }


        this.loginservc.GetReportPage(this.loginservc.reportjson).subscribe(data => {
         // console.log("Report Page", data);
          this.file_name = data['report_name'];
          this.txtTitle=this.file_name.substring(0,this.file_name.lastIndexOf("."));
          this.fileType   = this.file_name.substring(this.file_name.lastIndexOf(".") + 1);
          if(this.fileType=='pdf'){
            this.btnName ="PDF";
          }
          this.innerhtml = this.sanitizer.bypassSecurityTrustHtml(data['data']);
          this.loginservc.getReportPara(this.rptid).subscribe(data => {
            this.rptparalist = data['data'];
          
            
            //console.log(this.TAG,"File To Be Downlaoded ",data,this.file_name);

            for (let rptpara of this.rptparalist) {
              //console.log('para ' + rptpara.inppara);
              var e = document.getElementById(rptpara.inppara)

              if (e) {

                if (rptpara.isdependend) {

                  if(rptpara.scontroltype==='LST' && rptpara.issamepagemultiselect){
                  
                    //console.log('reload',e);
                  
                    e.addEventListener("click", this.onReload.bind(this,rptpara));
                  }else{
                    e.addEventListener("focusin", this.onReload.bind(this,rptpara));
                  } 
                } else {
                  e.addEventListener("focusin", this.onChange.bind(this,rptpara));
                }
                if (rptpara.scontroltype === 'SLS' 
                      || (rptpara.scontroltype==='LST' && !rptpara.issamepagemultiselect)) {
                  e.addEventListener("click", this.onSLSClick.bind(this, rptpara.scontroltype));

                }

              }


            }
            //console.log(this.loginservc.reportjson);
          });
        });
      });


    });
  }

  onClickEmail() {
    this.loginservc.reportjson["inpexcel"] = 'N';
    //console.log("On email Click", this.loginservc.reportjson);
    this.loginservc.sendEmailReport(this.loginservc.reportjson).subscribe(data => {
      this.response = data['response'];
      if (this.response.messageType !== undefined) {
        if (this.response.messageType === 'success') {
          this.txtmessage = this.response.messageText;
          this.txterror = undefined;
        }
      } else {

        this.txterror = this.response.error.message;
        this.txtmessage = undefined;
        this.txterror = this.txterror.split("Where")[0];

      }
    }, error => {

      this.txterror = error.message;
      this.txterror = this.txterror.split("Where")[0];
      this.txtmessage = undefined;

    });
  }
  onClickExcelPDF() {
    
    // 
  
      this.loginservc.reportjson["inpexcel"] = 'Y';
   
    this.commonFunction.loadingPresent();
   // console.log("On excel/pdf Click", this.loginservc.reportjson);
    this.loginservc.downloadExcelPDF(this.loginservc.reportjson).subscribe((response:any) => {
      this.commonFunction.loadingDismiss();
     // console.log(response);
      if(response.size!=0)
    {
    let stype =response.type;
    let blob:any = new Blob([response], { type: stype });
    let fileName='mydoc'
    if(this.btnName==='Excel'){
      fileName=this.loginservc.selectedreport._identifier+'.csv'
      stype='text/csv'
    }else if(this.btnName==='PDF'){
      fileName=this.loginservc.selectedreport._identifier+'.pdf'
      stype='application/pdf'
    }else {
      this.commonFunction.presentAlert("Error","Error","Error On Downloading Report");
      return;
    }
   
    this.commonFunction.presentAlert("Message","Success","Downloaded Complete.");
 //   if(!this.platform.is('cordova')){
  if(this.msg.isplatformweb){
    const url = window.URL.createObjectURL(blob);
     let a = document.createElement("a");
     document.body.appendChild(a);
     a.href = url;
     a.download =fileName;
     a.click();
     window.URL.revokeObjectURL(url);
    }
    let pathFile
    if( this.platform.is('ios')){
      pathFile = this.nativefile.documentsDirectory
    }
    if(this.platform.is('android')){
      pathFile = this.nativefile.externalDataDirectory
    }
  //  if(this.platform.is('android')|| this.platform.is('ios')){
    if(!this.msg.isplatformweb){
      
      this.nativefile.writeFile(
        pathFile,
        fileName,
        blob,
        {
          replace: true,
        }
      ).then((res) => {
        //console.log('inside');
        return this.fileOpener.open(
        pathFile+ fileName,
        stype
      ).catch((err)=>{
        console.log(err);
      });
    })
    .catch((error) => {
    this.commonFunction.presentAlert("Message","Alert",error);

      //console.log(error);
    });;
    }
  
  }
  else{
  this.commonFunction.presentAlert("Message","Alert","File not Downloaded.");
}

    }, error => {

      this.txterror = error.message;
      this.txterror = this.txterror.split("Where")[0];
      this.txtmessage = undefined;

    });
  }
  onclick=false;
  async onClickView(){
    try {
      this.onclick=true;
          this.commonFunction.loadingPresent();
          this.loginservc.reportjson["offset"]=0;
         
         
          let data = await this.reportService.getViewData(this.loginservc.reportjson).toPromise();
         
          this.columns = data[0].colum_names; 
          this.rows = data[0].colum_data;
          this.loadingIndicator = false;
         
          this.commonFunction.loadingDismiss();
    } catch (error) {

      this.commonFunction.loadingDismiss();
      this.commonFunction.presentAlert("Report","Error",error.error);
    }
  }
  // onClickExcel() {
  //   try {
      
  //     this.loginservc.reportjson["inpexcel"] = 'Y';
  //     console.log("On Click Excel Click", this.loginservc.reportjson);

  //     // let fileDownloadURL = this.loginService.commonurl + 'ws/in.mbs.exportdata.MEXDEmailAction?'
  //     //   + this.loginService.parameter + '&user_id=' + this.loginService.userid + '&param=' + JSON.stringify(this.loginservc.reportjson);
     

  //     // if (this.msg.isplatformweb == false) {
  //     //   this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
  //     //   .then(status => {
  //     //     if (status.hasPermission) {
  //     //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
  //     //       .then(status => {
  //     //         if(status.hasPermission) {
  //     //           this.downloadFile(fileDownloadURL);
  //     //         }
  //     //       });
  //     //     } 
  //     //     else {
  //     //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
  //     //         .then(status => {
  //     //           if(status.hasPermission) {
  //     //             this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
  //     //               .then(status => {
  //     //                 if(status.hasPermission) {
  //     //                   this.downloadFile(fileDownloadURL);
  //     //                 }
  //     //               });
  //     //           }
  //     //         });
  //     //     }
  //     //   });
  //     // }else {
  //     //   this.downloadFile(fileDownloadURL);
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  onReload(reportpara,event) {

    if (this.loginservc.reportjson[event.target.id] !== event.target.value  || reportpara.scontroltype==='LST') {
      this.loginservc.reportjson[event.target.id] = event.target.value === undefined ? '' : event.target.value;
      if (event.target.value !== undefined && event.target.value !== '') {
      //   this.prevControl=reportpara;
      // if(event.target.id==='child')
      // if(event.target.parentElement.parentElement.parentElement.id===reportpara.inppara){
      //   return;
      // }
     // console.log('reload inside',event.target.value);
        this.loginservc.reportjson[event.target.id] = event.target.value;
        this.loginservc.GetReportPage(this.loginservc.reportjson).subscribe(data1 => {
          this.innerhtml = this.sanitizer.bypassSecurityTrustHtml(data1['data']);
          this.loginservc.getReportPara(this.rptid).subscribe(data => {
            this.rptparalist = data['data'];
            //console.log(this.innerhtml);

            for (let rptpara of this.rptparalist) {
              //console.log('para ' + rptpara.inppara);
              var e = document.getElementById(rptpara.inppara)

              if (e) {

                if (rptpara.isdependend) {
                  if(rptpara.scontroltype==='LST' && rptpara.issamepagemultiselect){
                  
                    //console.log('reload',e);
                  
                    e.addEventListener("click", this.onReload.bind(this,rptpara));
                  }else{
                    e.addEventListener("focusin", this.onReload.bind(this,rptpara));
                  }
                } else {
                  e.addEventListener("focusin", this.onChange.bind(this,rptpara));
                }
                if (rptpara.scontroltype === 'SLS' 
                      || (rptpara.scontroltype==='LST' && !rptpara.issamepagemultiselect)) {
                  e.addEventListener("click", this.onSLSClick.bind(this, rptpara.scontroltype));

                }


              }


            }

          });
        });
      }
    }

  }
  onChange(reportpara,event) {
    // console.log('onchange',this.prevControl);
    // if(this.prevControl)
    // if(this.prevControl.scontroltype==='LST' && this.prevControl.issamepagemultiselect ){
    //   this.onReload(reportpara,event);
    // }
   // console.log('onchangecurr',this.loginservc.reportjson);
    // this.prevControl=reportpara;
    this.txtmessage = undefined;
    this.txterror = undefined;
    //this.loginservc.reportjson[event.target.id]= event.target.value;
    if (event.target.value !== undefined) {
      this.loginservc.reportjson[event.target.id] = event.target.value;
    }

  }
  onSLSClick(controltype, event) {
    // console.log(event);
    //console.log(controltype);
    this.singleselservc.json = this.loginservc.reportjson;
    this.router.navigate(['/selectorsingle', this.rptid, event.target.id, controltype]);

  }
  // public async downloadFile(fileDownloadURL) {
  //   try {

  //     // if (this.msg.isplatformweb == false) {
  //       this.commonFunction.loadingPresent();
  //       let path;
  //       if (this.platform.is('android')) {
  //         path = this.filePlugin.externalRootDirectory + '/Download/';
  //       } else if (this.platform.is('ios')) {
  //         path = this.filePlugin.documentsDirectory;
  //       }else if (!this.platform.is('cordova')){
  //         path='';
  //       }
  //       const fileTransfer: FileTransferObject = this.transfer.create();
  //       fileTransfer.download(encodeURI(fileDownloadURL), path+this.file_name).then((entry) => {
  //         console.log('download complete: ' + entry);
  //         this.commonFunction.loadingDismiss();
  //         this.presentAlert("Report","Confirm!","File stored in the download folder of your device do you want to open it?",entry);

  //        // this.commonFunction.presentAlert("Report","Download",entry.toURL());
  //       }, (error) => {
  //       console.log('error download complete: ', error);
  //       this.commonFunction.loadingDismiss();
  //       this.commonFunction.presentAlert("Report","Download",error);
  //     }); 
       
  //     // } else {
  //     //   let target = "_blank";

  //     //   if(this.fileType=='pdf'){
  //     //     //this.iab.create(fileDownloadURL, target, this.options1);
  //     //     this.iab.create(fileDownloadURL, target, this.options);
  //     //   } else {
  //     //     this.iab.create(fileDownloadURL, target, this.options);
  //     //   }
  //     //   // let formData = new FormData();
  //     //   // formData.append('param', JSON.stringify(this.loginservc.reportjson));
  //     //   // formData.append('user_id', this.loginservc.userid);
             
  //     //   // let fileDownloadURL = this.loginService.commonurl + 'ws/in.mbs.exportdata.MEXDEmailAction?'
  //     //   // this.singleselservc.Downloaddata(formData,fileDownloadURL).subscribe((response:any)=>{
  //     //   //    console.log('response download NEW complete: ', response);
  //     //   // })
        
        
  //     // }

  //   } catch (error) {
  //     console.log(this.TAG, error);
  //   }
  // }
  async onScroll(offsetY: number){

    const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;
    if (!this.loadingIndicator && offsetY + viewHeight >= this.rows.length * this.rowHeight) {
      let limit = this.pageLimit;
      if (this.rows.length === 0) {
        // calculate the number of rows that fit within viewport
        const pageSize = Math.ceil(viewHeight / this.rowHeight);

        // change the limit to pageSize such that we fill the first page entirely
        // (otherwise, we won't be able to scroll past it)
        limit = Math.max(pageSize, this.pageLimit);
      }
      this.loadPage(limit);
    }




    
  }

  private async loadPage(limit: number) {
    
    this.loadingIndicator = true;
    this.loginservc.reportjson["offset"]=limit;
    let results = await this.reportService.getViewData(this.loginservc.reportjson).toPromise(); 
    const rows = [...this.rows, ...results[0].colum_data];
    this.rows = rows;
    this.loadingIndicator = false;
  }
  async presentAlert(Header: string, SubHeader: string, Message: string,entry) {
    const alert = await this.alertCtrl.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: [{
        text: 'Cancel',
        handler: () => {
          console.log('Confirm Okay');
        }
       },{
        text: "Okay",
        handler: (ok) => {
          let openType;
          if(this.fileType=='pdf'){
            openType = "application/pdf";
          } else {
            openType = "text/csv";
          }
          this.fileOpener.open(entry.toURL(), openType)
          .then(() => console.log("File is opened"))
          .catch(e => console.log("Error opening file", e));
        }
      }]
    });
    alert.dismiss(() => console.log('The alert has been closed.'));
    await alert.present();
  }

}
