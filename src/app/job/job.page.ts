import { Component, OnInit } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Joblist } from '../joblist/joblist.page';
import { LoadingController } from '@ionic/angular';

/* Job assignment */
export interface JobAssignment {
  _identifier: string;
  id: string;
  organization: string;
  organization$_identifier: string;
  bpartner: string;
  bpartner$_identifier: string;
  user: string;
  status: string;
  doctype: string;
  doctype$_identifier: string;
  documentno: string;
  documentdate: string;
}
@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {
  jobid;
  job: Joblist[];
  jobassignment: JobAssignment[];
  constructor(private loginservc: LoginauthService, private datePipe: DatePipe,
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
        
        this.loginservc.getjobassignment(this.job[0].mwmsJobassignment).subscribe( dataasgn => {
          const response1 = dataasgn['response'];
          this.jobassignment = response1['data'];
          
          this.loadingController.dismiss();
        });
      });
    });
  }
  onScan(joba: JobAssignment) {
    
    this.router.navigate(['/jobdetails', this.jobid]);

  }
  onCancel() {
    this.router.navigateByUrl('/joblist');
  }
}
