(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["use-vetcoins-use-vetcoins-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins/use-vetcoins.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/use-vetcoins/use-vetcoins.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"cssion-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Use Vetcoins\n    </ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n  \n\n</ion-header>\n\n\n\n\n<ion-content>\n  <form [formGroup]=\"formvet\">\n\n  <ion-card style=\"text-align: center;\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <!-- <img src=\"http://placehold.it/300x200\" class=\"custom-avatar\"/> -->\n          <!-- <ion-icon name=\"cloud-circle\" style=\"color: #F39E20;\"></ion-icon> -->\n          <ion-label>\n            {{loginauth.defaultprofile[0].name}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row (click)=\"shareto()\">\n        <ion-col>\n         <ion-label>\n            Share your referral Code {{referalcode}}\n           \n            <ion-icon name=\"share\" style=\"font-size: x-large;\"></ion-icon>\n          \n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Enter customer mobile to redeem VetCoins in his/her account</ion-label>\n            <ion-input type=\"number\"  [formControl]=\"formvet.controls['mobileno']\" style=\"padding-top: 21px!important;\"></ion-input>\n          </ion-item>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.mobileno\">\n              <div *ngIf=\"formvet.get('mobileno').hasError(validation.type) && formvet.get('mobileno').touched\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"ion-padding\">\n            <ion-button color=\"orangevet\" expand=\"block\" text-center (click)=\"onCheckVetCoins()\" [disabled]=\"!formvet.valid\">Check VetCoins</ion-button>\n</div>\n          \n\n    </ion-card-content>\n  </ion-card>\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/use-vetcoins/use-vetcoins.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/use-vetcoins/use-vetcoins.module.ts ***!
  \*****************************************************/
/*! exports provided: UseVetcoinsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsPageModule", function() { return UseVetcoinsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _use_vetcoins_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-vetcoins.page */ "./src/app/use-vetcoins/use-vetcoins.page.ts");







var routes = [
    {
        path: '',
        component: _use_vetcoins_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsPage"]
    }
];
var UseVetcoinsPageModule = /** @class */ (function () {
    function UseVetcoinsPageModule() {
    }
    UseVetcoinsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_use_vetcoins_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsPage"]]
        })
    ], UseVetcoinsPageModule);
    return UseVetcoinsPageModule;
}());



/***/ }),

/***/ "./src/app/use-vetcoins/use-vetcoins.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/use-vetcoins/use-vetcoins.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycolor {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC91c2UtdmV0Y29pbnMvdXNlLXZldGNvaW5zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXNlLXZldGNvaW5zL3VzZS12ZXRjb2lucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlLXZldGNvaW5zL3VzZS12ZXRjb2lucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljb2xvcntcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iLCIubXljb2xvciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/use-vetcoins/use-vetcoins.page.ts":
/*!***************************************************!*\
  !*** ./src/app/use-vetcoins/use-vetcoins.page.ts ***!
  \***************************************************/
/*! exports provided: UseVetcoinsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsPage", function() { return UseVetcoinsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var _use_vetcoins_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-vetcoins.service */ "./src/app/use-vetcoins/use-vetcoins.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");









var UseVetcoinsPage = /** @class */ (function () {
    function UseVetcoinsPage(loginauth, socialSharing, router, route, fb, val, usevetcoinsservice, commonfun) {
        var _this = this;
        this.loginauth = loginauth;
        this.socialSharing = socialSharing;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.val = val;
        this.usevetcoinsservice = usevetcoinsservice;
        this.commonfun = commonfun;
        this.validation_messages = {
            'mobileno': [
                { type: 'required', message: ' *Please Enter Mobile No.' },
            ]
        };
        try {
            this.formvet = this.fb.group({
                mobileno: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, val.numberValid],
            });
            route.params.subscribe(function (val) {
                _this.getparam();
                //this.formvet.controls["mobileno"].setValue("");
                _this.formvet.reset();
                // this.formvet.controls["mobileno"].untouched=t
            });
        }
        catch (error) {
        }
    }
    UseVetcoinsPage.prototype.ngOnInit = function () {
        this.Resetpage();
        this.getreferelcode();
    };
    UseVetcoinsPage.prototype.getparam = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                if (_this.router.getCurrentNavigation().extras.state.reset) {
                    _this.Resetpage();
                }
            }
        });
    };
    UseVetcoinsPage.prototype.shareto = function () {
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        var options = {
            message: 'Please use my referral code ' + this.referalcode + ' to register on Pawtect (https://www.pawtectindia.com/pawtect/) and buy Pawtect plan (medical cover) for your pet. Contact : +917506562266 /+91 20 26633615   Email: customerservice@pawtectindia.com for any questions or help with registration. Thanks ' + this.loginauth.defaultprofile[0].name,
            subject: 'the subject',
            // files: ['', ''], // an array of filenames either locally or remotely
            url: 'https://www.website.com/foo/#bar?a=b',
        };
        this.socialSharing.shareWithOptions(options);
    };
    UseVetcoinsPage.prototype.getreferelcode = function () {
        var _this = this;
        try {
            this.usevetcoinsservice.getWMobileVetCoinCustDetailsapi("1", "N").subscribe(function (data) {
                if (data != null) {
                    if (data["referalcode"]) {
                        _this.referalcode = data["referalcode"].referalcode;
                    }
                    else {
                        _this.commonfun.presentAlert("Message", "Error", "Mobile No. is not valid.");
                    }
                }
                else {
                    _this.commonfun.presentAlert("Message", "Error", "Mobile No. is not valid.");
                }
            }, function (error) {
                _this.commonfun.presentAlert("Message", "Error", error.error.text);
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    UseVetcoinsPage.prototype.onCheckVetCoins = function () {
        var _this = this;
        try {
            if (this.loginauth.user != this.formvet.controls["mobileno"].value) {
                this.usevetcoinsservice.getWMobileVetCoinCustDetailsapi(this.formvet.controls["mobileno"].value, "N").subscribe(function (data) {
                    if (data != null) {
                        var navigationExtras = {
                            state: {
                                VetCoinCustDetails: data,
                                mobno: _this.formvet.controls["mobileno"].value
                            }
                        };
                        _this.router.navigate(['use-vetcoins-balance'], navigationExtras);
                    }
                    else {
                        _this.commonfun.presentAlert("Message", "Error", "Mobile No. is not valid.");
                    }
                }, function (error) {
                    _this.commonfun.presentAlert("Message", "Error!", error.error.text);
                });
            }
            else {
                this.commonfun.presentAlert("Message", "Error", "You can't use your own Mobile No.");
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    UseVetcoinsPage.prototype.Resetpage = function () {
        this.formvet.controls["mobileno"].setValue("");
        this.router.navigate(['use-vetcoins']);
    };
    UseVetcoinsPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"] },
        { type: _use_vetcoins_service__WEBPACK_IMPORTED_MODULE_7__["UseVetcoinsService"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__["Commonfun"] }
    ]; };
    UseVetcoinsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-use-vetcoins',
            template: __webpack_require__(/*! raw-loader!./use-vetcoins.page.html */ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins/use-vetcoins.page.html"),
            styles: [__webpack_require__(/*! ./use-vetcoins.page.scss */ "./src/app/use-vetcoins/use-vetcoins.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"],
            _use_vetcoins_service__WEBPACK_IMPORTED_MODULE_7__["UseVetcoinsService"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__["Commonfun"]])
    ], UseVetcoinsPage);
    return UseVetcoinsPage;
}());



/***/ })

}]);
//# sourceMappingURL=use-vetcoins-use-vetcoins-module-es5.js.map