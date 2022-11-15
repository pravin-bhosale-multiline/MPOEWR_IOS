(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addedit-actual-travel-plan-addedit-actual-travel-plan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-title>Add Customer</ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n     \n      <ion-row>\n        <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">Search Customer</ion-label>\n              <ion-input [formControl]=\"formaddactualplan.controls['searchlead']\" (ionChange)=\"onsearch()\" type=\"text\"></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row> \n\n\n      <ion-row *ngIf=\"leadskm\">\n        <ion-col>\n          <ion-item float-left lines=\"none\" >\n            <ion-button slot=\"start\" color=\"primary\"  [disabled]=\"isfirst\"  text-center (click)=\"onPrevious()\">Previous</ion-button>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item float-right lines=\"none\">\n            <ion-button slot=\"end\" color=\"primary\"  [disabled]=\"islast\"  text-center (click)=\"onNext()\">&nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;</ion-button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-item *ngFor=\"let item of leadskm; index as i\"  text-wrap style=\"font-size: small;\">\n        <!-- <ion-content scrollX=\"true\"> -->\n          <div style=\"width: 100%;\">\n        <ion-row>\n          <ion-col size=\"2\" (click)=\"onAddLead(item)\" >\n            <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\" style=\"font-size: x-large;\">\n            </ion-icon>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-label style=\"white-space: normal\">\n               {{ item.custname }}\n            </ion-label>\n            <ion-label style=\"font-size: small;\">Address: {{ item.addressname }}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label style=\"white-space: normal\">\n               {{ item.km}} km\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n        <!-- </ion-content> -->\n\n\n      </ion-item>\n\n<ion-row *ngIf=\"leadskm\">\n  <ion-col>\n    <ion-item float-left lines=\"none\" >\n      <ion-button slot=\"start\" color=\"primary\" text-center  [disabled]=\"isfirst\" (click)=\"onPrevious()\">Previous</ion-button>\n    </ion-item>\n  </ion-col>\n  <ion-col>\n    <ion-item float-right lines=\"none\">\n      <ion-button slot=\"end\" color=\"primary\" text-center  [disabled]=\"islast\" (click)=\"onNext()\">&nbsp;&nbsp;&nbsp;&nbsp;Next&nbsp;&nbsp;&nbsp;&nbsp;</ion-button>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <h5 ion-text class=\"text-primary\">\n            <ion-icon name=\"bookmarks\"></ion-icon>Selected Customers:\n          </h5>\n        </ion-col>\n      </ion-row>\n\n\n<ion-row>\n  <div style=\"overflow-x:auto\">\n    <ion-grid>\n     <ion-row nowrap >\n      <ion-col nowrap>\n      <ion-row nowrap>\n       <ion-col col-2 size=\"4\" class=\"grid-header\">Line Number</ion-col>\n       <ion-col size=\"8\" class=\"grid-header\">Customer</ion-col>\n       <ion-col size=\"8\" class=\"grid-header\">Address</ion-col>\n       <ion-col size=\"3\" class=\"grid-header\">Day</ion-col>\n       <ion-col size=\"8\" class=\"grid-header\">Date</ion-col>\n       <!-- <ion-col size=\"5\" class=\"grid-header\">Address Lat</ion-col> -->\n       <!-- <ion-col size=\"5\" class=\"grid-header\">Address Long</ion-col> -->\n       <ion-col size=\"2\" class=\"grid-header\">KM</ion-col>\n       <ion-col size=\"3\" class=\"grid-header\">Status</ion-col>\n\n      </ion-row>\n    </ion-col>\n     </ion-row>\n    \n     <ion-row *ngFor=\"let data of selectedleadskm; index as i\"  nowrap>\n      <ion-col nowrap>\n     <ion-row nowrap>\n        \n        <ion-col size=\"2\" style=\"width: 100%; text-align: right;\">\n          <!-- <ion-icon name=\"trash\" (click)=\"removeLeads(data)\" style=\"font-size: x-large;\n          color: red;\"></ion-icon> -->\n        </ion-col>\n        <ion-col size=\"2\" class=\"forecast_div\">{{i+1}}</ion-col>\n        <ion-col size=\"8\" class=\"forecast_div\">{{data.custname}}</ion-col>\n        <ion-col size=\"8\" class=\"forecast_div\">{{data.addressname}}</ion-col>\n        <ion-col  size=\"3\"class=\"forecast_div\">{{data.visit_day}}</ion-col>\n        <ion-col size=\"8\" class=\"forecast_div\">{{data.visit_date}}</ion-col>\n        <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.latitude}}</ion-col> -->\n        <!-- <ion-col size=\"5\" class=\"forecast_div\">{{data.longitude}}</ion-col> -->\n        <ion-col size=\"2\" class=\"forecast_div\">{{data.km}}</ion-col>\n        <ion-col size=\"3\" class=\"forecast_div\">{{data.status}}</ion-col>\n\n     \n\n      </ion-row>\n    \n    </ion-col>\n      </ion-row>\n   \n\n    </ion-grid>     \n  </div>\n</ion-row>\n   \n    </ion-card-content>\n  </ion-card>\n  <ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom btn-scheme\" type=\"submit\" [disabled]=\"!formaddactualplan.valid\" (click)=\"onSave()\">\n    Save\n    </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AddeditActualTravelPlanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditActualTravelPlanPageModule", function() { return AddeditActualTravelPlanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addedit_actual_travel_plan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addedit-actual-travel-plan.page */ "./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.ts");







const routes = [
    {
        path: '',
        component: _addedit_actual_travel_plan_page__WEBPACK_IMPORTED_MODULE_6__["AddeditActualTravelPlanPage"]
    }
];
let AddeditActualTravelPlanPageModule = class AddeditActualTravelPlanPageModule {
};
AddeditActualTravelPlanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addedit_actual_travel_plan_page__WEBPACK_IMPORTED_MODULE_6__["AddeditActualTravelPlanPage"]]
    })
], AddeditActualTravelPlanPageModule);



