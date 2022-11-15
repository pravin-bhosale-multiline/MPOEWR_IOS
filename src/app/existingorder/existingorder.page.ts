import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { LoadingController, AlertController } from '@ionic/angular';
import { LoginauthService, AllAct, customerheader, Port } from '../login/loginauth.service';
import { NeworderService, BusinessPartnerList } from '../neworder/neworder.service';


import { Router, NavigationExtras } from '@angular/router';
import { Commonfun } from '../../provider/commonfun';


@Component({
  selector: 'app-existingorder',
  templateUrl: './existingorder.page.html',
  styleUrls: ['./existingorder.page.scss'],
})
export class ExistingorderPage implements OnInit {
  Remarks: string = '';
  activitylist: any = [];
  selectedcustomer: customerheader;
  orgAllcustomer: customerheader[];
  selectedactivity: string = '';
  selecteddocumentno: any;
  varselectedcust: any;
  alldocument: any;
  Issinglecust: boolean = false;
  // exBusinessPartnerlist: BusinessPartnerList[];
  exBusinessPartnerlist: any;
  exleastBusinessPartnerlist: any;

  passexBusinessPartnerlist: any;
  exselectedBusinessPartner: BusinessPartnerList;
  dontClearDraftOrder;


  constructor(public loginauth: LoginauthService,
    private router: Router,
    private loadingController: LoadingController,
    private commonfun: Commonfun,
    private neworderservice: NeworderService
  ) {

  }
  ionViewWillEnter() {
    this.ResetPage();

   // this.commonfun.chkcache('existingorder');

    setTimeout(() => {
      this.Bindallactivity();
    }, 1500);
  }
  ngOnInit() {
    //this.ResetPage();




  }

  checkcust() {
    try {



      if (this.loginauth.defaultprofile[0].mmstOrderusrtype == "CEB") {
        this.neworderservice.getexistcustmersearchapi("", this.selectedactivity).subscribe(data => {
          // var response = data;

          const response = data;
          // 
          this.exBusinessPartnerlist = response;
          this.exleastBusinessPartnerlist = this.exBusinessPartnerlist;


          if (this.exleastBusinessPartnerlist.length > this.loginauth.minlistcount) {
          
          }
          else {
            
            this.dontClearDraftOrder = true;
            this.passexBusinessPartnerlist = this.exBusinessPartnerlist;

          }

          //console.log("Draft Order Min Customer",this.exleastBusinessPartnerlist);

          if (this.exBusinessPartnerlist.length == 1) {
            this.exBusinessPartnerlist = response;
            this.passexBusinessPartnerlist = this.exBusinessPartnerlist;
            this.exselectedBusinessPartner = this.exBusinessPartnerlist[0];
            this.onChangeCustomer();
            this.Issinglecust = true;
          }
          else {
           // this.exBusinessPartnerlist = null;
           // this.passexBusinessPartnerlist = null;
            this.exselectedBusinessPartner = null;
            this.Issinglecust = false;

          }
        });
        //

        // if (this.edtitdocid != undefined || this.edtitdocid != '') {
        //   this.editOrder(this.edtitdocid);
        // }
      }
    } catch (error) {
      //  console.log("Error:checkcust",error);
    }
  }





  custsearchChange(event: {component: IonicSelectableComponent,text: any}) {

   console.log("custsearchChange");
    if (event.text.length >= 3) {

      this.bindcustomer1api(event.text);
    } else {
    
            if(!!this.dontClearDraftOrder && this.dontClearDraftOrder == true){

            }else {
                this.exBusinessPartnerlist= [];
            }
          }

  }


