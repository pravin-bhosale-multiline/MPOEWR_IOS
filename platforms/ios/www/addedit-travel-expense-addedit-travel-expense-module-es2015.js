(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addedit-travel-expense-addedit-travel-expense-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addedit-travel-expense/addedit-travel-expense.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addedit-travel-expense/addedit-travel-expense.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-title>Add Expense</ion-title>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <form [formGroup]=\"travelExpenseFormedit\" (ngSubmit)=\"onAdd(travelExpenseFormedit.value)\">\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <h5 ion-text class=\"text-primary\">\n            <ion-icon name=\"wifi\"></ion-icon> Expense Detail\n          </h5>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n\n      <ion-item>\n        <ion-label  position=\"stacked\">From Date</ion-label>\n        <ion-datetime placeholder=\"Select Date\" [formControl]=\"travelExpenseFormedit.controls['fromdate']\" (ionChange)=\"ondatechange()\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label  position=\"stacked\">To Date</ion-label>\n        <ion-datetime placeholder=\"Select Date\" [formControl]=\"travelExpenseFormedit.controls['todate']\" (ionChange)=\"ondatechange()\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n       \n        <ion-label position=\"stacked\">Travel Expense</ion-label>\n\n        <ion-select [formControl]=\"travelExpenseFormedit.controls['selectableTravelExpenseUIControl']\" \n        interface=\"popover\" multiple=\"false\" placeholder=\"Select\"\n        (ionChange)=\"onChangeExpense()\">\n          <ion-select-option *ngFor=\"let exp of expenseMasterList\" [value]=\"exp\">{{exp.sname}}</ion-select-option>\n        </ion-select>\n      </ion-item>  \n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label  position=\"stacked\">Amount</ion-label>\n        <ion-input type=\"number\" (change)='onChangeAmount()' [formControl]=\"travelExpenseFormedit.controls['txtAmount']\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label  position=\"stacked\">Claimable Amount</ion-label>\n        <ion-input type=\"number\" disabled=\"true\" [formControl]=\"travelExpenseFormedit.controls['claimableamount']\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col *ngIf=\"isdesktop===false\">\n         <ion-button (click)=\"getSupportingImage()\">Supporting</ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"isdesktop===true\">\n          <input type=\"file\" name=\"file\" accept=\"image/*\" id='selectedFile' (change)=\"uploadImage($event)\" class=\"inputfile\"/>\n\n         </ion-col>\n        <ion-col>\n          <img (click)=\"ImageViewr(Supportingimg64)\" [src]=\"'data:image/jpeg;base64,'+Supportingimg64\" *ngIf=\"Supportingimg64\" style=\"width: 50px; height: 50px;\">\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n  \n    </ion-card-content>\n  </ion-card>\n</form>\n<ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom\" type=\"submit\"\n  [disabled]=\"!travelExpenseFormedit.valid || IsSupportingimg64\" (click)=\"onAdd(travelExpenseFormedit.value)\">\n  Add\n</ion-button>\n<ion-card>\n  <ion-card-content>\n    <div style=\"overflow-x:auto\">\n      <ion-grid>\n       <ion-row nowrap >\n        <ion-col nowrap>\n        <ion-row nowrap>\n          <ion-col size=\"1\" class=\"grid-header\"></ion-col>\n          <ion-col size=\"4\" class=\"grid-header\">From</ion-col>\n         <ion-col size=\"4\" class=\"grid-header\">To</ion-col>\n         <ion-col size=\"4\" class=\"grid-header\">Travel Expense</ion-col>\n         <ion-col size=\"4\" class=\"grid-header\">Amount</ion-col>\n         <ion-col size=\"5\" class=\"grid-header\">Claimable Amount</ion-col>\n         <ion-col size=\"5\" class=\"grid-header\">Supporting</ion-col>\n\n        </ion-row>\n      </ion-col>\n       </ion-row>\n      \n       <ion-row *ngFor=\"let data of expenseList; index as i\"  nowrap>\n        <ion-col nowrap>\n       <ion-row nowrap>\n          \n          <ion-col size=\"1\" style=\"width: 100%; text-align: right;\">\n            <ion-icon name=\"trash\" (click)=\"removerow(data)\" style=\"font-size: x-large;\n            color: red;\"></ion-icon>\n          </ion-col>\n        <ion-col size=\"4\" class=\"forecast_div\">{{data.fromdate}}</ion-col>\n        <ion-col size=\"4\" class=\"forecast_div\">{{data.todate}}</ion-col>\n        <ion-col size=\"4\" class=\"forecast_div\">{{data.travelexpense.sname}}</ion-col>\n        <ion-col  size=\"4\"class=\"forecast_div\">{{data.amount}}</ion-col>\n        <ion-col size=\"4\" class=\"forecast_div\">{{data.claimableamount}}</ion-col>\n        <ion-col size=\"3\" style=\"text-align: -webkit-center;\">\n          <img [src]=\"'data:image/jpeg;base64,'+data.Supporting\" *ngIf=\"data.Supporting\" style=\"width: 35px; height: 35px;\">\n        </ion-col>\n        \n\n        </ion-row>\n       \n      </ion-col>\n        </ion-row>\n     \n\n      </ion-grid>     \n    </div>\n  </ion-card-content>\n</ion-card>\n\n\n  <ion-button expand=\"block\" class=\"ion-margin-start ion-margin-end ion-margin-bottom\" type=\"submit\"\n  [disabled]=\"!IsexpenseListlength\" (click)=\"onAddTravelExpense()\">\n  Add Expenses\n</ion-button> \n\n</ion-content>"

/***/ }),

