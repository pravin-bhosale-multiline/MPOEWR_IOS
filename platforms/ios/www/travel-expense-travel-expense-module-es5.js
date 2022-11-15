(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-expense-travel-expense-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/travel-expense/travel-expense.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/travel-expense/travel-expense.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Travel Expense</ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n        <form [formGroup]=\"travelExpenseForm\" (ngSubmit)=\"onSaveTravelExpense(travelExpenseForm.value)\">\n          <ion-card>\n            <ion-card-content>\n              <h5 ion-text class=\"text-primary\">\n                <ion-icon name=\"person\"></ion-icon>\n              </h5>\n              <ion-row>\n                <ion-col>\n              <ion-item>\n                <ion-label  position=\"stacked\">Sales Person</ion-label>\n                <ion-input type=\"text\" [formControl]=\"travelExpenseForm.controls['salesperson']\" [(ngModel)]=\"txtSalesPerson\" disabled=\"true\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <!-- <ion-item>\n                <ion-label position=\"fixed\">Plan</ion-label>\n\n                <ionic-selectable placeholder=\"Select Plan\"\n                                  [formControl]=\"travelExpenseForm.controls['selectedPlanListUIControl']\"\n                                  [items]=\"planMasterList\" \n                                  itemValueField=\"id\" \n                                  itemTextField=\"name\" \n                                  [canSearch]=\"true\"\n                                  (onSearch)=\"onPlanDropDownSearch($event)\"\n                                  (onChange)=\"onPlanDropDownChange($event.component.value)\"> \n                </ionic-selectable>\n              </ion-item> -->\n\n              <ion-item>\n                <ion-label  position=\"stacked\">Plan</ion-label>\n\n                <ion-select [formControl]=\"travelExpenseForm.controls['selectedPlanListUIControl']\" interface=\"popover\" multiple=\"false\" (ionChange)=\"onChangeplan()\" placeholder=\"Select Plan\">\n                  <ion-select-option *ngFor=\"let plan of salespersoninfo\" [value]=\"plan\">{{plan.plan}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n\n              <ion-item>\n                <ion-label  position=\"stacked\">From Date</ion-label>\n                <ion-datetime placeholder=\"Select Date\" disabled=\"true\" [formControl]=\"travelExpenseForm.controls['fromdate']\" (ionChange)=\"ondatechange()\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label  position=\"stacked\">To Date</ion-label>\n                <ion-datetime placeholder=\"Select Date\" disabled=\"true\" [formControl]=\"travelExpenseForm.controls['todate']\" (ionChange)=\"ondatechange()\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label  position=\"stacked\">Home Lat</ion-label>\n                <ion-input type=\"text\" [formControl]=\"travelExpenseForm.controls['homelat']\" [(ngModel)]=\"latitude\" disabled=\"true\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label  position=\"stacked\">Home Long</ion-label>\n                <ion-input type=\"text\" [formControl]=\"travelExpenseForm.controls['homelong']\" [(ngModel)]=\"longitude\"  disabled=\"true\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Outstation?</ion-label>\n                <ion-checkbox  slot=\"end\" disabled=\"true\" [checked]=\"outstation_chk_box\" [formControl]=\"travelExpenseForm.controls['outstationChkCtrl']\"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"8\">\n                  <h5 ion-text class=\"text-primary\">\n                    <ion-icon name=\"wifi\"></ion-icon>Expense Detail\n                  </h5>\n                </ion-col>\n                <ion-col *ngIf=\"selectedplan?.isactual!='N'\">\n                  <!-- <ion-col> -->\n                  <ion-fab-button size=\"small\" float-right (click)=\"onAddExpense()\">\n                    <ion-icon name=\"add\"></ion-icon>\n                  </ion-fab-button>\n                </ion-col>\n              </ion-row>\n\n              <div style=\"overflow-x:auto\">\n                <ion-grid>\n\n              \n\n\n                 <ion-row nowrap >\n                  <ion-col nowrap>\n                  <ion-row nowrap>\n                    <ion-col size=\"1\" class=\"grid-header\"></ion-col>\n                    <ion-col size=\"4\" class=\"grid-header\">From</ion-col>\n                   <ion-col size=\"4\" class=\"grid-header\">To</ion-col>\n                   <ion-col size=\"4\" class=\"grid-header\">Travel Expense</ion-col>\n                   <ion-col size=\"4\" class=\"grid-header\">Amount</ion-col>\n                   <ion-col size=\"5\" class=\"grid-header\">Claimable Amount</ion-col>\n                   <ion-col size=\"5\" class=\"grid-header\">Supporting</ion-col>\n          \n                  </ion-row>\n                </ion-col>\n                 </ion-row>\n                \n                 <ion-row *ngFor=\"let data of expenseList; index as i\"  nowrap>\n                  <ion-col nowrap>\n                 <ion-row nowrap>\n                    \n                    <ion-col size=\"1\" style=\"width: 100%; text-align: right;\">\n                      <ion-icon name=\"trash\" (click)=\"removerow(data)\" style=\"font-size: x-large;\n                      color: red;\"></ion-icon>\n                    </ion-col>\n                  <ion-col size=\"4\" class=\"forecast_div\">{{data.fromdate}}</ion-col>\n                  <ion-col size=\"4\" class=\"forecast_div\">{{data.todate}}</ion-col>\n                  <ion-col size=\"4\" class=\"forecast_div\">{{data.travelexpense?.sname}}</ion-col>\n                  <ion-col  size=\"4\"class=\"forecast_div\">{{data.amount}}</ion-col>\n                  <ion-col size=\"5\" class=\"forecast_div\">{{data.claimableamount}}</ion-col>\n                  <ion-col size=\"3\" style=\"text-align: -webkit-center;\">\n                    <img [src]=\"'data:image/jpeg;base64,'+data.Supporting\" *ngIf=\"data.Supporting\" style=\"width: 35px; height: 35px;\">\n                  </ion-col>\n                  \n          \n                  </ion-row>\n                 \n                </ion-col>\n                  </ion-row>\n               \n          \n                </ion-grid>     \n              </div>\n            </ion-card-content>\n          </ion-card>\n\n      </form>\n          <ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom\" type=\"submit\"\n            [disabled]=\"!travelExpenseForm.valid || !IsexpenseListlength\" (click)=\"onSaveTravelExpense(travelExpenseForm.value)\">\n            Save Expenses\n          </ion-button>    \n  \n     \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/travel-expense/travel-expense.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel-expense/travel-expense.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelExpensePageModule", function() { return TravelExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _travel_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-expense.page */ "./src/app/travel-expense/travel-expense.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var routes = [
    {
        path: '',
        component: _travel_expense_page__WEBPACK_IMPORTED_MODULE_6__["TravelExpensePage"]
    }
];
var TravelExpensePageModule = /** @class */ (function () {
    function TravelExpensePageModule() {
    }
    TravelExpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_travel_expense_page__WEBPACK_IMPORTED_MODULE_6__["TravelExpensePage"]]
        })
    ], TravelExpensePageModule);
    return TravelExpensePageModule;
}());



