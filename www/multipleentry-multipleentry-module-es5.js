(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multipleentry-multipleentry-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/multipleentry/multipleentry.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/multipleentry/multipleentry.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Multiple Entry</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"section\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"myForm\">\n    <ion-item *ngFor=\"let control of myForm.controls | keyvalue\">\n      <ion-input\n        required\n        type=\"text\"\n        [formControlName]=\"control.key\"\n        placeHolder=\"Enter Value...\"\n      ></ion-input>\n      <ion-icon (click)=\"removeControl(control)\" name=\"close-circle\"></ion-icon>\n    </ion-item>\n  </form>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"addControl()\">Add Input</ion-button>\n  <ion-button expand=\"full\" color=\"primary\" [disabled]=\"!myForm.valid\" (click)=\"onSubmit()\">Submit</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/multipleentry/multipleentry-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/multipleentry/multipleentry-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MultipleentryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleentryPageRoutingModule", function() { return MultipleentryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _multipleentry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multipleentry.page */ "./src/app/multipleentry/multipleentry.page.ts");




var routes = [
    {
        path: '',
        component: _multipleentry_page__WEBPACK_IMPORTED_MODULE_3__["MultipleentryPage"]
    }
];
var MultipleentryPageRoutingModule = /** @class */ (function () {
    function MultipleentryPageRoutingModule() {
    }
    MultipleentryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MultipleentryPageRoutingModule);
    return MultipleentryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/multipleentry/multipleentry.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/multipleentry/multipleentry.module.ts ***!
  \*******************************************************/
/*! exports provided: MultipleentryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleentryPageModule", function() { return MultipleentryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _multipleentry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multipleentry-routing.module */ "./src/app/multipleentry/multipleentry-routing.module.ts");
/* harmony import */ var _multipleentry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multipleentry.page */ "./src/app/multipleentry/multipleentry.page.ts");







var MultipleentryPageModule = /** @class */ (function () {
    function MultipleentryPageModule() {
    }
    MultipleentryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _multipleentry_routing_module__WEBPACK_IMPORTED_MODULE_5__["MultipleentryPageRoutingModule"]
            ],
            declarations: [_multipleentry_page__WEBPACK_IMPORTED_MODULE_6__["MultipleentryPage"]]
        })
    ], MultipleentryPageModule);
    return MultipleentryPageModule;
}());



/***/ }),

/***/ "./src/app/multipleentry/multipleentry.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/multipleentry/multipleentry.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpcGxlZW50cnkvbXVsdGlwbGVlbnRyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/multipleentry/multipleentry.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/multipleentry/multipleentry.page.ts ***!
  \*****************************************************/
/*! exports provided: MultipleentryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleentryPage", function() { return MultipleentryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MultipleentryPage = /** @class */ (function () {
    function MultipleentryPage(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.noofcontrol = 1;
        this.myForm = formBuilder.group({
            control1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    MultipleentryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.question = _this.router.getCurrentNavigation().extras.state.question;
            }
        });
    };
    MultipleentryPage.prototype.addControl = function () {
        this.noofcontrol = this.noofcontrol + 1;
        this.myForm.addControl('control' + this.noofcontrol, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
    };
    MultipleentryPage.prototype.removeControl = function (control) {
        this.myForm.removeControl(control.key);
        this.noofcontrol = this.noofcontrol - 1;
    };
    MultipleentryPage.prototype.onSubmit = function () {
        var _this = this;
        var finalvalue = '';
        Object.keys(this.myForm.controls).forEach(function (key) {
            finalvalue = finalvalue + ',' + _this.myForm.get(key).value;
        });
        this.question.ans = finalvalue.substring(1);
        var navigationExtras = {
            state: {
                question: this.question
            }
        };
        this.router.navigate(['section'], navigationExtras);
    };
    MultipleentryPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MultipleentryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multipleentry',
            template: __webpack_require__(/*! raw-loader!./multipleentry.page.html */ "./node_modules/raw-loader/index.js!./src/app/multipleentry/multipleentry.page.html"),
            styles: [__webpack_require__(/*! ./multipleentry.page.scss */ "./src/app/multipleentry/multipleentry.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MultipleentryPage);
    return MultipleentryPage;
}());



/***/ })

}]);
//# sourceMappingURL=multipleentry-multipleentry-module-es5.js.map