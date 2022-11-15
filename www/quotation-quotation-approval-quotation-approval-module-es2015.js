(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-quotation-approval-quotation-approval-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/quotation/quotation-approval/quotation-approval.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/quotation/quotation-approval/quotation-approval.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Quotation Approval</ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"refreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card class=\"card-custom\" *ngFor=\"let quotation of quotationList\" (click)=\"detailsClick(quotation)\" padding>\n      \n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-label class=\"comname-custom\">\n           {{quotation.documentno}}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label class=\"comname-custom\">\n            {{quotation.orderdate | date:'dd-MMM-yyyy'}}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"6\" text-end>\n          <ion-label [ngClass]=\"{'camc-for-one-year': quotation.productname =='CAMC1-CAMC for 1 Year',\n                                 'camc-for-three-year' : quotation.productname == 'CAMC for 3 Year',\n                                 'service-charges-others' : quotation.productname == 'Service Charges - Others',\n                                 'amc-one-year' : quotation.productname == 'AMC for 1 Year',\n                                 'default-custom': quotation.productname != 'AMC for 1 Year' &&  quotation.productname != 'Service Charges - Others' \n                                 && quotation.productname != 'CAMC for 3 Year'\n                                 && quotation.productname!= 'CAMC1-CAMC for 1 Year'}\">\n            {{quotation.productname}}\n          </ion-label>\n         </ion-col>\n      </ion-row>\n      \n      <ion-row *ngFor=\"let line of quotation.line\">\n        <ion-col nowrap>\n          <ion-row class=\"serial-no-row-custom\">\n            <ion-label style=\"font-size: small;\">{{ line.serialno }}</ion-label>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label style=\"font-size: small;\">QTY: {{ line.qty }}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"font-size: small;\">UOM: {{ line.uomname }}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"font-size: small;\">Rate:{{line.rate}}</ion-label>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-label style=\"font-size: small;\">Net Amount: {{ line.netamt }}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"font-size: small;\">Tax: {{ line.taxname}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label style=\"font-size: small;\">Total Gross Amount: {{ line.totgrossamt}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <div>\n            \n                  \n          </div>\n       </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button size=\"default\"\n          class=\"submit-btn quo-btn-custom\" expand=\"block\"  color=\"primary\" (click)=\"reject(quotation)\">Reject\n        </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button size=\"default\"\n          class=\"submit-btn quo-btn-custom\" expand=\"block\"  color=\"primary\" (click)=\"approve(quotation)\">Approve\n        </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/quotation/quotation-approval/quotation-approval.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/quotation/quotation-approval/quotation-approval.module.ts ***!
  \***************************************************************************/
/*! exports provided: QuotationApprovalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationApprovalPageModule", function() { return QuotationApprovalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quotation_approval_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotation-approval.page */ "./src/app/quotation/quotation-approval/quotation-approval.page.ts");







const routes = [
    {
        path: '',
        component: _quotation_approval_page__WEBPACK_IMPORTED_MODULE_6__["QuotationApprovalPage"]
    }
];
let QuotationApprovalPageModule = class QuotationApprovalPageModule {
};
QuotationApprovalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_quotation_approval_page__WEBPACK_IMPORTED_MODULE_6__["QuotationApprovalPage"]]
    })
], QuotationApprovalPageModule);



/***/ }),

