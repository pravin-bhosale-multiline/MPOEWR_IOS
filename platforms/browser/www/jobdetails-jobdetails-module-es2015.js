(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobdetails-jobdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/jobdetails/jobdetails.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jobdetails/jobdetails.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"job\"></ion-back-button>\n          </ion-buttons>\n      <ion-title>Job Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <div class=\"ion-padding ion-text-center\">\n        <div *ngIf=\"message\" style=\"margin: 10px 0; padding:20px\">{{message}}</div>\n        <button style=\"margin-bottom: 40px; padding: 20px; width: 100%; color: #ffffff;\" \n        [ngStyle]=\"{'background': status == 'disabled' ? 'darkred' : 'darkgreen'}\" \n        (click)=\"status == 'disabled' ? enable() : disable()\">SCAN READER IS {{status == 'disabled' ? 'DISABLED' : 'ENABLED' }}</button>\n       </div>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item >\n                <ion-label position=\"stacked\">Product Movement Type</ion-label>\n              <ion-input autofocus=\"true\" readonly type=\"text\" [(ngModel)]=\"movementtye\" tabindex=\"1\" #tbpmt (keydown)=\"moveFocus(tbpmt,tbbss)\" ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            <ion-item>\n                <ion-label position=\"stacked\">Batch No / Serial No / SKU Code</ion-label>\n              <ion-input  type=\"text\" [(ngModel)]=\"scanbatchproductsku\" id=\"batchid\" tabindex=\"2\" #tbbss (ionFocus)=\"onFocusBatch(tbbss,C)\" (ionBlur)=\"moveFocus(tbbss,C)\" ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            <ion-item>\n              <ion-label color=\"primary\" position=\"stacked\">SKU Code</ion-label>\n              <ion-select #C [ngModel]=\"skucode\" (ionChange)=\"onChangeProduct(C.value,tbqty)\" multiple=\"false\" placeholder=\"Select Product\">\n                <ion-select-option *ngFor=\"let product of productlist\" [value]=\"product\">{{product.mmstMainprodcode}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            <ion-item>\n                <ion-label position=\"stacked\">SKU Name</ion-label>\n              <ion-input readonly type=\"text\" [(ngModel)]=\"skuname\" placeholder=\"Sku Name\" #tbsn  ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col >\n              <ion-item>\n                  <ion-label  position=\"stacked\">Qty*</ion-label>\n                <ion-input  type=\"number\" clearInput [(ngModel)]=\"qty\" placeholder=\"\" tabindex=\"3\" #tbqty ></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"isfrombinview\">\n              <ion-col >\n                <ion-item>\n                    <ion-label  position=\"stacked\">Bin No*</ion-label>\n                  <!-- <ion-input  type=\"text\" [(ngModel)]=\"binno\" placeholder=\"Bin No.\" tabindex=\"4\" #tbbn (keydown)=\"moveFocus(tbbn,tbtbn)\" ></ion-input> -->\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"istobinview\">\n                <ion-col >\n                  <ion-item >\n                      <ion-label value=\"Readonly\" position=\"stacked\">To Bin No*</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"tobinno\" placeholder=\"To Bin No.\" tabindex=\"5\" #tbtbn (keydown)=\"moveFocus(tbtbn,tbtbn)\"  ></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-text-right\">\n                <ion-col size=\"4\">\n                    <ion-button (click)=\"onNext(tbbss)\">\n                        Next\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-button (click)=\"onComplete()\">\n                        Complete\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button (click)=\"onCancel()\">\n                      Cancel\n                  </ion-button>\n              </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <ion-text color=\"danger\">{{txterror}}</ion-text>\n                </ion-col>\n              </ion-row>\n      </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/jobdetails/jobdetails.module.ts":
/*!*************************************************!*\
  !*** ./src/app/jobdetails/jobdetails.module.ts ***!
  \*************************************************/
/*! exports provided: JobdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdetailsPageModule", function() { return JobdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobdetails.page */ "./src/app/jobdetails/jobdetails.page.ts");







const routes = [
    {
        path: '',
        component: _jobdetails_page__WEBPACK_IMPORTED_MODULE_6__["JobdetailsPage"]
    }
];
let JobdetailsPageModule = class JobdetailsPageModule {
};
JobdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_jobdetails_page__WEBPACK_IMPORTED_MODULE_6__["JobdetailsPage"]]
    })
], JobdetailsPageModule);



/***/ }),

/***/ "./src/app/jobdetails/jobdetails.page.scss":
/*!*************************************************!*\
  !*** ./src/app/jobdetails/jobdetails.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYmRldGFpbHMvam9iZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/jobdetails/jobdetails.page.ts":
/*!***********************************************!*\
  !*** ./src/app/jobdetails/jobdetails.page.ts ***!
  \***********************************************/
