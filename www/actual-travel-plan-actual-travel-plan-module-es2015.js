(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actual-travel-plan-actual-travel-plan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/actual-travel-plan/actual-travel-plan.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/actual-travel-plan/actual-travel-plan.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Visit Activity Report</ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"formactualtravel\">\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <h5 ion-text class=\"text-primary\">\n              <ion-icon name=\"person\"></ion-icon> Plan :\n            </h5>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Sales Person</ion-label>\n              <ion-input type=\"text\" [formControl]=\"formactualtravel.controls['salesperson']\" disabled=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label position=\"stacked\">Plan<span style=\"color:red!important\">*</span></ion-label>\n            <ion-select #C [formControl]=\"formactualtravel.controls['selectedplan']\" interface=\"popover\" placeholder=\"Select One\" (ionChange)='onChangeplan()'>\n              <ion-select-option value=\"A\">Plan A</ion-select-option>\n              <ion-select-option value=\"B\">Plan B</ion-select-option>\n              <ion-select-option value=\"C\">Plan C</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row> -->\n\n\n      <ion-row>\n        <ion-col>\n            <ion-item >\n              <ion-label position=\"stacked\">Plan<span style=\"color:red!important\">*</span></ion-label>\n              <ion-select #C [formControl]=\"formactualtravel.controls['selectedplan']\" interface=\"popover\" (ionChange)=\"onChangeplan()\" multiple=\"false\" placeholder=\"Select Plan\">\n                <ion-select-option *ngFor=\"let plan of salespersoninfo\" [value]=\"plan.mexp_visitplan_id\">{{plan.plan}}</ion-select-option>\n              </ion-select>\n              </ion-item>\n              <div padding-left>\n                <ng-container *ngFor=\"let validation of validation_messages.selectedplan\">\n                  <div *ngIf=\"formactualtravel.get('selectedplan').hasError(validation.type) && formactualtravel.get('selectedplan').touched\">\n                    <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                  </div>\n                </ng-container>\n              </div>\n        </ion-col>\n      </ion-row>\n\n\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>From Date</ion-label>\n              <ion-datetime placeholder=\"Select Date\" [disabled]=\"true\" [formControl]=\"formactualtravel.controls['fromdate']\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>To Date</ion-label>\n              <ion-datetime placeholder=\"Select Date\" [disabled]=\"true\" [formControl]=\"formactualtravel.controls['todate']\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Travel Date</ion-label>\n              <ion-datetime placeholder=\"Select Date\" [formControl]=\"formactualtravel.controls['traveldate']\" (ionChange)=\"ondatechange()\" displayFormat=\"DD.MM.YYYY\" [min]='traveldatemin' [max]='traveldatemax'></ion-datetime>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Home Lat</ion-label>\n              <ion-input type=\"text\" [formControl]=\"formactualtravel.controls['homelat']\" disabled=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Home Long</ion-label>\n              <ion-input type=\"text\" [formControl]=\"formactualtravel.controls['homelong']\" disabled=\"true\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label>Outstation?</ion-label>\n              <ion-checkbox slot=\"end\" [disabled]=\"true\" [checked]=\"outstation_chk_box\" [formControl]=\"formactualtravel.controls['outstationOrderChkCtrl']\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <h5 ion-text class=\"text-primary\">\n              <ion-icon name=\"bookmarks\"></ion-icon> Customer:\n            </h5>\n          </ion-col>\n          <ion-col>\n            <div style=\"display: none;\">\n          <ion-fab-button size=\"small\" float-right (click)=\"onAddLead(null,null)\">\t\n            <ion-icon name=\"add\"></ion-icon>\t\n          </ion-fab-button>\t\n            </div>\n        </ion-col>\n        </ion-row>\n\n\n\n      \n\n\n\n<div style=\"overflow-x:auto\">\n        <ion-grid>\n         <ion-row nowrap >\n          <ion-col nowrap>\n          <ion-row nowrap>\n           <ion-col col-3 size=\"4\" class=\"grid-header\">Line Number</ion-col>\n           <ion-col size=\"8\" class=\"grid-header\">Customer</ion-col>\n           <ion-col size=\"8\" class=\"grid-header\">Address</ion-col>\n           <ion-col size=\"2\" class=\"grid-header\">Day</ion-col>\n           <ion-col size=\"8\" class=\"grid-header\">Date</ion-col>\n           <!-- <ion-col size=\"5\" class=\"grid-header\">Address Lat</ion-col> -->\n           <!-- <ion-col size=\"5\" class=\"grid-header\">Address Long</ion-col> -->\n           <ion-col size=\"4\" class=\"grid-header\">KM</ion-col>\n           <ion-col size=\"4\" class=\"grid-header\">Status</ion-col>\n\n          </ion-row>\n        </ion-col>\n         </ion-row>\n        \n         <ion-row *ngFor=\"let data of leads; index as i\"  nowrap>\n          <ion-col nowrap>\n         <ion-row nowrap (click)=\"hideshowsublead(data)\">\n            <ion-col size=\"1\" style=\"width: 100%; text-align: right;\">\n              <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\" (click)=\"onAddLead(data,i)\" style=\"font-size: x-large;\">\n              </ion-icon>\n            </ion-col>\n            <ion-col size=\"1\" style=\"width: 100%; text-align: right;\">\n              <!-- <ion-icon name=\"trash\" (click)=\"removeLeads(data)\" style=\"font-size: x-large;\n              color: red;\"></ion-icon> -->\n            </ion-col>\n          <ion-col size=\"2\" class=\"forecast_div\">{{i+1}}</ion-col>\n          <ion-col size=\"8\" class=\"forecast_div\">{{data.custname}}</ion-col>\n          <ion-col size=\"8\" class=\"forecast_div\">{{data.addressname}}</ion-col>\n          <ion-col  size=\"2\"class=\"forecast_div\">{{data.visit_day}}</ion-col>\n          <ion-col size=\"8\" class=\"forecast_div\">{{data.visit_date}}</ion-col>\n          <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.latitude}}</ion-col> -->\n          <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.longitude}}</ion-col> -->\n          <ion-col size=\"4\" class=\"forecast_div\">{{data.km}} km</ion-col>\n          <!-- <ion-col size=\"3\" class=\"forecast_div\">{{data.status}}</ion-col> -->\n          <ion-col size=\"4\" class=\"forecast_div\">\n          <ion-select style=\"width: fit-content;\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"data.status\" interface=\"popover\">\n            <ion-select-option value=\"Actual\">Actual</ion-select-option>\n            <ion-select-option value=\"Cancel\">Cancel</ion-select-option>\n            <ion-select-option value=\"CNM\">Customer Not Meet</ion-select-option>\n          </ion-select>\n        </ion-col>\n\n          </ion-row>\n          <div *ngIf=\"data.show\">\n            <ion-row nowrap>\n              <ion-col nowrap>\n                <ion-row nowrap>\n                \n                 <ion-col size=\"4\" offsetLg=\"2\" class=\"grid-header\">Task</ion-col>\n                 <ion-col size=\"2\" class=\"grid-header\">Done?</ion-col>\n                </ion-row>\n\n                <ion-row *ngFor=\"let task of data.TaskList; index as i\" nowrap>\n                  \n                 <ion-col size=\"4\"  offsetLg=\"2\" class=\"forecast_div\">{{task.task}}</ion-col>\n                 <ion-col  size=\"2\" class=\"forecast_div\">\n                    <ion-checkbox [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"task.Done\"></ion-checkbox>\n                 </ion-col>\n                 <ion-col size=\"2\" class=\"forecast_div\" *ngIf=\"task.info_required!='N' && task.Done==true\" >\n                  <ion-textarea type=\"text\" placeholder=\"Remark\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"task.remark\"></ion-textarea>\n                </ion-col>\n                </ion-row>\n            \n\n              </ion-col>\n            </ion-row>\n                  \n            </div>\n        </ion-col>\n          </ion-row>\n       \n\n        </ion-grid>     \n      </div>\n              <ion-item float-right lines=\"none\">\n                <ion-button color=\"primary\" text-center (click)=\"onSaveActualTravelPlan(formactualtravel.value,false)\">Save Visit Report</ion-button>\n              </ion-item>\n              <ion-item float-right lines=\"none\">\n                <ion-button color=\"primary\" text-center (click)=\"onSaveActualTravelPlan(formactualtravel.value,true)\">Submit Visit Activity Report?</ion-button>\n              </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/actual-travel-plan/actual-travel-plan.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/actual-travel-plan/actual-travel-plan.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActualTravelPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualTravelPlanPageModule", function() { return ActualTravelPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _actual_travel_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actual-travel-plan.page */ "./src/app/actual-travel-plan/actual-travel-plan.page.ts");







const routes = [
    {
        path: '',
        component: _actual_travel_plan_page__WEBPACK_IMPORTED_MODULE_6__["ActualTravelPlanPage"]
    }
];
let ActualTravelPlanPageModule = class ActualTravelPlanPageModule {
};
ActualTravelPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_actual_travel_plan_page__WEBPACK_IMPORTED_MODULE_6__["ActualTravelPlanPage"]]
    })
], ActualTravelPlanPageModule);



