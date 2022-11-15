(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-approval-order-approval-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order-approval/order-approval.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-approval/order-approval.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Approval\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"RefreshPage(target)\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div #target>\n  <ion-row>\n    <ion-col>\n      <ion-item lines=\"full\" [routerDirection]=\"'root'\" [routerLink]=\"['/filter']\">\n         <ion-icon name=\"funnel\" color=\"primary\"></ion-icon>\n         <ion-label>Filters {{totalFilterApplied}}</ion-label>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</div>\n  <ion-list *ngFor=\"let order of orderData\">\n    <ion-card no-padding>\n      <ion-card-header no-padding>\n        <ion-item-divider style=\"background-color:#80cbc4;\" no-padding>\n          <ion-row style=\"width:-webkit-fill-available; text-align: end\">\n            <ion-col text-left>\n              <div>{{order.tab}}</div>\n            </ion-col>\n            <!-- <ion-col>\n              <div>{{order.approved_by}}</div>\n            </ion-col> -->\n          </ion-row>\n        </ion-item-divider>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <ion-text color=\"primary\" text-left>\n              <h6>Organization</h6>\n            </ion-text>\n            <div>{{order.organization}}</div>\n          </ion-col>\n          <ion-col>\n            <ion-text color=\"primary\">\n              <h6>Document Type</h6>\n            </ion-text>\n            <div>{{order.document_type}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text color=\"primary\" text-left>\n              <h6>Business Partner</h6>\n            </ion-text>\n            <div>{{order.business_partner}}</div>\n          </ion-col>\n          <ion-col>\n            <ion-text color=\"primary\" text-left>\n              <h6>Document No.</h6>\n            </ion-text>\n            <div>{{order.document_no}}</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <div class=\"container\">\n            <div scrollY=\"true\" class=\"scroll\">\n              <div>\n                <h2>Info1: {{order.info1}}</h2>\n              </div>\n              <div *ngIf=\"order.info2\">\n                <h2>Info2: {{order.info2}}</h2>\n              </div>\n              <div *ngIf=\"order.info3\">\n                <h2>Info3: {{order.info3}}</h2>\n              </div>\n              <div *ngIf=\"order.info4\">\n                <h2>Info4: {{order.info4}}</h2>\n              </div>\n              <div *ngIf=\"order.info5\">\n                <h2>Info5: {{order.info5}}</h2>\n              </div>\n              <div *ngIf=\"order.info6\">\n                <h2>Info6: {{order.info6}}</h2>\n              </div>\n              <div *ngIf=\"order.info7\">\n                <h2>Info7: {{order.info7}}</h2>\n              </div>\n              <div *ngIf=\"order.info8\">\n                <h2>Info8: {{order.info8}}</h2>\n              </div>\n              <div *ngIf=\"order.info9\">\n                <h2>Info9: {{order.info9}}</h2>\n              </div>\n              <div *ngIf=\"order.info10\">\n                <h2>Info10:{{order.info10}}</h2>\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      \n       <ion-row>\n          <ion-col size=\"6\" size-lg=\"3\" no-padding>\n              <ion-button size=\"small\" expand=\"block\" color=\"primary\" (click)=\"rejectConfirm(order.id,order.record,order.tab_id,'D')\">Reject</ion-button>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"3\" no-padding>\n              <ion-button size=\"small\" expand=\"block\" color=\"primary\" (click)=\"saveConfirm(order.id,order.record,order.tab_id,'C')\">Incomplete</ion-button>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"3\" no-padding>\n              <ion-button size=\"small\" expand=\"block\" color=\"primary\" (click)=\"saveConfirm(order.id,order.record,order.tab_id,'A')\">Approve</ion-button>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"3\" *ngIf=\"order.show_query == 'Y'\" no-padding>\n              <ion-button size=\"small\" expand=\"block\" color=\"primary\" (click)=\"getDetails(order.id,order.record,order.tab_id)\">Details</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <section *ngIf=\"emptyCart\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src=\"./assets/new_order.svg\" style=\"padding: 20%;\">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n          <h3>You dont have any order.</h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>  \n\n  </section>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/order-approval/order-approval.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/order-approval/order-approval.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderApprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderApprovalPageModule", function() { return OrderApprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_approval_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-approval.page */ "./src/app/order-approval/order-approval.page.ts");
/* harmony import */ var _show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-approval-details-modal/show-approval-details-modal.page */ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts");









const routes = [
    {
        path: '',
        component: _order_approval_page__WEBPACK_IMPORTED_MODULE_7__["OrderApprovalPage"]
    }
];
let OrderApprovalPageModule = class OrderApprovalPageModule {
};
OrderApprovalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_approval_page__WEBPACK_IMPORTED_MODULE_7__["OrderApprovalPage"], _show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_8__["ShowApprovalDetailsModalPage"]],
        entryComponents: [_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_8__["ShowApprovalDetailsModalPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], OrderApprovalPageModule);



/***/ }),

