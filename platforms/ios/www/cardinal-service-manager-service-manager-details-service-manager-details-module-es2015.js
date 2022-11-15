(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cardinal-service-manager-service-manager-details-service-manager-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Compliant Report Details\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"detailFormGroup\">\n      <form [formGroup]=\"detailFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Details</ng-template>\n        <!-- complaint_no -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Complaint No</mat-label>\n          <input matInput formControlName=\"complaintNoCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.complaintNoCtrlErrorMessage\">\n              <div *ngIf=\"detailFormGroup.get('complaintNoCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- complaint_date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Complaint Date</mat-label>\n          <input matInput formControlName=\"complaintDateCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.complaintDateCtrlErrorMessage\">\n              <div *ngIf=\"detailFormGroup.get('complaintNoCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Document Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Document Type</mat-label>\n          <mat-select formControlName=\"documentTypeCtrl\" [(ngModel)]=\"docType\"\n            (selectionChange)=\"docTypeSelectedChange(docTypeSelected)\">\n            <mat-option *ngFor=\"let doc of existingComplaint.doctype\" [value]=\"doc\">\n              {{doc.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.documentType\">\n              <div *ngIf=\"detailFormGroup.get('documentTypeCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Name of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Name of Complainer</mat-label>\n          <input matInput formControlName=\"nameOfComplainerCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.nameCtrlErrorMessage\">\n              <div *ngIf=\"detailFormGroup.get('nameOfComplainerCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Designation of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Designation of Complainer</mat-label>\n          <mat-select [(ngModel)]=\"designationOfComplainerType\" formControlName=\"desigOfComplainerCtrl\"\n            (selectionChange)=\"designationOfComplainerChange(designationOfComplainerSelected)\">\n            <mat-option *ngFor=\"let designationObject of designationOfComplainerList\" [value]=\"designationObject\">\n              {{designationObject.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.designation_of_complainer_mss\">\n              <div *ngIf=\"detailFormGroup.get('desigOfComplainerCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Contact No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Contact No</mat-label>\n          <input matInput formControlName=\"mobilenoCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.mobileno\">\n              <div *ngIf=\"detailFormGroup.get('mobilenoCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Email ID -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Email ID</mat-label>\n          <input matInput formControlName=\"emailIDCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div *ngIf=\"detailFormGroup.get('emailIDCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Event Date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Event Date</mat-label>\n          <input matInput [disabled]='true' formControlName=\"eventDateIDCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.eventDateIDCtrlErrorMessage\">\n              <div *ngIf=\"detailFormGroup.get('emailIDCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Complaint Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Complaint Description</mat-label>\n          <textarea matInput formControlName=\"complaintDescriptionCtrl\"></textarea>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.complaintDescription\">\n              <div\n                *ngIf=\"detailFormGroup.get('complaintDescriptionCtrl').hasError(validation.type) && detailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext (click)=\"matDetailSettper(detailFormGroup)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Product Compliant Tab-->\n    <mat-step [stepControl]=\"productCompliantFormGroup\" *ngIf=\"isProductCompliantTab\">\n      <form [formGroup]=\"productCompliantFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Product Compliant</ng-template>\n        <!-- Lot No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput formControlName=\"lotNoCtrl\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperProductCompliant($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Consumables Tab  -->\n    <mat-step [stepControl]=\"consumablesFormGroup\" *ngIf=\"isConsumablesTab\">\n      <form [formGroup]=\"consumablesFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Consumables</ng-template>\n        <!-- Lot No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput formControlName=\"lotNoConsumablesCtrl\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperConsumables($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Equiment Tab-->\n    <mat-step [stepControl]=\"equimentFormGroup\" *ngIf=\"isEquimentTab\">\n      <form [formGroup]=\"equimentFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Equiment</ng-template>\n        <!-- Serial No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Serial No.</mat-label>\n          <input matInput formControlName=\"serialNoCtrl\" [(ngModel)]=\"existingComplaint.serialno\" (change)='onCheckInstallationBase()'>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.serialNo\">\n              <div *ngIf=\"equimentFormGroup.get('serialNoCtrl').hasError(validation.type) && equimentStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Sr. No. of Equipment -->\n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Sr. No. of Equipment</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"existingComplaint.srnoequipment\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field> -->\n        <!-- Contract Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Contract Type</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"contracttypeSelected\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Invoice No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Invoice No.</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"existingComplaint.invoiceno\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Invoice Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Invoice Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  [disabled]='true' style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"existingComplaint.invoicedate\"  [max]=\"maxDate | date:'yyyy-MM-dd'\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n        \n      \n        <!-- Error Code -->\n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Error Code</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"existingComplaint.errorcode[0].name\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field> -->\n\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Error Code</mat-label>\n          <mat-select [(ngModel)]=\"errorCodeSelected\" formControlName=\"errorCode\"\n            (selectionChange)=\"errorCodeSelectedSelectedChange(errorCodeSelected)\">\n            <mat-option *ngFor=\"let errorCode of errorCodeList\" [value]=\"errorCode\">\n              {{errorCode.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.errorCodeCtrlErrorMessage\">\n              <div *ngIf=\"equimentFormGroup.get('errorCode').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n\n        <!-- Dealer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Dealer Name</mat-label>\n          <input matInput formControlName=\"dealerNameCtrl\" [(ngModel)]=\"existingComplaint.dealername\">\n        </mat-form-field>\n        <!-- New Dealer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>New Dealer Name</mat-label>\n          <mat-select [(ngModel)]=\"dealerName\" formControlName=\"newDealerNameCtrl\"\n            (selectionChange)=\"newDealerNameChange(dealerName)\" >\n            <mat-option *ngFor=\"let dealer of dealerList\" [value]=\"dealer\">\n              {{dealer.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!-- Sales Representative -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Sales Representative</mat-label>\n          <mat-select formControlName=\"salesRepresentativeCtrl\" [(ngModel)]=\"salesRepresentativeSelected\"\n            (selectionChange)=\"salesRepresentativeChange(salesRepresentative)\">\n            <mat-option *ngFor=\"let salesRepresentative of salesRepresentativeList\" [value]=\"salesRepresentative\">\n              {{salesRepresentative.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!-- Installation Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Installation Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"existingComplaint.installationdate\" formControlName=\"installationDateCtrl\" [max]=\"maxDate | date:'yyyy-MM-dd'\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>     \n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Installation Date</mat-label>\n          <input matInput formControlName=\"installationDateCtrl\" [(ngModel)]=\"existingComplaint.installationdate\">\n        </mat-form-field> -->\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperEquiment($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- SKU Details Tab-->\n    <mat-step [stepControl]=\"skuDetailsFormGroup\">\n      <form [formGroup]=\"skuDetailsFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>SKU Details</ng-template>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">SKU Code</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"existingComplaint.skucode\" formControlName=\"skuCodeCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.skuCodeCtrlErrorMessage\">\n              <div *ngIf=\"skuDetailsFormGroup.get('skuCodeCtrl').hasError(validation.type) && skuDetailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- SKU Name / Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">SKU Name / Description</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"existingComplaint.skuname\" formControlName=\"skuNameCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.SKUNameCtrlErrorMessage\">\n              <div *ngIf=\"skuDetailsFormGroup.get('skuNameCtrl').hasError(validation.type) && skuDetailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Brand Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Brand Name</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"existingComplaint.brandname\" formControlName=\"brandNameCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.brandNameCtrlErrorMessage\">\n              <div *ngIf=\"skuDetailsFormGroup.get('brandNameCtrl').hasError(validation.type) && skuDetailsStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Product to be returned -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Product to be returned</mat-label>\n          <mat-select [disabled]='true' [(ngModel)]=\"productToBeReturn\" [ngModelOptions]=\"{standalone: true}\">\n            <mat-option value=\"Yes\">Yes</mat-option>\n            <mat-option value=\"No\">No</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperSKUDetails($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Customer Detail Tab -->\n    <mat-step [stepControl]=\"customerDetailFormGroup\">\n      <form [formGroup]=\"customerDetailFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Customer Detail</ng-template>\n        <!-- Customer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Customer Name</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"existingComplaint.custname\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Customer Address 1 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Customer Address 1</mat-label>\n          <input matInput formControlName=\"customerAddress1Ctrl\" [(ngModel)]=\"existingComplaint.add1\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress1\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('customerAddress1Ctrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Customer Address 2 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 2</mat-label>\n          <input matInput formControlName=\"customerAddress2Ctrl\" [(ngModel)]=\"existingComplaint.add2\">\n        </mat-form-field>\n        <!-- Customer Address 3 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 3</mat-label>\n          <input matInput formControlName=\"customerAddress3Ctrl\" [(ngModel)]=\"existingComplaint.add3\">\n        </mat-form-field>\n        <!-- Pin Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Pin Code</mat-label>\n          <input type=\"number\" matInput formControlName=\"pinCodeCtrl\" (change)='onChangePinCode()'>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.pinCode\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('pinCodeCtrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Area -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Area</mat-label>\n          <!-- <input matInput formControlName=\"areaCtrl\"> -->\n          <mat-select [(ngModel)]=\"areaType\" formControlName=\"areaCtrl\" (selectionChange)=\"onAreaSelectedChange()\">\n            <mat-option *ngFor=\"let areaObject of areaList\" [value]=\"areaObject\">\n              {{areaObject.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!-- City -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">City</mat-label>\n          <input matInput formControlName=\"city\" [(ngModel)]=\"city\">\n        </mat-form-field>\n        <!-- State -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">State</mat-label>\n          <input matInput formControlName=\"state\" [(ngModel)]=\"state\">\n        </mat-form-field>\n        <!-- Country -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Country</mat-label>\n          <input matInput formControlName=\"country\" [(ngModel)]=\"country\">\n        </mat-form-field>\n        <!-- Approve existingComplaint -->\n        <section class=\"example-full-width\">\n          <mat-checkbox formControlName=\"approveComplaintChkCtrl\" [color]=\"color\" [(ngModel)]=\"isChecked\"\n            (change)=\"approveComplaintCheckbox($event.checked)\" [disabled]=\"!approveCheckBoxEditable\" class=\"example-margin\">Approve Complaint</mat-checkbox>\n        </section>\n        <!-- Service Vendor -->\n        <mat-form-field class=\"example-full-width\" *ngIf=\"isServiceVender\">\n          <mat-label>Service Vendor</mat-label>\n          <mat-select formControlName=\"serviceVendorCtrl\" >\n            <mat-option *ngFor=\"let vender of venderList\" [value]=\"vender\">\n              {{vender.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.serviceVendorMessage\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('serviceVendorCtrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n        </div>\n        <div>\n          <ion-row>\n            <ion-col no-padding>\n              <ion-button size=\"default\" [disabled]=\"!customerDetailFormGroup.valid\" expand=\"block\" color=\"primary\"\n                (click)=\"submit($event)\">Assign Vendor\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </form>\n    </mat-step>\n  </mat-vertical-stepper>\n</ion-content>"

/***/ }),

