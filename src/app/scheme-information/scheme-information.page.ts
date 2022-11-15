import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import {SchemeInformationService} from './scheme-information.service'
import { LoginauthService } from '../login/loginauth.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Commonfun } from '../../provider/commonfun';
import {Message} from '../../provider/message-helper'

@Component({
  selector: 'app-scheme-information',
  templateUrl: './scheme-information.page.html',
  styleUrls: ['./scheme-information.page.scss'],
})
export class SchemeInformationPage implements OnInit {
  formscheme: FormGroup;
  BusinessPartnerlist: any;
  selectedBusinessPartner: any;
  leastBusinessPartnerlist:any;
  Issinglecust:boolean=false;
  ddlproduct:any;
  leastddlproduct:any;
  selectedddlproduct:any;
  isgetscheme=false;
selectedrow=null;
  schemedata=null;


  validation_messages = {
    'selectedBusinessPartner': [
      { type: 'required', message: '' }
    ],
    'selectedddlproduct': [
      { type: 'required', message: '' }
    ]
  }
  constructor(
    private fb: FormBuilder,
    public loginauth: LoginauthService,
    public schemeInformationService:SchemeInformationService,
    public commonfun:Commonfun,
    public msg:Message,

  ) { 
    this.formscheme = this.fb.group({
      selectedBusinessPartner: [,Validators.required],
      selectedddlproduct:[,Validators.required],

    });
  }

  ngOnInit() {
   

    this.checkcust();




  }
  custsearchChange(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    
    
   var custsearchtext = event.text;//.replace(/\s/g,'');
   
 if(custsearchtext.length>=3)
  {
      this.bindcustomerapi(custsearchtext);
    }
  

  }
  onCancel(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
   // console.log("onCancel");
    event.component._searchText="";

  }
  onClose(event:{
    component: IonicSelectableComponent,
    text: any
  }){
   // console.log("onClose");
  event.component.searchText="";
  }

  onchangecust(){
    try{
   // console.log("oncustchange");
    this.selectedBusinessPartner=this.formscheme.controls["selectedBusinessPartner"].value;
    this.formscheme.controls['selectedddlproduct'].setValue('');
    this.selectedddlproduct=null;
    this.isgetscheme=false;
    this.checkproduct();
    }
    catch(error){
    //  console.log("onchangecust:Error ",error);
    }
  }
  onchangeprod(){
    
    this.selectedddlproduct=this.formscheme.controls["selectedddlproduct"].value;
  
    this.isgetscheme=false;

  }
  
checkproduct(){
  try {

    
    this.schemeInformationService.getproductapi("",this.selectedBusinessPartner.id).subscribe(data=>{
      var response= data;
  
      
      this.leastddlproduct=response;
      //==================
      if(this.leastddlproduct.length==1)
      {
        this.ddlproduct=this.leastddlproduct;
        this.formscheme.controls["selectedddlproduct"].setValue(this.ddlproduct[0]);
       this.onchangeprod();
      }
      else if(this.leastddlproduct.length>this.loginauth.minlistcount)
      {
      
        this.ddlproduct=null;
        this.formscheme.controls["selectedddlproduct"].setValue(null);
      }
      else{
       
        this.ddlproduct=this.leastddlproduct;
        this.formscheme.controls["selectedddlproduct"].setValue(null);
      }
      //==================
},error=>{
  this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
});
  } catch (error) {
   // console.log("checkproduct Error: ",error);
  }
}

  checkcust(){
    try {
      this.commonfun.loadingPresent();
      this.schemeInformationService.getcustmerapi("").subscribe(data => {
        this.commonfun.loadingDismiss();
        var response = data;
        this.leastBusinessPartnerlist = response;
        if(this.leastBusinessPartnerlist.length==1)
        {
          this.BusinessPartnerlist=this.leastBusinessPartnerlist;
          this.formscheme.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
          this.onchangecust();
        }
        else if(this.leastBusinessPartnerlist.length>this.loginauth.minlistcount)
        {
          this.BusinessPartnerlist=null;
          this.formscheme.controls["selectedBusinessPartner"].setValue(null);
        }
        else{
          this.BusinessPartnerlist=this.leastBusinessPartnerlist;
          this.formscheme.controls["selectedBusinessPartner"].setValue(null);
        }
        
      }); 
     
    } catch (error) {
      this.commonfun.loadingDismiss();

     // console.log("Error:chckcust",error);
    }
  }
  


