(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-of-agreement-terms-of-agreement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/terms-of-agreement/terms-of-agreement.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/terms-of-agreement/terms-of-agreement.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Terms of Agreement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"{'agreement-content' : msg.isplatformweb}\">\n<!-- <div class=\"terms-content\">\n  <p style=\"font-size: small;\">{{text}}</p>\n</div> -->\n\n<ion-card>\n  <ion-card-content>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Organization Activity<span style=\"color:red!important\">*</span></ion-label>\n          <ion-select [(ngModel)]=\"selectedactivity\" (ionChange)=\"exonActChange()\" interface=\"popover\"\n            multiple=\"false\" placeholder=\"Select Activity\">\n            <ion-select-option *ngFor=\"let activity of activitylist\" [value]=\"activity\">{{activity.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      \n    </ion-row>\n    <div *ngIf=\"iscustomeremp\">\n    <div *ngIf=\"type==='URL'\">\n      <ion-row *ngIf=\"!isalreadyaccepted\" >\n        <ion-col style=\"font-size: small;text-align: left;\" >\n          I agree to the <a (click)=\"inapp()\">Terms of Service</a>  \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col *ngIf=\"!isalreadyaccepted\" size=\"6\">\n\n        <ion-button color=\"primary\" style=\"width: 98%;\" (click)=\"onclick('Decline')\">Decline</ion-button>\n\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-button color=\"primary\" style=\"width: 98%;\" [disabled]=\"!isActivitySelected\" (click)=\"onclick('Accept')\">{{txt}}</ion-button>\n\n        </ion-col>\n\n\n    </ion-row>\n    </div>\n    \n    <div *ngIf=\"type==='PDF'\">\n      <ion-row *ngIf=\"termslist.length>0\">\n        <ion-col style=\"font-size: small;text-align: left;\" >\n         List Of Agreements:          \n        </ion-col>\n      </ion-row>\n    <ion-row *ngFor=\"let terms of termslist\">\n      <ion-col style=\"font-size: small;text-align: center;\" size=\"4\">\n        <a (click)=\"inapp(terms.fileid)\">{{terms.name}}</a>\n       </ion-col>\n       <ion-col style=\"font-size: small;text-align: center;\">\n        <ion-button size=\"small\" [disabled]=\"terms.accept\" (click)=\"onclickacceptPdf(terms)\">{{!terms.accept?\"Accept\":\"Accepted\"}}</ion-button>\n       </ion-col>\n      <ion-col style=\"font-size: small;text-align: center;\">\n        <ion-button size=\"small\" [disabled]=\"terms.accept\" (click)=\"onclickRejectPdf(terms)\">{{!terms.reject?\"Decline\":\"Declined\"}}</ion-button>\n       </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isallaccepted || termslist.length===0\">\n      \n      <ion-col size=\"6\">\n      <ion-button color=\"primary\" style=\"width: 98%;\"  (click)=\"onclickNext()\">NEXT</ion-button>\n\n      </ion-col>\n  </ion-row>\n  </div>\n  <div *ngIf=\"type!=='PDF' && type!=='URL'\">\n    <ion-row >\n      \n      <ion-col size=\"6\">\n      <ion-button color=\"primary\" [disabled]=\"!isActivitySelected\" style=\"width: 98%;\"  (click)=\"onclickNext()\">NEXT</ion-button>\n\n      </ion-col>\n  </ion-row>\n  </div>\n</div>\n<div *ngIf=\"!iscustomeremp\">\n  <ion-row >\n      \n    <ion-col size=\"6\">\n    <ion-button color=\"primary\" [disabled]=\"!isActivitySelected\" style=\"width: 98%;\"  (click)=\"onclickNext()\">NEXT</ion-button>\n\n    </ion-col>\n</ion-row>\n</div>\n    </ion-card-content>\n  </ion-card>\n\n      \n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/terms-of-agreement/terms-of-agreement.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/terms-of-agreement/terms-of-agreement.module.ts ***!
  \*****************************************************************/
/*! exports provided: TermsOfAgreementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfAgreementPageModule", function() { return TermsOfAgreementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_of_agreement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-of-agreement.page */ "./src/app/terms-of-agreement/terms-of-agreement.page.ts");







