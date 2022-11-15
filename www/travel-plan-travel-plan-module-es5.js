(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-plan-travel-plan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-plan/travel-plan.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-plan/travel-plan.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Travel Plan</ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]=\"formtravel\" (ngSubmit)=\"onSaveTravelPlan(formtravel.value)\">\n            <ion-card>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col>\n                    <h5 ion-text class=\"text-primary\">\n                      <ion-icon name=\"person\"></ion-icon> Plan :\n                    </h5>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Sales Person</ion-label>\n                      <ion-input type=\"text\" [formControl]=\"formtravel.controls['salesperson']\" disabled=\"true\">\n                      </ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>From Date</ion-label>\n                      <ion-datetime placeholder=\"Select Date\" [formControl]=\"formtravel.controls['fromdate']\"\n                        [disabled]=\"isleads\" (ionChange)=\"ondatechange()\" displayFormat=\"DD-MM-YYYY\" max=\"2050\"\n                        [min]='mindate'></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>To Date</ion-label>\n                      <ion-datetime placeholder=\"Select Date\" [formControl]=\"formtravel.controls['todate']\"\n                        [disabled]=\"isleads\" (ionChange)=\"ondatechange()\" displayFormat=\"DD-MM-YYYY\" max=\"2050\"\n                        [min]='mintodate'></ion-datetime>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Plan Name<span style=\"color:red!important\">*</span></ion-label>\n                      <ion-input type=\"text\" [formControl]=\"formtravel.controls['planname']\"></ion-input>\n                    </ion-item>\n                    <div padding-left>\n                      <ng-container *ngFor=\"let validation of validation_messages.planname\">\n                        <div\n                          *ngIf=\"formtravel.get('planname').hasError(validation.type) && formtravel.get('planname').touched\">\n                          <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                        </div>\n                      </ng-container>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Home Lat</ion-label>\n                      <ion-input type=\"text\" [formControl]=\"formtravel.controls['homelat']\" disabled=\"true\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label position=\"floating\">Home Long</ion-label>\n                      <ion-input type=\"text\" [formControl]=\"formtravel.controls['homelong']\" disabled=\"true\"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Outstation?</ion-label>\n                      <ion-checkbox slot=\"end\" [disabled]=\"isleads\"  [checked]=\"outstation_chk_box\" [formControl]=\"formtravel.controls['outstationOrderChkCtrl']\"></ion-checkbox>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"display: none;\">\n                  <ion-col>\n                    <ion-item>\n                      <ion-label>Complete</ion-label>\n                      <ion-checkbox slot=\"end\"  [formControl]=\"formtravel.controls['iscomplete']\"></ion-checkbox>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n            <ion-card>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col>\n                    <h5 ion-text class=\"text-primary\">\n                      <ion-icon name=\"bookmarks\"></ion-icon> Customer:\n                    </h5>\n                  </ion-col>\n                  <ion-col *ngIf=\"!leads || leads?.length==0\">\n                    <ion-fab-button size=\"small\" float-right (click)=\"onAddLead(null,null)\">\n                      <ion-icon name=\"add\"></ion-icon>\n                    </ion-fab-button>\n                  </ion-col>\n                </ion-row>\n                <div style=\"overflow-x:auto\">\n                  <ion-grid style=\"border-collapse: collapse;\" class=\"grid\">\n\n                    <ion-row nowrap>\n                      <ion-col col-3 size=\"5\" class=\"grid-header\">Line Number</ion-col>\n                      <ion-col size=\"6\" class=\"grid-header\">Customer</ion-col>\n                      <ion-col size=\"6\" class=\"grid-header\">Address</ion-col>\n                      <ion-col size=\"3\" class=\"grid-header\">Day</ion-col>\n                      <ion-col size=\"6\" class=\"grid-header\" style=\"padding-left: 20px;\">Date</ion-col>\n                      <!-- <ion-col size=\"5\" class=\"grid-header\">Address Lat</ion-col> -->\n                      <!-- <ion-col size=\"5\" class=\"grid-header\">Address Long</ion-col> -->\n                      <ion-col size=\"2\" class=\"grid-header\">KM</ion-col>\n                      <ion-col size=\"4\" class=\"grid-header\">Status</ion-col>\n\n                    </ion-row>\n\n\n                    <ion-row *ngFor=\"let data of leads; index as i\" nowrap (click)=\"hideshowsublead(data)\"\n                      class=\"forecast_row\">\n\n\n                      <ion-col size=\"2\" class=\"forecast_div\" style=\"width: 100%; text-align: right;\"\n                        (click)=\"onAddLead(data,i)\">\n                        <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\" style=\"font-size: large;\">\n                        </ion-icon>\n                      </ion-col>\n                      <ion-col size=\"1\" class=\"forecast_div\" style=\"width: 100%; text-align: right;\">\n                        <ion-icon name=\"trash\" (click)=\"removeLeads(data)\" style=\"font-size: large;\n                color: red;\"></ion-icon>\n                      </ion-col>\n                      <ion-col size=\"2\" class=\"forecast_div\">{{i+1}}</ion-col>\n                      <ion-col size=\"6\" class=\"forecast_div\">{{data.custname}}</ion-col>\n                      <ion-col size=\"6\" class=\"forecast_div\">{{data.addressname}}</ion-col>\n                      <ion-col size=\"3\" class=\"forecast_div\">{{data.day}}</ion-col>\n                      <!-- <ion-col size=\"6\" class=\"forecast_div\">{{data.date}}</ion-col> -->\n                      <ion-col size=\"6\" class=\"forecast_div\" style=\"padding-left: -10px !important;\">\n                        <ion-datetime placeholder=\"Select Date\" [min]='traveldatemin' [max]='traveldatemax'\n                          [(ngModel)]=\"data.date\" [ngModelOptions]=\"{standalone: true}\"\n                          (ionChange)=\"ontraveldatechange(data)\" displayFormat=\"DD-MM-YYYY\" style=\"margin-top: -10px;\">\n                        </ion-datetime>\n                      </ion-col>\n                      <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.longitude}}</ion-col> -->\n                      <ion-col size=\"2\" class=\"forecast_div\">{{data.km}}</ion-col>\n                      <ion-col size=\"4\" class=\"forecast_div\">{{data.status}}</ion-col>\n\n\n\n\n\n                      <!-- <div *ngIf=\"!data.show\">\n              <ion-row nowrap>\n                <ion-col nowrap>\n                  <ion-row nowrap>\n                    <ion-col size=\"1\" class=\"grid-header\"></ion-col>\n                    <ion-col size=\"1\" class=\"grid-header\"></ion-col>\n                    <ion-col size=\"1\" class=\"grid-header\"></ion-col>\n                  <ion-col size=\"6\" class=\"grid-header\">Task to Perform</ion-col>\n                  <ion-col size=\"4\" class=\"grid-header\">Done?</ion-col>\n                  </ion-row>\n\n                  <ion-row nowrap>\n                    <ion-col size=\"1\" class=\"forecast_div\"></ion-col>\n                    <ion-col size=\"1\" class=\"forecast_div\"></ion-col>\n                    <ion-col size=\"1\" class=\"forecast_div\"></ion-col>\n                  <ion-col size=\"6\" class=\"forecast_div\">Sales Check</ion-col>\n                  <ion-col size=\"4\" class=\"forecast_div\">\n                    <input type=\"checkbox\">\n                  </ion-col>\n                  </ion-row>\n                  <ion-row nowrap>\n                    <ion-col size=\"1\" class=\"forecast_div\"></ion-col>\n                    <ion-col size=\"1\" class=\"forecast_div\"></ion-col>\n                    <ion-col size=\"1\" class=\"forecast_div\"></ion-col>\n                  <ion-col size=\"6\" class=\"forecast_div\">Document Check</ion-col>\n                  <ion-col size=\"4\" class=\"forecast_div\">\n                    <input type=\"checkbox\">\n\n                  </ion-col>\n                  </ion-row>\n\n                </ion-col>\n              </ion-row>\n            \n              </div> -->\n\n                    </ion-row>\n\n\n                  </ion-grid>\n                </div>\n              </ion-card-content>\n            </ion-card>\n        </form>\n        <ion-button expand=\"block\" [disabled]=\"!formtravel.valid || !isleads\"\n          (click)=\"onSaveTravelPlan(formtravel.value)\"\n          class=\"ion-margin-start ion-margin-end ion-margin-bottom btn-scheme\" type=\"submit\"\n          [disabled]=\"!formaddplan.valid\">\n          Save\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/travel-plan/travel-plan.module.ts":
/*!***************************************************!*\
  !*** ./src/app/travel-plan/travel-plan.module.ts ***!
  \***************************************************/
