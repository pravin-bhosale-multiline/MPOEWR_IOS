import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
let JobPage = class JobPage {
    constructor(loginservc, datePipe, route, router, loadingController) {
        this.loginservc = loginservc;
        this.datePipe = datePipe;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.loadingController.create({
            duration: 5000,
            spinner: 'circles',
            message: 'Please Wait...'
        }).then((res) => {
            res.present();
        });
        this.route.params.subscribe(params => {
            this.jobid = params['jobid'];
            console.log(this.jobid);
            this.loginservc.getjob(this.jobid).subscribe(data => {
                const response = data['response'];
                this.job = response['data'];
                console.log(this.job);
                this.loginservc.getjobassignment(this.job[0].mwmsJobassignment).subscribe(dataasgn => {
                    const response1 = dataasgn['response'];
                    this.jobassignment = response1['data'];
                    console.log(this.jobid);
                    this.loadingController.dismiss();
                });
            });
        });
    }
    onScan(joba) {
        console.log(joba);
        this.router.navigate(['/jobdetails', this.jobid]);
    }
    onCancel() {
        this.router.navigateByUrl('/joblist');
    }
};
JobPage = tslib_1.__decorate([
    Component({
        selector: 'app-job',
        templateUrl: './job.page.html',
        styleUrls: ['./job.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService, DatePipe,
        ActivatedRoute, Router,
        LoadingController])
], JobPage);
export { JobPage };
//# sourceMappingURL=job.page.js.map