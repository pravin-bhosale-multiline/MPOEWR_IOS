(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newcustomer-newcustomer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/newcustomer/newcustomer.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newcustomer/newcustomer.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\" *ngIf=\"!isNewRegistration\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      New Lead\r\n    </ion-title>\r\n    <ion-buttons *ngIf=\"!isNewRegistration\" slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\"\r\n      routerLink=\"/home\">\r\n      <ion-icon name=\"home\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\r\n      <ion-icon name=\"refresh\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSaveDraft(form.value)\">\r\n    <ion-grid>\r\n      <ion-card>\r\n        <ion-card-header style=\"background: #FFCC80;\">\r\n          Customer :\r\n        </ion-card-header>\r\n        <ion-row>\r\n          <!-- Activity -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Activity<span style=\"color:red!important\">*</span></ion-label>\r\n              <ion-select [formControl]=\"form.controls['selectedactivity']\" interface=\"popover\"\r\n                (ionChange)=\"onActChange()\" multiple=\"false\" placeholder=\"Select Activity\">\r\n                <ion-select-option *ngFor=\"let activity of activitylist\" [value]=\"activity.id\">{{activity.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.selectedactivity\">\r\n                <div\r\n                  *ngIf=\"form.get('selectedactivity').hasError(validation.type) && form.get('selectedactivity').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <!-- Customer Nature -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Customer Nature<span style=\"color:red!important\">*</span></ion-label>\r\n              <ion-select #C [formControl]=\"form.controls['selectedcn']\" interface=\"popover\" placeholder=\"Select One\"\r\n                (ionChange)='onChangecn()'>\r\n                <ion-select-option value=\"I\">Individual</ion-select-option>\r\n                <ion-select-option value=\"F\">Firm</ion-select-option>\r\n                <ion-select-option value=\"H\">HUF</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.selectedcn\">\r\n                <div *ngIf=\"form.get('selectedcn').hasError(validation.type) && form.get('selectedcn').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <!-- Firm Name -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Firm Name<span style=\"color:red!important\">{{firmnamereq}}</span>\r\n              </ion-label>\r\n              <ion-input [formControl]=\"form.controls['firmname']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.firmname\">\r\n                <div *ngIf=\"form.get('firmname').hasError(validation.type) && form.get('firmname').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <!-- First Name -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">First Name<span style=\"color:red!important\">{{firstnamereq}}</span>\r\n              </ion-label>\r\n              <ion-input [formControl]=\"form.controls['firstname']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.firstname\">\r\n                <div *ngIf=\"form.get('firstname').hasError(validation.type) && form.get('firstname').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <!-- Middle Name -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Middle Name</ion-label>\r\n              <ion-input [formControl]=\"form.controls['middlename']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <!-- Last Name -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Last Name<span style=\"color:red!important\">{{lastnamereq}}</span>\r\n              </ion-label>\r\n              <ion-input [formControl]=\"form.controls['lastname']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.lastname\">\r\n                <div *ngIf=\"form.get('lastname').hasError(validation.type) && form.get('lastname').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-card-header style=\"background: #FFCC80;\">\r\n          Address :\r\n        </ion-card-header>\r\n        <ion-row>\r\n          <!-- Address Line 1 -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Address Line 1<span style=\"color:red!important\">*</span></ion-label>\r\n              <ion-input [formControl]=\"form.controls['add1']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.add1\">\r\n                <div *ngIf=\"form.get('add1').hasError(validation.type) && form.get('add1').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <!-- Address Line 2 -->\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Address Line 2</ion-label>\r\n              <ion-input [formControl]=\"form.controls['add2']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <!-- Address Line 3 -->\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Address Line 3</ion-label>\r\n              <ion-input [formControl]=\"form.controls['add3']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-label position=\"floating\">Pin Code<span style=\"color:red!important\">*</span></ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-input [formControl]=\"form.controls['pincode']\" type=\"number\" (change)='onChangepin()'></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.pincode\">\r\n                <div *ngIf=\"form.get('pincode').hasError(validation.type) && form.get('pincode').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n            <div padding-left>\r\n              <ng-container>\r\n                <div>\r\n                  <p style=\"color: red;font-size: small;\">{{invalidpincode}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Area<span style=\"color:red!important\">*</span></ion-label>\r\n              <ion-select #C [formControl]=\"form.controls['selectedarea']\" interface=\"popover\"\r\n                (ionChange)=\"onChangeArea()\" multiple=\"false\" placeholder=\"Select Area\" required>\r\n                <ion-select-option *ngFor=\"let area of arealist\" [value]=\"area\">{{area.area}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.selectedarea\">\r\n                <div *ngIf=\"form.get('selectedarea').hasError(validation.type) && form.get('selectedarea').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">City</ion-label>\r\n              <ion-input type=\"text\" value=\"{{city}}\" disabled=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">District</ion-label>\r\n              <ion-input type=\"text\" value=\"{{district}}\" disabled=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">State</ion-label>\r\n              <ion-input type=\"text\" value=\"{{state}}\" disabled=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Country</ion-label>\r\n              <ion-input type=\"text\" value=\"{{country}}\" disabled=\"true\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Sales Area<span style=\"color:red!important\">*</span></ion-label>\r\n              <ionic-selectable placeholder=\"Select Sales Area\" formControlName=\"selectedsalesarea\"\r\n                [items]=\"salesarealist\" itemValueField=\"id\" itemTextField=\"_identifier\" [canSearch]=\"true\"\r\n                (onClose)=\"onClose($event)\" (onSearch)=\"salseareasearchChange($event)\">\r\n              </ionic-selectable>\r\n\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.selectedsalesarea\">\r\n                <div\r\n                  *ngIf=\"form.get('selectedsalesarea').hasError(validation.type) && form.get('selectedsalesarea').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label>Billing</ion-label>\r\n              <ion-checkbox slot=\"end\" [formControl]=\"form.controls['isbill']\"></ion-checkbox>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label>Shipping</ion-label>\r\n              <ion-checkbox slot=\"end\" [formControl]=\"form.controls['isShip']\" (ionChange)=\"onShippingChange($event)\">\r\n              </ion-checkbox>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"showPreferredTransportControl\">\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Customer Preferred Transport<span style=\"color:red!important\">*</span>\r\n              </ion-label>\r\n              <ion-select  [(ngModel)]=\"selectedPreferredTransport\" [formControl]=\"form.controls['preferredCustomerTransport']\" interface=\"popover\"\r\n                (ionChange)=\"onCusPreTransChange()\" multiple=\"false\" placeholder=\"Select Activity\">\r\n                <ion-select-option *ngFor=\"let preferredTransport of preferredTransportList\"\r\n                  [value]=\"preferredTransport\">{{preferredTransport.name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"showPreferredTransportNameControl\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Preferred Transport Name<span style=\"color:red!important\">*</span>\r\n              </ion-label>\r\n              <ion-input [formControl]=\"form.controls['preferredTransportName']\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.preferredTransportNameMss\">\r\n                <div\r\n                  *ngIf=\"form.get('preferredTransportName').hasError(validation.type) && form.get('preferredTransportName').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"showPreferredTransportNameControl\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Preferred Transport Contact Number</ion-label>\r\n              <ion-input [formControl]=\"form.controls['preferredTransportContactNumberCtrl']\" type=\"number\"\r\n                (change)='onChangePreferredTransportContact()'></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.preferredTransportContactNumberCtrlMss\">\r\n                <div\r\n                  *ngIf=\"form.get('preferredTransportContactNumberCtrl').hasError(validation.type) && form.get('preferredTransportContactNumberCtrl').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"showPreferredTransportNameControl\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Preferred Transport Email ID</ion-label>\r\n              <ion-input [formControl]=\"form.controls['preferredTransportEmailIDCtrl']\"\r\n              pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.preferredTransportEmailIDCtrl\">\r\n                <div\r\n                  *ngIf=\"form.get('preferredTransportEmailIDCtrl').hasError(validation.type) && form.get('preferredTransportEmailIDCtrl').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-card-header style=\"background: #FFCC80;\">\r\n          Other Information:\r\n        </ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Mobile No<span style=\"color:red!important\">*</span></ion-label>\r\n              <ion-input [formControl]=\"form.controls['mobileno']\" type=\"number\" (change)='onChangemobileno()'\r\n                [disabled]=\"IsExisting\"></ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.mobileno\">\r\n                <div *ngIf=\"form.get('mobileno').hasError(validation.type) && form.get('mobileno').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Email</ion-label>\r\n              <ion-input [formControl]=\"form.controls['email']\"\r\n                pattern=\"[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})\">\r\n              </ion-input>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n                <div *ngIf=\"form.get('email').hasError(validation.type) && form.get('email').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Business Partner Category<span style=\"color:red!important\">*</span>\r\n              </ion-label>\r\n              <ion-select [formControl]=\"form.controls['selectedbpcat']\" interface=\"popover\" (ionChange)=\"onBpChange()\"\r\n                multiple=\"false\" placeholder=\"Select Activity\">\r\n                <ion-select-option *ngFor=\"let bpcat of bpcatlist\" [value]=\"bpcat.id\">{{bpcat._identifier}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div padding-left>\r\n              <ng-container *ngFor=\"let validation of validation_messages.selectedbpcat\">\r\n                <div *ngIf=\"form.get('selectedbpcat').hasError(validation.type) && form.get('selectedbpcat').touched\">\r\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg=\"4\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Business Partner Level</ion-label>\r\n              <ion-select placeholder=\"Select One\" [formControl]=\"form.controls['selectedbpl']\" interface=\"popover\"\r\n                (ionChange)=\"onBPLChange()\">\r\n                <ion-select-option value=\"P\">Primary</ion-select-option>\r\n                <ion-select-option value=\"S\">Secondary</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div>\r\n              <span style=\"font-size: small;\">(Required for convert to customer.)</span>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\" *ngIf=\"!isBPLEnabled\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Tagged Business Partner</ion-label>\r\n              <ionic-selectable\r\n              placeholder=\"Select Business Partner\"\r\n             \r\n              [formControl]=\"form.controls['selectedbprt']\"\r\n                [items]=\"bplist\"\r\n                itemValueField=\"id\"\r\n                itemTextField=\"_identifier\"\r\n                [canSearch]=\"true\"\r\n                (onChange)=\"portChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n            </ion-col>\r\n            \r\n            \r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-card-header style=\"background: #FFCC80;\">\r\n          Compliance:\r\n        </ion-card-header>\r\n        <ion-row style=\"background-color: #b8b3b3; white-space:normal; font-size: xx-small; text-align: center;\"\r\n          class=\"row\">\r\n          <ion-col size=\"4\"> Compliance Type</ion-col>\r\n          <ion-col size=\"8\">Number</ion-col>\r\n        </ion-row>\r\n        <ion-row *ngFor=\"let item of compliancedata; index as i\" style=\"border: think solid black;font-size: small;\">\r\n          <ion-col size=\"4\" style=\"margin: auto;\">\r\n            <ion-label>\r\n              {{ item.scompType }}\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"8\" *ngIf=\"item.Compliance_Type!='DL1VD' && item.Compliance_Type!='DL2VD'\">\r\n            <ion-item>\r\n              <ion-input type=\"text\" [(ngModel)]=\"item.num\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Enter\"\r\n                style=\"border: think solid black;font-size: small;\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"8\" *ngIf=\"item.Compliance_Type==='DL1VD' || item.Compliance_Type==='DL2VD'\">\r\n            <ion-item style=\"border: think solid black;font-size: small;\">\r\n              <ion-datetime [min]=\"today\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"item.num\"\r\n                displayFormat=\"DD-MM-YYYY\" max=\"2050-12-31\" placeholder=\"Select Date\"></ion-datetime>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col *ngIf=\"item.Compliance_Type!='DL1VD' && item.Compliance_Type!='DL2VD'\">\r\n            <app-multi-file-upload [isOnlyCamera]=\"false\" [maxfile]=\"10\" [myform]=\"form\"\r\n              [controlID]=\"item.Compliance_Type\" [formControlName]=\"item.Compliance_Type\"></app-multi-file-upload>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label style=\"color: red;\" class=\"ion-text-wrap\">{{validationSummary}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      \r\n    </ion-grid>\r\n  </form>\r\n  </ion-content>\r\n  <ion-footer>\r\n    <ion-row>\r\n        <ion-col  size=\"6\" size-lg=\"6\" *ngIf=\"!isNewRegistration\">\r\n          <ion-button style=\"width: 100%;\" (click)=\"onSaveDraft(form.value)\" [disabled]=\"!form.valid\">\r\n            <ion-label>Create Lead</ion-label>\r\n          </ion-button>\r\n        </ion-col>\r\n        <!-- <ion-col  size=\"6\" size-lg=\"6\">\r\n          <ion-button style=\"width: 100%;\" (click)=\"testMethod(form)\">\r\n            <ion-label>TEST Button</ion-label>\r\n          </ion-button>\r\n        </ion-col> -->\r\n        <ion-col size=\"6\" size-lg=\"6\">\r\n          <ion-button style=\"width: 100%;\" (click)=\"onConvertintoCustomer(form.value)\"\r\n            [disabled]=\"!form.valid || !form.get('selectedbpl').value\">\r\n            <ion-label>Submit for KYC Approval</ion-label>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/newcustomer/newcustomer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/newcustomer/newcustomer.module.ts ***!
  \***************************************************/
/*! exports provided: NewcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcustomerPageModule", function() { return NewcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newcustomer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./newcustomer.page */ "./src/app/newcustomer/newcustomer.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");









