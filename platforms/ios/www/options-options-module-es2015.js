(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options-options-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/options/options.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/options/options.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"login\"></ion-back-button>\n      </ion-buttons>\n  <ion-title>Options</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"onClickNewCustomer()\">\n        New Customer\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"onClickExistingCustomer()\">\n        Existing Customer\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"onClickNewOrder()\">\n        New Order\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"onClickOrderStatus()\">\n        Order Status\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"onClickfinStatus()\">\n        Financial Status\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/options/options.module.ts":
/*!*******************************************!*\
  !*** ./src/app/options/options.module.ts ***!
  \*******************************************/
/*! exports provided: OptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options.page */ "./src/app/options/options.page.ts");







const routes = [
    {
        path: '',
        component: _options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]
    }
];
let OptionsPageModule = class OptionsPageModule {
};
OptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
    })
], OptionsPageModule);



/***/ }),

/***/ "./src/app/options/options.page.scss":
/*!*******************************************!*\
  !*** ./src/app/options/options.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/options/options.page.ts":
/*!*****************************************!*\
  !*** ./src/app/options/options.page.ts ***!
  \*****************************************/
/*! exports provided: OptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPage", function() { return OptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OptionsPage = class OptionsPage {
    constructor() { }
    ngOnInit() {
    }
    onClickNewCustomer() {
    }
    onClickNewOrder() {
    }
    onClickOrderStatus() {
    }
    onClickfinStatus() {
    }
    onClickExistingCustomer() { }
};
OptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-options',
        template: __webpack_require__(/*! raw-loader!./options.page.html */ "./node_modules/raw-loader/index.js!./src/app/options/options.page.html"),
        styles: [__webpack_require__(/*! ./options.page.scss */ "./src/app/options/options.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OptionsPage);



/***/ })

}]);
//# sourceMappingURL=options-options-module-es2015.js.map