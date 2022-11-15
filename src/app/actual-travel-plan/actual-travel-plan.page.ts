import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Commonfun } from '../../provider/commonfun';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ActualTravelPlanService } from '../actual-travel-plan/actual-travel-plan.service';
import { Message } from '../../provider/message-helper'

@Component({
  selector: 'app-actual-travel-plan',
  templateUrl: './actual-travel-plan.page.html',
  styleUrls: ['./actual-travel-plan.page.scss'],
})
export class ActualTravelPlanPage implements OnInit {
  d1: any;
  d2: any;
  d3: any;
  days: any;
  formactualtravel: FormGroup;
  fromdate: any;
  todate: any;
  traveldate: any;
  traveldatemin: any;
  traveldatemax: any;
  strfromdate: any;
  strtodate: any;
  strtraveldate: any;
  leads: any;// This variable will hold the class name.
  readonly TAG = 'ActualTravelPlanPage';
  salespersoninfo: any;
  saveplanresponse: any;

  outstation_chk_box;

  validation_messages = {
    'selectedplan': [
      { type: 'required', message: ' *Please Select Plan.' }
    ]
  }

  constructor(
    private fb: FormBuilder,
    private commonfun: Commonfun,
    private router: Router,
    private route: ActivatedRoute,
    public loginauth: LoginauthService,
    public actualtravelplanservice: ActualTravelPlanService,
    public msg: Message

  ) {
    this.addsublead();

    this.formactualtravel = this.fb.group({
      salesperson: [],
      fromdate: [],
      todate: [],
      traveldate: [],
      homelat: [],
      homelong: [],
      outstationOrderChkCtrl: [],
      selectedplan: [, Validators.required]

    });
  }

  ngOnInit() {

    if (this.msg.isplatformweb == true) {
     // this.commonfun.chkcache('actual-travel-plan');
      setTimeout(() => {
        this.getsalesperson();
      }, 1500);
    }
    else {
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
      this.actualtravelplanservice.getWMobileUserWisePlanData("N").subscribe(data => {
        this.commonfun.loadingDismiss();
        var response = data;

        this.salespersoninfo = response;

        this.formactualtravel.controls["salesperson"].setValue(this.salespersoninfo[0].salesperson);

        this.fromdate = this.salespersoninfo[0].fromdate
        this.todate = this.salespersoninfo[0].todate
        this.formactualtravel.controls["homelat"].setValue(this.salespersoninfo[0].latitude);
        this.formactualtravel.controls["homelong"].setValue(this.salespersoninfo[0].longitude);


      }, error => {
        //  console.log(this.TAG,methodTAG,error)
        this.commonfun.loadingDismiss();

        this.commonfun.presentAlert("Message", "Error", error.error);

      });


    } catch (error) {
      this.commonfun.loadingDismiss();

      // console.log(this.TAG,methodTAG,error)
      this.commonfun.presentAlert("Message", "Error", error.error);
    }
  }

  Dateconversion() {
    try {
      var dl1date = new Date(this.fromdate)
      var nmonth = dl1date.getMonth() + 1;
      var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate())
      var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth)
      var yyyy1 = dl1date.getFullYear()
      this.strfromdate = dd1 + "-" + mm1 + "-" + yyyy1

      var dl2date = new Date(this.fromdate)
      var nmonth = dl2date.getMonth() + 1;
      var dd2 = (dl2date.getDate() < 10 ? "0" + dl2date.getDate() : dl2date.getDate())
      var mm2 = (nmonth < 10 ? "0" + nmonth : nmonth)
      var yyyy2 = dl2date.getFullYear()
      this.strtodate = dd2 + "-" + mm2 + "-" + yyyy2


      var dl3date = new Date(this.traveldate)
      var nmonth3 = dl3date.getMonth() + 1;
      var dd3 = (dl3date.getDate() < 10 ? "0" + dl3date.getDate() : dl3date.getDate())
      var mm3 = (nmonth3 < 10 ? "0" + nmonth3 : nmonth3)
      var yyyy3 = dl3date.getFullYear()
      this.strtraveldate = dd3 + "-" + mm3 + "-" + yyyy3

