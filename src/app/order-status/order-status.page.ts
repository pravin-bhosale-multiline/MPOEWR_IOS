import { Component, OnInit } from '@angular/core';
import { Commonfun } from '../../provider/commonfun';
import { LoginauthService, AllAct, customerheader, Port } from '../login/loginauth.service';
import { NeworderService, BusinessPartnerList } from '../neworder/neworder.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { OrderStatusService } from './order-status.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.page.html',
  styleUrls: ['./order-status.page.scss'],
})
export class OrderStatusPage implements OnInit {
  selectedcustomer: customerheader;
  activitylist: any = [];
  selectedactivity: string = '';
  exBusinessPartnerlist: any;
  fromdate: any;
  todate: any;
  orderdata: any;
  offset: any = 0;
  Islast: any;
  leastBusinessPartnerlist: any;
  Issinglecust: boolean = false;
  exselectedBusinessPartner: BusinessPartnerList;
  dontClearOrderStatus;

  constructor(private commonfun: Commonfun,
    public loginauth: LoginauthService,
    private neworderservice: NeworderService,
    private orderstatusservice: OrderStatusService


  ) { }

  ngOnInit() {



    //this.commonfun.chkcache('order-status');

    setTimeout(() => {
      this.Bindallactivity();
      this.fromdate = new Date().toISOString();
      this.todate = new Date().toISOString();
    }, 1500);



  }

  Bindallactivity() {
    try {

      this.selectedcustomer = null;
      // this.selecteddocumentno=null;

      this.activitylist[0] = this.loginauth.selectedactivity;
      this.selectedactivity = this.activitylist[0].id;
      this.exonActChange();


    } catch (error) {

    }
  }

  exonActChange() {


    this.exBusinessPartnerlist = null;
    this.exselectedBusinessPartner = null;
    this.checkcust();
  }

