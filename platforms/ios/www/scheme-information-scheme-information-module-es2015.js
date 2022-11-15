(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scheme-information-scheme-information-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/scheme-information/scheme-information.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/scheme-information/scheme-information.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      <div style=\"white-space: normal;\">\n        Scheme Information\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n\n\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]=\"formscheme\" (ngSubmit)=\"getscheme(formscheme.value)\">\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <h5 ion-text class=\"text-primary\">\n              <ion-icon name=\"person\"></ion-icon> Customer Detail :\n            </h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Customer<span style=\"color:red!important\">*</span></ion-label>\n              <ionic-selectable placeholder=\"Select Customer\" [searchDebounce]=\"1000\"\n                [formControl]=\"formscheme.controls['selectedBusinessPartner']\" [items]=\"BusinessPartnerlist\"\n                itemValueField=\"id\" itemTextField=\"_identifier\" [canSearch]=\"true\" (onSearch)=\"custsearchChange($event)\"\n                (onClose)=\"onCancel($event)\" (onChange)=\"onchangecust()\">\n              </ionic-selectable>\n              <!-- (onSearch)=\"custsearchChange($event)\" -->\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.selectedBusinessPartner\">\n                <div\n                  *ngIf=\"formscheme.get('selectedBusinessPartner').hasError(validation.type) && formscheme.get('selectedBusinessPartner').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"stacked\">Product<span style=\"color:red!important\">*</span></ion-label>\n              <ionic-selectable placeholder=\"Select Product\" [formControl]=\"formscheme.controls['selectedddlproduct']\"\n                [items]=\"ddlproduct\" itemValueField=\"id\" itemTextField=\"_identifier\" [canSearch]=\"true\"\n                (onClose)=\"onClose($event)\" (onSearch)=\"productsearchChange($event)\" (onChange)=\"onchangeprod()\">\n              </ionic-selectable>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.selectedddlproduct\">\n                <div\n                  *ngIf=\"formscheme.get('selectedddlproduct').hasError(validation.type) && formscheme.get('selectedddlproduct').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </form>\n  <ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom btn-scheme\" type=\"submit\"\n    (click)=\"getscheme(formscheme.value)\" [disabled]=\"!formscheme.valid\">\n    Get Scheme\n  </ion-button>\n  <ion-card *ngIf='isgetscheme'>\n    <ion-card-content class=\"scheme-card\">\n      <ion-card-header>\n        <p>{{selectedddlproduct?._identifier}}</p>\n      </ion-card-header>\n      <ion-row *ngFor=\"let data of schemedata; index as i\" class=\"scheme-row\">\n        <ion-col>\n          <ion-row (click)=\"hideshowdetail(i)\">\n            <ion-col class=\"icon-col\">\n              <ion-icon name=\"pricetags\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <p style=\"font-weight: bold;\">{{data.SchemeName}}</p>\n              <p>Type: {{data.Scheme_Type}}</p>\n              <p>{{data.From_To}}</p>\n            </ion-col>\n          </ion-row>\n          <div style=\"overflow-x:auto;white-space: nowrap;\">\n            <table class=\"w3-table w3-bordered\">\n              <tr *ngIf=\"selectedrow==i\" nowrap style=\"background-color: #F1F1F1;\">\n                <th *ngIf='data.Scheme_Type_id==\"Per\"'>Per Qty</th>\n                <th *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\"'>Quantity Range</th>\n                <th *ngIf='data.Scheme_Type_id==\"OB\"'>Weight Above</th>\n                <th *ngIf='data.Scheme_Type_id==\"OB\"'>Value Above</th>\n                <th *ngIf='data.Scheme_Type_id==\"OB\"'>Qty Above</th>\n                <th *ngIf='data.Scheme_Type_id==\"OB\"'>Payment Term</th>\n                <th *ngIf='data.Scheme_Type_id==\"CD\"'>Value Above</th>\n                <th *ngIf='data.Scheme_Type_id==\"CD\"'>Quantity Above</th>\n\n                <th *ngIf='data.Scheme_Type_id==\"SP\" || data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\"'>From Qty</th>\n                <th *ngIf='data.Scheme_Type_id==\"SP\" || data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\"'>To Qty</th>\n                <th *ngIf='data.Scheme_Type_id==\"SP\"'>Special Rate</th>\n\n                <th *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\" || data.Scheme_Type_id==\"Per\"'>Free\n                  Qty</th>\n                <th *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\" || data.Scheme_Type_id==\"Per\"  || data.Scheme_Type_id==\"SP\"'>\n                  Product</th>\n                <th *ngIf='data.Scheme_Type_id != \"SP\"'>Discount</th>\n                <th *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\" || data.Scheme_Type_id==\"Per\"'>\n                  Reward</th>\n              </tr>\n              <tr *ngFor=\"let schemeinfo of data.SchemeRecords; index as j\">\n                <ng-container *ngIf=\"selectedrow==i\">\n                  <td *ngIf='data.Scheme_Type_id==\"Per\"'>{{schemeinfo.PerQty}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\"'>{{schemeinfo.fromqty}} To\n                    {{schemeinfo.toqty}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"OB\"'>{{schemeinfo.WeightAbove}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"OB\"'>{{schemeinfo.ValueAbove}}</td>\n                  <th *ngIf='data.Scheme_Type_id==\"OB\"'>{{schemeinfo.Qtyabove}}</th>\n                  <th *ngIf='data.Scheme_Type_id==\"OB\"'>{{schemeinfo.payment_term}}</th>\n                  <td *ngIf='data.Scheme_Type_id==\"CD\"'>{{schemeinfo.fromvalue}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"CD\"'>{{schemeinfo.tovalue}}</td>\n\n                  <td *ngIf='data.Scheme_Type_id==\"SP\" || data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\"'>{{schemeinfo.fromqty}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"SP\" || data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\"'>{{schemeinfo.toqty}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"SP\"'>{{schemeinfo.nspecialrate}}</td>\n\n\n                  <td *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\" || data.Scheme_Type_id==\"Per\"'>\n                    {{schemeinfo.FreeQuantity}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\" || data.Scheme_Type_id==\"Per\" || data.Scheme_Type_id==\"SP\"'>\n                    {{schemeinfo.Product}}</td>\n                  <td *ngIf='data.Scheme_Type_id != \"SP\"'>{{schemeinfo.Discount}}</td>\n                  <td *ngIf='data.Scheme_Type_id==\"Slab\" || data.Scheme_Type_id==\"NE\" || data.Scheme_Type_id==\"Per\"'>\n                    {{schemeinfo.RewardPoints}}</td>\n                </ng-container>\n              </tr>\n            </table>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/scheme-information/scheme-information.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/scheme-information/scheme-information.module.ts ***!
  \*****************************************************************/
/*! exports provided: SchemeInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeInformationPageModule", function() { return SchemeInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scheme_information_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheme-information.page */ "./src/app/scheme-information/scheme-information.page.ts");








