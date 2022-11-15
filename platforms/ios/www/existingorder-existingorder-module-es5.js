(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["existingorder-existingorder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/existingorder/existingorder.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/existingorder/existingorder.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Draft Order\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"RefreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid fixed>\n    <div>\n      <ion-card>\n        <ion-card-content>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"stacked\">Organization Activity<span style=\"color:red!important\">*</span>\n                </ion-label>\n                <ion-select name=\"selectedactivity\" #C [(ngModel)]=\"selectedactivity\" (ionChange)=\"exonActChange()\"\n                  interface=\"popover\" multiple=\"false\" placeholder=\"Select Activity\">\n                  <ion-select-option *ngFor=\"let activity of activitylist\" [value]=\"activity.id\">{{activity.name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"stacked\">Customer<span style=\"color:red!important\">*</span></ion-label>\n                <ionic-selectable placeholder=\"Select Customer\" [searchDebounce]=\"1000\"\n                  [(ngModel)]=\"exselectedBusinessPartner\" [items]=\"exBusinessPartnerlist\" itemValueField=\"id\"\n                  itemTextField=\"name\" [canSearch]=\"true\" (onChange)=\"refChange($event)\"\n                  (onSearch)=\"custsearchChange($event)\" (onClose)=\"onCustomerClose($event)\">\n                </ionic-selectable>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label position=\"stacked\">Document No.<span style=\"color:red!important\">*</span></ion-label>\n                <ionic-selectable placeholder=\"Select Document No.\" [(ngModel)]=\"selecteddocumentno\"\n                  [items]=\"alldocument\" itemValueField=\"id\" itemTextField=\"documentno\" [canSearch]=\"true\"\n                  (onChange)=\"docChange($event)\">\n                </ionic-selectable>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-button (click)=\"onEdit()\"\n                [disabled]=\"!exselectedBusinessPartner || !selectedactivity || !selecteddocumentno\">\n                Edit\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button (click)=\"onCancel()\">\n                Cancel\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/existingorder/existingorder.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/existingorder/existingorder.module.ts ***!
  \*******************************************************/
/*! exports provided: ExistingorderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingorderPageModule", function() { return ExistingorderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _existingorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./existingorder.page */ "./src/app/existingorder/existingorder.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var routes = [
    {
        path: '',
        component: _existingorder_page__WEBPACK_IMPORTED_MODULE_6__["ExistingorderPage"]
    }
];
var ExistingorderPageModule = /** @class */ (function () {
    function ExistingorderPageModule() {
    }
    ExistingorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_existingorder_page__WEBPACK_IMPORTED_MODULE_6__["ExistingorderPage"]]
        })
    ], ExistingorderPageModule);
    return ExistingorderPageModule;
}());



/***/ }),

/***/ "./src/app/existingorder/existingorder.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/existingorder/existingorder.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4aXN0aW5nb3JkZXIvZXhpc3RpbmdvcmRlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/existingorder/existingorder.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/existingorder/existingorder.page.ts ***!
  \*****************************************************/
/*! exports provided: ExistingorderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingorderPage", function() { return ExistingorderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../neworder/neworder.service */ "./src/app/neworder/neworder.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");