/*! exports provided: TravelPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlanPageModule", function() { return TravelPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-plan.page */ "./src/app/travel-plan/travel-plan.page.ts");







var routes = [
    {
        path: '',
        component: _travel_plan_page__WEBPACK_IMPORTED_MODULE_6__["TravelPlanPage"]
    }
];
var TravelPlanPageModule = /** @class */ (function () {
    function TravelPlanPageModule() {
    }
    TravelPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_plan_page__WEBPACK_IMPORTED_MODULE_6__["TravelPlanPage"]]
        })
    ], TravelPlanPageModule);
    return TravelPlanPageModule;
}());



/***/ }),

/***/ "./src/app/travel-plan/travel-plan.page.scss":
/*!***************************************************!*\
  !*** ./src/app/travel-plan/travel-plan.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n/* Hide ion-content scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\nh5 ion-icon {\n  color: lightcoral;\n}\n.inputfile {\n  color: transparent;\n}\n.forecast_container {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  height: 20vw;\n  font-size: 0.8em;\n  font-weight: 300;\n}\n.forecast_div {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  font-size: 0.8em;\n  font-weight: 300;\n  max-width: 175px;\n}\n.grid-header {\n  font-weight: bold;\n  max-width: 175px;\n}\n/* provide some minimal visual accomodation for IE8 and below */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC90cmF2ZWwtcGxhbi90cmF2ZWwtcGxhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYXZlbC1wbGFuL3RyYXZlbC1wbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUk7RUFDRSxxQkFBQTtBQ0FOO0FER0k7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0FDRk47QURNRTtFQUNFLFlBQUE7QUNISjtBRE1FLCtCQUFBO0FBQ0E7RUFDRSxhQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEo7QURJSTtFQUNFLGlCQUFBO0FDRk47QURPRTtFQUNFLGtCQUFBO0FDSko7QURPRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0pBO0FEUUEsK0RBQUEiLCJmaWxlIjoic3JjL2FwcC90cmF2ZWwtcGxhbi90cmF2ZWwtcGxhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgLy8gaGVpZ2h0OiAxMjBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuLy8gd2lkdGg6MTAwJTtcbiAgICAuc2Nyb2xsLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5zZWxlY3RhYmxlLWljb257XG4gICAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIGltZ3tcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gIH1cblxuICBpb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJde1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC8qIEhpZGUgaW9uLWNvbnRlbnQgc2Nyb2xsYmFyICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgaDV7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBjb2xvcjogZGFya2N5YW47XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBpb24taWNvbntcbiAgICAgIGNvbG9yOiBsaWdodGNvcmFsO1xuICAgIH1cblxuICB9XG4gIFxuICAuaW5wdXRmaWxlIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuZm9yZWNhc3RfY29udGFpbmVye1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbCFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBoZWlnaHQ6MjB2dztcbiAgICBmb250LXNpemU6MC44ZW07XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xufVxuLmZvcmVjYXN0X2RpdntcbiAgb3ZlcmZsb3cteDogc2Nyb2xsIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuIFxuICBmb250LXNpemU6MC44ZW07XG4gIGZvbnQtd2VpZ2h0OjMwMDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7XG59XG4uZ3JpZC1oZWFkZXJ7XG5mb250LXdlaWdodDogYm9sZDtcbm1heC13aWR0aDogMTc1cHg7XG4vL2JhY2tncm91bmQtY29sb3I6I2YyZjJmMjtcbn1cblxuLyogcHJvdmlkZSBzb21lIG1pbmltYWwgdmlzdWFsIGFjY29tb2RhdGlvbiBmb3IgSUU4IGFuZCBiZWxvdyAqL1xuLy8gLmdyaWQgaW9uLXJvdzpudGgtY2hpbGQob2RkKXsgXG4vLyAgIGJhY2tncm91bmQ6ICNiOGQxZjM7XG4vLyB9XG4iLCJpb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zY3JvbGwtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1zY3JvbGxbc2Nyb2xsWF0gLnNlbGVjdGFibGUtaWNvbiB7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cbmlvbi1zY3JvbGxbc2Nyb2xsWF0gaW9uLWF2YXRhciBpbWcge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmlvbi1zY3JvbGxbc2Nyb2xsLWF2YXRhcl0ge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi8qIEhpZGUgaW9uLWNvbnRlbnQgc2Nyb2xsYmFyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogZGFya2N5YW47XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5oNSBpb24taWNvbiB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9yZWNhc3RfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IHZpc2libGUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogMjB2dztcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZvcmVjYXN0X2RpdiB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy14OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXgtd2lkdGg6IDE3NXB4O1xufVxuXG4uZ3JpZC1oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cblxuLyogcHJvdmlkZSBzb21lIG1pbmltYWwgdmlzdWFsIGFjY29tb2RhdGlvbiBmb3IgSUU4IGFuZCBiZWxvdyAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/travel-plan/travel-plan.page.ts":
