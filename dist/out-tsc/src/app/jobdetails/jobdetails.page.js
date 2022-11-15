import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginauthService } from '../login/loginauth.service';
import { LoadingController } from '@ionic/angular';
let JobdetailsPage = class JobdetailsPage {
    constructor(route, loginservc, loadingController, router) {
        this.route = route;
        this.loginservc = loginservc;
        this.loadingController = loadingController;
        this.router = router;
        this.window = window;
        this.message = null;
        this.status = 'Initialization...';
    }
    ngOnInit() {
        this.listen();
        this.route.params.subscribe(params => {
            this.jobid = params['jobid'];
            console.log('job details: ' + this.jobid);
            this.loginservc.getjob(this.jobid).subscribe(data => {
                const response = data['response'];
                this.job = response['data'];
                if (this.job[0].mwmsJobtype$_identifier === 'GRN') {
                    this.istobinview = true;
                    this.isfrombinview = false;
                }
                else if (this.job[0].mwmsJobtype$_identifier === 'Physical Stock') {
                    this.isfrombinview = true;
                    this.istobinview = true;
                }
                else {
                    this.isfrombinview = true;
                    this.istobinview = false;
                }
                console.log(this.job);
            });
        });
        this.movementtye = 'Product';
        this.qty = '1';
    }
    onFocusBatch(currentelement, nextElement) {
        this.activeelement = currentelement;
        this.nextelement = nextElement;
    }
    moveFocus(currentelement, nextElement) {
        console.log(currentelement);
        this.activeelement = currentelement;
        this.nextelement = nextElement;
        if (this.activeelement.el.id === 'batchid') {
            this.productlist = [];
            this.loadingController.create({
                duration: 7000,
                spinner: 'circles',
                message: 'Please Wait...'
            }).then((res) => {
                res.present();
            });
            this.loginservc.getProductlistFromBatch(this.activeelement.value).subscribe(data => {
                this.productlist = data['data'];
                this.skucode = this.productlist[0].mmstMainprodcode;
                console.log(data);
                console.log(this.productlist);
                this.loadingController.dismiss();
            });
        }
        else {
            this.nextelement.setFocus();
        }
    }
    onNext(nextElement) {
        if (this.scanbatchproductsku === undefined) {
            this.txterror = 'Please Scan Batch.';
        }
        else if (this.skucode === undefined) {
            this.txterror = 'Please Select SKU';
        }
        else if (this.tobinno === undefined) {
            this.txterror = 'Please Enter Bin No.';
        }
        else {
            this.loginservc.insertJobDetails(this.jobid, this.movementtye, this.scanbatchproductsku, this.selectedproduct.id, this.qty, this.binno, this.tobinno, this.selectedproduct.attributeSetValue, 'N').subscribe(data => {
                this.response = data['response'];
                if (this.response.messageType !== undefined) {
                    if (this.response.messageType === 'success') {
                        this.scanbatchproductsku = '';
                        this.productlist = [];
                        this.qty = '1';
                        this.txterror = 'Success!';
                        nextElement.setFocus();
                    }
                }
                else {
                    this.txterror = this.response.error.message;
                }
            }, error => {
                this.txterror = error.message;
            });
        }
    }
    onComplete() {
        this.loginservc.insertJobDetails(this.jobid, this.movementtye, this.scanbatchproductsku, this.selectedproduct.id, this.qty, this.binno, this.tobinno, this.selectedproduct.attributeSetValue, 'Y').subscribe(data => {
            this.response = data['response'];
            if (this.response.messageType !== undefined) {
                if (this.response.messageType === 'success') {
                    this.scanbatchproductsku = '';
                    this.qty = '1';
                    this.txterror = 'Success!';
                    this.router.navigateByUrl('/joblist');
                }
            }
            else {
                this.txterror = this.response.error.message;
            }
        }, error => {
            this.txterror = error.message;
        });
    }
    onCancel() {
        this.router.navigateByUrl('/joblist');
    }
    onChangeProduct(product, qtyelement) {
        this.selectedproduct = product;
        this.skuname = product.mmstMainprodname;
        qtyelement.setFocus();
    }
    listen() {
        this.status = `enabled`;
        this.window.plugins.honeywell.listen(data => {
            this.activeelement.value = `${data}`;
            console.log(`Scanned: ${data}`);
            if (this.activeelement.el.id === 'batchid') {
                this.productlist = [];
                this.loadingController.create({
                    duration: 7000,
                    spinner: 'circles',
                    message: 'Please Wait...'
                }).then((res) => {
                    res.present();
                });
                this.loginservc.getProductlistFromBatch(this.activeelement.value).subscribe(data => {
                    this.productlist = data['data'];
                    this.skucode = this.productlist[0].mmstMainprodcode;
                    console.log(data);
                    console.log(this.productlist);
                    this.loadingController.dismiss();
                }, error => {
                    this.txterror = error.message;
                });
            }
            else {
                this.activeelement = null;
                this.nextelement.setFocus();
            }
        }, error => {
            this.activeelement.setFocus();
            console.log(`Error occured: ${error}`);
        });
    }
    disable() {
        this.status = `disabled`;
        this.window.plugins.honeywell.release(success => {
            this.message = `DISABLE_SUCCESS: ${success}`;
        }, error => {
            this.message = `DISABLE_ERROR: ${error}`;
        });
    }
    enable() {
        this.status = 'enabled';
        this.window.plugins.honeywell.claim(success => {
            this.message = `ENABLE_SUCCESS: ${success}`;
            this.listen();
        }, error => {
            this.message = `ENABLE_ERROR ${error}`;
        });
    }
};
JobdetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-jobdetails',
        templateUrl: './jobdetails.page.html',
        styleUrls: ['./jobdetails.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, LoginauthService,
        LoadingController,
        Router])
], JobdetailsPage);
export { JobdetailsPage };
//# sourceMappingURL=jobdetails.page.js.map