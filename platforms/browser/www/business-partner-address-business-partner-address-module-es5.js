(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-partner-address-business-partner-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/business-partner-address/business-partner-address.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/business-partner-address/business-partner-address.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: small;\">\n      Business Partner Address\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n  <form [formGroup]=\"formaddr\" (ngSubmit)=\"onSaveAddress(formaddr.value)\">\n    <ion-grid fixed>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <h5 ion-text class=\"text-primary\">\n            <ion-icon name=\"person\"></ion-icon> Customer Detail :\n          </h5>\n        </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n        <ion-col>\n            <ion-item >\n              <ion-label  position=\"stacked\">Organization Activity</ion-label>\n              <ion-select [ngModelOptions]=\"{standalone: true}\" name=\"selectedactivity\" #C [(ngModel)]=\"selectedactivity\" interface=\"popover\"  (ionChange)=\"exonActChange()\" multiple=\"false\" placeholder=\"Select Activity\">\n                <ion-select-option *ngFor=\"let activity of activitylist\" [value]=\"activity.id\">{{activity.name}}</ion-select-option>\n              </ion-select>\n              </ion-item>\n        </ion-col>\n      </ion-row> -->\n\n      \n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Customer<span style=\"color:red!important\">*</span></ion-label>\n            <ionic-selectable placeholder=\"Select Customer\"\n            [formControl]=\"formaddr.controls['selectedBusinessPartner']\"\n            [items]=\"BusinessPartnerlist\" \n            itemValueField=\"id\" \n            itemTextField=\"sfname\" \n            [canSearch]=\"true\"\n            (onChange)=\"oncustchange($event)\"\n            (onSearch)=\"custsearchChange($event)\"\n            (onClose)=\"onCancel($event)\"\n            >\n            </ionic-selectable>\n              <!-- (onSearch)=\"custsearchChange($event)\" -->\n          </ion-item>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.selectedBusinessPartner\">\n              <div *ngIf=\"formaddr.get('selectedBusinessPartner').hasError(validation.type) && formaddr.get('selectedBusinessPartner').touched\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <h5 ion-text class=\"text-primary\">\n            <ion-icon name=\"navigate\"></ion-icon>  Address:\n          </h5>\n        </ion-col>\n        <ion-col>\n          <ion-fab-button size=\"small\" float-right (click)=\"onAddAddress()\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-item *ngFor=\"let item of cartaddress; index as i\"  text-wrap style=\"font-size: small; max-width: 100% !important;\">\n        <!-- <ion-content scrollX=\"true\"> -->\n          <div style=\"width: 100%;\" (click)=\"toggleaddress(item)\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label style=\"white-space: normal;\">\n          <ion-icon *ngIf=\"!item.MainProductQty\" style=\"color: springgreen;\" name=\"locate\"></ion-icon>\n              {{ item._identifier }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col nowrap>\n            <div *ngIf=\"item.show\">\n              <ion-label style=\"font-size: small;\">Billing Address: <span *ngIf=\"!item.billadd\">No</span><span *ngIf=\"item.billadd\">Yes</span></ion-label>\n              <!-- <ion-checkbox slot=\"end\" [(ngModel)]=\"item.billadd\"></ion-checkbox> -->\n\n              <ion-label style=\"font-size: small;\">Shipping Address: <span *ngIf=\"!item.shipadd\">No</span><span *ngIf=\"item.shipadd\">Yes</span></ion-label>\n              <!-- <ion-checkbox slot=\"end\" [(ngModel)]=\"item.shipadd\"></ion-checkbox> -->\n\n              <ion-label style=\"font-size: small;\">Compliance Type Number: {{item.gstno}}</ion-label>\n              <ion-label style=\"font-size: small;\">Active: <span *ngIf=\"!item.isactive\">No</span><span *ngIf=\"item.isactive\">Yes</span></ion-label>\n           \n            </div>\n          </ion-col>\n         \n        </ion-row>\n      </div>\n        <!-- </ion-content> -->\n      </ion-item>\n\n\n    </ion-card-content>\n  </ion-card>\n\n \n</ion-grid>\n</form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/business-partner-address/business-partner-address.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/business-partner-address/business-partner-address.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BusinessPartnerAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPartnerAddressPageModule", function() { return BusinessPartnerAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _business_partner_address_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./business-partner-address.page */ "./src/app/business-partner-address/business-partner-address.page.ts");








var routes = [
    {
        path: '',
        component: _business_partner_address_page__WEBPACK_IMPORTED_MODULE_7__["BusinessPartnerAddressPage"]
    }
];
var BusinessPartnerAddressPageModule = /** @class */ (function () {
    function BusinessPartnerAddressPageModule() {
    }
    BusinessPartnerAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_business_partner_address_page__WEBPACK_IMPORTED_MODULE_7__["BusinessPartnerAddressPage"]]
        })
    ], BusinessPartnerAddressPageModule);
    return BusinessPartnerAddressPageModule;
}());



