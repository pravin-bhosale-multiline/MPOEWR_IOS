import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Commonfun } from '../../provider/commonfun';
import { UseVetcoinsService } from  '../use-vetcoins/use-vetcoins.service';


@Component({
  selector: 'app-use-vetcoins-balance',
  templateUrl: './use-vetcoins-balance.page.html',
  styleUrls: ['./use-vetcoins-balance.page.scss'],
})
export class UseVetcoinsBalancePage implements OnInit {
  purchaseproduct:boolean=false;
  vetfees:boolean=true;
  varVetCoinCustDetails:any;
  category:string;
  amount:any;
  firmname:string;
  currentamount:any;
  formvetbal: FormGroup;
  tocust:string;
  fromcust:string;
  otp:string;
  redeemlimit:any;
  vetcoinuse:any;
  orderredeemper:any;
  mobno:any;
  validation_messages = {
    'Amount': [
      { type: 'required', message: ' *Please Enter Amount.' }
    ]
  }


  constructor(public loginauth:LoginauthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public commonfun: Commonfun,
    private usevetcoinsservice:UseVetcoinsService,

    ) { 
      this.formvetbal = this.fb.group({
        Amount: [,Validators.required]
      
      });

    }

  ngOnInit() {
    this.getparam();
  }

  radioGroupChange(event) {
    
   // this.selectedRadioGroup = event.detail;
   if(event.detail.value=="purchaseproduct")
   {
     this.purchaseproduct=true;
     this.vetfees=false
   }
   else
   {
      this.purchaseproduct=false;
      this.vetfees=true
    
   }

   
   
    }
  getparam() {
    try {
  this.route.params.subscribe(params => {
  if (this.router.getCurrentNavigation().extras.state.VetCoinCustDetails) {
   // this.selectedbunch=null;

    this.varVetCoinCustDetails= this.router.getCurrentNavigation().extras.state.VetCoinCustDetails;
  //  
this.fromcust=this.varVetCoinCustDetails.custdetails.fromcust;
this.tocust=this.varVetCoinCustDetails.custdetails.tocust;
    this.category=this.varVetCoinCustDetails.custdetails.category;
    this.amount=this.varVetCoinCustDetails.custdetails.amount;
    this.firmname=this.varVetCoinCustDetails.custdetails.firmname
    this.redeemlimit=this.varVetCoinCustDetails.custdetails.redeemlimit
this.mobno= this.router.getCurrentNavigation().extras.state.mobno
    this.vetcoinuse=this.varVetCoinCustDetails.custdetails.vetcoinuse
    this.orderredeemper=this.varVetCoinCustDetails.custdetails.orderredeemper


   }
  
  });
  
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }



  onUseVetCoins(){
    try {
      var amt=this.formvetbal.controls["Amount"].value;
      this.currentamount=this.amount;
    //  this.currentamount=((this.amount*90)/100);
    //  
    //  
    if(amt<=this.redeemlimit)
    {
      
      this.usevetcoinsservice.getWMobileSendSmsViaIonic(this.mobno).subscribe(data => {
        //
        const resp=data;
this.otp=data["otp"];



      
      let navigationExtras: NavigationExtras = {
        state: {
          Amount: this.formvetbal.controls["Amount"].value,
          Ispurchaseproduct:this.purchaseproduct,
          Isvetfees:this.vetfees,
          Balamount:this.amount,
          fromcust:this.fromcust,
          tocust:this.tocust,
          otp:this.otp,
          orderredeemper:this.orderredeemper,
          vetcoinuse:this.vetcoinuse,
          redeemlimit:this.redeemlimit,
          firmname:this.firmname

        }
      };
     this.router.navigate(['use-vetcoins-redemption'],navigationExtras); 
    });
    }
    else{
      this.commonfun.presentAlert("Message", "Alert", "Amount/VetCoins Must be less than Redemption Limit")

    }
    } catch (error) {
     
      this.commonfun.presentAlert("Message", "Error", error)
    }
   
  }
  Resetpage(){
    this.formvetbal.reset();
  }
}
