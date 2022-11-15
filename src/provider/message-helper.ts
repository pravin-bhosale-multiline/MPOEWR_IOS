import { Constants } from 'src/app/common/Constants';
import { Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Injectable()
export class Message {
  isplatformweb=Constants.isplatformweb;//set true if platform is web
  maxfile=1;
  istakephoto=true;
  constructor(private alertCtrl: AlertController,public platform: Platform) { 

  }
 
   
  async presentAlert(Header:string,SubHeader:string,Message:string) {
    const alert = await this.alertCtrl.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: ['OK']
    });

    await alert.present();
  }


}
