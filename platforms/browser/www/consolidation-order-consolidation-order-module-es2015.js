(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consolidation-order-consolidation-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/consolidation-order/consolidation-order.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/consolidation-order/consolidation-order.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Consolidation Order\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"refreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"consolidationOrderForm\">\n    <ion-card>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Customer<span style=\"color:red!important\">*</span></ion-label>\n          <ionic-selectable placeholder=\"Select Customer\" disable=\"true\" [formControl]=\"consolidationOrderForm.controls['primaryCustomerCtrl']\"\n              [items]=\"primaryBusinessPartnerList\" \n              itemValueField=\"id\" \n              itemTextField=\"_identifier\" \n              [canSearch]=\"true\"\n              [shouldStoreItemValue]=\"false\"\n              (onChange)=\"onCustomerChange($event)\"\n              (onClose)=\"onCustomerClose($event)\"\n              (onSearch)=\"onCustomerSearchChange($event)\">\n            </ionic-selectable>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- Shipping Information -->\n    <ion-row>\n      <ion-col>\n        <h5 ion-text class=\"text-primary\">\n          <ion-icon name=\"locate\"></ion-icon> Shipping Information:\n        </h5>\n      </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <ion-item >\n              <ion-label position=\"stacked\">Shipping Address<span style=\"color:red!important\">*</span></ion-label>\n              <ion-select  [formControl]=\"consolidationOrderForm.controls['selectedBPaddressShippingCtrl']\" interface=\"popover\" multiple=\"false\" placeholder=\"Select Address\">\n                <ion-select-option *ngFor=\"let custShippingAddress of custShippingAddressList\" [value]=\"custShippingAddress\">{{custShippingAddress.name}}</ion-select-option>\n              </ion-select>\n              </ion-item>\n              <div padding-left>\n                <ng-container *ngFor=\"let validation of validation_messages.custAddShippingCtrlErrorMessage\">\n                  <div *ngIf=\"consolidationOrderForm.get('selectedBPaddressShippingCtrl').hasError(validation.type) && consolidationOrderForm.get('selectedBPaddressShippingCtrl').touched\">\n                    <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                  </div>\n                </ng-container>\n              </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <ion-item >\n              <ion-label position=\"stacked\">Billing Address<span style=\"color:red!important\">*</span></ion-label>\n              <ion-select  [formControl]=\"consolidationOrderForm.controls['selectedBPAddressBillingCtrl']\" interface=\"popover\" multiple=\"false\" placeholder=\"Select Address\">\n                <ion-select-option *ngFor=\"let badd of custBillingAddressList\" [value]=\"badd\">{{badd.name}}</ion-select-option>\n              </ion-select>\n              </ion-item>\n              <div padding-left>\n                <ng-container *ngFor=\"let validation of validation_messages.custAddBillingCtrlErrorMessage\">\n                  <div *ngIf=\"consolidationOrderForm.get('selectedBPAddressBillingCtrl').hasError(validation.type) && consolidationOrderForm.get('selectedBPAddressBillingCtrl').touched\">\n                    <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                  </div>\n                </ng-container>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n      <ion-row>\n        <ion-col>\n          <ion-card>\n            <!-- bootstrap resizeable -->\n            <!-- material -->\n            <ngx-datatable \n            class=\"bootstrap resizeable\"\n           \n            \n            [rows]=\"rows\" \n            [rowHeight]=\"'auto'\" \n            [limit]=\"page.size\"\n            [columnMode]=\"ColumnMode.force\" \n            [sortType]=\"'multi'\" \n            [headerHeight]=\"50\" \n            [footerHeight]=\"50\"\n            [selectionType]=\"SelectionType.checkbox\"\n            [selected]=\"selected\"\n            (select)=\"onSelect($event)\"\n           \n            [offset]=\"page.pageNumber\"\n            [count]=\"page.totalElements\"\n            (page)=\"getSecondaryCustomer($event)\">\n\n            <ngx-datatable-column\n            [width]=\"25\"\n            [sortable]=\"false\"\n            [canAutoResize]=\"false\"\n            [draggable]=\"false\"\n            [resizeable]=\"false\">\n          \n            <ng-template\n              ngx-datatable-cell-template\n              let-value=\"value\"\n              let-isSelected=\"isSelected\"\n              let-onCheckboxChangeFn=\"onCheckboxChangeFn\">\n              <input type=\"checkbox\" [checked]=\"isSelected\" (change)=\"onCheckboxChangeFn($event)\" />\n            </ng-template>\n          </ngx-datatable-column>\n          <ngx-datatable-column name=\"Secondary Customer Name\"  [flexGrow]=\"3\"  prop=\"secondary_cust\"></ngx-datatable-column>\n          <ngx-datatable-column name=\"Order No\" [flexGrow]=\"1\" prop=\"documentno\" ></ngx-datatable-column>\n          <ngx-datatable-column name=\"Date\" [flexGrow]=\"1\" prop=\"documentdate\">\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n              {{row.documentdate | date:'dd-MMM-yyyy'}}\n            </ng-template>\n          </ngx-datatable-column>\n\n          </ngx-datatable>\n\n</ion-card>\n       \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col style=\"padding-left: 16px;padding-right: 16px;\">\n          <ion-button size=\"default\"\n            class=\"submit-btn\" expand=\"block\" [disabled]= \"!consolidationOrderForm.valid || !selectedOrder\"  color=\"primary\" (click)=\"onConsolidateOrder(consolidationOrderForm)\">Consolidate Order\n          </ion-button>\n        </ion-col>\n        <ion-col style=\"padding-left: 16px;padding-right: 16px;\">\n          <ion-button size=\"default\"\n            class=\"submit-btn\" expand=\"block\" [disabled]= \"!consolidationOrderForm.valid || !selectedOrder\" color=\"primary\" (click)=\"onCloseOrder(consolidationOrderForm)\">Close\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/consolidation-order/consolidation-order.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/consolidation-order/consolidation-order.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConsolidationOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidationOrderPageModule", function() { return ConsolidationOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consolidation_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consolidation-order.page */ "./src/app/consolidation-order/consolidation-order.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/pipes/pipes.module */ "./src/app/common/pipes/pipes.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");










const routes = [
    {
        path: '',
        component: _consolidation_order_page__WEBPACK_IMPORTED_MODULE_6__["ConsolidationOrderPage"]
    }
];
let ConsolidationOrderPageModule = class ConsolidationOrderPageModule {
};
ConsolidationOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_consolidation_order_page__WEBPACK_IMPORTED_MODULE_6__["ConsolidationOrderPage"]]
    })
], ConsolidationOrderPageModule);