/***/ }),

/***/ "./src/app/actual-travel-plan/actual-travel-plan.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/actual-travel-plan/actual-travel-plan.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n/* Hide ion-content scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\nh5 ion-icon {\n  color: lightcoral;\n}\n.inputfile {\n  color: transparent;\n}\n.forecast_container {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  height: 20vw;\n  font-size: 0.8em;\n  font-weight: 300;\n}\n.forecast_div {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  font-size: 0.8em;\n  font-weight: 300;\n  max-width: 175px;\n}\n.grid-header {\n  font-weight: bold;\n  max-width: 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9hY3R1YWwtdHJhdmVsLXBsYW4vYWN0dWFsLXRyYXZlbC1wbGFuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWN0dWFsLXRyYXZlbC1wbGFuL2FjdHVhbC10cmF2ZWwtcGxhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREVJO0VBQ0UscUJBQUE7QUNBTjtBREdJO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FETUU7RUFDRSxZQUFBO0FDSEo7QURNRSwrQkFBQTtBQUNBO0VBQ0UsYUFBQTtBQ0hKO0FETUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FESUk7RUFDRSxpQkFBQTtBQ0ZOO0FET0U7RUFDRSxrQkFBQTtBQ0pKO0FET0U7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSko7QURNQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEY7QURLQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGQSIsImZpbGUiOiJzcmMvYXBwL2FjdHVhbC10cmF2ZWwtcGxhbi9hY3R1YWwtdHJhdmVsLXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNjcm9sbFtzY3JvbGxYXSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgIC8vIGhlaWdodDogMTIwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbi8vIHdpZHRoOjEwMCU7XG4gICAgLnNjcm9sbC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuc2VsZWN0YWJsZS1pY29ue1xuICAgICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciBpbWd7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNjcm9sbFtzY3JvbGwtYXZhdGFyXXtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAvKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuXG4gIGg1e1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgY29sb3I6IGRhcmtjeWFuO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgaW9uLWljb257XG4gICAgICBjb2xvcjogbGlnaHRjb3JhbDtcbiAgICB9XG5cbiAgfVxuICBcbiAgLmlucHV0ZmlsZSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmZvcmVjYXN0X2NvbnRhaW5lcntcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXg6IHZpc2libGUhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OjIwdnc7XG4gICAgZm9udC1zaXplOjAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbn1cbi5mb3JlY2FzdF9kaXZ7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IHZpc2libGUhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOjAuOGVtO1xuICBmb250LXdlaWdodDozMDA7XG4gIG1heC13aWR0aDogMTc1cHg7XG59XG4uZ3JpZC1oZWFkZXJ7XG5mb250LXdlaWdodDogYm9sZDtcbm1heC13aWR0aDogMTc1cHg7XG59IiwiaW9uLXNjcm9sbFtzY3JvbGxYXSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuaW9uLXNjcm9sbFtzY3JvbGxYXSAuc2Nyb2xsLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zZWxlY3RhYmxlLWljb24ge1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIGlvbi1hdmF0YXIgaW1nIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJdIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4vKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmg1IHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6IGRhcmtjeWFuO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaDUgaW9uLWljb24ge1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuLmlucHV0ZmlsZSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcmVjYXN0X2NvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy14OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoZWlnaHQ6IDIwdnc7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5mb3JlY2FzdF9kaXYge1xuICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cblxuLmdyaWQtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTc1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/actual-travel-plan/actual-travel-plan.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/actual-travel-plan/actual-travel-plan.page.ts ***!
  \***************************************************************/