const routes = [
    {
        path: '',
        component: _scheme_information_page__WEBPACK_IMPORTED_MODULE_7__["SchemeInformationPage"]
    }
];
let SchemeInformationPageModule = class SchemeInformationPageModule {
};
SchemeInformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_scheme_information_page__WEBPACK_IMPORTED_MODULE_7__["SchemeInformationPage"]]
    })
], SchemeInformationPageModule);



/***/ }),

/***/ "./src/app/scheme-information/scheme-information.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/scheme-information/scheme-information.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin-top: 3px !important;\n  margin-bottom: 3px !important;\n}\n\nion-card-header {\n  background-color: black;\n  color: white;\n  padding: 10px;\n}\n\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\n\nh5 ion-icon {\n  color: lightcoral;\n}\n\nion-col.icon-col {\n  -webkit-box-flex: 0;\n          flex: 0 0 4px;\n  margin-right: 10px;\n  margin-top: 10px;\n  font-size: 16px;\n  text-align: center;\n  background-color: #d0bdf4;\n  border-radius: 15px;\n  height: 27px;\n}\n\n.scheme-card {\n  padding-top: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.btn-scheme {\n  max-width: 400px !important;\n}\n\n.card-1 {\n  background-color: #51e2f5 !important;\n  color: black;\n}\n\n.card-2 {\n  background-color: #9df9ef !important;\n  color: black;\n}\n\n.card-3 {\n  background-color: #edf756 !important;\n  color: black;\n}\n\n.card-4 {\n  background-color: #ffa8B6 !important;\n  color: black;\n}\n\n.card-5 {\n  background-color: #a28089 !important;\n  color: black;\n}\n\n.card-6 {\n  background-color: #a0d2eb !important;\n  color: black;\n}\n\n.card-7 {\n  background-color: #e5eaf5 !important;\n  color: black;\n}\n\n.card-8 {\n  background-color: #d0bdf4 !important;\n  color: black;\n}\n\n.card-9 {\n  background-color: #8458B3 !important;\n  color: black;\n}\n\n.card-10 {\n  background-color: #a28089 !important;\n  color: black;\n}\n\n.card-11 {\n  background-color: #f75990 !important;\n  color: black;\n}\n\n.first-col {\n  text-align: left;\n}\n\n.second-col {\n  text-align: right;\n}\n\n.w3-table, .w3-table-all {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  display: table;\n  font-size: 12px;\n  background-color: white;\n}\n\n.w3-table-all {\n  border: 1px solid black;\n}\n\n.w3-bordered tr, .w3-table-all tr {\n  border-bottom: 1px solid black;\n}\n\n.w3-striped tbody tr:nth-child(even) {\n  background-color: #f1f1f1;\n}\n\n.w3-table-all tr:nth-child(odd) {\n  background-color: #fff;\n}\n\n.w3-table-all tr:nth-child(even) {\n  background-color: #f1f1f1;\n}\n\n.w3-hoverable tbody tr:hover, .w3-ul.w3-hoverable li:hover {\n  background-color: #ccc;\n}\n\n.w3-centered tr th, .w3-centered tr td {\n  text-align: center;\n}\n\n.w3-table td, .w3-table th, .w3-table-all td, .w3-table-all th {\n  padding: 8px 8px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: top;\n}\n\n.w3-table th:first-child, .w3-table td:first-child, .w3-table-all th:first-child, .w3-table-all td:first-child {\n  padding-left: 16px;\n}\n\n.w3-bordered tr, .w3-table-all tr {\n  border-bottom: 1px solid #ddd;\n}\n\n.scheme-row {\n  border-bottom: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9zY2hlbWUtaW5mb3JtYXRpb24vc2NoZW1lLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2NoZW1lLWluZm9ybWF0aW9uL3NjaGVtZS1pbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUdBLDZCQUFBO0FDREo7O0FESUM7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDREw7O0FEUUM7RUFDRyxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRE1JO0VBQ0UsaUJBQUE7QUNKTjs7QURRQztFQUVPLG1CQUFBO1VBQUEsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDUixlQUFBO0VBQ1Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1BSOztBRGFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVko7O0FEWUE7RUFDSSwyQkFBQTtBQ1RKOztBRFdBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0FDUko7O0FEVUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7QUNQSjs7QURTQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFFBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0FDTEo7O0FET0E7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7QUNKSjs7QURNQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRElDO0VBQ0csb0NBQUE7RUFDQSxZQUFBO0FDREo7O0FERUM7RUFDRyxvQ0FBQTtFQUNBLFlBQUE7QUNDSjs7QURBQztFQUNHLG9DQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREZDO0VBQ0csb0NBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtBQ1FKOztBREhBO0VBRUkseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDS0o7O0FESEE7RUFHRSx1QkFBQTtBQ0lGOztBREZBO0VBR0csOEJBQUE7QUNHSDs7QUREQTtFQUVJLHlCQUFBO0FDR0o7O0FEREE7RUFFSSxzQkFBQTtBQ0dKOztBRERBO0VBRUkseUJBQUE7QUNHSjs7QUREQTtFQUVJLHNCQUFBO0FDR0o7O0FEREE7RUFFSSxrQkFBQTtBQ0dKOztBRERBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUVJLGtCQUFBO0FDR0o7O0FEQUE7RUFFSSw2QkFBQTtBQ0VKOztBRENBO0VBRUksNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtZS1pbmZvcm1hdGlvbi9zY2hlbWUtaW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIC8vICBtYXJnaW4tbGVmdDogM3B4ICFpbXBvcnRhbnQ7XG4gIC8vICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDNweCAhaW1wb3J0YW50O1xuICAgIFxufVxuIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICBcbi8vICAgICBtYXJnaW4tdG9wOiAtMThweCFpbXBvcnRhbnQ7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuLy8gICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG5cbiB9XG4gaDV7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBjb2xvcjogZGFya2N5YW47XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBpb24taWNvbntcbiAgICAgIGNvbG9yOiBsaWdodGNvcmFsO1xuICAgIH1cblxuICB9XG4gaW9uLWNvbC5pY29uLWNvbHtcbiAgIFxuICAgICAgICBmbGV4OiAwIDAgNHB4O1xuICAgIC8vICAgIHBhZGRpbmc6MDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcbmZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBiZGY0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDI3cHg7XG4gICAgICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAvLyAgIHRvcDogNTAlO1xuICAgIC8vICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgLy8gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuIH1cbi5zY2hlbWUtY2FyZHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5idG4tc2NoZW1le1xuICAgIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLTF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUxZTJmNSFpbXBvcnRhbnQ7XG4gICAgY29sb3I6YmxhY2s7XG59XG4uY2FyZC0ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGY5ZWYhaW1wb3J0YW50O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmNhcmQtM3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZGY3NTYhaW1wb3J0YW50O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmNhcmQtNHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhOEI2IWltcG9ydGFudDtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5jYXJkLTV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYTI4MDg5IWltcG9ydGFudDtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5jYXJkLTZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYTBkMmViIWltcG9ydGFudDtcbiAgICBjb2xvcjpibGFjaztcbn0uY2FyZC03e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2U1ZWFmNSFpbXBvcnRhbnQ7XG4gICAgY29sb3I6YmxhY2s7XG59LmNhcmQtOHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkMGJkZjQhaW1wb3J0YW50O1xuICAgIGNvbG9yOmJsYWNrO1xufS5jYXJkLTl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojODQ1OEIzIWltcG9ydGFudDtcbiAgICBjb2xvcjpibGFjaztcbn0uY2FyZC0xMHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhMjgwODkhaW1wb3J0YW50O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmNhcmQtMTF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjc1OTkwIWltcG9ydGFudDtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5maXJzdC1jb2x7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWNvbmQtY29se1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5cbi8vbmV3IFxuLnczLXRhYmxlLC53My10YWJsZS1hbGxcbntcbiAgICBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6MDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6dGFibGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnczLXRhYmxlLWFsbFxue1xuICAvLyAgYm9yZGVyOjFweCBzb2xpZCAjY2NjXG4gIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG59XG4udzMtYm9yZGVyZWQgdHIsLnczLXRhYmxlLWFsbCB0clxue1xuICAgLy8gYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZFxuICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XG59XG4udzMtc3RyaXBlZCB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbilcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMWYxZjFcbn1cbi53My10YWJsZS1hbGwgdHI6bnRoLWNoaWxkKG9kZClcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZcbn1cbi53My10YWJsZS1hbGwgdHI6bnRoLWNoaWxkKGV2ZW4pXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxXG59XG4udzMtaG92ZXJhYmxlIHRib2R5IHRyOmhvdmVyLC53My11bC53My1ob3ZlcmFibGUgbGk6aG92ZXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2Ncbn1cbi53My1jZW50ZXJlZCB0ciB0aCwudzMtY2VudGVyZWQgdHIgdGRcbntcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxufVxuLnczLXRhYmxlIHRkLC53My10YWJsZSB0aCwudzMtdGFibGUtYWxsIHRkLC53My10YWJsZS1hbGwgdGhcbntcbiAgICBwYWRkaW5nOjhweCA4cHg7XG4gICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3Bcbn1cbi53My10YWJsZSB0aDpmaXJzdC1jaGlsZCwudzMtdGFibGUgdGQ6Zmlyc3QtY2hpbGQsLnczLXRhYmxlLWFsbCB0aDpmaXJzdC1jaGlsZCwudzMtdGFibGUtYWxsIHRkOmZpcnN0LWNoaWxkXG57XG4gICAgcGFkZGluZy1sZWZ0OjE2cHhcbn1cblxuLnczLWJvcmRlcmVkIHRyLC53My10YWJsZS1hbGwgdHJcbntcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGRkXG59XG4vL2VuZCBuZXdcbi5zY2hlbWUtcm93XG57XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG5cbiAgICAvLyBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogLTVweDtcbiAgICBcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogZGFya2N5YW47XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5oNSBpb24taWNvbiB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG5pb24tY29sLmljb24tY29sIHtcbiAgZmxleDogMCAwIDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwYmRmNDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgaGVpZ2h0OiAyN3B4O1xufVxuXG4uc2NoZW1lLWNhcmQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uYnRuLXNjaGVtZSB7XG4gIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MWUyZjUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkZjllZiAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmNzU2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmE4QjYgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyODA4OSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBkMmViICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtNyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVhZjUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC04IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwYmRmNCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLTkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ1OEIzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtMTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTI4MDg5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtMTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc1OTkwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZpcnN0LWNvbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZWNvbmQtY29sIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi53My10YWJsZSwgLnczLXRhYmxlLWFsbCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi53My10YWJsZS1hbGwge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnczLWJvcmRlcmVkIHRyLCAudzMtdGFibGUtYWxsIHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4udzMtc3RyaXBlZCB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4udzMtdGFibGUtYWxsIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnczLXRhYmxlLWFsbCB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4udzMtaG92ZXJhYmxlIHRib2R5IHRyOmhvdmVyLCAudzMtdWwudzMtaG92ZXJhYmxlIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLnczLWNlbnRlcmVkIHRyIHRoLCAudzMtY2VudGVyZWQgdHIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53My10YWJsZSB0ZCwgLnczLXRhYmxlIHRoLCAudzMtdGFibGUtYWxsIHRkLCAudzMtdGFibGUtYWxsIHRoIHtcbiAgcGFkZGluZzogOHB4IDhweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnczLXRhYmxlIHRoOmZpcnN0LWNoaWxkLCAudzMtdGFibGUgdGQ6Zmlyc3QtY2hpbGQsIC53My10YWJsZS1hbGwgdGg6Zmlyc3QtY2hpbGQsIC53My10YWJsZS1hbGwgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi53My1ib3JkZXJlZCB0ciwgLnczLXRhYmxlLWFsbCB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uc2NoZW1lLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/scheme-information/scheme-information.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/scheme-information/scheme-information.page.ts ***!
  \***************************************************************/