var ExistingorderPage = /** @class */ (function () {
    function ExistingorderPage(loginauth, router, loadingController, commonfun, neworderservice) {
        this.loginauth = loginauth;
        this.router = router;
        this.loadingController = loadingController;
        this.commonfun = commonfun;
        this.neworderservice = neworderservice;
        this.Remarks = '';
        this.activitylist = [];
        this.selectedactivity = '';
        this.Issinglecust = false;
    }
    ExistingorderPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ResetPage();
        // this.commonfun.chkcache('existingorder');
        setTimeout(function () {
            _this.Bindallactivity();
        }, 1500);
    };
    ExistingorderPage.prototype.ngOnInit = function () {
        //this.ResetPage();
    };
    ExistingorderPage.prototype.checkcust = function () {
        var _this = this;
        try {
            if (this.loginauth.defaultprofile[0].mmstOrderusrtype == "CEB") {
                this.neworderservice.getexistcustmersearchapi("", this.selectedactivity).subscribe(function (data) {
                    // var response = data;
                    var response = data;
                    // 
                    _this.exBusinessPartnerlist = response;
                    _this.exleastBusinessPartnerlist = _this.exBusinessPartnerlist;
                    if (_this.exleastBusinessPartnerlist.length > _this.loginauth.minlistcount) {
                    }
                    else {
                        _this.dontClearDraftOrder = true;
                        _this.passexBusinessPartnerlist = _this.exBusinessPartnerlist;
                    }
                    //console.log("Draft Order Min Customer",this.exleastBusinessPartnerlist);
                    if (_this.exBusinessPartnerlist.length == 1) {
                        _this.exBusinessPartnerlist = response;
                        _this.passexBusinessPartnerlist = _this.exBusinessPartnerlist;
                        _this.exselectedBusinessPartner = _this.exBusinessPartnerlist[0];
                        _this.onChangeCustomer();
                        _this.Issinglecust = true;
                    }
                    else {
                        // this.exBusinessPartnerlist = null;
                        // this.passexBusinessPartnerlist = null;
                        _this.exselectedBusinessPartner = null;
                        _this.Issinglecust = false;
                    }
                });
                //
                // if (this.edtitdocid != undefined || this.edtitdocid != '') {
                //   this.editOrder(this.edtitdocid);
                // }
            }
        }
        catch (error) {
            //  console.log("Error:checkcust",error);
        }
    };
    ExistingorderPage.prototype.custsearchChange = function (event) {
        console.log("custsearchChange");
        if (event.text.length >= 3) {
            this.bindcustomer1api(event.text);
        }
        else {
            if (!!this.dontClearDraftOrder && this.dontClearDraftOrder == true) {
            }
            else {
                this.exBusinessPartnerlist = [];
            }
        }
    };
    ExistingorderPage.prototype.bindcustomer1api = function (strsearch) {
        var _this = this;
        try {
            console.log("bindcustomer1api");
            if (strsearch != "") {
                //strsearch="a";
                this.neworderservice.getexistcustmersearchapi(strsearch, this.selectedactivity).subscribe(function (data) {
                    var response = data;
                    // 
                    _this.exBusinessPartnerlist = response;
                    _this.passexBusinessPartnerlist = _this.exBusinessPartnerlist;
                });
            }
            else {
                // this.exBusinessPartnerlist=null;
                //=============start for top 10================= 
                if (this.exleastBusinessPartnerlist) {
                    if (this.exleastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                        this.exBusinessPartnerlist = null;
                    }
                    else {
                        this.exBusinessPartnerlist = this.exleastBusinessPartnerlist;
                        this.passexBusinessPartnerlist = this.exBusinessPartnerlist;
                        this.dontClearDraftOrder = true;
                    }
                }
                else {
                    this.neworderservice.getexistcustmersearchapi("", this.selectedactivity).subscribe(function (data) {
                        // var response = data;
                        var response = data;
                        _this.exleastBusinessPartnerlist = response;
                        if (_this.exleastBusinessPartnerlist) {
                            if (_this.exleastBusinessPartnerlist.length > _this.loginauth.minlistcount) {
                                _this.exBusinessPartnerlist = null;
                            }
                            else {
                                _this.exBusinessPartnerlist = _this.exleastBusinessPartnerlist;
                                _this.passexBusinessPartnerlist = _this.exBusinessPartnerlist;
                                _this.dontClearDraftOrder = true;
                            }
                        }
                    });
                }
                //=============end for top 10================= 
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    ExistingorderPage.prototype.onChangeCustomer = function () {
        try {
            this.Remarks = '';
            if (this.exselectedBusinessPartner != null) {
                this.Binddocument();
            }
        }
        catch (error) {
            // console.log("onChangeCustomer:Error",error);
        }
    };
    ExistingorderPage.prototype.Binddocument = function () {
        var _this = this;
        try {
            this.neworderservice.getdocumentidbycust(this.exselectedBusinessPartner.id).subscribe(function (data) {
                var response = data['response'];
                //  console.log("Doc Number", response);
                _this.alldocument = response.data.map(function (order) {
                    order.documentno = order.documentno + ' : ' + order.documentdate;
                    return order;
                });
                //documentdate,documentno
            }, function (error) {
                //  console.log("Binddocument:error",error);
            });
        }
        catch (error) {
            //  console.log("Binddocument:error",error);
        }
    };
    ExistingorderPage.prototype.Bindallactivity = function () {
        try {
            this.selectedcustomer = null;
            this.selecteddocumentno = null;
            this.activitylist[0] = this.loginauth.selectedactivity;
            this.selectedactivity = this.activitylist[0].id;
            this.exonActChange();
            //  this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
            //    this.activitylist = data;
            //    if(this.activitylist.length==1){
            //      this.selectedactivity=this.activitylist[0].id;
            //      this.exonActChange();
            //    }
            //   this.commonfun.loadingDismiss();
            //  },error=>{
            //    this.commonfun.loadingDismiss();
            //   }); 
            //  this.commonfun.loadingDismiss();
        }
        catch (error) {
            // console.log("error",error);
        }
    };
    ExistingorderPage.prototype.exonActChange = function () {
        this.exBusinessPartnerlist = null;
        this.exselectedBusinessPartner = null;
        this.alldocument = null;
        this.selecteddocumentno = null;
        this.checkcust();
    };
    ExistingorderPage.prototype.onEdit = function () {
        //  this.router.navigateByUrl('/neworder?edtitdocid='+this.selecteddocumentno.id);
        var navigationExtras = {
            state: {
                BusinessPartnerlist: this.passexBusinessPartnerlist,
                selectedBusinessPartner: this.exselectedBusinessPartner,
                selecteddocumentno: this.selecteddocumentno
            }
        };
        this.router.navigate(['neworder'], navigationExtras);
        this.ResetPage();
    };
    ExistingorderPage.prototype.docChange = function (event) {
        event.component._searchText = "";
    };
    ExistingorderPage.prototype.refChange = function (event) {
        this.onChangeCustomer();
        // 
        event.component._searchText = "";
    };
    ExistingorderPage.prototype.onCustomerClose = function (event) {
        event.component._searchText = "";
    };
    ExistingorderPage.prototype.ResetPage = function () {
        // this.selectedactivity='';
        this.selectedcustomer = null;
        // this.exBusinessPartnerlist=null;
        // this.exselectedBusinessPartner=null;
        this.selecteddocumentno = null;
        //
        if (this.activitylist.length != 1) {
            this.selectedactivity = '';
            this.exBusinessPartnerlist = null;
        }
        if (this.Issinglecust != true) {
            this.exselectedBusinessPartner = null;
            this.alldocument = null;
        }
    };
    ExistingorderPage.prototype.RefreshPage = function () {
        this.ResetPage();
    };
    ExistingorderPage.prototype.onCancel = function () {
        this.ResetPage();
    };
    ExistingorderPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"] },
        { type: _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_4__["NeworderService"] }
    ]; };
    ExistingorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-existingorder',
            template: __webpack_require__(/*! raw-loader!./existingorder.page.html */ "./node_modules/raw-loader/index.js!./src/app/existingorder/existingorder.page.html"),
            styles: [__webpack_require__(/*! ./existingorder.page.scss */ "./src/app/existingorder/existingorder.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"],
            _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_4__["NeworderService"]])
    ], ExistingorderPage);
    return ExistingorderPage;
}());



/***/ })

}]);
//# sourceMappingURL=existingorder-existingorder-module-es5.js.map