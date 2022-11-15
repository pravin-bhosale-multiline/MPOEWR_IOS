import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Commonfun } from '../../provider/commonfun';
import { TermsOfAgreementService } from '../terms-of-agreement/terms-of-agreement.service'
import { LoginauthService } from '../login/loginauth.service'
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { Events, Platform } from '@ionic/angular';
import { Message } from '../../provider/message-helper'


@Component({
  selector: 'app-terms-of-agreement',
  templateUrl: './terms-of-agreement.page.html',
  styleUrls: ['./terms-of-agreement.page.scss'],
})
export class TermsOfAgreementPage implements OnInit {
  text: string = `Forms are the pillar of any business applications. You can use forms to perform countless data-entry tasks such as: login, submit a request, place an order, book a flight or create an account.

When developing a form, it’s important to create a good data-entry experience to efficiently guide the user through the workflow.

Developing good forms requires design and user experience skills, as well as a framework with support for two-way data binding, change tracking, validation, and error handling such as Angular. As you may know, Ionic is built on top of Angular. (if you didn’t know that you should consider reading Ionic Framework introduction and key components).

Forms are usually one of the major interaction points between an app and the user, allowing them to send data to the application. Commonly, the data is sent to the web server but the app can also intercept it to use it on its own.`;

  redirectto: any;
  selectedactivity: any;
  activitylist: any;
  isalreadyaccepted = false;
  isActivitySelected = false;
  saveresponse: any;
  url: string;
  urltype: string;
  txt: string = "Accept"
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
  termslist= [];
  isallaccepted=false;
  type='';
  iscustomeremp=false;
 
  constructor(private router: Router,
    public storage: Storage,
    private route: ActivatedRoute,
    private commonfun: Commonfun,
    public termsOfAgreementService: TermsOfAgreementService,
    private file: File,
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
    public loginservc: LoginauthService,
    private iab: InAppBrowser,
    private platform: Platform,
    public msg: Message,
    public events: Events) { }

