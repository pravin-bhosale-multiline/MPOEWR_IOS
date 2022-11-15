import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Validator } from '../../provider/validator-helper';
import { NewcustomerService, BPcategory, BPartner, Pincode, Area, LeadComplete, customerbilling, ComplianceData } from '../newcustomer/newcustomer.service';
import { Commonfun } from '../../provider/commonfun';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { BusinessPartnerAddressService } from '../business-partner-address/business-partner-address.service';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Message } from '../../provider/message-helper'
import { LoginauthService } from '../login/loginauth.service';




@Component({
  selector: 'app-addedit-business-partner-address',
  templateUrl: './addedit-business-partner-address.page.html',
  styleUrls: ['./addedit-business-partner-address.page.scss'],
})
export class AddeditBusinessPartnerAddressPage implements OnInit {
  form: FormGroup;
  pincodelist: Pincode[];
  selectedpincode: Pincode;
  invalidpincode: string;
  arealist: Area[];
  selectedarea: Area;
  city;
  state;
  country;
  district: string = '';
  businessPartner: string;
  samename: boolean = false;
  IsUnregistered: boolean = false;
  response: any;
  cust_id: string;
  ComplianceList: any;
  fileUrl: any = '';
  img: string = '';
  cartaddresslist: any;
  isgst: any = false;
  mmstRegioncode: string = "";
  isdesktop: boolean = false;


  preferredTransportList;
  showPreferredTransportControl = false;
  showPreferredTransportNameControl = false;
  selectedPreferredTransport;

  validation_messages = {

    'add1': [
      { type: 'required', message: '*Please Enter Address Line 1' }
    ],
    'name': [
      { type: 'required', message: '*Please Enter Name.' }
    ],
    'pincode': [
      { type: 'required', message: '*Please Enter Pin Code' }
    ],
    'selectedarea': [
      { type: 'required', message: '*Please Select Area.' }
    ],
    'gstno': [
      { type: 'InvalidgstNumber', message: '*Please Enter Valid GST No.' }
    ],
    'preferredTransportNameMss': [
      { type: 'required', message: '*Please Enter Preferred Transport Name' }
    ],
    'preferredTransportContactNumberCtrlMss': [
      { type: 'required', message: '*Please Enter Preferred Transport Contact Number' }
    ],
    'preferredTransportEmailIDCtrllMss': [
      { type: 'InvalidEmail', message: '*Please Enter Valid Email.' }
    ]

  }
  constructor(
    private fb: FormBuilder, private val: Validator,
    public newcustomerservice: NewcustomerService,
    private router: Router,
    private route: ActivatedRoute,
    public commonfun: Commonfun,
    public businesspartneraddressservice: BusinessPartnerAddressService,
    private alertCtrl: AlertController,
    private camera: Camera,
    public platform: Platform,
    public msg: Message,
    public loginauth: LoginauthService,


  ) {


    try {
      this.getparam();
    } catch { }


    this.form = this.fb.group({
      add1: [, Validators.required],
      name: [, Validators.required],
      add2: [],
      add3: [],
      pincode: [, Validators.required],
      selectedarea: [, Validators.required],
      isbill: [],
      isShip: [],
      fromdate: [],
      todate: [],
      NamesameasCustome: [],
      gstno: [],
      Unregistered: [],
      preferredCustomerTransport: [],
      preferredTransportName: [],
      preferredTransportContactNumberCtrl: [],
      preferredTransportEmailIDCtrl: []
    });



  }

