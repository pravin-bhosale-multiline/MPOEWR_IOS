(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["existingcustomer-existingcustomer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/existingcustomer/existingcustomer.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/existingcustomer/existingcustomer.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n     Existing Lead\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"RefreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\"><ion-icon name=\"refresh\"></ion-icon> \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  \n\n  <ion-grid fixed>\n\n   \n\n    <div>\n      <ion-card>\n        <ion-card-content>\n\n      <ion-row>\n        <ion-col>\n            <ion-item >\n              <ion-label  position=\"stacked\">Organization Activity</ion-label>\n              <ion-select name=\"selectedactivity\" #C [(ngModel)]=\"selectedactivity\" interface=\"popover\"  (ionChange)=\"exonActChange()\" multiple=\"false\" placeholder=\"Select Activity\">\n                <ion-select-option *ngFor=\"let activity of activitylist\" [value]=\"activity.id\">{{activity.name}}</ion-select-option>\n              </ion-select>\n              </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label  position=\"stacked\">Customer</ion-label>\n            <ion-select #C [(ngModel)]=\"selectedcustomer\" multiple=\"false\" placeholder=\"Select Customer\" (ionChange)=\"onChangeCustomer()\">\n              <ion-select-option *ngFor=\"let customer of orgAllcustomer\" [value]=\"customer.id\">{{ customer.scusNature==='F'?customer.sfirmName:customer.sfname +' ' +customer.slname}}  </ion-select-option>\n            </ion-select>\n            </ion-item>\n        </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col>\n    <ion-item>\n      <ion-label position=\"stacked\">Customer</ion-label>\n      <ionic-selectable placeholder=\"Select Customer\" [searchDebounce]=\"1000\"\n      [(ngModel)]=\"selectedcustomer\"\n        [items]=\"orgAllcustomer\"\n        itemValueField=\"id\"\n        itemTextField=\"sfname\" \n        [canSearch]=\"true\"\n        (onChange)=\"refChange($event)\"\n        (onClose)=\"onClose($event)\"\n        (onSearch)=\"custsearch($event)\">\n      </ionic-selectable>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label position=\"stacked\">Disapprove Remarks</ion-label>\n<br>            <!-- <ion-textarea value=\"{{Remarks}}\" disabled=\"true\"></ion-textarea> -->\n            <div style=\"overflow:auto;\">\n              {{Remarks}}\n            </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n\n    <ion-row>\n      <ion-col>\n          \n            <ion-button (click)=\"onEdit()\" [disabled]=\"!selectedcustomer || !selectedactivity\">\n                Edit\n              </ion-button>\n         \n      </ion-col>\n\n      <ion-col>\n    \n          <ion-button (click)=\"onCancel()\">\n              Cancel\n            </ion-button>\n       \n    </ion-col>\n  </ion-row>\n</ion-card-content>\n</ion-card>\n    </div>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/existingcustomer/existingcustomer.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/existingcustomer/existingcustomer.module.ts ***!
  \*************************************************************/
/*! exports provided: ExistingcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingcustomerPageModule", function() { return ExistingcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _existingcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./existingcustomer.page */ "./src/app/existingcustomer/existingcustomer.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








const routes = [
    {
        path: '',
        component: _existingcustomer_page__WEBPACK_IMPORTED_MODULE_6__["ExistingcustomerPage"]
    }
];
let ExistingcustomerPageModule = class ExistingcustomerPageModule {
};
ExistingcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_existingcustomer_page__WEBPACK_IMPORTED_MODULE_6__["ExistingcustomerPage"]]
    })
], ExistingcustomerPageModule);



/***/ }),

/***/ "./src/app/existingcustomer/existingcustomer.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/existingcustomer/existingcustomer.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aXN0aW5nY3VzdG9tZXIvZXhpc3RpbmdjdXN0b21lci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/existingcustomer/existingcustomer.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/existingcustomer/existingcustomer.page.ts ***!
  \***********************************************************/
