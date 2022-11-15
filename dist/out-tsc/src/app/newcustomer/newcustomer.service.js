import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginauthService } from '../login/loginauth.service';
let NewcustomerService = class NewcustomerService {
    constructor(http, loginauth) {
        this.http = http;
        this.loginauth = loginauth;
    }
    getBPCategory(activityid) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerCategory?'
            + this.loginauth.parameter + '&'
            + '_selectedProperties=id,_identifier&'
            + '_where=EM_Mmst_Org_Act=\'' + activityid + '\'');
    }
    getBPartner(activityid) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
            + this.loginauth.parameter + '&'
            + '_selectedProperties=id,_identifier&'
            + '_where=EM_Mmst_Org_Act=\'' + activityid + '\'');
    }
    getPincode(pincode) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_post_off?'
            + this.loginauth.parameter + '&'
            //+ '_selectedProperties=id,_identifier&' 
            + '_where=spincode=\'' + pincode + '\'');
    }
    getarea(area_id) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_post_off_val?'
            + this.loginauth.parameter + '&'
            // + '_selectedProperties=id,_identifier&' 
            + '_where=Mmst_Post_Off_ID=\'' + area_id + '\'');
    }
    geteditcustmerheader(Cust_id) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + this.loginauth.parameter + '&'
            // + '_selectedProperties=id,_identifier&' 
            + '_where=id=\'' + Cust_id + '\'');
    }
    geteditcustmerbilling(Cust_id) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer_billing?'
            + this.loginauth.parameter + '&'
            // + '_selectedProperties=id,_identifier&' 
            + '_where=mmstCustomer=\'' + Cust_id + '\'');
    }
    geteditcustmercompliance(Cust_id) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_cust_compilance?'
            + this.loginauth.parameter + '&'
            // + '_selectedProperties=id,_identifier&' 
            + '_where=mmstCustomer=\'' + Cust_id + '\'');
    }
    getreferalcustmer(selectedactivity) {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + this.loginauth.parameter + '&'
            // + '_selectedProperties=id,_identifier&' 
            //  + '_where=scomplete=N'
            + '_where=mmstOrgAct=\'' + selectedactivity + '\'');
    }
    gettest() {
        return this.http.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + this.loginauth.parameter + '&'
            + '_selectedProperties=id,_identifier&'
        //  + '_where=scomplete=N'
        );
    }
    postLeadComplete(activity_id, cust_nature, firstname, middlename, lastname, firmname, panno, bpc_id, add1, add2, pincode, city, state, country, area, mobileno, cust_id, complete, email, add3, billing, shipping) {
        return this.http.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileNewLeadComplete?'
            + this.loginauth.parameter + '&activity_id=' + activity_id
            + '&cust_nature=' + cust_nature
            + '&firstname=' + firstname
            + '&middlename=' + middlename
            + '&lastname=' + lastname
            + '&bpc_id=' + bpc_id
            + '&add1=' + add1
            + '&add2=' + add2
            + '&pincode=' + pincode
            + '&city=' + city
            + '&state=' + state
            + '&country=' + country
            + '&area=' + area
            + '&mobileno=' + mobileno
            + '&cust_id=' + cust_id
            + '&complete=' + complete
            + '&firmname=' + firmname
            + '&panno=' + panno
            + '&email=' + email
            + '&add3=' + add3
            + '&billing=' + billing
            + '&shipping=' + shipping);
    }
    LeadComplete(leadcomplete) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                //  'Authorization':'Basic UDJhZG1pbjpQYXNzMjAyMA=='
                'Authorization': 'Basic ' + auth
            })
        };
        console.log('Authorization', auth);
        console.log('leadcomplete', leadcomplete);
        return this.http.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileNewLeadComplete', leadcomplete, httpOptions);
        //  return null;
        //let result;
        //     this.http.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileNewLeadComplete', jsdata, httpOptions)
        //     .subscribe(data => {
        //       result=data['_body'];
        //       console.log(data['_body']);
        //      }, error => {
        //       console.log(error);
        //     });
        // return result;
        //   const httpOptions = {
        //     headers: new HttpHeaders({        
        //       'img':leadcomplete.img
        //       })
        //     };
        //   return this.http.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileNewLeadComplete?'
        //   + this.loginauth.parameter + '&activity_id='+leadcomplete.activity_id
        //   +'&cust_nature='+leadcomplete.cust_nature
        //   +'&firstname='+leadcomplete.firstname
        //   +'&middlename='+leadcomplete.middlename
        //   +'&lastname='+leadcomplete.lastname
        //   +'&bpc_id='+leadcomplete.bpc_id
        //   +'&add1='+leadcomplete.add1
        //   +'&add2='+leadcomplete.add2
        //   +'&add3='+leadcomplete.add3
        //   +'&pincode='+leadcomplete.pincode
        //   + '&city='+leadcomplete.city
        //   +'&state='+leadcomplete.state
        //   +'&country='+leadcomplete.country
        //   +'&area='+leadcomplete.area 
        //   +'&mobileno='+leadcomplete.mobileno
        //   +'&cust_id='+leadcomplete.cust_id
        //   +'&complete='+leadcomplete.complete
        //   +'&firmname='+leadcomplete.firmname
        //   +'&panno='+leadcomplete.panno
        //   +'&email='+leadcomplete.email
        //   +'&billing='+leadcomplete.billing
        //   +'&shipping='+leadcomplete.shipping
        //   +'&referalcode='+leadcomplete.referalcode
        //   +'&org_id='+leadcomplete.org_id
        //  // +'&img='+leadcomplete.img
        //  +'&img='+''
        //   +'&gst='+leadcomplete.gst
        //   +'&district='+leadcomplete.district,httpOptions
        //   );
    }
    getCompilanceData(bpc_id) {
        return this.http.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileComplianceData?'
            + this.loginauth.parameter + '&bpc_id=' + bpc_id);
    }
};
NewcustomerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, LoginauthService])
], NewcustomerService);
export { NewcustomerService };
//# sourceMappingURL=newcustomer.service.js.map