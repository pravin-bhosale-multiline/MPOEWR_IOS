(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cardinal-vender-approval-vender-approval-details-vender-approval-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Compliant Acceptance Details\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <!-- <ion-buttons (click)=\"refreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n    <!-- Detail Tab -->\n    <mat-step [stepControl]=\"detailFormGroup\">\n      <form [formGroup]=\"detailFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Details</ng-template>\n        <!-- complaint_no -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Complaint No.</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.complaintno\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- complaint_date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Complaint Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.complaintdate\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Document Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Document Type</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.doctype[0].name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Name of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Name of Complainer</mat-label>\n          <input matInput formControlName=\"nameOfComplainerCtrl\" [(ngModel)]=\"service.nameofcomplainer\">\n        </mat-form-field>\n        <!-- Designation of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Designation of Complainer</mat-label>\n          <input matInput formControlName=\"desigOfComplainerCtrl\" [(ngModel)]=\"service.desofcomplnr[0].name\">\n        </mat-form-field>\n        <!-- Contact No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Contact No</mat-label>\n          <input matInput formControlName=\"mobilenoCtrl\" [(ngModel)]=\"service.contnumber\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.mobileno\">\n              <div *ngIf=\"detailFormGroup.get('mobilenoCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Email ID -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Email ID</mat-label>\n          <input matInput formControlName=\"emailIDCtrl\" [(ngModel)]=\"service.email\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div *ngIf=\"detailFormGroup.get('emailIDCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Event Date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Event Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.eventdate\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Complaint Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Complaint Description</mat-label>\n          <input matInput formControlName=\"complaintDescriptionCtrl\" [(ngModel)]=\"service.description\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.complaintDescription\">\n              <div\n                *ngIf=\"detailFormGroup.get('complaintDescriptionCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext (click)=\"matDetailSettper($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Product Compliant Tab-->\n    <mat-step [stepControl]=\"productCompliantFormGroup\" *ngIf=\"isProductCompliantTab\">\n      <form [formGroup]=\"productCompliantFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Product Compliant</ng-template>\n        <!-- Lot No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput formControlName=\"lotNoCtrl\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperProductCompliant($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Consumables Tab  -->\n    <mat-step [stepControl]=\"consumablesFormGroup\" *ngIf=\"isConsumablesTab\">\n      <form [formGroup]=\"consumablesFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Consumables</ng-template>\n        <!-- Lot No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput formControlName=\"lotNoConsumablesCtrl\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperConsumables($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Equiment Tab-->\n    <mat-step [stepControl]=\"equimentFormGroup\" *ngIf=\"isEquimentTab\">\n      <form [formGroup]=\"equimentFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Equiment</ng-template>\n        <!-- Serial No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Serial No.</mat-label>\n          <input matInput formControlName=\"serialNoCtrl\" [(ngModel)]=\"service.serialno\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.serialNo\">\n              <div *ngIf=\"equimentFormGroup.get('serialNoCtrl').hasError(validation.type) && equimentStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Contract Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Contract Type</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"contracttype\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Invoice No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Invoice No.</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.invoiceno\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Invoice Date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Invoice Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.invoicedate\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Error Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Error Code</mat-label>\n            <input matInput [disabled]='true' [(ngModel)]=\"service.errorcode[0].code\" [ngModelOptions]=\"{standalone: true}\">  \n        </mat-form-field>\n        <!-- Dealer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Dealer Name</mat-label>\n          <input matInput formControlName=\"dealerNameCtrl\" [(ngModel)]=\"service.dealername\">\n        </mat-form-field>\n         <!-- New Dealer Name\n         <mat-form-field class=\"example-full-width\">\n          <mat-label>Dealer Name</mat-label>\n          <input matInput formControlName=\"newDealerNameCtrl\" [(ngModel)]=\"service.newdealername\">\n        </mat-form-field> -->\n        \n        <!-- Sales Representative -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Sales Representative</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.salesrep\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Installation Date -->\n         <mat-form-field class=\"example-full-width\">\n          <mat-label>Installation Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.installationdate\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperEquiment($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- SKU Details Tab-->\n    <mat-step [stepControl]=\"skuDetailsFormGroup\">\n      <form [formGroup]=\"skuDetailsFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>SKU Details</ng-template>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>SKU Code</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.skucode\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- SKU Name / Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>SKU Name / Description</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.skuname\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Brand Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Brand Name</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.brandname\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Product to be returned -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Product to be returned</mat-label>\n          <mat-select [disabled]='true' [(ngModel)]=\"productToBeReturn\" [ngModelOptions]=\"{standalone: true}\">\n            <mat-option value=\"Yes\">Yes</mat-option>\n            <mat-option value=\"No\">No</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperSKUDetails($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Customer Detail Tab -->\n    <mat-step [stepControl]=\"customerDetailFormGroup\">\n      <form [formGroup]=\"customerDetailFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Customer Detail</ng-template>\n        <!-- Customer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Name</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.custname\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Customer Address 1 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 1</mat-label>\n          <input matInput formControlName=\"customerAddress1Ctrl\" [(ngModel)]=\"service.add1\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress1\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('customerAddress1Ctrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Customer Address 2 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 2</mat-label>\n          <input matInput formControlName=\"customerAddress2Ctrl\" [(ngModel)]=\"service.add2\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress2\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('customerAddress2Ctrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Customer Address 3 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 3</mat-label>\n          <input matInput formControlName=\"customerAddress3Ctrl\" [(ngModel)]=\"service.add3\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress3\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('customerAddress3Ctrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Pin Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Pin Code</mat-label>\n          <input type=\"number\" matInput formControlName=\"pinCodeCtrl\" [(ngModel)]=\"service.pincode\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.pinCode\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('pinCodeCtrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Area -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Area</mat-label>\n          <input matInput [disabled]='true' formControlName=\"areaCtrl\">\n        </mat-form-field>\n        <!-- City -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>City</mat-label>\n          <input matInput [disabled]='true' formControlName=\"cityCtrl\">\n        </mat-form-field>\n        <!-- State -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>State</mat-label>\n          <input matInput [disabled]='true' formControlName=\"stateCtrl\">\n        </mat-form-field>\n        <!-- Country -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Country</mat-label>\n          <input matInput [disabled]='true' formControlName=\"countryCtrl\">\n        </mat-form-field>\n        <!-- Service Engineer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Service Engineer Name</mat-label>\n            <mat-select formControlName=\"serviceEngineerNameCtrl\" [(ngModel)]=\"serviceEngSelected\"\n                (selectionChange)=\"serviceEngSelectedChange(serviceEngSelected)\">\n               <mat-option *ngFor=\"let serviceEngObj of serviceEngList\" [value]=\"serviceEngObj\">\n                  {{serviceEngObj.name}}\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n         <!--Service Engineer Contact No -->\n         <mat-form-field class=\"example-full-width\">\n          <mat-label>Contact No</mat-label>\n          <input matInput formControlName=\"serviceEngMobilenoCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.mobileno\">\n              <div *ngIf=\"customerDetailFormGroup.get('serviceEngMobilenoCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Date of Visit -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Date of Visit</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\"  formControlName=\"dateOfVisitCtrl\" max=\"2050-12-31\" [min]=\"maxDate | date:'yyyy-MM-dd'\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n        <div padding-left>\n          <ng-container *ngFor=\"let validation of validation_messages.dateOfVisitCtrlErrorMessage\">\n            <div *ngIf=\"customerDetailFormGroup.get('serviceVendorRemarksCtrl').hasError(validation.type) && detailsStepValid\">\n              <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n            </div>\n          </ng-container>\n        </div>\n\n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Date of Visit</mat-label>\n          <input type=\"date\" matInput formControlName=\"dateOfVisitCtrl\" [min]=\"maxDate | date:'yyyy-MM-dd'\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.dateOfVisitCtrlErrorMessage\">\n              <div *ngIf=\"customerDetailFormGroup.get('serviceVendorRemarksCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field> -->\n        <!-- Service Vendor Remarks -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Service Vendor Remarks</mat-label>\n          <input matInput formControlName=\"serviceVendorRemarksCtrl\" [(ngModel)]=\"service.service_vendor_remarks\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.serviceVendorRemarksCtrlErrorMessage\">\n              <div *ngIf=\"customerDetailFormGroup.get('serviceVendorRemarksCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <div>\n          <ion-row>\n            <ion-col size=\"6\" size-lg=\"3\" no-padding>\n              <ion-button size=\"default\" [disabled]=\"!customerDetailFormGroup.controls.serviceVendorRemarksCtrl.valid\" expand=\"block\" color=\"primary\" (click)=\"submit($event,'Reject')\">Reject Complaint</ion-button>\n            </ion-col>\n            <ion-col size=\"6\" size-lg=\"3\" no-padding>\n              <ion-button size=\"default\" [disabled]=\"!customerDetailFormGroup.valid\" expand=\"block\" color=\"primary\" (click)=\"submit($event,'Accept')\">Accept Complaint\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n       \n      </form>\n    </mat-step>\n  </mat-vertical-stepper>\n</ion-content>"

/***/ }),

