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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addeditproduct_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addeditproduct.page */ "./src/app/addeditproduct/addeditproduct.page.ts");
/* harmony import */ var _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-filter/product-filter.page */ "./src/app/product-filter/product-filter.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");









//import { NeworderPage } from '../neworder/neworder.page';



var routes = [
    {
        path: '',
        component: _addeditproduct_page__WEBPACK_IMPORTED_MODULE_9__["AddeditproductPage"]
    }
];
var AddeditproductPageModule = /** @class */ (function () {
    function AddeditproductPageModule() {
    }
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
    return AddeditproductPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _provider_validator_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addeditproduct_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addeditproduct.service */ "./src/app/addeditproduct/addeditproduct.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _neworder_neworder_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../neworder/neworder.page */ "./src/app/neworder/neworder.page.ts");
/* harmony import */ var _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product-filter/product-filter.page */ "./src/app/product-filter/product-filter.page.ts");
/* harmony import */ var _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../neworder/neworder.service */ "./src/app/neworder/neworder.service.ts");














var AddeditproductPage = /** @class */ (function () {
    function AddeditproductPage(fb, val, router, alertCtrl, loadingController, addeditproductservice, route, commonfun, neworderpage, loginauth, modalController, formBuilder, alertController, neworderservice) {
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
    AddeditproductPage.prototype.ngOnInit = function () {
        // this.commonfun.chkcache('neworder');
        this.portForm = this.formBuilder.group({
            productQuantityCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    //#endregion ngOnInit()
    AddeditproductPage.prototype.getparam = function () {
        var _this = this;
        try {
            this.route.params.subscribe(function (params) {
                if (_this.router.getCurrentNavigation().extras.state) {
                    // this.selectedbunch=null;
                    //  console.log("Add Edit Param GET Param",this.businessPartnerCategory);
                    _this.cust_id = _this.router.getCurrentNavigation().extras.state.cust_id;
                    _this.order_type = _this.router.getCurrentNavigation().extras.state.order_type;
                    _this.businessPartnerCategory = _this.router.getCurrentNavigation().extras.state.businessPartnerCategory;
                    _this.tempSelectedBusinessPartner = _this.router.getCurrentNavigation().extras.state.tempSelectedBusinessPartner;
                    _this.temp_selected_primary_customer = _this.router.getCurrentNavigation().extras.state.tempPrimaryCustomer;
                    // console.log("Add Edit Param GET Param",this.temp_selected_primary_customer);
                    _this.activityid = _this.router.getCurrentNavigation().extras.state.activityid;
                    _this.existingcartproduct = _this.router.getCurrentNavigation().extras.state.cartproduct;
                    _this.tempcartproduct = _this.router.getCurrentNavigation().extras.state.cartproduct;
                    // console.log('cart product',this.tempcartproduct);
                    _this.calculateTotalCartAmount();
                    _this.selectedBPaddressbilling = _this.router.getCurrentNavigation().extras.state.addressbilling;
                    _this.selectedBPaddressshipping = _this.router.getCurrentNavigation().extras.state.addressshipping;
                    _this.special_order_add_edit = _this.router.getCurrentNavigation().extras.state.special_order;
                    _this.temp_is_advance_payment = _this.router.getCurrentNavigation().extras.state.is_advance_payment_param;
                    _this.issplorderonfreeqty = _this.router.getCurrentNavigation().extras.state.issplorderonfreeqty;
                    //console.log('this.issplorderonfreeqty',this.special_order_add_edit);
                    _this.iscartempty();
                    //------------------------------------
                    var editproduct = _this.router.getCurrentNavigation().extras.state.selectedproduct;
                    // console.log('edit product',editproduct);
                    if (editproduct) {
                        _this.selectedddlproduct = editproduct;
                        _this.product_id = editproduct.id;
                        _this.getqty(_this.product_id, "Y");
                        _this.shipperqty = editproduct.shipperqty;
                        _this.minorderqty = editproduct.minorderqty;
                        _this.enteredfreeqty = editproduct.enteredfreeqty;
                    }
                    //this.ddlproduct[0]=this.selectedddlproduct
                    _this.form.controls["selectedddlproduct"].setValue(_this.router.getCurrentNavigation().extras.state.selectedproduct);
                    //----------------------------------
                    // this.Isdruglicence=this.router.getCurrentNavigation().extras.state.Isdruglicence;
                }
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    AddeditproductPage.prototype.iscartempty = function () {
        if (this.tempcartproduct != null && this.tempcartproduct.length > 0) {
            this.Istempcartproduct = true;
        }
        else {
            this.Istempcartproduct = false;
        }
    };
    //#region onSave(value)
    AddeditproductPage.prototype.onSave = function (saveoradd) {
        var _this = this;
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
                var body = {
                    "productlist": this.tempcartproduct,
                    "activityid": this.activityid,
                    "cust_id": this.cust_id,
                    "billadd": this.selectedBPaddressbilling,
                    "shippadd": this.selectedBPaddressshipping,
                    "order_type": this.order_type,
                    "isspecialorder": this.special_order_add_edit === 'Y' ? true : false,
                    "isadvancepayment": this.neworderservice.isadvancepaymentcheck,
                };
                this.neworderservice.checkForCashDiscountPopup(body).subscribe(function (data) {
                    if (data.msg) {
                        _this.checkForCashDiscountPopup(data.msg);
                    }
                    else if (data.noscheme) {
                        if (_this.loginauth.selectedactivity.iscashdiscovertraddisc) {
                            _this.neworderservice.isadvancepaymentcheck = false;
                        }
                        var body_1 = {
                            "productlist": _this.tempcartproduct,
                            "activityid": _this.activityid,
                            "cust_id": _this.cust_id,
                            "billadd": _this.selectedBPaddressbilling,
                            "shippadd": _this.selectedBPaddressshipping,
                            "order_type": _this.order_type,
                            "isspecialorder": _this.special_order_add_edit === 'Y' ? true : false,
                            "isadvancepayment": _this.neworderservice.isadvancepaymentcheck,
                            "iscancel": true
                        };
                        _this.neworderservice.iscancelpopup = true;
                        _this.neworderservice.onCancelCashDiscount(body_1).subscribe(function (data) {
                            _this.tempcartproduct = data;
                            var navigationExtras = {
                                state: {
                                    selectedddlproduct: _this.tempcartproduct,
                                    orderType: _this.order_type,
                                    passTempSelectedBusinessPartner: _this.tempSelectedBusinessPartner,
                                    addressbilling: _this.selectedBPaddressbilling,
                                    addressshipping: _this.selectedBPaddressshipping,
                                    special_order_add_edit: _this.special_order_add_edit,
                                    passTempPrimaryCustomer: _this.temp_selected_primary_customer,
                                    passIsAdvancePayment: false
                                }
                            };
                            _this.router.navigate(['neworder'], navigationExtras);
                        });
                    }
                    else {
                        if (_this.loginauth.selectedactivity.iscashdiscovertraddisc) {
                            _this.neworderservice.isadvancepaymentcheck = false;
                        }
                        var navigationExtras = {
                            state: {
                                selectedddlproduct: _this.tempcartproduct,
                                orderType: _this.order_type,
                                passTempSelectedBusinessPartner: _this.tempSelectedBusinessPartner,
                                addressbilling: _this.selectedBPaddressbilling,
                                addressshipping: _this.selectedBPaddressshipping,
                                special_order_add_edit: _this.special_order_add_edit,
                                passTempPrimaryCustomer: _this.temp_selected_primary_customer,
                                passIsAdvancePayment: _this.neworderservice.isadvancepaymentcheck
                            }
                        };
                        _this.neworderservice.iscancelpopup = true;
                        _this.router.navigate(['neworder'], navigationExtras);
                    }
                }, function (error) {
                    _this.commonfun.presentAlert("Message", "Error", error);
                    _this.commonfun.loadingDismiss();
                    return;
                });
            }
            this.commonfun.loadingDismiss();
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error!", error);
        }
    };
    //#endregion onSave(value)
    AddeditproductPage.prototype.checkForCashDiscountPopup = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Message',
                                message: '<p>You are Eligible for Advance Payment Discount.</p><p>(Scheme Information:' + msg.schemename + ', (' + msg.cashdiscount + '%)</p><p>Click Ok to Apply Discount.</p>',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            _this.commonfun.loadingPresent();
                                            if (_this.loginauth.selectedactivity.iscashdiscovertraddisc) {
                                                _this.neworderservice.isadvancepaymentcheck = false;
                                            }
                                            var body = {
                                                "productlist": _this.tempcartproduct,
                                                "activityid": _this.activityid,
                                                "cust_id": _this.cust_id,
                                                "billadd": _this.selectedBPaddressbilling,
                                                "shippadd": _this.selectedBPaddressshipping,
                                                "order_type": _this.order_type,
                                                "isspecialorder": _this.special_order_add_edit === 'Y' ? true : false,
                                                "isadvancepayment": _this.neworderservice.isadvancepaymentcheck,
                                                "iscancel": true
                                            };
                                            _this.neworderservice.iscancelpopup = true;
                                            _this.neworderservice.onCancelCashDiscount(body).subscribe(function (data) {
                                                _this.tempcartproduct = data;
                                                var navigationExtras = {
                                                    state: {
                                                        selectedddlproduct: _this.tempcartproduct,
                                                        orderType: _this.order_type,
                                                        passTempSelectedBusinessPartner: _this.tempSelectedBusinessPartner,
                                                        addressbilling: _this.selectedBPaddressbilling,
                                                        addressshipping: _this.selectedBPaddressshipping,
                                                        special_order_add_edit: _this.special_order_add_edit,
                                                        passTempPrimaryCustomer: _this.temp_selected_primary_customer,
                                                        passIsAdvancePayment: false
                                                    }
                                                };
                                                _this.router.navigate(['neworder'], navigationExtras);
                                                _this.commonfun.loadingDismiss();
                                            });
                                        }
                                    }, {
                                        text: 'Okay',
                                        handler: function () {
                                            _this.commonfun.loadingPresent();
                                            var body = {
                                                "productlist": _this.tempcartproduct,
                                                "activityid": _this.activityid,
                                                "cust_id": _this.cust_id,
                                                "billadd": _this.selectedBPaddressbilling,
                                                "shippadd": _this.selectedBPaddressshipping,
                                                "order_type": _this.order_type,
                                                "isspecialorder": _this.special_order_add_edit === 'Y' ? true : false,
                                                "isadvancepayment": true,
                                                "cashdiscount": msg.cashdiscount,
                                                "schemename": msg.schemename,
                                                "Schemeid": msg.Schemeid,
                                                "iscancel": false
                                            };
                                            _this.neworderservice.iscancelpopup = false;
                                            _this.neworderservice.onCancelCashDiscount(body).subscribe(function (data) {
                                                _this.tempcartproduct = data;
                                                _this.neworderservice.isadvancepaymentcheck = true;
                                                var navigationExtras = {
                                                    state: {
                                                        selectedddlproduct: _this.tempcartproduct,
                                                        orderType: _this.order_type,
                                                        passTempSelectedBusinessPartner: _this.tempSelectedBusinessPartner,
                                                        addressbilling: _this.selectedBPaddressbilling,
                                                        addressshipping: _this.selectedBPaddressshipping,
                                                        special_order_add_edit: _this.special_order_add_edit,
                                                        passTempPrimaryCustomer: _this.temp_selected_primary_customer,
                                                        passIsAdvancePayment: true
                                                    }
                                                };
                                                _this.commonfun.loadingDismiss();
                                                _this.router.navigate(['neworder'], navigationExtras);
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.commonfun.loadingDismiss();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //#region onCancel()
    AddeditproductPage.prototype.onCancel = function () {
        this.Resetpage();
        this.router.navigate(['neworder']);
    };
    //#endregion
    AddeditproductPage.prototype.removeProduct = function (post) {
        try {
            var index = this.tempcartproduct.indexOf(post);
            var result = this.tempcartproduct.filter(function (item) { return item.MainProductid != post.MainProductid; });
            this.tempcartproduct = result;
            this.iscartempty();
            this.calculateTotalCartAmount();
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    AddeditproductPage.prototype.addproduct = function () {
        var _this = this;
        try {
            if (this.tempcartproduct == undefined || this.tempcartproduct == null) {
                this.tempcartproduct = this.selectedddlproductany;
            }
            else if (this.tempcartproduct.length >= 0) {
                for (var c = 0; c < this.selectedddlproductany.length; c++) {
                    var sameprod = this.tempcartproduct.find(function (e) { return e.MainProductid === _this.selectedddlproductany[c].MainProductid; });
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
    };
    //#region getproductdetail(qty:string)
    AddeditproductPage.prototype.getproductdetail = function (qty, saveoradd) {
        var _this = this;
        try {
            this.commonfun.loadingPresent();
            this.addeditproductservice.getproductdetail(this.activityid, this.cust_id, this.product_id, qty, "", this.order_type, this.selectedBPaddressshipping, this.selectedBPaddressbilling, this.special_order_add_edit, this.temp_is_advance_payment, 0).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                if (data != null) {
                    _this.productdetailresponse = data;
                    //  console.log("Product DATA",data);
                    _this.selectedddlproductany = data;
                    _this.selectedddlproductany = _this.selectedddlproductany.reverse();
                    _this.addproduct();
                    if (saveoradd == "save") {
                        var navigationExtras = {
                            state: {
                                selectedddlproduct: _this.tempcartproduct
                            }
                        };
                        _this.router.navigate(['neworder'], navigationExtras);
                    }
                    else {
                        _this.form.reset();
                        _this.shipperqty = "";
                        _this.minorderqty = "";
                    }
                }
                else {
                    //  this.commonfun.loadingDismiss();
                    _this.commonfun.presentAlert("Message", "Error!", "No product found.");
                }
            }, function (error) {
                _this.commonfun.loadingDismiss();
                //  this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
                _this.commonfun.presentAlert("Message", "Error!", error.error.text);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
        }
    };
    //#endregion getproductdetail(qty:string)
    //#region onchangeproductselect()
    AddeditproductPage.prototype.onchangeproductselect = function (event) {
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
    };
    //#endregion onchangeproductselect()
    AddeditproductPage.prototype.getqty = function (product_id, isedit) {
        if (this.tempcartproduct != undefined) {
            var result = this.tempcartproduct.filter(function (item) { return item.product_id == product_id && item.MainProductid == product_id; });
            if (result.length > 0) {
                this.form.controls["Quantity"].setValue(result[0].MainProductQty);
                if (isedit == "N")
                    this.commonfun.presentAlert("Message", "Alert", "This product is already added with " + result[0].MainProductQty + " quantity.");
            }
        }
        this.iscartempty();
    };
    AddeditproductPage.prototype.oneditProduct = function (post) {
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
    };
    AddeditproductPage.prototype.onEditCartProduct = function (editProduct) {
        try {
            this.onShowProductListModel(true, editProduct);
        }
        catch (error) {
            console.log(error);
        }
    };
    //#region productsearchChange
    AddeditproductPage.prototype.productsearchChange = function (event) {
        this.prodsearchtextcount++;
        var custsearchtext = event.text;
        if (custsearchtext.length % 3 == 0) {
            this.prodsearchtextcount = 0;
            this.bindproduct(custsearchtext);
        }
    };
    //#endregion
    AddeditproductPage.prototype.toggle = function (varr) {
    };
    AddeditproductPage.prototype.Resetpage = function () {
        this.form.reset();
        this.shipperqty = "";
        this.minorderqty = "";
        this.tempcartproduct = [];
        this.selectedAddEditFilter = [];
        this.totalCartAmount = 0;
        this.totalFilterApplied = 0;
        this.iscartempty();
        this.router.navigateByUrl('/addeditproduct');
    };
    AddeditproductPage.prototype.onClose = function (event) {
        event.component.searchText = "";
    };
    //#region bindproduct(strsearch:string)  
    AddeditproductPage.prototype.bindproduct = function (strsearch) {
        var _this = this;
        try {
            if (strsearch != "") {
                //console.log("PRavin",this.cust_id,strsearch,this.selectedBPaddressbilling,this.selectedBPaddressshipping,this.order_type);
                //  this.addeditproductservice.getproduct(strsearch,this.activityid,this.Isdruglicence).subscribe(data=>{
                this.addeditproductservice.getproductapi(this.cust_id, strsearch, this.selectedBPaddressbilling, this.selectedBPaddressshipping, this.order_type).subscribe(function (data) {
                    //    const response= data['response'];
                    var response = data;
                    _this.ddlproduct = response;
                    //  console.log("Product Data",response);
                    //shipperqty
                    // this.commonfun.loadingDismiss();
                }, function (error) {
                    //this.commonfun.loadingDismiss();
                    _this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
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
    };
    AddeditproductPage.prototype.onShowFilterModel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, error_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.modalController.create({
                                component: _product_filter_product_filter_page__WEBPACK_IMPORTED_MODULE_11__["ProductFilterPage"],
                                cssClass: 'my-custom-filter-class',
                                backdropDismiss: false,
                                componentProps: { selectedPreviousFilter: this.selectedAddEditFilter, business_partner: this.tempSelectedBusinessPartner,
                                    is_advance_payment_filter: this.temp_is_advance_payment }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            //console.log("Filter Model Data",data.data);
                            _this.selectedAddEditFilter = data.data;
                            if (!!data.data[0] && !!data.data[0].catvalues) {
                                _this.totalFilterApplied = 0;
                                _this.selectedAddEditFilter.forEach(function (ele) {
                                    _this.totalFilterApplied = _this.totalFilterApplied + ele.catvalues.length;
                                });
                                _this.onShowProductListModel(false);
                            }
                            else {
                                _this.totalFilterApplied = 0;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        console.log("Add Edit Page", error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddeditproductPage.prototype.onShowProductListModel = function (edit, product) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, error_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.modalController.create({
                                component: _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_1__["ProductListPage"],
                                cssClass: 'my-custom-class',
                                backdropDismiss: false,
                                componentProps: { editMode: edit, productToBeEdit: product, activity_id: this.activityid, cust_id: this.cust_id, bpBillingAddress: this.selectedBPaddressbilling,
                                    bpShippingAddress: this.selectedBPaddressshipping, orderType: this.order_type,
                                    tempProductSelectedOn: this.tempcartproduct, selectedFilter: this.selectedAddEditFilter, special_order_add_edit_param: this.special_order_add_edit, issplorderonfreeqty: this.issplorderonfreeqty }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (data) {
                            //  console.log("Product List Model Data",data);
                            if (!!data.data) {
                                _this.tempcartproduct = data.data;
                                _this.calculateTotalCartAmount();
                                _this.iscartempty();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_3 = _a.sent();
                        console.log("Add Edit Page", error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddeditproductPage.prototype.getMoreProduct = function (event) {
        try {
        }
        catch (error) {
            console.log(error);
        }
    };
    AddeditproductPage.prototype.bindFilterProductFromApi = function (strsearch, filter) {
        var _this = this;
        try {
            this.addeditproductservice.getFilterProductService(this.cust_id, strsearch, this.selectedBPaddressbilling, this.selectedBPaddressshipping, this.order_type, this.selectedAddEditFilter).subscribe(function (data) {
                var response = data;
                _this.ddlproduct = response;
                //  console.log("Product Data",response);
            }, function (error) {
                _this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    AddeditproductPage.prototype.clearFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert_2, error_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Confirm!',
                                message: 'Do you want to clear all the filter?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                            //  console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Okay',
                                        handler: function () {
                                            //  console.log('Confirm Okay');
                                            _this.selectedAddEditFilter = [];
                                            _this.totalFilterApplied = 0;
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddeditproductPage.prototype.calculateTotalCartAmount = function (tempCart) {
        var _this = this;
        try {
            if (!!this.tempcartproduct) {
                this.totalCartAmount = 0;
                this.tempcartproduct.forEach(function (ele) {
                    _this.totalCartAmount = _this.totalCartAmount + Number(ele.TotalAmount);
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    AddeditproductPage.ctorParameters = function () { return [
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
    ]; };
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
    return AddeditproductPage;
}());



/***/ })

}]);
//# sourceMappingURL=addeditproduct-addeditproduct-module-es5.js.map