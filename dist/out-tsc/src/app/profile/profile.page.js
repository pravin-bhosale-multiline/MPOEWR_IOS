import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Router } from '@angular/router';
let ProfilePage = class ProfilePage {
    constructor(loginservc, router) {
        this.loginservc = loginservc;
        this.router = router;
    }
    ngOnInit() {
        this.loginservc.getdefaultprofile().subscribe((data) => {
            // this.defaultprofile = data['response'];
            this.defaultprofile = [data.response.data[0]];
            console.log(data.response);
            // console.log(data.response.data[0].defaultClient);
            this.loginservc.getrolelist(this.defaultprofile[0].id).subscribe(data => {
                const response = data['response'];
                this.rolelist = response['data'];
                // console.log('rolelist', this.rolelist);
            });
        });
    }
    onChange(roleValue) {
        this.selectedRole = roleValue;
        console.log(this.selectedRole.role$_identifier);
        this.loginservc.getuserorg(this.selectedRole.userContact, this.selectedRole.mmsaSecurerule).subscribe(data => {
            const response = data['response'];
            this.userorglist = response['data'];
            // console.log('userorglist', this.userorglist);
        });
    }
    onOrgChange(orgValue) {
        this.selectedOrg = orgValue;
        this.loginservc.getorgwarehouse(this.selectedOrg.organization).subscribe(data => {
            const response = data['response'];
            this.orgwarehouselist = response['data'];
        });
        console.log('selected org', this.selectedOrg.organization);
    }
    onWarehouseChange(warehouse) {
        this.selectedwarehouse = warehouse;
        console.log('warehouse selected: ', this.selectedwarehouse._identifier);
    }
    onClick() {
        if (this.selectedRole === undefined) {
            this.txtmsg = 'Please Select Role';
            return;
        }
        if (this.selectedOrg === undefined) {
            this.txtmsg = 'Please Select Organization';
            return;
        }
        if (this.selectedwarehouse === undefined) {
            this.txtmsg = 'Please Select Warehouse';
            return;
        }
        console.log('Proceed for BOM Page.', this.selectedRole.role);
        this.selectedprof = {
            user: this.defaultprofile[0].id,
            role: this.selectedRole.role,
            organization: this.selectedOrg.organization,
            client: this.defaultprofile[0].defaultClient,
            warehouse: this.selectedwarehouse.id
        };
        this.loginservc.setdefaultprofile(this.selectedprof);
        this.txtmsg = 'Selected Organization Are User: ' + this.defaultprofile[0].name + ' Role: '
            + this.selectedRole.role$_identifier + ' Org: ' + this.selectedOrg.organization$_identifier;
        this.router.navigateByUrl('/bom');
        // console.log('Proceed for BOM Page.');
    }
};
ProfilePage = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService, Router])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map