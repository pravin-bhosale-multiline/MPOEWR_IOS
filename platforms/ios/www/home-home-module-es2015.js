(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-center size=\"large\">\n      MPOWER\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid fixed *ngIf=\"isshowdata\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-card color=\"white\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <ion-icon src=\"./assets/profile.svg\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <h4>Welcome <br>{{userName}}</h4>\n            </ion-col>\n          </ion-row>\n\n\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-card color=\"white\">\n          <ion-item>\n            <ion-label position=\"stacked\">Dashboard Type<span style=\"color:red!important\">*</span></ion-label>\n            <ion-select [(ngModel)]=\"selectedDashboard\" (ionChange)=\"onDashboardSelectChange(selectedDashboard)\" interface=\"popover\"\n              multiple=\"false\" placeholder=\"Select Dashboard Type\">\n              <ion-select-option *ngFor=\"let dashboard of dashboardTypeList\" [value]=\"dashboard\">{{dashboard.value}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <!-- Default Dashboard -->\n    <section *ngIf=\"defaultDashboard\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col col-6 class=\"ion-no-padding\" *ngIf=\"loginauth?.isNewLead\">\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/newcustomer']\">\n            <ion-icon color=\"success\" src=\"./assets/existing_lead.svg\"></ion-icon>\n            <h5>New Lead</h5>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6 class=\"ion-no-padding\" *ngIf=\"loginauth?.isExistingLead\">\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/existingcustomer']\">\n            <ion-icon src=\"./assets/existing_lead_1.svg\"></ion-icon>\n            <h5>Existing Lead</h5>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row no-padding>\n        <ion-col col-6 class=\"ion-no-padding\" *ngIf=\"loginauth?.isNewOrder\">\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/neworder']\">\n            <ion-icon src=\"./assets/new_order.svg\"></ion-icon>\n            <h5>New Order</h5>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6 class=\"ion-no-padding\" *ngIf=\"loginauth?.isDraftOrder\">\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/existingorder']\">\n            <ion-icon src=\"./assets/existing_order.svg\"></ion-icon>\n            <h5>Draft Order</h5>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-padding\">\n        <ion-col col-6 class=\"ion-no-padding\">\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/settings']\">\n            <ion-icon src=\"./assets/settings.svg\"></ion-icon>\n            <h5>Settings</h5>\n          </ion-card>\n        </ion-col>\n        <ion-col col-6 class=\"ion-no-padding\" *ngIf=\"loginauth?.isOrderStatus\">\n\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/order-status']\">\n            <ion-icon src=\"./assets/order_status.svg\"></ion-icon>\n            <h5>Order Status</h5>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n     <ion-row class=\"ion-no-padding\" *ngIf=\"loginauth?.isBusinessPartnerAddress\">\n        <ion-col col-6 class=\"ion-no-padding\">\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/business-partner-address']\">\n            <ion-icon src=\"./assets/business-partner-address.svg\"></ion-icon>\n            <h5>Business Partner Address</h5>\n          </ion-card>\n        </ion-col>\n        <ion-col *ngIf=\"loginauth?.approvalScreen\" col-6 class=\"ion-no-padding\" [routerDirection]=\"'root'\"\n          [routerLink]=\"['/order-approval']\">\n          <ion-card text-center color=\"white\">\n            <ion-icon src=\"./assets/order_confirmation.svg\"></ion-icon>\n            <h5>Approval</h5>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-padding\" *ngIf=\"loginauth?.isARVisitSchedule\">\n        <ion-col col-6 class=\"ion-no-padding\">\n          <ion-card text-center color=\"white\" [routerDirection]=\"'root'\" [routerLink]=\"['/arvisitschedule']\">\n            <ion-icon src=\"./assets/artracker.svg\"></ion-icon>\n            <h5>AR Visit Schedule</h5>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </section>\n    <!-- Net Sales Dashboard -->\n    <section *ngIf=\"netSalesDashboard\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col class=\"ion-no-padding\">\n          <ion-card color=\"white\">\n            <ion-item>\n              <ion-label position=\"stacked\">Month<span style=\"color:red!important\">*</span></ion-label>\n              <ion-select [(ngModel)]=\"selectedaMonth\" (ionChange)=\"onMonthChange()\" interface=\"popover\"\n                multiple=\"false\" placeholder=\"Select Month\">\n                <ion-select-option *ngFor=\"let selectedaMonth of monthlist\" [value]=\"selectedaMonth\">{{selectedaMonth._identifier}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n\n\n\n      <ion-row class=\"ion-no-padding\">\n        <ion-col col-6 class=\"ion-no-padding\">\n          <ion-card text-center class=\"dashboard-count-card\">\n            <br />\n            <ion-label class=\"dashboard-keywidgets\">&#8377;{{netsales}}</ion-label>\n            <br />\n            <br />\n            <ion-label>NET SALES</ion-label>\n\n          </ion-card>\n        </ion-col>\n        <!-- <ion-col col-6 class=\"ion-no-padding\" >\n        <ion-card text-center class=\"dashboard-count-card\">\n          <br />\n          <ion-label  class=\"dashboard-keywidgets\">&#8377;{{pendingsalesorders}}</ion-label>\n          <br />\n          <br />\n          <ion-label>PENDING SALES ORDER VALUE</ion-label>\n        </ion-card>\n      </ion-col> -->\n      </ion-row>\n\n    </section>\n    <section *ngIf=\"targetSalesDashboard\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col class=\"ion-no-padding\">\n          <ion-card color=\"white\">\n            <ion-item>\n              <ion-label position=\"stacked\">Period<span style=\"color:red!important\">*</span></ion-label>\n              <ion-select [(ngModel)]=\"selectedTargetSalesMonth\" (ionChange)=\"onTargetSalesMonthChange(selectedTargetSalesMonth)\" interface=\"popover\"\n                multiple=\"false\" placeholder=\"Select Period\">\n                <ion-select-option *ngFor=\"let targetSalesMonth of targetSalesMonthList\" [value]=\"targetSalesMonth\">{{targetSalesMonth.period}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n        <ion-card color=\"white\">\n          <ion-item>\n            <!-- <ion-label>Sales Target : {{selectedTargetSalesMonthData?.salestarget}}</ion-label> -->\n            <ion-label>Sales Target : {{salesTarget}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Sales Achievement : {{salesAchievement}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Variance Value : {{varianceValue}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>Achievement Variance % : {{achievementVariance}}</ion-label>\n          </ion-item>\n        </ion-card>\n      </ion-col>  \n      </ion-row>\n\n    </section>\n\n  </ion-grid>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-cart {\n  background-color: powderblue;\n}\n\nion-icon {\n  font-size: 6em;\n}\n\nion-card {\n  margin-top: 3px !important;\n  margin-left: 3px !important;\n  margin-right: 3px !important;\n  margin-bottom: 3px !important;\n}\n\n.dashboard-count-card {\n  height: 100%;\n}\n\nion-content {\n  --background:f5f5f5;\n}\n\nh5 {\n  font-style: normal !important;\n  color: black !important;\n  font-size: large !important;\n}\n\n.dashboard-keywidgets {\n  font-size: large;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0FDSUo7O0FEREU7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNmVtO1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4uZGFzaGJvYXJkLWNvdW50LWNhcmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kIDpmNWY1ZjU7XHJcbn1cclxuaDV7XHJcbiAgICBmb250LXN0eWxlOm5vcm1hbCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZSFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcbiAgLmRhc2hib2FyZC1rZXl3aWRnZXRze1xyXG4gICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgICAgIH0iLCJpb24tY2FydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBvd2RlcmJsdWU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2ZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXNoYm9hcmQtY291bnQtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ZjVmNWY1O1xufVxuXG5oNSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xufVxuXG4uZGFzaGJvYXJkLWtleXdpZGdldHMge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");