/***/ }),

/***/ "./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n/* Hide ion-content scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\nh5 ion-icon {\n  color: lightcoral;\n}\n.inputfile {\n  color: transparent;\n}\n.forecast_container {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  height: 20vw;\n  font-size: 0.8em;\n  font-weight: 300;\n}\n.forecast_div {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  font-size: 0.8em;\n  font-weight: 300;\n  max-width: 175px;\n}\n.grid-header {\n  font-weight: bold;\n  max-width: 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9hZGRlZGl0LWFjdHVhbC10cmF2ZWwtcGxhbi9hZGRlZGl0LWFjdHVhbC10cmF2ZWwtcGxhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZGVkaXQtYWN0dWFsLXRyYXZlbC1wbGFuL2FkZGVkaXQtYWN0dWFsLXRyYXZlbC1wbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FERUk7RUFDRSxxQkFBQTtBQ0FOO0FER0k7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0FDRk47QURNRTtFQUNFLFlBQUE7QUNISjtBRE1FLCtCQUFBO0FBQ0E7RUFDRSxhQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEo7QURJSTtFQUNFLGlCQUFBO0FDRk47QURPRTtFQUNFLGtCQUFBO0FDSko7QURPRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBREtBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZBIiwiZmlsZSI6InNyYy9hcHAvYWRkZWRpdC1hY3R1YWwtdHJhdmVsLXBsYW4vYWRkZWRpdC1hY3R1YWwtdHJhdmVsLXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNjcm9sbFtzY3JvbGxYXSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgIC8vIGhlaWdodDogMTIwcHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbi8vIHdpZHRoOjEwMCU7XG4gICAgLnNjcm9sbC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuc2VsZWN0YWJsZS1pY29ue1xuICAgICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciBpbWd7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgaW9uLXNjcm9sbFtzY3JvbGwtYXZhdGFyXXtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAvKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuXG4gIGg1e1xuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gICAgY29sb3I6IGRhcmtjeWFuO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgaW9uLWljb257XG4gICAgICBjb2xvcjogbGlnaHRjb3JhbDtcbiAgICB9XG5cbiAgfVxuICBcbiAgLmlucHV0ZmlsZSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmZvcmVjYXN0X2NvbnRhaW5lcntcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXg6IHZpc2libGUhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OjIwdnc7XG4gICAgZm9udC1zaXplOjAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbn1cbi5mb3JlY2FzdF9kaXZ7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IHZpc2libGUhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOjAuOGVtO1xuICBmb250LXdlaWdodDozMDA7XG4gIG1heC13aWR0aDogMTc1cHg7XG59XG4uZ3JpZC1oZWFkZXJ7XG5mb250LXdlaWdodDogYm9sZDtcbm1heC13aWR0aDogMTc1cHg7XG59IiwiaW9uLXNjcm9sbFtzY3JvbGxYXSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuaW9uLXNjcm9sbFtzY3JvbGxYXSAuc2Nyb2xsLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zZWxlY3RhYmxlLWljb24ge1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIGlvbi1hdmF0YXIgaW1nIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJdIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4vKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmg1IHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6IGRhcmtjeWFuO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaDUgaW9uLWljb24ge1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuLmlucHV0ZmlsZSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcmVjYXN0X2NvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy14OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoZWlnaHQ6IDIwdnc7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5mb3JlY2FzdF9kaXYge1xuICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cblxuLmdyaWQtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTc1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.ts ***!
  \*******************************************************************************/