var routes = [
    {
        path: '',
        component: _terms_of_agreement_page__WEBPACK_IMPORTED_MODULE_6__["TermsOfAgreementPage"]
    }
];
var TermsOfAgreementPageModule = /** @class */ (function () {
    function TermsOfAgreementPageModule() {
    }
    TermsOfAgreementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_terms_of_agreement_page__WEBPACK_IMPORTED_MODULE_6__["TermsOfAgreementPage"]]
        })
    ], TermsOfAgreementPageModule);
    return TermsOfAgreementPageModule;
}());



/***/ }),

/***/ "./src/app/terms-of-agreement/terms-of-agreement.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/terms-of-agreement/terms-of-agreement.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terms-content {\n  margin: 10px;\n  border: thin;\n  border-color: black;\n  border-style: solid;\n  padding: 10px;\n  background-color: #DDDD;\n}\n\n.agreement-content {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n@media only screen and (max-width: 768px) {\n  .agreement-content {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC90ZXJtcy1vZi1hZ3JlZW1lbnQvdGVybXMtb2YtYWdyZWVtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVybXMtb2YtYWdyZWVtZW50L3Rlcm1zLW9mLWFncmVlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURNQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0pKOztBRFFBO0VBQ0k7SUFFQSxXQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLW9mLWFncmVlbWVudC90ZXJtcy1vZi1hZ3JlZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnR7XG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRERERCAhaW1wb3J0YW50O1xuLy8gfVxuXG4udGVybXMtY29udGVudHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiB0aGluO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREO1xuICAgIFxufVxuLmFncmVlbWVudC1jb250ZW50XG57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA1MCU7XG4gICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAuYWdyZWVtZW50LWNvbnRlbnRcbntcbiAgICB3aWR0aDogMTAwJTtcbn1cbn1cbiAgICBcbiIsIi50ZXJtcy1jb250ZW50IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IHRoaW47XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREREO1xufVxuXG4uYWdyZWVtZW50LWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWdyZWVtZW50LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/terms-of-agreement/terms-of-agreement.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/terms-of-agreement/terms-of-agreement.page.ts ***!
  \***************************************************************/
/*! exports provided: TermsOfAgreementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfAgreementPage", function() { return TermsOfAgreementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _terms_of_agreement_terms_of_agreement_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terms-of-agreement/terms-of-agreement.service */ "./src/app/terms-of-agreement/terms-of-agreement.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer */ "./node_modules/@ionic-native/file-transfer/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");













