import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Commonfun } from '../../provider/commonfun';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TravelPlanService } from './travel-plan.service';
import { Message } from '../../provider/message-helper'
@Component({
  selector: 'app-travel-plan',
  templateUrl: './travel-plan.page.html',
  styleUrls: ['./travel-plan.page.scss'],
})
export class TravelPlanPage implements OnInit {
  formtravel: FormGroup;
  fromdate: any;
  todate: any;
  traveldate: any;
  traveldatemin: any;
  traveldatemax: any;
  d1: any;
  d2: any;
  d3: any;
  days: any;
  dp1: any;
  dp3: any;
  plandays: any;
  strfromdate: any;
  strtodate: any;
  leads: any;
  first10leads: any;
  salespersoninfo: any;
  saveplanresponse: any;
  isleads: Boolean = false;
  Planname: any = '';
  mindate: any;
  mintodate: any;
  mincustvisitperday: any;
  outstation_chk_box = false;

  validation_messages = {
    'planname': [
      { type: 'required', message: ' *Please Enter Plan Name.' }
    ]
  }
  // This variable will hold the class name.
  readonly TAG = 'TravelPlanPage';
  constructor(
    private fb: FormBuilder,
    private commonfun: Commonfun,
    private router: Router,
    private route: ActivatedRoute,
    public loginauth: LoginauthService,
    public travelplanservice: TravelPlanService,
    public msg: Message
  ) {

    this.addsublead();

    this.formtravel = this.fb.group({
      salesperson: [],
      fromdate: [],
      todate: [],
      planname: [, Validators.required],
      homelat: [],
      homelong: [],
      iscomplete: [],
      outstationOrderChkCtrl: []

    });

  }

