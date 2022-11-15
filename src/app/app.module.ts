import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginauthService } from './login/loginauth.service';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SecureStorage } from '@ionic-native/secure-storage/ngx';
import { DatePipe} from '@angular/common';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validator } from 'src/provider/validator-helper';
import { IonicSelectableModule } from 'ionic-selectable';
import { Commonfun } from '../provider/commonfun';
import { PinCheck } from '@ionic-native/pin-check/ngx';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Message } from '../provider/message-helper';
import { NeworderPage } from './neworder/neworder.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Market } from '@ionic-native/market/ngx';
import {LoginPage} from './login/login.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PipesModule } from './common/pipes/pipes.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, MatList, MatListModule } from '@angular/material';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Crop } from '@ionic-native/crop/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FileTransfer} from '@ionic-native/file-transfer';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule,FormsModule,
    ReactiveFormsModule,IonicSelectableModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot({mode:'ios'}), AppRoutingModule, IonicStorageModule.forRoot(), BrowserAnimationsModule],
  providers: [
    StatusBar,LoginPage,
    SplashScreen,
    LoginauthService,
    FingerprintAIO,
    Geolocation,
    LocationAccuracy,
    NativeGeocoder,
    SecureStorage,
    DatePipe,PipesModule,
    ImagePicker,Message,
    PinCheck,
    HTTP,
    Market,
    AndroidPermissions,
    ScreenOrientation,
    FilePath,
    BarcodeScanner,
    Camera,Validator,Commonfun,NeworderPage,SocialSharing,FileTransfer,File,FileOpener,
    Crop,
    InAppBrowser,FileChooser,IOSFilePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
