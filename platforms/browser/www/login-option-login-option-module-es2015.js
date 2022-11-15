(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-option-login-option-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login-option/login-option.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login-option/login-option.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login Option</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n   \n    <p style=\"text-align: center;\">{{noaccessmsg}}</p>\n    <ion-col *ngIf='mmstOrdercaptureapp'>\n      <ion-card style=\"background-color: powderblue;\" (click)=\"onclickLoginTypewms('wms')\">\n        <ion-card-content>\n         \n              <ion-card-title style=\"text-align: center;\">Order Punching</ion-card-title>\n            \n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n      <ion-col *ngIf='mmstReward'>\n        <ion-card style=\"background-color: powderblue;\" (click)=\"onclickLoginTypevet('vet')\">\n          <ion-card-content>\n            <ion-card-title style=\"text-align: center;\">Reward</ion-card-title>\n\n            \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n     \n  </ion-row>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login-option/login-option.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/login-option/login-option.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginOptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOptionPageModule", function() { return LoginOptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_option_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-option.page */ "./src/app/login-option/login-option.page.ts");







const routes = [
    {
        path: '',
        component: _login_option_page__WEBPACK_IMPORTED_MODULE_6__["LoginOptionPage"]
    }
];
let LoginOptionPageModule = class LoginOptionPageModule {
};
LoginOptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_option_page__WEBPACK_IMPORTED_MODULE_6__["LoginOptionPage"]]
    })
], LoginOptionPageModule);



/***/ }),

/***/ "./src/app/login-option/login-option.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/login-option/login-option.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLW9wdGlvbi9sb2dpbi1vcHRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login-option/login-option.page.ts":
/*!***************************************************!*\
  !*** ./src/app/login-option/login-option.page.ts ***!
  \***************************************************/
/*! exports provided: LoginOptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOptionPage", function() { return LoginOptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginOptionPage = class LoginOptionPage {
    constructor(loginauth, router) {
        this.loginauth = loginauth;
        this.router = router;
        this.mmstReward = false;
        this.mmstOrdercaptureapp = false;
        this.noaccessmsg = "";
    }
    ngOnInit() {
        this.SelectOption();
    }
    SelectOption() {
        try {
            this.mmstReward = this.loginauth.defaultprofile[0].mmstReward;
            this.mmstOrdercaptureapp = this.loginauth.defaultprofile[0].mmstOrdercaptureapp;
            if (this.mmstReward != this.mmstOrdercaptureapp) {
                if (this.mmstReward) {
                    this.onclickLoginTypevet('vet');
                }
                else {
                    this.onclickLoginTypewms('wms');
                }
            }
            if (this.mmstReward == false && this.mmstOrdercaptureapp == false) {
                this.noaccessmsg = "You don't have any access.";
                this.loginauth.defaultprofile = null;
            }
            else {
                this.noaccessmsg = "";
            }
        }
        catch (error) {
        }
    }
    onclickLoginTypewms(type) {
        this.loginauth.logintype = type;
        //if(this.loginauth.defaultprofile[0].mmstOrderusrtype=="CEB")
        this.router.navigate(['terms-of-agreement']);
        //else
        //this.router.navigate(['home']); 
    }
    onclickLoginTypevet(type) {
        this.loginauth.logintype = type;
        this.router.navigate(['use-vetcoins']);
    }
};
LoginOptionPage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginOptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-option',
        template: __webpack_require__(/*! raw-loader!./login-option.page.html */ "./node_modules/raw-loader/index.js!./src/app/login-option/login-option.page.html"),
        styles: [__webpack_require__(/*! ./login-option.page.scss */ "./src/app/login-option/login-option.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginOptionPage);



/***/ })

}]);
//# sourceMappingURL=login-option-login-option-module-es2015.js.map