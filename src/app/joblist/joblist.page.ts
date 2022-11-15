import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
/* get List */
export interface ResponseJoblist {
data: Joblist[];
totalRows;
}
/*get Job list*/
export interface Joblist {
  _identifier: string;
  id: string;
  organization: string;
  organization$_identifier: string;
  assigndate: string;
  mwmsJobtype: string;
  mwmsJobtype$_identifier: string;
  mwmsJobassignment: string;
  staskdescription: string;
  accept: boolean;
  reject: boolean;
  transfer: boolean;
}

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.page.html',
  styleUrls: ['./joblist.page.scss'],
})

export class JoblistPage implements OnInit {
  joblist: Joblist[];
  response: ResponseJoblist;
  totalrow;
  sreason;
  constructor(private loginservc: LoginauthService
            , private alertController: AlertController
            , private datePipe: DatePipe
            , private router: Router
            , private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadingController.create({
      duration: 5000,
      spinner: 'circles',
      message: 'Please Wait...'}).then((res) => {
        res.present(); });
    this.loginservc.getjoblist(this.loginservc.userid).subscribe(data => {
            this.response = data['response'];
            this.joblist = this.response['data'];
            this.totalrow = this.response.totalRows;
            this.loadingController.dismiss();
          });
  }
  onAccept(jobid) {
    this.loginservc.acceptJob(jobid).subscribe(data => {
      
      this.router.navigate(['/job', jobid]);
    });
  }
  onReject(jobid) {
    this.loginservc.rejectJob(jobid).subscribe(data => {
      
      this.doRefresh(null);
    });
  }
  onTransfer(jobid) {
    
    this.router.navigate(['/jobtransfer', jobid]);
  }
  doRefresh(event) {
    this.loginservc.getjoblist(this.loginservc.userid).subscribe(data => {
      this.response = data['response'];
      this.joblist = this.response['data'];
      this.totalrow = this.response.totalRows;
    });
    setTimeout(() => {
      
      if (event) {
        event.target.complete();
      }
    }, 2000);
  }
}
