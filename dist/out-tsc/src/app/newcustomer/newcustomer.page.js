import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { LoginauthService } from '../login/loginauth.service';
import { NewcustomerService } from './newcustomer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Validator } from '../../provider/validator-helper';
import { LoadingController, AlertController } from '@ionic/angular';
let NewcustomerPage = class NewcustomerPage {
    //end
    constructor(loginauth, newcustomerservice, imagePicker, camera, router, route, fb, val, loadingController, alertCtrl, cdRef) {
        this.loginauth = loginauth;
        this.newcustomerservice = newcustomerservice;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.val = val;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.cdRef = cdRef;
        this.isLoading = false;
        this.test = { "organization": "" };
        this.selectedbprt = '';
        this.img = '';
        this.selectedactivity = '';
        this.selectedbpcat = '';
        this.selectedbpl = '';
        this.selectedcn = '';
        this.isBPLEnabled = true;
        this.validationSummary = '';
        this.firstname = '';
        this.middlename = '';
        this.lastname = '';
        this.firmname = '';
        this.gstno = '';
        this.isClickOnAddress = false;
        this.add1 = '';
        this.add2 = '';
        this.add3 = '';
        this.district = '';
        this.mobileno = '';
        this.email = '';
        this.isbill = false;
        this.isShip = false;
        this.fileUrl = '';
        this.edtitcustid = '';
        this.validatecomplianceimage = false;
        // Allcustomer1: customerheader[];
        this.reftextcount = 0;
        this.firstnamereq = '';
        this.lastnamereq = '';
        this.firmnamereq = '';
        // response :any={"logmsg":"","resposemsg":""};
        this.validation_messages = {
            'selectedactivity': [
                { type: 'required', message: ' *Please Select Activity.' }
            ],
            'selectedcn': [
                { type: 'required', message: '*Please Select Customer Nature' }
            ],
            'firstname': [
                { type: 'required', message: '*Please Enter First Name' }
            ],
            'lastname': [
                { type: 'required', message: '*Please Enter Last Name' }
            ],
            'firmname': [
                { type: 'required', message: '*Please Enter Firm Name' }
            ],
            'add1': [
                { type: 'required', message: '*Please Enter Address Line 1' }
            ],
            'pincode': [
                { type: 'required', message: '*Please Enter Pin Code' }
            ],
            'selectedarea': [
                { type: 'required', message: '*Please Select Area.' }
            ],
            'mobileno': [
                { type: 'required', message: '*Please Enter Mobile No.' },
                { type: 'InvalidNumber', message: '*Please Enter Valid Mobile No.' }
            ],
            'panno': [
                { type: 'InvalidPanno', message: '*Please Enter Valid PAN No.' }
            ],
            'email': [
                { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }
            ],
            'gstno': [
                { type: 'InvalidgstNumber', message: '*Please Enter Valid GST No.' }
            ]
        };
        this.form = this.fb.group({
            selectedactivity: [, Validators.required],
            selectedcn: [, Validators.required],
            firstname: [],
            middlename: [],
            lastname: [],
            firmname: [],
            panno: [],
            selectedbpl: [],
            selectedbprt: [],
            selectedbpcat: [],
            add1: [, Validators.required],
            add2: [],
            add3: [],
            pincode: [, Validators.required],
            selectedarea: [, Validators.required],
            mobileno: [, Validators.required, val.numberValid],
            //   email: [,this.val.emailValid],
            email: [],
            onecustomer: [],
            isbill: [],
            isShip: [],
            gstno: [],
            num: []
        });
    }
    refChange(event) {
        console.log('ref:', event.value);
    }
    portChange(event) {
        console.log('port:', event.value);
    }
    //async search
    filterPorts(Allcustomer1, text) {
        console.log("asd");
        return Allcustomer1.filter(port => {
            return this.onecustomer.sfname.toLowerCase().indexOf(text) !== -1 ||
                this.onecustomer.slname.toLowerCase().indexOf(text) !== -1 ||
                this.onecustomer.sfirmName.toLowerCase().indexOf(text) !== -1;
        });
    }
    searchref(event) {
        this.reftextcount++;
        if (this.reftextcount == 3) {
            let text = event.text.trim().toLowerCase();
            event.component.startSearch();
            // Close any running subscription.
            if (this.portsSubscription) {
                this.portsSubscription.unsubscribe();
            }
            if (!text) {
                // Close any running subscription.
                if (this.portsSubscription) {
                    this.portsSubscription.unsubscribe();
                }
                event.component.items = [];
                event.component.endSearch();
                return;
            }
            this.portsSubscription = this.newcustomerservice.getreferalcustmer(this.selectedactivity).subscribe(data => {
                // Subscription will be closed when unsubscribed manually.
                const response = data['response'];
                var organization = response.data.map(function (customer) {
                    customer.sfname = customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname);
                    customer.sfname = (customer.sfname == null ? "" : customer.sfname);
                    console.log('customer.sfname', customer.sfname);
                    return customer;
                });
                this.Allcustomer = organization;
                if (this.portsSubscription.closed) {
                    return;
                }
                event.component.items = this.filterPorts(this.Allcustomer, text);
                event.component.endSearch();
            });
            this.reftextcount;
        }
    }
    ngOnInit() {
        console.log('ngOnInit');
        this.form.reset();
        this.fileUrl = "";
        this.compliancedata = null;
        this.img = '';
        this.Bindallactivity();
        //Referal Code
        // this.BindAllrefcustomer();
    }
    Bindallactivity() {
        /*
               this.loginauth.getuserorgwise(this.loginauth.userid).subscribe(data => {
              const response = data['response'];
             
            var organization = response.data.map(function(item) {
              return '\'' +item.organization+'\''
            });
            console.log("organization",organization);
           
            this.loginauth.getAllActivity1(organization).subscribe(data => {
              const response = data['response'];
              this.activitylist = response.data;
              console.log("getAllActivity1.data",response.data);
        
              this.route.queryParams.subscribe(params => {
              this.edtitcustid = params["selectedcustomer"]
              });
              if (this.edtitcustid != undefined || this.edtitcustid == '') {
                this.editCustomer(this.edtitcustid);
              
        
              }
        
          });
            
          }); */
        this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
            const response = data['response'];
            console.log("Acitcitydata", data);
            this.activitylist = data;
            console.log("this.loginauth.userid", this.loginauth.userid);
            console.log("Acitcity", data);
            this.route.queryParams.subscribe(params => {
                this.edtitcustid = params["selectedcustomer"];
            });
            if (this.edtitcustid != undefined || this.edtitcustid == '') {
                this.editCustomer(this.edtitcustid);
            }
        });
    }
    Validatecn() {
        this.Iscnvalidate = false;
        this.selectedcn = this.form.controls["selectedcn"].value;
        var fnm = this.form.controls["firstname"].value == null ? "" : this.form.controls["firstname"].value;
        var lnm = this.form.controls["lastname"].value == null ? "" : this.form.controls["lastname"].value;
        var frnm = this.form.controls["firmname"].value == null ? "" : this.form.controls["firmname"].value;
        if (this.selectedcn == 'I' &&
            (fnm != "") &&
            (lnm != "")) {
            this.Iscnvalidate = true;
            console.log("1in");
        }
        else if (this.selectedcn == 'F' &&
            (frnm != "")) {
            this.Iscnvalidate = true;
            console.log("2in");
        }
        else if (this.selectedcn == 'H' &&
            ((frnm != "") ||
                (fnm != "") &&
                    (lnm != ""))) {
            this.Iscnvalidate = true;
            console.log("3in");
        }
        else {
            this.Iscnvalidate = false;
            console.log("4in");
        }
        console.log("this.Iscnvalidate", this.Iscnvalidate);
    }
    onChangecn() {
        console.log("onChangecn");
        this.selectedcn = this.form.controls["selectedcn"].value;
        console.log(this.selectedcn);
        if (this.selectedcn == 'I') {
            this.IsInd = true;
            this.Isfirm = false;
            this.firstnamereq = "*";
            this.lastnamereq = "*";
            this.firmnamereq = "";
        }
        else if (this.selectedcn == 'F') {
            this.IsInd = false;
            this.Isfirm = true;
            this.firstnamereq = "";
            this.lastnamereq = "";
            this.firmnamereq = "*";
        }
        else if (this.selectedcn == 'H') {
            this.IsInd = false;
            this.Isfirm = false;
        }
    }
    //Alert message
    presentAlert(Header, SubHeader, Message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: Header,
                subHeader: SubHeader,
                message: Message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    //Capture Image from Camera
    takePicture(Type, mmstComplianceDetails_id) {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then((imageData) => {
            if (Type == "PANpic") {
                this.fileUrl = 'data:image/jpeg;base64,' + imageData;
                this.img = imageData;
            }
            if (Type == "complince") {
                for (var i = 0; i < this.compliancedata.length; i++) {
                    if (this.compliancedata[i].mmstComplianceDetails_id == mmstComplianceDetails_id) {
                        console.log("imageData: ", imageData);
                        this.compliancedata[i].imgcomp = imageData;
                    }
                }
            }
        }, (err) => {
            console.log("Camera issue:" + err);
        });
    }
    //Select Image from library
    getimage(Type, mmstComplianceDetails_id) {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then((imageData) => {
            if (Type == "PANpic") {
                this.fileUrl = 'data:image/jpeg;base64,' + imageData;
                this.img = imageData;
            }
            if (Type == "complince") {
                for (var i = 0; i < this.compliancedata.length; i++) {
                    if (this.compliancedata[i].mmstComplianceDetails_id == mmstComplianceDetails_id) {
                        console.log("imageData: ", imageData);
                        this.compliancedata[i].imgcomp = imageData;
                    }
                }
            }
        }, (err) => { });
    }
    BindAllrefcustomer() {
        console.log("BindAllrefcustomer()", this.selectedactivity);
        this.onecustomer = null;
        this.newcustomerservice.getreferalcustmer(this.selectedactivity).subscribe(data => {
            const response = data['response'];
            //this.Allcustomer = response.data;
            var organization = response.data.map(function (customer) {
                //    customer.sfname=  customer.scusNature==='F'?customer.sfirmName + '-' + customer.spanno:customer.sfname +'-' +(customer.spanno==="null"?"":customer.spanno)
                customer.sfname = customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname);
                customer.sfname = (customer.sfname == null ? "" : customer.sfname);
                return customer;
            });
            this.Allcustomer = organization;
        });
    }
    onBpChange() {
        console.log('form valid', this.form);
        console.log('form value', this.form.value.Valid);
        this.validatecomplianceimage = false;
        this.newcustomerservice.getCompilanceData(this.form.controls['selectedbpcat'].value).subscribe(data => {
            this.compliancedata = data;
            if (!this.compliancedata.hasOwnProperty("num")) {
                for (var i = 0; i < this.compliancedata.length; i++) {
                    console.log("Has no num");
                    this.compliancedata[i].num = "";
                }
            }
            if (!this.compliancedata.hasOwnProperty("imgcomp")) {
                for (var i = 0; i < this.compliancedata.length; i++) {
                    this.compliancedata[i].imgcomp = "";
                    console.log("Has no imgcomp");
                }
            }
        });
    }
    onBPLChange() {
        this.selectedbpl = this.form.controls['selectedbpl'].value;
        console.log("this.selectedbpl", this.selectedbpl);
        if (this.selectedbpl == "S")
            this.isBPLEnabled = false;
        else
            this.isBPLEnabled = true;
        console.log(" this.isBPLEnabled ", this.isBPLEnabled);
    }
    onActChange() {
        this.selectedactivity = this.form.controls['selectedactivity'].value;
        this.getbussnessPartnerCategory();
        this.getTaggedBusinessPartner();
        this.BindAllrefcustomer();
    }
    getTaggedBusinessPartner() {
        this.newcustomerservice.getBPartner(this.selectedactivity).subscribe(data => {
            const response = data['response'];
            this.bplist = response.data;
        });
    }
    getbussnessPartnerCategory() {
        this.newcustomerservice.getBPCategory(this.selectedactivity).subscribe(data => {
            const response = data['response'];
            this.bpcatlist = response.data;
        });
    }
    onChangepin(id = '', customerId) {
        //var that = this;
        this.newcustomerservice.getPincode(this.form.controls["pincode"].value).subscribe(data => {
            const response = data['response'];
            this.pincodelist = response.data;
            if (this.pincodelist.length > 0) {
                this.invalidpincode = '';
                this.newcustomerservice.getarea(this.pincodelist[0].id).subscribe(data => {
                    const response = data['response'];
                    this.arealist = response.data;
                    this.state = this.pincodelist[0].region$_identifier;
                    this.country = this.pincodelist[0].country$_identifier;
                    this.district = this.pincodelist[0].district$_identifier;
                    if (id != '' || id == undefined) {
                        this.selectedarea = this.arealist.find(item => item.id === id);
                        setTimeout(() => {
                            this.form.controls["selectedarea"].setValue(this.selectedarea);
                            this.form.controls["selectedbpcat"].setValue(this.customerheader[0].bpGroup);
                            this.form.controls["selectedbprt"].setValue(this.bplist.find(item => item.id === this.customerheader[0].tAGBpartner));
                            this.onecustomer = this.Allcustomer.find(item => item.id === this.customerheader[0].newlead);
                            this.form.controls["onecustomer"].setValue(this.Allcustomer.find(item => item.id === this.customerheader[0].newlead));
                            this.existingcustomercompliance(customerId);
                        }, 1000);
                        console.log("this.selectedarea", this.selectedarea);
                        //   this.city = this.selectedarea.cttv$_identifier;
                    }
                });
                this.invalidpincode = '';
            }
            else {
                this.state = '';
                this.country = '';
                this.district = '';
                this.invalidpincode = 'Invalid Pincode';
                this.arealist = null;
                this.city = '';
                this.form.controls["selectedarea"].setValue(null);
            }
        }), error => {
            console.log("Error:", error);
            this.state = '';
            this.country = '';
            this.district = '';
            this.invalidpincode = 'Invalid Pincode';
            this.arealist = null;
            this.city = '';
        };
    }
    onChange(activity) {
    }
    addAddress() {
        this.isClickOnAddress = true;
    }
    onChangeArea(area) {
        this.selectedarea = this.form.controls["selectedarea"].value;
        console.log(" this.selectedarea change", this.selectedarea);
        this.city = this.selectedarea.cttv$_identifier;
    }
    loadingPresent() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                message: 'Please wait ...',
                spinner: 'circles'
            }).then(a => {
                a.present().then(() => {
                    console.log('loading presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort laoding'));
                    }
                });
            });
        });
    }
    loadingDismiss() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => console.log('loading dismissed'));
        });
    }
    onSaveDraft(value) {
        // this.loadingController.create({
        //   duration: 1000,
        //   spinner: 'circles',
        //   message: 'Please Wait...'}).then((res) => {
        //     res.present(); });
        //console.log("taggbp",value.selectedbprt);
        var referalcode = "";
        console.log("value.onecustomer", value.onecustomer);
        if (value.onecustomer != null && value.onecustomer != undefined) {
            referalcode = value.onecustomer.id;
        }
        var taggbp = "";
        if (value.selectedbprt != null) {
            taggbp = value.selectedbprt.id;
        }
        this.loadingPresent();
        var jsondata = {
            "cust_id": this.edtitcustid == undefined ? "" : this.edtitcustid,
            "referalcode": referalcode,
            "org_id": "0",
            "activity_id": value.selectedactivity,
            "cust_nature": value.selectedcn,
            "firstname": value.firstname,
            "middlename": value.middlename,
            "lastname": value.lastname,
            "firmname": value.firmname,
            "panno": value.panno != null ? value.panno.toUpperCase() : "",
            "img": this.img,
            "bpc_id": value.selectedbpcat,
            "complete": "",
            "mobileno": value.mobileno,
            "taggbp": taggbp,
            "add1": value.add1,
            "add2": value.add2,
            "add3": value.add3,
            "pincode": this.pincodelist[0].spincode,
            "area": value.selectedarea.id,
            "city": this.selectedarea.cttv,
            "state": this.pincodelist[0].region,
            "country": this.pincodelist[0].country,
            "district": this.pincodelist[0].district,
            "gst": value.gstno != null ? value.gstno.toUpperCase() : "",
            "email": value.email == "null" ? '' : value.email,
            "billing": value.isbill == true ? "true" : "false",
            "shipping": value.isShip == true ? 'true' : 'false',
            "mmstComplianceDetails_id": (this.compliancedata == undefined ? "" : this.compliancedata),
            "level": value.selectedbpl
        };
        console.log("Insert Json", jsondata);
        this.newcustomerservice.LeadComplete(jsondata).subscribe(data => {
            console.log('data', data);
            //const response = data['response'];
            //const resp=data.;
            //  response :any={"logmsg":"","resposemsg":""};
            if (data != null) {
                this.response = data;
                console.log("this.response", this.response);
                if (this.response.resposemsg == "success") {
                    this.loadingDismiss();
                    this.presentAlert("Message", "Success", "Customer Saved in Draft.");
                    this.Resetpage();
                }
                // else if(this.response.resposemsg=="fail"){
                //   this.presentAlert("Message","Fail",this.response.resposemsg);
                // }
                else {
                    this.loadingDismiss();
                    // this.presentAlert("Message","Fail","Something went wrong.");
                    this.presentAlert("message", "Fail", this.response.logmsg);
                }
            }
        });
    }
    onConvertintoCustomer(value) {
        //  Validate Compliance
        var compliancedatavalid = false;
        if (this.compliancedata != undefined || this.compliancedata != null) {
            console.log("this.compliancedata1=", this.compliancedata);
            var msg = '';
            for (var i = 0; i < this.compliancedata.length; i++) {
                console.log("num", this.compliancedata[i].num);
                if (this.compliancedata[i].num == "")
                    compliancedatavalid = true;
                if (this.compliancedata[i].imgcomp == "" && this.validatecomplianceimage == false)
                    compliancedatavalid = true;
            }
        }
        if (compliancedatavalid == false) {
            var referalcode = "";
            console.log("value.onecustomer", value.onecustomer);
            if (value.onecustomer != null) {
                referalcode = value.onecustomer.id;
            }
            var taggbp = "";
            if (value.selectedbprt != null) {
                taggbp = value.selectedbprt.id;
            }
            this.loadingPresent();
            var jsondata = {
                "cust_id": this.edtitcustid == undefined ? "" : this.edtitcustid,
                "referalcode": referalcode,
                "org_id": "0",
                "activity_id": value.selectedactivity,
                "cust_nature": value.selectedcn,
                "firstname": value.firstname,
                "middlename": value.middlename,
                "lastname": value.lastname,
                "firmname": value.firmname,
                "panno": value.panno != null ? value.panno.toUpperCase() : "",
                "img": this.img,
                "bpc_id": value.selectedbpcat,
                "complete": "true",
                "mobileno": value.mobileno,
                "taggbp": taggbp,
                "add1": value.add1,
                "add2": value.add2,
                "add3": value.add3,
                "pincode": this.pincodelist[0].spincode,
                "area": value.selectedarea.id,
                "city": this.selectedarea.cttv,
                "state": this.pincodelist[0].region,
                "country": this.pincodelist[0].country,
                "district": this.pincodelist[0].district,
                "gst": value.gstno != null ? value.gstno.toUpperCase() : "",
                "email": value.email,
                "billing": value.isbill == true ? "true" : "false",
                "shipping": value.isShip == true ? 'true' : 'false',
                "mmstComplianceDetails_id": (this.compliancedata == undefined ? "" : this.compliancedata),
                "level": value.selectedbpl
            };
            console.log("Update Json", jsondata);
            this.newcustomerservice.LeadComplete(jsondata).subscribe(data => {
                if (data != null) {
                    this.response = data;
                    console.log("this.response", this.response);
                    if (this.response.resposemsg == "success") {
                        this.loadingDismiss();
                        this.presentAlert("Message", "Success", "Customer Converted Successfully.");
                        this.Resetpage();
                    }
                    // else if(this.response.resposemsg=="fail"){
                    //   this.presentAlert("Message","Fail","");
                    // }
                    else {
                        this.loadingDismiss();
                        this.presentAlert("Message", "Fail", "Something went wrong.");
                    }
                }
            });
            //,res => {console.log('HTTP response', res)}
        }
        else {
            this.presentAlert("Alert!", "Warning", "Please fill Complince data.");
        }
    }
    Resetpage() {
        this.form.reset();
        this.fileUrl = "";
        this.compliancedata = null;
        this.img = '';
        this.Iscnvalidate = false;
        this.state = '';
        this.country = '';
        this.district = '';
        this.city = '';
        // this.router.navigateByUrl('/newcustomer');
        this.router.navigateByUrl('/newcustomer');
        //this.router.navigate([this.router.url]);
    }
    ChosePic(Type, mmstComplianceDetails_id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Select Option',
                message: "Select Option to get Picture.",
                buttons: [
                    {
                        text: 'Gallary',
                        handler: data => {
                            this.getimage(Type, mmstComplianceDetails_id);
                        }
                    },
                    {
                        text: 'Camera',
                        handler: data => {
                            this.takePicture(Type, mmstComplianceDetails_id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    change(value) {
        //manually launch change detection
        this.cdRef.detectChanges();
        console.log("cvahnge mobile", value.length > 8 ? value.substring(0, 8) : value);
        // this.username = value.length > 8 ? value.substring(0,8) : value;
        this.form.controls["mobileno"].setValue(value.length > 8 ? value.substring(0, 8) : value);
    }
    editCustomer(customerId) {
        //Referal Code
        if (customerId != '') {
            this.newcustomerservice.geteditcustmerheader(customerId).subscribe(data => {
                const response = data['response'];
                this.customerheader = response.data;
                //bind Category
                this.newcustomerservice.getBPCategory(this.customerheader[0].mmstOrgAct).subscribe(data => {
                    const response = data['response'];
                    this.bpcatlist = response.data;
                    this.selectedbpcat = this.customerheader[0].bpGroup;
                });
                this.form.controls["selectedactivity"].setValue(this.customerheader[0].mmstOrgAct);
                this.form.controls["selectedcn"].setValue(this.customerheader[0].scusNature);
                this.form.controls["firstname"].setValue(this.customerheader[0].sfname);
                this.form.controls["middlename"].setValue(this.customerheader[0].smname);
                this.form.controls["lastname"].setValue(this.customerheader[0].slname);
                this.form.controls["panno"].setValue(this.customerheader[0].spanno);
                this.form.controls["firmname"].setValue(this.customerheader[0].sfirmName);
                this.form.controls["email"].setValue(this.customerheader[0].semail == "null" ? '' : this.customerheader[0].semail);
                this.form.controls["mobileno"].setValue(this.customerheader[0].nmobile);
                if (this.customerheader[0].mmstLovVal$_identifier == "Secondary") {
                    this.form.controls["selectedbpl"].setValue("S");
                    this.isBPLEnabled = false;
                }
                if (this.customerheader[0].mmstLovVal$_identifier == "Primary") {
                    this.form.controls["selectedbpl"].setValue("P");
                    this.isBPLEnabled = true;
                }
                console.log("this.customerheader", this.customerheader);
                //console.log('activitylist',this.activitylist)
            });
            this.newcustomerservice.geteditcustmerbilling(customerId).subscribe(data => {
                const response = data['response'];
                this.customerbilling = response.data;
                console.log("this.customerbilling", this.customerbilling);
                this.form.controls["add1"].setValue(this.customerbilling[0].saddress1);
                this.form.controls["add2"].setValue(this.customerbilling[0].saddress2 == "null" ? '' : this.customerbilling[0].saddress2);
                this.form.controls["add3"].setValue(this.customerbilling[0].saddress3 == "null" ? '' : this.customerbilling[0].saddress3);
                this.form.controls["pincode"].setValue(this.customerbilling[0].spincode);
                this.form.controls["isbill"].setValue(this.customerbilling[0].isbilling.toString() === "true" ? true : false);
                this.form.controls["isShip"].setValue(this.customerbilling[0].isshipping.toString() === "true" ? true : false);
                this.form.controls["gstno"].setValue(this.customerbilling[0].mmstSgstno);
                console.log("gst", this.customerbilling[0].mmstSgstno);
                this.onActChange();
                this.onChangepin(this.customerbilling[0].mmstPostOffVal, customerId);
            });
        }
    }
    existingcustomercompliance(customerId) {
        console.log('existingcustomercompliance', customerId);
        this.newcustomerservice.geteditcustmercompliance(customerId).subscribe(data => {
            const response = data['response'];
            console.log("compliance", response.data);
            for (var i = 0; i < response.data.length; i++) {
                this.compliancedata[i].mmstComplianceDetails_id = response.data[i].id;
                this.compliancedata[i].Compliance_Type = response.data[i].scomplianceType;
                this.compliancedata[i].num = response.data[i].snumber;
                //this.compliancedata[i].isImage=response.data[i].image;
                console.log("compliancedata", this.compliancedata);
                this.validatecomplianceimage = true;
            }
        });
    }
};
NewcustomerPage = tslib_1.__decorate([
    Component({
        selector: 'app-newcustomer',
        templateUrl: './newcustomer.page.html',
        styleUrls: ['./newcustomer.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService, NewcustomerService,
        ImagePicker,
        Camera, Router, ActivatedRoute,
        FormBuilder, Validator,
        LoadingController,
        AlertController,
        ChangeDetectorRef])
], NewcustomerPage);
export { NewcustomerPage };
//# sourceMappingURL=newcustomer.page.js.map