/***/ }),

/***/ "./src/app/consolidation-order/consolidation-order.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/consolidation-order/consolidation-order.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 800px) {\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    white-space: normal !important;\n    vertical-align: middle !important;\n  }\n}\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n  font-weight: bold !important;\n}\n.ngx-datatable.bootstrap .datatable-header {\n  font-weight: bold !important;\n  background-color: #D7CCC8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9jb25zb2xpZGF0aW9uLW9yZGVyL2NvbnNvbGlkYXRpb24tb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9jb25zb2xpZGF0aW9uLW9yZGVyL2NvbnNvbGlkYXRpb24tb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0k7SUFDSSwyQkFBQTtJQUNBLGtDQUFBO0lBQ0EsOEJBQUE7SUFFQSxpQ0FBQTtFQ1hOO0FBQ0Y7QURpQkE7RUFDSSw0QkFBQTtBQ2ZKO0FEaUJBO0VBQ0ksNEJBQUE7RUFDQSxvQ0FBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvY29uc29saWRhdGlvbi1vcmRlci9jb25zb2xpZGF0aW9uLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gOjpuZy1kZWVwIHtcblxuLy8gQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy9uZ3gtZGF0YXRhYmxlL19pbmRleCc7XG4vLyBAaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL25neC1kYXRhdGFibGUvX21hdGVyaWFsJztcbi8vIEBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvbmd4LWRhdGF0YWJsZS9ib290c3RyYXAnO1xuLy8gQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy9uZ3gtZGF0YXRhYmxlL19pY29ucy5jc3MnO1xuXG5cbi8vIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBcbiAgfVxuXG5cblxuLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEN0NDQzggIWltcG9ydGFudDtcbiAgfSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICB9XG59XG4ubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEN0NDQzggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/consolidation-order/consolidation-order.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/consolidation-order/consolidation-order.page.ts ***!
  \*****************************************************************/
