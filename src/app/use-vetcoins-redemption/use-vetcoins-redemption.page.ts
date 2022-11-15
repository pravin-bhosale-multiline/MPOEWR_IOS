import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { Commonfun } from '../../provider/commonfun';
import { UseVetcoinsService } from '../use-vetcoins/use-vetcoins.service';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-use-vetcoins-redemption',
  templateUrl: './use-vetcoins-redemption.page.html',
  styleUrls: ['./use-vetcoins-redemption.page.scss'],
})
export class UseVetcoinsRedemptionPage implements OnInit {
  purchaseproduct:string;
  vet:boolean;
  product:boolean
  currentamount:any;
  vetcoinsused:any;
  RedemptionAmount:any;
  resp:any;
  tocust:any;
  fromcust:any;
  description:any;
  bal:any;
  rewardlimit:any;
  rewardtransfer:any;
  redeemlimit:any;
  ordvalue:any;
  apiotp:string;
  userotp:string;
  orderredeemper:any;
  vetcoinuse:any;
  firmname:any;
  constructor(public loginauth:LoginauthService,
    private router: Router,
    private route: ActivatedRoute,
    public commonfun: Commonfun,
    public usevetcoinsservice: UseVetcoinsService,
    private _ngZone: NgZone
    
    ) { }

  ngOnInit() {
   this. getparam();
  }

  getparam() {
    try {
      

  this.route.params.subscribe(params => {
  if (this.router.getCurrentNavigation().extras.state.Amount) {
 

    this.currentamount= this.router.getCurrentNavigation().extras.state.Amount;
    this.product= this.router.getCurrentNavigation().extras.state.Ispurchaseproduct;
    this.vet= this.router.getCurrentNavigation().extras.state.Isvetfees;
    this.vetcoinsused=this.router.getCurrentNavigation().extras.state.Balamount;
    this.tocust=this.router.getCurrentNavigation().extras.state.tocust;
    this.fromcust=this.router.getCurrentNavigation().extras.state.fromcust;
    this.apiotp=this.router.getCurrentNavigation().extras.state.otp;
this.orderredeemper=this.router.getCurrentNavigation().extras.state.orderredeemper;
this.vetcoinuse=this.router.getCurrentNavigation().extras.state.vetcoinuse;
this.redeemlimit=this.router.getCurrentNavigation().extras.state.redeemlimit;
this.firmname=this.router.getCurrentNavigation().extras.state.firmname;
    
    
   // this.currentamount=((amt*90)/100);
    var orderamt=((this.currentamount)*(this.orderredeemper)/100)
   // var orderamt=((this.currentamount)*(this.orderredeemper)/100)


    this.RedemptionAmount=(orderamt<this.vetcoinuse?orderamt:this.vetcoinuse)
   }
  });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }



  Resetpage(){
    this.userotp="";
  }
  onUseConfirm(){

    try {
      
      
      

     // this.tocust="";
     // this.fromcust="";

if(this.userotp==this.apiotp)
{


      this.description=(this.product==true?"POP":"POS");
      this.bal=this.vetcoinsused;
      this.rewardlimit=this.vetcoinuse;
      this.rewardtransfer=this.RedemptionAmount;
     // this.redeemlimit=this.RedemptionAmount;
      this.ordvalue=this.currentamount;


      this.usevetcoinsservice.VetCoinRewardTranstn(this.tocust,this.fromcust,this.description,
        this.bal,this.rewardlimit,this.rewardtransfer,this.redeemlimit,this.ordvalue).subscribe(data => {
        
       // 

  this.resp=data;
  

        if(this.resp.status=="Success"){
         this.commonfun.presentAlert("Message", "Success", this.resp.msg)

         let navigationExtras: NavigationExtras = {
          state: {
            reset:true,
          }
        };
      //  this.usevetcoinspage.Resetpage();
        this.router.navigate(['/use-vetcoins'],navigationExtras); 

      // this._ngZone.run(() => {
      //   this.router.navigate(['/use-vetcoins']);
      // });
        }
        else{
          this.commonfun.presentAlert("Message", "Error", "Error.")
  
        }
       
      },error=>{
        this.commonfun.presentAlert("Message", "Error", error.error.text)
      });
}
else{
  this.commonfun.presentAlert("Message", "Error", "OTP not matched.")

}
    
    
    } catch (error) {
      
      this.commonfun.presentAlert("Message", "Error", error)
    }
  
   


  }
}
