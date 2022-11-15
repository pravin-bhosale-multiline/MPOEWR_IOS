(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-upload-upload-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/upload/upload/upload.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload/upload/upload.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Upload\n    </ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"refreshPage()\" slot=\"end\" style=\"font-size: 1.8rem;\">\n      <ion-icon name=\"refresh\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"uploadForm\">\n  <ion-card> \n    <!-- Interface Master Category -->\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"stacked\">Interface Master Category<span style=\"color:red!important\">*</span></ion-label>\n          <ion-select [(ngModel)]=\"selectedMasterCategory\" (ionChange)=\"onMasterCategoryChange()\" interface=\"popover\" [formControl]=\"uploadForm.controls['interfaceMasterCategoryCtrl']\"\n                      multiple=\"false\" placeholder=\"Interface Master Category\">\n          <ion-select-option *ngFor=\"let masterCategory of masterCategoryList\" [value]=\"masterCategory\">{{masterCategory.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- Interface Master Sub Category -->\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"stacked\">Interface Master Sub Category<span style=\"color:red!important\">*</span></ion-label>\n          <ion-select [(ngModel)]=\"selectedMasterSubCategory\" (ionChange)=\"onMasterSubCategoryChange()\" interface=\"popover\" [formControl]=\"uploadForm.controls['interfaceMasterSubCategoryCtrl']\"\n                      multiple=\"false\" placeholder=\"Select Master Sub Category\">\n          <ion-select-option *ngFor=\"let masterSubCategory of masterSubCategoryList\" [value]=\"masterSubCategory\">{{masterSubCategory.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- Interface Master Name -->\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"stacked\">Interface Master Name<span style=\"color:red!important\">*</span></ion-label>\n          <ion-select [(ngModel)]=\"selectedMasterName\" (ionChange)=\"onMasterNameChange()\" interface=\"popover\" [formControl]=\"uploadForm.controls['interfaceMasterNameCtrl']\"\n                      multiple=\"false\" placeholder=\"Select Master Name\">\n          <ion-select-option *ngFor=\"let masterName of masterNameList\" [value]=\"masterName\">{{masterName.name}}\n          </ion-select-option>\n          </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- Organization -->\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label position=\"stacked\">Organization<span style=\"color:red!important\">*</span></ion-label>\n        <ion-select [(ngModel)]=\"selectedOrganization\" (ionChange)=\"onOrganizationChange(selectedOrganization)\" interface=\"popover\" [formControl]=\"uploadForm.controls['interfaceOrganizationCtrl']\"\n                      multiple=\"false\" placeholder=\"Select Organization\">\n          <ion-select-option *ngFor=\"let organization of organizationList\" [value]=\"organization\">{{organization.name}}\n          </ion-select-option>\n          </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <!-- <app-multi-file-upload></app-multi-file-upload> -->\n        <section *ngIf=\"isdesktop===true\">\n          <ion-col size=\"2\">\n             <input type=\"file\" name=\"file\" id='inputFileCtrl' (change)=\"uploadFileWeb($event)\" #inputFileCtrl class=\"inputfile\"/>\n           </ion-col>\n         </section>\n         <section *ngIf=\"isdesktop===false\">\n           <ion-button color=\"light\"(click)=\"uploadFileDevice()\">Select File\n             <ion-icon color=\"primary\" name=\"Photos\" slot=\"icon-only\"></ion-icon>\n           </ion-button>\n           <ion-label>{{fileName}}</ion-label>\n         </section>\n     \n      </ion-item>\n   </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button size=\"default\" class=\"submit-btn\" [disabled]=\"!uploadForm.valid || !isFile\" expand=\"block\" color=\"primary\" (click)=\"validate()\">Validate\n      </ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button size=\"default\" class=\"submit-btn\"  [disabled]=\"!uploadForm.valid || !isFile\" expand=\"block\" color=\"primary\" (click)=\"process()\">Process\n      </ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button size=\"default\" class=\"submit-btn\"  [disabled]=\"!uploadForm.valid\" expand=\"block\" color=\"primary\" (click)=\"format()\">Format\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-card>  \n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/upload/upload/upload.module.ts":
/*!************************************************!*\
  !*** ./src/app/upload/upload/upload.module.ts ***!
  \************************************************/
/*! exports provided: UploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload.page */ "./src/app/upload/upload/upload.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");
/* harmony import */ var src_app_common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/pipes/pipes.module */ "./src/app/common/pipes/pipes.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");










