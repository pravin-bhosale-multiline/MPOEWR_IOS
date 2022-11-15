(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-plan-closure-travel-plan-closure-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-plan-closure/travel-plan-closure.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-plan-closure/travel-plan-closure.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Expense Closure</ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"travelPlanClosureForm\" (ngSubmit)=\"onSaveTravelPlanClosure(travelPlanClosureForm.value)\">\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <h5 ion-text class=\"text-primary\">\n                    <ion-icon name=\"person\"></ion-icon> Plan :\n                  </h5>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label position=\"floating\">Sales Person</ion-label>\n                    <ion-input type=\"text\" [formControl]=\"travelPlanClosureForm.controls['salesperson']\"\n                      disabled=\"true\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label position=\"stacked\">Plan<span style=\"color:red!important\">*</span></ion-label>\n                    <ion-select #C [formControl]=\"travelPlanClosureForm.controls['selectedplan']\" interface=\"popover\"\n                      (ionChange)=\"onChangeplan()\" multiple=\"false\" placeholder=\"Select Plan\">\n                      <ion-select-option *ngFor=\"let plan of salespersoninfo\" [value]=\"plan.mexp_visitplan_id\">\n                        {{plan.plan}}</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                  <div padding-left>\n                    <ng-container *ngFor=\"let validation of validation_messages.selectedplan\">\n                      <div\n                        *ngIf=\"travelPlanClosureForm.get('selectedplan').hasError(validation.type) && travelPlanClosureForm.get('selectedplan').touched\">\n                        <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                      </div>\n                    </ng-container>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>From Date</ion-label>\n                    <ion-datetime placeholder=\"Select Date\" [disabled]=\"true\"\n                      [formControl]=\"travelPlanClosureForm.controls['fromdate']\" displayFormat=\"DD.MM.YYYY\" max=\"2050\">\n                    </ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>To Date</ion-label>\n                    <ion-datetime placeholder=\"Select Date\" [disabled]=\"true\"\n                      [formControl]=\"travelPlanClosureForm.controls['todate']\" displayFormat=\"DD.MM.YYYY\" max=\"2050\">\n                    </ion-datetime>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label position=\"floating\">Home Lat</ion-label>\n                    <ion-input type=\"text\" [formControl]=\"travelPlanClosureForm.controls['homelat']\" disabled=\"true\">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label position=\"floating\">Home Long</ion-label>\n                    <ion-input type=\"text\" [formControl]=\"travelPlanClosureForm.controls['homelong']\" disabled=\"true\">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Outstation?</ion-label>\n                    <ion-checkbox slot=\"end\" disabled=\"true\" [checked]=\"outstation_chk_box\"\n                      [formControl]=\"travelPlanClosureForm.controls['outstationChkCtrl']\"></ion-checkbox>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n          <!-- Customer Detail Card -->\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <h5 ion-text class=\"text-primary\">\n                    <ion-icon name=\"bookmarks\"></ion-icon> Customer:\n                  </h5>\n                </ion-col>\n                <ion-col>\n                  <div style=\"display: none;\">\n                    <ion-fab-button size=\"small\" float-right (click)=\"onAddLead(null)\">\n                      <ion-icon name=\"add\"></ion-icon>\n                    </ion-fab-button>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <div style=\"overflow-x:auto\">\n                <ion-grid>\n                  <ion-row nowrap>\n                    <ion-col nowrap>\n                      <ion-row nowrap>\n                        <ion-col col-3 size=\"4\" class=\"grid-header\">Line Number</ion-col>\n                        <ion-col size=\"8\" class=\"grid-header\">Customer</ion-col>\n                        <ion-col size=\"8\" class=\"grid-header\">Address</ion-col>\n                        <ion-col size=\"4\" class=\"grid-header\">Day</ion-col>\n                        <ion-col size=\"6\" class=\"grid-header\">Date</ion-col>\n                        <!-- <ion-col size=\"5\" class=\"grid-header\">Address Lat</ion-col> -->\n                        <!-- <ion-col size=\"5\" class=\"grid-header\">Address Long</ion-col> -->\n                        <ion-col size=\"2\" class=\"grid-header\">KM</ion-col>\n                        <ion-col size=\"4\" class=\"grid-header\">Status</ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row *ngFor=\"let data of leads; index as i\" nowrap>\n                    <ion-col nowrap>\n                      <ion-row nowrap (click)=\"hideshowsublead(data)\">\n                        <ion-col size=\"1\" style=\"width: 100%; text-align: right;\">\n                          <ion-icon ios=\"ios-checkmark-circle\" md=\"checkmark-circle\" style=\"font-size: x-large;\">\n                          </ion-icon>\n                        </ion-col>\n                        <ion-col size=\"1\" style=\"width: 100%; text-align: right;\">\n\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"forecast_div\">{{data.line}}</ion-col>\n                        <ion-col size=\"8\" class=\"forecast_div\">{{data.custname}}</ion-col>\n                        <ion-col size=\"8\" class=\"forecast_div\">{{data.addressname}}</ion-col>\n                        <ion-col size=\"4\" class=\"forecast_div\">{{data.visit_day}}</ion-col>\n                        <ion-col size=\"6\" class=\"forecast_div\">{{data.visit_date}}</ion-col>\n                        <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.latitude}}</ion-col> -->\n                        <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.longitude}}</ion-col> -->\n                        <ion-col size=\"2\" class=\"forecast_div\">{{data.km}} km</ion-col>\n                        <ion-col size=\"4\" class=\"forecast_div\">{{data.status}}</ion-col>\n\n                        <!-- <ion-col size=\"3\" class=\"forecast_div\">{{data.status}}</ion-col> -->\n\n                      </ion-row>\n                      <div *ngIf=\"data.show\">\n                        <ion-row nowrap>\n                          <ion-col nowrap>\n                            <ion-row nowrap>\n                              <ion-col size=\"4\" offsetLg=\"2\"  class=\"grid-header\">Task</ion-col>\n                              <ion-col size=\"2\" class=\"grid-header\">Done?</ion-col>\n                            </ion-row>\n                            <ion-row *ngFor=\"let task of data.TaskList; index as i\" nowrap>\n                              <ion-col size=\"4\"  offsetLg=\"2\" class=\"forecast_div\">{{task.task}}</ion-col>\n                              <ion-col size=\"2\" class=\"forecast_div\">\n                               <ion-checkbox disabled=\"true\" [ngModelOptions]=\"{standalone: true}\"\n                                  [(ngModel)]=\"task.Done\"></ion-checkbox>\n                              </ion-col>\n                              <!-- <ion-col size=\"2\" class=\"forecast_div\" *ngIf=\"task.info_required!='N'\" >\n                                <ion-textarea type=\"text\" placeholder=\"Remark\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"task.remark\"></ion-textarea>\n                              </ion-col> -->\n                            </ion-row>\n                          </ion-col>\n                        </ion-row>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <h5 ion-text class=\"text-primary\">\n                    <ion-icon name=\"wifi\"></ion-icon> Expense Detail\n                  </h5>\n                </ion-col>\n              </ion-row>\n              <div style=\"overflow-x:auto\">\n                <ion-grid>\n                  <ion-row nowrap>\n                    <ion-col nowrap>\n                      <ion-row nowrap>\n                        <ion-col size=\"6\" class=\"grid-header\">From</ion-col>\n                        <ion-col size=\"6\" class=\"grid-header\">To</ion-col>\n                        <ion-col size=\"6\" class=\"grid-header\">Travel Expense</ion-col>\n                        <ion-col size=\"6\" class=\"grid-header\">Amount</ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row *ngFor=\"let data of expenseList; index as i\" nowrap>\n                    <ion-col nowrap>\n                      <ion-row nowrap>\n                        <ion-col size=\"6\" class=\"forecast_div\">{{data.fromdate}}</ion-col>\n                        <ion-col size=\"6\" class=\"forecast_div\">{{data.todate}}</ion-col>\n                        <ion-col size=\"6\" class=\"forecast_div\">{{data.travel_expence}}</ion-col>\n                        <ion-col size=\"6\" class=\"forecast_div\">{{data.amount}}</ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row nowrap>\n                    <ion-col nowrap>\n                      <ion-row nowrap>\n                        <ion-col size=\"6\" class=\"grid-header\"></ion-col>\n                        <ion-col size=\"6\" class=\"grid-header\"></ion-col>\n                        <ion-col size=\"6\" class=\"grid-header\"></ion-col>\n                        <ion-col size=\"6\" class=\"grid-header\">{{sumtotalamount}}</ion-col>\n                      </ion-row>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n            </ion-card-content>\n          </ion-card>\n          <ion-item float-right lines=\"none\">\n            <ion-button color=\"primary\" text-center (click)=\"onSaveTravelPlanClosure(travelPlanClosureForm.value)\">Close\n              Plan</ion-button>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/travel-plan-closure/travel-plan-closure.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/travel-plan-closure/travel-plan-closure.module.ts ***!
  \*******************************************************************/
/*! exports provided: TravelPlanClosurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlanClosurePageModule", function() { return TravelPlanClosurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_plan_closure_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travel-plan-closure.page */ "./src/app/travel-plan-closure/travel-plan-closure.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");









