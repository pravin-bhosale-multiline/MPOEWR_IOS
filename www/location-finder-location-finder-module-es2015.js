(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-finder-location-finder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/location-finder/location-finder.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/location-finder/location-finder.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Lat-Long Finder</ion-title>\n    <ion-buttons slot=\"end\" style=\"font-size: 1.8rem;\" routerDirection=\"root\" routerLink=\"/home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons (click)=\"Resetpage()\" slot=\"end\" style=\"font-size: 1.8rem;\"><ion-icon name=\"refresh\"></ion-icon> \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-grid>\n\n        <form [formGroup]=\"latLongForm\" (ngSubmit)=\"saveForm(latLongForm.value)\">\n          <ion-card>\n            <ion-row>\n              <ion-col>  \n            <ion-item>\n              <ion-label position=\"stacked\">Customer<span style=\"color:red!important\">*</span></ion-label>\n\n              <ionic-selectable placeholder=\"Select Customer\"\n                                [formControl]=\"latLongForm.controls['selectedBusinessPartner']\"\n                                [items]=\"BusinessPartnerlist\" \n                                itemValueField=\"leadid\" \n                                itemTextField=\"_identifier\" \n                                [canSearch]=\"true\"\n                                (onClose)=\"onClose($event)\"\n                                (onSearch)=\"onCustDropDownSearch($event)\"\n                                \n                                (onChange)=\"onCustDropDownChange($event)\"\n                                > \n\n              </ionic-selectable>\n            </ion-item>\n            <div padding-left>\n              <ng-container *ngFor=\"let validation of validation_messages.selectedBusinessPartner\">\n                <div *ngIf=\"latLongForm.get('selectedBusinessPartner').hasError(validation.type) && latLongForm.get('selectedBusinessPartner').touched\">\n                  <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                </div>\n              </ng-container>\n            </div>\n            </ion-col>\n            </ion-row>\n<!-- (onChange)=\"onCustDropDownChange($event.component.value)\" -->\n           \n              <ion-row>\n                <ion-col>\n            <ion-item >\n              <ion-label position=\"stacked\">Shipping Address<span style=\"color:red!important\">*</span></ion-label>\n              <ion-select disabled=\"false\" \n              (ionChange)=\"onAddChange()\"\n              [formControl]=\"latLongForm.controls['selectedBPaddressshipping']\" \n              [(ngModel)]=\"selectedAddressDropDown\" \n              multiple=\"false\" \n              interface=\"popover\" \n              placeholder=\"Select Address\">\n               <ion-select-option *ngFor=\"let sadd of BPaddressshipping\" [value]=\"sadd\">{{sadd.addressname}}</ion-select-option>                <!-- <ion-select-option>this is test data from testing purpose only we have to chnage this after testing is done.</ion-select-option> -->\n              </ion-select>\n              </ion-item>\n              <div padding-left>\n                <ng-container *ngFor=\"let validation of validation_messages.selectedBPaddressshipping\">\n                  <div *ngIf=\"latLongForm.get('selectedBPaddressshipping').hasError(validation.type) && latLongForm.get('selectedBPaddressshipping').touched\">\n                    <p style=\"color: red;font-size: small;\">{{validation.message}}</p>\n                  </div>\n                </ng-container>\n              </div>\n              \n            </ion-col>\n          </ion-row>\n\n\n              <ion-item *ngIf=\"showTxtAddress\">\n                <ion-textarea>{{txtselectedAddress}}</ion-textarea>\n              </ion-item>\n\n              <ion-item>\n                <ion-text>\n                    {{txtLatitude}}\n                </ion-text>\n              </ion-item>\n\n              <ion-item>\n                <ion-text>\n                    {{txtLongitude}}\n                </ion-text>\n              </ion-item>\n              \n          </ion-card>  \n          <ion-item *ngIf=\"showBtnConvertAddressToLatLong\">\n            <ion-button (click)=\"convertAddressToLatLong()\" color=\"bluegrey\" size=\"large\" expand=\"block\" class=\"btn-lat-long\" >\n              Convert To Lat Long\n              <ion-icon slot=\"start\" name=\"compass\"></ion-icon>\n            </ion-button>\n          </ion-item>\n          <ion-item *ngIf=\"showBtnCaptureLatLong\">\n            <ion-button (click)=\"captureLatLong()\" color=\"bluegrey\" size=\"large\" expand=\"block\" class=\"btn-lat-long\" >\n              Capture Lat Long\n              <ion-icon slot=\"start\" name=\"compass\"></ion-icon>\n            </ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button (click)=\"saveForm(latLongForm.value)\" size=\"large\" expand=\"block\" class=\"btn-lat-long\" [disabled]=\"!latLongForm.valid || !txtLongitude || !txtLatitude\">\n               Save\n              <ion-icon slot=\"start\" name=\"compass\"></ion-icon>\n            </ion-button>\n\n           \n          </ion-item>\n        </form>\n  \n  </ion-grid>\n   \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/location-finder/location-finder.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/location-finder/location-finder.module.ts ***!
  \***********************************************************/
/*! exports provided: LocationFinderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFinderPageModule", function() { return LocationFinderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_finder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-finder.page */ "./src/app/location-finder/location-finder.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm2015/ionic-selectable.min.js");








