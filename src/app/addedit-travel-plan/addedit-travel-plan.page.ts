import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Commonfun } from '../../provider/commonfun';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { TravelPlanService } from '../travel-plan/travel-plan.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-addedit-travel-plan',
  templateUrl: './addedit-travel-plan.page.html',
  styleUrls: ['./addedit-travel-plan.page.scss'],
})
export class AddeditTravelPlanPage implements OnInit {
  readonly TAG = "Add Edit Travel Plan Page";
  formaddplan: FormGroup;
  Leadlist: any;
  allleadskm: any;
  leadskm: any;
  selectedLead: any;
  selectedleadskm: any = [];
  offset: any = 0;
  fromdate: any;
  todate: any;
  strsearch: any = "";
  index: any = null;
  outOrderChkCtrlValueAddEdit:any;
  isfirst=false;
  islast=false;

  constructor(private fb: FormBuilder,
              private commonfun: Commonfun,
              private router: Router,
              private route: ActivatedRoute,
              private travelplanservice: TravelPlanService,
              private loginauth: LoginauthService) {
              this.getrout();
              this.formaddplan = this.fb.group({
                selectedlead: [],
                searchlead: [],
              });
  }

  ngOnInit() {

  }
  onsearch() {
    var srchkey = this.formaddplan.controls["searchlead"].value;
    this.strsearch = srchkey;
    this.offset = 0;
    if (srchkey.length % 3 == 0 || srchkey == '') {
      if (this.selectedLead == null) {
        this.getsalesperson();
      }
      else {
        this.bindNearestPerson();
      }
    }
  }
  public getsalesperson(): void {
    let methodTAG = 'getsalesperson';
    try {
          this.commonfun.loadingPresent();
          this.travelplanservice.getUserWiseSalesPerson(this.offset, this.strsearch, "N", "", "",this.outOrderChkCtrlValueAddEdit)
          .subscribe(data => {
            this.commonfun.loadingDismiss();
            var response = data;
            if (response.AddressList.length > 0) {
              this.leadskm = response.AddressList;
            } else {
                    if (this.offset > 0)
                      this.offset = this.offset - 10;
                    if (this.strsearch != "")
                      this.leadskm = response.AddressList;
                  }
          }, error => { 
            console.log("YES ERROR CATCH",error);
            this.commonfun.loadingDismiss();
            this.commonfun.presentAlert("Message", "Error", error.error);
          });
    } catch (error) {
      this.commonfun.loadingDismiss();
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  onPrevious() {
    if (this.offset > 1) {
      this.offset = this.offset - 10;

      if (this.selectedLead == null) {

        this.getsalesperson();
      }
      else {
        this.bindNearestPerson();

      }

    }
  }
  onNext() {
    this.offset = this.offset + 10;
    if (this.selectedLead == null) {
      this.getsalesperson();
    }
    else {
      this.bindNearestPerson();

    }
  }
  bindNearestPerson() {
    try {
      this.travelplanservice.getSearchNearestPersoni(this.selectedLead.addressid, this.offset, this.strsearch,this.outOrderChkCtrlValueAddEdit).subscribe(data => {
        var response = data;
          if (response.AddressList.length > 0) {
          this.leadskm = response.AddressList;
        } else {
            if (this.offset > 0)
               this.offset = this.offset - 10;
            if (this.strsearch != "")
               this.leadskm = response.AddressList;
        }
      });
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }
  }
  onAddLead(item) {
    try {


      if (this.selectedleadskm) {
        if (this.selectedleadskm.some(i => i.addressid === item.addressid)) {
          this.commonfun.presentAlert("Message", "Alert", "Lead already exists.");


        }

        else {
          var slitem = { "custORbpatnerID": item.custORbpatnerID, "line": this.selectedleadskm.length + 1, "custname": item.custname, "addressid": item.addressid, "addressname": item.addressname, "pincode": item.pincode, "day": "0", "date": null, "latitude": item.latitude, "longitude": item.longitude, "km": item.km, "status": "Plan", "show": "false" };
          if (this.index == null) {
            this.selectedleadskm.push(slitem);
          }
          else {
            this.selectedleadskm.splice(this.index + 1, 0, slitem);
          }
          this.onSave();
        }
      }
      else {

        var slitem1 = [{ "custORbpatnerID": item.custORbpatnerID, "line": "1", "custname": item.custname, "addressid": item.addressid, "addressname": item.addressname, "pincode": item.pincode, "day": "0", "date": null, "latitude": item.latitude, "longitude": item.longitude, "km": item.km, "status": "Plan", "show": "false" }];

        this.selectedleadskm = slitem1;
        this.onSave();

      }

    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
    }

  }
  getrout() {
    try {
      this.route.params.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.selectedLead = this.router.getCurrentNavigation().extras.state.selectedLead;
          this.selectedleadskm = this.router.getCurrentNavigation().extras.state.allleads;
          this.fromdate = this.router.getCurrentNavigation().extras.state.fromdate;
          this.todate = this.router.getCurrentNavigation().extras.state.todate;
          this.index = this.router.getCurrentNavigation().extras.state.index;
          this.outOrderChkCtrlValueAddEdit = this.router.getCurrentNavigation().extras.state.outOrderChkCtrl;
          console.log(this.TAG,"getrout",this.outOrderChkCtrlValueAddEdit);
          if (this.selectedLead == null) {
            this.leadskm = this.router.getCurrentNavigation().extras.state.first10leads;

          }
          else {
            this.bindNearestPerson();
          }
        }
      });

    } catch (error) {
      //console.log("addsublead()-ERROR:",error);

    }
  }
  Resetpage() {
  }
  removeLeads(post) {
    try {
      // console.log("removeLeads()");


      let index = this.selectedleadskm.indexOf(post);
      const result = this.selectedleadskm.filter(item => item != post);
      this.selectedleadskm = result;
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  onSave() {
    try {

      let navigationExtras: NavigationExtras = {
        state: {
          selectedddlsubleads: this.selectedleadskm,
          selectedLead: this.selectedLead
        }
      };
      this.router.navigate(['travel-plan'], navigationExtras);
    } catch (error) {

    }
  }

}
