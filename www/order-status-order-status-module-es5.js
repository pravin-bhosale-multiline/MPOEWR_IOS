(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-status-order-status-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order-status/order-status.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-status/order-status.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Order Status\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n   \n\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Activity<span style=\"color:red!important\">*</span></ion-label>\n            <ion-select name=\"selectedactivity\" #C [(ngModel)]=\"selectedactivity\" (ionChange)=\"exonActChange()\" interface=\"popover\"\n              multiple=\"false\" placeholder=\"Select Activity\">\n              <ion-select-option *ngFor=\"let activity of activitylist\" [value]=\"activity.id\">{{activity.name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Customer<span style=\"color:red!important\">*</span></ion-label>\n            <ionic-selectable placeholder=\"Select Customer\" [searchDebounce]=\"1000\"\n            [(ngModel)]=\"exselectedBusinessPartner\" \n            [items]=\"exBusinessPartnerlist\"\n            itemValueField=\"id\" \n            itemTextField=\"name\" \n            [canSearch]=\"true\" \n            (onChange)=\"refChange($event)\"\n            (onSearch)=\"custsearchChange($event)\" (onClose)=\"onCustomerClose($event)\">\n            </ionic-selectable>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>From Date</ion-label>\n            <ion-datetime placeholder=\"Select Date\" [(ngModel)]=\"fromdate\" (ionChange)=\"ondatechange()\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>To Date</ion-label>\n            <ion-datetime placeholder=\"Select Date\" [(ngModel)]=\"todate\" (ionChange)=\"ondatechange()\" displayFormat=\"DD.MM.YYYY\" max=\"2050\"></ion-datetime>\n      \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button (click)=\"onShow()\">\n            <ion-label >Show</ion-label>\n            </ion-button>\n         </ion-col>\n    </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n    <ion-row>\n      <ion-col>\n        <h5 ion-text class=\"text-primary\">\n          <ion-icon name=\"navigate\"></ion-icon>  Status:\n        </h5>\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col size=\"8\">\n        <ion-button (click)=\"onPrevious()\">\n          <ion-label slot=\"start\">Previous</ion-label>\n          </ion-button>\n       </ion-col>\n       <ion-col size=\"4\">\n        <ion-button (click)=\"onNext()\" [disabled]=\"Islast\">\n          <ion-label>Next</ion-label>\n          </ion-button>\n       </ion-col>\n\n\n  </ion-row>\n  <ion-row style=\"font-size: small;\">\n    <ion-col size=\"5\">\n      <ion-label style=\"white-space: normal;color:#EE9E1E;\">&nbsp;&nbsp;Order</ion-label>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-label style=\"white-space: normal;color: #EE9E1E;\">Date</ion-label>\n    </ion-col> \n    <ion-col size=\"3\">\n      <ion-label style=\"white-space: normal;color: #EE9E1E;\">Detail</ion-label>\n    </ion-col>\n  </ion-row>\n\n    <ion-item *ngFor=\"let item of orderdata; index as i\"  text-wrap style=\"font-size: small; max-width: 100% !important;\">\n      <!-- <ion-content scrollX=\"true\"> -->\n        <div style=\"width: 100%;\" (click)=\"toggleOrder(item)\">\n      <ion-row>\n        <ion-col size=\"5\">\n          <ion-label style=\"white-space: normal;\">\n        <ion-icon style=\"color: springgreen;\" name=\"locate\"></ion-icon>\n            Order : {{ item.DocumentNo }}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label style=\"white-space: normal;\">\n        \n         {{ item.OrderDate }}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"3\">\n          <!-- <ion-button (click)=\"OrderStatus(item)\">\n            <ion-label slot=\"end\">Status</ion-label>\n            </ion-button> -->\n            &nbsp;&nbsp;\n            <ion-icon name=\"arrow-forward\" (click)=\"OrderStatus(item)\"></ion-icon>\n\n\n        </ion-col>\n\n      </ion-row>\n      \n      <ion-row>\n        <ion-col nowrap>\n          <div *ngIf=\"item.show\">\n            <ion-label style=\"font-size: small;\">Order Quantity: {{item.OrderQuantity}}</ion-label>\n            <ion-label style=\"font-size: small;\">Approve Quantity: {{item.ApprovedQty}}</ion-label>\n            <ion-label style=\"font-size: small;\">Invoice Quantity: {{item.InvoicedQuantity}}</ion-label>\n            <ion-label style=\"font-size: small;\">Dispatch Quantity: {{item.DispatchQuantity}}</ion-label>\n            <ion-label style=\"font-size: small;\">Delivery Quantity: {{item.DeliverQuantity}}</ion-label>\n           \n          </div>\n        </ion-col>\n       \n      </ion-row>\n    </div>\n      <!-- </ion-content> -->\n    </ion-item>\n\n\n  </ion-card-content>\n</ion-card>\n</ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/order-status/order-status.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-status/order-status.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderStatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusPageModule", function() { return OrderStatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_status_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-status.page */ "./src/app/order-status/order-status.page.ts");








var routes = [
    {
        path: '',
        component: _order_status_page__WEBPACK_IMPORTED_MODULE_7__["OrderStatusPage"]
    }
];
var OrderStatusPageModule = /** @class */ (function () {
    function OrderStatusPageModule() {
    }
    OrderStatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_order_status_page__WEBPACK_IMPORTED_MODULE_7__["OrderStatusPage"]]
        })
    ], OrderStatusPageModule);
    return OrderStatusPageModule;
}());



