(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bom-bom-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/bom/bom.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bom/bom.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"profile\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Bill Of Material</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <ion-searchbar placeholder=\"Filter BOM\"\n           (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor=\"let bom of filterbomList\">\n      {{ bom._identifier }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/bom/bom.module.ts":
/*!***********************************!*\
  !*** ./src/app/bom/bom.module.ts ***!
  \***********************************/
/*! exports provided: BomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomPageModule", function() { return BomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bom.page */ "./src/app/bom/bom.page.ts");







var routes = [
    {
        path: '',
        component: _bom_page__WEBPACK_IMPORTED_MODULE_6__["BomPage"]
    }
];
var BomPageModule = /** @class */ (function () {
    function BomPageModule() {
    }
    BomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bom_page__WEBPACK_IMPORTED_MODULE_6__["BomPage"]]
        })
    ], BomPageModule);
    return BomPageModule;
}());



/***/ }),

/***/ "./src/app/bom/bom.page.scss":
/*!***********************************!*\
  !*** ./src/app/bom/bom.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvbS9ib20ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bom/bom.page.ts":
/*!*********************************!*\
  !*** ./src/app/bom/bom.page.ts ***!
  \*********************************/
/*! exports provided: BomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BomPage", function() { return BomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");




var BomPage = /** @class */ (function () {
    function BomPage(loginservc, loadingCtrl) {
        var _this = this;
        this.loginservc = loginservc;
        this.loadingCtrl = loadingCtrl;
        this.loginservc.getbomlist().subscribe(function (data) {
            var response = data['response'];
            _this.bomlist = response['data'];
            _this.filterbomList = _this.bomlist;
        });
    }
    BomPage.prototype.ngOnInit = function () {
    };
    BomPage.prototype.onSearchChange = function (ev) {
        // Reset items back to all of the items
        this.filterbomList = this.bomlist;
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.filterbomList = this.filterbomList.filter(function (bom) {
                return (bom._identifier.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BomPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    BomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bom',
            template: __webpack_require__(/*! raw-loader!./bom.page.html */ "./node_modules/raw-loader/index.js!./src/app/bom/bom.page.html"),
            styles: [__webpack_require__(/*! ./bom.page.scss */ "./src/app/bom/bom.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], BomPage);
    return BomPage;
}());



/***/ })

}]);
//# sourceMappingURL=bom-bom-module-es5.js.map