/***/ "./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: VenderApprovalDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderApprovalDetailsPageModule", function() { return VenderApprovalDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vender_approval_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vender-approval-details.page */ "./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");









var routes = [
    {
        path: '',
        component: _vender_approval_details_page__WEBPACK_IMPORTED_MODULE_6__["VenderApprovalDetailsPage"]
    }
];
var VenderApprovalDetailsPageModule = /** @class */ (function () {
    function VenderApprovalDetailsPageModule() {
    }
    VenderApprovalDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vender_approval_details_page__WEBPACK_IMPORTED_MODULE_6__["VenderApprovalDetailsPage"]]
        })
    ], VenderApprovalDetailsPageModule);
    return VenderApprovalDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-stepper-vertical {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.cus {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n\nion-datetime {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9jYXJkaW5hbC92ZW5kZXItYXBwcm92YWwvdmVuZGVyLWFwcHJvdmFsLWRldGFpbHMvdmVuZGVyLWFwcHJvdmFsLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJkaW5hbC92ZW5kZXItYXBwcm92YWwvdmVuZGVyLWFwcHJvdmFsLWRldGFpbHMvdmVuZGVyLWFwcHJvdmFsLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FEQ0U7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDRztFQUNDLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NhcmRpbmFsL3ZlbmRlci1hcHByb3ZhbC92ZW5kZXItYXBwcm92YWwtZGV0YWlscy92ZW5kZXItYXBwcm92YWwtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY3Vze1xuICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIGlvbi1kYXRldGltZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iLCIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: VenderApprovalDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderApprovalDetailsPage", function() { return VenderApprovalDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vender_approval_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../vender-approval.service */ "./src/app/cardinal/vender-approval/vender-approval.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var src_assets_model_complain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/model/complain */ "./src/assets/model/complain.ts");
/* harmony import */ var _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../customer-service/customer-service.service */ "./src/app/cardinal/customer-service/customer-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");










var VenderApprovalDetailsPage = /** @class */ (function () {
    function VenderApprovalDetailsPage(formBuilder, validator, route, router, venderApprovalService, customerService, alertCtrl, commonFunction) {
        this.formBuilder = formBuilder;
        this.validator = validator;
        this.route = route;
        this.router = router;
        this.venderApprovalService = venderApprovalService;
        this.customerService = customerService;
        this.alertCtrl = alertCtrl;
        this.commonFunction = commonFunction;
        this.TAG = "VenderApprovalDetailsPage";
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth() + 1;
        this.day = this.now.getDate();
        this.maxDate = this.year + "-" + this.month + "-" + this.day;
        this.isLinear = false;
        /**
         *
         */
        this.detailsStepValid = false;
        this.equimentStepValid = false;
        this.customerDetailStepValid = false;
        this.validation_messages = {
            'nameOfComplainer': [{ type: 'required', message: '*Please Enter Name of complainer.' }],
            'designation_of_complainer_mss': [{ type: 'required', message: '*Please Enter designation_of_complainer.' }],
            'mobileno': [{ type: 'required', message: '*Please Enter Contact No.' },
                { type: 'InvalidNumber', message: '*Please Enter Valid Contact No.' }],
            'email': [{ type: 'required', message: '*Please Enter Email.' },
                { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }],
            'complaintDescription': [{ type: 'required', message: '*Please Enter Complaint Description' }],
            'serialNo': [{ type: 'required', message: '*Please Enter Serial no .' }],
            'customerAddress1': [{ type: 'required', message: '*Please Enter Customer Address1' }],
            'customerAddress2': [{ type: 'required', message: '*Please Enter Customer Customer Address 2' }],
            'customerAddress3': [{ type: 'required', message: '*Please Enter Customer Customer Address 3' }],
            'pinCode': [{ type: 'required', message: '*Please Enter Pin Code' }],
            'area': [{ type: 'required', message: '*Please Select Your Area' }],
            'dateOfVisitCtrlErrorMessage': [{ type: 'required', message: '*Please Select Date Of Visit' }],
            'serviceVendorRemarksCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Service Vendor Remark' }],
        };
        this.isProductCompliantTab = false;
        this.isConsumablesTab = false;
        this.isEquimentTab = false;
    }
    VenderApprovalDetailsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.route.queryParams.subscribe(function (params) {
                            if (params && params.special) {
                                _this.service = JSON.parse(params.special);
                                // console.log(this.TAG,JSON.parse(params.special));
                            }
                        });
                        this.detailFormGroup = this.formBuilder.group({
                            nameOfComplainerCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            desigOfComplainerCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            mobilenoCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.validator.numberValid],
                            emailIDCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.validator.emailValid],
                            complaintDescriptionCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                        });
                        this.productCompliantFormGroup = this.formBuilder.group({
                            lotNoCtrl: []
                        });
                        this.consumablesFormGroup = this.formBuilder.group({
                            lotNoConsumablesCtrl: []
                        });
                        this.equimentFormGroup = this.formBuilder.group({
                            serialNoCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            dealerNameCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            installationDateCtrl: [],
                        });
                        this.skuDetailsFormGroup = this.formBuilder.group({});
                        this.customerDetailFormGroup = this.formBuilder.group({
                            customerAddress1Ctrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            customerAddress2Ctrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            customerAddress3Ctrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            pinCodeCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            areaCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            cityCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            stateCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            countryCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            serviceEngMobilenoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.validator.numberValid],
                            serviceVendorRemarksCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            dateOfVisitCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                            approveComplaintCtrl: [,],
                            rejectComplaintCtrl: [,],
                            serviceEngineerNameCtrl: [,],
                        });
                        _a = this;
                        return [4 /*yield*/, this.venderApprovalService.getServiceEngList().toPromise()];
                    case 1:
                        _a.serviceEngList = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VenderApprovalDetailsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.commonFunction.loadingPresent();
                        // console.log("Min Date",this.maxDate);
                        if (!!this.service.newdealername) {
                            this.service.dealername = this.service.newdealername;
                        }
                        /**
                         *
                         */
                        // console.log("serveice",this.service);
                        if (this.service.doctype[0].name == 'Product Compliant') {
                            this.isProductCompliantTab = true;
                            this.isConsumablesTab = false;
                            this.isEquimentTab = false;
                            this.productCompliantFormGroup.controls.lotNoCtrl.patchValue(this.service.lotno);
                        }
                        else if (this.service.doctype[0].name == 'Consumables') {
                            this.isProductCompliantTab = false;
                            this.isConsumablesTab = true;
                            this.isEquimentTab = false;
                            this.consumablesFormGroup.controls.lotNoCtrl.patchValue(this.service.lotno);
                        }
                        else if (this.service.doctype[0].name == 'Equipment') {
                            this.isProductCompliantTab = false;
                            this.isConsumablesTab = false;
                            this.isEquimentTab = true;
                        }
                        if (this.service.producttobereturn == "MSNR_Y") {
                            this.productToBeReturn = 'Yes';
                        }
                        else if (this.service.producttobereturn == "MSNR_N") {
                            this.productToBeReturn = 'No';
                        }
                        _a = this;
                        return [4 /*yield*/, this.customerService.getContractTypeList()];
                    case 1: return [4 /*yield*/, (_b.sent()).toPromise()];
                    case 2:
                        _a.contractTypeList = _b.sent();
                        // console.log("contractTypeList",this.contractTypeList);
                        for (i = 0; i < this.contractTypeList.length; i++) {
                            // console.log("contractTypeList of i=",i);
                            if (this.contractTypeList[i].code == this.service.contracttype) {
                                this.contracttype = this.contractTypeList[i].name;
                            }
                        }
                        this.customerDetailFormGroup.controls.areaCtrl.patchValue(this.service.area[0].name);
                        this.customerDetailFormGroup.controls.cityCtrl.patchValue(this.service.city[0].name);
                        this.customerDetailFormGroup.controls.stateCtrl.patchValue(this.service.state[0].name);
                        this.customerDetailFormGroup.controls.countryCtrl.patchValue(this.service.country[0].name);
                        this.commonFunction.loadingDismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    VenderApprovalDetailsPage.prototype.refreshPage = function () {
        try {
        }
        catch (error) {
            //   console.error(this.TAG,error);
        }
    };
    VenderApprovalDetailsPage.prototype.matDetailSettper = function (event) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    };
    VenderApprovalDetailsPage.prototype.matSettperProductCompliant = function (event) {
        try {
        }
        catch (error) {
            // console.error(this.TAG,error);
        }
    };
    VenderApprovalDetailsPage.prototype.matSettperConsumables = function (event) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    };
    VenderApprovalDetailsPage.prototype.matSettperSKUDetails = function (event) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    };
    VenderApprovalDetailsPage.prototype.matSettperEquiment = function (event) {
        try {
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    };
    VenderApprovalDetailsPage.prototype.serviceEngSelectedChange = function (serviceEngSelected) {
        try {
            this.customerDetailFormGroup.controls.serviceEngMobilenoCtrl.patchValue(serviceEngSelected.phone);
            this.customerDetailFormGroup.get('serviceEngMobilenoCtrl').disable();
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    };
    VenderApprovalDetailsPage.prototype.approveServiceCheckbox = function (event) {
        try {
            console.log(this.TAG, "CheckBox Value", event);
            this.detailFormGroup.patchValue({ rejectComplaintCtrl: false });
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    };
    VenderApprovalDetailsPage.prototype.rejectServiceCheckbox = function () {
        try {
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    };
    VenderApprovalDetailsPage.prototype.presentAlert = function (Header, SubHeader, Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: Header,
                            subHeader: SubHeader,
                            message: Message,
                            buttons: [{
                                    text: "OK",
                                    handler: function (ok) {
                                        _this.router.navigateByUrl('/vender-approval');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.dismiss(function () { return console.log('The alert has been closed.'); });
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VenderApprovalDetailsPage.prototype.reject = function (form) {
        try {
            //  console.log("Submiited from",form);
        }
        catch (error) {
            // console.log(error);
        }
    };
    VenderApprovalDetailsPage.prototype.submit = function (event, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var approveVenderComplain, _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        approveVenderComplain = new src_assets_model_complain__WEBPACK_IMPORTED_MODULE_6__["Complain"]();
                        if (status == 'Accept') {
                            approveVenderComplain.Appect = 'true';
                            approveVenderComplain.reject = '';
                        }
                        else {
                            approveVenderComplain.Appect = '';
                            approveVenderComplain.reject = 'true';
                        }
                        approveVenderComplain.complaint_no = this.service.complaintno;
                        approveVenderComplain.complaintid = this.service.complaintid;
                        approveVenderComplain.complaint_date = this.service.complaintdate;
                        approveVenderComplain.doctype = this.service.doctype[0].id;
                        approveVenderComplain.nameofcomplainer = this.service.nameofcomplainer;
                        approveVenderComplain.desofcomplnr = this.service.desofcomplnr[0].id;
                        approveVenderComplain.contnumber = this.service.contnumber;
                        approveVenderComplain.email = this.service.email;
                        approveVenderComplain.eventdate = this.service.eventdate;
                        approveVenderComplain.business = this.service.business;
                        approveVenderComplain.description = this.service.description;
                        approveVenderComplain.lotno = this.service.lotno;
                        approveVenderComplain.serialno = this.service.srnoequipment;
                        approveVenderComplain.srnoequipment = this.service.srnoequipment;
                        approveVenderComplain.contracttype = this.service.contracttype;
                        approveVenderComplain.invoiceno = this.service.invoiceno;
                        approveVenderComplain.invoicedate = this.service.invoicedate;
                        approveVenderComplain.errorcode = "";
                        // approveVenderComplain.dealername = this.service.dealername;
                        // approveVenderComplain.newdealername = this.service.newdealername;
                        // approveVenderComplain.salesrepresentative = this.service.salesrepresentative;
                        approveVenderComplain.installationdate = this.service.installationdate;
                        approveVenderComplain.skucode = this.service.skucode;
                        approveVenderComplain.skuname = this.service.skuname;
                        approveVenderComplain.brandname = this.service.brandname;
                        approveVenderComplain.producttobereturn = this.service.producttobereturn;
                        approveVenderComplain.custname = this.service.custname;
                        approveVenderComplain.add1 = this.service.add1;
                        approveVenderComplain.add2 = this.service.add2;
                        approveVenderComplain.add3 = this.service.add3;
                        approveVenderComplain.pincode = this.service.pincode;
                        approveVenderComplain.area = this.service.area[0].id;
                        approveVenderComplain.city = this.service.city[0].id;
                        approveVenderComplain.state = this.service.state[0].id;
                        approveVenderComplain.country = this.service.country[0].id;
                        approveVenderComplain.serviceengname = this.customerDetailFormGroup.get('serviceEngineerNameCtrl').value ? this.customerDetailFormGroup.get('serviceEngineerNameCtrl').value.id : '';
                        approveVenderComplain.serviceengcontact = this.customerDetailFormGroup.get('serviceEngMobilenoCtrl').value ? this.customerDetailFormGroup.get('serviceEngMobilenoCtrl').value : '';
                        approveVenderComplain.visitdate = this.customerDetailFormGroup.get('dateOfVisitCtrl').value ? this.customerDetailFormGroup.get('dateOfVisitCtrl').value : '';
                        approveVenderComplain.servicevendorremark = this.customerDetailFormGroup.get('serviceVendorRemarksCtrl').value ? this.customerDetailFormGroup.get('serviceVendorRemarksCtrl').value : '';
                        //approveVenderComplain.assigntoservvendor = "true";
                        approveVenderComplain.appcomplaint = "true";
                        // console.log(this.TAG,"Final Vender Approval Form",approveVenderComplain);
                        _a = this;
                        return [4 /*yield*/, this.customerService.saveComplain(approveVenderComplain).toPromise()];
                    case 1:
                        // console.log(this.TAG,"Final Vender Approval Form",approveVenderComplain);
                        _a.saveComplainResponse = _b.sent();
                        // console.log(this.TAG,"Response From Save Complain",this.saveComplainResponse);
                        if (this.saveComplainResponse) {
                            this.presentAlert("Compliant Acceptance Details", "", this.saveComplainResponse.msg);
                        }
                        else {
                            this.presentAlert("Compliant Acceptance Details", "", "Something went wrong please try again" + this.saveComplainResponse.msg);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        //  console.error(this.TAG,error);
                        this.presentAlert("Compliant Acceptance Details", "", error_1.error);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VenderApprovalDetailsPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_5__["Validator"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _vender_approval_service__WEBPACK_IMPORTED_MODULE_1__["VenderApprovalService"] },
        { type: _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_9__["Commonfun"] }
    ]; };
    VenderApprovalDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-vender-approval-details',
            template: __webpack_require__(/*! raw-loader!./vender-approval-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.html"),
            styles: [__webpack_require__(/*! ./vender-approval-details.page.scss */ "./src/app/cardinal/vender-approval/vender-approval-details/vender-approval-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_5__["Validator"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _vender_approval_service__WEBPACK_IMPORTED_MODULE_1__["VenderApprovalService"],
            _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            src_provider_commonfun__WEBPACK_IMPORTED_MODULE_9__["Commonfun"]])
    ], VenderApprovalDetailsPage);
    return VenderApprovalDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=cardinal-vender-approval-vender-approval-details-vender-approval-details-module-es5.js.map