  ngOnInit() {
    if (this.msg.isplatformweb == true) {
     // this.commonfun.chkcache('travel-plan');
      this.mindate = new Date(new Date().setDate(new Date().getDate() - this.loginauth.mindatetravelplan)).toISOString();
      this.mintodate = this.mindate;
      this.formtravel.controls["fromdate"].setValue(new Date().toISOString());
      this.formtravel.controls["todate"].setValue(new Date().toISOString());
      setTimeout(() => {
        this.getsalesperson();
      }, 1500);
    }
    else {
      this.mindate = new Date(new Date().setDate(new Date().getDate() - this.loginauth.mindatetravelplan)).toISOString();
      this.mintodate = this.mindate;
      this.formtravel.controls["fromdate"].setValue(new Date().toISOString());
      this.formtravel.controls["todate"].setValue(new Date().toISOString());
      setTimeout(() => {

        this.getsalesperson();
      }, 1500);
    }
  }
  /**
    * @kind function
    * @summary This method will get sales person.
    * @since 1.0.0
    * @returns void
    * @public
    * @module Travel Expense
    * @author Nilesh Patil
    */
  public getsalesperson(): void {
    let methodTAG = 'getsalesperson';
    try {

      //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
      this.commonfun.loadingPresent();
      //  console.log(methodTAG)

      this.travelplanservice.getUserWiseSalesPerson("0", "", "N", "", "",this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false").subscribe(data => {
        this.commonfun.loadingDismiss();
        var response = data;
        this.mincustvisitperday = response.mincustvisitperday
        this.salespersoninfo = response;
        this.formtravel.controls["salesperson"].setValue(response.salesperson);
        this.formtravel.controls["homelat"].setValue(response.latitude);
        this.formtravel.controls["homelong"].setValue(response.longitude);
        this.first10leads = response.AddressList

      }, error => {
        //  console.log(this.TAG,methodTAG,error)
        this.commonfun.loadingDismiss();

        //this.commonfun.presentAlert("Message","Error",error.error);

      });
    } catch (error) {
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  async onChangeplan() {

    try {
      this.Planname = this.formtravel.controls["planname"].value;
      if (this.Planname != "") {
        this.commonfun.loadingPresent();
        this.travelplanservice.getPlan(this.Planname).subscribe(data => {
          this.commonfun.loadingDismiss();
          const response = data['response'];
          var isexist = response.data;
          if (isexist.length > 0) {
            this.commonfun.presentAlert("Message", "Alert", "Plan with name " + this.Planname + " is already exist");
            this.formtravel.controls["planname"].setValue('');
          }
          else {
            this.Addlead(null, null);
          }
        });
      }
    } catch (error) {
      this.commonfun.loadingDismiss();
      // console.log("Error:onChangepin",error);
      // this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  toggle(selectedcartproduct) {
    if (selectedcartproduct.show == false) {
      for (var i = 0; i < this.leads.length; i++) {
        if (this.leads[i].show === "true") {
          this.leads[i].show = "false";
        }
      }
    }
    selectedcartproduct.show = !selectedcartproduct.show;
  }
  onAddLead(item, i) {
    try {
      if (this.ondatechange() == false) {
        return
      }
      if (item == null) {
        this.onChangeplan();
      }
      else {
        this.Addlead(item, i);
      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  Addlead(item, i) {
    var dl1date = new Date(this.fromdate)
    var nmonth = dl1date.getMonth() + 1;
    var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate())
    var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth)
    var yyyy1 = dl1date.getFullYear()
    this.strfromdate = dd1 + "-" + mm1 + "-" + yyyy1

    var dl2date = new Date(this.todate)
    var nmonth = dl2date.getMonth() + 1;
    var dd2 = (dl2date.getDate() < 10 ? "0" + dl2date.getDate() : dl2date.getDate())
    var mm2 = (nmonth < 10 ? "0" + nmonth : nmonth)
    var yyyy2 = dl2date.getFullYear()
    this.strtodate = dd2 + "-" + mm2 + "-" + yyyy2

    let navigationExtras: NavigationExtras = {
      state: {
        selectedLead: item,
        allleads: this.leads,
        first10leads: this.first10leads,
        fromdate: this.strfromdate,
        todate: this.strtodate,
        index: i,
        outOrderChkCtrl:this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false"
      }
    };
    this.router.navigate(['addedit-travel-plan'], navigationExtras);
  }
  chklead() {
    try {
      if (this.leads != null) {
        if (this.leads.length > 0)
          this.isleads = true;
        else
          this.isleads = false;
      }
      else { this.isleads = false; }
    } catch (error) {

    }
  }
  removeLeads(post) {
    try {
      let index = this.leads.indexOf(post);
      const result = this.leads.filter(item => item.custORbpatnerID != post.custORbpatnerID);
      this.leads = result;
      this.chklead();
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  removesubLeads(data, subdata) {
    try {
      for (var k = 0; k < this.leads.length; k++) {
        if (this.leads[k].selectedddlsubleads) {
          if (this.leads[k].selectedddlsubleads.some(it => it = subdata)) {
            const result = this.leads[k].selectedddlsubleads.filter(item => item != subdata);
            this.leads[k].selectedddlsubleads = result;
          }
          this.chklead();
        }
      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  public getkmfromhome(lat, long, i): void {
    let methodTAG = 'getsalesperson';
    try {
      //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
      this.commonfun.loadingPresent();
      //  console.log(methodTAG)
      this.travelplanservice.getUserWiseSalesPerson("0", "", "Y", lat, long,this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false").subscribe(data => {
        this.commonfun.loadingDismiss();
        var response = data;
        this.leads[i].km = response.km;
      }, error => {
        //  console.log(this.TAG,methodTAG,error)
        this.commonfun.loadingDismiss();
      });
    } catch (error) {
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  ontraveldatechange(selectedrow) {
    try {
      var df = this.formtravel.controls["fromdate"].value;
      var dt = this.formtravel.controls["todate"].value;
      var dtr = selectedrow.date;

      if (dtr != null && dtr != undefined) {
        if (dtr.indexOf('-') >= 4) {
          this.fromdate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
          this.todate = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
          this.traveldate = new Date(this.dateyyyymmddT0000Z(dtr)).toISOString();
          if (this.traveldate < this.fromdate || this.traveldate > this.todate) {
            for (var i = 0; i < this.leads.length; i++) {
              if (this.leads[i].addressid == selectedrow.addressid) {
                    this.leads[i].day = 0;
              }
            }
            this.commonfun.presentAlert("Message", "Alert", "Travel Date must be in the range of from date and to date.");
          }
          else {
            this.d1 = new Date(this.fromdate)
            this.d3 = new Date(this.traveldate)
            this.days = ((this.d3 - this.d1) / (24 * 3600 * 1000)) + 1;
            var isfirrstcust = true;
            var rowno = 0;
            for (var i = 0; i < this.leads.length; i++) {
              //start=>for km calculation from home =1
              if (this.leads[i].day == this.days) {
                isfirrstcust = false;
              }
              //end=>for km calculation from home =1

              if (this.leads[i].addressid == selectedrow.addressid) {
                //   
                this.leads[i].day = this.days;
                rowno = i;
              }

            }

            //start=>for km calculation from home =2
            if (isfirrstcust == true) {
              //  console.log("rowno",rowno);
              this.getkmfromhome(selectedrow.latitude, selectedrow.longitude, rowno);//lat long
            }
            //end=>for km calculation from home =2

          }
        }
      }


    } catch (error) {
      //  console.log("ontraveldatechange()-ERROR:",error);

    }
  }
  ondatechange() {
    try {
      var df = this.formtravel.controls["fromdate"].value;
      var dt = this.formtravel.controls["todate"].value;
      this.fromdate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
      this.todate = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
      this.traveldatemin = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
      this.traveldatemax = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
      this.mintodate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
      //console.log("traveldatemin",this.traveldatemin);
      //console.log("traveldatemax",this.traveldatemax);

      // console.log("fromdate",this.fromdate);
      // console.log("todate",this.todate);

      if (this.fromdate > this.todate) {
        this.commonfun.presentAlert("Message", "Alert", "From Date can not be Greater than To Date");
        return false;
      }
      else {
        return true;
      }
    } catch (error) {
      // console.log("ondatechange()-ERROR:",error);

    }
  }
  dateyyyymmddT0000Z(dt) {
    try {
      var dl1date = new Date(dt.substr(0, 4), dt.substr(5, 2) - 1, dt.substr(8, 2))
      var nmonth = dl1date.getMonth() + 1;
      var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate())
      var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth)
      var yyyy1 = dl1date.getFullYear()
      // this.strfromdate=dd1+"-"+mm1+"-"+yyyy1
      return (yyyy1 + "-" + mm1 + "-" + dd1 + "T00:00Z")
    } catch (error) {

    }
  }
  addsublead() {
    try {
      this.route.params.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          var selectedddlsubleads = this.router.getCurrentNavigation().extras.state.selectedddlsubleads;
          var selectedLead = this.router.getCurrentNavigation().extras.state.selectedLead;
          //this.leads= this.router.getCurrentNavigation().extras.state.selectedLead;
          //  console.log("this.leads:",this.leads);
          //  console.log("this.selectedLead:",selectedLead);

          this.leads = selectedddlsubleads;

          this.chklead();
          //  for(var k=0;k<this.leads.length;k++){
          // if(this.leads[k].lead===selectedLead.lead){
          //   this.leads[k].selectedddlsubleads=selectedddlsubleads;
          // } 
          // }

        }
      });
      // console.log("addsublead()-this.leads:",this.leads);

    } catch (error) {
      //  console.log("addsublead()-ERROR:",error);

    }
  }
  hideshowsublead(selectedLead) {
    if (selectedLead.show == false) {
      for (var i = 0; i < this.leads.length; i++) {
        if (this.leads[i].show === "true") {
          this.leads[i].show = "false";
        }
      }
    }
    selectedLead.show = !selectedLead.show;
  }
  validatedate() {
    var validlead = true;
    try {
          for (var i = 0; i < this.leads.length; i++) {
            if (this.leads[i].day == "0") {
              validlead = false;
            }
          }
    } catch (error) {
      validlead = false;
    }
    return validlead;
  }
  async convertdate() {
    var validlead = true;
    try {
          for (var i = 0; i < this.leads.length; i++) {
            if (this.leads[i].day == "0") {
            }
            else {

              var trdt = new Date(this.dateyyyymmddT0000Z(this.leads[i].date)).toISOString();
              var dl1date = new Date(trdt)
              var nmonth = dl1date.getMonth() + 1;
              var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate())
              var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth)
              var yyyy1 = dl1date.getFullYear()
              var strdate = dd1 + "-" + mm1 + "-" + yyyy1
              this.leads[i].date = strdate;
            }
          }
    } catch (error) {
      //  console.log("convertdate:ERROS",error);
      validlead = false;
    }
    return validlead;
  }
  chckplan() {
    var validplan = true;
    try {
          this.dp1 = new Date(this.fromdate)
          this.dp3 = new Date(this.todate)
          this.plandays = ((this.dp3 - this.dp1) / (24 * 3600 * 1000)) + 1;
          // console.log("this.plandays ",this.plandays)
          for (var j = 1; j <= this.plandays; j++) {
            var ispresent = false;
            //for minimum visits per day
            var result = this.leads.filter(item => item.day == j);
            // this.leads=result;
            // console.log("result.count",result.length)
            if (result.length >= this.mincustvisitperday) {
              ispresent = true;
            }
            if (ispresent == false) {
              validplan = false;
              //  console.log("Date not avalable: ",j);
            }
          }
    } catch (error) {
      validplan = false;
    }
    return validplan;
  }
  async onSaveTravelPlan(fvalue) {
    try {
          if (this.ondatechange() == false) {
            return
          }
          if (this.validatedate() == false) {
            this.commonfun.presentAlert("Message", "Alert", "Please select valid visit date");
            return;
          }
          if (this.chckplan() == false) {
            this.commonfun.presentAlert("Message", "Alert", "Kindly add minimum " + this.mincustvisitperday + " customer per day.");
          }  else {
            this.convertdate();
            setTimeout(() => {
              this.saveapi();
            }, 500);
          }
    } catch (error) {
      this.commonfun.loadingDismiss();
    }
  }
  saveapi() {
    this.commonfun.loadingPresent();
    var jsondatatemp = {
      "salesperson": this.salespersoninfo.salesperson,
      "salespersonid": this.salespersoninfo.salespersonid,
      "address": this.salespersoninfo.address,
      "longitude": this.salespersoninfo.longitude,
      "pincode": this.salespersoninfo.pincode,
      "AddressList": this.leads,
      "latitude": this.salespersoninfo.latitude,
      "fromdate": this.strfromdate,
      "todate": this.strtodate,
      "Planname": this.Planname,
      "outstation":this.formtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false"
    }

    console.log("SavePlan",jsondatatemp)
    //--------------
    this.travelplanservice.SavePlan(jsondatatemp).subscribe(data => {
      //console.log("data",data)
      if (data != null) {
        this.saveplanresponse = data;
        if (this.saveplanresponse.resposemsg == "Success") {
          this.commonfun.loadingDismiss();
          this.commonfun.presentAlert("Message", this.saveplanresponse.resposemsg, this.saveplanresponse.logmsg);
          this.Resetpage();
        }
        else {
          this.commonfun.loadingDismiss();
          //  this.Resetpage();
          this.commonfun.presentAlert("Message", this.saveplanresponse.resposemsg, this.saveplanresponse.logmsg);
        }
      }
    }, error => {
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message", "Error!", error.error.text);
    });
    //------------------

  }
  Resetpage() {
    try {
      this.formtravel.reset();
      this.fromdate = new Date().toISOString();
      this.todate = new Date().toISOString();
      this.formtravel.controls["todate"].setValue(new Date().toISOString());
      this.formtravel.controls["fromdate"].setValue(new Date().toISOString());

      this.leads = null;
      this.first10leads = null;
      this.saveplanresponse = null;
      this.isleads = false;
      this.getsalesperson();
    } catch (error) {
      // console.log("Resetpage()-ERROR:",error);
    }
  }
}
