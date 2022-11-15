(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-filter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/filter/filter.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/filter/filter.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n   \n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"order-approval\"></ion-back-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Filters</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"clearFilter()\"> Clear Filters</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-margin no-padding>\n\n  <ion-grid class=\"box\">\n    <ion-row class=\"row-custom\">\n      <ion-col size=\"4\" class=\"back-color custom-ion-col\">\n        <ion-list *ngFor=\"let filterItem of filterList;let i = index\" class=\"back-color\">\n          <ion-item lines=\"none\" class=\"list-item\" (click)=\"menuItemClick(i)\" [ngClass]=\"{'custom-activated': (active == i),'ion-item-custom':(active != i)}\">\n            <ion-label color=\"primary\">\n              {{ filterItem.name }}\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n      <ion-col size=\"8\">\n      <div *ngIf=\"showSide\" class=\"right-div\">\n        <div *ngIf=\"tab\">\n          <ion-list *ngFor=\"let subData of filterList[0].subData;let i=index\">\n            <ion-item lines=\"none\" text-wrap>\n              <ion-label>{{subData.sub_name}}</ion-label>\n              <ion-checkbox slot=\"start\"  value=\"subData.sub_name\" (ionChange)=\"chkTabSelect(subData.sub_name,subData.id,i,$event)\" [(ngModel)]=\"subData.checked\" (ngModelChange)=\"$event ? checkedIdx = i : checkedIdx = -1\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div *ngIf=\"org\" class=\"right-div\">\n          <ion-list *ngFor=\"let subData of filterList[1].subData;let i=index\">\n            <ion-item lines=\"none\" text-wrap>\n              <ion-label>{{subData.sub_name}}</ion-label>\n              <ion-checkbox slot=\"start\" value=\"subData.sub_name\" (ionChange)=\"chkOrgSelect(subData.sub_name,subData.id,$event)\" [(ngModel)]=\"subData.checked\"  (ngModelChange)=\"$event ? checkedOrgIdx = i : checkedOrgIdx = -1\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div  *ngIf=\"doc_type\" class=\"right-div\">\n          <ion-list *ngFor=\"let subData of filterList[2].subData;let i=index\">\n            <ion-item lines=\"none\" text-wrap>\n              <ion-label>{{subData.sub_name}}</ion-label>\n              <ion-checkbox slot=\"start\" value=\"subData.sub_name\" (ionChange)=\"chkDocTypeSelect(subData.sub_name,subData.id,$event)\" [(ngModel)]=\"subData.checked\" (ngModelChange)=\"$event ? checked_Doc_TypeIdx = i : checked_Doc_TypeIdx = -1\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n        </div>\n        <div  id=\"business_type\" *ngIf=\"business_type\">\n          <ion-item>\n            <ion-label position=\"stacked\">Business Partner</ion-label>\n            <ionic-selectable placeholder=\"Select Business Partner\" disable=\"true\"\n            [(ngModel)]=\"selectedBusinessPartner\"\n            [items]=\"BusinessPartnerlist\" \n            itemValueField=\"id\" \n            itemTextField=\"name\" \n            [canSearch]=\"true\"\n            (onChange)=\"onBusinessPartnerchange($event)\"\n            (onClose)=\"onBusinessPartnerClose($event)\"\n            multiple={false}\n            (onSearch)=\"onBusinessPartnerSearch($event)\">\n            </ionic-selectable>\n          </ion-item>\n          <!-- <ion-list *ngFor=\"let subData of filterList[3]?.subData;let i=index\">\n            <ion-item lines=\"none\" text-wrap>\n              <ion-label>{{subData.sub_name}}</ion-label>\n              <ion-checkbox slot=\"start\" value=\"subData.sub_name\" (ionChange)=\"chkBusinessTypeSelect(subData.sub_name,$event)\" [(ngModel)]=\"subData.checked\"  (ngModelChange)=\"$event ? checked_Business_Type_Idx = i : checked_Business_Type_Idx = -1\" [disabled]=\"checked_Business_Type_Idx >= 0 && checked_Business_Type_Idx != i\"></ion-checkbox>\n            </ion-item>\n          </ion-list> -->\n        </div>\n      </div>  \n    </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"footer-back-color\">\n  <ion-button  (click)=\"applyFilter()\"  color=\"primary\"  size=\"large\" expand=\"full\" fill=\"outline\" class=\"footer-btn-color\">\n    <ion-label style=\"color: white;\">\n      Apply\n    </ion-label>\n  </ion-button>\n</ion-footer>\n "

/***/ }),