/***/ "./src/app/order-approval/order-approval.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/order-approval/order-approval.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myFixZone {\n  height: 100px;\n}\n\n.container {\n  width: 100%;\n  padding: 10px;\n  background-color: wheat;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.container ::-webkit-scrollbar {\n  display: none;\n}\n\n.container .scroll {\n  overflow: auto;\n}\n\n.selector {\n  line-height: 1;\n  letter-spacing: 0.5px;\n  width: 100% !important;\n  max-width: 100% !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border: solid 2px #524f4f;\n  border-radius: 10px;\n  text-align: left;\n}\n\n.rotate-90 {\n  display: inline-block;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9vcmRlci1hcHByb3ZhbC9vcmRlci1hcHByb3ZhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL29yZGVyLWFwcHJvdmFsL29yZGVyLWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQUk7RUFDRSxhQUFBO0FDRU47O0FEQ0k7RUFDRSxjQUFBO0FDQ047O0FER0U7RUFFRSxjQUFBO0VBQ0EscUJBQUE7RUFFQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQ0hKOztBRE1FO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1hcHByb3ZhbC9vcmRlci1hcHByb3ZhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlGaXhab25lIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hlYXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5zY3JvbGwge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLnNlbGVjdG9yIHtcbiAgICBcbiAgICBsaW5lLWhlaWdodDogMS4wO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMnB4ICByZ2IoODIsIDc5LCA3OSk7IFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAucm90YXRlLTkwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfSIsIiNteUZpeFpvbmUge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNvbnRhaW5lciA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250YWluZXIgLnNjcm9sbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2VsZWN0b3Ige1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogc29saWQgMnB4ICM1MjRmNGY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yb3RhdGUtOTAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/order-approval/order-approval.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-approval/order-approval.page.ts ***!
  \*******************************************************/
/*! exports provided: OrderApprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderApprovalPage", function() { return OrderApprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _order_approval_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-approval-service.service */ "./src/app/order-approval/order-approval-service.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-approval-details-modal/show-approval-details-modal.page */ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts");