const routes = [
    {
        path: '',
        component: _location_finder_page__WEBPACK_IMPORTED_MODULE_6__["LocationFinderPage"]
    }
];
let LocationFinderPageModule = class LocationFinderPageModule {
};
LocationFinderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_location_finder_page__WEBPACK_IMPORTED_MODULE_6__["LocationFinderPage"]]
    })
], LocationFinderPageModule);



/***/ }),

/***/ "./src/app/location-finder/location-finder.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/location-finder/location-finder.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-lat-long {\n  width: -webkit-fill-available !important;\n  background-color: vibrant !important;\n}\n\nion-select {\n  max-width: 100% !important;\n}\n\n/* Set the text color */\n\nion-select::part(text) {\n  color: #545ca7 !important;\n  font-size: 54px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9sb2NhdGlvbi1maW5kZXIvbG9jYXRpb24tZmluZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9jYXRpb24tZmluZGVyL2xvY2F0aW9uLWZpbmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyx3Q0FBQTtFQUNBLG9DQUFBO0FDQ0g7O0FER0E7RUFDRywwQkFBQTtBQ0FIOztBREdBLHVCQUFBOztBQUNBO0VBQ0cseUJBQUE7RUFDQSwwQkFBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvbG9jYXRpb24tZmluZGVyL2xvY2F0aW9uLWZpbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxhdC1sb25ne1xuICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHZpYnJhbnQgIWltcG9ydGFudDtcbiAgLy8gLS1iYWNrZ3JvdW5kOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0e1xuICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICBcbn1cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gICBjb2xvcjogIzU0NWNhNyAhaW1wb3J0YW50O1xuICAgZm9udC1zaXplOiA1NHB4ICFpbXBvcnRhbnQ7XG4gfSIsIi5idG4tbGF0LWxvbmcge1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2aWJyYW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgY29sb3I6ICM1NDVjYTcgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiA1NHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/location-finder/location-finder.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/location-finder/location-finder.page.ts ***!
  \*********************************************************/
/*! exports provided: LocationFinderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFinderPage", function() { return LocationFinderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neworder/neworder.service */ "./src/app/neworder/neworder.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _provider_message_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _location_finder_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./location-finder.service */ "./src/app/location-finder/location-finder.service.ts");












