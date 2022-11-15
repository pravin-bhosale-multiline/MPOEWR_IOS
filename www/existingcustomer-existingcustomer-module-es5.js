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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _existingcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./existingcustomer.page */ "./src/app/existingcustomer/existingcustomer.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var routes = [
    {
        path: '',
        component: _existingcustomer_page__WEBPACK_IMPORTED_MODULE_6__["ExistingcustomerPage"]
    }
];
var ExistingcustomerPageModule = /** @class */ (function () {
    function ExistingcustomerPageModule() {
    }
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
    return ExistingcustomerPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");






var ExistingcustomerPage = /** @class */ (function () {
    function ExistingcustomerPage(loginauth, router, loadingController, common) {
        this.loginauth = loginauth;
        this.router = router;
        this.loadingController = loadingController;
        this.common = common;
        this.isLoading = false;
        this.Remarks = '';
        this.activitylist = [];
        this.selectedactivity = '';
    }
    ExistingcustomerPage.prototype.ResetPage = function () {
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
    };
    ExistingcustomerPage.prototype.RefreshPage = function () {
        this.ResetPage();
    };
    ExistingcustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.ResetPage();
        // this.common.chkcache('existingcustomer');
        setTimeout(function () {
            _this.Bindallactivity();
        }, 1500);
    };
    ExistingcustomerPage.prototype.onClose = function (event) {
        event.component.searchText = "";
    };
    ExistingcustomerPage.prototype.custsearch = function (event) {
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
    };
    ExistingcustomerPage.prototype.BindCustomer = function (searchkey) {
        var _this = this;
        try {
            if (this.selectedactivity != '' && searchkey != '') {
                this.loginauth.getexistcustmerapi(this.selectedactivity, searchkey).subscribe(function (data) {
                    var response = data;
                    _this.orgAllcustomer = response;
                }, function (error) {
                });
            }
            else if (this.selectedactivity != '' && searchkey == '') {
                //=============start for top 10================= 	
                console.log('leastBusinessPartnerlist');
                this.loginauth.getexistcustmerapi(this.selectedactivity, "").subscribe(function (data) {
                    var response = data;
                    _this.leastBusinessPartnerlist = response;
                    if (_this.leastBusinessPartnerlist.length > _this.loginauth.minlistcount) {
                        _this.orgAllcustomer = null;
                    }
                    else {
                        _this.orgAllcustomer = response;
                    }
                    // 
                }, function (error) {
                });
                //=============end for top 10================= 
            }
        }
        catch (error) {
            // this.loadingDismiss();
        }
    };
    ExistingcustomerPage.prototype.onChangeCustomer = function () {
        var _this = this;
        try {
            this.loadingPresent();
            this.Remarks = '';
            if (this.selectedcustomer != null) {
                this.varselectedcust = this.orgAllcustomer.find(function (item) { return item.id === _this.selectedcustomer.id; });
                this.Remarks = this.varselectedcust.disapproveremarks == null ? "" : this.varselectedcust.disapproveremarks;
            }
            this.loadingDismiss();
        }
        catch (error) {
            this.loadingDismiss();
        }
    };
    ExistingcustomerPage.prototype.Bindallactivity = function () {
        var _this = this;
        try {
            this.activitylist[0] = this.loginauth.selectedactivity;
            setTimeout(function () {
                _this.selectedactivity = _this.activitylist[0].id;
            }, 500);
        }
        catch (error) {
            this.loadingDismiss();
        }
    };
    ExistingcustomerPage.prototype.exonActChange = function () {
        console.log("exonActChange");
        this.BindCustomer("");
    };
    ExistingcustomerPage.prototype.onEdit = function () {
        this.router.navigateByUrl('/newcustomer?selectedcustomer=' + this.selectedcustomer.id);
        this.ResetPage();
    };
    ExistingcustomerPage.prototype.onCancel = function () {
        this.ResetPage();
    };
    ExistingcustomerPage.prototype.refChange = function (event) {
        this.onChangeCustomer();
        event.component._searchText = "";
    };
    ExistingcustomerPage.prototype.loadingPresent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait ...',
                                spinner: 'circles'
                            }).then(function (a) {
                                a.present().then(function () {
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () {
                                            return console.log('abort laoding');
                                        });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExistingcustomerPage.prototype.loadingDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController.dismiss().then(function () {
                                return console.log('loading dismissed');
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExistingcustomerPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] }
    ]; };
    ExistingcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-existingcustomer',
            template: __webpack_require__(/*! raw-loader!./existingcustomer.page.html */ "./node_modules/raw-loader/index.js!./src/app/existingcustomer/existingcustomer.page.html"),
            styles: [__webpack_require__(/*! ./existingcustomer.page.scss */ "./src/app/existingcustomer/existingcustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"]])
    ], ExistingcustomerPage);
    return ExistingcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=existingcustomer-existingcustomer-module-es5.js.map