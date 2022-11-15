import { Commonfun } from './../../../provider/commonfun';
import { ModalController } from '@ionic/angular';
import { ArvisitscheduleService } from './../arvisitschedule.service';
import { Component, Input, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aruserselect',
  templateUrl: './aruserselect.page.html',
  styleUrls: ['./aruserselect.page.scss'],
})
export class AruserselectPage implements OnInit {
  aruserlist;
  planlist;
  totalrow: number;
  selecteduser;
  @Input() crossassignList;
  constructor(public arvisitScheduleService:ArvisitscheduleService
    ,public route:ActivatedRoute,public router:Router
    ,public viewCtrl: ModalController
    , public commonfun: Commonfun) { }

  ngOnInit() {
   
  }
  onClickAssignPlan(){
    //console.log(this.crossassignList);
    if(this.selecteduser===undefined){
      this.commonfun.presentAlert("Message","Error","Please Select Atleast One AR User.");
      return
    }
  
      try{
      // console.log(rejectedlist);
      var body= {
        "action":"CA",
        "listofarplan":this.crossassignList,
        "userid":this.selecteduser.userid
       }
       this.commonfun.loadingPresent();
       this.arvisitScheduleService.saveArVisitPlan(body).subscribe(data => {
        this.commonfun.loadingDismiss();
        
            var response = data['response'];
        if(response.hasOwnProperty('messageType'))
        {
        if(response.messageType=='success')
        
          this.commonfun.presentAlert("Message","Success",response.messageText);
          this.dismiss('success');
          
        }
        if(response.error)
          this.commonfun.presentAlert("Message","Error",response.error.message);
  
          });
        } catch (error) {
        this.commonfun.loadingDismiss();
        
        this.commonfun.presentAlert("Message","Error",error);
        
        
    }
  }
  dismiss(status) {
    this.viewCtrl.dismiss(status);
    }
  onClose(){
    this.dismiss('');
  }
 
  search='';
  offset = 0;
  onARUserClose(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    event.component.searchText = "";
    this.offset = 0;
  }
  onARUsersearchChange(event: { component: IonicSelectableComponent, text: any }) {
    this.search = event.text;//.replace(/\s/g,'');
      this.offset = 0;
      this.bindArUserapi(this.search, 0);
  }
  bindArUserapi(searchtext,intoffset) {
    try {
        var body= {
          "action": "getaruserfromorg",
          "offset":intoffset,
          "search":searchtext    
      }
          this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
          var response = data;
          this.aruserlist = response.data;
          this.totalrow = response.totalRows;
        });
  } catch (error) {
    //console.log("bindOwnedDriverapi",error);
  }
  }
  public async doInfiniteARUser(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    try {
      //Set this initial 0 at top 
  
      let text = (event.text || '').trim().toLowerCase();
      if (this.offset < this.totalrow && this.totalrow > 20) {
  
  
        this.offset = this.offset + 20;
        var body= {
          "action": "getaruserfromorg",
          "offset":this.offset,
          "search":text    
      }
        var tempData = await (await this.arvisitScheduleService.getArVisitPlan(body)).toPromise();
  
        if (!!tempData) {
  
          this.aruserlist = this.aruserlist.concat(tempData['data']);
          event.component.endInfiniteScroll();
        }
      }
  
      if (this.offset > this.totalrow) {
        event.component.disableInfiniteScroll();
        return;
      }
    } catch (error) {
  
    }
  
  }
  
}