/*! exports provided: ConsolidationOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidationOrderPage", function() { return ConsolidationOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../order-approval/show-approval-details-modal/show-approval-details-modal.page */ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _consolidation_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consolidation-order.service */ "./src/app/consolidation-order/consolidation-order.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");












let ConsolidationOrderPage = class ConsolidationOrderPage {
    constructor(consolidationOrderService, formBuilder, validator, commonFunction, loginauth, http, alertCtrl, router) {
        this.consolidationOrderService = consolidationOrderService;
        this.formBuilder = formBuilder;
        this.validator = validator;
        this.commonFunction = commonFunction;
        this.loginauth = loginauth;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.TAG = "Consolidation Order Page";
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["ColumnMode"];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["SelectionType"];
        this.selected = [];
        this.selectedOrder = false;
        this.page = new _order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_1__["Page"]();
        this.currentPageOffset = 0;
        this.higgestPageOffset = -1;
        this.validation_messages = { 'selectedBusinessPartner': [{ type: 'required', message: '*Please Select Customer.' }],
            'custAddShippingCtrlErrorMessage': [{ type: 'required', message: '*Please Select Shipping Address.' }],
            'custAddBillingCtrlErrorMessage': [{ type: 'required', message: '*Please Select Billing Address.' }],
        };
        this.columns = [
            { name: 'Secondary Customer Name', prop: 'secondary_cust' },
            { name: 'Order No', prop: 'documentno' },
            { name: 'Date', prop: 'documentdate' }
        ];
    }
    ngOnInit() {
        this.consolidationOrderForm = this.formBuilder.group({
            primaryCustomerCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedBPaddressShippingCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedBPAddressBillingCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.page.pageNumber = 0;
        this.page.size = 10;
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // console.log(this.TAG,"Dummy REsponse",this.rows);
                //  this.getSecondaryCustomer({ offset: 0 });
                //  console.log(this.TAG,"ionViewWillEnter Fired");
                this.commonFunction.loadingPresent();
                let tempResponse = yield this.consolidationOrderService.getPrimaryCustomer().toPromise();
                //  console.log(this.TAG,tempResponse);
                if (!!tempResponse.length) {
                    if (tempResponse.length > this.loginauth.minlistcount) {
                        this.primaryBusinessPartnerList = [];
                    }
                    else {
                        this.primaryBusinessPartnerList = tempResponse;
                        this.dontClearConsolidate = true;
                        if (this.primaryBusinessPartnerList.length == 1) {
                            this.consolidationOrderForm.controls["primaryCustomerCtrl"].setValue(this.primaryBusinessPartnerList[0]);
                            this.selectedPrimaryBusinessPartner = this.primaryBusinessPartnerList[0];
                            this.bindCustomerBillingAddress();
                            this.higgestPageOffset = -1;
                            this.currentPageOffset = 0;
                            this.getSecondaryCustomer({ offset: 0 });
                        }
                    }
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                // console.log(this.TAG,error);
            }
        });
    }
    bindCustomerBillingAddress(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const addressResponse = yield this.consolidationOrderService.getPrimaryCustomerBillingAddress(this.selectedPrimaryBusinessPartner.id).toPromise();
                const response = addressResponse['response'];
                var jsondata = response.data;
                this.custBillingAddressList = jsondata.filter(e => e.invoiceToAddress == true);
                this.custShippingAddressList = jsondata.filter(e => e.shipToAddress == true);
                setTimeout(() => {
                    if (this.custShippingAddressList.length == 1) {
                        this.consolidationOrderForm.controls["selectedBPaddressShippingCtrl"].setValue(this.custShippingAddressList[0]);
                    }
                    if (this.custBillingAddressList.length == 1) {
                        this.consolidationOrderForm.controls["selectedBPAddressBillingCtrl"].setValue(this.custBillingAddressList[0]);
                    }
                }, 100);
            }
            catch (error) {
                // console.log(this.TAG,error);
            }
        });
    }
    refreshPage() {
        try {
            this.consolidationOrderForm.reset();
            this.rows = [];
            this.higgestPageOffset = -1;
            this.currentPageOffset = 0;
            this.page.totalElements = 0;
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    onCustomerChange(event) {
        try {
            //  console.log(this.TAG,"onCustomerChange");
            this.higgestPageOffset = -1;
            this.currentPageOffset = 0;
            this.custShippingAddressList = null;
            this.custBillingAddressList = null;
            this.consolidationOrderForm.controls["selectedBPaddressShippingCtrl"].setValue('');
            this.consolidationOrderForm.controls["selectedBPAddressBillingCtrl"].setValue('');
            this.selectedPrimaryBusinessPartner = event.value;
            this.bindCustomerBillingAddress(event.value.id);
            this.rows = [];
            this.getSecondaryCustomer({ offset: 0 });
            // this.setPage({ offset: 0 });
            event.component._searchText = "";
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
            var custsearchtext = event.text;
            if (custsearchtext.length >= 3) {
                this.bindPrimaryCustomerFromApi(custsearchtext);
            }
            else {
                if (!!this.dontClearConsolidate && this.dontClearConsolidate == true) {
                }
                else {
                    this.primaryBusinessPartnerList = [];
                }
            }
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    bindPrimaryCustomerFromApi(strsearch) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (strsearch != "") {
                    const cust_response = yield this.consolidationOrderService.getPrimaryCustomer(strsearch).toPromise();
                    // console.log(this.TAG,cust_response);
                    this.primaryBusinessPartnerList = cust_response;
                }
                else {
                    if (!!this.dontClearConsolidate && this.dontClearConsolidate == true) {
                    }
                    else {
                        this.primaryBusinessPartnerList = [];
                    }
                }
            }
            catch (error) {
                // console.log(this.TAG,error);
            }
        });
    }
    toggleSecondaryBusinessPartner(event, item) {
        try {
        }
        catch (error) {
            //  console.log(this.TAG,error);
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
                            this.higgestPageOffset = -1;
                            this.currentPageOffset = 0;
                            this.page.totalElements = 0;
                            this.consolidationOrderForm.reset();
                            this.rows = [];
                            this.router.navigateByUrl('/home');
                        }
                    }]
            });
            alert.dismiss(() => console.log('The alert has been closed.'));
            yield alert.present();
        });
    }
    onConsolidateOrder(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (!!this.selected && this.selected.length > 0) {
                    this.commonFunction.loadingPresent();
                    let Shipping = this.consolidationOrderForm.get('selectedBPaddressShippingCtrl').value.id;
                    let Billing = this.consolidationOrderForm.get('selectedBPAddressBillingCtrl').value.id;
                    let consolidateOrderResponse = yield this.consolidationOrderService.consolidateOrderService(this.selected, this.selectedPrimaryBusinessPartner, Shipping, Billing).toPromise();
                    // console.log(this.TAG,"on Close Order Status",consolidateOrderResponse);
                    if (!!consolidateOrderResponse) {
                        this.presentAlert("Consolidation Order", "Status", consolidateOrderResponse.msg);
                    }
                    this.commonFunction.loadingDismiss();
                }
                else {
                    this.commonFunction.presentAlert("Consolidation Order", "Validation", "Please Select Order");
                }
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                this.commonFunction.presentAlert("Consolidation Order", "Error", error.error);
                // console.log(this.TAG,error);
            }
        });
    }
    onCloseOrder(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (!!this.selected && this.selected.length > 0) {
                    this.commonFunction.loadingPresent();
                    let Shipping = this.consolidationOrderForm.get('selectedBPaddressShippingCtrl').value.id;
                    let Billing = this.consolidationOrderForm.get('selectedBPAddressBillingCtrl').value.id;
                    let consolidateOrderResponse = yield this.consolidationOrderService.consolidateOrderCloseService(this.selected, this.selectedPrimaryBusinessPartner, Shipping, Billing).toPromise();
                    ;
                    //  console.log(this.TAG,"on Close Order Status",consolidateOrderResponse);
                    if (!!consolidateOrderResponse) {
                        this.presentAlert("Consolidation Order", "Status", consolidateOrderResponse.msg);
                    }
                    this.commonFunction.loadingDismiss();
                }
                else {
                    this.commonFunction.presentAlert("Consolidation Order", "Validation", "Please Select Order");
                }
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                this.commonFunction.presentAlert("Consolidation Order", "Error", error.error);
                // console.log(this.TAG,error);
            }
        });
    }
    getSecondaryCustomer(pageInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // console.log(this.TAG,"getSecondaryCustomer CAlled");
                this.commonFunction.loadingPresent();
                this.page.pageNumber = pageInfo.offset;
                let offset = 0;
                if (this.higgestPageOffset < pageInfo.offset) {
                    if (this.page.totalElements == 0) {
                        offset = 0;
                        this.currentPageOffset = 0;
                    }
                    else {
                        this.currentPageOffset = this.page.totalElements + 20;
                        offset = this.currentPageOffset;
                    }
                    this.secondaryBusinessPartnerList = yield this.consolidationOrderService.getSecondaryCustomerFromApi(this.selectedPrimaryBusinessPartner.id, offset).toPromise();
                    // console.log(this.TAG,"Secondary Customer",this.secondaryBusinessPartnerList);
                    if (!!this.rows) {
                        this.higgestPageOffset = pageInfo.offset;
                        this.rows = this.rows.concat(this.secondaryBusinessPartnerList.filter(x => this.rows.every(y => y !== x)));
                    }
                    else {
                        this.higgestPageOffset = pageInfo.offset;
                        this.rows = this.secondaryBusinessPartnerList;
                        // this.getSecondaryCustomer({ offset: 1 });
                    }
                    this.page.totalElements = this.rows.length;
                    this.page.totalPages = this.page.totalElements / this.page.size;
                    // this.loadingIndicator  = false;
                }
                this.commonFunction.loadingDismiss();
                // this.page.pageNumber = 1;
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                //  console.log(this.TAG,error);
            }
        });
    }
    onSelect({ selected }) {
        //  console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        if (!!this.selected && this.selected.length > 0) {
            this.selectedOrder = true;
        }
        else {
            this.selectedOrder = false;
        }
    }
    onActivate(event) {
        //  console.log('Activate Event', event);
    }
};
ConsolidationOrderPage.ctorParameters = () => [
    { type: _consolidation_order_service__WEBPACK_IMPORTED_MODULE_8__["ConsolidationOrderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
ConsolidationOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-consolidation-order',
        template: __webpack_require__(/*! raw-loader!./consolidation-order.page.html */ "./node_modules/raw-loader/index.js!./src/app/consolidation-order/consolidation-order.page.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./consolidation-order.page.scss */ "./src/app/consolidation-order/consolidation-order.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_consolidation_order_service__WEBPACK_IMPORTED_MODULE_8__["ConsolidationOrderService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], ConsolidationOrderPage);



/***/ }),

/***/ "./src/app/consolidation-order/consolidation-order.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/consolidation-order/consolidation-order.service.ts ***!
  \********************************************************************/
/*! exports provided: ConsolidationOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidationOrderService", function() { return ConsolidationOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_assets_model_CorporateEmployee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/model/CorporateEmployee */ "./src/assets/model/CorporateEmployee.ts");
/* harmony import */ var src_assets_model_PagedData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/model/PagedData */ "./src/assets/model/PagedData.ts");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _assets_data_company_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/data/company.json */ "./src/assets/data/company.json");
var _assets_data_company_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/company.json */ "./src/assets/data/company.json", 1);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/Constants */ "./src/app/common/Constants.ts");