/*! exports provided: AddeditActualTravelPlanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditActualTravelPlanPage", function() { return AddeditActualTravelPlanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_plan_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../travel-plan/travel-plan.service */ "./src/app/travel-plan/travel-plan.service.ts");







let AddeditActualTravelPlanPage = class AddeditActualTravelPlanPage {
    constructor(fb, commonfun, router, route, travelplanservice, loginauth) {
        this.fb = fb;
        this.commonfun = commonfun;
        this.router = router;
        this.route = route;
        this.travelplanservice = travelplanservice;
        this.loginauth = loginauth;
        this.selectedleadskm = [];
        this.offset = 0;
        this.strsearch = '';
        this.index = '';
        this.isfirst = false;
        this.islast = false;
        this.getrout();
        this.formaddactualplan = this.fb.group({
            selectedlead: [],
            searchlead: [],
        });
    }
    ngOnInit() {
    }
    Resetpage() { }
    onsearch() {
        var srchkey = this.formaddactualplan.controls["searchlead"].value;
        this.strsearch = srchkey;
        this.offset = 0;
        if (srchkey.length % 3 == 0 || srchkey == '') {
            this.bindNearestPerson();
        }
    }
    onPrevious() {
        if (this.offset > 1) {
            this.offset = this.offset - 10;
            this.bindNearestPerson();
        }
    }
    onNext() {
        this.offset = this.offset + 10;
        this.bindNearestPerson();
    }
    bindNearestPerson() {
        try {
            this.travelplanservice.getSearchNearestPersoni(this.selectedLead.addressid, this.offset, this.strsearch, this.outOrderChkCtrlValueAddEditActual).subscribe(data => {
                var response = data;
                if (response.AddressList.length > 0) {
                    this.leadskm = response.AddressList;
                    // this.leadskm=this.leadskm.slice(0,10)
                }
                else {
                    //       this.leadskm=response.AddressList;
                    //       if(this.offset>0)
                    // this.offset=this.offset-10;
                    if (this.offset > 0)
                        this.offset = this.offset - 10;
                    if (this.strsearch != "")
                        this.leadskm = response.AddressList;
                }
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
            // this.commonfun.loadingDismiss();
        }
    }
    onAddLead(item) {
        try {
            if (this.selectedleadskm) {
                if (this.selectedleadskm.some(i => i.addressid === item.addressid)) {
                    this.commonfun.presentAlert("Message", "Alert", "Lead already exists.");
                }
                else {
                    var slitem = { "custORbpatnerID": item.custORbpatnerID, "mexp_visitplan_id": this.mexp_visitplan_id, "mexp_customervisit_id": item.custORbpatnerID, "line": this.selectedleadskm.length + 1, "custname": item.custname, "addressid": item.addressid, "addressname": item.addressname, "pincode": item.pincode, "visit_day": this.days, "visit_date": this.traveldate, "latitude": item.latitude, "longitude": item.longitude, "km": item.km, "status": item.status, "show": "false", "TaskList": item.TaskList };
                    this.selectedleadskm.splice(this.index + 1, 0, slitem);
                    this.onSave();
                    //  this.selectedleadskm.push(slitem);
                }
            }
            else {
                var slitem1 = [{ "custORbpatnerID": item.custORbpatnerID, "mexp_visitplan_id": this.mexp_visitplan_id, "mexp_customervisit_id": item.custORbpatnerID, "line": "1", "custname": item.custname, "addressid": item.addressid, "addressname": item.addressname, "pincode": item.pincode, "visit_day": this.days, "visit_date": this.traveldate, "latitude": item.latitude, "longitude": item.longitude, "km": item.km, "status": item.status, "show": "false", "TaskList": item.TaskList }];
                this.selectedleadskm = slitem1;
                this.onSave();
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    getrout() {
        try {
            this.route.params.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.selectedLead = this.router.getCurrentNavigation().extras.state.selectedLead;
                    this.selectedleadskm = this.router.getCurrentNavigation().extras.state.allleads;
                    this.mexp_visitplan_id = this.router.getCurrentNavigation().extras.state.mexp_visitplan_id;
                    this.index = this.router.getCurrentNavigation().extras.state.index;
                    this.fromdate = this.router.getCurrentNavigation().extras.state.fromdate;
                    this.todate = this.router.getCurrentNavigation().extras.state.todate;
                    this.days = this.router.getCurrentNavigation().extras.state.days;
                    this.traveldate = this.router.getCurrentNavigation().extras.state.traveldate;
                    this.outOrderChkCtrlValueAddEditActual = this.router.getCurrentNavigation().extras.state.outOrderChkCtrl;
                    if (this.selectedLead == null) {
                        this.leadskm = this.router.getCurrentNavigation().extras.state.first10leads;
                    }
                    else {
                        this.bindNearestPerson();
                    }
                }
            });
        }
        catch (error) {
            //console.log("addsublead()-ERROR:",error);
        }
    }
    removeLeads(post) {
        try {
            //console.log("removeLeads()");
            let index = this.selectedleadskm.indexOf(post);
            const result = this.selectedleadskm.filter(item => item != post);
            this.selectedleadskm = result;
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    onSave() {
        try {
            let navigationExtras = {
                state: {
                    selectedddlsubleads: this.selectedleadskm,
                    selectedLead: this.selectedLead
                }
            };
            this.router.navigate(['actual-travel-plan'], navigationExtras);
        }
        catch (error) {
        }
    }
};
AddeditActualTravelPlanPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _travel_plan_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["TravelPlanService"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] }
];
AddeditActualTravelPlanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addedit-actual-travel-plan',
        template: __webpack_require__(/*! raw-loader!./addedit-actual-travel-plan.page.html */ "./node_modules/raw-loader/index.js!./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.html"),
        styles: [__webpack_require__(/*! ./addedit-actual-travel-plan.page.scss */ "./src/app/addedit-actual-travel-plan/addedit-actual-travel-plan.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _travel_plan_travel_plan_service__WEBPACK_IMPORTED_MODULE_6__["TravelPlanService"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"]])
], AddeditActualTravelPlanPage);



/***/ })

}]);
//# sourceMappingURL=addedit-actual-travel-plan-addedit-actual-travel-plan-module-es2015.js.map