import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginauthService } from './loginauth.service';
import { NeworderService } from '../neworder/neworder.service';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Storage } from '@ionic/storage';
import * as CryptoJS from 'crypto-js';
import { LoadingController } from '@ionic/angular';
let LoginPage = class LoginPage {
    constructor(loginservc, router, neworderservc, faio, storage, loadingController) {
        this.loginservc = loginservc;
        this.router = router;
        this.neworderservc = neworderservc;
        this.faio = faio;
        this.storage = storage;
        this.loadingController = loadingController;
        this.isnewPinconfirm = false;
        this.loginrequired = false;
        this.fingerprintloginallowed = false;
        this.newuser = true;
        this.resetpin = true;
        this.secretKey = 'openbravoprism2';
        this.isipportvisible = true;
        this.isforgetpass = false;
        this.isclickonotp = false;
    }
    ngOnInit() {
        this.storage.get('ipport').then((ipport) => {
            if (ipport) {
                this.isipportvisible = false;
                this.ipport = ipport;
                this.loginservc.commonurl = 'http://' + ipport + '/openbravo/';
                console.log(ipport);
            }
            else {
                this.isipportvisible = true;
                console.log(ipport);
            }
        });
        this.passcode = '';
        this.message = true;
        this.int = 0;
        this.fingerPin = false;
        this.isnewPinconfirm = false;
        // this.storage.clear();
        // this.storage.set('Securitypin', '1234');
        this.finalPin = '';
        console.log(this.storage.get('Securitypin'));
        this.storage.get('Securitypin').then((Securitypin) => {
            if (Securitypin) {
                this.loginrequired = false;
                this.newuser = false;
                console.log('existing user');
                this.message = false;
                this.pageStatus = 'Enter Your Pin to Login';
                this.fingerprintloginallowed = true;
            }
            else {
                this.loginrequired = true;
                this.newuser = true;
                this.fingerprintloginallowed = false;
                console.log('New User Need to Setup Pin');
            }
        });
    }
    encrypt(value) {
        return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
    }
    decrypt(textToDecrypt) {
        return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }
    onClickForgetPass() {
        if (this.username) {
            this.isforgetpass = true;
            this.loadingController.create({
                duration: 5000,
                spinner: 'circles',
                message: 'Please Wait...'
            }).then((res) => {
                res.present();
            });
            console.log('Inside test ');
            this.loginservc.getmobileno(this.username).subscribe((data) => {
                this.response = data['response'];
                if (this.response.messageType === 'success') {
                    this.mobileno = this.response.messageText;
                    this.txterror = 'OTP Will Send To ' + this.response.messageText;
                    this.loadingController.dismiss();
                }
            }, error => {
                this.txterror = error.message;
            });
        }
        else {
            this.txterror = 'Please Enter User Name.';
        }
    }
    onClickGetOTP() {
        this.loadingController.create({
            duration: 5000,
            spinner: 'circles',
            message: 'Please Wait...'
        }).then((res) => {
            res.present();
        });
        this.loginservc.forgetuser(this.username).subscribe((data) => {
            console.log('OTP' + data);
            this.response = data['response'];
            if (this.response.messageType !== undefined) {
                if (this.response.messageType === 'success') {
                    this.txterror = this.response.messageText;
                    this.isclickonotp = true;
                    this.loadingController.dismiss();
                }
            }
            else {
                this.txterror = this.response.error.message;
            }
        }, error => {
            this.txterror = error.message;
        });
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
            if (this.response.messageType !== undefined) {
                if (this.response.messageType === 'success') {
                    this.txterror = this.response.messageText;
                    // after changing pass need to complsury setup new pin and login
                    this.loginrequired = true;
                    this.newuser = true;
                    this.isforgetpass = false;
                    this.fingerprintloginallowed = false;
                    console.log('New User Need to Setup Pin');
                }
            }
            else {
                this.txterror = this.response.error.message;
            }
            this.loadingController.dismiss();
        }, error => {
            this.txterror = error.message;
        });
    }
    onIpPortClick() {
        if (this.ipport) {
            this.storage.set('ipport', this.ipport);
            this.loginservc.commonurl = 'http://' + this.ipport + '/openbravo/';
            this.isipportvisible = false;
        }
    }
    resetIpPort() {
        this.isipportvisible = true;
    }
    onClick() {
        this.loadingController.create({
            duration: 5000,
            spinner: 'circles',
            message: 'Please Wait...'
        }).then((res) => {
            res.present();
        });
        this.txterror = '';
        console.log('else paronclick', this.username, this.txterror);
        this.loginservc.login(this.username, this.password).subscribe((resp) => {
            console.log('else paronclicksdfghj', this.username, this.txterror);
            if (resp.showMessage) {
                // error
                console.log('resp.showMessag', resp.showMessage);
                this.txterror = resp.messageText;
                this.txthint = 'Hint: ' + resp.messageTitle;
                this.loginrequired = true;
                this.newuser = true;
            }
            else {
                console.log('else part');
                this.txterror = "Success";
                this.loginservc.getdefaultprofile().subscribe((data) => {
                    // this.defaultprofile = data['response'];
                    this.loginservc.defaultprofile = [data.response.data[0]];
                    this.loginservc.userid = this.loginservc.defaultprofile[0].id;
                    this.loginservc.insertuserlog(this.loginservc.userid).subscribe((data1) => {
                        console.log('insert user log');
                    });
                    console.log(data.response);
                    // console.log(data.response.data[0].defaultClient);
                });
                this.txterror = '';
                this.txthint = 'Success';
                if (this.newuser) {
                    this.loginrequired = false;
                    this.message = false;
                    this.pageStatus = 'Please Setup Your Pin!';
                }
                else {
                    // console.log('test p');
                    // this.router.navigateByUrl('/joblist');
                    // this.router.navigateByUrl('/profile');
                    this.router.navigateByUrl('/home');
                }
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
            this.loadingController.dismiss();
        }, error => {
            this.txterror = error.message;
        });
    }
    onfingerPrintshow() {
        this.faio.show({
        // clientId: 'Fingerprint-Demo', // Android: Used for encryption. iOS: used for dialogue if no `localizedReason` is given.
        // clientSecret: 'o7aoOMYUbyxaD23oFAnJ', // Necessary for Android encrpytion of keys. Use random secret key.
        // disableBackup: true,  // Only for Android(optional)
        // localizedFallbackTitle: 'Use Pin', // Only for iOS
        // localizedReason: 'Please authenticate' // Only for iOS
        })
            .then((result) => {
            this.storage.get('user').then((user) => {
                this.username = this.decrypt(user);
                console.log(user);
            });
            this.storage.get('pass').then((pass) => {
                this.password = this.decrypt(pass);
                this.onClick();
                // console.log(pass);
            });
        })
            .catch((error) => console.log(error));
    }
    add(value) {
        console.log('inside log');
        this.storage.get('Securitypin').then((Securitypin) => {
            if (Securitypin) {
                this.finalPin = this.decrypt(Securitypin);
            }
            console.log('inside fun' + this.passcode.length);
            if (this.passcode.length < 4) {
                this.passcode = this.passcode + value;
                if (this.int === 0) {
                    this.codeone = value;
                    this.int++;
                }
                else if (this.int === 1) {
                    this.codetwo = value;
                    this.int++;
                }
                else if (this.int === 2) {
                    this.codethree = value;
                    this.int++;
                }
                else if (this.int === 3) {
                    this.codefour = value;
                    if (this.isnewPinconfirm && this.newuser) {
                        this.newPin = this.codeone + this.codetwo + this.codethree + this.codefour;
                        if (this.newPin === this.passcode) {
                            this.message = false;
                            this.pageStatus = 'Pin Confirmed!';
                            this.storage.set('Securitypin', this.encrypt(this.passcode));
                            this.storage.set('user', this.encrypt(this.loginservc.user));
                            this.storage.set('pass', this.encrypt(this.loginservc.pass));
                            this.isnewPinconfirm = true;
                            this.newuser = false;
                            console.log('New Pin Confirm');
                            // login
                            this.onClick();
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
                    }
                    else {
                        if (this.finalPin === this.codeone + this.codetwo + this.codethree + this.codefour) {
                            console.log('"passwordMatched"');
                            this.message = false;
                            this.pageStatus = 'Password Matched.';
                            this.storage.get('user').then((user) => {
                                this.username = this.decrypt(user);
                                console.log(user);
                            });
                            this.storage.get('pass').then((pass) => {
                                this.password = this.decrypt(pass);
                                this.onClick();
                                console.log(pass);
                            });
                            // login
                        }
                        else {
                            this.message = false;
                            this.resetpin = true;
                            this.pageStatus = 'Please Enter Correct Pin.';
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
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService, Router,
        NeworderService,
        FingerprintAIO, Storage, LoadingController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map