  ngOnInit() {
    this.Resetpage();

    //this.commonfun.chkcache('business-partner-address');

    setTimeout(() => {
      this.checkplatform();

    }, 1500);



  }
  getparam() {
    try {


      this.route.params.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          // this.selectedbunch=null;
          // 
          this.businessPartner = this.router.getCurrentNavigation().extras.state.businessPartner;
          this.cust_id = this.router.getCurrentNavigation().extras.state.businessPartner.id;

          this.samename = true;
          this.form.controls["name"].setValue(this.businessPartner["fname"])

          this.ComplianceList = this.router.getCurrentNavigation().extras.state.ComplianceList;
          this.cartaddresslist = this.router.getCurrentNavigation().extras.state.cartaddress;



          //this.onchangeNamesameasCustome();
        }
      });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  checkplatform() {
    try {
      //  if(!this.platform.is("desktop")){
      if (!this.msg.isplatformweb) {

        // 
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

      var file: File = str.target.files[0]
      var myreader: FileReader = new FileReader();
      myreader.onloadend = (e) => {
        var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
        //  this.fileUrl=myreader.result;
        // this.img=b64;
        //this.ChosePic("complince",id);

        for (var i = 0; i < this.ComplianceList.length; i++) {
          if (this.ComplianceList[i].code == id) {
            this.ComplianceList[i].image = b64;
          }
        }


      };
      myreader.readAsDataURL(file);
    } catch (error) {

    }
  }




  onchangeNamesameasCustome() {
    this.samename = this.form.controls["NamesameasCustome"].value;
    if (this.samename == true) {
      this.form.controls["name"].setValue(this.businessPartner["fname"])
    }

  }
  onchangeUnregistered() {
    try {
      this.IsUnregistered = this.form.controls["Unregistered"].value;

      if (this.IsUnregistered == true) {
        this.form.controls["gstno"].setValue("");
        // this.isgst=false;  
        this.fileUrl = "";
        this.img = "";
        this.isgst = true;
      }
      else {
        this.isgst = false;
        for (var x = 0; x < this.cartaddresslist.length; x++) {

          if (this.pincodelist[0].region == this.cartaddresslist[x].regionid) {
            if (this.cartaddresslist[x].gstno != "") {
              this.isgst = true;
              //  
              //  


              this.form.controls["gstno"].setValue(this.cartaddresslist[x].gstno);
            }
          }
        }

        //this.isgst=true;  
      }
    }
    catch { }
  }

  onChangepin(id: string = '', customerId?: string) {
    //var that = this;
    this.isgst = false;
    //this.form.controls["gstno"].
    this.form.controls["gstno"].setValue(null);

    this.form.controls['Unregistered'].setValue(false);
    this.onchangeUnregistered()
    this.city = "";
    this.state = "";
    this.country = "";
    this.district = "";
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

            }, 1500);


          }
        })


        this.newcustomerservice.getregion(this.pincodelist[0].region).subscribe(data => {
          const response = data['response'];



          this.mmstRegioncode = response.data[0].mmstRegioncode;
        });



        setTimeout(() => {
          var isexistpin = false;
          for (var x = 0; x < this.cartaddresslist.length; x++) {

            if (this.pincodelist[0].region == this.cartaddresslist[x].regionid) {
              if (this.cartaddresslist[x].gstno != "") {
                this.isgst = true;
                isexistpin = true;



                this.form.controls["gstno"].setValue(this.cartaddresslist[x].gstno);
              }
            }
          }
          if (isexistpin == false) {
            this.isgst = false;
            this.form.controls["gstno"].setValue("");
          }
        }, 1600);

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
        this.form.controls["gstno"].setValue("");
        this.isgst = false;
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

  onChangegst() {
    var validgstn = false;


    try {
      var gstn = this.form.controls["gstno"].value;
      if (gstn != null && gstn != undefined && gstn != "") {
        if (gstn.length > 2) {
          if (this.mmstRegioncode != gstn.substr(0, 2)) {
            this.commonfun.presentAlert("Message", "Alert", "GST Number must be of same state.");
            this.form.controls["gstno"].setValue("");
            validgstn = false;

          }
          else if (this.isgst == false) {
            if (this.fileUrl == null || this.fileUrl == undefined || this.fileUrl == "") {
              this.commonfun.presentAlert("Message", "Alert", "Please upload GST image.");
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
      }
      else {
        validgstn = true;


      }



    } catch (error) {

    }
    return validgstn;
  }

  onChangeArea() {
    this.selectedarea = this.form.controls["selectedarea"].value;

    this.city = this.selectedarea.cttv$_identifier;
  }

  Resetpage() {
    try {
      this.form.reset();
      this.isgst = false;
      this.form.controls["fromdate"].setValue(new Date().toISOString());
      this.form.controls["todate"].setValue(new Date().toISOString());
      this.form.controls["NamesameasCustome"].setValue(true);

      this.form.controls["name"].setValue(this.businessPartner["fname"])

      this.district = "";
      this.state = "";
      this.country = "";
    }
    catch { }

  }
  onSaveDraft(value) {

    if (this.onChangegst() == false) {
      return;
    }

    this.commonfun.loadingPresent();


    var jsondata = {
      // "mbso_copord_id":this.selecteddocumentno==undefined||this.selecteddocumentno==""||this.selecteddocumentno==null?"":this.selecteddocumentno.id,
      "cust_id": this.cust_id,
      "name": value.name,
      "billing": value.isbill == true ? "true" : "false",
      "shipping": value.isShip == true ? 'true' : 'false',
      "add1": value.add1,
      "add2": value.add2,
      "add3": value.add3,
      "pincode": value.pincode,//this.pincodelist[0].spincode,
      "area": value.selectedarea.id,
      "city": this.selectedarea.cttv,
      "state": this.pincodelist[0].region,
      "country": this.pincodelist[0].country,
      "district": this.pincodelist[0].district,
      "fromdate": value.fromdate,
      "gst": value.gstno != null ? value.gstno.toUpperCase() : "",
      "gstimg": this.img,
      "ComplianceList": this.ComplianceList == undefined ? "" : this.ComplianceList,
     
    }
    if(this.showPreferredTransportNameControl){
      jsondata["cusPreferredTransport"]=value.preferredCustomerTransport.id;
      jsondata["cusPreferredTransportOther"]=this.showPreferredTransportNameControl;
      jsondata["preferredTransportName"]=value.preferredTransportName;
      jsondata["preferredTransportContact"]=value.preferredTransportContactNumberCtrl;
      jsondata["preferredTransportEmailID"]=value.preferredTransportEmailIDCtrl;
     
    }


    this.businesspartneraddressservice.SaveAddress(jsondata).subscribe(data => {

      if (data != null) {
        this.response = data;

        if (this.response.resposemsg == "success") {
          this.commonfun.loadingDismiss();

          this.commonfun.presentAlert("Message", "Success", "Address Successfully added, Its under KYC Apporval.");
          this.ComplianceList = null;
          this.Resetpage();
          let navigationExtras: NavigationExtras = {
            state: {
              reset: true,
            }
          };

          this.router.navigate(['/business-partner-address'], navigationExtras);

        }
        else {

          this.commonfun.loadingDismiss();
          this.commonfun.presentAlert("message", "Fail", this.response.logmsg);
        }
      }
    });

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
        for (var i = 0; i < this.ComplianceList.length; i++) {
          if (this.ComplianceList[i].code == id) {

            this.ComplianceList[i].image = imageData;
          }
        }
      }
    }, (err) => {

    });
  }

  //Select Image from library
  getimage(Type: string, id: string) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 1500,
      targetHeight: 1500
    };
    this.camera.getPicture(options).then((imageData) => {
      if (Type == "PANpic") {
        this.fileUrl = 'data:image/jpeg;base64,' + imageData;
        this.img = imageData;
      }
      if (Type == "complince") {
        for (var i = 0; i < this.ComplianceList.length; i++) {
          if (this.ComplianceList[i].code == id) {

            this.ComplianceList[i].image = imageData;
          }
        }
      }

    }, (err) => { });

  }


  async ChosePic(Type: string, code: string) {
    const alert = await this.alertCtrl.create({
      header: 'Select Option',
      message: "Select Option to get Picture.",
      buttons: [
        {
          text: 'Gallery',
          handler: data => {
            this.getimage(Type, code);
          }
        },
        {
          text: 'Camera',
          handler: data => {
            this.takePicture(Type, code);
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
              this.ComplianceList = this.ComplianceList.map(function (comdata) {
                comdata.image = (comdata.code == rowcompliancedata.code ? null : comdata.image)
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
  async onShippingChange(value) {
    try {
      console.log("Shipping Address ", value.detail.checked);
      if (value.detail.checked) {

        if (this.loginauth.selectedactivity.preferred_transport_required) {
          let control1 = null;
          control1 = this.form.get('preferredCustomerTransport');
          control1.setValidators(Validators.required);
          control1.updateValueAndValidity();

          
          this.showPreferredTransportControl = true;
          this.commonfun.loadingPresent();
          const result = await this.newcustomerservice.getPreferredTransportModes().toPromise();
          this.preferredTransportList = result[0];
          console.log("Preferred Transport Modes ", this.preferredTransportList);
          this.commonfun.loadingDismiss();

        }
      } else {
         

        setTimeout(() => {
          this.showPreferredTransportControl = false;
          this.showPreferredTransportNameControl = false;
        })
      
        this.form.controls['preferredCustomerTransport'].reset();
        
        let control1 = null;
        control1 = this.form.get('preferredCustomerTransport');
        control1.clearValidators();
        control1.updateValueAndValidity();

       

      }

    } catch (error) {
      this.commonfun.loadingDismiss();
      console.log(error);
    }
  }
  onChangePreferredTransportContact() {

  }

  onCusPreTransChange(){
    try {
         
          console.log("SELECTED PREPED TRANS",this.selectedPreferredTransport);
          
          this.form.controls['preferredTransportName'].reset();
          this.form.controls['preferredTransportContactNumberCtrl'].reset();
          this.form.controls['preferredTransportEmailIDCtrl'].reset();
          
          if(this.selectedPreferredTransport.name == "Others"){
            this.showPreferredTransportNameControl = true;
            let control2 = null;
            control2 = this.form.get('preferredTransportName');
            control2.setValidators(Validators.required);
            control2.updateValueAndValidity();
           
           
          } else {
            setTimeout(() =>{
              this.showPreferredTransportNameControl = false;
            })

                let control2 = null;
                control2 = this.form.get('preferredTransportName');
                control2.clearValidators();
                control2.updateValueAndValidity();

           
           }


      } catch (error) {
      console.log(error);
    }
  }
  test(form){
    console.log(form);
  }

}
