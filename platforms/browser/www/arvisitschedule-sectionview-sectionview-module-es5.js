(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arvisitschedule-sectionview-sectionview-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/sectionview/sectionview.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arvisitschedule/sectionview/sectionview.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Submission Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon (click)=\"submitForm($event)\" style=\"font-size: 40px;\" name=\"save\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-card>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"background-color: antiquewhite;\">\n          {{checklistservice.visitplanforchecklist.dateofvisit}} - {{checklistservice.visitplanforchecklist.bpartnername}} \n      </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-card>\n</ion-header>\n\n<ion-content>\n  <div style=\"width: 100%;padding-top: 10px;padding-bottom: 10px; padding-right: 10px; padding-left: 10px;\">\n  <!-- <ion-row>\n    <ion-label position=\"stacked\">\n      Branch: {{checklistservice.selectedorg.organization$_identifier}}\n    </ion-label>\n  </ion-row> -->\n  <ion-row>\n    <ion-label position=\"stacked\">\n      Inspection Name: {{checklistservice.selectedinspection.inspectionname}}\n    </ion-label>\n  </ion-row>\n  <ion-row>\n    <ion-label position=\"stacked\">\n      Inspection ID: {{checklistservice.selectedinspection.inspectionno}}\n    </ion-label>\n  </ion-row>\n</div>\n  <div style=\"width: 100%;padding-top: 10px;padding-bottom: 10px; padding-right: 10px; padding-left: 10px;\"*ngFor=\"let section of sectionlist\">\n    <ion-card-header color=\"primary\">\n      <ion-card-title>{{section.sectionname}}</ion-card-title>\n    </ion-card-header>\n    <div style=\"width: 100%;padding-top: 10px;padding-left: 10px;\" *ngFor=\"let question of section.questions\">\n <ion-row>\n   <ion-col>\n    \n    <ion-label position=\"stacked\">\n      {{question.queno}}.{{question.question}}\n    </ion-label>\n   \n  </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"question.type!=='IMAGE' && question.type!=='IMAGEC' && question.type!=='DATE'\">\n    <ion-col>\n      <div [ngStyle]=\"{'background-color': question.colorbackground,'color':question.forecolor}\">\n    <ion-text >\n      {{question.ans}}\n    </ion-text>\n    </div>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"question.type==='DATE'\">\n    <ion-col>\n      <div [ngStyle]=\"{'background-color': question.colorbackground,'color':question.forecolor}\">\n    <ion-text >\n      {{question.ans | date: 'dd-MM-yyyy'}}\n    </ion-text>\n    </div>\n    </ion-col>\n  </ion-row>\n<ion-row *ngIf=\"question.type==='IMAGE' || question.type==='IMAGEC'\">\n    <ion-col>\n      <div [ngStyle]=\"{'background-color': question.colorbackground,'color':question.forecolor}\">\n        <img style=\"height: 50px;width: 50px;\" *ngIf=\"question.ans?.file?.type!='application/pdf'\" [src]=\"\" [ImagePreviewDirective] =\"question.ans.file\" />\n    </div>\n    </ion-col>\n  </ion-row>\n  </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/arvisitschedule/sectionview/sectionview-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/arvisitschedule/sectionview/sectionview-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SectionviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionviewPageRoutingModule", function() { return SectionviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sectionview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sectionview.page */ "./src/app/arvisitschedule/sectionview/sectionview.page.ts");




var routes = [
    {
        path: '',
        component: _sectionview_page__WEBPACK_IMPORTED_MODULE_3__["SectionviewPage"]
    }
];
var SectionviewPageRoutingModule = /** @class */ (function () {
    function SectionviewPageRoutingModule() {
    }
    SectionviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SectionviewPageRoutingModule);
    return SectionviewPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/arvisitschedule/sectionview/sectionview.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/arvisitschedule/sectionview/sectionview.module.ts ***!
  \*******************************************************************/
/*! exports provided: SectionviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionviewPageModule", function() { return SectionviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sectionview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sectionview-routing.module */ "./src/app/arvisitschedule/sectionview/sectionview-routing.module.ts");
/* harmony import */ var _sectionview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sectionview.page */ "./src/app/arvisitschedule/sectionview/sectionview.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var SectionviewPageModule = /** @class */ (function () {
    function SectionviewPageModule() {
    }
    SectionviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sectionview_routing_module__WEBPACK_IMPORTED_MODULE_5__["SectionviewPageRoutingModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_sectionview_page__WEBPACK_IMPORTED_MODULE_6__["SectionviewPage"]]
        })
    ], SectionviewPageModule);
    return SectionviewPageModule;
}());



