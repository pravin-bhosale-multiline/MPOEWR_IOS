(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arvisitschedule-section-section-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/section/section.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arvisitschedule/section/section.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"backPress($event)\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{sSection}}</ion-title>\n    <!-- <ion-buttons slot=\"end\">\n      <div class=\"ion-text-center\">\n        <ion-button (click)=\"prevSection($event)\" >\n          <<\n        </ion-button>\n        <ion-button (click)=\"nextSection($event)\" >\n            >>\n        </ion-button>\n      </div>\n    </ion-buttons> -->\n  </ion-toolbar>\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"background-color: antiquewhite;\">\n          {{checklistservice.visitplanforchecklist.dateofvisit}} - {{checklistservice.visitplanforchecklist.bpartnername}} \n      </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-card>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"myForm\" (ngSubmit) = \"submitForm($event)\">\n\n    <div  style=\"width: 100%;padding-top: 10px;padding-left: 10px;\" *ngFor=\"let c of curentquestionlist\">\n    <ion-item  style=\"width: 100%;padding-top: 10px;padding-left: 10px;\" *ngIf=\"!c.ishide\" >\n     \n      <ion-label class=\"ion-text-wrap\"  position=\"stacked\">\n        {{c.queno}}. {{c.question}} \n      </ion-label>\n   \n      <div style=\"width: 100%;\" [ngSwitch]=\"c.type\" [ngStyle]=\"{'background-color': c.colorbackground,'color':c.forecolor}\">\n        <ion-input *ngSwitchCase=\"'INPUT'\" [type]=\"c.inputtype ? c.inputtype:'text'\" \n        [formControlName]=\"c.questionid\" [placeholder]=\"c.placeholder\"></ion-input>\n        <ion-input style=\"text-transform: uppercase;\" *ngSwitchCase=\"'TUP'\" [type]=\"c.inputtype ? c.inputtype:'text'\" \n        [formControlName]=\"c.questionid\" [placeholder]=\"c.placeholder\" ></ion-input>\n        <ion-datetime *ngSwitchCase=\"'DATE'\" [max]=\"c.maxdate\" [min]=\"c.mindate\" displayFormat=\"DD-MM-YYYY\" [formControlName]=\"c.questionid\"></ion-datetime>\n        <ion-datetime *ngSwitchCase=\"'DTIME'\" [max]=\"c.maxdate\" [min]=\"c.mindate\"  displayFormat=\"DD-MM-YYYY HH:mm\" [formControlName]=\"c.questionid\"></ion-datetime>\n        <ion-select class=\"ion-text-wrap\" *ngSwitchCase=\"'LIST'\" [formControlName]=\"c.questionid\" interface=\"popover\"  >\n          <ion-select-option *ngFor=\"let item of c.listvalue.split(',')\" [value]=\"item\">{{item}}</ion-select-option>\n        </ion-select>\n        <ion-datetime displayFormat=\"h:mm A\" pickerFormat=\"h:mm A\" *ngSwitchCase=\"'TIME'\" [formControlName]=\"c.questionid\" ></ion-datetime>  \n        <ion-row *ngSwitchCase=\"'IMAGE'\" style=\"width: 100%;padding-top: 10px;padding-left: 10px;\">\n          <app-multi-file-upload [myform]=\"myForm\" [controlID]=\"c.questionid\"  [formControlName]=\"c.questionid\"  ></app-multi-file-upload>\n        </ion-row>\n        <ion-row *ngSwitchCase=\"'IMAGEC'\" style=\"width: 100%;padding-top: 10px;padding-left: 10px;\">\n          <app-multi-file-upload [isOnlyCamera]=\"true\" [myform]=\"myForm\" [controlID]=\"c.questionid\"  [formControlName]=\"c.questionid\"  ></app-multi-file-upload>\n        </ion-row>\n        <ion-row *ngSwitchCase=\"'SL'\">\n        <ion-input  [formControlName]=\"c.questionid\" [placeholder]=\"c.placeholder\" readonly type=\"text\" ></ion-input>\n        <ion-icon style=\"font-size: 40px;\" (click)=\"OnClickSelector(c,$event)\" name=\"search\"></ion-icon>\n      </ion-row>\n      <div *ngSwitchCase=\"'MSL'\">\n        <!-- <ion-input  [formControlName]=\"c.questionid\" [placeholder]=\"c.placeholder\" readonly type=\"text\" ></ion-input>\n        <ion-icon style=\"font-size: 40px;\" (click)=\"OnClickSelector(c,$event)\"  name=\"search\"></ion-icon> -->\n         <app-listcontrolchk [myform]=\"myForm\" [formControlName]=\"c.questionid\" [question]=\"c\"></app-listcontrolchk> \n      </div>\n      <ion-row *ngSwitchCase=\"'MET'\">\n        <ion-input  [formControlName]=\"c.questionid\" [placeholder]=\"c.placeholder\" readonly type=\"text\" ></ion-input>\n        <ion-icon style=\"font-size: 40px;\" (click)=\"OnClickMultipleEntry(c,$event)\"  name=\"search\"></ion-icon>\n      </ion-row>\n      <ion-row *ngSwitchCase=\"'QRC'\">\n           \n        <ion-col size=\"8\" >\n          <ion-textarea [formControlName]=\"c.questionid\"  [placeholder]=\"c.placeholder\" readonly type=\"text\" style=\"margin-top: -30px\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"4\"> \n          <div style=\"margin-left: 16px;margin-top: -44px\">\n            <ion-fab-button color=\"light\" vertical=\"center\" size=\"large\" (click)=\"ScanQRcode(c)\">\n              <img src=\"../../../assets/QRscan_image.png\" style=\"background-color: #EFEFEF!important;\" />\n            </ion-fab-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      </div>\n  \n    </ion-item>  \n    \n  </div>  \n \n    \n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-button  *ngIf=\"islast\" type=\"submit\" expand=\"block\" (click)=\"submitForm($event)\"  [disabled]=\"!myForm.valid\">Submit!</ion-button>\n  <!-- <ion-button  expand=\"block\" (click)=\"findInvalidControls()\"  >Submit!</ion-button> -->\n</ion-footer>"

/***/ }),

