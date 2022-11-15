(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addeditproduct-addeditproduct-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addeditproduct/addeditproduct.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addeditproduct/addeditproduct.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Select Product</ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSave(form.value)\">\n    <!-- <ion-card> -->\n    <ion-row>\n      <ion-col no-margin no-padding>\n        <ion-item (click)=\"onShowFilterModel()\" text-center no-padding no-margin\n          style=\"border-bottom-style:groove;border-right-style:groove\">\n          <!-- <ion-icon slot=\"start\" name=\"funnel\" color=\"primary\" ></ion-icon> -->\n          <ion-label style=\"margin-left:10px\">Filter</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col no-margin no-padding>\n        <ion-item (click)=\"clearFilter()\" text-center no-padding no-margin style=\"border-bottom-style:groove\"\n          [disabled]=\"totalFilterApplied==0\">\n          <ion-label>Clear Filter <span class=\"amc-for-two-Year\">{{totalFilterApplied}}</span></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- </ion-card> -->\n    <ion-list>\n      <ion-card>\n        <ion-row>\n          <ion-col>\n            <ion-item (click)=\"onShowProductListModel(false)\">\n              <ion-label>Select Product</ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-list>\n    <ion-list >\n      <ion-card *ngFor=\"let item of tempcartproduct; index as i\">\n          <ion-row class=\"left-padding\" style=\"padding-left: 15px; padding-top: 15px;\">\n            <ion-label style=\"white-space: normal;font-weight: bold;\" >\n              <ion-icon *ngIf=\"!item.MainProductQty\" style=\"color: springgreen;\" name=\"pricetags\"></ion-icon>\n              {{ item.product }}\n            </ion-label>\n          </ion-row>\n          <ion-row style=\"padding-left: 10px;\">\n            <ion-col>\n              <ion-label color=\"green\" style=\"font-size: small;font-weight: bold;\" *ngIf=\"item.MainProductQty\">Qty: {{\n                item.MainProductQty }}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"padding-left: 10px;\">\n            <ion-col>\n              <ion-label color=\"green\" style=\"font-size: small;font-weight: bold;\" *ngIf=\"item.freeqty\">Free Qty: {{ item.freeqty }}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"padding-left: 10px;\">\n            <ion-col>\n              <ion-label color=\"green\" style=\"font-size: small;font-weight: bold;\" *ngIf=\"!!item.enteredfreeqty && item.enteredfreeqty!=='0' && item.enteredfreeqty!==''\">Entered Free Qty: {{ item.enteredfreeqty }}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"item.MainProductQty\" no-padding style=\"border-top-style:ridge;margin-top:10px\">\n            <ion-col no-padding style=\"border-right-style:ridge\">\n              <ion-button (click)=\"onEditCartProduct(item)\" expand=\"full\" \n              style=\"--background: white;color: black;margin-inline:0px;--background-activated:whitesmoke;--background-hover:white;\">Edit\n                <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col no-padding>\n              <ion-button (click)=\"removeProduct(item)\" expand=\"full\" style=\"--background: white;color: black;margin-inline:0px;--background-activated:whitesmoke;--background-hover:white\">Remove\n                <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          \n      </ion-card>\n    </ion-list>\n    \n  </form>\n</ion-content>\n<ion-footer>\n  <ion-card no-margin>\n    <ion-row>\n      <ion-col>\n        <!-- <ion-item>\n          <ion-icon color=\"primary\" src=\"./assets/rupee-indian.svg\" class=\"rupee-font\"></ion-icon>\n          <ion-label class=\"total-amount\">{{ totalCartAmount | number:'1.2-2' }}</ion-label>\n        </ion-item> -->\n      </ion-col>\n      <ion-col>\n        <ion-button [disabled]=\"!form.valid && !Istempcartproduct\" (click)=\"onSave('save')\" color=\"primary\"\n          class=\"save-cart\" expand=\"full\" fill=\"outline\">\n          <ion-label style=\"color: white;\">\n            Save\n          </ion-label>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-footer>"

/***/ }),

