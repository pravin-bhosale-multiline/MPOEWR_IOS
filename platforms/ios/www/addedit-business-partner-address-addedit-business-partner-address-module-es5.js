(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addedit-business-partner-address-addedit-business-partner-address-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addedit-business-partner-address/addedit-business-partner-address.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addedit-business-partner-address/addedit-business-partner-address.page.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Add New Address\n    </ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSaveDraft(form.value)\">\n    <ion-grid>\n      <ion-card>\n        <ion-card-header style=\"background: #FFCC80;\">\n          Address :\n        </ion-card-header>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label position=\"floating\">Name<span style=\"color:red!important\">*</span></ion-label>\n              <ion-input [formControl]=\"form.controls['name']\" type=\"text\" [disabled]=\"samename\"></ion-input>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.name\">\n                <div *ngIf=\"form.get('name').hasError(validation.type) && form.get('name').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label>Name same as Customer</ion-label>\n              <ion-checkbox slot=\"end\" [formControl]=\"form.controls['NamesameasCustome']\"\n                (ionChange)=\"onchangeNamesameasCustome()\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label>Billing</ion-label>\n              <ion-checkbox slot=\"end\" [formControl]=\"form.controls['isbill']\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label>Shipping</ion-label>\n              <ion-checkbox slot=\"end\" [formControl]=\"form.controls['isShip']\" (ionChange)=\"onShippingChange($event)\">\n              </ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"showPreferredTransportControl\">\n            <ion-item>\n              <ion-label position=\"stacked\">Customer Preferred Transport<span style=\"color:red!important\">*</span>\n              </ion-label>\n              <ion-select [(ngModel)]=\"selectedPreferredTransport\" [formControl]=\"form.controls['preferredCustomerTransport']\" interface=\"popover\"\n                (ionChange)=\"onCusPreTransChange()\" multiple=\"false\" placeholder=\"Select Activity\">\n                <ion-select-option *ngFor=\"let preferredTransport of preferredTransportList\"\n                  [value]=\"preferredTransport\">{{preferredTransport.name}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"showPreferredTransportNameControl\">\n            <ion-item>\n              <ion-label position=\"floating\">Preferred Transport Name<span style=\"color:red!important\">*</span>\n              </ion-label>\n              <ion-input [formControl]=\"form.controls['preferredTransportName']\" type=\"text\"></ion-input>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.preferredTransportNameMss\">\n                <div\n                  *ngIf=\"form.get('preferredTransportName').hasError(validation.type) && form.get('preferredTransportName').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"showPreferredTransportNameControl\">\n            <ion-item>\n              <ion-label position=\"floating\">Preferred Transport Contact Number</ion-label>\n              <ion-input [formControl]=\"form.controls['preferredTransportContactNumberCtrl']\" type=\"number\"\n                (change)='onChangePreferredTransportContact()'></ion-input>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.preferredTransportContactNumberCtrlMss\">\n                <div\n                  *ngIf=\"form.get('preferredTransportContactNumberCtrl').hasError(validation.type) && form.get('preferredTransportContactNumberCtrl').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"showPreferredTransportNameControl\">\n            <ion-item>\n              <ion-label position=\"floating\">Preferred Transport Email ID</ion-label>\n              <ion-input [formControl]=\"form.controls['preferredTransportEmailIDCtrl']\" \n              pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\">\n              </ion-input>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.preferredTransportEmailIDCtrllMss\">\n                <div\n                  *ngIf=\"form.get('preferredTransportEmailIDCtrl').hasError(validation.type) && form.get('preferredTransportEmailIDCtrl').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label position=\"floating\">Address Line 1<span style=\"color:red!important\">*</span></ion-label>\n              <ion-input [formControl]=\"form.controls['add1']\" type=\"text\"></ion-input>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.add1\">\n                <div *ngIf=\"form.get('add1').hasError(validation.type) && form.get('add1').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label position=\"floating\">Address Line 2 </ion-label>\n              <ion-input [formControl]=\"form.controls['add2']\" type=\"text\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n                <ion-label position=\"floating\">Address Line 3</ion-label>\n                <ion-input [formControl]=\"form.controls['add3']\"  type=\"text\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-row>\n                <ion-col>\n                  <ion-label position=\"floating\">Pin Code<span style=\"color:red!important\">*</span></ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-input [formControl]=\"form.controls['pincode']\"  type=\"number\" (change)='onChangepin()'></ion-input>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.pincode\">\n                <div *ngIf=\"form.get('pincode').hasError(validation.type) && form.get('pincode').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n            <div padding-left>\n              <ng-container>\n                <div>\n                  <p style=\"color: red;font-size: small;\">{{invalidpincode}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item >\n                <ion-label position=\"stacked\">Area<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select  #C  [formControl]=\"form.controls['selectedarea']\" interface=\"popover\" (ionChange)=\"onChangeArea()\" multiple=\"false\" placeholder=\"Select Area\" required>\n                  <ion-select-option *ngFor=\"let area of arealist\" [value]=\"area\">{{area.area}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <div padding-left>\n                <ng-container *ngFor=\"let validation of validation_messages.selectedarea\">\n                  <div *ngIf=\"form.get('selectedarea').hasError(validation.type) && form.get('selectedarea').touched\">\n                    <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                  </div>\n                </ng-container>\n              </div>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\">\n          <ion-item >\n            <ion-label position=\"floating\">City</ion-label>\n            <ion-input type=\"text\" value=\"{{city}}\" disabled=\"true\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">District</ion-label>\n            <ion-input type=\"text\" value=\"{{district}}\" disabled=\"true\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\">\n          <ion-item>\n            <ion-label position=\"floating\">State</ion-label>\n            <ion-input type=\"text\" value=\"{{state}}\" disabled=\"true\"></ion-input>\n          </ion-item >\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label position=\"floating\">Country</ion-label>\n              <ion-input type=\"text\" value=\"{{country}}\" disabled=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label>From Date</ion-label>\n              <ion-datetime placeholder=\"Select Date\" [disabled]=\"true\"  [formControl]=\"form.controls['fromdate']\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n              <ion-label>Unregistered </ion-label>\n              <ion-checkbox slot=\"end\" [formControl]=\"form.controls['Unregistered']\" (ionChange)=\"onchangeUnregistered()\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\">\n            <ion-item>\n                <ion-label position=\"floating\">GST Number</ion-label>\n                <ion-input [formControl]=\"form.controls['gstno']\" [required]=\"!IsUnregistered\" type=\"text\" [disabled]=\"isgst\" \n                 class=\"ion-text-uppercase\" pattern=\"^([0][1-9]|[1-2][0-9]|[3][0-5])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[a-zA-Z]{1}[0-9a-zA-Z]{1})+$\"></ion-input>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.gstno\">\n                <div *ngIf=\"form.get('gstno').hasError(validation.type)\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"isdesktop===false\" size=\"12\" size-lg=\"4\" >\n            <ion-button (click)=\"ChosePic('PANpic','')\" [disabled]=\"isgst\">\n           <ion-icon name=\"Photos\"></ion-icon>\n              \n            </ion-button>\n           </ion-col>\n           <ion-col *ngIf=\"isdesktop===true\" size=\"12\" size-lg=\"4\">\n             <input type=\"file\" name=\"file\" accept=\"image/*\" id='selectedFile' (change)=\"uploadImage($event)\" class=\"inputfile\" [disabled]=\"isgst\"/>\n     \n            </ion-col>\n     \n           <ion-col>\n             <img [src]=\"fileUrl\" *ngIf=\"fileUrl\" (click)=\"ImageViewr(fileUrl)\" style=\"width: 50px; height: 50px;\">\n           </ion-col>   \n        </ion-row>\n      </ion-card>\n      <ion-card>\n        <ion-card-header style=\"background: #FFCC80;\">\n          Compliance:\n        </ion-card-header>\n        <ion-row style=\"background-color: #b8b3b3; white-space:normal; font-size: xx-small; text-align: center;\" class =\"row\">\n          <ion-col size=\"3\"> Compliance Type</ion-col>\n          <ion-col size=\"3\">Number</ion-col>\n          <ion-col size=\"2\"> Image</ion-col>\n          <ion-col size=\"3\"> </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of ComplianceList; index as i\" style=\"border: think solid black;\">\n          <ion-col size=\"3\"> {{ item.name }}</ion-col>\n          <ion-item>\n          <ion-input size=\"3\" type=\"text\" [(ngModel)]=\"item.num\" [ngModelOptions]=\"{standalone: true}\"></ion-input>\n          </ion-item>\n          <ion-col size=\"2\" *ngIf=\"isdesktop===false\">\n            <ion-button (click)=\"ChosePic('complince',item.code)\">\n              <!-- <ion-label>Capture</ion-label> -->\n              <ion-icon name=\"Photos\"></ion-icon>\n            </ion-button>\n          </ion-col>\n  \n          <ion-col size=\"2\" *ngIf=\"isdesktop===true\">\n            <input type=\"file\" name=\"file\" accept=\"image/*\" id='selectedFile' (change)=\"uploadcompImage($event,item.code)\" class=\"inputfile\"/>\n        \n           </ion-col>\n          <ion-col size=\"3\">\n            <img [src]=\"'data:image/jpeg;base64,'+item.image\" (click)=\"ImageViewr(item.image,item)\" *ngIf=\"item.image\" style=\"width: 35px; height: 35px;\">\n          </ion-col>\n        </ion-row>\n        \n          <ion-row>\n            <ion-col>\n               <ion-label style=\"color: red;\" class=\"ion-text-wrap\"></ion-label>\n             </ion-col>\n          </ion-row>\n      </ion-card>\n    </ion-grid>\n  </form>\n  <ion-footer>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button style=\"width: 100%;\" (click)=\"onSaveDraft(form.value)\" [disabled]=\"!form.valid\">\n          <ion-label >Save</ion-label>\n        </ion-button>\n        <!-- <ion-button style=\"width: 100%;\" (click)=\"test(form)\">\n          <ion-label >TEST</ion-label>\n        </ion-button> -->\n       </ion-col>\n  </ion-row>\n  </ion-footer>\n</ion-content>"

/***/ }),