let LocationFinderPage = class LocationFinderPage {
    constructor(fb, neworderservice, geolocation, platform, nativeGeocoder, zone, loginauth, locationfinderservice, commonfun, msg, locationAccuracy) {
        this.fb = fb;
        this.neworderservice = neworderservice;
        this.geolocation = geolocation;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.loginauth = loginauth;
        this.locationfinderservice = locationfinderservice;
        this.commonfun = commonfun;
        this.msg = msg;
        this.locationAccuracy = locationAccuracy;
        // This variable will hold the class name.
        this.TAG = 'LocationFinderPage';
        // This variable will hold search text word count.
        this.reftextcount = 0;
        //
        this.BPaddressshipping = [];
        //
        this.showTxtAddress = false;
        //
        this.showBtnConvertAddressToLatLong = false;
        //
        this.showBtnCaptureLatLong = false;
        this.leastBusinessPartnerlist = null;
        this.validation_messages = {
            'selectedBusinessPartner': [{ type: 'required', message: ' *Please Select Customer.' }],
            'selectedBPaddressshipping': [{ type: 'required', message: '*Please Select Shipping Address.' }]
        };
        this.latLongForm = this.fb.group({
            selectedBusinessPartner: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            selectedBPaddressshipping: [, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        let mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        };
        let latlong1 = {};
        latlong1;
        latlong1.lat = 17.6599;
        latlong1.lng = 75.9064;
        let latlong2 = {};
        latlong2.lat = 19.0760;
        latlong2.lng = 72.8777;
        //this.distance = Spherical.computeDistanceBetween(latlong1,latlong2);
        let km = this.distance / 1000;
        ////---------
        if (this.msg.isplatformweb == true) {
            // this.commonfun.chkcache('location-finder');
            setTimeout(() => {
                this.checkcust();
            }, 3000);
        }
        else {
            this.checkcust();
        }
        //-------
    }
    ionViewWillEnter() {
    }
    /**
     * @kind function
     * @summary This method will save data to server.
     * @since 1.0.0
     * @returns void
     * @public
     * @module Travel Expense
     * @author Pravin Bhosale
     * @classdesc  LocationFinderPage
     */
    saveForm(val) {
        let methodTAG = 'latlongSubmit';
        try {
            //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
            this.locationfinderservice.LatLongUpdate(this.selectedAddressDropDown.addressid, this.txtLatitude, this.txtLongitude).subscribe(data => {
                var response = data;
                if (response.status == "Success") {
                    this.commonfun.presentAlert("Message", "Success", response.msg);
                    this.Resetpage();
                }
                else {
                    this.commonfun.presentAlert("Message", response.status, response.msg);
                }
            }, error => {
                //  console.log(this.TAG,methodTAG,error)
                this.commonfun.presentAlert("Message", "Error", error);
            });
        }
        catch (error) {
            console.log(this.TAG, methodTAG, error);
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    onClose(event) {
        event.component.searchText = "";
    }
    /**
     * @kind function
     * @summary This method provides information about the device's location, such as latitude and longitud.
     * @param null
     * @public
     * @returns void
     * @module Travel Expense
     * @since 0.0.7
     * @see https://github.com/apache/cordova-plugin-geolocation
     * @author Pravin Bhosale
     */
    captureLatLong() {
        let methodTAG = 'captureLatLong';
        try {
            //  console.log(methodTAG);	
            if (this.msg.isplatformweb == false) {
                this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
                    this.geolocation.getCurrentPosition().then((resp) => {
                        this.txtLatitude = resp.coords.latitude;
                        this.txtLongitude = resp.coords.longitude;
                        //  this.reverseGeocode(resp.coords.latitude,resp.coords.longitude);
                    }).catch((error) => {
                        //  console.log('Error getting location', error.message);	
                        // this.commonfun.presentAlert("Message","Error",error.message);
                    });
                }, error => console.log('Error requesting location permissions ' + JSON.stringify(error)));
            }
            else {
                //pwa
                this.geolocation.getCurrentPosition().then((resp) => {
                    this.txtLatitude = resp.coords.latitude;
                    this.txtLongitude = resp.coords.longitude;
                    //  this.reverseGeocode(resp.coords.latitude,resp.coords.longitude);
                }).catch((error) => {
                    //  console.log('Error getting location', error.message);	
                    // this.commonfun.presentAlert("Message","Error",error.message);
                });
            }
        }
        catch (error) {
            //  console.log(this.TAG,methodTAG,error);	
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    onAddChange() {
        try {
            if (!!this.selectedAddressDropDown.addressname) {
                this.txtselectedAddress = this.selectedAddressDropDown.addressname;
                this.showBtnConvertAddressToLatLong = false;
                this.showBtnCaptureLatLong = true;
            }
            else {
                this.showBtnCaptureLatLong = false;
                this.txtselectedAddress = null;
                this.showBtnConvertAddressToLatLong = false;
            }
        }
        catch (error) {
        }
    }
    convertAddressToLatLong() {
        let methodTAG = 'convertAddressToLatLong';
        try {
            this.selectedAddress = this.latLongForm.controls["selectedBPaddressshipping"].value;
            if (this.selectedAddress) {
                this.forwardGeocode(this.selectedAddress.addressname);
            }
        }
        catch (error) {
            // console.log(this.TAG,methodTAG,error);	
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    /**
     * @kind function
     * @description This method will fire when user will enter something on search box.
     * @public
     * @param $event
     * @returns void
     * @module Travel Expense
     * @since 1.0.0
     * @author Pravin Bhosale.
     */
    onCustDropDownSearch(event) {
        let methodTAG = 'onCustDropDownSearch';
        try {
            // console.log("onCustDropDownSearch");
            this.reftextcount++;
            let custsearchtext = event.text;
            if (custsearchtext.length % 3 == 0) {
                this.bindCustomerFromApi(custsearchtext);
                this.reftextcount = 0;
            }
        }
        catch (error) {
            //  console.log(this.TAG,methodTAG,error);	
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    /**
    * @kind function
    * @description This method will trigger when user will tap on list item in the drop down.
    * @public
    * @param $event
    * @returns void
    * @module Travel Expense
    * @since 1.0.0
    * @author Pravin Bhosale.
    */
    // public onCustDropDownChange(selectedBusinessPartner){
    onCustDropDownChange(event) {
        let methodTAG = 'onCustDropDownChange';
        try {
            //  console.log("onCustDropDownChange");
            // console.log("onCustDropDownChange:",event.value);
            this.getCustomerAddress(event.value);
        }
        catch (error) {
            //  console.log("Error:onCustDropDownChange",error);
        }
    }
    /**
     * @kind function
     * @description This method will fetch customer list from server and bind it local varibale.
     * @private
     * @param strsearch
     * @returns void
     * @module Travel Expense
     * @since 1.0.0.
     * @author Pravin Bhosale.
     */
    bindCustomerFromApi(strsearch) {
        let methodTAG = 'bindCustomerFromApi';
        try {
            if (strsearch != "") {
                this.locationfinderservice.getUserWiseCustomerForLatLong(strsearch).subscribe(data => {
                    var response = data;
                    this.BusinessPartnerlist = response;
                });
            }
            else {
                if (this.leastBusinessPartnerlist || this.leastBusinessPartnerlist != null) {
                    if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                        this.BusinessPartnerlist = null;
                    }
                    else {
                        this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                    }
                }
                else {
                    this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                }
            }
        }
        catch (error) {
            //  console.log(this.TAG,methodTAG,error);	
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    checkcust() {
        try {
            this.locationfinderservice.getUserWiseCustomerForLatLong("").subscribe(data => {
                var response = data;
                this.leastBusinessPartnerlist = response;
                if (this.leastBusinessPartnerlist) {
                    if (this.leastBusinessPartnerlist.length == 1) {
                        this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                        this.latLongForm.controls["selectedBusinessPartner"].setValue(this.BusinessPartnerlist[0]);
                        //this.onCustDropDownChange(this.BusinessPartnerlist[0]);
                        this.getCustomerAddress(this.BusinessPartnerlist[0]);
                    }
                    else if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                        this.BusinessPartnerlist = null;
                        this.latLongForm.controls["selectedBusinessPartner"].setValue(null);
                    }
                    else {
                        this.BusinessPartnerlist = this.leastBusinessPartnerlist;
                        this.latLongForm.controls["selectedBusinessPartner"].setValue(null);
                    }
                }
            });
        }
        catch (error) {
            //  console.log("Error:chckcust",error);
        }
    }
    /**
    * @kind function
    * @description This method will get customer address from server.
    * @private
    * @param Id Customer Id
    * @returns void
    * @module Travel Expense
    * @since 1.0.0.
    * @author Pravin Bhosale.
    */
    getCustomerAddress(selectedBusinessPartner) {
        let methodTAG = 'getCustomerAddress';
        try {
            let jsondata = selectedBusinessPartner.AddressList;
            if (jsondata.length > 0) {
                this.BPaddressshipping = jsondata;
                this.selectedAddressDropDown = this.BPaddressshipping[0];
                this.showTxtAddress = true;
                // this.BPaddressshipping[0].name = null;
                if (!!this.BPaddressshipping[0].addressname) {
                    this.txtselectedAddress = this.BPaddressshipping[0].addressname;
                    this.showBtnConvertAddressToLatLong = false;
                    this.showBtnCaptureLatLong = true;
                }
                else {
                    this.showBtnCaptureLatLong = false;
                    this.txtselectedAddress = null;
                    this.showBtnConvertAddressToLatLong = false;
                }
            }
            else {
                this.showBtnCaptureLatLong = true;
                this.BPaddressshipping = null;
                this.selectedAddressDropDown = null;
                this.showTxtAddress = false;
                this.txtselectedAddress = null;
                this.showBtnConvertAddressToLatLong = false;
            }
        }
        catch (error) {
            //   console.log("Error:getCustomerAddress:",error)
        }
    }
    /**
   * @kind function
   * @description This method will convert your lat-long into the street address.
   * @param lat
   * @param lng
   * @returns void
   * @module  Travel Expense
   * @since 0.0.8
   * @author Pravin Bhosale.
   * @see https://ionicframework.com/docs/native/native-geocoder.
   */
    reverseGeocode(lat, lng) {
        let methodTAG = 'reverseGeocode';
        try {
            if (this.platform.is('cordova')) {
                let options = {
                    useLocale: true,
                    maxResults: 1
                };
                this.nativeGeocoder.reverseGeocode(lat, lng, options)
                    .then((result) => {
                    // this.userLocation = result[0]
                    // 
                })
                    .catch((error) => console.log(error));
            }
            else {
                //For PWA App
            }
        }
        catch (error) {
            console.log(this.TAG, methodTAG, error);
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    /**
     * @kind function
     * @description This method is converting addresses (like a street address) into geographic coordinates (like latitude and longitude).
     * @param address
     * @module  Travel Expense.
     * @since 0.0.8
     * @author Pravin Bhosale.
     * @see https://ionicframework.com/docs/native/native-geocoder.
     */
    forwardGeocode(address) {
        let methodTAG = 'forwardGeocode';
        try {
            //    if (this.platform.is('cordova')) {
            if (this.msg.isplatformweb == false) {
                let options = {
                    useLocale: true,
                    maxResults: 5
                };
                this.nativeGeocoder.forwardGeocode(address, options)
                    .then((result) => {
                    this.zone.run(() => {
                        this.txtLatitude = result[0].latitude;
                        this.txtLongitude = result[0].longitude;
                    });
                })
                    .catch((error) => {
                    console.log("cATCXH", error);
                    this.commonfun.presentAlert("Message", "Error", error);
                });
            }
            else {
                //For PWA App.
                //  console.log("else");
                //  this.captureLatLong()
            }
        }
        catch (error) {
            //  console.log(this.TAG,methodTAG,error);	
            this.commonfun.presentAlert("Message", "Error", error);
        }
    }
    Resetpage() {
        try {
            this.latLongForm.reset();
            this.txtselectedAddress = null;
            this.txtLatitude = null;
            this.txtLongitude = null;
            this.showTxtAddress = false;
            this.showBtnConvertAddressToLatLong = false;
            this.showBtnCaptureLatLong = false;
            this.checkcust();
        }
        catch (error) {
            //  console.log("Error:Resetpage",error)
        }
    }
};
LocationFinderPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_2__["NeworderService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_10__["LoginauthService"] },
    { type: _location_finder_service__WEBPACK_IMPORTED_MODULE_11__["LocationFinderService"] },
    { type: _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__["Commonfun"] },
    { type: _provider_message_helper__WEBPACK_IMPORTED_MODULE_9__["Message"] },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"] }
];
LocationFinderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-finder',
        template: __webpack_require__(/*! raw-loader!./location-finder.page.html */ "./node_modules/raw-loader/index.js!./src/app/location-finder/location-finder.page.html"),
        styles: [__webpack_require__(/*! ./location-finder.page.scss */ "./src/app/location-finder/location-finder.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _neworder_neworder_service__WEBPACK_IMPORTED_MODULE_2__["NeworderService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_10__["LoginauthService"],
        _location_finder_service__WEBPACK_IMPORTED_MODULE_11__["LocationFinderService"],
        _provider_commonfun__WEBPACK_IMPORTED_MODULE_8__["Commonfun"],
        _provider_message_helper__WEBPACK_IMPORTED_MODULE_9__["Message"],
        _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"]])
], LocationFinderPage);



/***/ }),

/***/ "./src/app/location-finder/location-finder.service.ts":
/*!************************************************************!*\
  !*** ./src/app/location-finder/location-finder.service.ts ***!
  \************************************************************/
/*! exports provided: LocationFinderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFinderService", function() { return LocationFinderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





let LocationFinderService = class LocationFinderService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    getcustmerbillingaddress(leadid) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer_billing?'
            + '_selectedProperties=id,name&'
            + '_where=active=true%20and%20Mmst_Customer_ID=\'' + leadid + '\'');
    }
    getUserWiseCustomerForLatLong(strsearch) {
        strsearch = strsearch.replace(/ /g, "%20");
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomerForLatLong?'
            + 'user_id=' + this.loginauth.userid
            + '&strsearch=' + strsearch
            + '&activity_id=' + this.loginauth.selectedactivity.id);
    }
    LatLongUpdate(addid, lat, long) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileLatLongUpdate?'
            + '&addid=' + addid
            + '&lat=' + long
            + '&long=' + lat);
    }
};
LocationFinderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
LocationFinderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], LocationFinderService);



/***/ })

}]);
//# sourceMappingURL=location-finder-location-finder-module-es2015.js.map