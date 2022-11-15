(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n    <!-- <ion-icon slot=\"end\" style=\"font-size: 35px\" name=\"log-out\" (click)=\"onLogout()\"></ion-icon> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card no-padding>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"ion-text-center\" color=\"primary\">\n              <h1 *ngFor=\"let profile of defaultprofile\">{{profile.name}}</h1>\n            </ion-text>\n          <ion-list>\n              <ion-item>\n                  <ion-label color=\"primary\" position=\"stacked\">Client</ion-label>\n                  <ion-text *ngFor=\"let profile of defaultprofile\">{{profile.defaultClient$_identifier}}\n                  </ion-text>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label color=\"primary\" position=\"stacked\">Role</ion-label>\n                <ion-select #C [ngModel]=\"selectedRole\" (ionChange)=\"onChange(C.value)\" multiple=\"false\" placeholder=\"Select Role\">\n                  <ion-select-option *ngFor=\"let selectedRole of rolelist\" [value]=\"selectedRole\">{{selectedRole.role$_identifier}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-label color=\"primary\" position=\"stacked\">Organization</ion-label>\n                  <ion-select #F [ngModel]=\"selectedOrg\" (ionChange)=\"onOrgChange(F.value)\" multiple=\"false\" placeholder=\"Select Organization\">\n                    <ion-select-option *ngFor=\"let selectedOrg of userorglist |orderby:'asc':'organization$_identifier':'string'\" [value]=\"selectedOrg\">{{selectedOrg.organization$_identifier}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              <ion-item>\n                  <ion-label color=\"primary\" position=\"stacked\">Warehouse</ion-label>\n                  <ion-select #W [ngModel]=\"selectedwarehouse\" (ionChange)=\"onWarehouseChange(W.value)\" multiple=\"false\" placeholder=\"Select Warehouse\">\n                    <ion-select-option *ngFor=\"let selectedwarehouse of orgwarehouselist\" [value]=\"selectedwarehouse\">{{selectedwarehouse._identifier}}</ion-select-option>\n                  </ion-select>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-right\">\n                  <ion-button (click)=\"onClick()\">\n                        Apply\n                    </ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text color=\"danger\">{{txtmsg}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/pipes/pipes.module */ "./src/app/common/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfilePage = class ProfilePage {
    constructor(loginservc, router) {
        this.loginservc = loginservc;
        this.router = router;
    }
    ngOnInit() {
        this.loginservc.getdefaultprofile().subscribe((data) => {
            // this.defaultprofile = data['response'];
            this.defaultprofile = [data.response.data[0]];
            // console.log('default profile',this.defaultprofile);
            // console.log(data.response.data[0].defaultClient);
            this.loginservc.getrolelist(this.defaultprofile[0].id).subscribe(data => {
                const response = data['response'];
                this.rolelist = response['data'];
                if (this.defaultprofile) {
                    //set default role
                    let role = this.rolelist.filter((role) => role.role === this.defaultprofile[0].defaultRole)[0];
                    // let role ={role:this.defaultprofile[0].defaultRole,role$_identifier:this.defaultprofile[0].defaultRole$_identifier,mmsaSecurerule: '',userContact: ''};
                    // //this.rolelist=[role];
                    this.selectedRole = role;
                    let organization = { organization: this.defaultprofile[0].defaultOrganization, organization$_identifier: this.defaultprofile[0].defaultOrganization$_identifier };
                    this.userorglist = [organization];
                    this.selectedOrg = organization;
                    let warehouse = { id: this.defaultprofile[0].defaultWarehouse, _identifier: this.defaultprofile[0].defaultWarehouse$_identifier };
                    this.orgwarehouselist = [warehouse];
                    this.selectedwarehouse = warehouse;
                    //apply auto if all values available
                    if (this.rolelist.length === 1 && organization.organization && warehouse.id) {
                        this.onClick();
                    }
                }
                // if(this.rolelist.length===1){
                //   this.selectedRole=this.rolelist[0];
                //   this.onChange(this.selectedRole);
                // }
                // console.log('rolelist', this.rolelist);
            });
        });
    }
    onChange(roleValue) {
        this.selectedRole = roleValue;
        // console.log(this.selectedRole.role$_identifier);
        this.loginservc.getuserorg(this.selectedRole.userContact, this.selectedRole.mmsaSecurerule).subscribe(data => {
            let response = data['response'];
            // console.log("Before Sort",response);
            let tempresponse = response['data'].sort((a, b) => (a._identifier < b._identifier ? -1 : 1));
            // this.userorglist = response['data'];
            this.userorglist = tempresponse;
            //  this.userorglist = response['data'].sort(this.sortByProperty("organization$_identifie"));
            // console.log("adad",response['data']);
            //this.userorglist= this.sortByKey(response, 'organization$_identifie');
            //this.userorglist = this.userorglist.map(arr => arr.organization$_identifier..sort((a,b) => a > b));
            if (this.userorglist.length === 1) {
                this.selectedOrg = this.userorglist[0];
                this.onOrgChange(this.selectedOrg);
            }
            // else{
            //   this.selectedOrg = undefined;
            //   this.selectedwarehouse = undefined;
            // }
            // console.log('userorglist', this.userorglist);
        });
    }
    onOrgChange(orgValue) {
        this.selectedOrg = orgValue;
        this.loginservc.getorgwarehouse(this.selectedOrg.organization).subscribe(data => {
            const response = data['response'];
            this.orgwarehouselist = response['data'];
            this.selectedwarehouse = this.orgwarehouselist.filter(e => e._identifier.includes('01'))[0];
        });
        //  console.log('selected org', this.selectedOrg.organization);
    }
    onWarehouseChange(warehouse) {
        this.selectedwarehouse = warehouse;
        if (this.rolelist.length === 1 && this.selectedOrg.organization && warehouse.id) {
            this.onClick();
        }
        //console.log('warehouse selected: ', this.selectedwarehouse._identifier);
    }
    onClick() {
        if (this.selectedRole === undefined) {
            this.txtmsg = 'Please Select Role';
            return;
        }
        if (this.selectedOrg === undefined) {
            this.txtmsg = 'Please Select Organization';
            return;
        }
        //   if (this.selectedwarehouse === undefined) {
        //     this.txtmsg = 'Please Select Warehouse';
        //     return;
        // }
        //console.log('Proceed for BOM Page.', this.selectedwarehouse.id);
        this.loginservc.selectedprof = {
            user: this.defaultprofile[0].id,
            role: this.selectedRole.role,
            organization: this.selectedOrg.organization,
            client: this.defaultprofile[0].defaultClient,
            warehouse: this.selectedwarehouse !== undefined ? this.selectedwarehouse.id : ''
        };
        this.loginservc.setdefaultprofile(this.loginservc.selectedprof);
        this.router.navigateByUrl('/reportcategory');
        /* this.txtmsg = 'Selected Organization Are User: ' + this.defaultprofile[0].name + ' Role: '
         + this.selectedRole.role$_identifier + ' Org: ' + this.selectedOrg.organization$_identifier;
         
         // console.log('Proceed for BOM Page.');*/
    }
    onLogout() {
        this.router.navigateByUrl('/login');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_2__["LoginauthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map