// import data from '../../assets/data/company.json';



const companyData = _assets_data_company_json__WEBPACK_IMPORTED_MODULE_10__;
let ConsolidationOrderService = class ConsolidationOrderService {
    constructor(genericHttpClientService, loginService, commonFunction, platform, http) {
        this.genericHttpClientService = genericHttpClientService;
        this.loginService = loginService;
        this.commonFunction = commonFunction;
        this.platform = platform;
        this.http = http;
        this.TAG = "Consolidation Order Service";
    }
    getPrimaryCustomer(strsearch) {
        try {
            if (!!strsearch) {
                strsearch = strsearch.replace(/ /g, "%20");
            }
            else {
                strsearch = "";
            }
            let getCustomerURL = this.loginService.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomer?'
                + this.loginService.parameter
                + '&user_id=' + this.loginService.userid
                + '&strsearch=' + strsearch
                + '&activity_id=' + this.loginService.selectedactivity.id
                + '&ordertypeionic=' + ""
                + '&isprimary=' + "Y";
            //  console.log(this.TAG,"getPrimaryCustomer",getCustomerURL);
            return this.genericHttpClientService.get(getCustomerURL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getPrimaryCustomerBillingAddress(businessPartner_id) {
        try {
            return this.genericHttpClientService.get(this.loginService.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerLocation?'
                + this.loginService.ReadOnlyparameter + '&'
                + '_selectedProperties=id,name,shipToAddress,invoiceToAddress&'
                + '_where=active=true%20and%20businessPartner=\'' + businessPartner_id + '\'');
        }
        catch (error) {
            throw error;
        }
    }
    getSecondaryCustomerFromApi(bp_id, offset) {
        try {
            //  console.log(this.TAG,offset);
            let getCustomerURL = this.loginService.commonurl + 'ws/in.mbs.webservice.SebiaSecondaryCustList?'
                + this.loginService.parameter
                + '&user_id=' + this.loginService.userid
                + '&bp_id=' + bp_id
                + '&offset=' + offset
                + '&activity_id=' + this.loginService.selectedactivity.id;
            let dummyURL = "https://p2test.pispl.in/openbravo/ws/in.mbs.webservice.SebiaSecondaryCustList?user=hardik.pandya&password=pass&user_id=FFF20200727061334922CD0B9DE67B63&bp_id=FFF2020030902464717516D985A526FB&offset=20&activity_id=FFF202012061211195489D3E4DD35FC1";
            console.log(this.TAG, "getSecondaryCustomerFromApi", getCustomerURL);
            return this.genericHttpClientService.get(getCustomerURL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getDummy() {
        try {
            return this.http.get('assets/data/login.json');
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    /**
     * A method that mocks a paged server response
     * @param page The selected page
     * @returns {any} An observable containing the employee data
     */
    getResults(page) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(companyData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(d => this.getPagedData(page)));
    }
    /**
     * Package companyData into a PagedData object based on the selected Page
     * @param page The page data used to get the selected data from companyData
     * @returns {PagedData<CorporateEmployee>} An array of the selected data and page
     */
    getPagedData(page) {
        const pagedData = new src_assets_model_PagedData__WEBPACK_IMPORTED_MODULE_6__["PagedData"]();
        page.totalElements = companyData.length;
        page.totalPages = page.totalElements / page.size;
        const start = page.pageNumber * page.size;
        const end = Math.min(start + page.size, page.totalElements);
        for (let i = start; i < end; i++) {
            const jsonObj = companyData[i];
            const employee = new src_assets_model_CorporateEmployee__WEBPACK_IMPORTED_MODULE_5__["CorporateEmployee"](jsonObj.name, jsonObj.gender, jsonObj.company, jsonObj.age);
            pagedData.data.push(employee);
        }
        pagedData.page = page;
        return pagedData;
    }
    consolidateOrderService(orderList, selectedBusinessPartner, Shipping, Billing) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let mbso_copord_id = [];
            orderList.forEach(element => {
                mbso_copord_id.push(element.mbso_copord_id);
            });
            let dataClose = {
                "consolidated_order": "Y",
                "bp_id": selectedBusinessPartner.id,
                "shiploc_id": Shipping,
                "billloc_id": Billing,
                "user_id": this.loginService.userid,
                "mbso_copord_id": mbso_copord_id
            };
            //  console.log(this.TAG,"Consolidate Order Service Post FINAL",dataClose);
            let consolidate_order_url = _common_Constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.SebiaConsolidatedOrder?';
            return this.genericHttpClientService.post(consolidate_order_url, dataClose, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    consolidateOrderCloseService(orderList, selectedBusinessPartner, Shipping, Billing) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let mbso_copord_id = [];
            orderList.forEach(element => {
                mbso_copord_id.push(element.mbso_copord_id);
            });
            let dataClose = {
                "consolidated_order": "N",
                "bp_id": selectedBusinessPartner.id,
                "shiploc_id": Shipping,
                "billloc_id": Billing,
                "user_id": this.loginService.userid,
                "mbso_copord_id": mbso_copord_id
            };
            //  console.log(this.TAG,"Consolidate Order Close Service Post FINAL",dataClose);
            let consolidate_order_close_url = _common_Constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.SebiaConsolidatedOrder?';
            return this.genericHttpClientService.post(consolidate_order_close_url, dataClose, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
};
ConsolidationOrderService.ctorParameters = () => [
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_8__["GenericHttpClientService"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_9__["LoginauthService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ConsolidationOrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_8__["GenericHttpClientService"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_9__["LoginauthService"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ConsolidationOrderService);



/***/ }),

/***/ "./src/assets/data/company.json":
/*!**************************************!*\
  !*** ./src/assets/data/company.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, default */
/***/ (function(module) {

module.exports = [{"name":"Ethel Price","gender":"female","company":"Johnson, Johnson and Partners, LLC CMP DDC","age":22},{"name":"Claudine Neal","gender":"female","company":"Sealoud","age":55},{"name":"Beryl Rice","gender":"female","company":"Velity","age":67},{"name":"Wilder Gonzales","gender":"male","company":"Geekko"},{"name":"Georgina Schultz","gender":"female","company":"Suretech"},{"name":"Carroll Buchanan","gender":"male","company":"Ecosys"},{"name":"Valarie Atkinson","gender":"female","company":"Hopeli"},{"name":"Schroeder Mathews","gender":"male","company":"Polarium"},{"name":"Lynda Mendoza","gender":"female","company":"Dogspa"},{"name":"Sarah Massey","gender":"female","company":"Bisba"},{"name":"Robles Boyle","gender":"male","company":"Comtract"},{"name":"Evans Hickman","gender":"male","company":"Parleynet"},{"name":"Dawson Barber","gender":"male","company":"Dymi"},{"name":"Bruce Strong","gender":"male","company":"Xyqag"},{"name":"Nellie Whitfield","gender":"female","company":"Exospace"},{"name":"Jackson Macias","gender":"male","company":"Aquamate"},{"name":"Pena Pena","gender":"male","company":"Quarx"},{"name":"Lelia Gates","gender":"female","company":"Proxsoft"},{"name":"Letitia Vasquez","gender":"female","company":"Slumberia"},{"name":"Trevino Moreno","gender":"male","company":"Conjurica"},{"name":"Barr Page","gender":"male","company":"Apex"},{"name":"Kirkland Merrill","gender":"male","company":"Utara"},{"name":"Blanche Conley","gender":"female","company":"Imkan"},{"name":"Atkins Dunlap","gender":"male","company":"Comveyor"},{"name":"Everett Foreman","gender":"male","company":"Maineland"},{"name":"Gould Randolph","gender":"male","company":"Intergeek"},{"name":"Kelli Leon","gender":"female","company":"Verbus"},{"name":"Freda Mason","gender":"female","company":"Accidency"},{"name":"Tucker Maxwell","gender":"male","company":"Lumbrex"},{"name":"Yvonne Parsons","gender":"female","company":"Zolar"},{"name":"Woods Key","gender":"male","company":"Bedder"},{"name":"Stephens Reilly","gender":"male","company":"Acusage"},{"name":"Mcfarland Sparks","gender":"male","company":"Comvey"},{"name":"Jocelyn Sawyer","gender":"female","company":"Fortean"},{"name":"Renee Barr","gender":"female","company":"Kiggle"},{"name":"Gaines Beck","gender":"male","company":"Sequitur"},{"name":"Luisa Farrell","gender":"female","company":"Cinesanct"},{"name":"Robyn Strickland","gender":"female","company":"Obones"},{"name":"Roseann Jarvis","gender":"female","company":"Aquazure"},{"name":"Johnston Park","gender":"male","company":"Netur"},{"name":"Wong Craft","gender":"male","company":"Opticall"},{"name":"Merritt Cole","gender":"male","company":"Techtrix"},{"name":"Dale Byrd","gender":"female","company":"Kneedles"},{"name":"Sara Delgado","gender":"female","company":"Netagy"},{"name":"Alisha Myers","gender":"female","company":"Intradisk"},{"name":"Felecia Smith","gender":"female","company":"Futurity"},{"name":"Neal Harvey","gender":"male","company":"Pyramax"},{"name":"Nola Miles","gender":"female","company":"Sonique"},{"name":"Herring Pierce","gender":"male","company":"Geeketron"},{"name":"Shelley Rodriquez","gender":"female","company":"Bostonic"},{"name":"Cora Chase","gender":"female","company":"Isonus"},{"name":"Mckay Santos","gender":"male","company":"Amtas"},{"name":"Hilda Crane","gender":"female","company":"Jumpstack"},{"name":"Jeanne Lindsay","gender":"female","company":"Genesynk"},{"name":"Frye Sharpe","gender":"male","company":"Eplode"},{"name":"Velma Fry","gender":"female","company":"Ronelon"},{"name":"Reyna Espinoza","gender":"female","company":"Prismatic"},{"name":"Spencer Sloan","gender":"male","company":"Comverges"},{"name":"Graham Marsh","gender":"male","company":"Medifax"},{"name":"Hale Boone","gender":"male","company":"Digial"},{"name":"Wiley Hubbard","gender":"male","company":"Zensus"},{"name":"Blackburn Drake","gender":"male","company":"Frenex"},{"name":"Franco Hunter","gender":"male","company":"Rockabye"},{"name":"Barnett Case","gender":"male","company":"Norali"},{"name":"Alexander Foley","gender":"male","company":"Geekosis"},{"name":"Lynette Stein","gender":"female","company":"Macronaut"},{"name":"Anthony Joyner","gender":"male","company":"Senmei"},{"name":"Garrett Brennan","gender":"male","company":"Bluegrain"},{"name":"Betsy Horton","gender":"female","company":"Zilla"},{"name":"Patton Small","gender":"male","company":"Genmex"},{"name":"Lakisha Huber","gender":"female","company":"Insource"},{"name":"Lindsay Avery","gender":"female","company":"Unq"},{"name":"Ayers Hood","gender":"male","company":"Accuprint"},{"name":"Torres Durham","gender":"male","company":"Uplinx"},{"name":"Vincent Hernandez","gender":"male","company":"Talendula"},{"name":"Baird Ryan","gender":"male","company":"Aquasseur"},{"name":"Georgia Mercer","gender":"female","company":"Skyplex"},{"name":"Francesca Elliott","gender":"female","company":"Nspire"},{"name":"Lyons Peters","gender":"male","company":"Quinex"},{"name":"Kristi Brewer","gender":"female","company":"Oronoko"},{"name":"Tonya Bray","gender":"female","company":"Insuron"},{"name":"Valenzuela Huff","gender":"male","company":"Applideck"},{"name":"Tiffany Anderson","gender":"female","company":"Zanymax"},{"name":"Jerri King","gender":"female","company":"Eventex"},{"name":"Rocha Meadows","gender":"male","company":"Goko"},{"name":"Marcy Green","gender":"female","company":"Pharmex"},{"name":"Kirk Cross","gender":"male","company":"Portico"},{"name":"Hattie Mullen","gender":"female","company":"Zilencio"},{"name":"Deann Bridges","gender":"female","company":"Equitox"},{"name":"Chaney Roach","gender":"male","company":"Qualitern"},{"name":"Consuelo Dickson","gender":"female","company":"Poshome"},{"name":"Billie Rowe","gender":"female","company":"Cemention"},{"name":"Bean Donovan","gender":"male","company":"Mantro"},{"name":"Lancaster Patel","gender":"male","company":"Krog"},{"name":"Rosa Dyer","gender":"female","company":"Netility"},{"name":"Christine Compton","gender":"female","company":"Bleeko"},{"name":"Milagros Finch","gender":"female","company":"Handshake"},{"name":"Ericka Alvarado","gender":"female","company":"Lyrichord"},{"name":"Sylvia Sosa","gender":"female","company":"Circum"},{"name":"Humphrey Curtis","gender":"male","company":"Corepan"}];

/***/ }),

/***/ "./src/assets/model/CorporateEmployee.ts":
/*!***********************************************!*\
  !*** ./src/assets/model/CorporateEmployee.ts ***!
  \***********************************************/
/*! exports provided: CorporateEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateEmployee", function() { return CorporateEmployee; });
class CorporateEmployee {
    constructor(name, gender, company, age) {
        this.name = name;
        this.gender = gender;
        this.company = company;
        this.age = age;
    }
}
CorporateEmployee.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: Number }
];


/***/ }),

/***/ "./src/assets/model/PagedData.ts":
/*!***************************************!*\
  !*** ./src/assets/model/PagedData.ts ***!
  \***************************************/
/*! exports provided: PagedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagedData", function() { return PagedData; });
/* harmony import */ var src_app_order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page */ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts");

/**
 * An array of data with an associated page object used for paging
 */
class PagedData {
    constructor() {
        this.data = new Array();
        this.page = new src_app_order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_0__["Page"]();
    }
}


/***/ })

}]);
//# sourceMappingURL=consolidation-order-consolidation-order-module-es2015.js.map