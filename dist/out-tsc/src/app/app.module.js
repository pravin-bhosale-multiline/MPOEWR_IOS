import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
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
import { DatePipe } from '@angular/common';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validator } from 'src/provider/validator-helper';
import { IonicSelectableModule } from 'ionic-selectable';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [BrowserModule, HttpClientModule, FormsModule,
            ReactiveFormsModule, IonicSelectableModule,
            IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
        providers: [
            StatusBar,
            SplashScreen,
            LoginauthService,
            FingerprintAIO,
            SecureStorage,
            DatePipe,
            ImagePicker,
            Camera, Validator,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map