(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["joblist-joblist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/joblist/joblist.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/joblist/joblist.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"login\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Job List</ion-title>\n    <ion-icon slot=\"end\" style=\"font-size: 35px\" name=\"refresh\" (click)=\"doRefresh(null)\"></ion-icon>\n    <ion-badge slot=\"end\" style=\"font-size: 35px\" color=\"danger\">{{totalrow}}</ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-list no-lines>\n        <ion-card>\n          <ion-item *ngFor=\"let job of joblist\">\n              <ion-card-content>\n                <ion-grid fix>\n                  <ion-row>\n                    <ion-col size=\"6\">\n                        <ion-label position=\"stacked\">Assign Date  </ion-label>\n                        <ion-card-subtitle>{{job.assigndate | date: 'dd/MM/yyyy'}}</ion-card-subtitle>\n                    </ion-col>\n                    <ion-col size=\"6\">\n                        <ion-label position=\"stacked\">Job Type</ion-label>\n                        <ion-card-subtitle>{{job.mwmsJobtype$_identifier}}</ion-card-subtitle>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col size=\"12\">\n                        <ion-label position=\"stacked\">Task Descriptions  </ion-label>\n                        {{job.staskdescription}}\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                   <ion-col size=\"4\">\n                        <ion-button (click)=\"onAccept(job.id)\">\n                            Accept\n                          </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button (click)=\"onReject(job.id)\">\n                            Reject\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                        <ion-button (click)=\"onTransfer(job.id)\">\n                            transfer\n                        </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                \n              </ion-card-content>\n            </ion-item>\n      </ion-card>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/joblist/joblist.module.ts":
/*!*******************************************!*\
  !*** ./src/app/joblist/joblist.module.ts ***!
  \*******************************************/
/*! exports provided: JoblistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistPageModule", function() { return JoblistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _joblist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joblist.page */ "./src/app/joblist/joblist.page.ts");







const routes = [
    {
        path: '',
        component: _joblist_page__WEBPACK_IMPORTED_MODULE_6__["JoblistPage"]
    }
];
let JoblistPageModule = class JoblistPageModule {
};
JoblistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_joblist_page__WEBPACK_IMPORTED_MODULE_6__["JoblistPage"]]
    })
], JoblistPageModule);



/***/ }),

