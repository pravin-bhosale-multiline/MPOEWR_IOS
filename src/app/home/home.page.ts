import { Component, NgZone, OnInit } from '@angular/core';
import { LoginauthService, Profilefinalresponse } from '../login/loginauth.service';
import { Events, IonSlides, MenuController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.page';
import { Commonfun } from '../../provider/commonfun';
import { Message } from '../../provider/message-helper';
import { HomeService } from '../home/home.service';



export interface Loginresponse {
  showMessage: boolean;
  messageType: string;
  messageTitle: string;
  messageText: string;
  error: ErrorResponse;
}
export interface ErrorResponse {
  message: string;
  messageType: string;
  title: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  checkcust: any;
  userName;
  mmstOrdercaptureapp: any;
  isplatformweb: boolean = false;
  readonly TAG = "HomePage";
  approvalScreenAccess;
  netsales = 0;
  pendingsalesorders = 0;
  monthlist: any;
  selectedaMonth: any;
  dashboard = false;
  isshowdata = false;

  defaultDashboard = false;
  netSalesDashboard = false;
  targetSalesDashboard = false
  selectedDashboard;
  dashboardTypeList:any;
  targetSalesMonthList:any;
  selectedTargetSalesMonth;
  selectedTargetSalesMonthData;
  salesTarget;
  salesAchievement;
  varianceValue;
  achievementVariance;

  public isNewLead = false;
  public isExistingLead = false;
  public isBusinessPartnerAddress = false; 
  public isNewOrder = false;
  public isDraftOrder = false;
  public isOrderStatus = false;

  public isLatLongFinder = false;
  public isTravelPlan = false;
  public isActualTravelPlan = false;
  public isTravelExpense = false;
  public isTravelPlanClosure = false;
  public isApprovalAccess = false;
   
  public isCustomerServiceAccess = false;
  public isComplaintReportingAccess = false;
  public isCompliantAcceptanceAccess = false;
  public isFieldVisitAccess = false;
 
  public isQuotationAccess = false;
  public isQuotationApproval = false;
  
  public isUpload = false;
  public isReport = false;
  public isArVisitSchedule=false

  constructor(
                public loginauth: LoginauthService,private menuCtrl: MenuController,private platform: Platform,
                public storage: Storage,public msg: Message,public loginpage: LoginPage,public events: Events,
                private router: Router,public commonfun: Commonfun,public homeservice: HomeService,private zone: NgZone,
                private commonFunction: Commonfun) { 
                this.events.subscribe('dashbaordEvent', () => {
                 // console.log("Menu Updated");
                  this.zone.run(() => {
                   // console.log("Menu Updated");
                });
                }) }

  async ngOnInit() {

    //this.commonfun.chkcache('home');



    try {
      // setTimeout(() => {
      //   this.chkcust();
      //   this.isshowdata = true;
      //   this.targetSalesDashboard = true;
      //   this.approvalScreenAccess = this.loginauth.approvalScreen;
      //   this.dashboard = this.loginauth.dashboard
      //   if (this.dashboard == true)
      //     this.getdashboard()
      // }, 2000);
      this.chkcust();

      this.isshowdata = true;
     // this.targetSalesDashboard = true;
      this.approvalScreenAccess = this.loginauth.approvalScreen;

      this.dashboardTypeList = this.loginauth.roleWiseDashboard;
    //  console.log(this.TAG,"Dashboard List",this.dashboardTypeList);

     // this.commonFunction.loadingPresent();
     // this.dashboardTypeList = await this.homeservice.getDashboardTypeList().toPromise();
    //  console.log(this.TAG,"Dashboard Type List",this.dashboardTypeList);
      if(!!this.dashboardTypeList){
        let twoDefault = false;
         
        if(this.dashboardTypeList.length > 1){
          let noOneDefault = false;
          for(let i = 0; i < this.dashboardTypeList.length; i++){
            
            for(let i = 0; i < this.dashboardTypeList.length; i++){
              if(this.dashboardTypeList[i].default == "N"){
                noOneDefault = true;
              } else {
                noOneDefault = false;
              }
            }

            if(this.dashboardTypeList[i].default == "Y" && twoDefault == false){
              twoDefault = true;
              if(this.dashboardTypeList[i].code == "HP"){
                this.defaultDashboard = true;
                this.targetSalesDashboard = false;
                this.netSalesDashboard = false;
                this.selectedDashboard = this.dashboardTypeList[i];
              } else if(this.dashboardTypeList[i].code == "ST"){
                this.targetSalesDashboard = true;
                this.defaultDashboard = false;
                this.netSalesDashboard = false;
                this.selectedDashboard = this.dashboardTypeList[i];
              } else if(this.dashboardTypeList[i].code == "SDB"){
                this.netSalesDashboard = true;
                this.targetSalesDashboard = false;
                this.defaultDashboard = false;
                this.getdashboard();
                this.selectedDashboard = this.dashboardTypeList[i];
              } 
            }  else if(this.dashboardTypeList.length > 1 && noOneDefault == true){
              this.selectedDashboard = this.dashboardTypeList[0];
              if(this.dashboardTypeList[0].code == "HP"){
                this.defaultDashboard = true;
                this.targetSalesDashboard = false;
                this.netSalesDashboard = false;
                this.selectedDashboard = this.dashboardTypeList[0];
              } else if(this.dashboardTypeList[0].code == "ST"){
                this.targetSalesDashboard = true;
                this.defaultDashboard = false;
                this.netSalesDashboard = false;
                this.selectedDashboard = this.dashboardTypeList[0];
              } else if(this.dashboardTypeList[0].code == "SDB"){
                this.netSalesDashboard = true;
                this.targetSalesDashboard = false;
                this.defaultDashboard = false;
                this.getdashboard();
                this.selectedDashboard = this.dashboardTypeList[0];
              } 
          }

            
          }
        }
        
        

         if(this.dashboardTypeList.length == 1){
            this.selectedDashboard = this.dashboardTypeList[0];
            if(this.dashboardTypeList[0].code == "HP"){
              this.defaultDashboard = true;
              this.targetSalesDashboard = false;
              this.netSalesDashboard = false;
              this.selectedDashboard = this.dashboardTypeList[0];
            } else if(this.dashboardTypeList[0].code == "ST"){
              this.targetSalesDashboard = true;
              this.defaultDashboard = false;
              this.netSalesDashboard = false;
              this.selectedDashboard = this.dashboardTypeList[0];
            } else if(this.dashboardTypeList[0].code == "SDB"){
              this.netSalesDashboard = true;
              this.targetSalesDashboard = false;
              this.defaultDashboard = false;
              this.getdashboard();
              this.selectedDashboard = this.dashboardTypeList[0];
            } 
        }
      } else {
        this.defaultDashboard = true;
      }
   //   this.commonFunction.loadingDismiss();

    } catch (error) {
      this.defaultDashboard = true;
    //  this.commonFunction.loadingDismiss();
    //  console.log("Error: Home ngonit:", error);
    }



  }
  async ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  //  console.log("ionViewWillEnter");
 

    this.approvalScreenAccess = this.loginauth.approvalScreen;

    this.isNewLead = this.loginauth.isNewLead;
    this.isExistingLead = this.loginauth.isExistingLead;
    this.isBusinessPartnerAddress = this.loginauth.isBusinessPartnerAddress; 
    this.isNewOrder = this.loginauth.isNewOrder;
    this.isDraftOrder = this.loginauth.isDraftOrder;
    this.isOrderStatus = this.loginauth.isOrderStatus;
  
    this.isLatLongFinder = this.loginauth.isLatLongFinder;;
    this.isTravelPlan = this.loginauth.isTravelPlan;
    this.isActualTravelPlan = this.loginauth.isActualTravelPlan;
    this.isTravelExpense = this.loginauth.isTravelExpense;
    this.isTravelPlanClosure = this.loginauth.isTravelPlanClosure;
    this.isApprovalAccess = this.loginauth.isApprovalAccess;
     
    this.isCustomerServiceAccess = this.loginauth.isCustomerServiceAccess;
    this.isComplaintReportingAccess = this.loginauth.isComplaintReportingAccess;
    this.isCompliantAcceptanceAccess = this.loginauth.isCompliantAcceptanceAccess;
    this.isFieldVisitAccess = this.loginauth.isFieldVisitAccess;
   
    this.isQuotationAccess = this.loginauth.isQuotationAccess;
    this.isQuotationApproval = this.loginauth.isQuotationApproval;
    
    this.isUpload = this.loginauth.isUpload;
    this.isReport = this.loginauth.isReport;
    this.isArVisitSchedule=this.loginauth.isARVisitSchedule;
    this.dashboard = this.loginauth.dashboard
    if (this.dashboard == true){
      this.getdashboard()
    }
    
    try {
         
          if(this.targetSalesDashboard == true) {
            this.commonFunction.loadingPresent();
            this.targetSalesMonthList = await this.homeservice.getTargetSalesPeriod().toPromise();
          //  console.log(this.TAG,"Target Sales Month List",this.targetSalesMonthList);
            this.commonFunction.loadingDismiss();
    }
    } catch (error) {
      this.commonFunction.loadingDismiss();
    }
    
  }
  chkcust() {
    try {


      if (this.loginauth.defaultprofile != null && this.loginauth.defaultprofile != undefined) {
        this.userName = this.loginauth.defaultprofile[0].name ? this.loginauth.defaultprofile[0].name : 'Demo User';

        if (this.loginauth.defaultprofile[0].mmstOrderusrtype === "CEB") {
          this.checkcust = false;


        }
        if (this.loginauth.defaultprofile[0].mmstOrderusrtype !== "CEB") {
          this.checkcust = true;

        }



        // if(!this.platform.is("desktop")){
        if (!this.msg.isplatformweb) {

          this.isplatformweb = false;
        }
        else {

          this.isplatformweb = true;

        }
      }
      else {
        this.router.navigateByUrl('/login');
      }
    } catch (error) {

    }
  }
  getdashboard() {
    try {
      // this.homeservice.getdashboardapi()
      this.homeservice.getdashboardapi1().subscribe(data => {

        const response = data['response'];
        var jsondata = response.data;

        //get month
        this.homeservice.getdashboardapi(jsondata[0].id).subscribe(data2 => {
          const response2 = data2['response'];

          this.monthlist = response2.data;
          this.selectedaMonth = this.monthlist[0]
        }, error => {
          this.commonfun.presentAlert("Message", "Error", error);
        //  console.log("getdashboardapi:loadingDismiss");

        });
        //get month



      }, error => {
        this.commonfun.presentAlert("Message", "Error", error);
      //  console.log("getdashboardapi1:loadingDismiss");
      });

    } catch (error) {

    }
  }
  


  
  onMonthChange() {
    try {
      // console.log("this.selectedaMonth",this.selectedaMonth);
      this.homeservice.CustomerWiseSalesInfo(this.selectedaMonth.code).subscribe(data => {
        const response = data;

        this.netsales = response.netamt;
        this.pendingsalesorders = response.pendingordervalue;

        // this.selectedaMonth=this.monthlist[this.monthlist.length-1]
      }, error => {
        // this.commonfun.presentAlert("Message", "Error", error);
      //  console.log("CustomerWiseSalesInfo", error);

      });
    } catch (error) {

    }
  }

 async  onDashboardSelectChange(selectedDashboard){
    try {
            if(selectedDashboard.code == "HP"){
              this.defaultDashboard = true;
              this.targetSalesDashboard = false;
              this.netSalesDashboard = false;
            } else if(selectedDashboard.code == "ST"){
              this.targetSalesDashboard = true;
              this.defaultDashboard = false;
              this.netSalesDashboard = false;
              try {
                    this.commonFunction.loadingPresent();
                    this.targetSalesMonthList = await this.homeservice.getTargetSalesPeriod().toPromise();
                  //  console.log(this.TAG,"Target Sales Month List",this.targetSalesMonthList);
                    this.commonFunction.loadingDismiss();
              } catch (error) {
                    this.commonFunction.loadingDismiss();
              }
              
            } else if(selectedDashboard.code == "SDB"){
              this.netSalesDashboard = true;
              this.targetSalesDashboard = false;
              this.defaultDashboard = false;
              this.getdashboard();
            }
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public async onTargetSalesMonthChange(selectedTargetSalesMonth){
    try {
          this.commonFunction.loadingPresent();
          this.selectedTargetSalesMonthData = await this.homeservice.getTargetSalesPeriodData(selectedTargetSalesMonth).toPromise();
         // console.log(this.TAG,"onTargetSalesMonthChange Data",this.selectedTargetSalesMonthData);
        //  console.log(this.TAG,"onTargetSalesMonthChange Data",this.selectedTargetSalesMonthData);
          if(!!this.selectedTargetSalesMonthData){
              this.salesTarget = this.selectedTargetSalesMonthData[0].salestarget;
              this.salesAchievement = this.selectedTargetSalesMonthData[0].salesachievement;
              this.varianceValue = this.selectedTargetSalesMonthData[0].variancevalue;
              this.achievementVariance = this.selectedTargetSalesMonthData[0].achmntveriance;
            //  console.log(this.TAG,"Binded Target DATA",this.salesTarget);
          } else {
            this.salesTarget = "";
            this.salesAchievement = "";
            this.varianceValue = "";
            this.achievementVariance = "";
          }


          this.commonFunction.loadingDismiss();
    } catch (error) {
          this.salesTarget = "";
          this.salesAchievement = "";
          this.varianceValue = "";
          this.achievementVariance = "";
          this.commonFunction.loadingDismiss();
        //  console.log(this.TAG,error);
    }
  }

}