      this.d1 = new Date(this.fromdate)

      this.d3 = new Date(this.traveldate)

      this.days = ((this.d3 - this.d1) / (24 * 3600 * 1000)) + 1;


    } catch (error) {
      //  console.log("Error",error)
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


  onChangeplan() {
    this.commonfun.loadingPresent();
    this.actualtravelplanservice.getWMobileUserWisePlanData("N",this.formactualtravel.controls["selectedplan"].value).subscribe(data => {
      this.commonfun.loadingDismiss();
      var result = data;
      //console.log("PLAN", result);
      if(result.length===0){
        return;
      }
      this.leads = result[0].AddressList;
      this.formactualtravel.controls["fromdate"].setValue(this.dateyyyymmddT0000Z(result[0].fromdate));
      this.formactualtravel.controls["todate"].setValue(this.dateyyyymmddT0000Z(result[0].todate));
      if (this.formactualtravel.controls["fromdate"].value == this.formactualtravel.controls["todate"].value)
        this.formactualtravel.controls["traveldate"].setValue(this.dateyyyymmddT0000Z(result[0].fromdate));
      else
        this.formactualtravel.controls["traveldate"].setValue(null);
  
      if (result[0].outstation == 'Y') {
        this.outstation_chk_box = true;
      } else {
        this.outstation_chk_box = false;
      }
  
  
  
      //---------------------this.dateyyyymmddT0000Z(result[0].todate)).toISOString()
  
      var df = this.formactualtravel.controls["fromdate"].value;
      var dt = this.formactualtravel.controls["todate"].value;
  
  
      this.traveldatemin = new Date(this.dateyyyymmddT0000Z(result[0].fromdate)).toISOString();
      this.traveldatemax = new Date(this.dateyyyymmddT0000Z(result[0].todate)).toISOString();
      //-----------------------
  
    });
    

  }

  onAddLead(item, i) {
    try {
      // if(this.checkplancount()==false)
      // {
      //   return
      // }
      if (this.traveldate == undefined || this.traveldate == null) {
        this.commonfun.presentAlert("Message", "Alert", "Please select Travel Date.")
        return;
      }
      this.Dateconversion();

      let navigationExtras: NavigationExtras = {
        state: {
          selectedLead: item,
          allleads: this.leads,
          fromdate: this.strfromdate,
          todate: this.todate,
          mexp_visitplan_id: this.formactualtravel.controls["selectedplan"].value,
          days: this.days,
          traveldate: this.strtraveldate,
          index: i,
          outOrderChkCtrl: this.formactualtravel.controls["outstationOrderChkCtrl"].value ? "true" : "false"
        }
      };
      this.router.navigate(['addedit-actual-travel-plan'], navigationExtras);
      // this.formprod.controls["selectedBusinessPartner"].

    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }

  }

  removeLeads(post) {
    try {


      let index = this.leads.indexOf(post);
      const result = this.leads.filter(item => item.line != post.line);
      this.leads = result;
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  // checkplancount(){
  //   try {
  //     if(this.leads){
  //       if(this.leads.length>=this.loginauth.maxcustomerinplan)
  //       {
  //         this.commonfun.presentAlert("Message","Alert!","Your plan is full.");
  //         return false;
  //       }
  //       else{
  //         return true;
  //       }
  //     }
  //     else{
  //       return true;
  //     }
  //   } catch (error) {
  //     console.log("Error: checkplancount :",error);
  //   }
  // }
  removesubLeads(data, subdata) {
    try {

      for (var k = 0; k < this.leads.length; k++) {

        if (this.leads[k].selectedddlsubleads) {
          if (this.leads[k].selectedddlsubleads.some(it => it = subdata)) {

            const result = this.leads[k].selectedddlsubleads.filter(item => item != subdata);
            this.leads[k].selectedddlsubleads = result;
          }
        }
      }
      // let index = this.leads.indexOf(data);

    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
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
  ondatechange() {
    try {
      this.traveldate = null;
      var df = this.formactualtravel.controls["fromdate"].value;
      var dt = this.formactualtravel.controls["todate"].value;
      var dtr = this.formactualtravel.controls["traveldate"].value;
      //---------------------

      this.traveldatemin = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
      this.traveldatemax = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
      //-----------------------
      if (dtr != null && dtr != undefined) {
        this.fromdate = new Date(this.dateyyyymmddT0000Z(df)).toISOString();
        this.todate = new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
        this.traveldate = new Date(this.dateyyyymmddT0000Z(dtr)).toISOString();


        if (this.traveldate < this.fromdate || this.traveldate > this.todate) {
          this.commonfun.presentAlert("Message", "Alert", "Travel Date must be in the range of from date and to date.");
          this.formactualtravel.controls["traveldate"].setValue(this.fromdate);
        }
      }


    } catch (error) {
      // console.log("ondatechange()-ERROR:",error);

    }
  }

  addsublead() {
    try {
      this.route.params.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          var selectedddlsubleads = this.router.getCurrentNavigation().extras.state.selectedddlsubleads;
          var selectedLead = this.router.getCurrentNavigation().extras.state.selectedLead;


          //  for(var k=0;k<this.leads.length;k++){
          // if(this.leads[k].lead===selectedLead.lead){
          //   this.leads[k].selectedddlsubleads=selectedddlsubleads;
          // } 
          // }

        }
      });
      //  console.log("addsublead()-this.leads:",this.leads);

    } catch (error) {
      console.log("addsublead()-ERROR:", error);

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
  onSaveActualTravelPlan(frnvala,issubmit) {
    try {
      console.log("LEAD ACUTAL",this.leads);
      if (this.traveldate == null || this.traveldate == undefined) {
        this.commonfun.presentAlert("Message", "Alert", "Please select Travel Date.")
        return;
      }
      console.log("TEST",this.leads);
      let showError = false; 
       this.leads.forEach(item=>{
        item.TaskList.forEach(taskItem=>{
          if(taskItem.info_required=='Y'){
            if(taskItem.Done==true){
              if(taskItem.remark == null || taskItem.remark == "" || taskItem.remark==undefined){
              
               showError = true;
                
              } 
            } 
          }
        })
      })

      if(showError){
        this.commonfun.presentAlert("Expense Closure", "Validation", "Please enter remark for task ");
      } else {
        this.Dateconversion();

        this.commonfun.loadingPresent();
        var jsondatatemp = {
          "salesperson": this.salespersoninfo[0].salesperson,
          "mexp_customervisit_id": this.salespersoninfo[0].salespersonid,
          "salespersonid": this.salespersoninfo[0].salespersonid,
          "addid": this.salespersoninfo[0].addid,
          "longitude": this.salespersoninfo[0].longitude,
          "mexp_visitplan_id": frnvala.selectedplan,
          "AddressList": this.leads,
          "latitude": this.salespersoninfo[0].latitude,
          "fromdate": this.strfromdate,
          "todate": this.strtodate,
          "issubmit":issubmit
  
        }
  
        //--------------
        this.actualtravelplanservice.SaveActualPlan(jsondatatemp).subscribe(data => {
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
          //  console.log("error",error);
          this.commonfun.presentAlert("Message", "Error!", error);
        });
        //------------------
      }

      
    } catch (error) {

    }
  }

  Resetpage() {
    try {
      //  this.fromdate=new Date().toISOString();
      // this.todate=new Date().toISOString();
      this.traveldate = null;
      this.formactualtravel.reset();
      this.leads = null;
      setTimeout(() => {
        this.getsalesperson();
      }, 1500);

    } catch (error) {
      //        console.log("Resetpage()-ERROR:",error);
    }
  }

}