var routes = [
    {
        path: '',
        component: _newcustomer_page__WEBPACK_IMPORTED_MODULE_7__["NewcustomerPage"]
    }
];
var NewcustomerPageModule = /** @class */ (function () {
    function NewcustomerPageModule() {
    }
    NewcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_newcustomer_page__WEBPACK_IMPORTED_MODULE_7__["NewcustomerPage"]]
        })
    ], NewcustomerPageModule);
    return NewcustomerPageModule;
}());



/***/ }),

/***/ "./src/app/newcustomer/newcustomer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/newcustomer/newcustomer.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n/* Hide ion-content scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\nh5 ion-icon {\n  color: lightcoral;\n}\n.inputfile {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9uZXdjdXN0b21lci9uZXdjdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL25ld2N1c3RvbWVyL25ld2N1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUU7RUFDRSxxQkFBQTtBQ0FKO0FER0U7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0FDRko7QURNQTtFQUNFLFlBQUE7QUNIRjtBRE1BLCtCQUFBO0FBQ0E7RUFDRSxhQUFBO0FDSEY7QURNQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEY7QURJRTtFQUNFLGlCQUFBO0FDRko7QURPQTtFQUNFLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9uZXdjdXN0b21lci9uZXdjdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAvLyBoZWlnaHQ6IDEyMHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbi8vIHdpZHRoOjEwMCU7XG4gIC5zY3JvbGwtaXRlbSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLnNlbGVjdGFibGUtaWNvbntcbiAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICB9XG5cbiAgaW9uLWF2YXRhciBpbWd7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG59XG5cbmlvbi1zY3JvbGxbc2Nyb2xsLWF2YXRhcl17XG4gIGhlaWdodDogNjBweDtcbn1cblxuLyogSGlkZSBpb24tY29udGVudCBzY3JvbGxiYXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gIGRpc3BsYXk6bm9uZTtcbn1cblxuaDV7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGNvbG9yOiBkYXJrY3lhbjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgaW9uLWljb257XG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XG4gIH1cblxufVxuXG4uaW5wdXRmaWxlIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4iLCJpb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zY3JvbGwtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1zY3JvbGxbc2Nyb2xsWF0gLnNlbGVjdGFibGUtaWNvbiB7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cbmlvbi1zY3JvbGxbc2Nyb2xsWF0gaW9uLWF2YXRhciBpbWcge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmlvbi1zY3JvbGxbc2Nyb2xsLWF2YXRhcl0ge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi8qIEhpZGUgaW9uLWNvbnRlbnQgc2Nyb2xsYmFyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogZGFya2N5YW47XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5oNSBpb24taWNvbiB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/newcustomer/newcustomer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/newcustomer/newcustomer.page.ts ***!
  \*************************************************/
/*! exports provided: NewcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcustomerPage", function() { return NewcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _newcustomer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newcustomer.service */ "./src/app/newcustomer/newcustomer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../login/login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");















