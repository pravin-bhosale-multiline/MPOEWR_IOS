(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~consolidation-order-consolidation-order-module~hrms-mpr-form-mpr-form-module~order-approval-~b7a5c5fa"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ngx-datatable  #datatable style=\"height: 600px; overflow-y:visible\" class=\"bootstrap resizeable\"\n                 [rows]=\"rows\"\n                 [columns]=\"column_data\"\n                 [columnMode]=\"'froce'\"\n                 [headerHeight]=\"50\"\n                 [footerHeight]=\"50\"\n                 [rowHeight]=\"40\"\n                 [selectionType]=\"SelectionType.single\"\n                 [scrollbarH]=\"true\"\n                 [scrollbarV]=\"true\"\n                 [reorderable]=\"true\"\n                 [loadingIndicator]=\"loadingIndicator\"\n                 [messages]=\"{emptyMessage: 'There are no records...'}\"\n                 [swapColumns]=\"true\">\n    \n  </ngx-datatable>\n \n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/order-approval/show-approval-details-modal/approval-modal.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/order-approval/show-approval-details-modal/approval-modal.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ApprovalModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalModalService", function() { return ApprovalModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");






let ApprovalModalService = class ApprovalModalService {
    constructor(genericHTTP, loginauth, http) {
        this.genericHTTP = genericHTTP;
        this.loginauth = loginauth;
        this.http = http;
        this.TAG = "ApprovalModalService";
    }
    getApprovalDetails(id, record, tab_id) {
        try {
            let url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + "/openbravo/ws/in.mbs.webservice.approval-details?"
                + "tab_id=" + tab_id + "&approval_id=" + id + "&record_id=" + record;
            return this.genericHTTP.get(url);
        }
        catch (error) {
            // console.log(this.TAG,error);
            throw error;
        }
    }
};
ApprovalModalService.ctorParameters = () => [
    { type: src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApprovalModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"],
        src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ApprovalModalService);



/***/ }),

/***/ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #F39E20 !important;\n}\n\n@media only screen and (min-width: 481px) {\n  ::ng-deep.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n    padding-left: 0.75rem !important;\n    padding-right: 0.25rem !important;\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n}\n\n@media (min-width: 1281px) {\n  ::ng-deep.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n    padding: 0.75rem !important;\n  }\n}\n\n::ng-deep.ngx-datatable.bootstrap .datatable-header {\n  font-weight: bold !important;\n  background-color: #F39E20 !important;\n}\n\n@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}\n\n@media only screen and (min-height: 768px) and (min-width: 768px) {\n  .sc-ion-modal-ios-h {\n    --width: 900px !important;\n    --height: 626px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9vcmRlci1hcHByb3ZhbC9zaG93LWFwcHJvdmFsLWRldGFpbHMtbW9kYWwvc2hvdy1hcHByb3ZhbC1kZXRhaWxzLW1vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXItYXBwcm92YWwvc2hvdy1hcHByb3ZhbC1kZXRhaWxzLW1vZGFsL3Nob3ctYXBwcm92YWwtZGV0YWlscy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFFSSxnQ0FBQTtJQUNBLGlDQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQ0FBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFFSTtJQUVBLDJCQUFBO0VDSEY7QUFDRjs7QURRQTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7QUNORjs7QURVQTtFQUNJO0lBQ0UsZ0JBQUE7RUNQSjs7RURTRTtJQUNFLGFBQUE7RUNOSjtBQUNGOztBRFFFO0VBQ0U7SUFDRSxhQUFBO0VDTko7O0VEUUU7SUFDRSxnQkFBQTtFQ0xKO0FBQ0Y7O0FET0U7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNMSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItYXBwcm92YWwvc2hvdy1hcHByb3ZhbC1kZXRhaWxzLW1vZGFsL3Nob3ctYXBwcm92YWwtZGV0YWlscy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSB7XG4gICAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG5cbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNzVyZW0gIWltcG9ydGFudDsgXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOjEyODFweCkgeyAgXG4gICAgXG4gICAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG5cbiAgICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAvLyB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBcbiBcbiB9fVxuXG46Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXJ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cbiAgICAubW9iaWxlLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9iaWxlLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAuc2MtaW9uLW1vZGFsLWlvcy1oe1xuICAgICAgLS13aWR0aDogOTAwcHggIWltcG9ydGFudDtcbiAgICAgIC0taGVpZ2h0OiA2MjZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuIiwiOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICA6Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODFweCkge1xuICA6Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgcGFkZGluZzogMC43NXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG46Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM5RTIwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxuXG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNzY4cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2MtaW9uLW1vZGFsLWlvcy1oIHtcbiAgICAtLXdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xuICAgIC0taGVpZ2h0OiA2MjZweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.ts ***!
  \************************************************************************************************/
/*! exports provided: Page, ShowApprovalDetailsModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowApprovalDetailsModalPage", function() { return ShowApprovalDetailsModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _approval_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approval-modal.service */ "./src/app/order-approval/show-approval-details-modal/approval-modal.service.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");








