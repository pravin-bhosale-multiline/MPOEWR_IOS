import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoginauthService } from '../login/loginauth.service';
let BomPage = class BomPage {
    constructor(loginservc, loadingCtrl) {
        this.loginservc = loginservc;
        this.loadingCtrl = loadingCtrl;
        this.loginservc.getbomlist().subscribe(data => {
            const response = data['response'];
            this.bomlist = response['data'];
            this.filterbomList = this.bomlist;
        });
    }
    ngOnInit() {
    }
    onSearchChange(ev) {
        // Reset items back to all of the items
        this.filterbomList = this.bomlist;
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.filterbomList = this.filterbomList.filter((bom) => {
                return (bom._identifier.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
};
BomPage = tslib_1.__decorate([
    Component({
        selector: 'app-bom',
        templateUrl: './bom.page.html',
        styleUrls: ['./bom.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService, LoadingController])
], BomPage);
export { BomPage };
//# sourceMappingURL=bom.page.js.map