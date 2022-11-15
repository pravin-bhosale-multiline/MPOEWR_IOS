import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { PinCheck } from '@ionic-native/pin-check/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  
  
  readonly TAG = "SettingsPage";
  biometricstatus;
  serverurl;
  showBiometericControl = false;
  bio_Codes;
  showPinCodeControl = false;

  showFingerprintButton = false;

  pinCodes;

  constructor(public storage: Storage,private alertController: AlertController,private router:Router) { }

  
  async ngOnInit() {
    
    this.biometricstatus = await this.storage.get('Biometric_Status');
    this.bio_Codes = await this.storage.get('Biometric_Device_Codes');
    this.pinCodes = await this.storage.get('PIN_Status');

    if(this.bio_Codes == '200'){
      this.showFingerprintButton = true;
      this.showPinCodeControl = false;
      
      
    } else if(this.pinCodes == '200'){
      this.showPinCodeControl = true;
      this.showFingerprintButton = false;
      
      
    }
    if(this.bio_Codes == '-106' && this.pinCodes != '200'){
      this.showFingerprintButton = true;
      this.showPinCodeControl = false;
      
      
    }
    if(this.bio_Codes == '200' && this.pinCodes == '200'){
      this.showFingerprintButton = true;
      this.showPinCodeControl = false;
    }
     
    
   
    
    
  }

 async  biometricStatusChange(event){
    
    if(event.detail.checked && this.bio_Codes == '-106'){
      
        const alert = await this.alertController.create({
          header: 'Setting',
          subHeader: 'Biometric',
          message: 'You have not added fingerprint',
          buttons: ['OK'],
        });
      
        await alert.present();
        let result = await alert.onDidDismiss();
        this.biometricstatus = false;
        
      
    } else{
      this.storage.set('Biometric_Status', event.detail.checked);
    }
   
  }

  async deviceAuthenticationStatusChange(event){
    
    this.storage.set('Biometric_Status', event.detail.checked);

  }
  public onChangePassFromSetting(){
    try {
          this.storage.set('changePasswordFromSettingPage',true);
          this.router.navigateByUrl('/login');
    } catch (error) {
      
    }
  }


}
