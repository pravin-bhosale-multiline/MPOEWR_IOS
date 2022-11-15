import { Component, OnInit, ChangeDetectorRef, ɵConsole } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoginauthService, AllAct, customerheader, userwiseAct } from '../login/loginauth.service';
import { compliancedata, NewcustomerService, BPcategory, BPartner, Pincode, Area, LeadComplete, customerbilling, ComplianceData } from './newcustomer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validator } from '../../provider/validator-helper';
import { LoadingController, AlertController, Platform, MenuController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription } from 'rxjs';
import { Commonfun } from '../../provider/commonfun'
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.page'
import { Message } from '../../provider/message-helper'
import { GenericHttpClientService } from '../common/generic-http-client.service';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.page.html',
  styleUrls: ['./newcustomer.page.scss'],
})
export class NewcustomerPage implements OnInit {
  form: FormGroup;
  portsSubscription: Subscription;

  isLoading = false;
  //  activitylist: AllAct[];
  activitylist: any = [];
  salesarealist: any;

  userwiseAct: userwiseAct[];
  test: any = { "organization": "" };
  bpcatlist: BPcategory[];
  selectedbp: BPcategory;
  selectedbprt: string = '';
  bplist: BPartner[];
  onebplist: BPartner;
  //for customer data
  cust_nature: string;
  img: string = ''
  bpc_id: string;
  LeadCompletedata: LeadComplete[];
  //End
  compliancedata: compliancedata[];
  rowcompliancedata: any;

  selectedactivity: string = '';
  selectedbpcat: string = '';
  selectedbpl: string = '';
  selectedcn: string = '';
  isBPLEnabled = true;
  validationSummary: string = '';
  firstname: string = '';
  middlename: string = '';
  lastname: string = '';
  firmname: string = '';
  pincodelist: Pincode[];
  selectedpincode: Pincode;
  invalidpincode: string;
  panno;
  gstno: string = '';
  isClickOnAddress = false;
  add1 = '';
  add2 = '';
  add3 = '';
  pincode;
  area;
  arealist: Area[];
  selectedarea: Area;
  getarea: any;
  cttv$_identifier: string;
  city;
  state;
  country;
  district: string = '';
  mobileno = '';
  email = '';
  preferredTransportEmailIDCtrl = '';
  isbill = false;
  isShip = false;
  fileUrl: any = '';
  edtitcustid: string = '';
  customerheader: any;// customerheader[];
  customerbilling: customerbilling[];
  Allcustomer: customerheader[];
  reftextcount = 0;
  onecustomer: customerheader;
  IsExisting: string = "false";
  IsInd;
  Isfirm;
  firstnamereq: string = '';
  lastnamereq: string = '';
  firmnamereq: string = '';
  Iscnvalidate;
  array: any;
  response: any;
  mmstRegioncode: string = "";
  isdesktop: boolean = false;
  comdatasingle = [];
  today: any = new Date().toJSON().split('T')[0];
  isNewRegistration = false;
  singlephoto = [];
  leastsalesarealist: any;

  preferredTransportList;
  showPreferredTransportControl = false;
  showPreferredTransportNameControl = false;
  selectedPreferredTransport;

  validation_messages = {
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
    'selectedsalesarea': [
      { type: 'required', message: ' *Please Select Sales Area.' }
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
    ],
    'selectedbpcat': [
      { type: 'required', message: '*Please Select Business Partner Category' }
    ],
    'preferredTransportNameMss': [
      { type: 'required', message: '*Please Enter Preferred Transport Name' }
    ],
    'preferredTransportContactNumberCtrlMss': [
      { type: 'required', message: '*Please Enter Preferred Transport Contact Number' },
      { type: 'InvalidNumber', message: '*Please Enter Valid Mobile No.' }
    ],
    'preferredTransportEmailIDCtrl': [
      {  type: 'InvalidEmail', message: '*Please Enter Valid Email.' }
    ]

  }
  refChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {

  }


  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {

  }

  //async search
  filterPorts(Allcustomer1: customerheader[], text: string) {

    return Allcustomer1.filter(port => {
      return this.onecustomer.sfname.toLowerCase().indexOf(text) !== -1 ||
        this.onecustomer.slname.toLowerCase().indexOf(text) !== -1 ||
        this.onecustomer.sfirmName.toLowerCase().indexOf(text) !== -1;
    });
  }

