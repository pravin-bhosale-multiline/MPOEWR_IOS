(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addeditproduct-addeditproduct-module~product-filter-product-filter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/product-filter/product-filter.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-filter/product-filter.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Product Filter</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">Close</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clearFilter()\">Clear Filters</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"no-scroll\">\n  <ion-grid class=\"box\" no-padding>\n    <ion-row class=\"row-custom\">\n      <ion-col size=\"4\" class=\"back-color custom-ion-col\">\n        <ion-content class=\"back-color custom-content\">\n          <section class=\"back-color\">\n            <ion-list *ngFor=\"let filterItem of sideMenuList;let i = index \" class=\"back-color\">\n              <ion-item lines=\"none\" class=\"list-item\" (click)=\"menuItemClick(filterItem,i)\" [ngClass]=\"{'custom-activated': (active == i),'ion-item-custom':(active != i)}\">\n                <ion-label color=\"primary\">\n                  {{ filterItem.catname }}\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </section>\n        </ion-content>\n     </ion-col>\n     <ion-col size=\"8\">\n      <ion-content *ngIf=\"isDataAvailable\">\n        <ion-searchbar animated [debounce]=\"1000\" showCancelButton=\"focus\" [(ngModel)]=\"searchText\"></ion-searchbar>\n        <ion-list *ngFor=\"let subData of sideMenuList[selectedMainIndex].catvalues | filter:searchText;let i=index\">\n          <ion-item lines=\"none\" text-wrap>\n            <ion-label>{{subData.subcatname}}</ion-label>\n            <ion-checkbox slot=\"start\"  checked=\"false\" value=\"subData.sub_name\" (click)=\"chkSubSelectFilter(subData,subData.checked,$event)\" [(ngModel)]=\"subData.checked\"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n    </ion-content>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"footer-back-color\">\n  <ion-button  no-margin (click)=\"applyFilter()\"  color=\"primary\"  size=\"large\" expand=\"full\" fill=\"outline\" class=\"footer-btn-color\">\n    <ion-label style=\"color: white;\">\n      Apply\n    </ion-label>\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/product-filter/product-filter.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/product-filter/product-filter.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  height: 100% !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n}\n\n.list-item {\n  margin-top: 15px !important;\n}\n\n.row-custom {\n  height: 100% !important;\n}\n\n.no-scroll {\n  --overflow: hidden;\n}\n\n.footer-back-color {\n  background-color: white;\n}\n\n.footer-btn-color {\n  background-color: #F39E20 !important;\n}\n\n.custom-activated {\n  --ion-background-color: white !important;\n}\n\n.ion-item-custom {\n  --ion-background-color:#eeeeee !important;\n  padding: 0px !important;\n}\n\n.back-color {\n  background-color: #eeeeee !important;\n}\n\n.custom-ion-col {\n  padding-top: 40px !important;\n  background-color: #eeeeee !important;\n  padding-right: 0px !important;\n  padding-left: 0px !important;\n}\n\n.custom-content {\n  --background: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZmlsdGVyL3Byb2R1Y3QtZmlsdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksb0NBQUE7QUNHSjs7QUREQTtFQUNJLHdDQUFBO0FDSUo7O0FERkE7RUFDSSx5Q0FBQTtFQUNBLHVCQUFBO0FDS0o7O0FESEE7RUFDSSxvQ0FBQTtBQ01KOztBREhBO0VBQ0ksNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUNNSjs7QURKQTtFQUNHLDZCQUFBO0FDT0giLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWZpbHRlci9wcm9kdWN0LWZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ib3h7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IFxuICAgIGRpc3BsYXk6IGZsZXg7IFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgXG59IFxuLmxpc3QtaXRlbXtcbiAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG4ucm93LWN1c3RvbXtcbiAgICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubm8tc2Nyb2xsIHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG4uZm9vdGVyLWJhY2stY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZm9vdGVyLWJ0bi1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM5RTIwICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWFjdGl2YXRlZCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uaW9uLWl0ZW0tY3VzdG9te1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLmJhY2stY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWlvbi1jb2x7XG4gICAgcGFkZGluZy10b3A6NDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250ZW50IHtcbiAgIC0tYmFja2dyb3VuZDogYXV0byAhaW1wb3J0YW50O1xufVxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtaW4taGVpZ2h0OiA3NjhweCl7XG4vLyAgICAubWFpbi1zaWRle1xuLy8gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4vLyAgICB9XG4vLyAgIH1cbiIsIi5ib3gge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG5cbi5saXN0LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb3ctY3VzdG9tIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1zY3JvbGwge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5mb290ZXItYmFjay1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyLWJ0bi1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1hY3RpdmF0ZWQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWl0ZW0tY3VzdG9tIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmFjay1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pb24tY29sIHtcbiAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/product-filter/product-filter.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/product-filter/product-filter.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterPage", function() { return ProductFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-filter.service */ "./src/app/product-filter/product-filter.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");





let ProductFilterPage = class ProductFilterPage {
    constructor(modalCtrl, productFilterService, commonFunction, alertController, navParams) {
        this.modalCtrl = modalCtrl;
        this.productFilterService = productFilterService;
        this.commonFunction = commonFunction;
        this.alertController = alertController;
        this.TAG = "Product Filter Page";
        this.active = 0;
        this.selectedMainIndex = 0;
        this.applyButton = false;
        this.isDataAvailable = false;
        console.log(this.TAG, "Prev Filter Data", this.selectedFilter);
        this.tempSelectedFilter = navParams.get('selectedPreviousFilter');
        this.business_partner = navParams.get('business_partner');
        //console.log(this.TAG, "BP",this.business_partner);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(this.TAG,"ionViewWillEnter");
            this.commonFunction.loadingPresent();
            this.sideMenuList = yield this.productFilterService.getSubFilterList(this.business_partner).toPromise();
            // if(!!this.selectedFilter){
            //   this.sideMenuList = this.sideMenuList.concat(this.selectedFilter);
            //   console.log(this.TAG,"Side Menu list After Merge",this.selectedFilter);
            // }
            if (!!this.tempSelectedFilter) {
                // this.sideMenuList = [ ...this.sideMenuList, ...this.selectedFilter];
                // console.log(this.TAG,"Side Menu list After Merge",this.sideMenuList);
                // this.tempSelectedFilter = this.selectedFilter;
                this.tempSelectedFilter.forEach((element, index) => {
                    this.sideMenuList.forEach((side_element, sub_menu_main_index) => {
                        if (element.catid == side_element.catid) {
                            element.catvalues.forEach(cat_ele => {
                                side_element.catvalues.forEach((cat_sub_element, cat_index) => {
                                    if (cat_ele.subcatid == cat_sub_element.subcatid) {
                                        this.sideMenuList[sub_menu_main_index].catvalues[cat_index].checked = true;
                                        console.log("Find");
                                    }
                                });
                            });
                        }
                    });
                });
                if (!!this.tempSelectedFilter && this.tempSelectedFilter.length > 0) {
                    this.selectedFilter = this.tempSelectedFilter;
                    this.tempSelectedFilter = [];
                }
            }
            //  console.log(this.TAG,this.sideMenuList);
            if (!!this.sideMenuList) {
                this.selectedMainItem = this.sideMenuList[0];
                this.isDataAvailable = true;
            }
            this.commonFunction.loadingDismiss();
        });
    }
    clearFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertController.create({
                    header: 'Confirm!',
                    message: 'Would you like to clear the all filters?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: 'Okay',
                            handler: () => {
                                console.log('Confirm Okay');
                                this.selectedFilter = [];
                                this.tempSelectedFilter = [];
                                this.ionViewWillEnter();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                console.log(this.TAG, error);
            }
        });
    }
    applyFilter() {
        try {
            if (Array.isArray(this.selectedFilter) && this.selectedFilter.length) {
                this.modalCtrl.dismiss(this.selectedFilter);
            }
            else {
                this.commonFunction.presentAlert("Product Filter", "Validation", "Please select at least one filter");
            }
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    menuItemClick(selectedItem, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //console.log(this.TAG,selectedItem);
                this.selectedMainItem = selectedItem;
                this.active = index;
                this.selectedMainIndex = index;
            }
            catch (error) {
                console.log(this.TAG, error);
            }
        });
    }
    chkSubSelectFilter(subData, checked, event) {
        try {
            //console.log(this.TAG,subData);
            if (!!this.tempSelectedFilter && this.tempSelectedFilter.length > 0) {
                this.selectedFilter = this.tempSelectedFilter;
                this.tempSelectedFilter = [];
            }
            console.log(this.TAG, checked);
            if (checked == undefined || checked == null) {
                checked = true;
            }
            else {
                checked = false;
            }
            if (!!this.selectedFilter) {
                if (checked) {
                    this.applyButton = true;
                    let data = this.selectedFilter.find(ob => ob.catid === this.selectedMainItem.catid);
                    if (data === null || data === undefined) {
                        this.selectedFilter.push({ catid: this.selectedMainItem.catid, catname: this.selectedMainItem.catname, catvalues: [{ "subcatid": subData.subcatid, "subcatname": subData.subcatname, columnname: subData.columnname, "checked": true }] });
                    }
                    else {
                        let index = this.selectedFilter.findIndex(ob => ob.catid === this.selectedMainItem.catid);
                        this.selectedFilter[index].catvalues.push({ "subcatid": subData.subcatid, "subcatname": subData.subcatname, columnname: subData.columnname, "checked": true });
                    }
                }
                else {
                    let main_index = this.selectedFilter.findIndex(ob => ob.catid === this.selectedMainItem.catid);
                    this.selectedFilter[main_index].catvalues.forEach((value, index) => {
                        if (value.subcatid == subData.subcatid) {
                            //console.log("selected",this.selectedFilter[index]);
                            if (this.selectedFilter[main_index].catvalues.length == 1) {
                                this.selectedFilter.splice(main_index, 1);
                            }
                            else {
                                this.selectedFilter[main_index].catvalues.splice(index, 1);
                            }
                        }
                    });
                }
            }
            else {
                let temp = [{ catid: this.selectedMainItem.catid, catname: this.selectedMainItem.catname, catvalues: [{ "subcatid": subData.subcatid, "subcatname": subData.subcatname, columnname: subData.columnname, "checked": true }] }];
                this.selectedFilter = temp;
                this.applyButton = true;
            }
            //console.log(this.TAG,"Filter List IS Updated",this.selectedFilter);
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss(this.selectedFilter);
    }
    onFilterSearch() {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
};
ProductFilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _product_filter_service__WEBPACK_IMPORTED_MODULE_1__["ProductFilterService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
];
ProductFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-product-filter',
        template: __webpack_require__(/*! raw-loader!./product-filter.page.html */ "./node_modules/raw-loader/index.js!./src/app/product-filter/product-filter.page.html"),
        styles: [__webpack_require__(/*! ./product-filter.page.scss */ "./src/app/product-filter/product-filter.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _product_filter_service__WEBPACK_IMPORTED_MODULE_1__["ProductFilterService"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])
], ProductFilterPage);



/***/ }),

/***/ "./src/app/product-filter/product-filter.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-filter/product-filter.service.ts ***!
  \**********************************************************/
/*! exports provided: ProductFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterService", function() { return ProductFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");







let ProductFilterService = class ProductFilterService {
    constructor(genericHttpClientService, loginService, commonFunction, httpClient) {
        this.genericHttpClientService = genericHttpClientService;
        this.loginService = loginService;
        this.commonFunction = commonFunction;
        this.httpClient = httpClient;
        this.TAG = "Product Filter Service";
    }
    getSubFilterList(business_partner) {
        try {
            //return this.httpClient.get('assets/data/price.json');
            let getFilterURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.DynamicFilterAsPerActivity?' +
                this.loginService.parameter + '&user_id=' + this.loginService.userid +
                '&activityid=' + this.loginService.selectedactivity.id + '&bpartner_id=' + business_partner.id;
            console.log("Get Filter URL", getFilterURL);
            return this.genericHttpClientService.get(getFilterURL);
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
};
ProductFilterService.ctorParameters = () => [
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProductFilterService);



/***/ })

}]);
//# sourceMappingURL=default~addeditproduct-addeditproduct-module~product-filter-product-filter-module-es2015.js.map