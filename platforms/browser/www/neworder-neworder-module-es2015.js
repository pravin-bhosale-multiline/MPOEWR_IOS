(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["neworder-neworder-module"],{

/***/ "./src/app/neworder/neworder.module.ts":
/*!*********************************************!*\
  !*** ./src/app/neworder/neworder.module.ts ***!
  \*********************************************/
/*! exports provided: NeworderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeworderPageModule", function() { return NeworderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../product-list/product-list.module */ "./src/app/product-list/product-list.module.ts");
/* harmony import */ var _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../product-list/product-list.page */ "./src/app/product-list/product-list.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _neworder_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./neworder.page */ "./src/app/neworder/neworder.page.ts");
/* harmony import */ var _common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/pipes/pipes.module */ "./src/app/common/pipes/pipes.module.ts");
/* harmony import */ var _custom_alert_custom_alert_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../custom-alert/custom-alert.page */ "./src/app/custom-alert/custom-alert.page.ts");












const routes = [
    {
        path: '',
        component: _neworder_page__WEBPACK_IMPORTED_MODULE_9__["NeworderPage"]
    }
];
let NeworderPageModule = class NeworderPageModule {
};
NeworderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _product_list_product_list_module__WEBPACK_IMPORTED_MODULE_1__["ProductListPageModule"]
        ],
        declarations: [_neworder_page__WEBPACK_IMPORTED_MODULE_9__["NeworderPage"], _custom_alert_custom_alert_page__WEBPACK_IMPORTED_MODULE_11__["CustomAlertPage"]],
        entryComponents: [_custom_alert_custom_alert_page__WEBPACK_IMPORTED_MODULE_11__["CustomAlertPage"], _product_list_product_list_page__WEBPACK_IMPORTED_MODULE_2__["ProductListPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], NeworderPageModule);



/***/ })

}]);
//# sourceMappingURL=neworder-neworder-module-es2015.js.map