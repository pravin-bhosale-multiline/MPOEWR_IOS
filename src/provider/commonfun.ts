import { Injectable } from '@angular/core';
import { LoadingController, AlertController, Events } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoginauthService, Profilefinalresponse } from '../app/login/loginauth.service';
import { LoginPage } from '../app/login/login.page';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Market } from '@ionic-native/market/ngx';
import { Message } from './message-helper';
import { GenericHttpClientService } from 'src/app/common/generic-http-client.service';


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

@Injectable()
export class Commonfun {
  isLoading = false;
  img64: any;
  anyimageData: any;
  messageToShow ='Please wait ...';
  response: Loginresponse;
  varusername: string;
  varpassword: string;
  constructor(private alertCtrl: AlertController,
    private camera: Camera,
    private loadingController: LoadingController,
    public loginpage: LoginPage,
    public loginauth: LoginauthService,
    private genericHTTP: GenericHttpClientService,
    private router: Router,
    public storage: Storage,
    private market: Market,
    public msg: Message,
    public events: Events,

  ) { }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      // cssClass: 'my-custom-class',
      header: 'New version available',
      message: '<h6>Please, update app to new verion to continue use.</h6>',
      buttons: [
        {
          text: 'NO THANKS',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
            navigator["app"].exitApp();

          }
        }, {
          text: 'UPDATE',
          handler: () => {
            //console.log('Confirm Okay');
            this.market.open('com.multilinetech.OBPrism2');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertConfirmcom(header: any, message: any, cancelText: any, okText: any): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        header: header,
        message: message,
        buttons: [
          {
            text: cancelText,
            role: 'cancel',
            cssClass: 'secondary',
            handler: (cancel) => {
              resolve('cancel');
            }
          }, {
            text: okText,
            handler: (ok) => {
              resolve('ok');
            }
          }
        ]
      });
      alert.present();
    });
  }
  async loadingPresent(message?,timeout?) {
    this.isLoading = true;
    if(!!message)
    this.messageToShow = message;
    else
    this.messageToShow = 'Please wait ...';
    return await this.loadingController.create({
      message: this.messageToShow,
      spinner: 'circles',

    }).then(a => {
      a.present().then(() => {
        //console.log('loading presented');
        //console.log("this.isLoadingP", this.isLoading);
        if(!!timeout)
        setTimeout(() => {
          a.dismiss();
        }, timeout);
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort laoding'));
        }
      });
    });
  }
  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(

    )
  }
  //Alert message
  async presentAlert(Header: string, SubHeader: string, Message: string) {
    const alert = await this.alertCtrl.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: ['OK']
    });

    await alert.present();
  }
  async ImageViewr(img: any) {
    //console.log("comimg");
    const alert = await this.alertCtrl.create({
      message: '<div>' +
        '<img class="viewImagecss" src="data:image/jpeg;base64,' + img + '">' +
        '</div>',
      buttons: ['OK'],
    });
    await alert.present();
  }
  //Capture Image from Camera
  takePicture() {
    try {

      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        targetWidth: 1500,
        targetHeight: 1500
      };
      this.camera.getPicture(options).then((imageData) => {
        this.img64 = imageData;
        return this.img64;
      }, (err) => {
        this.presentAlert("Message", "Error", err);

      });
    } catch (error) {
      this.presentAlert("Message", "Error", error);

    }
  }
  //Select Image from library
  getimage() {
    try {
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 1500,
        targetHeight: 1500
      };
      this.camera.getPicture(options).then((imageData) => {
        this.img64 = imageData;
      }, (err) => {
        this.presentAlert("Message", "Error", err);

      });
    } catch (error) {
      this.presentAlert("Message", "Error", error);
    }
  }
  LoginonClick(username: string, password: string, url: string) {

    this.loginauth.login(username, password).subscribe((resp: Loginresponse) => {
      if (resp.showMessage) {
        this.loginpage.txterror = resp.messageText;
        this.loginpage.txthint = 'Hint: ' + resp.messageTitle;
        this.loginpage.loginrequired = true;
        this.loginpage.newuser = true;
      } else {
          this.loginauth.getdefaultprofile().subscribe((data: Profilefinalresponse) => {
          this.loginauth.defaultprofile = [data.response.data[0]];
          this.loginauth.userid = this.loginauth.defaultprofile[0].id;
          this.loginauth.isexpenseaccess = (this.loginauth.selectedactivity.expenseaccess == "Y") && (this.loginauth.defaultprofile[0].mmstOrderusrtype == "ST") ? true : false;

          this.loginauth.insertuserlog(this.loginauth.userid).subscribe((data1) => {
            // this.loginauth.getadminpass().subscribe(data => {
            //   var response1 = data;
            //   this.genericHTTP.ReadOnlyUsername = response1["username"];
            //   this.genericHTTP.ReadOnlypassword = response1["password"];
              
            //   //this.loginauth.ReadOnlyparameter = 'user=' + this.loginauth.ReadOnlyUsername + '&password=' + this.loginauth.ReadOnlypassword;

            // });
            this.loginauth.logintype = 'wms';
            this.loginauth.checkApprovalScreenAccess().subscribe((appData) => {
              if (!!appData) {
                this.loginauth.approvalScreen = true;
                this.events.publish('updateMenu');
                this.router.navigateByUrl('/' + url);
              }
              else {
                this.loginauth.approvalScreen = false;
                this.events.publish('updateMenu');
                this.router.navigateByUrl('/' + url);
              }

            });

          });
        });
      }
    });//-------------
  }
  Dateconversionddmmyyyy(date) {
    var ddmmyyyy = '';
    try {
      var dl1date = new Date(date)
      var nmonth = dl1date.getMonth() + 1;
      var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate())
      var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth)
      var yyyy1 = dl1date.getFullYear()
      ddmmyyyy = dd1 + "-" + mm1 + "-" + yyyy1;

    } catch (error) {
      ddmmyyyy = '';
    }
    return ddmmyyyy;
  }
 
}