/*! exports provided: ExistingcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingcustomerPage", function() { return ExistingcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");






let ExistingcustomerPage = class ExistingcustomerPage {
    constructor(loginauth, router, loadingController, common) {
        this.loginauth = loginauth;
        this.router = router;
        this.loadingController = loadingController;
        this.common = common;
        this.isLoading = false;
        this.Remarks = '';
        this.activitylist = [];
        this.selectedactivity = '';
    }
    ResetPage() {
        try {
            if (this.activitylist.length == 1) {
                this.selectedactivity = this.activitylist[0].id;
                this.selectedcustomer = null;
                this.orgAllcustomer = null;
                this.Remarks = '';
            }
            else {
                this.selectedactivity = '';
                this.selectedcustomer = null;
                this.orgAllcustomer = null;
                this.Remarks = '';
            }
        }
        catch (_a) { }
    }
    RefreshPage() {
        this.ResetPage();
    }
    ngOnInit() {
        this.ResetPage();
        // this.common.chkcache('existingcustomer');
        setTimeout(() => {
            this.Bindallactivity();
        }, 1500);
    }
    onClose(event) {
        event.component.searchText = "";
    }
    custsearch(event) {
        console.log("custsearch");
        if (event.text.length >= 3) {
            this.BindCustomer(event.text);
        }
        else {
            // this.orgAllcustomer = [];
            if (!!this.leastBusinessPartnerlist && this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                this.orgAllcustomer = [];
            }
            else {
            }
        }
    }
    BindCustomer(searchkey) {
        try {
            if (this.selectedactivity != '' && searchkey != '') {
                this.loginauth.getexistcustmerapi(this.selectedactivity, searchkey).subscribe(data => {
                    const response = data;
                    this.orgAllcustomer = response;
                }, error => {
                });
            }
            else if (this.selectedactivity != '' && searchkey == '') {
                //=============start for top 10================= 	
                console.log('leastBusinessPartnerlist');
                this.loginauth.getexistcustmerapi(this.selectedactivity, "").subscribe(data => {
                    const response = data;
                    this.leastBusinessPartnerlist = response;
                    if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                        this.orgAllcustomer = null;
                    }
                    else {
                        this.orgAllcustomer = response;
                    }
                    // 
                }, error => {
                });
                //=============end for top 10================= 
            }
        }
        catch (error) {
            // this.loadingDismiss();
        }
    }
    onChangeCustomer() {
        try {
            this.loadingPresent();
            this.Remarks = '';
            if (this.selectedcustomer != null) {
                this.varselectedcust = this.orgAllcustomer.find(item => item.id === this.selectedcustomer.id);
                this.Remarks = this.varselectedcust.disapproveremarks == null ? "" : this.varselectedcust.disapproveremarks;
            }
            this.loadingDismiss();
        }
        catch (error) {
            this.loadingDismiss();
        }
    }
    Bindallactivity() {
        try {
            this.activitylist[0] = this.loginauth.selectedactivity;
            setTimeout(() => {
                this.selectedactivity = this.activitylist[0].id;
            }, 500);
        }
        catch (error) {
            this.loadingDismiss();
        }
    }
    exonActChange() {
        console.log("exonActChange");
        this.BindCustomer("");
    }
    onEdit() {
        this.router.navigateByUrl('/newcustomer?selectedcustomer=' + this.selectedcustomer.id);
        this.ResetPage();
    }
    onCancel() {
        this.ResetPage();
    }
    refChange(event) {
        this.onChangeCustomer();
        event.component._searchText = "";
    }
    loadingPresent() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Please wait ...',
                spinner: 'circles'
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort laoding'));
                    }
                });
            });
        });
    }
    loadingDismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('loading dismissed'));
        });
    }
};
ExistingcustomerPage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] }
];
ExistingcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-existingcustomer',
        template: __webpack_require__(/*! raw-loader!./existingcustomer.page.html */ "./node_modules/raw-loader/index.js!./src/app/existingcustomer/existingcustomer.page.html"),
        styles: [__webpack_require__(/*! ./existingcustomer.page.scss */ "./src/app/existingcustomer/existingcustomer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"]])
], ExistingcustomerPage);



/***/ })

}]);
//# sourceMappingURL=existingcustomer-existingcustomer-module-es2015.js.map