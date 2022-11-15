(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arvisitschedule-arvisitschedule-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/arvisitschedule.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arvisitschedule/arvisitschedule.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      AR Visit Schedule\n    </ion-title>\n    <ion-icon slot=\"end\" style=\"font-size: xx-large;\" name=\"add-circle-outline\" (click)=\"doClickAddUnPlanned()\" ></ion-icon>\n    </ion-toolbar>\n    <ion-card>\n    <ion-row>\n      <ion-col size=\"6\">\n      \n          <ion-datetime  placeholder=\"From Date\" [(ngModel)]=\"selectedfromdate\" display-format=\"DD-MM-YYYY\"></ion-datetime>\n       \n      </ion-col>\n      <ion-col size=\"6\">\n        \n          <ion-datetime placeholder=\"To Date\" [(ngModel)]=\"selectedtodate\" [min]=\"selectedfromdate\" display-format=\"DD-MM-YYYY\"></ion-datetime>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" style=\"padding-left: 20px;\">\n \n          <ionic-selectable placeholder=\"Select Customer\" [(ngModel)]=\"selectedcustomer\" itemValueField=\"bpartnerid\" itemTextField=\"bpartnername\" [items]=\"customerlist\"\n            [canSearch]=\"true\" [hasInfiniteScroll]=\"true\" (onSearch)=\"onSearchCustomer($event)\" (onClose)=\"oncustomerClose($event)\"\n            (onInfiniteScroll)=\"doInfiniteCust($event)\" [isMultiple]=\"false\">\n          </ionic-selectable>\n        \n      </ion-col>\n    </ion-row>\n      <ion-row>\n     <ion-col size=\"8\">\n      \n        <ion-select interface=\"popover\" [(ngModel)]=\"selectedstatus\" placeholder=\"Select Status\">\n          <ion-select-option value=\"ACP\">Accept Or Reject</ion-select-option>\n          <ion-select-option value=\"SCP\">Update Checklist</ion-select-option>\n          <ion-select-option value=\"VIP\">Update Visit</ion-select-option>\n          <ion-select-option value=\"ONH\">On Hold</ion-select-option>\n        </ion-select>\n      \n     </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon style=\"font-size: 35px;\" (click)=\"onClickSearch($event)\"  name=\"search\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-icon style=\"font-size: 35px;\" (click)=\"onClickClear($event)\"  name=\"close-circle-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-header>\n\n<ion-content>\n<ion-grid *ngFor=\"let plan of planlist\">\n  <ion-row>\n    <div style=\"padding-left: 5px;\">\n    <ion-checkbox (click)=\"selectMember(plan)\" [(ngModel)]=\"plan.ischecked\"  ></ion-checkbox>\n    </div>\n\n    <ion-col  size=\"2\" >\n      <div style=\"padding-left: 5px;\">\n      <ion-icon style=\"font-size: 24px; color: orange;\"  [name]=\"!plan.isplusminus ? 'add' : 'remove'\" (click)=\"onToggelGrid(plan)\" ></ion-icon>\n    </div>\n    </ion-col>\n    <ion-col>\n      <div style=\"background-color: antiquewhite;\">\n        {{plan.dateofvisit}} - {{plan.bpartnername}} - {{plan.status==='VIP'?'Update Visit'\n        :(plan.status==='SCP'?'Update Checklist':(plan.status==='ONH'?'On Hold':(plan.status==='ACP'?'Accept Or Reject':'')))}}\n    </div>\n    </ion-col>\n    \n      <ion-col size=\"1\">\n        <!--  --> \n\n        <div style=\"text-align: right;\"  *ngIf=\"plan.status==='SCP' || plan.status==='VIP' || plan.status==='ONH'\">\n        <ion-icon  style=\"font-size: x-large;\"  name=\"arrow-dropright\" (click)=\"openChecklist(plan)\"></ion-icon>\n        </div>\n      </ion-col>\n      \n  </ion-row>\n  <div *ngIf=\"plan.isplusminus\">\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Business Partner</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.bpartnername}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Date Of Visit</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.dateofvisit}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Collection Branch</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.collectionbranchname}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Collection Zone</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.collectionzone}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Activity</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.activityname}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col >\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Customer Contact No.</ion-label>\n    </ion-col>\n    <ion-col >\n      <ion-label style=\"font-size: smaller;\"> {{plan.customercontact}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col size=\"6\">\n      <ion-label style=\"font-size: smaller; font-weight: bold;\">Address</ion-label>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label style=\"font-size: smaller;\"> {{plan.bpartnerlocationname}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\" > </ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold; background-color: antiquewhite;\"> Plan Details</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold; background-color: antiquewhite;\"> Live Value (As of Yesterday) </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\" > OutStanding</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.outstanding}}</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.outstandingcurr}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Credit</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.credit}} </ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.creditcurr}} </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Amt. Not Due</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.amtnotdue}} </ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.amtnotduecurr}} </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\"> Amt. Due</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.amtdue}} </ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\"> {{plan.amtduecurr}} </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row >\n    <ion-col>\n      <ion-label style=\"font-size: smaller; font-weight: bold;\">Target For Month</ion-label>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: smaller;\">{{plan.targetformonth}}</ion-label>\n    </ion-col>\n  </ion-row>\n </div>\n</ion-grid>\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n  <ion-infinite-scroll-content  *ngIf=\"!isemptyList\" loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n<ion-footer>\n  <ion-row *ngIf=\"totalRows!==0\">\n  <ion-item>\n    <ion-button  color=\"primary\" text-center\n      (click)=\"AcceptPlan()\">Accept</ion-button>\n    <!-- <ion-button color=\"primary\" text-center [disabled]=\"!formprod.valid || !Iscartproduct\" (click)=\"onSaveTemplate(formprod.value)\">Save Template</ion-button> -->\n  </ion-item>\n  <ion-item  >\n    <ion-button  color=\"primary\" text-center\n      (click)=\"presentAlertRejectedReason()\">Reject</ion-button>\n    <!-- <ion-button color=\"primary\" text-center [disabled]=\"!formprod.valid || !Iscartproduct\" (click)=\"onSaveTemplate(formprod.value)\">Save Template</ion-button> -->\n  </ion-item>\n  <ion-item  >\n    <ion-button  color=\"primary\" text-center\n      (click)=\"presentCrossAssignment()\">Cross Assignment</ion-button>\n    <!-- <ion-button color=\"primary\" text-center [disabled]=\"!formprod.valid || !Iscartproduct\" (click)=\"onSaveTemplate(formprod.value)\">Save Template</ion-button> -->\n  </ion-item>\n</ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/arvisitschedule/arvisitschedule.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/arvisitschedule/arvisitschedule.module.ts ***!
  \***********************************************************/
/*! exports provided: ArvisitschedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArvisitschedulePageModule", function() { return ArvisitschedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aruserselect_aruserselect_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aruserselect/aruserselect.page */ "./src/app/arvisitschedule/aruserselect/aruserselect.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _arvisitschedule_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arvisitschedule.page */ "./src/app/arvisitschedule/arvisitschedule.page.ts");









var routes = [
    {
        path: '',
        component: _arvisitschedule_page__WEBPACK_IMPORTED_MODULE_8__["ArvisitschedulePage"]
    }
];
var ArvisitschedulePageModule = /** @class */ (function () {
    function ArvisitschedulePageModule() {
    }
    ArvisitschedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                ionic_selectable__WEBPACK_IMPORTED_MODULE_2__["IonicSelectableModule"]
            ],
            declarations: [_arvisitschedule_page__WEBPACK_IMPORTED_MODULE_8__["ArvisitschedulePage"], _aruserselect_aruserselect_page__WEBPACK_IMPORTED_MODULE_1__["AruserselectPage"]],
            entryComponents: [_aruserselect_aruserselect_page__WEBPACK_IMPORTED_MODULE_1__["AruserselectPage"]]
        })
    ], ArvisitschedulePageModule);
    return ArvisitschedulePageModule;
}());



