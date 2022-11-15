(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cardinal-service-engineer-visit-service-engineer-visit-detail-service-engineer-visit-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Field Visit Details\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <!-- <ion-buttons (click)=\"refreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n    <ng-template matStepperIcon=\"edit\">\n      <mat-icon>done</mat-icon>\n    </ng-template>\n    <!-- Detail Tab -->\n    <mat-step [stepControl]=\"detailFormGroup\">\n      <form [formGroup]=\"detailFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Details</ng-template>\n        <!-- complaint_no -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Complaint No.</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.complaintno\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- complaint_date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Complaint Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.complaintdate\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Document Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Document Type</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.doctype[0].name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Name of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Name of Complainer</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.nameofcomplainer\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Designation of Complainer -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Designation of Complainer</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.desofcomplnr[0].name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Contact No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Contact No</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.contnumber\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Email ID -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Email ID</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.email\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Event Date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Event Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.eventdate\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Complaint Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Complaint Description</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.description\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext (click)=\"matDetailSettper($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Product Compliant Tab-->\n    <mat-step [stepControl]=\"productCompliantFormGroup\" *ngIf=\"isProductCompliantTab\">\n      <form [formGroup]=\"productCompliantFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Product Compliant</ng-template>\n        <!-- Lot No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput >\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperProductCompliant($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Consumables Tab  -->\n    <mat-step [stepControl]=\"consumablesFormGroup\" *ngIf=\"isConsumablesTab\">\n      <form [formGroup]=\"consumablesFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Consumables</ng-template>\n        <!-- Lot No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Lot No.</mat-label>\n          <input matInput>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperConsumables($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Equiment Tab-->\n    <mat-step [stepControl]=\"equimentFormGroup\" *ngIf=\"isEquimentTab\">\n      <form [formGroup]=\"equimentFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Equiment</ng-template>\n        <!-- Serial No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Serial No.</mat-label>\n          <input matInput formControlName=\"serialNoCtrl\" [(ngModel)]=\"service.serialno\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.serialNo\">\n              <div *ngIf=\"equimentFormGroup.get('serialNoCtrl').hasError(validation.type) && equimentStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Contract Type -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Contract Type</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"contracttypeSelected\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Invoice No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Invoice No.</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.invoiceno\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Invoice Date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Invoice Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.invoicedate\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Error Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Error Code</mat-label>\n          <mat-select [(ngModel)]=\"errorCodeSelected\" formControlName=\"errorCodeCtrl\"\n            (selectionChange)=\"errorCodeSelectedChange(errorCodeSelected)\">\n            <mat-option *ngFor=\"let errorCode of errorCodeList\" [value]=\"errorCode\">\n              {{errorCode.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.errorCodeCtrlErrorMessage\">\n              <div *ngIf=\"equimentFormGroup.get('errorCodeCtrl').hasError(validation.type) && equimentStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Dealer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Dealer Name</mat-label>\n          <input matInput formControlName=\"dealerNameCtrl\" [(ngModel)]=\"service.newdealername\">\n        </mat-form-field>\n        <!-- Sales Representative -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Sales Representative</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.salesrep\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Invoice Date -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Installation Date</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.installationdate\"\n            [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperEquiment($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- SKU Details Tab-->\n    <mat-step [stepControl]=\"skuDetailsFormGroup\">\n      <form [formGroup]=\"skuDetailsFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>SKU Details</ng-template>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>SKU Code</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.skucode\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- SKU Name / Description -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>SKU Name / Description</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.skuname\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Brand Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Brand Name</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.brandname\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Product to be returned -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Product to be returned</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"productToBeReturn\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperSKUDetails($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Customer Detail Tab -->\n    <mat-step [stepControl]=\"customerDetailFormGroup\">\n      <form [formGroup]=\"customerDetailFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Customer Detail</ng-template>\n        <!-- Customer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Name</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.custname\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Customer Address 1 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 1</mat-label>\n          <input matInput formControlName=\"customerAddress1Ctrl\" [(ngModel)]=\"service.add1\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress1\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('customerAddress1Ctrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Customer Address 2 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 2</mat-label>\n          <input matInput formControlName=\"customerAddress2Ctrl\" [(ngModel)]=\"service.add2\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress2\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('customerAddress2Ctrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Customer Address 3 -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Customer Address 3</mat-label>\n          <input matInput formControlName=\"customerAddress3Ctrl\" [(ngModel)]=\"service.add3\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.customerAddress3\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('customerAddress3Ctrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Pin Code -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Pin Code</mat-label>\n          <input type=\"number\" matInput formControlName=\"pinCodeCtrl\" [(ngModel)]=\"service.pincode\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.pinCode\">\n              <div\n                *ngIf=\"customerDetailFormGroup.get('pinCodeCtrl').hasError(validation.type) && customerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Area -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Area</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.area[0].name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- City -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>City</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.city[0].name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- State -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>State</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.state[0].name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Country -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Country</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.country[0].name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperConsumables($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Vender Tab  -->\n    <mat-step [stepControl]=\"venderFormGroup\">\n      <form [formGroup]=\"venderFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Vendor Details</ng-template>\n        <!-- Service Engineer Name -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Service Engineer Name</mat-label>\n          <input matInput [disabled]='true'  [(ngModel)]=\"service.serviceengname.name\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!--Service Engineer Contact No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Contact No</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.servicontactno\" [ngModelOptions]=\"{standalone: true}\" >\n        </mat-form-field>\n        <!-- Date of Visit -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Date of Visit</mat-label>\n          <input type=\"date\" matInput [disabled]='true'  [(ngModel)]=\"service.dateofvisit\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <!-- Service Vendor Remarks -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Service Vendor Remarks</mat-label>\n          <input matInput [disabled]='true' [(ngModel)]=\"service.serivevendorremark\" [ngModelOptions]=\"{standalone: true}\">\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext (click)=\"matSettperConsumables($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Engineer Details  -->\n    <mat-step [stepControl]=\"engineerDetailsFormGroup\">\n      <form [formGroup]=\"engineerDetailsFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Engineer Details</ng-template>\n        <!-- Problem Observed -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Problem Observed</mat-label>\n          <input matInput formControlName=\"problemObservedCtrl\" [(ngModel)]=\"service.problem_observed\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.problemObservedMessage\">\n              <div\n                *ngIf=\"engineerDetailsFormGroup.get('problemObservedCtrl').hasError(validation.type) && engineerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Field Visit Remarks -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Field Visit Remarks</mat-label>\n          <textarea matInput [maxLength]=\"250\" formControlName=\"fieldVisitRemarksCtrl\" [(ngModel)]=\"service.field_visit_remark\"></textarea>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.fieldVisitRemarksMessage\">\n              <div\n                *ngIf=\"engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').hasError(validation.type) && engineerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n       <!-- Proposed Action -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Proposed Action</mat-label>\n          <mat-select [(ngModel)]=\"proposedActionSelected\" formControlName=\"proposedActionCtrl\"\n            (selectionChange)=\"proposedActionClick(proposedActionSelected)\">\n            <mat-option *ngFor=\"let proposedActionObject of proposedActionList\" [value]=\"proposedActionObject\">\n              {{proposedActionObject.name}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.proposedActionCtrlErrorMessage\">\n              <div *ngIf=\"engineerDetailsFormGroup.get('proposedActionCtrl').hasError(validation.type) && engineerDetailStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Dealer Billing Address -->\n        <mat-form-field class=\"example-full-width\" *ngIf=\"isDealerBillingAddress\">\n          <mat-label>Dealer Billing Address</mat-label>\n          <mat-select  formControlName=\"dealerBillingAddressCtrl\" [(ngModel)]=\"dealerBillingAddressSelected\"\n            (selectionChange)=\"dealerBillingAddressClick(dealerBillingAddressSelected)\">\n            <mat-option *ngFor=\"let dealerBillingAddressObject of dealerBillingAddressList\" [value]=\"dealerBillingAddressObject\">\n              {{dealerBillingAddressObject.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!-- Dealer Shipping Address -->\n        <mat-form-field class=\"example-full-width\" *ngIf=\"isDealerShippingAddress\">\n          <mat-label>Dealer Shipping Address</mat-label>\n          <mat-select  formControlName=\"dealerShippingAddressCtrl\" [(ngModel)]=\"dealerShippingAddressSelected\"\n            (selectionChange)=\"dealerBillingAddressClick(dealerShippingAddressSelected)\">\n            <mat-option *ngFor=\"let dealerShippingAddressObject of dealerShippingAddressList\" [value]=\"dealerShippingAddressObject\">\n              {{dealerShippingAddressObject.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!-- Complaint Status -->\n         <mat-form-field class=\"example-full-width\" *ngIf=\"complaintStatusControlVisible\">\n          <mat-label class=\"asterisk_input\">Complaint Status</mat-label>\n          <mat-select [(ngModel)]=\"complaintStatusSelected\" formControlName=\"complaintStatusCtrl\"\n          (selectionChange)=\"complaintStatusClick(complaintStatusSelected)\">\n          <mat-option *ngFor=\"let complaintStatusObject of complaintStatusList\" [value]=\"complaintStatusObject\">\n            {{complaintStatusObject.name}}\n          </mat-option>\n        </mat-select>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.complaintStatusCtrlErrorMessage\">\n                <div\n                  *ngIf=\"engineerDetailsFormGroup.get('complaintStatusCtrl').hasError(validation.type) && engineerDetailStepValid\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n        </mat-form-field>\n         <!-- Assign To -->\n         <mat-form-field class=\"example-full-width\" *ngIf=\"assignToCtrlVisible\">\n          <mat-label>Assign To</mat-label>\n          <mat-select  formControlName=\"assignToCtrl\" \n          (selectionChange)=\"assignToClick()\" [(ngModel)]=\"assignToSelected\">\n          <mat-option *ngFor=\"let serviceManagerObject of serviceManagerList\" [value]=\"serviceManagerObject\">\n            {{serviceManagerObject.name}}\n          </mat-option>\n        </mat-select>\n        </mat-form-field>\n        <!-- Closure at Field -->\n        <div>\n          <ion-row>\n            <ion-col no-padding>\n              <ion-button size=\"default\" class=\"submit-btn\" [disabled]=\"!closureAtFieldBtnVisible\" expand=\"block\" color=\"primary\" (click)=\"closureAtFieldBtnClick()\">Closure at Field\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div>\n          <!-- <button mat-button  class=\"submit-btn\" (click)=\"takePicture()\">Camera</button> -->\n          \n          <button mat-button matStepperNext (click)=\"matSettperSpareRequired(spareRequiredFormGroup)\" *ngIf=\"engineerDetailsNextButtonVisible\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Spare Required -->\n    <mat-step [stepControl]=\"spareRequiredFormGroup\" *ngIf=\"isSpareRequiredTabVisible\">\n      <form [formGroup]=\"spareRequiredFormGroup\" class=\"example-form\">\n      <ng-template matStepLabel>Spare Required</ng-template>\n      <!-- Spare SKU Code -->\n      <mat-form-field class=\"example-full-width\">\n        <mat-label class=\"asterisk_input\">Spare SKU Code</mat-label>\n        <mat-select formControlName=\"spareSKUCodeDropDownCtrl\" [(ngModel)]=\"spareSKUCodeSelected\"\n          (selectionChange)=\"spareSKUCodeClick(spareSKUCodeSelected)\">\n          <mat-option *ngFor=\"let spareSKUCodeObject of spareSKUCodeList\" [value]=\"spareSKUCodeObject\">\n            {{spareSKUCodeObject.name}}\n          </mat-option>\n        </mat-select>\n        <div padding-left>\n          <ng-container *ngFor=\"let validation of validation_messages.spareSKUCodeDropDownCtrlErrorMessage\">\n            <div *ngIf=\"spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').hasError(validation.type) && spareRequiredStepValid\">\n              <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n            </div>\n          </ng-container>\n        </div>\n      </mat-form-field>\n      <!-- Quantity -->\n      <mat-form-field class=\"example-full-width\">\n        <mat-label class=\"asterisk_input\">Quantity</mat-label>\n        <input matInput type=\"number\" formControlName=\"quantityCtrl\" readonly>\n        <!-- <div padding-left>\n          <ng-container *ngFor=\"let validation of validation_messages.quantityCtrlErrorMessage\">\n            <div *ngIf=\"spareRequiredFormGroup.get('quantityCtrl').hasError(validation.type) && spareRequiredStepValid\">\n              <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n            </div>\n          </ng-container>\n        </div> -->\n      </mat-form-field>\n      <!-- Dealer Name -->\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Dealer Name</mat-label>\n        <input matInput formControlName=\"dealerNameSpareRequiredCtrl\" [(ngModel)]=\"tempNewDealer\" readonly>\n      </mat-form-field>\n      <!-- COP Sales Order Reference -->\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>COP Sales Order Reference</mat-label>\n        <input matInput formControlName=\"copSalesOrderReferenceCtrl\">\n      </mat-form-field>\n      <!-- Spare Request -->\n      <div>\n        <ion-row>\n          <ion-col no-padding>\n           \n            <ion-button size=\"default\"  [disabled]=\"!tempCartStatus\"  class=\"submit-btn\" expand=\"block\" color=\"primary\" (click)=\"punchedCOPSalesOrder()\">Spare Request\n            </ion-button>\n          </ion-col>\n          <ion-col no-padding>\n            <ion-button size=\"default\"  [disabled]=\"!spareRequiredFormGroup.valid\" class=\"submit-btn\" expand=\"block\" color=\"primary\" (click)=\"addToCart()\">Add To Cart\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <mat-list dense>\n        <mat-icon matListIcon>add_shopping_cart</mat-icon>\n        <mat-list-item *ngFor=\"let spareItem of tempSpareCart\">\n          <ion-col size=\"10\">\n            <p matLine style=\"font-weight: bolder;\"> {{spareItem.name}} </p>\n            <p matLine> {{spareItem.dealer_name}} </p>\n            <p matLine> {{spareItem.qty}} </p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\" (click)=\"removeFromCart(spareItem)\">\n              <mat-icon>delete_sweep</mat-icon>\n            </button>\n            \n          </ion-col>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n      </mat-list>\n      <div>\n        <button mat-button matStepperPrevious class=\"submit-btn\">Back</button>\n        <button mat-button matStepperNext (click)=\"matSettperSpareRequired(spareRequiredFormGroup)\">Next</button>\n      </div>\n      </form>\n    </mat-step>\n     <!--Spare Ordered Tab-->\n     <mat-step [stepControl]=\"spareOrderedTab\" *ngIf=\"spareOrderedTabVisible\">\n      <form [formGroup]=\"spareOrderedTab\" class=\"example-form\">\n        <ng-template matStepLabel>Spare Ordered Tab</ng-template>\n        <mat-list dense>\n         <mat-list-item *ngFor=\"let orderItem of spareRequiredList\" style=\"padding: top 0px;\">\n            <ion-col>\n              <p matLine>Order Reference: {{orderItem.orderno}} </p>\n              <p matLine>Spare SKU Code: {{orderItem.sapresku}} </p>\n              <p matLine>Quantity: {{orderItem.qty}} </p>\n              <p matLine>Dealer Name: {{orderItem.dealername}} </p>\n            </ion-col>\n          <mat-divider></mat-divider>\n          </mat-list-item>\n        </mat-list>\n      </form>\n    </mat-step>\n    <!-- Spare Installation Tab -->\n    <mat-step [stepControl]=\"spareInstallationFormGroup\" *ngIf=\"isSpareInstallationTabVisible\">\n      <form [formGroup]=\"spareInstallationFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Spare Installation</ng-template>\n        <!-- COP Sales order Reference -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">COP Sales order Reference</mat-label>\n          <mat-select formControlName=\"copSalesOrderReferenceDropDownCtrl\" [(ngModel)]=\"copSalesOrderReferenceSelected\"\n            (selectionChange)=\"copSalesOrderReferenceDropDownChange(copSalesOrderReferenceSelected)\">\n            <mat-option *ngFor=\"let copSalesOrderReferenceObject of copSalesOrderReferenceList\" [value]=\"copSalesOrderReferenceObject\">\n              {{copSalesOrderReferenceObject.orderno}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.copSalesOrderReferenceDropDownCtrlErrorMessage\">\n              <div *ngIf=\"spareInstallationFormGroup.get('copSalesOrderReferenceDropDownCtrl').hasError(validation.type) && spareInstallationStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n         <!-- SKU Code -->\n         <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">SKU Code</mat-label>\n          <mat-select formControlName=\"skuCodeCtrl\" [(ngModel)]=\"skuCodeSelected\"\n            (selectionChange)=\"skuCodeListChange(skuCodeSelected)\">\n            <mat-option *ngFor=\"let skuCodeListObject of skuCodeList\" [value]=\"skuCodeListObject\">\n              {{skuCodeListObject.sapresku}}\n            </mat-option>\n          </mat-select>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.skuCodeCtrlErrorMessage\">\n              <div *ngIf=\"spareInstallationFormGroup.get('skuCodeCtrl').hasError(validation.type) && spareInstallationStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n       <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Quantity</mat-label>\n          <input type=\"number\" formControlName=\"spareReceivedQuantityCtrl\" matInput readonly>\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.spareReceivedQuantityCtrlErrorMessage\">\n              <div\n                *ngIf=\"spareInstallationFormGroup.get('spareReceivedQuantityCtrl').hasError(validation.type) && spareInstallationStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n\n        <!-- Spare Received Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label  class=\"asterisk_input\" style=\"color: darkgray;\">Spare Received Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\"  formControlName=\"spareReceivedDateCtrl\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n        <div padding-left>\n          <ng-container *ngFor=\"let validation of validation_messages.spareReceivedDateCtrlErrorMessage\">\n            <div\n              *ngIf=\"spareInstallationFormGroup.get('spareReceivedDateCtrl').hasError(validation.type) && spareInstallationStepValid\">\n              <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n            </div>\n          </ng-container>\n        </div>\n        <!-- Repair Report -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Repair Report</mat-label>\n          <textarea matInput formControlName=\"repairReportCtrl\"></textarea>\n        </mat-form-field>\n        <!-- Completion Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label class=\"asterisk_input\" style=\"color: darkgray;\">Completion Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\"  formControlName=\"completionDateCtrl\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n        <div padding-left>\n          <ng-container *ngFor=\"let validation of validation_messages.completionDateCtrlErrorMessage\">\n            <div\n              *ngIf=\"spareInstallationFormGroup.get('completionDateCtrl').hasError(validation.type) && spareInstallationStepValid\">\n              <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n            </div>\n          </ng-container>\n        </div>\n        <!-- Replaced Spare Part Serial No. -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Replaced Spare Part Serial No</mat-label>\n          <input matInput formControlName=\"replacedSparePartSerialNoCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.replacedSparePartSerialNoCtrlErrorMessage\">\n              <div\n                *ngIf=\"spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').hasError(validation.type) && spareInstallationStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Service Attended by -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Service Attended by</mat-label>\n          <input matInput formControlName=\"serviceAttendedCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.serviceAttendedCtrlErrorMessage\">\n              <div\n                *ngIf=\"spareInstallationFormGroup.get('serviceAttendedCtrl').hasError(validation.type) && spareInstallationStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Defective Spare Part No -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label class=\"asterisk_input\">Defective Spare Part No</mat-label>\n          <input matInput formControlName=\"defectiveSparePartNoCtrl\">\n          <div padding-left>\n            <ng-container *ngFor=\"let validation of validation_messages.defectiveSparePartNoCtrlErrorMessage\">\n              <div\n                *ngIf=\"spareInstallationFormGroup.get('defectiveSparePartNoCtrl').hasError(validation.type) && spareInstallationStepValid\">\n                <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </mat-form-field>\n        <!-- Def Spare Docket No. -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Def Spare Docket No</mat-label>\n          <input matInput formControlName=\"defSpareDocketNoCtrl\">\n        </mat-form-field>\n        <!-- Def Spare Courier -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Def Spare Courier</mat-label>\n          <input matInput formControlName=\"defSpareCourierCtrl\">\n        </mat-form-field>\n        <!-- Def Spare Sent Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Def Spare Sent Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\"  formControlName=\"defSpareSentDateCtrl\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n        <!-- Spare Install Closed -->\n        <section class=\"example-full-width\" *ngIf=\"isSpareInstallClosedCtrlVisible\">\n          <mat-checkbox formControlName=\"spareInstallClosedCtrl\" (change)=\"spareInstallClosedCheckbox($event.checked)\"\n            class=\"example-margin\">Spare Install Closed</mat-checkbox>\n        </section>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext [disabled]=\"!spareInstallationFormGroup.valid\" (click)=\"spareInstallationSaveToOB($event)\">Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <!-- Attachment -->\n    <mat-step [stepControl]=\"attachmentFormGroup\" *ngIf=\"isAttachmentTabVisible\">\n      <form [formGroup]=\"attachmentFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Attachment</ng-template>\n       \n        <section *ngIf=\"isdesktop===false\">\n          <ion-button color=\"light\"(click)=\"ChosePic()\">Select Attachment\n            <ion-icon color=\"primary\" name=\"Photos\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </section>\n        <section *ngIf=\"isdesktop===true\">\n         \n          <ion-col size=\"2\">\n            <input type=\"file\" name=\"file\" accept=\"image/*,application/pdf\" id='selectedFile' #selectedFile (change)=\"uploadcompImage($event)\" class=\"inputfile\"/>\n          </ion-col>\n        </section>\n\n        <section *ngIf=\"this.cardinalFileType=='image'\">\n          <ion-row *ngFor=\"let imgg of imgcomp;\">\t\n            <ion-col>\t\n              <img [src]=\"'data:image/jpeg;base64,'+imgg\" (click)=\"ImageViewr(imgg,imgcomp)\" *ngIf=\"imgg\" style=\"width: 35px; height: 35px;\">\t\n            </ion-col>\t\n          </ion-row>\n        </section>\n        <section *ngIf=\"this.cardinalFileType=='pdf'\">\n          <ion-row *ngFor=\"let pdfItem of pdfFileSelectedURI;\">\n            <ion-col size=\"2\">\n              <img src=\"./assets/transparent-pdf1.png\" style=\"width: 50px; height: 50px;\">\n            </ion-col>\n            <ion-col>\n              <ion-row>\n               <ion-col>\n                 <ion-row *ngIf=\"isdesktop===false\">\n                  <ion-label>{{pdfItem.file_name}}</ion-label>\n                 </ion-row>\n                 <!-- <ion-row margin-top=\"5px\">\n                  <ion-label>{{pdfItem.size / 1024 / 1024 }}</ion-label>\n                 </ion-row> -->\n               </ion-col>\n              </ion-row>\n            </ion-col>\n            \n          </ion-row>\n        </section>\n\n\n\n        \n          <!-- <mat-label>Select Attachment</mat-label> -->\n        <button mat-button matStepperPrevious>Next</button>\n            \n     </form>\n    </mat-step >\n    <!-- Service Manager Tab -->\n    <mat-step [stepControl]=\"serviceManagerFormGroup\" *ngIf=\"isServiceManagerTabVisible\">\n      <form [formGroup]=\"serviceManagerFormGroup\" class=\"example-form\">\n        <ng-template matStepLabel>Service Manager</ng-template>\n        <!-- Service Manager Remark -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Service Manager Remark</mat-label>\n          <input matInput formControlName=\"serviceManagerRemarkCtrl\">\n        </mat-form-field>\n        <!-- Defective Spare Part No. -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Defective Spare Part No</mat-label>\n          <input matInput type=\"text\" formControlName=\"defectiveSparePartNoCtrl\">\n        </mat-form-field>\n        <!-- Defective Spare Part Received Date -->\n        <div class=\"example-full-width bottom-border\">\n          <ion-label style=\"color: darkgray;\">Defective Spare Part Received Date</ion-label>\n          <section class=\"cus\">\n           <ion-datetime  style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\"  formControlName=\"defectiveSparePartReceivedDateCtrl\">\n          </ion-datetime>\n          <ion-icon name=\"calendar\"></ion-icon> \n        </section>\n        </div>\n       \n        <!-- <mat-form-field class=\"example-full-width\">\n          <mat-label>Defective Spare Part Received Date</mat-label>\n          <input type=\"date\" formControlName=\"defectiveSparePartReceivedDateCtrl\" matInput>\n        </mat-form-field> -->\n        <!-- Smart Solve Ref No. -->\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Smart Solve Ref No</mat-label>\n          <input matInput type=\"text\" formControlName=\"smartSolveRefNoCtrl\">\n        </mat-form-field>\n        <!-- Final Closure -->\n        <div>\n          <ion-row>\n            <ion-col no-padding>\n              <ion-button size=\"default\" class=\"submit-btn\" [disabled]=\"!serviceManagerFormGroup.valid\" expand=\"block\" color=\"primary\" (click)=\"finalClosureCheckboxServiceManager()\">Final Closure\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <section class=\"example-full-width\">\n          <mat-checkbox formControlName=\"finalClosureCtrl\"\n            (change)=\"finalClosureCheckbox($event.checked)\" class=\"example-margin\">Final Closure</mat-checkbox>\n        </section> -->\n      </form>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <!-- <button mat-button matStepperNext (click)=\"matSettperServiceManager($event)\">Next</button> -->\n      </div>\n      \n    </mat-step>\n  </mat-vertical-stepper>\n   \n</ion-content>"

/***/ }),