/***/ }),

/***/ "./src/app/order-status/order-status.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/order-status/order-status.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-scroll[scrollX] {\n  white-space: nowrap;\n  overflow: visible;\n  overflow-y: auto;\n}\nion-scroll[scrollX] .scroll-item {\n  display: inline-block;\n}\nion-scroll[scrollX] .selectable-icon {\n  margin: 10px 20px 10px 20px;\n  color: red;\n  font-size: 100px;\n}\nion-scroll[scrollX] ion-avatar img {\n  margin: 10px;\n}\nion-scroll[scroll-avatar] {\n  height: 60px;\n}\n/* Hide ion-content scrollbar */\n::-webkit-scrollbar {\n  display: none;\n}\nh5 {\n  font-style: oblique;\n  color: darkcyan;\n  font-size: large;\n}\nh5 ion-icon {\n  color: lightcoral;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9vcmRlci1zdGF0dXMvb3JkZXItc3RhdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXItc3RhdHVzL29yZGVyLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREVJO0VBQ0UscUJBQUE7QUNBTjtBREdJO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FETUU7RUFDRSxZQUFBO0FDSEo7QURNRSwrQkFBQTtBQUNBO0VBQ0UsYUFBQTtBQ0hKO0FETUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FESUk7RUFDRSxpQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItc3RhdHVzL29yZGVyLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2Nyb2xsW3Njcm9sbFhdIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgLy8gaGVpZ2h0OiAxMjBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuLy8gd2lkdGg6MTAwJTtcbiAgICAuc2Nyb2xsLWl0ZW0ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5zZWxlY3RhYmxlLWljb257XG4gICAgICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICB9XG5cbiAgICBpb24tYXZhdGFyIGltZ3tcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gIH1cblxuICBpb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJde1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gIC8qIEhpZGUgaW9uLWNvbnRlbnQgc2Nyb2xsYmFyICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgaDV7XG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgICBjb2xvcjogZGFya2N5YW47XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBpb24taWNvbntcbiAgICAgIGNvbG9yOiBsaWdodGNvcmFsO1xuICAgIH1cblxuICB9XG4gIFxuIiwiaW9uLXNjcm9sbFtzY3JvbGxYXSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuaW9uLXNjcm9sbFtzY3JvbGxYXSAuc2Nyb2xsLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIC5zZWxlY3RhYmxlLWljb24ge1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG59XG5pb24tc2Nyb2xsW3Njcm9sbFhdIGlvbi1hdmF0YXIgaW1nIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5pb24tc2Nyb2xsW3Njcm9sbC1hdmF0YXJdIHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4vKiBIaWRlIGlvbi1jb250ZW50IHNjcm9sbGJhciAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmg1IHtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgY29sb3I6IGRhcmtjeWFuO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaDUgaW9uLWljb24ge1xuICBjb2xvcjogbGlnaHRjb3JhbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/order-status/order-status.page.ts":
/*!***************************************************!*\
  !*** ./src/app/order-status/order-status.page.ts ***!
  \***************************************************/
