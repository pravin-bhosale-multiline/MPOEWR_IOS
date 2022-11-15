(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productsearch-productsearch-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/productsearch/productsearch.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productsearch/productsearch.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"options\"></ion-back-button>\n      </ion-buttons>\n  <ion-title>Product</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <ion-searchbar placeholder=\"Filter BOM\"\n           (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor=\"let product of filterproductList\">\n      {{ product.mmstMainprodname}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/productsearch/productsearch.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/productsearch/productsearch.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductsearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsearchPageModule", function() { return ProductsearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _productsearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productsearch.page */ "./src/app/productsearch/productsearch.page.ts");







const routes = [
    {
        path: '',
        component: _productsearch_page__WEBPACK_IMPORTED_MODULE_6__["ProductsearchPage"]
    }
];
let ProductsearchPageModule = class ProductsearchPageModule {
};
ProductsearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_productsearch_page__WEBPACK_IMPORTED_MODULE_6__["ProductsearchPage"]]
    })
], ProductsearchPageModule);



/***/ }),

/***/ "./src/app/productsearch/productsearch.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/productsearch/productsearch.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzZWFyY2gvcHJvZHVjdHNlYXJjaC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/productsearch/productsearch.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/productsearch/productsearch.page.ts ***!
  \*****************************************************/
/*! exports provided: ProductsearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsearchPage", function() { return ProductsearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");



let ProductsearchPage = class ProductsearchPage {
    constructor(loginservc) {
        this.loginservc = loginservc;
    }
    ngOnInit() {
    }
    onSearchChange(ev) {
        // Reset items back to all of the items
        this.filterproductList = this.productlist;
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.filterproductList = this.filterproductList.filter((product) => {
                return ((product.mmstMainprodname + product.mmstMainprodcode + product.attributeSetValue)
                    .toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
};
ProductsearchPage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] }
];
ProductsearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productsearch',
        template: __webpack_require__(/*! raw-loader!./productsearch.page.html */ "./node_modules/raw-loader/index.js!./src/app/productsearch/productsearch.page.html"),
        styles: [__webpack_require__(/*! ./productsearch.page.scss */ "./src/app/productsearch/productsearch.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"]])
], ProductsearchPage);



/***/ })

}]);
//# sourceMappingURL=productsearch-productsearch-module-es2015.js.map