/***/ "./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ServiceEngineerVisitDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEngineerVisitDetailPageModule", function() { return ServiceEngineerVisitDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_engineer_visit_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-engineer-visit-detail.page */ "./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");











const routes = [
    {
        path: '',
        component: _service_engineer_visit_detail_page__WEBPACK_IMPORTED_MODULE_6__["ServiceEngineerVisitDetailPage"]
    }
];
let ServiceEngineerVisitDetailPageModule = class ServiceEngineerVisitDetailPageModule {
};
ServiceEngineerVisitDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_service_engineer_visit_detail_page__WEBPACK_IMPORTED_MODULE_6__["ServiceEngineerVisitDetailPage"]]
    })
], ServiceEngineerVisitDetailPageModule);



/***/ }),

/***/ "./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-stepper-vertical {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.close {\n  margin-left: 20px;\n  margin-right: 20px;\n  max-width: 500px;\n}\n\n.fselect {\n  font-size: xxx-large;\n  padding-right: 20px;\n  color: #f39e20;\n}\n\n.cus {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n\nion-datetime {\n  width: 100%;\n}\n\n::ng-deep .mat-step-header .mat-step-icon-state-done {\n  background-color: #f39e20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9jYXJkaW5hbC9zZXJ2aWNlLWVuZ2luZWVyLXZpc2l0L3NlcnZpY2UtZW5naW5lZXItdmlzaXQtZGV0YWlsL3NlcnZpY2UtZW5naW5lZXItdmlzaXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FyZGluYWwvc2VydmljZS1lbmdpbmVlci12aXNpdC9zZXJ2aWNlLWVuZ2luZWVyLXZpc2l0LWRldGFpbC9zZXJ2aWNlLWVuZ2luZWVyLXZpc2l0LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURTRTtFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFNHO0VBQ0MsV0FBQTtBQ05KOztBRFFFO0VBQ0UseUJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NhcmRpbmFsL3NlcnZpY2UtZW5naW5lZXItdmlzaXQvc2VydmljZS1lbmdpbmVlci12aXNpdC1kZXRhaWwvc2VydmljZS1lbmdpbmVlci12aXNpdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgfVxuXG4gIC5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNsb3NlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuICAuZnNlbGVjdHtcbiAgICBmb250LXNpemU6IHh4eC1sYXJnZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjZjM5ZTIwO1xuICB9XG5cbiAgLy8gOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAvLyAgIG1pbi13aWR0aDogODB2dztcbiAgLy8gICBtaW4taGVpZ2h0OiAxMDB2dztcbiAgLy8gfVxuICBcbiAgLy8gOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgLy8gICBtYXgtaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XG4gIC8vIH1cblxuICAuY3Vze1xuICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIGlvbi1kYXRldGltZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmMzllMjA7IFxuIH1cbiAiLCIubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xvc2Uge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uZnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2YzOWUyMDtcbn1cblxuLmN1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWUyMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ServiceEngineerVisitDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEngineerVisitDetailPage", function() { return ServiceEngineerVisitDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../customer-service/customer-service.service */ "./src/app/cardinal/customer-service/customer-service.service.ts");
/* harmony import */ var _service_engineer_visit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service-engineer-visit.service */ "./src/app/cardinal/service-engineer-visit/service-engineer-visit.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var src_app_neworder_neworder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/neworder/neworder.service */ "./src/app/neworder/neworder.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_assets_model_complain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/assets/model/complain */ "./src/assets/model/complain.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/file-transfer */ "./node_modules/@ionic-native/file-transfer/index.js");






