/***/ "./src/app/arvisitschedule/section/section-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/arvisitschedule/section/section-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPageRoutingModule", function() { return SectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _section_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section.page */ "./src/app/arvisitschedule/section/section.page.ts");




var routes = [
    {
        path: '',
        component: _section_page__WEBPACK_IMPORTED_MODULE_3__["SectionPage"]
    }
];
var SectionPageRoutingModule = /** @class */ (function () {
    function SectionPageRoutingModule() {
    }
    SectionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SectionPageRoutingModule);
    return SectionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/arvisitschedule/section/section.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/arvisitschedule/section/section.module.ts ***!
  \***********************************************************/
/*! exports provided: SectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPageModule", function() { return SectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _section_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-routing.module */ "./src/app/arvisitschedule/section/section-routing.module.ts");
/* harmony import */ var _section_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section.page */ "./src/app/arvisitschedule/section/section.page.ts");








var SectionPageModule = /** @class */ (function () {
    function SectionPageModule() {
    }
    SectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _section_routing_module__WEBPACK_IMPORTED_MODULE_6__["SectionPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
            ],
            declarations: [_section_page__WEBPACK_IMPORTED_MODULE_7__["SectionPage"]]
        })
    ], SectionPageModule);
    return SectionPageModule;
}());



/***/ }),

/***/ "./src/app/arvisitschedule/section/section.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/arvisitschedule/section/section.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydmlzaXRzY2hlZHVsZS9zZWN0aW9uL3NlY3Rpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/arvisitschedule/section/section.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/arvisitschedule/section/section.page.ts ***!
  \*********************************************************/
/*! exports provided: SectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPage", function() { return SectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../arvisitschedule.service */ "./src/app/arvisitschedule/arvisitschedule.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/provider/validator-helper */ "./src/provider/validator-helper.ts");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");