/***/ }),

/***/ "./src/app/travel-expense/travel-expense.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/travel-expense/travel-expense.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forecast_div {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  height: 20vw;\n  font-size: 0.8em;\n  font-weight: 300;\n}\n\n.grid-header {\n  font-weight: bold;\n}\n\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\n\nh5 ion-icon {\n  color: lightcoral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC90cmF2ZWwtZXhwZW5zZS90cmF2ZWwtZXhwZW5zZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYXZlbC1leHBlbnNlL3RyYXZlbC1leHBlbnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREZFO0VBQ0UsaUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3RyYXZlbC1leHBlbnNlL3RyYXZlbC1leHBlbnNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JlY2FzdF9kaXZ7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGhlaWdodDoyMHZ3O1xuICAgIGZvbnQtc2l6ZTowLjhlbTtcbiAgICBmb250LXdlaWdodDozMDA7XG59XG4uZ3JpZC1oZWFkZXJ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaDV7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGNvbG9yOiBkYXJrY3lhbjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgaW9uLWljb257XG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XG4gIH1cblxufSIsIi5mb3JlY2FzdF9kaXYge1xuICBvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgaGVpZ2h0OiAyMHZ3O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZ3JpZC1oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaDUge1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogZGFya2N5YW47XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5oNSBpb24taWNvbiB7XG4gIGNvbG9yOiBsaWdodGNvcmFsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/travel-expense/travel-expense.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel-expense/travel-expense.page.ts ***!
  \*******************************************************/
/*! exports provided: TravelExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelExpensePage", function() { return TravelExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _travel_expense_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-expense.service */ "./src/app/travel-expense/travel-expense.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");









