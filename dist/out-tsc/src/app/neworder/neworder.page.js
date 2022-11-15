import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
//import {LoginauthService,AllAct,customerheader} from '../login/loginauth.service';
import { NeworderService } from './neworder.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginauthService } from '../login/loginauth.service';
let NeworderPage = class NeworderPage {
    // FinalAmount:string;
    constructor(neworderservice, router, fb, loginauth) {
        this.neworderservice = neworderservice;
        this.router = router;
        this.fb = fb;
        this.loginauth = loginauth;
        this.reftextcount = 0;
        //Allcustomer:customerheader[];
        this.items = [];
        this.ishidden = false;
        this.buttonName = '';
        this.activity = '';
        this.cartproduct = [
            { "ProductID": "1", "ID": 1, "Product": "Product A", "Qty": "2", "UOM": "", "SchemeInformation": "SchemeInformation1", "Rate": "100", "FreeQty": "0", "DiscountAmount": "10", "Amount": "200", "GSTInformation": "10%", "GSTAmount": "20", "TotalAmount": "220", "show": false },
            { "ProductID": "1", "ID": 2, "Product": "Product B", "Qty": "1", "UOM": "", "SchemeInformation": "SchemeInformation2", "Rate": "100", "FreeQty": "0", "DiscountAmount": "20", "Amount": "100", "GSTInformation": "20%", "GSTAmount": "20", "TotalAmount": "120", "show": false },
            { "ProductID": "1", "ID": 3, "Product": "Product C", "Qty": "3", "UOM": "", "SchemeInformation": "SchemeInformation3", "Rate": "1000", "FreeQty": "0", "DiscountAmount": "30", "Amount": "3000", "GSTInformation": "10%", "GSTAmount": "300", "TotalAmount": "3300", "show": false },
            { "ProductID": "1", "ID": 4, "Product": "Product D", "Qty": "2", "UOM": "", "SchemeInformation": "SchemeInformation4", "Rate": "100", "FreeQty": "0", "DiscountAmount": "40", "Amount": "200", "GSTInformation": "10%", "GSTAmount": "20", "TotalAmount": "220", "show": false },
        ];
        this.form = this.fb.group({
            selectedBusinessPartner: [],
        });
    }
    ngOnInit() {
        //bind customer
        //this.bindcustomer();
        this.bindBusinessPartner();
    }
    bindcustomer() {
        this.neworderservice.getexistcustmer().subscribe(data => {
            const response = data['response'];
            var organization = response.data.map(function (customer) {
                customer.sfname = (customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname));
                customer.sfname = (customer.sfname == null ? "" : customer.sfname);
                //   console.log('customer.sfname',customer.sfname);
                return customer;
            });
            // this.Allcustomer = organization;
            // console.log("alcust",this.Allcustomer);
        });
    }
    bindcustomer1(strsearch) {
        this.neworderservice.getexistcustmersearch(strsearch).subscribe(data => {
            const response = data['response'];
            var organization = response.data.map(function (customer) {
                customer.sfname = (customer.scusNature === 'F' ? customer.sfirmName : customer.sfname + ' ' + (customer.slname === "null" ? "" : customer.slname));
                customer.sfname = (customer.sfname == null ? "" : customer.sfname);
                // console.log('customer.sfname',customer.sfname);
                return customer;
            });
            // this.Allcustomer = organization;
            // console.log("alcust",this.Allcustomer);
        });
    }
    bindBusinessPartner() {
        this.loginauth.getuserwiseactivity(this.loginauth.userid).subscribe(data => {
            this.activitylist = data;
            console.log("activitylist", data);
            var organization = this.activitylist.map(function (item) {
                return '\'' + item.id + '\'';
            });
            console.log("organization:", organization);
            this.neworderservice.activitywiseBusinessPartner(organization).subscribe(actdata => {
                const actresponse = actdata['response'];
                // this.Allcustomer = organization;
                this.BusinessPartnerlist = actresponse.data;
                console.log("bindBusinessPartner", this.BusinessPartnerlist);
            });
        });
    }
    bindcustmerbillingaddress() {
        this.neworderservice.getcustmerbillingaddress(this.loginauth.userid).subscribe(data => {
            this.activitylist = data['response'];
            console.log("activitylist", data);
        });
    }
    refChange(event) {
        console.log('ref:', event.value);
        if (event.value != undefined) {
            this.activity = event.value.mmstOrgAct$_identifier;
        }
        else {
            this.activity = '';
        }
    }
    custsearchChange(event) {
        this.reftextcount++;
        if (this.reftextcount == 2) {
            console.log('reftextcount:', this.reftextcount);
            console.log('ref:', event.text);
            this.bindcustomer1(event.text);
            this.reftextcount = 0;
        }
    }
    toggle(selectedcartproduct) {
        console.log('selectedcartproduct.show: ', selectedcartproduct.show);
        if (selectedcartproduct.show == false) {
            for (var i = 0; i < this.cartproduct.length; i++) {
                if (this.cartproduct[i].show === true) {
                    this.cartproduct[i].show = false;
                }
            }
        }
        selectedcartproduct.show = !selectedcartproduct.show;
    }
    removeProduct(post) {
        let index = this.cartproduct.indexOf(post);
        if (index > -1) {
            this.cartproduct.splice(index, 1);
        }
    }
    onAddProduct() {
        console.log('selectedcustomer', this.onecustomer);
        this.router.navigateByUrl('/addeditproduct');
    }
    Resetpage() {
        this.form.reset();
        this.activity = '';
        // this.router.navigateByUrl('/newcustomer');
        this.router.navigateByUrl('/neworder');
        //this.router.navigate([this.router.url]);
    }
};
NeworderPage = tslib_1.__decorate([
    Component({
        selector: 'app-neworder',
        templateUrl: './neworder.page.html',
        styleUrls: ['./neworder.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NeworderService,
        Router,
        FormBuilder,
        LoginauthService])
], NeworderPage);
export { NeworderPage };
//# sourceMappingURL=neworder.page.js.map