/*! exports provided: OrderStatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusPage", function() { return OrderStatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../neworder/neworder.service */ "./src/app/neworder/neworder.service.ts");
/* harmony import */ var _order_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-status.service */ "./src/app/order-status/order-status.service.ts");






var OrderStatusPage = /** @class */ (function () {
    function OrderStatusPage(commonfun, loginauth, neworderservice, orderstatusservice) {
        this.commonfun = commonfun;
        this.loginauth = loginauth;
        this.neworderservice = neworderservice;
        this.orderstatusservice = orderstatusservice;
        this.activitylist = [];
        this.selectedactivity = '';
        this.offset = 0;
        this.Issinglecust = false;
    }
    OrderStatusPage.prototype.ngOnInit = function () {
        //this.commonfun.chkcache('order-status');
        var _this = this;
        setTimeout(function () {
            _this.Bindallactivity();
            _this.fromdate = new Date().toISOString();
            _this.todate = new Date().toISOString();
        }, 1500);
    };
    OrderStatusPage.prototype.Bindallactivity = function () {
        try {
            this.selectedcustomer = null;
            // this.selecteddocumentno=null;
            this.activitylist[0] = this.loginauth.selectedactivity;
            this.selectedactivity = this.activitylist[0].id;
            this.exonActChange();
        }
        catch (error) {
        }
    };
    OrderStatusPage.prototype.exonActChange = function () {
        this.exBusinessPartnerlist = null;
        this.exselectedBusinessPartner = null;
        this.checkcust();
    };
    OrderStatusPage.prototype.checkcust = function () {
        var _this = this;
        try {
            if (this.loginauth.defaultprofile[0].mmstOrderusrtype == "CEB") {
                this.neworderservice.getexistcustmersearchapi("", this.selectedactivity).subscribe(function (data) {
                    // var response = data;
                    var response = data;
                    //console.log("ORDER STATUS",response); 
                    _this.exBusinessPartnerlist = response;
                    _this.leastBusinessPartnerlist = _this.exBusinessPartnerlist;
                    if (_this.leastBusinessPartnerlist.length > _this.loginauth.minlistcount) {
                        // console.log("Dont Clear");
                    }
                    else {
                        _this.dontClearOrderStatus = true;
                    }
                    if (_this.exBusinessPartnerlist.length == 1) {
                        _this.exBusinessPartnerlist = response;
                        // this.passexBusinessPartnerlist=this.exBusinessPartnerlist;
                        _this.exselectedBusinessPartner = _this.exBusinessPartnerlist[0];
                        _this.onChangeCustomer();
                        _this.Issinglecust = true;
                    }
                    else {
                        _this.Issinglecust = false;
                        // this.exBusinessPartnerlist = null;
                        _this.exselectedBusinessPartner = null;
                    }
                });
                //
                // if (this.edtitdocid != undefined || this.edtitdocid != '') {
                //   this.editOrder(this.edtitdocid);
                // }
            }
        }
        catch (error) {
        }
    };
    OrderStatusPage.prototype.refChange = function (event) {
        this.onChangeCustomer();
        // 
        event.component._searchText = "";
    };
    OrderStatusPage.prototype.onChangeCustomer = function () {
        try {
            if (this.exselectedBusinessPartner != null) {
                this.BindOrder();
            }
            // this.commonfun.loadingDismiss();
        }
        catch (error) {
            // this.commonfun.loadingDismiss();
            //  console.log("error:Onchangecust:",error); 
        }
    };
    OrderStatusPage.prototype.BindOrder = function () {
    };
    OrderStatusPage.prototype.custsearchChange = function (event) {
        if (event.text.length >= 3) {
            this.bindcustomer1api(event.text);
        }
        else {
            //  this.exBusinessPartnerlist = [];
            if (!!this.dontClearOrderStatus && this.dontClearOrderStatus == true) {
            }
            else {
                // console.log("Cleared");
                this.exBusinessPartnerlist = [];
            }
        }
    };
    OrderStatusPage.prototype.bindcustomer1api = function (strsearch, ispageload) {
        var _this = this;
        try {
            if (strsearch != "") {
                this.neworderservice.getexistcustmersearchapi(strsearch, this.selectedactivity).subscribe(function (data) {
                    var response = data;
                    _this.exBusinessPartnerlist = response;
                });
            }
            else {
                // this.exBusinessPartnerlist=null;
                //=============start for top 10================= 
                if (this.leastBusinessPartnerlist) {
                    if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                        this.exBusinessPartnerlist = null;
                    }
                    else {
                        this.exBusinessPartnerlist = this.leastBusinessPartnerlist;
                        this.dontClearOrderStatus = true;
                    }
                }
                //=============end for top 10================= 
            }
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
            //  this.commonfun.loadingDismiss();
        }
    };
    OrderStatusPage.prototype.onCustomerClose = function (event) {
        event.component._searchText = "";
    };
    OrderStatusPage.prototype.ondatechange = function () {
        if (this.fromdate > this.todate) {
            // this.todate=this.fromdate;
            this.commonfun.presentAlert("Message", "Alert", "From Date can not be Greater than To Date");
        }
    };
    OrderStatusPage.prototype.getOrderStatus = function () {
        var _this = this;
        try {
            if (this.validation() == false) {
                return;
            }
            var fromdate = this.fromdate.split('T')[0];
            var todate = this.todate.split('T')[0];
            this.orderstatusservice.getOrderStatus(fromdate, todate, this.exselectedBusinessPartner.id, this.offset).subscribe(function (data) {
                _this.orderdata = data;
                if (_this.orderdata.length < 10 || _this.orderdata.length == 0) {
                    _this.Islast = true;
                }
                else {
                    _this.Islast = false;
                }
            }, function (error) {
                _this.commonfun.presentAlert("Message", "Error", error.error.text);
            });
        }
        catch (error) {
            this.commonfun.presentAlert("Message", "Error", error);
        }
    };
    OrderStatusPage.prototype.validation = function () {
        if (!this.exselectedBusinessPartner) {
            this.commonfun.presentAlert("Message", "Alert", "Please select Business Partner.");
            return false;
        }
        if (!this.fromdate) {
            this.commonfun.presentAlert("Message", "Alert", "Please select From date.");
            return false;
        }
        if (!this.todate) {
            this.commonfun.presentAlert("Message", "Alert", "Please select To date.");
            return false;
        }
        if (this.fromdate > this.todate) {
            // this.todate=this.fromdate;
            this.commonfun.presentAlert("Message", "Alert", "From Date can not be Greater than To Date");
            return false;
        }
    };
    OrderStatusPage.prototype.onShow = function () {
        this.offset = 0;
        //&& !this.todate && !(this.exselectedBusinessPartner!=undefined || this.exselectedBusinessPartner!=null))
        this.getOrderStatus();
        //  else
        // this.commonfun.presentAlert("Message", "Error", "Please select above information.")
    };
    OrderStatusPage.prototype.OrderStatus = function (item) {
        var ordercreated = '';
        var approveupdated = '';
        var invoicecreated = '';
        var dispatchupdated = '';
        var deliverupdated = '';
        var color = '';
        if (item.ordercreated)
            ordercreated = 'is-done';
        if (item.approveupdated)
            approveupdated = 'is-done';
        if (item.invoicecreated)
            invoicecreated = 'is-done';
        if (item.dispatchupdated)
            dispatchupdated = 'is-done';
        if (item.deliverupdated)
            deliverupdated = 'is-done';
        //if(item.ordercreated!='' && item.approveupdated=='') ordercreated='current';
        if (item.ordercreated != '' && item.approveupdated == '')
            ordercreated = 'is-done';
        if (item.approveupdated != '' && item.invoicecreated == '')
            approveupdated = 'is-done';
        if (item.invoicecreated != '' && item.dispatchupdated == '')
            invoicecreated = 'is-done';
        if (item.dispatchupdated != '' && item.deliverupdated == '')
            dispatchupdated = 'is-done';
        if (item.OrderQuantity == item.DeliverQuantity) {
            deliverupdated = 'is-done';
            color = "StepComplete";
        }
        else {
            color = "StepProgress";
        }
        var text = "\n<div class=\"wrapper\">\n<ul class=\"" + color + "\">\n  <li class=\"" + color + "-item " + ordercreated + "\"><strong>Order</strong>\n  <span *ngIf=\"item.ordercreated\">" + item.ordercreated + "</span>\n  </li>\n  <li class=\"" + color + "-item " + approveupdated + "\"><strong>Approve</strong>\n  <span *ngIf=\"item.approveupdated\">" + item.approveupdated + "</span>\n  </li>\n  <li class=\"" + color + "-item " + invoicecreated + "\"><strong>Invoice</strong>\n  <span *ngIf=\"item.invoicecreated\">" + item.invoicecreated + "</span>\n  </li>\n  <li class=\"" + color + "-item " + dispatchupdated + "\"><strong>Dispatch</strong>\n  <span *ngIf=\"item.dispatchupdated\">" + item.dispatchupdated + "</span>\n  </li>\n  <li class=\"" + color + "-item " + deliverupdated + "\"><strong>Delivery</strong>\n  <span *ngIf=\"item.deliverupdated\">" + item.deliverupdated + "</span>\n  </li>\n</ul>\n</div>";
        this.commonfun.presentAlert("Status", "Order: " + item.DocumentNo, text);
    };
    OrderStatusPage.prototype.toggleOrder = function (selectedcartproduct) {
        if (selectedcartproduct.show == false) {
            for (var i = 0; i < this.orderdata.length; i++) {
                if (this.orderdata[i].show === "true") {
                    this.orderdata[i].show = "false";
                }
            }
        }
        selectedcartproduct.show = !selectedcartproduct.show;
    };
    OrderStatusPage.prototype.onPrevious = function () {
        if (this.offset > 1) {
            this.offset = this.offset - 10;
            this.getOrderStatus();
        }
    };
    OrderStatusPage.prototype.onNext = function () {
        this.offset = this.offset + 10;
        this.getOrderStatus();
    };
    OrderStatusPage.prototype.Resetpage = function () {
        this.fromdate = new Date().toISOString();
        this.todate = new Date().toISOString();
        this.orderdata = null;
        if (this.activitylist.length != 1) {
            this.selectedactivity = null;
            this.exBusinessPartnerlist = null;
        }
        if (this.Issinglecust != true) {
            this.exselectedBusinessPartner = null;
        }
    };
    OrderStatusPage.ctorParameters = function () { return [
        { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_2__["Commonfun"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
        { type: _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_4__["NeworderService"] },
        { type: _order_status_service__WEBPACK_IMPORTED_MODULE_5__["OrderStatusService"] }
    ]; };
    OrderStatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-status',
            template: __webpack_require__(/*! raw-loader!./order-status.page.html */ "./node_modules/raw-loader/index.js!./src/app/order-status/order-status.page.html"),
            styles: [__webpack_require__(/*! ./order-status.page.scss */ "./src/app/order-status/order-status.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_provider_commonfun__WEBPACK_IMPORTED_MODULE_2__["Commonfun"],
            _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"],
            _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_4__["NeworderService"],
            _order_status_service__WEBPACK_IMPORTED_MODULE_5__["OrderStatusService"]])
    ], OrderStatusPage);
    return OrderStatusPage;
}());



/***/ }),

/***/ "./src/app/order-status/order-status.service.ts":
/*!******************************************************!*\
  !*** ./src/app/order-status/order-status.service.ts ***!
  \******************************************************/
/*! exports provided: OrderStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatusService", function() { return OrderStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





var OrderStatusService = /** @class */ (function () {
    function OrderStatusService(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    OrderStatusService.prototype.getOrderStatus = function (fromdate, todate, bp_id, offset) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileOrderStatus?'
            + 'fromdate=' + fromdate
            + '&todate=' + todate
            + '&bp_id=' + bp_id
            + '&offset=' + offset);
    };
    OrderStatusService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
        { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
    ]; };
    OrderStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
    ], OrderStatusService);
    return OrderStatusService;
}());



/***/ })

}]);
//# sourceMappingURL=order-status-order-status-module-es5.js.map