var TravelExpensePage = /** @class */ (function () {
    function TravelExpensePage(travelExpenseFromBuilder, platform, loginService, travelExpenseService, commonfun, router, route, msg) {
        this.travelExpenseFromBuilder = travelExpenseFromBuilder;
        this.platform = platform;
        this.loginService = loginService;
        this.travelExpenseService = travelExpenseService;
        this.commonfun = commonfun;
        this.router = router;
        this.route = route;
        this.msg = msg;
        // This variable will hold the class name.
        this.TAG = 'Travel Expense Page';
        this.expenseList = null;
        this.IsexpenseListlength = false;
        this.outstation_chk_box = false;
        this.validation_messages = {
            'selectedPlanListUIControl': [{ type: 'required', message: ' *Please Select Plan.' }],
            'selectedBPaddressshipping': [{ type: 'required', message: '*Please Select Shipping Address.' }],
            'txtAmount': [{ type: 'required', message: '*Please Enter Expense Amount.' }]
        };
        this.getrout();
        this.travelExpenseForm = this.travelExpenseFromBuilder.group({
            salesperson: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fromdate: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            todate: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            homelat: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            homelong: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedPlanListUIControl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            outstationChkCtrl: []
        });
    }
    TravelExpensePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getsalesperson();
                return [2 /*return*/];
            });
        });
    };
    TravelExpensePage.prototype.removerow = function (post) {
        try {
            // console.log("removerow")
            var result = this.expenseList.filter(function (item) { return item != post; });
            this.expenseList = result;
            this.chklength();
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    TravelExpensePage.prototype.chklength = function () {
        try {
            if (this.expenseList.length > 0)
                this.IsexpenseListlength = true;
            else
                this.IsexpenseListlength = false;
        }
        catch (error) {
            this.IsexpenseListlength = false;
        }
    };
    TravelExpensePage.prototype.getrout = function () {
        var _this = this;
        try {
            this.route.params.subscribe(function (params) {
                if (_this.router.getCurrentNavigation().extras.state) {
                    _this.expenseList = _this.router.getCurrentNavigation().extras.state.expenseList;
                    _this.chklength();
                }
            });
        }
        catch (error) {
            // console.log("addsublead()-ERROR:",error);
        }
    };
    TravelExpensePage.prototype.onAddExpense = function () {
        try {
            var navigationExtras = {
                state: {
                    expenseList: this.expenseList,
                    selectedplan: this.selectedplan,
                    expenseMasterList: this.expenseMasterList
                }
            };
            this.router.navigate(['addedit-travel-expense'], navigationExtras);
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    /**
     * @kind function
     * @summary This method will get sales person.
     * @since 1.0.0
     * @returns void
     * @public
     * @module Travel Expense
     * @author Nilesh Patil
     */
    TravelExpensePage.prototype.getsalesperson = function () {
        var _this = this;
        var methodTAG = 'getsalesperson';
        try {
            //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
            this.commonfun.loadingPresent();
            this.travelExpenseService.getWMobileTravelExpenseList().subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data;
                //  console.log("Travle REs",data);
                _this.salespersoninfo = response;
                _this.txtSalesPerson = _this.salespersoninfo[0].salesperson;
                _this.planMasterList = _this.salespersoninfo;
                _this.latitude = _this.salespersoninfo[0].latitude;
                _this.longitude = _this.salespersoninfo[0].longitude;
                _this.travelExpenseForm.controls["fromdate"].setValue(_this.salespersoninfo[0].fromdate);
                _this.travelExpenseForm.controls["todate"].setValue(_this.salespersoninfo[0].todate);
            }, function (error) {
                //  console.log(this.TAG,methodTAG,error)
                _this.commonfun.loadingDismiss();
                _this.commonfun.presentAlert("Message", "Error", error.error);
            });
        }
        catch (error) {
            this.commonfun.loadingDismiss();
            //  console.log(this.TAG,methodTAG,error)
            this.commonfun.presentAlert("Message", "Error", error.error);
        }
    };
    TravelExpensePage.prototype.onSaveTravelExpense = function (val) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var methodTAG, jsondatatemp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                methodTAG = 'onSaveTravelExpense';
                this.commonfun.loadingPresent(null, 60000);
                try {
                    // this.Dateconversion();
                    this.strfromdate = this.commonfun.Dateconversionddmmyyyy(val.fromdate);
                    this.strtodate = this.commonfun.Dateconversionddmmyyyy(val.todate);
                    this.strfromdated = this.commonfun.Dateconversionddmmyyyy(val.fromdated);
                    this.strtodated = this.commonfun.Dateconversionddmmyyyy(val.todated);
                    jsondatatemp = {
                        "salesperson": this.salespersoninfo[0].salesperson,
                        "salespersonid": this.salespersoninfo[0].salespersonid,
                        "expenseList": this.expenseList,
                        "longitude": this.salespersoninfo[0].longitude,
                        "latitude": this.salespersoninfo[0].latitude,
                        "todate": this.strtodate,
                        "fromdate": this.strfromdate,
                        "plan": this.selectedplan.plan,
                        "mexp_visitplan_id": this.selectedplan.mexp_visitplan_id,
                    };
                    //--------------
                    this.travelExpenseService.SaveWMobileTravelExpense(jsondatatemp).subscribe(function (data) {
                        _this.commonfun.loadingDismiss();
                        if (data != null) {
                            _this.saveplanresponse = data;
                            if (_this.saveplanresponse.resposemsg == "Success") {
                                _this.commonfun.presentAlert("Message", _this.saveplanresponse.resposemsg, _this.saveplanresponse.logmsg);
                                _this.Resetpage();
                            }
                            else {
                                _this.commonfun.presentAlert("Message", _this.saveplanresponse.resposemsg, _this.saveplanresponse.logmsg);
                            }
                        }
                    }, function (error) {
                        _this.commonfun.loadingDismiss();
                        _this.commonfun.presentAlert("Message", "Error!", error.error.text);
                    });
                    //------------------
                }
                catch (error) {
                    this.commonfun.loadingDismiss();
                }
                return [2 /*return*/];
            });
        });
    };
    TravelExpensePage.prototype.Resetpage = function () {
        try {
            this.travelExpenseForm.reset();
            this.expenseList = null;
            this.getsalesperson();
            this.chklength();
        }
        catch (error) {
        }
    };
    TravelExpensePage.prototype.onChangeplan = function () {
        var _this = this;
        //  console.log("onChangeplan");
        try {
            //  console.log("selectedplan",this.formactualtravel.controls["selectedplan"].value);
            this.selectedplan = this.travelExpenseForm.controls["selectedPlanListUIControl"].value;
            this.commonfun.loadingPresent();
            this.travelExpenseService.getWMobileTravelExpenseList(this.selectedplan.mexp_visitplan_id).subscribe(function (data) {
                _this.commonfun.loadingDismiss();
                var response = data;
                if (response.length === 0) {
                    return;
                }
                if (response[0].isactual != 'Y') {
                    _this.commonfun.presentAlert("Message", "Alert", "Expense is not applicable for this plan.");
                }
                _this.expenseMasterList = response[0].TravelType;
                _this.expenseList = response[0].expenseList;
                //console.log("Travle Exp",this.selectedplan);
                if (response[0].outstation == 'Y') {
                    _this.outstation_chk_box = true;
                }
                else {
                    _this.outstation_chk_box = false;
                }
                _this.chklength();
                var a1 = response[0].fromdate.split("-");
                var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
                _this.travelExpenseForm.controls["fromdate"].setValue(dt.toISOString());
                var a2 = response[0].todate.split("-");
                var dt2 = new Date(a2[2] + '-' + a2[1] + '-' + a2[0] + 'T00:00Z');
                _this.travelExpenseForm.controls["todate"].setValue(dt2.toISOString());
            });
        }
        catch (error) {
        }
    };
    TravelExpensePage.prototype.ondatechange = function () {
        var methodTAG = 'ondatechange';
        try {
        }
        catch (error) {
        }
    };
    TravelExpensePage.prototype.onPlanDropDownSearch = function () {
        var methodTAG = 'onPlanDropDownSearch';
        try {
        }
        catch (error) {
        }
    };
    TravelExpensePage.prototype.onPlanDropDownChange = function () {
        var methodTAG = 'onPlanDropDownChange';
        try {
        }
        catch (error) {
        }
    };
    TravelExpensePage.prototype.onExpenseDropDownSearch = function () {
        var methodTAG = 'onExpenseDropDownSearch';
        try {
        }
        catch (error) {
        }
    };
    TravelExpensePage.prototype.onExpenseDropDownChange = function () {
        var methodTAG = 'onExpenseDropDownChange';
        try {
        }
        catch (error) {
        }
    };
    TravelExpensePage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
        { type: _travel_expense_service__WEBPACK_IMPORTED_MODULE_5__["TravelExpenseService"] },
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"] }
    ]; };
    TravelExpensePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travel-expense',
            template: __webpack_require__(/*! raw-loader!./travel-expense.page.html */ "./node_modules/raw-loader/index.js!./src/app/travel-expense/travel-expense.page.html"),
            styles: [__webpack_require__(/*! ./travel-expense.page.scss */ "./src/app/travel-expense/travel-expense.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"],
            _travel_expense_service__WEBPACK_IMPORTED_MODULE_5__["TravelExpenseService"],
            _provider_commonfun__WEBPACK_IMPORTED_MODULE_6__["Commonfun"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"]])
    ], TravelExpensePage);
    return TravelExpensePage;
}());



/***/ })

}]);
//# sourceMappingURL=travel-expense-travel-expense-module-es5.js.map