/***/ "./src/app/filter/filter.module.ts":
/*!*****************************************!*\
  !*** ./src/app/filter/filter.module.ts ***!
  \*****************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.page */ "./src/app/filter/filter.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"]
    }
];
let FilterPageModule = class FilterPageModule {
};
FilterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"]]
    })
], FilterPageModule);



/***/ }),

/***/ "./src/app/filter/filter.page.scss":
/*!*****************************************!*\
  !*** ./src/app/filter/filter.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  height: 100% !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  padding: 0px !important;\n}\n\n.list-item {\n  margin-top: 25px !important;\n}\n\n.right-div {\n  height: 70vh !important;\n  overflow-y: auto;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\n.row-custom {\n  height: -webkit-fill-available !important;\n}\n\n.custom-activated {\n  --ion-background-color: white !important;\n}\n\n.ion-item-custom {\n  --ion-background-color:#eeeeee !important;\n  padding: 0px !important;\n}\n\n.back-color {\n  background-color: #eeeeee !important;\n}\n\n.custom-ion-col {\n  padding: 0px !important;\n}\n\n.footer-back-color {\n  background-color: white;\n}\n\n.footer-btn-color {\n  background-color: #F39E20 !important;\n}\n\n.right-div {\n  height: 80vh !important;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9maWx0ZXIvZmlsdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURHQTtFQUNJLHlDQUFBO0FDQUo7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBRENBO0VBQ0kseUNBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksb0NBQUE7QUNHSjs7QURBQTtFQUNJLHVCQUFBO0FDR0o7O0FEREE7RUFDSSx1QkFBQTtBQ0lKOztBREZBO0VBQ0ksb0NBQUE7QUNLSjs7QURIQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsgXG4gICAgZGlzcGxheTogZmxleDsgXG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLmxpc3QtaXRlbXtcbiAgICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG4ucmlnaHQtZGl2e1xuICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50OyBcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5yb3ctY3VzdG9te1xuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1hY3RpdmF0ZWQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3IgOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmlvbi1pdGVtLWN1c3RvbXtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5iYWNrLWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pb24tY29se1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLmZvb3Rlci1iYWNrLWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmZvb3Rlci1idG4tY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzOUUyMCAhaW1wb3J0YW50O1xufVxuLnJpZ2h0LWRpdntcbiAgICBoZWlnaHQ6IDgwdmggIWltcG9ydGFudDsgXG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iLCIuYm94IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDI1cHggIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LWRpdiB7XG4gIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnJvdy1jdXN0b20ge1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1hY3RpdmF0ZWQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWl0ZW0tY3VzdG9tIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmFjay1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1pb24tY29sIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXItYmFjay1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uZm9vdGVyLWJ0bi1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LWRpdiB7XG4gIGhlaWdodDogODB2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/filter/filter.page.ts":
/*!***************************************!*\
  !*** ./src/app/filter/filter.page.ts ***!
  \***************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_approval_order_approval_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-approval/order-approval-service.service */ "./src/app/order-approval/order-approval-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let FilterPage = class FilterPage {
    constructor(alertController, storage, router, orderApprovalServiceService, http) {
        this.alertController = alertController;
        this.storage = storage;
        this.router = router;
        this.orderApprovalServiceService = orderApprovalServiceService;
        this.http = http;
        this.TAG = "FilterPage";
        this.active = 0;
        this.mainMenuId = 0;
        this.tab = true;
        this.org = false;
        this.doc_type = false;
        this.business_type = false;
        this.tabSelected = [];
        this.orgSelected = [];
        this.docTypeSelected = [];
        this.showSide = false;
        this.reftextcount = 0;
        this.test = true;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log("ionViewWillEnter");
            this.filterList = yield (yield this.orderApprovalServiceService.getFilterData()).toPromise();
            if (!!this.filterList) {
                this.showSide = true;
            }
            this.test = false;
            this.tabSelected = this.orderApprovalServiceService.filterTab;
            this.orgSelected = this.orderApprovalServiceService.filterOrg;
            this.docTypeSelected = this.orderApprovalServiceService.filterDocType;
            this.businessParterSelected = this.orderApprovalServiceService.filterBusinessPartner;
            this.selectedBusinessPartner = this.orderApprovalServiceService.filterselectedBusinessPartner;
            this.filterList[0].subData.forEach((item) => {
                //console.log(this.TAG,"clearFilterInnerMethod",item);
                var istabchecked = false;
                for (var i = 0; i < this.tabSelected.length; i++) {
                    if (this.tabSelected[i] == item.id) {
                        istabchecked = true;
                    }
                }
                item.checked = istabchecked;
            });
            this.filterList[1].subData.forEach((item) => {
                var isorgchecked = false;
                for (var i = 0; i < this.orgSelected.length; i++) {
                    if (this.orgSelected[i] == item.id) {
                        isorgchecked = true;
                    }
                }
                item.checked = isorgchecked;
            });
            this.filterList[2].subData.forEach((item) => {
                // console.log(this.TAG,"clearFilterInnerMethod",item);
                var isdocTypechecked = false;
                for (var i = 0; i < this.docTypeSelected.length; i++) {
                    if (this.docTypeSelected[i] == item.id) {
                        isdocTypechecked = true;
                    }
                }
                item.checked = isdocTypechecked;
            });
            this.filterList[3].subData.forEach((item) => {
                // console.log(this.TAG,"clearFilterInnerMethod",item);
                item.checked = false;
            });
        });
    }
    // async ionViewWillEnter()
    // {
    //   this.test = false;
    //   this.tabSelected=this.orderApprovalServiceService.filterTab;
    //   this.orgSelected=this.orderApprovalServiceService.filterOrg;
    //   this.docTypeSelected=this.orderApprovalServiceService.filterDocType;
    //   this.businessParterSelected = this.orderApprovalServiceService.filterBusinessPartner;
    //   this.isChecked = false;
    //                   this.test = false;
    //                   this.tabSelected=[];
    //                   this.orgSelected=[];
    //                   this.docTypeSelected=[];
    //                   this.businessParterSelected = "";
    //                   this.orderApprovalServiceService.filterTab=[];
    //                   this.orderApprovalServiceService.filterOrg=[];
    //                   this.orderApprovalServiceService.filterDocType=[];
    //                   this.orderApprovalServiceService.filterBusinessPartner='';
    //                  // this.selectedBusinessPartner = ""
    //                   this.clearFilterInnerMethod();
    // }
    menuItemClick(index) {
        let methodTAG = "menuItemClick";
        try {
            // console.log(this.TAG,methodTAG,index);
            this.active = index;
            this.mainMenuId = index;
            if (index == 0) {
                this.tab = true;
                this.org = false;
                this.doc_type = false;
                this.business_type = false;
            }
            if (index == 1) {
                this.tab = false;
                this.org = true;
                this.doc_type = false;
                this.business_type = false;
            }
            if (index == 2) {
                this.tab = false;
                this.org = false;
                this.doc_type = true;
                this.business_type = false;
            }
            if (index == 3) {
                this.tab = false;
                this.org = false;
                this.doc_type = false;
                this.business_type = true;
            }
        }
        catch (error) {
        }
    }
    clearFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let methodTAG = "clearFilter";
            try {
                // console.log(this,methodTAG);
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Filters',
                    subHeader: 'Clear Filters',
                    message: 'Would you like to clear all filters?',
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                // console.log('Confirm Cancel: blah');
                            }
                        }, {
                            text: 'Ok',
                            handler: (data) => {
                                // console.log('Confirm Okay');
                                this.isChecked = false;
                                this.test = false;
                                this.tabSelected = [];
                                this.orgSelected = [];
                                this.docTypeSelected = [];
                                this.businessParterSelected = "";
                                this.orderApprovalServiceService.filterTab = [];
                                this.orderApprovalServiceService.filterOrg = [];
                                this.orderApprovalServiceService.filterDocType = [];
                                this.orderApprovalServiceService.filterBusinessPartner = '';
                                this.orderApprovalServiceService.filterselectedBusinessPartner = '';
                                // this.selectedBusinessPartner = ""
                                this.clearFilterInnerMethod();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            catch (error) {
                // console.log(this.TAG,methodTAG,error);
            }
        });
    }
    chkTabSelect(selectedData, id, i, event) {
        //  console.log(this.TAG,"chkTabSelect",selectedData,id);
        try {
            if (event.detail.checked) {
                var isnew = true;
                for (let i = 0; i < this.tabSelected.length; i++) {
                    if (this.tabSelected[i] === id) {
                        isnew = false;
                    }
                }
                if (isnew == true) {
                    this.tabSelected.push(id);
                }
                // console.log(this.TAG,"Pravin1",this.tabSelected);
            }
            else if (event.detail.checked == false) {
                for (let i = 0; i < this.tabSelected.length; i++) {
                    if (this.tabSelected[i] === id) {
                        this.tabSelected.splice(i, 1);
                    }
                }
                //  console.log(this.TAG,"Pravin2",this.tabSelected);
            }
        }
        catch (error) {
            // console.log(this.TAG,"chkTabSelect",error);
        }
    }
    chkOrgSelect(selectedData, id, event) {
        let methodTAG = "chkOrgSelect";
        try {
            // console.log(this.TAG,methodTAG,selectedData,id);
            if (event.detail.checked) {
                var isnew = true;
                for (let i = 0; i < this.orgSelected.length; i++) {
                    if (this.orgSelected[i] === id) {
                        isnew = false;
                    }
                }
                if (isnew == true) {
                    this.orgSelected.push(id);
                }
            }
            else if (event.detail.checked == false) {
                for (let i = 0; i < this.orgSelected.length; i++) {
                    if (this.orgSelected[i] === id) {
                        this.orgSelected.splice(i, 1);
                    }
                }
            }
            //  console.log("this.orgSelected",this.orgSelected);
        }
        catch (error) {
            //  console.log(this.TAG,methodTAG,error);
        }
    }
    chkDocTypeSelect(selectedData, id, event) {
        let methodTAG = "chkDocTypeSelect";
        try {
            // console.log(this.TAG,methodTAG,selectedData,id);
            if (event.detail.checked) {
                var isnew = true;
                for (let i = 0; i < this.docTypeSelected.length; i++) {
                    if (this.docTypeSelected[i] === id) {
                        isnew = false;
                    }
                }
                if (isnew == true) {
                    this.docTypeSelected.push(id);
                }
            }
            else if (event.detail.checked == false) {
                for (let i = 0; i < this.docTypeSelected.length; i++) {
                    if (this.docTypeSelected[i] === id) {
                        this.docTypeSelected.splice(i, 1);
                    }
                }
            }
        }
        catch (error) {
            //  console.log(this.TAG,methodTAG,error);
        }
    }
    clearFilterInnerMethod() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(this.TAG,"clearFilterInnerMethod");
            try {
                this.isChecked = false;
                this.test = false;
                // this.tabSelected.slice(0,this.tabSelected.length)
                //this.orgSelected.slice(0,this.orgSelected.length);
                //this.docTypeSelected.slice(0,this.docTypeSelected.length);
                this.businessParterSelected = "";
                this.selectedBusinessPartner = "";
                this.orderApprovalServiceService.filterTab;
                this.orderApprovalServiceService.filterOrg;
                this.orderApprovalServiceService.filterDocType;
                this.orderApprovalServiceService.filterBusinessPartner;
                this.orderApprovalServiceService.pageOffset = 0;
                // this.cdRef.detectChanges(); 
                this.filterList[0].subData.forEach((item) => {
                    // console.log(this.TAG,"clearFilterInnerMethod",item);
                    item.checked = false;
                });
                this.filterList[1].subData.forEach((item) => {
                    // console.log(this.TAG,"clearFilterInnerMethod",item);
                    item.checked = false;
                });
                this.filterList[2].subData.forEach((item) => {
                    // console.log(this.TAG,"clearFilterInnerMethod",item);
                    item.checked = false;
                });
                this.filterList[3].subData.forEach((item) => {
                    // console.log(this.TAG,"clearFilterInnerMethod",item);
                    item.checked = false;
                });
                this.businessParterSelected = "";
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    applyFilter() {
        let methodTAG = "applyFilter";
        try {
            this.orderApprovalServiceService.filterTab = this.tabSelected;
            this.orderApprovalServiceService.filterOrg = this.orgSelected;
            this.orderApprovalServiceService.filterDocType = this.docTypeSelected;
            if (!!this.selectedBusinessPartner) {
                this.orderApprovalServiceService.filterBusinessPartner = this.selectedBusinessPartner.id ? this.selectedBusinessPartner.id : 'CLEAR';
                this.orderApprovalServiceService.filterselectedBusinessPartner = this.selectedBusinessPartner ? this.selectedBusinessPartner : '';
            }
            let obj = {
                "tab": this.tabSelected,
                "org": this.orgSelected,
                "doc_Type": this.docTypeSelected,
                "business_Par": this.businessParterSelected
            };
            this.router.navigateByUrl('/order-approval', { state: { tab: obj } });
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    onBusinessPartnerchange(event) {
        try {
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    onBusinessPartnerClose(event) {
        event.component.searchText = "";
        this.BusinessPartnerlist = null;
    }
    onBusinessPartnerSearch(event) {
        try {
            this.reftextcount++;
            var custsearchtext = event.text;
            if (custsearchtext.length % 3 == 0) {
                this.bindBusinessPartnerFromApi(custsearchtext);
                this.reftextcount = 0;
            }
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    bindBusinessPartnerFromApi(searchkey) {
        try {
            if (searchkey) {
                this.orderApprovalServiceService.getBusinessPartnerData(searchkey).subscribe(businessPartnerList => {
                    this.BusinessPartnerlist = businessPartnerList;
                    //  console.log("BusinessPartnerlist",this.BusinessPartnerlist)
                });
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getFilterData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let url = "http://192.168.43.158:8080/openbravo/ws/in.mbs.webservice.Filter?user=hardik.pandya&password=pass&user_id=FFF202001310332122424C1A38AB7A41&action=all";
                return this.http.get(url, {});
            }
            catch (error) {
            }
        });
    }
};
FilterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _order_approval_order_approval_service_service__WEBPACK_IMPORTED_MODULE_5__["OrderApprovalServiceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
FilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(/*! raw-loader!./filter.page.html */ "./node_modules/raw-loader/index.js!./src/app/filter/filter.page.html"),
        styles: [__webpack_require__(/*! ./filter.page.scss */ "./src/app/filter/filter.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _order_approval_order_approval_service_service__WEBPACK_IMPORTED_MODULE_5__["OrderApprovalServiceService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], FilterPage);



/***/ })

}]);
//# sourceMappingURL=filter-filter-module-es2015.js.map