/***/ "./src/app/addedit-travel-expense/addedit-travel-expense.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/addedit-travel-expense/addedit-travel-expense.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddeditTravelExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditTravelExpensePageModule", function() { return AddeditTravelExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addedit_travel_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addedit-travel-expense.page */ "./src/app/addedit-travel-expense/addedit-travel-expense.page.ts");







const routes = [
    {
        path: '',
        component: _addedit_travel_expense_page__WEBPACK_IMPORTED_MODULE_6__["AddeditTravelExpensePage"]
    }
];
let AddeditTravelExpensePageModule = class AddeditTravelExpensePageModule {
};
AddeditTravelExpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addedit_travel_expense_page__WEBPACK_IMPORTED_MODULE_6__["AddeditTravelExpensePage"]]
    })
], AddeditTravelExpensePageModule);



/***/ }),

/***/ "./src/app/addedit-travel-expense/addedit-travel-expense.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/addedit-travel-expense/addedit-travel-expense.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forecast_div {\n  overflow-x: scroll !important;\n  overflow-x: visible !important;\n  overflow-y: hidden;\n  word-wrap: break-word;\n  height: 20vw;\n  font-size: 0.8em;\n  font-weight: 300;\n  max-width: 175px;\n}\n\n.grid-header {\n  font-weight: bold;\n  max-width: 175px;\n}\n\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\n\nh5 ion-icon {\n  color: lightcoral;\n}\n\n.inputfile {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9hZGRlZGl0LXRyYXZlbC1leHBlbnNlL2FkZGVkaXQtdHJhdmVsLWV4cGVuc2UucGFnZS5zY3NzIiwic3JjL2FwcC9hZGRlZGl0LXRyYXZlbC1leHBlbnNlL2FkZGVkaXQtdHJhdmVsLWV4cGVuc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRERFO0VBQ0UsaUJBQUE7QUNHSjs7QURDQTtFQUNFLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hZGRlZGl0LXRyYXZlbC1leHBlbnNlL2FkZGVkaXQtdHJhdmVsLWV4cGVuc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmVjYXN0X2RpdntcbiAgICBvdmVyZmxvdy14OiBzY3JvbGwhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXg6IHZpc2libGUhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgaGVpZ2h0OjIwdnc7XG4gICAgZm9udC1zaXplOjAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xufVxuLmdyaWQtaGVhZGVye1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cblxuaDV7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGNvbG9yOiBkYXJrY3lhbjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgaW9uLWljb257XG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XG4gIH1cblxufVxuLmlucHV0ZmlsZSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn0iLCIuZm9yZWNhc3RfZGl2IHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IHZpc2libGUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGhlaWdodDogMjB2dztcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cblxuLmdyaWQtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTc1cHg7XG59XG5cbmg1IHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6IGRhcmtjeWFuO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaDUgaW9uLWljb24ge1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbn1cblxuLmlucHV0ZmlsZSB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/addedit-travel-expense/addedit-travel-expense.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/addedit-travel-expense/addedit-travel-expense.page.ts ***!
  \***********************************************************************/
