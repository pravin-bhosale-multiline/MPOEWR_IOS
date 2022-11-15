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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer */ "./node_modules/@ionic-native/file-transfer/index.js");











var ServiceEngineerVisitService = /** @class */ (function () {
    function ServiceEngineerVisitService(genericHTTP, loginService, httpClient, msg, cordovaHTTP, platform, transfer) {
        this.genericHTTP = genericHTTP;
        this.loginService = loginService;
        this.httpClient = httpClient;
        this.msg = msg;
        this.cordovaHTTP = cordovaHTTP;
        this.platform = platform;
        this.transfer = transfer;
        this.TAG = "ServiceEngineerVisitService";
    }
    ServiceEngineerVisitService.prototype.getVenderApprovalList = function () {
        try {
            var complainListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceDetails?' +
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
    };
    ServiceEngineerVisitService.prototype.getServiceManagerList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var serviceManagerListURL, _a, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        serviceManagerListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.BusinessPartnerAsPerCategory?' +
                            'activityid=' + this.loginService.selectedactivity.id +
                            '&c_bgroup_id=' + this.loginService.service_manager_id;
                        if (!!!this.serviceManagerList) return [3 /*break*/, 1];
                        //  console.log(this.TAG,"Not Empty");
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.serviceManagerList);
                                observer.complete();
                            })];
                    case 1:
                        //  console.log(this.TAG,"Empty");
                        _a = this;
                        return [4 /*yield*/, this.genericHTTP.get(serviceManagerListURL).toPromise()];
                    case 2:
                        //  console.log(this.TAG,"Empty");
                        _a.serviceManagerList = _b.sent();
                        //  console.log(this.TAG,"Empty",this.serviceManagerList);
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.serviceManagerList);
                                observer.complete();
                            })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ServiceEngineerVisitService.prototype.getSpareSKUCode = function () {
        try {
            return this.genericHTTP.get('assets/data/skuCode.json');
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    };
    ServiceEngineerVisitService.prototype.getProposedActionList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getProposedActionListURL, _a, error_2;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        getProposedActionListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
                            'user_id=' + this.loginService.userid +
                            '&refname=' + 'MSNR%20Proposed%20Action';
                        if (!!!this.proposedActionList) return [3 /*break*/, 1];
                        //  console.log(this.TAG,"Not Empty");
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.proposedActionList);
                                observer.complete();
                            })];
                    case 1:
                        //  console.log(this.TAG,"Empty");
                        _a = this;
                        return [4 /*yield*/, this.genericHTTP.get(getProposedActionListURL).toPromise()];
                    case 2:
                        //  console.log(this.TAG,"Empty");
                        _a.proposedActionList = _b.sent();
                        // console.log(this.TAG,"Empty",this.proposedActionList);
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.proposedActionList);
                                observer.complete();
                            })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ServiceEngineerVisitService.prototype.getComplaintStatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getProposedActionListURL, _a, error_3;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        getProposedActionListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
                            'refname=' + 'MSNR%20Status';
                        if (!!!this.complaintStatusList) return [3 /*break*/, 1];
                        //  console.log(this.TAG,"Not Empty");
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.complaintStatusList);
                                observer.complete();
                            })];
                    case 1:
                        // console.log(this.TAG,"Empty");
                        _a = this;
                        return [4 /*yield*/, this.genericHTTP.get(getProposedActionListURL).toPromise()];
                    case 2:
                        // console.log(this.TAG,"Empty");
                        _a.complaintStatusList = _b.sent();
                        // console.log(this.TAG,"Empty",this.complaintStatusList);
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.complaintStatusList);
                                observer.complete();
                            })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ServiceEngineerVisitService.prototype.punchedCOPSalesOrderPost = function (spareObject) {
        try {
            var login = this.loginService.user;
            var password = this.loginService.pass;
            var auth = btoa(login + ":" + password);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            console.log(this.TAG, "punched COP Sales Order Post FINAL", spareObject);
            var punchedOrder_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.post(punchedOrder_url, spareObject, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    };
    ServiceEngineerVisitService.prototype.getAddress = function (name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    return [2 /*return*/, this.genericHTTP.get(this.loginService.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
                            + this.loginService.ReadOnlyparameter + '&'
                            + '_selectedProperties=id,name,shipToAddress,invoiceToAddress&'
                            + '_where=active=true%20and%20name=\'' + name + '\'')];
                }
                catch (error) {
                    //  console.log(this.TAG,error);
                }
                return [2 /*return*/];
            });
        });
    };
    ServiceEngineerVisitService.prototype.finalCloser = function (complain) {
        try {
            var login = this.loginService.user;
            var password = this.loginService.pass;
            var auth = btoa(login + ":" + password);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            var oneObject = {
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
            var complain_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            //return  this.genericHTTP.post(complain_url,oneObject,httpOptions);
            if (complain.file_type == "image") {
                return this.genericHTTP.post(complain_url, oneObject, httpOptions);
            }
            else if (complain.file_type == "pdf") {
                if (this.msg.isplatformweb == true) {
                    var formData = new FormData();
                    var postData = JSON.stringify(oneObject);
                    formData.append("postData", postData);
                    // formData.append('complaintid',complain.complaintid)
                    // formData.append('compltstatus',complain.complaint_status)
                    formData.append('imagebase64', oneObject.imagebase64, oneObject.imagebase64.name);
                    formData.append('file_type', complain.file_type);
                    var login_1 = this.loginService.user;
                    var password_1 = this.loginService.pass;
                    var auth_1 = btoa(login_1 + ":" + password_1);
                    var httpOptions_1 = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Authorization': 'Basic ' + auth_1
                        })
                    };
                    console.log(this.TAG, "final Closer With Pdf Final Data", formData);
                    var save_quotation = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
                    return this.genericHTTP.fileDevicePost(save_quotation, formData, httpOptions_1);
                }
                else if (this.platform.is('android')) {
                    this.uploadPDFFileServiceAndroidiOS(oneObject, complain.file_selected_uri).then(function (data) {
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
    };
    ServiceEngineerVisitService.prototype.finalCloserWithPdf = function (data) {
        try {
            var login = this.loginService.user;
            var password = this.loginService.pass;
            var auth = btoa(login + ":" + password);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + auth
                })
            };
            console.log(this.TAG, "final Closer With Pdf Final Data", data);
            var save_quotation = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.fileDevicePost(save_quotation, data, httpOptions);
        }
        catch (error) {
        }
    };
    ServiceEngineerVisitService.prototype.uploadPDFFileServiceAndroidiOS = function (data, path) {
        var _this = this;
        try {
            var login = this.loginService.user;
            var password = this.loginService.pass;
            this.cordovaHTTP.setDataSerializer('multipart');
            var filePath_1 = [path];
            var auth = btoa(login + ":" + password);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Basic ' + auth
                })
            };
            var auth1 = httpOptions.headers.get('Authorization');
            var specificHeader_1 = {
                'Authorization': auth1
            };
            console.log(this.TAG, "file upload data", data);
            var save_file_url_1 = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.cordovaHTTP.uploadFile(save_file_url_1, data, specificHeader_1, filePath_1, "imagebase64").then(function (response) {
                    var data;
                    if (!!response.data) {
                        data = JSON.parse(response.data);
                    }
                    else {
                        data = response;
                    }
                    observer.next(data);
                    observer.complete();
                }).catch(function (error) {
                    // this.commonFunction.loadingDismiss();
                    console.log(_this.TAG, "file upload error", error);
                    throw error;
                    //  this.commonFunction.loadingDismiss();
                    //  console.log(this.TAG, "file upload error", error);
                });
            });
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    ServiceEngineerVisitService.prototype.uploadPDFFileiOS = function (jsondata, selectedURI) {
        try {
            var login = this.loginService.user;
            var password = this.loginService.pass;
            var auth = btoa(login + ":" + password);
            var save_file_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.WMobileOrderPunchOB?';
            var fileTransfer = this.transfer.create();
            var options = {
                fileKey: 'imagebase64',
                fileName: jsondata.fileName,
                params: jsondata,
                headers: { 'Authorization': 'Basic ' + auth }
            };
            fileTransfer.upload(selectedURI, save_file_url, options)
                .then(function (data) {
                console.log("pravin YESSSSS", data);
                var formatResponse = JSON.parse(data.response);
                console.log("File Uplaod Result", formatResponse);
                if (data != null) {
                }
            }, function (err) {
            });
        }
        catch (error) {
            console.log(this.TAG, error);
        }
    };
    ServiceEngineerVisitService.prototype.serviceManagerClose = function (complain) {
        try {
            var login = this.loginService.user;
            var password = this.loginService.pass;
            var auth = btoa(login + ":" + password);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            var oneObject = {
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
            var complain_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.post(complain_url, oneObject, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    };
    ServiceEngineerVisitService.prototype.spareInstallSaveToOB = function (spareComplain) {
        try {
            var login = this.loginService.user;
            var password = this.loginService.pass;
            var auth = btoa(login + ":" + password);
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            var spareInstallObject = {
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
            var complain_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHTTP.post(complain_url, spareInstallObject, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
            throw error;
        }
    };
    ServiceEngineerVisitService.prototype.getErrorCodeList = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var errorCodeURL, _a, error_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        errorCodeURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvalues?' +
                            'user_id=' + this.loginService.userid +
                            '&type=EC';
                        if (!!!this.errorCodeList) return [3 /*break*/, 1];
                        // console.log(this.TAG,"Not Empty");
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.errorCodeList);
                                observer.complete();
                            })];
                    case 1:
                        // console.log(this.TAG,"Empty");
                        _a = this;
                        return [4 /*yield*/, this.genericHTTP.get(errorCodeURL).toPromise()];
                    case 2:
                        // console.log(this.TAG,"Empty");
                        _a.errorCodeList = _b.sent();
                        //  console.log(this.TAG,"Empty",this.errorCodeList);
                        return [2 /*return*/, rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                                observer.next(_this.errorCodeList);
                                observer.complete();
                            })];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_4 = _b.sent();
                        console.error(this.TAG, error_4);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ServiceEngineerVisitService.prototype.loadMasterData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 9, , 10]);
                        _a = this;
                        return [4 /*yield*/, this.getProposedActionList()];
                    case 1: return [4 /*yield*/, (_e.sent()).toPromise()];
                    case 2:
                        _a.proposedActionList = _e.sent();
                        _b = this;
                        return [4 /*yield*/, this.getComplaintStatus()];
                    case 3: return [4 /*yield*/, (_e.sent()).toPromise()];
                    case 4:
                        _b.complaintStatusList = _e.sent();
                        _c = this;
                        return [4 /*yield*/, this.getErrorCodeList()];
                    case 5: return [4 /*yield*/, (_e.sent()).toPromise()];
                    case 6:
                        _c.errorCodeList = _e.sent();
                        _d = this;
                        return [4 /*yield*/, this.getServiceManagerList()];
                    case 7: return [4 /*yield*/, (_e.sent()).toPromise()];
                    case 8:
                        _d.serviceManagerList = _e.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        error_5 = _e.sent();
                        console.log(this.TAG, error_5);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    ServiceEngineerVisitService.prototype.getCustomerServiceDetailById = function (complain_id) {
        try {
            var complainDetailByIdURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceDetails?' +
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
    };
    ServiceEngineerVisitService.ctorParameters = function () { return [
        { type: src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"] },
        { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"] }
    ]; };
    ServiceEngineerVisitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"],
            src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_provider_message_helper__WEBPACK_IMPORTED_MODULE_7__["Message"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"], _ionic_native_file_transfer__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"]])
    ], ServiceEngineerVisitService);
    return ServiceEngineerVisitService;
}());



/***/ })

}]);
//# sourceMappingURL=default~cardinal-service-engineer-visit-service-engineer-visit-detail-service-engineer-visit-detail-~47fc23e0-es5.js.map