/***/ }),

/***/ "./src/app/arvisitschedule/sectionview/sectionview.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/arvisitschedule/sectionview/sectionview.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-container {\n  position: relative;\n}\n\n.topright {\n  position: absolute;\n  top: -8px;\n  right: 25px;\n  font-size: 18px;\n  color: red;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9hcnZpc2l0c2NoZWR1bGUvc2VjdGlvbnZpZXcvc2VjdGlvbnZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9hcnZpc2l0c2NoZWR1bGUvc2VjdGlvbnZpZXcvc2VjdGlvbnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FydmlzaXRzY2hlZHVsZS9zZWN0aW9udmlldy9zZWN0aW9udmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAudG9wcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC04cHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIGltZyB7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBcbiAgfSIsIi5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9wcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/arvisitschedule/sectionview/sectionview.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/arvisitschedule/sectionview/sectionview.page.ts ***!
  \*****************************************************************/
/*! exports provided: SectionviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionviewPage", function() { return SectionviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../arvisitschedule.service */ "./src/app/arvisitschedule/arvisitschedule.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");






var SectionviewPage = /** @class */ (function () {
    function SectionviewPage(checklistservice, router, msg, commonfn) {
        this.checklistservice = checklistservice;
        this.router = router;
        this.msg = msg;
        this.commonfn = commonfn;
        this.sectionlist = [];
    }
    SectionviewPage.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.checklistservice.selectedinspection.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            var secjson = {};
            var questionlist = [];
            for (var _b = 0, _c = section.questions; _b < _c.length; _b++) {
                var que = _c[_b];
                var quejson = {};
                if (que.ans !== '' && que.isload) {
                    if (que.type === 'IMAGE' || que.type === 'IMAGEC') {
                        quejson["queno"] = que.queno;
                        //console.log('queansImage',que.ans);
                        var fileField = que.ans;
                        var imageFile = void 0;
                        for (var _d = 0, _e = fileField.queue; _d < _e.length; _d++) {
                            var item = _e[_d];
                            imageFile = item;
                        }
                        //       console.log('queansImage',imageFile);
                        quejson["ans"] = imageFile;
                        quejson["question"] = que.question;
                        quejson["colorbackground"] = que.colorbackground;
                        quejson["forecolor"] = que.forecolor;
                        quejson["type"] = que.type;
                    }
                    else if (que.type === 'DTIME') {
                        quejson["queno"] = que.queno;
                        var datetime = que.ans.split('T');
                        var sdate = datetime[0];
                        var stime = datetime[1].substring(0, 8);
                        quejson["ans"] = (sdate + ' ' + stime);
                        quejson["question"] = que.question;
                        quejson["colorbackground"] = que.colorbackground;
                        quejson["forecolor"] = que.forecolor;
                        quejson["type"] = que.type;
                    }
                    else {
                        quejson["queno"] = que.queno;
                        quejson["ans"] = que.ans;
                        quejson["question"] = que.question;
                        quejson["colorbackground"] = que.colorbackground;
                        quejson["forecolor"] = que.forecolor;
                        quejson["type"] = que.type;
                    }
                    questionlist.push(quejson);
                }
            }
            secjson["sectionname"] = section.sectionname;
            secjson["questions"] = questionlist;
            this.sectionlist.push(secjson);
        }
    };
    SectionviewPage.prototype.backPress = function (event) {
        this.router.navigateByUrl('/deshboard');
    };
    SectionviewPage.prototype.submitForm = function (event) {
        var _this = this;
        this.commonfn.loadingPresent();
        var body = {};
        var questionlist = [];
        var formData = new FormData();
        for (var _i = 0, _a = this.checklistservice.selectedinspection.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            var _loop_1 = function (que) {
                var quesjson = {};
                if (que.ans !== '' && que.isload) {
                    if (que.type === 'IMAGE' || que.type === 'IMAGEC') {
                        quesjson["questionid"] = que.questionid;
                        quesjson["sectionid"] = section.sectionid;
                        quesjson["colorid"] = que.colorid;
                        quesjson["type"] = que.type;
                        var fileField = que.ans;
                        var files = fileField.queue;
                        var i_1 = 0;
                        files.forEach(function (fileItem) {
                            var ext = fileItem.file.name.substr(fileItem.file.name.lastIndexOf('.') + 1);
                            var filename = que.questionid + '.' + ext;
                            formData.append(que.questionid, fileItem.file.rawFile, filename);
                            i_1++;
                        });
                        quesjson["ans"] = '';
                    }
                    else if (que.type === 'DTIME') {
                        quesjson["questionid"] = que.questionid;
                        var datetime = que.ans.split('T');
                        var sdate = datetime[0];
                        var stime = datetime[1].substring(0, 8);
                        quesjson["ans"] = (sdate + ' ' + stime);
                        quesjson["sectionid"] = section.sectionid;
                        quesjson["colorid"] = que.colorid;
                        quesjson["type"] = que.type;
                    }
                    else {
                        quesjson["questionid"] = que.questionid;
                        quesjson["ans"] = que.ans;
                        quesjson["sectionid"] = section.sectionid;
                        quesjson["colorid"] = que.colorid;
                        quesjson["type"] = que.type;
                    }
                    questionlist.push(quesjson);
                }
            };
            //console.log('section',section);
            for (var _b = 0, _c = section.questions; _b < _c.length; _b++) {
                var que = _c[_b];
                _loop_1(que);
            }
        }
        body["questionlist"] = questionlist;
        body["orgid"] = '0';
        body["arplanid"] = this.checklistservice.visitplanforchecklist.arplanid;
        body["checklisttrxid"] = this.checklistservice.visitplanforchecklist.checklisttrxid;
        body["inspectionid"] = this.checklistservice.selectedinspection.inspectionid;
        formData.append('jsonpara', JSON.stringify(body));
        this.checklistservice.onSaveSectionQuestion(formData).subscribe(function (data) {
            _this.commonfn.loadingDismiss();
            var response = data['response'];
            if (response.hasOwnProperty('messageType')) {
                if (response.messageType == 'success') {
                    _this.msg.presentAlert("Message", "Success", "Data saved successfully.");
                    _this.router.navigateByUrl('/arvisitschedule');
                }
            }
            if (response.error)
                _this.msg.presentAlert("Message", "Error", response.error.message);
        });
    };
    SectionviewPage.ctorParameters = function () { return [
        { type: _arvisitschedule_service__WEBPACK_IMPORTED_MODULE_1__["ArvisitscheduleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_4__["Message"] },
        { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] }
    ]; };
    SectionviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sectionview',
            template: __webpack_require__(/*! raw-loader!./sectionview.page.html */ "./node_modules/raw-loader/index.js!./src/app/arvisitschedule/sectionview/sectionview.page.html"),
            styles: [__webpack_require__(/*! ./sectionview.page.scss */ "./src/app/arvisitschedule/sectionview/sectionview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_1__["ArvisitscheduleService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_provider_message_helper__WEBPACK_IMPORTED_MODULE_4__["Message"], src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"]])
    ], SectionviewPage);
    return SectionviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=arvisitschedule-sectionview-sectionview-module-es5.js.map