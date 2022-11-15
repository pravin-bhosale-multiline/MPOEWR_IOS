import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
import { Router } from '@angular/router';
let ExistingcustomerPage = class ExistingcustomerPage {
    constructor(loginauth, router) {
        this.loginauth = loginauth;
        this.router = router;
        this.Remarks = '';
        this.selectedactivity = '';
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
    }
    portChange(event) {
        console.log('port:', event.value);
    }
    ResetPage() {
        this.selectedactivity = '';
        this.selectedcustomer = null;
        this.orgAllcustomer = [];
        this.Remarks = '';
    }
    RefreshPage() {
        this.ResetPage();
    }
    ngOnInit() {
        this.ResetPage();
        console.log('activitylist', this.activitylist);
        this.Bindallactivity();
    }
    BindCustomer() {
        console.log("this.selectedactivity", this.selectedactivity);
        if (this.selectedactivity != '') {
            this.loginauth.getexistcustmer(this.selectedactivity).subscribe(data => {
                const response = data['response'];
                //this.Allcustomer = response.data;
                var organization = response.data.map(function (customer) {
                    //    customer.sfname=  customer.scusNature==='F'?customer.sfirmName + '-' + customer.spanno:customer.sfname +'-' +(customer.spanno==="null"?"":customer.spanno)
                    customer.sfname = customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname);
                    return customer;
                });
                //this.Allcustomer=organization;
                this.orgAllcustomer = organization;
                console.log('orgAllcustomer', this.orgAllcustomer);
            });
        }
    }
    onChangeCustomer() {
        this.Remarks = '';
        console.log("this.selectedcustomer", this.selectedcustomer);
        if (this.selectedcustomer != null) {
            this.varselectedcust = this.orgAllcustomer.find(item => item.id === this.selectedcustomer.id);
            this.Remarks = this.varselectedcust.disapproveremarks == null ? "" : this.varselectedcust.disapproveremarks;
            //            this.Remarks="Thiu is test data for the multi line text box in the ionic mobile application testing with PISPl. Thiu is test data for the multi line text box in the ionic mobile application testing with PISPl Thiu is test data for the multi line text box in the ionic mobile application testing with PISPl. Thiu is test data for the multi line text box in the ionic mobile application testing with PISPl"
        }
    }
    Bindallactivity() {
        this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
            this.activitylist = data;
            console.log("activitylist", this.activitylist);
        });
    }
    onActChange() {
        console.log('selectedactivity', this.selectedactivity);
        this.BindCustomer();
    }
    onEdit() {
        console.log('selectedcustomer', this.selectedcustomer);
        this.router.navigateByUrl('/newcustomer?selectedcustomer=' + this.selectedcustomer.id);
        //this.router.navigate(['/newcustomer', { selectedcustomer: JSON.stringify(this.selectedcustomer) }]);
        this.ResetPage();
    }
    onCancel() {
        this.ResetPage();
    }
    refChange(event) {
        this.onChangeCustomer();
        console.log('ref:', event.value);
    }
};
ExistingcustomerPage = tslib_1.__decorate([
    Component({
        selector: 'app-existingcustomer',
        templateUrl: './existingcustomer.page.html',
        styleUrls: ['./existingcustomer.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService, Router])
], ExistingcustomerPage);
export { ExistingcustomerPage };
//# sourceMappingURL=existingcustomer.page.js.map