/***/ }),

/***/ "./src/app/business-partner-address/business-partner-address.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/business-partner-address/business-partner-address.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n/* Hide ion-content scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\nh5 ion-icon {\n  color: lightcoral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9idXNpbmVzcy1wYXJ0bmVyLWFkZHJlc3MvYnVzaW5lc3MtcGFydG5lci1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYnVzaW5lc3MtcGFydG5lci1hZGRyZXNzL2J1c2luZXNzLXBhcnRuZXItYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREVJO0VBQ0UscUJBQUE7QUNBTjtBREdJO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FETUU7RUFDRSxZQUFBO0FDSEo7QURNRSwrQkFBQTtBQUNBO0VBQ0UsYUFBQTtBQ0hKO0FETUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FESUk7RUFDRSxpQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvYnVzaW5lc3MtcGFydG5lci1hZGRyZXNzL2J1c2luZXNzLXBhcnRuZXItYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgLy8gaGVpZ2h0OiAxMjBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuLy8gd2lkdGg6MTAwJTtcbiAgICAuc2Nyb2xsLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5zZWxlY3RhYmxlLWljb257XG4gICAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIGltZ3tcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gIH1cblxuICBpb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJde1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC8qIEhpZGUgaW9uLWNvbnRlbnQgc2Nyb2xsYmFyICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgaDV7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBjb2xvcjogZGFya2N5YW47XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBpb24taWNvbntcbiAgICAgIGNvbG9yOiBsaWdodGNvcmFsO1xuICAgIH1cblxuICB9XG4gIFxuIiwiaW9uLXNjcm9sbFtzY3JvbGxYXSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuaW9uLXNjcm9sbFtzY3JvbGxYXSAuc2Nyb2xsLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zZWxlY3RhYmxlLWljb24ge1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIGlvbi1hdmF0YXIgaW1nIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJdIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4vKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmg1IHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6IGRhcmtjeWFuO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaDUgaW9uLWljb24ge1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/business-partner-address/business-partner-address.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/business-partner-address/business-partner-address.page.ts ***!
  \***************************************************************************/
/*! exports provided: BusinessPartnerAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPartnerAddressPage", function() { return BusinessPartnerAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../neworder/neworder.service */ "./src/app/neworder/neworder.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_partner_address_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./business-partner-address.service */ "./src/app/business-partner-address/business-partner-address.service.ts");








