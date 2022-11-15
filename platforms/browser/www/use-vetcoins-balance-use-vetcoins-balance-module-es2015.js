(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["use-vetcoins-balance-use-vetcoins-balance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins-balance/use-vetcoins-balance.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/use-vetcoins-balance/use-vetcoins-balance.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"cssion-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button style=\"color: white;\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Use Vetcoins</ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"formvetbal\">\n  <ion-card style=\"text-align: center;\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-start\">\n        <ion-label>\n          Customer Name\n        </ion-label>\n      </div>\n      </ion-col>\n        <ion-col>\n          <div class=\"ion-text-end\">\n          <ion-label>\n            {{firmname}}\n          </ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      \n\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-start\">\n        <ion-label>\n          Customer Category\n        </ion-label>\n      </div>\n      </ion-col>\n        <ion-col>\n          <div class=\"ion-text-end\">\n          <ion-label>\n          {{category}}\n          </ion-label>\n        </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-start\">\n        <ion-label>\n          Customer Balance VetCoins\n        </ion-label>\n      </div>\n      </ion-col>\n        <ion-col>\n          <div class=\"ion-text-end\">\n          <ion-label>\n            {{amount}}\n          </ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col>\n        <div class=\"ion-text-start\">\n        <ion-label>\n          My Redemption Limit\n        </ion-label>\n      </div>\n      </ion-col>\n        <ion-col>\n          <div class=\"ion-text-end\">\n          <ion-label>\n            &#x20b9; {{redeemlimit}}\n          </ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n  <ion-radio-group value=\"vetfees\" (ionChange)=\"radioGroupChange($event)\">\n    <ion-item no-lines>\n      <ion-label>Purchase Product</ion-label>\n      <ion-radio slot=\"start\" color=\"orangevet\" value=\"purchaseproduct\"></ion-radio>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-label>Vet Fees</ion-label>\n      <ion-radio slot=\"start\" color=\"orangevet\" value=\"vetfees\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n\n\n\n\n\n\n\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Amount/VetCoins</ion-label>\n            <ion-input  type=\"number\"  [formControl]=\"formvetbal.controls['Amount']\"></ion-input>\n          </ion-item>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.Amount\">\n              <div *ngIf=\"formvetbal.get('Amount').hasError(validation.type) && formvetbal.get('Amount').touched\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n      <div class=\"ion-padding\">\n            <ion-button color=\"orangevet\" expand=\"block\" text-center (click)=\"onUseVetCoins()\" [disabled]=\"!formvetbal.valid\">Use VetCoins</ion-button>\n</div>\n          \n\n    </ion-card-content>\n  </ion-card>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/use-vetcoins-balance/use-vetcoins-balance.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/use-vetcoins-balance/use-vetcoins-balance.module.ts ***!
  \*********************************************************************/
/*! exports provided: UseVetcoinsBalancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsBalancePageModule", function() { return UseVetcoinsBalancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _use_vetcoins_balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-vetcoins-balance.page */ "./src/app/use-vetcoins-balance/use-vetcoins-balance.page.ts");







const routes = [
    {
        path: '',
        component: _use_vetcoins_balance_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsBalancePage"]
    }
];
let UseVetcoinsBalancePageModule = class UseVetcoinsBalancePageModule {
};
UseVetcoinsBalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_use_vetcoins_balance_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsBalancePage"]]
    })
], UseVetcoinsBalancePageModule);



/***/ }),

/***/ "./src/app/use-vetcoins-balance/use-vetcoins-balance.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/use-vetcoins-balance/use-vetcoins-balance.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZS12ZXRjb2lucy1iYWxhbmNlL3VzZS12ZXRjb2lucy1iYWxhbmNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/use-vetcoins-balance/use-vetcoins-balance.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/use-vetcoins-balance/use-vetcoins-balance.page.ts ***!
  \*******************************************************************/
