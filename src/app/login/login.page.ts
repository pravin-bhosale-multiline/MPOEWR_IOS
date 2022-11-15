import { Component, OnInit } from '@angular/core';
import { LoginauthService, Profilefinalresponse } from './loginauth.service';
import { NeworderService } from '../neworder/neworder.service';
import { Message } from '../../provider/message-helper'
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Storage } from '@ionic/storage';
import * as CryptoJS from 'crypto-js';
import { LoadingController, AlertController, Platform, ModalController } from '@ionic/angular';
import { Constants } from '../common/Constants';
import { GenericHttpClientService } from '../common/generic-http-client.service';
import { Market } from '@ionic-native/market/ngx';

export interface Loginresponse {
  showMessage: boolean;
  messageType: string;
  messageTitle: string;
  messageText: string;
  error: ErrorResponse;
}
export interface ErrorResponse {
  message: string;
  messageType: string;
  title: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  readonly TAG = "LoginPage";
  backgroundimg = './assets/ParekhImage.png';
  btnLogin = "Login"; plcpassword = "Password"; showForgotPassword = false; changePassword = false; showLoginButton = true; showGetOTPButton = false; showChangePassword = false;
  showFingerprintAuth = false; showCustomPassword = false; biometricstatus; showFingerprintButton = false; authText; bio_Codes; pinCodes; showBiometericControl = false;
  showPinCodeControl = false; logBiometricstatus; securityPinSaved; logInRequired; showFaceIdSection = false;

  username; password: string; txterror: string; txthint: string; passcode: any; pageStatus: any; codeone: any; codetwo: any; codethree: any; codefour: any;
  int: any; isnewPinconfirm = false; message: any; finalPin: any; fingerPin: any; loginrequired = false; fingerprintloginallowed = false; newuser = true;
  newPin: any; resetpin = true; secretKey = 'openbravoprism2'; loading; ipport: string; isipportvisible = true; isforgetpass = false; mobileno: string;
  isclickonotp = false; otp: string; newpass: string; response: Loginresponse;

  mmstOrdercaptureapp: any;
  constructor(private loginservc: LoginauthService,
    public msg: Message, private platform: Platform,
    private router: Router, private neworderservc: NeworderService,
    private fingerprint: FingerprintAIO, public storage: Storage,
    public loadingController: LoadingController,
    private alertController: AlertController,
    private genericHTTP: GenericHttpClientService,
    private market: Market, public modalController: ModalController

  ) {
  }

