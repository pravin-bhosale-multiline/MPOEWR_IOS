(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["selectorsingle-selectorsingle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/selectorsingle/selectorsingle.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/selectorsingle/selectorsingle.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Selection</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"report\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label  color=\"primary\" position=\"stacked\" >{{txtCaption}}</ion-label>\n    <ionic-selectable #id1 [(ngModel)]=\"selecteddata\" itemValueField=\"id\" itemTextField=\"name\" [items]=\"filterdata\"\n      [canSearch]=\"true\" [hasInfiniteScroll]=\"true\" (onSearch)=\"onSearchChange($event)\" (onClose)=\"onSubmitSingleSelection()\"\n      (onInfiniteScroll)=\"doInfinite($event)\" [isMultiple]=\"ismultiselect\">\n    </ionic-selectable>\n  </ion-item>\n  <ion-button size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"onSubmitSingleSelection()\">\n    Submit\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/selectorsingle/selectorsingle-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/selectorsingle/selectorsingle-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectorsinglePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorsinglePageRoutingModule", function() { return SelectorsinglePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _selectorsingle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorsingle.page */ "./src/app/selectorsingle/selectorsingle.page.ts");




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

/***/ "./src/app/selectorsingle/selectorsingle.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/selectorsingle/selectorsingle.module.ts ***!
  \*********************************************************/
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
/* harmony import */ var _selectorsingle_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectorsingle-routing.module */ "./src/app/selectorsingle/selectorsingle-routing.module.ts");
/* harmony import */ var _selectorsingle_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorsingle.page */ "./src/app/selectorsingle/selectorsingle.page.ts");








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

/***/ "./src/app/selectorsingle/selectorsingle.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/selectorsingle/selectorsingle.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdG9yc2luZ2xlL3NlbGVjdG9yc2luZ2xlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/selectorsingle/selectorsingle.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/selectorsingle/selectorsingle.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectorsinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorsinglePage", function() { return SelectorsinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selectorsingle/selectorsingleservice.service */ "./src/app/selectorsingle/selectorsingleservice.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");






let SelectorsinglePage = class SelectorsinglePage {
    constructor(singleselservc, route, loginservc, router) {
        this.singleselservc = singleselservc;
        this.route = route;
        this.loginservc = loginservc;
        this.router = router;
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
            this.rptid = params['rptid'];
            this.scontrolname = params['scontrolname'];
            this.controltype = params['controltype'];
            if (this.controltype === 'LST') {
                this.ismultiselect = true;
            }
            else {
                this.ismultiselect = false;
            }
            this.singleselservc.json['scontrolname'] = this.scontrolname;
            this.singleselservc.json['text'] = '';
            this.singleselservc.json['offset'] = 0;
            this.singleselservc.pageOffset = 0;
            this.singleselservc.getData(this.singleselservc.json).subscribe(data => {
                console.log('singleselect', data);
                this.data = data['data'];
                this.filterdata = data['data'];
                this.pagerow = this.getpagenofromlist(data['data']);
                this.totalrow = data['totalRows'];
                this.id1.open();
            });
        });
    }
    onSubmitSingleSelection() {
        if (this.ismultiselect) {
            let strmultivaluedata = '';
            for (let value of this.selecteddata) {
                strmultivaluedata = strmultivaluedata + '\'' + value.id + '\',';
            }
            strmultivaluedata = '(' + strmultivaluedata.substring(0, strmultivaluedata.length - 1) + ')';
            this.singleselservc.json[this.scontrolname] = strmultivaluedata;
            // console.log(strmultivaluedata);
        }
        else {
            this.singleselservc.json[this.scontrolname] = this.selecteddata.id;
        }
        // console.log(this.singleselservc.json);
        this.router.navigate(['/report', this.rptid]);
    }
    onSearchChange(event) {
        let text = event.text.trim().toLowerCase();
        this.singleselservc.json['offset'] = 0;
        // Reset items back to all of the items
        //this.filterdata = this.data;
        // if the value is an empty string don't filter the items
        if (text && text.trim() !== '') {
            if (text.length > 2) {
                this.singleselservc.json['text'] = text;
                this.singleselservc.getData(this.singleselservc.json).subscribe(data => {
                    // this.data = data['data'];
                    this.filterdata = data['data'];
                    this.pagerow = this.getpagenofromlist(data['data']);
                    this.totalrow = data['totalRows'];
                });
            }
        }
        else {
            this.singleselservc.json['text'] = text;
            this.singleselservc.getData(this.singleselservc.json).subscribe(data => {
                this.data = data['data'];
                this.filterdata = data['data'];
                this.pagerow = this.getpagenofromlist(data['data']);
                this.totalrow = data['totalRows'];
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
                    if (text) {
                        this.singleselservc.json['text'] = text;
                    }
                    let tempData = yield (yield this.singleselservc.getData(this.singleselservc.json)).toPromise();
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
    { type: _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_4__["SelectorsingleserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("id1", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic_selectable__WEBPACK_IMPORTED_MODULE_3__["IonicSelectableComponent"])
], SelectorsinglePage.prototype, "id1", void 0);
SelectorsinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selectorsingle',
        template: __webpack_require__(/*! raw-loader!./selectorsingle.page.html */ "./node_modules/raw-loader/index.js!./src/app/selectorsingle/selectorsingle.page.html"),
        styles: [__webpack_require__(/*! ./selectorsingle.page.scss */ "./src/app/selectorsingle/selectorsingle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_4__["SelectorsingleserviceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SelectorsinglePage);



/***/ })

}]);
//# sourceMappingURL=selectorsingle-selectorsingle-module-es2015.js.map