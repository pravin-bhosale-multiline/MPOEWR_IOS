import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login-option',
  templateUrl: './login-option.page.html',
  styleUrls: ['./login-option.page.scss'],
})
export class LoginOptionPage implements OnInit {
  mmstReward:boolean=false;
  mmstOrdercaptureapp:boolean=false;
noaccessmsg:string="";
  constructor(private loginauth:LoginauthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.SelectOption();
  }

  SelectOption(){
    try {
      
      this.mmstReward=this.loginauth.defaultprofile[0].mmstReward;
      this.mmstOrdercaptureapp=this.loginauth.defaultprofile[0].mmstOrdercaptureapp;
      if(this.mmstReward!=this.mmstOrdercaptureapp){
        if(this.mmstReward){
          this.onclickLoginTypevet('vet');
        }
        else{
          this.onclickLoginTypewms('wms');
        }
      }
    if(this.mmstReward==false && this.mmstOrdercaptureapp==false){
        this.noaccessmsg="You don't have any access."
        this.loginauth.defaultprofile=null;
      }
      else{
        this.noaccessmsg="";
      }
      
    } catch (error) {
      
    }
  }

  onclickLoginTypewms(type){
this.loginauth.logintype=type;
//if(this.loginauth.defaultprofile[0].mmstOrderusrtype=="CEB")
this.router.navigate(['terms-of-agreement']);
//else
//this.router.navigate(['home']); 

  }

  onclickLoginTypevet(type){
    this.loginauth.logintype=type;
    this.router.navigate(['use-vetcoins']); 
    
      }

}