/*! exports provided: UseVetcoinsBalancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsBalancePage", function() { return UseVetcoinsBalancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../use-vetcoins/use-vetcoins.service */ "./src/app/use-vetcoins/use-vetcoins.service.ts");







let UseVetcoinsBalancePage = class UseVetcoinsBalancePage {
    constructor(loginauth, router, fb, route, commonfun, usevetcoinsservice) {
        this.loginauth = loginauth;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.commonfun = commonfun;
        this.usevetcoinsservice = usevetcoinsservice;
        this.purchaseproduct = false;
        this.vetfees = true;
        this.validation_messages = {
            'Amount': [
                { type: 'required', message: ' *Please Enter Amount.' }
            ]
        };
        this.formvetbal = this.fb.group({
            Amount: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getparam();
    }
    radioGroupChange(event) {
        // this.selectedRadioGroup = event.detail;
        if (event.detail.value == "purchaseproduct") {
            this.purchaseproduct = true;
            this.vetfees = false;
        }
        else {
            this.purchaseproduct = false;
            this.vetfees = true;
        }
    }
    getparam() {
        try {
            this.route.params.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state.VetCoinCustDetails) {
                    // this.selectedbunch=null;
                    this.varVetCoinCustDetails = this.router.getCurrentNavigation().extras.state.VetCoinCustDetails;
                    //  
                    this.fromcust = this.varVetCoinCustDetails.custdetails.fromcust;
                    this.tocust = this.varVetCoinCustDetails.custdetails.tocust;
                    this.category = this.varVetCoinCustDetails.custdetails.category;
                    this.amount = this.varVetCoinCustDetails.custdetails.amount;
                    this.firmname = this.varVetCoinCustDetails.custdetails.firmname;
                    this.redeemlimit = this.varVetCoinCustDetails.custdetails.redeemlimit;
                    this.mobno = this.router.getCurrentNavigation().extras.state.mobno;
                    this.vetcoinuse = this.varVetCoinCustDetails.custdetails.vetcoinuse;
                    this.orderredeemper = this.varVetCoinCustDetails.custdetails.orderredeemper;
                }
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    onUseVetCoins() {
        try {
            var amt = this.formvetbal.controls["Amount"].value;
            this.currentamount = this.amount;
            //  this.currentamount=((this.amount*90)/100);
            //  
            //  
            if (amt <= this.redeemlimit) {
                this.usevetcoinsservice.getWMobileSendSmsViaIonic(this.mobno).subscribe(data => {
                    //
                    const resp = data;
                    this.otp = data["otp"];
                    let navigationExtras = {
                        state: {
                            Amount: this.formvetbal.controls["Amount"].value,
                            Ispurchaseproduct: this.purchaseproduct,
                            Isvetfees: this.vetfees,
                            Balamount: this.amount,
                            fromcust: this.fromcust,
                            tocust: this.tocust,
                            otp: this.otp,
                            orderredeemper: this.orderredeemper,
                            vetcoinuse: this.vetcoinuse,
                            redeemlimit: this.redeemlimit,
                            firmname: this.firmname
                        }
                    };
                    this.router.navigate(['use-vetcoins-redemption'], navigationExtras);
                });
            }
            else {
                this.commonfun.presentAlert("Message", "Alert", "Amount/VetCoins Must be less than Redemption Limit");
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    Resetpage() {
        this.formvetbal.reset();
    }
};
UseVetcoinsBalancePage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
    { type: _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsService"] }
];
UseVetcoinsBalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-use-vetcoins-balance',
        template: __webpack_require__(/*! raw-loader!./use-vetcoins-balance.page.html */ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins-balance/use-vetcoins-balance.page.html"),
        styles: [__webpack_require__(/*! ./use-vetcoins-balance.page.scss */ "./src/app/use-vetcoins-balance/use-vetcoins-balance.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"],
        _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsService"]])
], UseVetcoinsBalancePage);



/***/ })

}]);
//# sourceMappingURL=use-vetcoins-balance-use-vetcoins-balance-module-es2015.js.map