  searchref(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
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

      // this.portsSubscription = this.newcustomerservice.getreferalcustmer(this.selectedactivity).subscribe(data => {
      //   // Subscription will be closed when unsubscribed manually.
      //   const response = data['response'];
      //   var organization = response.data.map(function (customer) {
      //     customer.sfname = customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname)
      //     customer.sfname = (customer.sfname == null ? "" : customer.sfname)

      //     return customer
      //   });

      //   this.Allcustomer = organization;
      //   if (this.portsSubscription.closed) {
      //     return;
      //   }

      //   event.component.items = this.filterPorts(this.Allcustomer, text);
      //   event.component.endSearch();
      // });
      this.reftextcount;
    }
  }


  //end







  constructor(public loginauth: LoginauthService, public newcustomerservice: NewcustomerService,
    private genericHTTP: GenericHttpClientService,
    private imagePicker: ImagePicker,
    private camera: Camera, private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private val: Validator,
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private cdRef: ChangeDetectorRef,
    public platform: Platform,
    public common: Commonfun,
    public msg: Message,
    public storage: Storage,
    public loginpage: LoginPage,
    public menuCtrl: MenuController
  ) {
    // cehck withouth login or not
    //console.log(this.loginauth.isloginactive);

    if (!this.loginauth.isloginactive) {

      this.storage.remove('username');
      this.storage.remove('password');
    }
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
      selectedbpcat: [, Validators.required],
      add1: [, Validators.required],
      add2: [],
      add3: [],
      selectedsalesarea: [, Validators.required],
      pincode: [, Validators.required],
      selectedarea: [, Validators.required],
      mobileno: [, Validators.required, val.numberValid],
      //   email: [,this.val.emailValid],
      email: [],
      onecustomer: [],
      isbill: [],
      isShip: [],
      gstno: [],
      num: [],
      preferredCustomerTransport:[],
      preferredTransportName:[],
      preferredTransportContactNumberCtrl:[],
      preferredTransportEmailIDCtrl:[]

    });

    this.getrout();

  }
  getrout() {
    try {
      //console.log("getrout()1");

      this.storage.get('isNewRegistration').then((strisNewRegistration) => {
        if (strisNewRegistration) {
          this.isNewRegistration = strisNewRegistration;

          if (this.isNewRegistration == true) {
            // this.loginauth.ReadOnlyparameter = 'user=ionic.appuser&password=ionic.appuser';
            // this.storage.set('username', "ionic.appuser");
            // this.storage.set('password', "ionic.appuser");
            // this.storage.set('ipport', this.loginauth.commonurl);
            // this.loginauth.parameter = 'user=ionic.appuser&password=ionic.appuser';
            // this.loginauth.user = 'ionic.appuser';
            // this.loginauth.pass = 'ionic.appuser';
            // this.genericHTTP.ReadOnlyUsername = 'ionic.appuser';
            // this.genericHTTP.ReadOnlypassword = 'ionic.appuser';
            this.BindallactivitynewReg();


          }
        }
      });

    } catch (error) {
      // console.log("getrout()-ERROR:",error);	

    }
  }


  ngOnInit() {

    this.form.reset();


    this.fileUrl = "";
    this.IsExisting = "false";
    this.compliancedata = null;
    this.img = '';

    try {


      setTimeout(() => {
        this.route.queryParams.subscribe(params => {
          this.edtitcustid = params["selectedcustomer"]
        });
        this.checkplatform();
        if (this.isNewRegistration != true) {
          this.Bindallactivity();
        }
        else {

          this.menuCtrl.enable(false);
        }
      }, 1500);
    } catch (error) {

    }

    //Referal Code
    // this.BindAllrefcustomer();
  }

  ionViewWillEnter() {
    if (this.isNewRegistration == true) {
      //  console.log("ionViewWillEnter()1");	
      this.menuCtrl.enable(false);
    }
  }


  // chkcache() {
  //   try {



  //     if (this.loginauth.parameter == undefined) {
  //       var varusername = "";
  //       var varpassword = "";

  //       this.storage.get('username').then((username) => {
  //         if (username) {
  //           varusername = username;
  //         }
  //       });
  //       this.storage.get('password').then((password) => {
  //         if (password) {
  //           varpassword = password;
  //         }
  //       });

  //       this.storage.get('ipport').then((ipport) => {
  //         if (ipport) {
  //           this.loginpage.isipportvisible = false;
  //           this.loginpage.ipport = ipport;
  //           this.loginauth.commonurl = ipport + '/openbravo/'; //http(s) is added by nilesh
  //         } else {
  //           this.loginpage.isipportvisible = true;
  //         }
  //       });
  //       setTimeout(() => {
  //         this.common.LoginonClick(varusername, varpassword, 'newcustomer')
  //       }, 500);

  //     }
  //   }
  //   catch {

  //   }

  // }






  checkplatform() {
    try {
      if (!this.msg.isplatformweb) {


        this.isdesktop = false;


      }
      else {
        this.isdesktop = true;



      }
    } catch (error) {

    }
  }


  uploadImage(str: any) {
    try {

      var file: File = str.target.files[0]
      var myreader: FileReader = new FileReader();
      myreader.onloadend = (e) => {
        var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
        this.fileUrl = myreader.result;
        this.img = b64;

      };
      myreader.readAsDataURL(file);
    } catch (error) {

    }
  }
  uploadcompImage(str: any, id: any) {
    try {
      for (var k = 0; k < str.target.files.length; k++) {
        this.inneruploadcompImage(str, k, id)
        this.timeout(500);
      }
    } catch (error) {
      //  console.log("Catch",error);	
    }
  }
  timeout(ms) { //pass a time in milliseconds to this function	
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  inneruploadcompImage(str, k, id) {
    var file: File = str.target.files[k];
    let fileType = file.type;
    console.log(fileType);

    var myreader: FileReader = new FileReader();
    myreader.onloadend = (e) => {
      var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
      //  console.log("datacomp "+k,b64);	
      for (var i = 0; i < this.compliancedata.length; i++) {
        if (this.compliancedata[i].id == id) {
          //  console.log("datacomp ",this.compliancedata[i]);	
          // this.compliancedata[i].imgcomp1[k] = b64;	
          var existinglength = this.compliancedata[i].imgcomp.length;
          this.compliancedata[i].imgcomp[existinglength] = b64;

          // console.log("datacomp ",this.compliancedata[i]);	
          //--------nilesh-----------	
          try {
            if (this.compliancedata[i].Compliance_Type == "DL1VD" && (this.compliancedata[i].num != "" && this.compliancedata[i].num != null)) {
              var a1 = this.compliancedata[i].num.split("-");
              var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
              this.compliancedata[i].num = dt.toISOString();
            }
            if (this.compliancedata[i].Compliance_Type == "DL2VD" && (this.compliancedata[i].num != "" && this.compliancedata[i].num != null)) {
              {
                var a1 = this.compliancedata[i].num.split("-");
                var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
                this.compliancedata[i].num = dt.toISOString();
              }
            }
          } catch (error) {
            this.compliancedata[i].num = "";
            // console.log("Catch");	
          }
          //-------end nilesh-----------	
        }
      }
    };
    myreader.readAsDataURL(file);

  }



  Bindallactivity() {
    try {
      this.activitylist[0] = this.loginauth.selectedactivity;

      //console.log("Selected Activity",this.loginauth.selectedactivity);

      // this.form.controls["selectedactivity"].setValue(this.loginauth.selectedactivity);
      setTimeout(() => {
        this.form.controls["selectedactivity"].setValue(this.activitylist[0].id);
        this.onActChange();
      }, 500);

      if (this.edtitcustid != undefined || this.edtitcustid == '') {

        this.editCustomer(this.edtitcustid);

      }

      //   this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
      //      this.activitylist = data;
      // console.log("selectedactivity",this.activitylist)
      // if(this.activitylist.length==1){
      //   setTimeout( () => {
      //   this.form.controls["selectedactivity"].setValue(this.activitylist[0].id);
      //   this.onActChange();
      //   },500);
      // }

      //     if (this.edtitcustid != undefined || this.edtitcustid == '') {

      //       this.editCustomer(this.edtitcustid);

      //     }

      //   });

    }

    catch (error) {


    }
  }

  onClose(event: {
    component: IonicSelectableComponent,
    text: any
  }) {
    event.component.searchText = "";
  }

  salseareasearchChange(event: { component: IonicSelectableComponent, text: any }) {

    var searchtext = event.text;//.replace(/\s/g,'');

    if (searchtext.length % 3 == 0) {
      this.Bindallsalesarea(searchtext);
    }

  }

  //this.form.controls["selectedsalesarea"].setValue(this.customerheader[0].salesareaid);

  Bindallsalesarea(searchtext, salesareaid?) {
   console.log("bind sales area called");
   
    try {


      this.newcustomerservice.getsalesarea(this.loginauth.userid, searchtext).subscribe(data => {
        this.leastsalesarealist = data;
        if ((this.leastsalesarealist.length > this.loginauth.minlistcount) && (searchtext.trim() == '')) {
          this.salesarealist = null;
        } else {
          this.salesarealist = this.leastsalesarealist;
        }

        if (!!this.salesarealist && this.salesarealist.length == 1) {
          setTimeout(() => {
            this.form.controls["selectedsalesarea"].setValue(this.salesarealist[0]);
            console.log('init3');
          }, 500);
        }

        if (salesareaid) {
          this.salesarealist = this.leastsalesarealist.filter(item => item.id == salesareaid);
          setTimeout(() => {
            this.form.controls["selectedsalesarea"].setValue(this.salesarealist[0]);
            console.log('init2');

          }, 500);
        }


      });

    }

    catch (error) {
      console.log("bind sales area called error");

    }
  }




  onChangecn() {


    this.selectedcn = this.form.controls["selectedcn"].value;

    if (this.selectedcn == 'I') {
      this.IsInd = true;
      this.Isfirm = false;
      this.firstnamereq = "*";
      this.lastnamereq = "*";
      this.firmnamereq = "";
      this.form.controls["firstname"].setValidators(Validators.required);
      this.form.controls["lastname"].setValidators(Validators.required);
      this.form.controls["firmname"].clearValidators();

    }
    else if (this.selectedcn == 'F') {
      this.IsInd = false;
      this.Isfirm = true;
      this.firstnamereq = "";
      this.lastnamereq = "";
      this.firmnamereq = "*";
      this.form.controls["firstname"].clearValidators();
      this.form.controls["lastname"].clearValidators();
      this.form.controls["firmname"].setValidators(Validators.required);
    }
    else if (this.selectedcn == 'H') {
      this.IsInd = false;
      this.Isfirm = false;
      this.form.controls["firstname"].setValidators(Validators.required);
      this.form.controls["lastname"].setValidators(Validators.required);
      this.form.controls["firmname"].setValidators(Validators.required);
    }
  }

  //Alert message
  async presentAlert(Header: string, SubHeader: string, Message: string) {
    const alert = await this.alertCtrl.create({
      header: Header,
      subHeader: SubHeader,
      message: Message,
      buttons: ['OK']
    });

    await alert.present();
  }

  //Capture Image from Camera
  takePicture(Type: string, id: string) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth: 1500,
      targetHeight: 1500
    };
    this.camera.getPicture(options).then((imageData) => {
      if (Type == "PANpic") {
        this.fileUrl = 'data:image/jpeg;base64,' + imageData;
        this.img = imageData;
      }
      if (Type == "complince") {
        for (var i = 0; i < this.compliancedata.length; i++) {
          if (this.compliancedata[i].id == id) {

            this.compliancedata[i].imgcomp.push(imageData);

          }
          //--------nilesh-----------
          try {


            if (this.compliancedata[i].Compliance_Type == "DL1VD" && (this.compliancedata[i].num != "" && this.compliancedata[i].num != null)) {
              this.compliancedata[i].num = new Date(this.dateyyyymmddT0000Z(this.compliancedata[i].num)).toISOString();

            }
            if (this.compliancedata[i].Compliance_Type == "DL2VD" && (this.compliancedata[i].num != "" && this.compliancedata[i].num != null)) {
              {
                this.compliancedata[i].num = new Date(this.dateyyyymmddT0000Z(this.compliancedata[i].num)).toISOString();

              }

            }

          } catch (error) {
            this.compliancedata[i].num = "";

          }

          //-------end nilesh-----------




        }
      }
    }, (err) => {

    });
  }

  //Select Image from library	
  getimage(Type: string, id: string) {

    // const options: CameraOptions = {
    //   quality: 50,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    //   targetWidth:1500,
    //   targetHeight:1500
    // };



    const options: ImagePickerOptions = {
      quality: 50,
      outputType: 1,
      width: 1500,
      height: 1500
    };
    //----------------------	
    this.imagePicker.getPictures(options).then((imageData) => {

      if (Type == "PANpic") {
        this.fileUrl = 'data:image/jpeg;base64,' + imageData[0];
        this.img = imageData[0];
      }
      if (Type == "complince") {
        for (var i = 0; i < this.compliancedata.length; i++) {
          if (this.compliancedata[i].id == id) {
            // 	
            //  console.log(" this.compliancedata[i].imgcomp", imageData);

            this.compliancedata[i].imgcomp = this.compliancedata[i].imgcomp.concat(imageData);
            // console.log(" this.compliancedata[i].imgcomp", this.compliancedata[i].imgcomp);
            //  this.compliancedata[i].imgcomp1 = imageData;	
          }
          //--------nilesh-----------	
          try {


            if (this.compliancedata[i].Compliance_Type == "DL1VD" && (this.compliancedata[i].num != "" && this.compliancedata[i].num != null)) {
              var valid_date1 = new Date(this.dateyyyymmddT0000Z(this.compliancedata[i].num)).toISOString();
              if (!valid_date1.includes('NaN'))
                this.compliancedata[i].num = valid_date1;

              //   this.compliancedata[i].num=new Date(this.dateyyyymmddT0000Z(this.compliancedata[i].num)).toISOString();

            }
            if (this.compliancedata[i].Compliance_Type == "DL2VD" && (this.compliancedata[i].num != "" && this.compliancedata[i].num != null)) {
              {

                var valid_date2 = new Date(this.dateyyyymmddT0000Z(this.compliancedata[i].num)).toISOString();
                if (!valid_date2.includes('NaN'))
                  this.compliancedata[i].num = valid_date2

              }

            }

          } catch (error) {
            //  console.log("error",error)
            this.compliancedata[i].num = "";

          }

          //-------end nilesh-----------
        }
      }

    }, (err) => { });

  }

  dateyyyymmddT0000Z(dt) {
    try {
      var dl1date = new Date(dt)
      var nmonth = dl1date.getMonth() + 1;
      var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate())
      var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth)
      var yyyy1 = dl1date.getFullYear()
      // this.strfromdate=dd1+"-"+mm1+"-"+yyyy1
      return (yyyy1 + "-" + mm1 + "-" + dd1 + "T00:00Z")
    } catch (error) {
      return null;
    }
  }


  BindAllrefcustomer() {
    try {


      this.onecustomer = null;
      // this.newcustomerservice.getreferalcustmer(this.selectedactivity).subscribe(data => {
      //   const response = data['response'];
      //   var organization = response.data.map(function (customer) {
      //     customer.sfname = customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname)
      //     customer.sfname = (customer.sfname == null ? "" : customer.sfname)
      //     return customer
      //   });
      //   if (this.edtitcustid != 'undefined' && this.edtitcustid != '') {
      //     var that = this;
      //     var refcust = organization.filter(function (emp) {
      //       if (emp.id == that.edtitcustid) {
      //         return false;
      //       }
      //       return true;
      //     });

      //   }

      //   this.Allcustomer = refcust;
      // });


    } catch (error) {

    }
  }
  onBpChange() {

    this.newcustomerservice.getCompilanceDataapi(this.form.controls['selectedbpcat'].value, "").subscribe(data11 => {


      this.compliancedata = data11;
      for (var c = 0; c < this.compliancedata.length; c++) {
        var varscompType = this.compliancedata[c].scompType
        this.compliancedata[c].scompType = this.compliancedata[c].Compliance_Type
        this.compliancedata[c].Compliance_Type = varscompType;
        this.compliancedata[c].imgcomp1 = [];
        this.form.addControl(this.compliancedata[c].Compliance_Type, new FormControl());
      }
    });

  }
  onBPLChange() {
    this.selectedbpl = this.form.controls['selectedbpl'].value;

    if (this.selectedbpl == "S")
      this.isBPLEnabled = false;
    else
      this.isBPLEnabled = true;


  }
  onActChange() {
    this.selectedactivity = this.form.controls['selectedactivity'].value;
     console.log("selected activity ",this.selectedactivity);
    //-----------	
    if (this.isNewRegistration == true) {
      const a = this.activitylist.filter(item => item.id == this.selectedactivity);
      this.loginauth.selectedactivity = a[0];
      this.loginauth.userid = null;//this.loginauth.selectedactivity.user_id;	
    }
    console.log("ADDRESS VALIDATION FLAG",this.loginauth.selectedactivity.add_validation_lead);
    if(!!this.loginauth.selectedactivity && !!this.loginauth.selectedactivity.add_validation_lead && 
      this.loginauth.selectedactivity.add_validation_lead =='Y'){
      let add1 = null;
      add1 = this.form.get('add2');
      add1.setValidators(Validators.required);
      add1.updateValueAndValidity();

      let add2 = null;
      add2 = this.form.get('add3');
      add2.setValidators(Validators.required);
      add2.updateValueAndValidity();
    } else {
  
      let add1 = null;
      add1 = this.form.get('add2');
      add1.clearValidators();
      add1.updateValueAndValidity();

      let add2 = null;
      add2 = this.form.get('add3');
      add2.clearValidators();
      add2.updateValueAndValidity();
    }


    //---------------
    this.getbussnessPartnerCategory();
    this.getTaggedBusinessPartner();
    this.BindAllrefcustomer();
    this.Bindallsalesarea('');


  }
  getTaggedBusinessPartner() {
    try {

      this.newcustomerservice.getBPartner(this.selectedactivity).subscribe(data => {
        const response = data['response'];
        this.bplist = response.data;
      });

    } catch (error) {

    }
  }

  getbussnessPartnerCategory() {
    try {
      this.newcustomerservice.getBPCategory(this.selectedactivity).subscribe(data => {
        const response = data['response'];
        this.bpcatlist = response.data;
      });
    } catch (error) {

    }
  }

  public onSaveDraft(frm) {

    // console.log('selectedsalesarea',this.form.controls["selectedsalesarea"].value)
    // return;

    var ismobilexist;
    try {

      if (this.onChangegst() == false) {
        return;
      }

      if(this.addressValidation()){
        if (this.form.controls.mobileno.valid) {
          this.newcustomerservice.checkmobileno(this.form.controls["mobileno"].value).subscribe(data => {
            const response = data['response'];

            if (response.data.length > 0) {
              ismobilexist = false;
              this.presentAlert("Message", "Alert!", "Mobile no. is already exists.");
              this.form.controls["mobileno"].setValue("");
            }
            else {
              ismobilexist = true;
              this.onSaveDraft1(frm);
            }

          });
        }
        
      } else {
        this.presentAlert("Message", "Error!", "Address line cannot be same");
      }  
    } catch (error) {
      this.presentAlert("Message", "Error!", error);
    }
  }

  private addressValidation():Boolean{
   // console.log("Address 1",this.form.controls["add1"].value);
   // console.log("Address 2",this.form.controls["add2"].value);
   // console.log("Address 3",this.form.controls["add3"].value);
    if(!!this.form.controls["add1"].value && !!this.form.controls["add2"].value && !!this.form.controls["add3"].value){
      if(this.form.controls["add1"].value.trim() != this.form.controls["add2"].value.trim()
         && (this.form.controls["add2"].value.trim() != this.form.controls["add3"].value.trim())
         && (this.form.controls["add1"].value.trim() != this.form.controls["add3"].value.trim())){
          return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
    
    
  }


  onChangemobileno() {
    // this.checkmobileno();
  }

  //for new registration	
  BindallactivitynewReg() {
    try {

      // this.commonfun.loadingPresent();	
      // console.log("BindallactivitynewReg");	
      this.newcustomerservice.getUserActivityAgreementStatus().subscribe(data => {

        this.activitylist = data;

        if (this.activitylist.length == 1) {

          setTimeout(() => {
            this.form.controls["selectedactivity"].setValue(this.activitylist[0].id);
            this.onActChange();
          }, 500);

        }

      }, error => {
        //  console.log("BindallactivitynewReg:error",error);	
      });
    } catch (error) {
      // console.log("BindallactivitynewReg:error",error);	
    }
  }

  onChangepin(id: string = '', customerId?: string) {
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
              try {
                this.form.controls["selectedbprt"].setValue(this.bplist.find(item => item.id === this.customerheader[0].tAGBpartner));

                this.onecustomer = this.Allcustomer.find(item => item.id === this.customerheader[0].newlead);
                this.form.controls["onecustomer"].setValue(this.Allcustomer.find(item => item.id === this.customerheader[0].newlead));


              }
              catch { }
              this.Bindallsalesarea("", this.customerheader[0].salesareaid);

              setTimeout(() => {

                this.existingcustomercompliance(customerId);
              }, 500);
            }, 1500);

            // 
            //   this.city = this.selectedarea.cttv$_identifier;
          }
        })
        this.newcustomerservice.getregion(this.pincodelist[0].region).subscribe(data => {
          const response = data['response'];



          this.mmstRegioncode = response.data[0].mmstRegioncode;
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
  onChangeArea() {
    this.selectedarea = this.form.controls["selectedarea"].value;
    //  console.log("this.selectedarea",this.selectedarea);
    if (this.selectedarea != null)
      this.city = this.selectedarea.cttv$_identifier;
  }

  async loadingPresent() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait ...',
      spinner: 'circles'
    }).then(a => {
      a.present().then(() => {

        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort laoding'));
        }
      });
    });
  }

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('loading dismissed'));
  }



  onSaveDraft1(value) {

    console.log('saving draft',value);

    try {

      var referalcode = "";
      if (this.isBPLEnabled == false && value.selectedbprt == null) {
        this.presentAlert("Message", "Alert", "Please Select Tagged Business Partner");

        return;
      }

      if (value.onecustomer != null && value.onecustomer != undefined) {

        referalcode = value.onecustomer.id;
      }
      var taggbp = "";
      if (value.selectedbprt != null) {
        taggbp = value.selectedbprt.id
      }

      if (this.compliancedata.some(item => item.Compliance_Type === 'DL1' && (item.num != null && item.num != ""))) {
        if (this.compliancedata.some(item => item.Compliance_Type === 'DL1VD' && (item.num === null || item.num === ""))) {
          this.presentAlert("Message", "Warning", "Please Select Date for DL No 1");
          return;
        }
      }


      if (this.compliancedata.some(item => item.Compliance_Type === 'DL2' && (item.num != null && item.num != ""))) {
        if (this.compliancedata.some(item => item.Compliance_Type === 'DL2VD' && (item.num === null || item.num === ""))) {
          this.presentAlert("Message", "Warning", "Please Select Date for DL No 2");

          return;

        }
      }




      var compliancepangstvalid = false;
      var panvalidmsg = "";



      if (this.compliancedata != undefined || this.compliancedata != null) {
        for (var i = 0; i < this.compliancedata.length; i++) {


          //for PAN validation
          if (this.compliancedata[i].Compliance_Type == "PAN") {
            const pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
            if (!pattern.test(this.compliancedata[i].num) && !(this.compliancedata[i].num == '')) {

              compliancepangstvalid = true;
              panvalidmsg = "PAN no. in Compliance data is not valid.(Row no. " + (i + 1) + ")"
              this.presentAlert("Message", "Alert", panvalidmsg);
              return;
            }
            else {

              this.compliancedata[i].num = this.compliancedata[i].num.toUpperCase();
            }
          }
          //for GST validation
          if (this.compliancedata[i].Compliance_Type == "GST") {
            //  console.log("GST",this.compliancedata[i].num);
            const pattern = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[A-Z]{1}[A-Z\d]{1}$/;
            if (!pattern.test(this.compliancedata[i].num.toUpperCase()) && !(this.compliancedata[i].num == '')) {

              compliancepangstvalid = true;
              panvalidmsg = "GST no. in Compliance data is not valid.(Row no. " + (i + 1) + ")"
              this.presentAlert("Message", "Alert", panvalidmsg);
              return;
            }
            else {

              //----state code validation---------
              var gstn = this.compliancedata[i].num;
              if (gstn.length > 2) {
                if (this.mmstRegioncode != gstn.substr(0, 2)) {
                  //  this.presentAlert("Message","Alert","GST No. in Compliance must be in same state.(Row no. "+ (i+1)+")");
                  panvalidmsg = "GST No. in Compliance must be of same state.(Row no. " + (i + 1) + ")";
                  this.compliancedata[i].num = "";
                  compliancepangstvalid = true;
                  this.presentAlert("Message", "Alert", panvalidmsg);
                  return;
                }
                else {
                  this.compliancedata[i].num = this.compliancedata[i].num.toUpperCase();
                }
              }
              //----end state code validation-----
            }
          }

        }
      }

      if (compliancepangstvalid == false) {

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
          "level": value.selectedbpl,
          "salesareaid": value.selectedsalesarea.id,

        }
        if(this.showPreferredTransportNameControl){
          jsondata["cusPreferredTransport"]=value.preferredCustomerTransport.id;
          jsondata["cusPreferredTransportOther"]=this.showPreferredTransportNameControl;
          jsondata["preferredTransportName"]=value.preferredTransportName;
          jsondata["preferredTransportContact"]=value.preferredTransportContactNumberCtrl;
          jsondata["preferredTransportEmailID"]=value.preferredTransportEmailIDCtrl;
         
        }


        let formData = new FormData();
        for (let j = 0; j < this.compliancedata.length; j++) {

          let fileField = this.form.get(this.compliancedata[j].Compliance_Type).value;
          if (fileField !== null) {
            let files = fileField.queue;

            let k = 0;
            files.forEach((fileItem) => {
              var ext = fileItem.file.name.substr(fileItem.file.name.lastIndexOf('.') + 1);
              var filename = this.compliancedata[j].Compliance_Type + '_' + k + '.' + ext;
              formData.append(this.compliancedata[j].Compliance_Type + '_' + k, fileItem.file.rawFile, filename);
              k = k + 1;
            });

            formData.append('nooffiles' + this.compliancedata[j].Compliance_Type, k.toString());
          }

        }
        formData.append('jsondata', JSON.stringify(jsondata));

        console.log("jsondata",jsondata);

        this.newcustomerservice.LeadComplete(formData).subscribe(data => {

          if (data != null) {
            this.response = data;

            if (this.response.resposemsg == "success") {
              this.loadingDismiss();

              // this.presentAlert("Message","Success","Customer Saved in Draft.");
              this.presentAlert("Message", "Success", "Lead Created Successfully.");

              this.Resetpage();
              if (this.isNewRegistration == true) {
                this.router.navigateByUrl('/login');
              }

            }
            else {

              this.loadingDismiss();
              this.presentAlert("message", "Fail", this.response.logmsg);
            }
          }

        });
      }
      else {
        this.presentAlert("Alert!", "Warning", panvalidmsg);
      }

    } catch (error) {
      console.log(error);

      this.loadingDismiss();
    }
  }

  onChangegst() {
    var validgstn = false;
    try {
      var gstn = this.form.controls["gstno"].value;

      if (gstn != null && gstn != undefined && gstn != "") {
        if (gstn.length > 2) {
          if (this.mmstRegioncode != gstn.substr(0, 2)) {
            this.presentAlert("Message", "Alert", "GST Number must be of same state.");
            this.form.controls["gstno"].setValue("");
            validgstn = false;
          }
          else {
            validgstn = true;
          }
        }
        else {
          validgstn = true;
        }
      }
      else {
        validgstn = true;


      }
    } catch (error) {



    }
    return validgstn;
  }



  onConvertintoCustomer(value) {
    if(this.addressValidation()){
      this.newcustomerservice.checkmobileno(this.form.controls["mobileno"].value).subscribe(data => {
        const response = data['response'];
  
        if (response.data.length > 0 && (this.edtitcustid == "" || this.edtitcustid == undefined)) {
          this.loadingDismiss();
          this.presentAlert("Message", "Alert!", "Mobile no. is already exists.");
          this.form.controls["mobileno"].setValue("");
        }
        else {
          var compliancedatavalid = false;
          var compliancepangstvalid = false;
          var panvalidmsg = "";
          var gstvalidmsg = "";
  
          if (this.isBPLEnabled == false && value.selectedbprt == null) {
            this.presentAlert("Message", "Alert", "Please Select Tagged Business Partner");
  
            return;
          }
          if (this.onChangegst() == false) {
            return;
          }
  
  
  
  
          if (this.compliancedata != undefined || this.compliancedata != null) {
  
  
            //validation for the DL1 and DL2
            // var DL1=false;
            // var DL2=false;
  
            if (this.compliancedata.some(item => item.Compliance_Type === 'DL1' && (item.num != null && item.num != ""))) {
              if (this.compliancedata.some(item => item.Compliance_Type === 'DL1VD' && (item.num === null || item.num === ""))) {
                this.presentAlert("Message", "Warning", "Please Select Date for DL1");
                return;
              }
            }
  
  
  
            if (this.compliancedata.some(item => item.Compliance_Type === 'DL2' && (item.num != null && item.num != ""))) {
              if (this.compliancedata.some(item => item.Compliance_Type === 'DL2VD' && (item.num === null || item.num === ""))) {
                this.presentAlert("Message", "Warning", "Please Select Date for DL2");
  
                return;
  
              }
            }
  
  
  
  
            for (var i = 0; i < this.compliancedata.length; i++) {
  
              //for PAN validation
              if (this.compliancedata[i].Compliance_Type == "PAN") {
                const pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
                if (!pattern.test(this.compliancedata[i].num) && !(this.compliancedata[i].num == '')) {
  
                  compliancepangstvalid = true;
                  panvalidmsg = "PAN no. in Compliance data is not valid.(Row no. " + (i + 1) + ")"
                  this.presentAlert("Message", "Alert", panvalidmsg);
                  return;
                }
                else {
  
                  this.compliancedata[i].num = this.compliancedata[i].num.toUpperCase();
                }
              }
              //for GST validation
              if (this.compliancedata[i].Compliance_Type == "GST") {
                const pattern = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[A-Z]{1}[A-Z\d]{1}$/;
                if (!pattern.test(this.compliancedata[i].num.toUpperCase()) && !(this.compliancedata[i].num == '')) {
  
                  compliancepangstvalid = true;
                  panvalidmsg = "GST no. in Compliance data is not valid.(Row no. " + (i + 1) + ")"
                  this.presentAlert("Message", "Alert", panvalidmsg);
                  return;
                }
                else {
  
                  //----state code validation---------
                  var gstn = this.compliancedata[i].num;
                  if (gstn.length > 2) {
                    if (this.mmstRegioncode != gstn.substr(0, 2)) {
                      //  this.presentAlert("Message","Alert","GST No. in Compliance must be in same state.(Row no. "+ (i+1)+")");
                      panvalidmsg = "GST No. in Compliance must be of same state.(Row no. " + (i + 1) + ")";
                      this.compliancedata[i].num = "";
                      compliancepangstvalid = true;
                      this.presentAlert("Message", "Alert", panvalidmsg);
                      return;
  
                    }
                    else {
                      this.compliancedata[i].num = this.compliancedata[i].num.toUpperCase();
  
                    }
                  }
                  //----end state code validation-----
  
  
                }
              }
  
  
              if (this.compliancedata[i].ismandatory == true && this.compliancedata[i].num === "") {
                compliancedatavalid = true;
                this.presentAlert("Message", "Alert", "Please fill Compliance data.");
                return;
  
              }
              if (this.compliancedata[i].uploadImg) {
                let fileField = this.form.get(this.compliancedata[i].Compliance_Type).value;
                if ((fileField === null && !this.compliancedata[i].isImage)) {
                  compliancedatavalid = true;
                  this.presentAlert("Message", "Alert", "Please fill Compliance data.");
                  return;
                }
              }
  
  
  
            }
  
  
  
  
          }
  
          var referalcode = "";
  
          if (value.onecustomer != null) {
            referalcode = value.onecustomer.id;
          }
          var taggbp = "";
          if (value.selectedbprt != null) {
            taggbp = value.selectedbprt.id
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
            "level": value.selectedbpl,
            "salesareaid": value.selectedsalesarea.id,
  
          }
  
          if(this.showPreferredTransportNameControl){
            jsondata["cusPreferredTransport"]=value.preferredCustomerTransport.id;
            jsondata["cusPreferredTransportOther"]=this.showPreferredTransportNameControl;
            jsondata["preferredTransportName"]=value.preferredTransportName;
            jsondata["preferredTransportContact"]=value.preferredTransportContactNumberCtrl;
            jsondata["preferredTransportEmailID"]=value.preferredTransportEmailIDCtrl;
           
          }
  
          let formData = new FormData();
          for (let j = 0; j < this.compliancedata.length; j++) {
  
            let fileField = this.form.get(this.compliancedata[j].Compliance_Type).value;
            if (fileField !== null) {
              let files = fileField.queue;
  
              let k = 0;
              files.forEach((fileItem) => {
                var ext = fileItem.file.name.substr(fileItem.file.name.lastIndexOf('.') + 1);
                var filename = this.compliancedata[j].Compliance_Type + '_' + k + '.' + ext;
                formData.append(this.compliancedata[j].Compliance_Type + '_' + k, fileItem.file.rawFile, filename);
                k = k + 1;
              });
  
              formData.append('nooffiles' + this.compliancedata[j].Compliance_Type, k.toString());
            }
  
  
          }
          formData.append('jsondata', JSON.stringify(jsondata));
  
  
          this.newcustomerservice.LeadComplete(formData).subscribe(data => {
            if (data != null) {
              this.response = data;
  
              if (this.response.resposemsg == "success") {
                this.loadingDismiss();
  
                this.presentAlert("Message", "Success", "Lead Converted Successfully.");
                this.Resetpage();
                if (this.isNewRegistration == true) {
                  this.router.navigateByUrl('/login');
                }
              }
  
              else {
                this.loadingDismiss();
                this.presentAlert("Message", "Fail", this.response.logmsg);
              }
            }
            else {
              this.loadingDismiss();
            }
          });
        }
      });
    } else {
      this.presentAlert("Message", "Error!", "Address line cannot be same");
    }
  }


  Resetpage() {

    this.edtitcustid = "";
    this.form.reset();
    this.IsExisting = "false";
    this.fileUrl = "";
    this.compliancedata = null;
    this.img = '';
    this.Iscnvalidate = false;
    this.arealist = null;
    this.state = '';
    this.country = '';
    this.district = '';
    this.city = '';

    if (this.activitylist.length == 1) {
      this.form.controls["selectedactivity"].setValue(this.activitylist[0].id);
      // this.onActChange();

    }
    // this.router.navigateByUrl('/newcustomer');
    //this.router.navigateByUrl('/newcustomer');





    //this.router.navigate([this.router.url]);
  }


  async ChosePic(Type: string, mmstComplianceDetails_id: string) {
    const alert = await this.alertCtrl.create({
      header: 'Select Option',
      message: "Select Option to get Picture.",
      buttons: [
        {
          text: 'Gallery',
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

    await alert.present();
  }



  async ImageViewr(img: any, rowcompliancedata?: any) {
    var msg = "";
    if (rowcompliancedata != null) {
      msg = '<div>' +
        '<img class="viewImagecss" src="data:image/png;base64,' + img + '">' +
        '</div>'

    }
    else {
      msg = '<div>' +
        '<img class="viewImagecss" src="' + img + '">' +
        '</div>'
    }
    const alert = await this.alertCtrl.create({



      message: msg,
      buttons: [
        {
          text: 'Remove',
          handler: data => {
            //this.POimg64=null
            if (rowcompliancedata != null) {
              this.compliancedata = this.compliancedata.map(function (comdata) {

                if (comdata.scompType == rowcompliancedata.scompType) {
                  comdata.imgcomp = comdata.imgcomp.filter(item => item != img);
                }
                return comdata
              });
            }
            else {
              this.fileUrl = null;
            }
          }
        },
        { text: 'OK' }
      ],


    });

    await alert.present();
  }



  change(value) {
    //manually launch change detection
    this.cdRef.detectChanges();

    // this.username = value.length > 8 ? value.substring(0,8) : value;
    this.form.controls["mobileno"].setValue(value.length > 8 ? value.substring(0, 8) : value);

  }
  editCustomer(customerId: string) {
    //Referal Code

    if (customerId != '') {
      this.loadingPresent();
      //  this.newcustomerservice.geteditcustmerheader(customerId).subscribe(data => {
      this.newcustomerservice.geteditcustmerdetailapi(customerId).subscribe(data => {
        const response1 = data;
        this.customerheader = response1;
        console.log("Pravin",response1);

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
        this.form.controls["mobileno"].setValue(this.customerheader[0].smobile);
       
        this.form.controls["selectedsalesarea"].setValue(this.customerheader[0].salesarea);
       
        

        


       if(!!this.customerheader[0].preferred_cus_transport){
       this.newcustomerservice.getPreferredTransportModes().subscribe(response=>{
          this.preferredTransportList = response[0];
          this.preferredTransportList.forEach(transportResponse=>{
            if(transportResponse.id == this.customerheader[0].preferred_cus_transport){
              this.selectedPreferredTransport = transportResponse;
              
            }
          });
          
        });
       }
     //  this.form.controls["preferredTransportName"].setValue("PRavin");
       setTimeout(() => {
        if(!!this.customerheader[0].preferred_transport_name){
          this.form.controls["preferredTransportName"].setValue(this.customerheader[0].preferred_transport_name);
         }
         if(!!this.customerheader[0].preferred_transport_contact){
          this.form.controls["preferredTransportContactNumberCtrl"].setValue(this.customerheader[0].preferred_transport_contact);
        }
        if(!!this.customerheader[0].preferred_transport_email && this.customerheader[0].preferred_transport_email != "null"){
          this.form.controls["preferredTransportEmailIDCtrl"].setValue(this.customerheader[0].preferred_transport_email);
        }
       },1000)

      
       
        this.IsExisting = "true";
        if (this.customerheader[0].mmstLovVal$_identifier == "Secondary") {
          this.form.controls["selectedbpl"].setValue("S");
          this.isBPLEnabled = false;
        }
        if (this.customerheader[0].mmstLovVal$_identifier == "Primary") {
          this.form.controls["selectedbpl"].setValue("P");
          this.isBPLEnabled = true;
        }



        this.customerbilling = this.customerheader;

        this.form.controls["add1"].setValue(this.customerbilling[0].saddress1);
        this.form.controls["add2"].setValue(this.customerbilling[0].saddress2 == "null" ? '' : this.customerbilling[0].saddress2);
        this.form.controls["add3"].setValue(this.customerbilling[0].saddress3 == "null" ? '' : this.customerbilling[0].saddress3);
        this.form.controls["pincode"].setValue(this.customerbilling[0].spincode);
        this.form.controls["isbill"].setValue(this.customerbilling[0].isbilling.toString() === "Y" ? true : false);
        this.form.controls["isShip"].setValue(this.customerbilling[0].isshipping.toString() === "Y" ? true : false);
        this.form.controls["gstno"].setValue(this.customerbilling[0].mmstSgstno);



        this.onActChange();
        this.onChangepin(this.customerbilling[0].mmstPostOffVal, customerId);

        //
      });

      //   this.newcustomerservice.geteditcustmerbilling(customerId).subscribe(data => {
      //      const response = data['response'];
      // 


      //   });



    }
    this.loadingDismiss();
  }

  existingcustomercompliance(customerId: string) {
    this.newcustomerservice.getCompilanceDataapi("", customerId).subscribe(data11 => {

      this.compliancedata = data11;
      for (var c = 0; c < this.compliancedata.length; c++) {
        var varscompType = this.compliancedata[c].scompType
        this.compliancedata[c].scompType = this.compliancedata[c].Compliance_Type
        this.compliancedata[c].Compliance_Type = varscompType;
        try {


          if (this.compliancedata[c].Compliance_Type == "DL1VD" && (this.compliancedata[c].num != "" && this.compliancedata[c].num != null)) {

            var a1 = this.compliancedata[c].num.split("-");
            var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
            this.compliancedata[c].num = dt.toISOString();
          }
          if (this.compliancedata[c].Compliance_Type == "DL2VD" && (this.compliancedata[c].num != "" && this.compliancedata[c].num != null)) {
            {
              var a1 = this.compliancedata[c].num.split("-");
              var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
              this.compliancedata[c].num = dt.toISOString();
            }

          }

        } catch (error) {
          this.compliancedata[c].num = "";

        }


      }
    });
  }

  existingcustomercompliance1(customerId: string) {

    this.newcustomerservice.geteditcustmercompliance(customerId).subscribe(data => {
      const compliancedataresponse = data['response'];


      //var that=this;
      for (var i = 0; i < compliancedataresponse.data.length; i++) {


        var Isfoundsame = false;
        for (var j = 0; j < this.compliancedata.length; j++) {

          if (compliancedataresponse.data[i].scomplianceType == this.compliancedata[j].Compliance_Type) {
            Isfoundsame = true;
            this.compliancedata[j].mmstComplianceDetails_id = compliancedataresponse.data[i].id;
            this.compliancedata[j].Compliance_Type = compliancedataresponse.data[i].scomplianceType;
            this.compliancedata[j].scompType = compliancedataresponse.data[i].scomplianceType;
            this.compliancedata[j].num = compliancedataresponse.data[i].snumber == null ? "" : compliancedataresponse.data[i].snumber;
            this.compliancedata[j].isImage = compliancedataresponse.data[i].image == null ? "" : compliancedataresponse.data[i].image;

          }
        }
      }



    });
  }

  onCusPreTransChange(){
    try {
         
         // console.log("SELECTED PREPED TRANS",this.selectedPreferredTransport);
          
          this.form.controls['preferredTransportName'].reset();
          this.form.controls['preferredTransportContactNumberCtrl'].reset();
          this.form.controls['preferredTransportEmailIDCtrl'].reset();
          
          if(this.selectedPreferredTransport.name == "Others"){
            this.showPreferredTransportNameControl = true;
            let control2 = null;
            control2 = this.form.get('preferredTransportName');
            control2.setValidators(Validators.required);
            control2.updateValueAndValidity();

            let control4 = null;
            control4 = this.form.get('preferredTransportContactNumberCtrl');
            control4.setValidators(Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"));
            control4.updateValueAndValidity();

          
          
            
           
           
          } else {
            setTimeout(() =>{
              this.showPreferredTransportNameControl = false;
            })

                let control2 = null;
                control2 = this.form.get('preferredTransportName');
                control2.clearValidators();
                control2.updateValueAndValidity();

                let control4 = null;
                control4 = this.form.get('preferredTransportContactNumberCtrl');
                control4.clearValidators();
                control4.updateValueAndValidity();
           }


      } catch (error) {
      console.log(error);
    }
  }
  async onShippingChange(value){
    try {
      console.log("Shipping Address ",value.detail.checked);
     if(value.detail.checked){

      if(this.loginauth.selectedactivity.preferred_transport_required == 'Y'){
            let control1 = null;
            control1 = this.form.get('preferredCustomerTransport');
            control1.setValidators(Validators.required);
            control1.updateValueAndValidity();

           


            this.showPreferredTransportControl = true;
            this.common.loadingPresent();
            const result = await this.newcustomerservice.getPreferredTransportModes().toPromise();
            this.preferredTransportList = result[0];
         //   console.log("Preferred Transport Modes ",this.preferredTransportList);
            this.common.loadingDismiss();

      }
     } else {
      
      setTimeout(() => {
        this.showPreferredTransportControl = false;
        this.showPreferredTransportNameControl = false;
      })
      
     
      let control1 = null;
      control1 = this.form.get('preferredCustomerTransport');
      control1.clearValidators();
      control1.updateValueAndValidity();

   
      this.form.controls['preferredCustomerTransport'].reset();


     }
     
     
    } catch (error) {
      this.common.loadingDismiss();
      console.log(error);
    }
    
   
  }
  onChangePreferredTransportContact(){

  }
  testMethod(form){
    console.log(form);
  }

}