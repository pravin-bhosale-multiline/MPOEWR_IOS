import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Commonfun } from '../../provider/commonfun';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { TravelPlanService } from '../travel-plan/travel-plan.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-addedit-actual-travel-plan',
  templateUrl: './addedit-actual-travel-plan.page.html',
  styleUrls: ['./addedit-actual-travel-plan.page.scss'],
})
export class AddeditActualTravelPlanPage implements OnInit {
  formaddactualplan: FormGroup;
  Leadlist: any;
  allleadskm:any;
  leadskm:any;
  selectedLead:any;
  selectedleadskm:any=[];
  offset:any=0;	
  fromdate:any;	
  todate:any;
  days:any;
  traveldate:any;
  mexp_visitplan_id:any;
  strsearch='';
  index='';
  outOrderChkCtrlValueAddEditActual;
isfirst=false;
islast=false;
  constructor(
    private fb: FormBuilder,
    private commonfun:Commonfun,
    private router: Router,
    private route: ActivatedRoute,
    private travelplanservice:TravelPlanService,
    public loginauth:LoginauthService
  ) {
    this.getrout();
    this.formaddactualplan = this.fb.group({
      selectedlead:[],
      searchlead:[],
    });
   }

  ngOnInit() {
    
  }
  Resetpage(){}

  onsearch(){
    var srchkey=this.formaddactualplan.controls["searchlead"].value;
    this.strsearch=srchkey;
    this.offset=0;

  if(srchkey.length % 3==0  || srchkey=='')
  {
      this.bindNearestPerson();
    }
  
  }

 



 
  onPrevious(){	
    if(this.offset>1)	
    {	
      this.offset=this.offset-10;	
      this.bindNearestPerson();	
    }	
            }	
            onNext(){	
              this.offset=this.offset+10;	
              this.bindNearestPerson();	
            }




            bindNearestPerson() {
              try {
          
               
                   
              this.travelplanservice.getSearchNearestPersoni(this.selectedLead.addressid,this.offset,this.strsearch,this.outOrderChkCtrlValueAddEditActual).subscribe(data => {
                var response = data;
                if(response.AddressList.length>0)
                    { this.leadskm=response.AddressList;
                    // this.leadskm=this.leadskm.slice(0,10)
                    }
                    else{
                //       this.leadskm=response.AddressList;
                //       if(this.offset>0)
                // this.offset=this.offset-10;
          
          
                if(this.offset>0)
                this.offset=this.offset-10;
                if(this.strsearch!="")
                this.leadskm=response.AddressList;
                      
                    }
                    
              });
          
            } catch (error) {
              this.commonfun.presentAlert("Message", "Error", error);
             // this.commonfun.loadingDismiss();
            }
            }
 
  onAddLead(item){
    try {
     
      if(this.selectedleadskm)
     {
      if(this.selectedleadskm.some(i=>i.addressid===item.addressid))
      {
        this.commonfun.presentAlert("Message", "Alert", "Lead already exists.");

      }
      else{


        var slitem={"custORbpatnerID":item.custORbpatnerID,"mexp_visitplan_id":this.mexp_visitplan_id,"mexp_customervisit_id":item.custORbpatnerID,"line":this.selectedleadskm.length+1,"custname":item.custname,"addressid":item.addressid,"addressname":item.addressname,"pincode":item.pincode,"visit_day":this.days,"visit_date":this.traveldate,"latitude":item.latitude,"longitude":item.longitude,"km":item.km,"status":item.status,"show":"false","TaskList":item.TaskList};
        this.selectedleadskm.splice(this.index+1, 0, slitem);
        this.onSave();
        //  this.selectedleadskm.push(slitem);
      }
    }	
    else{	
      	
        var slitem1=[{"custORbpatnerID":item.custORbpatnerID,"mexp_visitplan_id":this.mexp_visitplan_id,"mexp_customervisit_id":item.custORbpatnerID,"line":"1","custname":item.custname,"addressid":item.addressid,"addressname":item.addressname,"pincode":item.pincode,"visit_day":this.days,"visit_date":this.traveldate,"latitude":item.latitude,"longitude":item.longitude,"km":item.km,"status":item.status,"show":"false","TaskList":item.TaskList}];	
      	
          this.selectedleadskm=slitem1;	
          this.onSave();
      	
    }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  
}

getrout(){
  try {
    this.route.params.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
       this.selectedLead= this.router.getCurrentNavigation().extras.state.selectedLead;
       this.selectedleadskm= this.router.getCurrentNavigation().extras.state.allleads;
       this.mexp_visitplan_id= this.router.getCurrentNavigation().extras.state.mexp_visitplan_id;
this.index= this.router.getCurrentNavigation().extras.state.index;
    this.fromdate=this.router.getCurrentNavigation().extras.state.fromdate;	
       this.todate=this.router.getCurrentNavigation().extras.state.todate;	
       this.days=this.router.getCurrentNavigation().extras.state.days;
       this.traveldate=this.router.getCurrentNavigation().extras.state.traveldate;
       this.outOrderChkCtrlValueAddEditActual = this.router.getCurrentNavigation().extras.state.outOrderChkCtrl;
      	
       if(this.selectedLead==null)	
      {	
        this.leadskm=this.router.getCurrentNavigation().extras.state.first10leads;	
      }	
      else{	
        this.bindNearestPerson();	
        	
      }

      }
    });

  } catch (error) {
//console.log("addsublead()-ERROR:",error);
    
  }
}

removeLeads(post) {
  try {
//console.log("removeLeads()");
    
  
      let index = this.selectedleadskm.indexOf(post);
      const result = this.selectedleadskm.filter(item => item != post);
      this.selectedleadskm=result;
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
    }

    onSave(){
      try {
        let navigationExtras: NavigationExtras = {
          state: {
            selectedddlsubleads: this.selectedleadskm,
            selectedLead:this.selectedLead
          }
        };
       this.router.navigate(['actual-travel-plan'],navigationExtras); 
      } catch (error) {
        
      }
    }

}