  bindcustomer1api(strsearch: string) {
    try {
          console.log("bindcustomer1api");
      if (strsearch != "") {
        //strsearch="a";

        this.neworderservice.getexistcustmersearchapi(strsearch, this.selectedactivity).subscribe(data => {
          var response = data;
          // 
          this.exBusinessPartnerlist = response;
          this.passexBusinessPartnerlist = this.exBusinessPartnerlist;

        });

      }
      else {
        // this.exBusinessPartnerlist=null;
        //=============start for top 10================= 

        if (this.exleastBusinessPartnerlist) {
          if (this.exleastBusinessPartnerlist.length > this.loginauth.minlistcount) {
            this.exBusinessPartnerlist = null;
          }
          else {
            this.exBusinessPartnerlist = this.exleastBusinessPartnerlist;
            this.passexBusinessPartnerlist = this.exBusinessPartnerlist;
            this.dontClearDraftOrder = true;

          }
        }
        else {
          this.neworderservice.getexistcustmersearchapi("", this.selectedactivity).subscribe(data => {
            // var response = data;

            const response = data;
            this.exleastBusinessPartnerlist = response;
            if (this.exleastBusinessPartnerlist) {
              if (this.exleastBusinessPartnerlist.length > this.loginauth.minlistcount) {
                this.exBusinessPartnerlist = null;
              }
              else {
                this.exBusinessPartnerlist = this.exleastBusinessPartnerlist;
                this.passexBusinessPartnerlist = this.exBusinessPartnerlist;
                this.dontClearDraftOrder = true;

              }
            }



          });



        }
        //=============end for top 10================= 

      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);

    }
  }


  onChangeCustomer() {
    try {

      this.Remarks = '';

      if (this.exselectedBusinessPartner != null) {

        this.Binddocument();
      }

    } catch (error) {
      // console.log("onChangeCustomer:Error",error);
    }

  }

  Binddocument() {
    try {




      this.neworderservice.getdocumentidbycust(this.exselectedBusinessPartner.id).subscribe(data => {

        const response = data['response'];
      //  console.log("Doc Number", response);

        this.alldocument = response.data.map(function (order) {
          order.documentno = order.documentno + ' : ' + order.documentdate

          return order
        });



        //documentdate,documentno

      }, error => {
        //  console.log("Binddocument:error",error);

      });

    } catch (error) {
      //  console.log("Binddocument:error",error);


    }
  }



  Bindallactivity() {
    try {


      this.selectedcustomer = null;
      this.selecteddocumentno = null;

      this.activitylist[0] = this.loginauth.selectedactivity;
      this.selectedactivity = this.activitylist[0].id;
      this.exonActChange();
      //  this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {

      //    this.activitylist = data;
      //    if(this.activitylist.length==1){
      //      this.selectedactivity=this.activitylist[0].id;
      //      this.exonActChange();
      //    }



      //   this.commonfun.loadingDismiss();
      //  },error=>{

      //    this.commonfun.loadingDismiss();
      //   }); 
      //  this.commonfun.loadingDismiss();
    } catch (error) {

      // console.log("error",error);
    }
  }

  exonActChange() {


    this.exBusinessPartnerlist = null;
    this.exselectedBusinessPartner = null;
    this.alldocument = null;
    this.selecteddocumentno = null;
    this.checkcust();
  }

  onEdit() {


   

    //  this.router.navigateByUrl('/neworder?edtitdocid='+this.selecteddocumentno.id);

    let navigationExtras: NavigationExtras = {
      state: {
        BusinessPartnerlist: this.passexBusinessPartnerlist,
        selectedBusinessPartner: this.exselectedBusinessPartner,
        selecteddocumentno: this.selecteddocumentno
      }
    };
    this.router.navigate(['neworder'], navigationExtras);
    this.ResetPage();
  }

  docChange(event: { component: IonicSelectableComponent, value: any }) {
    event.component._searchText = "";
  }

  refChange(event: {component: IonicSelectableComponent,value: any}) {
    this.onChangeCustomer();
    // 
    event.component._searchText = "";

  }
  onCustomerClose (event: {component: IonicSelectableComponent,value: any}) {
    event.component._searchText = "";
  }
  ResetPage() {
    // this.selectedactivity='';
    this.selectedcustomer = null;
    // this.exBusinessPartnerlist=null;
    // this.exselectedBusinessPartner=null;

    this.selecteddocumentno = null;
    //

    if (this.activitylist.length != 1) {
      this.selectedactivity = '';
      this.exBusinessPartnerlist = null;
    }

    if (this.Issinglecust != true) {
      this.exselectedBusinessPartner = null;
      this.alldocument = null;

    }

  }

  RefreshPage() {
    this.ResetPage();
  }
  onCancel() {
    this.ResetPage();

  }

}