/*! exports provided: SchemeInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeInformationPage", function() { return SchemeInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _scheme_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheme-information.service */ "./src/app/scheme-information/scheme-information.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");







let SchemeInformationPage = class SchemeInformationPage {
    constructor(fb, loginauth, schemeInformationService, commonfun, msg) {
        this.fb = fb;
        this.loginauth = loginauth;
        this.schemeInformationService = schemeInformationService;
        this.commonfun = commonfun;
        this.msg = msg;
        this.Issinglecust = false;
        this.isgetscheme = false;
        this.selectedrow = null;
        this.schemedata = null;
        this.validation_messages = {
            'selectedBusinessPartner': [
                { type: 'required', message: '' }
            ],
            'selectedddlproduct': [
                { type: 'required', message: '' }
            ]
        };
        this.formscheme = this.fb.group({
            selectedBusinessPartner: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedddlproduct: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnInit() {
        this.checkcust();
    }
    custsearchChange(event) {
        var custsearchtext = event.text; //.replace(/\s/g,'');
        if (custsearchtext.length >= 3) {
            this.bindcustomerapi(custsearchtext);
        }
    }
    onCancel(event) {
        // console.log("onCancel");
        event.component._searchText = "";
    }
    onClose(event) {
        // console.log("onClose");
        event.component.searchText = "";
    }
    onchangecust() {
        try {
            // console.log("oncustchange");
            this.selectedBusinessPartner = this.formscheme.controls["selectedBusinessPartner"].value;
            this.formscheme.controls['selectedddlproduct'].setValue('');
            this.selectedddlproduct = null;
            this.isgetscheme = false;
            this.checkproduct();
        }
        catch (error) {
            //  console.log("onchangecust:Error ",error);
        }
    }
    onchangeprod() {
        this.selectedddlproduct = this.formscheme.controls["selectedddlproduct"].value;
        this.isgetscheme = false;
    }
    checkproduct() {
        try {
            this.schemeInformationService.getproductapi("", this.selectedBusinessPartner.id).subscribe(data => {
                var response = data;
                this.leastddlproduct = response;
                //==================
                if (this.leastddlproduct.length == 1) {
                    this.ddlproduct = this.leastddlproduct;
                    this.formscheme.controls["selectedddlproduct"].setValue(this.ddlproduct[0]);
                    this.onchangeprod();
                }
                else if (this.leastddlproduct.length > this.loginauth.minlistcount) {
                    this.ddlproduct = null;
                    this.formscheme.controls["selectedddlproduct"].setValue(null);
                }
                else {
                    this.ddlproduct = this.leastddlproduct;
                    this.formscheme.controls["selectedddlproduct"].setValue(null);
                }
                //==================
            }, error => {
                this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
            });
        }
        catch (error) {
            // console.log("checkproduct Error: ",error);
        }
    }
    checkcust() {
        try {
            this.commonfun.loadingPresent();
            this.schemeInformationService.getcustmerapi("").subscribe(data => {
                this.commonfun.loadingDismiss();
                var response = data;
                this.leastBusinessPartnerlist = response;
                if (this.leastBusinessPartnerlist.length == 1) {
                    this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                    this.formscheme.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
                    this.onchangecust();
                }
                else if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                    this.BusinessPartnerlist = null;
                    this.formscheme.controls["selectedBusinessPartner"].setValue(null);
                }
                else {
                    this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                    this.formscheme.controls["selectedBusinessPartner"].setValue(null);
                }
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            // console.log("Error:chckcust",error);
        }
    }
    bindcustomerapi(strsearch) {
        try {
            if (strsearch != "") {
                this.schemeInformationService.getcustmerapi(strsearch).subscribe(data => {
                    var response = data;
                    this.BusinessPartnerlist = response;
                });
            }
            else {
                //=============start for top 10================= 
                if (this.leastBusinessPartnerlist.length == 1) {
                    this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                    this.formscheme.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
                    this.onchangecust();
                }
                else if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                    this.BusinessPartnerlist = null;
                    this.formscheme.controls["selectedBusinessPartner"].setValue(null);
                }
                else {
                    this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                    this.formscheme.controls["selectedBusinessPartner"].setValue(null);
                }
                //=============end for top 10================= 
            }
        }
        catch (error) {
            //this.commonfun.presentAlert("Message", "Error", error);
            // console.log("Error : bindcustomerapi", error);
        }
    }
    //#region productsearchChange
    productsearchChange(event) {
        var custsearchtext = event.text;
        if (this.selectedBusinessPartner != null) {
            if (custsearchtext.length % 3 == 0) {
                this.bindproduct(custsearchtext);
            }
        }
        else {
            this.commonfun.presentAlert("Message", "Alert", "Please select customer.");
        }
    }
    //#endregion
    //#region bindproduct(strsearch:string)  
    bindproduct(strsearch) {
        try {
            console.log("strsearch", strsearch);
            console.log("this.selectedBusinessPartner.id", this.selectedBusinessPartner.id);
            if (strsearch != "") {
                this.schemeInformationService.getproductapi(strsearch, this.selectedBusinessPartner.id).subscribe(data => {
                    var response = data;
                    this.ddlproduct = response;
                }, error => {
                    this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
                });
            }
            else if (this.selectedBusinessPartner && this.leastddlproduct && this.leastddlproduct != null) {
                //==================
                if (this.leastddlproduct.length == 1) {
                    this.ddlproduct = this.leastddlproduct;
                    this.formscheme.controls["selectedddlproduct"].setValue(this.ddlproduct[0]);
                    this.onchangeprod();
                }
                else if (this.leastddlproduct.length > this.loginauth.minlistcount) {
                    this.ddlproduct = null;
                    this.formscheme.controls["selectedddlproduct"].setValue(null);
                    this.selectedddlproduct = null;
                }
                else {
                    this.ddlproduct = this.leastddlproduct;
                    this.formscheme.controls["selectedddlproduct"].setValue(null);
                    this.selectedddlproduct = null;
                }
                //==================
            }
            else {
                this.ddlproduct = null;
            }
        }
        catch (error) {
            // this.commonfun.loadingDismiss();
            // this.commonfun.presentAlert("Message","Error!",error.statusText +" with status code :"+error.status);
            //  console.log("bindproduct : ERROR: ",error);
        }
    }
    //#endregion bindproduct(strsearch:string)
    getscheme(value) {
        try {
            this.schemedata = null;
            this.schemeInformationService.getCustProdWiseScheme(this.selectedBusinessPartner.id, this.selectedddlproduct.id).subscribe(data => {
                //const response= data['response'];
                var response = data;
                console.log("Product Schme DATA", data);
                this.schemedata = data;
                this.isgetscheme = true;
            }, error => {
                //this.commonfun.loadingDismiss();
                this.commonfun.presentAlert("Message", "Error!", error.statusText + " with status code :" + error.status);
            });
        }
        catch (error) {
        }
    }
    hideshowdetail(i) {
        if (this.selectedrow == i) {
            this.selectedrow = -1;
        }
        else {
            this.selectedrow = i;
        }
    }
    Resetpage() {
        this.formscheme.reset();
        this.ddlproduct = null;
        this.BusinessPartnerlist = null;
        //this.leastBusinessPartnerlist=null;
        this.selectedddlproduct = null;
        this.schemedata = null;
        this.isgetscheme = false;
        if (this.leastBusinessPartnerlist.length == 1) {
            this.BusinessPartnerlist = this.leastBusinessPartnerlist;
            this.formscheme.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
            // this.onCustDropDownChange(this.BusinessPartnerlist[0]);
        }
        else {
            this.selectedBusinessPartner = null;
        }
    }
};
SchemeInformationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
    { type: _scheme_information_service__WEBPACK_IMPORTED_MODULE_3__["SchemeInformationService"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
    { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_6__["Message"] }
];
SchemeInformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scheme-information',
        template: __webpack_require__(/*! raw-loader!./scheme-information.page.html */ "./node_modules/raw-loader/index.js!./src/app/scheme-information/scheme-information.page.html"),
        styles: [__webpack_require__(/*! ./scheme-information.page.scss */ "./src/app/scheme-information/scheme-information.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"],
        _scheme_information_service__WEBPACK_IMPORTED_MODULE_3__["SchemeInformationService"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"],
        _provider_message_helper__WEBPACK_IMPORTED_MODULE_6__["Message"]])
], SchemeInformationPage);



/***/ }),