var TermsOfAgreementPage = /** @class */ (function () {
    function TermsOfAgreementPage(router, storage, route, commonfun, termsOfAgreementService, file, transfer, fileOpener, loginservc, iab, platform, msg, events) {
        this.router = router;
        this.storage = storage;
        this.route = route;
        this.commonfun = commonfun;
        this.termsOfAgreementService = termsOfAgreementService;
        this.file = file;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.loginservc = loginservc;
        this.iab = iab;
        this.platform = platform;
        this.msg = msg;
        this.events = events;
        this.text = "Forms are the pillar of any business applications. You can use forms to perform countless data-entry tasks such as: login, submit a request, place an order, book a flight or create an account.\n\nWhen developing a form, it\u2019s important to create a good data-entry experience to efficiently guide the user through the workflow.\n\nDeveloping good forms requires design and user experience skills, as well as a framework with support for two-way data binding, change tracking, validation, and error handling such as Angular. As you may know, Ionic is built on top of Angular. (if you didn\u2019t know that you should consider reading Ionic Framework introduction and key components).\n\nForms are usually one of the major interaction points between an app and the user, allowing them to send data to the application. Commonly, the data is sent to the web server but the app can also intercept it to use it on its own.";
        this.isalreadyaccepted = false;
        this.isActivitySelected = false;
        this.txt = "Accept";
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.termslist = [];
        this.isallaccepted = false;
        this.type = '';
        this.iscustomeremp = false;
    }
    TermsOfAgreementPage.prototype.ngOnInit = function () {
        var _this = this;
        try {
            //  this.commonfun.chkcache('terms-of-agreement');
            setTimeout(function () {
                _this.Bindallactivity();
            }, 3000);
        }
        catch (error) {
        }
    };
    TermsOfAgreementPage.prototype.getParam = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                // this.selectedbunch=null;
                _this.redirectto = _this.router.getCurrentNavigation().extras.state.redirectto;
            }
        });
    };
    TermsOfAgreementPage.prototype.exonActChangefirst = function (data) {
        try {
            this.isActivitySelected = true;
            this.loginservc.selectedactivity = this.selectedactivity;
            this.type = this.selectedactivity.type;
            this.loginservc.dealer_id = this.selectedactivity.dealer_id;
            this.loginservc.service_manager_id = this.selectedactivity.service_manager_id;
            this.loginservc.vender_id = this.selectedactivity.vender_id;
            this.storage.set('selectedactivity', this.selectedactivity);
            this.loginservc.isschemeinfo = false; //this.selectedactivity.schemeinfo == "Y"  ? true : false;
            this.loginservc.Discount_Method = this.selectedactivity.Discount_Method ? this.selectedactivity.Discount_Method : '';
            this.loginservc.dashboard = this.selectedactivity.dashboard == "Y" ? true : false;
            this.iscustomeremp = this.loginservc.defaultprofile[0].mmstOrderusrtype === "CEB" ? true : false;
            if (this.selectedactivity.status == "A") {
                this.isalreadyaccepted = true;
                this.txt = "Next";
            }
            else {
                if (this.iscustomeremp) {
                    this.txt = "Accept";
                    this.isalreadyaccepted = false;
                }
                else {
                    this.isalreadyaccepted = true;
                    this.txt = "Next";
                }
            }
            this.getActivityWiseLOGO();
            //this.getDownloadORBrowse();
            this.events.publish('updateMenu');
            if (this.iscustomeremp) {
                if (this.selectedactivity.type == 'PDF') {
                    //this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?record=' + this.selectedactivity.id + '&isdownload=false&' + this.loginservc.parameter;
                    this.termslist = this.selectedactivity.termslist;
                    if (this.termslist.length === 0) {
                        this.router.navigateByUrl('/home');
                    }
                }
                else if (this.selectedactivity.type == 'URL') {
                    this.url = this.selectedactivity.url;
                    if (this.isalreadyaccepted) {
                        this.router.navigateByUrl('/home');
                    }
                }
                else {
                    this.url = '';
                    this.isalreadyaccepted = true;
                    this.txt = "Next";
                    this.router.navigateByUrl('/home');
                }
            }
            else {
                this.router.navigateByUrl('/home');
            }
            // this.events.publish('dashbaordEvent');
        }
        catch (error) {
        }
    };
    TermsOfAgreementPage.prototype.exonActChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var windowdata, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(this.activitylist.length > 1)) return [3 /*break*/, 3];
                        this.isActivitySelected = true;
                        //  console.log("exonActChange");
                        this.loginservc.selectedactivity = this.selectedactivity;
                        this.type = this.selectedactivity.type;
                        // console.log("exonActChange Selected Activity",this.selectedactivity);
                        if (this.selectedactivity.secondary_order == "Y") {
                            this.loginservc.isConsolidationOrder = true;
                        }
                        else if (this.selectedactivity.secondary_order == "N") {
                            this.loginservc.isConsolidationOrder = false;
                        }
                        return [4 /*yield*/, this.termsOfAgreementService.getWindowAccess(this.selectedactivity.id)];
                    case 1: return [4 /*yield*/, (_a.sent()).toPromise()];
                    case 2:
                        windowdata = _a.sent();
                        this.loginservc.roleWiseDashboard = windowdata.RoleWiseDashboard;
                        // console.log("Window Acccesss Data",windowdata);
                        this.loginservc.isNewLead = windowdata.WindowAccess["New Lead"] == "Y" ? true : false;
                        this.loginservc.isExistingLead = windowdata.WindowAccess["Existing Lead"] == "Y" ? true : false;
                        this.loginservc.isBusinessPartnerAddress = windowdata.WindowAccess["Business Partner Address"] == "Y" ? true : false;
                        this.loginservc.isNewOrder = windowdata.WindowAccess["New Order"] == "Y" ? true : false;
                        this.loginservc.isDraftOrder = windowdata.WindowAccess["Draft Order"] == "Y" ? true : false;
                        this.loginservc.isOrderStatus = windowdata.WindowAccess["Order Status"] == "Y" ? true : false;
                        this.loginservc.isLatLongFinder = windowdata.WindowAccess["Lat-Long Finder"] == "Y" ? true : false;
                        this.loginservc.isTravelPlan = windowdata.WindowAccess["Travel Plan"] == "Y" ? true : false;
                        this.loginservc.isActualTravelPlan = windowdata.WindowAccess["Actual Travel Plan"] == "Y" ? true : false;
                        this.loginservc.isTravelExpense = windowdata.WindowAccess["Travel Expense"] == "Y" ? true : false;
                        this.loginservc.isTravelPlanClosure = windowdata.WindowAccess["Travel Plan Closure"] == "Y" ? true : false;
                        this.loginservc.isApprovalAccess = windowdata.WindowAccess["Approval"] == "Y" ? true : false;
                        this.loginservc.isCustomerServiceAccess = windowdata.WindowAccess["Customer Service"] == "Y" ? true : false;
                        this.loginservc.isCompliantAcceptanceAccess = windowdata.WindowAccess["Complaint Acceptance"] == "Y" ? true : false;
                        this.loginservc.isComplaintReportingAccess = windowdata.WindowAccess["Complaint Report"] == "Y" ? true : false;
                        this.loginservc.isFieldVisitAccess = windowdata.WindowAccess["Field Visit"] == "Y" ? true : false;
                        this.loginservc.isQuotationAccess = windowdata.WindowAccess["isQuotationAccess"] == "Y" ? true : false;
                        this.loginservc.isQuotationApproval = windowdata.WindowAccess["isQuotationApproval"] == "Y" ? true : false;
                        this.loginservc.isUpload = windowdata.WindowAccess["isUpload"] == "Y" ? true : false;
                        this.loginservc.isReport = windowdata.WindowAccess["Reports"] == "Y" ? true : false;
                        this.loginservc.isARVisitSchedule = windowdata.WindowAccess["AR Visit Schedule"] == "Y" ? true : false;
                        this.loginservc.dealer_id = this.selectedactivity.dealer_id;
                        this.loginservc.service_manager_id = this.selectedactivity.service_manager_id;
                        this.loginservc.vender_id = this.selectedactivity.vender_id;
                        this.loginservc.isschemeinfo = this.selectedactivity.Isschemempower == "Y" && windowdata.WindowAccess["Scheme"] === 'Y' ? true : false;
                        this.loginservc.Discount_Method = this.selectedactivity.Discount_Method ? this.selectedactivity.Discount_Method : '';
                        this.loginservc.dashboard = this.selectedactivity.dashboard == "Y" ? true : false;
                        this.iscustomeremp = this.loginservc.defaultprofile[0].mmstOrderusrtype === "CEB" ? true : false;
                        this.events.publish('dashbaordEvent');
                        this.storage.set('selectedactivity', this.selectedactivity);
                        if (this.selectedactivity.status == "A") {
                            this.isalreadyaccepted = true;
                            this.txt = "Next";
                        }
                        else {
                            if (this.loginservc.defaultprofile[0].mmstOrderusrtype == "CEB") {
                                this.txt = "Accept";
                                this.isalreadyaccepted = false;
                            }
                            else {
                                this.isalreadyaccepted = true;
                                this.txt = "Next";
                            }
                        }
                        this.getActivityWiseLOGO();
                        //this.getDownloadORBrowse();
                        if (this.selectedactivity.type == 'PDF') {
                            // this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?record=' + this.selectedactivity.id
                            // + '&isdownload=false&' + this.loginservc.parameter;
                            this.termslist = this.selectedactivity.termslist;
                        }
                        else if (this.selectedactivity.type == 'URL') {
                            this.url = this.selectedactivity.url;
                        }
                        else {
                            this.url = '';
                            this.isalreadyaccepted = true;
                            this.txt = "Next";
                        }
                        _a.label = 3;
                    case 3:
                        this.events.publish('updateMenu');
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TermsOfAgreementPage.prototype.onclickNext = function () {
        this.router.navigateByUrl('/home');
    };
    TermsOfAgreementPage.prototype.onclickacceptPdf = function (file) {
        file.accept = true;
        this.onSaveAgreement("A", file.fileid);
        this.isallaccepted = this.termslist.filter(function (terms) {
            return terms.accept === false;
        }).length > 0 ? false : true;
    };
    TermsOfAgreementPage.prototype.onclickRejectPdf = function (file) {
        file.reject = !file.reject;
        this.onSaveAgreement("R", file.fileid);
    };
    TermsOfAgreementPage.prototype.onclick = function (type) {
        try {
            if (type == 'Accept') {
                if (this.txt == "Accept") {
                    this.onSaveAgreement("A", '');
                }
                else {
                    this.router.navigateByUrl('/home');
                }
            }
            else {
                //window.open("http://africau.edu/images/default/sample.pdf","_system","location=yes,enableViewportScale=yes,hidden=no");
                this.onSaveAgreement("R", '');
            }
        }
        catch (error) {
        }
    };
    TermsOfAgreementPage.prototype.inapp = function (fileid) {
        var _this = this;
        try {
            if (this.msg.isplatformweb == false) {
                if (this.selectedactivity.type == 'PDF') {
                    this.commonfun.loadingPresent();
                    this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?fileid=' + fileid
                        + '&isdownload=false&' + this.loginservc.parameter;
                    var fileTransfer = this.transfer.create();
                    fileTransfer.download(encodeURI(this.url), this.file.dataDirectory + 'file.pdf').then(function (entry) {
                        _this.commonfun.loadingDismiss();
                        _this.fileOpener.open(entry.toURL(), "application/pdf")
                            .then(function () { return console.log("File is opened"); })
                            .catch(function (e) { return console.log("Error opening file", e); });
                    }, function (error) {
                        _this.commonfun.loadingDismiss();
                    });
                }
                else {
                    var target = "_blank";
                    this.iab.create(this.url, target, this.options);
                }
            }
            else {
                //for WPA
                var target = "_blank";
                if (this.selectedactivity.type == 'PDF') {
                    this.url = this.loginservc.commonurl + 'ws/in.mbs.webservice.DownloadORBrowse?fileid=' + fileid
                        + '&isdownload=false&' + this.loginservc.parameter;
                }
                this.iab.create(this.url, target, this.options);
            }
        }
        catch (error) {
            //  console.log("error", error);
        }
    };
    TermsOfAgreementPage.prototype.Bindallactivity = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    this.termsOfAgreementService.getUserActivityAgreementStatus().subscribe(function (data) {
                        _this.activitylist = data;
                        _this.loginservc.isFieldVisitAccess = true;
                        if (_this.activitylist.length == 1) {
                            _this.selectedactivity = _this.activitylist[0];
                            if (_this.selectedactivity.secondary_order == "Y") {
                                _this.loginservc.isConsolidationOrder = true;
                            }
                            else if (_this.selectedactivity.secondary_order == "N") {
                                _this.loginservc.isConsolidationOrder = false;
                            }
                            _this.termsOfAgreementService.getWindowAccess(_this.activitylist[0].id).subscribe(function (windowdata) {
                                _this.loginservc.isNewLead = windowdata.WindowAccess["New Lead"] == "Y" ? true : false;
                                _this.loginservc.isExistingLead = windowdata.WindowAccess["Existing Lead"] == "Y" ? true : false;
                                _this.loginservc.isBusinessPartnerAddress = windowdata.WindowAccess["Business Partner Address"] == "Y" ? true : false;
                                _this.loginservc.isNewOrder = windowdata.WindowAccess["New Order"] == "Y" ? true : false;
                                _this.loginservc.isDraftOrder = windowdata.WindowAccess["Draft Order"] == "Y" ? true : false;
                                _this.loginservc.isOrderStatus = windowdata.WindowAccess["Order Status"] == "Y" ? true : false;
                                _this.loginservc.isLatLongFinder = windowdata.WindowAccess["Lat-Long Finder"] == "Y" ? true : false;
                                _this.loginservc.isTravelPlan = windowdata.WindowAccess["Travel Plan"] == "Y" ? true : false;
                                _this.loginservc.isActualTravelPlan = windowdata.WindowAccess["Actual Travel Plan"] == "Y" ? true : false;
                                _this.loginservc.isTravelExpense = windowdata.WindowAccess["Travel Expense"] == "Y" ? true : false;
                                _this.loginservc.isTravelPlanClosure = windowdata.WindowAccess["Travel Plan Closure"] == "Y" ? true : false;
                                _this.loginservc.isApprovalAccess = windowdata.WindowAccess["Approval"] == "Y" ? true : false;
                                _this.loginservc.isCustomerServiceAccess = windowdata.WindowAccess["Customer Service"] == "Y" ? true : false;
                                _this.loginservc.isCompliantAcceptanceAccess = windowdata.WindowAccess["Complaint Acceptance"] == "Y" ? true : false;
                                _this.loginservc.isComplaintReportingAccess = windowdata.WindowAccess["Complaint Report"] == "Y" ? true : false;
                                _this.loginservc.isFieldVisitAccess = windowdata.WindowAccess["Field Visit"] == "Y" ? true : false;
                                _this.loginservc.isQuotationAccess = windowdata.WindowAccess["isQuotationAccess"] == "Y" ? true : false;
                                _this.loginservc.isQuotationApproval = windowdata.WindowAccess["isQuotationApproval"] == "Y" ? true : false;
                                _this.loginservc.isUpload = windowdata.WindowAccess["isUpload"] == "Y" ? true : false;
                                _this.loginservc.isReport = windowdata.WindowAccess["Reports"] == "Y" ? true : false;
                                _this.loginservc.isARVisitSchedule = windowdata.WindowAccess["AR Visit Schedule"] == "Y" ? true : false;
                                _this.events.publish('dashbaordEvent');
                                _this.loginservc.roleWiseDashboard = windowdata.RoleWiseDashboard;
                                _this.exonActChangefirst(data);
                            });
                        }
                    }, function (error) {
                        //  console.log("error", error);
                    });
                }
                catch (error) {
                    //  console.log("error", error);
                }
                return [2 /*return*/];
            });
        });
    };
    TermsOfAgreementPage.prototype.onSaveAgreement = function (typeRA, fileid) {
        var _this = this;
        try {
            this.commonfun.loadingPresent();
            //--------------
            this.termsOfAgreementService.SaveAgreement(this.selectedactivity.id, typeRA, fileid, this.selectedactivity.type).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                if (data != null) {
                    _this.saveresponse = data;
                    if (_this.saveresponse.resposemsg == "Success") {
                        //  this.commonfun.presentAlert("Message",this.saveplanresponse.resposemsg,this.saveplanresponse.logmsg);
                        if (_this.selectedactivity.type === 'PDF') {
                            if (typeRA == 'R') {
                                _this.router.navigateByUrl('/login');
                            }
                        }
                        else {
                            if (typeRA == 'A') {
                                _this.router.navigateByUrl('/home');
                            }
                            else {
                                _this.router.navigateByUrl('/login');
                            }
                        }
                    }
                    else {
                        _this.commonfun.loadingDismiss();
                        //  this.Resetpage();
                        _this.commonfun.presentAlert("Message", _this.saveresponse.resposemsg, _this.saveresponse.logmsg);
                    }
                }
            }, function (error) {
                _this.commonfun.loadingDismiss();
                _this.commonfun.presentAlert("Message", "Error!", error.error.text);
            });
            //------------------
        }
        catch (error) {
            // console.log("error:save", error)
            this.commonfun.loadingDismiss();
        }
    };
    TermsOfAgreementPage.prototype.getActivityWiseLOGO = function () {
        var _this = this;
        try {
            //--------------
            this.commonfun.loadingPresent();
            this.termsOfAgreementService.ActivityWiseLOGO(this.selectedactivity.id).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                if (data != null) {
                    _this.saveresponse = data;
                    if (_this.saveresponse.resposemsg == "success") {
                        _this.loginservc.logoimgeBase64 = "data:image/jpeg;base64," + _this.saveresponse.img;
                        _this.storage.set('logoimgeBase64', "data:image/jpeg;base64," + _this.saveresponse.img);
                        //    this.router.navigateByUrl('/home');
                    }
                    else {
                        _this.storage.set('logoimgeBase64', "");
                        _this.loginservc.logoimgeBase64 = "";
                    }
                }
            }, function (error) {
                _this.commonfun.loadingDismiss();
                _this.commonfun.presentAlert("Message", "Error!", error.error.text);
            });
            //------------------
        }
        catch (error) {
            //  console.log("Error1:", error);
            this.commonfun.loadingDismiss();
        }
    };
    TermsOfAgreementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
        { type: _terms_of_agreement_terms_of_agreement_service__WEBPACK_IMPORTED_MODULE_5__["TermsOfAgreementService"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__["FileOpener"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
        { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_12__["Message"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Events"] }
    ]; };
    TermsOfAgreementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-of-agreement',
            template: __webpack_require__(/*! raw-loader!./terms-of-agreement.page.html */ "./node_modules/raw-loader/index.js!./src/app/terms-of-agreement/terms-of-agreement.page.html"),
            styles: [__webpack_require__(/*! ./terms-of-agreement.page.scss */ "./src/app/terms-of-agreement/terms-of-agreement.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"],
            _terms_of_agreement_terms_of_agreement_service__WEBPACK_IMPORTED_MODULE_5__["TermsOfAgreementService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__["FileOpener"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"],
            _provider_message_helper__WEBPACK_IMPORTED_MODULE_12__["Message"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Events"]])
    ], TermsOfAgreementPage);
    return TermsOfAgreementPage;
}());



/***/ }),