  async ngOnInit() {



    this.loginservc.commonurl = Constants.DOMAIN_URL + '/openbravo/';

    this.bio_Codes = await this.storage.get('Biometric_Device_Codes');
    this.pinCodes = await this.storage.get('PIN_Status');
    this.logBiometricstatus = await this.storage.get('Biometric_Status');




    if (this.bio_Codes == '200') {
      this.authText = "Enable Fingerprint";
      this.showFingerprintAuth = true;
      this.showCustomPassword = false;

    } else if (this.pinCodes == '200') {
      this.authText = "Use Device Password,Pattern or PIN";
      this.showFingerprintAuth = true;
      this.showCustomPassword = false;

    }
    if (this.bio_Codes == '-106' && this.pinCodes != '200') {
      this.authText = "Enable Fingerprint";
      this.showFingerprintAuth = false;
      this.showCustomPassword = true;

    }
    if (this.bio_Codes == '-104' && this.pinCodes != '200') {
      this.authText = "Use Device Password,Pattern or PIN";
      this.showFingerprintAuth = false;
      this.showCustomPassword = true;

    }
    if (this.bio_Codes == '200' && this.pinCodes == '200') {
      this.authText = "Enable Fingerprint";
      this.showFingerprintAuth = true;
      this.showCustomPassword = false;

    }

    if (await this.storage.get('Biometric_Type') == 'face' && (await this.storage.get('user') != undefined || await this.storage.get('user') != null) && await this.storage.get('changePasswordFromSettingPage') == false) {
      this.showFingerprintAuth = false;
      this.showFaceIdSection = true;
    }

    if (this.showFingerprintAuth && await this.storage.get('changePasswordFromSettingPage') == false) {

      this.onfingerPrintshow();
    } else if (await this.storage.get('changePasswordFromSettingPage') == false) {
      if (this.bio_Codes == '-104' && this.pinCodes != '200') {
        this.showCustomPassword = true;

      }

    }

    this.passcode = '';
    this.message = true;
    this.int = 0;
    this.fingerPin = false;
    this.isnewPinconfirm = false;
    this.finalPin = '';
    this.checkUserProfile();
    if (await this.storage.get('changePasswordFromSettingPage')) {
      //  this.storage.set('changePasswordFromSettingPage',false);

      this.loginrequired = true;
      this.newuser = true;
      this.onClickForgetPass();
    }


  }
  async ionViewWillEnter() {

    this.storage.set('isNewRegistration', false);

    if (this.msg.isplatformweb == false) {
      this.platform.ready().then(() => {
        try {
          let url = Constants.DOMAIN_URL + "/openbravo/ws/in.mbs.webservice.app_version?version_number=" + Constants.VERSION_NO;
          // console.log("URL",url);
          this.genericHTTP.get(url,true,true).
            subscribe(versionResponse => {
              //  console.log(this.TAG, "version check response", versionResponse);
              if (!!versionResponse && versionResponse.update_required && (versionResponse.priority == "Major" || versionResponse.priority == "Minor")) {
                if (this.platform.is('ios')) {
                  this.presentAlertConfirmiOS(versionResponse);
                } else if (this.platform.is('android')) {
                  this.presentAlertConfirm(versionResponse);
                }
              } else if (!!versionResponse && versionResponse.update_required && versionResponse.priority == "ServerIsSmaller") {
                if (this.platform.is('ios')) {
                  this.presentServerAlertConfirmiOS();
                } else if (this.platform.is('android')) {
                  console.log(versionResponse);
                  
                  this.presentServerAlertConfirm();
                }
              }
            })
        } catch (error) {
          // console.log(error);
        }
      });
    }
    this.pageStatus = 'Enter Your Pin to Login';
    this.checkUserProfile();
    if (await this.storage.get('Biometric_Type') == 'face' && (await this.storage.get('user') != undefined || await this.storage.get('user') != null) && await this.storage.get('changePasswordFromSettingPage') == false) {
      this.showFingerprintAuth = false;
      this.showFaceIdSection = true;
    }

    if (this.showFingerprintAuth && await this.storage.get('changePasswordFromSettingPage') == false) {

      this.onfingerPrintshow();
    } else if (await this.storage.get('changePasswordFromSettingPage') == false) {

      if (this.bio_Codes == '-104' && this.pinCodes != '200') {

        this.showCustomPassword = true;

      }
    }

    if (await this.storage.get('changePasswordFromSettingPage')) {
      //  this.storage.set('changePasswordFromSettingPage',false);

      this.loginrequired = true;
      this.newuser = true;
      this.onClickForgetPass();
    }
  }

  async checkDeviceAuth() {

  }

  async checkUserProfile() {

    this.securityPinSaved = await this.storage.get('Securitypin');
    this.logInRequired = await this.storage.get('loginRequired');
    let changeFromSetting = await this.storage.get('changePasswordFromSettingPage');
    if (this.msg.isplatformweb == false) {
      if (this.securityPinSaved && changeFromSetting == false) {

        this.loginrequired = false;
        this.newuser = false;
        this.message = false;
        this.pageStatus = 'Enter Your Pin to Login';
      } else if (this.logBiometricstatus && await this.storage.get('changePasswordFromSettingPage') == false) {

        this.loginrequired = false;
        this.newuser = false;
      } else if ((this.logInRequired != null && this.logInRequired != undefined) && this.logInRequired != true && await this.storage.get('changePasswordFromSettingPage') == false) {

        this.loginrequired = false;
        this.newuser = false;
        if (!this.securityPinSaved) {
          this.message = false;
          this.newuser = true;

          this.pageStatus = 'Please Setup Your Pin!';
        }
      } else {

        this.loginrequired = true;
        this.newuser = true;
      }
    }
    else {

      this.loginrequired = true;
      this.newuser = false;

    }
  }