var BusinessPartnerAddressPage = /** @class */ (function () {
    function BusinessPartnerAddressPage(fb, loginauth, neworderservice, commonfun, router, route, businesspartneraddressservice) {
        var _this = this;
        this.fb = fb;
        this.loginauth = loginauth;
        this.neworderservice = neworderservice;
        this.commonfun = commonfun;
        this.router = router;
        this.route = route;
        this.businesspartneraddressservice = businesspartneraddressservice;
        this.selectedactivity = '';
        this.validation_messages = {
            'selectedBusinessPartner': [
                { type: 'required', message: '' }
            ]
        };
        this.formaddr = this.fb.group({
            selectedBusinessPartner: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        route.params.subscribe(function (val) {
            _this.getparam();
        });
    }
    BusinessPartnerAddressPage.prototype.ngOnInit = function () {
        this.Resetpage();
        //this.commonfun.chkcache('business-partner-address');
        setTimeout(function () {
            // this.Bindallactivity();
        }, 1500);
    };
    BusinessPartnerAddressPage.prototype.getparam = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state.reset) {
                _this.Resetpage();
            }
        });
    };
    BusinessPartnerAddressPage.prototype.oncustchange = function (event) {
        this.getaddressbycustid(event.value.id);
        event.component._searchText = "";
    };
    BusinessPartnerAddressPage.prototype.custsearchChange = function (event) {
        var custsearchtext = event.text; //.replace(/\s/g,'');
        if (custsearchtext.length % 3 == 0) {
            this.bindcustomerapi(custsearchtext);
        }
    };
    BusinessPartnerAddressPage.prototype.onCancel = function (event) {
        event.component._searchText = "";
    };
    BusinessPartnerAddressPage.prototype.getaddressbycustid = function (bp_id) {
        var _this = this;
        try {
            this.businesspartneraddressservice.getaddressbycustid(bp_id).subscribe(function (data) {
                _this.ComplianceList = data["ComplianceList"];
                _this.cartaddress = data["Listofadd"];
            }, function (error) {
                _this.commonfun.presentAlert("Message", "Error", error.error.text);
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    BusinessPartnerAddressPage.prototype.toggleaddress = function (selectedcartproduct) {
        if (selectedcartproduct.show == false) {
            for (var i = 0; i < this.cartaddress.length; i++) {
                if (this.cartaddress[i].show === "true") {
                    this.cartaddress[i].show = "false";
                }
            }
        }
        selectedcartproduct.show = !selectedcartproduct.show;
    };
    BusinessPartnerAddressPage.prototype.onAddAddress = function () {
        try {
            if ((this.formaddr.controls["selectedBusinessPartner"].value != undefined && this.formaddr.controls["selectedBusinessPartner"].value != null) && this.formaddr.controls["selectedBusinessPartner"].value != "") {
                var navigationExtras = {
                    state: {
                        ComplianceList: this.ComplianceList,
                        businessPartner: this.formaddr.controls["selectedBusinessPartner"].value,
                        cartaddress: this.cartaddress
                    }
                };
                this.router.navigate(['addedit-business-partner-address'], navigationExtras);
            }
            else {
                this.commonfun.presentAlert("Message", "Alert", "Please select customer.");
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    BusinessPartnerAddressPage.prototype.onSaveAddress = function (fvalue) {
    };
    BusinessPartnerAddressPage.prototype.bindcustomerapi = function (strsearch) {
        var _this = this;
        try {
            if (strsearch != "") {
                this.businesspartneraddressservice.getexistcustmerapi(strsearch).subscribe(function (data) {
                    var response = data;
                    _this.BusinessPartnerlist = response;
                });
            }
            else {
                // this.BusinessPartnerlist=null;
                //=============start for top 10================= 
                this.businesspartneraddressservice.getexistcustmerapi("").subscribe(function (data) {
                    var response = data;
                    // this.BusinessPartnerlist = response;
                    _this.leastBusinessPartnerlist = response;
                    if (_this.leastBusinessPartnerlist.length > _this.loginauth.minlistcount) {
                        _this.BusinessPartnerlist = null;
                    }
                    else {
                        _this.BusinessPartnerlist = response;
                    }
                });
                //=============end for top 10================= 
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
            // this.commonfun.loadingDismiss();
        }
    };
    BusinessPartnerAddressPage.prototype.Bindallactivity = function () {
        var _this = this;
        try {
            this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(function (data) {
                _this.activitylist = data;
                if (_this.activitylist.length == 1) {
                    setTimeout(function () {
                        _this.selectedactivity = _this.activitylist[0].id;
                    }, 500);
                }
                //  this.loadingDismiss();
            }, function (error) {
                //.. this.loadingDismiss();
            });
        }
        catch (error) {
            //this.loadingDismiss();
        }
    };
    BusinessPartnerAddressPage.prototype.Resetpage = function () {
        try {
            this.BusinessPartnerlist = null;
            this.ComplianceList = null;
            this.BusinessPartnerlist = null;
            this.cartaddress = null;
            this.selectedactivity = '';
            this.formaddr.controls['selectedBusinessPartner'].setValue(null);
            this.formaddr.controls['selectedBusinessPartner'].clearValidators();
            if (this.activitylist.length == 1) {
                this.selectedactivity = this.activitylist[0].id;
            }
            else {
                this.selectedactivity = '';
            }
        }
        catch (_a) { }
    };
    BusinessPartnerAddressPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
        { type: _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_3__["NeworderService"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _business_partner_address_service__WEBPACK_IMPORTED_MODULE_7__["BusinessPartnerAddressService"] }
    ]; };
    BusinessPartnerAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-business-partner-address',
            template: __webpack_require__(/*! raw-loader!./business-partner-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/business-partner-address/business-partner-address.page.html"),
            styles: [__webpack_require__(/*! ./business-partner-address.page.scss */ "./src/app/business-partner-address/business-partner-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"],
            _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_3__["NeworderService"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _business_partner_address_service__WEBPACK_IMPORTED_MODULE_7__["BusinessPartnerAddressService"]])
    ], BusinessPartnerAddressPage);
    return BusinessPartnerAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=business-partner-address-business-partner-address-module-es5.js.map