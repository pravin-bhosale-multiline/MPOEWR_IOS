(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportcategory-reportcategory-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reportcategory/reportcategory.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reportcategory/reportcategory.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Report Category</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"profile\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n     \n          <ion-list>\n              <ion-item>\n                <ion-label color=\"primary\" position=\"stacked\">Report Category</ion-label>\n                <ion-select #C [ngModel]=\"selectedReportcat\" (ionChange)=\"onChangeReportcat(C.value)\" multiple=\"false\" placeholder=\"Select Report Category\" interface=\"popover\">\n                  <ion-select-option *ngFor=\"let rptcat of reportcatlist\" [value]=\"rptcat\">{{rptcat._identifier}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-label color=\"primary\" position=\"stacked\">Sub Category</ion-label>\n                  <ion-select #F [ngModel]=\"selectedSubCat\" (ionChange)=\"onChangeSubcat(F.value)\" multiple=\"false\" placeholder=\"Select Sub Category\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let sucat of reportsubcatlist\" [value]=\"sucat\">{{sucat._identifier}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              <ion-item>\n                  <ion-label color=\"primary\" position=\"stacked\">Report</ion-label>\n                  <ion-select class=\"ion-text-wrap select-text\" #W [ngModel]=\"selectedreport\" (ionChange)=\"onChangeReport(W.value)\" multiple=\"false\" placeholder=\"Select Report\" interface=\"popover\">\n                    <ion-select-option *ngFor=\"let report of reportlist\" [value]=\"report\">{{report._identifier}}</ion-select-option>\n                  </ion-select>\n              </ion-item>\n            </ion-list>\n        \n        <ion-row>\n          <ion-col class=\"ion-text-right\">\n                  <ion-button (click)=\"onClick()\">\n                        Apply\n                    </ion-button>\n          </ion-col>\n        </ion-row>\n       \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/reportcategory/reportcategory-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reportcategory/reportcategory-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ReportcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcategoryPageRoutingModule", function() { return ReportcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reportcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportcategory.page */ "./src/app/reportcategory/reportcategory.page.ts");




var routes = [
    {
        path: '',
        component: _reportcategory_page__WEBPACK_IMPORTED_MODULE_3__["ReportcategoryPage"]
    }
];
var ReportcategoryPageRoutingModule = /** @class */ (function () {
    function ReportcategoryPageRoutingModule() {
    }
    ReportcategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReportcategoryPageRoutingModule);
    return ReportcategoryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/reportcategory/reportcategory.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reportcategory/reportcategory.module.ts ***!
  \*********************************************************/
/*! exports provided: ReportcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcategoryPageModule", function() { return ReportcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportcategory-routing.module */ "./src/app/reportcategory/reportcategory-routing.module.ts");
/* harmony import */ var _reportcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportcategory.page */ "./src/app/reportcategory/reportcategory.page.ts");







var ReportcategoryPageModule = /** @class */ (function () {
    function ReportcategoryPageModule() {
    }
    ReportcategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _reportcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportcategoryPageRoutingModule"]
            ],
            declarations: [_reportcategory_page__WEBPACK_IMPORTED_MODULE_6__["ReportcategoryPage"]]
        })
    ], ReportcategoryPageModule);
    return ReportcategoryPageModule;
}());



/***/ }),

/***/ "./src/app/reportcategory/reportcategory.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reportcategory/reportcategory.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGNhdGVnb3J5L3JlcG9ydGNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/reportcategory/reportcategory.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reportcategory/reportcategory.page.ts ***!
  \*******************************************************/
/*! exports provided: ReportcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportcategoryPage", function() { return ReportcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ReportcategoryPage = /** @class */ (function () {
    function ReportcategoryPage(loginservc, router, storage) {
        this.loginservc = loginservc;
        this.router = router;
        this.storage = storage;
        this.TAG = "Report Category Page";
    }
    ReportcategoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.selectedReportcat = undefined;
        this.selectedSubCat = undefined;
        this.selectedreport = undefined;
        this.loginservc.getreportdet(this.loginservc.selectedprof.role, 'category', '', '').subscribe(function (data) {
            _this.reportcatlist = data['data'];
            if (_this.reportcatlist.length === 1) {
                _this.selectedReportcat = _this.reportcatlist[0];
            }
            // console.log(this.TAG,"getreportdet",this.reportcatlist);
        });
    };
    ReportcategoryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loginservc.getreportdet(this.loginservc.selectedprof.role, 'category', '', '').subscribe(function (data) {
            _this.reportcatlist = data['data'];
            if (_this.reportcatlist.length === 1) {
                _this.selectedReportcat = _this.reportcatlist[0];
            }
            // console.log(this.TAG,"getreportdet",this.reportcatlist);
        });
    };
    ReportcategoryPage.prototype.onChangeReportcat = function (reportcat) {
        var _this = this;
        this.selectedReportcat = reportcat;
        this.loginservc.getreportdet(this.loginservc.selectedprof.role, 'subcategory', this.selectedReportcat.id, '').subscribe(function (data) {
            _this.reportsubcatlist = data['data'];
            if (_this.reportsubcatlist.length === 1) {
                _this.selectedSubCat = _this.reportsubcatlist[0];
            }
            //console.log(this.TAG,"onChangeReportcat",this.reportsubcatlist);
            // this.selectedSubCat=undefined;
            // this.selectedreport=undefined;
        });
    };
    ReportcategoryPage.prototype.onChangeSubcat = function (reportsubcat) {
        var _this = this;
        this.selectedSubCat = reportsubcat;
        this.loginservc.getreportdet(this.loginservc.selectedprof.role, 'report', '', this.selectedSubCat.id).subscribe(function (data) {
            _this.reportlist = data['data'];
            if (_this.reportlist.length === 1) {
                _this.selectedreport = _this.reportlist[0];
            }
            //  console.log(this.TAG,"onChangeSubcat",this.reportlist);
        });
    };
    ReportcategoryPage.prototype.onChangeReport = function (report) {
        this.selectedreport = report;
        // console.log(this.TAG,"onChangeReport",this.selectedreport);
    };
    ReportcategoryPage.prototype.onClick = function () {
        this.loginservc.reportjson = {};
        this.loginservc.selectedreport = this.selectedreport;
        this.router.navigate(['/report', this.selectedreport.id]);
    };
    ReportcategoryPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    ReportcategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportcategory',
            template: __webpack_require__(/*! raw-loader!./reportcategory.page.html */ "./node_modules/raw-loader/index.js!./src/app/reportcategory/reportcategory.page.html"),
            styles: [__webpack_require__(/*! ./reportcategory.page.scss */ "./src/app/reportcategory/reportcategory.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ReportcategoryPage);
    return ReportcategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=reportcategory-reportcategory-module-es5.js.map