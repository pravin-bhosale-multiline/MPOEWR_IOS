(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["use-vetcoins-transaction-use-vetcoins-transaction-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"cssion-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size:large\">\n     VetCoins Balance   &#x20b9; {{balamount}}\n    </ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n  \n\n</ion-header>\n\n\n<ion-content>\n\n \n    \n  <ion-row style=\"border-bottom: 1px solid grey !important;\">\n    <ion-col size=\"4\" style=\"text-align: center;\">Date</ion-col>\n    <ion-col size=\"4\">Descriptions</ion-col>\n    <ion-col size=\"2\">Credit</ion-col>\n    <ion-col size=\"2\">Debit</ion-col>\n  </ion-row>\n  \n\n  \n      \n<ion-row  *ngFor=\"let item of transactiondata; index as i\"   ng-class=\"{$even ? odd : even}\">\n\n  <ion-card style=\"width: 100%;\">\n    <ion-card-content size=\"12\"> \n  <!-- <ion-item style=\"font-size: small;\"> -->\n    <ion-row style=\"font-size: small;\">\n  <ion-col size=\"4\" style=\"text-align: left;\"> {{item.date | date: 'dd/MM/yyyy'}}</ion-col>\n  <ion-col size=\"4\" style=\"text-align: left;\" >{{item.descriptions}}</ion-col>\n  <ion-col size=\"2\" style=\"text-align: right;font-size: smaller;\">{{item.credit}}</ion-col>\n  <ion-col size=\"2\" style=\"text-align: right;font-size: smaller;\">{{item.debit}}</ion-col>\n<!-- </ion-item> -->\n</ion-row>\n </ion-card-content>\n</ion-card>\n</ion-row>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/use-vetcoins-transaction/use-vetcoins-transaction.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/use-vetcoins-transaction/use-vetcoins-transaction.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UseVetcoinsTransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsTransactionPageModule", function() { return UseVetcoinsTransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _use_vetcoins_transaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-vetcoins-transaction.page */ "./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.ts");







var routes = [
    {
        path: '',
        component: _use_vetcoins_transaction_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsTransactionPage"]
    }
];
var UseVetcoinsTransactionPageModule = /** @class */ (function () {
    function UseVetcoinsTransactionPageModule() {
    }
    UseVetcoinsTransactionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_use_vetcoins_transaction_page__WEBPACK_IMPORTED_MODULE_6__["UseVetcoinsTransactionPage"]]
        })
    ], UseVetcoinsTransactionPageModule);
    return UseVetcoinsTransactionPageModule;
}());



/***/ }),

/***/ "./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZS12ZXRjb2lucy10cmFuc2FjdGlvbi91c2UtdmV0Y29pbnMtdHJhbnNhY3Rpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.ts ***!
  \***************************************************************************/
/*! exports provided: UseVetcoinsTransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsTransactionPage", function() { return UseVetcoinsTransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-vetcoins/use-vetcoins.service */ "./src/app/use-vetcoins/use-vetcoins.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");




var UseVetcoinsTransactionPage = /** @class */ (function () {
    function UseVetcoinsTransactionPage(usevetcoinsservice, commonfun) {
        this.usevetcoinsservice = usevetcoinsservice;
        this.commonfun = commonfun;
    }
    UseVetcoinsTransactionPage.prototype.ngOnInit = function () {
        this.transdata();
    };
    UseVetcoinsTransactionPage.prototype.transdata = function () {
        var _this = this;
        try {
            this.usevetcoinsservice.getWMobileVetCoinCustDetailsapi("", "Y").subscribe(function (data) {
                if (data != null) {
                    _this.balamount = data["Balance"].balamount;
                    _this.transactiondata = data["Transactions"];
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
    UseVetcoinsTransactionPage.prototype.Resetpage = function () {
    };
    UseVetcoinsTransactionPage.ctorParameters = function () { return [
        { type: _use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_2__["UseVetcoinsService"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] }
    ]; };
    UseVetcoinsTransactionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-use-vetcoins-transaction',
            template: __webpack_require__(/*! raw-loader!./use-vetcoins-transaction.page.html */ "./node_modules/raw-loader/index.js!./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.html"),
            styles: [__webpack_require__(/*! ./use-vetcoins-transaction.page.scss */ "./src/app/use-vetcoins-transaction/use-vetcoins-transaction.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_use_vetcoins_use_vetcoins_service__WEBPACK_IMPORTED_MODULE_2__["UseVetcoinsService"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"]])
    ], UseVetcoinsTransactionPage);
    return UseVetcoinsTransactionPage;
}());



/***/ })

}]);
//# sourceMappingURL=use-vetcoins-transaction-use-vetcoins-transaction-module-es5.js.map