let OrderApprovalPage = class OrderApprovalPage {
    constructor(orderApprovalServiceService, commonfun, alertController, storage, loginauth, router, msg, modalController) {
        this.orderApprovalServiceService = orderApprovalServiceService;
        this.commonfun = commonfun;
        this.alertController = alertController;
        this.storage = storage;
        this.loginauth = loginauth;
        this.router = router;
        this.msg = msg;
        this.modalController = modalController;
        this.TAG = "OrderApprovalPage";
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["ColumnMode"];
        this.orderData = [];
        this.filterTab = [];
        this.filterOrg = [];
        this.filterDocType = [];
        this.totalFilterApplied = 0;
        this.totalSortApplied = 0;
        this.emptyCart = false;
        // console.log("Roouter Values",this.router.getCurrentNavigation().extras.state);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    createURL() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.getOrderURL = _common_Constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].DOMAIN_URL + '/openbravo' + "/ws/in.mbs.webservice.OrderApproval?" +
                    'user_id=' + this.loginauth.userid
                    + '&offset=' + this.orderApprovalServiceService.pageOffset
                    + '&activity_id=' + this.loginauth.selectedactivity.id;
                //  this.getOrderURL = Constants.DOMAIN_URL + '/openbravo'+"/ws/in.mbs.webservice.OrderApproval?" 
                //  + '&user='+'hardik.pandya'+'&password='+'pass' + '&user_id=' + 'FFF202001310332122424C1A38AB7A41'
                //  +'&offset=' + this.orderApprovalServiceService.pageOffset
                //  + '&activity_id=' + 'FFF20200217114608722C4817FB0AEB1'  ;
                this.filterTab = this.orderApprovalServiceService.filterTab;
                if (!!this.filterTab && this.filterTab.length > 0) {
                    this.getOrderURL = this.getOrderURL.concat('&tab=' + this.filterTab.toString());
                }
                this.filterOrg = this.orderApprovalServiceService.filterOrg;
                if (!!this.filterOrg && this.filterOrg.length > 0) {
                    this.getOrderURL = this.getOrderURL + '&org=' + this.filterOrg.toString();
                }
                // this.filterDocType = await this.storage.get('filterDocType');
                this.filterDocType = this.orderApprovalServiceService.filterDocType;
                if (!!this.filterDocType && this.filterDocType.length > 0) {
                    //  this.totalFilterApplied = this.totalFilterApplied + 1;
                    this.getOrderURL = this.getOrderURL + '&doc_type=' + this.filterDocType.toString();
                }
                // this.filterBusinessPartner = await this.storage.get('filterBusinessPartner');
                this.filterBusinessPartner = this.orderApprovalServiceService.filterBusinessPartner;
                if (!!this.filterBusinessPartner && this.filterBusinessPartner !== 'CLEAR') {
                    //  this.totalFilterApplied = this.totalFilterApplied + 1;
                    this.getOrderURL = this.getOrderURL + '&business=' + this.filterBusinessPartner;
                }
                this.filterStartDate = yield this.storage.get('filterStartDate');
                if (!!this.filterStartDate && this.filterStartDate !== 'CLEAR') {
                    //  this.totalSortApplied = this.totalSortApplied + 1;
                    this.getOrderURL = this.getOrderURL + '&start_date=this.filterStartDate' + '&end_date=' + this.filterEndDate;
                }
                this.filterEndDate = yield this.storage.get('filterEndDate');
            }
            catch (error) {
            }
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.Pageload();
        });
    }
    Pageload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.commonfun.loadingPresent();
            this.orderApprovalServiceService.pageOffset = 0;
            this.filterTab = this.orderApprovalServiceService.filterTab;
            if (!!this.filterTab && this.filterTab.length > 0) {
                this.totalFilterApplied = this.totalFilterApplied + 1;
            }
            //this.filterOrg = await this.storage.get('filterOrg');
            this.filterOrg = this.orderApprovalServiceService.filterOrg;
            if (!!this.filterOrg && this.filterOrg.length > 0) {
                this.totalFilterApplied = this.totalFilterApplied + 1;
            }
            // this.filterDocType = await this.storage.get('filterDocType');
            this.filterDocType = this.orderApprovalServiceService.filterDocType;
            if (!!this.filterDocType && this.filterDocType.length > 0) {
                this.totalFilterApplied = this.totalFilterApplied + 1;
            }
            // this.filterBusinessPartner = await this.storage.get('filterBusinessPartner');
            this.filterBusinessPartner = this.orderApprovalServiceService.filterBusinessPartner;
            if (!!this.filterBusinessPartner && this.filterBusinessPartner !== 'CLEAR') {
                this.totalFilterApplied = this.totalFilterApplied + 1;
            }
            this.createURL();
            this.getOrderURL = this.getOrderURL.replace(/ /g, "%20");
            this.orderData = yield (yield this.orderApprovalServiceService.getOrder(this.getOrderURL)).toPromise();
            if ((!!this.orderData && this.orderData.length > 0)) {
                this.emptyCart = true;
            }
            else {
                this.emptyCart = false;
            }
            this.commonfun.loadingDismiss();
        });
    }
    RefreshPage(el) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            el.scrollIntoView();
            this.orderApprovalServiceService.filterTab = [];
            this.orderApprovalServiceService.filterOrg = [];
            this.orderApprovalServiceService.filterDocType = [];
            this.orderApprovalServiceService.filterBusinessPartner = '';
            this.orderApprovalServiceService.filterselectedBusinessPartner = '';
            this.orderApprovalServiceService.pageOffset = 0;
            this.totalFilterApplied = 0;
            this.ionViewWillEnter();
        });
    }
    saveConfirm(id, record, tab_id, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let message;
                if (status == "C") {
                    message = "Do you really want to mark this incomplete";
                }
                else if (status == "A") {
                    message = "Do you really want to approve this order";
                }
                const alert = yield this.alertController.create({
                    header: 'Confirm!',
                    message: message,
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
                                this.save(id, record, tab_id, status, "Approve from Ionic");
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
            }
        });
    }
    getDetails(id, record, tab_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const modal = yield this.modalController.create({
                    component: _show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_11__["ShowApprovalDetailsModalPage"],
                    cssClass: 'my-custom-class',
                    componentProps: {
                        "id": id,
                        "record": record,
                        "tab_id": tab_id
                    }
                });
                return yield modal.present();
            }
            catch (error) {
            }
        });
    }
    rejectConfirm(id, record, tab_id, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let methodTAG = 'rejectConfirm';
            try {
                let alert = yield this.alertController.create({
                    header: 'Confirm!',
                    subHeader: 'Do you really want to reject this order',
                    message: '',
                    cssClass: 'my-custom-class',
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                //  console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: 'Ok',
                            handler: (data) => {
                                if (data.txtRemark != null && data.txtRemark.length > 0) {
                                    //  console.log('Confirm Okay');
                                    this.save(id, record, tab_id, status, data.txtRemark);
                                }
                                else {
                                    alert.message = '<b style="color: red;">Enter valid remark.</b>';
                                    return false;
                                }
                            }
                        }
                    ],
                    inputs: [
                        {
                            name: 'txtRemark',
                            type: 'text',
                            placeholder: 'Enter Remark',
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                //  console.log(this.TAG,methodTAG,error);
            }
        });
    }
    save(id, record, tab_id, status, remark) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonfun.loadingPresent();
                let response = yield this.orderApprovalServiceService.saveOrderStatus(id, record, tab_id, status, remark).toPromise();
                this.commonfun.loadingDismiss();
                //  console.log(this.TAG,"Pravin",response);
                if (response.res == "Success") {
                    this.orderData = this.orderData.filter((item) => item.id !== id);
                    if ((!!this.orderData && this.orderData.length > 0)) {
                        this.emptyCart = false;
                    }
                    else {
                        this.emptyCart = true;
                    }
                    this.commonfun.presentAlert("Order", "", "Your order has been updated successfully");
                }
                else {
                    this.commonfun.presentAlert("Order", "", "Some things went wrong please try again late");
                }
                // this.orderApprovalServiceService.saveOrderStatus(id,record,tab_id,status,remark).subscribe(response =>{
                //   this.commonfun.loadingDismiss();
                //   if(response.res=="Success"){
                //     this.orderData = this.orderData.filter((item) => item.id !== id);
                //     if((!!this.orderData && this.orderData.length > 0)){
                //       this.emptyCart = false;
                //     } else {
                //       this.emptyCart = true;
                //     }
                //     this.commonfun.presentAlert("Order","","Your order has been updated successfully");
                //   }
                //   else {
                //     this.commonfun.presentAlert("Order","","Some things went wrong please try again late");
                //   }
                // });
            }
            catch (error) {
                //  console.log(this.TAG,"Pravin",error);
                this.commonfun.loadingDismiss();
                this.commonfun.presentAlert("Order", "Error", error.error);
            }
        });
    }
    doInfinite(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.orderApprovalServiceService.pageOffset = this.orderApprovalServiceService.pageOffset + 20;
                this.createURL();
                let tempData = yield (yield this.orderApprovalServiceService.getOrder(this.getOrderURL)).toPromise();
                if (!!tempData) {
                    this.orderData = this.orderData.concat(tempData);
                    //  event.state = "closed";
                    event.target.complete();
                }
                else {
                }
                if ((!!tempData && tempData.length > 0)) {
                    this.emptyCart = false;
                }
                else {
                    this.emptyCart = true;
                }
            }
            catch (error) {
                // console.log(this.TAG,error);
            }
        });
    }
};
OrderApprovalPage.ctorParameters = () => [
    { type: _order_approval_service_service__WEBPACK_IMPORTED_MODULE_3__["OrderApprovalServiceService"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_8__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_10__["Message"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
OrderApprovalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-approval',
        template: __webpack_require__(/*! raw-loader!./order-approval.page.html */ "./node_modules/raw-loader/index.js!./src/app/order-approval/order-approval.page.html"),
        styles: [__webpack_require__(/*! ./order-approval.page.scss */ "./src/app/order-approval/order-approval.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_approval_service_service__WEBPACK_IMPORTED_MODULE_3__["OrderApprovalServiceService"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_8__["LoginauthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _provider_message_helper__WEBPACK_IMPORTED_MODULE_10__["Message"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], OrderApprovalPage);



/***/ })

}]);
//# sourceMappingURL=order-approval-order-approval-module-es2015.js.map