  async biometricStatusChange(event) {


    if (event.detail.checked && (this.bio_Codes == '-106' || this.bio_Codes == '-104') && this.pinCodes != '200') {

      const alert = await this.alertController.create({
        header: 'Login',
        subHeader: 'Security',
        message: 'Your device is not protected by password or biometric',
        buttons: ['OK'],
      });

      await alert.present();
      let result = await alert.onDidDismiss();
      this.biometricstatus = false;
      this.logBiometricstatus = false;


    } else {
      this.storage.set('Biometric_Status', event.detail.checked);
      this.logBiometricstatus = event.detail.checked;
      this.showCustomPassword = false;


    }

  }


  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }
  decrypt(textToDecrypt: string) {
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
  onClickForgetPass() {

    this.btnLogin = "Get OTP";
    this.isforgetpass = true;
    this.plcpassword = "Enter New Password"
    this.isclickonotp = true;

    this.showGetOTPButton = true;
    this.showLoginButton = false;

  }

  onClickNewRegistration() {
    this.loginservc.isloginactive=false;
    try {
      let navigationExtras: NavigationExtras = {
        state: {
          isNewRegistration: true
        }
      };
      this.storage.set('isNewRegistration', true);
      this.router.navigate(['newcustomer'], navigationExtras);
    } catch (error) {

    }
  }

  onClickGetOTP() {

    this.isclickonotp = true;
    this.showGetOTPButton = false;
    this.showChangePassword = true;




    if (this.username) {
      this.isforgetpass = true;
      this.loadingController.create({
        duration: 5000,
        spinner: 'circles',
        message: 'Please Wait...'
      }).then((res) => {
        res.present();
      });


      this.loginservc.getmobileno(this.username).subscribe((data) => {
        this.response = data['response'];
        if (this.response.messageType === 'success') {
          this.mobileno = this.response.messageText;
          this.txterror = 'OTP Will Send To ' + this.response.messageText;

          this.loadingController.dismiss();

          this.loadingController.create({
            duration: 5000,
            spinner: 'circles',
            message: 'Please Wait...'
          }).then((res) => {
            res.present();
          });


          this.loginservc.forgetuser(this.username).subscribe((data) => {

            this.response = data['response'];

            if (this.response.messageType !== undefined) {
              if (this.response.messageType === 'success') {
                this.txterror = this.response.messageText;
                this.isclickonotp = true;
                this.loadingController.dismiss();
              }
            } else {
              this.txterror = this.response.error.message;
            }
          }, error => {
            this.txterror = error.message;
          });


        }
      }, error => {
        this.txterror = error.message;
      });
    } else {
      this.txterror = 'Please Enter User Name.';
    }


  }
  onChangePass() {
    this.loadingController.create({
      duration: 5000,
      spinner: 'circles',
      message: 'Verifying OTP...'
    }).then((res) => {
      res.present();
    });

    this.loginservc.changepassword(this.username, this.newpass, this.otp).subscribe((data) => {
      this.response = data['response'];
      //  console.log(this.TAG,"changepassword",this.response);
      if (this.response.messageType !== undefined) {
        if (this.response.messageType === 'success') {
          this.txterror = this.response.messageText;
          // after changing pass need to compulsory setup new pin and login
          this.storage.set('changePasswordFromSettingPage', false);
          this.loginrequired = true;
          this.showLoginButton = true;
          this.showChangePassword = false;
          this.changePassword = false;
          this.newuser = true;
          this.isforgetpass = false;
          this.fingerprintloginallowed = false;
          //  
        }
      } else {
        this.txterror = this.response.error.message;
      }
      this.loadingController.dismiss();
    }, error => {
      this.txterror = error.message;
    });
  }

  loginSubmit() {
   

    // console.log(this.storage);
    
    
    if (!this.isforgetpass) {

      this.login();
    } else {
      this.showForgotPassword = true;
      this.changePassword = true;
    }
  }

  checkApprovalScreenAccess(url) {
    this.loginservc.checkApprovalScreenAccess().subscribe((appData) => {
     // console.log("Pravin Approval Data", appData);
      if (!!appData) {
        //  this.loginservc.approvalScreen = true;
        this.router.navigateByUrl(url);
      }
      else {
        this.loginservc.approvalScreen = false;
        // this.router.navigateByUrl(url);
      }
    });
  }

  login() {
    this.loadingController.create({
      spinner: 'circles',
      message: 'Please Wait...'
    }).then((res) => {
      res.present();
    });
    this.txterror = '';
    this.storage.set('ipport', this.loginservc.commonurl);

    this.storage.remove('user');
    this.storage.remove('pass');
    this.loginservc.login(this.username, this.password).subscribe((resp: Loginresponse) => {
     // console.log("login.html", resp); 
      if (resp.showMessage) {
        this.loadingController.dismiss();
        this.txterror = resp.messageText;
        this.txthint = 'Hint: ' + resp.messageTitle;
        this.loginrequired = true;
        this.newuser = true;
      } else {
        this.txterror = "Success";
        this.loginservc.isloginactive=true;
        this.loginservc.getdefaultprofile().subscribe((data: Profilefinalresponse) => {
          this.loginservc.defaultprofile = [data.response.data[0]];
          this.loginservc.userid = this.loginservc.defaultprofile[0].id;
          this.loginservc.insertuserlog(this.loginservc.userid).subscribe((data1) => {
              
            if (this.newuser && (!this.logBiometricstatus || this.logBiometricstatus == null || this.logBiometricstatus == undefined )) {
             
              if(!this.msg.isplatformweb){
                this.loginrequired = false;
                this.message = false;
                this.showCustomPassword = true;
                this.pageStatus = 'Please Setup Your Pin!';
                this.loadingController.dismiss();
              } else {
               
                if (!!this.username && this.password) {
                  this.storage.set('user', this.encrypt(this.username));
                  this.storage.set('pass', this.encrypt(this.password));
              }
              this.storage.set('loginRequired', false);
              this.mmstOrdercaptureapp = this.loginservc.defaultprofile[0].mmstOrdercaptureapp;
              if (!this.msg.isplatformweb) {
                if (this.loginservc.defaultprofile[0].mmstOrdercaptureapp == true && this.loginservc.defaultprofile[0].mmstReward == false) {
                  this.loginrequired = false;
                  this.message = false;
                  this.loadingController.dismiss();
                  this.loginservc.logintype = "wms";
                  this.router.navigate(['terms-of-agreement']);
                }
                else if (this.loginservc.defaultprofile[0].mmstOrdercaptureapp == false && this.loginservc.defaultprofile[0].mmstReward == true) {
                  this.loadingController.dismiss();
                  this.loginrequired = false;
                  this.message = false;
                  this.loginservc.logintype = "vet";
                  this.router.navigateByUrl('/use-vetcoins');
                }
                else {
                  this.loadingController.dismiss();
                  this.loginrequired = false;
                  this.message = false;
                  this.router.navigateByUrl('/login-option');
                }
              } else {
                setTimeout(() => {
                  if (this.mmstOrdercaptureapp == true) {
                    this.loginservc.logintype = 'wms';
                    this.loginrequired = false;
                    this.message = false;
                    this.router.navigate(['terms-of-agreement']);
                  }
                  else {
                    this.loginservc.defaultprofile[0].mmstReward = false;
                    this.loginrequired = false;
                    this.message = false;
                    this.router.navigateByUrl('/login-option');
                  }
                }, 1500);
                this.loadingController.dismiss();
              }
              }


              
            } else {
                      if (!!this.username && this.password) {
                          this.storage.set('user', this.encrypt(this.username));
                          this.storage.set('pass', this.encrypt(this.password));
                      }
                      this.storage.set('loginRequired', false);
                      this.mmstOrdercaptureapp = this.loginservc.defaultprofile[0].mmstOrdercaptureapp;
                      if (!this.msg.isplatformweb) {
                        if (this.loginservc.defaultprofile[0].mmstOrdercaptureapp == true && this.loginservc.defaultprofile[0].mmstReward == false) {
                          this.loadingController.dismiss();
                          this.loginservc.logintype = "wms";
                          this.router.navigate(['terms-of-agreement']);
                        }
                        else if (this.loginservc.defaultprofile[0].mmstOrdercaptureapp == false && this.loginservc.defaultprofile[0].mmstReward == true) {
                          this.loadingController.dismiss();
                          this.loginservc.logintype = "vet";
                          this.router.navigateByUrl('/use-vetcoins');
                        }
                        else {
                          this.loadingController.dismiss();
                          this.router.navigateByUrl('/login-option');
                        }
                      } else {
                        setTimeout(() => {
                          if (this.mmstOrdercaptureapp == true) {
                            this.loginservc.logintype = 'wms';
                            this.router.navigate(['terms-of-agreement']);
                          }
                          else {
                            this.loginservc.defaultprofile[0].mmstReward = false;
                            this.router.navigateByUrl('/login-option');
                          }
                        }, 1500);
                        this.loadingController.dismiss();
                      }
                   }
         });
        });
        this.txterror = '';
        this.txthint = 'Success';

      }
      if (this.resetPin) {
        this.passcode = '';
        this.resetpin = false;
        this.codeone = null;
        this.codetwo = null;
        this.codethree = null;
        this.codefour = null;
        this.int = 0;
        this.passcode = '';
      }
      // this.loadingController.dismiss();
    }, error => {
      try {
        // this.txterror = error.message;
        if (error.message.includes("password=", 0)) {
          var x = error.message.split("password=")
          var y = x[1].split(":")
          this.txterror = x[0] + "password=******: " + y[1];
        }
        else {
          this.txterror = error.message;
        }


      } catch (error) {
        // console.log(error)

      }
    });
  }
  async onfingerPrintshow() {

    this.biometricstatus = await this.storage.get('Biometric_Status');


    if (this.biometricstatus && !!this.biometricstatus) {

      this.fingerprint.show({
        title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
        subtitle: 'Coolest Plugin ever', // (Android Only) | optional | Default: null
        description: 'Please authenticate',
        fallbackButtonTitle: 'Use Backup', // optional | Default: null
        disableBackup: false
      })
        .then((result: any) => {

          this.storage.get('user').then((user) => {
            this.username = this.decrypt(user);
            //  
          });
          this.storage.get('pass').then((pass) => {
            this.password = this.decrypt(pass);
            // this.isnewPinconfirm = true;
            this.newuser = false;
            this.storage.set('loginRequired', false);
            this.login();
            //
          });

        })
        .catch((error: any) => {



          if (this.biometricstatus && error.code == "-108") {
            // this.showCustomPassword = false;
            // this.loginrequired  = true;
            // this.storage.set('loginRequired', true);

            navigator["app"].exitApp();


          }

        });
    } else {
      this.showCustomPassword = true;
    }
  }


  add(value) {
    //  
    this.storage.get('Securitypin').then((Securitypin) => {
      if (Securitypin) {
        this.finalPin = this.decrypt(Securitypin);
      }
      //  
      if (this.passcode.length < 4) {
        this.passcode = this.passcode + value;
        if (this.int === 0) {
          this.codeone = value;
          this.int++;
        } else if (this.int === 1) {
          this.codetwo = value;
          this.int++;
        } else if (this.int === 2) {
          this.codethree = value;
          this.int++;
        } else if (this.int === 3) {
          this.codefour = value;
          if (this.isnewPinconfirm && this.newuser) {
            this.newPin = this.codeone + this.codetwo + this.codethree + this.codefour;
            if (this.newPin === this.passcode) {
              this.message = false;
              this.pageStatus = 'Pin Confirmed!';
              this.storage.set('Securitypin', this.encrypt(this.passcode));

              if (!!this.loginservc.user && this.loginservc.pass) {
                this.storage.set('user', this.encrypt(this.loginservc.user));
                this.storage.set('pass', this.encrypt(this.loginservc.pass));
                this.username = this.loginservc.user;
                this.password = this.loginservc.pass;
              }

              this.isnewPinconfirm = true;
              this.newuser = false;
              // 
              this.storage.set('loginRequired', false);
              // login
              this.login();
              return;
            }
          }
          if (this.newuser) {
            this.passcode = this.codeone + this.codetwo + this.codethree + this.codefour;
            this.message = false;
            this.pageStatus = 'Please Confirm Pin.';
            this.codeone = null;
            this.codetwo = null;
            this.codethree = null;
            this.codefour = null;
            this.int = 0;
            this.passcode = '';
            this.isnewPinconfirm = true;
          } else {
            if (this.finalPin === this.codeone + this.codetwo + this.codethree + this.codefour) {
              // 
              this.message = false;
              this.pageStatus = 'Password Matched.';
              this.storage.get('user').then((user) => {
                this.username = this.decrypt(user);
                // 
              });
              this.storage.get('pass').then((pass) => {
                this.password = this.decrypt(pass);
                this.message = false;
                this.pageStatus = '';
                this.storage.set('loginRequired', false);
                this.login();
                //  
              });
              // login
            } else {
              this.message = false;
              this.resetpin = true;
              this.pageStatus = 'Please Enter Correct Pin.';

              if (this.passcode.length > 0) {
                this.codeone = null;
                this.codetwo = null;
                this.codethree = null;
                this.codefour = null;
                this.int = 0;
                this.passcode = '';
                // this.message = true;
              }

            }
          }
        }
      }
    });
  }
  resetPin() {
    this.loginrequired = true;
    this.newuser = true;
    this.password = '';
  }
  delete() {
    if (this.passcode.length > 0) {
      this.codeone = null;
      this.codetwo = null;
      this.codethree = null;
      this.codefour = null;
      this.int = 0;
      this.passcode = '';
      this.message = true;
    }
  }
  async presentAlertConfirm(versionResponse) {

    let ifData;
    let backDropDismiss = true;

    if (!!versionResponse && versionResponse.priority == "Major") {
      backDropDismiss = false;
      ifData = {
        text: 'Exit App',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah');
          navigator["app"].exitApp();

        }
      };
    } else {
      backDropDismiss = true;
      ifData = {
        text: 'NO THANKS',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          // console.log('Confirm Cancel: blah');


        }
      };
    }

    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',

      header: 'New Version Update available',
      message: '<h6>Please click Update to download latest Version.</h6>',
      buttons: [ifData
        , {
          text: 'UPDATE',
          handler: () => {
            //  console.log('Confirm Okay');
            navigator["app"].exitApp();
            this.market.open('com.multilinetech.OBPrism2');
          }
        }
      ], backdropDismiss: backDropDismiss
    });

    await alert.present();
  }
  async presentAlertConfirmiOS(versionResponse) {
    let ifData;
    let backDropDismiss = true;

    if (!!versionResponse && versionResponse.priority == "Major") {
      backDropDismiss = false;
      ifData = {
        text: 'Close The App',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah');


        }
      };
    } else {
      backDropDismiss = true;
      ifData = {
        text: 'NO THANKS',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah');


        }
      };
    }

    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',

      header: 'New Version Update available',
      message: '<h6>Please click Update to download latest Version.</h6>',
      buttons: [ifData
        , {
          text: 'UPDATE',
          handler: () => {
            //console.log('Confirm Okay');
            navigator["app"].exitApp();
            this.market.open('com.multilinetech.OBPrism2');
          }
        }
      ], backdropDismiss: backDropDismiss
    });

    await alert.present();
  }



  async presentServerAlertConfirm() {
    try {
      const alert = await this.alertController.create({
        // cssClass: 'my-custom-class',

        header: 'This version is not supported by server',
        message: '<h6>Please contact your system administrator.</h6>',
        buttons: [{
          text: 'Exit App',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
            navigator["app"].exitApp();

          }
        }
          ,
        ], backdropDismiss: false
      });

      await alert.present();
    } catch (error) {
      //console.log(error);
    }

  }
  async presentServerAlertConfirmiOS() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',

      header: 'This version is not supported by server',
      message: '<h6>Please contact your system administrator.</h6>',
      buttons: [{
        text: 'Close The APP',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          //console.log('Confirm Cancel: blah');


        }
      }
        ,
      ], backdropDismiss: false
    });

    await alert.present();
  } catch(error) {
    //console.log(error);
  }


}