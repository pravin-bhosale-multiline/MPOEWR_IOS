(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cardinal-customer-service-customer-service-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cardinal/customer-service/customer-service.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cardinal/customer-service/customer-service.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Customer Service\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"RefreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <form [formGroup]=\"firstFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Details</ng-template>\n        <!--Complaint Date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Complaint Date</mat-label>\n          <input type=\"text\" matInput formControlName=\"complaintDateCtrl\">\n        </mat-form-field>\n        <!-- Document Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Document Type</mat-label>\n          <mat-select [(ngModel)]=\"docTypeSelected\" formControlName=\"documentTypeCtrl\"\n            (selectionChange)=\"docTypeSelectedChange(docTypeSelected.name)\">\n            <mat-option *ngFor=\"let doc of docTypeList\" [value]=\"doc\">\n              {{doc.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.documentType\">\n              <div *ngIf=\"firstFormGroup.get('name').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Name of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Name of Complainer</mat-label>\n          <input matInput formControlName=\"name\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.name\">\n              <div *ngIf=\"firstFormGroup.get('name').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Designation of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Designation of Complainer</mat-label>\n          <mat-select [(ngModel)]=\"designationOfComplainerSelected\" formControlName=\"designationOfComplainerCtrl\"\n            (selectionChange)=\"designationOfComplainerChange(designationOfComplainerSelected)\">\n            <mat-option *ngFor=\"let designationObject of designationOfComplainerList\" [value]=\"designationObject\">\n              {{designationObject.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.designation\">\n              <div\n                *ngIf=\"firstFormGroup.get('designationOfComplainerCtrl').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Contact No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Contact No.</mat-label>\n          <input type=\"number\" matInput formControlName=\"mobileno\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.mobileno\">\n              <div *ngIf=\"firstFormGroup.get('mobileno').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Email ID -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Email ID</mat-label>\n          <input type=\"email\" matInput formControlName=\"email\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n              <div *ngIf=\"firstFormGroup.get('email').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Event Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Event Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"today\" formControlName=\"eventDateCtrl\" [max]=\"maxDate | date:'yyyy-MM-dd'\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n        <!-- Complaint Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Complaint Description</mat-label>\n          <textarea matInput formControlName=\"complaintDescriptionCtrl\"></textarea>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.complaintDescriptionCtrl\">\n              <div *ngIf=\"firstFormGroup.get('complaintDescriptionCtrl').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext (click)=\"matSettper($event,firstFormGroup)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"productCompliantFormGroup\" label=\"Product Compliant\" *ngIf=\"isProductCompliant\"\n      [optional]=\"isOptional\">\n      <form [formGroup]=\"productCompliantFormGroup\" class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput formControlName=\"lotNoProductCompliantCtrl\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperProductCom($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"consumablesFormGroup\" label=\"Consumables\" *ngIf=\"isConsumables\">\n      <form [formGroup]=\"consumablesFormGroup\" class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput formControlName=\"lotNoConsumablesCtrl\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperConsumables($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"equipmentFormGroup\" label=\"Equiment Detail\" *ngIf=\"isEquipment\">\n      <form [formGroup]=\"equipmentFormGroup\">\n        <!-- Serial No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Serial No.</mat-label>\n          <input matInput formControlName=\"serialNo\" (change)='onCheckInstallationBase()'>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.serialNo\">\n              <div *ngIf=\"equipmentFormGroup.get('serialNo').hasError(validation.type) && secondStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Sr. No. of Equipment -->\n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Sr. No. of Equipment</mat-label>\n          <input matInput formControlName=\"SrNoEquipmentCtrl\">\n        </mat-form-field> -->\n        <!-- Contract Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Contract Type</mat-label>\n          <mat-select [(ngModel)]=\"contractTypeSelected\" formControlName=\"contractType\"\n            (selectionChange)=\"contractTypeSelectedChange(contractTypeSelected)\">\n            <mat-option *ngFor=\"let contract of contractTypeList\" [value]=\"contract\">\n              {{contract.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.contractType\">\n              <div *ngIf=\"equipmentFormGroup.get('contractType').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Invoice No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Invoice No.</mat-label>\n          <input matInput formControlName=\"invoiceNoCtrl\">\n        </mat-form-field>\n        <!-- Invoice Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Invoice Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\"  formControlName=\"invoiceDateCtrl\" [max]=\"maxDate | date:'yyyy-MM-dd'\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n        \n        \n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Invoice Date</mat-label>\n          <input matInput type=\"date\" [disabled]='true' formControlName=\"invoiceDateCtrl\" matInput [max]=\"maxDate | date:'yyyy-MM-dd'\">\n        </mat-form-field> -->\n        <!-- Error Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Error Code</mat-label>\n          <mat-select [(ngModel)]=\"errorCodeSelected\" formControlName=\"errorCode\"\n            (selectionChange)=\"errorCodeSelectedSelectedChange(errorCodeSelected)\">\n            <mat-option *ngFor=\"let errorCode of errorCodeList\" [value]=\"errorCode\">\n              {{errorCode.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.errorCodeCtrlErrorMessage\">\n              <div *ngIf=\"equipmentFormGroup.get('errorCode').hasError(validation.type) && firstStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Dealer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Dealer Name</mat-label>\n          <input matInput formControlName=\"dealerNameCtrl\">\n        </mat-form-field>\n        <!-- Installation Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Installation Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\"  formControlName=\"installationDateCtrl\" [max]=\"maxDate | date:'yyyy-MM-dd'\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n\n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Installation Date</mat-label>\n          <input type=\"date\" matInput formControlName=\"installationDateCtrl\" matInput\n            [max]=\"maxDate | date:'yyyy-MM-dd'\">\n        </mat-form-field> -->\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperSecond($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n\n    <mat-step [stepControl]=\"thirdFormGroup\" label=\"SKU Detail\">\n      <form [formGroup]=\"thirdFormGroup\">\n        <!-- SKU Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">SKU Code</mat-label>\n          <input matInput formControlName=\"SKUCode\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.SKUCode\">\n              <div *ngIf=\"thirdFormGroup.get('SKUCode').hasError(validation.type) && thirdStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- SKU Name / Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>SKU Name / Description</mat-label>\n          <input matInput formControlName=\"skuName\">\n        </mat-form-field>\n        <!-- Brand Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Brand Name</mat-label>\n          <input matInput formControlName=\"brandName\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.brandName\">\n              <div *ngIf=\"thirdFormGroup.get('brandName').hasError(validation.type) && thirdStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Product to be returned -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Product to be returned</mat-label>\n          <mat-select [(ngModel)]=\"ProductReturnedSelected\" [ngModelOptions]=\"{standalone: true}\"\n            (selectionChange)=\"ProductReturnedSelectedChange(ProductReturnedSelected)\">\n            <mat-option value=\"Y\">Yes</mat-option>\n            <mat-option value=\"N\">No</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperThird($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Customer Detail Tab -->\n    <mat-step [stepControl]=\"fourthFormGroup\" label=\"Customer Detail\">\n      <form [formGroup]=\"fourthFormGroup\">\n        <!-- Customer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Customer Name</mat-label>\n          <input matInput formControlName=\"customerName\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerName\">\n              <div *ngIf=\"fourthFormGroup.get('customerName').hasError(validation.type) && fourthStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Customer Address 1 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Customer Address 1</mat-label>\n          <input matInput formControlName=\"customerAddress1\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress1\">\n              <div *ngIf=\"fourthFormGroup.get('customerAddress1').hasError(validation.type) && fourthStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Customer Address 2 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 2</mat-label>\n          <input matInput formControlName=\"customerAddress2\">\n        </mat-form-field>\n        <!-- Customer Address 3 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 3</mat-label>\n          <input matInput formControlName=\"customerAddress3\">\n        </mat-form-field>\n        <!-- Pin Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Pin Code</mat-label>\n          <input type=\"number\" matInput formControlName=\"pinCodeCtrl\" (change)='onChangePinCode()'>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.pinCode\">\n              <div *ngIf=\"fourthFormGroup.get('pinCodeCtrl').hasError(validation.type) && fourthStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Area -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Area</mat-label>\n          <mat-select formControlName=\"area\" (selectionChange)=\"onAreaSelectedChange()\" [(ngModel)]=\"areaSelected\">\n            <mat-option *ngFor=\"let area of areaList\" [value]=\"area\">\n              {{area.area}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.area\">\n              <div *ngIf=\"fourthFormGroup.get('area').hasError(validation.type) && fourthStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- City -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">City</mat-label>\n          <input matInput formControlName=\"city\" [(ngModel)]=\"city\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.city\">\n              <div *ngIf=\"fourthFormGroup.get('city').hasError(validation.type) && fourthStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- State -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">State</mat-label>\n          <input matInput formControlName=\"state\" [(ngModel)]=\"state\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.state\">\n              <div *ngIf=\"fourthFormGroup.get('state').hasError(validation.type) && fourthStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Country -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Country</mat-label>\n          <input matInput formControlName=\"country\" [(ngModel)]=\"country\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.country\">\n              <div *ngIf=\"fourthFormGroup.get('country').hasError(validation.type) && fourthStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n        </div>\n        <div>\n          <ion-row>\n            <ion-col no-padding>\n              <ion-button size=\"default\" [disabled]=\"!fourthFormGroup.valid && fourthFormGroup.disabled === false\"\n                class=\"submit-btn\" expand=\"block\" color=\"primary\" (click)=\"submit()\">Assign to COP\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </form>\n    </mat-step>\n  </mat-vertical-stepper>\n</ion-content>"

/***/ }),