/***/ "./src/app/cardinal/service-manager/service-manager-details/service-manager-details.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/cardinal/service-manager/service-manager-details/service-manager-details.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ServiceManagerDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerDetailsPageModule", function() { return ServiceManagerDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_manager_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-manager-details.page */ "./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









const routes = [
    {
        path: '',
        component: _service_manager_details_page__WEBPACK_IMPORTED_MODULE_6__["ServiceManagerDetailsPage"]
    }
];
let ServiceManagerDetailsPageModule = class ServiceManagerDetailsPageModule {
};
ServiceManagerDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_service_manager_details_page__WEBPACK_IMPORTED_MODULE_6__["ServiceManagerDetailsPage"]]
    })
], ServiceManagerDetailsPageModule);



/***/ }),

/***/ "./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-stepper-vertical {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.cus {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n\nion-datetime {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9jYXJkaW5hbC9zZXJ2aWNlLW1hbmFnZXIvc2VydmljZS1tYW5hZ2VyLWRldGFpbHMvc2VydmljZS1tYW5hZ2VyLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJkaW5hbC9zZXJ2aWNlLW1hbmFnZXIvc2VydmljZS1tYW5hZ2VyLWRldGFpbHMvc2VydmljZS1tYW5hZ2VyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FEQ0U7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDRztFQUNDLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NhcmRpbmFsL3NlcnZpY2UtbWFuYWdlci9zZXJ2aWNlLW1hbmFnZXItZGV0YWlscy9zZXJ2aWNlLW1hbmFnZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY3Vze1xuICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIGlvbi1kYXRldGltZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiIsIi5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: ServiceManagerDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerDetailsPage", function() { return ServiceManagerDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service-manager.service */ "./src/app/cardinal/service-manager/service-manager.service.ts");
/* harmony import */ var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var src_app_newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/newcustomer/newcustomer.service */ "./src/app/newcustomer/newcustomer.service.ts");
/* harmony import */ var _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../customer-service/customer-service.service */ "./src/app/cardinal/customer-service/customer-service.service.ts");
/* harmony import */ var src_assets_model_complain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/assets/model/complain */ "./src/assets/model/complain.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");











