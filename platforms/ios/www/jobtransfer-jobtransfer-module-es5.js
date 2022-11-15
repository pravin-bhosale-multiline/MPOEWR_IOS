(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobtransfer-jobtransfer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/jobtransfer/jobtransfer.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jobtransfer/jobtransfer.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Job Transfer</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"joblist\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <ion-grid fix>\n          <ion-row >\n              <ion-col >\n                <ion-item >\n                    <ion-label color=\"primary\" position=\"stacked\">Transfer To.</ion-label>\n                    <ion-select #C [ngModel]=\"selectedUser\" (ionChange)=\"onChange(C.value)\" multiple=\"false\" placeholder=\"Select User\">\n                      <ion-select-option *ngFor=\"let users of userlist\" [value]=\"users\">{{users.user$_identifier}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n                <ion-row>\n                <ion-col >\n                  <ion-item>\n                      <ion-label  position=\"stacked\">Reason</ion-label>\n                      <ion-input  type=\"text\" [(ngModel)]=\"sreason\" placeholder=\"Reason\" ></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n                <ion-row>\n                <ion-col >\n                  <ion-item>\n                      <ion-button (click)=\"onGo()\">\n                          Go\n                      </ion-button>\n                  </ion-item>\n              </ion-col>\n              </ion-row>\n              <ion-row>\n              <ion-col>\n                  <ion-text color=\"danger\">{{txterror}}</ion-text>\n              </ion-col>\n            </ion-row>\n      </ion-grid>\n </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/jobtransfer/jobtransfer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/jobtransfer/jobtransfer.module.ts ***!
  \***************************************************/
/*! exports provided: JobtransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobtransferPageModule", function() { return JobtransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobtransfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobtransfer.page */ "./src/app/jobtransfer/jobtransfer.page.ts");







var routes = [
    {
        path: '',
        component: _jobtransfer_page__WEBPACK_IMPORTED_MODULE_6__["JobtransferPage"]
    }
];
var JobtransferPageModule = /** @class */ (function () {
    function JobtransferPageModule() {
    }
    JobtransferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_jobtransfer_page__WEBPACK_IMPORTED_MODULE_6__["JobtransferPage"]]
        })
    ], JobtransferPageModule);
    return JobtransferPageModule;
}());



/***/ }),

/***/ "./src/app/jobtransfer/jobtransfer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/jobtransfer/jobtransfer.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYnRyYW5zZmVyL2pvYnRyYW5zZmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/jobtransfer/jobtransfer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/jobtransfer/jobtransfer.page.ts ***!
  \*************************************************/
/*! exports provided: JobtransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobtransferPage", function() { return JobtransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var JobtransferPage = /** @class */ (function () {
    function JobtransferPage(loginservc, route, router, loadingController) {
        this.loginservc = loginservc;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
    }
    JobtransferPage.prototype.ngOnInit = function () {
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
                _this.loginservc.getuserlist(_this.job[0].mwmsJobtype).subscribe(function (userdata) {
                    var response1 = userdata['response'];
                    _this.userlist = response1['data'];
                    _this.loadingController.dismiss();
                });
            });
        });
    };
    JobtransferPage.prototype.onChange = function (user) {
        this.selectedUser = user;
    };
    JobtransferPage.prototype.onGo = function () {
        var _this = this;
        if (this.sreason === undefined || this.selectedUser === undefined) {
            this.txterror = 'All Fields Are Mendetory.';
        }
        else {
            this.loginservc.transferJob(this.jobid, this.selectedUser.user, this.sreason).subscribe(function (data) {
                _this.txterror = 'Success.';
                _this.router.navigateByUrl('/joblist');
            });
        }
        // use this.selecteduser and job to transfer web service
    };
    JobtransferPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    JobtransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobtransfer',
            template: __webpack_require__(/*! raw-loader!./jobtransfer.page.html */ "./node_modules/raw-loader/index.js!./src/app/jobtransfer/jobtransfer.page.html"),
            styles: [__webpack_require__(/*! ./jobtransfer.page.scss */ "./src/app/jobtransfer/jobtransfer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], JobtransferPage);
    return JobtransferPage;
}());



/***/ })

}]);
//# sourceMappingURL=jobtransfer-jobtransfer-module-es5.js.map