  ngOnInit() {
    try {
    //  this.commonfun.chkcache('terms-of-agreement');
      setTimeout(() => {
        this.Bindallactivity();
      }, 3000);
    } catch (error) {

    }
  }
  getParam() {
    this.route.params.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // this.selectedbunch=null;
        this.redirectto = this.router.getCurrentNavigation().extras.state.redirectto;
      }
    })
  }
  exonActChangefirst(data) {
    try {
      this.isActivitySelected = true;
      this.loginservc.selectedactivity = this.selectedactivity;
      this.type=this.selectedactivity.type;
      this.loginservc.dealer_id = this.selectedactivity.dealer_id;
      this.loginservc.service_manager_id = this.selectedactivity.service_manager_id;
      this.loginservc.vender_id = this.selectedactivity.vender_id;
      this.storage.set('selectedactivity', this.selectedactivity);
      this.loginservc.isschemeinfo = false;//this.selectedactivity.schemeinfo == "Y"  ? true : false;
      this.loginservc.Discount_Method = this.selectedactivity.Discount_Method ? this.selectedactivity.Discount_Method : '';
      this.loginservc.dashboard = this.selectedactivity.dashboard == "Y" ? true : false;
      
      this.iscustomeremp=this.loginservc.defaultprofile[0].mmstOrderusrtype === "CEB"?true:false;

       if (this.selectedactivity.status == "A") {
        this.isalreadyaccepted = true;
        this.txt = "Next"
      }
      else {
        if (this.iscustomeremp) {
          this.txt = "Accept"
          this.isalreadyaccepted = false;
        }
        else {
          this.isalreadyaccepted = true;
          this.txt = "Next"
        }
      }


      this.getActivityWiseLOGO();
      //this.getDownloadORBrowse();
      this.events.publish('updateMenu');
      
      if(this.iscustomeremp){
        if (this.selectedactivity.type == 'PDF') {
          //this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?record=' + this.selectedactivity.id + '&isdownload=false&' + this.loginservc.parameter;
          this.termslist=this.selectedactivity.termslist;
            if(this.termslist.length===0){
              this.router.navigateByUrl('/home');
            }
        }
        else if (this.selectedactivity.type == 'URL') {
          this.url = this.selectedactivity.url
            if(this.isalreadyaccepted){
              this.router.navigateByUrl('/home');
            }
        }
        else {
          this.url = '';
          this.isalreadyaccepted = true;
          this.txt = "Next"
          this.router.navigateByUrl('/home');
        }
      } else {
        this.router.navigateByUrl('/home');
      }
      
     
      
     // this.events.publish('dashbaordEvent');
    } catch (error) {
    
    }
  }
  async exonActChange() {
    try {
      if (this.activitylist.length > 1) {

        this.isActivitySelected = true;
      //  console.log("exonActChange");
        this.loginservc.selectedactivity = this.selectedactivity;
        this.type=this.selectedactivity.type;
       // console.log("exonActChange Selected Activity",this.selectedactivity);
        if(this.selectedactivity.secondary_order =="Y"){
          this.loginservc.isConsolidationOrder = true;
        } else if(this.selectedactivity.secondary_order =="N"){
          this.loginservc.isConsolidationOrder = false;
        }
        


       let windowdata =  await (await this.termsOfAgreementService.getWindowAccess(this.selectedactivity.id)).toPromise();

       this.loginservc.roleWiseDashboard = windowdata.RoleWiseDashboard;

      // console.log("Window Acccesss Data",windowdata);


       this.loginservc.isNewLead = windowdata.WindowAccess["New Lead"]=="Y" ? true:false;
       this.loginservc.isExistingLead = windowdata.WindowAccess["Existing Lead"]=="Y" ? true:false;
       this.loginservc.isBusinessPartnerAddress = windowdata.WindowAccess["Business Partner Address"]=="Y" ? true:false; 
       this.loginservc.isNewOrder = windowdata.WindowAccess["New Order"]=="Y" ? true:false;
       this.loginservc.isDraftOrder = windowdata.WindowAccess["Draft Order"]=="Y" ? true:false;
       this.loginservc.isOrderStatus = windowdata.WindowAccess["Order Status"]=="Y" ? true:false;

       this.loginservc.isLatLongFinder = windowdata.WindowAccess["Lat-Long Finder"]=="Y" ? true:false;
       this.loginservc.isTravelPlan = windowdata.WindowAccess["Travel Plan"]=="Y" ? true:false;
       this.loginservc.isActualTravelPlan = windowdata.WindowAccess["Actual Travel Plan"]=="Y" ? true:false;
       this.loginservc.isTravelExpense = windowdata.WindowAccess["Travel Expense"]=="Y" ? true:false;
       this.loginservc.isTravelPlanClosure = windowdata.WindowAccess["Travel Plan Closure"]=="Y" ? true:false;
       this.loginservc.isApprovalAccess = windowdata.WindowAccess["Approval"]=="Y" ? true:false;

       this.loginservc.isCustomerServiceAccess = windowdata.WindowAccess["Customer Service"]=="Y" ? true:false;
       this.loginservc.isCompliantAcceptanceAccess = windowdata.WindowAccess["Complaint Acceptance"]=="Y" ? true:false;
       this.loginservc.isComplaintReportingAccess = windowdata.WindowAccess["Complaint Report"]=="Y" ? true:false;
       this.loginservc.isFieldVisitAccess = windowdata.WindowAccess["Field Visit"]=="Y" ? true:false;

        this.loginservc.isQuotationAccess = windowdata.WindowAccess["isQuotationAccess"]=="Y" ? true:false;
        this.loginservc.isQuotationApproval = windowdata.WindowAccess["isQuotationApproval"]=="Y" ? true:false;
        this.loginservc.isUpload = windowdata.WindowAccess["isUpload"]=="Y" ? true:false;
        this.loginservc.isReport = windowdata.WindowAccess["Reports"]=="Y" ? true:false;
      
        this.loginservc.isARVisitSchedule= windowdata.WindowAccess["AR Visit Schedule"]=="Y" ? true:false;
        this.loginservc.dealer_id = this.selectedactivity.dealer_id;
        this.loginservc.service_manager_id = this.selectedactivity.service_manager_id;
        this.loginservc.vender_id = this.selectedactivity.vender_id;
        this.loginservc.isschemeinfo = this.selectedactivity.Isschemempower == "Y" && windowdata.WindowAccess["Scheme"]==='Y' ? true : false;
        this.loginservc.Discount_Method = this.selectedactivity.Discount_Method ? this.selectedactivity.Discount_Method : '';
        this.loginservc.dashboard = this.selectedactivity.dashboard == "Y" ? true : false;
        this.iscustomeremp=this.loginservc.defaultprofile[0].mmstOrderusrtype === "CEB"?true:false;
        this.events.publish('dashbaordEvent');
       
        this.storage.set('selectedactivity', this.selectedactivity);
        if (this.selectedactivity.status == "A") {
          this.isalreadyaccepted = true;
          this.txt = "Next"
        }
        else {
          if (this.loginservc.defaultprofile[0].mmstOrderusrtype == "CEB") {
            this.txt = "Accept"
            this.isalreadyaccepted = false;
          }
          else {
            this.isalreadyaccepted = true;
            this.txt = "Next"
          }
        }


        this.getActivityWiseLOGO();
        //this.getDownloadORBrowse();
        if (this.selectedactivity.type == 'PDF') {
          // this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?record=' + this.selectedactivity.id
          // + '&isdownload=false&' + this.loginservc.parameter;
          
            this.termslist=this.selectedactivity.termslist;
          
        }
        else if (this.selectedactivity.type == 'URL') {
          this.url = this.selectedactivity.url
        }
        else {
          this.url = '';
          this.isalreadyaccepted = true;
          this.txt = "Next"
        }
      }
      this.events.publish('updateMenu');
    } catch (error) {
    //  console.log("Error:exonActChange", error);
    }
  }
  onclickNext(){
    this.router.navigateByUrl('/home');
  }
  onclickacceptPdf(file){
    file.accept=true;
    this.onSaveAgreement("A",file.fileid);
    this.isallaccepted= this.termslist.filter(terms=>{
      return terms.accept===false;
    }).length>0?false:true;
  }
  onclickRejectPdf(file){
    file.reject=!file.reject;
    this.onSaveAgreement("R",file.fileid);
  }
  onclick(type) {
    try {
      if (type == 'Accept') {

        if (this.txt == "Accept") {
          this.onSaveAgreement("A",'');
        }
        else {
          this.router.navigateByUrl('/home');
        }

      }
      else {
        //window.open("http://africau.edu/images/default/sample.pdf","_system","location=yes,enableViewportScale=yes,hidden=no");
        this.onSaveAgreement("R",'');

      }
    } catch (error) {

    }

  }
  inapp(fileid?) {
    try {
      if (this.msg.isplatformweb == false) {
         if (this.selectedactivity.type == 'PDF') {
          this.commonfun.loadingPresent();
           this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?fileid=' + fileid
          + '&isdownload=false&' + this.loginservc.parameter;
          const fileTransfer: FileTransferObject = this.transfer.create();
          fileTransfer.download(encodeURI(this.url), this.file.dataDirectory + 'file.pdf').then((entry) => {
            this.commonfun.loadingDismiss();
            this.fileOpener.open(entry.toURL(), "application/pdf")
              .then(() => console.log("File is opened"))
              .catch(e => console.log("Error opening file", e));
          }, (error) => {
            this.commonfun.loadingDismiss();
         });
        }
        else {
          let target = "_blank";
          this.iab.create(this.url, target, this.options);
        }
      }
      else {
        //for WPA
        let target = "_blank";
        if (this.selectedactivity.type == 'PDF') {
          this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?fileid=' + fileid
          + '&isdownload=false&' + this.loginservc.parameter;
        }
        this.iab.create(this.url, target, this.options);
      }


    } catch (error) {
    //  console.log("error", error);
    }
  }
  async Bindallactivity() {
    try {
      this.termsOfAgreementService.getUserActivityAgreementStatus().subscribe(data => {
        this.activitylist = data;
       
         this.loginservc.isFieldVisitAccess = true;

        if (this.activitylist.length == 1) {
          this.selectedactivity = this.activitylist[0];
          if(this.selectedactivity.secondary_order =="Y"){
            this.loginservc.isConsolidationOrder = true;
          } else if(this.selectedactivity.secondary_order =="N"){
            this.loginservc.isConsolidationOrder = false;
          }

            this.termsOfAgreementService.getWindowAccess(this.activitylist[0].id).subscribe(windowdata => {
              
              this.loginservc.isNewLead = windowdata.WindowAccess["New Lead"]=="Y" ? true:false;
              this.loginservc.isExistingLead = windowdata.WindowAccess["Existing Lead"]=="Y" ? true:false;
              this.loginservc.isBusinessPartnerAddress = windowdata.WindowAccess["Business Partner Address"]=="Y" ? true:false; 
              this.loginservc.isNewOrder = windowdata.WindowAccess["New Order"]=="Y" ? true:false;
              this.loginservc.isDraftOrder = windowdata.WindowAccess["Draft Order"]=="Y" ? true:false;
              this.loginservc.isOrderStatus = windowdata.WindowAccess["Order Status"]=="Y" ? true:false;
              this.loginservc.isLatLongFinder = windowdata.WindowAccess["Lat-Long Finder"]=="Y" ? true:false;
              this.loginservc.isTravelPlan = windowdata.WindowAccess["Travel Plan"]=="Y" ? true:false;
              this.loginservc.isActualTravelPlan = windowdata.WindowAccess["Actual Travel Plan"]=="Y" ? true:false;
              this.loginservc.isTravelExpense = windowdata.WindowAccess["Travel Expense"]=="Y" ? true:false;
              this.loginservc.isTravelPlanClosure = windowdata.WindowAccess["Travel Plan Closure"]=="Y" ? true:false;
              this.loginservc.isApprovalAccess = windowdata.WindowAccess["Approval"]=="Y" ? true:false;
              
              this.loginservc.isCustomerServiceAccess = windowdata.WindowAccess["Customer Service"]=="Y" ? true:false;
              this.loginservc.isCompliantAcceptanceAccess = windowdata.WindowAccess["Complaint Acceptance"]=="Y" ? true:false;
              this.loginservc.isComplaintReportingAccess = windowdata.WindowAccess["Complaint Report"]=="Y" ? true:false;
              this.loginservc.isFieldVisitAccess = windowdata.WindowAccess["Field Visit"]=="Y" ? true:false;
              this.loginservc.isQuotationAccess = windowdata.WindowAccess["isQuotationAccess"]=="Y" ? true:false;
              this.loginservc.isQuotationApproval = windowdata.WindowAccess["isQuotationApproval"]=="Y" ? true:false;
              this.loginservc.isUpload = windowdata.WindowAccess["isUpload"]=="Y" ? true:false;
              this.loginservc.isReport = windowdata.WindowAccess["Reports"]=="Y" ? true:false;
              this.loginservc.isARVisitSchedule= windowdata.WindowAccess["AR Visit Schedule"]=="Y" ? true:false;
              this.events.publish('dashbaordEvent');
              this.loginservc.roleWiseDashboard = windowdata.RoleWiseDashboard;
                this.exonActChangefirst(data);
          
            });
        
       
        }
      
      }, error => {
      //  console.log("error", error);
      });
    } catch (error) {
    //  console.log("error", error);
    }
  }
  onSaveAgreement(typeRA,fileid) {
    try {

      this.commonfun.loadingPresent();

      //--------------
      this.termsOfAgreementService.SaveAgreement(this.selectedactivity.id, typeRA,fileid,this.selectedactivity.type).subscribe(data => {
        this.commonfun.loadingDismiss();

        if (data != null) {
          this.saveresponse = data;

          if (this.saveresponse.resposemsg == "Success") {

            //  this.commonfun.presentAlert("Message",this.saveplanresponse.resposemsg,this.saveplanresponse.logmsg);
            if(this.selectedactivity.type==='PDF'){
              if (typeRA == 'R') {
                this.router.navigateByUrl('/login');
              }
            }else{
              if (typeRA == 'A') {
                this.router.navigateByUrl('/home');
              }
              else {
                this.router.navigateByUrl('/login');
              }
            }
            
          }
          else {
            this.commonfun.loadingDismiss();
            //  this.Resetpage();
            this.commonfun.presentAlert("Message", this.saveresponse.resposemsg, this.saveresponse.logmsg);
          }
        }
      }, error => {
        this.commonfun.loadingDismiss();
        this.commonfun.presentAlert("Message", "Error!", error.error.text);
      });
      //------------------



    } catch (error) {
     // console.log("error:save", error)
      this.commonfun.loadingDismiss();
    }
  }
  getActivityWiseLOGO() {
    try {


      //--------------
      this.commonfun.loadingPresent();

      this.termsOfAgreementService.ActivityWiseLOGO(this.selectedactivity.id).subscribe(data => {
        this.commonfun.loadingDismiss();
        if (data != null) {
          this.saveresponse = data;

          if (this.saveresponse.resposemsg == "success") {

            this.loginservc.logoimgeBase64 = "data:image/jpeg;base64," + this.saveresponse.img;

            this.storage.set('logoimgeBase64', "data:image/jpeg;base64," + this.saveresponse.img);


            //    this.router.navigateByUrl('/home');
          }
          else {
            this.storage.set('logoimgeBase64', "");

            this.loginservc.logoimgeBase64 = "";
          }
        }

      }, error => {
        this.commonfun.loadingDismiss();
        this.commonfun.presentAlert("Message", "Error!", error.error.text);
      });
      //------------------



    } catch (error) {
    //  console.log("Error1:", error);
      this.commonfun.loadingDismiss();
    }
  }


}