let ServiceManagerDetailsPage = class ServiceManagerDetailsPage {
    constructor(route, router, formBuilder, validator, serviceManagerService, commonFunction, newcustomerservice, customerService, alertCtrl) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.validator = validator;
        this.serviceManagerService = serviceManagerService;
        this.commonFunction = commonFunction;
        this.newcustomerservice = newcustomerservice;
        this.customerService = customerService;
        this.alertCtrl = alertCtrl;
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth() + 1;
        this.day = this.now.getDate();
        /**
         *
         */
        this.maxDate = this.year + "-" + this.month + "-" + this.day;
        /**
         *
         */
        this.TAG = "ServiceManagerDetailsPage";
        /**
         * If this variable is set to true then stepper will check the validation on form control.It will now allow to navigate next page or stepper.
         */
        this.isLinear = true;
        /**
         *
         */
        this.detailsStepValid = false;
        this.equimentStepValid = false;
        this.customerDetailStepValid = false;
        this.skuDetailsStepValid = false;
        /**
         *
         */
        this.validation_messages = {
            'complaintNoCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Complaint Number' }],
            'complaintDateCtrlErrorMessage': [{ type: 'required', message: '*Please Select Complaint Date' }],
            'nameCtrlErrorMessage': [{ type: 'required', message: '*Please Enter The Name' }],
            'documentType': [{ type: 'required', message: '*Please Select Document Type' }],
            'nameOfComplainer': [{ type: 'required', message: '*Please Enter Name of complainer.' }],
            'designation_of_complainer_mss': [{ type: 'required', message: '*Please Select Designation Of Complainer.' }],
            'mobileno': [{ type: 'required', message: '*Please Enter Contact No.' },
                { type: 'InvalidNumber', message: '*Please Enter Valid Contact No.' }],
            'email': [{ type: 'required', message: '*Please Enter Email.' },
                { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }],
            'eventDateIDCtrlErrorMessage': [{ type: 'required', message: '*Please Select Event Date' }],
            'complaintDescription': [{ type: 'required', message: '*Please Enter existingComplaint Description' }],
            'serialNo': [{ type: 'required', message: '*Please Enter Serial no .' }],
            'customerAddress1': [{ type: 'required', message: '*Please Enter Customer Address1' }],
            'customerAddress2': [{ type: 'required', message: '*Please Enter Customer Customer Address 2' }],
            'customerAddress3': [{ type: 'required', message: '*Please Enter Customer Customer Address 3' }],
            'pinCode': [{ type: 'required', message: '*Please Enter Pin Code' }],
            'area': [{ type: 'required', message: '*Please Select Your Area' }],
            'serviceVendorMessage': [{ type: 'required', message: '*Please Select Service Vendor' }],
            'skuCodeCtrlErrorMessage': [{ type: 'required', message: '*Please Enter SKU Code' }],
            'SKUNameCtrlErrorMessage': [{ type: 'required', message: '*Please Enter SKU Name' }],
            'brandNameCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Brand Name' }],
            'errorCodeCtrlErrorMessage': [{ type: 'required', message: '*Please Select Error Code.' }],
        };
        this.isServiceVender = false;
        this.color = 'accent';
        this.isProductCompliantTab = false;
        this.isConsumablesTab = false;
        this.isEquimentTab = false;
        this.approveComplaintStatus = false;
        this.approveCheckBoxEditable = false;
        this.firstStepValid = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.TAG,"ngOnInit Fired");
            // console.log(this.TAG,"ionViewWillEnter Fired");
            this.route.queryParams.subscribe(params => {
                if (params && params.special) {
                    this.existingComplaint = JSON.parse(params.special);
                    // console.log(this.TAG,JSON.parse(params.special));
                }
            });
            this.detailFormGroup = this.formBuilder.group({
                complaintNoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                complaintDateCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                documentTypeCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                nameOfComplainerCtrl: [this.existingComplaint.nameofcomplainer, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                desigOfComplainerCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                mobilenoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validator.numberValid],
                emailIDCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validator.emailValid],
                eventDateIDCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.validator.emailValid],
                complaintDescriptionCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
            this.productCompliantFormGroup = this.formBuilder.group({
                lotNoCtrl: [,]
            });
            this.consumablesFormGroup = this.formBuilder.group({
                lotNoConsumablesCtrl: [,]
            });
            this.equimentFormGroup = this.formBuilder.group({
                serialNoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dealerNameCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                errorCode: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                newDealerNameCtrl: [,],
                installationDateCtrl: [,],
                salesRepresentativeCtrl: [,]
            });
            this.skuDetailsFormGroup = this.formBuilder.group({
                skuCodeCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                skuNameCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                brandNameCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.customerDetailFormGroup = this.formBuilder.group({
                customerAddress1Ctrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                customerAddress2Ctrl: [,],
                customerAddress3Ctrl: [,],
                pinCodeCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                areaCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                city: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                state: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                country: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                approveComplaintChkCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                serviceVendorCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
            this.dealerList = yield (yield this.serviceManagerService.getDealerList()).toPromise();
            this.salesRepresentativeList = yield (yield this.serviceManagerService.getSalesRepresentativeList(this.existingComplaint.olddealerid)).toPromise();
            // if(!!this.dealerList && Object.keys(this.dealerList).length == 0){
            //   this.salesRepresentativeList = await (await this.serviceManagerService.getSalesRepresentativeList("")).toPromise();
            // }
            this.venderList = yield (yield this.serviceManagerService.getVenderList()).toPromise();
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonFunction.loadingPresent();
            this.skuDetailsFormGroup.get('skuCodeCtrl').disable();
            this.skuDetailsFormGroup.get('skuNameCtrl').disable();
            this.skuDetailsFormGroup.get('brandNameCtrl').disable();
            this.bindData();
            this.equimentFormGroup.get('installationDateCtrl').disable();
            if (!!this.existingComplaint.installationdate) {
                this.approveCheckBoxEditable = true;
            }
            let test = this.existingComplaint.area;
            this.areaList = test;
            this.areaType = test[0];
            this.docType = this.existingComplaint.doctype[0];
            this.designationOfComplainerList = yield (yield this.serviceManagerService.getDesignationOfComplainerList()).toPromise();
            for (let i = 0; i < this.designationOfComplainerList.length; i++) {
                if (this.designationOfComplainerList[i].name == this.existingComplaint.desofcomplnr[0].name) {
                    this.designationOfComplainerType = this.designationOfComplainerList[i];
                }
            }
            this.errorCodeList = yield (yield this.customerService.getErrorCodeList()).toPromise();
            for (let i = 0; i < this.errorCodeList.length; i++) {
                if (this.errorCodeList[i].name == this.existingComplaint.errorcode[0].name) {
                    this.errorCodeSelected = this.errorCodeList[i];
                }
            }
            this.customerDetailFormGroup.controls.pinCodeCtrl.patchValue(this.existingComplaint.pincode);
            this.customerDetailFormGroup.controls.city.patchValue(this.existingComplaint.city[0].name);
            this.customerDetailFormGroup.controls.state.patchValue(this.existingComplaint.country[0].name);
            this.customerDetailFormGroup.controls.country.patchValue(this.existingComplaint.state[0].name);
            this.customerDetailFormGroup.get('city').disable();
            this.customerDetailFormGroup.get('state').disable();
            this.customerDetailFormGroup.get('country').disable();
            this.contractTypeList = yield (yield this.customerService.getContractTypeList()).toPromise();
            for (let i = 0; i < this.contractTypeList.length; i++) {
                if (this.contractTypeList[i].code == this.existingComplaint.contracttype) {
                    this.contracttypeSelected = this.contractTypeList[i].name;
                }
            }
            this.detailFormGroup.get('documentTypeCtrl').disable();
            if (this.existingComplaint.doctype[0].name == 'Product Compliant') {
                this.isProductCompliantTab = true;
                this.isConsumablesTab = false;
                this.isEquimentTab = false;
                this.productCompliantFormGroup.controls.lotNoCtrl.patchValue(this.existingComplaint.lotno);
            }
            else if (this.existingComplaint.doctype[0].name == 'Consumables') {
                this.isProductCompliantTab = false;
                this.isConsumablesTab = true;
                this.isEquimentTab = false;
                this.consumablesFormGroup.controls.lotNoCtrl.patchValue(this.existingComplaint.lotno);
            }
            else if (this.existingComplaint.doctype[0].name == 'Equipment') {
                this.isProductCompliantTab = false;
                this.isConsumablesTab = false;
                this.isEquimentTab = true;
            }
            if (this.existingComplaint.producttobereturn == "MSNR_N") {
                this.productToBeReturn = 'No';
            }
            else if (this.existingComplaint.producttobereturn == "MSNR_Y") {
                this.productToBeReturn = 'Yes';
            }
            this.commonFunction.loadingDismiss();
        });
    }
    bindData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.detailFormGroup.controls.complaintNoCtrl.patchValue(this.existingComplaint.complaintno);
                this.detailFormGroup.get('complaintNoCtrl').disable();
                this.detailFormGroup.controls.complaintDateCtrl.patchValue(this.existingComplaint.complaintdate);
                this.detailFormGroup.get('complaintDateCtrl').disable();
                //this.detailFormGroup.controls.nameOfComplainerCtrl.patchValue(this.existingComplaint.nameofcomplainer);
                this.detailFormGroup.get('documentTypeCtrl').disable();
                this.detailFormGroup.controls.mobilenoCtrl.patchValue(this.existingComplaint.contnumber);
                this.detailFormGroup.controls.emailIDCtrl.patchValue(this.existingComplaint.email);
                this.detailFormGroup.controls.eventDateIDCtrl.patchValue(this.existingComplaint.eventdate);
                this.detailFormGroup.get('eventDateIDCtrl').disable();
                this.detailFormGroup.controls.complaintDescriptionCtrl.patchValue(this.existingComplaint.description);
                // this.customerDetailFormGroup.controls.approveComplaintChkCtrl.patchValue(this.existingComplaint.approvecomplaint);
                if (!!this.existingComplaint.approvecomplaint) {
                    this.isServiceVender = true;
                    this.customerDetailFormGroup.get('approveComplaintChkCtrl').disable();
                    this.isChecked = this.existingComplaint.approvecomplaint;
                }
                if (!!this.existingComplaint.newdealername) {
                    this.dealerList = yield (yield this.serviceManagerService.getDealerList()).toPromise();
                    for (let i = 0; i < this.dealerList.length; i++) {
                        if (this.dealerList[i].id == this.existingComplaint.dealerid) {
                            this.dealerName = this.dealerList[i];
                            // setTimeout( () => {
                            //  this.newDealerNameSelected = this.dealerList[i];
                            //  },300);
                        }
                    }
                }
                if (!!this.existingComplaint.salesrepid) {
                    let dealer_id = "";
                    if (!!this.existingComplaint.newdealername) {
                        dealer_id = this.existingComplaint.dealerid;
                    }
                    else {
                        dealer_id = this.existingComplaint.olddealerid;
                    }
                    this.salesRepresentativeList = yield (yield this.serviceManagerService.getSalesRepresentativeList(dealer_id)).toPromise();
                    for (let i = 0; i < this.salesRepresentativeList.length; i++) {
                        if (this.salesRepresentativeList[i].id == this.existingComplaint.salesrepid) {
                            setTimeout(() => {
                                this.salesRepresentativeSelected = this.salesRepresentativeList[i];
                            }, 300);
                        }
                    }
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    refreshPage() {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    }
    matDetailSettper(form) {
        try {
            this.detailsStepValid = true;
            //   console.log(this.TAG,"Form Error",form);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    matSettperProductCompliant(event) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    }
    matSettperConsumables(event) {
        try {
        }
        catch (error) {
            //   console.error(this.TAG,error);
        }
    }
    matSettperSKUDetails(event) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    }
    matSettperEquiment(event) {
        try {
            this.firstStepValid = true;
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    approveComplaintCheckbox(value) {
        try {
            //  console.log(this.TAG,"Approve existingComplaint Checkbox",value);
            if (value) {
                this.isServiceVender = true;
                this.approveComplaintStatus = true;
                this.disFormControl("dis");
            }
            else {
                this.isServiceVender = false;
                this.approveComplaintStatus = false;
                this.disFormControl("ena");
            }
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    }
    disFormControl(value) {
        try {
            if (value == "dis") {
                this.detailFormGroup.get('nameOfComplainerCtrl').disable();
                this.detailFormGroup.get('desigOfComplainerCtrl').disable();
                this.detailFormGroup.get('mobilenoCtrl').disable();
                this.detailFormGroup.get('emailIDCtrl').disable();
                this.detailFormGroup.get('complaintDescriptionCtrl').disable();
                this.productCompliantFormGroup.get('lotNoCtrl').disable();
                this.consumablesFormGroup.get('lotNoConsumablesCtrl').disable();
                this.equimentFormGroup.get('serialNoCtrl').disable();
                this.equimentFormGroup.get('dealerNameCtrl').disable();
                this.equimentFormGroup.get('newDealerNameCtrl').disable();
                this.equimentFormGroup.get('installationDateCtrl').disable();
                this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
                this.customerDetailFormGroup.get('customerAddress2Ctrl').disable();
                this.customerDetailFormGroup.get('customerAddress3Ctrl').disable();
                this.customerDetailFormGroup.get('pinCodeCtrl').disable();
                this.customerDetailFormGroup.get('areaCtrl').disable();
                this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
                this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
                this.customerDetailFormGroup.get('customerAddress1Ctrl').disable();
                this.customerDetailFormGroup.get('approveComplaintChkCtrl').disable();
            }
            else if (value == "ena") {
                this.detailFormGroup.get('nameOfComplainerCtrl').enable();
                this.detailFormGroup.get('desigOfComplainerCtrl').enable();
                this.detailFormGroup.get('mobilenoCtrl').enable();
                this.detailFormGroup.get('emailIDCtrl').enable();
                this.detailFormGroup.get('complaintDescriptionCtrl').enable();
                this.productCompliantFormGroup.get('lotNoCtrl').enable();
                this.consumablesFormGroup.get('lotNoConsumablesCtrl').enable();
                this.equimentFormGroup.get('serialNoCtrl').enable();
                this.equimentFormGroup.get('dealerNameCtrl').enable();
                this.equimentFormGroup.get('newDealerNameCtrl').enable();
                this.equimentFormGroup.get('installationDateCtrl').enable();
                this.customerDetailFormGroup.get('customerAddress1Ctrl').enable();
                this.customerDetailFormGroup.get('customerAddress2Ctrl').enable();
                this.customerDetailFormGroup.get('customerAddress3Ctrl').enable();
                this.customerDetailFormGroup.get('pinCodeCtrl').enable();
                this.customerDetailFormGroup.get('areaCtrl').enable();
                this.customerDetailFormGroup.get('customerAddress1Ctrl').enable();
                this.customerDetailFormGroup.get('customerAddress1Ctrl').enable();
            }
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    designationOfComplainerChange(data) {
        try {
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    docTypeSelectedChange(data) {
        try {
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    onAreaSelectedChange() {
        try {
            this.selectedArea = this.customerDetailFormGroup.controls['areaCtrl'].value;
            //  console.log(this.TAG,'Pravin Area Is',this.selectedArea);
            if (this.selectedArea != null) {
                this.city = this.selectedArea.cttv$_identifier;
            }
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    onChangePinCode(id = '') {
        try {
            this.newcustomerservice.getPincode(this.customerDetailFormGroup.controls["pinCodeCtrl"].value).subscribe(data => {
                const response = data['response'];
                // console.log(this.TAG,"Response From Pin Code",response);
                this.pinCodeList = response.data;
                if (this.pinCodeList.length > 0) {
                    this.inValidPinCode = '';
                    this.newcustomerservice.getarea(this.pinCodeList[0].id).subscribe(data => {
                        const response = data['response'];
                        //  console.log(this.TAG,"AREA LIST",response.data);
                        this.existingComplaint.city[0].id = response.data[0].cttv;
                        //  console.log(this.TAG,this.existingComplaint.city[0].id);
                        let addressArray = [];
                        for (let j = 0; j < response.data.length; j++) {
                            let addressObj = {
                                "id": response.data[j].id,
                                "name": response.data[j].area,
                                "cttv$_identifier": response.data[j].cttv$_identifier
                            };
                            addressArray.push(addressObj);
                        }
                        this.areaList = addressArray;
                        this.existingComplaint.area = this.areaList;
                        this.state = this.pinCodeList[0].region$_identifier;
                        this.existingComplaint.state[0].id = this.pinCodeList[0].region;
                        this.country = this.pinCodeList[0].country$_identifier;
                        this.district = this.pinCodeList[0].district$_identifier;
                        if (id != '' || id == undefined) {
                            this.selectedArea = this.areaList.find(item => item.id === id);
                            setTimeout(() => {
                                this.customerDetailFormGroup.controls["areaCtrl"].setValue(this.selectedArea);
                            }, 1500);
                        }
                    });
                }
            });
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    newDealerNameChange(dealer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // console.log(this.TAG,"PRavin DEA selected",dealer);
                this.salesRepresentativeList = yield (yield this.serviceManagerService.getSalesRepresentativeList(dealer.id)).toPromise();
                // console.log(this.TAG,"Sales Representative list",this.salesRepresentativeList);
            }
            catch (error) {
                console.error(this.TAG, error);
            }
        });
    }
    salesRepresentativeChange(value) {
        try {
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    presentAlert(Header, SubHeader, Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: Header,
                subHeader: SubHeader,
                message: Message,
                buttons: [{
                        text: "OK",
                        handler: (ok) => {
                            this.router.navigateByUrl('/service-manager');
                        }
                    }]
            });
            alert.dismiss(() => console.log('The alert has been closed.'));
            yield alert.present();
        });
    }
    errorCodeSelectedSelectedChange(data) {
        try {
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    onCheckInstallationBase() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                this.serialNoCheckResponse = "";
                let serialNo = this.equimentFormGroup.get('serialNoCtrl').value ? this.equimentFormGroup.get('serialNoCtrl').value : '';
                this.existingComplaint.serialno = serialNo;
                this.serialNoCheckResponse = yield (yield this.customerService.checkSerialNumber(serialNo, "2020-12-31")).toPromise();
                console.log(this.TAG, "Installation Base Data", this.serialNoCheckResponse);
                if (Object.keys(this.serialNoCheckResponse).length != 0) {
                    if (!!this.serialNoCheckResponse.contracttype) {
                        for (let i = 0; i < this.contractTypeList.length; i++) {
                            if (this.contractTypeList[i].code == this.serialNoCheckResponse.contracttype) {
                                this.contracttypeSelected = this.contractTypeList[i].name;
                                this.existingComplaint.contracttype = this.contractTypeList[i].code;
                            }
                        }
                    }
                    if (!!this.serialNoCheckResponse.invoiceno) {
                        // this.equimentFormGroup.controls["invoiceNoCtrl"].setValue(this.serialNoCheckResponse.invoiceno);
                        // this.equimentFormGroup.get('invoiceNoCtrl').disable();
                        this.existingComplaint.invoiceno = this.serialNoCheckResponse.invoiceno;
                    }
                    else {
                        this.existingComplaint.invoiceno = "";
                    }
                    if (!!this.serialNoCheckResponse.invoicedate) {
                        this.serialNoCheckResponse.invoicedate = this.serialNoCheckResponse.invoicedate.split(' ')[0];
                        // this.equimentFormGroup.controls["invoiceDateCtrl"].setValue(this.serialNoCheckResponse.invoicedate);
                        this.existingComplaint.invoicedate = this.serialNoCheckResponse.invoicedate.split(' ')[0];
                    }
                    else {
                        this.existingComplaint.invoicedate = "";
                    }
                    if (!!this.serialNoCheckResponse.dealername) {
                        // this.equimentFormGroup.controls["dealerNameCtrl"].setValue(this.serialNoCheckResponse.dealername);
                        //  this.equimentFormGroup.get('dealerNameCtrl').disable();
                        this.existingComplaint.dealername = this.serialNoCheckResponse.dealername;
                        if (!!this.serialNoCheckResponse.dealerid) {
                            this.salesRepresentativeList = yield (yield this.serviceManagerService.getSalesRepresentativeList(this.serialNoCheckResponse.dealerid)).toPromise();
                        }
                    }
                    else {
                        this.equimentFormGroup.controls["dealerNameCtrl"].setValue("");
                    }
                    if (!!this.serialNoCheckResponse.installationdate) {
                        this.serialNoCheckResponse.installationdate = this.serialNoCheckResponse.installationdate.split(' ')[0];
                        //  this.equimentFormGroup.controls["installationDateCtrl"].setValue(this.serialNoCheckResponse.installationdate);
                        this.equimentFormGroup.get('installationDateCtrl').disable();
                        this.existingComplaint.installationdate = this.serialNoCheckResponse.installationdate;
                        this.approveCheckBoxEditable = true;
                    }
                    else {
                        //this.equimentFormGroup.controls["installationDateCtrl"].setValue("");
                        this.existingComplaint.installationdate = "";
                    }
                    if (!!this.serialNoCheckResponse.sku) {
                        this.skuDetailsFormGroup.controls["skuCodeCtrl"].setValue(this.serialNoCheckResponse.sku);
                        this.skuDetailsFormGroup.get('skuCodeCtrl').disable();
                        this.existingComplaint.skucode = this.serialNoCheckResponse.sku;
                    }
                    else {
                        this.skuDetailsFormGroup.controls["skuCodeCtrl"].setValue("");
                    }
                    if (!!this.serialNoCheckResponse.sku) {
                        this.skuDetailsFormGroup.controls["skuNameCtrl"].setValue(this.serialNoCheckResponse.skuname);
                        this.skuDetailsFormGroup.get('skuNameCtrl').disable();
                        this.existingComplaint.skuname = this.serialNoCheckResponse.skuname;
                    }
                    else {
                        this.skuDetailsFormGroup.controls["skuNameCtrl"].setValue("");
                    }
                    if (!!this.serialNoCheckResponse.brand) {
                        this.skuDetailsFormGroup.controls["brandNameCtrl"].setValue(this.serialNoCheckResponse.brand);
                        this.skuDetailsFormGroup.get('brandNameCtrl').disable();
                        this.existingComplaint.brandname = this.serialNoCheckResponse.brand;
                    }
                    else {
                        this.skuDetailsFormGroup.controls["brandNameCtrl"].setValue("");
                    }
                }
                else {
                    this.equimentFormGroup.reset();
                    this.equimentFormGroup.enable();
                    this.equimentFormGroup.controls["serialNo"].setValue(serialNo);
                    this.skuDetailsFormGroup.reset();
                    this.skuDetailsFormGroup.enable();
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                console.log(this.TAG, error);
            }
        });
    }
    submit(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let date = this.equimentFormGroup.get('installationDateCtrl').value ? this.equimentFormGroup.get('installationDateCtrl').value : '';
                if (date === '' || date === null || date === undefined) {
                    //this.presentAlert("Compliant Report Details","","Installation Date Can Not Be Blank");
                    this.commonFunction.presentAlert("Compliant Report Details", "", "Installation Date Can Not Be Blank");
                }
                else {
                    this.commonFunction.loadingPresent();
                    let approveComplain = new src_assets_model_complain__WEBPACK_IMPORTED_MODULE_9__["Complain"]();
                    approveComplain.complaint_no = this.existingComplaint.complaintno;
                    approveComplain.complaintid = this.existingComplaint.complaintid;
                    approveComplain.complaint_date = this.existingComplaint.complaintdate;
                    approveComplain.doctype = this.existingComplaint.doctype[0].id;
                    approveComplain.nameofcomplainer = this.detailFormGroup.get('nameOfComplainerCtrl').value ? this.detailFormGroup.get('nameOfComplainerCtrl').value : '';
                    approveComplain.desofcomplnr = this.detailFormGroup.get('desigOfComplainerCtrl').value.id ? this.detailFormGroup.get('desigOfComplainerCtrl').value.id : '';
                    approveComplain.contnumber = this.detailFormGroup.get('mobilenoCtrl').value ? this.detailFormGroup.get('mobilenoCtrl').value.toString() : '';
                    approveComplain.email = this.detailFormGroup.get('emailIDCtrl').value ? this.detailFormGroup.get('emailIDCtrl').value : '';
                    approveComplain.eventdate = this.existingComplaint.eventdate;
                    approveComplain.description = this.detailFormGroup.get('complaintDescriptionCtrl').value ? this.detailFormGroup.get('complaintDescriptionCtrl').value : '';
                    approveComplain.lotno = this.consumablesFormGroup.get('lotNoConsumablesCtrl').value ? this.consumablesFormGroup.get('lotNoConsumablesCtrl').value : '';
                    approveComplain.serialno = this.existingComplaint.serialno ? this.existingComplaint.serialno : "";
                    approveComplain.srnoequipment = this.existingComplaint.srnoequipment;
                    approveComplain.contracttype = this.existingComplaint.contracttype;
                    approveComplain.invoiceno = this.existingComplaint.invoiceno;
                    approveComplain.invoicedate = this.existingComplaint.invoicedate;
                    approveComplain.errorcode = this.errorCodeSelected.id ? this.errorCodeSelected.id : '';
                    approveComplain.dealername = this.equimentFormGroup.get('dealerNameCtrl').value ? this.equimentFormGroup.get('dealerNameCtrl').value : '';
                    approveComplain.newdealername = this.equimentFormGroup.get('newDealerNameCtrl').value ? this.equimentFormGroup.get('newDealerNameCtrl').value.id : '';
                    approveComplain.salesrepresentative = this.equimentFormGroup.get('salesRepresentativeCtrl').value ? this.equimentFormGroup.get('salesRepresentativeCtrl').value.name : '';
                    approveComplain.installationdate = this.equimentFormGroup.get('installationDateCtrl').value ? this.equimentFormGroup.get('installationDateCtrl').value : '';
                    approveComplain.skucode = this.existingComplaint.skucode;
                    approveComplain.skuname = this.existingComplaint.skuname;
                    approveComplain.brandname = this.existingComplaint.brandname;
                    approveComplain.producttobereturn = this.existingComplaint.producttobereturn;
                    approveComplain.custname = this.existingComplaint.custname;
                    approveComplain.add1 = this.customerDetailFormGroup.get('customerAddress1Ctrl').value ? this.customerDetailFormGroup.get('customerAddress1Ctrl').value : '';
                    approveComplain.add2 = this.customerDetailFormGroup.get('customerAddress2Ctrl').value ? this.customerDetailFormGroup.get('customerAddress2Ctrl').value : '';
                    approveComplain.add3 = this.customerDetailFormGroup.get('customerAddress3Ctrl').value ? this.customerDetailFormGroup.get('customerAddress3Ctrl').value : '';
                    approveComplain.pincode = this.customerDetailFormGroup.get('pinCodeCtrl').value ? this.customerDetailFormGroup.get('pinCodeCtrl').value : '';
                    let area = this.customerDetailFormGroup.get('areaCtrl').value ? this.customerDetailFormGroup.get('areaCtrl').value : '';
                    approveComplain.area = area.id;
                    approveComplain.city = this.existingComplaint.city[0].id;
                    approveComplain.state = this.existingComplaint.state[0].id;
                    approveComplain.country = this.existingComplaint.country[0].id;
                    approveComplain.appcomplaint = "true";
                    approveComplain.servicevendor = this.customerDetailFormGroup.get('serviceVendorCtrl').value ? this.customerDetailFormGroup.get('serviceVendorCtrl').value.id : '';
                    approveComplain.assigntoservvendor = "true";
                    //  console.log(this.TAG,"Final Service Manager Form",approveComplain);
                    let saveComplainResponse = yield this.customerService.saveComplain(approveComplain).toPromise();
                    //  console.log(this.TAG,"Response From Save Complain",saveComplainResponse);
                    if (saveComplainResponse) {
                        this.presentAlert("Compliant Report Details", "", saveComplainResponse.msg);
                    }
                    else {
                        this.presentAlert("Compliant Report Details", "", "Something went wrong please try again" + saveComplainResponse.msg);
                    }
                    this.commonFunction.loadingDismiss();
                }
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                // console.error(this.TAG,error);
            }
        });
    }
};
ServiceManagerDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _provider_validator_helper__WEBPACK_IMPORTED_MODULE_2__["Validator"] },
    { type: _service_manager_service__WEBPACK_IMPORTED_MODULE_1__["ServiceManagerService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"] },
    { type: src_app_newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_7__["NewcustomerService"] },
    { type: _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_8__["CustomerServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"] }
];
ServiceManagerDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-manager-details',
        template: __webpack_require__(/*! raw-loader!./service-manager-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.html"),
        styles: [__webpack_require__(/*! ./service-manager-details.page.scss */ "./src/app/cardinal/service-manager/service-manager-details/service-manager-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _provider_validator_helper__WEBPACK_IMPORTED_MODULE_2__["Validator"],
        _service_manager_service__WEBPACK_IMPORTED_MODULE_1__["ServiceManagerService"], src_provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"],
        src_app_newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_7__["NewcustomerService"],
        _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_8__["CustomerServiceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"]])
], ServiceManagerDetailsPage);



/***/ })

}]);
//# sourceMappingURL=cardinal-service-manager-service-manager-details-service-manager-details-module-es2015.js.map