(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-job-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/job/job.page.html":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/job/job.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"joblist\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Job</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-item  *ngFor=\"let joba of jobassignment\">\n    <ion-card-content>\n    <ion-grid fix>\n        <ion-row>\n          <ion-col size=\"12\">\n              <ion-label position=\"stacked\">Branch</ion-label>\n              <ion-card-subtitle>{{joba.organization$_identifier}}</ion-card-subtitle>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n              <ion-col size=\"6\">\n                  <ion-label position=\"stacked\">Vendor/Customer/Sending Branch</ion-label>\n                  <ion-card-subtitle>{{joba.bpartner$_identifier}}</ion-card-subtitle>\n              </ion-col>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"6\">\n                <ion-label position=\"stacked\">Document No.</ion-label>\n                <ion-card-subtitle>{{joba.documentno}}</ion-card-subtitle>\n            </ion-col>\n            <ion-col size=\"6\">\n                <ion-label position=\"stacked\">Doument Date</ion-label>\n                <ion-card-subtitle>{{joba.documentdate| date: 'dd/MM/yyyy'}}</ion-card-subtitle>\n                \n            </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-text-right\">\n          <ion-col size=\"6\">\n              <ion-button (click)=\"onScan(joba)\">\n                  Start Scanning\n              </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n              <ion-button (click)=\"onCancel()\">\n                  Cancel\n              </ion-button>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-card-content>\n    </ion-item>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/job/job.module.ts":
/*!***********************************!*\
  !*** ./src/app/job/job.module.ts ***!
  \***********************************/
/*! exports provided: JobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPageModule", function() { return JobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _job_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job.page */ "./src/app/job/job.page.ts");







var routes = [
    {
        path: '',
        component: _job_page__WEBPACK_IMPORTED_MODULE_6__["JobPage"]
    }
];
var JobPageModule = /** @class */ (function () {
    function JobPageModule() {
    }
    JobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_job_page__WEBPACK_IMPORTED_MODULE_6__["JobPage"]]
        })
    ], JobPageModule);
    return JobPageModule;
}());



/***/ }),

/***/ "./src/app/job/job.page.scss":
/*!***********************************!*\
  !*** ./src/app/job/job.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/job/job.page.ts":
/*!*********************************!*\
  !*** ./src/app/job/job.page.ts ***!
  \*********************************/
/*! exports provided: JobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPage", function() { return JobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var JobPage = /** @class */ (function () {
    function JobPage(loginservc, datePipe, route, router, loadingController) {
        this.loginservc = loginservc;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
    }
    JobPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingController.create({
            duration: 5000,
            spinner: 'circles',
            message: 'Please Wait...'
        }).then(function (res) {
            res.present();
        });
        this.route.params.subscribe(function (params) {
            _this.jobid = params['jobid'];
            _this.loginservc.getjob(_this.jobid).subscribe(function (data) {
                var response = data['response'];
                _this.job = response['data'];
                _this.loginservc.getjobassignment(_this.job[0].mwmsJobassignment).subscribe(function (dataasgn) {
                    var response1 = dataasgn['response'];
                    _this.jobassignment = response1['data'];
                    _this.loadingController.dismiss();
                });
            });
        });
    };
    JobPage.prototype.onScan = function (joba) {
        this.router.navigate(['/jobdetails', this.jobid]);
    };
    JobPage.prototype.onCancel = function () {
        this.router.navigateByUrl('/joblist');
    };
    JobPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
    ]; };
    JobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! raw-loader!./job.page.html */ "./node_modules/raw-loader/index.js!./src/app/job/job.page.html"),
            styles: [__webpack_require__(/*! ./job.page.scss */ "./src/app/job/job.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], JobPage);
    return JobPage;
}());



/***/ })

}]);
//# sourceMappingURL=job-job-module-es5.js.map