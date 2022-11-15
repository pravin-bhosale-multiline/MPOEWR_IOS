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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobtransfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobtransfer.page */ "./src/app/jobtransfer/jobtransfer.page.ts");







const routes = [
    {
        path: '',
        component: _jobtransfer_page__WEBPACK_IMPORTED_MODULE_6__["JobtransferPage"]
    }
];
let JobtransferPageModule = class JobtransferPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let JobtransferPage = class JobtransferPage {
    constructor(loginservc, route, router, loadingController) {
        this.loginservc = loginservc;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.loadingController.create({
            duration: 5000,
            spinner: 'circles',
            message: 'Please Wait...'
        }).then((res) => {
            res.present();
        });
        this.route.params.subscribe(params => {
            this.jobid = params['jobid'];
            this.loginservc.getjob(this.jobid).subscribe(data => {
                const response = data['response'];
                this.job = response['data'];
                this.loginservc.getuserlist(this.job[0].mwmsJobtype).subscribe(userdata => {
                    const response1 = userdata['response'];
                    this.userlist = response1['data'];
                    this.loadingController.dismiss();
                });
            });
        });
    }
    onChange(user) {
        this.selectedUser = user;
    }
    onGo() {
        if (this.sreason === undefined || this.selectedUser === undefined) {
            this.txterror = 'All Fields Are Mendetory.';
        }
        else {
            this.loginservc.transferJob(this.jobid, this.selectedUser.user, this.sreason).subscribe(data => {
                this.txterror = 'Success.';
                this.router.navigateByUrl('/joblist');
            });
        }
        // use this.selecteduser and job to transfer web service
    }
};
JobtransferPage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=jobtransfer-jobtransfer-module-es2015.js.map