/**
 * An object used to get page information from the server
 */
class Page {
    constructor() {
        // The number of elements in the page
        this.size = 0;
        // The total number of elements
        this.totalElements = 0;
        // The total number of pages
        this.totalPages = 0;
        // The current page number
        this.pageNumber = 0;
    }
}
let ShowApprovalDetailsModalPage = class ShowApprovalDetailsModalPage {
    constructor(modalController, navParams, approvalModalService, screenOrientation, msg, commonfun) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.approvalModalService = approvalModalService;
        this.screenOrientation = screenOrientation;
        this.msg = msg;
        this.commonfun = commonfun;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["SelectionType"];
        this.page = new Page();
        this.rows = new Array();
        this.loadingIndicator = true;
        // console.log("Pravin data from approval page",navParams.get('id'),this.tab_id)
        this.id = navParams.get('id');
        this.tab_id = navParams.get('tab_id');
        this.record = navParams.get('record');
        this.page.pageNumber = 0;
        this.page.size = 20;
    }
    ngOnInit() {
        this.setPage({ offset: 0 });
        // set to landscape
    }
    ionViewWillEnter() {
        if (this.msg.isplatformweb == false) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        }
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.msg.isplatformweb == false) {
                this.screenOrientation.unlock();
            }
            yield this.modalController.dismiss();
        });
    }
    setPage(pageInfo) {
        this.commonfun.loadingPresent();
        this.approvalModalService.getApprovalDetails(this.id, this.record, this.tab_id).subscribe(pagedData => {
            // console.log("Pravin Modal DATA ",pagedData);
            if (!!pagedData.data && !!pagedData.data.colum_names) {
                this.column_data = pagedData.data.colum_names;
                this.rows = pagedData.data.colum_data;
            }
            else {
                this.loadingIndicator = false;
                this.commonfun.loadingDismiss();
            }
            this.loadingIndicator = false;
            this.commonfun.loadingDismiss();
        });
    }
};
ShowApprovalDetailsModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _approval_modal_service__WEBPACK_IMPORTED_MODULE_4__["ApprovalModalService"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"] },
    { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_6__["Message"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"] }
];
ShowApprovalDetailsModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-approval-details-modal',
        template: __webpack_require__(/*! raw-loader!./show-approval-details-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.html"),
        styles: [__webpack_require__(/*! ./show-approval-details-modal.page.scss */ "./src/app/order-approval/show-approval-details-modal/show-approval-details-modal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _approval_modal_service__WEBPACK_IMPORTED_MODULE_4__["ApprovalModalService"],
        _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"],
        src_provider_message_helper__WEBPACK_IMPORTED_MODULE_6__["Message"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_7__["Commonfun"]])
], ShowApprovalDetailsModalPage);



/***/ })

}]);
//# sourceMappingURL=default~consolidation-order-consolidation-order-module~hrms-mpr-form-mpr-form-module~order-approval-~b7a5c5fa-es2015.js.map