/***/ "./src/app/addedit-business-partner-address/addedit-business-partner-address.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/addedit-business-partner-address/addedit-business-partner-address.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddeditBusinessPartnerAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditBusinessPartnerAddressPageModule", function() { return AddeditBusinessPartnerAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addedit_business_partner_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addedit-business-partner-address.page */ "./src/app/addedit-business-partner-address/addedit-business-partner-address.page.ts");







var routes = [
    {
        path: '',
        component: _addedit_business_partner_address_page__WEBPACK_IMPORTED_MODULE_6__["AddeditBusinessPartnerAddressPage"]
    }
];
var AddeditBusinessPartnerAddressPageModule = /** @class */ (function () {
    function AddeditBusinessPartnerAddressPageModule() {
    }
    AddeditBusinessPartnerAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addedit_business_partner_address_page__WEBPACK_IMPORTED_MODULE_6__["AddeditBusinessPartnerAddressPage"]]
        })
    ], AddeditBusinessPartnerAddressPageModule);
    return AddeditBusinessPartnerAddressPageModule;
}());



/***/ }),

/***/ "./src/app/addedit-business-partner-address/addedit-business-partner-address.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/addedit-business-partner-address/addedit-business-partner-address.page.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inputfile {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9hZGRlZGl0LWJ1c2luZXNzLXBhcnRuZXItYWRkcmVzcy9hZGRlZGl0LWJ1c2luZXNzLXBhcnRuZXItYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGVkaXQtYnVzaW5lc3MtcGFydG5lci1hZGRyZXNzL2FkZGVkaXQtYnVzaW5lc3MtcGFydG5lci1hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZGRlZGl0LWJ1c2luZXNzLXBhcnRuZXItYWRkcmVzcy9hZGRlZGl0LWJ1c2luZXNzLXBhcnRuZXItYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRmaWxlIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH0iLCIuaW5wdXRmaWxlIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addedit-business-partner-address/addedit-business-partner-address.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/addedit-business-partner-address/addedit-business-partner-address.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddeditBusinessPartnerAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditBusinessPartnerAddressPage", function() { return AddeditBusinessPartnerAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var _newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newcustomer/newcustomer.service */ "./src/app/newcustomer/newcustomer.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_partner_address_business_partner_address_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../business-partner-address/business-partner-address.service */ "./src/app/business-partner-address/business-partner-address.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");












var AddeditBusinessPartnerAddressPage = /** @class */ (function () {
    function AddeditBusinessPartnerAddressPage(fb, val, newcustomerservice, router, route, commonfun, businesspartneraddressservice, alertCtrl, camera, platform, msg, loginauth) {
        this.fb = fb;
        this.val = val;
        this.newcustomerservice = newcustomerservice;
        this.router = router;
        this.route = route;
        this.commonfun = commonfun;
        this.businesspartneraddressservice = businesspartneraddressservice;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.platform = platform;
        this.msg = msg;
        this.loginauth = loginauth;
        this.district = '';
        this.samename = false;
        this.IsUnregistered = false;
        this.fileUrl = '';
        this.img = '';
        this.isgst = false;
        this.mmstRegioncode = "";
        this.isdesktop = false;
        this.showPreferredTransportControl = false;
        this.showPreferredTransportNameControl = false;
        this.validation_messages = {
            'add1': [
                { type: 'required', message: '*Please Enter Address Line 1' }
            ],
            'name': [
                { type: 'required', message: '*Please Enter Name.' }
            ],
            'pincode': [
                { type: 'required', message: '*Please Enter Pin Code' }
            ],
            'selectedarea': [
                { type: 'required', message: '*Please Select Area.' }
            ],
            'gstno': [
                { type: 'InvalidgstNumber', message: '*Please Enter Valid GST No.' }
            ],
            'preferredTransportNameMss': [
                { type: 'required', message: '*Please Enter Preferred Transport Name' }
            ],
            'preferredTransportContactNumberCtrlMss': [
                { type: 'required', message: '*Please Enter Preferred Transport Contact Number' }
            ],
            'preferredTransportEmailIDCtrllMss': [
                { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }
            ]
        };
        try {
            this.getparam();
        }
        catch (_a) { }
        this.form = this.fb.group({
            add1: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            add2: [],
            add3: [],
            pincode: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedarea: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isbill: [],
            isShip: [],
            fromdate: [],
            todate: [],
            NamesameasCustome: [],
            gstno: [],
            Unregistered: [],
            preferredCustomerTransport: [],
            preferredTransportName: [],
            preferredTransportContactNumberCtrl: [],
            preferredTransportEmailIDCtrl: []
        });
    }
    AddeditBusinessPartnerAddressPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Resetpage();
        //this.commonfun.chkcache('business-partner-address');
        setTimeout(function () {
            _this.checkplatform();
        }, 1500);
    };
    AddeditBusinessPartnerAddressPage.prototype.getparam = function () {
        var _this = this;
        try {
            this.route.params.subscribe(function (params) {
                if (_this.router.getCurrentNavigation().extras.state) {
                    // this.selectedbunch=null;
                    // 
                    _this.businessPartner = _this.router.getCurrentNavigation().extras.state.businessPartner;
                    _this.cust_id = _this.router.getCurrentNavigation().extras.state.businessPartner.id;
                    _this.samename = true;
                    _this.form.controls["name"].setValue(_this.businessPartner["fname"]);
                    _this.ComplianceList = _this.router.getCurrentNavigation().extras.state.ComplianceList;
                    _this.cartaddresslist = _this.router.getCurrentNavigation().extras.state.cartaddress;
                    //this.onchangeNamesameasCustome();
                }
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    AddeditBusinessPartnerAddressPage.prototype.checkplatform = function () {
        try {
            //  if(!this.platform.is("desktop")){
            if (!this.msg.isplatformweb) {
                // 
                this.isdesktop = false;
            }
            else {
                this.isdesktop = true;
            }
        }
        catch (error) {
        }
    };
    AddeditBusinessPartnerAddressPage.prototype.uploadImage = function (str) {
        var _this = this;
        try {
            var file = str.target.files[0];
            var myreader = new FileReader();
            myreader.onloadend = function (e) {
                var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
                _this.fileUrl = myreader.result;
                _this.img = b64;
            };
            myreader.readAsDataURL(file);
        }
        catch (error) {
        }
    };
    AddeditBusinessPartnerAddressPage.prototype.uploadcompImage = function (str, id) {
        var _this = this;
        try {
            var file = str.target.files[0];
            var myreader = new FileReader();
            myreader.onloadend = function (e) {
                var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
                //  this.fileUrl=myreader.result;
                // this.img=b64;
                //this.ChosePic("complince",id);
                for (var i = 0; i < _this.ComplianceList.length; i++) {
                    if (_this.ComplianceList[i].code == id) {
                        _this.ComplianceList[i].image = b64;
                    }
                }
            };
            myreader.readAsDataURL(file);
        }
        catch (error) {
        }
    };
    AddeditBusinessPartnerAddressPage.prototype.onchangeNamesameasCustome = function () {
        this.samename = this.form.controls["NamesameasCustome"].value;
        if (this.samename == true) {
            this.form.controls["name"].setValue(this.businessPartner["fname"]);
        }
    };
    AddeditBusinessPartnerAddressPage.prototype.onchangeUnregistered = function () {
        try {
            this.IsUnregistered = this.form.controls["Unregistered"].value;
            if (this.IsUnregistered == true) {
                this.form.controls["gstno"].setValue("");
                // this.isgst=false;  
                this.fileUrl = "";
                this.img = "";
                this.isgst = true;
            }
            else {
                this.isgst = false;
                for (var x = 0; x < this.cartaddresslist.length; x++) {
                    if (this.pincodelist[0].region == this.cartaddresslist[x].regionid) {
                        if (this.cartaddresslist[x].gstno != "") {
                            this.isgst = true;
                            //  
                            //  
                            this.form.controls["gstno"].setValue(this.cartaddresslist[x].gstno);
                        }
                    }
                }
                //this.isgst=true;  
            }
        }
        catch (_a) { }
    };
    AddeditBusinessPartnerAddressPage.prototype.onChangepin = function (id, customerId) {
        var _this = this;
        if (id === void 0) { id = ''; }
        //var that = this;
        this.isgst = false;
        //this.form.controls["gstno"].
        this.form.controls["gstno"].setValue(null);
        this.form.controls['Unregistered'].setValue(false);
        this.onchangeUnregistered();
        this.city = "";
        this.state = "";
        this.country = "";
        this.district = "";
        this.newcustomerservice.getPincode(this.form.controls["pincode"].value).subscribe(function (data) {
            var response = data['response'];
            _this.pincodelist = response.data;
            if (_this.pincodelist.length > 0) {
                _this.invalidpincode = '';
                _this.newcustomerservice.getarea(_this.pincodelist[0].id).subscribe(function (data) {
                    var response = data['response'];
                    _this.arealist = response.data;
                    _this.state = _this.pincodelist[0].region$_identifier;
                    _this.country = _this.pincodelist[0].country$_identifier;
                    _this.district = _this.pincodelist[0].district$_identifier;
                    if (id != '' || id == undefined) {
                        _this.selectedarea = _this.arealist.find(function (item) { return item.id === id; });
                        setTimeout(function () {
                            _this.form.controls["selectedarea"].setValue(_this.selectedarea);
                        }, 1500);
                    }
                });
                _this.newcustomerservice.getregion(_this.pincodelist[0].region).subscribe(function (data) {
                    var response = data['response'];
                    _this.mmstRegioncode = response.data[0].mmstRegioncode;
                });
                setTimeout(function () {
                    var isexistpin = false;
                    for (var x = 0; x < _this.cartaddresslist.length; x++) {
                        if (_this.pincodelist[0].region == _this.cartaddresslist[x].regionid) {
                            if (_this.cartaddresslist[x].gstno != "") {
                                _this.isgst = true;
                                isexistpin = true;
                                _this.form.controls["gstno"].setValue(_this.cartaddresslist[x].gstno);
                            }
                        }
                    }
                    if (isexistpin == false) {
                        _this.isgst = false;
                        _this.form.controls["gstno"].setValue("");
                    }
                }, 1600);
                _this.invalidpincode = '';
            }
            else {
                _this.state = '';
                _this.country = '';
                _this.district = '';
                _this.invalidpincode = 'Invalid Pincode';
                _this.arealist = null;
                _this.city = '';
                _this.form.controls["selectedarea"].setValue(null);
                _this.form.controls["gstno"].setValue("");
                _this.isgst = false;
            }
        }), function (error) {
            _this.state = '';
            _this.country = '';
            _this.district = '';
            _this.invalidpincode = 'Invalid Pincode';
            _this.arealist = null;
            _this.city = '';
        };
    };
    AddeditBusinessPartnerAddressPage.prototype.onChangegst = function () {
        var validgstn = false;
        try {
            var gstn = this.form.controls["gstno"].value;
            if (gstn != null && gstn != undefined && gstn != "") {
                if (gstn.length > 2) {
                    if (this.mmstRegioncode != gstn.substr(0, 2)) {
                        this.commonfun.presentAlert("Message", "Alert", "GST Number must be of same state.");
                        this.form.controls["gstno"].setValue("");
                        validgstn = false;
                    }
                    else if (this.isgst == false) {
                        if (this.fileUrl == null || this.fileUrl == undefined || this.fileUrl == "") {
                            this.commonfun.presentAlert("Message", "Alert", "Please upload GST image.");
                            validgstn = false;
                        }
                        else {
                            validgstn = true;
                        }
                    }
                    else {
                        validgstn = true;
                    }
                }
                else {
                    validgstn = true;
                }
            }
            else {
                validgstn = true;
            }
        }
        catch (error) {
        }
        return validgstn;
    };
    AddeditBusinessPartnerAddressPage.prototype.onChangeArea = function () {
        this.selectedarea = this.form.controls["selectedarea"].value;
        this.city = this.selectedarea.cttv$_identifier;
    };
    AddeditBusinessPartnerAddressPage.prototype.Resetpage = function () {
        try {
            this.form.reset();
            this.isgst = false;
            this.form.controls["fromdate"].setValue(new Date().toISOString());
            this.form.controls["todate"].setValue(new Date().toISOString());
            this.form.controls["NamesameasCustome"].setValue(true);
            this.form.controls["name"].setValue(this.businessPartner["fname"]);
            this.district = "";
            this.state = "";
            this.country = "";
        }
        catch (_a) { }
    };
    AddeditBusinessPartnerAddressPage.prototype.onSaveDraft = function (value) {
        var _this = this;
        if (this.onChangegst() == false) {
            return;
        }
        this.commonfun.loadingPresent();
        var jsondata = {
            // "mbso_copord_id":this.selecteddocumentno==undefined||this.selecteddocumentno==""||this.selecteddocumentno==null?"":this.selecteddocumentno.id,
            "cust_id": this.cust_id,
            "name": value.name,
            "billing": value.isbill == true ? "true" : "false",
            "shipping": value.isShip == true ? 'true' : 'false',
            "add1": value.add1,
            "add2": value.add2,
            "add3": value.add3,
            "pincode": value.pincode,
            "area": value.selectedarea.id,
            "city": this.selectedarea.cttv,
            "state": this.pincodelist[0].region,
            "country": this.pincodelist[0].country,
            "district": this.pincodelist[0].district,
            "fromdate": value.fromdate,
            "gst": value.gstno != null ? value.gstno.toUpperCase() : "",
            "gstimg": this.img,
            "ComplianceList": this.ComplianceList == undefined ? "" : this.ComplianceList,
        };
        if (this.showPreferredTransportNameControl) {
            jsondata["cusPreferredTransport"] = value.preferredCustomerTransport.id;
            jsondata["cusPreferredTransportOther"] = this.showPreferredTransportNameControl;
            jsondata["preferredTransportName"] = value.preferredTransportName;
            jsondata["preferredTransportContact"] = value.preferredTransportContactNumberCtrl;
            jsondata["preferredTransportEmailID"] = value.preferredTransportEmailIDCtrl;
        }
        this.businesspartneraddressservice.SaveAddress(jsondata).subscribe(function (data) {
            if (data != null) {
                _this.response = data;
                if (_this.response.resposemsg == "success") {
                    _this.commonfun.loadingDismiss();
                    _this.commonfun.presentAlert("Message", "Success", "Address Successfully added, Its under KYC Apporval.");
                    _this.ComplianceList = null;
                    _this.Resetpage();
                    var navigationExtras = {
                        state: {
                            reset: true,
                        }
                    };
                    _this.router.navigate(['/business-partner-address'], navigationExtras);
                }
                else {
                    _this.commonfun.loadingDismiss();
                    _this.commonfun.presentAlert("message", "Fail", _this.response.logmsg);
                }
            }
        });
    };
    //Capture Image from Camera
    AddeditBusinessPartnerAddressPage.prototype.takePicture = function (Type, id) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            targetWidth: 1500,
            targetHeight: 1500
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (Type == "PANpic") {
                _this.fileUrl = 'data:image/jpeg;base64,' + imageData;
                _this.img = imageData;
            }
            if (Type == "complince") {
                for (var i = 0; i < _this.ComplianceList.length; i++) {
                    if (_this.ComplianceList[i].code == id) {
                        _this.ComplianceList[i].image = imageData;
                    }
                }
            }
        }, function (err) {
        });
    };
    //Select Image from library
    AddeditBusinessPartnerAddressPage.prototype.getimage = function (Type, id) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 1500,
            targetHeight: 1500
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (Type == "PANpic") {
                _this.fileUrl = 'data:image/jpeg;base64,' + imageData;
                _this.img = imageData;
            }
            if (Type == "complince") {
                for (var i = 0; i < _this.ComplianceList.length; i++) {
                    if (_this.ComplianceList[i].code == id) {
                        _this.ComplianceList[i].image = imageData;
                    }
                }
            }
        }, function (err) { });
    };
    AddeditBusinessPartnerAddressPage.prototype.ChosePic = function (Type, code) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Select Option',
                            message: "Select Option to get Picture.",
                            buttons: [
                                {
                                    text: 'Gallery',
                                    handler: function (data) {
                                        _this.getimage(Type, code);
                                    }
                                },
                                {
                                    text: 'Camera',
                                    handler: function (data) {
                                        _this.takePicture(Type, code);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddeditBusinessPartnerAddressPage.prototype.ImageViewr = function (img, rowcompliancedata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var msg, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = "";
                        if (rowcompliancedata != null) {
                            msg = '<div>' +
                                '<img class="viewImagecss" src="data:image/png;base64,' + img + '">' +
                                '</div>';
                        }
                        else {
                            msg = '<div>' +
                                '<img class="viewImagecss" src="' + img + '">' +
                                '</div>';
                        }
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: msg,
                                buttons: [
                                    {
                                        text: 'Remove',
                                        handler: function (data) {
                                            //this.POimg64=null
                                            if (rowcompliancedata != null) {
                                                _this.ComplianceList = _this.ComplianceList.map(function (comdata) {
                                                    comdata.image = (comdata.code == rowcompliancedata.code ? null : comdata.image);
                                                    return comdata;
                                                });
                                            }
                                            else {
                                                _this.fileUrl = null;
                                            }
                                        }
                                    },
                                    { text: 'OK' }
                                ],
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddeditBusinessPartnerAddressPage.prototype.onShippingChange = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var control1, result, control1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log("Shipping Address ", value.detail.checked);
                        if (!value.detail.checked) return [3 /*break*/, 3];
                        if (!this.loginauth.selectedactivity.preferred_transport_required) return [3 /*break*/, 2];
                        control1 = null;
                        control1 = this.form.get('preferredCustomerTransport');
                        control1.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                        control1.updateValueAndValidity();
                        this.showPreferredTransportControl = true;
                        this.commonfun.loadingPresent();
                        return [4 /*yield*/, this.newcustomerservice.getPreferredTransportModes().toPromise()];
                    case 1:
                        result = _a.sent();
                        this.preferredTransportList = result[0];
                        console.log("Preferred Transport Modes ", this.preferredTransportList);
                        this.commonfun.loadingDismiss();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        setTimeout(function () {
                            _this.showPreferredTransportControl = false;
                            _this.showPreferredTransportNameControl = false;
                        });
                        this.form.controls['preferredCustomerTransport'].reset();
                        control1 = null;
                        control1 = this.form.get('preferredCustomerTransport');
                        control1.clearValidators();
                        control1.updateValueAndValidity();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        this.commonfun.loadingDismiss();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AddeditBusinessPartnerAddressPage.prototype.onChangePreferredTransportContact = function () {
    };
    AddeditBusinessPartnerAddressPage.prototype.onCusPreTransChange = function () {
        var _this = this;
        try {
            console.log("SELECTED PREPED TRANS", this.selectedPreferredTransport);
            this.form.controls['preferredTransportName'].reset();
            this.form.controls['preferredTransportContactNumberCtrl'].reset();
            this.form.controls['preferredTransportEmailIDCtrl'].reset();
            if (this.selectedPreferredTransport.name == "Others") {
                this.showPreferredTransportNameControl = true;
                var control2 = null;
                control2 = this.form.get('preferredTransportName');
                control2.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                control2.updateValueAndValidity();
            }
            else {
                setTimeout(function () {
                    _this.showPreferredTransportNameControl = false;
                });
                var control2 = null;
                control2 = this.form.get('preferredTransportName');
                control2.clearValidators();
                control2.updateValueAndValidity();
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    AddeditBusinessPartnerAddressPage.prototype.test = function (form) {
        console.log(form);
    };
    AddeditBusinessPartnerAddressPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _provider_validator_helper__WEBPACK_IMPORTED_MODULE_3__["Validator"] },
        { type: _newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_4__["NewcustomerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
        { type: _business_partner_address_business_partner_address_service__WEBPACK_IMPORTED_MODULE_7__["BusinessPartnerAddressService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_10__["Message"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_11__["LoginauthService"] }
    ]; };
    AddeditBusinessPartnerAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addedit-business-partner-address',
            template: __webpack_require__(/*! raw-loader!./addedit-business-partner-address.page.html */ "./node_modules/raw-loader/index.js!./src/app/addedit-business-partner-address/addedit-business-partner-address.page.html"),
            styles: [__webpack_require__(/*! ./addedit-business-partner-address.page.scss */ "./src/app/addedit-business-partner-address/addedit-business-partner-address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _provider_validator_helper__WEBPACK_IMPORTED_MODULE_3__["Validator"],
            _newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_4__["NewcustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"],
            _business_partner_address_business_partner_address_service__WEBPACK_IMPORTED_MODULE_7__["BusinessPartnerAddressService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
            _provider_message_helper__WEBPACK_IMPORTED_MODULE_10__["Message"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_11__["LoginauthService"]])
    ], AddeditBusinessPartnerAddressPage);
    return AddeditBusinessPartnerAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=addedit-business-partner-address-addedit-business-partner-address-module-es5.js.map