/***/ }),

/***/ "./src/app/arvisitschedule/arvisitschedule.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/arvisitschedule/arvisitschedule.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydmlzaXRzY2hlZHVsZS9hcnZpc2l0c2NoZWR1bGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/arvisitschedule/arvisitschedule.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/arvisitschedule/arvisitschedule.page.ts ***!
  \*********************************************************/
/*! exports provided: ArvisitschedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArvisitschedulePage", function() { return ArvisitschedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aruserselect_aruserselect_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aruserselect/aruserselect.page */ "./src/app/arvisitschedule/aruserselect/aruserselect.page.ts");
/* harmony import */ var _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arvisitschedule.service */ "./src/app/arvisitschedule/arvisitschedule.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var ArvisitschedulePage = /** @class */ (function () {
    function ArvisitschedulePage(commonfun, arvisitScheduleService, router, loginauth, alertController, modalController) {
        this.commonfun = commonfun;
        this.arvisitScheduleService = arvisitScheduleService;
        this.router = router;
        this.loginauth = loginauth;
        this.alertController = alertController;
        this.modalController = modalController;
        this.isemptyList = false;
        this.offset = 0;
        this.totalRows = 0;
        this.sorder = 1;
        this.offsetcust = 0;
    }
    ArvisitschedulePage.prototype.ngOnInit = function () {
        //this.bindDataList();
    };
    ArvisitschedulePage.prototype.ionViewWillEnter = function () {
        this.offset = 0;
        this.bindDataList();
    };
    ArvisitschedulePage.prototype.onClickSearch = function (event) {
        this.offset = 0;
        this.bindDataList();
    };
    ArvisitschedulePage.prototype.onClickClear = function (event) {
        this.selectedcustomer = undefined;
        this.selectedfromdate = undefined;
        this.selectedtodate = undefined;
        this.selectedstatus = undefined;
    };
    ArvisitschedulePage.prototype.oncustomerClose = function (event) {
        if (event !== undefined)
            event.component.searchText = "";
        this.searchcustomer = "";
    };
    ArvisitschedulePage.prototype.onSearchCustomer = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.searchcustomer = event.text; //.replace(/\s/g,'');
                        return [4 /*yield*/, this.bindCustomer(this.searchcustomer, 0)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArvisitschedulePage.prototype.bindCustomer = function (searchcustomer, offsetcust) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    body = {
                        action: "getcustomerforplan",
                        offset: offsetcust,
                        search: searchcustomer
                    };
                    this.arvisitScheduleService.getArVisitPlan(body).subscribe(function (data) {
                        var response = data;
                        _this.customerlist = response.data;
                        _this.custtotalrow = response.totalRows;
                        //console.log(this.listofitem);
                    });
                }
                catch (error) {
                    console.log("getcustomerforplan", error);
                }
                return [2 /*return*/];
            });
        });
    };
    ArvisitschedulePage.prototype.doInfiniteCust = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var text, body, tempData, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        text = (event.text || '').trim().toLowerCase();
                        if (!(this.offsetcust < this.custtotalrow && this.custtotalrow > 20)) return [3 /*break*/, 3];
                        this.offsetcust = this.offsetcust + 20;
                        body = {
                            action: "getcustomerforplan",
                            offset: this.offsetcust,
                            search: text
                        };
                        return [4 /*yield*/, this.arvisitScheduleService.getArVisitPlan(body)];
                    case 1: return [4 /*yield*/, (_a.sent()).toPromise()];
                    case 2:
                        tempData = _a.sent();
                        if (!!tempData) {
                            this.customerlist = this.customerlist.concat(tempData['data']);
                            event.component.endInfiniteScroll();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        event.component.endInfiniteScroll();
                        event.component.disableInfiniteScroll();
                        _a.label = 4;
                    case 4:
                        if (this.offsetcust > this.custtotalrow) {
                            event.component.disableInfiniteScroll();
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ArvisitschedulePage.prototype.onorgchange = function (event) {
        //console.log("selectedOrg:", event.value)
        this.selectedcustomer = event.value;
    };
    ArvisitschedulePage.prototype.onToggelGrid = function (plan) {
        plan.isplusminus = !plan.isplusminus;
    };
    ArvisitschedulePage.prototype.openChecklist = function (plan) {
        var _this = this;
        this.commonfun.loadingPresent();
        // check for section
        this.sorder = plan.status === 'SCP' ? 1 : 2;
        var body = {
            "action": "getquestionaryforartracker",
            "sectionorder": this.sorder,
            "orgactid": this.loginauth.selectedactivity.id
        };
        this.arvisitScheduleService.getArVisitPlan(body).subscribe(function (data) {
            _this.commonfun.loadingDismiss();
            var response = data;
            if (response.data) {
                _this.arvisitScheduleService.visitplanforchecklist = plan;
                //this.arvisitScheduleService.selectedorg='0';
                _this.arvisitScheduleService.selectedinspection = response.data[0];
                _this.router.navigateByUrl('/section');
            }
        });
    };
    ArvisitschedulePage.prototype.selectMember = function (plan) {
        // console.log(plan);
    };
    ArvisitschedulePage.prototype.AcceptPlan = function () {
        var _this = this;
        //get all checkded list
        try {
            var acceptedlist = this.planlist.filter(function (plan) { return plan.ischecked; });
            if (acceptedlist.length === 0) {
                this.commonfun.presentAlert("Message", "Error", "Please Select Atleast One Record.");
                return;
            }
            var acceptedlistInvalid = this.planlist.filter(function (plan) { return plan.ischecked && plan.status !== 'ACP'; });
            if (acceptedlistInvalid.length > 0) {
                this.commonfun.presentAlert("Message", "Error", " Selected record is already marked 'Accept'");
                return;
            }
            //console.log(acceptedlist);
            var body = {
                "action": "A",
                "listofarplan": acceptedlist
            };
            this.commonfun.loadingPresent();
            this.arvisitScheduleService.saveArVisitPlan(body).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data['response'];
                if (response.hasOwnProperty('messageType')) {
                    if (response.messageType == 'success')
                        _this.commonfun.presentAlert("Message", "Success", response.messageText);
                    _this.offset = 0;
                    _this.bindDataList();
                }
                if (response.error)
                    _this.commonfun.presentAlert("Message", "Error", response.error.message);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    ArvisitschedulePage.prototype.rejectPlan = function (rejectedReason, rejectedlist) {
        var _this = this;
        try {
            // console.log(rejectedlist);
            var body = {
                "action": "R",
                "listofarplan": rejectedlist,
                "rejectedreason": rejectedReason
            };
            this.commonfun.loadingPresent();
            this.arvisitScheduleService.saveArVisitPlan(body).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data['response'];
                if (response.hasOwnProperty('messageType')) {
                    if (response.messageType == 'success')
                        _this.offset = 0;
                    _this.bindDataList();
                    _this.commonfun.presentAlert("Message", "Success", response.messageText);
                }
                if (response.error)
                    _this.commonfun.presentAlert("Message", "Error", response.error.message);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    ArvisitschedulePage.prototype.presentAlertRejectedReason = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rejectedlist, rejectedlistInvalid, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rejectedlist = this.planlist.filter(function (plan) { return plan.ischecked; });
                        if (rejectedlist.length === 0) {
                            this.commonfun.presentAlert("Message", "Error", "Please Select Atleast One Record.");
                            return [2 /*return*/];
                        }
                        rejectedlistInvalid = rejectedlist.filter(function (plan) { return plan.ischecked && plan.status !== 'ACP'; });
                        if (rejectedlistInvalid.length > 0) {
                            this.commonfun.presentAlert("Message", "Error", " Selected record Can Not Reject.");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Rejected Reason',
                                // message: '<strong>Please Select Rejected Reason</strong>',
                                inputs: [
                                    {
                                        name: 'RejectedReason',
                                        type: 'text',
                                        placeholder: 'Rejected Reason'
                                    },
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            //console.log('Confirm Cancel: blah');
                                        }
                                    }, {
                                        text: 'Okay',
                                        handler: function (item) {
                                            //console.log('Confirm Okay',item.RejectedReason);
                                            if (item.RejectedReason) { }
                                            else {
                                                _this.commonfun.presentAlert("Message", "Error", "Reason Is Mendotory.");
                                            }
                                            _this.rejectPlan(item.RejectedReason, rejectedlist);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArvisitschedulePage.prototype.presentCrossAssignment = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var crossassignList, rejectedlistInvalid, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        crossassignList = this.planlist.filter(function (plan) { return plan.ischecked; });
                        if (crossassignList.length === 0) {
                            this.commonfun.presentAlert("Message", "Error", "Please Select Atleast One Record.");
                            return [2 /*return*/];
                        }
                        rejectedlistInvalid = crossassignList.filter(function (plan) { return plan.ischecked && plan.status !== 'ACP'; });
                        if (rejectedlistInvalid.length > 0) {
                            this.commonfun.presentAlert("Message", "Error", " Selected record Can Not Cross Assign.");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modalController.create({
                                component: _aruserselect_aruserselect_page__WEBPACK_IMPORTED_MODULE_1__["AruserselectPage"],
                                cssClass: 'my-custom-class',
                                componentProps: {
                                    'crossassignList': crossassignList,
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            var status = data['data']; // Here's your selected user!
                            if (status === 'success') {
                                console.log("data, ", status);
                                //this.router.navigateByUrl(url);
                                _this.offset = 0;
                                _this.bindDataList();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ArvisitschedulePage.prototype.doClickAddUnPlanned = function () {
        this.router.navigateByUrl('/unplannedvisit');
    };
    ArvisitschedulePage.prototype.bindDataList = function () {
        var _this = this;
        try {
            var body = {
                "action": "getarvisitplan",
                "fromdate": this.selectedfromdate !== undefined ? this.selectedfromdate : '',
                "todate": this.selectedtodate !== undefined ? this.selectedtodate : '',
                "status": this.selectedstatus !== undefined ? this.selectedstatus : '',
                "bpartnerid": this.selectedcustomer !== undefined ? this.selectedcustomer.bpartnerid : '',
                "offset": this.offset
            };
            this.commonfun.loadingPresent();
            this.arvisitScheduleService.getArVisitPlan(body).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data;
                if (_this.offset == 0) {
                    _this.planlist = response.data;
                    if (_this.planlist.length <= 20) {
                        _this.isemptyList = true;
                    }
                    else {
                        _this.isemptyList = false;
                    }
                }
                else {
                    _this.planlist = _this.planlist.concat(response.data);
                }
                _this.totalRows = response.totalRows;
            });
        }
        catch (error) {
            console.log("bindcusaddress", error);
            this.commonfun.loadingDismiss();
        }
    };
    ArvisitschedulePage.prototype.doInfinite = function (event) {
        try {
            this.offset += 20;
            if (this.offset < this.totalRows) {
                this.isemptyList = false;
                this.bindDataList();
                event.target.complete();
            }
            else {
                this.isemptyList = true;
            }
        }
        catch (error) {
            console.log("errror", error);
        }
    };
    ArvisitschedulePage.ctorParameters = function () { return [
        { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
        { type: _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_2__["ArvisitscheduleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
    ]; };
    ArvisitschedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-arvisitschedule',
            template: __webpack_require__(/*! raw-loader!./arvisitschedule.page.html */ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/arvisitschedule.page.html"),
            styles: [__webpack_require__(/*! ./arvisitschedule.page.scss */ "./src/app/arvisitschedule/arvisitschedule.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"],
            _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_2__["ArvisitscheduleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], ArvisitschedulePage);
    return ArvisitschedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=arvisitschedule-arvisitschedule-module-es5.js.map