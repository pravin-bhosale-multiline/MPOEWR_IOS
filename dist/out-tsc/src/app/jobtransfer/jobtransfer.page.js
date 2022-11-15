import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
let JobtransferPage = class JobtransferPage {
    constructor(loginservc, route, router, loadingController) {
        this.loginservc = loginservc;
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
                this.loginservc.getuserlist(this.job[0].mwmsJobtype).subscribe(userdata => {
                    const response1 = userdata['response'];
                    this.userlist = response1['data'];
                    this.loadingController.dismiss();
                });
            });
        });
    }
    onChange(user) {
        this.selectedUser = user;
    }
    onGo() {
        if (this.sreason === undefined || this.selectedUser === undefined) {
            this.txterror = 'All Fields Are Mendetory.';
            console.log('Reason Mendetory');
        }
        else {
            console.log(this.selectedUser, this.job, this.sreason);
            this.loginservc.transferJob(this.jobid, this.selectedUser.user, this.sreason).subscribe(data => {
                this.txterror = 'Success.';
                this.router.navigateByUrl('/joblist');
            });
        }
        // use this.selecteduser and job to transfer web service
    }
};
JobtransferPage = tslib_1.__decorate([
    Component({
        selector: 'app-jobtransfer',
        templateUrl: './jobtransfer.page.html',
        styleUrls: ['./jobtransfer.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService,
        ActivatedRoute, Router,
        LoadingController])
], JobtransferPage);
export { JobtransferPage };
//# sourceMappingURL=jobtransfer.page.js.map