var SectionPage = /** @class */ (function () {
    function SectionPage(fb, checklistservice, val, msg, router, route, barcodeScanner) {
        this.fb = fb;
        this.checklistservice = checklistservice;
        this.val = val;
        this.msg = msg;
        this.router = router;
        this.route = route;
        this.barcodeScanner = barcodeScanner;
        this.islast = false;
        this.sSection = "Section";
        this.sectionIndex = 0;
        this.curentquestionlist = [];
        this.remove = false;
        this.myForm = this.fb.group({});
    }
    SectionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.router.getCurrentNavigation())
                if (_this.router.getCurrentNavigation().extras.state) {
                    var currentques = _this.router.getCurrentNavigation().extras.state.question;
                    if (currentques.type === 'SL' || currentques.type === 'MET') {
                        _this.myForm.get(currentques.questionid).setValue(currentques.ans);
                    }
                }
        });
    };
    SectionPage.prototype.backPress = function (event) {
        //console.log('test');
        this.resetJsonAns();
        this.curentquestionlist = [];
        this.router.navigateByUrl('/arvisitschedule');
    };
    SectionPage.prototype.OnClickSelector = function (question, event) {
        var navigationExtras = {
            state: {
                question: question
            }
        };
        this.router.navigate(['selectorsinglequestionframwork'], navigationExtras);
    };
    SectionPage.prototype.OnClickMultipleEntry = function (question, event) {
        var navigationExtras = {
            state: {
                question: question
            }
        };
        this.router.navigate(['multipleentry'], navigationExtras);
    };
    SectionPage.prototype.ngOnInit = function () {
        //console.log('insdie');
        // this.sectionIndex=this.checklistservice.secIndex;
        this.jsonSection = this.checklistservice.selectedinspection.sections[this.sectionIndex];
        this.sSection = this.jsonSection.sectionname;
        this.questionJsonList = this.checklistservice.selectedinspection.sections[this.sectionIndex].questions;
        this.firstControlLoads(this.questionJsonList);
        this.showcontrol(this.questionJsonList);
        if (this.sectionIndex === this.checklistservice.selectedinspection.sections.length - 1) {
            this.islast = true;
        }
        else {
            this.islast = false;
        }
    };
    SectionPage.prototype.firstControlLoads = function (listOfQuestion) {
        this.curentquestionlist = [];
        for (var _i = 0, listOfQuestion_1 = listOfQuestion; _i < listOfQuestion_1.length; _i++) {
            var question = listOfQuestion_1[_i];
            if (question.isfirst && !question.isload) {
                this.createControls(question);
            }
        }
    };
    SectionPage.prototype.resetJsonAns = function () {
        for (var _i = 0, _a = this.checklistservice.selectedinspection.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            for (var _b = 0, _c = section.questions; _b < _c.length; _b++) {
                var que = _c[_b];
                que.isload = false;
                que.ans = '';
            }
        }
    };
    SectionPage.prototype.createControls = function (jsonQuestion) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newFormControl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.curentquestionlist.push(jsonQuestion);
                        this.setSequenceOfQuestion();
                        newFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
                        // add dynamic que no. sequence
                        // console.log('validation',control.validation);
                        if (jsonQuestion.validation === 'emailValid') {
                            newFormControl.setAsyncValidators(this.val.emailValid);
                        }
                        if (jsonQuestion.validation === 'pannoValid') {
                            newFormControl.setAsyncValidators(this.val.pannoValid);
                        }
                        if (jsonQuestion.validation === 'digit15Valid') {
                            newFormControl.setAsyncValidators(this.val.digit15Valid);
                        }
                        if (jsonQuestion.validation === 'digit10Valid') {
                            newFormControl.setAsyncValidators(this.val.digit10Valid);
                        }
                        if (jsonQuestion.validation === 'gstnumberValid') {
                            newFormControl.setAsyncValidators(this.val.gstnumberValid);
                        }
                        if (jsonQuestion.validation === 'numberValid') {
                            newFormControl.setAsyncValidators(this.val.numberValid);
                        }
                        if (jsonQuestion.validation === 'positivenumberValid') {
                            newFormControl.setAsyncValidators(this.val.positivenumberValid);
                        }
                        if (jsonQuestion.validation === 'vehiclenumberValid') {
                            newFormControl.setAsyncValidators(this.val.vehiclenumberValid);
                        }
                        if (jsonQuestion.required) {
                            newFormControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                        }
                        newFormControl.setValue(jsonQuestion.ans);
                        this.myForm.addControl(jsonQuestion.questionid, newFormControl);
                        jsonQuestion.isload = true;
                        this.remove = false;
                        return [4 /*yield*/, this.onCreateGroupFormValueChange()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SectionPage.prototype.onCreateGroupFormValueChange = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.old = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.myForm.value);
                this.myForm.valueChanges.subscribe(function (value) {
                    // console.log('remove',this.remove);
                    // console.log('add',question);
                    var queid = Object.keys(value).find(function (k) { return value[k] != _this.old[k]; });
                    if (queid && !_this.remove) {
                        var question = _this.getQueDetFromKey(queid);
                        // update ans of it
                        if (question.type === 'DATE') {
                            question.ans = value[queid].split('T')[0];
                        }
                        else if (question.type === 'TIME') {
                            if (value[queid] !== '')
                                question.ans = value[queid].split('T')[1].substring(0, 8);
                        }
                        else if (question.type === 'TUP') {
                            question.ans = value[queid].toUpperCase();
                        }
                        else {
                            question.ans = value[queid];
                        }
                        if (question) {
                            _this.setQuestionColor(question);
                            //   console.log(question);
                            if (question.dependentque) {
                                _this.removeDependentQuestionControl(question);
                            }
                            for (var _i = 0, _a = question.dependentque.split(','); _i < _a.length; _i++) {
                                var s = _a[_i];
                                var addque = _this.getQueDetFromQueNo(s);
                                if (addque) {
                                    var v = addque.condition;
                                    var expression = _this.iterateCondition(v);
                                    try {
                                        //   console.log(this.runExpression(expression));
                                        if (_this.runExpression(expression) === true) {
                                            _this.remove = true;
                                            _this.createControls(addque);
                                        }
                                    }
                                    catch (error) {
                                        //   console.log(error);
                                    }
                                }
                                _this.remove = false;
                            }
                        }
                        _this.setSequenceOfQuestion();
                        _this.old = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.myForm.value);
                    }
                    _this.old = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.myForm.value);
                });
                return [2 /*return*/];
            });
        });
    };
    SectionPage.prototype.getQueDetFromKey = function (key) {
        for (var _i = 0, _a = this.questionJsonList; _i < _a.length; _i++) {
            var question = _a[_i];
            if (key === question.questionid) {
                //console.log('getQueDetFromKey',question);
                return question;
            }
        }
    };
    SectionPage.prototype.getQueDetFromQueNo = function (qno) {
        for (var _i = 0, _a = this.questionJsonList; _i < _a.length; _i++) {
            var question = _a[_i];
            if (qno === question.questionno) {
                //console.log('getQueDetFromKey',question);
                return question;
            }
        }
    };
    SectionPage.prototype.setSequenceOfQuestion = function () {
        var xlist = this.curentquestionlist.sort(function (a, b) { return (a.srno > b.srno ? 1 : -1); });
        var i = 1;
        for (var _i = 0, xlist_1 = xlist; _i < xlist_1.length; _i++) {
            var xx = xlist_1[_i];
            xx.queno = i;
            i = i + 1;
        }
    };
    SectionPage.prototype.prevSection = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.sectionIndex > 0) {
                    // first hide all current component
                    this.hideControl();
                    this.sectionIndex = this.sectionIndex - 1;
                    this.jsonSection = this.checklistservice.selectedinspection.sections[this.sectionIndex];
                    this.sSection = this.jsonSection.sectionname;
                    this.questionJsonList = this.checklistservice.selectedinspection.sections[this.sectionIndex].questions;
                    this.firstControlLoads(this.questionJsonList);
                    this.showcontrol(this.questionJsonList);
                    // this.checklistservice.secIndex=this.sectionIndex;
                    this.islast = false;
                }
                return [2 /*return*/];
            });
        });
    };
    SectionPage.prototype.nextSection = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.sectionIndex < this.checklistservice.selectedinspection.sections.length - 1) {
                    // first hide all current component
                    this.hideControl();
                    this.sectionIndex = this.sectionIndex + 1;
                    this.jsonSection = this.checklistservice.selectedinspection.sections[this.sectionIndex];
                    this.sSection = this.jsonSection.sectionname;
                    this.questionJsonList = this.checklistservice.selectedinspection.sections[this.sectionIndex].questions;
                    this.firstControlLoads(this.questionJsonList);
                    this.showcontrol(this.questionJsonList);
                    // this.checklistservice.secIndex=this.sectionIndex;
                }
                if (this.sectionIndex === this.checklistservice.selectedinspection.sections.length - 1) {
                    this.islast = true;
                }
                else {
                    this.islast = false;
                }
                return [2 /*return*/];
            });
        });
    };
    SectionPage.prototype.showcontrol = function (questionJsonList) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, questionJsonList_1, que, _a, questionJsonList_2, que;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                for (_i = 0, questionJsonList_1 = questionJsonList; _i < questionJsonList_1.length; _i++) {
                    que = questionJsonList_1[_i];
                    que.ishide = false;
                }
                if (this.curentquestionlist.length === 0) {
                    for (_a = 0, questionJsonList_2 = questionJsonList; _a < questionJsonList_2.length; _a++) {
                        que = questionJsonList_2[_a];
                        if (que.isload) {
                            this.curentquestionlist.push(que);
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    SectionPage.prototype.hideControl = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _i, _a, que;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                for (_i = 0, _a = this.curentquestionlist; _i < _a.length; _i++) {
                    que = _a[_i];
                    que.ishide = true;
                }
                return [2 /*return*/];
            });
        });
    };
    SectionPage.prototype.removeDependentQuestionControl = function (control) {
        var v = control.dependentque;
        var _loop_1 = function (tag) {
            //console.log(tag);
            // console.log(this.myForm.get(tag));
            this_1.remove = true;
            var f = this_1.curentquestionlist.find(function (_a) {
                var questionno = _a.questionno;
                return questionno === tag;
            });
            var index = this_1.curentquestionlist.indexOf(f);
            // console.log(f);
            if (f === undefined || f === null) { }
            else {
                this_1.curentquestionlist.splice(index, 1);
                if (this_1.myForm.get(f.questionid) !== null) {
                    f.ans = '';
                    f.isload = false;
                    this_1.myForm.removeControl(f.questionid);
                    //   console.log('remove control',f);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = v.split(','); _i < _a.length; _i++) {
            var tag = _a[_i];
            _loop_1(tag);
        }
        this.setSequenceOfQuestion();
        //   console.log(this.curentquestionlist);
    };
    SectionPage.prototype.iterateCondition = function (condition) {
        var expression = "";
        expression = condition;
        var questionnos = this.extractQuestion(condition);
        for (var _i = 0, questionnos_1 = questionnos; _i < questionnos_1.length; _i++) {
            var queno = questionnos_1[_i];
            expression = expression.replace(queno, this.getFormControlNamefromQuestion(queno)).replace('[', '').replace(']', '');
        }
        //   console.log(expression);
        return expression;
    };
    SectionPage.prototype.getFormControlNamefromQuestion = function (qno) {
        var que = this.curentquestionlist.find(function (_a) {
            var questionno = _a.questionno;
            return questionno === qno;
        });
        if (que) {
            return '\'' + this.myForm.get(que.questionid).value + '\'';
        }
        else {
            return 'false';
        }
    };
    SectionPage.prototype.extractQuestion = function (str) {
        var words = [];
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) === '[') {
                var stopIndex = str.indexOf(']', i);
                if (stopIndex !== -1)
                    words.push(str.substring(i + 1, stopIndex));
            }
        }
        return words;
    };
    SectionPage.prototype.runExpression = function (expression) {
        return eval(expression);
    };
    SectionPage.prototype.submitForm = function (event) {
        for (var _i = 0, _a = this.checklistservice.selectedinspection.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            ////   console.log('section',section);
            for (var _b = 0, _c = section.questions; _b < _c.length; _b++) {
                var que = _c[_b];
                if (que.ans !== '' && que.isload) {
                    this.setQuestionColor(que);
                }
            }
            this.router.navigateByUrl('/sectionview');
        }
    };
    SectionPage.prototype.findInvalidControls = function () {
        var invalid = [];
        var controls = this.myForm.controls;
        for (var name_1 in controls) {
            if (controls[name_1].invalid) {
                invalid.push(name_1);
            }
        }
        console.log(invalid);
    };
    SectionPage.prototype.setQuestionColor = function (question) {
        for (var _i = 0, _a = question.colors; _i < _a.length; _i++) {
            var color = _a[_i];
            var istrue = false;
            if (color.operator === 'EQ' && question.ans === color.value) {
                istrue = true;
                question.colorid = color.colorid;
                question.colorbackground = color.colorbackground;
                question.forecolor = color.forecolor;
                return;
            }
            else if (color.operator === 'NE' && question.ans !== color.value) {
                istrue = true;
                question.colorid = color.colorid;
                question.colorbackground = color.colorbackground;
                question.forecolor = color.forecolor;
                return;
            }
            else if (color.operator === 'CT' && question.ans.includes(color.value)) {
                istrue = true;
                question.colorid = color.colorid;
                question.colorbackground = color.colorbackground;
                question.forecolor = color.forecolor;
                return;
            }
            else if (color.operator === 'GT') {
                if (question.type === 'DATE' && new Date(question.ans) > new Date(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
                else if (question.type === 'INPUT' && question.inputtype === "number"
                    && new Number(question.ans) > new Number(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
            }
            else if (color.operator === 'GTE') {
                if (question.type === 'DATE' && new Date(question.ans) >= new Date(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
                else if (question.type === 'INPUT' && question.inputtype === "number"
                    && new Number(question.ans) >= new Number(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
            }
            else if (color.operator === 'LT') {
                if (question.type === 'DATE' && new Date(question.ans) < new Date(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
                else if (question.type === 'INPUT' && question.inputtype === "number"
                    && new Number(question.ans) < new Number(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
            }
            else if (color.operator === 'LTE') {
                if (question.type === 'DATE' && new Date(question.ans) <= new Date(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
                else if (question.type === 'INPUT' && question.inputtype === "number"
                    && new Number(question.ans) <= new Number(color.value)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
            }
            else if (color.operator === 'BT') {
                if (question.type === 'DATE' && new Date(question.ans) >= new Date(color.fromvalue) && new Date(question.ans) <= new Date(color.tovalue)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
                else if (question.type === 'INPUT' && question.inputtype === "number"
                    && new Number(question.ans) >= new Number(color.fromvalue) && new Number(question.ans) <= new Number(color.tovalue)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
            }
            else if (color.operator === 'NBT') {
                if (question.type === 'DATE' && new Date(question.ans) < new Date(color.fromvalue) && new Date(question.ans) > new Date(color.tovalue)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
                else if (question.type === 'INPUT' && question.inputtype === "number"
                    && new Number(question.ans) < new Number(color.fromvalue) || new Number(question.ans) > new Number(color.tovalue)) {
                    istrue = true;
                    question.colorid = color.colorid;
                    question.colorbackground = color.colorbackground;
                    question.forecolor = color.forecolor;
                    return;
                }
            }
            else {
                istrue = false;
                question.colorid = '';
                question.colorbackground = '';
                question.forecolor = '';
            }
        }
    };
    SectionPage.prototype.ScanQRcode = function (question) {
        var _this = this;
        console.log(question);
        try {
            //console.log("ScanQRcode");
            this.barcodeScanner.scan().then(function (barcodeData) {
                console.log(barcodeData.text);
                question.ans = barcodeData.text;
                console.log(question.queno);
                _this.myForm.get(question.questionid).setValue(barcodeData.text);
            });
        }
        catch (error) {
            //console.log("ScanQRcode: error:",error)
        }
    };
    SectionPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"] },
        { type: src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"] },
        { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] }
    ]; };
    SectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! raw-loader!./section.page.html */ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/section/section.page.html"),
            styles: [__webpack_require__(/*! ./section.page.scss */ "./src/app/arvisitschedule/section/section.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"],
            src_provider_validator_helper__WEBPACK_IMPORTED_MODULE_6__["Validator"],
            src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"]])
    ], SectionPage);
    return SectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=arvisitschedule-section-section-module-es5.js.map