var NewcustomerPage = /** @class */ (function () {
    //end
    function NewcustomerPage(loginauth, newcustomerservice, genericHTTP, imagePicker, camera, router, route, fb, val, loadingController, alertCtrl, cdRef, platform, common, msg, storage, loginpage, menuCtrl) {
        // cehck withouth login or not
        //console.log(this.loginauth.isloginactive);
        this.loginauth = loginauth;
        this.newcustomerservice = newcustomerservice;
        this.genericHTTP = genericHTTP;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.val = val;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.cdRef = cdRef;
        this.platform = platform;
        this.common = common;
        this.msg = msg;
        this.storage = storage;
        this.loginpage = loginpage;
        this.menuCtrl = menuCtrl;
        this.isLoading = false;
        //  activitylist: AllAct[];
        this.activitylist = [];
        this.test = { "organization": "" };
        this.selectedbprt = '';
        this.img = '';
        this.selectedactivity = '';
        this.selectedbpcat = '';
        this.selectedbpl = '';
        this.selectedcn = '';
        this.isBPLEnabled = true;
        this.validationSummary = '';
        this.firstname = '';
        this.middlename = '';
        this.lastname = '';
        this.firmname = '';
        this.gstno = '';
        this.isClickOnAddress = false;
        this.add1 = '';
        this.add2 = '';
        this.add3 = '';
        this.district = '';
        this.mobileno = '';
        this.email = '';
        this.preferredTransportEmailIDCtrl = '';
        this.isbill = false;
        this.isShip = false;
        this.fileUrl = '';
        this.edtitcustid = '';
        this.reftextcount = 0;
        this.IsExisting = "false";
        this.firstnamereq = '';
        this.lastnamereq = '';
        this.firmnamereq = '';
        this.mmstRegioncode = "";
        this.isdesktop = false;
        this.comdatasingle = [];
        this.today = new Date().toJSON().split('T')[0];
        this.isNewRegistration = false;
        this.singlephoto = [];
        this.showPreferredTransportControl = false;
        this.showPreferredTransportNameControl = false;
        this.validation_messages = {
            'selectedactivity': [
                { type: 'required', message: ' *Please Select Activity.' }
            ],
            'selectedcn': [
                { type: 'required', message: '*Please Select Customer Nature' }
            ],
            'firstname': [
                { type: 'required', message: '*Please Enter First Name' }
            ],
            'lastname': [
                { type: 'required', message: '*Please Enter Last Name' }
            ],
            'firmname': [
                { type: 'required', message: '*Please Enter Firm Name' }
            ],
            'add1': [
                { type: 'required', message: '*Please Enter Address Line 1' }
            ],
            'selectedsalesarea': [
                { type: 'required', message: ' *Please Select Sales Area.' }
            ],
            'pincode': [
                { type: 'required', message: '*Please Enter Pin Code' }
            ],
            'selectedarea': [
                { type: 'required', message: '*Please Select Area.' }
            ],
            'mobileno': [
                { type: 'required', message: '*Please Enter Mobile No.' },
                { type: 'InvalidNumber', message: '*Please Enter Valid Mobile No.' }
            ],
            'panno': [
                { type: 'InvalidPanno', message: '*Please Enter Valid PAN No.' }
            ],
            'email': [
                { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }
            ],
            'gstno': [
                { type: 'InvalidgstNumber', message: '*Please Enter Valid GST No.' }
            ],
            'selectedbpcat': [
                { type: 'required', message: '*Please Select Business Partner Category' }
            ],
            'preferredTransportNameMss': [
                { type: 'required', message: '*Please Enter Preferred Transport Name' }
            ],
            'preferredTransportContactNumberCtrlMss': [
                { type: 'required', message: '*Please Enter Preferred Transport Contact Number' },
                { type: 'InvalidNumber', message: '*Please Enter Valid Mobile No.' }
            ],
            'preferredTransportEmailIDCtrl': [
                { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }
            ]
        };
        if (!this.loginauth.isloginactive) {
            this.storage.remove('username');
            this.storage.remove('password');
        }
        this.form = this.fb.group({
            selectedactivity: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            selectedcn: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            firstname: [],
            middlename: [],
            lastname: [],
            firmname: [],
            panno: [],
            selectedbpl: [],
            selectedbprt: [],
            selectedbpcat: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            add1: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            add2: [],
            add3: [],
            selectedsalesarea: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            pincode: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            selectedarea: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            mobileno: [, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, val.numberValid],
            //   email: [,this.val.emailValid],
            email: [],
            onecustomer: [],
            isbill: [],
            isShip: [],
            gstno: [],
            num: [],
            preferredCustomerTransport: [],
            preferredTransportName: [],
            preferredTransportContactNumberCtrl: [],
            preferredTransportEmailIDCtrl: []
        });
        this.getrout();
    }
    NewcustomerPage.prototype.refChange = function (event) {
    };
    NewcustomerPage.prototype.portChange = function (event) {
    };
    //async search
    NewcustomerPage.prototype.filterPorts = function (Allcustomer1, text) {
        var _this = this;
        return Allcustomer1.filter(function (port) {
            return _this.onecustomer.sfname.toLowerCase().indexOf(text) !== -1 ||
                _this.onecustomer.slname.toLowerCase().indexOf(text) !== -1 ||
                _this.onecustomer.sfirmName.toLowerCase().indexOf(text) !== -1;
        });
    };
    NewcustomerPage.prototype.searchref = function (event) {
        this.reftextcount++;
        if (this.reftextcount == 3) {
            var text = event.text.trim().toLowerCase();
            event.component.startSearch();
            // Close any running subscription.
            if (this.portsSubscription) {
                this.portsSubscription.unsubscribe();
            }
            if (!text) {
                // Close any running subscription.
                if (this.portsSubscription) {
                    this.portsSubscription.unsubscribe();
                }
                event.component.items = [];
                event.component.endSearch();
                return;
            }
            // this.portsSubscription = this.newcustomerservice.getreferalcustmer(this.selectedactivity).subscribe(data => {
            //   // Subscription will be closed when unsubscribed manually.
            //   const response = data['response'];
            //   var organization = response.data.map(function (customer) {
            //     customer.sfname = customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname)
            //     customer.sfname = (customer.sfname == null ? "" : customer.sfname)
            //     return customer
            //   });
            //   this.Allcustomer = organization;
            //   if (this.portsSubscription.closed) {
            //     return;
            //   }
            //   event.component.items = this.filterPorts(this.Allcustomer, text);
            //   event.component.endSearch();
            // });
            this.reftextcount;
        }
    };
    NewcustomerPage.prototype.getrout = function () {
        var _this = this;
        try {
            //console.log("getrout()1");
            this.storage.get('isNewRegistration').then(function (strisNewRegistration) {
                if (strisNewRegistration) {
                    _this.isNewRegistration = strisNewRegistration;
                    if (_this.isNewRegistration == true) {
                        // this.loginauth.ReadOnlyparameter = 'user=ionic.appuser&password=ionic.appuser';
                        // this.storage.set('username', "ionic.appuser");
                        // this.storage.set('password', "ionic.appuser");
                        // this.storage.set('ipport', this.loginauth.commonurl);
                        // this.loginauth.parameter = 'user=ionic.appuser&password=ionic.appuser';
                        // this.loginauth.user = 'ionic.appuser';
                        // this.loginauth.pass = 'ionic.appuser';
                        // this.genericHTTP.ReadOnlyUsername = 'ionic.appuser';
                        // this.genericHTTP.ReadOnlypassword = 'ionic.appuser';
                        _this.BindallactivitynewReg();
                    }
                }
            });
        }
        catch (error) {
            // console.log("getrout()-ERROR:",error);	
        }
    };
    NewcustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.form.reset();
        this.fileUrl = "";
        this.IsExisting = "false";
        this.compliancedata = null;
        this.img = '';
        try {
            setTimeout(function () {
                _this.route.queryParams.subscribe(function (params) {
                    _this.edtitcustid = params["selectedcustomer"];
                });
                _this.checkplatform();
                if (_this.isNewRegistration != true) {
                    _this.Bindallactivity();
                }
                else {
                    _this.menuCtrl.enable(false);
                }
            }, 1500);
        }
        catch (error) {
        }
        //Referal Code
        // this.BindAllrefcustomer();
    };
    NewcustomerPage.prototype.ionViewWillEnter = function () {
        if (this.isNewRegistration == true) {
            //  console.log("ionViewWillEnter()1");	
            this.menuCtrl.enable(false);
        }
    };
    // chkcache() {
    //   try {
    //     if (this.loginauth.parameter == undefined) {
    //       var varusername = "";
    //       var varpassword = "";
    //       this.storage.get('username').then((username) => {
    //         if (username) {
    //           varusername = username;
    //         }
    //       });
    //       this.storage.get('password').then((password) => {
    //         if (password) {
    //           varpassword = password;
    //         }
    //       });
    //       this.storage.get('ipport').then((ipport) => {
    //         if (ipport) {
    //           this.loginpage.isipportvisible = false;
    //           this.loginpage.ipport = ipport;
    //           this.loginauth.commonurl = ipport + '/openbravo/'; //http(s) is added by nilesh
    //         } else {
    //           this.loginpage.isipportvisible = true;
    //         }
    //       });
    //       setTimeout(() => {
    //         this.common.LoginonClick(varusername, varpassword, 'newcustomer')
    //       }, 500);
    //     }
    //   }
    //   catch {
    //   }
    // }
    NewcustomerPage.prototype.checkplatform = function () {
        try {
            if (!this.msg.isplatformweb) {
                this.isdesktop = false;
            }
            else {
                this.isdesktop = true;
            }
        }
        catch (error) {
        }
    };
    NewcustomerPage.prototype.uploadImage = function (str) {
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
    NewcustomerPage.prototype.uploadcompImage = function (str, id) {
        try {
            for (var k = 0; k < str.target.files.length; k++) {
                this.inneruploadcompImage(str, k, id);
                this.timeout(500);
            }
        }
        catch (error) {
            //  console.log("Catch",error);	
        }
    };
    NewcustomerPage.prototype.timeout = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    NewcustomerPage.prototype.inneruploadcompImage = function (str, k, id) {
        var _this = this;
        var file = str.target.files[k];
        var fileType = file.type;
        console.log(fileType);
        var myreader = new FileReader();
        myreader.onloadend = function (e) {
            var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
            //  console.log("datacomp "+k,b64);	
            for (var i = 0; i < _this.compliancedata.length; i++) {
                if (_this.compliancedata[i].id == id) {
                    //  console.log("datacomp ",this.compliancedata[i]);	
                    // this.compliancedata[i].imgcomp1[k] = b64;	
                    var existinglength = _this.compliancedata[i].imgcomp.length;
                    _this.compliancedata[i].imgcomp[existinglength] = b64;
                    // console.log("datacomp ",this.compliancedata[i]);	
                    //--------nilesh-----------	
                    try {
                        if (_this.compliancedata[i].Compliance_Type == "DL1VD" && (_this.compliancedata[i].num != "" && _this.compliancedata[i].num != null)) {
                            var a1 = _this.compliancedata[i].num.split("-");
                            var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
                            _this.compliancedata[i].num = dt.toISOString();
                        }
                        if (_this.compliancedata[i].Compliance_Type == "DL2VD" && (_this.compliancedata[i].num != "" && _this.compliancedata[i].num != null)) {
                            {
                                var a1 = _this.compliancedata[i].num.split("-");
                                var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
                                _this.compliancedata[i].num = dt.toISOString();
                            }
                        }
                    }
                    catch (error) {
                        _this.compliancedata[i].num = "";
                        // console.log("Catch");	
                    }
                    //-------end nilesh-----------	
                }
            }
        };
        myreader.readAsDataURL(file);
    };
    NewcustomerPage.prototype.Bindallactivity = function () {
        var _this = this;
        try {
            this.activitylist[0] = this.loginauth.selectedactivity;
            //console.log("Selected Activity",this.loginauth.selectedactivity);
            // this.form.controls["selectedactivity"].setValue(this.loginauth.selectedactivity);
            setTimeout(function () {
                _this.form.controls["selectedactivity"].setValue(_this.activitylist[0].id);
                _this.onActChange();
            }, 500);
            if (this.edtitcustid != undefined || this.edtitcustid == '') {
                this.editCustomer(this.edtitcustid);
            }
            //   this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
            //      this.activitylist = data;
            // console.log("selectedactivity",this.activitylist)
            // if(this.activitylist.length==1){
            //   setTimeout( () => {
            //   this.form.controls["selectedactivity"].setValue(this.activitylist[0].id);
            //   this.onActChange();
            //   },500);
            // }
            //     if (this.edtitcustid != undefined || this.edtitcustid == '') {
            //       this.editCustomer(this.edtitcustid);
            //     }
            //   });
        }
        catch (error) {
        }
    };
    NewcustomerPage.prototype.onClose = function (event) {
        event.component.searchText = "";
    };
    NewcustomerPage.prototype.salseareasearchChange = function (event) {
        var searchtext = event.text; //.replace(/\s/g,'');
        if (searchtext.length % 3 == 0) {
            this.Bindallsalesarea(searchtext);
        }
    };
    //this.form.controls["selectedsalesarea"].setValue(this.customerheader[0].salesareaid);
    NewcustomerPage.prototype.Bindallsalesarea = function (searchtext, salesareaid) {
        var _this = this;
        console.log("bind sales area called");
        try {
            this.newcustomerservice.getsalesarea(this.loginauth.userid, searchtext).subscribe(function (data) {
                _this.leastsalesarealist = data;
                if ((_this.leastsalesarealist.length > _this.loginauth.minlistcount) && (searchtext.trim() == '')) {
                    _this.salesarealist = null;
                }
                else {
                    _this.salesarealist = _this.leastsalesarealist;
                }
                if (!!_this.salesarealist && _this.salesarealist.length == 1) {
                    setTimeout(function () {
                        _this.form.controls["selectedsalesarea"].setValue(_this.salesarealist[0]);
                        console.log('init3');
                    }, 500);
                }
                if (salesareaid) {
                    _this.salesarealist = _this.leastsalesarealist.filter(function (item) { return item.id == salesareaid; });
                    setTimeout(function () {
                        _this.form.controls["selectedsalesarea"].setValue(_this.salesarealist[0]);
                        console.log('init2');
                    }, 500);
                }
            });
        }
        catch (error) {
            console.log("bind sales area called error");
        }
    };
    NewcustomerPage.prototype.onChangecn = function () {
        this.selectedcn = this.form.controls["selectedcn"].value;
        if (this.selectedcn == 'I') {
            this.IsInd = true;
            this.Isfirm = false;
            this.firstnamereq = "*";
            this.lastnamereq = "*";
            this.firmnamereq = "";
            this.form.controls["firstname"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.form.controls["lastname"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.form.controls["firmname"].clearValidators();
        }
        else if (this.selectedcn == 'F') {
            this.IsInd = false;
            this.Isfirm = true;
            this.firstnamereq = "";
            this.lastnamereq = "";
            this.firmnamereq = "*";
            this.form.controls["firstname"].clearValidators();
            this.form.controls["lastname"].clearValidators();
            this.form.controls["firmname"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
        }
        else if (this.selectedcn == 'H') {
            this.IsInd = false;
            this.Isfirm = false;
            this.form.controls["firstname"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.form.controls["lastname"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            this.form.controls["firmname"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
        }
    };
    //Alert message
    NewcustomerPage.prototype.presentAlert = function (Header, SubHeader, Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: Header,
                            subHeader: SubHeader,
                            message: Message,
                            buttons: ['OK']
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
    //Capture Image from Camera
    NewcustomerPage.prototype.takePicture = function (Type, id) {
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
                for (var i = 0; i < _this.compliancedata.length; i++) {
                    if (_this.compliancedata[i].id == id) {
                        _this.compliancedata[i].imgcomp.push(imageData);
                    }
                    //--------nilesh-----------
                    try {
                        if (_this.compliancedata[i].Compliance_Type == "DL1VD" && (_this.compliancedata[i].num != "" && _this.compliancedata[i].num != null)) {
                            _this.compliancedata[i].num = new Date(_this.dateyyyymmddT0000Z(_this.compliancedata[i].num)).toISOString();
                        }
                        if (_this.compliancedata[i].Compliance_Type == "DL2VD" && (_this.compliancedata[i].num != "" && _this.compliancedata[i].num != null)) {
                            {
                                _this.compliancedata[i].num = new Date(_this.dateyyyymmddT0000Z(_this.compliancedata[i].num)).toISOString();
                            }
                        }
                    }
                    catch (error) {
                        _this.compliancedata[i].num = "";
                    }
                    //-------end nilesh-----------
                }
            }
        }, function (err) {
        });
    };
    //Select Image from library	
    NewcustomerPage.prototype.getimage = function (Type, id) {
        // const options: CameraOptions = {
        //   quality: 50,
        //   destinationType: this.camera.DestinationType.DATA_URL,
        //   encodingType: this.camera.EncodingType.JPEG,
        //   mediaType: this.camera.MediaType.PICTURE,
        //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        //   targetWidth:1500,
        //   targetHeight:1500
        // };
        var _this = this;
        var options = {
            quality: 50,
            outputType: 1,
            width: 1500,
            height: 1500
        };
        //----------------------	
        this.imagePicker.getPictures(options).then(function (imageData) {
            if (Type == "PANpic") {
                _this.fileUrl = 'data:image/jpeg;base64,' + imageData[0];
                _this.img = imageData[0];
            }
            if (Type == "complince") {
                for (var i = 0; i < _this.compliancedata.length; i++) {
                    if (_this.compliancedata[i].id == id) {
                        // 	
                        //  console.log(" this.compliancedata[i].imgcomp", imageData);
                        _this.compliancedata[i].imgcomp = _this.compliancedata[i].imgcomp.concat(imageData);
                        // console.log(" this.compliancedata[i].imgcomp", this.compliancedata[i].imgcomp);
                        //  this.compliancedata[i].imgcomp1 = imageData;	
                    }
                    //--------nilesh-----------	
                    try {
                        if (_this.compliancedata[i].Compliance_Type == "DL1VD" && (_this.compliancedata[i].num != "" && _this.compliancedata[i].num != null)) {
                            var valid_date1 = new Date(_this.dateyyyymmddT0000Z(_this.compliancedata[i].num)).toISOString();
                            if (!valid_date1.includes('NaN'))
                                _this.compliancedata[i].num = valid_date1;
                            //   this.compliancedata[i].num=new Date(this.dateyyyymmddT0000Z(this.compliancedata[i].num)).toISOString();
                        }
                        if (_this.compliancedata[i].Compliance_Type == "DL2VD" && (_this.compliancedata[i].num != "" && _this.compliancedata[i].num != null)) {
                            {
                                var valid_date2 = new Date(_this.dateyyyymmddT0000Z(_this.compliancedata[i].num)).toISOString();
                                if (!valid_date2.includes('NaN'))
                                    _this.compliancedata[i].num = valid_date2;
                            }
                        }
                    }
                    catch (error) {
                        //  console.log("error",error)
                        _this.compliancedata[i].num = "";
                    }
                    //-------end nilesh-----------
                }
            }
        }, function (err) { });
    };
    NewcustomerPage.prototype.dateyyyymmddT0000Z = function (dt) {
        try {
            var dl1date = new Date(dt);
            var nmonth = dl1date.getMonth() + 1;
            var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate());
            var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth);
            var yyyy1 = dl1date.getFullYear();
            // this.strfromdate=dd1+"-"+mm1+"-"+yyyy1
            return (yyyy1 + "-" + mm1 + "-" + dd1 + "T00:00Z");
        }
        catch (error) {
            return null;
        }
    };
    NewcustomerPage.prototype.BindAllrefcustomer = function () {
        try {
            this.onecustomer = null;
            // this.newcustomerservice.getreferalcustmer(this.selectedactivity).subscribe(data => {
            //   const response = data['response'];
            //   var organization = response.data.map(function (customer) {
            //     customer.sfname = customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname)
            //     customer.sfname = (customer.sfname == null ? "" : customer.sfname)
            //     return customer
            //   });
            //   if (this.edtitcustid != 'undefined' && this.edtitcustid != '') {
            //     var that = this;
            //     var refcust = organization.filter(function (emp) {
            //       if (emp.id == that.edtitcustid) {
            //         return false;
            //       }
            //       return true;
            //     });
            //   }
            //   this.Allcustomer = refcust;
            // });
        }
        catch (error) {
        }
    };
    NewcustomerPage.prototype.onBpChange = function () {
        var _this = this;
        this.newcustomerservice.getCompilanceDataapi(this.form.controls['selectedbpcat'].value, "").subscribe(function (data11) {
            _this.compliancedata = data11;
            for (var c = 0; c < _this.compliancedata.length; c++) {
                var varscompType = _this.compliancedata[c].scompType;
                _this.compliancedata[c].scompType = _this.compliancedata[c].Compliance_Type;
                _this.compliancedata[c].Compliance_Type = varscompType;
                _this.compliancedata[c].imgcomp1 = [];
                _this.form.addControl(_this.compliancedata[c].Compliance_Type, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]());
            }
        });
    };
    NewcustomerPage.prototype.onBPLChange = function () {
        this.selectedbpl = this.form.controls['selectedbpl'].value;
        if (this.selectedbpl == "S")
            this.isBPLEnabled = false;
        else
            this.isBPLEnabled = true;
    };
    NewcustomerPage.prototype.onActChange = function () {
        var _this = this;
        this.selectedactivity = this.form.controls['selectedactivity'].value;
        console.log("selected activity ", this.selectedactivity);
        //-----------	
        if (this.isNewRegistration == true) {
            var a = this.activitylist.filter(function (item) { return item.id == _this.selectedactivity; });
            this.loginauth.selectedactivity = a[0];
            this.loginauth.userid = null; //this.loginauth.selectedactivity.user_id;	
        }
        console.log("ADDRESS VALIDATION FLAG", this.loginauth.selectedactivity.add_validation_lead);
        if (!!this.loginauth.selectedactivity && !!this.loginauth.selectedactivity.add_validation_lead &&
            this.loginauth.selectedactivity.add_validation_lead == 'Y') {
            var add1 = null;
            add1 = this.form.get('add2');
            add1.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            add1.updateValueAndValidity();
            var add2 = null;
            add2 = this.form.get('add3');
            add2.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
            add2.updateValueAndValidity();
        }
        else {
            var add1 = null;
            add1 = this.form.get('add2');
            add1.clearValidators();
            add1.updateValueAndValidity();
            var add2 = null;
            add2 = this.form.get('add3');
            add2.clearValidators();
            add2.updateValueAndValidity();
        }
        //---------------
        this.getbussnessPartnerCategory();
        this.getTaggedBusinessPartner();
        this.BindAllrefcustomer();
        this.Bindallsalesarea('');
    };
    NewcustomerPage.prototype.getTaggedBusinessPartner = function () {
        var _this = this;
        try {
            this.newcustomerservice.getBPartner(this.selectedactivity).subscribe(function (data) {
                var response = data['response'];
                _this.bplist = response.data;
            });
        }
        catch (error) {
        }
    };
    NewcustomerPage.prototype.getbussnessPartnerCategory = function () {
        var _this = this;
        try {
            this.newcustomerservice.getBPCategory(this.selectedactivity).subscribe(function (data) {
                var response = data['response'];
                _this.bpcatlist = response.data;
            });
        }
        catch (error) {
        }
    };
    NewcustomerPage.prototype.onSaveDraft = function (frm) {
        // console.log('selectedsalesarea',this.form.controls["selectedsalesarea"].value)
        // return;
        var _this = this;
        var ismobilexist;
        try {
            if (this.onChangegst() == false) {
                return;
            }
            if (this.addressValidation()) {
                if (this.form.controls.mobileno.valid) {
                    this.newcustomerservice.checkmobileno(this.form.controls["mobileno"].value).subscribe(function (data) {
                        var response = data['response'];
                        if (response.data.length > 0) {
                            ismobilexist = false;
                            _this.presentAlert("Message", "Alert!", "Mobile no. is already exists.");
                            _this.form.controls["mobileno"].setValue("");
                        }
                        else {
                            ismobilexist = true;
                            _this.onSaveDraft1(frm);
                        }
                    });
                }
            }
            else {
                this.presentAlert("Message", "Error!", "Address line cannot be same");
            }
        }
        catch (error) {
            this.presentAlert("Message", "Error!", error);
        }
    };
    NewcustomerPage.prototype.addressValidation = function () {
        // console.log("Address 1",this.form.controls["add1"].value);
        // console.log("Address 2",this.form.controls["add2"].value);
        // console.log("Address 3",this.form.controls["add3"].value);
        if (!!this.form.controls["add1"].value && !!this.form.controls["add2"].value && !!this.form.controls["add3"].value) {
            if (this.form.controls["add1"].value.trim() != this.form.controls["add2"].value.trim()
                && (this.form.controls["add2"].value.trim() != this.form.controls["add3"].value.trim())
                && (this.form.controls["add1"].value.trim() != this.form.controls["add3"].value.trim())) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    NewcustomerPage.prototype.onChangemobileno = function () {
        // this.checkmobileno();
    };
    //for new registration	
    NewcustomerPage.prototype.BindallactivitynewReg = function () {
        var _this = this;
        try {
            // this.commonfun.loadingPresent();	
            // console.log("BindallactivitynewReg");	
            this.newcustomerservice.getUserActivityAgreementStatus().subscribe(function (data) {
                _this.activitylist = data;
                if (_this.activitylist.length == 1) {
                    setTimeout(function () {
                        _this.form.controls["selectedactivity"].setValue(_this.activitylist[0].id);
                        _this.onActChange();
                    }, 500);
                }
            }, function (error) {
                //  console.log("BindallactivitynewReg:error",error);	
            });
        }
        catch (error) {
            // console.log("BindallactivitynewReg:error",error);	
        }
    };
    NewcustomerPage.prototype.onChangepin = function (id, customerId) {
        //var that = this;
        var _this = this;
        if (id === void 0) { id = ''; }
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
                            _this.form.controls["selectedbpcat"].setValue(_this.customerheader[0].bpGroup);
                            try {
                                _this.form.controls["selectedbprt"].setValue(_this.bplist.find(function (item) { return item.id === _this.customerheader[0].tAGBpartner; }));
                                _this.onecustomer = _this.Allcustomer.find(function (item) { return item.id === _this.customerheader[0].newlead; });
                                _this.form.controls["onecustomer"].setValue(_this.Allcustomer.find(function (item) { return item.id === _this.customerheader[0].newlead; }));
                            }
                            catch (_a) { }
                            _this.Bindallsalesarea("", _this.customerheader[0].salesareaid);
                            setTimeout(function () {
                                _this.existingcustomercompliance(customerId);
                            }, 500);
                        }, 1500);
                        // 
                        //   this.city = this.selectedarea.cttv$_identifier;
                    }
                });
                _this.newcustomerservice.getregion(_this.pincodelist[0].region).subscribe(function (data) {
                    var response = data['response'];
                    _this.mmstRegioncode = response.data[0].mmstRegioncode;
                });
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
    NewcustomerPage.prototype.onChange = function (activity) {
    };
    NewcustomerPage.prototype.addAddress = function () {
        this.isClickOnAddress = true;
    };
    NewcustomerPage.prototype.onChangeArea = function () {
        this.selectedarea = this.form.controls["selectedarea"].value;
        //  console.log("this.selectedarea",this.selectedarea);
        if (this.selectedarea != null)
            this.city = this.selectedarea.cttv$_identifier;
    };
    NewcustomerPage.prototype.loadingPresent = function () {
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
                                        a.dismiss().then(function () { return console.log('abort laoding'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NewcustomerPage.prototype.loadingDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController.dismiss().then(function () { return console.log('loading dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    NewcustomerPage.prototype.onSaveDraft1 = function (value) {
        var _this = this;
        console.log('saving draft', value);
        try {
            var referalcode = "";
            if (this.isBPLEnabled == false && value.selectedbprt == null) {
                this.presentAlert("Message", "Alert", "Please Select Tagged Business Partner");
                return;
            }
            if (value.onecustomer != null && value.onecustomer != undefined) {
                referalcode = value.onecustomer.id;
            }
            var taggbp = "";
            if (value.selectedbprt != null) {
                taggbp = value.selectedbprt.id;
            }
            if (this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL1' && (item.num != null && item.num != ""); })) {
                if (this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL1VD' && (item.num === null || item.num === ""); })) {
                    this.presentAlert("Message", "Warning", "Please Select Date for DL No 1");
                    return;
                }
            }
            if (this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL2' && (item.num != null && item.num != ""); })) {
                if (this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL2VD' && (item.num === null || item.num === ""); })) {
                    this.presentAlert("Message", "Warning", "Please Select Date for DL No 2");
                    return;
                }
            }
            var compliancepangstvalid = false;
            var panvalidmsg = "";
            if (this.compliancedata != undefined || this.compliancedata != null) {
                for (var i = 0; i < this.compliancedata.length; i++) {
                    //for PAN validation
                    if (this.compliancedata[i].Compliance_Type == "PAN") {
                        var pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                        if (!pattern.test(this.compliancedata[i].num) && !(this.compliancedata[i].num == '')) {
                            compliancepangstvalid = true;
                            panvalidmsg = "PAN no. in Compliance data is not valid.(Row no. " + (i + 1) + ")";
                            this.presentAlert("Message", "Alert", panvalidmsg);
                            return;
                        }
                        else {
                            this.compliancedata[i].num = this.compliancedata[i].num.toUpperCase();
                        }
                    }
                    //for GST validation
                    if (this.compliancedata[i].Compliance_Type == "GST") {
                        //  console.log("GST",this.compliancedata[i].num);
                        var pattern = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[A-Z]{1}[A-Z\d]{1}$/;
                        if (!pattern.test(this.compliancedata[i].num.toUpperCase()) && !(this.compliancedata[i].num == '')) {
                            compliancepangstvalid = true;
                            panvalidmsg = "GST no. in Compliance data is not valid.(Row no. " + (i + 1) + ")";
                            this.presentAlert("Message", "Alert", panvalidmsg);
                            return;
                        }
                        else {
                            //----state code validation---------
                            var gstn = this.compliancedata[i].num;
                            if (gstn.length > 2) {
                                if (this.mmstRegioncode != gstn.substr(0, 2)) {
                                    //  this.presentAlert("Message","Alert","GST No. in Compliance must be in same state.(Row no. "+ (i+1)+")");
                                    panvalidmsg = "GST No. in Compliance must be of same state.(Row no. " + (i + 1) + ")";
                                    this.compliancedata[i].num = "";
                                    compliancepangstvalid = true;
                                    this.presentAlert("Message", "Alert", panvalidmsg);
                                    return;
                                }
                                else {
                                    this.compliancedata[i].num = this.compliancedata[i].num.toUpperCase();
                                }
                            }
                            //----end state code validation-----
                        }
                    }
                }
            }
            if (compliancepangstvalid == false) {
                this.loadingPresent();
                var jsondata = {
                    "cust_id": this.edtitcustid == undefined ? "" : this.edtitcustid,
                    "referalcode": referalcode,
                    "org_id": "0",
                    "activity_id": value.selectedactivity,
                    "cust_nature": value.selectedcn,
                    "firstname": value.firstname,
                    "middlename": value.middlename,
                    "lastname": value.lastname,
                    "firmname": value.firmname,
                    "panno": value.panno != null ? value.panno.toUpperCase() : "",
                    "img": this.img,
                    "bpc_id": value.selectedbpcat,
                    "complete": "",
                    "mobileno": value.mobileno,
                    "taggbp": taggbp,
                    "add1": value.add1,
                    "add2": value.add2,
                    "add3": value.add3,
                    "pincode": this.pincodelist[0].spincode,
                    "area": value.selectedarea.id,
                    "city": this.selectedarea.cttv,
                    "state": this.pincodelist[0].region,
                    "country": this.pincodelist[0].country,
                    "district": this.pincodelist[0].district,
                    "gst": value.gstno != null ? value.gstno.toUpperCase() : "",
                    "email": value.email == "null" ? '' : value.email,
                    "billing": value.isbill == true ? "true" : "false",
                    "shipping": value.isShip == true ? 'true' : 'false',
                    "mmstComplianceDetails_id": (this.compliancedata == undefined ? "" : this.compliancedata),
                    "level": value.selectedbpl,
                    "salesareaid": value.selectedsalesarea.id,
                };
                if (this.showPreferredTransportNameControl) {
                    jsondata["cusPreferredTransport"] = value.preferredCustomerTransport.id;
                    jsondata["cusPreferredTransportOther"] = this.showPreferredTransportNameControl;
                    jsondata["preferredTransportName"] = value.preferredTransportName;
                    jsondata["preferredTransportContact"] = value.preferredTransportContactNumberCtrl;
                    jsondata["preferredTransportEmailID"] = value.preferredTransportEmailIDCtrl;
                }
                var formData_1 = new FormData();
                var _loop_1 = function (j) {
                    var fileField = this_1.form.get(this_1.compliancedata[j].Compliance_Type).value;
                    if (fileField !== null) {
                        var files = fileField.queue;
                        var k_1 = 0;
                        files.forEach(function (fileItem) {
                            var ext = fileItem.file.name.substr(fileItem.file.name.lastIndexOf('.') + 1);
                            var filename = _this.compliancedata[j].Compliance_Type + '_' + k_1 + '.' + ext;
                            formData_1.append(_this.compliancedata[j].Compliance_Type + '_' + k_1, fileItem.file.rawFile, filename);
                            k_1 = k_1 + 1;
                        });
                        formData_1.append('nooffiles' + this_1.compliancedata[j].Compliance_Type, k_1.toString());
                    }
                };
                var this_1 = this;
                for (var j = 0; j < this.compliancedata.length; j++) {
                    _loop_1(j);
                }
                formData_1.append('jsondata', JSON.stringify(jsondata));
                console.log("jsondata", jsondata);
                this.newcustomerservice.LeadComplete(formData_1).subscribe(function (data) {
                    if (data != null) {
                        _this.response = data;
                        if (_this.response.resposemsg == "success") {
                            _this.loadingDismiss();
                            // this.presentAlert("Message","Success","Customer Saved in Draft.");
                            _this.presentAlert("Message", "Success", "Lead Created Successfully.");
                            _this.Resetpage();
                            if (_this.isNewRegistration == true) {
                                _this.router.navigateByUrl('/login');
                            }
                        }
                        else {
                            _this.loadingDismiss();
                            _this.presentAlert("message", "Fail", _this.response.logmsg);
                        }
                    }
                });
            }
            else {
                this.presentAlert("Alert!", "Warning", panvalidmsg);
            }
        }
        catch (error) {
            console.log(error);
            this.loadingDismiss();
        }
    };
    NewcustomerPage.prototype.onChangegst = function () {
        var validgstn = false;
        try {
            var gstn = this.form.controls["gstno"].value;
            if (gstn != null && gstn != undefined && gstn != "") {
                if (gstn.length > 2) {
                    if (this.mmstRegioncode != gstn.substr(0, 2)) {
                        this.presentAlert("Message", "Alert", "GST Number must be of same state.");
                        this.form.controls["gstno"].setValue("");
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
        catch (error) {
        }
        return validgstn;
    };
    NewcustomerPage.prototype.onConvertintoCustomer = function (value) {
        var _this = this;
        if (this.addressValidation()) {
            this.newcustomerservice.checkmobileno(this.form.controls["mobileno"].value).subscribe(function (data) {
                var response = data['response'];
                if (response.data.length > 0 && (_this.edtitcustid == "" || _this.edtitcustid == undefined)) {
                    _this.loadingDismiss();
                    _this.presentAlert("Message", "Alert!", "Mobile no. is already exists.");
                    _this.form.controls["mobileno"].setValue("");
                }
                else {
                    var compliancedatavalid = false;
                    var compliancepangstvalid = false;
                    var panvalidmsg = "";
                    var gstvalidmsg = "";
                    if (_this.isBPLEnabled == false && value.selectedbprt == null) {
                        _this.presentAlert("Message", "Alert", "Please Select Tagged Business Partner");
                        return;
                    }
                    if (_this.onChangegst() == false) {
                        return;
                    }
                    if (_this.compliancedata != undefined || _this.compliancedata != null) {
                        //validation for the DL1 and DL2
                        // var DL1=false;
                        // var DL2=false;
                        if (_this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL1' && (item.num != null && item.num != ""); })) {
                            if (_this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL1VD' && (item.num === null || item.num === ""); })) {
                                _this.presentAlert("Message", "Warning", "Please Select Date for DL1");
                                return;
                            }
                        }
                        if (_this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL2' && (item.num != null && item.num != ""); })) {
                            if (_this.compliancedata.some(function (item) { return item.Compliance_Type === 'DL2VD' && (item.num === null || item.num === ""); })) {
                                _this.presentAlert("Message", "Warning", "Please Select Date for DL2");
                                return;
                            }
                        }
                        for (var i = 0; i < _this.compliancedata.length; i++) {
                            //for PAN validation
                            if (_this.compliancedata[i].Compliance_Type == "PAN") {
                                var pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
                                if (!pattern.test(_this.compliancedata[i].num) && !(_this.compliancedata[i].num == '')) {
                                    compliancepangstvalid = true;
                                    panvalidmsg = "PAN no. in Compliance data is not valid.(Row no. " + (i + 1) + ")";
                                    _this.presentAlert("Message", "Alert", panvalidmsg);
                                    return;
                                }
                                else {
                                    _this.compliancedata[i].num = _this.compliancedata[i].num.toUpperCase();
                                }
                            }
                            //for GST validation
                            if (_this.compliancedata[i].Compliance_Type == "GST") {
                                var pattern = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[A-Z]{1}[A-Z\d]{1}$/;
                                if (!pattern.test(_this.compliancedata[i].num.toUpperCase()) && !(_this.compliancedata[i].num == '')) {
                                    compliancepangstvalid = true;
                                    panvalidmsg = "GST no. in Compliance data is not valid.(Row no. " + (i + 1) + ")";
                                    _this.presentAlert("Message", "Alert", panvalidmsg);
                                    return;
                                }
                                else {
                                    //----state code validation---------
                                    var gstn = _this.compliancedata[i].num;
                                    if (gstn.length > 2) {
                                        if (_this.mmstRegioncode != gstn.substr(0, 2)) {
                                            //  this.presentAlert("Message","Alert","GST No. in Compliance must be in same state.(Row no. "+ (i+1)+")");
                                            panvalidmsg = "GST No. in Compliance must be of same state.(Row no. " + (i + 1) + ")";
                                            _this.compliancedata[i].num = "";
                                            compliancepangstvalid = true;
                                            _this.presentAlert("Message", "Alert", panvalidmsg);
                                            return;
                                        }
                                        else {
                                            _this.compliancedata[i].num = _this.compliancedata[i].num.toUpperCase();
                                        }
                                    }
                                    //----end state code validation-----
                                }
                            }
                            if (_this.compliancedata[i].ismandatory == true && _this.compliancedata[i].num === "") {
                                compliancedatavalid = true;
                                _this.presentAlert("Message", "Alert", "Please fill Compliance data.");
                                return;
                            }
                            if (_this.compliancedata[i].uploadImg) {
                                var fileField = _this.form.get(_this.compliancedata[i].Compliance_Type).value;
                                if ((fileField === null && !_this.compliancedata[i].isImage)) {
                                    compliancedatavalid = true;
                                    _this.presentAlert("Message", "Alert", "Please fill Compliance data.");
                                    return;
                                }
                            }
                        }
                    }
                    var referalcode = "";
                    if (value.onecustomer != null) {
                        referalcode = value.onecustomer.id;
                    }
                    var taggbp = "";
                    if (value.selectedbprt != null) {
                        taggbp = value.selectedbprt.id;
                    }
                    _this.loadingPresent();
                    var jsondata = {
                        "cust_id": _this.edtitcustid == undefined ? "" : _this.edtitcustid,
                        "referalcode": referalcode,
                        "org_id": "0",
                        "activity_id": value.selectedactivity,
                        "cust_nature": value.selectedcn,
                        "firstname": value.firstname,
                        "middlename": value.middlename,
                        "lastname": value.lastname,
                        "firmname": value.firmname,
                        "panno": value.panno != null ? value.panno.toUpperCase() : "",
                        "img": _this.img,
                        "bpc_id": value.selectedbpcat,
                        "complete": "true",
                        "mobileno": value.mobileno,
                        "taggbp": taggbp,
                        "add1": value.add1,
                        "add2": value.add2,
                        "add3": value.add3,
                        "pincode": _this.pincodelist[0].spincode,
                        "area": value.selectedarea.id,
                        "city": _this.selectedarea.cttv,
                        "state": _this.pincodelist[0].region,
                        "country": _this.pincodelist[0].country,
                        "district": _this.pincodelist[0].district,
                        "gst": value.gstno != null ? value.gstno.toUpperCase() : "",
                        "email": value.email,
                        "billing": value.isbill == true ? "true" : "false",
                        "shipping": value.isShip == true ? 'true' : 'false',
                        "mmstComplianceDetails_id": (_this.compliancedata == undefined ? "" : _this.compliancedata),
                        "level": value.selectedbpl,
                        "salesareaid": value.selectedsalesarea.id,
                    };
                    if (_this.showPreferredTransportNameControl) {
                        jsondata["cusPreferredTransport"] = value.preferredCustomerTransport.id;
                        jsondata["cusPreferredTransportOther"] = _this.showPreferredTransportNameControl;
                        jsondata["preferredTransportName"] = value.preferredTransportName;
                        jsondata["preferredTransportContact"] = value.preferredTransportContactNumberCtrl;
                        jsondata["preferredTransportEmailID"] = value.preferredTransportEmailIDCtrl;
                    }
                    var formData_2 = new FormData();
                    var _loop_2 = function (j) {
                        var fileField = _this.form.get(_this.compliancedata[j].Compliance_Type).value;
                        if (fileField !== null) {
                            var files = fileField.queue;
                            var k_2 = 0;
                            files.forEach(function (fileItem) {
                                var ext = fileItem.file.name.substr(fileItem.file.name.lastIndexOf('.') + 1);
                                var filename = _this.compliancedata[j].Compliance_Type + '_' + k_2 + '.' + ext;
                                formData_2.append(_this.compliancedata[j].Compliance_Type + '_' + k_2, fileItem.file.rawFile, filename);
                                k_2 = k_2 + 1;
                            });
                            formData_2.append('nooffiles' + _this.compliancedata[j].Compliance_Type, k_2.toString());
                        }
                    };
                    for (var j = 0; j < _this.compliancedata.length; j++) {
                        _loop_2(j);
                    }
                    formData_2.append('jsondata', JSON.stringify(jsondata));
                    _this.newcustomerservice.LeadComplete(formData_2).subscribe(function (data) {
                        if (data != null) {
                            _this.response = data;
                            if (_this.response.resposemsg == "success") {
                                _this.loadingDismiss();
                                _this.presentAlert("Message", "Success", "Lead Converted Successfully.");
                                _this.Resetpage();
                                if (_this.isNewRegistration == true) {
                                    _this.router.navigateByUrl('/login');
                                }
                            }
                            else {
                                _this.loadingDismiss();
                                _this.presentAlert("Message", "Fail", _this.response.logmsg);
                            }
                        }
                        else {
                            _this.loadingDismiss();
                        }
                    });
                }
            });
        }
        else {
            this.presentAlert("Message", "Error!", "Address line cannot be same");
        }
    };
    NewcustomerPage.prototype.Resetpage = function () {
        this.edtitcustid = "";
        this.form.reset();
        this.IsExisting = "false";
        this.fileUrl = "";
        this.compliancedata = null;
        this.img = '';
        this.Iscnvalidate = false;
        this.arealist = null;
        this.state = '';
        this.country = '';
        this.district = '';
        this.city = '';
        if (this.activitylist.length == 1) {
            this.form.controls["selectedactivity"].setValue(this.activitylist[0].id);
            // this.onActChange();
        }
        // this.router.navigateByUrl('/newcustomer');
        //this.router.navigateByUrl('/newcustomer');
        //this.router.navigate([this.router.url]);
    };
    NewcustomerPage.prototype.ChosePic = function (Type, mmstComplianceDetails_id) {
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
                                        _this.getimage(Type, mmstComplianceDetails_id);
                                    }
                                },
                                {
                                    text: 'Camera',
                                    handler: function (data) {
                                        _this.takePicture(Type, mmstComplianceDetails_id);
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
    NewcustomerPage.prototype.ImageViewr = function (img, rowcompliancedata) {
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
                                                _this.compliancedata = _this.compliancedata.map(function (comdata) {
                                                    if (comdata.scompType == rowcompliancedata.scompType) {
                                                        comdata.imgcomp = comdata.imgcomp.filter(function (item) { return item != img; });
                                                    }
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
    NewcustomerPage.prototype.change = function (value) {
        //manually launch change detection
        this.cdRef.detectChanges();
        // this.username = value.length > 8 ? value.substring(0,8) : value;
        this.form.controls["mobileno"].setValue(value.length > 8 ? value.substring(0, 8) : value);
    };
    NewcustomerPage.prototype.editCustomer = function (customerId) {
        //Referal Code
        var _this = this;
        if (customerId != '') {
            this.loadingPresent();
            //  this.newcustomerservice.geteditcustmerheader(customerId).subscribe(data => {
            this.newcustomerservice.geteditcustmerdetailapi(customerId).subscribe(function (data) {
                var response1 = data;
                _this.customerheader = response1;
                console.log("Pravin", response1);
                //bind Category
                _this.newcustomerservice.getBPCategory(_this.customerheader[0].mmstOrgAct).subscribe(function (data) {
                    var response = data['response'];
                    _this.bpcatlist = response.data;
                    _this.selectedbpcat = _this.customerheader[0].bpGroup;
                });
                _this.form.controls["selectedactivity"].setValue(_this.customerheader[0].mmstOrgAct);
                _this.form.controls["selectedcn"].setValue(_this.customerheader[0].scusNature);
                _this.form.controls["firstname"].setValue(_this.customerheader[0].sfname);
                _this.form.controls["middlename"].setValue(_this.customerheader[0].smname);
                _this.form.controls["lastname"].setValue(_this.customerheader[0].slname);
                _this.form.controls["panno"].setValue(_this.customerheader[0].spanno);
                _this.form.controls["firmname"].setValue(_this.customerheader[0].sfirmName);
                _this.form.controls["email"].setValue(_this.customerheader[0].semail == "null" ? '' : _this.customerheader[0].semail);
                _this.form.controls["mobileno"].setValue(_this.customerheader[0].smobile);
                _this.form.controls["selectedsalesarea"].setValue(_this.customerheader[0].salesarea);
                if (!!_this.customerheader[0].preferred_cus_transport) {
                    _this.newcustomerservice.getPreferredTransportModes().subscribe(function (response) {
                        _this.preferredTransportList = response[0];
                        _this.preferredTransportList.forEach(function (transportResponse) {
                            if (transportResponse.id == _this.customerheader[0].preferred_cus_transport) {
                                _this.selectedPreferredTransport = transportResponse;
                            }
                        });
                    });
                }
                //  this.form.controls["preferredTransportName"].setValue("PRavin");
                setTimeout(function () {
                    if (!!_this.customerheader[0].preferred_transport_name) {
                        _this.form.controls["preferredTransportName"].setValue(_this.customerheader[0].preferred_transport_name);
                    }
                    if (!!_this.customerheader[0].preferred_transport_contact) {
                        _this.form.controls["preferredTransportContactNumberCtrl"].setValue(_this.customerheader[0].preferred_transport_contact);
                    }
                    if (!!_this.customerheader[0].preferred_transport_email && _this.customerheader[0].preferred_transport_email != "null") {
                        _this.form.controls["preferredTransportEmailIDCtrl"].setValue(_this.customerheader[0].preferred_transport_email);
                    }
                }, 1000);
                _this.IsExisting = "true";
                if (_this.customerheader[0].mmstLovVal$_identifier == "Secondary") {
                    _this.form.controls["selectedbpl"].setValue("S");
                    _this.isBPLEnabled = false;
                }
                if (_this.customerheader[0].mmstLovVal$_identifier == "Primary") {
                    _this.form.controls["selectedbpl"].setValue("P");
                    _this.isBPLEnabled = true;
                }
                _this.customerbilling = _this.customerheader;
                _this.form.controls["add1"].setValue(_this.customerbilling[0].saddress1);
                _this.form.controls["add2"].setValue(_this.customerbilling[0].saddress2 == "null" ? '' : _this.customerbilling[0].saddress2);
                _this.form.controls["add3"].setValue(_this.customerbilling[0].saddress3 == "null" ? '' : _this.customerbilling[0].saddress3);
                _this.form.controls["pincode"].setValue(_this.customerbilling[0].spincode);
                _this.form.controls["isbill"].setValue(_this.customerbilling[0].isbilling.toString() === "Y" ? true : false);
                _this.form.controls["isShip"].setValue(_this.customerbilling[0].isshipping.toString() === "Y" ? true : false);
                _this.form.controls["gstno"].setValue(_this.customerbilling[0].mmstSgstno);
                _this.onActChange();
                _this.onChangepin(_this.customerbilling[0].mmstPostOffVal, customerId);
                //
            });
            //   this.newcustomerservice.geteditcustmerbilling(customerId).subscribe(data => {
            //      const response = data['response'];
            // 
            //   });
        }
        this.loadingDismiss();
    };
    NewcustomerPage.prototype.existingcustomercompliance = function (customerId) {
        var _this = this;
        this.newcustomerservice.getCompilanceDataapi("", customerId).subscribe(function (data11) {
            _this.compliancedata = data11;
            for (var c = 0; c < _this.compliancedata.length; c++) {
                var varscompType = _this.compliancedata[c].scompType;
                _this.compliancedata[c].scompType = _this.compliancedata[c].Compliance_Type;
                _this.compliancedata[c].Compliance_Type = varscompType;
                try {
                    if (_this.compliancedata[c].Compliance_Type == "DL1VD" && (_this.compliancedata[c].num != "" && _this.compliancedata[c].num != null)) {
                        var a1 = _this.compliancedata[c].num.split("-");
                        var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
                        _this.compliancedata[c].num = dt.toISOString();
                    }
                    if (_this.compliancedata[c].Compliance_Type == "DL2VD" && (_this.compliancedata[c].num != "" && _this.compliancedata[c].num != null)) {
                        {
                            var a1 = _this.compliancedata[c].num.split("-");
                            var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
                            _this.compliancedata[c].num = dt.toISOString();
                        }
                    }
                }
                catch (error) {
                    _this.compliancedata[c].num = "";
                }
            }
        });
    };
    NewcustomerPage.prototype.existingcustomercompliance1 = function (customerId) {
        var _this = this;
        this.newcustomerservice.geteditcustmercompliance(customerId).subscribe(function (data) {
            var compliancedataresponse = data['response'];
            //var that=this;
            for (var i = 0; i < compliancedataresponse.data.length; i++) {
                var Isfoundsame = false;
                for (var j = 0; j < _this.compliancedata.length; j++) {
                    if (compliancedataresponse.data[i].scomplianceType == _this.compliancedata[j].Compliance_Type) {
                        Isfoundsame = true;
                        _this.compliancedata[j].mmstComplianceDetails_id = compliancedataresponse.data[i].id;
                        _this.compliancedata[j].Compliance_Type = compliancedataresponse.data[i].scomplianceType;
                        _this.compliancedata[j].scompType = compliancedataresponse.data[i].scomplianceType;
                        _this.compliancedata[j].num = compliancedataresponse.data[i].snumber == null ? "" : compliancedataresponse.data[i].snumber;
                        _this.compliancedata[j].isImage = compliancedataresponse.data[i].image == null ? "" : compliancedataresponse.data[i].image;
                    }
                }
            }
        });
    };
    NewcustomerPage.prototype.onCusPreTransChange = function () {
        var _this = this;
        try {
            // console.log("SELECTED PREPED TRANS",this.selectedPreferredTransport);
            this.form.controls['preferredTransportName'].reset();
            this.form.controls['preferredTransportContactNumberCtrl'].reset();
            this.form.controls['preferredTransportEmailIDCtrl'].reset();
            if (this.selectedPreferredTransport.name == "Others") {
                this.showPreferredTransportNameControl = true;
                var control2 = null;
                control2 = this.form.get('preferredTransportName');
                control2.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                control2.updateValueAndValidity();
                var control4 = null;
                control4 = this.form.get('preferredTransportContactNumberCtrl');
                control4.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$"));
                control4.updateValueAndValidity();
            }
            else {
                setTimeout(function () {
                    _this.showPreferredTransportNameControl = false;
                });
                var control2 = null;
                control2 = this.form.get('preferredTransportName');
                control2.clearValidators();
                control2.updateValueAndValidity();
                var control4 = null;
                control4 = this.form.get('preferredTransportContactNumberCtrl');
                control4.clearValidators();
                control4.updateValueAndValidity();
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    NewcustomerPage.prototype.onShippingChange = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var control1, result, control1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        console.log("Shipping Address ", value.detail.checked);
                        if (!value.detail.checked) return [3 /*break*/, 3];
                        if (!(this.loginauth.selectedactivity.preferred_transport_required == 'Y')) return [3 /*break*/, 2];
                        control1 = null;
                        control1 = this.form.get('preferredCustomerTransport');
                        control1.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
                        control1.updateValueAndValidity();
                        this.showPreferredTransportControl = true;
                        this.common.loadingPresent();
                        return [4 /*yield*/, this.newcustomerservice.getPreferredTransportModes().toPromise()];
                    case 1:
                        result = _a.sent();
                        this.preferredTransportList = result[0];
                        //   console.log("Preferred Transport Modes ",this.preferredTransportList);
                        this.common.loadingDismiss();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        setTimeout(function () {
                            _this.showPreferredTransportControl = false;
                            _this.showPreferredTransportNameControl = false;
                        });
                        control1 = null;
                        control1 = this.form.get('preferredCustomerTransport');
                        control1.clearValidators();
                        control1.updateValueAndValidity();
                        this.form.controls['preferredCustomerTransport'].reset();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        this.common.loadingDismiss();
                        console.log(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    NewcustomerPage.prototype.onChangePreferredTransportContact = function () {
    };
    NewcustomerPage.prototype.testMethod = function (form) {
        console.log(form);
    };
    NewcustomerPage.ctorParameters = function () { return [
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
        { type: _newcustomer_service__WEBPACK_IMPORTED_MODULE_5__["NewcustomerService"] },
        { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_14__["GenericHttpClientService"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _provider_validator_helper__WEBPACK_IMPORTED_MODULE_8__["Validator"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_10__["Commonfun"] },
        { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_13__["Message"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
        { type: _login_login_page__WEBPACK_IMPORTED_MODULE_12__["LoginPage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"] }
    ]; };
    NewcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newcustomer',
            template: __webpack_require__(/*! raw-loader!./newcustomer.page.html */ "./node_modules/raw-loader/index.js!./src/app/newcustomer/newcustomer.page.html"),
            styles: [__webpack_require__(/*! ./newcustomer.page.scss */ "./src/app/newcustomer/newcustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"], _newcustomer_service__WEBPACK_IMPORTED_MODULE_5__["NewcustomerService"],
            _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_14__["GenericHttpClientService"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _provider_validator_helper__WEBPACK_IMPORTED_MODULE_8__["Validator"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_10__["Commonfun"],
            _provider_message_helper__WEBPACK_IMPORTED_MODULE_13__["Message"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
            _login_login_page__WEBPACK_IMPORTED_MODULE_12__["LoginPage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"]])
    ], NewcustomerPage);
    return NewcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=newcustomer-newcustomer-module-es5.js.map