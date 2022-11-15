import { Component, OnInit } from '@angular/core';
import { Joblist } from '../joblist/joblist.page';
import { LoginauthService } from '../login/loginauth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
/* get User ID */
export interface User {
  user$_identifier: string;
  user: string;
}
@Component({
  selector: 'app-jobtransfer',
  templateUrl: './jobtransfer.page.html',
  styleUrls: ['./jobtransfer.page.scss'],
})
export class JobtransferPage implements OnInit {
  userlist: User[];
  jobid;
  job: Joblist[];
  selectedUser: User;
  sreason;
  txterror: string;
  constructor(private loginservc: LoginauthService,
              private route: ActivatedRoute, private router: Router
            , private loadingController: LoadingController) { }

  ngOnInit() {
    this.loadingController.create({
      duration: 5000,
      spinner: 'circles',
      message: 'Please Wait...'}).then((res) => {
        res.present(); });
    this.route.params.subscribe(params => {
      this.jobid = params['jobid'];
      
      this.loginservc.getjob(this.jobid).subscribe(data => {
        const response = data['response'];
        this.job = response['data'];
        
        this.loginservc.getuserlist(this.job[0].mwmsJobtype).subscribe(userdata => {
          const response1 = userdata['response'];
          this.userlist = response1['data'];
          this.loadingController.dismiss();
        });
      });
    });
  }
  onChange(user: User) {
    this.selectedUser = user;
  }
  onGo() {
    if (this.sreason === undefined || this.selectedUser === undefined) {
      this.txterror = 'All Fields Are Mendetory.';
      
    } else {
      
      this.loginservc.transferJob(this.jobid, this.selectedUser.user, this.sreason).subscribe(data => {
        this.txterror = 'Success.';
        this.router.navigateByUrl('/joblist');
      });
    }
    // use this.selecteduser and job to transfer web service
  }
}
