(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addedit-travel-plan-addedit-travel-plan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addedit-travel-plan/addedit-travel-plan.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addedit-travel-plan/addedit-travel-plan.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Add Customer</ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Search Customer</ion-label>\n            <ion-input [formControl]=\"formaddplan.controls['searchlead']\" (ionChange)=\"onsearch()\" type=\"text\">\n            </ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"leadskm\">\n        <ion-col>\n          <ion-item float-left lines=\"none\">\n            <ion-button slot=\"start\" color=\"primary\" text-center [disabled]=\"isfirst\" (click)=\"onPrevious()\">Previous\n            </ion-button>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item float-right lines=\"none\">\n            <ion-button slot=\"end\" color=\"primary\" [disabled]=\"islast\" text-center (click)=\"onNext()\">\n              &nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;</ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item *ngFor=\"let item of leadskm; index as i\" text-wrap style=\"font-size: small;\">\n        <!-- <ion-content scrollX=\"true\"> -->\n        <div style=\"width: 100%;\">\n          <ion-row>\n            <ion-col size=\"2\" (click)=\"onAddLead(item)\">\n              <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\" style=\"font-size: x-large;\">\n              </ion-icon>\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-label style=\"white-space: normal\">\n                {{ item.custname }}\n              </ion-label>\n              <ion-label style=\"font-size: small;\">Address: {{ item.addressname }}</ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label style=\"white-space: normal\">\n                {{ item.km}} km\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- </ion-content> -->\n      </ion-item>\n      <ion-row *ngIf=\"leadskm\">\n        <ion-col>\n          <ion-item float-left lines=\"none\">\n            <ion-button slot=\"start\" color=\"primary\" text-center [disabled]=\"isfirst\" (click)=\"onPrevious()\">Previous\n            </ion-button>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item float-right lines=\"none\">\n            <ion-button slot=\"end\" color=\"primary\" text-center [disabled]=\"islast\" (click)=\"onNext()\">\n              &nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;</ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <h5 ion-text class=\"text-primary\">\n            <ion-icon name=\"bookmarks\"></ion-icon>Selected Customers:\n          </h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <div style=\"overflow-x:auto\">\n          <ion-grid>\n            <ion-row nowrap>\n              <ion-col nowrap>\n                <ion-row nowrap>\n                  <ion-col col-2 size=\"5\" class=\"grid-header\">Line Number</ion-col>\n                  <ion-col size=\"6\" class=\"grid-header\">Customer</ion-col>\n                  <ion-col size=\"6\" class=\"grid-header\">Address</ion-col>\n                  <ion-col size=\"2\" class=\"grid-header\">Day</ion-col>\n                  <ion-col size=\"6\" class=\"grid-header\" style=\"padding-left: 20px;\">Date</ion-col>\n                  <!-- <ion-col size=\"5\" class=\"grid-header\">Address Lat</ion-col> -->\n                  <!-- <ion-col size=\"5\" class=\"grid-header\">Address Long</ion-col> -->\n                  <ion-col size=\"4\" class=\"grid-header\">KM</ion-col>\n                  <ion-col size=\"3\" class=\"grid-header\">Status</ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let data of selectedleadskm; index as i\" nowrap>\n              <ion-col nowrap>\n                <ion-row nowrap>\n                  <ion-col size=\"1\" style=\"width: 100%; text-align: right;\">\n                    <ion-icon name=\"trash\" (click)=\"removeLeads(data)\" style=\"font-size: x-large;\n          color: red;\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"4\" class=\"forecast_div\">{{i+1}}</ion-col>\n                  <ion-col size=\"6\" class=\"forecast_div\">{{data.custname}}</ion-col>\n                  <ion-col size=\"6\" class=\"forecast_div\">{{data.addressname}}</ion-col>\n                  <ion-col size=\"2\" class=\"forecast_div\">{{data.day}}</ion-col>\n                  <!-- <ion-col size=\"6\" class=\"forecast_div\">{{data.date}}</ion-col> -->\n                  <ion-col size=\"6\" class=\"forecast_div\" style=\"padding-left: -10px !important;\">\n                    <ion-datetime placeholder=\"Select Date\" [(ngModel)]=\"data.date\"\n                      [ngModelOptions]=\"{standalone: true}\" displayFormat=\"DD-MM-YYYY\" readOnly\n                      style=\"margin-top: -10px;\"></ion-datetime>\n                  </ion-col>\n                  <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.latitude}}</ion-col> -->\n                  <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.longitude}}</ion-col> -->\n                  <ion-col size=\"4\" class=\"forecast_div\">{{data.km}}</ion-col>\n                  <ion-col size=\"3\" class=\"forecast_div\">{{data.status}}</ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom btn-scheme\" type=\"submit\"\n    [disabled]=\"!formaddplan.valid\" (click)=\"onSave()\">\n    Save\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/addedit-travel-plan/addedit-travel-plan.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/addedit-travel-plan/addedit-travel-plan.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddeditTravelPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditTravelPlanPageModule", function() { return AddeditTravelPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addedit_travel_plan_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addedit-travel-plan.page */ "./src/app/addedit-travel-plan/addedit-travel-plan.page.ts");








var routes = [
    {
        path: '',
        component: _addedit_travel_plan_page__WEBPACK_IMPORTED_MODULE_7__["AddeditTravelPlanPage"]
    }
];
var AddeditTravelPlanPageModule = /** @class */ (function () {
    function AddeditTravelPlanPageModule() {
    }
    AddeditTravelPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_addedit_travel_plan_page__WEBPACK_IMPORTED_MODULE_7__["AddeditTravelPlanPage"]]
        })
    ], AddeditTravelPlanPageModule);
    return AddeditTravelPlanPageModule;
}());



