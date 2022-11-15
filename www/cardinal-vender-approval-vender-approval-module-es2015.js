(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cardinal-vender-approval-vender-approval-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cardinal/vender-approval/vender-approval.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cardinal/vender-approval/vender-approval.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Compliant Acceptance\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"refreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-card class=\"card-custom\" *ngFor=\"let service of venderApprovalList\" (click)=\"detailsClick(service)\" padding>\n     \n      <ion-row>\n        <ion-col size=\"4\">\n         <ion-label class=\"comname-custom\">\n           {{service.nameofcomplainer}}\n         </ion-label>\n        </ion-col>\n        <ion-col size=\"4\" text-left>\n         <ion-label>\n           {{service.complaintdate | date:'dd-MMM-yyyy'}}\n         </ion-label>\n        </ion-col>\n        <ion-col size=\"4\" text-end>\n         <ion-label class=\"doc-custom\">\n           {{service.doctype[0].name}}\n         </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"10\">\n         <ion-label class=\"complain-custom\">\n           {{service.complaintno}}\n         </ion-label>\n        </ion-col>\n        <ion-col size=\"2\" text-end>\n          <div class=\"arrow-col\">\n           <ion-icon name=\"arrow-forward\" class=\"arrow-custom\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cardinal/vender-approval/vender-approval.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/cardinal/vender-approval/vender-approval.module.ts ***!
  \********************************************************************/
/*! exports provided: VenderApprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderApprovalPageModule", function() { return VenderApprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vender_approval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vender-approval.page */ "./src/app/cardinal/vender-approval/vender-approval.page.ts");







const routes = [
    {
        path: '',
        component: _vender_approval_page__WEBPACK_IMPORTED_MODULE_6__["VenderApprovalPage"]
    }
];
let VenderApprovalPageModule = class VenderApprovalPageModule {
};
VenderApprovalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vender_approval_page__WEBPACK_IMPORTED_MODULE_6__["VenderApprovalPage"]]
    })
], VenderApprovalPageModule);



/***/ }),

/***/ "./src/app/cardinal/vender-approval/vender-approval.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/cardinal/vender-approval/vender-approval.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrow-custom {\n  background-color: lightgrey;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.doc-custom {\n  background-color: #C8E6C9;\n  padding: 5px;\n  border-radius: 5px;\n  color: #1B5E20;\n}\n\n.card-custom {\n  padding-left: 2px !important;\n  padding-right: 0px !important;\n  padding-top: 8px !important;\n  padding-bottom: 0% !important;\n}\n\n.arrow-col {\n  margin-top: 8px;\n}\n\n.complain-custom {\n  font-weight: bolder;\n  font-size: large;\n}\n\n.comname-custom {\n  color: darkgoldenrod;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9jYXJkaW5hbC92ZW5kZXItYXBwcm92YWwvdmVuZGVyLWFwcHJvdmFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FyZGluYWwvdmVuZGVyLWFwcHJvdmFsL3ZlbmRlci1hcHByb3ZhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksb0JBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2NhcmRpbmFsL3ZlbmRlci1hcHByb3ZhbC92ZW5kZXItYXBwcm92YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycm93LWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5kb2MtY3VzdG9te1xuICAgIGJhY2tncm91bmQtY29sb3I6I0M4RTZDOTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjMUI1RTIwO1xufVxuLmNhcmQtY3VzdG9te1xuICAgIHBhZGRpbmctbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwJSAhaW1wb3J0YW50O1xufVxuLmFycm93LWNvbHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uY29tcGxhaW4tY3VzdG9te1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cbi5jb21uYW1lLWN1c3RvbXtcbiAgICBjb2xvcjogZGFya2dvbGRlbnJvZDtcbiAgIC8vIGZvbnQtc2l6ZTogaW5pdGlhbDtcbn0iLCIuYXJyb3ctY3VzdG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmRvYy1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFNkM5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMxQjVFMjA7XG59XG5cbi5jYXJkLWN1c3RvbSB7XG4gIHBhZGRpbmctbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwJSAhaW1wb3J0YW50O1xufVxuXG4uYXJyb3ctY29sIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uY29tcGxhaW4tY3VzdG9tIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmNvbW5hbWUtY3VzdG9tIHtcbiAgY29sb3I6IGRhcmtnb2xkZW5yb2Q7XG59Il19 */"

/***/ }),

/***/ "./src/app/cardinal/vender-approval/vender-approval.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/cardinal/vender-approval/vender-approval.page.ts ***!
  \******************************************************************/
/*! exports provided: VenderApprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderApprovalPage", function() { return VenderApprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vender_approval_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vender-approval.service */ "./src/app/cardinal/vender-approval/vender-approval.service.ts");




let VenderApprovalPage = class VenderApprovalPage {
    constructor(venderApprovalService, router) {
        this.venderApprovalService = venderApprovalService;
        this.router = router;
        this.TAG = "VenderApprovalPage";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.venderApprovalList = yield (this.venderApprovalService.getVenderApprovalList()).toPromise();
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.venderApprovalList = yield (this.venderApprovalService.getVenderApprovalList()).toPromise();
        });
    }
    refreshPage() {
        try {
            this.ionViewWillEnter();
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    detailsClick(service) {
        try {
            let navigationExtras = { queryParams: {
                    special: JSON.stringify(service)
                } };
            this.router.navigate(['vender-approval-details'], navigationExtras);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
};
VenderApprovalPage.ctorParameters = () => [
    { type: _vender_approval_service__WEBPACK_IMPORTED_MODULE_3__["VenderApprovalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VenderApprovalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vender-approval',
        template: __webpack_require__(/*! raw-loader!./vender-approval.page.html */ "./node_modules/raw-loader/index.js!./src/app/cardinal/vender-approval/vender-approval.page.html"),
        styles: [__webpack_require__(/*! ./vender-approval.page.scss */ "./src/app/cardinal/vender-approval/vender-approval.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_vender_approval_service__WEBPACK_IMPORTED_MODULE_3__["VenderApprovalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], VenderApprovalPage);



/***/ })

}]);
//# sourceMappingURL=cardinal-vender-approval-vender-approval-module-es2015.js.map