/*!*************************************************!*\
  !*** ./src/app/travel-plan/travel-plan.page.ts ***!
  \*************************************************/
/*! exports provided: TravelPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlanPage", function() { return TravelPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _travel_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-plan.service */ "./src/app/travel-plan/travel-plan.service.ts");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");








var TravelPlanPage = /** @class */ (function () {
    function TravelPlanPage(fb, commonfun, router, route, loginauth, travelplanservice, msg) {
        this.fb = fb;
        this.commonfun = commonfun;
        this.router = router;
        this.route = route;
        this.loginauth = loginauth;
        this.travelplanservice = travelplanservice;
        this.msg = msg;
        this.isleads = false;
        this.Planname = '';
        this.outstation_chk_box = false;
        this.validation_messages = {
            'planname': [
                { type: 'required', message: ' *Please Enter Plan Name.' }
            ]
        };
        // This variable will hold the class name.
        this.TAG = 'TravelPlanPage';
        this.addsublead();
        this.formtravel = this.fb.group({
            salesperson: [],
            fromdate: [],
            todate: [],
            planname: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            homelat: [],
            homelong: [],
            iscomplete: [],
            outstationOrderChkCtrl: []
        });
    }
    TravelPlanPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.msg.isplatformweb == true) {
            // this.commonfun.chkcache('travel-plan');
            this.mindate = new Date(new Date().setDate(new Date().getDate() - this.loginauth.mindatetravelplan)).toISOString();
            this.mintodate = this.mindate;
            this.formtravel.controls["fromdate"].setValue(new Date().toISOString());
            this.formtravel.controls["todate"].setValue(new Date().toISOString());
            setTimeout(function () {
                _this.getsalesperson();
            }, 1500);
        }
        else {
            this.mindate = new Date(new Date().setDate(new Date().getDate() - this.loginauth.mindatetravelplan)).toISOString();
            this.mintodate = this.mindate;
            this.formtravel.controls["fromdate"].setValue(new Date().toISOString());
            this.formtravel.controls["todate"].setValue(new Date().toISOString());
            setTimeout(function () {
                _this.getsalesperson();
            }, 1500);
        }
    };
    /**
      * @kind function
      * @summary This method will get sales person.
      * @since 1.0.0
      * @returns void
      * @public
      * @module Travel Expense
      * @author Nilesh Patil
      */
    TravelPlanPage.prototype.getsalesperson = function () {
        var _this = this;
        var methodTAG = 'getsalesperson';
        try {
            //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
            this.commonfun.loadingPresent();
            //  console.log(methodTAG)
            this.travelplanservice.getUserWiseSalesPerson("0", "", "N", "", "", this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false").subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data;
                _this.mincustvisitperday = response.mincustvisitperday;
                _this.salespersoninfo = response;
                _this.formtravel.controls["salesperson"].setValue(response.salesperson);
                _this.formtravel.controls["homelat"].setValue(response.latitude);
                _this.formtravel.controls["homelong"].setValue(response.longitude);
                _this.first10leads = response.AddressList;
            }, function (error) {
                //  console.log(this.TAG,methodTAG,error)
                _this.commonfun.loadingDismiss();
                //this.commonfun.presentAlert("Message","Error",error.error);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    TravelPlanPage.prototype.onChangeplan = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    this.Planname = this.formtravel.controls["planname"].value;
                    if (this.Planname != "") {
                        this.commonfun.loadingPresent();
                        this.travelplanservice.getPlan(this.Planname).subscribe(function (data) {
                            _this.commonfun.loadingDismiss();
                            var response = data['response'];
                            var isexist = response.data;
                            if (isexist.length > 0) {
                                _this.commonfun.presentAlert("Message", "Alert", "Plan with name " + _this.Planname + " is already exist");
                                _this.formtravel.controls["planname"].setValue('');
                            }
                            else {
                                _this.Addlead(null, null);
                            }
                        });
                    }
                }
                catch (error) {
                    this.commonfun.loadingDismiss();
                    // console.log("Error:onChangepin",error);
                    // this.commonfun.presentAlert("Message", "Error", error);
                }
                return [2 /*return*/];
            });
        });
    };
    TravelPlanPage.prototype.toggle = function (selectedcartproduct) {
        if (selectedcartproduct.show == false) {
            for (var i = 0; i < this.leads.length; i++) {
                if (this.leads[i].show === "true") {
                    this.leads[i].show = "false";
                }
            }
        }
        selectedcartproduct.show = !selectedcartproduct.show;
    };
    TravelPlanPage.prototype.onAddLead = function (item, i) {
        try {
            if (this.ondatechange() == false) {
                return;
            }
            if (item == null) {
                this.onChangeplan();
            }
            else {
                this.Addlead(item, i);
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    TravelPlanPage.prototype.Addlead = function (item, i) {
        var dl1date = new Date(this.fromdate);
        var nmonth = dl1date.getMonth() + 1;
        var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate());
        var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth);
        var yyyy1 = dl1date.getFullYear();
        this.strfromdate = dd1 + "-" + mm1 + "-" + yyyy1;
        var dl2date = new Date(this.todate);
        var nmonth = dl2date.getMonth() + 1;
        var dd2 = (dl2date.getDate() < 10 ? "0" + dl2date.getDate() : dl2date.getDate());
        var mm2 = (nmonth < 10 ? "0" + nmonth : nmonth);
        var yyyy2 = dl2date.getFullYear();
        this.strtodate = dd2 + "-" + mm2 + "-" + yyyy2;
        var navigationExtras = {
            state: {
                selectedLead: item,
                allleads: this.leads,
                first10leads: this.first10leads,
                fromdate: this.strfromdate,
                todate: this.strtodate,
                index: i,
                outOrderChkCtrl: this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false"
            }
        };
        this.router.navigate(['addedit-travel-plan'], navigationExtras);
    };
    TravelPlanPage.prototype.chklead = function () {
        try {
            if (this.leads != null) {
                if (this.leads.length > 0)
                    this.isleads = true;
                else
                    this.isleads = false;
            }
            else {
                this.isleads = false;
            }
        }
        catch (error) {
        }
    };
    TravelPlanPage.prototype.removeLeads = function (post) {
        try {
            var index = this.leads.indexOf(post);
            var result = this.leads.filter(function (item) { return item.custORbpatnerID != post.custORbpatnerID; });
            this.leads = result;
            this.chklead();
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    TravelPlanPage.prototype.removesubLeads = function (data, subdata) {
        try {
            for (var k = 0; k < this.leads.length; k++) {
                if (this.leads[k].selectedddlsubleads) {
                    if (this.leads[k].selectedddlsubleads.some(function (it) { return it = subdata; })) {
                        var result = this.leads[k].selectedddlsubleads.filter(function (item) { return item != subdata; });
                        this.leads[k].selectedddlsubleads = result;
                    }
                    this.chklead();
                }
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    TravelPlanPage.prototype.getkmfromhome = function (lat, long, i) {
        var _this = this;
        var methodTAG = 'getsalesperson';
        try {
            //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
            this.commonfun.loadingPresent();
            //  console.log(methodTAG)
            this.travelplanservice.getUserWiseSalesPerson("0", "", "Y", lat, long, this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false").subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data;
                _this.leads[i].km = response.km;
            }, function (error) {
                //  console.log(this.TAG,methodTAG,error)
                _this.commonfun.loadingDismiss();
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    TravelPlanPage.prototype.ontraveldatechange = function (selectedrow) {
        try {
            var df = this.formtravel.controls["fromdate"].value;
            var dt = this.formtravel.controls["todate"].value;
            var dtr = selectedrow.date;
            if (dtr != null && dtr != undefined) {
                if (dtr.indexOf('-') >= 4) {
                    this.fromdate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
                    this.todate = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
                    this.traveldate = new Date(this.dateyyyymmddT0000Z(dtr)).toISOString();
                    if (this.traveldate < this.fromdate || this.traveldate > this.todate) {
                        for (var i = 0; i < this.leads.length; i++) {
                            if (this.leads[i].addressid == selectedrow.addressid) {
                                this.leads[i].day = 0;
                            }
                        }
                        this.commonfun.presentAlert("Message", "Alert", "Travel Date must be in the range of from date and to date.");
                    }
                    else {
                        this.d1 = new Date(this.fromdate);
                        this.d3 = new Date(this.traveldate);
                        this.days = ((this.d3 - this.d1) / (24 * 3600 * 1000)) + 1;
                        var isfirrstcust = true;
                        var rowno = 0;
                        for (var i = 0; i < this.leads.length; i++) {
                            //start=>for km calculation from home =1
                            if (this.leads[i].day == this.days) {
                                isfirrstcust = false;
                            }
                            //end=>for km calculation from home =1
                            if (this.leads[i].addressid == selectedrow.addressid) {
                                //   
                                this.leads[i].day = this.days;
                                rowno = i;
                            }
                        }
                        //start=>for km calculation from home =2
                        if (isfirrstcust == true) {
                            //  console.log("rowno",rowno);
                            this.getkmfromhome(selectedrow.latitude, selectedrow.longitude, rowno); //lat long
                        }
                        //end=>for km calculation from home =2
                    }
                }
            }
        }
        catch (error) {
            //  console.log("ontraveldatechange()-ERROR:",error);
        }
    };
    TravelPlanPage.prototype.ondatechange = function () {
        try {
            var df = this.formtravel.controls["fromdate"].value;
            var dt = this.formtravel.controls["todate"].value;
            this.fromdate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
            this.todate = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
            this.traveldatemin = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
            this.traveldatemax = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
            this.mintodate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
            //console.log("traveldatemin",this.traveldatemin);
            //console.log("traveldatemax",this.traveldatemax);
            // console.log("fromdate",this.fromdate);
            // console.log("todate",this.todate);
            if (this.fromdate > this.todate) {
                this.commonfun.presentAlert("Message", "Alert", "From Date can not be Greater than To Date");
                return false;
            }
            else {
                return true;
            }
        }
        catch (error) {
            // console.log("ondatechange()-ERROR:",error);
        }
    };
    TravelPlanPage.prototype.dateyyyymmddT0000Z = function (dt) {
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
    TravelPlanPage.prototype.addsublead = function () {
        var _this = this;
        try {
            this.route.params.subscribe(function (params) {
                if (_this.router.getCurrentNavigation().extras.state) {
                    var selectedddlsubleads = _this.router.getCurrentNavigation().extras.state.selectedddlsubleads;
                    var selectedLead = _this.router.getCurrentNavigation().extras.state.selectedLead;
                    //this.leads= this.router.getCurrentNavigation().extras.state.selectedLead;
                    //  console.log("this.leads:",this.leads);
                    //  console.log("this.selectedLead:",selectedLead);
                    _this.leads = selectedddlsubleads;
                    _this.chklead();
                    //  for(var k=0;k<this.leads.length;k++){
                    // if(this.leads[k].lead===selectedLead.lead){
                    //   this.leads[k].selectedddlsubleads=selectedddlsubleads;
                    // } 
                    // }
                }
            });
            // console.log("addsublead()-this.leads:",this.leads);
        }
        catch (error) {
            //  console.log("addsublead()-ERROR:",error);
        }
    };
    TravelPlanPage.prototype.hideshowsublead = function (selectedLead) {
        if (selectedLead.show == false) {
            for (var i = 0; i < this.leads.length; i++) {
                if (this.leads[i].show === "true") {
                    this.leads[i].show = "false";
                }
            }
        }
        selectedLead.show = !selectedLead.show;
    };
    TravelPlanPage.prototype.validatedate = function () {
        var validlead = true;
        try {
            for (var i = 0; i < this.leads.length; i++) {
                if (this.leads[i].day == "0") {
                    validlead = false;
                }
            }
        }
        catch (error) {
            validlead = false;
        }
        return validlead;
    };
    TravelPlanPage.prototype.convertdate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var validlead, i, trdt, dl1date, nmonth, dd1, mm1, yyyy1, strdate;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                validlead = true;
                try {
                    for (i = 0; i < this.leads.length; i++) {
                        if (this.leads[i].day == "0") {
                        }
                        else {
                            trdt = new Date(this.dateyyyymmddT0000Z(this.leads[i].date)).toISOString();
                            dl1date = new Date(trdt);
                            nmonth = dl1date.getMonth() + 1;
                            dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate());
                            mm1 = (nmonth < 10 ? "0" + nmonth : nmonth);
                            yyyy1 = dl1date.getFullYear();
                            strdate = dd1 + "-" + mm1 + "-" + yyyy1;
                            this.leads[i].date = strdate;
                        }
                    }
                }
                catch (error) {
                    //  console.log("convertdate:ERROS",error);
                    validlead = false;
                }
                return [2 /*return*/, validlead];
            });
        });
    };
    TravelPlanPage.prototype.chckplan = function () {
        var validplan = true;
        try {
            this.dp1 = new Date(this.fromdate);
            this.dp3 = new Date(this.todate);
            this.plandays = ((this.dp3 - this.dp1) / (24 * 3600 * 1000)) + 1;
            // console.log("this.plandays ",this.plandays)
            for (var j = 1; j <= this.plandays; j++) {
                var ispresent = false;
                //for minimum visits per day
                var result = this.leads.filter(function (item) { return item.day == j; });
                // this.leads=result;
                // console.log("result.count",result.length)
                if (result.length >= this.mincustvisitperday) {
                    ispresent = true;
                }
                if (ispresent == false) {
                    validplan = false;
                    //  console.log("Date not avalable: ",j);
                }
            }
        }
        catch (error) {
            validplan = false;
        }
        return validplan;
    };
    TravelPlanPage.prototype.onSaveTravelPlan = function (fvalue) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    if (this.ondatechange() == false) {
                        return [2 /*return*/];
                    }
                    if (this.validatedate() == false) {
                        this.commonfun.presentAlert("Message", "Alert", "Please select valid visit date");
                        return [2 /*return*/];
                    }
                    if (this.chckplan() == false) {
                        this.commonfun.presentAlert("Message", "Alert", "Kindly add minimum " + this.mincustvisitperday + " customer per day.");
                    }
                    else {
                        this.convertdate();
                        setTimeout(function () {
                            _this.saveapi();
                        }, 500);
                    }
                }
                catch (error) {
                    this.commonfun.loadingDismiss();
                }
                return [2 /*return*/];
            });
        });
    };
    TravelPlanPage.prototype.saveapi = function () {
        var _this = this;
        this.commonfun.loadingPresent();
        var jsondatatemp = {
            "salesperson": this.salespersoninfo.salesperson,
            "salespersonid": this.salespersoninfo.salespersonid,
            "address": this.salespersoninfo.address,
            "longitude": this.salespersoninfo.longitude,
            "pincode": this.salespersoninfo.pincode,
            "AddressList": this.leads,
            "latitude": this.salespersoninfo.latitude,
            "fromdate": this.strfromdate,
            "todate": this.strtodate,
            "Planname": this.Planname,
            "outstation": this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false"
        };
        console.log("SavePlan", jsondatatemp);
        //--------------
        this.travelplanservice.SavePlan(jsondatatemp).subscribe(function (data) {
            //console.log("data",data)
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
            _this.commonfun.presentAlert("Message", "Error!", error.error.text);
        });
        //------------------
    };
    TravelPlanPage.prototype.Resetpage = function () {
        try {
            this.formtravel.reset();
            this.fromdate = new Date().toISOString();
            this.todate = new Date().toISOString();
            this.formtravel.controls["todate"].setValue(new Date().toISOString());
            this.formtravel.controls["fromdate"].setValue(new Date().toISOString());
            this.leads = null;
            this.first10leads = null;
            this.saveplanresponse = null;
            this.isleads = false;
            this.getsalesperson();
        }
        catch (error) {
            // console.log("Resetpage()-ERROR:",error);
        }
    };
    TravelPlanPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
        { type: _travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["TravelPlanService"] },
        { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"] }
    ]; };
    TravelPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travel-plan',
            template: __webpack_require__(/*! raw-loader!./travel-plan.page.html */ "./node_modules/raw-loader/index.js!./src/app/travel-plan/travel-plan.page.html"),
            styles: [__webpack_require__(/*! ./travel-plan.page.scss */ "./src/app/travel-plan/travel-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
            _travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["TravelPlanService"],
            _provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"]])
    ], TravelPlanPage);
    return TravelPlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-plan-travel-plan-module-es5.js.map