(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Settings\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <img style=\"width: 400px;height: 400px;\" src=\"./assets/settings.png\">\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n        <ion-col>\n          <ion-card class=\"server-card\" *ngIf=\"showFingerprintButton\">\n           <ion-item lines=\"none\"> \n              <ion-label>Enable Fingerprint</ion-label>\n                 <ion-toggle  mode=\"ios\" [(ngModel)]=\"biometricstatus\" [checked]=\"biometricstatus\" (ionChange)=\"biometricStatusChange($event)\"></ion-toggle>\n            </ion-item>\n          </ion-card>\n         \n          <ion-card class=\"server-card\" *ngIf=\"showPinCodeControl\"> \n            <ion-item lines=\"none\"> \n               <ion-label>Use Device Authentication</ion-label>\n                  <ion-toggle  mode=\"ios\" [(ngModel)]=\"biometricstatus\" [checked]=\"biometricstatus\" (ionChange)=\"deviceAuthenticationStatusChange($event)\"></ion-toggle>\n             </ion-item>\n           </ion-card>\n           <ion-card class=\"server-card\"> \n            <ion-item lines=\"none\"> \n                <ion-button  style=\"width: -webkit-fill-available;\"  (click)=\"onChangePassFromSetting()\" color=\"bluegrey\" size=\"large\" expand=\"block\">Change Password</ion-button>\n              </ion-item>\n           </ion-card>\n\n          <!-- <ion-card class=\"server-card\">\n            <ion-item lines=\"none\">\n              <ion-label>Change APP Server URL</ion-label>\n            </ion-item>\n            <ion-item class=\"server-item\"> \n              <ion-input id=\"txtServerUrl\" name=\"username\" type=\"text\" placeholder=\"URL\"  [(ngModel)] = \"serverurl\" maxlength = \"80\" required></ion-input>\n            </ion-item>\n            <ion-button strong=\"true\" color=\"teal\" expand=\"block\">Apply</ion-button>\n          </ion-card>\n           -->\n          \n\n\n          \n        </ion-col>\n       \n     </ion-row>\n     \n\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toggle {\n  --background-checked:#4db6ac;\n}\n\n.server-item {\n  --border-width: 1px !important;\n  margin-bottom: 25px;\n}\n\n.server-card {\n  padding: 2%;\n}\n\nion-button {\n  --ion-color-contrast:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUFBO0FDQUo7O0FES0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FER0E7RUFDSSwwQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvZ2dsZSB7XG4gICAgLy8tLWJhY2tncm91bmQ6ICMwMDA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IzRkYjZhYztcbiAgXG4gICAgLy8tLWhhbmRsZS1iYWNrZ3JvdW5kOiAjNGRiNmFjO1xuICAgLy8gLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjMDAwO1xuICB9XG4gIC5zZXJ2ZXItaXRlbSB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uc2VydmVyLWNhcmR7XG4gICAgcGFkZGluZzogMiU7XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDp3aGl0ZTtcbiAgfSIsImlvbi10b2dnbGUge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDojNGRiNmFjO1xufVxuXG4uc2VydmVyLWl0ZW0ge1xuICAtLWJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5zZXJ2ZXItY2FyZCB7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6d2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SettingsPage = class SettingsPage {
    constructor(storage, alertController, router) {
        this.storage = storage;
        this.alertController = alertController;
        this.router = router;
        this.TAG = "SettingsPage";
        this.showBiometericControl = false;
        this.showPinCodeControl = false;
        this.showFingerprintButton = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.biometricstatus = yield this.storage.get('Biometric_Status');
            this.bio_Codes = yield this.storage.get('Biometric_Device_Codes');
            this.pinCodes = yield this.storage.get('PIN_Status');
            if (this.bio_Codes == '200') {
                this.showFingerprintButton = true;
                this.showPinCodeControl = false;
            }
            else if (this.pinCodes == '200') {
                this.showPinCodeControl = true;
                this.showFingerprintButton = false;
            }
            if (this.bio_Codes == '-106' && this.pinCodes != '200') {
                this.showFingerprintButton = true;
                this.showPinCodeControl = false;
            }
            if (this.bio_Codes == '200' && this.pinCodes == '200') {
                this.showFingerprintButton = true;
                this.showPinCodeControl = false;
            }
        });
    }
    biometricStatusChange(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (event.detail.checked && this.bio_Codes == '-106') {
                const alert = yield this.alertController.create({
                    header: 'Setting',
                    subHeader: 'Biometric',
                    message: 'You have not added fingerprint',
                    buttons: ['OK'],
                });
                yield alert.present();
                let result = yield alert.onDidDismiss();
                this.biometricstatus = false;
            }
            else {
                this.storage.set('Biometric_Status', event.detail.checked);
            }
        });
    }
    deviceAuthenticationStatusChange(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set('Biometric_Status', event.detail.checked);
        });
    }
    onChangePassFromSetting() {
        try {
            this.storage.set('changePasswordFromSettingPage', true);
            this.router.navigateByUrl('/login');
        }
        catch (error) {
        }
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
        styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map