/*! exports provided: AddeditTravelExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddeditTravelExpensePage", function() { return AddeditTravelExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _travel_expense_travel_expense_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-expense/travel-expense.service */ "./src/app/travel-expense/travel-expense.service.ts");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");









let AddeditTravelExpensePage = class AddeditTravelExpensePage {
    constructor(travelExpenseaddeditFromBuilder, travelExpenseService, commonfun, router, route, alertCtrl, camera, msg) {
        this.travelExpenseaddeditFromBuilder = travelExpenseaddeditFromBuilder;
        this.travelExpenseService = travelExpenseService;
        this.commonfun = commonfun;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.msg = msg;
        this.IsexpenseListlength = false;
        this.Supportingimg64 = '';
        this.IsSupportingimg64 = false;
        this.IsSupportingrequired = false;
        this.isdesktop = false;
        this.getrout();
        this.travelExpenseFormedit = this.travelExpenseaddeditFromBuilder.group({
            fromdate: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            todate: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectableTravelExpenseUIControl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            txtAmount: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            claimableamount: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.checkplatform();
        }, 1500);
    }
    dateyyyymmddT0000Z(dt) {
        try {
            var dl1date = new Date(dt.substr(0, 4), dt.substr(5, 2) - 1, dt.substr(8, 2));
            var nmonth = dl1date.getMonth() + 1;
            var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate());
            var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth);
            var yyyy1 = dl1date.getFullYear();
            // this.strfromdate=dd1+"-"+mm1+"-"+yyyy1
            return (yyyy1 + "-" + mm1 + "-" + dd1 + "T00:00Z");
        }
        catch (error) {
        }
    }
    ondatechange() {
        let methodTAG = 'ondatechange';
        var isdateOk = true;
        try {
            var df = this.travelExpenseFormedit.controls["fromdate"].value;
            var dt = this.travelExpenseFormedit.controls["todate"].value;
            var fromdate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
            var todate = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
            //if((this.plantodate<=fromdate || this.plantodate>=todate || this.planfromdate<=fromdate || this.planfromdate>=todate))
            if (todate < this.planfromdate
                || todate > this.plantodate
                || fromdate < this.planfromdate
                || fromdate > this.plantodate) {
                this.commonfun.presentAlert("Message", "Alert", "Expense Dates are must be in the range of Plan from date and Plan to date.");
                isdateOk = false;
                // return false;
            }
            else if (fromdate > todate) {
                this.commonfun.presentAlert("Message", "Alert", "From date must be less than To date.");
                isdateOk = false;
                //return false;
            }
        }
        catch (error) {
            // isdateOk=false;
            //  console.log("Errorondatechange()",error)
        }
        return isdateOk;
    }
    checkplatform() {
        try {
            if (!this.msg.isplatformweb) {
                //  if(!this.platform.is("desktop")){
                // 
                this.isdesktop = false;
            }
            else {
                this.isdesktop = true;
            }
        }
        catch (error) {
        }
    }
    getrout() {
        try {
            this.route.params.subscribe(params => {
                if (this.router.getCurrentNavigation().extras.state) {
                    this.expenseList = this.router.getCurrentNavigation().extras.state.expenseList;
                    this.selectedplan = this.router.getCurrentNavigation().extras.state.selectedplan;
                    this.expenseMasterList = this.router.getCurrentNavigation().extras.state.expenseMasterList;
                    ;
                    var a1 = this.selectedplan.fromdate.split("-");
                    var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
                    this.travelExpenseFormedit.controls["fromdate"].setValue(dt.toISOString());
                    this.planfromdate = dt.toISOString();
                    var a2 = this.selectedplan.todate.split("-");
                    var dt2 = new Date(a2[2] + '-' + a2[1] + '-' + a2[0] + 'T00:00Z');
                    this.travelExpenseFormedit.controls["todate"].setValue(dt2.toISOString());
                    this.plantodate = dt2.toISOString();
                    this.chklength();
                }
            });
        }
        catch (error) {
            // console.log("addsublead()-ERROR:",error);
        }
    }
    chklength() {
        try {
            if (this.expenseList.length > 0)
                this.IsexpenseListlength = true;
            else
                this.IsexpenseListlength = false;
        }
        catch (error) {
            this.IsexpenseListlength = false;
        }
    }
    uploadImage(str) {
        try {
            var file = str.target.files[0];
            var myreader = new FileReader();
            myreader.onloadend = (e) => {
                var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
                this.Supportingimg64 = b64;
                this.IsSupportingimg64 = false;
            };
            myreader.readAsDataURL(file);
        }
        catch (error) {
        }
    }
    onChangeAmount() {
        try {
            var amt = this.travelExpenseFormedit.controls["txtAmount"].value;
            var claimableamount = this.travelExpenseFormedit.controls["claimableamount"].value;
            if (amt > claimableamount) {
                this.commonfun.presentAlert("Message", "Alert!", "Entered amount is greater than claimbal amount.");
                this.travelExpenseFormedit.controls["txtAmount"].setValue('');
            }
        }
        catch (error) {
            // console.log("Error: onChangeAmount: ",error);
        }
    }
    onAdd(val) {
        console.log("onAdd");
        let methodTAG = 'onAdd';
        try {
            if (this.ondatechange() == false) {
                return;
            }
            this.strfromdate = this.commonfun.Dateconversionddmmyyyy(val.fromdate);
            this.strtodate = this.commonfun.Dateconversionddmmyyyy(val.todate);
            if (this.expenseList.length > 0) {
                var slitem = { "fromdate": this.strfromdate, "todate": this.strtodate, "travelexpense": val.selectableTravelExpenseUIControl, "amount": val.txtAmount, "claimableamount": val.claimableamount, "Supporting": this.Supportingimg64 };
                let objOne = { "fromdate": this.strfromdate, "todate": this.strtodate, "travelexpense": val.selectableTravelExpenseUIControl.sname };
                try {
                    var checkAlreadyAdded = false;
                    this.expenseList.forEach(obj => {
                        let objTwo = { "fromdate": obj.fromdate, "todate": obj.todate, "travelexpense": obj.travelexpense.sname };
                        if (JSON.stringify(objOne) === JSON.stringify(objTwo)) {
                            console.log("True");
                            checkAlreadyAdded = true;
                        }
                        else {
                            console.log("False");
                            checkAlreadyAdded = false;
                        }
                    });
                    if (checkAlreadyAdded == false) {
                        this.expenseList.push(slitem);
                    }
                    else {
                        this.commonfun.presentAlert("Add Expense", "Validation", "You can not add same expense");
                    }
                }
                catch (error) {
                    console.log("True", error);
                }
            }
            // if(this.expenseList)
            //   {
            //      var slitem={"fromdate":this.strfromdate,"todate":this.strtodate,"travelexpense":val.selectableTravelExpenseUIControl,"amount":val.txtAmount,"claimableamount":val.claimableamount,"Supporting":this.Supportingimg64};
            //        this.expenseList.push(slitem);
            //  }	
            else {
                var slitem1 = [{ "fromdate": this.strfromdate, "todate": this.strtodate, "travelexpense": val.selectableTravelExpenseUIControl, "amount": val.txtAmount, "claimableamount": val.claimableamount, "Supporting": this.Supportingimg64 }];
                this.expenseList = slitem1;
            }
            this.Resetpage();
        }
        catch (error) {
        }
    }
    //Select Image from library
    getimage() {
        try {
            const options = {
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                targetWidth: 1500,
                targetHeight: 1500
            };
            this.camera.getPicture(options).then((imageData) => {
                this.Supportingimg64 = imageData;
                this.IsSupportingimg64 = false;
            }, (err) => {
                this.commonfun.presentAlert("Message", "Error", err);
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    getSupportingImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const alert = yield this.alertCtrl.create({
                    header: 'Select Option',
                    message: "Select Option to get Picture.",
                    buttons: [
                        {
                            text: 'Gallery',
                            handler: data => {
                                this.getimage();
                            }
                        },
                        {
                            text: 'Camera',
                            handler: data => {
                                this.takePicture();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                this.commonfun.presentAlert("Message", "Error", error);
            }
        });
    }
    //Capture Image from Camera
    takePicture() {
        try {
            const options = {
                quality: 50,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.CAMERA,
                targetWidth: 1500,
                targetHeight: 1500
            };
            this.camera.getPicture(options).then((imageData) => {
                this.Supportingimg64 = imageData;
                this.IsSupportingimg64 = false;
            }, (err) => {
                this.commonfun.presentAlert("Message", "Error", err);
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    ImageViewr(img) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: '<div>' +
                    '<img class="viewImagecss" src="data:image/jpeg;base64,' + img + '">' +
                    '</div>',
                buttons: [
                    { text: 'Remove',
                        handler: data => {
                            this.Supportingimg64 = null;
                            this.IsSupportingimg64 = this.IsSupportingrequired;
                        }
                    },
                    { text: 'OK' }
                ],
            });
            yield alert.present();
        });
    }
    Resetpage() {
        let methodTAG = 'onChangeExpense';
        // console.log(methodTAG)
        try {
            // this.travelExpenseFormedit.reset();
            this.travelExpenseFormedit.controls["selectableTravelExpenseUIControl"].setValue("");
            this.travelExpenseFormedit.controls["txtAmount"].setValue("");
            this.travelExpenseFormedit.controls["claimableamount"].setValue("");
            this.Supportingimg64 = "";
            this.IsSupportingimg64 = this.IsSupportingrequired;
            this.chklength();
        }
        catch (error) {
        }
    }
    removerow(post) {
        try {
            // console.log("removerow")
            const result = this.expenseList.filter(item => item != post);
            this.expenseList = result;
            this.chklength();
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    onChangeExpense() {
        let methodTAG = 'onChangeExpense';
        try {
            //  console.log(methodTAG);
            this.selectedexpense = this.travelExpenseFormedit.controls["selectableTravelExpenseUIControl"].value;
            this.travelExpenseFormedit.controls["claimableamount"].setValue(this.selectedexpense.claimableamount);
            this.IsSupportingrequired = this.selectedexpense.isproof;
            this.IsSupportingimg64 = this.IsSupportingrequired;
        }
        catch (error) {
            // console.log("Error",error);
        }
    }
    onAddTravelExpense() {
        let methodTAG = 'onSaveTravelExpense';
        try {
            let navigationExtras = {
                state: {
                    expenseList: this.expenseList
                }
            };
            this.router.navigate(['travel-expense'], navigationExtras);
        }
        catch (error) {
        }
    }
};
AddeditTravelExpensePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _travel_expense_travel_expense_service__WEBPACK_IMPORTED_MODULE_3__["TravelExpenseService"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"] }
];
AddeditTravelExpensePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-addedit-travel-expense',
        template: __webpack_require__(/*! raw-loader!./addedit-travel-expense.page.html */ "./node_modules/raw-loader/index.js!./src/app/addedit-travel-expense/addedit-travel-expense.page.html"),
        styles: [__webpack_require__(/*! ./addedit-travel-expense.page.scss */ "./src/app/addedit-travel-expense/addedit-travel-expense.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _travel_expense_travel_expense_service__WEBPACK_IMPORTED_MODULE_3__["TravelExpenseService"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_4__["Commonfun"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _provider_message_helper__WEBPACK_IMPORTED_MODULE_8__["Message"]])
], AddeditTravelExpensePage);



/***/ })

}]);
//# sourceMappingURL=addedit-travel-expense-addedit-travel-expense-module-es2015.js.map