import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { Validator } from '../../provider/validator-helper';
import { UseVetcoinsService } from './use-vetcoins.service';
import { Commonfun } from '../../provider/commonfun';


@Component({
  selector: 'app-use-vetcoins',
  templateUrl: './use-vetcoins.page.html',
  styleUrls: ['./use-vetcoins.page.scss'],
})
export class UseVetcoinsPage implements OnInit {
  formvet: FormGroup;
  referalcode:string;
  validation_messages = {
    'mobileno': [
      { type: 'required', message: ' *Please Enter Mobile No.' },
    ]
  }
 
  constructor(public loginauth:LoginauthService,
              private socialSharing: SocialSharing,
              private router: Router, 
              private route: ActivatedRoute,
    private fb: FormBuilder,
    private val: Validator,
    private usevetcoinsservice:UseVetcoinsService,
    public commonfun: Commonfun,
              ) {

try {

                this.formvet = this.fb.group({
                  mobileno: [,Validators.required,val.numberValid],
                
                });
               

               route.params.subscribe(val => {
                
                this.getparam();
                //this.formvet.controls["mobileno"].setValue("");
               
                this.formvet.reset();
               
               // this.formvet.controls["mobileno"].untouched=t

              });

            } catch (error) {
  
            }
            }

  ngOnInit() {
    

    this.Resetpage();
   
    this.getreferelcode();
  }


  getparam() {
    
  this.route.params.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
    if (this.router.getCurrentNavigation().extras.state.reset) {
    this.Resetpage();
  }}
});
  }

shareto(){
  
    // this is the complete list of currently supported params you can pass to the plugin (all optional)
var options = {
  message: 'Please use my referral code '+this.referalcode+' to register on Pawtect (https://www.pawtectindia.com/pawtect/) and buy Pawtect plan (medical cover) for your pet. Contact : +917506562266 /+91 20 26633615   Email: customerservice@pawtectindia.com for any questions or help with registration. Thanks '+this.loginauth.defaultprofile[0].name, // not supported on some apps (Facebook, Instagram)
  subject: 'the subject', // fi. for email
 // files: ['', ''], // an array of filenames either locally or remotely
  url: 'https://www.website.com/foo/#bar?a=b',
 // chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
 // appPackageName: 'com.apple.social.facebook', // Android only, you can provide id of the App you want to share with
 // iPadCoordinates: '0,0,0,0' //IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
};
this.socialSharing.shareWithOptions(options);
}


getreferelcode(){
  try {
     this.usevetcoinsservice.getWMobileVetCoinCustDetailsapi("1","N").subscribe(data => {
       
 
       if(data!=null){
         if(data["referalcode"])
         {
         
         this.referalcode=data["referalcode"].referalcode;
         }
         else{
          this.commonfun.presentAlert("Message", "Error", "Mobile No. is not valid.")
  
        }
       }
       else{
         this.commonfun.presentAlert("Message", "Error", "Mobile No. is not valid.")
 
       }
      
     },error=>{
       this.commonfun.presentAlert("Message", "Error", error.error.text)
     });
   } catch (error) {
     
     this.commonfun.presentAlert("Message", "Error", error)
   }
 
  
 }





onCheckVetCoins(){
 try {
if(this.loginauth.user!=this.formvet.controls["mobileno"].value)
{
    this.usevetcoinsservice.getWMobileVetCoinCustDetailsapi(this.formvet.controls["mobileno"].value,"N").subscribe(data => {
      

      if(data!=null){
        let navigationExtras: NavigationExtras = {
          state: {
            VetCoinCustDetails: data,
            mobno:this.formvet.controls["mobileno"].value
          }
        };
       this.router.navigate(['use-vetcoins-balance'],navigationExtras); 
      }
      else{
        this.commonfun.presentAlert("Message", "Error", "Mobile No. is not valid.")

      }
     
    },error=>{
      

      this.commonfun.presentAlert("Message", "Error!", error.error.text)
    });
  }
  else
  {
    this.commonfun.presentAlert("Message", "Error", "You can't use your own Mobile No.")
  }
  } catch (error) {
    
    this.commonfun.presentAlert("Message", "Error", error)
  }

 

 
}
  Resetpage(){
    this.formvet.controls["mobileno"].setValue("");
    this.router.navigate(['use-vetcoins']); 

  }
}