let ServiceEngineerVisitDetailPage = class ServiceEngineerVisitDetailPage {
    constructor(route, router, formBuilder, validator, neworderservice, serviceEngineerVisitService, modalController, loginService, commonFunction, alertCtrl, customerService, imagePicker, camera, msg, platform, fileChooser, filePath, file, transfer, filePicker) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.validator = validator;
        this.neworderservice = neworderservice;
        this.serviceEngineerVisitService = serviceEngineerVisitService;
        this.modalController = modalController;
        this.loginService = loginService;
        this.commonFunction = commonFunction;
        this.alertCtrl = alertCtrl;
        this.customerService = customerService;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.msg = msg;
        this.platform = platform;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.file = file;
        this.transfer = transfer;
        this.filePicker = filePicker;
        // @ViewChild('spareRequiredFormGroup',{ static: false }) spareRequiredFormGroup;
        this.TAG = "ServiceEngineerVisitDetailPage";
        this.isLinear = false;
        /**
         *
         */
        this.detailsStepValid = false;
        this.equimentStepValid = false;
        this.customerDetailStepValid = false;
        this.engineerDetailStepValid = false;
        this.spareRequiredStepValid = false;
        /**
         *
         */
        this.img = '';
        this.fileUrl = '';
        this.isdesktop = false;
        this.spareInstallationStepValid = false;
        this.assignToCtrlVisible = false;
        this.closureAtFieldBtnVisible = false;
        this.engineerDetailsNextButtonVisible = false;
        this.isClosureATFieldCtrlVisibleActive = false;
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
            'problemObservedMessage': [{ type: 'required', message: '*Please Enter Problem Observed' }],
            'fieldVisitRemarksMessage': [{ type: 'required', message: '*Please Enter Remark' }],
            'spareSKUCodeDropDownCtrlErrorMessage': [{ type: 'required', message: '*Please Select SKU Code' }],
            'proposedActionCtrlErrorMessage': [{ type: 'required', message: '*Please Select Proposed Action' }],
            'spareReceivedDateCtrlErrorMessage': [{ type: 'required', message: '*Please Select Spare Received Date' }],
            'complaintStatusCtrlErrorMessage': [{ type: 'required', message: '*Please Select Complaint Status' }],
            'completionDateCtrlErrorMessage': [{ type: 'required', message: '*Please Select Completion Date' }],
            'serviceAttendedCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Service Attended' }],
            'quantityCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Quantity' }],
            'errorCodeCtrlErrorMessage': [{ type: 'required', message: '*Please Select Error Code' }],
            'replacedSparePartSerialNoCtrlErrorMessage': [{ type: 'required', message: '*Please Select Enter Replaced Spare Part Serial No' }],
            'defectiveSparePartNoCtrlErrorMessage': [{ type: 'required', message: '*Please Select Enter Defective Spare Part No' }],
            'copSalesOrderReferenceDropDownCtrlErrorMessage': [{ type: 'required', message: '*Please Select COP Sales Order Reference' }],
            'skuCodeCtrlErrorMessage': [{ type: 'required', message: '*Please Select SKU Code' }],
            'spareReceivedQuantityCtrlErrorMessage': [{ type: 'required', message: '*Quantity can not be empty' }],
        };
        this.imgcomp = [];
        this.punchOrderSuccess = false;
        this.isPunchOrderVisible = false;
        this.isClosureATFieldCtrlVisible = false;
        this.isSpareInstallationTabVisible = false;
        this.isSpareInstallClosedCtrlVisible = false;
        this.isProductCompliantTab = false;
        this.isConsumablesTab = false;
        this.isEquimentTab = false;
        this.isDealerBillingAddress = false;
        this.isDealerShippingAddress = false;
        this.isAttachmentTabVisible = false;
        this.isServiceManagerTabVisible = false;
        this.isSpareRequiredTabVisible = false;
        this.tempCartStatus = false;
        this.spareOrderedTabVisible = false;
        this.complaintStatusControlVisible = false;
    }
    ;
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.route.queryParams.subscribe(params => {
                if (params && params.special) {
                    this.service = JSON.parse(params.special);
                    console.log(this.TAG, this.service);
                }
            });
            this.img = '';
            this.fileUrl = "";
            this.detailFormGroup = this.formBuilder.group({
                nameOfComplainerCtrl: [],
                desigOfComplainerCtrl: [],
                mobilenoCtrl: [],
                emailIDCtrl: [],
                complaintDescriptionCtrl: []
            });
            this.productCompliantFormGroup = this.formBuilder.group({});
            this.consumablesFormGroup = this.formBuilder.group({});
            this.equimentFormGroup = this.formBuilder.group({
                serialNoCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dealerNameCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                errorCodeCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
            this.skuDetailsFormGroup = this.formBuilder.group({});
            this.customerDetailFormGroup = this.formBuilder.group({
                customerAddress1Ctrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                customerAddress2Ctrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                customerAddress3Ctrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                pinCodeCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                approveComplaintCtrl: [,],
                rejectComplaintCtrl: [,],
            });
            this.venderFormGroup = this.formBuilder.group({
                serviceEngineerNameCtrl: [],
                serviceEngMobilenoCtrl: [],
                serviceVendorRemarksCtrl: [],
                dateOfVisitCtrl: [],
            });
            this.engineerDetailsFormGroup = this.formBuilder.group({
                problemObservedCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                fieldVisitRemarksCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                proposedActionCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                dealerBillingAddressCtrl: [,],
                dealerShippingAddressCtrl: [,],
                assignToCtrl: [,],
                punchOrderCtrl: [,],
                closureATFieldCtrl: [,],
                complaintStatusCtrl: []
            });
            this.spareInstallationFormGroup = this.formBuilder.group({
                copSalesOrderReferenceDropDownCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                skuCodeCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                spareReceivedDateCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                spareReceivedQuantityCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                completionDateCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                replacedSparePartSerialNoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                serviceAttendedCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                defectiveSparePartNoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                repairReportCtrl: [,],
                defSpareDocketNoCtrl: [,],
                defSpareCourierCtrl: [,],
                defSpareSentDateCtrl: [,],
                spareInstallClosedCtrl: [,]
            });
            this.serviceManagerFormGroup = this.formBuilder.group({
                serviceManagerRemarkCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                defectiveSparePartNoCtrl: [,],
                defectiveSparePartReceivedDateCtrl: [,],
                smartSolveRefNoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                finalClosureCtrl: [,]
            });
            this.spareRequiredFormGroup = this.formBuilder.group({
                spareSKUCodeDropDownCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                quantityCtrl: [],
                dealerNameSpareRequiredCtrl: [],
                copSalesOrderReferenceCtrl: [,]
            });
            this.attachmentFormGroup = this.formBuilder.group({
                attachmentControlCtrl: []
            });
            this.spareOrderedTab = this.formBuilder.group({});
            this.serviceManagerList = yield (yield this.serviceEngineerVisitService.getServiceManagerList()).toPromise();
            this.proposedActionList = yield (yield this.serviceEngineerVisitService.getProposedActionList()).toPromise();
            this.complaintStatusList = yield (yield this.serviceEngineerVisitService.getComplaintStatus()).toPromise();
            //  this.spareRequiredFormGroup.statusChanges
            //  .subscribe(val => this.onFormValid(val));
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.spareRequiredFormGroup.statusChanges.subscribe(result => {
                // console.log("From Data",result);
                if (result == "VALID") {
                    //  this.tempCartStatus = true;
                }
            });
            this.tempNewDealer = this.service.newdealername;
            this.commonFunction.loadingPresent();
            if (!this.msg.isplatformweb) {
                this.isdesktop = false;
            }
            else {
                this.isdesktop = true;
            }
            this.tempSpareCart = [];
            this.errorCodeList = yield (yield this.customerService.getErrorCodeList()).toPromise();
            this.proposedActionList = yield (yield this.serviceEngineerVisitService.getProposedActionList()).toPromise();
            //  console.log(this.TAG,"Proposed action list",this.proposedActionList);
            this.complaintStatusList = yield (yield this.serviceEngineerVisitService.getComplaintStatus()).toPromise();
            this.serviceManagerList = yield (yield this.serviceEngineerVisitService.getServiceManagerList()).toPromise();
            let billingAddressResponse = yield (yield this.neworderservice.getcustmerbillingaddress(this.service.dealerid)).toPromise();
            const response = billingAddressResponse['response'];
            var jsondata = response.data;
            this.dealerBillingAddressList = jsondata.filter(e => e.invoiceToAddress == true);
            this.dealerShippingAddressList = jsondata.filter(e => e.shipToAddress == true);
            if (this.dealerBillingAddressList.length == 1) {
                this.engineerDetailsFormGroup.controls["dealerBillingAddressCtrl"].setValue(this.dealerBillingAddressList[0]);
            }
            if (this.dealerShippingAddressList.length == 1) {
                this.engineerDetailsFormGroup.controls["dealerShippingAddressCtrl"].setValue(this.dealerShippingAddressList[0]);
            }
            //this.venderFormGroup.get('serviceEngineerNameCtrl').disable();
            //this.venderFormGroup.get('serviceEngMobilenoCtrl').disable();
            //  this.venderFormGroup.get('dateOfVisitCtrl').disable();
            // this.venderFormGroup.get('serviceVendorRemarksCtrl').disable();
            this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').disable();
            if (this.service.doctype[0].name == 'Product Compliant') {
                this.isProductCompliantTab = true;
                this.isConsumablesTab = false;
                this.isEquimentTab = false;
            }
            else if (this.service.doctype[0].name == 'Consumables') {
                this.isProductCompliantTab = false;
                this.isConsumablesTab = true;
                this.isEquimentTab = false;
            }
            else if (this.service.doctype[0].name == 'Equipment') {
                this.isProductCompliantTab = false;
                this.isConsumablesTab = false;
                this.isEquimentTab = true;
            }
            this.spareSKUCodeList = this.service.sparesku;
            // console.log(this.TAG, "Spare SKU Code", this.spareSKUCodeList);
            this.contractTypeList = yield (yield this.customerService.getContractTypeList()).toPromise();
            for (let i = 0; i < this.contractTypeList.length; i++) {
                if (this.contractTypeList[i].code == this.service.contracttype) {
                    this.contracttypeSelected = this.contractTypeList[i].name;
                }
            }
            for (let i = 0; i < this.errorCodeList.length; i++) {
                if (this.errorCodeList[i].code == this.service.errorcode[0].code) {
                    this.errorCodeSelected = this.errorCodeList[i];
                }
            }
            // this.errorCodeSelected = this.service.errorcode[0];
            if (this.service.producttobereturn === 'MSNR_N') {
                this.productToBeReturn = 'No';
            }
            else if (this.service.producttobereturn === 'MSNR_Y') {
                this.productToBeReturn = 'Yes';
            }
            if (!!this.service.closureatfield == true) {
                this.engineerDetailsFormGroup.controls["problemObservedCtrl"].setValue(this.service.probobserv);
                this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();
                this.engineerDetailsFormGroup.controls["fieldVisitRemarksCtrl"].setValue(this.service.fieldvisitremark);
                this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();
                for (let i = 0; i < this.proposedActionList.length; i++) {
                    if (this.proposedActionList[i].code == this.service.proposedaction.code) {
                        this.proposedActionSelected = this.proposedActionList[i];
                        this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
                    }
                }
                if (this.service.proposedaction.code == 'SR') {
                    this.isDealerBillingAddress = true;
                    this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
                    this.isDealerShippingAddress = true;
                    this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
                }
                this.assignToCtrlVisible = true;
                for (let i = 0; i < this.serviceManagerList.length; i++) {
                    if (this.serviceManagerList[i].id == this.service.assigntofieldvisit.id) {
                        this.assignToSelected = this.serviceManagerList[i];
                        this.engineerDetailsFormGroup.get('assignToCtrl').disable();
                    }
                }
                this.engineerDetailsNextButtonVisible = true;
                this.isServiceManagerTabVisible = true;
                this.equimentFormGroup.get('errorCodeCtrl').disable();
                setTimeout(() => {
                    for (let i = 0; i < this.dealerBillingAddressList.length; i++) {
                        if (this.dealerBillingAddressList[i].id == this.service.engineerdetails.dealerbilladd.id) {
                            this.dealerBillingAddressSelected = this.dealerBillingAddressList[i];
                            this.isDealerBillingAddress = true;
                            this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
                        }
                    }
                    for (let i = 0; i < this.dealerShippingAddressList.length; i++) {
                        if (this.dealerShippingAddressList[i].id == this.service.engineerdetails.dealershipadd.id) {
                            this.dealerShippingAddressSelected = this.dealerShippingAddressList[i];
                            this.isDealerShippingAddress = true;
                            this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
                        }
                    }
                }, 300);
            }
            try {
                //New Change
                if (!!this.service.closureatfield == !true && !!this.service.engineerdetails.proposedaction && Object.keys(this.service.engineerdetails.proposedaction).length != 0) {
                    this.engineerDetailsFormGroup.controls["problemObservedCtrl"].setValue(this.service.engineerdetails.probobserv);
                    this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();
                    this.engineerDetailsFormGroup.controls["fieldVisitRemarksCtrl"].setValue(this.service.engineerdetails.fieldvisitremark);
                    this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();
                    for (let i = 0; i < this.proposedActionList.length; i++) {
                        if (this.proposedActionList[i].code == this.service.engineerdetails.proposedaction.code) {
                            this.proposedActionSelected = this.proposedActionList[i];
                            this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
                        }
                    }
                    setTimeout(() => {
                        for (let i = 0; i < this.dealerBillingAddressList.length; i++) {
                            if (this.dealerBillingAddressList[i].id == this.service.engineerdetails.dealerbilladd.id) {
                                this.dealerBillingAddressSelected = this.dealerBillingAddressList[i];
                                this.isDealerBillingAddress = true;
                                this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
                            }
                        }
                        for (let i = 0; i < this.dealerShippingAddressList.length; i++) {
                            if (this.dealerShippingAddressList[i].id == this.service.engineerdetails.dealershipadd.id) {
                                this.dealerShippingAddressSelected = this.dealerShippingAddressList[i];
                                this.isDealerShippingAddress = true;
                                this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
                            }
                        }
                    }, 300);
                    this.isSpareRequiredTabVisible = true;
                    this.isSpareInstallationTabVisible = true;
                    this.complaintStatusControlVisible = true;
                    this.copSalesOrderReferenceList = this.service.orders;
                    this.spareRequiredList = this.service.spare_required_list;
                    if (!!this.spareRequiredList) {
                        this.spareOrderedTabVisible = true;
                    }
                    // this.spareSKUCodeList =  this.service.sparerequired;
                    if (this.service.sparerequired.sparerequest == false) {
                        // this.spareRequiredFormGroup.valid = true;
                        this.punchOrderSuccess = false;
                        this.spareRequiredFormGroup.enable();
                        this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').enable();
                        this.spareRequiredFormGroup.get('quantityCtrl').enable();
                        this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').enable();
                        // console.log("Form Data",this.spareRequiredFormGroup);
                    }
                    else {
                        this.punchOrderSuccess = true;
                    }
                }
            }
            catch (error) {
                // console.log(this.TAG,error);
            }
            this.commonFunction.loadingDismiss();
        });
    }
    refreshPage() {
        try {
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    matDetailSettper(event) {
        try {
        }
        catch (error) {
            // console.error(this.TAG, error);
        }
    }
    matSettperProductCompliant(event) {
        try {
        }
        catch (error) {
            // console.error(this.TAG, error);
        }
    }
    matSettperConsumables(event) {
        try {
        }
        catch (error) {
            // console.error(this.TAG, error);
        }
    }
    matSettperSKUDetails(value) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    matSettperEquiment(event) {
        try {
            this.equimentStepValid = true;
        }
        catch (error) {
            // console.log(this.TAG, error);
        }
    }
    matSettperServiceManager() {
        try {
        }
        catch (error) {
            // console.log(this.TAG, error);
        }
    }
    matSettperSpareRequired(selectedValue) {
        try {
            this.spareRequiredStepValid = true;
            // console.log("Form Spare Required", selectedValue);
        }
        catch (error) {
            //  console.log(this.TAG, error);
        }
    }
    matSettperEngineerDetails() {
        try {
            this.engineerDetailStepValid = true;
        }
        catch (error) {
            // console.log(this.TAG, error);
        }
    }
    errorCodeSelectedChange(selected) {
        try {
            //  console.log(this.TAG,selected);
            this.service.errorcode[0] = selected;
        }
        catch (error) {
        }
    }
    serviceEngSelectedChange(serviceEngSelected) {
        try {
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    approveServiceCheckbox(event) {
        try {
            //  console.log(this.TAG, "CheckBox Value", event);
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    rejectServiceCheckbox() {
        try {
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    punchOrderCheckbox(event) {
        try {
            if (event) {
                this.isSpareInstallationTabVisible = true;
            }
            else {
                this.isSpareInstallationTabVisible = false;
            }
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    proposedActionClick(actionSelected) {
        try {
            // console.log(this.TAG, "Proposed action selected", actionSelected);
            if (this.dealerBillingAddressList.length == 1) {
                this.engineerDetailsFormGroup.controls["dealerBillingAddressCtrl"].setValue(this.dealerBillingAddressList[0]);
            }
            if (this.dealerShippingAddressList.length == 1) {
                this.engineerDetailsFormGroup.controls["dealerShippingAddressCtrl"].setValue(this.dealerShippingAddressList[0]);
            }
            if (actionSelected.code == 'SR') {
                this.isPunchOrderVisible = true;
                this.isClosureATFieldCtrlVisible = false;
                this.isSpareRequiredTabVisible = true;
                this.isDealerBillingAddress = true;
                this.isDealerShippingAddress = true;
                this.isSpareInstallationTabVisible = false;
                this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').disable();
                setTimeout(() => {
                    if (this.dealerBillingAddressList.length == 1) {
                        this.engineerDetailsFormGroup.controls["dealerBillingAddressCtrl"].setValue(this.dealerBillingAddressList[0]);
                    }
                    if (this.dealerShippingAddressList.length == 1) {
                        this.engineerDetailsFormGroup.controls["dealerShippingAddressCtrl"].setValue(this.dealerShippingAddressList[0]);
                    }
                }, 300);
                // this.isAttachmentTabVisible = false;
                this.engineerDetailsNextButtonVisible = true;
                this.assignToCtrlVisible = false;
            }
            else if (actionSelected.code == 'SNR') {
                this.isPunchOrderVisible = false;
                //  this.isClosureATFieldCtrlVisible = true;
                //  this.isAttachmentTabVisible = true;
                this.isSpareInstallationTabVisible = false;
                this.isDealerBillingAddress = false;
                console.log("Bill", this.isDealerBillingAddress);
                this.isDealerShippingAddress = false;
                this.isSpareRequiredTabVisible = false;
                this.complaintStatusControlVisible = false;
                this.assignToCtrlVisible = true;
            }
            else if (actionSelected.code == 'NSCT') {
                this.isPunchOrderVisible = false;
                this.isClosureATFieldCtrlVisible = true;
                this.isSpareInstallationTabVisible = false;
                this.isDealerBillingAddress = false;
                console.log("Bill", this.isDealerBillingAddress);
                this.isDealerShippingAddress = false;
                this.isSpareRequiredTabVisible = false;
                // this.isAttachmentTabVisible = true;
                this.assignToCtrlVisible = true;
                this.complaintStatusControlVisible = false;
            }
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    complaintStatusClick(complaintStatusSelected) {
        try {
            // console.log(this.TAG, complaintStatusSelected);
            if (complaintStatusSelected.code == 'NS') {
                this.isSpareInstallClosedCtrlVisible = false;
                this.spareRequiredFormGroup.reset();
                if (!!this.service.newdealername) {
                    this.spareRequiredFormGroup.controls.dealerNameSpareRequiredCtrl.patchValue(this.service.newdealername);
                }
                else {
                    this.spareRequiredFormGroup.controls.dealerNameSpareRequiredCtrl.patchValue(this.service.dealername);
                }
                this.punchOrderSuccess = false;
                this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').enable();
                this.spareRequiredFormGroup.get('quantityCtrl').enable();
                this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').enable();
                //New Change
                this.isSpareRequiredTabVisible = true;
                this.isSpareInstallationTabVisible = true;
                this.complaintStatusControlVisible = true;
                this.assignToCtrlVisible = false;
            }
            else if (complaintStatusSelected.code == 'CAHTSC') {
                this.isSpareInstallClosedCtrlVisible = false;
                this.assignToCtrlVisible = true;
                this.spareOrderedTabVisible = false;
                this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();
                this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();
                this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
                this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
                this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
                //New Change
                this.isSpareRequiredTabVisible = false;
                this.isSpareInstallationTabVisible = false;
                this.assignToCtrlVisible = true;
            }
            else if (complaintStatusSelected.code == 'CL') {
                this.isSpareInstallClosedCtrlVisible = true;
                this.assignToCtrlVisible = true;
                this.spareOrderedTabVisible = false;
                this.engineerDetailsFormGroup.get('problemObservedCtrl').disable();
                this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').disable();
                this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
                this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').disable();
                this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').disable();
                //New Change
                this.isSpareRequiredTabVisible = false;
                this.isSpareInstallationTabVisible = false;
                this.assignToCtrlVisible = true;
            }
        }
        catch (error) {
            //  console.log(this.TAG, error);
        }
    }
    spareInstallClosedCheckbox(value) {
        try {
            // console.log(this.TAG, "Spare Install Closed", value);
            if (value) {
                //this.closureAtFieldBtnVisible = true;
                //  this.assignToCtrlVisible = true;
            }
            else {
                this.closureAtFieldBtnVisible = false;
                // this.assignToCtrlVisible = false;
            }
        }
        catch (error) {
            //  console.error(this.TAG, error);
        }
    }
    dealerBillingAddressClick(data) {
        try {
        }
        catch (error) {
            //  console.log(this.TAG, error);
        }
    }
    assignToClick() {
        try {
            // console.log("assignToClick Fired", value);
            //this.closureAtFieldBtnVisible = true;
            this.isAttachmentTabVisible = true;
            this.equimentFormGroup.get('errorCodeCtrl').disable();
        }
        catch (error) {
            //  console.log(this.TAG, error);
        }
    }
    dealerShippingAddressClick() {
        try {
        }
        catch (error) {
            //  console.log(this.TAG, error);
        }
    }
    spareSKUCodeClick(selectedSpare) {
        try {
            console.log(this.TAG, selectedSpare);
            this.spareRequiredFormGroup.controls["quantityCtrl"].setValue("1");
        }
        catch (error) {
            // console.log(this.TAG, error);
        }
    }
    onFormValid(val) {
        try {
            //  console.log("Attached Form Status", val);
            this.isClosureATFieldCtrlVisibleActive = true;
        }
        catch (val) {
        }
    }
    finalClosureCheckbox(finalClosureValue) {
        try {
            //  console.log(this.TAG, finalClosureValue);
            if (finalClosureValue) {
                this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').disable();
                this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').disable();
                this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').disable();
                this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').disable();
                this.isClosureATFieldCtrlVisible = true;
            }
            else {
                this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').enable();
                this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').enable();
                this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').enable();
                this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').enable();
                this.isClosureATFieldCtrlVisible = false;
            }
        }
        catch (error) {
            //  console.log(this.TAG, error);
        }
    }
    presentAlert(Header, SubHeader, Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: SubHeader,
                subHeader: '',
                message: Message,
                buttons: [{
                        text: "OK",
                        handler: (ok) => {
                            if (Header == 'closer_success') {
                                this.router.navigateByUrl('/service-engineer-visit');
                            }
                            else {
                                // console.log(this.TAG, "In Present Alert Error");
                            }
                        }
                    }]
            });
            alert.dismiss(() => console.log('The alert has been closed.'));
            yield alert.present();
        });
    }
    presentSpareInstallAlert(Header, SubHeader, Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: SubHeader,
                subHeader: '',
                message: Message,
                buttons: [{
                        text: "OK",
                        handler: (ok) => {
                            let temp = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.code : '';
                            if (temp == 'NS') {
                                // this.isSpareRequiredTabVisible = false;
                                this.isSpareInstallationTabVisible = false;
                                this.spareInstallationFormGroup.reset();
                                this.stepper.previous();
                            }
                            else {
                                //this.stepper.previous();
                                // 
                                this.isSpareRequiredTabVisible = false;
                                this.isSpareInstallationTabVisible = false;
                                this.isAttachmentTabVisible = true;
                            }
                        }
                    }]
            });
            alert.dismiss(() => console.log('The alert has been closed.'));
            yield alert.present();
        });
    }
    ChosePic() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Select Option',
                message: "Select Option to get Picture.",
                buttons: [
                    {
                        text: 'Gallery',
                        handler: data => {
                            this.getimage();
                        }
                    },
                    {
                        text: 'Camera',
                        handler: data => {
                            this.takePicture();
                        }
                    },
                    {
                        text: 'PDF',
                        handler: data => {
                            this.attachPDF();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    attachPDF() {
        try {
            if (this.platform.is('android')) {
                let filter = { "mime": "application/pdf" };
                this.fileChooser.open()
                    .then(uri => {
                    console.log(uri);
                    this.filePath.resolveNativePath(uri).then(filePathResult => {
                        console.log(this.TAG, "Selected fileInfo", filePathResult);
                        this.file.resolveLocalFilesystemUrl(filePathResult).then(fileEntry => {
                            console.log(this.TAG, "Selected fileInfo fileEntry", fileEntry);
                            this.getFileSize(fileEntry).then((metadata) => {
                                if (metadata.size / 1024 / 1024 > 3) {
                                    console.log(this.TAG, "File Size Too Large");
                                    this.commonFunction.presentAlert("New Order", "Validation", "File size must be less than Equal to 3 MB");
                                }
                                else {
                                    console.log(this.TAG, "File Size IS OK");
                                    this.closureAtFieldBtnVisible = true;
                                    this.cardinalFileName = filePathResult.substring(filePathResult.lastIndexOf("/") + 1);
                                    this.cardinalFileType = filePathResult.substring(filePathResult.lastIndexOf(".") + 1);
                                    this.selectedFileUrl = uri;
                                    let temp = { "uri": uri,
                                        "file_name": this.cardinalFileName,
                                        "file_type": this.cardinalFileType,
                                        "size": metadata.size
                                    };
                                    this.pdfFileSelectedURI = [temp];
                                    // if(this.pdfFileSelectedURI ==undefined || this.pdfFileSelectedURI == null){
                                    //   this.pdfFileSelectedURI = [temp];
                                    // } else {
                                    //   this.pdfFileSelectedURI.push(temp);
                                    // }
                                }
                            });
                        }).catch(error => {
                        });
                    });
                })
                    .catch(e => console.log(e));
            }
            else if (this.platform.is('ios')) {
                this.filePicker.pickFile()
                    .then(uri => {
                    this.file.resolveLocalFilesystemUrl('file:///' + uri).then(fileEntry => {
                        console.log(this.TAG, "Selected fileInfo fileEntry", fileEntry);
                        this.getFileSize(fileEntry).then((metadata) => {
                            if (metadata.size / 1024 / 1024 > 3) {
                                console.log(this.TAG, "File Size Too Large");
                                this.commonFunction.presentAlert("New Order", "Validation", "File size must be less than Equal to 3 MB");
                            }
                            else {
                                console.log(this.TAG, "File Size IS OK");
                                this.closureAtFieldBtnVisible = true;
                                this.cardinalFileName = uri.substring(uri.lastIndexOf("/") + 1);
                                this.cardinalFileType = uri.substring(uri.lastIndexOf(".") + 1);
                                this.selectedFileUrl = uri;
                                let temp = { "uri": uri,
                                    "file_name": this.cardinalFileName,
                                    "file_type": this.cardinalFileType,
                                    "size": metadata.size
                                };
                                this.pdfFileSelectedURI = [temp];
                                // if(this.pdfFileSelectedURI ==undefined || this.pdfFileSelectedURI == null){
                                //   this.pdfFileSelectedURI = [temp];
                                // } else {
                                //   this.pdfFileSelectedURI.push(temp);
                                // }
                            }
                        });
                    }).catch(error => {
                    });
                })
                    .catch(err => console.log('File Picker Error', err));
            }
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    getFileSize(FileEntry) {
        let self = this;
        let promise = new Promise(function (resolve, reject) {
            FileEntry.getMetadata((metadata) => {
                resolve(metadata);
            });
        });
        return promise;
    }
    uploadcompImage(str) {
        try {
            for (var k = 0; k < str.target.files.length; k++) {
                this.inneruploadcompImage(str, k);
                this.timeout(500);
            }
        }
        catch (error) {
            //  console.log("Catch",error);	
        }
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    inneruploadcompImage(str, k) {
        var file = str.target.files[k];
        console.log(this.TAG, "SElected File DATA", str.target.files[k]);
        this.cardinalFileName = str.target.files[0].name.substring(str.target.files[0].name.lastIndexOf("/") + 1);
        this.cardinalFileType = str.target.files[0].name.substring(str.target.files[0].name.lastIndexOf(".") + 1);
        console.log("File Selected name", this.cardinalFileName);
        console.log("File Selected type", this.cardinalFileType);
        if (!!this.cardinalFileType && this.cardinalFileType == 'pdf') {
            this.imgcomp = str.target.files[0];
            let temp = { "uri": "tst",
                "file_name": this.cardinalFileName,
                "file_type": this.cardinalFileType,
                "size": (str.target.files[0].size / (1024 * 1024)).toFixed(2)
            };
            this.pdfFileSelectedURI = [temp];
            // if(this.pdfFileSelectedURI ==undefined || this.pdfFileSelectedURI == null){
            //   this.pdfFileSelectedURI = [temp];
            // } else {
            //   this.pdfFileSelectedURI.push(temp);
            // }
            console.log(this.TAG, "File Size", str.target.files[0].size / 1024 / 1024);
            if (str.target.files[0].size / 1024 / 1024 > 3) {
                console.log(this.TAG, "File Size Too Large");
                this.commonFunction.presentAlert("New Order", "Validation", "File size must be less than Equal to 3 MB");
                this.imgcomp = null;
                this.cardinalFileName = "";
                this.cardinalFileType = "";
                this.pdfFileSelectedURI = [];
                this.selectedFile.nativeElement.value = '';
            }
            else {
                var myreader = new FileReader();
                myreader.onloadend = (e) => {
                    var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
                    var existinglength = this.imgcomp.length;
                    this.imgcomp[existinglength] = b64;
                    this.equimentFormGroup.get('errorCodeCtrl').disable();
                    this.closureAtFieldBtnVisible = true;
                };
                myreader.readAsDataURL(file);
            }
        }
        else {
            this.imgcomp = [];
            this.cardinalFileType = "image";
            this.pdfFileSelectedURI = [];
            var file = str.target.files[k];
            var myreader = new FileReader();
            myreader.onloadend = (e) => {
                var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
                var existinglength = this.imgcomp.length;
                this.imgcomp[existinglength] = b64;
                this.equimentFormGroup.get('errorCodeCtrl').disable();
                this.closureAtFieldBtnVisible = true;
            };
            myreader.readAsDataURL(file);
        }
    }
    ImageViewr(img, rowcompliancedata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var msg = "";
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
            const alert = yield this.alertCtrl.create({
                message: msg,
                buttons: [
                    { text: 'Remove',
                        handler: data => {
                            //this.POimg64=null
                            if (rowcompliancedata != null) {
                                this.imgcomp = this.imgcomp.filter(item => item != img);
                            }
                            else {
                                this.fileUrl = null;
                            }
                        }
                    },
                    { text: 'OK' }
                ],
            });
            yield alert.present();
        });
    }
    uploadImage(str) {
        try {
            var file = str.target.files[0];
            var myreader = new FileReader();
            myreader.onloadend = (e) => {
                var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
                this.fileUrl = myreader.result;
                this.img = b64;
            };
            myreader.readAsDataURL(file);
        }
        catch (error) {
        }
    }
    takePicture() {
        const options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            targetWidth: 1500,
            targetHeight: 1500
        };
        this.camera.getPicture(options).then((imageData) => {
            this.fileUrl = 'data:image/jpeg;base64,' + imageData;
            this.cardinalFileType = "image";
            if (!!this.imgcomp) {
                this.imgcomp = this.imgcomp.concat(imageData);
                this.closureAtFieldBtnVisible = true;
                this.equimentFormGroup.get('errorCodeCtrl').disable();
            }
            else {
                this.imgcomp = imageData;
            }
            // console.log("Cameara image",this.img);
        });
    }
    //Select Image from library	
    getimage() {
        const options = {
            quality: 50,
            outputType: 1,
            width: 1500,
            height: 1500
        };
        this.imagePicker.getPictures(options).then((imageData) => {
            //  console.log("this is image date",imageData);
            // this.assignToCtrlVisible = true;
            this.cardinalFileType = "image";
            this.closureAtFieldBtnVisible = true;
            this.equimentFormGroup.get('errorCodeCtrl').disable();
            if (!!this.imgcomp) {
                this.imgcomp = this.imgcomp.concat(imageData);
            }
            else {
                this.imgcomp = imageData;
            }
        }, (err) => {
            //  console.log(this.TAG, err);
        });
    }
    punchedCOPSalesOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //  console.log(this.TAG, "punched COP Sales Order");
                this.commonFunction.loadingPresent();
                let spareComplain = new src_assets_model_complain__WEBPACK_IMPORTED_MODULE_11__["Complain"]();
                spareComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
                spareComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
                spareComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
                spareComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
                spareComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
                spareComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';
                spareComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
                spareComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
                spareComplain.dealername = this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value ? this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value : '';
                spareComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';
                spareComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
                spareComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '',
                    spareComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';
                spareComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
                spareComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
                if (!!this.service.sparerequired.sparerequiredid) {
                    spareComplain.sparerequestid = this.service.sparerequired.sparerequiredid;
                }
                else {
                    spareComplain.sparerequestid = "";
                }
                let data = {
                    "complaintno": this.service.complaintno,
                    "complaintid": this.service.complaintid,
                    "billadd": spareComplain.dealer_billing_address,
                    "shippadd": spareComplain.dealer_shipping_address,
                    "proposeactn": spareComplain.proposed_action,
                    "assigntofieldvisit": spareComplain.assign_to,
                    "problemobserv": spareComplain.problem_observed,
                    "fieldvisit": spareComplain.field_visit_remarks,
                    "spares": this.tempSpareCart,
                    "activity": this.loginService.selectedactivity.id
                };
                let punchOrderResponse = yield (yield this.serviceEngineerVisitService.punchedCOPSalesOrderPost(data)).toPromise();
                //  console.log(this.TAG, "Spare Request Log", punchOrderResponse);
                this.commonFunction.loadingDismiss();
                if (punchOrderResponse) {
                    console.log(this.TAG, "Spare Request Log", punchOrderResponse);
                    this.isSpareInstallationTabVisible = true;
                    this.complaintStatusControlVisible = true;
                    this.commonFunction.presentAlert("Field Visit Details", "Spare Order Status", punchOrderResponse.msg);
                    this.spareRequiredFormGroup.controls["copSalesOrderReferenceCtrl"].setValue(punchOrderResponse.orderno);
                    this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').disable();
                    this.engineerDetailsFormGroup.get('proposedActionCtrl').disable();
                    //  this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').disable();
                    //   this.spareRequiredFormGroup.get('quantityCtrl').disable();
                    //   this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').disable();
                    this.punchOrderSuccess = true;
                    this.tempCartStatus = false;
                    this.tempSpareCart = [];
                    let tempComplainDetail = yield this.serviceEngineerVisitService.getCustomerServiceDetailById(this.service.complaintid).toPromise();
                    console.log(this.TAG, "TEST Single", tempComplainDetail);
                    this.copSalesOrderReferenceList = tempComplainDetail[0].orders;
                    if (!!this.copSalesOrderReferenceList) {
                        this.spareOrderedTabVisible = true;
                    }
                    this.spareRequiredList = tempComplainDetail[0].spare_required_list;
                    if (!!this.spareRequiredList) {
                        this.spareOrderedTabVisible = true;
                    }
                    console.log(this.TAG, "TEST Single", this.copSalesOrderReferenceList);
                }
                else {
                    this.commonFunction.presentAlert("Field Visit Details", "Spare Order Status", "Something went wrong");
                }
            }
            catch (error) {
                this.isSpareInstallationTabVisible = true;
                this.complaintStatusControlVisible = true;
                this.commonFunction.loadingDismiss();
                //  console.log(this.TAG, error);
                this.commonFunction.presentAlert("Field Visit Details", "Spare Order Status", error.error);
            }
        });
    }
    spareInstallationSaveToOB(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                let spareInstallComplain = new src_assets_model_complain__WEBPACK_IMPORTED_MODULE_11__["Complain"]();
                spareInstallComplain.complaint_no = this.service.complaintno;
                spareInstallComplain.complaintid = this.service.complaintid;
                spareInstallComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
                spareInstallComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
                spareInstallComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
                spareInstallComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
                spareInstallComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
                //New Change
                //spareInstallComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.code : '';
                //  spareInstallComplain.orderid = this.spareInstallationFormGroup.get('copSalesOrderReferenceDropDownCtrl').value ? this.spareInstallationFormGroup.get('copSalesOrderReferenceDropDownCtrl').value.orderno : '';
                spareInstallComplain.orderid = this.skuCodeSelected.orderid;
                spareInstallComplain.sapreskuid = this.spareInstallationFormGroup.get('skuCodeCtrl').value ? this.spareInstallationFormGroup.get('skuCodeCtrl').value.sapreskuid : '';
                spareInstallComplain.qty = this.spareInstallationFormGroup.get('spareReceivedQuantityCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedQuantityCtrl').value : '';
                spareInstallComplain.sparerequiredid = this.skuCodeSelected.sparerequiredid;
                spareInstallComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
                spareInstallComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
                spareInstallComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
                spareInstallComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
                spareInstallComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
                spareInstallComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
                spareInstallComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
                spareInstallComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';
                console.log(this.TAG, "Spare Install Form", spareInstallComplain);
                let saveComplainResponse = yield this.serviceEngineerVisitService.spareInstallSaveToOB(spareInstallComplain).toPromise();
                //  console.log(this.TAG, "Response From Spare Install", saveComplainResponse);
                if (saveComplainResponse) {
                    this.presentSpareInstallAlert("Field Visit Details", "Spare Install", saveComplainResponse.msg);
                    let tempComplainDetail = yield this.serviceEngineerVisitService.getCustomerServiceDetailById(this.service.complaintid).toPromise();
                    console.log(this.TAG, "TEST Single", tempComplainDetail);
                    this.copSalesOrderReferenceList = tempComplainDetail[0].orders;
                    this.engineerDetailsFormGroup.controls['complaintStatusCtrl'].reset();
                    this.spareInstallationFormGroup.reset();
                    this.stepper.selectedIndex = 5;
                    this.commonFunction.loadingDismiss();
                }
                else {
                    this.commonFunction.loadingDismiss();
                    this.commonFunction.presentAlert("Field Visit Details", "Spare Install", "Something went wrong please try again" + saveComplainResponse.msg);
                }
                this.commonFunction.loadingDismiss();
                this.spareInstallationStepValid = true;
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                //  console.log(this.TAG, error);
                this.commonFunction.presentAlert("Field Visit Details", "Spare Install", "Something went wrong please try again" + error.error);
            }
        });
    }
    closureAtFieldBtnClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // this.isSpareInstallationTabVisible = true;
                this.commonFunction.loadingPresent();
                let finalComplain = new src_assets_model_complain__WEBPACK_IMPORTED_MODULE_11__["Complain"]();
                finalComplain.complaint_no = this.service.complaintno;
                finalComplain.complaintid = this.service.complaintid;
                finalComplain.complaint_date = this.service.complaintdate;
                finalComplain.doctype = this.service.doctype[0].id;
                finalComplain.nameofcomplainer = this.service.nameofcomplainer;
                finalComplain.desofcomplnr = this.service.desofcomplnr[0].id;
                finalComplain.contnumber = this.service.contnumber;
                finalComplain.email = this.service.email;
                finalComplain.eventdate = this.service.eventdate;
                finalComplain.description = this.service.description;
                finalComplain.serialno = this.service.serialno;
                finalComplain.srnoequipment = this.service.srnoequipment;
                finalComplain.contracttype = this.service.contracttype;
                finalComplain.invoiceno = this.service.invoiceno;
                finalComplain.invoicedate = this.service.invoicedate;
                finalComplain.errorcode = this.service.errorcode[0].id;
                finalComplain.dealername = this.service.dealername;
                finalComplain.salesrepresentative = this.service.sales_representative ? this.service.sales_representative : "";
                finalComplain.installationdate = this.service.installationdate;
                finalComplain.skucode = this.service.skucode;
                finalComplain.skuname = this.service.skuname;
                finalComplain.brandname = this.service.brandname;
                finalComplain.producttobereturn = this.service.producttobereturn;
                finalComplain.custname = this.service.custname;
                finalComplain.add1 = this.service.add1;
                finalComplain.add2 = this.service.add2;
                finalComplain.add3 = this.service.add3;
                finalComplain.pincode = this.service.pincode;
                finalComplain.area = this.service.area[0].id;
                finalComplain.city = this.service.city[0].id;
                finalComplain.state = this.service.state[0].id;
                finalComplain.country = this.service.country[0].id;
                finalComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
                finalComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
                finalComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
                finalComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
                finalComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
                finalComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';
                if (this.isSpareRequiredTabVisible) {
                    finalComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
                    finalComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
                    finalComplain.dealername = this.spareRequiredFormGroup.get('dealerNameCtrl').value ? this.spareRequiredFormGroup.get('dealerNameCtrl').value : '';
                    finalComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';
                }
                if (this.isSpareInstallationTabVisible) {
                    finalComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
                    finalComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
                    finalComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.code : '';
                    finalComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
                    finalComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
                    finalComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
                    finalComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
                    finalComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
                    finalComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
                    finalComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
                    finalComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';
                }
                finalComplain.servicevendorremark = this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value ? this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value : '';
                //finalComplain.servicevendorremark = this.service.serivevendorremark;
                finalComplain.defective_spare_part_no = this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value : '';
                finalComplain.defective_spare_part_received_date = this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value : '';
                finalComplain.smart_solve_ref_no = this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value ? this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value : '';
                finalComplain.final_closure = this.serviceManagerFormGroup.get('finalClosureCtrl').value ? this.serviceManagerFormGroup.get('finalClosureCtrl').value : '';
                finalComplain.activity = this.loginService.selectedactivity.id;
                if (!!this.selectedFileUrl) {
                }
                else {
                    finalComplain.imagebase64 = this.imgcomp;
                }
                finalComplain.closureatfield = "true";
                finalComplain.complaint_status = this.engineerDetailsFormGroup.get('complaintStatusCtrl').value ? this.engineerDetailsFormGroup.get('complaintStatusCtrl').value.code : '';
                finalComplain.file_type = this.cardinalFileType;
                // finalComplain.file_selected_uri = this.pdfFileSelectedURI.uri;
                //finalComplain.imagebase64 = this.imgcomp[0];
                let saveComplainResponse;
                console.log(this.TAG, "Final Service Manager Form", finalComplain);
                if (this.platform.is('android') && this.cardinalFileType == "pdf") {
                    console.log(this.TAG, "Android And File Type PDF");
                    let oneObject = {
                        'complaintno': finalComplain.complaint_no,
                        'complaintid': finalComplain.complaintid,
                        'doctype': finalComplain.doctype,
                        'nameofcomplainer': finalComplain.nameofcomplainer,
                        'desofcomplnr': finalComplain.desofcomplnr,
                        'contnumber': finalComplain.contnumber,
                        'email': finalComplain.email,
                        'eventdate': finalComplain.eventdate,
                        'serialno': finalComplain.serialno,
                        "srnoequipment": finalComplain.srnoequipment,
                        "contracttype": finalComplain.contracttype,
                        'invoiceno': finalComplain.invoiceno,
                        "invoicedate": finalComplain.invoicedate,
                        "errorcode": finalComplain.errorcode,
                        "dealername": finalComplain.dealername,
                        "installationdate": finalComplain.installationdate,
                        "skucode": finalComplain.skucode,
                        "skuname": finalComplain.skuname,
                        "brandname": finalComplain.brandname,
                        "producttobereturn": finalComplain.producttobereturn,
                        "custname": finalComplain.custname,
                        "add1": finalComplain.add1,
                        "add2": finalComplain.add2,
                        "add3": finalComplain.add3,
                        "pincode": finalComplain.pincode,
                        "area": finalComplain.area,
                        "city": finalComplain.city,
                        "state": finalComplain.state,
                        "country": finalComplain.country,
                        "description": finalComplain.description,
                        "lotno": finalComplain.lotno ? finalComplain.lotno : '',
                        "appcomplaint": finalComplain.appcomplaint,
                        "assigntoservvendor": finalComplain.assigntoservvendor,
                        "salesrepresentative": finalComplain.salesrepresentative,
                        "newdealername": finalComplain.newdealername,
                        "serviceengname": finalComplain.serviceengname,
                        "serviceengcontact": finalComplain.serviceengcontact,
                        "visitdate": finalComplain.visitdate,
                        "assigntoservmg": finalComplain.assigntoservmg,
                        "activity": this.loginService.selectedactivity.id,
                        "Appect": finalComplain.Appect,
                        "problemobserv": finalComplain.problem_observed,
                        "fieldvisit": finalComplain.field_visit_remarks,
                        "proposeactn": finalComplain.proposed_action,
                        "assigntofieldvisit": finalComplain.assign_to,
                        "closureatfield": finalComplain.closureatfield,
                        "compltstatus": finalComplain.complaint_status,
                        "imagebase64": finalComplain.imagebase64,
                        "file_type": this.cardinalFileType
                    };
                    saveComplainResponse = yield this.serviceEngineerVisitService.uploadPDFFileServiceAndroidiOS({ "postData": JSON.stringify(oneObject) }, this.selectedFileUrl).toPromise();
                    console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
                    if (saveComplainResponse) {
                        this.presentAlert("closer_success", "Field Visit Details", saveComplainResponse.msg);
                    }
                    else {
                        this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + saveComplainResponse.msg);
                    }
                }
                else if (this.platform.is('ios') && this.cardinalFileType == "pdf") {
                    let oneObject = {
                        'complaintno': finalComplain.complaint_no,
                        'complaintid': finalComplain.complaintid,
                        'doctype': finalComplain.doctype,
                        'nameofcomplainer': finalComplain.nameofcomplainer,
                        'desofcomplnr': finalComplain.desofcomplnr,
                        'contnumber': finalComplain.contnumber,
                        'email': finalComplain.email,
                        'eventdate': finalComplain.eventdate,
                        'serialno': finalComplain.serialno,
                        "srnoequipment": finalComplain.srnoequipment,
                        "contracttype": finalComplain.contracttype,
                        'invoiceno': finalComplain.invoiceno,
                        "invoicedate": finalComplain.invoicedate,
                        "errorcode": finalComplain.errorcode,
                        "dealername": finalComplain.dealername,
                        "installationdate": finalComplain.installationdate,
                        "skucode": finalComplain.skucode,
                        "skuname": finalComplain.skuname,
                        "brandname": finalComplain.brandname,
                        "producttobereturn": finalComplain.producttobereturn,
                        "custname": finalComplain.custname,
                        "add1": finalComplain.add1,
                        "add2": finalComplain.add2,
                        "add3": finalComplain.add3,
                        "pincode": finalComplain.pincode,
                        "area": finalComplain.area,
                        "city": finalComplain.city,
                        "state": finalComplain.state,
                        "country": finalComplain.country,
                        "description": finalComplain.description,
                        "lotno": finalComplain.lotno ? finalComplain.lotno : '',
                        "appcomplaint": finalComplain.appcomplaint,
                        "assigntoservvendor": finalComplain.assigntoservvendor,
                        "salesrepresentative": finalComplain.salesrepresentative,
                        "newdealername": finalComplain.newdealername,
                        "serviceengname": finalComplain.serviceengname,
                        "serviceengcontact": finalComplain.serviceengcontact,
                        "visitdate": finalComplain.visitdate,
                        "assigntoservmg": finalComplain.assigntoservmg,
                        "activity": this.loginService.selectedactivity.id,
                        "Appect": finalComplain.Appect,
                        "problemobserv": finalComplain.problem_observed,
                        "fieldvisit": finalComplain.field_visit_remarks,
                        "proposeactn": finalComplain.proposed_action,
                        "assigntofieldvisit": finalComplain.assign_to,
                        "closureatfield": finalComplain.closureatfield,
                        "compltstatus": finalComplain.complaint_status,
                        "imagebase64": finalComplain.imagebase64,
                        "file_type": this.cardinalFileType
                    };
                    let login = this.loginService.user;
                    let password = this.loginService.pass;
                    const auth = btoa(login + ":" + password);
                    let save_file_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_19__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
                    const fileTransfer = this.transfer.create();
                    let options = {
                        fileKey: 'imagebase64',
                        fileName: this.cardinalFileName,
                        params: { "postData": JSON.stringify(oneObject) },
                        headers: { 'Authorization': 'Basic ' + auth }
                    };
                    fileTransfer.upload(this.selectedFileUrl, save_file_url, options)
                        .then((data) => {
                        console.log("pravin YESSSSS", data);
                        let formatResponse = JSON.parse(data.response);
                        console.log("File Uplaod Result", formatResponse);
                        this.commonFunction.loadingDismiss();
                        if (data != null) {
                            console.log(this.TAG, "Response From Save Complain", formatResponse);
                            if (formatResponse) {
                                this.presentAlert("closer_success", "Field Visit Details", formatResponse.msg);
                            }
                            else {
                                this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + formatResponse.msg);
                            }
                        }
                    }, (err) => {
                        this.commonFunction.presentAlert("message", "Fail", err);
                        this.commonFunction.loadingDismiss();
                    });
                }
                else {
                    saveComplainResponse = yield this.serviceEngineerVisitService.finalCloser(finalComplain).toPromise();
                    console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
                    if (saveComplainResponse) {
                        this.presentAlert("closer_success", "Field Visit Details", saveComplainResponse.msg);
                    }
                    else {
                        this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + saveComplainResponse.msg);
                    }
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                console.error(this.TAG, error);
            }
        });
    }
    finalClosureCheckboxServiceManager() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                let finalComplain = new src_assets_model_complain__WEBPACK_IMPORTED_MODULE_11__["Complain"]();
                finalComplain.complaint_no = this.service.complaintno;
                finalComplain.complaintid = this.service.complaintid;
                finalComplain.complaint_date = this.service.complaintdate;
                finalComplain.doctype = this.service.doctype[0].id;
                finalComplain.nameofcomplainer = this.service.nameofcomplainer;
                finalComplain.desofcomplnr = this.service.desofcomplnr[0].id;
                finalComplain.contnumber = this.service.contnumber;
                finalComplain.email = this.service.email;
                finalComplain.eventdate = this.service.eventdate;
                finalComplain.business = this.service.business;
                finalComplain.description = this.service.description;
                finalComplain.serialno = this.service.serialno;
                finalComplain.srnoequipment = this.service.srnoequipment;
                finalComplain.contracttype = this.service.contracttype;
                finalComplain.invoiceno = this.service.invoiceno;
                finalComplain.invoicedate = this.service.invoicedate;
                finalComplain.errorcode = this.service.errorcode[0].id;
                finalComplain.dealername = this.service.dealername;
                finalComplain.salesrepresentative = this.service.sales_representative;
                finalComplain.installationdate = this.service.installationdate;
                finalComplain.skucode = this.service.skucode;
                finalComplain.skuname = this.service.skuname;
                finalComplain.brandname = this.service.brandname;
                finalComplain.producttobereturn = this.service.producttobereturn;
                finalComplain.custname = this.service.custname;
                finalComplain.add1 = this.service.add1;
                finalComplain.add2 = this.service.add2;
                finalComplain.add3 = this.service.add3;
                finalComplain.pincode = this.service.pincode;
                finalComplain.area = this.service.area[0].id;
                finalComplain.city = this.service.city[0].id;
                finalComplain.state = this.service.state[0].id;
                finalComplain.country = this.service.country[0].id;
                finalComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
                finalComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
                finalComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
                finalComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
                finalComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
                finalComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';
                if (this.isSpareRequiredTabVisible) {
                    finalComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
                    finalComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
                    finalComplain.dealername = this.spareRequiredFormGroup.get('dealerNameCtrl').value ? this.spareRequiredFormGroup.get('dealerNameCtrl').value : '';
                    finalComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';
                }
                if (this.isSpareInstallationTabVisible) {
                    finalComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
                    finalComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
                    finalComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.id : '';
                    finalComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
                    finalComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
                    finalComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
                    finalComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
                    finalComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
                    finalComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
                    finalComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
                    finalComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';
                }
                finalComplain.servicevendorremark = this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value ? this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value : '';
                finalComplain.defective_spare_part_no = this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value : '';
                finalComplain.defective_spare_part_received_date = this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value : '';
                finalComplain.smart_solve_ref_no = this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value ? this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value : '';
                finalComplain.final_closure = this.serviceManagerFormGroup.get('finalClosureCtrl').value ? this.serviceManagerFormGroup.get('finalClosureCtrl').value : '';
                //  console.log(this.TAG, "Final Service Manager Form", finalComplain);
                let saveComplainResponse = yield this.serviceEngineerVisitService.serviceManagerClose(finalComplain).toPromise();
                //  console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
                if (saveComplainResponse) {
                    this.presentAlert("closer_success", "Field Visit Details", saveComplainResponse.msg);
                }
                else {
                    this.presentAlert("closer_error", "Field Visit Details", "Something went wrong please try again" + saveComplainResponse.msg);
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                //  console.log(this.TAG, error);
            }
        });
    }
    submit(tab) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                let finalComplain = new src_assets_model_complain__WEBPACK_IMPORTED_MODULE_11__["Complain"]();
                finalComplain.complaint_no = this.service.complaintno;
                finalComplain.complaintid = this.service.complaintid,
                    finalComplain.complaint_date = this.service.complaintdate;
                finalComplain.doctype = this.service.doctype[0].id;
                finalComplain.nameofcomplainer = this.service.nameofcomplainer;
                finalComplain.desofcomplnr = this.service.desofcomplnr[0].id;
                finalComplain.contnumber = this.service.contnumber;
                finalComplain.email = this.service.email;
                finalComplain.eventdate = this.service.eventdate;
                finalComplain.business = this.service.business;
                finalComplain.description = this.service.description;
                finalComplain.serialno = this.service.serialno;
                finalComplain.srnoequipment = this.service.srnoequipment;
                finalComplain.contracttype = this.service.contracttype;
                finalComplain.invoiceno = this.service.invoiceno;
                finalComplain.invoicedate = this.service.invoicedate;
                finalComplain.errorcode = this.service.errorcode[0].id;
                finalComplain.dealername = this.service.dealername;
                finalComplain.salesrepresentative = this.service.sales_representative;
                finalComplain.installationdate = this.service.installationdate;
                finalComplain.skucode = this.service.skucode;
                finalComplain.skuname = this.service.skuname;
                finalComplain.brandname = this.service.brandname;
                finalComplain.producttobereturn = this.service.producttobereturn;
                finalComplain.custname = this.service.custname;
                finalComplain.add1 = this.service.add1;
                finalComplain.add2 = this.service.add2;
                finalComplain.add3 = this.service.add3;
                finalComplain.pincode = this.service.pincode;
                finalComplain.area = this.service.area[0].id;
                finalComplain.city = this.service.city[0].id;
                finalComplain.state = this.service.state[0].id;
                finalComplain.country = this.service.country[0].id;
                finalComplain.problem_observed = this.engineerDetailsFormGroup.get('problemObservedCtrl').value ? this.engineerDetailsFormGroup.get('problemObservedCtrl').value : '';
                finalComplain.field_visit_remarks = this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value ? this.engineerDetailsFormGroup.get('fieldVisitRemarksCtrl').value : '';
                finalComplain.proposed_action = this.engineerDetailsFormGroup.get('proposedActionCtrl').value ? this.engineerDetailsFormGroup.get('proposedActionCtrl').value.id : '';
                finalComplain.dealer_billing_address = this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerBillingAddressCtrl').value.id : '';
                finalComplain.dealer_shipping_address = this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value ? this.engineerDetailsFormGroup.get('dealerShippingAddressCtrl').value.id : '';
                finalComplain.assign_to = this.engineerDetailsFormGroup.get('assignToCtrl').value ? this.engineerDetailsFormGroup.get('assignToCtrl').value.id : '';
                if (this.isSpareRequiredTabVisible) {
                    finalComplain.spare_SKUCode = this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value ? this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').value.id : '';
                    finalComplain.quantity = this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '';
                    finalComplain.dealername = this.spareRequiredFormGroup.get('dealerNameCtrl').value ? this.spareRequiredFormGroup.get('dealerNameCtrl').value : '';
                    finalComplain.cop_sales_order_reference = this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value ? this.spareRequiredFormGroup.get('copSalesOrderReferenceCtrl').value : '';
                }
                if (this.isSpareInstallationTabVisible) {
                    finalComplain.spare_received_date = this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value ? this.spareInstallationFormGroup.get('spareReceivedDateCtrl').value : '';
                    finalComplain.repair_report = this.spareInstallationFormGroup.get('repairReportCtrl').value ? this.spareInstallationFormGroup.get('repairReportCtrl').value : '';
                    finalComplain.complaint_status = this.spareInstallationFormGroup.get('complaintStatusCtrl').value ? this.spareInstallationFormGroup.get('complaintStatusCtrl').value.id : '';
                    finalComplain.complaint_date = this.spareInstallationFormGroup.get('completionDateCtrl').value ? this.spareInstallationFormGroup.get('completionDateCtrl').value : '';
                    finalComplain.replaced_spare_part_serialNo = this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value ? this.spareInstallationFormGroup.get('replacedSparePartSerialNoCtrl').value : '';
                    finalComplain.service_attended = this.spareInstallationFormGroup.get('serviceAttendedCtrl').value ? this.spareInstallationFormGroup.get('serviceAttendedCtrl').value : '';
                    finalComplain.defective_spare_part_no = this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value ? this.spareInstallationFormGroup.get('defectiveSparePartNoCtrl').value : '';
                    finalComplain.def_spare_docket_no = this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value ? this.spareInstallationFormGroup.get('defSpareDocketNoCtrl').value : '';
                    finalComplain.def_spare_courier = this.spareInstallationFormGroup.get('defSpareCourierCtrl').value ? this.spareInstallationFormGroup.get('defSpareCourierCtrl').value : '';
                    finalComplain.def_spare_sent_date = this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value ? this.spareInstallationFormGroup.get('defSpareSentDateCtrl').value : '';
                    finalComplain.spare_install_closed = this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value ? this.spareInstallationFormGroup.get('spareInstallClosedCtrl').value : '';
                }
                //  finalComplain.servicevendorremark = this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value ? this.serviceManagerFormGroup.get('serviceManagerRemarkCtrl').value : '';
                finalComplain.servicevendorremark = this.service.serivevendorremark;
                finalComplain.defective_spare_part_no = this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartNoCtrl').value : '';
                finalComplain.defective_spare_part_received_date = this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value ? this.serviceManagerFormGroup.get('defectiveSparePartReceivedDateCtrl').value : '';
                finalComplain.smart_solve_ref_no = this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value ? this.serviceManagerFormGroup.get('smartSolveRefNoCtrl').value : '';
                finalComplain.final_closure = this.serviceManagerFormGroup.get('finalClosureCtrl').value ? this.serviceManagerFormGroup.get('finalClosureCtrl').value : '';
                finalComplain.Appect = "true";
                //  console.log(this.TAG, "Final Service Manager Form", finalComplain);
                let saveComplainResponse = yield this.serviceEngineerVisitService.finalCloser(finalComplain).toPromise();
                //  console.log(this.TAG, "Response From Save Complain", saveComplainResponse);
                if (saveComplainResponse) {
                    this.presentAlert("Field Visit Details", "", saveComplainResponse.msg);
                }
                else {
                    this.presentAlert("Field Visit Details", "", "Something went wrong please try again" + saveComplainResponse.msg);
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                // console.log(this.TAG, error);
            }
        });
    }
    addToCart() {
        try {
            let tempObject = {
                "id": this.spareSKUCodeSelected.id,
                "name": this.spareSKUCodeSelected.name,
                "qty": this.spareRequiredFormGroup.get('quantityCtrl').value ? this.spareRequiredFormGroup.get('quantityCtrl').value : '',
                "dealer_name": this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value ? this.spareRequiredFormGroup.get('dealerNameSpareRequiredCtrl').value : '',
                "cop_sales_order_ref": ""
            };
            if (this.tempSpareCart == undefined || this.tempSpareCart == null) {
                this.tempSpareCart = [tempObject];
            }
            else {
                var sameProduct = this.tempSpareCart.find(e => e.id === this.spareSKUCodeSelected.id);
                if (sameProduct != null || sameProduct != undefined) {
                    this.commonFunction.presentAlert("Field Visit Details", "Validation", "This SKU is already added");
                }
                else {
                    this.tempSpareCart.push(tempObject);
                }
            }
            this.spareRequiredFormGroup.controls['spareSKUCodeDropDownCtrl'].reset();
            this.spareRequiredFormGroup.controls['quantityCtrl'].reset();
            //  this.spareRequiredFormGroup.get('spareSKUCodeDropDownCtrl').setErrors(null)
            this.tempCartStatus = true;
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    removeFromCart(spareItem) {
        try {
            const result = this.tempSpareCart.filter(item => item.id != spareItem.id);
            this.tempSpareCart = result;
            if (this.tempSpareCart.length == 0) {
                this.tempCartStatus = false;
            }
        }
        catch (error) {
        }
    }
    copSalesOrderReferenceDropDownChange(salesOrder) {
        try {
            console.log(this.TAG, "Selected Order", salesOrder);
            this.skuCodeList = salesOrder.order;
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    skuCodeListChange(skuObject) {
        try {
            console.log(this.TAG, "skuObject", skuObject);
            this.spareInstallationFormGroup.controls["spareReceivedQuantityCtrl"].setValue(skuObject.qty);
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
};
ServiceEngineerVisitDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"] },
    { type: src_app_neworder_neworder_service__WEBPACK_IMPORTED_MODULE_7__["NeworderService"] },
    { type: _service_engineer_visit_service__WEBPACK_IMPORTED_MODULE_2__["ServiceEngineerVisitService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_12__["LoginauthService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_9__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_1__["CustomerServiceService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"] },
    { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_15__["Message"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_16__["FileChooser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__["FilePath"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"] },
    { type: _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_21__["FileTransfer"] },
    { type: _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_20__["IOSFilePicker"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("stepper", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepper"])
], ServiceEngineerVisitDetailPage.prototype, "stepper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('selectedFile', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], ServiceEngineerVisitDetailPage.prototype, "selectedFile", void 0);
ServiceEngineerVisitDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-service-engineer-visit-detail',
        template: __webpack_require__(/*! raw-loader!./service-engineer-visit-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.html"),
        styles: [__webpack_require__(/*! ./service-engineer-visit-detail.page.scss */ "./src/app/cardinal/service-engineer-visit/service-engineer-visit-detail/service-engineer-visit-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"],
        src_app_neworder_neworder_service__WEBPACK_IMPORTED_MODULE_7__["NeworderService"], _service_engineer_visit_service__WEBPACK_IMPORTED_MODULE_2__["ServiceEngineerVisitService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"], src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_12__["LoginauthService"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_9__["Commonfun"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _customer_service_customer_service_service__WEBPACK_IMPORTED_MODULE_1__["CustomerServiceService"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], src_provider_message_helper__WEBPACK_IMPORTED_MODULE_15__["Message"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_16__["FileChooser"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_17__["FilePath"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_18__["File"], _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_21__["FileTransfer"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_20__["IOSFilePicker"]])
], ServiceEngineerVisitDetailPage);



/***/ })

}]);
//# sourceMappingURL=cardinal-service-engineer-visit-service-engineer-visit-detail-service-engineer-visit-detail-module-es2015.js.map