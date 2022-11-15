(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-customer-quotation-customer-quotation-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/quotation/customer-quotation/customer-quotation.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quotation/customer-quotation/customer-quotation.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Customer Quotation\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]=\"customerQuotationForm\">\n  \n    <!-- Customer -->\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Customer<span style=\"color:red!important\">*</span></ion-label>\n              <ionic-selectable placeholder=\"Select Customer\" [searchDebounce]=\"1000\" disable=\"true\" [formControl]=\"customerQuotationForm.controls['customerCtrl']\"\n                  [items]=\"businessPartnerList\"  \n                  itemValueField=\"id\" \n                  itemTextField=\"_identifier\" \n                  [canSearch]=\"true\"\n                  [shouldStoreItemValue]=\"false\"\n                  (onChange)=\"onCustomerChange($event)\"\n                  (onClose)=\"onCustomerClose($event)\"\n                  (onSearch)=\"onCustomerSearchChange($event)\">\n                </ionic-selectable>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Shipping Information -->\n        <ion-row>\n        <ion-col>\n          <h5 ion-text class=\"text-primary\">\n            <ion-icon name=\"locate\"></ion-icon> Shipping Information:\n          </h5>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <ion-item >\n                <ion-label position=\"stacked\">Shipping Address<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select  [formControl]=\"customerQuotationForm.controls['selectedBPaddressShippingCtrl']\" interface=\"popover\" multiple=\"false\" placeholder=\"Select Address\">\n                  <ion-select-option *ngFor=\"let custShippingAddress of custShippingAddressList\" [value]=\"custShippingAddress\">{{custShippingAddress.name}}</ion-select-option>\n                </ion-select>\n                </ion-item>\n                <div padding-left>\n                  <ng-container *ngFor=\"let validation of validation_messages.custAddShippingCtrlErrorMessage\">\n                    <div *ngIf=\"customerQuotationForm.get('selectedBPaddressShippingCtrl').hasError(validation.type) && customerQuotationForm.get('selectedBPaddressShippingCtrl').touched\">\n                      <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                    </div>\n                  </ng-container>\n                </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <ion-item >\n                <ion-label position=\"stacked\">Billing Address<span style=\"color:red!important\">*</span></ion-label>\n                <ion-select  [formControl]=\"customerQuotationForm.controls['selectedBPAddressBillingCtrl']\" interface=\"popover\" multiple=\"false\" placeholder=\"Select Address\">\n                  <ion-select-option *ngFor=\"let badd of custBillingAddressList\" [value]=\"badd\">{{badd.name}}</ion-select-option>\n                </ion-select>\n                </ion-item>\n                <div padding-left>\n                  <ng-container *ngFor=\"let validation of validation_messages.custAddBillingCtrlErrorMessage\">\n                    <div *ngIf=\"customerQuotationForm.get('selectedBPAddressBillingCtrl').hasError(validation.type) && customerQuotationForm.get('selectedBPAddressBillingCtrl').touched\">\n                      <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                    </div>\n                  </ng-container>\n                </div>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n           <ion-item>\n            <div class=\"margin-custom\">\n              <ion-label style=\"color: darkgray;\">Order Date</ion-label>\n              <section class=\"cus\">\n               <ion-datetime  disabled style=\"--padding-start:0px\" displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"today\" formControlName=\"orderDateCtrl\">\n              </ion-datetime>\n            </section>\n            </div>\n          </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Service Product <span style=\"color:red!important\">*</span></ion-label>\n              <ionic-selectable placeholder=\"Select Product\" [searchDebounce]=\"1000\" [formControl]=\"customerQuotationForm.controls['serviceProductCtrl']\"\n                                [items]=\"serviceProductList\" \n                                itemValueField=\"id\" \n                                itemTextField=\"name\" \n                                [canSearch]=\"true\"\n                                \n                                [shouldStoreItemValue]=\"false\"\n                                (onClose)=\"onServiceProductClose($event)\"\n                                (onChange)=\"onServiceProductChange($event)\"\n                                (onSearch)=\"onServiceProductSearch($event)\">\n              </ionic-selectable>\n            </ion-item>\n          </ion-col>\n        </ion-row> \n        <ion-row *ngIf=\"showComplainNumber\">\n           <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Complaint No.</ion-label>\n              <ion-input type=\"text\" [formControl]=\"customerQuotationForm.controls['complaintNoCtrl']\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        \n      </ion-card-content>\n    </ion-card> \n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <h5 ion-text class=\"text-primary\">\n              <ion-icon name=\"cart\"></ion-icon>Serial No\n            </h5>\n          </ion-col>\n          <ion-col>\n            <ion-fab-button size=\"small\" float-right (click)=\"addSerialNo()\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-fab-button>\n          </ion-col>\n        </ion-row>\n        <ion-item *ngFor=\"let item of selectedSerialNumberProductList; index as i\"  text-wrap style=\"font-size: small;\">\n        \n            <div style=\"width: 100%;\" (click)=\"toggle(item)\">\n                <ion-row>\n                  <ion-col size=\"8\">\n                    <ion-label style=\"white-space: normal\">\n                     <ion-icon *ngIf=\"!item.MainProductQty\" style=\"color: springgreen;\" name=\"pricetags\"></ion-icon>\n                      {{ item.serialno }}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col size=\"2\" style=\"width: 100%; text-align: right;\">\n                    <ion-icon name=\"trash\" (click)=\"removeProduct(item)\" style=\"font-size: x-large;\n                    color: red;\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col nowrap>\n                    <div *ngIf=\"item.show\">\n                      <ion-label style=\"font-size: small;\">QTY: {{ item.qty }}</ion-label>\n                      <ion-label style=\"font-size: small;\">UOM: {{ item.uomname }}</ion-label>\n                      <ion-label style=\"font-size: small;\" *ngIf=\"Servicepricebasedon == 'PLB'\">Rate:{{item.rate}}</ion-label>\n                      <ion-label style=\"font-size: small;\" *ngIf=\"Servicepricebasedon == 'PLB'\">Net Amount: {{ item.netamt }}</ion-label>\n                      <ion-label style=\"font-size: small;\" *ngIf=\"Servicepricebasedon == 'PLB'\">Tax: {{ item.taxname}}</ion-label>\n                      <ion-label style=\"font-size: small;\" *ngIf=\"Servicepricebasedon == 'PLB'\">Total Gross Amount: {{ item.totgrossamt}}</ion-label>\n                    </div>\n                 </ion-col>\n                </ion-row>\n            </div>\n        \n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    <ion-row>\n      <ion-col style=\"padding-left: 16px;padding-right: 16px;\">\n        <ion-button size=\"default\"\n          class=\"submit-btn\" expand=\"block\" [disabled]=\"(!customerQuotationForm.valid || customerQuotationForm.disabled ) || !hasSerialNumber\" color=\"primary\" (click)=\"onSaveQuotation(customerQuotationForm)\">Get Quotation\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    \n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/quotation/customer-quotation/customer-quotation.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/quotation/customer-quotation/customer-quotation.module.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerQuotationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuotationPageModule", function() { return CustomerQuotationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_quotation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-quotation.page */ "./src/app/quotation/customer-quotation/customer-quotation.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/pipes/pipes.module */ "./src/app/common/pipes/pipes.module.ts");









const routes = [
    {
        path: '',
        component: _customer_quotation_page__WEBPACK_IMPORTED_MODULE_6__["CustomerQuotationPage"]
    }
];
let CustomerQuotationPageModule = class CustomerQuotationPageModule {
};
CustomerQuotationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], src_app_common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_customer_quotation_page__WEBPACK_IMPORTED_MODULE_6__["CustomerQuotationPage"]]
    })
], CustomerQuotationPageModule);