  bindcustomerapi(strsearch: string) {
    try {
      if(strsearch!="")
  {
  this.schemeInformationService.getcustmerapi(strsearch).subscribe(data=>{  
  var response = data;
  this.BusinessPartnerlist = response;
 });
}
else{
 //=============start for top 10================= 
 if(this.leastBusinessPartnerlist.length==1)
 {
   this.BusinessPartnerlist=this.leastBusinessPartnerlist;
   this.formscheme.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
   this.onchangecust();
 }
 else if(this.leastBusinessPartnerlist.length>this.loginauth.minlistcount)
 {
   this.BusinessPartnerlist=null;
   this.formscheme.controls["selectedBusinessPartner"].setValue(null);
 }
 else{
   this.BusinessPartnerlist=this.leastBusinessPartnerlist;
   this.formscheme.controls["selectedBusinessPartner"].setValue(null);
 }

//=============end for top 10================= 
}

  } catch (error) {
    //this.commonfun.presentAlert("Message", "Error", error);
 // console.log("Error : bindcustomerapi", error);

  }
  }
//#region productsearchChange
productsearchChange(event: {
  component: IonicSelectableComponent,
  text: any
}) {
  
var custsearchtext = event.text;

if(this.selectedBusinessPartner!=null)
{
if(custsearchtext.length % 3==0)
{
  
  this.bindproduct(custsearchtext);
}
}
else{
 this.commonfun.presentAlert("Message","Alert","Please select customer.")
}
}
//#endregion
//#region bindproduct(strsearch:string)  
bindproduct(strsearch:string){
  try {
    console.log("strsearch",strsearch);
    console.log("this.selectedBusinessPartner.id",this.selectedBusinessPartner.id);
    
    if(strsearch!="")
    {
      this.schemeInformationService.getproductapi(strsearch,this.selectedBusinessPartner.id).subscribe(data=>{
        var response= data;
        this.ddlproduct=response;
  },error=>{
    this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
  });
    }
    else if(this.selectedBusinessPartner && this.leastddlproduct && this.leastddlproduct!=null){
      //==================
      if(this.leastddlproduct.length==1)
      {
        this.ddlproduct=this.leastddlproduct;
        this.formscheme.controls["selectedddlproduct"].setValue(this.ddlproduct[0]);
        this.onchangeprod();
      }
      else if(this.leastddlproduct.length>this.loginauth.minlistcount)
      {
        this.ddlproduct=null;
        this.formscheme.controls["selectedddlproduct"].setValue(null);
        this.selectedddlproduct=null;
      }
      else{
        this.ddlproduct=this.leastddlproduct;
        this.formscheme.controls["selectedddlproduct"].setValue(null);
        this.selectedddlproduct=null;

      }
      //==================
    }
    else{
      this.ddlproduct=null;
    }
  
  
  } catch (error) {
   // this.commonfun.loadingDismiss();
   // this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
//  console.log("bindproduct : ERROR: ",error);
  }
  }
  //#endregion bindproduct(strsearch:string)

getscheme(value){
  try {
    this.schemedata=null;
    

    this.schemeInformationService.getCustProdWiseScheme(this.selectedBusinessPartner.id,this.selectedddlproduct.id).subscribe(data=>{
        
      //const response= data['response'];
        var response= data;
        console.log("Product Schme DATA",data);
        this.schemedata=data;
        this.isgetscheme=true;
    },error=>{
      //this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
    });
      


 
  } catch (error) {
    
  }
}
hideshowdetail(i){
  if(this.selectedrow==i){
    this.selectedrow=-1;
  }
  else
{
  this.selectedrow=i;
}
}

  Resetpage(){
this.formscheme.reset();
this.ddlproduct=null;
this.BusinessPartnerlist=null;
//this.leastBusinessPartnerlist=null;
this.selectedddlproduct=null;

this.schemedata=null;
this.isgetscheme=false;
if(this.leastBusinessPartnerlist.length==1)
{

  this.BusinessPartnerlist=this.leastBusinessPartnerlist;
  this.formscheme.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
 // this.onCustDropDownChange(this.BusinessPartnerlist[0]);
}
else{
  this.selectedBusinessPartner=null;
}



  }

}