var routes = [
    {
        path: '',
        component: _travel_plan_closure_page__WEBPACK_IMPORTED_MODULE_7__["TravelPlanClosurePage"]
    }
];
var TravelPlanClosurePageModule = /** @class */ (function () {
    function TravelPlanClosurePageModule() {
    }
    TravelPlanClosurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_8__["IonicSelectableModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_plan_closure_page__WEBPACK_IMPORTED_MODULE_7__["TravelPlanClosurePage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], TravelPlanClosurePageModule);
    return TravelPlanClosurePageModule;
}());



/***/ }),

/***/ "./src/app/travel-plan-closure/travel-plan-closure.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/travel-plan-closure/travel-plan-closure.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-grid {\n  overflow-x: scroll !important;\n}\n\n.custom-ion-row {\n  display: table !important;\n  white-space: nowrap !important;\n}\n\nion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\n\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\n\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\n\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\n\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n\n/* Hide ion-content scrollbar */\n\n::-webkit-scrollbar {\n  display: none;\n}\n\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large !important;\n}\n\nh5 ion-icon {\n  color: lightcoral;\n}\n\n.forecast_container {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  height: 20vw;\n  font-size: 0.8em;\n  font-weight: 300;\n}\n\n.forecast_div {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  font-size: 0.8em;\n  font-weight: 300;\n  max-width: 175px;\n}\n\n.grid-header {\n  font-weight: bold;\n  max-width: 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC90cmF2ZWwtcGxhbi1jbG9zdXJlL3RyYXZlbC1wbGFuLWNsb3N1cmUucGFnZS5zY3NzIiwic3JjL2FwcC90cmF2ZWwtcGxhbi1jbG9zdXJlL3RyYXZlbC1wbGFuLWNsb3N1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7QUNDSjs7QURDQTtFQUVJLHlCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREVJO0VBQ0UscUJBQUE7QUNBTjs7QURHSTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDRE47O0FESUk7RUFDRSxZQUFBO0FDRk47O0FETUU7RUFDRSxZQUFBO0FDSEo7O0FETUUsK0JBQUE7O0FBQ0E7RUFDRSxhQUFBO0FDSEo7O0FETUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0hKOztBRElJO0VBQ0UsaUJBQUE7QUNGTjs7QURPRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURNQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FES0E7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRkEiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwtcGxhbi1jbG9zdXJlL3RyYXZlbC1wbGFuLWNsb3N1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1ncmlke1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1pb24tcm93XG57XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDsgICAgICAgXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG5pb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgLy8gaGVpZ2h0OiAxMjBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuLy8gd2lkdGg6MTAwJTtcbiAgICAuc2Nyb2xsLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5zZWxlY3RhYmxlLWljb257XG4gICAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIGltZ3tcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gIH1cblxuICBpb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJde1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC8qIEhpZGUgaW9uLWNvbnRlbnQgc2Nyb2xsYmFyICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgaDV7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBjb2xvcjogZGFya2N5YW47XG4gICAgZm9udC1zaXplOiBsYXJnZSFpbXBvcnRhbnQ7XG4gICAgaW9uLWljb257XG4gICAgICBjb2xvcjogbGlnaHRjb3JhbDtcbiAgICB9XG5cbiAgfVxuICBcbiAgLmZvcmVjYXN0X2NvbnRhaW5lcntcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXg6IHZpc2libGUhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OjIwdnc7XG4gICAgZm9udC1zaXplOjAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbn1cbi5mb3JlY2FzdF9kaXZ7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IHZpc2libGUhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOjAuOGVtO1xuICBmb250LXdlaWdodDozMDA7XG4gIG1heC13aWR0aDogMTc1cHg7XG59XG4uZ3JpZC1oZWFkZXJ7XG5mb250LXdlaWdodDogYm9sZDtcbm1heC13aWR0aDogMTc1cHg7XG59IiwiLnNjcm9sbC1ncmlkIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20taW9uLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuaW9uLXNjcm9sbFtzY3JvbGxYXSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuaW9uLXNjcm9sbFtzY3JvbGxYXSAuc2Nyb2xsLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zZWxlY3RhYmxlLWljb24ge1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIGlvbi1hdmF0YXIgaW1nIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJdIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4vKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmg1IHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6IGRhcmtjeWFuO1xuICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XG59XG5oNSBpb24taWNvbiB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uZm9yZWNhc3RfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IHZpc2libGUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogMjB2dztcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZvcmVjYXN0X2RpdiB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy14OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXgtd2lkdGg6IDE3NXB4O1xufVxuXG4uZ3JpZC1oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/travel-plan-closure/travel-plan-closure.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/travel-plan-closure/travel-plan-closure.page.ts ***!
  \*****************************************************************/