  checkcust() {
    try {


      if (this.loginauth.defaultprofile[0].mmstOrderusrtype == "CEB") {
        this.neworderservice.getexistcustmersearchapi("", this.selectedactivity).subscribe(data => {
          // var response = data;

          const response = data;
          //console.log("ORDER STATUS",response); 
          this.exBusinessPartnerlist = response;
          this.leastBusinessPartnerlist = this.exBusinessPartnerlist;
          if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
          // console.log("Dont Clear");
          }
          else {
           
            this.dontClearOrderStatus = true;
          }

          if (this.exBusinessPartnerlist.length == 1) {
            this.exBusinessPartnerlist = response;
            // this.passexBusinessPartnerlist=this.exBusinessPartnerlist;
            this.exselectedBusinessPartner = this.exBusinessPartnerlist[0];
            this.onChangeCustomer();
            this.Issinglecust = true;
          }
          else {
            this.Issinglecust = false;

           // this.exBusinessPartnerlist = null;
            this.exselectedBusinessPartner = null;

          }
        });
        //

        // if (this.edtitdocid != undefined || this.edtitdocid != '') {
        //   this.editOrder(this.edtitdocid);
        // }
      }
    } catch (error) {

    }
  }
  refChange(event: {component: IonicSelectableComponent,value: any}) {
    this.onChangeCustomer();
    // 
    event.component._searchText = "";

  }


  onChangeCustomer() {
    try {


      if (this.exselectedBusinessPartner != null) {

        this.BindOrder();
      }
      // this.commonfun.loadingDismiss();
    } catch (error) {
      // this.commonfun.loadingDismiss();
      //  console.log("error:Onchangecust:",error); 
    }

  }

  BindOrder() {

  }


  custsearchChange(event: {component: IonicSelectableComponent,text: any}) {

    if (event.text.length >= 3) {

      this.bindcustomer1api(event.text);
    } else {
      //  this.exBusinessPartnerlist = [];
      if (!!this.dontClearOrderStatus && this.dontClearOrderStatus == true) {

      } else {
       // console.log("Cleared");
        this.exBusinessPartnerlist = [];
      }
    }

  }

  bindcustomer1api(strsearch: string, ispageload?: string) {
    try {

      if (strsearch != "") {
        this.neworderservice.getexistcustmersearchapi(strsearch, this.selectedactivity).subscribe(data => {
          var response = data;
          this.exBusinessPartnerlist = response;

        });

      }
      else {
        // this.exBusinessPartnerlist=null;
        //=============start for top 10================= 

        if (this.leastBusinessPartnerlist) {
          if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
            this.exBusinessPartnerlist = null;
          }
          else {
            this.exBusinessPartnerlist = this.leastBusinessPartnerlist;
            this.dontClearOrderStatus = true;
          }
        }
        //=============end for top 10================= 



      }
    } catch (error) {
      this.commonfun.presentAlert("Message", "Error", error);
      //  this.commonfun.loadingDismiss();
    }
  }
  onCustomerClose (event: {component: IonicSelectableComponent,value: any}) {
    event.component._searchText = "";
  }
  ondatechange() {


    if (this.fromdate > this.todate) {
      // this.todate=this.fromdate;
      this.commonfun.presentAlert("Message", "Alert", "From Date can not be Greater than To Date");
    }


  }
  getOrderStatus() {
    try {
      if (this.validation() == false) {
        return;
      }

      var fromdate = this.fromdate.split('T')[0];
      var todate = this.todate.split('T')[0];


      this.orderstatusservice.getOrderStatus(fromdate, todate, this.exselectedBusinessPartner.id, this.offset).subscribe(data => {

        this.orderdata = data;
        if (this.orderdata.length < 10 || this.orderdata.length == 0) {
          this.Islast = true;
        }
        else {
          this.Islast = false;

        }



      }, error => {
        this.commonfun.presentAlert("Message", "Error", error.error.text)
      });
    } catch (error) {

      this.commonfun.presentAlert("Message", "Error", error)
    }
  }
  validation() {
    if (!this.exselectedBusinessPartner) {
      this.commonfun.presentAlert("Message", "Alert", "Please select Business Partner.")
      return false;
    }
    if (!this.fromdate) {
      this.commonfun.presentAlert("Message", "Alert", "Please select From date.")
      return false;

    }
    if (!this.todate) {
      this.commonfun.presentAlert("Message", "Alert", "Please select To date.")
      return false;

    }

    if (this.fromdate > this.todate) {
      // this.todate=this.fromdate;
      this.commonfun.presentAlert("Message", "Alert", "From Date can not be Greater than To Date");
      return false;
    }


  }
  onShow() {

    this.offset = 0;

    //&& !this.todate && !(this.exselectedBusinessPartner!=undefined || this.exselectedBusinessPartner!=null))
    this.getOrderStatus();
    //  else
    // this.commonfun.presentAlert("Message", "Error", "Please select above information.")

  }
  OrderStatus(item) {

    var ordercreated = '';
    var approveupdated = '';
    var invoicecreated = '';
    var dispatchupdated = '';
    var deliverupdated = '';

    var color = '';

    if (item.ordercreated) ordercreated = 'is-done';
    if (item.approveupdated) approveupdated = 'is-done';
    if (item.invoicecreated) invoicecreated = 'is-done';
    if (item.dispatchupdated) dispatchupdated = 'is-done';
    if (item.deliverupdated) deliverupdated = 'is-done';

    //if(item.ordercreated!='' && item.approveupdated=='') ordercreated='current';

    if (item.ordercreated != '' && item.approveupdated == '') ordercreated = 'is-done';
    if (item.approveupdated != '' && item.invoicecreated == '') approveupdated = 'is-done';
    if (item.invoicecreated != '' && item.dispatchupdated == '') invoicecreated = 'is-done';
    if (item.dispatchupdated != '' && item.deliverupdated == '') dispatchupdated = 'is-done';
    if (item.OrderQuantity == item.DeliverQuantity) {
      deliverupdated = 'is-done';
      color = "StepComplete";
    }
    else {
      color = "StepProgress";
    }


    var text = `
<div class="wrapper">
<ul class="`+ color + `">
  <li class="`+ color + `-item ` + ordercreated + `"><strong>Order</strong>
  <span *ngIf="item.ordercreated">`+ item.ordercreated + `</span>
  </li>
  <li class="`+ color + `-item ` + approveupdated + `"><strong>Approve</strong>
  <span *ngIf="item.approveupdated">`+ item.approveupdated + `</span>
  </li>
  <li class="`+ color + `-item ` + invoicecreated + `"><strong>Invoice</strong>
  <span *ngIf="item.invoicecreated">`+ item.invoicecreated + `</span>
  </li>
  <li class="`+ color + `-item ` + dispatchupdated + `"><strong>Dispatch</strong>
  <span *ngIf="item.dispatchupdated">`+ item.dispatchupdated + `</span>
  </li>
  <li class="`+ color + `-item ` + deliverupdated + `"><strong>Delivery</strong>
  <span *ngIf="item.deliverupdated">`+ item.deliverupdated + `</span>
  </li>
</ul>
</div>`;

    this.commonfun.presentAlert("Status", "Order: " + item.DocumentNo, text)


  }
  toggleOrder(selectedcartproduct) {
    if (selectedcartproduct.show == false) {
      for (var i = 0; i < this.orderdata.length; i++) {
        if (this.orderdata[i].show === "true") {
          this.orderdata[i].show = "false";
        }
      }
    }
    selectedcartproduct.show = !selectedcartproduct.show;
  }
  onPrevious() {
    if (this.offset > 1) {
      this.offset = this.offset - 10;
      this.getOrderStatus();
    }
  }
  onNext() {
    this.offset = this.offset + 10;
    this.getOrderStatus();
  }
  Resetpage() {
    this.fromdate = new Date().toISOString();
    this.todate = new Date().toISOString();
    this.orderdata = null;
    if (this.activitylist.length != 1) {
      this.selectedactivity = null;
      this.exBusinessPartnerlist = null;
    }

    if (this.Issinglecust != true) {
      this.exselectedBusinessPartner = null;
    }


  }

}
