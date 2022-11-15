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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AruserselectPage = /** @class */ (function () {
    function AruserselectPage(arvisitScheduleService, route, router, viewCtrl, commonfun) {
        this.arvisitScheduleService = arvisitScheduleService;
        this.route = route;
        this.router = router;
        this.viewCtrl = viewCtrl;
        this.commonfun = commonfun;
        this.search = '';
        this.offset = 0;
    }
    AruserselectPage.prototype.ngOnInit = function () {
    };
    AruserselectPage.prototype.onClickAssignPlan = function () {
        var _this = this;
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
            this.arvisitScheduleService.saveArVisitPlan(body).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data['response'];
                if (response.hasOwnProperty('messageType')) {
                    if (response.messageType == 'success')
                        _this.commonfun.presentAlert("Message", "Success", response.messageText);
                    _this.dismiss('success');
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
    AruserselectPage.prototype.dismiss = function (status) {
        this.viewCtrl.dismiss(status);
    };
    AruserselectPage.prototype.onClose = function () {
        this.dismiss('');
    };
    AruserselectPage.prototype.onARUserClose = function (event) {
        event.component.searchText = "";
        this.offset = 0;
    };
    AruserselectPage.prototype.onARUsersearchChange = function (event) {
        this.search = event.text; //.replace(/\s/g,'');
        this.offset = 0;
        this.bindArUserapi(this.search, 0);
    };
    AruserselectPage.prototype.bindArUserapi = function (searchtext, intoffset) {
        var _this = this;
        try {
            var body = {
                "action": "getaruserfromorg",
                "offset": intoffset,
                "search": searchtext
            };
            this.arvisitScheduleService.getArVisitPlan(body).subscribe(function (data) {
                var response = data;
                _this.aruserlist = response.data;
                _this.totalrow = response.totalRows;
            });
        }
        catch (error) {
            //console.log("bindOwnedDriverapi",error);
        }
    };
    AruserselectPage.prototype.doInfiniteARUser = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var text, body, tempData, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        text = (event.text || '').trim().toLowerCase();
                        if (!(this.offset < this.totalrow && this.totalrow > 20)) return [3 /*break*/, 3];
                        this.offset = this.offset + 20;
                        body = {
                            "action": "getaruserfromorg",
                            "offset": this.offset,
                            "search": text
                        };
                        return [4 /*yield*/, this.arvisitScheduleService.getArVisitPlan(body)];
                    case 1: return [4 /*yield*/, (_a.sent()).toPromise()];
                    case 2:
                        tempData = _a.sent();
                        if (!!tempData) {
                            this.aruserlist = this.aruserlist.concat(tempData['data']);
                            event.component.endInfiniteScroll();
                        }
                        _a.label = 3;
                    case 3:
                        if (this.offset > this.totalrow) {
                            event.component.disableInfiniteScroll();
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AruserselectPage.ctorParameters = function () { return [
        { type: _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_1__["Commonfun"] }
    ]; };
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
    return AruserselectPage;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");





var ArvisitscheduleService = /** @class */ (function () {
    function ArvisitscheduleService(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    ArvisitscheduleService.prototype.getArVisitPlan = function (body) {
        //console.log("Body: ",body);
        var login = this.loginauth.user; //"P2admin";
        var password = this.loginauth.pass; //"Pass2020";
        var auth = btoa(login + ":" + password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTgetRequest', body, httpOptions);
    };
    ArvisitscheduleService.prototype.saveArVisitPlan = function (body) {
        //   console.log("Body: ",body);
        var login = this.loginauth.user; //"P2admin";
        var password = this.loginauth.pass; //"Pass2020";
        var auth = btoa(login + ":" + password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTSaveARVisitPlan', body, httpOptions);
    };
    ArvisitscheduleService.prototype.saveArVisitUnplannedPlan = function (body) {
        //   console.log("Body: ",body);
        var login = this.loginauth.user; //"P2admin";
        var password = this.loginauth.pass; //"Pass2020";
        var auth = btoa(login + ":" + password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTSaveUnplannedARVisitPlan', body, httpOptions);
    };
    ArvisitscheduleService.prototype.getRequest = function (body) {
        var login = this.loginauth.user; //"P2admin";
        var password = this.loginauth.pass; //"Pass2020";
        var auth = btoa(login + ":" + password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.qcinspection.MQCIgetRequest', body, httpOptions);
    };
    ArvisitscheduleService.prototype.onSaveSectionQuestion = function (body) {
        var login = this.loginauth.user; //"P2admin";
        var password = this.loginauth.pass; //"Pass2020";
        var auth = btoa(login + ":" + password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Basic ' + auth
            })
        };
        var specificHeader = { 'Authorization': 'Basic ' + auth };
        return this.genericHTTP.postformdata(this.loginauth.commonurl + 'ws/in.mbs.artracker.MARTonSaveChecklistTrx', body, specificHeader, httpOptions);
    };
    ArvisitscheduleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
        { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__["GenericHttpClientService"] }
    ]; };
    ArvisitscheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__["GenericHttpClientService"]])
    ], ArvisitscheduleService);
    return ArvisitscheduleService;
}());



/***/ })

}]);
//# sourceMappingURL=default~arvisitschedule-aruserselect-aruserselect-module~arvisitschedule-arvisitschedule-module-es5.js.map