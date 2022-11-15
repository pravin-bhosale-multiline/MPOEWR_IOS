import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { LoginauthService } from '../login/loginauth.service';
import { PlanMasterList, TravelExpenseService } from './travel-expense.service';
import { Commonfun } from '../../provider/commonfun';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Message } from '../../provider/message-helper';

@Component({
  selector: 'app-travel-expense',
  templateUrl: './travel-expense.page.html',
  styleUrls: ['./travel-expense.page.scss'],
})
export class TravelExpensePage implements OnInit {

  // This variable will hold the class name.
  readonly TAG = 'Travel Expense Page';
  //
  travelExpenseForm: FormGroup;
  //
  txtSalesPerson;
  //
  txtAmount;
  //
  selectedPlanListUIControl: any;
  //
  selectableTravelExpenseUIControl: any
  //
  planMasterList: any;
  //
  expenseMasterList: any;
  //
  latitude;
  //
  longitude;
  salespersoninfo: any;
  saveplanresponse: any;

  strfromdate: any;
  strtodate: any;
  strfromdated: any;
  strtodated: any;
  selectedplan: any;
  expenseList: any = null;
  IsexpenseListlength = false;

  outstation_chk_box = false;

  validation_messages = {
    'selectedPlanListUIControl': [{ type: 'required', message: ' *Please Select Plan.' }],
    'selectedBPaddressshipping': [{ type: 'required', message: '*Please Select Shipping Address.' }],
    'txtAmount': [{ type: 'required', message: '*Please Enter Expense Amount.' }]
  }

  constructor(private travelExpenseFromBuilder: FormBuilder, private platform: Platform, public loginService: LoginauthService,
    private travelExpenseService: TravelExpenseService,
    private commonfun: Commonfun,
    private router: Router,
    private route: ActivatedRoute,
    public msg: Message
  ) {
    this.getrout();
    this.travelExpenseForm = this.travelExpenseFromBuilder.group({
      salesperson: [, Validators.required],
      fromdate: [, Validators.required],
      todate: [, Validators.required],
      homelat: [, Validators.required],
      homelong: [, Validators.required],
      selectedPlanListUIControl: [, Validators.required],
      outstationChkCtrl:[]
    });
  }

