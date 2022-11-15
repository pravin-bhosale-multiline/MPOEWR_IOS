import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TravelPlanClosureService } from './travel-plan-closure.service';
import { HttpClient } from '@angular/common/http';
import { ActualTravelPlanService } from '../actual-travel-plan/actual-travel-plan.service';
import { LoginauthService } from '../login/loginauth.service';
import { Commonfun } from '../../provider/commonfun';
import { Message } from '../../provider/message-helper';


export interface Data {
  movies: string;
}
/**
 * @see https://www.positronx.io/create-ionic-data-table-with-ngx-datatable/
 */
@Component({
  selector: 'app-travel-plan-closure',
  templateUrl: './travel-plan-closure.page.html',
  styleUrls: ['./travel-plan-closure.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TravelPlanClosurePage implements OnInit {
  @ViewChild('myTable1', { static: true }) table: any;

  //
  readonly TAG = 'Travel Plan ClosurePage';
  //
  travelPlanClosureForm: FormGroup;
  //
  txtSalesPerson;
  //
  planMasterList;
  //
  latitude;
  //
  longitude
  //
  chkPlanStatus;
  //
  expenseMasterList;
  //
  completedTaskList;

  public data: Data;
  public columns: any;
  public rows: any;

  fromdate: any;
  todate: any;
  traveldate: any;
  strfromdate: any;
  strtodate: any;
  leads: any;// This variable will hold the class name.
  salespersoninfo: any;
  saveplanresponse: any;
  sumtotalamount = 0;
  expenseList: any = [];
  outstation_chk_box;


  validation_messages = {
    'selectedplan': [
      { type: 'required', message: ' *Please Select Plan.' }
    ],
    'remarkErrorMessage':[{type: 'required', message: ' *Please Enter Your Remark.'}]
  }


  public Expensecolumns: any;




  constructor(private travelPlanClosureFormBuilder: FormBuilder,
    private travelPlanClosureService: TravelPlanClosureService,
    private http: HttpClient,
    public loginauth: LoginauthService,
    public actualtravelplanservice: ActualTravelPlanService,
    private commonfun: Commonfun,
    public msg: Message
  ) {

    this.travelPlanClosureForm = this.travelPlanClosureFormBuilder.group({
      salesperson: [],
      fromdate: [],
      todate: [],
      homelat: [],
      homelong: [],
      outstationChkCtrl:[],
      remarkCtrl:[],
      selectedplan: [, Validators.required]

    });
  }

  async ngOnInit() {
    setTimeout(() => {
      this.getsalesperson();
    }, 1500);
  }

  public getsalesperson(): void {
    let methodTAG = 'getsalesperson';
    try {

      //localhost:8080/openbravo/ws/in.mbs.webservice.WMobileLatLongUpdate?addid=FFF202005200405006176B076E5C7E39&lat=100&long=2006
      this.commonfun.loadingPresent();
      this.actualtravelplanservice.getWMobileUserWisePlanData("Y").subscribe(data => {
        this.commonfun.loadingDismiss();
        var response = data;
        // console.log("nnnn",response[0].salesperson);

        this.salespersoninfo = response;
      //  console.log("this.salespersoninfo", this.salespersoninfo);
        this.travelPlanClosureForm.controls["salesperson"].setValue(this.salespersoninfo[0].salesperson);

        this.fromdate = this.salespersoninfo[0].fromdate
        this.todate = this.salespersoninfo[0].todate
        this.travelPlanClosureForm.controls["homelat"].setValue(this.salespersoninfo[0].latitude);
        this.travelPlanClosureForm.controls["homelong"].setValue(this.salespersoninfo[0].longitude);
        // this.first10leads=response.AddressList

      }, error => {
      //  console.log(this.TAG, methodTAG, error)
        this.commonfun.loadingDismiss();
        this.commonfun.presentAlert("Message", "Error", error.error);
      });


    } catch (error) {
      this.commonfun.loadingDismiss();
    //  console.log(this.TAG, methodTAG, error)
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
    } catch (error) {

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
  //  console.log("onChangeplan");
  //  console.log("selectedplan", this.travelPlanClosureForm.controls["selectedplan"].value);

    //this.travelPlanClosureForm.controls["selectedplan"].value;

   // var result = this.salespersoninfo.filter(item => item.mexp_visitplan_id == this.travelPlanClosureForm.controls["selectedplan"].value);
  //  console.log("selectedplan", result);
  //  console.log("selectedplan", result[0].AddressList);
  this.commonfun.loadingPresent();
  this.actualtravelplanservice.getWMobileUserWisePlanData("Y",this.travelPlanClosureForm.controls["selectedplan"].value).subscribe(data => {
    this.commonfun.loadingDismiss();
    var result = data;
    //console.log("PLAN", result);
    if(result.length===0){
      return;
    }
  
    this.leads = result[0].AddressList;
    this.expenseList = result[0].ExpenseList;
   // console.log("onChangeplan",result);
    if(result[0].outstation=='Y'){
      this.outstation_chk_box = true;
    } else {
      this.outstation_chk_box = false;
    }

    this.travelPlanClosureForm.controls["fromdate"].setValue(this.dateyyyymmddT0000Z(result[0].fromdate));
    this.travelPlanClosureForm.controls["todate"].setValue(this.dateyyyymmddT0000Z(result[0].todate));

    const TotalAmount = this.expenseList.reduce((sum, item) => sum + (item.amount == "" ? 0 : Number(item.amount)), 0);
    this.sumtotalamount = TotalAmount;//-Number(this.formprod.controls["tobeRedeem"].value);

  });
  }

  dateyyyymmddT0000Z(dt) {
    try {
      var dl1date=new Date(dt.substr(0,4),dt.substr(5,2)-1,dt.substr(8,2))
      var nmonth = dl1date.getMonth() + 1;
      var dd1 = (dl1date.getDate() < 10 ? "0" + dl1date.getDate() : dl1date.getDate())
      var mm1 = (nmonth < 10 ? "0" + nmonth : nmonth)
      var yyyy1 = dl1date.getFullYear()
      // this.strfromdate=dd1+"-"+mm1+"-"+yyyy1
      return (yyyy1 + "-" + mm1 + "-" + dd1 + "T00:00Z")
    } catch (error) {

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
  onAddLead(val) { }
  ondatechange() {
    try {

      //   var df=this.travelPlanClosureForm.controls["fromdate"].value;
      //   var dt=this.travelPlanClosureForm.controls["todate"].value;
      //   var dtr=this.travelPlanClosureForm.controls["traveldate"].value;
      // this.fromdate=new Date(this.dateyyyymmddT0000Z(df)).toISOString();
      // this.todate=new Date(this.dateyyyymmddT0000Z(dt)).toISOString();
      // this.traveldate=new Date(this.dateyyyymmddT0000Z(dtr)).toISOString();

      //     if(this.traveldate<this.fromdate || this.traveldate>this.todate){
      //       this.commonfun.presentAlert("Message", "Alert", "Travel Date must be in the range of from date and to date.");
      //       this.travelPlanClosureForm.controls["traveldate"].setValue(this.fromdate);
      //     }



    } catch (error) {
    //  console.log("ondatechange()-ERROR:", error);

    }
  }

  onSaveTravelPlanClosure(frnvala) {
    try {
      this.Dateconversion();
      if(this.expenseList.length==0 && this.outstation_chk_box){
        this.commonfun.presentAlert("Expense Closure", "Validation", "Please add expense.");
      } else {
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
          "iscomplete": "Y"
  
        }

        this.actualtravelplanservice.SaveActualPlan(jsondatatemp).subscribe(data => {
          //  console.log("data", data)
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
          //  console.log("error", error);
            this.commonfun.presentAlert("Message", "Error!", error);
        });
      }

      

     
      
   } catch (error) {
      this.commonfun.presentAlert("Message", "Error!", error.text);
    }
  }

  Resetpage() {
    try {
      this.sumtotalamount = 0;
      this.traveldate = null;
      this.travelPlanClosureForm.reset();
      this.leads = null;
      this.expenseList = null;
      setTimeout(() => {
        this.getsalesperson();
      }, 1500);
    } catch (error) {

    }


  }
  ionViewWillEnter() {


  }

  public onPlanDropDownSearch() {
    let methodTAG = 'onPlanDropDownSearch';
    try {

    } catch (error) {

    }
  }
  public onPlanDropDownChange() {
    let methodTAG = 'onPlanDropDownChange';
    try {

    } catch (error) {

    }
  }
  public onFromDateChange() {
    let methodTAG = "onFromDateChange";
    try {

    } catch (error) {

    }
  }
  public onToDateChange() {
    let methodTAG = 'onToDateChange';
    try {

    } catch (error) {

    }
  }
  public onPlanStatusChange() {
    let methodTAG = 'onPlanStatusChange';
    try {

    } catch (error) {

    }
  }
  public onPage() {
    let methodTAG = 'onPage';
    try {

    } catch (error) {

    }
  }

  //By Nilesh
  toggleExpandRow(row) {

    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {

  }

}