/***/ "./src/app/scheme-information/scheme-information.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/scheme-information/scheme-information.service.ts ***!
  \******************************************************************/
/*! exports provided: SchemeInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeInformationService", function() { return SchemeInformationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let SchemeInformationService = class SchemeInformationService {
    constructor(http, loginauth, genericHTTP, platform) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
        this.platform = platform;
    }
    getcustmerapi(strsearch) {
        strsearch = strsearch.replace(/ /g, "%20");
        var ordertypeionic = "";
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomer?'
            + 'user_id=' + this.loginauth.userid
            + '&strsearch=' + strsearch
            + '&ordertypeionic=' + ordertypeionic
            + '&activity_id=' + this.loginauth.selectedactivity.id);
    }
    getproductapi(searchkey, cut_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.CustWiseProductScheme?'
            + 'searchchar=' + searchkey
            + '&cut_id=' + cut_id);
    }
    getCustProdWiseScheme(cut_id, prod_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.CustProdWiseScheme?'
            + 'user_id=' + this.loginauth.userid
            + '&activity_id=' + this.loginauth.selectedactivity.id
            + '&cut_id=' + cut_id
            + '&prod_id=' + prod_id);
    }
};
SchemeInformationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
SchemeInformationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
], SchemeInformationService);



/***/ })

}]);
//# sourceMappingURL=scheme-information-scheme-information-module-es2015.js.map