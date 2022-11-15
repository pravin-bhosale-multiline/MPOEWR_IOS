(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arvisitschedule-unplannedvisit-unplannedvisit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Unplanned Visit\n    </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <form [formGroup]=\"formplan\" (ngSubmit)=\"onSaveVisit(formplan.value)\">\n  \n    <ion-grid >\n      <ion-row>\n        <ion-col>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item>\n              <ion-label position=\"stacked\">Plan Selection<span style=\"color:red!important\">*</span></ion-label>\n              <ion-select formControlName=\"plansch\" interface=\"popover\" multiple=\"false\"\n                placeholder=\"Select Plan\">\n                <ion-select-option *ngFor=\"let sch of arschlist\" [value]=\"sch\">{{sch.schname}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n            </ion-col>\n          </ion-row>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Customer Name<span style=\"color:red!important\">*</span></ion-label>\n            <ionic-selectable  placeholder=\"Select Plan\" \n              formControlName=\"customer\"\n              [items]=\"customerlist\"\n              itemValueField=\"bpartnerid\" \n              itemTextField=\"bpartnername\" \n              [canSearch]=\"true\" \n              (onClose)=\"onCloseCust($event)\" \n              (onSearch)=\"custSearchChange($event)\"\n              (onInfiniteScroll)=\"doInfiniteCust($event)\">\n            </ionic-selectable>\n           \n          </ion-item>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n          <ion-label position=\"stacked\">Billing Address<span style=\"color:red!important\">*</span></ion-label>\n          <ion-select formControlName=\"billtoaddress\" interface=\"popover\" multiple=\"false\"\n            placeholder=\"Select Address\">\n            <ion-select-option *ngFor=\"let billadd of billtoaddressList\" [value]=\"billadd\">{{billadd.bpartnerlocname}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n          <ion-label position=\"stacked\">Visit Date<span style=\"color:red!important\">*</span></ion-label>\n          <ion-datetime [disabled]=\"true\" [max]=\"currentdate\" [min]=\"currentdate\" displayFormat=\"DD-MM-YYYY\" formControlName=\"visitdate\"></ion-datetime>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n          <ion-label position=\"stacked\">Target for the month<span style=\"color:red!important\">*</span></ion-label>\n         <ion-input type=\"number\" placeholder=\"Target for the month\" formControlName=\"targetformonth\"></ion-input>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  \n\n</ion-content>\n<section class=\"full-width\">\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"full\" type=\"submit\" color=\"primary\" text-center [disabled]=\"!formplan.valid \"\n      (click)=\"onSaveVisit(formplan.value)\">Submit</ion-button>\n</ion-col>\n\n</ion-row>\n</section>"

/***/ }),

/***/ "./src/app/arvisitschedule/arvisitschedule.service.ts":
/*!************************************************************!*\
  !*** ./src/app/arvisitschedule/arvisitschedule.service.ts ***!
  \************************************************************/
/*! exports provided: ArvisitscheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArvisitscheduleService", function() { return ArvisitscheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");





let ArvisitscheduleService = class ArvisitscheduleService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    getArVisitPlan(body) {
        //console.log("Body: ",body);
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTgetRequest', body, httpOptions);
    }
    saveArVisitPlan(body) {
        //   console.log("Body: ",body);
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTSaveARVisitPlan', body, httpOptions);
    }
    saveArVisitUnplannedPlan(body) {
        //   console.log("Body: ",body);
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTSaveUnplannedARVisitPlan', body, httpOptions);
    }
    getRequest(body) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.qcinspection.MQCIgetRequest', body, httpOptions);
    }
    onSaveSectionQuestion(body) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Basic ' + auth
            })
        };
        var specificHeader = { 'Authorization': 'Basic ' + auth };
        return this.genericHTTP.postformdata(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTonSaveChecklistTrx', body, specificHeader, httpOptions);
    }
};
ArvisitscheduleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__["GenericHttpClientService"] }
];
ArvisitscheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__["GenericHttpClientService"]])
], ArvisitscheduleService);



/***/ }),

/***/ "./src/app/arvisitschedule/unplannedvisit/unplannedvisit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/arvisitschedule/unplannedvisit/unplannedvisit.module.ts ***!
  \*************************************************************************/
/*! exports provided: UnplannedvisitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnplannedvisitPageModule", function() { return UnplannedvisitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _unplannedvisit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unplannedvisit.page */ "./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.ts");








const routes = [
    {
        path: '',
        component: _unplannedvisit_page__WEBPACK_IMPORTED_MODULE_7__["UnplannedvisitPage"]
    }
];
let UnplannedvisitPageModule = class UnplannedvisitPageModule {
};
UnplannedvisitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ionic_selectable__WEBPACK_IMPORTED_MODULE_1__["IonicSelectableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_unplannedvisit_page__WEBPACK_IMPORTED_MODULE_7__["UnplannedvisitPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], UnplannedvisitPageModule);



/***/ }),

/***/ "./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydmlzaXRzY2hlZHVsZS91bnBsYW5uZWR2aXNpdC91bnBsYW5uZWR2aXNpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.ts ***!
  \***********************************************************************/
