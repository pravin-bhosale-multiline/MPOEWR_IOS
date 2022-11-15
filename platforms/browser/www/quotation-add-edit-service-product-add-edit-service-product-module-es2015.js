(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-add-edit-service-product-add-edit-service-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/quotation/add-edit-service-product/add-edit-service-product.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quotation/add-edit-service-product/add-edit-service-product.page.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Add Serial No</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"addEditServiceProductForm\" (ngSubmit)=\"onSaveCart()\">\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Serial No</ion-label>\n              <ionic-selectable placeholder=\"Select Serial No\" [searchDebounce]=\"1000\"\n              [formControl]=\"addEditServiceProductForm.controls['serialNoCtrl']\"\n              [items]=\"serialNoList\" \n              itemValueField=\"m_attributesetinstance_id\" \n              itemTextField=\"serialno\" \n              [canSearch]=\"true\"\n              [shouldStoreItemValue]=\"false\"\n              (onChange)=\"onSerialNoChange($event)\"\n              (onClose)=\"onSerialNoClose($event)\"\n              (onSearch)=\"onSerialNoSearch($event)\">\n              </ionic-selectable>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n            <ion-label position=\"floating\">Quantity</ion-label>\n            <ion-input type=\"number\" [formControl]=\"addEditServiceProductForm.controls['quantityCtrl']\"></ion-input>       \n          </ion-item>\n        </ion-row>\n        <ion-row>\n          <ion-item float-right lines=\"none\">\n            <ion-button color=\"primary\" text-center [disabled]=\"!addEditServiceProductForm.valid\" (click)=\"addToCart()\">Add to cart</ion-button>\n            <ion-button color=\"primary\" text-center [disabled]=\"!btnSaveDisabled\" (click)=\"onSaveCart()\">Save</ion-button>\n          </ion-item>\n        </ion-row>\n        </ion-grid>\n    </ion-card-content>\n  </ion-card>\n   \n   <ion-card>\n    <ion-card-header>\n      <ion-item color=\"medium\" lines=\"none\">\n        <ion-label>Serial No</ion-label>\n        <ion-icon slot=\"start\"  name=\"cart\">\n        </ion-icon>\n      </ion-item>\n    </ion-card-header>\n      <ion-card-content>\n        <ion-item *ngFor=\"let item of tempCartProduct; index as i\">\n          <ion-icon name=\"trash\" (click)=\"removeProduct(item)\" slot=\"end\"></ion-icon>\n          <ion-label>{{item.serialno}}</ion-label>\n        </ion-item>\n      </ion-card-content>\n   </ion-card>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/quotation/add-edit-service-product/add-edit-service-product.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/quotation/add-edit-service-product/add-edit-service-product.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddEditServiceProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditServiceProductPageModule", function() { return AddEditServiceProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_edit_service_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-service-product.page */ "./src/app/quotation/add-edit-service-product/add-edit-service-product.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/pipes/pipes.module */ "./src/app/common/pipes/pipes.module.ts");









const routes = [
    {
        path: '',
        component: _add_edit_service_product_page__WEBPACK_IMPORTED_MODULE_6__["AddEditServiceProductPage"]
    }
];
let AddEditServiceProductPageModule = class AddEditServiceProductPageModule {
};
AddEditServiceProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], src_app_common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_edit_service_product_page__WEBPACK_IMPORTED_MODULE_6__["AddEditServiceProductPage"]]
    })
], AddEditServiceProductPageModule);



/***/ }),

/***/ "./src/app/quotation/add-edit-service-product/add-edit-service-product.page.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/quotation/add-edit-service-product/add-edit-service-product.page.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1b3RhdGlvbi9hZGQtZWRpdC1zZXJ2aWNlLXByb2R1Y3QvYWRkLWVkaXQtc2VydmljZS1wcm9kdWN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/quotation/add-edit-service-product/add-edit-service-product.page.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/quotation/add-edit-service-product/add-edit-service-product.page.ts ***!
  \*************************************************************************************/