/***/ "./src/app/cardinal/customer-service/customer-service.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cardinal/customer-service/customer-service.module.ts ***!
  \**********************************************************************/
/*! exports provided: CustomerServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServicePageModule", function() { return CustomerServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_service_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-service.page */ "./src/app/cardinal/customer-service/customer-service.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var routes = [
    {
        path: '',
        component: _customer_service_page__WEBPACK_IMPORTED_MODULE_6__["CustomerServicePage"]
    }
];
var CustomerServicePageModule = /** @class */ (function () {
    function CustomerServicePageModule() {
    }
    CustomerServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_service_page__WEBPACK_IMPORTED_MODULE_6__["CustomerServicePage"]]
        })
    ], CustomerServicePageModule);
    return CustomerServicePageModule;
}());



/***/ }),

/***/ "./src/app/cardinal/customer-service/customer-service.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/cardinal/customer-service/customer-service.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-stepper-vertical {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.cus {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n\nion-datetime {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9jYXJkaW5hbC9jdXN0b21lci1zZXJ2aWNlL2N1c3RvbWVyLXNlcnZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJkaW5hbC9jdXN0b21lci1zZXJ2aWNlL2N1c3RvbWVyLXNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUM7RUFFQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7QUNBRjs7QURFQztFQUNDLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhcmRpbmFsL2N1c3RvbWVyLXNlcnZpY2UvY3VzdG9tZXItc2VydmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gLmN1c3tcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuIH1cbiBpb24tZGF0ZXRpbWUge1xuICB3aWR0aDogMTAwJTtcbn0iLCIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/cardinal/customer-service/customer-service.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/cardinal/customer-service/customer-service.page.ts ***!
  \********************************************************************/