let HomePage = class HomePage {
    constructor(loginauth, menuCtrl, platform, storage, msg, loginpage, events, router, commonfun, homeservice, zone, commonFunction) {
        this.loginauth = loginauth;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.storage = storage;
        this.msg = msg;
        this.loginpage = loginpage;
        this.events = events;
        this.router = router;
        this.commonfun = commonfun;
        this.homeservice = homeservice;
        this.zone = zone;
        this.commonFunction = commonFunction;
        this.isplatformweb = false;
        this.TAG = "HomePage";
        this.netsales = 0;
        this.pendingsalesorders = 0;
        this.dashboard = false;
        this.isshowdata = false;
        this.defaultDashboard = false;
        this.netSalesDashboard = false;
        this.targetSalesDashboard = false;
        this.isNewLead = false;
        this.isExistingLead = false;
        this.isBusinessPartnerAddress = false;
        this.isNewOrder = false;
        this.isDraftOrder = false;
        this.isOrderStatus = false;
        this.isLatLongFinder = false;
        this.isTravelPlan = false;
        this.isActualTravelPlan = false;
        this.isTravelExpense = false;
        this.isTravelPlanClosure = false;
        this.isApprovalAccess = false;
        this.isCustomerServiceAccess = false;
        this.isComplaintReportingAccess = false;
        this.isCompliantAcceptanceAccess = false;
        this.isFieldVisitAccess = false;
        this.isQuotationAccess = false;
        this.isQuotationApproval = false;
        this.isUpload = false;
        this.isReport = false;
        this.isArVisitSchedule = false;
        this.events.subscribe('dashbaordEvent', () => {
            // console.log("Menu Updated");
            this.zone.run(() => {
                // console.log("Menu Updated");
            });
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //this.commonfun.chkcache('home');
            try {
                // setTimeout(() => {
                //   this.chkcust();
                //   this.isshowdata = true;
                //   this.targetSalesDashboard = true;
                //   this.approvalScreenAccess = this.loginauth.approvalScreen;
                //   this.dashboard = this.loginauth.dashboard
                //   if (this.dashboard == true)
                //     this.getdashboard()
                // }, 2000);
                this.chkcust();
                this.isshowdata = true;
                // this.targetSalesDashboard = true;
                this.approvalScreenAccess = this.loginauth.approvalScreen;
                this.dashboardTypeList = this.loginauth.roleWiseDashboard;
                //  console.log(this.TAG,"Dashboard List",this.dashboardTypeList);
                // this.commonFunction.loadingPresent();
                // this.dashboardTypeList = await this.homeservice.getDashboardTypeList().toPromise();
                //  console.log(this.TAG,"Dashboard Type List",this.dashboardTypeList);
                if (!!this.dashboardTypeList) {
                    let twoDefault = false;
                    if (this.dashboardTypeList.length > 1) {
                        let noOneDefault = false;
                        for (let i = 0; i < this.dashboardTypeList.length; i++) {
                            for (let i = 0; i < this.dashboardTypeList.length; i++) {
                                if (this.dashboardTypeList[i].default == "N") {
                                    noOneDefault = true;
                                }
                                else {
                                    noOneDefault = false;
                                }
                            }
                            if (this.dashboardTypeList[i].default == "Y" && twoDefault == false) {
                                twoDefault = true;
                                if (this.dashboardTypeList[i].code == "HP") {
                                    this.defaultDashboard = true;
                                    this.targetSalesDashboard = false;
                                    this.netSalesDashboard = false;
                                    this.selectedDashboard = this.dashboardTypeList[i];
                                }
                                else if (this.dashboardTypeList[i].code == "ST") {
                                    this.targetSalesDashboard = true;
                                    this.defaultDashboard = false;
                                    this.netSalesDashboard = false;
                                    this.selectedDashboard = this.dashboardTypeList[i];
                                }
                                else if (this.dashboardTypeList[i].code == "SDB") {
                                    this.netSalesDashboard = true;
                                    this.targetSalesDashboard = false;
                                    this.defaultDashboard = false;
                                    this.getdashboard();
                                    this.selectedDashboard = this.dashboardTypeList[i];
                                }
                            }
                            else if (this.dashboardTypeList.length > 1 && noOneDefault == true) {
                                this.selectedDashboard = this.dashboardTypeList[0];
                                if (this.dashboardTypeList[0].code == "HP") {
                                    this.defaultDashboard = true;
                                    this.targetSalesDashboard = false;
                                    this.netSalesDashboard = false;
                                    this.selectedDashboard = this.dashboardTypeList[0];
                                }
                                else if (this.dashboardTypeList[0].code == "ST") {
                                    this.targetSalesDashboard = true;
                                    this.defaultDashboard = false;
                                    this.netSalesDashboard = false;
                                    this.selectedDashboard = this.dashboardTypeList[0];
                                }
                                else if (this.dashboardTypeList[0].code == "SDB") {
                                    this.netSalesDashboard = true;
                                    this.targetSalesDashboard = false;
                                    this.defaultDashboard = false;
                                    this.getdashboard();
                                    this.selectedDashboard = this.dashboardTypeList[0];
                                }
                            }
                        }
                    }
                    if (this.dashboardTypeList.length == 1) {
                        this.selectedDashboard = this.dashboardTypeList[0];
                        if (this.dashboardTypeList[0].code == "HP") {
                            this.defaultDashboard = true;
                            this.targetSalesDashboard = false;
                            this.netSalesDashboard = false;
                            this.selectedDashboard = this.dashboardTypeList[0];
                        }
                        else if (this.dashboardTypeList[0].code == "ST") {
                            this.targetSalesDashboard = true;
                            this.defaultDashboard = false;
                            this.netSalesDashboard = false;
                            this.selectedDashboard = this.dashboardTypeList[0];
                        }
                        else if (this.dashboardTypeList[0].code == "SDB") {
                            this.netSalesDashboard = true;
                            this.targetSalesDashboard = false;
                            this.defaultDashboard = false;
                            this.getdashboard();
                            this.selectedDashboard = this.dashboardTypeList[0];
                        }
                    }
                }
                else {
                    this.defaultDashboard = true;
                }
                //   this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.defaultDashboard = true;
                //  this.commonFunction.loadingDismiss();
                //  console.log("Error: Home ngonit:", error);
            }
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.menuCtrl.enable(false);
            //  console.log("ionViewWillEnter");
            this.approvalScreenAccess = this.loginauth.approvalScreen;
            this.isNewLead = this.loginauth.isNewLead;
            this.isExistingLead = this.loginauth.isExistingLead;
            this.isBusinessPartnerAddress = this.loginauth.isBusinessPartnerAddress;
            this.isNewOrder = this.loginauth.isNewOrder;
            this.isDraftOrder = this.loginauth.isDraftOrder;
            this.isOrderStatus = this.loginauth.isOrderStatus;
            this.isLatLongFinder = this.loginauth.isLatLongFinder;
            ;
            this.isTravelPlan = this.loginauth.isTravelPlan;
            this.isActualTravelPlan = this.loginauth.isActualTravelPlan;
            this.isTravelExpense = this.loginauth.isTravelExpense;
            this.isTravelPlanClosure = this.loginauth.isTravelPlanClosure;
            this.isApprovalAccess = this.loginauth.isApprovalAccess;
            this.isCustomerServiceAccess = this.loginauth.isCustomerServiceAccess;
            this.isComplaintReportingAccess = this.loginauth.isComplaintReportingAccess;
            this.isCompliantAcceptanceAccess = this.loginauth.isCompliantAcceptanceAccess;
            this.isFieldVisitAccess = this.loginauth.isFieldVisitAccess;
            this.isQuotationAccess = this.loginauth.isQuotationAccess;
            this.isQuotationApproval = this.loginauth.isQuotationApproval;
            this.isUpload = this.loginauth.isUpload;
            this.isReport = this.loginauth.isReport;
            this.isArVisitSchedule = this.loginauth.isARVisitSchedule;
            this.dashboard = this.loginauth.dashboard;
            if (this.dashboard == true) {
                this.getdashboard();
            }
            try {
                if (this.targetSalesDashboard == true) {
                    this.commonFunction.loadingPresent();
                    this.targetSalesMonthList = yield this.homeservice.getTargetSalesPeriod().toPromise();
                    //  console.log(this.TAG,"Target Sales Month List",this.targetSalesMonthList);
                    this.commonFunction.loadingDismiss();
                }
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
            }
        });
    }
    chkcust() {
        try {
            if (this.loginauth.defaultprofile != null && this.loginauth.defaultprofile != undefined) {
                this.userName = this.loginauth.defaultprofile[0].name ? this.loginauth.defaultprofile[0].name : 'Demo User';
                if (this.loginauth.defaultprofile[0].mmstOrderusrtype === "CEB") {
                    this.checkcust = false;
                }
                if (this.loginauth.defaultprofile[0].mmstOrderusrtype !== "CEB") {
                    this.checkcust = true;
                }
                // if(!this.platform.is("desktop")){
                if (!this.msg.isplatformweb) {
                    this.isplatformweb = false;
                }
                else {
                    this.isplatformweb = true;
                }
            }
            else {
                this.router.navigateByUrl('/login');
            }
        }
        catch (error) {
        }
    }
    getdashboard() {
        try {
            // this.homeservice.getdashboardapi()
            this.homeservice.getdashboardapi1().subscribe(data => {
                const response = data['response'];
                var jsondata = response.data;
                //get month
                this.homeservice.getdashboardapi(jsondata[0].id).subscribe(data2 => {
                    const response2 = data2['response'];
                    this.monthlist = response2.data;
                    this.selectedaMonth = this.monthlist[0];
                }, error => {
                    this.commonfun.presentAlert("Message", "Error", error);
                    //  console.log("getdashboardapi:loadingDismiss");
                });
                //get month
            }, error => {
                this.commonfun.presentAlert("Message", "Error", error);
                //  console.log("getdashboardapi1:loadingDismiss");
            });
        }
        catch (error) {
        }
    }
    onMonthChange() {
        try {
            // console.log("this.selectedaMonth",this.selectedaMonth);
            this.homeservice.CustomerWiseSalesInfo(this.selectedaMonth.code).subscribe(data => {
                const response = data;
                this.netsales = response.netamt;
                this.pendingsalesorders = response.pendingordervalue;
                // this.selectedaMonth=this.monthlist[this.monthlist.length-1]
            }, error => {
                // this.commonfun.presentAlert("Message", "Error", error);
                //  console.log("CustomerWiseSalesInfo", error);
            });
        }
        catch (error) {
        }
    }
    onDashboardSelectChange(selectedDashboard) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (selectedDashboard.code == "HP") {
                    this.defaultDashboard = true;
                    this.targetSalesDashboard = false;
                    this.netSalesDashboard = false;
                }
                else if (selectedDashboard.code == "ST") {
                    this.targetSalesDashboard = true;
                    this.defaultDashboard = false;
                    this.netSalesDashboard = false;
                    try {
                        this.commonFunction.loadingPresent();
                        this.targetSalesMonthList = yield this.homeservice.getTargetSalesPeriod().toPromise();
                        //  console.log(this.TAG,"Target Sales Month List",this.targetSalesMonthList);
                        this.commonFunction.loadingDismiss();
                    }
                    catch (error) {
                        this.commonFunction.loadingDismiss();
                    }
                }
                else if (selectedDashboard.code == "SDB") {
                    this.netSalesDashboard = true;
                    this.targetSalesDashboard = false;
                    this.defaultDashboard = false;
                    this.getdashboard();
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    onTargetSalesMonthChange(selectedTargetSalesMonth) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                this.selectedTargetSalesMonthData = yield this.homeservice.getTargetSalesPeriodData(selectedTargetSalesMonth).toPromise();
                // console.log(this.TAG,"onTargetSalesMonthChange Data",this.selectedTargetSalesMonthData);
                //  console.log(this.TAG,"onTargetSalesMonthChange Data",this.selectedTargetSalesMonthData);
                if (!!this.selectedTargetSalesMonthData) {
                    this.salesTarget = this.selectedTargetSalesMonthData[0].salestarget;
                    this.salesAchievement = this.selectedTargetSalesMonthData[0].salesachievement;
                    this.varianceValue = this.selectedTargetSalesMonthData[0].variancevalue;
                    this.achievementVariance = this.selectedTargetSalesMonthData[0].achmntveriance;
                    //  console.log(this.TAG,"Binded Target DATA",this.salesTarget);
                }
                else {
                    this.salesTarget = "";
                    this.salesAchievement = "";
                    this.varianceValue = "";
                    this.achievementVariance = "";
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.salesTarget = "";
                this.salesAchievement = "";
                this.varianceValue = "";
                this.achievementVariance = "";
                this.commonFunction.loadingDismiss();
                //  console.log(this.TAG,error);
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"] },
    { type: _login_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"] },
    { type: _home_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"], _login_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"], _home_home_service__WEBPACK_IMPORTED_MODULE_9__["HomeService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





let HomeService = class HomeService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
        this.TAG = "Dashboard Service";
    }
    getdashboardapi1() {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_lov?'
            + '_where=scode=\'IonicML\'', false, true);
    }
    getdashboardapi(id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_lov_val?'
            + '_selectedProperties=id,code&'
            + '_where=mmstLov%20IN(\'' + id + '\')'
            + '&_orderby=Created%20Desc', false, true);
    }
    CustomerWiseSalesInfo(date) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.CustomerWiseSalesInfo?'
            + 'date=' + date
            + '&userid=' + this.loginauth.userid
            + '&activity=' + this.loginauth.selectedactivity.id);
    }
    getDashboardTypeList() {
        try {
            let URL = this.loginauth.commonurl + 'ws/in.mbs.webservice.DashBoardSalesTarget?';
            'userid=' + this.loginauth.userid
                + '&activityid=' + this.loginauth.selectedactivity.id;
            return this.genericHTTP.get(URL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getTargetSalesPeriod() {
        try {
            let URL = this.loginauth.commonurl + 'ws/in.mbs.webservice.DashBoardSalesTarget?'
                + 'userid=' + this.loginauth.userid
                + '&activityid=' + this.loginauth.selectedactivity.id;
            return this.genericHTTP.get(URL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getTargetSalesPeriodData(selectedTargetSalesMonth) {
        try {
            let getTargetSalesPeriodDataURL = this.loginauth.commonurl + 'ws/in.mbs.webservice.DashBoardSalesTarget?'
                + 'userid=' + this.loginauth.userid
                + '&activityid=' + this.loginauth.selectedactivity.id
                + '&mmis_target_id=' + selectedTargetSalesMonth.mmis_target_id;
            //  console.log(this.TAG,"getTargetSalesPeriodData URL",getTargetSalesPeriodDataURL);
            return this.genericHTTP.get(getTargetSalesPeriodDataURL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], HomeService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map