/*! exports provided: AddEditServiceProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditServiceProductPage", function() { return AddEditServiceProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _customer_quotation_customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../customer-quotation/customer-quotation.service */ "./src/app/quotation/customer-quotation/customer-quotation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");







let AddEditServiceProductPage = class AddEditServiceProductPage {
    constructor(formBuilder, router, route, commonFunction, customerQuotationService, loginService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.commonFunction = commonFunction;
        this.customerQuotationService = customerQuotationService;
        this.loginService = loginService;
        this.TAG = "Add Edit Service Product Page";
        this.isCardCollapse = 1;
        this.prodSearchTextCount = 0;
        this.tempCartProduct = [];
        this.btnSaveDisabled = false;
    }
    ngOnInit() {
        this.addEditServiceProductForm = this.formBuilder.group({
            serialNoCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            quantityCtrl: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ionViewWillEnter() {
        try {
            //  console.log(this.TAG,"ionViewWillEnter"); 
            this.route.queryParams.subscribe((data) => {
                if (!!data["quotation_data"] && data["quotation_data"].length > 0) {
                    this.selectedQuotationData = JSON.parse(data["quotation_data"]);
                    //  console.log(this.TAG,JSON.parse(data["quotation_data"]));
                    this.selectedSerialNumberProductListQuotation = JSON.parse(data["selectedSerialNumberProductList"]);
                    this.tempCartProduct = this.selectedSerialNumberProductListQuotation;
                    if (!!this.selectedQuotationData) {
                        if (this.selectedQuotationData.service_product_id.id) {
                            this.customerQuotationService.getSerialNoProductList(this.selectedQuotationData.service_product_id.id, "").subscribe(tempSerialNumberLess10 => {
                                //  console.log(this.TAG,tempSerialNumberLess10);
                                if (!!tempSerialNumberLess10) {
                                    // this.serialNoList = tempSerialNumberLess10;
                                    if (tempSerialNumberLess10.length > this.loginService.minlistcount) {
                                        this.tempSerialNumberLess10 = [];
                                    }
                                    else {
                                        setTimeout(() => {
                                            this.tempSerialNumberLess10 = tempSerialNumberLess10;
                                            if (this.tempSerialNumberLess10.length == 1) {
                                                this.addEditServiceProductForm.controls["serialNoCtrl"].setValue(this.tempSerialNumberLess10[0]);
                                                this.selectedSerialNo = this.serialNoList[0];
                                            }
                                        }, 100);
                                    }
                                }
                            });
                        }
                    }
                    if (!!this.tempCartProduct) {
                        this.btnSaveDisabled = true;
                    }
                    //  console.log(this.TAG,this.selectedSerialNumberProductListQuotation);
                }
            });
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onSerialNoClose(event) {
        try {
            event.component.searchText = "";
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onSerialNoChange(event) {
        try {
            if (event.value != undefined) {
                //  console.log(this.TAG,event.value);
                // this.tempCartProduct = event.value;
                //this.tempCartProduct.push(event.value);
                this.selectedSerialNo = event.value;
                this.addEditServiceProductForm.controls['quantityCtrl'].setValue(1);
                //  console.log(this.TAG,"Array Of Product",this.tempCartProduct);
                event.component._searchText = "";
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onSerialNoSearch(event) {
        try {
            this.prodSearchTextCount++;
            var custsearchtext = event.text;
            if (custsearchtext.length >= 3) {
                this.prodSearchTextCount = 0;
                this.bindSerialNoProduct(custsearchtext);
            }
            else {
                this.serialNoList = this.tempSerialNumberLess10;
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    bindSerialNoProduct(strsearch) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (strsearch != "") {
                    this.customerQuotationService.getSerialNoProductList(this.selectedQuotationData.service_product_id.id, strsearch).subscribe(response => {
                        //  console.log(this.TAG,response);
                        this.serialNoList = response;
                    });
                }
                else {
                    this.serialNoList = this.tempSerialNumberLess10;
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    removeProduct(deletedSerial) {
        try {
            const result = this.tempCartProduct.filter(item => item.m_attributesetinstance_id != deletedSerial.m_attributesetinstance_id);
            this.tempCartProduct = result;
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onSaveCart() {
        try {
            if (this.tempCartProduct != null && this.tempCartProduct != undefined) {
                let navigationExtras = {
                    queryParams: {
                        cartList: JSON.stringify(this.tempCartProduct),
                        selectedQuotationData: JSON.stringify(this.selectedQuotationData)
                    }
                };
                this.router.navigate(['customer-quotation'], navigationExtras);
            }
            else {
                this.commonFunction.presentAlert("Add Product", "Message!", "Your Cart Is Empty");
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    addToCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //this.tempCartProduct.push(this.selectedSerialNo);
                if (!!this.tempCartProduct) {
                    const result = this.tempCartProduct.filter(item => item.m_attributesetinstance_id == this.selectedSerialNo.m_attributesetinstance_id);
                    if (result.length > 0) {
                        this.commonFunction.presentAlert("Add Product", "Validation", "This product is already added with 1 quantity.");
                        this.addEditServiceProductForm.controls['serialNoCtrl'].reset();
                    }
                    else {
                        const productDetailResponse = yield this.customerQuotationService.getSerialNoProductDetail(this.selectedQuotationData.selectedBusinessPartnerKey.id, this.selectedQuotationData.service_product_id.id, this.selectedQuotationData.bp_shiping_add_id.id, this.selectedQuotationData.bp_billing_add_id.id).toPromise();
                        //  console.log(this.TAG,productDetailResponse);
                        let tempBuild = {
                            "m_attributesetinstance_id": this.selectedSerialNo.m_attributesetinstance_id,
                            "serialno": this.selectedSerialNo.serialno ? this.selectedSerialNo.serialno : "",
                            "taxname": productDetailResponse.taxname ? productDetailResponse.taxname : "",
                            "taxrate": productDetailResponse.taxrate ? productDetailResponse.taxrate : "",
                            "taxid": productDetailResponse.taxid ? productDetailResponse.taxid : "",
                            "totgrossamt": productDetailResponse.totgrossamt ? productDetailResponse.totgrossamt : "",
                            "netamt": productDetailResponse.newamt ? productDetailResponse.newamt : "",
                            "qty": "1",
                            "uomname": productDetailResponse.uomname ? productDetailResponse.uomname : "",
                            "rate": productDetailResponse.rate ? productDetailResponse.rate : "",
                            "c_uom_id": productDetailResponse.c_uom_id ? productDetailResponse.c_uom_id : "",
                        };
                        this.tempCartProduct.push(tempBuild);
                        this.selectedSerialNo = "";
                        this.addEditServiceProductForm.controls["serialNoCtrl"].setValue("");
                        this.addEditServiceProductForm.controls['quantityCtrl'].setValue("");
                        this.btnSaveDisabled = true;
                        //  console.log(this.TAG,"ADDED ARRAY",this.tempCartProduct);
                    }
                }
            }
            catch (error) {
                this.commonFunction.presentAlert("Add Product", error.status, error.error);
                //  console.log(this.TAG,error);
            }
        });
    }
};
AddEditServiceProductPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
    { type: _customer_quotation_customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__["CustomerQuotationService"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] }
];
AddEditServiceProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-edit-service-product',
        template: __webpack_require__(/*! raw-loader!./add-edit-service-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/quotation/add-edit-service-product/add-edit-service-product.page.html"),
        styles: [__webpack_require__(/*! ./add-edit-service-product.page.scss */ "./src/app/quotation/add-edit-service-product/add-edit-service-product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"],
        _customer_quotation_customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__["CustomerQuotationService"], src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"]])
], AddEditServiceProductPage);



/***/ })

}]);
//# sourceMappingURL=quotation-add-edit-service-product-add-edit-service-product-module-es2015.js.map