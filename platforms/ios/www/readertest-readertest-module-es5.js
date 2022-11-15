(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["readertest-readertest-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/readertest/readertest.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/readertest/readertest.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>readertest</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ion-padding ion-text-center\">\n    <div *ngIf=\"message\" style=\"margin: 10px 0; padding:20px\">{{message}}</div>\n    <button style=\"margin-bottom: 40px; padding: 20px; width: 100%; color: #ffffff;\" \n    [ngStyle]=\"{'background': status == 'disabled' ? 'darkred' : 'darkgreen'}\" \n    (click)=\"status == 'disabled' ? enable() : disable()\">SCAN READER IS {{status == 'disabled' ? 'DISABLED' : 'ENABLED' }}</button>\n    <button *ngIf=\"status == 'enabled'\" \n    style=\"margin-bottom: 10px; padding: 20px; background: purple; color: #ffffff; width: 100%;\" \n    (touchstart)=\"scanPressed()\" (touchend)=\"scanReleased()\">CLICK AND HOLD TO SCAN</button>\n    <ul>\n      <li *ngFor=\"let code of barcodes\">{{code}}<br></li>\n    </ul>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/readertest/readertest.module.ts":
/*!*************************************************!*\
  !*** ./src/app/readertest/readertest.module.ts ***!
  \*************************************************/
/*! exports provided: ReadertestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadertestPageModule", function() { return ReadertestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _readertest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./readertest.page */ "./src/app/readertest/readertest.page.ts");







var routes = [
    {
        path: '',
        component: _readertest_page__WEBPACK_IMPORTED_MODULE_6__["ReadertestPage"]
    }
];
var ReadertestPageModule = /** @class */ (function () {
    function ReadertestPageModule() {
    }
    ReadertestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_readertest_page__WEBPACK_IMPORTED_MODULE_6__["ReadertestPage"]]
        })
    ], ReadertestPageModule);
    return ReadertestPageModule;
}());



/***/ }),

/***/ "./src/app/readertest/readertest.page.scss":
/*!*************************************************!*\
  !*** ./src/app/readertest/readertest.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlYWRlcnRlc3QvcmVhZGVydGVzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/readertest/readertest.page.ts":
/*!***********************************************!*\
  !*** ./src/app/readertest/readertest.page.ts ***!
  \***********************************************/
/*! exports provided: ReadertestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadertestPage", function() { return ReadertestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReadertestPage = /** @class */ (function () {
    function ReadertestPage(ngZone) {
        this.ngZone = ngZone;
        this.window = window;
        this.message = null;
        this.barcodes = [];
        this.status = 'Initialization... Are you on device?';
    }
    ReadertestPage.prototype.ngOnInit = function () {
        this.listen();
    };
    ReadertestPage.prototype.scanPressed = function () {
        var _this = this;
        this.window.plugins.honeywell.softwareTriggerStart(function (data) {
            _this.ngZone.run(function () {
                _this.barcodes = ['${data} @ ${new Date().toISOString().replace(/[T,Z]/g, " ").split(\'.\')[0]}'].concat(_this.barcodes);
            });
        }, function (error) {
            _this.ngZone.run(function () {
                _this.barcodes = ['${error} @ ${new Date().toISOString().replace(/[T,Z]/g, " ").split(\'.\')[0]}'].concat(_this.barcodes);
            });
        });
    };
    ReadertestPage.prototype.scanReleased = function () {
        this.window.plugins.honeywell.softwareTriggerStop();
    };
    ReadertestPage.prototype.listen = function () {
        var _this = this;
        this.status = "enabled";
        this.window.plugins.honeywell.listen(function (data) {
            _this.ngZone.run(function () {
                _this.barcodes = [data + " @ " + new Date().toISOString().replace(/[T,Z]/g, ' ').split('.')[0]].concat(_this.barcodes);
            });
        }, function (error) {
            _this.ngZone.run(function () {
                _this.barcodes = [error + " @ " + new Date().toISOString().replace(/[T,Z]/g, ' ').split('.')[0]].concat(_this.barcodes);
            });
        });
    };
    ReadertestPage.prototype.disable = function () {
        var _this = this;
        this.status = "disabled";
        this.window.plugins.honeywell.release(function (success) {
            _this.message = "DISABLE_SUCCESS: " + success;
        }, function (error) {
            _this.message = "DISABLE_ERROR: " + error;
        });
    };
    ReadertestPage.prototype.enable = function () {
        var _this = this;
        this.status = 'enabled';
        this.window.plugins.honeywell.claim(function (success) {
            _this.message = "ENABLE_SUCCESS: " + success;
            _this.listen();
        }, function (error) {
            _this.message = "ENABLE_ERROR " + error;
        });
    };
    ReadertestPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ReadertestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-readertest',
            template: __webpack_require__(/*! raw-loader!./readertest.page.html */ "./node_modules/raw-loader/index.js!./src/app/readertest/readertest.page.html"),
            styles: [__webpack_require__(/*! ./readertest.page.scss */ "./src/app/readertest/readertest.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ReadertestPage);
    return ReadertestPage;
}());



/***/ })

}]);
//# sourceMappingURL=readertest-readertest-module-es5.js.map