/***/ "./src/app/terms-of-agreement/terms-of-agreement.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/terms-of-agreement/terms-of-agreement.service.ts ***!
  \******************************************************************/
/*! exports provided: TermsOfAgreementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfAgreementService", function() { return TermsOfAgreementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");





var TermsOfAgreementService = /** @class */ (function () {
    function TermsOfAgreementService(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    TermsOfAgreementService.prototype.getUserActivityAgreementStatus = function () {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserActivityAgreementStatus?'
            + 'userid=' + this.loginauth.userid);
    };
    TermsOfAgreementService.prototype.getWindowAccess = function (activity_id) {
        var windowAccessAPI = this.loginauth.commonurl + 'ws/in.mbs.webservice.WindowAccess?'
            + 'userid=' + this.loginauth.userid + '&activity=' + activity_id;
        // console.log("Window Access API",windowAccessAPI);
        return this.genericHTTP.get(windowAccessAPI);
    };
    TermsOfAgreementService.prototype.SaveAgreement = function (id, status, fileid, agreementtype) {
        var jsondatatemp = [{
                "id": id,
                "status": status,
                "user_id": this.loginauth.userid,
                "fileid": fileid,
                "agreementtype": agreementtype
            }];
        var login = this.loginauth.user; //"P2admin";
        var password = this.loginauth.pass; //"Pass2020";
        var auth = btoa(login + ":" + password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileMobileAgreement', jsondatatemp, httpOptions);
    };
    TermsOfAgreementService.prototype.ActivityWiseLOGO = function (act_id) {
        var jsondata = {
            "act_id": act_id
        };
        var login = this.loginauth.user; //"P2admin";
        var password = this.loginauth.pass; //"Pass2020";
        var auth = btoa(login + ":" + password);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.ActivityWiseLOGO', jsondata, httpOptions);
    };
    TermsOfAgreementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
        { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__["GenericHttpClientService"] }
    ]; };
    TermsOfAgreementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_3__["GenericHttpClientService"]])
    ], TermsOfAgreementService);
    return TermsOfAgreementService;
}());



/***/ })

}]);
//# sourceMappingURL=terms-of-agreement-terms-of-agreement-module-es5.js.map