/*! exports provided: UnplannedvisitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnplannedvisitPage", function() { return UnplannedvisitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../arvisitschedule.service */ "./src/app/arvisitschedule/arvisitschedule.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






let UnplannedvisitPage = class UnplannedvisitPage {
    constructor(fb, arvisitScheduleService, commonfun, router) {
        this.fb = fb;
        this.arvisitScheduleService = arvisitScheduleService;
        this.commonfun = commonfun;
        this.router = router;
        this.validation_messages = {
            'fromplan': [
                { type: 'required', message: ' *Please Select Plan.' }
            ],
            'customer': [
                { type: 'required', message: '*Please Select Customer.' }
            ],
            'billtoaddress': [
                { type: 'required', message: 'Please Select Billing Address.' }
            ],
        };
        this.searchc = '';
        this.offsetc = 0;
        this.formplan = this.fb.group({
            plansch: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            customer: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            billtoaddress: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            visitdate: [],
            targetformonth: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.bindARVisitSch();
    }
    ngOnInit() {
        this.currentdate = new Date().toISOString();
        this.formplan.get("visitdate").setValue(this.currentdate);
    }
    bindCustomerBillAddress(bpartnerid) {
        try {
            var body = {
                "action": "getcustomerinvoiceaddress",
                "bpartnerid": bpartnerid,
            };
            this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
                var response = data;
                this.billtoaddressList = response.data;
                if (this.billtoaddressList.length === 1) {
                    this.formplan.get("billtoaddress").setValue(this.billtoaddressList[0]);
                }
            });
        }
        catch (error) {
            //console.log("bindOwnedDriverapi",error);
        }
    }
    bindARVisitSch() {
        try {
            var body = {
                "action": "getlistOfarvisitschedule",
            };
            this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
                var response = data;
                this.arschlist = response.data;
            });
        }
        catch (error) {
            //console.log("bindOwnedDriverapi",error);
        }
    }
    onCloseCust(event) {
        event.component.searchText = "";
        this.offsetc = 0;
        if (this.formplan.get("customer").value) {
            let bpartnerid = this.formplan.get("customer").value.bpartnerid;
            this.bindCustomerBillAddress(bpartnerid);
        }
    }
    custSearchChange(event) {
        this.searchc = event.text; //.replace(/\s/g,'');
        this.offsetc = 0;
        this.bindCustomerList(this.searchc, 0);
    }
    bindCustomerList(searchtext, intoffset) {
        try {
            var body = {
                "action": "getcustomerforar",
                "offset": intoffset,
                "search": searchtext
            };
            this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
                var response = data;
                this.customerlist = response.data;
                this.totalrowc = response.totalRows;
            });
        }
        catch (error) {
            //console.log("bindOwnedDriverapi",error);
        }
    }
    doInfiniteCust(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //Set this initial 0 at top 
                let text = (event.text || '').trim().toLowerCase();
                if (this.offsetc < this.totalrowc && this.totalrowc > 20) {
                    this.offsetc = this.offsetc + 20;
                    var body = {
                        "action": "getcustomerforar",
                        "offset": this.offsetc,
                        "search": text
                    };
                    var tempData = yield (yield this.arvisitScheduleService.getArVisitPlan(body)).toPromise();
                    if (!!tempData) {
                        this.customerlist = this.customerlist.concat(tempData['data']);
                        event.component.endInfiniteScroll();
                    }
                }
                if (this.offsetc > this.totalrowc) {
                    event.component.disableInfiniteScroll();
                    return;
                }
            }
            catch (error) {
            }
        });
    }
    onSaveVisit(frmValue) {
        //console.log(frmValue);
        try {
            var body = {
                "schid": frmValue.plansch.schid,
                "bpartnerlocid": frmValue.billtoaddress.bpartnerlocid,
                "bpartnerid": frmValue.customer.bpartnerid,
                "targetformonth": frmValue.targetformonth,
                "visitdate": frmValue.visitdate
            };
            this.commonfun.loadingPresent();
            this.arvisitScheduleService.saveArVisitUnplannedPlan(body).subscribe(data => {
                this.commonfun.loadingDismiss();
                var response = data['response'];
                if (response.hasOwnProperty('messageType')) {
                    if (response.messageType == 'success')
                        this.commonfun.presentAlert("Message", "Success", response.messageText);
                    this.router.navigateByUrl('/arvisitschedule');
                }
                if (response.error)
                    this.commonfun.presentAlert("Message", "Error", response.error.message);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
};
UnplannedvisitPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_2__["Commonfun"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
UnplannedvisitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-unplannedvisit',
        template: __webpack_require__(/*! raw-loader!./unplannedvisit.page.html */ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.html"),
        styles: [__webpack_require__(/*! ./unplannedvisit.page.scss */ "./src/app/arvisitschedule/unplannedvisit/unplannedvisit.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_2__["Commonfun"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], UnplannedvisitPage);



/***/ })

}]);
//# sourceMappingURL=arvisitschedule-unplannedvisit-unplannedvisit-module-es2015.js.map