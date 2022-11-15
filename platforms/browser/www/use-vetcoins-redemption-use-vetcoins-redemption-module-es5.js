(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["use-vetcoins-redemption-use-vetcoins-redemption-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"cssion-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: white;\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Use Vetcoins</ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card style=\"text-align: center;\">\n    <ion-card-content>\n\n  <ion-row>\n    <ion-col>\n      <div class=\"ion-text-start\">\n    <ion-label>\n      Name\n    </ion-label>\n  </div>\n  </ion-col>\n    <ion-col>\n      <div class=\"ion-text-end\">\n      <ion-label>\n        {{firmname}}\n      </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  \n\n  <ion-row>\n    <ion-col>\n      <div class=\"ion-text-start\">\n    <ion-label>\n      VetCoins\n    </ion-label>\n  </div>\n  </ion-col>\n    <ion-col>\n      <div class=\"ion-text-end\">\n      <ion-label>\n        &#x20b9; {{vetcoinsused}}\n      </ion-label>\n    </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <div class=\"ion-text-start\">\n    <ion-label>\n      Transaction Amount\n    </ion-label>\n  </div>\n  </ion-col>\n    <ion-col>\n      <div class=\"ion-text-end\">\n      <ion-label>\n        &#x20b9; {{currentamount}}\n      </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n  <ion-col>\n    <div class=\"ion-text-start\">\n    <ion-label>\n      Redemption Amount\n    </ion-label>\n  </div>\n  </ion-col>\n    <ion-col>\n      <div class=\"ion-text-end\">\n      <ion-label>\n        &#x20b9;{{RedemptionAmount| number:'1.0-0'}}\n      </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n\n \n    <ion-item no-lines no-lines *ngIf=\"product\">\n      <ion-label>Purchase Product</ion-label>\n      <ion-radio slot=\"start\" color=\"orangevet\" checked></ion-radio>\n    </ion-item>\n\n    <ion-item no-lines *ngIf=\"vet\">\n      <ion-label>Vet Fees</ion-label>\n      <ion-radio slot=\"start\" color=\"orangevet\" checked></ion-radio>\n    </ion-item>\n\n\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Enter OTP for trn id 001813</ion-label>\n          <ion-input type=\"text\" type=\"number\" [(ngModel)]=\"userotp\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n<div>\n      <ion-button color=\"orangevet\" expand=\"block\" text-center (click)=\"onUseConfirm()\">Confirm Redemption</ion-button>\n  </div>\n\n</ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/use-vetcoins-redemption/use-vetcoins-redemption.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/use-vetcoins-redemption/use-vetcoins-redemption.module.ts ***!
  \***************************************************************************/
/*! exports provided: UseVetcoinsRedemptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsRedemptionPageModule", function() { return UseVetcoinsRedemptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _use_vetcoins_redemption_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-vetcoins-redemption.page */ "./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.ts");







var routes = [
    {
        path: '',
        component: _use_vetcoins_redemption_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsRedemptionPage"]
    }
];
var UseVetcoinsRedemptionPageModule = /** @class */ (function () {
    function UseVetcoinsRedemptionPageModule() {
    }
    UseVetcoinsRedemptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_use_vetcoins_redemption_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsRedemptionPage"]]
        })
    ], UseVetcoinsRedemptionPageModule);
    return UseVetcoinsRedemptionPageModule;
}());



/***/ }),

/***/ "./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZS12ZXRjb2lucy1yZWRlbXB0aW9uL3VzZS12ZXRjb2lucy1yZWRlbXB0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.ts ***!
  \*************************************************************************/
/*! exports provided: UseVetcoinsRedemptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsRedemptionPage", function() { return UseVetcoinsRedemptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../use-vetcoins/use-vetcoins.service */ "./src/app/use-vetcoins/use-vetcoins.service.ts");







