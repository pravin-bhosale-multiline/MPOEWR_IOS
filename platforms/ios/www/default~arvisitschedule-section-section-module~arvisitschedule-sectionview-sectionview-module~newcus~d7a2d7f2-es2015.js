(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~arvisitschedule-section-section-module~arvisitschedule-sectionview-sectionview-module~newcus~d7a2d7f2"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/listcontrol/listcontrol.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/listcontrol/listcontrol.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div [id]=\"inpname\"  style=\"margin-top: 10px;margin-bottom: 10px;\" > \n    <ion-label id=\"labellist\" class=\"labelclass sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-primary md label-stacked hydrated\" \n    style=\"margin-left: 15px;font-size: 12px;\">{{inpcaption}}</ion-label>\n      <ion-item >\n      <ion-checkbox id=\"child\" (ionChange)=\"selectAllMember($event)\" [checked]=\"isall\" [(ngModel)]=\"isall\" style=\"margin-right: 10px;\"></ion-checkbox>\n    </ion-item>\n   \n    <ion-content  style=\"height: 200px;width: 90%;\" scrollY=\"true\" >    \n      <ion-item  *ngFor=\"let item of listofitem\">\n        <ion-checkbox id=\"child\" (ionChange)=\"selectMember(item,$event)\" [checked]=\"item.ischecked\" [(ngModel)]=\"item.ischecked\"  style=\"margin-right: 10px;\"></ion-checkbox>\n        <ion-text >{{item.name}}</ion-text>\n      </ion-item>\n      \n    </ion-content>\n  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/listcontrolchkframwork/listcontrolchk.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/listcontrolchkframwork/listcontrolchk.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div [id]=\"question.questionid\"  style=\" margin-top: 10px;margin-bottom: 10px;\" > \n    <!-- <ion-label id=\"labellist\" class=\"labelclass sc-ion-label-md-h sc-ion-label-md-s ion-color ion-color-primary md label-stacked hydrated\" \n    style=\"margin-left: 15px;font-size: 12px;\"> {{question.queno}}. {{question.question}} </ion-label> -->\n      <ion-item >\n      <ion-checkbox id=\"child\" (ionChange)=\"selectAllMember($event)\" [checked]=\"isall\" [(ngModel)]=\"isall\" style=\"margin-right: 10px;\"></ion-checkbox>\n    </ion-item>\n   \n    <ion-content  style=\"height: 200px;width: 90%;\" scrollY=\"true\" >    \n      <ion-item  *ngFor=\"let item of listofitem\">\n        <ion-checkbox id=\"child\" (ionChange)=\"selectMember(item,$event)\" [checked]=\"item.ischecked\" [(ngModel)]=\"item.ischecked\"  style=\"margin-right: 10px;\"></ion-checkbox>\n        <ion-text >{{item.name}}</ion-text>\n      </ion-item>\n      \n    </ion-content>\n  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/multi-file-upload/multi-file-upload.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/multi-file-upload/multi-file-upload.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\"drop-zone\">\n  Drop files here...accept=\"image/*,.pdf,application/pdf\"\n</div> -->\n\n<div class=\"file-input-container\">\n  <ion-row size=\"6\" *ngIf=\"!isOnlyCamera\">\n  <label style=\"background-color: #f39e20;border-radius: 7px; color: white;\" class=\"bottom-button\">\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple (change)=\"onfileuploadchange()\"/>\n    Gallery\n  </label>\n </ion-row>\n<ion-row size=\"6\" *ngIf='!msg.isplatformweb && msg.istakephoto'>\n    <label style=\"background-color: #f39e20;border-radius: 7px; color: white;\" class=\"bottom-button\" (click)=\"takePicture()\">\n      Capture  </label>\n  </ion-row>\n</div>\n\n<!-- <h2>Files: {{ uploader?.queue?.length }}</h2> -->\n<br/>\n<br/>\n\n<label><span *ngIf='isextrafiles' style=\"color:red!important\">Maximum {{maxfile!==undefined?maxfile:msg.maxfile }} files are allowed.</span></label>\n\n<ion-row>\n  <ion-col size='3' *ngFor=\"let item of uploader.queue;let i = index\">\n   \n    <!-- <ion-icon name=\"trash\" (click)=\"removefile(i)\" style=\"font-size:x-large;\n    color: red;\"></ion-icon> -->\n\n<div class=\"img-container\">\n  <ion-icon *ngIf=\"item?.file?.type=='application/pdf'\" style=\"height: 50px;width: 50px;background-color: coral;\"  name=\"document\"></ion-icon>\n  <img style=\"height: 50px;width: 50px;\" *ngIf=\"item?.file?.type!='application/pdf'\" [src]=\"\" [ImagePreviewDirective] =\"item.file\" />\n\n  <ion-icon name=\"trash\" (click)=\"removefile(i)\"\n  class=\"topright\"></ion-icon>\n</div>\n\n  </ion-col>\n</ion-row>\n\n\n"

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

/***/ "./src/app/common/image-preview.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/common/image-preview.directive.ts ***!
  \***************************************************/
/*! exports provided: ImagePreviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewDirective", function() { return ImagePreviewDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImagePreviewDirective = class ImagePreviewDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        let reader = new FileReader();
        let el = this.el;
        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };
        if (this.ImagePreviewDirective) {
            //console.log(this.ImagePreviewDirective);
            return reader.readAsDataURL(this.ImagePreviewDirective.rawFile);
            //return window.URL.createObjectURL(this.ImagePreviewDirective.rawFile)
        }
    }
};
ImagePreviewDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImagePreviewDirective.prototype, "ImagePreviewDirective", void 0);
ImagePreviewDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ImagePreviewDirective]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ImagePreviewDirective);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-file-upload/multi-file-upload.component */ "./src/app/components/multi-file-upload/multi-file-upload.component.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_image_preview_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/image-preview.directive */ "./src/app/common/image-preview.directive.ts");
/* harmony import */ var _listcontrol_listcontrol_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listcontrol/listcontrol.component */ "./src/app/components/listcontrol/listcontrol.component.ts");
/* harmony import */ var _listcontrolchkframwork_listcontrolchk_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./listcontrolchkframwork/listcontrolchk.component */ "./src/app/components/listcontrolchkframwork/listcontrolchk.component.ts");










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_3__["IonicSelectableModule"]],
        declarations: [_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["MultiFileUploadComponent"], _common_image_preview_directive__WEBPACK_IMPORTED_MODULE_7__["ImagePreviewDirective"], _listcontrol_listcontrol_component__WEBPACK_IMPORTED_MODULE_8__["ListcontrolComponent"], _listcontrolchkframwork_listcontrolchk_component__WEBPACK_IMPORTED_MODULE_9__["ListcontrolComponentChk"]],
        exports: [_multi_file_upload_multi_file_upload_component__WEBPACK_IMPORTED_MODULE_2__["MultiFileUploadComponent"], _common_image_preview_directive__WEBPACK_IMPORTED_MODULE_7__["ImagePreviewDirective"], _listcontrol_listcontrol_component__WEBPACK_IMPORTED_MODULE_8__["ListcontrolComponent"], _listcontrolchkframwork_listcontrolchk_component__WEBPACK_IMPORTED_MODULE_9__["ListcontrolComponentChk"]],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
        entryComponents: [
            _listcontrol_listcontrol_component__WEBPACK_IMPORTED_MODULE_8__["ListcontrolComponent"], _listcontrolchkframwork_listcontrolchk_component__WEBPACK_IMPORTED_MODULE_9__["ListcontrolComponentChk"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/listcontrol/listcontrol.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/listcontrol/listcontrol.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGNvbnRyb2wvbGlzdGNvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/listcontrol/listcontrol.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/listcontrol/listcontrol.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListcontrolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcontrolComponent", function() { return ListcontrolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");



let ListcontrolComponent = class ListcontrolComponent {
    constructor(loginservc) {
        this.loginservc = loginservc;
        this.defaultvalue = '';
        this.isall = false;
    }
    ngOnInit() {
        //console.log(this)
        this.listofitem = this.strToObj(this.listofitem);
        this.value = this.strToObj(this.value);
        this.defaultvalue = this.getListStringFormat(this.value);
        this.listofitem.map((litem) => {
            this.value.map((item) => {
                if (item.id === litem.id) {
                    //console.log(item,litem)
                    litem.ischecked = true;
                }
            });
        });
        if (this.listofitem.length === this.value.length) {
            this.isall = true;
        }
        else {
            this.isall = false;
        }
    }
    selectMember(item, event) {
        item.ischecked = event.detail.checked;
        this.getAllSelectedmember();
        this.loginservc.reportjson[this.inpname] = this.getListStringFormat(this.value);
        this.defaultvalue = this.getListStringFormat(this.value);
    }
    selectAllMember(event) {
        this.isall = event.detail.checked;
        //this.isall=!this.isall;
        this.value = this.listofitem;
        this.listofitem.map((litem) => {
            litem.ischecked = this.isall;
        });
        this.loginservc.reportjson[this.inpname] = this.getListStringFormat(this.value);
        this.defaultvalue = this.getListStringFormat(this.value);
        //console.log(this.isall)
    }
    getAllSelectedmember() {
        this.value = this.listofitem.filter((item) => item.ischecked);
    }
    getListStringFormat(list) {
        let s = '';
        list.map((item) => {
            s = s + '\'' + item.id + '\',';
        });
        if (s !== '') {
            s = '(' + s.substring(0, s.length - 1) + ')';
        }
        return s;
    }
    strToObj(str) {
        var obj = [];
        if (str && typeof str === 'string') {
            // var objStr = str.match(/\[(.)+\]/g);
            eval("obj =" + str);
        }
        return obj;
    }
};
ListcontrolComponent.ctorParameters = () => [
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListcontrolComponent.prototype, "listofitem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListcontrolComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListcontrolComponent.prototype, "inpname", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListcontrolComponent.prototype, "inpcaption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListcontrolComponent.prototype, "isall", void 0);
ListcontrolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listcontrol',
        template: __webpack_require__(/*! raw-loader!./listcontrol.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/listcontrol/listcontrol.component.html"),
        styles: [__webpack_require__(/*! ./listcontrol.component.scss */ "./src/app/components/listcontrol/listcontrol.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"]])
], ListcontrolComponent);