/***/ }),

/***/ "./src/app/addedit-travel-plan/addedit-travel-plan.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/addedit-travel-plan/addedit-travel-plan.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n/* Hide ion-content scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\nh5 ion-icon {\n  color: lightcoral;\n}\n.inputfile {\n  color: transparent;\n}\n.forecast_container {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  height: 20vw;\n  font-size: 0.8em;\n  font-weight: 300;\n}\n.grid-header {\n  font-weight: bold;\n}\n.forecast_div {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  font-size: 0.8em;\n  font-weight: 300;\n  max-width: 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9hZGRlZGl0LXRyYXZlbC1wbGFuL2FkZGVkaXQtdHJhdmVsLXBsYW4ucGFnZS5zY3NzIiwic3JjL2FwcC9hZGRlZGl0LXRyYXZlbC1wbGFuL2FkZGVkaXQtdHJhdmVsLXBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURFSTtFQUNFLHFCQUFBO0FDQU47QURHSTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDRE47QURJSTtFQUNFLFlBQUE7QUNGTjtBRE1FO0VBQ0UsWUFBQTtBQ0hKO0FETUUsK0JBQUE7QUFDQTtFQUNFLGFBQUE7QUNISjtBRE1FO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRElJO0VBQ0UsaUJBQUE7QUNGTjtBRE9FO0VBQ0Usa0JBQUE7QUNKSjtBRE9FO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKO0FETUE7RUFDRSxpQkFBQTtBQ0hGO0FES0E7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYWRkZWRpdC10cmF2ZWwtcGxhbi9hZGRlZGl0LXRyYXZlbC1wbGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zY3JvbGxbc2Nyb2xsWF0ge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAvLyBoZWlnaHQ6IDEyMHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4vLyB3aWR0aDoxMDAlO1xuICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLnNlbGVjdGFibGUtaWNvbntcbiAgICAgIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIH1cblxuICAgIGlvbi1hdmF0YXIgaW1ne1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zY3JvbGxbc2Nyb2xsLWF2YXRhcl17XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgLyogSGlkZSBpb24tY29udGVudCBzY3JvbGxiYXIgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhcntcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH1cblxuICBoNXtcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICAgIGNvbG9yOiBkYXJrY3lhbjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGlvbi1pY29ue1xuICAgICAgY29sb3I6IGxpZ2h0Y29yYWw7XG4gICAgfVxuXG4gIH1cbiAgXG4gIC5pbnB1dGZpbGUge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5mb3JlY2FzdF9jb250YWluZXJ7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDoyMHZ3O1xuICAgIGZvbnQtc2l6ZTowLjhlbTtcbiAgICBmb250LXdlaWdodDozMDA7XG59XG4uZ3JpZC1oZWFkZXJ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvcmVjYXN0X2RpdntcbiAgb3ZlcmZsb3cteDogc2Nyb2xsIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6MC44ZW07XG4gIGZvbnQtd2VpZ2h0OjMwMDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn0iLCJpb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zY3JvbGwtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmlvbi1zY3JvbGxbc2Nyb2xsWF0gLnNlbGVjdGFibGUtaWNvbiB7XG4gIG1hcmdpbjogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cbmlvbi1zY3JvbGxbc2Nyb2xsWF0gaW9uLWF2YXRhciBpbWcge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmlvbi1zY3JvbGxbc2Nyb2xsLWF2YXRhcl0ge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi8qIEhpZGUgaW9uLWNvbnRlbnQgc2Nyb2xsYmFyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogZGFya2N5YW47XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5oNSBpb24taWNvbiB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9yZWNhc3RfY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IHZpc2libGUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogMjB2dztcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmdyaWQtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JlY2FzdF9kaXYge1xuICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/addedit-travel-plan/addedit-travel-plan.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/addedit-travel-plan/addedit-travel-plan.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddeditTravelPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditTravelPlanPage", function() { return AddeditTravelPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _travel_plan_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../travel-plan/travel-plan.service */ "./src/app/travel-plan/travel-plan.service.ts");







