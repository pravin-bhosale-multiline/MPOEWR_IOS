(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~arvisitschedule-aruserselect-aruserselect-module~arvisitschedule-arvisitschedule-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/aruserselect/aruserselect.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arvisitschedule/aruserselect/aruserselect.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-title>Cross Assignment</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <ion-label position=\"stacked\">Select AR User&nbsp;<span style=\"color:red!important\">*</span></ion-label>\n    <ionic-selectable [(ngModel)]=\"selecteduser\" closeButtonSlot=\"end\" placeholder=\"Select AR User\" headerColor=\"primary\"\n     [shouldFocusSearchbar]=\"true\"\n    [items]=\"aruserlist\"\n    itemValueField=\"userid\" \n    itemTextField=\"username\" \n    [canSearch]=\"true\"\n    (onClose)=\"onARUserClose($event)\"\n    [hasInfiniteScroll]=\"true\"\n    (onInfiniteScroll)=\"doInfiniteARUser($event)\"\n    (onSearch)=\"onARUsersearchChange($event)\">\n    </ionic-selectable>\n  </ion-item>\n  <!-- <ion-button (click)=\"onClickAssignPlan()\" expand=\"block\" color=\"primary\" fill=\"outline\">\n    Assign Plan\n  </ion-button> -->\n</ion-content>\n<section class=\"full-width\">\n  <ion-row>\n    <ion-col>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"onClickAssignPlan()\">Assign Plan</ion-button>\n</ion-col>\n<ion-col>\n  <ion-button color=\"primary\" expand=\"full\" (click)=\"onClose()\">CLOSE</ion-button>\n</ion-col>\n</ion-row>\n</section>\n"

/***/ }),

/***/ "./src/app/arvisitschedule/aruserselect/aruserselect.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/arvisitschedule/aruserselect/aruserselect.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydmlzaXRzY2hlZHVsZS9hcnVzZXJzZWxlY3QvYXJ1c2Vyc2VsZWN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/arvisitschedule/aruserselect/aruserselect.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/arvisitschedule/aruserselect/aruserselect.page.ts ***!
  \*******************************************************************/
/*! exports provided: AruserselectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AruserselectPage", function() { return AruserselectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../arvisitschedule.service */ "./src/app/arvisitschedule/arvisitschedule.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AruserselectPage = class AruserselectPage {
    constructor(arvisitScheduleService, route, router, viewCtrl, commonfun) {
        this.arvisitScheduleService = arvisitScheduleService;
        this.route = route;
        this.router = router;
        this.viewCtrl = viewCtrl;
        this.commonfun = commonfun;
        this.search = '';
        this.offset = 0;
    }
    ngOnInit() {
    }
    onClickAssignPlan() {
        //console.log(this.crossassignList);
        if (this.selecteduser === undefined) {
            this.commonfun.presentAlert("Message", "Error", "Please Select Atleast One AR User.");
            return;
        }
        try {
            // console.log(rejectedlist);
            var body = {
                "action": "CA",
                "listofarplan": this.crossassignList,
                "userid": this.selecteduser.userid
            };
            this.commonfun.loadingPresent();
            this.arvisitScheduleService.saveArVisitPlan(body).subscribe(data => {
                this.commonfun.loadingDismiss();
                var response = data['response'];
                if (response.hasOwnProperty('messageType')) {
                    if (response.messageType == 'success')
                        this.commonfun.presentAlert("Message", "Success", response.messageText);
                    this.dismiss('success');
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
    dismiss(status) {
        this.viewCtrl.dismiss(status);
    }
    onClose() {
        this.dismiss('');
    }
    onARUserClose(event) {
        event.component.searchText = "";
        this.offset = 0;
    }
    onARUsersearchChange(event) {
        this.search = event.text; //.replace(/\s/g,'');
        this.offset = 0;
        this.bindArUserapi(this.search, 0);
    }
    bindArUserapi(searchtext, intoffset) {
        try {
            var body = {
                "action": "getaruserfromorg",
                "offset": intoffset,
                "search": searchtext
            };
            this.arvisitScheduleService.getArVisitPlan(body).subscribe(data => {
                var response = data;
                this.aruserlist = response.data;
                this.totalrow = response.totalRows;
            });
        }
        catch (error) {
            //console.log("bindOwnedDriverapi",error);
        }
    }
    doInfiniteARUser(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //Set this initial 0 at top 
                let text = (event.text || '').trim().toLowerCase();
                if (this.offset < this.totalrow && this.totalrow > 20) {
                    this.offset = this.offset + 20;
                    var body = {
                        "action": "getaruserfromorg",
                        "offset": this.offset,
                        "search": text
                    };
                    var tempData = yield (yield this.arvisitScheduleService.getArVisitPlan(body)).toPromise();
                    if (!!tempData) {
                        this.aruserlist = this.aruserlist.concat(tempData['data']);
                        event.component.endInfiniteScroll();
                    }
                }
                if (this.offset > this.totalrow) {
                    event.component.disableInfiniteScroll();
                    return;
                }
            }
            catch (error) {
            }
        });
    }
};
AruserselectPage.ctorParameters = () => [
    { type: _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_1__["Commonfun"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AruserselectPage.prototype, "crossassignList", void 0);
AruserselectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-aruserselect',
        template: __webpack_require__(/*! raw-loader!./aruserselect.page.html */ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/aruserselect/aruserselect.page.html"),
        styles: [__webpack_require__(/*! ./aruserselect.page.scss */ "./src/app/arvisitschedule/aruserselect/aruserselect.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_1__["Commonfun"]])
], AruserselectPage);



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



/***/ })

}]);
//# sourceMappingURL=default~arvisitschedule-aruserselect-aruserselect-module~arvisitschedule-arvisitschedule-module-es2015.js.map