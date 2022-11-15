(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cardinal-service-engineer-visit-service-engineer-visit-detail-service-engineer-visit-detail-~47fc23e0"],{

/***/ "./src/app/cardinal/service-engineer-visit/service-engineer-visit.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/cardinal/service-engineer-visit/service-engineer-visit.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiceEngineerVisitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceEngineerVisitService", function() { return ServiceEngineerVisitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer */ "./node_modules/@ionic-native/file-transfer/index.js");











let ServiceEngineerVisitService = class ServiceEngineerVisitService {
    constructor(genericHTTP, loginService, httpClient, msg, cordovaHTTP, platform, transfer) {
        this.genericHTTP = genericHTTP;
        this.loginService = loginService;
        this.httpClient = httpClient;
        this.msg = msg;
        this.cordovaHTTP = cordovaHTTP;
        this.platform = platform;
        this.transfer = transfer;
        this.TAG = "ServiceEngineerVisitService";
    }
    getVenderApprovalList() {
        try {
            let complainListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceDetails?' +
                'userid=' + this.loginService.userid
                + '&appcomplaint=' + 'N'
                + '&servmanager=' + 'N'
                + '&serveng=' + 'Y'
                + '&sparesku=' + 'Y'
                + '&activity=' + this.loginService.selectedactivity.id;
            // let complainListURL = "https://p2test.pispl.in/openbravo/ws/in.mbs.webservice.CustomerServiceDetails?user=ps.medical&password=pass&userid=FFF20210114113527411DBCE268A3D75&appcomplaint=N&servmanager=N&serveng=Y&sparesku=Y&activity=FFF202012061211195489D3E4DD35FC1"
            //  console.log("getComplaintList",complainListURL);
            return this.genericHTTP.get(complainListURL);
            //return this.httpClient.get('assets/data/complain.json');
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getServiceManagerList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let serviceManagerListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.BusinessPartnerAsPerCategory?' +
                    'activityid=' + this.loginService.selectedactivity.id +
                    '&c_bgroup_id=' + this.loginService.service_manager_id;
                if (!!this.serviceManagerList) {
                    //  console.log(this.TAG,"Not Empty");
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.serviceManagerList);
                        observer.complete();
                    });
                }
                else {
                    //  console.log(this.TAG,"Empty");
                    this.serviceManagerList = yield this.genericHTTP.get(serviceManagerListURL).toPromise();
                    //  console.log(this.TAG,"Empty",this.serviceManagerList);
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.serviceManagerList);
                        observer.complete();
                    });
                }
            }
            catch (error) {
                // console.log(this.TAG,error);
            }
        });
    }
    getSpareSKUCode() {
        try {
            return this.genericHTTP.get('assets/data/skuCode.json');
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getProposedActionList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let getProposedActionListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
                    'user_id=' + this.loginService.userid +
                    '&refname=' + 'MSNR%20Proposed%20Action';
                if (!!this.proposedActionList) {
                    //  console.log(this.TAG,"Not Empty");
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.proposedActionList);
                        observer.complete();
                    });
                }
                else {
                    //  console.log(this.TAG,"Empty");
                    this.proposedActionList = yield this.genericHTTP.get(getProposedActionListURL).toPromise();
                    // console.log(this.TAG,"Empty",this.proposedActionList);
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.proposedActionList);
                        observer.complete();
                    });
                }
            }
            catch (error) {
                // console.log(this.TAG,error);
            }
        });
    }
    getComplaintStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let getProposedActionListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
                    'refname=' + 'MSNR%20Status';
                if (!!this.complaintStatusList) {
                    //  console.log(this.TAG,"Not Empty");
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.complaintStatusList);
                        observer.complete();
                    });
                }
                else {
                    // console.log(this.TAG,"Empty");
                    this.complaintStatusList = yield this.genericHTTP.get(getProposedActionListURL).toPromise();
                    // console.log(this.TAG,"Empty",this.complaintStatusList);
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.complaintStatusList);
                        observer.complete();
                    });
                }
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    punchedCOPSalesOrderPost(spareObject) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            console.log(this.TAG, "punched COP Sales Order Post FINAL", spareObject);
            let punchedOrder_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.post(punchedOrder_url, spareObject, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getAddress(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                return this.genericHTTP.get(this.loginService.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
                    + this.loginService.ReadOnlyparameter + '&'
                    + '_selectedProperties=id,name,shipToAddress,invoiceToAddress&'
                    + '_where=active=true%20and%20name=\'' + name + '\'');
            }
            catch (error) {
                //  console.log(this.TAG,error);
            }
        });
    }
    finalCloser(complain) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let oneObject = {
                'complaintno': complain.complaint_no,
                'complaintid': complain.complaintid,
                'doctype': complain.doctype,
                'nameofcomplainer': complain.nameofcomplainer,
                'desofcomplnr': complain.desofcomplnr,
                'contnumber': complain.contnumber,
                'email': complain.email,
                'eventdate': complain.eventdate,
                'serialno': complain.serialno,
                "srnoequipment": complain.srnoequipment,
                "contracttype": complain.contracttype,
                'invoiceno': complain.invoiceno,
                "invoicedate": complain.invoicedate,
                "errorcode": complain.errorcode,
                "dealername": complain.dealername,
                "installationdate": complain.installationdate,
                "skucode": complain.skucode,
                "skuname": complain.skuname,
                "brandname": complain.brandname,
                "producttobereturn": complain.producttobereturn,
                "custname": complain.custname,
                "add1": complain.add1,
                "add2": complain.add2,
                "add3": complain.add3,
                "pincode": complain.pincode,
                "area": complain.area,
                "city": complain.city,
                "state": complain.state,
                "country": complain.country,
                "description": complain.description,
                "lotno": complain.lotno ? complain.lotno : '',
                "appcomplaint": complain.appcomplaint,
                "assigntoservvendor": complain.assigntoservvendor,
                "salesrepresentative": complain.salesrepresentative,
                "newdealername": complain.newdealername,
                "serviceengname": complain.serviceengname,
                "serviceengcontact": complain.serviceengcontact,
                "visitdate": complain.visitdate,
                //  "servicevendorremark":complain.servicevendorremark,
                "assigntoservmg": complain.assigntoservmg,
                "activity": this.loginService.selectedactivity.id,
                "Appect": complain.Appect,
                "problemobserv": complain.problem_observed,
                "fieldvisit": complain.field_visit_remarks,
                "proposeactn": complain.proposed_action,
                "assigntofieldvisit": complain.assign_to,
                "closureatfield": complain.closureatfield,
                "compltstatus": complain.complaint_status,
                "imagebase64": complain.imagebase64,
                "file_type": complain.file_type
            };
            if (!!complain.spare_received_date) {
                oneObject.sparesinstall = [{ "recvdate": complain.spare_received_date,
                        "repairreport": complain.repair_report,
                        "compltstatus": complain.complaint_status,
                        "compltndate": complain.complaint_date,
                        "replacesparepartno": complain.replaced_spare_part_serialNo,
                        "serviceattendedby": complain.service_attended,
                        "defectivepartno": complain.defective_spare_part_no,
                        "docketno": complain.def_spare_docket_no,
                        "courier": complain.def_spare_courier,
                        "sentdate": complain.def_spare_sent_date,
                        "spareinstallclose": complain.spare_install_closed
                    }];
            }
            if (!!complain.servicevendorremark) {
                oneObject.needtosendcah = [{ "sermangremarks": complain.servicevendorremark,
                        "defsparepartno": complain.defective_spare_part_no,
                        "defsparerecevdate": complain.defective_spare_part_received_date,
                        "refno": complain.smart_solve_ref_no
                    }];
            }
            console.log(this.TAG, "FINAL Closure API Data Service", oneObject);
            let complain_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            //return  this.genericHTTP.post(complain_url,oneObject,httpOptions);
            if (complain.file_type == "image") {
                return this.genericHTTP.post(complain_url, oneObject, httpOptions);
            }
            else if (complain.file_type == "pdf") {
                if (this.msg.isplatformweb == true) {
                    let formData = new FormData();
                    let postData = JSON.stringify(oneObject);
                    formData.append("postData", postData);
                    // formData.append('complaintid',complain.complaintid)
                    // formData.append('compltstatus',complain.complaint_status)
                    formData.append('imagebase64', oneObject.imagebase64, oneObject.imagebase64.name);
                    formData.append('file_type', complain.file_type);
                    let login = this.loginService.user;
                    let password = this.loginService.pass;
                    const auth = btoa(login + ":" + password);
                    const httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': 'Basic ' + auth
                        })
                    };
                    console.log(this.TAG, "final Closer With Pdf Final Data", formData);
                    let save_quotation = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
                    return this.genericHTTP.fileDevicePost(save_quotation, formData, httpOptions);
                }
                else if (this.platform.is('android')) {
                    this.uploadPDFFileServiceAndroidiOS(oneObject, complain.file_selected_uri).then(data => {
                    });
                }
                else if (this.platform.is('ios')) {
                    return this.uploadPDFFileiOS(oneObject, complain.file_selected_uri);
                }
            }
        }
        catch (error) {
            // console.log(this.TAG,error)
        }
    }
    finalCloserWithPdf(data) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + auth
                })
            };
            console.log(this.TAG, "final Closer With Pdf Final Data", data);
            let save_quotation = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.fileDevicePost(save_quotation, data, httpOptions);
        }
        catch (error) {
        }
    }
    uploadPDFFileServiceAndroidiOS(data, path) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            this.cordovaHTTP.setDataSerializer('multipart');
            const filePath = [path];
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + auth
                })
            };
            let auth1 = httpOptions.headers.get('Authorization');
            let specificHeader = {
                'Authorization': auth1
            };
            console.log(this.TAG, "file upload data", data);
            let save_file_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                this.cordovaHTTP.uploadFile(save_file_url, data, specificHeader, filePath, "imagebase64").then((response) => {
                    let data;
                    if (!!response.data) {
                        data = JSON.parse(response.data);
                    }
                    else {
                        data = response;
                    }
                    observer.next(data);
                    observer.complete();
                }).catch((error) => {
                    // this.commonFunction.loadingDismiss();
                    console.log(this.TAG, "file upload error", error);
                    throw error;
                    //  this.commonFunction.loadingDismiss();
                    //  console.log(this.TAG, "file upload error", error);
                });
            });
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    uploadPDFFileiOS(jsondata, selectedURI) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            let save_file_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.WMobileOrderPunchOB?';
            const fileTransfer = this.transfer.create();
            let options = {
                fileKey: 'imagebase64',
                fileName: jsondata.fileName,
                params: jsondata,
                headers: { 'Authorization': 'Basic ' + auth }
            };
            fileTransfer.upload(selectedURI, save_file_url, options)
                .then((data) => {
                console.log("pravin YESSSSS", data);
                let formatResponse = JSON.parse(data.response);
                console.log("File Uplaod Result", formatResponse);
                if (data != null) {
                }
            }, (err) => {
            });
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
    serviceManagerClose(complain) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let oneObject = {
                'complaintno': complain.complaint_no,
                'complaintid': complain.complaintid,
                'doctype': complain.doctype,
                'nameofcomplainer': complain.nameofcomplainer,
                'desofcomplnr': complain.desofcomplnr,
                'contnumber': complain.contnumber,
                'email': complain.email,
                'eventdate': complain.eventdate,
                'serialno': complain.serialno,
                "srnoequipment": complain.srnoequipment,
                "contracttype": complain.contracttype,
                'invoiceno': complain.invoiceno,
                "invoicedate": complain.invoicedate,
                "errorcode": complain.errorcode,
                "dealername": complain.dealername,
                "installationdate": complain.installationdate,
                "skucode": complain.skucode,
                "skuname": complain.skuname,
                "brandname": complain.brandname,
                "producttobereturn": complain.producttobereturn,
                "custname": complain.custname,
                "add1": complain.add1,
                "add2": complain.add2,
                "add3": complain.add3,
                "pincode": complain.pincode,
                "area": complain.area,
                "city": complain.city,
                "state": complain.state,
                "country": complain.country,
                "description": complain.description,
                "lotno": complain.lotno ? complain.lotno : '',
                "appcomplaint": complain.appcomplaint,
                "assigntoservvendor": complain.assigntoservvendor,
                "salesrepresentative": complain.salesrepresentative,
                "newdealername": complain.newdealername,
                "serviceengname": complain.serviceengname,
                "serviceengcontact": complain.serviceengcontact,
                "visitdate": complain.visitdate,
                "servicevendorremark": complain.servicevendorremark,
                "assigntoservmg": complain.assigntoservmg,
                "activity": this.loginService.selectedactivity.id,
                "Appect": complain.Appect,
                "problemobserv": complain.problem_observed,
                "fieldvisit": complain.field_visit_remarks,
                "assigntofieldvisit": complain.assign_to
            };
            if (!!complain.servicevendorremark) {
                oneObject.needtosendcah = [{ "sermangremarks": complain.servicevendorremark,
                        "defsparepartno": complain.defective_spare_part_no,
                        "defsparerecevdate": complain.defective_spare_part_received_date,
                        "refno": complain.smart_solve_ref_no
                    }];
            }
            //  console.log(this.TAG,"FINAL Closure API Data",oneObject);
            let complain_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.post(complain_url, oneObject, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    spareInstallSaveToOB(spareComplain) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let spareInstallObject = {
                "complaintno": spareComplain.complaint_no,
                "complaintid": spareComplain.complaintid,
                "activity": this.loginService.selectedactivity.id,
                "problemobserv": spareComplain.problem_observed,
                "fieldvisit": spareComplain.field_visit_remarks,
                "proposeactn": spareComplain.proposed_action,
            };
            spareInstallObject.sparesinstall = [{ "recvdate": spareComplain.spare_received_date,
                    "repairreport": spareComplain.repair_report,
                    "compltstatus": spareComplain.complaint_status,
                    "compltndate": spareComplain.complaint_date,
                    "replacesparepartno": spareComplain.replaced_spare_part_serialNo,
                    "serviceattendedby": spareComplain.service_attended,
                    "defectivepartno": spareComplain.defective_spare_part_no,
                    "docketno": spareComplain.def_spare_docket_no,
                    "courier": spareComplain.def_spare_courier,
                    "sentdate": spareComplain.def_spare_sent_date,
                    "spareinstallclose": spareComplain.spare_install_closed,
                    "orderid": spareComplain.orderid,
                    "sapreskuid": spareComplain.sapreskuid,
                    "qty": spareComplain.qty,
                    "sparerequiredid": spareComplain.sparerequiredid
                }];
            console.log(this.TAG, "FINAL Spare Install API Data", spareInstallObject);
            let complain_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.post(complain_url, spareInstallObject, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
            throw error;
        }
    }
    getErrorCodeList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let errorCodeURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvalues?' +
                    'user_id=' + this.loginService.userid +
                    '&type=EC';
                if (!!this.errorCodeList) {
                    // console.log(this.TAG,"Not Empty");
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.errorCodeList);
                        observer.complete();
                    });
                }
                else {
                    // console.log(this.TAG,"Empty");
                    this.errorCodeList = yield this.genericHTTP.get(errorCodeURL).toPromise();
                    //  console.log(this.TAG,"Empty",this.errorCodeList);
                    return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create((observer) => {
                        observer.next(this.errorCodeList);
                        observer.complete();
                    });
                }
            }
            catch (error) {
                console.error(this.TAG, error);
            }
        });
    }
    loadMasterData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.proposedActionList = yield (yield this.getProposedActionList()).toPromise();
                this.complaintStatusList = yield (yield this.getComplaintStatus()).toPromise();
                this.errorCodeList = yield (yield this.getErrorCodeList()).toPromise();
                this.serviceManagerList = yield (yield this.getServiceManagerList()).toPromise();
            }
            catch (error) {
                console.log(this.TAG, error);
            }
        });
    }
    getCustomerServiceDetailById(complain_id) {
        try {
            let complainDetailByIdURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceDetails?' +
                'userid=' + this.loginService.userid
                + '&appcomplaint=' + 'N'
                + '&servmanager=' + 'N'
                + '&serveng=' + 'Y'
                + '&sparesku=' + 'Y'
                + '&activity=' + this.loginService.selectedactivity.id
                + '&complaint_id=' + complain_id;
            return this.genericHTTP.get(complainDetailByIdURL);
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    }
};
ServiceEngineerVisitService.ctorParameters = () => [
    { type: src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] }
];
ServiceEngineerVisitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"],
        src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]])
], ServiceEngineerVisitService);



/***/ })

}]);
//# sourceMappingURL=default~cardinal-service-engineer-visit-service-engineer-visit-detail-service-engineer-visit-detail-~47fc23e0-es2015.js.map