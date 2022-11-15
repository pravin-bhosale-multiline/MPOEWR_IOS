import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { NeworderService, AllAct, BusinessPartnerList, Summary, BPaddress } from '../neworder/neworder.service';
import { LoginauthService } from '../login/loginauth.service';
import { Commonfun } from '../../provider/commonfun';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { BusinessPartnerAddressService } from './business-partner-address.service';


@Component({
  selector: 'app-business-partner-address',
  templateUrl: './business-partner-address.page.html',
  styleUrls: ['./business-partner-address.page.scss'],
})
export class BusinessPartnerAddressPage implements OnInit {
  formaddr: FormGroup;
  BusinessPartnerlist: any;
  selectedBusinessPartner: BusinessPartnerList;
  activitylist: any;
  cartaddress: any;
  ComplianceList:any;
  selectedactivity: string = '' ;
  leastBusinessPartnerlist:any;

  validation_messages = {
    'selectedBusinessPartner': [
      { type: 'required', message: '' }
    ]
  }
  constructor(
    private fb: FormBuilder,
    public loginauth: LoginauthService,
    public neworderservice: NeworderService,
    public commonfun: Commonfun,
    private router: Router,
    private route: ActivatedRoute,

    private businesspartneraddressservice:BusinessPartnerAddressService
    ) { 

      this.formaddr = this.fb.group({
        selectedBusinessPartner: [,Validators.required]
  
      });

      route.params.subscribe(val => {
        
        this.getparam();
      });
    }

  ngOnInit() {
  this.Resetpage();
  //this.commonfun.chkcache('business-partner-address');

  setTimeout( () => {
   
   // this.Bindallactivity();

  },1500);

  }

  getparam() {
    
    this.route.params.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state.reset) {
      this.Resetpage();
    }
  });
    }

  oncustchange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    
    this.getaddressbycustid(event.value.id);
    event.component._searchText="";
  }
  custsearchChange(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    
    
   var custsearchtext = event.text;//.replace(/\s/g,'');
 if(custsearchtext.length % 3==0)
  {
      this.bindcustomerapi(custsearchtext);
    }
  }
  onCancel(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    
    
    event.component._searchText="";

  }
  getaddressbycustid(bp_id:string){
    try {
      

      this.businesspartneraddressservice.getaddressbycustid(bp_id).subscribe(data => {
        this.ComplianceList=data["ComplianceList"]

        this.cartaddress=data["Listofadd"];
             
      },error=>{
        this.commonfun.presentAlert("Message", "Error", error.error.text)
      });
    } catch (error) {
      
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }

  toggleaddress(selectedcartproduct) {
    if (selectedcartproduct.show == false) {
      for (var i = 0; i < this.cartaddress.length; i++) {
        if (this.cartaddress[i].show === "true") {
          this.cartaddress[i].show = "false";
        }
      }
    }
    selectedcartproduct.show = !selectedcartproduct.show;
  }


  onAddAddress() {
    try {

      if ((this.formaddr.controls["selectedBusinessPartner"].value != undefined && this.formaddr.controls["selectedBusinessPartner"].value != null) && this.formaddr.controls["selectedBusinessPartner"].value!="") {
          let navigationExtras: NavigationExtras = {
            state: {
              ComplianceList: this.ComplianceList,
              businessPartner:this.formaddr.controls["selectedBusinessPartner"].value,
              cartaddress:this.cartaddress
            }
          };
          this.router.navigate(['addedit-business-partner-address'],navigationExtras); 
      }
      else {
        this.commonfun.presentAlert("Message", "Alert", "Please select customer.");

      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);


    }

  }






  onSaveAddress(fvalue){

  }
  bindcustomerapi(strsearch: string) {
    try {

      if(strsearch!="")
  {
         
    this.businesspartneraddressservice.getexistcustmerapi(strsearch).subscribe(data=>{  
  var response = data;
      this.BusinessPartnerlist = response;
      
    }
    );
}
else{
 // this.BusinessPartnerlist=null;
 //=============start for top 10================= 
 this.businesspartneraddressservice.getexistcustmerapi("").subscribe(data=>{  
  var response = data;
     // this.BusinessPartnerlist = response;
this.leastBusinessPartnerlist= response;

if(this.leastBusinessPartnerlist.length>this.loginauth.minlistcount)
{
  this.BusinessPartnerlist=null
}
else
{
  this.BusinessPartnerlist = response;
} 

    }
    );
//=============end for top 10================= 



}
  } catch (error) {
    this.commonfun.presentAlert("Message", "Error", error);
   // this.commonfun.loadingDismiss();
  }
  }


  Bindallactivity(){
    try {
     
      this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
       this.activitylist = data;
       if(this.activitylist.length==1){
          setTimeout( () => {
          this.selectedactivity=this.activitylist[0].id;
        },500);
        }

     //  this.loadingDismiss();
      },error=>{
        
       //.. this.loadingDismiss();
       }); 

    } catch (error) {
      //this.loadingDismiss();
    }
    }


  Resetpage(){
    try{
      
    this.BusinessPartnerlist=null;
    this.ComplianceList=null;
    this.BusinessPartnerlist=null;
    this.cartaddress=null;
    this.selectedactivity='';
    this.formaddr.controls['selectedBusinessPartner'].setValue(null);
    this.formaddr.controls['selectedBusinessPartner'].clearValidators();


    if(this.activitylist.length==1){
      this.selectedactivity=this.activitylist[0].id;
     
    }
    else{
      this.selectedactivity='';
    }
   

  }
  catch{}
  }
}