/*! exports provided: TravelPlanClosurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlanClosurePage", function() { return TravelPlanClosurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _travel_plan_closure_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel-plan-closure.service */ "./src/app/travel-plan-closure/travel-plan-closure.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _actual_travel_plan_actual_travel_plan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actual-travel-plan/actual-travel-plan.service */ "./src/app/actual-travel-plan/actual-travel-plan.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");









/**
 * @see https://www.positronx.io/create-ionic-data-table-with-ngx-datatable/
 */
var TravelPlanClosurePage = /** @class */ (function () {
    function TravelPlanClosurePage(travelPlanClosureFormBuilder, travelPlanClosureService, http, loginauth, actualtravelplanservice, commonfun, msg) {
        this.travelPlanClosureFormBuilder = travelPlanClosureFormBuilder;
        this.travelPlanClosureService = travelPlanClosureService;
        this.http = http;
        this.loginauth = loginauth;
        this.actualtravelplanservice = actualtravelplanservice;
        this.commonfun = commonfun;
        this.msg = msg;
        //
        this.TAG = 'Travel Plan ClosurePage';
        this.sumtotalamount = 0;
        this.expenseList = [];
        this.validation_messages = {
            'selectedplan': [
                { type: 'required', message: ' *Please Select Plan.' }
            ],
            'remarkErrorMessage': [{ type: 'required', message: ' *Please Enter Your Remark.' }]
        };
        this.travelPlanClosureForm = this.travelPlanClosureFormBuilder.group({
            salesperson: [],
            fromdate: [],
            todate: [],
            homelat: [],
            homelong: [],
            outstationChkCtrl: [],
            remarkCtrl: [],
            selectedplan: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    TravelPlanClosurePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                setTimeout(function () {
                    _this.getsalesperson();
                }, 1500);
                return [2 /*return*/];
            });
        });
    };
    TravelPlanClosurePage.prototype.getsalesperson = function () {
        var _this = this;
        var methodTAG = 'getsalesperson';
        try {
            //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
            this.commonfun.loadingPresent();
            this.actualtravelplanservice.getWMobileUserWisePlanData("Y").subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data;
                // console.log("nnnn",response[0].salesperson);
                _this.salespersoninfo = response;
                //  console.log("this.salespersoninfo", this.salespersoninfo);
                _this.travelPlanClosureForm.controls["salesperson"].setValue(_this.salespersoninfo[0].salesperson);
                _this.fromdate = _this.salespersoninfo[0].fromdate;
                _this.todate = _this.salespersoninfo[0].todate;
                _this.travelPlanClosureForm.controls["homelat"].setValue(_this.salespersoninfo[0].latitude);
                _this.travelPlanClosureForm.controls["homelong"].setValue(_this.salespersoninfo[0].longitude);
                // this.first10leads=response.AddressList
            }, function (error) {
                //  console.log(this.TAG, methodTAG, error)
                _this.commonfun.loadingDismiss();
                _this.commonfun.presentAlert("Message", "Error", error.error);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            //  console.log(this.TAG, methodTAG, error)
            this.commonfun.presentAlert("Message", "Error", error.error);
        }
    };
    TravelPlanClosurePage.prototype.Dateconversion = function () {
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
        }
        catch (error) {
        }
    };
    TravelPlanClosurePage.prototype.toggle = function (selectedcartproduct) {
        if (selectedcartproduct.show == false) {
            for (var i = 0; i < this.leads.length; i++) {
                if (this.leads[i].show === "true") {
                    this.leads[i].show = "false";
                }
            }
        }
        selectedcartproduct.show = !selectedcartproduct.show;
    };
    TravelPlanClosurePage.prototype.onChangeplan = function () {
        //  console.log("onChangeplan");
        //  console.log("selectedplan", this.travelPlanClosureForm.controls["selectedplan"].value);
        var _this = this;
        //this.travelPlanClosureForm.controls["selectedplan"].value;
        // var result = this.salespersoninfo.filter(item => item.mexp_visitplan_id == this.travelPlanClosureForm.controls["selectedplan"].value);
        //  console.log("selectedplan", result);
        //  console.log("selectedplan", result[0].AddressList);
        this.commonfun.loadingPresent();
        this.actualtravelplanservice.getWMobileUserWisePlanData("Y", this.travelPlanClosureForm.controls["selectedplan"].value).subscribe(function (data) {
            _this.commonfun.loadingDismiss();
            var result = data;
            //console.log("PLAN", result);
            if (result.length === 0) {
                return;
            }
            _this.leads = result[0].AddressList;
            _this.expenseList = result[0].ExpenseList;
            // console.log("onChangeplan",result);
            if (result[0].outstation == 'Y') {
                _this.outstation_chk_box = true;
            }
            else {
                _this.outstation_chk_box = false;
            }
            _this.travelPlanClosureForm.controls["fromdate"].setValue(_this.dateyyyymmddT0000Z(result[0].fromdate));
            _this.travelPlanClosureForm.controls["todate"].setValue(_this.dateyyyymmddT0000Z(result[0].todate));
            var TotalAmount = _this.expenseList.reduce(function (sum, item) { return sum + (item.amount == "" ? 0 : Number(item.amount)); }, 0);
            _this.sumtotalamount = TotalAmount; //-Number(this.formprod.controls["tobeRedeem"].value);
        });
    };
    TravelPlanClosurePage.prototype.dateyyyymmddT0000Z = function (dt) {
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
    };
    TravelPlanClosurePage.prototype.hideshowsublead = function (selectedLead) {
        if (selectedLead.show == false) {
            for (var i = 0; i < this.leads.length; i++) {
                if (this.leads[i].show === "true") {
                    this.leads[i].show = "false";
                }
            }
        }
        selectedLead.show = !selectedLead.show;
    };
    TravelPlanClosurePage.prototype.onAddLead = function (val) { };
    TravelPlanClosurePage.prototype.ondatechange = function () {
        try {
            //   var df=this.travelPlanClosureForm.controls["fromdate"].value;
            //   var dt=this.travelPlanClosureForm.controls["todate"].value;
            //   var dtr=this.travelPlanClosureForm.controls["traveldate"].value;
            // this.fromdate=new Date(this.dateyyyymmddT0000Z(df)).toISOString();
            // this.todate=new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
            // this.traveldate=new Date(this.dateyyyymmddT0000Z(dtr)).toISOString();
            //     if(this.traveldate<this.fromdate || this.traveldate>this.todate){
            //       this.commonfun.presentAlert("Message", "Alert", "Travel Date must be in the range of from date and to date.");
            //       this.travelPlanClosureForm.controls["traveldate"].setValue(this.fromdate);
            //     }
        }
        catch (error) {
            //  console.log("ondatechange()-ERROR:", error);
        }
    };
    TravelPlanClosurePage.prototype.onSaveTravelPlanClosure = function (frnvala) {
        var _this = this;
        try {
            this.Dateconversion();
            if (this.expenseList.length == 0 && this.outstation_chk_box) {
                this.commonfun.presentAlert("Expense Closure", "Validation", "Please add expense.");
            }
            else {
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
                    "iscomplete": "Y"
                };
                this.actualtravelplanservice.SaveActualPlan(jsondatatemp).subscribe(function (data) {
                    //  console.log("data", data)
                    if (data != null) {
                        _this.saveplanresponse = data;
                        if (_this.saveplanresponse.resposemsg == "Success") {
                            _this.commonfun.loadingDismiss();
                            _this.commonfun.presentAlert("Message", _this.saveplanresponse.resposemsg, _this.saveplanresponse.logmsg);
                            _this.Resetpage();
                        }
                        else {
                            _this.commonfun.loadingDismiss();
                            //  this.Resetpage();
                            _this.commonfun.presentAlert("Message", _this.saveplanresponse.resposemsg, _this.saveplanresponse.logmsg);
                        }
                    }
                }, function (error) {
                    _this.commonfun.loadingDismiss();
                    //  console.log("error", error);
                    _this.commonfun.presentAlert("Message", "Error!", error);
                });
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error!", error.text);
        }
    };
    TravelPlanClosurePage.prototype.Resetpage = function () {
        var _this = this;
        try {
            this.sumtotalamount = 0;
            this.traveldate = null;
            this.travelPlanClosureForm.reset();
            this.leads = null;
            this.expenseList = null;
            setTimeout(function () {
                _this.getsalesperson();
            }, 1500);
        }
        catch (error) {
        }
    };
    TravelPlanClosurePage.prototype.ionViewWillEnter = function () {
    };
    TravelPlanClosurePage.prototype.onPlanDropDownSearch = function () {
        var methodTAG = 'onPlanDropDownSearch';
        try {
        }
        catch (error) {
        }
    };
    TravelPlanClosurePage.prototype.onPlanDropDownChange = function () {
        var methodTAG = 'onPlanDropDownChange';
        try {
        }
        catch (error) {
        }
    };
    TravelPlanClosurePage.prototype.onFromDateChange = function () {
        var methodTAG = "onFromDateChange";
        try {
        }
        catch (error) {
        }
    };
    TravelPlanClosurePage.prototype.onToDateChange = function () {
        var methodTAG = 'onToDateChange';
        try {
        }
        catch (error) {
        }
    };
    TravelPlanClosurePage.prototype.onPlanStatusChange = function () {
        var methodTAG = 'onPlanStatusChange';
        try {
        }
        catch (error) {
        }
    };
    TravelPlanClosurePage.prototype.onPage = function () {
        var methodTAG = 'onPage';
        try {
        }
        catch (error) {
        }
    };
    //By Nilesh
    TravelPlanClosurePage.prototype.toggleExpandRow = function (row) {
        this.table.rowDetail.toggleExpandRow(row);
    };
    TravelPlanClosurePage.prototype.onDetailToggle = function (event) {
    };
    TravelPlanClosurePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _travel_plan_closure_service__WEBPACK_IMPORTED_MODULE_3__["TravelPlanClosureService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
        { type: _actual_travel_plan_actual_travel_plan_service__WEBPACK_IMPORTED_MODULE_5__["ActualTravelPlanService"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"] },
        { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTable1', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TravelPlanClosurePage.prototype, "table", void 0);
    TravelPlanClosurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travel-plan-closure',
            template: __webpack_require__(/*! raw-loader!./travel-plan-closure.page.html */ "./node_modules/raw-loader/index.js!./src/app/travel-plan-closure/travel-plan-closure.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./travel-plan-closure.page.scss */ "./src/app/travel-plan-closure/travel-plan-closure.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _travel_plan_closure_service__WEBPACK_IMPORTED_MODULE_3__["TravelPlanClosureService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
            _actual_travel_plan_actual_travel_plan_service__WEBPACK_IMPORTED_MODULE_5__["ActualTravelPlanService"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"],
            _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"]])
    ], TravelPlanClosurePage);
    return TravelPlanClosurePage;
}());



/***/ }),

/***/ "./src/app/travel-plan-closure/travel-plan-closure.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/travel-plan-closure/travel-plan-closure.service.ts ***!
  \********************************************************************/
/*! exports provided: TravelPlanClosureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlanClosureService", function() { return TravelPlanClosureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TravelPlanClosureService = /** @class */ (function () {
    function TravelPlanClosureService(http) {
        this.http = http;
        this.TAG = 'TravelPlanClosureService';
    }
    TravelPlanClosureService.prototype.getPlan = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var methodTAG, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        methodTAG = 'getPlan';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get('assets/data/planMaster.json')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TravelPlanClosureService.prototype.getExpenseMasterList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var methodTAG, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        methodTAG = 'getExpenseMasterList';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get('assets/data/expenseMasterList.json')];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TravelPlanClosureService.prototype.getCompletedTaskList = function () {
        var methodTAG = 'getCompletedTaskList';
        try {
            return this.http.get('assets/data/Expense.json');
        }
        catch (error) {
        }
    };
    TravelPlanClosureService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TravelPlanClosureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TravelPlanClosureService);
    return TravelPlanClosureService;
}());



/***/ })

}]);
//# sourceMappingURL=travel-plan-closure-travel-plan-closure-module-es5.js.map