/***/ "./src/app/addeditproduct/addeditproduct.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/addeditproduct/addeditproduct.module.ts ***!
  \*********************************************************/
/*! exports provided: AddeditproductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditproductPageModule", function() { return AddeditproductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../product-list/product-list.module */ "./src/app/product-list/product-list.module.ts");
/* harmony import */ var _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../product-list/product-list.page */ "./src/app/product-list/product-list.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addeditproduct_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addeditproduct.page */ "./src/app/addeditproduct/addeditproduct.page.ts");
/* harmony import */ var _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-filter/product-filter.page */ "./src/app/product-filter/product-filter.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");









//import { NeworderPage } from '../neworder/neworder.page';



const routes = [
    {
        path: '',
        component: _addeditproduct_page__WEBPACK_IMPORTED_MODULE_9__["AddeditproductPage"]
    }
];
let AddeditproductPageModule = class AddeditproductPageModule {
};
AddeditproductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_1__["ProductListPageModule"]
        ],
        declarations: [_addeditproduct_page__WEBPACK_IMPORTED_MODULE_9__["AddeditproductPage"], _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_10__["ProductFilterPage"]],
        entryComponents: [_product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_10__["ProductFilterPage"], _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_2__["ProductListPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AddeditproductPageModule);



/***/ }),

/***/ "./src/app/addeditproduct/addeditproduct.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/addeditproduct/addeditproduct.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .ionic-selectable-item {\n  max-width: none !important;\n  --min-height: 20px;\n}\n\nion-input.custom-class {\n  font-size: smaller;\n}\n\nion-col ion-input {\n  border: solid 1px #757575;\n}\n\n.amc-for-two-Year {\n  background-color: #FF5252;\n  padding: 5px;\n  border-radius: 5px;\n  color: white;\n  font-weight: bold;\n}\n\nion-item {\n  max-width: -webkit-fill-available !important;\n}\n\n.save-cart {\n  background: #f39e20;\n}\n\n.rupee-font {\n  font-size: x-large;\n}\n\n.total-amount {\n  font-size: x-large;\n  font-weight: bold;\n}\n\nleft-padding {\n  padding-left: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9hZGRlZGl0cHJvZHVjdC9hZGRlZGl0cHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGVkaXRwcm9kdWN0L2FkZGVkaXRwcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURJSTtFQUNFLGtCQUFBO0FDRE47O0FETUU7RUFDRyx5QkFBQTtBQ0hMOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURNQTtFQUNFLDRDQUFBO0FDSEY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGRlZGl0cHJvZHVjdC9hZGRlZGl0cHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmlvbmljLXNlbGVjdGFibGUtaXRlbSB7XG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgLS1taW4taGVpZ2h0OiAyMHB4O1xuICAgIFxuICB9XG4gXG4gIGlvbi1pbnB1dCB7XG4gICAgJi5jdXN0b20tY2xhc3Mge1xuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIH1cbn1cblxuaW9uLWNvbHtcbiAgaW9uLWlucHV0e1xuICAgICBib3JkZXI6IHNvbGlkIDFweCAjNzU3NTc1O1xuICB9XG59XG5cbi5hbWMtZm9yLXR3by1ZZWFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjUyNTI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5pb24taXRlbXtcbiAgbWF4LXdpZHRoOi13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudFxufVxuLnNhdmUtY2FydHtcbiAgYmFja2dyb3VuZDojZjM5ZTIwO1xufVxuLnJ1cGVlLWZvbnR7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbi50b3RhbC1hbW91bnR7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5sZWZ0LXBhZGRpbmd7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KXtcbiAgXG59XG4vLyA6Om5nLWRlZXAgLnNjLWlvbi1tb2RhbC1pb3MtaCB7XG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogNzY4cHgpe1xuLy8gICAgIC0td2lkdGg6IDY3MHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgLS1oZWlnaHQ6IDY3MHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbiAgXG4vLyB9XG4ubXktY3VzdG9tLWZpbHRlci1jbGFzcyAubW9kYWwtd3JhcHBlcntcbiAgXG59IiwiOjpuZy1kZWVwIC5pb25pYy1zZWxlY3RhYmxlLWl0ZW0ge1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24taW5wdXQuY3VzdG9tLWNsYXNzIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG5pb24tY29sIGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICM3NTc1NzU7XG59XG5cbi5hbWMtZm9yLXR3by1ZZWFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTI1MjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlLWNhcnQge1xuICBiYWNrZ3JvdW5kOiAjZjM5ZTIwO1xufVxuXG4ucnVwZWUtZm9udCB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLnRvdGFsLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmxlZnQtcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/addeditproduct/addeditproduct.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/addeditproduct/addeditproduct.page.ts ***!
  \*******************************************************/
