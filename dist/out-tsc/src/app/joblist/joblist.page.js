import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
let JoblistPage = class JoblistPage {
    constructor(loginservc, alertController, datePipe, router, loadingController) {
        this.loginservc = loginservc;
        this.alertController = alertController;
        this.datePipe = datePipe;
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
        this.loginservc.getjoblist(this.loginservc.userid).subscribe(data => {
            this.response = data['response'];
            this.joblist = this.response['data'];
            this.totalrow = this.response.totalRows;
            this.loadingController.dismiss();
        });
    }
    onAccept(jobid) {
        this.loginservc.acceptJob(jobid).subscribe(data => {
            console.log('onaccept');
            this.router.navigate(['/job', jobid]);
        });
    }
    onReject(jobid) {
        this.loginservc.rejectJob(jobid).subscribe(data => {
            console.log('on reject');
            this.doRefresh(null);
        });
    }
    onTransfer(jobid) {
        console.log('on transfre');
        this.router.navigate(['/jobtransfer', jobid]);
    }
    doRefresh(event) {
        this.loginservc.getjoblist(this.loginservc.userid).subscribe(data => {
            this.response = data['response'];
            this.joblist = this.response['data'];
            this.totalrow = this.response.totalRows;
        });
        setTimeout(() => {
            console.log('Async operation has ended');
            if (event) {
                event.target.complete();
            }
        }, 2000);
    }
};
JoblistPage = tslib_1.__decorate([
    Component({
        selector: 'app-joblist',
        templateUrl: './joblist.page.html',
        styleUrls: ['./joblist.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService,
        AlertController,
        DatePipe,
        Router,
        LoadingController])
], JoblistPage);
export { JoblistPage };
//# sourceMappingURL=joblist.page.js.map