/***/ }),

/***/ "./src/app/components/listcontrolchkframwork/listcontrolchk.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/listcontrolchkframwork/listcontrolchk.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGNvbnRyb2xjaGtmcmFtd29yay9saXN0Y29udHJvbGNoay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/listcontrolchkframwork/listcontrolchk.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/listcontrolchkframwork/listcontrolchk.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListcontrolComponentChk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcontrolComponentChk", function() { return ListcontrolComponentChk; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _arvisitschedule_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../arvisitschedule/arvisitschedule.service */ "./src/app/arvisitschedule/arvisitschedule.service.ts");

var ListcontrolComponentChk_1;



let ListcontrolComponentChk = ListcontrolComponentChk_1 = class ListcontrolComponentChk {
    constructor(checklistservice) {
        this.checklistservice = checklistservice;
        this.listofitem = [];
        this.defaultvalue = '';
        this.isall = false;
        this.onChange = (value) => { };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(this)
            // this.listofitem =this.strToObj(this.listofitem);
            let body = {
                action: "getallselctordata",
                queid: this.question.questionid,
                quemaster: this.checklistservice.selectedinspection,
                orgid: "0"
            };
            this.checklistservice.getRequest(body).subscribe(data => {
                var response = data;
                this.listofitem = response.data;
                //console.log(this.listofitem);
            });
        });
    }
    writeValue(obj) {
        this.obj = obj;
        //this.file = null;
        // this.uploader.clearQueue();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onChange = fn;
    }
    setDisabledState(isDisabled) {
    }
    selectMember(item, event) {
        item.ischecked = event.detail.checked;
        this.getAllSelectedmember();
        this.question.ans = this.getListStringFormat(this.value);
        this.defaultvalue = this.getListStringFormat(this.value);
        this.writeValue(this.defaultvalue);
        this.myform.get(this.question.questionid).setValue(this.defaultvalue);
    }
    selectAllMember(event) {
        this.isall = event.detail.checked;
        //this.isall=!this.isall;
        this.value = this.listofitem;
        this.listofitem.map((litem) => {
            litem.ischecked = this.isall;
        });
        if (this.isall === false) {
            this.value = [];
        }
        this.question.ans = this.getListStringFormat(this.value);
        this.defaultvalue = this.getListStringFormat(this.value);
        this.writeValue(this.defaultvalue);
        this.myform.get(this.question.questionid).setValue(this.defaultvalue);
        //console.log(this.isall)
    }
    getAllSelectedmember() {
        this.value = this.listofitem.filter((item) => item.ischecked);
        if (this.value) {
        }
        else {
            this.value = '';
        }
    }
    getListStringFormat(list) {
        let s = '';
        list.map((item) => {
            s = s + '\'' + item.name + '\',';
        });
        if (s !== '') {
            s = '(' + s.substring(0, s.length - 1) + ')';
        }
        return s;
    }
    strToObj(str) {
        var obj = [];
        if (str && typeof str === 'string') {
            // var objStr = str.match(/\[(.)+\]/g);
            eval("obj =" + str);
        }
        return obj;
    }
};
ListcontrolComponentChk.ctorParameters = () => [
    { type: _arvisitschedule_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListcontrolComponentChk.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
], ListcontrolComponentChk.prototype, "myform", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListcontrolComponentChk.prototype, "isall", void 0);
ListcontrolComponentChk = ListcontrolComponentChk_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-listcontrolchk',
        template: __webpack_require__(/*! raw-loader!./listcontrolchk.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/listcontrolchkframwork/listcontrolchk.component.html"),
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: ListcontrolComponentChk_1,
                multi: true
            }
        ],
        styles: [__webpack_require__(/*! ./listcontrolchk.component.scss */ "./src/app/components/listcontrolchkframwork/listcontrolchk.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_arvisitschedule_arvisitschedule_service__WEBPACK_IMPORTED_MODULE_3__["ArvisitscheduleService"]])
], ListcontrolComponentChk);