/*! exports provided: JobdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobdetailsPage", function() { return JobdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let JobdetailsPage = class JobdetailsPage {
    constructor(route, loginservc, loadingController, router) {
        this.route = route;
        this.loginservc = loginservc;
        this.loadingController = loadingController;
        this.router = router;
        this.window = window;
        this.message = null;
        this.status = 'Initialization...';
    }
    ngOnInit() {
        this.listen();
        this.route.params.subscribe(params => {
            this.jobid = params['jobid'];
            this.loginservc.getjob(this.jobid).subscribe(data => {
                const response = data['response'];
                this.job = response['data'];
                if (this.job[0].mwmsJobtype$_identifier === 'GRN') {
                    this.istobinview = true;
                    this.isfrombinview = false;
                }
                else if (this.job[0].mwmsJobtype$_identifier === 'Physical Stock') {
                    this.isfrombinview = true;
                    this.istobinview = true;
                }
                else {
                    this.isfrombinview = true;
                    this.istobinview = false;
                }
            });
        });
        this.movementtye = 'Product';
        this.qty = '1';
    }
    onFocusBatch(currentelement, nextElement) {
        this.activeelement = currentelement;
        this.nextelement = nextElement;
    }
    moveFocus(currentelement, nextElement) {
        this.activeelement = currentelement;
        this.nextelement = nextElement;
        if (this.activeelement.el.id === 'batchid') {
            this.productlist = [];
            this.loadingController.create({
                duration: 7000,
                spinner: 'circles',
                message: 'Please Wait...'
            }).then((res) => {
                res.present();
            });
            this.loginservc.getProductlistFromBatch(this.activeelement.value).subscribe(data => {
                this.productlist = data['data'];
                this.skucode = this.productlist[0].mmstMainprodcode;
                this.loadingController.dismiss();
            });
        }
        else {
            this.nextelement.setFocus();
        }
    }
    onNext(nextElement) {
        if (this.scanbatchproductsku === undefined) {
            this.txterror = 'Please Scan Batch.';
        }
        else if (this.skucode === undefined) {
            this.txterror = 'Please Select SKU';
        }
        else if (this.tobinno === undefined) {
            this.txterror = 'Please Enter Bin No.';
        }
        else {
            this.loginservc.insertJobDetails(this.jobid, this.movementtye, this.scanbatchproductsku, this.selectedproduct.id, this.qty, this.binno, this.tobinno, this.selectedproduct.attributeSetValue, 'N').subscribe(data => {
                this.response = data['response'];
                if (this.response.messageType !== undefined) {
                    if (this.response.messageType === 'success') {
                        this.scanbatchproductsku = '';
                        this.productlist = [];
                        this.qty = '1';
                        this.txterror = 'Success!';
                        nextElement.setFocus();
                    }
                }
                else {
                    this.txterror = this.response.error.message;
                }
            }, error => {
                this.txterror = error.message;
            });
        }
    }
    onComplete() {
        this.loginservc.insertJobDetails(this.jobid, this.movementtye, this.scanbatchproductsku, this.selectedproduct.id, this.qty, this.binno, this.tobinno, this.selectedproduct.attributeSetValue, 'Y').subscribe(data => {
            this.response = data['response'];
            if (this.response.messageType !== undefined) {
                if (this.response.messageType === 'success') {
                    this.scanbatchproductsku = '';
                    this.qty = '1';
                    this.txterror = 'Success!';
                    this.router.navigateByUrl('/joblist');
                }
            }
            else {
                this.txterror = this.response.error.message;
            }
        }, error => {
            this.txterror = error.message;
        });
    }
    onCancel() {
        this.router.navigateByUrl('/joblist');
    }
    onChangeProduct(product, qtyelement) {
        this.selectedproduct = product;
        this.skuname = product.mmstMainprodname;
        qtyelement.setFocus();
    }
    listen() {
        this.status = `enabled`;
        this.window.plugins.honeywell.listen(data => {
            this.activeelement.value = `${data}`;
            if (this.activeelement.el.id === 'batchid') {
                this.productlist = [];
                this.loadingController.create({
                    duration: 7000,
                    spinner: 'circles',
                    message: 'Please Wait...'
                }).then((res) => {
                    res.present();
                });
                this.loginservc.getProductlistFromBatch(this.activeelement.value).subscribe(data => {
                    this.productlist = data['data'];
                    this.skucode = this.productlist[0].mmstMainprodcode;
                    this.loadingController.dismiss();
                }, error => {
                    this.txterror = error.message;
                });
            }
            else {
                this.activeelement = null;
                this.nextelement.setFocus();
            }
        }, error => {
            this.activeelement.setFocus();
        });
    }
    disable() {
        this.status = `disabled`;
        this.window.plugins.honeywell.release(success => {
            this.message = `DISABLE_SUCCESS: ${success}`;
        }, error => {
            this.message = `DISABLE_ERROR: ${error}`;
        });
    }
    enable() {
        this.status = 'enabled';
        this.window.plugins.honeywell.claim(success => {
            this.message = `ENABLE_SUCCESS: ${success}`;
            this.listen();
        }, error => {
            this.message = `ENABLE_ERROR ${error}`;
        });
    }
};
JobdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
JobdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jobdetails',
        template: __webpack_require__(/*! raw-loader!./jobdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/jobdetails/jobdetails.page.html"),
        styles: [__webpack_require__(/*! ./jobdetails.page.scss */ "./src/app/jobdetails/jobdetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], JobdetailsPage);



/***/ })

}]);
//# sourceMappingURL=jobdetails-jobdetails-module-es2015.js.map