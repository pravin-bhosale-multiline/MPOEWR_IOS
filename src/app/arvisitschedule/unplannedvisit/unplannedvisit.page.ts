import { Router } from '@angular/router';
import { Commonfun } from './../../../provider/commonfun';
import { ArvisitscheduleService } from './../arvisitschedule.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-unplannedvisit',
  templateUrl: './unplannedvisit.page.html',
  styleUrls: ['./unplannedvisit.page.scss'],
})
export class UnplannedvisitPage implements OnInit {
  formplan: FormGroup;
  arschlist;
  customerlist;
  billtoaddressList;
  validation_messages = {
    'fromplan': [
      { type: 'required', message: ' *Please Select Plan.' }
    ],
    'customer': [
      { type: 'required', message: '*Please Select Customer.' }
    ],
    'billtoaddress': [
      { type: 'required', message: 'Please Select Billing Address.' }
    ],
    
  }
  totalrowc: number;
  currentdate;
  
  constructor(private fb: FormBuilder
    ,public arvisitScheduleService:ArvisitscheduleService
    ,public commonfun: Commonfun
    ,public router:Router) { 
    this.formplan = this.fb.group({
      plansch: [, Validators.required],
      customer: [, Validators.required],
      billtoaddress: [, Validators.required],
      visitdate: [],
      targetformonth:[0,Validators.required]
    });
    this.bindARVisitSch();
  }

  ngOnInit() {
    this.currentdate=new Date().toISOString();
    this.formplan.get("visitdate").setValue(this.currentdate)

  }
  bindCustomerBillAddress(bpartnerid) {
    try {
        var body= {
          "action": "getcustomerinvoiceaddress",
          "bpartnerid":bpartnerid,
     }
          this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
          var response = data;
          this.billtoaddressList = response.data;
          if(this.billtoaddressList.length===1){
            this.formplan.get("billtoaddress").setValue(this.billtoaddressList[0]);
          }
        });
  } catch (error) {
    //console.log("bindOwnedDriverapi",error);
  }
  }
  bindARVisitSch() {
    try {
        var body= {
          "action": "getlistOfarvisitschedule",
     }
          this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
          var response = data;
          this.arschlist = response.data;
        });
  } catch (error) {
    //console.log("bindOwnedDriverapi",error);
  }
  }
  searchc='';
  offsetc = 0;
  onCloseCust(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    event.component.searchText = "";
    this.offsetc = 0;
    if(this.formplan.get("customer").value){
      let bpartnerid=this.formplan.get("customer").value.bpartnerid
      this.bindCustomerBillAddress(bpartnerid)
    }
    
  }
  custSearchChange(event: { component: IonicSelectableComponent, text: any }) {
    this.searchc = event.text;//.replace(/\s/g,'');
      this.offsetc = 0;
      this.bindCustomerList(this.searchc, 0);
  }
  
  bindCustomerList(searchtext,intoffset) {
    try {
        var body= {
          "action": "getcustomerforar",
          "offset":intoffset,
          "search":searchtext    
      }
          this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
          var response = data;
          this.customerlist = response.data;
          this.totalrowc = response.totalRows;
        });
  } catch (error) {
    //console.log("bindOwnedDriverapi",error);
  }
  }
  public async doInfiniteCust(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    try {
      //Set this initial 0 at top 
  
      let text = (event.text || '').trim().toLowerCase();
      if (this.offsetc < this.totalrowc && this.totalrowc > 20) {
  
  
        this.offsetc = this.offsetc + 20;
        var body= {
          "action": "getcustomerforar",
          "offset":this.offsetc,
          "search":text    
      }
        var tempData = await (await this.arvisitScheduleService.getArVisitPlan(body)).toPromise();
  
        if (!!tempData) {
  
          this.customerlist = this.customerlist.concat(tempData['data']);
          event.component.endInfiniteScroll();
        }
      }
  
      if (this.offsetc > this.totalrowc) {
        event.component.disableInfiniteScroll();
        return;
      }
    } catch (error) {
  
    }
  
  }

onSaveVisit(frmValue){
  //console.log(frmValue);
try{
  var body= {
    "schid":frmValue.plansch.schid,
    "bpartnerlocid":frmValue.billtoaddress.bpartnerlocid,
    "bpartnerid":frmValue.customer.bpartnerid,
    "targetformonth":frmValue.targetformonth,
    "visitdate":frmValue.visitdate
   }
   this.commonfun.loadingPresent();
   this.arvisitScheduleService.saveArVisitUnplannedPlan(body).subscribe(data => {
   this.commonfun.loadingDismiss();
    
        var response = data['response'];
    if(response.hasOwnProperty('messageType'))
    {
    if(response.messageType=='success')
      this.commonfun.presentAlert("Message","Success",response.messageText);
      this.router.navigateByUrl('/arvisitschedule');
    }
    if(response.error)
      this.commonfun.presentAlert("Message","Error",response.error.message);

      });
    } catch (error) {
    this.commonfun.loadingDismiss();
    
    this.commonfun.presentAlert("Message","Error",error);
    
    }

  
}
  
}