/*! exports provided: CustomerServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServicePage", function() { return CustomerServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _assets_model_complain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../assets/model/complain */ "./src/assets/model/complain.ts");
/* harmony import */ var _customer_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-service.service */ "./src/app/cardinal/customer-service/customer-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var src_app_newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/newcustomer/newcustomer.service */ "./src/app/newcustomer/newcustomer.service.ts");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var CustomerServicePage = /** @class */ (function () {
    function CustomerServicePage(_formBuilder, val, customerService, newcustomerservice, commonFunction, alertCtrl, router) {
        this._formBuilder = _formBuilder;
        this.val = val;
        this.customerService = customerService;
        this.newcustomerservice = newcustomerservice;
        this.commonFunction = commonFunction;
        this.alertCtrl = alertCtrl;
        this.router = router;
        /**
         * This variable will hold the page name for logging purpose.
         */
        this.TAG = "CustomerServicePage";
        /**
         * If this variable is set to true then stepper will check the validation on form control.It will now allow to navigate next page or stepper.
         */
        this.isLinear = true;
        /**
         *
         */
        this.isProductCompliant = false;
        /**
         *
         */
        this.isEquipment = false;
        this.isConsumables = false;
        this.isOptional = false;
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth() + 1;
        this.day = this.now.getDate();
        /**
         *
         */
        this.maxDate = this.year + "-" + this.month + "-" + this.day;
        this.today = this.year + "-" + ("0" + this.month).slice(-2) + "-" + ("0" + this.day).slice(-2);
        /**
         *
         */
        this.firstStepValid = false;
        this.secondStepValid = false;
        this.thirdStepValid = false;
        this.fourthStepValid = false;
        this.consumableStepValid = false;
        /**
         *
         */
        this.validation_messages = {
            'mobileno': [{ type: 'required', message: '*Please Enter Contact No.' },
                { type: 'InvalidNumber', message: '*Please Enter Valid Contact No.' }],
            'email': [{ type: 'required', message: '*Please Enter Email.' },
                { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }],
            'designation': [{ type: 'required', message: '*Please Designation.' }],
            'name': [{ type: 'required', message: '*Please Enter Name.' }],
            'document_type': [{ type: 'required', message: '*Please Select Document Type.' }],
            'eventdate': [{ type: 'required', message: '*Please Select Event Date.' }],
            'serialNo': [{ type: 'required', message: '*Please Enter Serial no .' }],
            'contractType': [{ type: 'required', message: '*Please Enter Contract Type .' }],
            'SKUCode': [{ type: 'required', message: '*Please Enter SKU Code' }],
            'brandName': [{ type: 'required', message: '*Please Enter Brand Name' }],
            'customerName': [{ type: 'required', message: '*Please Enter Customer Name' }],
            'customerAddress1': [{ type: 'required', message: '*Please Enter Customer Address1' }],
            'customerAddress2': [{ type: 'required', message: '*Please Enter Customer Customer Address 2' }],
            'customerAddress3': [{ type: 'required', message: '*Please Enter Customer Customer Address 3' }],
            'pinCode': [{ type: 'required', message: '*Please Enter Pin Code' }],
            'area': [{ type: 'required', message: '*Please Select Your Area' }],
            'city': [{ type: 'required', message: '*Please Enter City' }],
            'state': [{ type: 'required', message: '*Please Enter State' }],
            'country': [{ type: 'required', message: '*Please Enter Country' }],
            'documentType': [{ type: 'required', message: '*Please Select Document Type.' }],
            'complaintDescriptionCtrl': [{ type: 'required', message: '*Please Enter Complaint Description.' }],
            'errorCodeCtrlErrorMessage': [{ type: 'required', message: '*Please Select Error Code.' }],
        };
        this.test = true;
    }
    ;
    CustomerServicePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var temp, _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.firstFormGroup = this._formBuilder.group({
                            complaintDateCtrl: [,],
                            documentTypeCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            mobileno: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.val.numberValid],
                            email: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.val.emailValid],
                            designationOfComplainerCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            btnDetail: [,],
                            eventDateCtrl: [],
                            complaintDescriptionCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        });
                        this.equipmentFormGroup = this._formBuilder.group({
                            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            contractType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            SrNoEquipmentCtrl: [,],
                            invoiceNoCtrl: [,],
                            invoiceDateCtrl: [,],
                            dealerNameCtrl: [,],
                            installationDateCtrl: [,],
                            errorCode: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        });
                        this.thirdFormGroup = this._formBuilder.group({
                            SKUCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            brandName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            skuName: [,]
                        });
                        this.fourthFormGroup = this._formBuilder.group({
                            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            customerAddress1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            customerAddress2: [,],
                            customerAddress3: [,],
                            pinCodeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                        });
                        this.consumablesFormGroup = this._formBuilder.group({
                            lotNoConsumablesCtrl: [,]
                        });
                        this.productCompliantFormGroup = this._formBuilder.group({
                            lotNoProductCompliantCtrl: []
                        });
                        return [4 /*yield*/, this.customerService.getDocumentList()];
                    case 1: return [4 /*yield*/, (_d.sent()).toPromise()];
                    case 2:
                        temp = _d.sent();
                        // console.log(this.TAG,"API DATA TEST",temp);
                        _a = this;
                        return [4 /*yield*/, this.customerService.getErrorCodeList()];
                    case 3: return [4 /*yield*/, (_d.sent()).toPromise()];
                    case 4:
                        // console.log(this.TAG,"API DATA TEST",temp);
                        _a.errorCodeList = _d.sent();
                        //  console.log(this.TAG,"Error Code List From Server",this.errorCodeList);
                        _b = this;
                        return [4 /*yield*/, this.customerService.getDesignationOfComplainerList()];
                    case 5: return [4 /*yield*/, (_d.sent()).toPromise()];
                    case 6:
                        //  console.log(this.TAG,"Error Code List From Server",this.errorCodeList);
                        _b.designationOfComplainerList = _d.sent();
                        this.docTypeList = temp.response.data;
                        _c = this;
                        return [4 /*yield*/, this.customerService.getContractTypeList()];
                    case 7: return [4 /*yield*/, (_d.sent()).toPromise()];
                    case 8:
                        _c.contractTypeList = _d.sent();
                        //console.log(this.TAG,'Contract Type List From Server',this.contractTypeList);
                        //console.log(this.TAG,'Document Type From Server',this.docTypeList);
                        //   console.log(this.TAG,"Today Date",this.maxDate);
                        // this.firstFormGroup.controls.complaintDateCtrl.patchValue(this.day + "-" + this.month + "-" +this.year);
                        this.firstFormGroup.controls['eventDateCtrl'].setValue(this.today);
                        this.fourthFormGroup.get('country').disable();
                        this.fourthFormGroup.get('state').disable();
                        this.fourthFormGroup.get('city').disable();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerServicePage.prototype.ionViewWillEnter = function () {
        this.stepper.selectedIndex = 0;
        this.firstFormGroup.get('complaintDateCtrl').disable();
        this.firstFormGroup.controls.complaintDateCtrl.patchValue(this.day + "-" + this.month + "-" + this.year);
    };
    CustomerServicePage.prototype.docTypeSelectedChange = function (docTypeSelected) {
        try {
            //console.log("Document Type Selected", docTypeSelected);
            if (docTypeSelected == "Product Compliant") {
                this.isProductCompliant = true;
                this.isEquipment = false;
                this.isConsumables = false;
                this.thirdFormGroup.enable();
            }
            else if (docTypeSelected == "Equipment") {
                this.isEquipment = true;
                this.isProductCompliant = false;
                this.isConsumables = false;
            }
            else if (docTypeSelected == "Consumables") {
                this.isConsumables = true;
                this.isProductCompliant = false;
                this.isEquipment = false;
                this.thirdFormGroup.enable();
            }
        }
        catch (error) {
            //  console.log(this.TAG, error);
        }
    };
    CustomerServicePage.prototype.errorCodeSelectedSelectedChange = function (errorCodeSelected) {
        try {
            //console.log(this.TAG,errorCodeSelected);
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    };
    CustomerServicePage.prototype.ProductReturnedSelectedChange = function (data) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    };
    CustomerServicePage.prototype.contractTypeSelectedChange = function (data) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    };
    CustomerServicePage.prototype.designationOfComplainerChange = function (data) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    };
    CustomerServicePage.prototype.onAreaSelectedChange = function () {
        try {
            this.selectedArea = this.fourthFormGroup.controls['area'].value;
            //    console.log(this.TAG,'Pravin Area Is',this.selectedArea);
            if (this.selectedArea != null)
                this.city = this.selectedArea.cttv$_identifier;
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    };
    CustomerServicePage.prototype.RefreshPage = function () {
        try {
            //this.firstFormGroup.controls.complaintDateCtrl.patchValue(this.maxDate);
            this.firstFormGroup.reset();
            this.firstStepValid = false;
            this.equipmentFormGroup.reset();
            this.secondStepValid = false;
            this.thirdFormGroup.reset();
            this.thirdStepValid = false;
            this.fourthFormGroup.reset();
            this.fourthStepValid = false;
            this.consumablesFormGroup.reset();
            this.productCompliantFormGroup.reset();
            this.ionViewWillEnter();
        }
        catch (error) {
            //   console.log(this.TAG, error);
        }
    };
    CustomerServicePage.prototype.matSettper = function (event, form) {
        try {
            //   console.log(this.TAG, "matSettper Click event", event,form);
            this.firstStepValid = true;
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    };
    CustomerServicePage.prototype.matSettperSecond = function (evnet) {
        try {
            this.secondStepValid = true;
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    };
    CustomerServicePage.prototype.matSettperThird = function (evnet) {
        try {
            this.thirdStepValid = true;
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    };
    CustomerServicePage.prototype.matSettperProductCom = function (event) {
        try {
        }
        catch (error) {
            //   console.error(this.TAG,error);
        }
    };
    CustomerServicePage.prototype.matSettperConsumables = function (event) {
        try {
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    };
    CustomerServicePage.prototype.onCheckInstallationBase = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var serialNo, _a, i, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.commonFunction.loadingPresent();
                        this.serialNoCheckResponse = "";
                        serialNo = this.equipmentFormGroup.get('serialNo').value ? this.equipmentFormGroup.get('serialNo').value : '';
                        _a = this;
                        return [4 /*yield*/, this.customerService.checkSerialNumber(serialNo, "2020-12-31")];
                    case 1: return [4 /*yield*/, (_b.sent()).toPromise()];
                    case 2:
                        _a.serialNoCheckResponse = _b.sent();
                        //  console.log(this.TAG,"Installation Base Data",this.serialNoCheckResponse);
                        if (Object.keys(this.serialNoCheckResponse).length != 0) {
                            if (!!this.serialNoCheckResponse.contracttype) {
                                for (i = 0; i < this.contractTypeList.length; i++) {
                                    if (this.contractTypeList[i].code == this.serialNoCheckResponse.contracttype) {
                                        this.contractTypeSelected = this.contractTypeList[i];
                                    }
                                }
                                this.equipmentFormGroup.get('contractType').disable();
                            }
                            if (!!this.serialNoCheckResponse.invoiceno) {
                                this.equipmentFormGroup.controls["invoiceNoCtrl"].setValue(this.serialNoCheckResponse.invoiceno);
                                this.equipmentFormGroup.get('invoiceNoCtrl').disable();
                            }
                            else {
                                this.equipmentFormGroup.controls["invoiceNoCtrl"].setValue("");
                            }
                            if (!!this.serialNoCheckResponse.invoicedate) {
                                this.serialNoCheckResponse.invoicedate = this.serialNoCheckResponse.invoicedate.split(' ')[0];
                                this.equipmentFormGroup.controls["invoiceDateCtrl"].setValue(this.serialNoCheckResponse.invoicedate);
                                this.equipmentFormGroup.get('invoiceDateCtrl').disable();
                            }
                            else {
                                this.equipmentFormGroup.controls["invoiceDateCtrl"].setValue("");
                            }
                            if (!!this.serialNoCheckResponse.dealername) {
                                this.equipmentFormGroup.controls["dealerNameCtrl"].setValue(this.serialNoCheckResponse.dealername);
                                this.equipmentFormGroup.get('dealerNameCtrl').disable();
                            }
                            else {
                                this.equipmentFormGroup.controls["dealerNameCtrl"].setValue("");
                            }
                            if (!!this.serialNoCheckResponse.installationdate) {
                                this.serialNoCheckResponse.installationdate = this.serialNoCheckResponse.installationdate.split(' ')[0];
                                this.equipmentFormGroup.controls["installationDateCtrl"].setValue(this.serialNoCheckResponse.installationdate);
                                this.equipmentFormGroup.get('installationDateCtrl').disable();
                            }
                            else {
                                this.equipmentFormGroup.controls["installationDateCtrl"].setValue("");
                            }
                            if (!!this.serialNoCheckResponse.sku) {
                                this.thirdFormGroup.controls["SKUCode"].setValue(this.serialNoCheckResponse.sku);
                                this.thirdFormGroup.get('SKUCode').disable();
                            }
                            else {
                                this.thirdFormGroup.controls["SKUCode"].setValue("");
                            }
                            if (!!this.serialNoCheckResponse.sku) {
                                this.thirdFormGroup.controls["skuName"].setValue(this.serialNoCheckResponse.skuname);
                                this.thirdFormGroup.get('skuName').disable();
                            }
                            else {
                                this.thirdFormGroup.controls["skuName"].setValue("");
                            }
                            if (!!this.serialNoCheckResponse.brand) {
                                this.thirdFormGroup.controls["brandName"].setValue(this.serialNoCheckResponse.brand);
                                this.thirdFormGroup.get('brandName').disable();
                            }
                            else {
                                this.thirdFormGroup.controls["brandName"].setValue("");
                            }
                            // if(!!this.serialNoCheckResponse.custname){
                            //   this.fourthFormGroup.controls["customerName"].setValue(this.serialNoCheckResponse.custname);
                            //   this.fourthFormGroup.get('customerName').disable();
                            // }
                            // if(!!this.serialNoCheckResponse.add1){
                            //   this.fourthFormGroup.controls["customerAddress1"].setValue(this.serialNoCheckResponse.add1);
                            //   this.fourthFormGroup.get('customerAddress1').disable();
                            // }
                            // if(!!this.serialNoCheckResponse.add2){
                            //   this.fourthFormGroup.controls["customerAddress2"].setValue(this.serialNoCheckResponse.add2);
                            //   this.fourthFormGroup.get('customerAddress2').disable();
                            // }
                            // if(!!this.serialNoCheckResponse.add3){
                            //   this.fourthFormGroup.controls["customerAddress3"].setValue(this.serialNoCheckResponse.add3);
                            //   this.fourthFormGroup.get('customerAddress3').disable();
                            // }
                            // if(Object.keys(this.serialNoCheckResponse.pincode).length != 0){
                            //   this.fourthFormGroup.controls["pinCodeCtrl"].setValue(this.serialNoCheckResponse.pincode);
                            //   if(Object.keys(this.serialNoCheckResponse.area).length != 0){
                            //     this.fourthFormGroup.get('pinCodeCtrl').disable();
                            //   }
                            // }
                            // if(Object.keys(this.serialNoCheckResponse.area).length != 0){
                            //  let areaDummyObject = [{"id":this.serialNoCheckResponse.area[0].id,"mmst_cttv_id":this.serialNoCheckResponse.area[0].id, "cttv":this.serialNoCheckResponse.area[0].id, "_identifier":this.serialNoCheckResponse.area[0].id, "area":this.serialNoCheckResponse.area[0].name, "cttv$_identifier":this.serialNoCheckResponse.area[0].id}]
                            //  this.areaList = areaDummyObject;
                            //  this.areaSelected = areaDummyObject[0];
                            //  this.fourthFormGroup.get('area').disable();
                            // }
                            // if(Object.keys(this.serialNoCheckResponse.city).length != 0){
                            //   this.fourthFormGroup.controls["city"].setValue(this.serialNoCheckResponse.city[0].name);
                            //  // this.fourthFormGroup.get('city').disable();
                            // }
                            // if(Object.keys(this.serialNoCheckResponse.state).length != 0){
                            //   this.fourthFormGroup.controls["state"].setValue(this.serialNoCheckResponse.state[0].name);
                            //  // this.fourthFormGroup.get('state').disable();
                            // }
                            // if(Object.keys(this.serialNoCheckResponse.country).length != 0){
                            //   this.fourthFormGroup.controls["country"].setValue(this.serialNoCheckResponse.country[0].name);
                            //   //this.fourthFormGroup.get('country').disable();
                            // }
                        }
                        else {
                            this.equipmentFormGroup.reset();
                            this.equipmentFormGroup.enable();
                            this.equipmentFormGroup.controls["serialNo"].setValue(serialNo);
                            this.thirdFormGroup.reset();
                            this.thirdFormGroup.enable();
                            this.fourthFormGroup.reset();
                            this.fourthFormGroup.enable();
                        }
                        this.commonFunction.loadingDismiss();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CustomerServicePage.prototype.onChangePinCode = function (id) {
        var _this = this;
        if (id === void 0) { id = ''; }
        try {
            this.newcustomerservice.getPincode(this.fourthFormGroup.controls["pinCodeCtrl"].value).subscribe(function (data) {
                var response = data['response'];
                //   console.log(this.TAG,"Response From Pin Code",response);
                _this.pinCodeList = response.data;
                if (_this.pinCodeList.length > 0) {
                    _this.inValidPinCode = '';
                    _this.newcustomerservice.getarea(_this.pinCodeList[0].id).subscribe(function (data) {
                        var response = data['response'];
                        console.log(_this.TAG, "AREA LIST", response.data);
                        _this.areaList = response.data;
                        _this.state = _this.pinCodeList[0].region$_identifier;
                        _this.country = _this.pinCodeList[0].country$_identifier;
                        _this.district = _this.pinCodeList[0].district$_identifier;
                        if (id != '' || id == undefined) {
                            _this.selectedArea = _this.areaList.find(function (item) { return item.id === id; });
                            setTimeout(function () {
                                _this.fourthFormGroup.controls["area"].setValue(_this.selectedArea);
                            }, 1500);
                        }
                    });
                }
            });
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    };
    CustomerServicePage.prototype.checkSerialNo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var serialNumberTemp, equipmentData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serialNumberTemp = this.equipmentFormGroup.get('serialNo').value ? this.equipmentFormGroup.get('serialNo').value : '';
                        if (!!!serialNumberTemp) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.customerService.getSerialNumberFromBase(serialNumberTemp).toPromise()];
                    case 1:
                        equipmentData = _a.sent();
                        if (equipmentData) {
                            this.equipmentFormGroup.controls.SrNoEquipmentCtrl.setValue(equipmentData.srnoequipment);
                            this.equipmentFormGroup.get('SrNoEquipmentCtrl').disable();
                            this.equipmentFormGroup.controls.invoiceNoCtrl.setValue(equipmentData.invoiceno);
                            this.equipmentFormGroup.controls.invoiceDateCtrl.setValue(equipmentData.invoicedate);
                            this.equipmentFormGroup.controls.dealerNameCtrl.setValue(equipmentData.dealername);
                            this.equipmentFormGroup.controls.installationDateCtrl.setValue(equipmentData.installationdate);
                            this.thirdFormGroup.controls.SKUCode.setValue(equipmentData.skucode);
                            this.thirdFormGroup.controls.skuName.setValue(equipmentData.skuname);
                            this.thirdFormGroup.controls.brandName.setValue(equipmentData.brandname);
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CustomerServicePage.prototype.presentAlert = function (Header, SubHeader, Message) {
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
                                        _this.firstFormGroup.reset('', { emitEvent: false });
                                        _this.firstStepValid = false;
                                        _this.equipmentFormGroup.reset('', { emitEvent: false });
                                        _this.secondStepValid = false;
                                        _this.thirdFormGroup.reset('', { emitEvent: false });
                                        _this.ProductReturnedSelected = '';
                                        _this.thirdStepValid = false;
                                        _this.fourthFormGroup.reset('', { emitEvent: false });
                                        _this.fourthStepValid = false;
                                        _this.consumablesFormGroup.reset('', { emitEvent: false });
                                        _this.productCompliantFormGroup.reset();
                                        _this.firstFormGroup.markAsPristine();
                                        _this.firstFormGroup.markAsUntouched();
                                        _this.router.navigateByUrl('/home');
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
    CustomerServicePage.prototype.testForm = function (form) {
        // console.log("Form Test",form);
    };
    CustomerServicePage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var complain, area, area, saveComplainResponse, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.commonFunction.loadingPresent();
                        this.fourthStepValid = true;
                        complain = new _assets_model_complain__WEBPACK_IMPORTED_MODULE_1__["Complain"]();
                        complain.doctype = this.docTypeSelected.id;
                        //  console.log("1");    
                        complain.nameofcomplainer = this.firstFormGroup.get('name').value ? this.firstFormGroup.get('name').value : '';
                        complain.desofcomplnr = this.firstFormGroup.get('designationOfComplainerCtrl').value.id ? this.firstFormGroup.get('designationOfComplainerCtrl').value.id : '';
                        //  console.log("2");    
                        complain.contnumber = this.firstFormGroup.get('mobileno').value ? this.firstFormGroup.get('mobileno').value.toString() : '';
                        complain.email = this.firstFormGroup.get('email').value ? this.firstFormGroup.get('email').value : '';
                        complain.eventdate = this.firstFormGroup.get('eventDateCtrl').value ? this.firstFormGroup.get('eventDateCtrl').value : '';
                        complain.description = this.firstFormGroup.get('complaintDescriptionCtrl').value ? this.firstFormGroup.get('complaintDescriptionCtrl').value : '';
                        if (this.docTypeSelected.name == 'Consumables') {
                            complain.lotno = this.consumablesFormGroup.get('lotNoConsumablesCtrl').value ? this.consumablesFormGroup.get('lotNoConsumablesCtrl').value : '';
                        }
                        else if (this.docTypeSelected.name == 'Product Compliant') {
                            complain.lotno = this.productCompliantFormGroup.get('lotNoProductCompliantCtrl').value ? this.productCompliantFormGroup.get('lotNoProductCompliantCtrl').value : '';
                        }
                        else if (this.docTypeSelected.name == 'Equipment') {
                            complain.serialno = this.equipmentFormGroup.get('serialNo').value ? this.equipmentFormGroup.get('serialNo').value : '';
                            complain.srnoequipment = this.equipmentFormGroup.get('SrNoEquipmentCtrl').value ? this.equipmentFormGroup.get('SrNoEquipmentCtrl').value : '';
                            complain.contracttype = this.equipmentFormGroup.get('contractType').value ? this.equipmentFormGroup.get('contractType').value.code : '';
                            complain.invoiceno = this.equipmentFormGroup.get('invoiceNoCtrl').value ? this.equipmentFormGroup.get('invoiceNoCtrl').value : '';
                            complain.invoicedate = this.equipmentFormGroup.get('invoiceDateCtrl').value ? this.equipmentFormGroup.get('invoiceDateCtrl').value : '';
                            // console.log("3");    
                            complain.errorcode = this.errorCodeSelected.id ? this.errorCodeSelected.id : '';
                            complain.dealername = this.equipmentFormGroup.get('dealerNameCtrl').value ? this.equipmentFormGroup.get('dealerNameCtrl').value : '';
                            complain.installationdate = this.equipmentFormGroup.get('installationDateCtrl').value ? this.equipmentFormGroup.get('installationDateCtrl').value : '';
                        }
                        complain.skucode = this.thirdFormGroup.get('SKUCode').value ? this.thirdFormGroup.get('SKUCode').value : '';
                        complain.skuname = this.thirdFormGroup.get('skuName').value ? this.thirdFormGroup.get('skuName').value : '';
                        complain.brandname = this.thirdFormGroup.get('brandName').value ? this.thirdFormGroup.get('brandName').value : '';
                        complain.producttobereturn = this.ProductReturnedSelected ? this.ProductReturnedSelected : '';
                        complain.custname = this.fourthFormGroup.get('customerName').value ? this.fourthFormGroup.get('customerName').value : '';
                        complain.add1 = this.fourthFormGroup.get('customerAddress1').value ? this.fourthFormGroup.get('customerAddress1').value : '';
                        complain.add2 = this.fourthFormGroup.get('customerAddress2').value ? this.fourthFormGroup.get('customerAddress2').value : '';
                        complain.add3 = this.fourthFormGroup.get('customerAddress3').value ? this.fourthFormGroup.get('customerAddress3').value : '';
                        if (this.docTypeSelected.name == 'Equipment') {
                            if (!!this.serialNoCheckResponse.pincode && Object.keys(this.serialNoCheckResponse.pincode).length != 0) {
                                complain.pincode = this.serialNoCheckResponse.pincode;
                            }
                            else {
                                complain.pincode = this.pinCodeList[0].spincode;
                            }
                            if (!!this.serialNoCheckResponse.area && Object.keys(this.serialNoCheckResponse.area).length != 0) {
                                complain.area = this.serialNoCheckResponse.area[0].id;
                                complain.city = this.serialNoCheckResponse.city[0].id;
                                complain.state = this.serialNoCheckResponse.state[0].id;
                                complain.country = this.serialNoCheckResponse.country[0].id;
                            }
                            else {
                                area = this.fourthFormGroup.get('area').value ? this.fourthFormGroup.get('area').value : '';
                                complain.area = area.id;
                                complain.city = this.selectedArea.cttv;
                                complain.state = this.pinCodeList[0].region;
                                complain.country = this.pinCodeList[0].country;
                            }
                        }
                        else {
                            complain.pincode = this.pinCodeList[0].spincode;
                            area = this.fourthFormGroup.get('area').value ? this.fourthFormGroup.get('area').value : '';
                            complain.area = area.id;
                            complain.city = this.selectedArea.cttv;
                            complain.state = this.pinCodeList[0].region;
                            complain.country = this.pinCodeList[0].country;
                        }
                        // console.log("4");    
                        complain.assigntoservmg = "true";
                        return [4 /*yield*/, this.customerService.saveComplain(complain).toPromise()];
                    case 1:
                        saveComplainResponse = _a.sent();
                        //   console.log(this.TAG,"Response From Save Complain",saveComplainResponse);
                        if (saveComplainResponse) {
                            this.presentAlert("Customer Service", "", saveComplainResponse.msg);
                        }
                        else {
                            this.presentAlert("Customer Service", "", "Something went wrong please try again" + saveComplainResponse.msg);
                        }
                        this.commonFunction.loadingDismiss();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.commonFunction.loadingDismiss();
                        if (error_2.status == "200") {
                            this.presentAlert("Customer Service", "", error_2.error.text);
                        }
                        else {
                            console.error(this.TAG, error_2);
                            this.commonFunction.presentAlert("Customer Service", error_2.status, "Something went wrong please try again");
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerServicePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _provider_validator_helper__WEBPACK_IMPORTED_MODULE_5__["Validator"] },
        { type: _customer_service_service__WEBPACK_IMPORTED_MODULE_2__["CustomerServiceService"] },
        { type: src_app_newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_6__["NewcustomerService"] },
        { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("stepper", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepper"])
    ], CustomerServicePage.prototype, "stepper", void 0);
    CustomerServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-customer-service',
            template: __webpack_require__(/*! raw-loader!./customer-service.page.html */ "./node_modules/raw-loader/index.js!./src/app/cardinal/customer-service/customer-service.page.html"),
            styles: [__webpack_require__(/*! ./customer-service.page.scss */ "./src/app/cardinal/customer-service/customer-service.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _provider_validator_helper__WEBPACK_IMPORTED_MODULE_5__["Validator"],
            _customer_service_service__WEBPACK_IMPORTED_MODULE_2__["CustomerServiceService"], src_app_newcustomer_newcustomer_service__WEBPACK_IMPORTED_MODULE_6__["NewcustomerService"],
            src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], CustomerServicePage);
    return CustomerServicePage;
}());



/***/ })

}]);
//# sourceMappingURL=cardinal-customer-service-customer-service-module-es5.js.map