/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-zone {\n  background-color: #f6f6f6;\n  border: dotted 3px #dedddd;\n  height: 30vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 20px 0;\n}\n\n.file-input-container {\n  text-align: center;\n  padding-left: 20px;\n}\n\n.file-input-container input[type=file] {\n  display: none;\n}\n\n.file-input-container label {\n  border: 1px solid #ccc;\n  padding: 6px 12px;\n  cursor: pointer;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n\n.img-container {\n  position: relative;\n}\n\n.topright {\n  position: absolute;\n  top: -8px;\n  right: 25px;\n  font-size: 18px;\n  color: red;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9jb21wb25lbnRzL211bHRpLWZpbGUtdXBsb2FkL211bHRpLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL211bHRpLWZpbGUtdXBsb2FkL211bHRpLWZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHSTtFQUNJLGFBQUE7QUNEUjs7QURJSTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRlI7O0FETUE7RUFDSSxzQkFBQTtBQ0hKOztBRFFBO0VBQ0ksa0JBQUE7QUNMSjs7QURRRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRFFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVsdGktZmlsZS11cGxvYWQvbXVsdGktZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC16b25lIHsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDsgXG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmZpbGUtaW5wdXQtY29udGFpbmVyIHtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cblxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ubnYtZmlsZS1vdmVyIHsgXG4gICAgYm9yZGVyOiBkb3R0ZWQgM3B4IHJlZDsgXG59XG5cblxuLy9JbWFnZVxuLmltZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLnRvcHJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogcmVkO1xuICB9XG4gIFxuICBpbWcgeyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgXG4gIH1cbiIsIi5kcm9wLXpvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IGRvdHRlZCAzcHggI2RlZGRkZDtcbiAgaGVpZ2h0OiAzMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmZpbGUtaW5wdXQtY29udGFpbmVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZpbGUtaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm52LWZpbGUtb3ZlciB7XG4gIGJvcmRlcjogZG90dGVkIDNweCByZWQ7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9wcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/multi-file-upload/multi-file-upload.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/multi-file-upload/multi-file-upload.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MultiFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiFileUploadComponent", function() { return MultiFileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");

var MultiFileUploadComponent_1;







let MultiFileUploadComponent = MultiFileUploadComponent_1 = class MultiFileUploadComponent {
    constructor(camera, file, msg, crop) {
        this.camera = camera;
        this.file = file;
        this.msg = msg;
        this.crop = crop;
        this.isOnlyCamera = false;
        //maxfile=0;
        this.allowedFileTypeoption = ["image", "pdf"];
        this.hasBaseDropZoneOver = false;
        this.isextrafiles = false;
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
        this.onChange = (uploader) => { };
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ queueLimit: this.maxfile !== undefined ? this.maxfile : this.msg.maxfile, allowedFileType: this.allowedFileTypeoption });
        if (this.myform && this.controlID) {
            this.uploader = this.myform.get(this.controlID).value;
        }
        this.uploader.onWhenAddingFileFailed = f => {
            if (this.msg.maxfile == this.uploader.queue.length || this.msg.maxfile < this.uploader.queue.length)
                this.isextrafiles = true;
        };
        this.uploader.onAfterAddingFile = f => {
            this.isextrafiles = false;
            //console.log('writevalue',this.uploader);
            this.writeValue(this.uploader);
            this.myform.get(this.controlID).setValue(this.uploader);
        };
    }
    ngOnInit() {
        if (this.myform && this.controlID) {
            // console.log('inside',this.myform.get(this.controlID).value);
            if (this.myform.get(this.controlID).value) {
                this.uploader = this.myform.get(this.controlID).value;
            }
        }
        if (this.maxfile !== undefined) {
            this.uploader.setOptions({ queueLimit: this.maxfile !== undefined ? this.maxfile : this.msg.maxfile, allowedFileType: this.allowedFileTypeoption });
        }
    }
    writeValue(obj) {
        this.obj = obj;
        //this.file = null;
        // this.uploader.clearQueue();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onChange = fn;
    }
    setDisabledState(isDisabled) {
    }
    removefiles() {
        this.uploader.clearQueue();
    }
    onfileuploadchange() {
    }
    // img1:[any];
    // onchangefile(){
    //    console.log("sada1");
    //    var that=this;
    //   // var reader = new FileReader();  
    //   // function readFile(index) {
    //   //   if( index >= files.length ) return;
    //   //   var file = files[index];
    //   //   reader.onload = function(e) {  
    //   //     // get file content  
    //   //     var bin=reader.result;
    //   //     if(index==0){
    //   //              that.img1=[bin];
    //   //            }
    //   //           else
    //   //           that.img1.push(bin);
    //   //     // do sth with bin
    //   //     readFile(index+1)
    //   //   }
    //   //   reader.readAsDataURL(file);
    //   // }
    //   // readFile(0);
    // ///////==================
    // // 
    // if(that.uploader.queue.length>0)
    // {
    // var reader = new FileReader();  
    // function readFile(index) {
    //   if( index >= that.uploader.queue.length ) return;
    //   var file = that.uploader.queue[index]._file;
    //   reader.onload = function(e) {  
    //     // get file content  
    //     var bin=reader.result;
    //     if(index==0){
    //       that.img1=[bin];
    //     }
    //     else
    //     that.img1.push(bin);
    //     // do sth with bin
    //     readFile(index+1)
    //   }
    //   reader.readAsDataURL(file);
    // }
    // readFile(0);
    // console.log("sada2");
    // }
    // ///////==================
    //   }
    removefile(i) {
        //  console.log("this.uploader.queue[i]",this.uploader.queue[i]);
        this.uploader.queue[i].remove();
    }
    getFiles() {
        console.log("Component: getFiles()");
        return this.uploader.queue.map((fileItem) => {
            return fileItem.file;
        });
    }
    fileOverBase(ev) {
        console.log("Component: fileOverBase()");
        this.hasBaseDropZoneOver = ev;
    }
    reorderFiles(reorderEvent) {
        console.log("Component: reorderFiles()");
        let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
        this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
    }
    //Capture Image from Camera
    takePicture() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var that = this;
            //  console.log("this.uploader.queue[0]._file",this.uploader.queue[0]._file);
            // this.imgfile=this.uploader.queue[0]._file;
            console.log("Component: takePicture()");
            const options = {
                quality: 50,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.CAMERA,
                targetWidth: 1500,
                targetHeight: 1500
            };
            this.camera.getPicture(options).then((imageData) => {
                this.cropImage(imageData);
            }, (err) => {
                console.log("err", err);
                // Handle error
            });
            //  console.log("File from camera:",varimageData);
            //  this.uploader.queue.push(FileItem)
            //var 
            //  var fileEntry= await this.file.resolveLocalFilesystemUrl(varimageData).then((entry:FileEntry) => 
            //        {
            //        entry.file(file=> {
            //         console.log("sdfsdf",file);
            //         this.uploader.addToQueue([file], { autoUpload: false });
            //         console.log("  this.uploader.addToQueue",  this.uploader.addToQueue);
            //       });
            //         return entry;
            //       });
            //   var varfile= new Promise<any>((resolve) => {
            //     fileEntry.file(
            //         meta =>
            //             resolve({
            //              meta
            //             })
            //     );
            // });
            // console.log("varentry:",varentry);
            //  const varfile = await varentry.file(file=> {
            //      console.log("sdfsdf",file);
            //     return file;
            //    });
            //       var filen={
            //         'end': 12885,
            //         'lastModified': 1614917601000,
            // 'lastModifiedDate': 1614917601000,
            // 'localURL': "cdvfile://localhost/cache-external/1614917601312.jpg",
            // name: "1614917601312.jpg",
            // size: 12885,
            // start: 0,
            // type: "image/jpeg",
            //       }
            // console.log("varfile:",varfile);
        });
    }
    getBlob(b64Data, contentType, sliceSize = 512) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        b64Data = b64Data.replace(/data\:image\/(jpeg|jpg|png)\;base64\,/gi, '');
        let byteCharacters = atob(b64Data);
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        let blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    blobToFile(theBlob, fileName) {
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
    }
    cropImage(fileUrl) {
        this.crop.crop(fileUrl, { quality: 50 })
            .then(newPath => {
            this.showCroppedImage(newPath.split('?')[0]);
        }, error => {
            //alert('Error cropping image' + error);
        });
    }
    showCroppedImage(ImagePath) {
        this.isLoading = true;
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        this.file.readAsDataURL(filePath, imageName).then(base64 => {
            this.croppedImagepath = base64;
            // console.log('cropped path',base64);
            let blob = this.getBlob(this.croppedImagepath, ".jpg");
            console.log("blob", blob);
            var filename = new Date().toISOString() + '.jpg';
            const file = this.blobToFile(blob, filename);
            this.uploader.addToQueue([file], { autoUpload: false });
            this.isLoading = false;
        }, error => {
            alert('Error in showing image' + error);
            this.isLoading = false;
        });
    }
};
MultiFileUploadComponent.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MultiFileUploadComponent.prototype, "someInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"])
], MultiFileUploadComponent.prototype, "myform", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MultiFileUploadComponent.prototype, "controlID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MultiFileUploadComponent.prototype, "isOnlyCamera", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MultiFileUploadComponent.prototype, "maxfile", void 0);
MultiFileUploadComponent = MultiFileUploadComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-multi-file-upload',
        template: __webpack_require__(/*! raw-loader!./multi-file-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/multi-file-upload/multi-file-upload.component.html"),
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
                useExisting: MultiFileUploadComponent_1,
                multi: true
            }
        ],
        styles: [__webpack_require__(/*! ./multi-file-upload.component.scss */ "./src/app/components/multi-file-upload/multi-file-upload.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
        src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_5__["Crop"]])
], MultiFileUploadComponent);



/***/ })

}]);
//# sourceMappingURL=default~arvisitschedule-section-section-module~arvisitschedule-sectionview-sectionview-module~newcus~d7a2d7f2-es2015.js.map