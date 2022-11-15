import { Component, OnInit } from '@angular/core';
import { LoginauthService, AllAct, customerheader, Port } from '../login/loginauth.service';
import { Router } from '@angular/router';
import { ReadertestPage } from '../readertest/readertest.page';
import { Platform } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { LoadingController, AlertController } from '@ionic/angular';
import { error } from 'protractor';
import { Commonfun } from '../../provider/commonfun'


@Component({
  selector: 'app-existingcustomer',
  templateUrl: './existingcustomer.page.html',
  styleUrls: ['./existingcustomer.page.scss'],
})

export class ExistingcustomerPage implements OnInit {
  ports: Port[];
  port: Port;
  isLoading = false;

  Remarks: string = '';
  activitylist: any = [];
  selectedcustomer: customerheader;
  leastBusinessPartnerlist: any;
  orgAllcustomer: any;
  selectedactivity: string = '';
  varselectedcust: any;
  
  constructor(public loginauth: LoginauthService,private router: Router,private loadingController: LoadingController,public common: Commonfun,) {
  }


  ResetPage() {
    try {
          if (this.activitylist.length == 1) {
            this.selectedactivity = this.activitylist[0].id;
            this.selectedcustomer = null;
            this.orgAllcustomer = null;
            this.Remarks = '';
          }
          else {
            this.selectedactivity = '';
            this.selectedcustomer = null;
            this.orgAllcustomer = null;
            this.Remarks = '';
          }
    }
    catch { }
  }

  RefreshPage() {
    this.ResetPage();
  }
  ngOnInit() {
    this.ResetPage();
   // this.common.chkcache('existingcustomer');
    setTimeout(() => {
      this.Bindallactivity();
    }, 1500);
    
  }
  onClose(event: {component: IonicSelectableComponent,text: any}) {
    event.component.searchText = "";
  }
  custsearch(event: {component: IonicSelectableComponent,text: any}) {
    console.log("custsearch");
    if (event.text.length >= 3) {
        this.BindCustomer(event.text);
    } else {
     // this.orgAllcustomer = [];
     if (!!this.leastBusinessPartnerlist && this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
      this.orgAllcustomer = [];
     } else {

     }
    }

  }



  BindCustomer(searchkey) {
    try {
              if (this.selectedactivity != '' && searchkey != '') {
              this.loginauth.getexistcustmerapi(this.selectedactivity, searchkey).subscribe(data => {
                const response = data;
                this.orgAllcustomer = response;

              }, error => {

              });

            }
      else if (this.selectedactivity != '' && searchkey == '') {
        //=============start for top 10================= 	
        console.log('leastBusinessPartnerlist');
        this.loginauth.getexistcustmerapi(this.selectedactivity, "").subscribe(data => {
          const response = data;

          this.leastBusinessPartnerlist = response;
          if (this.leastBusinessPartnerlist.length > this.loginauth.minlistcount) {
            this.orgAllcustomer = null
          }
          else {
            this.orgAllcustomer = response;
          }
          // 
        }, error => {

        });
        //=============end for top 10================= 
      }
    } catch (error) {
      // this.loadingDismiss();

    }
  }
  onChangeCustomer() {
    try {
      this.loadingPresent();
      this.Remarks = '';

      if (this.selectedcustomer != null) {
        this.varselectedcust = this.orgAllcustomer.find(item => item.id === this.selectedcustomer.id);
        this.Remarks = this.varselectedcust.disapproveremarks == null ? "" : this.varselectedcust.disapproveremarks;
      }
      this.loadingDismiss();
    } catch (error) {
      this.loadingDismiss();

    }

  }

  Bindallactivity() {
    try {
          this.activitylist[0] = this.loginauth.selectedactivity;
            setTimeout(() => {
              this.selectedactivity = this.activitylist[0].id;
            }, 500);
    } catch (error) {
      this.loadingDismiss();
    }
  }

  exonActChange() {
  console.log("exonActChange");
  this.BindCustomer("");
  }

  onEdit() {
    this.router.navigateByUrl('/newcustomer?selectedcustomer=' + this.selectedcustomer.id);
    this.ResetPage();
  }
  onCancel() {
    this.ResetPage();
  }

  refChange(event: {component: IonicSelectableComponent,value: any}) {
    this.onChangeCustomer();
    event.component._searchText = "";
  }

  async loadingPresent() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait ...',
      spinner: 'circles'
    }).then(a => {
      a.present().then(() => {

        if (!this.isLoading) {
          a.dismiss().then(() =>
            console.log('abort laoding'));
        }
      });
    });
  }

  async loadingDismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() =>
      console.log('loading dismissed'));
  }



}
