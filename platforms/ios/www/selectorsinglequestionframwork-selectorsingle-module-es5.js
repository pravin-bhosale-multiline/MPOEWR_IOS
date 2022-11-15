(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selectorsinglequestionframwork-selectorsingle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selectorsinglequestionframwork/selectorsingle.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selectorsinglequestionframwork/selectorsingle.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Selection</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"section\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-item>\n    <ion-label  color=\"primary\" position=\"stacked\" >{{txtCaption}}</ion-label>\n    <ionic-selectable #id1 [(ngModel)]=\"selecteddata\" itemValueField=\"name\" itemTextField=\"name\" [items]=\"filterdata\"\n      [canSearch]=\"true\" [hasInfiniteScroll]=\"true\" (onSearch)=\"onSearchChange($event)\" (onClose)=\"onSubmitSingleSelection()\"\n      (onInfiniteScroll)=\"doInfinite($event)\" [isMultiple]=\"ismultiselect\">\n    </ionic-selectable>\n  </ion-item>\n  <ion-button size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"onSubmitSingleSelection()\">\n    Submit\n  </ion-button>\n  \n</ion-content>"

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



/***/ }),

/***/ "./src/app/selectorsinglequestionframwork/selectorsingle-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/selectorsinglequestionframwork/selectorsingle-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectorsinglePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorsinglePageRoutingModule", function() { return SelectorsinglePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selectorsingle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorsingle.page */ "./src/app/selectorsinglequestionframwork/selectorsingle.page.ts");




var routes = [
    {
        path: '',
        component: _selectorsingle_page__WEBPACK_IMPORTED_MODULE_3__["SelectorsinglePage"]
    }
];
var SelectorsinglePageRoutingModule = /** @class */ (function () {
    function SelectorsinglePageRoutingModule() {
    }
    SelectorsinglePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SelectorsinglePageRoutingModule);
    return SelectorsinglePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/selectorsinglequestionframwork/selectorsingle.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/selectorsinglequestionframwork/selectorsingle.module.ts ***!
  \*************************************************************************/
/*! exports provided: SelectorsinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorsinglePageModule", function() { return SelectorsinglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectorsingle_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectorsingle-routing.module */ "./src/app/selectorsinglequestionframwork/selectorsingle-routing.module.ts");
/* harmony import */ var _selectorsingle_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorsingle.page */ "./src/app/selectorsinglequestionframwork/selectorsingle.page.ts");








var SelectorsinglePageModule = /** @class */ (function () {
    function SelectorsinglePageModule() {
    }
    SelectorsinglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _selectorsingle_routing_module__WEBPACK_IMPORTED_MODULE_6__["SelectorsinglePageRoutingModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableModule"]
            ],
            declarations: [_selectorsingle_page__WEBPACK_IMPORTED_MODULE_7__["SelectorsinglePage"]]
        })
    ], SelectorsinglePageModule);
    return SelectorsinglePageModule;
}());



/***/ }),

/***/ "./src/app/selectorsinglequestionframwork/selectorsingle.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/selectorsinglequestionframwork/selectorsingle.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdG9yc2luZ2xlcXVlc3Rpb25mcmFtd29yay9zZWxlY3RvcnNpbmdsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/selectorsinglequestionframwork/selectorsingle.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/selectorsinglequestionframwork/selectorsingle.page.ts ***!
  \***********************************************************************/
/*! exports provided: SelectorsinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorsinglePage", function() { return SelectorsinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _arvisitschedule_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../arvisitschedule/arvisitschedule.service */ "./src/app/arvisitschedule/arvisitschedule.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectorsingle/selectorsingleservice.service */ "./src/app/selectorsingle/selectorsingleservice.service.ts");