/***/ "./src/app/quotation/quotation-approval/quotation-approval.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/quotation/quotation-approval/quotation-approval.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".serial-no-row-custom {\n  background-color: bisque;\n  font-weight: bolder;\n  padding: 5px;\n}\n\n.quo-btn-custom {\n  --height: 30px !important;\n  height: 30px !important;\n}\n\n.doc-custom {\n  background-color: #C8E6C9;\n  padding: 5px;\n  border-radius: 5px;\n  color: #1B5E20;\n}\n\n.doc-custom-test {\n  background-color: #E0E0E0;\n  padding: 5px;\n  border-radius: 5px;\n  color: #9E9E9E;\n}\n\n.amc-one-year {\n  background-color: #FFCCBC;\n  padding: 5px;\n  border-radius: 5px;\n  color: #FF5722;\n}\n\n.service-charges-others {\n  background-color: #FFECB3;\n  padding: 5px;\n  border-radius: 5px;\n  color: #FFA000;\n}\n\n.default-custom {\n  background-color: #BBDEFB;\n  padding: 5px;\n  border-radius: 5px;\n  color: #1565C0;\n}\n\n.amc-for-two-Year {\n  background-color: #ffcdd2;\n  padding: 5px;\n  border-radius: 5px;\n  color: #d32f2f;\n}\n\n.amc-for-three-Year {\n  background-color: #F8BBD0;\n  padding: 5px;\n  border-radius: 5px;\n  color: #C2185B;\n}\n\n.camc-for-one-year {\n  background-color: #E1BEE7;\n  padding: 5px;\n  border-radius: 5px;\n  color: #7B1FA2;\n}\n\n.camc-for-two-year {\n  background-color: #D1C4E9;\n  padding: 5px;\n  border-radius: 5px;\n  color: #512DA8;\n}\n\n.camc-for-three-year {\n  background-color: #C8E6C9;\n  padding: 5px;\n  border-radius: 5px;\n  color: #1B5E20;\n}\n\n.extended-warranty-for-one-year {\n  background-color: #B2EBF2;\n  padding: 5px;\n  border-radius: 5px;\n  color: #0097A7;\n}\n\n.extended-warranty-for-two-year {\n  background-color: #B2DFDB;\n  padding: 5px;\n  border-radius: 5px;\n  color: #00796B;\n}\n\n.extended-warranty-for-three-year {\n  background-color: #C8E6C9;\n  padding: 5px;\n  border-radius: 5px;\n  color: #388E3C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9xdW90YXRpb24vcXVvdGF0aW9uLWFwcHJvdmFsL3F1b3RhdGlvbi1hcHByb3ZhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3F1b3RhdGlvbi9xdW90YXRpb24tYXBwcm92YWwvcXVvdGF0aW9uLWFwcHJvdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBR0EsbUJBQUE7RUFDQSxZQUFBO0FDREo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURMQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNVSjs7QURSQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1dKOztBRFRBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNhSiIsImZpbGUiOiJzcmMvYXBwL3F1b3RhdGlvbi9xdW90YXRpb24tYXBwcm92YWwvcXVvdGF0aW9uLWFwcHJvdmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXJpYWwtbm8tcm93LWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlNGM0IDAlLCAjNjk2OTY5IDEwMCUpO1xuICAgIC8vLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTk3ZGVnLCByZ2JhKDEwMCwxMDAsMTAwLDEpIDAlLCByZ2JhKDYzLDYzLDYzLDEpIDEzLjUlLCByZ2JhKDI5LDI5LDI5LDEpIDMzLjMzJSwgcmdiYSgwLDAsMCwxKSAxMDAlKSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLnF1by1idG4tY3VzdG9te1xuICAgIC0taGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4uZG9jLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDOEU2Qzk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzFCNUUyMDtcbn1cbi5kb2MtY3VzdG9tLXRlc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTBFMEUwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM5RTlFOUU7XG59XG4uYW1jLW9uZS15ZWFye1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGQ0NCQztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjRkY1NzIyO1xufVxuLnNlcnZpY2UtY2hhcmdlcy1vdGhlcnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZFQ0IzO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICNGRkEwMDA7XG59XG4uZGVmYXVsdC1jdXN0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQkJERUZCO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICMxNTY1QzA7XG59XG4uYW1jLWZvci10d28tWWVhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmNkZDI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogI2QzMmYyZjtcbn1cbi5hbWMtZm9yLXRocmVlLVllYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjhCQkQwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICNDMjE4NUI7XG59XG4uY2FtYy1mb3Itb25lLXllYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRTFCRUU3O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM3QjFGQTI7XG59XG4uY2FtYy1mb3ItdHdvLXllYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRDFDNEU5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM1MTJEQTg7XG59XG4uY2FtYy1mb3ItdGhyZWUteWVhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDOEU2Qzk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogIzFCNUUyMDtcbn1cbi5leHRlbmRlZC13YXJyYW50eS1mb3Itb25lLXllYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojQjJFQkYyO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICMwMDk3QTc7XG59XG4uZXh0ZW5kZWQtd2FycmFudHktZm9yLXR3by15ZWFye1xuICAgIGJhY2tncm91bmQtY29sb3I6I0IyREZEQjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjMDA3OTZCO1xufVxuLmV4dGVuZGVkLXdhcnJhbnR5LWZvci10aHJlZS15ZWFye1xuICAgIGJhY2tncm91bmQtY29sb3I6I0M4RTZDOTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjMzg4RTNDO1xufSIsIi5zZXJpYWwtbm8tcm93LWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucXVvLWJ0bi1jdXN0b20ge1xuICAtLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmRvYy1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFNkM5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMxQjVFMjA7XG59XG5cbi5kb2MtY3VzdG9tLXRlc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM5RTlFOUU7XG59XG5cbi5hbWMtb25lLXllYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDQ0JDO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICNGRjU3MjI7XG59XG5cbi5zZXJ2aWNlLWNoYXJnZXMtb3RoZXJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRUNCMztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjRkZBMDAwO1xufVxuXG4uZGVmYXVsdC1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJERUZCO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMxNTY1QzA7XG59XG5cbi5hbWMtZm9yLXR3by1ZZWFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjZDMyZjJmO1xufVxuXG4uYW1jLWZvci10aHJlZS1ZZWFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QkJEMDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjQzIxODVCO1xufVxuXG4uY2FtYy1mb3Itb25lLXllYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFCRUU3O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM3QjFGQTI7XG59XG5cbi5jYW1jLWZvci10d28teWVhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEMUM0RTk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzUxMkRBODtcbn1cblxuLmNhbWMtZm9yLXRocmVlLXllYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFNkM5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMxQjVFMjA7XG59XG5cbi5leHRlbmRlZC13YXJyYW50eS1mb3Itb25lLXllYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJFQkYyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwMDk3QTc7XG59XG5cbi5leHRlbmRlZC13YXJyYW50eS1mb3ItdHdvLXllYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjJERkRCO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICMwMDc5NkI7XG59XG5cbi5leHRlbmRlZC13YXJyYW50eS1mb3ItdGhyZWUteWVhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEU2Qzk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogIzM4OEUzQztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/quotation/quotation-approval/quotation-approval.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/quotation/quotation-approval/quotation-approval.page.ts ***!
  \*************************************************************************/
/*! exports provided: QuotationApprovalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationApprovalPage", function() { return QuotationApprovalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _customer_quotation_customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../customer-quotation/customer-quotation.service */ "./src/app/quotation/customer-quotation/customer-quotation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");