/***/ "./src/app/joblist/joblist.page.scss":
/*!*******************************************!*\
  !*** ./src/app/joblist/joblist.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home .scroll-content {\n  margin: 0 auto !important;\n  padding: 0px !important;\n  background: #B4B8AB;\n}\npage-home .main-app-top {\n  position: relative;\n  padding: 0px !important;\n  margin: 0px;\n  height: 300px;\n  width: 100%;\n  background: #2d2d2d;\n  z-index: 0;\n}\npage-home .main-app-top:before {\n  position: absolute;\n  content: \"\";\n  z-index: 1;\n  background: #B4B8AB;\n  width: 200%;\n  height: 50%;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  bottom: 10%;\n  -webkit-transform: rotate(-8deg) scale(1.5);\n          transform: rotate(-8deg) scale(1.5);\n}\npage-home .header-md,\npage-home .header-ios,\npage-home .header-wp {\n  background: #2d2d2d;\n}\npage-home .top-header {\n  font-size: 28px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 12px;\n  color: white;\n}\npage-home .list-md {\n  margin-top: 15%;\n  padding-bottom: 5%;\n}\npage-home .item-md,\npage-home .item-ios,\npage-home .item-wp {\n  background: transparent;\n  margin: 0;\n  z-index: 1;\n}\npage-home .item-md img {\n  z-index: 1;\n  height: 90px;\n  width: 90px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background-size: cover;\n  background-position: center;\n  max-height: 100px;\n  max-width: 100px;\n  border-radius: 5%;\n  border: 1px solid burlywood;\n  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.5);\n}\npage-home .item-detail-container {\n  z-index: -1;\n  border-radius: 10px;\n  position: relative;\n  margin: 1rem;\n  font-family: Righteous;\n  width: 90%;\n  height: 120px;\n  max-width: 90%;\n  max-height: 120px;\n  background: white;\n  border-radius: 10px;\n  overflow: hidden;\n  margin-left: 5%;\n  margin-top: -12%;\n  text-align: start;\n  box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.25);\n}\npage-home .item-container h3 {\n  font-weight: 400;\n  font-size: 20px;\n  padding-top: 1rem;\n  color: black;\n}\npage-home .item-container p {\n  font-weight: lighter;\n  color: black;\n  line-height: 2em;\n  font-size: 14px;\n}\npage-home .item-container h4 {\n  color: black;\n  font-size: 16px;\n  font-weight: 300;\n}\npage-home .item-container {\n  position: relative;\n  margin-left: 10rem;\n}\npage-home .fa-1 {\n  float: left;\n}\npage-home .fa-2 {\n  float: right;\n}\npage-home .fa-star {\n  color: goldenrod;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9qb2JsaXN0L2pvYmxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9qb2JsaXN0L2pvYmxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNBUjtBREVJOzs7RUFHSSxtQkFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJOzs7RUFHSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4Q0FBQTtBQ0FSO0FERUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtBQ0FSO0FERUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBUjtBREVJO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxXQUFBO0FDQVI7QURFSTtFQUNJLFlBQUE7QUNBUjtBREdJO0VBQ0ksZ0JBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2pvYmxpc3Qvam9ibGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xuICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQjRCOEFCO1xuICAgIH1cbiAgICAubWFpbi1hcHAtdG9wIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgYmFja2dyb3VuZDogIzJkMmQyZDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgLm1haW4tYXBwLXRvcDpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQjRCOEFCO1xuICAgICAgICB3aWR0aDogMjAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgYm90dG9tOiAxMCU7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKSBzY2FsZSgxLjUpO1xuICAgIH1cbiAgICAuaGVhZGVyLW1kLFxuICAgIC5oZWFkZXItaW9zLFxuICAgIC5oZWFkZXItd3Age1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xuICAgIH1cbiAgICAudG9wLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAubGlzdC1tZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIH1cbiAgICAuaXRlbS1tZCxcbiAgICAuaXRlbS1pb3MsXG4gICAgLml0ZW0td3Age1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICAuaXRlbS1tZCBpbWcge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJ1cmx5d29vZDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB9XG4gICAgLml0ZW0tZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJpZ2h0ZW91cztcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTIlO1xuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgfVxuICAgIC5pdGVtLWNvbnRhaW5lciBoMyB7ICAgICAgICBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAuaXRlbS1jb250YWluZXIgcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLml0ZW0tY29udGFpbmVyIGg0IHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICAgIC5pdGVtLWNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTByZW07XG4gICAgfVxuICAgIC5mYS0xIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxuICAgIC5mYS0yIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIC5mYS1zdGFye1xuICAgICAgICBjb2xvcjogZ29sZGVucm9kO1xuICAgIH1cbn0iLCJwYWdlLWhvbWUgLnNjcm9sbC1jb250ZW50IHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNCNEI4QUI7XG59XG5wYWdlLWhvbWUgLm1haW4tYXBwLXRvcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzJkMmQyZDtcbiAgei1pbmRleDogMDtcbn1cbnBhZ2UtaG9tZSAubWFpbi1hcHAtdG9wOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogI0I0QjhBQjtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIGJvdHRvbTogMTAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZykgc2NhbGUoMS41KTtcbn1cbnBhZ2UtaG9tZSAuaGVhZGVyLW1kLFxucGFnZS1ob21lIC5oZWFkZXItaW9zLFxucGFnZS1ob21lIC5oZWFkZXItd3Age1xuICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xufVxucGFnZS1ob21lIC50b3AtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5wYWdlLWhvbWUgLmxpc3QtbWQge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cbnBhZ2UtaG9tZSAuaXRlbS1tZCxcbnBhZ2UtaG9tZSAuaXRlbS1pb3MsXG5wYWdlLWhvbWUgLml0ZW0td3Age1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiAxO1xufVxucGFnZS1ob21lIC5pdGVtLW1kIGltZyB7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgYnVybHl3b29kO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxucGFnZS1ob21lIC5pdGVtLWRldGFpbC1jb250YWluZXIge1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBSaWdodGVvdXM7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXRvcDogLTEyJTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGJveC1zaGFkb3c6IDJweCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxucGFnZS1ob21lIC5pdGVtLWNvbnRhaW5lciBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cbnBhZ2UtaG9tZSAuaXRlbS1jb250YWluZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnBhZ2UtaG9tZSAuaXRlbS1jb250YWluZXIgaDQge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbnBhZ2UtaG9tZSAuaXRlbS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbn1cbnBhZ2UtaG9tZSAuZmEtMSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxucGFnZS1ob21lIC5mYS0yIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxucGFnZS1ob21lIC5mYS1zdGFyIHtcbiAgY29sb3I6IGdvbGRlbnJvZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/joblist/joblist.page.ts":
/*!*****************************************!*\
  !*** ./src/app/joblist/joblist.page.ts ***!
  \*****************************************/
/*! exports provided: JoblistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistPage", function() { return JoblistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let JoblistPage = class JoblistPage {
    constructor(loginservc, alertController, datePipe, router, loadingController) {
        this.loginservc = loginservc;
        this.alertController = alertController;
        this.datePipe = datePipe;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.loadingController.create({
            duration: 5000,
            spinner: 'circles',
            message: 'Please Wait...'
        }).then((res) => {
            res.present();
        });
        this.loginservc.getjoblist(this.loginservc.userid).subscribe(data => {
            this.response = data['response'];
            this.joblist = this.response['data'];
            this.totalrow = this.response.totalRows;
            this.loadingController.dismiss();
        });
    }
    onAccept(jobid) {
        this.loginservc.acceptJob(jobid).subscribe(data => {
            this.router.navigate(['/job', jobid]);
        });
    }
    onReject(jobid) {
        this.loginservc.rejectJob(jobid).subscribe(data => {
            this.doRefresh(null);
        });
    }
    onTransfer(jobid) {
        this.router.navigate(['/jobtransfer', jobid]);
    }
    doRefresh(event) {
        this.loginservc.getjoblist(this.loginservc.userid).subscribe(data => {
            this.response = data['response'];
            this.joblist = this.response['data'];
            this.totalrow = this.response.totalRows;
        });
        setTimeout(() => {
            if (event) {
                event.target.complete();
            }
        }, 2000);
    }
};
JoblistPage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
JoblistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-joblist',
        template: __webpack_require__(/*! raw-loader!./joblist.page.html */ "./node_modules/raw-loader/index.js!./src/app/joblist/joblist.page.html"),
        styles: [__webpack_require__(/*! ./joblist.page.scss */ "./src/app/joblist/joblist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], JoblistPage);



/***/ })

}]);
//# sourceMappingURL=joblist-joblist-module-es2015.js.map