var SelectorsinglePage = /** @class */ (function () {
    function SelectorsinglePage(singleselservc, route, router, checklistservice) {
        this.singleselservc = singleselservc;
        this.route = route;
        this.router = router;
        this.checklistservice = checklistservice;
        this.getpagenofromlist = function (jolist) {
            var pagerow = 0;
            for (var _i = 0, jolist_1 = jolist; _i < jolist_1.length; _i++) {
                var item = jolist_1[_i];
                pagerow = pagerow + 1;
            }
            return pagerow;
        };
    }
    SelectorsinglePage.prototype.ngOnInit = function () {
        var _this = this;
        this.txtCaption = 'Select Value';
        this.route.params.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.question = _this.router.getCurrentNavigation().extras.state.question;
                if (_this.question.type === 'MSL') {
                    _this.ismultiselect = true;
                }
                else {
                    _this.ismultiselect = false;
                }
                _this.singleselservc.json['action'] = 'getselctordata';
                _this.singleselservc.json['queid'] = _this.question.questionid;
                _this.singleselservc.json['orgid'] = '0';
                _this.singleselservc.json['text'] = '';
                _this.singleselservc.json['offset'] = 0;
                _this.singleselservc.json['quemaster'] = _this.checklistservice.selectedinspection;
                _this.singleselservc.pageOffset = 0;
                _this.checklistservice.getRequest(_this.singleselservc.json).subscribe(function (data) {
                    var response = data;
                    _this.filterdata = response.data;
                    _this.pagerow = _this.getpagenofromlist(data['data']);
                    _this.totalrow = response.totalRows;
                    _this.id1.open();
                    console.log("filterdata", _this.filterdata);
                    // 
                });
            }
        });
    };
    SelectorsinglePage.prototype.onSubmitSingleSelection = function () {
        if (this.ismultiselect) {
            var strmultivaluedata = '';
            for (var _i = 0, _a = this.selecteddata; _i < _a.length; _i++) {
                var value = _a[_i];
                strmultivaluedata = strmultivaluedata + '\'' + value.name + '\',';
            }
            strmultivaluedata = '(' + strmultivaluedata.substring(0, strmultivaluedata.length - 1) + ')';
            this.question.ans = strmultivaluedata;
            // console.log(strmultivaluedata);
        }
        else {
            //let que = this.getQueDetFromQueID(this.question.questionid)
            this.question.ans = this.selecteddata.name;
        }
        console.log(this.checklistservice.selectedinspection);
        var navigationExtras = {
            state: {
                question: this.question
            }
        };
        this.router.navigate(['section'], navigationExtras);
    };
    SelectorsinglePage.prototype.getQueDetFromQueID = function (key) {
        for (var _i = 0, _a = this.checklistservice.selectedinspection.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            //  console.log('section',section);
            for (var _b = 0, _c = section.questions; _b < _c.length; _b++) {
                var que = _c[_b];
                if (key === que.questionid) {
                    return que;
                }
            }
        }
    };
    SelectorsinglePage.prototype.onSearchChange = function (event) {
        var _this = this;
        var text = event.text.trim().toLowerCase();
        this.singleselservc.json['offset'] = 0;
        this.singleselservc.json['quemaster'] = this.checklistservice.selectedinspection;
        this.singleselservc.json['action'] = 'getselctordata';
        this.singleselservc.json['queid'] = this.question.questionid;
        this.singleselservc.json['orgid'] = '0';
        // Reset items back to all of the items
        //this.filterdata = this.data;
        // if the value is an empty string don't filter the items
        if (text && text.trim() !== '') {
            if (text.length > 2) {
                this.singleselservc.json['text'] = text;
                this.checklistservice.getRequest(this.singleselservc.json).subscribe(function (data) {
                    var response = data;
                    _this.filterdata = response.data;
                    _this.pagerow = _this.getpagenofromlist(data['data']);
                    _this.totalrow = response.totalRows;
                    console.log("searchdata", _this.filterdata);
                    // 
                });
            }
        }
        else {
            this.singleselservc.json['text'] = text;
            this.checklistservice.getRequest(this.singleselservc.json).subscribe(function (data) {
                var response = data;
                _this.filterdata = response.data;
                _this.pagerow = _this.getpagenofromlist(data['data']);
                _this.totalrow = response.totalRows;
                console.log("searchdata", _this.filterdata);
                // 
            });
        }
    };
    SelectorsinglePage.prototype.doInfinite = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var text, tempData, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        text = (event.text || '').trim().toLowerCase();
                        if (!(this.pagerow === 20 && this.totalrow > 20)) return [3 /*break*/, 3];
                        this.singleselservc.pageOffset = this.singleselservc.pageOffset + 20;
                        this.singleselservc.json['offset'] = this.singleselservc.pageOffset;
                        this.singleselservc.json['quemaster'] = this.checklistservice.selectedinspection;
                        this.singleselservc.json['action'] = 'getselctordata';
                        this.singleselservc.json['queid'] = this.question.questionid;
                        this.singleselservc.json['orgid'] = '0';
                        if (text) {
                            this.singleselservc.json['text'] = text;
                        }
                        return [4 /*yield*/, this.checklistservice.getRequest(this.singleselservc.json)];
                    case 1: return [4 /*yield*/, (_a.sent()).toPromise()];
                    case 2:
                        tempData = _a.sent();
                        if (!!tempData) {
                            // This is your page varible where you bind data
                            this.data = this.data.concat(tempData['data']);
                            this.pagerow = this.getpagenofromlist(tempData['data']);
                            this.filterdata = this.filterdata.concat(tempData['data']);
                            this.totalrow = tempData['totalRows'];
                            event.component.endInfiniteScroll();
                        }
                        _a.label = 3;
                    case 3:
                        if (this.filterdata.length === this.totalrow) {
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
    SelectorsinglePage.ctorParameters = function () { return [
        { type: _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_5__["SelectorsingleserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _arvisitschedule_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_1__["ArvisitscheduleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("id1", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableComponent"])
    ], SelectorsinglePage.prototype, "id1", void 0);
    SelectorsinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-selectorsingle',
            template: __webpack_require__(/*! raw-loader!./selectorsingle.page.html */ "./node_modules/raw-loader/index.js!./src/app/selectorsinglequestionframwork/selectorsingle.page.html"),
            styles: [__webpack_require__(/*! ./selectorsingle.page.scss */ "./src/app/selectorsinglequestionframwork/selectorsingle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_5__["SelectorsingleserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _arvisitschedule_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_1__["ArvisitscheduleService"]])
    ], SelectorsinglePage);
    return SelectorsinglePage;
}());



/***/ })

}]);
//# sourceMappingURL=selectorsinglequestionframwork-selectorsingle-module-es5.js.map