/***/ }),

/***/ "./src/app/quotation/customer-quotation/customer-quotation.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/quotation/customer-quotation/customer-quotation.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cus {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.margin-custom {\n  margin-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9xdW90YXRpb24vY3VzdG9tZXItcXVvdGF0aW9uL2N1c3RvbWVyLXF1b3RhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3F1b3RhdGlvbi9jdXN0b21lci1xdW90YXRpb24vY3VzdG9tZXItcXVvdGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDRCx5QkFBQTtVQUFBLDhCQUFBO0FDQUg7O0FER0U7RUFDRSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcXVvdGF0aW9uL2N1c3RvbWVyLXF1b3RhdGlvbi9jdXN0b21lci1xdW90YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3tcbiAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyIDtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIC8vIHdpZHRoOiAxMDAlO1xuICAgfVxuICAubWFyZ2luLWN1c3RvbXtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgIGlvbi1kYXRldGltZSB7XG4gICAvLyB3aWR0aDogMTAwJTtcbiAgfSIsIi5jdXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYXJnaW4tY3VzdG9tIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/quotation/customer-quotation/customer-quotation.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/quotation/customer-quotation/customer-quotation.page.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerQuotationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuotationPage", function() { return CustomerQuotationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-quotation.service */ "./src/app/quotation/customer-quotation/customer-quotation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");