var AddeditTravelPlanPage = /** @class */ (function () {
    function AddeditTravelPlanPage(fb, commonfun, router, route, travelplanservice, loginauth) {
        this.fb = fb;
        this.commonfun = commonfun;
        this.router = router;
        this.route = route;
        this.travelplanservice = travelplanservice;
        this.loginauth = loginauth;
        this.TAG = "Add Edit Travel Plan Page";
        this.selectedleadskm = [];
        this.offset = 0;
        this.strsearch = "";
        this.index = null;
        this.isfirst = false;
        this.islast = false;
        this.getrout();
        this.formaddplan = this.fb.group({
            selectedlead: [],
            searchlead: [],
        });
    }
    AddeditTravelPlanPage.prototype.ngOnInit = function () {
    };
    AddeditTravelPlanPage.prototype.onsearch = function () {
        var srchkey = this.formaddplan.controls["searchlead"].value;
        this.strsearch = srchkey;
        this.offset = 0;
        if (srchkey.length % 3 == 0 || srchkey == '') {
            if (this.selectedLead == null) {
                this.getsalesperson();
            }
            else {
                this.bindNearestPerson();
            }
        }
    };
    AddeditTravelPlanPage.prototype.getsalesperson = function () {
        var _this = this;
        var methodTAG = 'getsalesperson';
        try {
            this.commonfun.loadingPresent();
            this.travelplanservice.getUserWiseSalesPerson(this.offset, this.strsearch, "N", "", "", this.outOrderChkCtrlValueAddEdit)
                .subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data;
                if (response.AddressList.length > 0) {
                    _this.leadskm = response.AddressList;
                }
                else {
                    if (_this.offset > 0)
                        _this.offset = _this.offset - 10;
                    if (_this.strsearch != "")
                        _this.leadskm = response.AddressList;
                }
            }, function (error) {
                console.log("YES ERROR CATCH", error);
                _this.commonfun.loadingDismiss();
                _this.commonfun.presentAlert("Message", "Error", error.error);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    AddeditTravelPlanPage.prototype.onPrevious = function () {
        if (this.offset > 1) {
            this.offset = this.offset - 10;
            if (this.selectedLead == null) {
                this.getsalesperson();
            }
            else {
                this.bindNearestPerson();
            }
        }
    };
    AddeditTravelPlanPage.prototype.onNext = function () {
        this.offset = this.offset + 10;
        if (this.selectedLead == null) {
            this.getsalesperson();
        }
        else {
            this.bindNearestPerson();
        }
    };
    AddeditTravelPlanPage.prototype.bindNearestPerson = function () {
        var _this = this;
        try {
            this.travelplanservice.getSearchNearestPersoni(this.selectedLead.addressid, this.offset, this.strsearch, this.outOrderChkCtrlValueAddEdit).subscribe(function (data) {
                var response = data;
                if (response.AddressList.length > 0) {
                    _this.leadskm = response.AddressList;
                }
                else {
                    if (_this.offset > 0)
                        _this.offset = _this.offset - 10;
                    if (_this.strsearch != "")
                        _this.leadskm = response.AddressList;
                }
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    AddeditTravelPlanPage.prototype.onAddLead = function (item) {
        try {
            if (this.selectedleadskm) {
                if (this.selectedleadskm.some(function (i) { return i.addressid === item.addressid; })) {
                    this.commonfun.presentAlert("Message", "Alert", "Lead already exists.");
                }
                else {
                    var slitem = { "custORbpatnerID": item.custORbpatnerID, "line": this.selectedleadskm.length + 1, "custname": item.custname, "addressid": item.addressid, "addressname": item.addressname, "pincode": item.pincode, "day": "0", "date": null, "latitude": item.latitude, "longitude": item.longitude, "km": item.km, "status": "Plan", "show": "false" };
                    if (this.index == null) {
                        this.selectedleadskm.push(slitem);
                    }
                    else {
                        this.selectedleadskm.splice(this.index + 1, 0, slitem);
                    }
                    this.onSave();
                }
            }
            else {
                var slitem1 = [{ "custORbpatnerID": item.custORbpatnerID, "line": "1", "custname": item.custname, "addressid": item.addressid, "addressname": item.addressname, "pincode": item.pincode, "day": "0", "date": null, "latitude": item.latitude, "longitude": item.longitude, "km": item.km, "status": "Plan", "show": "false" }];
                this.selectedleadskm = slitem1;
                this.onSave();
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    AddeditTravelPlanPage.prototype.getrout = function () {
        var _this = this;
        try {
            this.route.params.subscribe(function (params) {
                if (_this.router.getCurrentNavigation().extras.state) {
                    _this.selectedLead = _this.router.getCurrentNavigation().extras.state.selectedLead;
                    _this.selectedleadskm = _this.router.getCurrentNavigation().extras.state.allleads;
                    _this.fromdate = _this.router.getCurrentNavigation().extras.state.fromdate;
                    _this.todate = _this.router.getCurrentNavigation().extras.state.todate;
                    _this.index = _this.router.getCurrentNavigation().extras.state.index;
                    _this.outOrderChkCtrlValueAddEdit = _this.router.getCurrentNavigation().extras.state.outOrderChkCtrl;
                    console.log(_this.TAG, "getrout", _this.outOrderChkCtrlValueAddEdit);
                    if (_this.selectedLead == null) {
                        _this.leadskm = _this.router.getCurrentNavigation().extras.state.first10leads;
                    }
                    else {
                        _this.bindNearestPerson();
                    }
                }
            });
        }
        catch (error) {
            //console.log("addsublead()-ERROR:",error);
        }
    };
    AddeditTravelPlanPage.prototype.Resetpage = function () {
    };
    AddeditTravelPlanPage.prototype.removeLeads = function (post) {
        try {
            // console.log("removeLeads()");
            var index = this.selectedleadskm.indexOf(post);
            var result = this.selectedleadskm.filter(function (item) { return item != post; });
            this.selectedleadskm = result;
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    AddeditTravelPlanPage.prototype.onSave = function () {
        try {
            var navigationExtras = {
                state: {
                    selectedddlsubleads: this.selectedleadskm,
                    selectedLead: this.selectedLead
                }
            };
            this.router.navigate(['travel-plan'], navigationExtras);
        }
        catch (error) {
        }
    };
    AddeditTravelPlanPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _travel_plan_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["TravelPlanService"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] }
    ]; };
    AddeditTravelPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addedit-travel-plan',
            template: __webpack_require__(/*! raw-loader!./addedit-travel-plan.page.html */ "./node_modules/raw-loader/index.js!./src/app/addedit-travel-plan/addedit-travel-plan.page.html"),
            styles: [__webpack_require__(/*! ./addedit-travel-plan.page.scss */ "./src/app/addedit-travel-plan/addedit-travel-plan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _travel_plan_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["TravelPlanService"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"]])
    ], AddeditTravelPlanPage);
    return AddeditTravelPlanPage;
}());



/***/ })

}]);
//# sourceMappingURL=addedit-travel-plan-addedit-travel-plan-module-es5.js.map