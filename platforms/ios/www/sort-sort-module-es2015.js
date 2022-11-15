(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sort-sort-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sort/sort.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sort/sort.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n   \n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"order-approval\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Sort</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clearFilter()\"> Clear Filters</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"box\">\n    <ion-row class=\"row-custom\">\n      <ion-col size=\"4\" class=\"back-color custom-ion-col\">\n        <ion-list *ngFor=\"let filterItem of filterList;let i = index\" class=\"back-color\">\n          <ion-item lines=\"none\" class=\"list-item\" (click)=\"menuItemClick(i)\" [ngClass]=\"{'custom-activated': (active == i),'ion-item-custom':(active != i)}\">\n            <ion-label color=\"primary\">\n              {{ filterItem.name }}\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-item>\n            <ion-label>Start Date</ion-label>\n            <ion-datetime displayFormat=\"DDD. MMM DD, YY\" placeholder=\"Select Date\" [(ngModel)]=\"startDate\"></ion-datetime>\n\n          </ion-item>\n          <ion-item>\n            <ion-label>End Date</ion-label>\n            <ion-datetime displayFormat=\"DDD. MMM DD, YY\"  placeholder=\"Select Date\" [(ngModel)]=\"endDate\"></ion-datetime>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>    \n  </ion-grid>  \n</ion-content>\n<ion-footer class=\"footer-back-color\">\n  <ion-button  (click)=\"applyFilter()\"  color=\"primary\"  size=\"large\" expand=\"full\" fill=\"outline\" class=\"footer-btn-color\">\n    <ion-label style=\"color: white;\">\n      Apply\n    </ion-label>\n  </ion-button>\n</ion-footer> -->\n\n\n<ion-header #header>\n  <ion-toolbar>\n    <ion-title>Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollEvents=\"true\" appHideHeader [header]=\"header\">\n  <ngx-datatable  #datatable style=\"height: 600px; overflow-y:visible\" class=\"bootstrap resizeable\"  (cdkObserveContent)=\"adjustColumnMinWidth()\"\n                 [rows]=\"rows\"\n                 [columns]=\"column_data\"\n                 [columnMode]=\"'froce'\"\n                 [headerHeight]=\"50\"\n                 [footerHeight]=\"50\"\n                 [rowHeight]=\"40\"\n                 [selectionType]=\"SelectionType.single\"\n                 [scrollbarH]=\"true\"\n                 [scrollbarV]=\"true\"\n                 [reorderable]=\"true\"\n                 [loadingIndicator]=\"true\"\n                 [swapColumns]=\"true\">\n    \n  </ngx-datatable>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/common/directives/hide-header.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/common/directives/hide-header.directive.ts ***!
  \************************************************************/
/*! exports provided: HideHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function() { return HideHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
// hide-header.directive.ts - this directive will do the actual job to hide header on content scroll in Ionic Framework.



let HideHeaderDirective = class HideHeaderDirective {
    constructor(renderer, domCtrl) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
    }
    ngOnInit() {
        this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 700ms');
        });
    }
    onContentScroll($event) {
        if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
            });
        }
        else {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', '0');
            });
        }
        this.lastY = $event.detail.scrollTop;
    }
};
HideHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HideHeaderDirective.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HideHeaderDirective.prototype, "onContentScroll", null);
HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appHideHeader]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
], HideHeaderDirective);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/directives/hide-header.directive */ "./src/app/common/directives/hide-header.directive.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_common_directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_3__["HideHeaderDirective"]],
        exports: [_common_directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_3__["HideHeaderDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/sort/sort.module.ts":
/*!*************************************!*\
  !*** ./src/app/sort/sort.module.ts ***!
  \*************************************/
/*! exports provided: SortPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPageModule", function() { return SortPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sort_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sort.page */ "./src/app/sort/sort.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _sort_page__WEBPACK_IMPORTED_MODULE_6__["SortPage"]
    }
];
let SortPageModule = class SortPageModule {
};
SortPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sort_page__WEBPACK_IMPORTED_MODULE_6__["SortPage"]]
    })
], SortPageModule);



/***/ }),

