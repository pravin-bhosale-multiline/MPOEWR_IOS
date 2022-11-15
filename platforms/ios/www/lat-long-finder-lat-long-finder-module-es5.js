(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lat-long-finder-lat-long-finder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/lat-long-finder/lat-long-finder.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lat-long-finder/lat-long-finder.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>lat-long-finder</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/lat-long-finder/lat-long-finder.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/lat-long-finder/lat-long-finder.module.ts ***!
  \***********************************************************/
/*! exports provided: LatLongFinderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLongFinderPageModule", function() { return LatLongFinderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lat_long_finder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lat-long-finder.page */ "./src/app/lat-long-finder/lat-long-finder.page.ts");







var routes = [
    {
        path: '',
        component: _lat_long_finder_page__WEBPACK_IMPORTED_MODULE_6__["LatLongFinderPage"]
    }
];
var LatLongFinderPageModule = /** @class */ (function () {
    function LatLongFinderPageModule() {
    }
    LatLongFinderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lat_long_finder_page__WEBPACK_IMPORTED_MODULE_6__["LatLongFinderPage"]]
        })
    ], LatLongFinderPageModule);
    return LatLongFinderPageModule;
}());



/***/ }),

/***/ "./src/app/lat-long-finder/lat-long-finder.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/lat-long-finder/lat-long-finder.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhdC1sb25nLWZpbmRlci9sYXQtbG9uZy1maW5kZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/lat-long-finder/lat-long-finder.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/lat-long-finder/lat-long-finder.page.ts ***!
  \*********************************************************/
/*! exports provided: LatLongFinderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatLongFinderPage", function() { return LatLongFinderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LatLongFinderPage = /** @class */ (function () {
    function LatLongFinderPage() {
    }
    LatLongFinderPage.prototype.ngOnInit = function () {
    };
    LatLongFinderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lat-long-finder',
            template: __webpack_require__(/*! raw-loader!./lat-long-finder.page.html */ "./node_modules/raw-loader/index.js!./src/app/lat-long-finder/lat-long-finder.page.html"),
            styles: [__webpack_require__(/*! ./lat-long-finder.page.scss */ "./src/app/lat-long-finder/lat-long-finder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LatLongFinderPage);
    return LatLongFinderPage;
}());



/***/ })

}]);
//# sourceMappingURL=lat-long-finder-lat-long-finder-module-es5.js.map