let CustomerQuotationPage = class CustomerQuotationPage {
    constructor(formBuilder, commonFunction, alertCtrl, router, route, customerQuotationService, loginService, loginauth) {
        this.formBuilder = formBuilder;
        this.commonFunction = commonFunction;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.customerQuotationService = customerQuotationService;
        this.loginService = loginService;
        this.loginauth = loginauth;
        this.TAG = "Customer Quotation Page";
        this.reftextcount = 0;
        this.hasSerialNumber = false;
        this.showComplainNumber = false;
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth() + 1;
        this.day = this.now.getDate();
        /**
         *
         */
        this.maxDate = this.year + "-" + this.month + "-" + this.day;
        this.today = this.year + "-" + ("0" + this.month).slice(-2) + "-" + ("0" + this.day).slice(-2);
        this.validation_messages = { 'selectedBusinessPartner': [{ type: 'required', message: '*Please Select Customer.' }],
            'custAddShippingCtrlErrorMessage': [{ type: 'required', message: '*Please Select Shipping Address.' }],
            'custAddBillingCtrlErrorMessage': [{ type: 'required', message: '*Please Select Billing Address.' }],
        };
    }
    ngOnInit() {
        this.customerQuotationForm = this.formBuilder.group({
            customerCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedBPaddressShippingCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedBPAddressBillingCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            orderDateCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            serviceProductCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            complaintNoCtrl: [,]
        });
        //this.customerQuotationForm.get('orderDateCtrl').disable();
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.TAG,"ionViewWillEnter Fired");
            this.commonFunction.loadingPresent();
            this.Servicepricebasedon = this.loginService.selectedactivity.Servicepricebasedon;
            // console.log(this.TAG,"Servicepricebasedon",this.Servicepricebasedon);
            let tempResponse = yield this.customerQuotationService.getCustomer().toPromise();
            // tempResponse =  tempResponse.slice(0,9);
            if (!!tempResponse.length) {
                if (tempResponse.length > this.loginauth.minlistcount) {
                    this.businessPartnerList = [];
                }
                else {
                    this.businessPartnerList = tempResponse;
                    if (this.businessPartnerList.length == 1) {
                        this.customerQuotationForm.controls["customerCtrl"].setValue(this.businessPartnerList[0]);
                        this.selectedBusinessPartner = this.businessPartnerList[0];
                        this.bindCustomerBillingAddress();
                        this.tempServiceProductResponse = yield this.customerQuotationService.getServiceProduct("", this.selectedBusinessPartner.id).toPromise();
                    }
                    else {
                        this.dontClearCustomerQuotation = true;
                    }
                }
            }
            if (!!this.tempServiceProductResponse) {
                if (this.tempServiceProductResponse.length > this.loginauth.minlistcount) {
                    this.serviceProductList = "";
                }
                else {
                    this.serviceProductList = this.tempServiceProductResponse;
                    if (this.serviceProductList.length == 1) {
                        this.customerQuotationForm.controls["serviceProductCtrl"].setValue(this.serviceProductList[0]);
                        this.selectedServiceProduct = this.serviceProductList[0];
                        // this.customerQuotationForm.get('serviceProductCtrl').disable();
                    }
                    else {
                        this.dontClearCustomerQuotation = true;
                    }
                }
            }
            this.bindData();
            // let routeData = this.route.snapshot.params['cartList'];
            this.commonFunction.loadingDismiss();
        });
    }
    bindData() {
        try {
            this.route.queryParams.subscribe((data) => {
                if (!!data["cartList"] && data["cartList"].length > 0) {
                    this.selectedSerialNumberProductList = JSON.parse(data["cartList"]);
                    //  console.log(this.TAG,"Previous Page Data Cart List",this.selectedSerialNumberProductList);
                    this.previousPageData = JSON.parse(data["selectedQuotationData"]);
                    //  console.log(this.TAG,"Previous Page Data",this.previousPageData);
                    this.hasSerialNumber = true;
                    if (!!this.previousPageData.selectedBusinessPartnerKey) {
                        this.customerQuotationForm.controls["customerCtrl"].setValue(this.previousPageData.selectedBusinessPartnerKey);
                        this.selectedBusinessPartner = this.previousPageData.selectedBusinessPartnerKey;
                        this.customerQuotationForm.get('customerCtrl').disable();
                        this.customerQuotationForm.get('selectedBPaddressShippingCtrl').disable();
                        this.customerQuotationForm.get('selectedBPAddressBillingCtrl').disable();
                    }
                    if (!!this.previousPageData.bp_billing_add_id) {
                        setTimeout(() => {
                            let tempBillAdd = [] = this.previousPageData.bp_billing_add_id;
                            let tempShipAdd = [] = this.previousPageData.bp_shiping_add_id;
                            this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].setValue(tempShipAdd[0]);
                            this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].setValue(tempBillAdd[0]);
                            this.customerQuotationForm.get('selectedBPaddressShippingCtrl').disable();
                            this.customerQuotationForm.get('selectedBPAddressBillingCtrl').disable();
                        }, 100);
                    }
                    if (!!this.previousPageData.order_date) {
                        this.customerQuotationForm.controls["orderDateCtrl"].setValue(this.previousPageData.order_date);
                    }
                    if (!!this.previousPageData.complaint_no) {
                        this.customerQuotationForm.controls["complaintNoCtrl"].setValue(this.previousPageData.complaint_no);
                        this.customerQuotationForm.get('complaintNoCtrl').disable();
                    }
                    if (!!this.previousPageData.service_product_id) {
                        this.customerQuotationForm.controls["serviceProductCtrl"].setValue(this.previousPageData.service_product_id);
                        this.selectedServiceProduct = this.previousPageData.service_product_id;
                        this.customerQuotationForm.get('serviceProductCtrl').disable();
                    }
                }
            });
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onCustomerChange(event) {
        try {
            this.custShippingAddressList = null;
            this.custBillingAddressList = null;
            this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].setValue('');
            this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].setValue('');
            this.selectedBusinessPartner = event.value;
            this.bindCustomerBillingAddress(event.value.id);
            event.component._searchText = "";
            this.bindServiceProductIfSelected();
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onCustomerClose(event) {
        try {
            event.component.searchText = "";
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onCustomerSearchChange(event) {
        try {
            this.reftextcount++;
            var custsearchtext = event.text;
            if (custsearchtext.length >= 3) {
                this.bindCustomerFromApi(custsearchtext);
                this.reftextcount = 0;
            }
            else {
                if (!!this.dontClearCustomerQuotation && this.dontClearCustomerQuotation == true) {
                }
                else {
                    this.businessPartnerList = [];
                }
            }
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    onServiceProductClose(event) {
        try {
            event.component.searchText = "";
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onServiceProductChange(event) {
        try {
            //  console.log(this.TAG,"onServiceProductChange"); 
            this.selectedServiceProduct = event.value;
            if (event.value.compnumberismandatory == 'Y') {
                this.showComplainNumber = true;
                this.customerQuotationForm.controls['complaintNoCtrl'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                this.customerQuotationForm.controls['complaintNoCtrl'].updateValueAndValidity();
            }
            else if (event.value.compnumberismandatory == 'N') {
                this.showComplainNumber = false;
                this.customerQuotationForm.controls['complaintNoCtrl'].clearValidators();
                this.customerQuotationForm.controls['complaintNoCtrl'].updateValueAndValidity();
            }
            event.component._searchText = "";
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onServiceProductSearch(event) {
        try {
            var custsearchtext = event.text;
            if (!!custsearchtext) {
                if (!!this.selectedBusinessPartner) {
                    this.bindServiceProduct(custsearchtext);
                }
                else {
                    this.commonFunction.presentAlert("Customer Quotation", "Validation", "Please Select Customer");
                }
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    bindCustomerFromApi(strsearch) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (strsearch != "") {
                    const cust_response = yield this.customerQuotationService.getCustomer(strsearch).toPromise();
                    //  console.log(this.TAG,cust_response);
                    this.businessPartnerList = cust_response;
                }
                else {
                    this.businessPartnerList = [];
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    bindCustomerBillingAddress(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const addressResponse = yield this.customerQuotationService.getcustmerbillingaddress(this.selectedBusinessPartner.id).toPromise();
                const response = addressResponse['response'];
                var jsondata = response.data;
                this.custBillingAddressList = jsondata.filter(e => e.invoiceToAddress == true);
                this.custShippingAddressList = jsondata.filter(e => e.shipToAddress == true);
                setTimeout(() => {
                    if (this.custShippingAddressList.length == 1) {
                        this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].setValue(this.custShippingAddressList[0]);
                    }
                    if (this.custBillingAddressList.length == 1) {
                        this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].setValue(this.custBillingAddressList[0]);
                    }
                }, 100);
            }
            catch (error) {
                // console.log(this.TAG,error);
            }
        });
    }
    bindServiceProduct(strsearch) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (strsearch != "") {
                    const serviceProductApiResponse = yield this.customerQuotationService.getServiceProduct(strsearch, this.selectedBusinessPartner.id).toPromise();
                    //  console.log(this.TAG,"Service Product API Response",serviceProductApiResponse);
                    //  this.serviceProductList = [{"id":"FFF20200121121311736E8DB9B68EA18","name":"SC-002-Service Charges - Others","compnumberismandatory":"N"}];
                    this.serviceProductList = serviceProductApiResponse;
                }
                else {
                    this.serviceProductList = [];
                    //  const serviceProductApiResponse = await this.customerQuotationService.getServiceProduct(strsearch,this.selectedBusinessPartner.id).toPromise();
                    //  console.log(this.TAG,"Service Product API Response",serviceProductApiResponse);
                    //  this.serviceProductList = serviceProductApiResponse;
                    //  console.log(this.TAG,this.serviceProductList);
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    toggle(selectedcartproduct) {
        if (selectedcartproduct.show == false) {
            for (var i = 0; i < this.selectedSerialNumberProductList.length; i++) {
                if (this.selectedSerialNumberProductList[i].show === "true") {
                    this.selectedSerialNumberProductList[i].show = "false";
                }
            }
        }
        selectedcartproduct.show = !selectedcartproduct.show;
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
                            this.customerQuotationForm.reset('', { emitEvent: false });
                            this.router.navigateByUrl('/home');
                        }
                    }]
            });
            alert.dismiss(() => console.log('The alert has been closed.'));
            yield alert.present();
        });
    }
    addSerialNo() {
        try {
            if (!!this.selectedSerialNumberProductList) {
            }
            else {
                this.selectedSerialNumberProductList = [];
            }
            if (!!this.customerQuotationForm.controls["customerCtrl"].value) {
                if (!!this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].value) {
                    if (!!this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].value) {
                        // if(!!this.customerQuotationForm.controls["serviceProductCtrl"].value){
                        if (true) {
                            let navigationExtras = {
                                queryParams: { selectedSerialNumberProductList: JSON.stringify(this.selectedSerialNumberProductList),
                                    quotation_data: JSON.stringify({ selectedBusinessPartnerKey: this.selectedBusinessPartner,
                                        bp_billing_add_id: this.customerQuotationForm.controls["selectedBPAddressBillingCtrl"].value,
                                        bp_shiping_add_id: this.customerQuotationForm.controls["selectedBPaddressShippingCtrl"].value,
                                        order_date: this.customerQuotationForm.controls["orderDateCtrl"].value,
                                        service_product_id: this.selectedServiceProduct,
                                        complaint_no: this.customerQuotationForm.controls["complaintNoCtrl"].value
                                    })
                                }
                            };
                            this.router.navigate(['add-edit-service-product'], navigationExtras);
                        }
                        else {}
                    }
                    else {
                        this.commonFunction.presentAlert("Customer Quotation", "Validation", "Please Select Billing Address");
                    }
                }
                else {
                    this.commonFunction.presentAlert("Customer Quotation", "Validation", "Please Select Shipping Address");
                }
            }
            else {
                this.commonFunction.presentAlert("Customer Quotation", "Validation", "Please Select Customer");
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    removeProduct(deletedSerial) {
        try {
            const result = this.selectedSerialNumberProductList.filter(item => item.m_attributesetinstance_id != deletedSerial.m_attributesetinstance_id);
            this.selectedSerialNumberProductList = result;
            if (this.selectedSerialNumberProductList.length < 1) {
                this.hasSerialNumber = false;
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onSaveQuotation(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //  console.log(this.TAG,"Quotation Data From Page",form);
                this.commonFunction.loadingPresent();
                let data = {
                    "bpid": this.customerQuotationForm.controls['customerCtrl'].value.id,
                    "billid": this.customerQuotationForm.controls['selectedBPaddressShippingCtrl'].value.id,
                    "shipid": this.customerQuotationForm.controls['selectedBPaddressShippingCtrl'].value.id,
                    "orderdate": this.customerQuotationForm.controls['orderDateCtrl'].value,
                    "m_product_id": this.customerQuotationForm.controls['serviceProductCtrl'].value.id,
                    "complaintno": this.customerQuotationForm.controls['complaintNoCtrl'].value
                };
                const saveQuotationResponse = yield this.customerQuotationService.saveQuotation(data, this.selectedSerialNumberProductList).toPromise();
                //  console.log(this.TAG,saveQuotationResponse);
                this.commonFunction.loadingDismiss();
                if (!!saveQuotationResponse) {
                    this.presentAlert("Quotation Approval", "", saveQuotationResponse.msg);
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
                this.commonFunction.loadingDismiss();
            }
        });
    }
    bindServiceProductIfSelected() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.tempServiceProductResponse = yield this.customerQuotationService.getServiceProduct("", this.selectedBusinessPartner.id).toPromise();
                if (!!this.tempServiceProductResponse) {
                    if (this.tempServiceProductResponse.length > this.loginauth.minlistcount) {
                        this.serviceProductList = "";
                    }
                    else {
                        this.serviceProductList = this.tempServiceProductResponse;
                        if (this.serviceProductList.length == 1) {
                            this.customerQuotationForm.controls["serviceProductCtrl"].setValue(this.serviceProductList[0]);
                            this.selectedServiceProduct = this.serviceProductList[0];
                            // this.customerQuotationForm.get('serviceProductCtrl').disable();
                        }
                    }
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
};
CustomerQuotationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__["CustomerQuotationService"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"] }
];
CustomerQuotationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-customer-quotation',
        template: __webpack_require__(/*! raw-loader!./customer-quotation.page.html */ "./node_modules/raw-loader/index.js!./src/app/quotation/customer-quotation/customer-quotation.page.html"),
        styles: [__webpack_require__(/*! ./customer-quotation.page.scss */ "./src/app/quotation/customer-quotation/customer-quotation.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__["CustomerQuotationService"],
        src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"], src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"]])
], CustomerQuotationPage);



/***/ })

}]);
//# sourceMappingURL=quotation-customer-quotation-customer-quotation-module-es2015.js.map