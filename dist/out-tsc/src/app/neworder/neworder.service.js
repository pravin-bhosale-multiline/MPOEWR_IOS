import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginauthService } from '../login/loginauth.service';
let NeworderService = class NeworderService {
    constructor(http, loginauth) {
        this.http = http;
        this.loginauth = loginauth;
    }
    getexistcustmer() {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + this.loginauth.parameter + '&');
    }
    getexistcustmersearch(sfname) {
        console.log("getexistcustmersearch", sfname);
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + this.loginauth.parameter + '&'
            + '_where=sfname =\'' + sfname + '\'');
    }
    bindBusinessPartner() {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
            + this.loginauth.parameter + '&'
        // + '_where=sfname =\'' + sfname + '\''
        );
    }
    activitywiseBusinessPartner(organization) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
            + this.loginauth.parameter + '&'
            + '_selectedProperties=id,_identifier,mmstOrgAct$_identifier,mmstOrgAct&'
            + '_where=mmstOrgAct IN (' + organization + ')');
    }
    getcustmerbillingaddress(Cust_id) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer_billing?'
            + this.loginauth.parameter + '&'
            // + '_selectedProperties=id,_identifier&' 
            + '_where=mmstCustomer=\'' + Cust_id + '\'');
    }
};
NeworderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, LoginauthService])
], NeworderService);
export { NeworderService };
//# sourceMappingURL=neworder.service.js.map