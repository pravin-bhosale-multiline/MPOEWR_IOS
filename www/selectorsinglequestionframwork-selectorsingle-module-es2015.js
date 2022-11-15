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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _selectorsingle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorsingle.page */ "./src/app/selectorsinglequestionframwork/selectorsingle.page.ts");




const routes = [
    {
        path: '',
        component: _selectorsingle_page__WEBPACK_IMPORTED_MODULE_3__["SelectorsinglePage"]
    }
];
let SelectorsinglePageRoutingModule = class SelectorsinglePageRoutingModule {
};
SelectorsinglePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectorsinglePageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selectorsingle_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectorsingle-routing.module */ "./src/app/selectorsinglequestionframwork/selectorsingle-routing.module.ts");
/* harmony import */ var _selectorsingle_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorsingle.page */ "./src/app/selectorsinglequestionframwork/selectorsingle.page.ts");








let SelectorsinglePageModule = class SelectorsinglePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectorsingle/selectorsingleservice.service */ "./src/app/selectorsingle/selectorsingleservice.service.ts");






let SelectorsinglePage = class SelectorsinglePage {
    constructor(singleselservc, route, router, checklistservice) {
        this.singleselservc = singleselservc;
        this.route = route;
        this.router = router;
        this.checklistservice = checklistservice;
        this.getpagenofromlist = function (jolist) {
            let pagerow = 0;
            for (let item of jolist) {
                pagerow = pagerow + 1;
            }
            return pagerow;
        };
    }
    ngOnInit() {
        this.txtCaption = 'Select Value';
        this.route.params.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.question = this.router.getCurrentNavigation().extras.state.question;
                if (this.question.type === 'MSL') {
                    this.ismultiselect = true;
                }
                else {
                    this.ismultiselect = false;
                }
                this.singleselservc.json['action'] = 'getselctordata';
                this.singleselservc.json['queid'] = this.question.questionid;
                this.singleselservc.json['orgid'] = '0';
                this.singleselservc.json['text'] = '';
                this.singleselservc.json['offset'] = 0;
                this.singleselservc.json['quemaster'] = this.checklistservice.selectedinspection;
                this.singleselservc.pageOffset = 0;
                this.checklistservice.getRequest(this.singleselservc.json).subscribe(data => {
                    var response = data;
                    this.filterdata = response.data;
                    this.pagerow = this.getpagenofromlist(data['data']);
                    this.totalrow = response.totalRows;
                    this.id1.open();
                    console.log("filterdata", this.filterdata);
                    // 
                });
            }
        });
    }
    onSubmitSingleSelection() {
        if (this.ismultiselect) {
            let strmultivaluedata = '';
            for (let value of this.selecteddata) {
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
        let navigationExtras = {
            state: {
                question: this.question
            }
        };
        this.router.navigate(['section'], navigationExtras);
    }
    getQueDetFromQueID(key) {
        for (let section of this.checklistservice.selectedinspection.sections) {
            //  console.log('section',section);
            for (let que of section.questions) {
                if (key === que.questionid) {
                    return que;
                }
            }
        }
    }
    onSearchChange(event) {
        let text = event.text.trim().toLowerCase();
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
                this.checklistservice.getRequest(this.singleselservc.json).subscribe(data => {
                    var response = data;
                    this.filterdata = response.data;
                    this.pagerow = this.getpagenofromlist(data['data']);
                    this.totalrow = response.totalRows;
                    console.log("searchdata", this.filterdata);
                    // 
                });
            }
        }
        else {
            this.singleselservc.json['text'] = text;
            this.checklistservice.getRequest(this.singleselservc.json).subscribe(data => {
                var response = data;
                this.filterdata = response.data;
                this.pagerow = this.getpagenofromlist(data['data']);
                this.totalrow = response.totalRows;
                console.log("searchdata", this.filterdata);
                // 
            });
        }
    }
    doInfinite(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                //Set this initial 0 at top 
                let text = (event.text || '').trim().toLowerCase();
                if (this.pagerow === 20 && this.totalrow > 20) {
                    this.singleselservc.pageOffset = this.singleselservc.pageOffset + 20;
                    this.singleselservc.json['offset'] = this.singleselservc.pageOffset;
                    this.singleselservc.json['quemaster'] = this.checklistservice.selectedinspection;
                    this.singleselservc.json['action'] = 'getselctordata';
                    this.singleselservc.json['queid'] = this.question.questionid;
                    this.singleselservc.json['orgid'] = '0';
                    if (text) {
                        this.singleselservc.json['text'] = text;
                    }
                    let tempData = yield (yield this.checklistservice.getRequest(this.singleselservc.json)).toPromise();
                    if (!!tempData) {
                        // This is your page varible where you bind data
                        this.data = this.data.concat(tempData['data']);
                        this.pagerow = this.getpagenofromlist(tempData['data']);
                        this.filterdata = this.filterdata.concat(tempData['data']);
                        this.totalrow = tempData['totalRows'];
                        event.component.endInfiniteScroll();
                    }
                    // console.log(this.filterjoblist.length+'  '+this.totalrow);
                }
                if (this.filterdata.length === this.totalrow) {
                    event.component.disableInfiniteScroll();
                    return;
                }
            }
            catch (error) {
            }
        });
    }
};
SelectorsinglePage.ctorParameters = () => [
    { type: _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_5__["SelectorsingleserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _arvisitschedule_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_1__["ArvisitscheduleService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=selectorsinglequestionframwork-selectorsingle-module-es2015.js.map