const routes = [
    {
        path: '',
        component: _upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]
    }
];
let UploadPageModule = class UploadPageModule {
};
UploadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], src_app_common_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_6__["UploadPage"]]
    })
], UploadPageModule);



/***/ }),

/***/ "./src/app/upload/upload/upload.page.scss":
/*!************************************************!*\
  !*** ./src/app/upload/upload/upload.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQvdXBsb2FkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/upload/upload/upload.page.ts":
/*!**********************************************!*\
  !*** ./src/app/upload/upload/upload.page.ts ***!
  \**********************************************/
/*! exports provided: UploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPage", function() { return UploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload/upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-transfer */ "./node_modules/@ionic-native/file-transfer/index.js");

















let UploadPage = class UploadPage {
    constructor(formBuilder, commonFunction, uploadService, fileChooser, msg, filePlugin, transfer, loginService, fileOpener, androidPermissions, iab, filePath, fileMeta, platform, filePicker) {
        this.formBuilder = formBuilder;
        this.commonFunction = commonFunction;
        this.uploadService = uploadService;
        this.fileChooser = fileChooser;
        this.msg = msg;
        this.filePlugin = filePlugin;
        this.transfer = transfer;
        this.loginService = loginService;
        this.fileOpener = fileOpener;
        this.androidPermissions = androidPermissions;
        this.iab = iab;
        this.filePath = filePath;
        this.fileMeta = fileMeta;
        this.platform = platform;
        this.filePicker = filePicker;
        this.TAG = "Upload Page";
        this.isdesktop = false;
        this.isFile = false;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            interfaceMasterCategoryCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            interfaceMasterSubCategoryCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            interfaceMasterNameCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            interfaceOrganizationCtrl: [, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        if (this.msg.isplatformweb == true) {
            this.isdesktop = true;
        }
        else {
            this.isdesktop = false;
        }
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.commonFunction.loadingPresent();
                this.masterCategoryList = yield this.uploadService.getMasterCategoryList().toPromise();
                if (this.masterCategoryList.length == 1) {
                    this.selectedMasterCategory = this.masterCategoryList[0];
                }
                this.bindOrganizationFromApi();
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                console.log(this.TAG, error);
            }
        });
    }
    // Master Category Start
    onMasterCategoryChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log(this.TAG, "Selected Master Category", this.selectedMasterCategory.id);
                //  this.selectedMasterCategory = this.selectedMasterCategory.id;
                this.commonFunction.loadingPresent();
                this.masterNameList = [];
                this.masterSubCategoryList = [];
                this.uploadForm.controls['interfaceMasterSubCategoryCtrl'].reset();
                this.uploadForm.controls['interfaceMasterNameCtrl'].reset();
                if (!!this.selectedMasterCategory.id) {
                    this.masterSubCategoryList = yield this.uploadService.getMasterSubCategoryList(this.selectedMasterCategory.id).toPromise();
                    if (this.masterSubCategoryList.length == 1) {
                        this.selectedMasterSubCategory = this.masterSubCategoryList[0];
                    }
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                console.log(this.TAG, error);
            }
        });
    }
    onMasterCategoryClose(event) {
        try {
            event.component._searchText = "";
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    onMasterCategorySearchChange(event) {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    //Master Sub Category Start
    onMasterSubCategoryChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // event.component._searchText = "";
                console.log(this.TAG, "Selected Master Category", this.selectedMasterSubCategory);
                this.uploadForm.controls['interfaceMasterNameCtrl'].reset();
                // this.selectedMasterSubCategory = this.selectedMasterSubCategory;
                this.commonFunction.loadingPresent();
                if (!!this.selectedMasterCategory.id) {
                    this.masterNameList = yield this.uploadService.getMasterNameList(this.selectedMasterCategory.id, this.selectedMasterSubCategory.id).toPromise();
                    console.log(this.TAG, "Master Name List From Server", this.masterNameList);
                    if (this.masterNameList.length == 1) {
                        this.selectedMasterName = this.masterNameList[0];
                    }
                }
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                console.log(this.TAG, error);
                this.commonFunction.loadingDismiss();
            }
        });
    }
    onMasterSubCategoryClose(event) {
        try {
            event.component._searchText = "";
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    onMasterSubCategorySearchChange(event) {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    // Master Name Start
    onMasterNameChange() {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    onMasterNameClose(event) {
        try {
            event.component._searchText = "";
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    onMasterNameSearchChange(event) {
        try {
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    // Organization Start
    onOrganizationChange(selectedOrganization) {
        try {
            console.log(this.TAG, "Organization Selected", selectedOrganization);
            // this.selectedOrganization = event.value;
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    onOrganizationClose(event) {
        try {
            event.component._searchText = "";
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    onOrganizationSearchChange(event) {
        try {
            var custsearchtext = event.text;
            if (custsearchtext.length % 3 == 0) {
                this.bindOrganizationFromApi(custsearchtext);
            }
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    bindOrganizationFromApi(strsearch) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const cust_response = yield this.uploadService.getOrganizationList(strsearch).toPromise();
                console.log(this.TAG, cust_response);
                this.organizationList = cust_response;
                setTimeout(() => {
                    if (this.organizationList.length == 1) {
                        this.uploadForm.controls["interfaceOrganizationCtrl"].setValue(this.organizationList[0]);
                    }
                }, 100);
            }
            catch (error) {
                console.log(this.TAG, error);
            }
        });
    }
    uploadFileWeb(str) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log(this.TAG, str.target.files);
                this.file = str.target.files[0];
                console.log(this.TAG, this.file);
                this.isFile = true;
            }
            catch (error) {
                // this.commonFunction.loadingDismiss();
                console.log(this.TAG, error);
            }
        });
    }
    uploadFileDevice() {
        try {
            if (this.platform.is('android')) {
                this.fileChooser.open()
                    .then(uri => {
                    this.selectedURI = uri;
                    console.log(this.TAG, "Selected File", this.selectedURI);
                    this.filePath.resolveNativePath(uri).then(filePathResult => {
                        console.log(this.TAG, "Selected fileInfo", filePathResult);
                        this.fileName = filePathResult.substring(filePathResult.lastIndexOf("/") + 1);
                        let fileType = filePathResult.substring(filePathResult.lastIndexOf(".") + 1);
                        console.log(this.TAG, "Selected fileInfo File Name", this.fileName);
                        console.log(this.TAG, "Selected fileInfo File fileType", fileType);
                        this.isFile = true;
                    });
                }).catch(e => console.log(e));
            }
            else if (this.platform.is('ios')) {
                this.filePicker.pickFile()
                    .then(uri => {
                    this.isFile = true;
                    this.selectedURI = uri;
                    this.fileName = uri.substring(uri.lastIndexOf("/") + 1);
                    let fileType = uri.substring(uri.lastIndexOf(".") + 1);
                })
                    .catch(err => console.log('File Picker Error', err));
            }
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    validate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.msg.isplatformweb == true) {
                    this.commonFunction.loadingPresent();
                    let files = this.file;
                    if (files.name != "") {
                        let formData = new FormData();
                        let i = 0;
                        formData.append('inpFile', this.file, this.file.name);
                        formData.append('inpmuulinterfaceConfigId', this.selectedMasterName.id);
                        formData.append('validator', this.selectedMasterName.validator);
                        formData.append('java_process', this.selectedMasterName.java_process);
                        formData.append('inporganizationId', this.selectedOrganization.id);
                        formData.append('validatedorexecuter', 'VALIDATOR');
                        this.formatResponse = yield this.uploadService.uploadFileService(formData).toPromise();
                        if (!!this.formatResponse) {
                            console.log(this.TAG, this.formatResponse);
                            this.commonFunction.loadingDismiss();
                            //  if(this.formatResponse.msgType == "ValidateError"){
                            //  } 
                            this.commonFunction.presentAlert("Upload", "Validate", this.formatResponse.msg);
                        }
                        this.commonFunction.loadingDismiss();
                    }
                    else {
                        this.commonFunction.loadingDismiss();
                        this.commonFunction.presentAlert("Upload", "Validate", "Please Select File");
                    }
                }
                else if (this.platform.is('android')) {
                    this.commonFunction.loadingPresent();
                    let validateData = {
                        "inpmuulinterfaceConfigId": this.selectedMasterName.id,
                        "validator": this.selectedMasterName.validator,
                        "java_process": this.selectedMasterName.java_process,
                        "validatedorexecuter": 'VALIDATOR',
                        "inporganizationId": this.selectedOrganization.id
                    };
                    this.formatResponse = yield this.uploadService.uploadFileServiceAndroidiOS(validateData, this.selectedURI).toPromise();
                    if (!!this.formatResponse) {
                        console.log(this.TAG, this.formatResponse);
                        this.commonFunction.loadingDismiss();
                        this.commonFunction.presentAlert("Upload", "Validate", this.formatResponse.msg);
                    }
                    else {
                        this.commonFunction.loadingDismiss();
                    }
                }
                else if (this.platform.is('ios')) {
                    let login = this.loginService.user;
                    let password = this.loginService.pass;
                    const auth = btoa(login + ":" + password);
                    let save_file_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?';
                    const fileTransfer = this.transfer.create();
                    let options = {
                        fileKey: 'inpFile',
                        fileName: this.fileName,
                        params: {
                            "inpmuulinterfaceConfigId": this.selectedMasterName.id,
                            "validator": this.selectedMasterName.validator,
                            "java_process": this.selectedMasterName.java_process,
                            "validatedorexecuter": 'VALIDATOR',
                            "inporganizationId": this.selectedOrganization.id
                        },
                        headers: { 'Authorization': 'Basic ' + auth }
                    };
                    fileTransfer.upload(this.selectedURI, save_file_url, options)
                        .then((data) => {
                        console.log("pravin YESSSSS", data);
                        this.formatResponse = JSON.parse(data.response);
                        console.log("File Uplaod Result", this.formatResponse);
                        this.commonFunction.presentAlert("Upload", "Validate", this.formatResponse.msg);
                        this.commonFunction.loadingDismiss();
                    }, (err) => {
                        console.log("pravin naaaaaaaa", err);
                        this.commonFunction.loadingDismiss();
                    });
                }
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                console.log(this.TAG, error);
            }
        });
    }
    process() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.msg.isplatformweb == true) {
                    this.commonFunction.loadingPresent();
                    let files = this.file;
                    if (files.name != "") {
                        let processFormData = new FormData();
                        let i = 0;
                        processFormData.append('inpFile', this.file, this.file.name);
                        processFormData.append('inpmuulinterfaceConfigId', this.selectedMasterName.id);
                        processFormData.append('validator', this.selectedMasterName.validator);
                        processFormData.append('java_process', this.selectedMasterName.java_process);
                        processFormData.append('inporganizationId', this.selectedOrganization.id);
                        processFormData.append('validatedorexecuter', 'EXECUTOR');
                        processFormData.append('sessionIdval', this.formatResponse.sessionVal);
                        let processResponse = yield this.uploadService.uploadFileService(processFormData).toPromise();
                        if (!!processResponse) {
                            console.log(this.TAG, processResponse);
                            if (processResponse.msgType == "Success") {
                                this.refreshPage();
                            }
                            this.commonFunction.presentAlert("Upload", processResponse.msgType, processResponse.msg);
                        }
                        this.commonFunction.loadingDismiss();
                    }
                    else {
                        this.commonFunction.loadingDismiss();
                        this.commonFunction.presentAlert("Upload", "Validate", "Please Select File");
                    }
                }
                else if (this.platform.is('android')) {
                    this.commonFunction.loadingPresent();
                    let validateData = {
                        "inpmuulinterfaceConfigId": this.selectedMasterName.id,
                        "validator": this.selectedMasterName.validator,
                        "java_process": this.selectedMasterName.java_process,
                        "validatedorexecuter": 'EXECUTOR',
                        "inporganizationId": this.selectedOrganization.id,
                        "sessionIdval": this.formatResponse.sessionVal
                    };
                    this.formatResponse = yield this.uploadService.uploadFileServiceAndroidiOS(validateData, this.selectedURI).toPromise();
                    if (!!this.formatResponse) {
                        this.commonFunction.loadingDismiss();
                        console.log(this.TAG, this.formatResponse);
                        console.log(this.TAG, this.formatResponse);
                        if (this.formatResponse.msgType == "Success") {
                            this.refreshPage();
                        }
                        this.commonFunction.presentAlert("Upload", this.formatResponse.msgType, this.formatResponse.msg);
                    }
                    else {
                        this.commonFunction.loadingDismiss();
                    }
                }
                else if (this.platform.is('ios')) {
                    let login = this.loginService.user;
                    let password = this.loginService.pass;
                    const auth = btoa(login + ":" + password);
                    let save_file_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_15__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.UploadService?';
                    const fileTransfer = this.transfer.create();
                    let options = {
                        fileKey: 'inpFile',
                        fileName: this.fileName,
                        params: {
                            "inpmuulinterfaceConfigId": this.selectedMasterName.id,
                            "validator": this.selectedMasterName.validator,
                            "java_process": this.selectedMasterName.java_process,
                            "validatedorexecuter": 'EXECUTOR',
                            "inporganizationId": this.selectedOrganization.id,
                            "sessionIdval": this.formatResponse.sessionVal
                        },
                        headers: { 'Authorization': 'Basic ' + auth }
                    };
                    fileTransfer.upload(this.selectedURI, save_file_url, options)
                        .then((data) => {
                        console.log("pravin YESSSSS", data);
                        let reposnse = JSON.parse(data.response);
                        console.log("File Uplaod Result", reposnse);
                        this.refreshPage();
                        this.commonFunction.presentAlert("Upload", "Validate", reposnse.msg);
                        this.commonFunction.loadingDismiss();
                    }, (err) => {
                        console.log("pravin naaaaaaaa", err);
                        this.commonFunction.loadingDismiss();
                    });
                }
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                console.log(this.TAG, error);
            }
        });
    }
    format() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (!!this.selectedMasterName.doc_name) {
                    if (this.msg.isplatformweb == false) {
                        this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
                            .then(status => {
                            if (status.hasPermission) {
                                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
                                    .then(status => {
                                    if (status.hasPermission) {
                                        this.downloadFile();
                                    }
                                });
                            }
                            else {
                                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
                                    .then(status => {
                                    if (status.hasPermission) {
                                        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
                                            .then(status => {
                                            if (status.hasPermission) {
                                                this.downloadFile();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                    else {
                        this.downloadFile();
                    }
                }
                else {
                    this.commonFunction.presentAlert("Upload", "Download", "Server does not have a file");
                }
            }
            catch (error) {
                console.log(this.TAG, error);
            }
        });
    }
    downloadFile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let fileDownloadURL = this.loginService.commonurl + 'ws/in.mbs.webservice.InterfaceDownload?'
                    + this.loginService.parameter
                    + '&recordId=' + this.selectedMasterName.id
                    + '&user_id=' + this.loginService.userid;
                console.log(this.TAG, "getMasterCategory", fileDownloadURL);
                if (this.msg.isplatformweb == false) {
                    let path;
                    if (this.platform.is('android')) {
                        path = this.filePlugin.externalRootDirectory + '/Download/';
                    }
                    else if (this.platform.is('ios')) {
                        path = this.filePlugin.documentsDirectory;
                    }
                    const fileTransfer = this.transfer.create();
                    fileTransfer.download(encodeURI(fileDownloadURL), path + this.selectedMasterName.doc_name).then((entry) => {
                        console.log('download complete: ' + entry.toURL());
                        this.fileOpener.open(entry.toURL(), "text/csv")
                            .then(() => console.log("File is opened"))
                            .catch(e => console.log("Error opening file", e));
                    }, (error) => {
                        console.log('error download complete: ', error);
                    });
                }
                else {
                    let target = "_blank";
                    this.iab.create(fileDownloadURL, target, this.options);
                }
            }
            catch (error) {
                console.log(this.TAG, error);
            }
        });
    }
    refreshPage() {
        try {
            this.masterNameList = [];
            this.masterSubCategoryList = [];
            this.selectedMasterCategory = "";
            this.selectedMasterSubCategory = "";
            this.selectedMasterName = "";
            this.selectedOrganization = "";
            this.uploadForm.reset();
            // this.uploadForm.controls['interfaceMasterCategoryCtrl'].reset();
            // this.uploadForm.controls['interfaceMasterSubCategoryCtrl'].reset();
            // this.uploadForm.controls['interfaceMasterNameCtrl'].reset();
            // this.uploadForm.controls['interfaceOrganizationCtrl'].reset();
            this.isFile = false;
            this.fileName = "";
            this.selectedURI = "";
            this.inputFileCtrl.nativeElement.value = '';
            //this.fileField.clearAllFiles();
            // this.ionViewWillEnter();
        }
        catch (error) {
        }
    }
};
UploadPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
    { type: _upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"] },
    { type: _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__["FileChooser"] },
    { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_6__["Message"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"] },
    { type: _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["IOSFilePicker"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('inputFileCtrl', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
], UploadPage.prototype, "inputFileCtrl", void 0);
UploadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/index.js!./src/app/upload/upload/upload.page.html"),
        styles: [__webpack_require__(/*! ./upload.page.scss */ "./src/app/upload/upload/upload.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"],
        _upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_1__["FileChooser"],
        src_provider_message_helper__WEBPACK_IMPORTED_MODULE_6__["Message"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_16__["FileTransfer"],
        src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__["FilePath"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["Platform"], _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["IOSFilePicker"]])
], UploadPage);



/***/ })

}]);
//# sourceMappingURL=upload-upload-upload-module-es2015.js.map