/*! exports provided: ActualTravelPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualTravelPlanPage", function() { return ActualTravelPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _actual_travel_plan_actual_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actual-travel-plan/actual-travel-plan.service */ "./src/app/actual-travel-plan/actual-travel-plan.service.ts");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");








let ActualTravelPlanPage = class ActualTravelPlanPage {
    constructor(fb, commonfun, router, route, loginauth, actualtravelplanservice, msg) {
        this.fb = fb;
        this.commonfun = commonfun;
        this.router = router;
        this.route = route;
        this.loginauth = loginauth;
        this.actualtravelplanservice = actualtravelplanservice;
        this.msg = msg;
        this.TAG = 'ActualTravelPlanPage';
        this.validation_messages = {
            'selectedplan': [
                { type: 'required', message: ' *Please Select Plan.' }
            ]
        };
        this.addsublead();
        this.formactualtravel = this.fb.group({
            salesperson: [],
            fromdate: [],
            todate: [],
            traveldate: [],
            homelat: [],
            homelong: [],
            outstationOrderChkCtrl: [],
            selectedplan: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        if (this.msg.isplatformweb == true) {
            // this.commonfun.chkcache('actual-travel-plan');
            setTimeout(() => {
                this.getsalesperson();
            }, 1500);
        }
        else {
            setTimeout(() => {
                this.getsalesperson();
            }, 1500);
        }
    }
    /**
       * @kind function
       * @summary This method will get sales person.
       * @since 1.0.0
       * @returns void
       * @public
       * @module Travel Expense
       * @author Nilesh Patil
       */
    getsalesperson() {
        let methodTAG = 'getsalesperson';
        try {
            //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
            this.commonfun.loadingPresent();
            this.actualtravelplanservice.getWMobileUserWisePlanData("N").subscribe(data => {
                this.commonfun.loadingDismiss();
                var response = data;
                this.salespersoninfo = response;
                this.formactualtravel.controls["salesperson"].setValue(this.salespersoninfo[0].salesperson);
                this.fromdate = this.salespersoninfo[0].fromdate;
                this.todate = this.salespersoninfo[0].todate;
                this.formactualtravel.controls["homelat"].setValue(this.salespersoninfo[0].latitude);
                this.formactualtravel.controls["homelong"].setValue(this.salespersoninfo[0].longitude);
            }, error => {
                //  console.log(this.TAG,methodTAG,error)
                this.commonfun.loadingDismiss();
                this.commonfun.presentAlert("Message", "Error", error.error);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            // console.log(this.TAG,methodTAG,error)
            this.commonfun.presentAlert("Message", "Error", error.error);
        }
    }
    Dateconversion() {
        try {
            var dl1date = new Date(this.fromdate);
            var nmonth = dl1date.getMonth() + 1;
            var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate());
            var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth);
            var yyyy1 = dl1date.getFullYear();
            this.strfromdate = dd1 + "-" + mm1 + "-" + yyyy1;
            var dl2date = new Date(this.fromdate);
            var nmonth = dl2date.getMonth() + 1;
            var dd2 = (dl2date.getDate() < 10 ? "0" + dl2date.getDate() : dl2date.getDate());
            var mm2 = (nmonth < 10 ? "0" + nmonth : nmonth);
            var yyyy2 = dl2date.getFullYear();
            this.strtodate = dd2 + "-" + mm2 + "-" + yyyy2;
            var dl3date = new Date(this.traveldate);
            var nmonth3 = dl3date.getMonth() + 1;
            var dd3 = (dl3date.getDate() < 10 ? "0" + dl3date.getDate() : dl3date.getDate());
            var mm3 = (nmonth3 < 10 ? "0" + nmonth3 : nmonth3);
            var yyyy3 = dl3date.getFullYear();
            this.strtraveldate = dd3 + "-" + mm3 + "-" + yyyy3;
            this.d1 = new Date(this.fromdate);
            this.d3 = new Date(this.traveldate);
            this.days = ((this.d3 - this.d1) / (24 * 3600 * 1000)) + 1;
        }
        catch (error) {
            //  console.log("Error",error)
        }
    }
    toggle(selectedcartproduct) {
        if (selectedcartproduct.show == false) {
            for (var i = 0; i < this.leads.length; i++) {
                if (this.leads[i].show === "true") {
                    this.leads[i].show = "false";
                }
            }
        }
        selectedcartproduct.show = !selectedcartproduct.show;
    }
    onChangeplan() {
        this.commonfun.loadingPresent();
        this.actualtravelplanservice.getWMobileUserWisePlanData("N", this.formactualtravel.controls["selectedplan"].value).subscribe(data => {
            this.commonfun.loadingDismiss();
            var result = data;
            //console.log("PLAN", result);
            if (result.length === 0) {
                return;
            }
            this.leads = result[0].AddressList;
            this.formactualtravel.controls["fromdate"].setValue(this.dateyyyymmddT0000Z(result[0].fromdate));
            this.formactualtravel.controls["todate"].setValue(this.dateyyyymmddT0000Z(result[0].todate));
            if (this.formactualtravel.controls["fromdate"].value == this.formactualtravel.controls["todate"].value)
                this.formactualtravel.controls["traveldate"].setValue(this.dateyyyymmddT0000Z(result[0].fromdate));
            else
                this.formactualtravel.controls["traveldate"].setValue(null);
            if (result[0].outstation == 'Y') {
                this.outstation_chk_box = true;
            }
            else {
                this.outstation_chk_box = false;
            }
            //---------------------this.dateyyyymmddT0000Z(result[0].todate)).toISOString()
            var df = this.formactualtravel.controls["fromdate"].value;
            var dt = this.formactualtravel.controls["todate"].value;
            this.traveldatemin = new Date(this.dateyyyymmddT0000Z(result[0].fromdate)).toISOString();
            this.traveldatemax = new Date(this.dateyyyymmddT0000Z(result[0].todate)).toISOString();
            //-----------------------
        });
    }
    onAddLead(item, i) {
        try {
            // if(this.checkplancount()==false)
            // {
            //   return
            // }
            if (this.traveldate == undefined || this.traveldate == null) {
                this.commonfun.presentAlert("Message", "Alert", "Please select Travel Date.");
                return;
            }
            this.Dateconversion();
            let navigationExtras = {
                state: {
                    selectedLead: item,
                    allleads: this.leads,
                    fromdate: this.strfromdate,
                    todate: this.todate,
                    mexp_visitplan_id: this.formactualtravel.controls["selectedplan"].value,
                    days: this.days,
                    traveldate: this.strtraveldate,
                    index: i,
                    outOrderChkCtrl: this.formactualtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false"
                }
            };
            this.router.navigate(['addedit-actual-travel-plan'], navigationExtras);
            // this.formprod.controls["selectedBusinessPartner"].
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    removeLeads(post) {
        try {
            let index = this.leads.indexOf(post);
            const result = this.leads.filter(item => item.line != post.line);
            this.leads = result;
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    // checkplancount(){
    //   try {
    //     if(this.leads){
    //       if(this.leads.length>=this.loginauth.maxcustomerinplan)
    //       {
    //         this.commonfun.presentAlert("Message","Alert!","Your plan is full.");
    //         return false;
    //       }
    //       else{
    //         return true;
    //       }
    //     }
    //     else{
    //       return true;
    //     }
    //   } catch (error) {
    //     console.log("Error: checkplancount :",error);
    //   }
    // }
    removesubLeads(data, subdata) {
        try {
            for (var k = 0; k < this.leads.length; k++) {
                if (this.leads[k].selectedddlsubleads) {
                    if (this.leads[k].selectedddlsubleads.some(it => it = subdata)) {
                        const result = this.leads[k].selectedddlsubleads.filter(item => item != subdata);
                        this.leads[k].selectedddlsubleads = result;
                    }
                }
            }
            // let index = this.leads.indexOf(data);
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    dateyyyymmddT0000Z(dt) {
        try {
            var dl1date = new Date(dt.substr(0, 4), dt.substr(5, 2) - 1, dt.substr(8, 2));
            var nmonth = dl1date.getMonth() + 1;
            var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate());
            var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth);
            var yyyy1 = dl1date.getFullYear();
            // this.strfromdate=dd1+"-"+mm1+"-"+yyyy1
            return (yyyy1 + "-" + mm1 + "-" + dd1 + "T00:00Z");
        }
        catch (error) {
        }
    }
    ondatechange() {
        try {
            this.traveldate = null;
            var df = this.formactualtravel.controls["fromdate"].value;
            var dt = this.formactualtravel.controls["todate"].value;
            var dtr = this.formactualtravel.controls["traveldate"].value;
            //---------------------
            this.traveldatemin = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
            this.traveldatemax = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
            //-----------------------
            if (dtr != null && dtr != undefined) {
                this.fromdate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
                this.todate = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
                this.traveldate = new Date(this.dateyyyymmddT0000Z(dtr)).toISOString();
                if (this.traveldate < this.fromdate || this.traveldate > this.todate) {
                    this.commonfun.presentAlert("Message", "Alert", "Travel Date must be in the range of from date and to date.");
                    this.formactualtravel.controls["traveldate"].setValue(this.fromdate);
                }
            }
        }
        catch (error) {
            // console.log("ondatechange()-ERROR:",error);
        }
    }
    addsublead() {
        try {
            this.route.params.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    var selectedddlsubleads = this.router.getCurrentNavigation().extras.state.selectedddlsubleads;
                    var selectedLead = this.router.getCurrentNavigation().extras.state.selectedLead;
                    //  for(var k=0;k<this.leads.length;k++){
                    // if(this.leads[k].lead===selectedLead.lead){
                    //   this.leads[k].selectedddlsubleads=selectedddlsubleads;
                    // } 
                    // }
                }
            });
            //  console.log("addsublead()-this.leads:",this.leads);
        }
        catch (error) {
            console.log("addsublead()-ERROR:", error);
        }
    }
    hideshowsublead(selectedLead) {
        if (selectedLead.show == false) {
            for (var i = 0; i < this.leads.length; i++) {
                if (this.leads[i].show === "true") {
                    this.leads[i].show = "false";
                }
            }
        }
        selectedLead.show = !selectedLead.show;
    }
    onSaveActualTravelPlan(frnvala, issubmit) {
        try {
            console.log("LEAD ACUTAL", this.leads);
            if (this.traveldate == null || this.traveldate == undefined) {
                this.commonfun.presentAlert("Message", "Alert", "Please select Travel Date.");
                return;
            }
            console.log("TEST", this.leads);
            let showError = false;
            this.leads.forEach(item => {
                item.TaskList.forEach(taskItem => {
                    if (taskItem.info_required == 'Y') {
                        if (taskItem.Done == true) {
                            if (taskItem.remark == null || taskItem.remark == "" || taskItem.remark == undefined) {
                                showError = true;
                            }
                        }
                    }
                });
            });
            if (showError) {
                this.commonfun.presentAlert("Expense Closure", "Validation", "Please enter remark for task ");
            }
            else {
                this.Dateconversion();
                this.commonfun.loadingPresent();
                var jsondatatemp = {
                    "salesperson": this.salespersoninfo[0].salesperson,
                    "mexp_customervisit_id": this.salespersoninfo[0].salespersonid,
                    "salespersonid": this.salespersoninfo[0].salespersonid,
                    "addid": this.salespersoninfo[0].addid,
                    "longitude": this.salespersoninfo[0].longitude,
                    "mexp_visitplan_id": frnvala.selectedplan,
                    "AddressList": this.leads,
                    "latitude": this.salespersoninfo[0].latitude,
                    "fromdate": this.strfromdate,
                    "todate": this.strtodate,
                    "issubmit": issubmit
                };
                //--------------
                this.actualtravelplanservice.SaveActualPlan(jsondatatemp).subscribe(data => {
                    if (data != null) {
                        this.saveplanresponse = data;
                        if (this.saveplanresponse.resposemsg == "Success") {
                            this.commonfun.loadingDismiss();
                            this.commonfun.presentAlert("Message", this.saveplanresponse.resposemsg, this.saveplanresponse.logmsg);
                            this.Resetpage();
                        }
                        else {
                            this.commonfun.loadingDismiss();
                            //  this.Resetpage();
                            this.commonfun.presentAlert("Message", this.saveplanresponse.resposemsg, this.saveplanresponse.logmsg);
                        }
                    }
                }, error => {
                    this.commonfun.loadingDismiss();
                    //  console.log("error",error);
                    this.commonfun.presentAlert("Message", "Error!", error);
                });
                //------------------
            }
        }
        catch (error) {
        }
    }
    Resetpage() {
        try {
            //  this.fromdate=new Date().toISOString();
            // this.todate=new Date().toISOString();
            this.traveldate = null;
            this.formactualtravel.reset();
            this.leads = null;
            setTimeout(() => {
                this.getsalesperson();
            }, 1500);
        }
        catch (error) {
            //        console.log("Resetpage()-ERROR:",error);
        }
    }
};
ActualTravelPlanPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _actual_travel_plan_actual_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["ActualTravelPlanService"] },
    { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"] }
];
ActualTravelPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actual-travel-plan',
        template: __webpack_require__(/*! raw-loader!./actual-travel-plan.page.html */ "./node_modules/raw-loader/index.js!./src/app/actual-travel-plan/actual-travel-plan.page.html"),
        styles: [__webpack_require__(/*! ./actual-travel-plan.page.scss */ "./src/app/actual-travel-plan/actual-travel-plan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
        _actual_travel_plan_actual_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["ActualTravelPlanService"],
        _provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"]])
], ActualTravelPlanPage);



/***/ })

}]);
//# sourceMappingURL=actual-travel-plan-actual-travel-plan-module-es2015.js.map