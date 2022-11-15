import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
            {
                title: 'New Lead',
                url: '/newcustomer',
                icon: 'person-add'
            },
            {
                title: 'New Order',
                url: '/neworder',
                icon: 'clipboard'
            },
            {
                title: 'Existing Customer',
                url: '/existingcustomer',
                icon: 'person'
            },
            {
                title: 'Financial Status',
                url: '/financial-status',
                icon: 'wallet'
            },
            {
                title: 'Change Security Setting',
                url: '/financial-status',
                icon: 'lock'
            },
            {
                title: 'Logout',
                url: '/login',
                icon: 'log-out'
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map