/*! exports provided: AddeditproductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditproductPage", function() { return AddeditproductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../product-list/product-list.page */ "./src/app/product-list/product-list.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addeditproduct_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addeditproduct.service */ "./src/app/addeditproduct/addeditproduct.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _neworder_neworder_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../neworder/neworder.page */ "./src/app/neworder/neworder.page.ts");
/* harmony import */ var _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product-filter/product-filter.page */ "./src/app/product-filter/product-filter.page.ts");
/* harmony import */ var _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../neworder/neworder.service */ "./src/app/neworder/neworder.service.ts");














let AddeditproductPage = class AddeditproductPage {
    constructor(fb, val, router, alertCtrl, loadingController, addeditproductservice, route, commonfun, neworderpage, loginauth, modalController, formBuilder, alertController, neworderservice) {
        this.fb = fb;
        this.val = val;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.addeditproductservice = addeditproductservice;
        this.route = route;
        this.commonfun = commonfun;
        this.neworderpage = neworderpage;
        this.loginauth = loginauth;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.neworderservice = neworderservice;
        this.Istempcartproduct = false;
        this.prodsearchtextcount = 0;
        this.isLoading = false;
        this.activityid = '';
        this.cust_id = '';
        this.order_type = '';
        this.businessPartnerCategory = '';
        this.product_id = '';
        this.TaxRate = '';
        //Isdruglicence:boolean=false;
        //#region constructor
        this.totalFilterApplied = 0;
        this.totalCartAmount = 0;
        this.validation_messages = { 'productQuantityCtrlErrorMessage': [{ type: 'required', message: '*Please Enter Quantity.' }] };
        this.getparam();
        this.form = this.fb.group({
            Quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedddlproduct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ;
    //#endregion constructor
    //#region ngOnInit()
    ngOnInit() {
        // this.commonfun.chkcache('neworder');
        this.portForm = this.formBuilder.group({
            productQuantityCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    //#endregion ngOnInit()
    getparam() {
        try {
            this.route.params.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    // this.selectedbunch=null;
                    //  console.log("Add Edit Param GET Param",this.businessPartnerCategory);
                    this.cust_id = this.router.getCurrentNavigation().extras.state.cust_id;
                    this.order_type = this.router.getCurrentNavigation().extras.state.order_type;
                    this.businessPartnerCategory = this.router.getCurrentNavigation().extras.state.businessPartnerCategory;
                    this.tempSelectedBusinessPartner = this.router.getCurrentNavigation().extras.state.tempSelectedBusinessPartner;
                    this.temp_selected_primary_customer = this.router.getCurrentNavigation().extras.state.tempPrimaryCustomer;
                    // console.log("Add Edit Param GET Param",this.temp_selected_primary_customer);
                    this.activityid = this.router.getCurrentNavigation().extras.state.activityid;
                    this.existingcartproduct = this.router.getCurrentNavigation().extras.state.cartproduct;
                    this.tempcartproduct = this.router.getCurrentNavigation().extras.state.cartproduct;
                    // console.log('cart product',this.tempcartproduct);
                    this.calculateTotalCartAmount();
                    this.selectedBPaddressbilling = this.router.getCurrentNavigation().extras.state.addressbilling;
                    this.selectedBPaddressshipping = this.router.getCurrentNavigation().extras.state.addressshipping;
                    this.special_order_add_edit = this.router.getCurrentNavigation().extras.state.special_order;
                    this.temp_is_advance_payment = this.router.getCurrentNavigation().extras.state.is_advance_payment_param;
                    this.issplorderonfreeqty = this.router.getCurrentNavigation().extras.state.issplorderonfreeqty;
                    //console.log('this.issplorderonfreeqty',this.special_order_add_edit);
                    this.iscartempty();
                    //------------------------------------
                    var editproduct = this.router.getCurrentNavigation().extras.state.selectedproduct;
                    // console.log('edit product',editproduct);
                    if (editproduct) {
                        this.selectedddlproduct = editproduct;
                        this.product_id = editproduct.id;
                        this.getqty(this.product_id, "Y");
                        this.shipperqty = editproduct.shipperqty;
                        this.minorderqty = editproduct.minorderqty;
                        this.enteredfreeqty = editproduct.enteredfreeqty;
                    }
                    //this.ddlproduct[0]=this.selectedddlproduct
                    this.form.controls["selectedddlproduct"].setValue(this.router.getCurrentNavigation().extras.state.selectedproduct);
                    //----------------------------------
                    // this.Isdruglicence=this.router.getCurrentNavigation().extras.state.Isdruglicence;
                }
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    iscartempty() {
        if (this.tempcartproduct != null && this.tempcartproduct.length > 0) {
            this.Istempcartproduct = true;
        }
        else {
            this.Istempcartproduct = false;
        }
    }
    //#region onSave(value)
    onSave(saveoradd) {
        this.commonfun.loadingPresent();
        try {
            this.iscartempty();
            var Qty = this.form.controls['Quantity'].value;
            if (Qty != "" && Qty != 0 && Qty != null) {
                if (Qty >= this.minorderqty) {
                    if (Qty % (this.shipperqty) == 0) {
                        this.getproductdetail(Qty, saveoradd);
                    }
                    else {
                        this.commonfun.presentAlert("Message", "Alert!", "Quantity must be divisible by " + this.shipperqty);
                    }
                }
                else {
                    this.commonfun.presentAlert("Message", "Alert!", "Quantity must be greater than or equal to " + this.minorderqty);
                }
            }
            else if (this.tempcartproduct != null && this.tempcartproduct != undefined) {
                let body = {
                    "productlist": this.tempcartproduct,
                    "activityid": this.activityid,
                    "cust_id": this.cust_id,
                    "billadd": this.selectedBPaddressbilling,
                    "shippadd": this.selectedBPaddressshipping,
                    "order_type": this.order_type,
                    "isspecialorder": this.special_order_add_edit === 'Y' ? true : false,
                    "isadvancepayment": this.neworderservice.isadvancepaymentcheck,
                };
                this.neworderservice.checkForCashDiscountPopup(body).subscribe((data) => {
                    if (data.msg) {
                        this.checkForCashDiscountPopup(data.msg);
                    }
                    else if (data.noscheme) {
                        if (this.loginauth.selectedactivity.iscashdiscovertraddisc) {
                            this.neworderservice.isadvancepaymentcheck = false;
                        }
                        let body = {
                            "productlist": this.tempcartproduct,
                            "activityid": this.activityid,
                            "cust_id": this.cust_id,
                            "billadd": this.selectedBPaddressbilling,
                            "shippadd": this.selectedBPaddressshipping,
                            "order_type": this.order_type,
                            "isspecialorder": this.special_order_add_edit === 'Y' ? true : false,
                            "isadvancepayment": this.neworderservice.isadvancepaymentcheck,
                            "iscancel": true
                        };
                        this.neworderservice.iscancelpopup = true;
                        this.neworderservice.onCancelCashDiscount(body).subscribe((data) => {
                            this.tempcartproduct = data;
                            let navigationExtras = {
                                state: {
                                    selectedddlproduct: this.tempcartproduct,
                                    orderType: this.order_type,
                                    passTempSelectedBusinessPartner: this.tempSelectedBusinessPartner,
                                    addressbilling: this.selectedBPaddressbilling,
                                    addressshipping: this.selectedBPaddressshipping,
                                    special_order_add_edit: this.special_order_add_edit,
                                    passTempPrimaryCustomer: this.temp_selected_primary_customer,
                                    passIsAdvancePayment: false
                                }
                            };
                            this.router.navigate(['neworder'], navigationExtras);
                        });
                    }
                    else {
                        if (this.loginauth.selectedactivity.iscashdiscovertraddisc) {
                            this.neworderservice.isadvancepaymentcheck = false;
                        }
                        let navigationExtras = {
                            state: {
                                selectedddlproduct: this.tempcartproduct,
                                orderType: this.order_type,
                                passTempSelectedBusinessPartner: this.tempSelectedBusinessPartner,
                                addressbilling: this.selectedBPaddressbilling,
                                addressshipping: this.selectedBPaddressshipping,
                                special_order_add_edit: this.special_order_add_edit,
                                passTempPrimaryCustomer: this.temp_selected_primary_customer,
                                passIsAdvancePayment: this.neworderservice.isadvancepaymentcheck
                            }
                        };
                        this.neworderservice.iscancelpopup = true;
                        this.router.navigate(['neworder'], navigationExtras);
                    }
                }, (error) => {
                    this.commonfun.presentAlert("Message", "Error", error);
                    this.commonfun.loadingDismiss();
                    return;
                });
            }
            this.commonfun.loadingDismiss();
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error!", error);
        }
    }
    //#endregion onSave(value)
    checkForCashDiscountPopup(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Message',
                    message: '<p>You are Eligible for Advance Payment Discount.</p><p>(Scheme Information:' + msg.schemename + ', (' + msg.cashdiscount + '%)</p><p>Click Ok to Apply Discount.</p>',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                this.commonfun.loadingPresent();
                                if (this.loginauth.selectedactivity.iscashdiscovertraddisc) {
                                    this.neworderservice.isadvancepaymentcheck = false;
                                }
                                let body = {
                                    "productlist": this.tempcartproduct,
                                    "activityid": this.activityid,
                                    "cust_id": this.cust_id,
                                    "billadd": this.selectedBPaddressbilling,
                                    "shippadd": this.selectedBPaddressshipping,
                                    "order_type": this.order_type,
                                    "isspecialorder": this.special_order_add_edit === 'Y' ? true : false,
                                    "isadvancepayment": this.neworderservice.isadvancepaymentcheck,
                                    "iscancel": true
                                };
                                this.neworderservice.iscancelpopup = true;
                                this.neworderservice.onCancelCashDiscount(body).subscribe((data) => {
                                    this.tempcartproduct = data;
                                    let navigationExtras = {
                                        state: {
                                            selectedddlproduct: this.tempcartproduct,
                                            orderType: this.order_type,
                                            passTempSelectedBusinessPartner: this.tempSelectedBusinessPartner,
                                            addressbilling: this.selectedBPaddressbilling,
                                            addressshipping: this.selectedBPaddressshipping,
                                            special_order_add_edit: this.special_order_add_edit,
                                            passTempPrimaryCustomer: this.temp_selected_primary_customer,
                                            passIsAdvancePayment: false
                                        }
                                    };
                                    this.router.navigate(['neworder'], navigationExtras);
                                    this.commonfun.loadingDismiss();
                                });
                            }
                        }, {
                            text: 'Okay',
                            handler: () => {
                                this.commonfun.loadingPresent();
                                let body = {
                                    "productlist": this.tempcartproduct,
                                    "activityid": this.activityid,
                                    "cust_id": this.cust_id,
                                    "billadd": this.selectedBPaddressbilling,
                                    "shippadd": this.selectedBPaddressshipping,
                                    "order_type": this.order_type,
                                    "isspecialorder": this.special_order_add_edit === 'Y' ? true : false,
                                    "isadvancepayment": true,
                                    "cashdiscount": msg.cashdiscount,
                                    "schemename": msg.schemename,
                                    "Schemeid": msg.Schemeid,
                                    "iscancel": false
                                };
                                this.neworderservice.iscancelpopup = false;
                                this.neworderservice.onCancelCashDiscount(body).subscribe((data) => {
                                    this.tempcartproduct = data;
                                    this.neworderservice.isadvancepaymentcheck = true;
                                    let navigationExtras = {
                                        state: {
                                            selectedddlproduct: this.tempcartproduct,
                                            orderType: this.order_type,
                                            passTempSelectedBusinessPartner: this.tempSelectedBusinessPartner,
                                            addressbilling: this.selectedBPaddressbilling,
                                            addressshipping: this.selectedBPaddressshipping,
                                            special_order_add_edit: this.special_order_add_edit,
                                            passTempPrimaryCustomer: this.temp_selected_primary_customer,
                                            passIsAdvancePayment: true
                                        }
                                    };
                                    this.commonfun.loadingDismiss();
                                    this.router.navigate(['neworder'], navigationExtras);
                                });
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                this.commonfun.loadingDismiss();
                console.log(error);
            }
        });
    }
    //#region onCancel()
    onCancel() {
        this.Resetpage();
        this.router.navigate(['neworder']);
    }
    //#endregion
    removeProduct(post) {
        try {
            let index = this.tempcartproduct.indexOf(post);
            const result = this.tempcartproduct.filter(item => item.MainProductid != post.MainProductid);
            this.tempcartproduct = result;
            this.iscartempty();
            this.calculateTotalCartAmount();
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    addproduct() {
        try {
            if (this.tempcartproduct == undefined || this.tempcartproduct == null) {
                this.tempcartproduct = this.selectedddlproductany;
            }
            else if (this.tempcartproduct.length >= 0) {
                for (var c = 0; c < this.selectedddlproductany.length; c++) {
                    var sameprod = this.tempcartproduct.find(e => e.MainProductid === this.selectedddlproductany[c].MainProductid);
                    if (sameprod != null || sameprod != undefined) {
                        this.removeProduct(sameprod);
                    }
                }
                for (var b = 0; b < this.selectedddlproductany.length; b++) {
                    this.tempcartproduct.push(this.selectedddlproductany[b]);
                }
            }
            else {
            }
            this.iscartempty();
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    //#region getproductdetail(qty:string)
    getproductdetail(qty, saveoradd) {
        try {
            this.commonfun.loadingPresent();
            this.addeditproductservice.getproductdetail(this.activityid, this.cust_id, this.product_id, qty, "", this.order_type, this.selectedBPaddressshipping, this.selectedBPaddressbilling, this.special_order_add_edit, this.temp_is_advance_payment, 0).subscribe(data => {
                this.commonfun.loadingDismiss();
                if (data != null) {
                    this.productdetailresponse = data;
                    //  console.log("Product DATA",data);
                    this.selectedddlproductany = data;
                    this.selectedddlproductany = this.selectedddlproductany.reverse();
                    this.addproduct();
                    if (saveoradd == "save") {
                        let navigationExtras = {
                            state: {
                                selectedddlproduct: this.tempcartproduct
                            }
                        };
                        this.router.navigate(['neworder'], navigationExtras);
                    }
                    else {
                        this.form.reset();
                        this.shipperqty = "";
                        this.minorderqty = "";
                    }
                }
                else {
                    //  this.commonfun.loadingDismiss();
                    this.commonfun.presentAlert("Message", "Error!", "No product found.");
                }
            }, error => {
                this.commonfun.loadingDismiss();
                //  this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
                this.commonfun.presentAlert("Message", "Error!", error.error.text);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
        }
    }
    //#endregion getproductdetail(qty:string)
    //#region onchangeproductselect()
    onchangeproductselect(event) {
        try {
            this.shipperqty = "";
            this.minorderqty = "";
            this.form.controls['Quantity'].setValue("");
            if (event.value != undefined) {
                this.product_id = event.value.id;
                this.selectedddlproduct = event.value;
                this.getqty(this.product_id, "N");
                this.shipperqty = event.value.shipperqty;
                this.minorderqty = event.value.minorderqty;
            }
            event.component._searchText = "";
        }
        catch (error) {
            console.log("Error:onchangeproductselect", error);
        }
    }
    //#endregion onchangeproductselect()
    getqty(product_id, isedit) {
        if (this.tempcartproduct != undefined) {
            const result = this.tempcartproduct.filter(item => item.product_id == product_id && item.MainProductid == product_id);
            if (result.length > 0) {
                this.form.controls["Quantity"].setValue(result[0].MainProductQty);
                if (isedit == "N")
                    this.commonfun.presentAlert("Message", "Alert", "This product is already added with " + result[0].MainProductQty + " quantity.");
            }
        }
        this.iscartempty();
    }
    oneditProduct(post) {
        try {
            var selectedproduct = {
                id: post.product_id,
                minorderqty: post.minorderqty,
                shipperqty: post.shipperqty,
                _identifier: post.product,
            };
            //------------------------------------
            //
            var editproduct = post; //this.router.getCurrentNavigation().extras.state.selectedproduct;
            this.selectedddlproduct = editproduct;
            //this.ddlproduct[0]=this.selectedddlproduct
            this.form.controls["selectedddlproduct"].setValue(selectedproduct);
            this.product_id = editproduct.product_id;
            this.getqty(post.product_id, "Y");
            this.shipperqty = editproduct.shipperqty;
            this.minorderqty = editproduct.minorderqty;
            //----------------------------------
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    onEditCartProduct(editProduct) {
        try {
            this.onShowProductListModel(true, editProduct);
        }
        catch (error) {
            console.log(error);
        }
    }
    //#region productsearchChange
    productsearchChange(event) {
        this.prodsearchtextcount++;
        var custsearchtext = event.text;
        if (custsearchtext.length % 3 == 0) {
            this.prodsearchtextcount = 0;
            this.bindproduct(custsearchtext);
        }
    }
    //#endregion
    toggle(varr) {
    }
    Resetpage() {
        this.form.reset();
        this.shipperqty = "";
        this.minorderqty = "";
        this.tempcartproduct = [];
        this.selectedAddEditFilter = [];
        this.totalCartAmount = 0;
        this.totalFilterApplied = 0;
        this.iscartempty();
        this.router.navigateByUrl('/addeditproduct');
    }
    onClose(event) {
        event.component.searchText = "";
    }
    //#region bindproduct(strsearch:string)  
    bindproduct(strsearch) {
        try {
            if (strsearch != "") {
                //console.log("PRavin",this.cust_id,strsearch,this.selectedBPaddressbilling,this.selectedBPaddressshipping,this.order_type);
                //  this.addeditproductservice.getproduct(strsearch,this.activityid,this.Isdruglicence).subscribe(data=>{
                this.addeditproductservice.getproductapi(this.cust_id, strsearch, this.selectedBPaddressbilling, this.selectedBPaddressshipping, this.order_type).subscribe(data => {
                    //    const response= data['response'];
                    var response = data;
                    this.ddlproduct = response;
                    //  console.log("Product Data",response);
                    //shipperqty
                    // this.commonfun.loadingDismiss();
                }, error => {
                    //this.commonfun.loadingDismiss();
                    this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
                });
            }
            else {
                this.ddlproduct = null;
            }
        }
        catch (error) {
            // this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
        }
    }
    onShowFilterModel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalController.create({
                    component: _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_11__["ProductFilterPage"],
                    cssClass: 'my-custom-filter-class',
                    backdropDismiss: false,
                    componentProps: { selectedPreviousFilter: this.selectedAddEditFilter, business_partner: this.tempSelectedBusinessPartner,
                        is_advance_payment_filter: this.temp_is_advance_payment }
                });
                modal.onDidDismiss().then(data => {
                    //console.log("Filter Model Data",data.data);
                    this.selectedAddEditFilter = data.data;
                    if (!!data.data[0] && !!data.data[0].catvalues) {
                        this.totalFilterApplied = 0;
                        this.selectedAddEditFilter.forEach(ele => {
                            this.totalFilterApplied = this.totalFilterApplied + ele.catvalues.length;
                        });
                        this.onShowProductListModel(false);
                    }
                    else {
                        this.totalFilterApplied = 0;
                    }
                });
                return yield modal.present();
            }
            catch (error) {
                console.log("Add Edit Page", error);
            }
        });
    }
    onShowProductListModel(edit, product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalController.create({
                    component: _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_1__["ProductListPage"],
                    cssClass: 'my-custom-class',
                    backdropDismiss: false,
                    componentProps: { editMode: edit, productToBeEdit: product, activity_id: this.activityid, cust_id: this.cust_id, bpBillingAddress: this.selectedBPaddressbilling,
                        bpShippingAddress: this.selectedBPaddressshipping, orderType: this.order_type,
                        tempProductSelectedOn: this.tempcartproduct, selectedFilter: this.selectedAddEditFilter, special_order_add_edit_param: this.special_order_add_edit, issplorderonfreeqty: this.issplorderonfreeqty }
                });
                modal.onDidDismiss().then(data => {
                    //  console.log("Product List Model Data",data);
                    if (!!data.data) {
                        this.tempcartproduct = data.data;
                        this.calculateTotalCartAmount();
                        this.iscartempty();
                    }
                });
                return yield modal.present();
            }
            catch (error) {
                console.log("Add Edit Page", error);
            }
        });
    }
    getMoreProduct(event) {
        try {
        }
        catch (error) {
            console.log(error);
        }
    }
    bindFilterProductFromApi(strsearch, filter) {
        try {
            this.addeditproductservice.getFilterProductService(this.cust_id, strsearch, this.selectedBPaddressbilling, this.selectedBPaddressshipping, this.order_type, this.selectedAddEditFilter).subscribe(data => {
                var response = data;
                this.ddlproduct = response;
                //  console.log("Product Data",response);
            }, error => {
                this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    clearFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Confirm!',
                    message: 'Do you want to clear all the filter?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                //  console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: 'Okay',
                            handler: () => {
                                //  console.log('Confirm Okay');
                                this.selectedAddEditFilter = [];
                                this.totalFilterApplied = 0;
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    calculateTotalCartAmount(tempCart) {
        try {
            if (!!this.tempcartproduct) {
                this.totalCartAmount = 0;
                this.tempcartproduct.forEach(ele => {
                    this.totalCartAmount = this.totalCartAmount + Number(ele.TotalAmount);
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};
AddeditproductPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _provider_validator_helper__WEBPACK_IMPORTED_MODULE_4__["Validator"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _addeditproduct_service__WEBPACK_IMPORTED_MODULE_6__["AddeditproductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__["Commonfun"] },
    { type: _neworder_neworder_page__WEBPACK_IMPORTED_MODULE_10__["NeworderPage"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_9__["LoginauthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_12__["NeworderService"] }
];
AddeditproductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-addeditproduct',
        template: __webpack_require__(/*! raw-loader!./addeditproduct.page.html */ "./node_modules/raw-loader/index.js!./src/app/addeditproduct/addeditproduct.page.html"),
        styles: [__webpack_require__(/*! ./addeditproduct.page.scss */ "./src/app/addeditproduct/addeditproduct.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _provider_validator_helper__WEBPACK_IMPORTED_MODULE_4__["Validator"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
        _addeditproduct_service__WEBPACK_IMPORTED_MODULE_6__["AddeditproductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__["Commonfun"],
        _neworder_neworder_page__WEBPACK_IMPORTED_MODULE_10__["NeworderPage"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_9__["LoginauthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_12__["NeworderService"]])
], AddeditproductPage);



/***/ })

}]);
//# sourceMappingURL=addeditproduct-addeditproduct-module-es2015.js.map