var UseVetcoinsRedemptionPage = /** @class */ (function () {
    function UseVetcoinsRedemptionPage(loginauth, router, route, commonfun, usevetcoinsservice, _ngZone) {
        this.loginauth = loginauth;
        this.router = router;
        this.route = route;
        this.commonfun = commonfun;
        this.usevetcoinsservice = usevetcoinsservice;
        this._ngZone = _ngZone;
    }
    UseVetcoinsRedemptionPage.prototype.ngOnInit = function () {
        this.getparam();
    };
    UseVetcoinsRedemptionPage.prototype.getparam = function () {
        var _this = this;
        try {
            this.route.params.subscribe(function (params) {
                if (_this.router.getCurrentNavigation().extras.state.Amount) {
                    _this.currentamount = _this.router.getCurrentNavigation().extras.state.Amount;
                    _this.product = _this.router.getCurrentNavigation().extras.state.Ispurchaseproduct;
                    _this.vet = _this.router.getCurrentNavigation().extras.state.Isvetfees;
                    _this.vetcoinsused = _this.router.getCurrentNavigation().extras.state.Balamount;
                    _this.tocust = _this.router.getCurrentNavigation().extras.state.tocust;
                    _this.fromcust = _this.router.getCurrentNavigation().extras.state.fromcust;
                    _this.apiotp = _this.router.getCurrentNavigation().extras.state.otp;
                    _this.orderredeemper = _this.router.getCurrentNavigation().extras.state.orderredeemper;
                    _this.vetcoinuse = _this.router.getCurrentNavigation().extras.state.vetcoinuse;
                    _this.redeemlimit = _this.router.getCurrentNavigation().extras.state.redeemlimit;
                    _this.firmname = _this.router.getCurrentNavigation().extras.state.firmname;
                    // this.currentamount=((amt*90)/100);
                    var orderamt = ((_this.currentamount) * (_this.orderredeemper) / 100);
                    // var orderamt=((this.currentamount)*(this.orderredeemper)/100)
                    _this.RedemptionAmount = (orderamt < _this.vetcoinuse ? orderamt : _this.vetcoinuse);
                }
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    UseVetcoinsRedemptionPage.prototype.Resetpage = function () {
        this.userotp = "";
    };
    UseVetcoinsRedemptionPage.prototype.onUseConfirm = function () {
        var _this = this;
        try {
            // this.tocust="";
            // this.fromcust="";
            if (this.userotp == this.apiotp) {
                this.description = (this.product == true ? "POP" : "POS");
                this.bal = this.vetcoinsused;
                this.rewardlimit = this.vetcoinuse;
                this.rewardtransfer = this.RedemptionAmount;
                // this.redeemlimit=this.RedemptionAmount;
                this.ordvalue = this.currentamount;
                this.usevetcoinsservice.VetCoinRewardTranstn(this.tocust, this.fromcust, this.description, this.bal, this.rewardlimit, this.rewardtransfer, this.redeemlimit, this.ordvalue).subscribe(function (data) {
                    // 
                    _this.resp = data;
                    if (_this.resp.status == "Success") {
                        _this.commonfun.presentAlert("Message", "Success", _this.resp.msg);
                        var navigationExtras = {
                            state: {
                                reset: true,
                            }
                        };
                        //  this.usevetcoinspage.Resetpage();
                        _this.router.navigate(['/use-vetcoins'], navigationExtras);
                        // this._ngZone.run(() => {
                        //   this.router.navigate(['/use-vetcoins']);
                        // });
                    }
                    else {
                        _this.commonfun.presentAlert("Message", "Error", "Error.");
                    }
                }, function (error) {
                    _this.commonfun.presentAlert("Message", "Error", error.error.text);
                });
            }
            else {
                this.commonfun.presentAlert("Message", "Error", "OTP not matched.");
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    UseVetcoinsRedemptionPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
        { type: _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_5__["UseVetcoinsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    UseVetcoinsRedemptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-use-vetcoins-redemption',
            template: __webpack_require__(/*! raw-loader!./use-vetcoins-redemption.page.html */ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.html"),
            styles: [__webpack_require__(/*! ./use-vetcoins-redemption.page.scss */ "./src/app/use-vetcoins-redemption/use-vetcoins-redemption.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"],
            _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_5__["UseVetcoinsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], UseVetcoinsRedemptionPage);
    return UseVetcoinsRedemptionPage;
}());



/***/ })

}]);
//# sourceMappingURL=use-vetcoins-redemption-use-vetcoins-redemption-module-es5.js.map