let QuotationApprovalPage = class QuotationApprovalPage {
    constructor(commonFunction, alertCtrl, customerQuotationService) {
        this.commonFunction = commonFunction;
        this.alertCtrl = alertCtrl;
        this.customerQuotationService = customerQuotationService;
        this.TAG = "Quotation Approval Page";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                this.quotationList = yield this.customerQuotationService.getQuotationList().toPromise();
                //  console.log(this.TAG,this.quotationList);
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                // console.log(this.TAG,error);
            }
        });
    }
    refreshPage() {
        this.ionViewWillEnter();
    }
    detailsClick(data) {
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
                            this.ionViewWillEnter();
                        }
                    }]
            });
            alert.dismiss(() => console.log('The alert has been closed.'));
            yield alert.present();
        });
    }
    reject(complaintno) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                try {
                    this.commonFunction.loadingPresent();
                    const approveQuotationResponse = yield this.customerQuotationService.approveQuotation(complaintno, "", true).toPromise();
                    this.commonFunction.loadingDismiss();
                    if (!!approveQuotationResponse) {
                        this.presentAlert("Quotation Approval", "", approveQuotationResponse.msg);
                    }
                }
                catch (error) {
                    //  console.log(this.TAG,error);
                    this.commonFunction.loadingDismiss();
                    this.commonFunction.presentAlert("Quotation Approval", "Error", error.error);
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    approve(complaintno) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                const approveQuotationResponse = yield this.customerQuotationService.approveQuotation(complaintno, true, "").toPromise();
                this.commonFunction.loadingDismiss();
                if (!!approveQuotationResponse) {
                    this.presentAlert("Quotation Approval", "", approveQuotationResponse.msg);
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
                this.commonFunction.loadingDismiss();
                this.commonFunction.presentAlert("Quotation Approval", "Error", error.error);
            }
        });
    }
};
QuotationApprovalPage.ctorParameters = () => [
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _customer_quotation_customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__["CustomerQuotationService"] }
];
QuotationApprovalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-quotation-approval',
        template: __webpack_require__(/*! raw-loader!./quotation-approval.page.html */ "./node_modules/raw-loader/index.js!./src/app/quotation/quotation-approval/quotation-approval.page.html"),
        styles: [__webpack_require__(/*! ./quotation-approval.page.scss */ "./src/app/quotation/quotation-approval/quotation-approval.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _customer_quotation_customer_quotation_service__WEBPACK_IMPORTED_MODULE_1__["CustomerQuotationService"]])
], QuotationApprovalPage);



/***/ })

}]);
//# sourceMappingURL=quotation-quotation-approval-quotation-approval-module-es2015.js.map