/***/ "./src/app/sort/sort.page.scss":
/*!*************************************!*\
  !*** ./src/app/sort/sort.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  height: 100% !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  padding: 0px !important;\n}\n\n.list-item {\n  margin-top: 25px !important;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\ndiv[scrollx=true], div[scrolly=true] {\n  position: relative;\n  overflow: hidden;\n}\n\ndiv[scrollx=true] {\n  overflow-x: auto;\n}\n\ndiv[scrolly=true] {\n  overflow-y: auto;\n}\n\n.row-custom {\n  height: -webkit-fill-available !important;\n}\n\n.custom-activated {\n  --ion-background-color: white !important;\n}\n\n.ion-item-custom {\n  --ion-background-color:#eeeeee !important;\n  padding: 0px !important;\n}\n\n.back-color {\n  background-color: #eeeeee !important;\n}\n\n.custom-ion-col {\n  padding: 0px !important;\n}\n\n.footer-back-color {\n  background-color: white;\n}\n\n.footer-btn-color {\n  background-color: #F39E20 !important;\n}\n\n::ng-deep.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #F39E20 !important;\n}\n\n@media only screen and (min-width: 481px) {\n  ::ng-deep.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n    padding-left: 0.75rem !important;\n    padding-right: 0.25rem !important;\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n}\n\n@media (min-width: 1281px) {\n  ::ng-deep.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n    padding: 0.75rem !important;\n  }\n}\n\n::ng-deep.ngx-datatable.bootstrap .datatable-header {\n  font-weight: bold !important;\n  background-color: #F39E20 !important;\n}\n\n@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9zb3J0L3NvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9zb3J0L3NvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsaUJBQUE7RUFFQSx1QkFBQTtBQ0FKOztBRElBO0VBQ0ksMkJBQUE7QUNESjs7QURNQTtFQUNJLGtCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDRyxnQkFBQTtBQ0hIOztBRE1BO0VBQ0csZ0JBQUE7QUNISDs7QURNQTtFQUNJLHlDQUFBO0FDSEo7O0FES0E7RUFDSSx3Q0FBQTtBQ0ZKOztBRElBO0VBQ0kseUNBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREdBO0VBQ0ksb0NBQUE7QUNBSjs7QURHQTtFQUNJLHVCQUFBO0FDQUo7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksb0NBQUE7QUNFSjs7QURBQTtFQUNJLG9DQUFBO0FDR0o7O0FEQUE7RUFDSTtJQUVJLGdDQUFBO0lBQ0EsaUNBQUE7SUFDQSwrQkFBQTtJQUNBLGtDQUFBO0VDRU47QUFDRjs7QURDQTtFQUVJO0lBRUEsMkJBQUE7RUNERjtBQUNGOztBRE1BO0VBQ0UsNEJBQUE7RUFDQSxvQ0FBQTtBQ0pGOztBRFFBO0VBQ0k7SUFDRSxnQkFBQTtFQ0xKOztFRE9FO0lBQ0UsYUFBQTtFQ0pKO0FBQ0Y7O0FETUU7RUFDRTtJQUNFLGFBQUE7RUNKSjs7RURNRTtJQUNFLGdCQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NvcnQvc29ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50OyBcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuXG4ubGlzdC1pdGVte1xuICAgIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcbn1cblxuXG5cbmlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmRpdltzY3JvbGx4PXRydWVdLGRpdltzY3JvbGx5PXRydWVdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuZGl2W3Njcm9sbHg9dHJ1ZV0ge1xuICAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnJvdy1jdXN0b217XG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWFjdGl2YXRlZCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvciA6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4uaW9uLWl0ZW0tY3VzdG9te1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLmJhY2stY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWlvbi1jb2x7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVyLWJhY2stY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZm9vdGVyLWJ0bi1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM5RTIwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSB7XG4gICAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG5cbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNzVyZW0gIWltcG9ydGFudDsgXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOjEyODFweCkgeyAgXG4gICAgXG4gICAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG5cbiAgICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAvLyB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBcbiBcbiB9fVxuXG46Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXJ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cbiAgICAubW9iaWxlLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9iaWxlLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cbiAgfVxuXG5cblxuIiwiLmJveCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG5kaXZbc2Nyb2xseD10cnVlXSwgZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmRpdltzY3JvbGx4PXRydWVdIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucm93LWN1c3RvbSB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWFjdGl2YXRlZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taXRlbS1jdXN0b20ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1iYWNrLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb290ZXItYnRuLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzOUUyMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzOUUyMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gIDo6bmctZGVlcC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MXB4KSB7XG4gIDo6bmctZGVlcC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWhlYWRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/sort/sort.page.ts":
/*!***********************************!*\
  !*** ./src/app/sort/sort.page.ts ***!
  \***********************************/
