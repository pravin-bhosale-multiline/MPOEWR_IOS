import { AruserselectPage } from './aruserselect/aruserselect.page';
import { ArvisitscheduleService } from './arvisitschedule.service';
import { Component, OnInit } from '@angular/core';
import { Commonfun } from 'src/provider/commonfun';
import { Router, NavigationExtras } from '@angular/router';
import { LoginauthService } from '../login/loginauth.service';
import { AlertController, ModalController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-arvisitschedule',
  templateUrl: './arvisitschedule.page.html',
  styleUrls: ['./arvisitschedule.page.scss'],
})
export class ArvisitschedulePage implements OnInit {
  planlist:any
  isemptyList=false;
  offset=0;
  totalRows=0;
  sorder=1;
  selectedcustomer;
  customerlist;
  searchcustomer: string;
  offsetcust=0;
  selectedfromdate;
  selectedtodate;
  selectedstatus;
  constructor( public commonfun: Commonfun
    ,public arvisitScheduleService:ArvisitscheduleService
    ,private router: Router
    ,public loginauth: LoginauthService
    ,public alertController: AlertController
    ,public modalController: ModalController) { }

  ngOnInit() {
    //this.bindDataList();
  }
  ionViewWillEnter(){
    this.offset=0;
    this.bindDataList();
   
  }
  onClickSearch(event){
    this.offset=0;
    this.bindDataList();
  }
  onClickClear(event){
    this.selectedcustomer=undefined;
    this.selectedfromdate=undefined;
    this.selectedtodate=undefined;
    this.selectedstatus=undefined;

  }
  oncustomerClose(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    if(event!==undefined)
    event.component.searchText = "";
    this.searchcustomer = "";
  }
  async onSearchCustomer(event: { component: IonicSelectableComponent, text: any }) {

    this.searchcustomer = event.text;//.replace(/\s/g,'');
    await this.bindCustomer(this.searchcustomer, 0);
  }
  custtotalrow;
  async bindCustomer(searchcustomer: string, offsetcust) {
    try {
      let body ={
        action:"getcustomerforplan",
        offset:offsetcust,
        search:searchcustomer
      }
      this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
          
       var response = data;
       this.customerlist = response.data;
        this.custtotalrow = response.totalRows;
       //console.log(this.listofitem);
       
      });

    } catch (error) {
      console.log("getcustomerforplan", error)
    }
  }
  public async doInfiniteCust(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    try {
      //Set this initial 0 at top 

      let text = (event.text || '').trim().toLowerCase();
      if (this.offsetcust < this.custtotalrow && this.custtotalrow > 20) {


        this.offsetcust = this.offsetcust + 20;
        var body = {
          action:"getcustomerforplan",
          offset:this.offsetcust,
          search:text
        }
        var tempData = await (await this.arvisitScheduleService.getArVisitPlan(body)).toPromise();

        if (!!tempData) {

          this.customerlist = this.customerlist.concat(tempData['data']);
          event.component.endInfiniteScroll();
        }
      }else{
        event.component.endInfiniteScroll();
        event.component.disableInfiniteScroll();
      }

      if (this.offsetcust > this.custtotalrow) {
        event.component.disableInfiniteScroll();
        return;
      }
    } catch (error) {

    }

  }
    onorgchange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    //console.log("selectedOrg:", event.value)
    this.selectedcustomer = event.value;

  }
  onToggelGrid(plan){
    plan.isplusminus=!plan.isplusminus;
  }
  openChecklist(plan){
    this.commonfun.loadingPresent();
    // check for section
    this.sorder=plan.status==='SCP'?1:2;
    var body= {
      "action":"getquestionaryforartracker",
      "sectionorder":this.sorder,
      "orgactid":this.loginauth.selectedactivity.id
    }
    this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
      this.commonfun.loadingDismiss();
          var response = data;
          if(response.data){
            this.arvisitScheduleService.visitplanforchecklist=plan;
            //this.arvisitScheduleService.selectedorg='0';
            this.arvisitScheduleService.selectedinspection=response.data[0];
            this.router.navigateByUrl('/section');
          }
       

        });
    
  }
  selectMember(plan){
   // console.log(plan);
 
  
  }
  AcceptPlan(){
    //get all checkded list
    try {
   let acceptedlist = this.planlist.filter(plan=>plan.ischecked)
   if(acceptedlist.length===0){
    this.commonfun.presentAlert("Message","Error","Please Select Atleast One Record.");
    return
  }
  let acceptedlistInvalid = this.planlist.filter(plan=>plan.ischecked && plan.status!=='ACP')
  if(acceptedlistInvalid.length>0){
    this.commonfun.presentAlert("Message","Error"," Selected record is already marked 'Accept'");
    return
  }
     //console.log(acceptedlist);
     var body= {
      "action":"A",
      "listofarplan":acceptedlist
     }
     this.commonfun.loadingPresent();
     this.arvisitScheduleService.saveArVisitPlan(body).subscribe(data => {
      this.commonfun.loadingDismiss();
      
          var response = data['response'];
      if(response.hasOwnProperty('messageType'))
      {
      if(response.messageType=='success')
        this.commonfun.presentAlert("Message","Success",response.messageText);
        this.offset=0;
        this.bindDataList();
        
      }
      if(response.error)
        this.commonfun.presentAlert("Message","Error",response.error.message);

        });
      } catch (error) {
      this.commonfun.loadingDismiss();
      
      this.commonfun.presentAlert("Message","Error",error);
      
      }
     

    
    
  }
  rejectPlan(rejectedReason,rejectedlist){
    
    try{
    // console.log(rejectedlist);
    var body= {
      "action":"R",
      "listofarplan":rejectedlist,
      "rejectedreason":rejectedReason
     }
     this.commonfun.loadingPresent();
     this.arvisitScheduleService.saveArVisitPlan(body).subscribe(data => {
      this.commonfun.loadingDismiss();
      
          var response = data['response'];
      if(response.hasOwnProperty('messageType'))
      {
      if(response.messageType=='success')
      this.offset=0;
      this.bindDataList();
        this.commonfun.presentAlert("Message","Success",response.messageText);
        
        
      }
      if(response.error)
        this.commonfun.presentAlert("Message","Error",response.error.message);

        });
      } catch (error) {
      this.commonfun.loadingDismiss();
      
      this.commonfun.presentAlert("Message","Error",error);
      
      }
  }
  
  async presentAlertRejectedReason() {
    let rejectedlist = this.planlist.filter(plan=>plan.ischecked)
    if(rejectedlist.length===0){
      this.commonfun.presentAlert("Message","Error","Please Select Atleast One Record.");
      return
    }
    let rejectedlistInvalid = rejectedlist.filter(plan=>plan.ischecked && plan.status!=='ACP' )
    if(rejectedlistInvalid.length>0){
      this.commonfun.presentAlert("Message","Error"," Selected record Can Not Reject.");
      return
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Rejected Reason',
     // message: '<strong>Please Select Rejected Reason</strong>',
      inputs: [
        {
          name: 'RejectedReason',
          type: 'text',
          placeholder: 'Rejected Reason'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (item) => {
            //console.log('Confirm Okay',item.RejectedReason);
            if(item.RejectedReason){ }else{
              this.commonfun.presentAlert("Message","Error","Reason Is Mendotory.");
            }

            this.rejectPlan(item.RejectedReason,rejectedlist)
          }
        }
      ]
    });

    await alert.present();
  }
  
  async presentCrossAssignment() {
    let crossassignList = this.planlist.filter(plan=>plan.ischecked)
    if(crossassignList.length===0){
      this.commonfun.presentAlert("Message","Error","Please Select Atleast One Record.");
      return
    }
    let rejectedlistInvalid = crossassignList.filter(plan=>plan.ischecked && plan.status!=='ACP' )
    if(rejectedlistInvalid.length>0){
      this.commonfun.presentAlert("Message","Error"," Selected record Can Not Cross Assign.");
      return
    }
    const modal = await this.modalController.create({
      component: AruserselectPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'crossassignList': crossassignList,
      }
    });
    modal.onDidDismiss()
    .then((data) => {
      const status = data['data']; // Here's your selected user!

      if (status==='success') {
        console.log("data, ", status);
        //this.router.navigateByUrl(url);
        this.offset=0;
         this.bindDataList();
      }

    });
    return await modal.present();
  
  


  }
  doClickAddUnPlanned(){
    this.router.navigateByUrl('/unplannedvisit');
  }
  bindDataList(){
    
    try {
      var body= {
        "action":"getarvisitplan",
        "fromdate":this.selectedfromdate!==undefined?this.selectedfromdate:'',
        "todate":this.selectedtodate!==undefined?this.selectedtodate:'',
        "status":this.selectedstatus!==undefined?this.selectedstatus:'',
        "bpartnerid":this.selectedcustomer!==undefined?this.selectedcustomer.bpartnerid:'',
        "offset":this.offset
    }
    this.commonfun.loadingPresent();
        this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
    this.commonfun.loadingDismiss();

        var response = data;
        
        if(this.offset==0)
        {
          
        this.planlist = response.data;
        if(this.planlist.length <=20){
          

          this.isemptyList=true;
        }
        else{
          

          this.isemptyList=false;
        }
        }
        else
        {
        this.planlist = this.planlist.concat(response.data);
        }
        this.totalRows=response.totalRows
     

      });
    } catch (error) {
      console.log("bindcusaddress",error);
    this.commonfun.loadingDismiss();

    }
  }
  doInfinite(event){
    try {
      this.offset+=20;
      if(this.offset<this.totalRows)
      {
        this.isemptyList=false
      this.bindDataList();
      event.target.complete();
      }
      else
      {
      this.isemptyList=true
      
      }
   

    } catch (error) {
      console.log("errror",error);
    }
  }
}