  async ngOnInit() {

    this.getsalesperson();





  }
  removerow(post) {
    try {
      // console.log("removerow")


      const result = this.expenseList.filter(item => item != post);
      this.expenseList = result;

      this.chklength();

    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }

  chklength() {
    try {
      if (this.expenseList.length > 0)
        this.IsexpenseListlength = true;
      else
        this.IsexpenseListlength = false;
    } catch (error) {
      this.IsexpenseListlength = false;
    }
  }

  getrout() {
    try {
      this.route.params.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.expenseList = this.router.getCurrentNavigation().extras.state.expenseList;

          this.chklength();
        }
      });

    } catch (error) {
      // console.log("addsublead()-ERROR:",error);

    }
  }
  onAddExpense() {
    try {


      let navigationExtras: NavigationExtras = {
        state: {
          expenseList: this.expenseList,
          selectedplan: this.selectedplan,
          expenseMasterList:this.expenseMasterList

        }
      };
      this.router.navigate(['addedit-travel-expense'], navigationExtras);

    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);


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
      this.travelExpenseService.getWMobileTravelExpenseList().subscribe(data => {
        this.commonfun.loadingDismiss();
        var response = data;

        //  console.log("Travle REs",data);

        this.salespersoninfo = response;


        this.txtSalesPerson = this.salespersoninfo[0].salesperson
        this.planMasterList = this.salespersoninfo

        this.latitude = this.salespersoninfo[0].latitude
        this.longitude = this.salespersoninfo[0].longitude

        this.travelExpenseForm.controls["fromdate"].setValue(this.salespersoninfo[0].fromdate);
        this.travelExpenseForm.controls["todate"].setValue(this.salespersoninfo[0].todate);


      }, error => {
        //  console.log(this.TAG,methodTAG,error)
        this.commonfun.loadingDismiss();

        this.commonfun.presentAlert("Message", "Error", error.error);

      });


    } catch (error) {
      this.commonfun.loadingDismiss();

      //  console.log(this.TAG,methodTAG,error)
      this.commonfun.presentAlert("Message", "Error", error.error);
    }
  }
  public async onSaveTravelExpense(val) {
    let methodTAG = 'onSaveTravelExpense';
     this.commonfun.loadingPresent(null,60000);
    try {
      // this.Dateconversion();
      this.strfromdate = this.commonfun.Dateconversionddmmyyyy(val.fromdate);
      this.strtodate = this.commonfun.Dateconversionddmmyyyy(val.todate);
      this.strfromdated = this.commonfun.Dateconversionddmmyyyy(val.fromdated);
      this.strtodated = this.commonfun.Dateconversionddmmyyyy(val.todated);
      var jsondatatemp = {
        "salesperson": this.salespersoninfo[0].salesperson,
        "salespersonid": this.salespersoninfo[0].salespersonid,
        "expenseList": this.expenseList,
        "longitude": this.salespersoninfo[0].longitude,
        "latitude": this.salespersoninfo[0].latitude,
        "todate": this.strtodate,
        "fromdate": this.strfromdate,
        "plan": this.selectedplan.plan,
        "mexp_visitplan_id": this.selectedplan.mexp_visitplan_id,
        //"amount":"",//this.leads,

      }

      //--------------
      this.travelExpenseService.SaveWMobileTravelExpense(jsondatatemp).subscribe(data => {
        this.commonfun.loadingDismiss();
        if (data != null) {
          this.saveplanresponse = data;
          if (this.saveplanresponse.resposemsg == "Success") {

            this.commonfun.presentAlert("Message", this.saveplanresponse.resposemsg, this.saveplanresponse.logmsg);
            this.Resetpage();
          }
          else {

            this.commonfun.presentAlert("Message", this.saveplanresponse.resposemsg, this.saveplanresponse.logmsg);
          }
        }
      }, error => {
        this.commonfun.loadingDismiss();
        this.commonfun.presentAlert("Message", "Error!", error.error.text);
      });
      //------------------
    } catch (error) {
      this.commonfun.loadingDismiss();
    }
  }

  Resetpage() {
    try {
      this.travelExpenseForm.reset();
      this.expenseList = null;
      this.getsalesperson();
      this.chklength();
    } catch (error) {

    }
  }
  onChangeplan() {
    //  console.log("onChangeplan");
    try {


      //  console.log("selectedplan",this.formactualtravel.controls["selectedplan"].value);
      this.selectedplan = this.travelExpenseForm.controls["selectedPlanListUIControl"].value;
      this.commonfun.loadingPresent();
      this.travelExpenseService.getWMobileTravelExpenseList(this.selectedplan.mexp_visitplan_id).subscribe(data => {
        this.commonfun.loadingDismiss();
        var response = data;
        if(response.length===0){
          return;
        }

        if (response[0].isactual != 'Y') {
          this.commonfun.presentAlert("Message", "Alert", "Expense is not applicable for this plan.")
        }
        this.expenseMasterList = response[0].TravelType;
        this.expenseList = response[0].expenseList;
        //console.log("Travle Exp",this.selectedplan);
        
        if(response[0].outstation=='Y'){
          this.outstation_chk_box = true;
        } else {
          this.outstation_chk_box = false;
        }
  
        this.chklength()
        var a1 = response[0].fromdate.split("-");
        var dt = new Date(a1[2] + '-' + a1[1] + '-' + a1[0] + 'T00:00Z');
        this.travelExpenseForm.controls["fromdate"].setValue(dt.toISOString());
        var a2 = response[0].todate.split("-")
        var dt2 = new Date(a2[2] + '-' + a2[1] + '-' + a2[0] + 'T00:00Z');
        this.travelExpenseForm.controls["todate"].setValue(dt2.toISOString());
      
      });

    } catch (error) {

    }

  }


  public ondatechange() {
    let methodTAG = 'ondatechange';
    try {

    } catch (error) {

    }
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
  public onExpenseDropDownSearch() {
    let methodTAG = 'onExpenseDropDownSearch';
    try {

    } catch (error) {

    }
  }
  public onExpenseDropDownChange() {
    let methodTAG = 'onExpenseDropDownChange';
    try {

    } catch (error) {

    }
  }
}