/*! exports provided: SortPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPage", function() { return SortPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order-approval/show-approval-details-modal/show-approval-details-modal.page */ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts");
/* harmony import */ var _order_approval_show_approval_details_modal_approval_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-approval/show-approval-details-modal/approval-modal.service */ "./src/app/order-approval/show-approval-details-modal/approval-modal.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");









let SortPage = class SortPage {
    constructor(alertController, storage, router, approvalModalService, screenOrientation, elementRef) {
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.approvalModalService = approvalModalService;
        this.screenOrientation = screenOrientation;
        this.elementRef = elementRef;
        this.TAG = "SortPage";
        this.active = 0;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["ColumnMode"];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["SelectionType"];
        this.page = new _order_approval_show_approval_details_modal_show_approval_details_modal_page__WEBPACK_IMPORTED_MODULE_6__["Page"]();
        this.rows = new Array();
        this.page.pageNumber = 0;
        this.page.size = 20;
    }
    ngOnInit() {
        //  this.setPage({ offset: 0 });
        // set to landscape
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.filterList = [{ "name": "Date" }];
        this.getdata();
    }
    clearFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log(this, "clearFilter");
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Filters',
                    subHeader: 'Clear Filters',
                    message: 'Would you like to clear all filters?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: 'Ok',
                            handler: (data) => {
                                console.log('Confirm Okay');
                                this.startDate = "";
                                this.endDate = "";
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
    menuItemClick(index) {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    applyFilter() {
        console.log(this.TAG, "applyFilter method called");
        try {
            console.log(this.TAG, "applyFilter", this.startDate.split('T')[0]);
            console.log(this.TAG, "applyFilter", this.endDate.split('T')[0]);
            this.storage.set('filterStartDate', this.startDate ? this.startDate.split('T')[0] : 'CLEAR');
            this.storage.set('filterEndDate', this.endDate ? this.endDate.split('T')[0] : 'CLEAR');
            this.router.navigateByUrl('/order-approval');
            this.startDate;
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    setPage(pageInfo) {
        this.page.pageNumber = pageInfo.offset;
        this.approvalModalService.getApprovalDetails("1", "186", "12").subscribe(data => {
            console.log("Pravin Modal DATA ", data);
            this.column_data = data.colum_names;
            this.rows = data.colum_data;
        });
    }
    getdata() {
        this.approvalModalService.getApprovalDetails("1", "186", "12").subscribe(data => {
            console.log("Pravin Modal DATA ", data);
            this.column_data = data.data.colum_names;
            this.rows = data.data.colum_data;
        });
    }
    adjustColumnMinWidth() {
        const element = this.elementRef.nativeElement;
        const rows = element.getElementsByTagName("datatable-body-row");
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName("datatable-body-cell");
            for (let k = 0; k < cells.length; k++) {
                const cell = cells[k];
                const cellSizer = cell.children[0].children[0];
                const sizerWidth = cellSizer.getBoundingClientRect().width;
                if (this.column_data[k].minWidth < sizerWidth) {
                    this.column_data[k].minWidth = sizerWidth;
                }
            }
        }
    }
};
SortPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _order_approval_show_approval_details_modal_approval_modal_service__WEBPACK_IMPORTED_MODULE_7__["ApprovalModalService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datatable", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"])
], SortPage.prototype, "datatable", void 0);
SortPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sort',
        template: __webpack_require__(/*! raw-loader!./sort.page.html */ "./node_modules/raw-loader/index.js!./src/app/sort/sort.page.html"),
        styles: [__webpack_require__(/*! ./sort.page.scss */ "./src/app/sort/sort.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _order_approval_show_approval_details_modal_approval_modal_service__WEBPACK_IMPORTED_MODULE_7__["ApprovalModalService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], SortPage);



/***/ })

}]);
//# sourceMappingURL=sort-sort-module-es2015.js.map