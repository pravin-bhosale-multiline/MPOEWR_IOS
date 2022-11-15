import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let LoginauthService = class LoginauthService {
    constructor(http) {
        this.http = http;
        this.commonurl = 'http://192.168.103.127:8080/openbravo/';
    }
    login(user, pass) {
        this.parameter = 'user=' + user + '&password=' + pass;
        this.user = user;
        this.pass = pass;
        //  const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json',
        //     'Authorization': 'Basic ' + btoa(user + ':' + pass),
        //     'Access-Control-Allow-Origin':'*'
        //   })
        // }; 
        console.log('commonurl--' + this.commonurl + 'secureApp/LoginHandler.html?'
            + this.parameter);
        return this.http.get(this.commonurl + 'secureApp/LoginHandler.html?'
            + this.parameter);
        // return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileUserLogService?'
        // + this.parameter + '&userid=89F1325AC83D4AF0A72F1B4245193D76'
        // return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
        // console.log('commonurl-tresr-'+this.commonurl)
        // return this.http.get(this.commonurl + 'secureApp/LoginHandler.html?'
        // + this.parameter);
    }
    insertuserlog(userid) {
        return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileUserLogService?'
            + this.parameter + '&userid=' + userid);
    }
    forgetuser(username) {
        return this.http.get(this.commonurl
            + 'ws/in.mbs.webservice.MobileOtpService?user=P2admin&password=pass&action=forgetpass&username='
            + username);
    }
    getmobileno(username) {
        return this.http.get(this.commonurl
            + 'ws/in.mbs.webservice.MobileOtpService?user=P2admin&password=pass&action=getmobileno&username='
            + username);
    }
    changepassword(username, newpass, otp) {
        return this.http.get(this.commonurl
            + 'ws/in.mbs.webservice.MobileOtpService?user=P2admin&password=pass&action=changepass&username='
            + username + '&newpass=' + newpass + '&otp=' + otp);
    }
    getdefaultprofile() {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/ADUser?'
            + this.parameter + '&'
            + '_selectedProperties=id,name,email,defaultClient,defaultClient$_identifier,defaultOrganization,'
            + 'defaultOrganization$_identifier,defaultRole,defaultRole$_identifier,defaultWarehouse,defaultWarehouse$_identifier&'
            + '_where=username=\'' + this.user + '\'');
    }
    getrolelist(userid) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/ADUserRoles?'
            + this.parameter + '&'
            + '_selectedProperties=role,role$_identifier,mmsaSecurerule,userContact&'
            + '_where=userContact=\'' + userid + '\'');
    }
    getuserorg(userid, mmsaSecurerule) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/MMSA_UserOrg?'
            + this.parameter + '&'
            + '_selectedProperties=organization,organization$_identifier&'
            + '_where=user=\'' + userid + '\' and mmsaSecurerule= \'' + mmsaSecurerule + '\'');
    }
    getorgwarehouse(orgid) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/Warehouse?'
            + this.parameter + '&'
            + '_selectedProperties=id,_identifier&'
            + '_where=organization=\'' + orgid + '\'');
        console.log('loginuthorg111' + orgid);
    }
    setdefaultprofile(selprof) {
        this.selprofile = selprof;
        console.log('def', this.selprofile.organization, this.selprofile.role);
    }
    getbomlist() {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mbom_bom?'
            + this.parameter + '&'
            + '_selectedProperties=id,_identifier');
    }
    getjoblist(userid) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_joblist?'
            + this.parameter + '&'
            // + '_selectedProperties=id,$_identifier&'
            + '_where=reject=false and mmstScomplete=false and mwmsJobassignment.user=\'' + userid + '\'');
    }
    getjob(jobid) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_joblist?'
            + this.parameter + '&'
            // + '_selectedProperties=id,$_identifier&'
            + '_where=id=\'' + jobid + '\'');
    }
    getjobassignment(jobassignmentid) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_jobassignment?'
            + this.parameter + '&'
            // + '_selectedProperties=id,$_identifier&'
            + '_where=id=\'' + jobassignmentid + '\'');
    }
    getuserlist(jobtypeid) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mwms_wmsuser?'
            + this.parameter + '&'
            + '_selectedProperties=user,$user$_identifier&'
            + '_where=mwmsJobtype=\'' + jobtypeid + '\'');
    }
    acceptJob(joblistid) {
        return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJobListRequest?'
            + this.parameter + '&joblistid=' + joblistid + '&accept=true');
    }
    rejectJob(joblistid) {
        return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJobListRequest?'
            + this.parameter + '&joblistid=' + joblistid + '&reject=true');
    }
    transferJob(joblistid, userid, reason) {
        return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJobListRequest?'
            + this.parameter + '&joblistid=' + joblistid + '&transfer=true&userid=' + userid + '&reason=' + reason);
    }
    getProductlistFromBatch(batch) {
        console.log(this.commonurl + 'ws/in.mbs.webservice.WMobileTask?'
            + this.parameter + '&batch=' + batch);
        return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileTask?'
            + this.parameter + '&batch=' + batch);
    }
    insertJobDetails(joblistid, productmovtype, batch, productid, qty, binno, tobinno, batchid, iscomplete) {
        console.log(this.commonurl + 'ws/in.mbs.webservice.WMobileJoblistDetails?'
            + this.parameter + '&joblistid=' + joblistid + '&productmovtype=' + productmovtype
            + '&batch=' + batch + '&productid=' + productid + '&qty=' + qty
            + '&binno=' + binno + '&tobinno=' + tobinno + '&batchid=' + batchid);
        return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileJoblistDetails?'
            + this.parameter + '&joblistid=' + joblistid + '&productmovtype=' + productmovtype
            + '&batch=' + batch + '&productid=' + productid + '&qty=' + qty
            + '&binno=' + binno + '&tobinno=' + tobinno + '&batchid=' + batchid + '&iscomplete=' + iscomplete);
    }
    getuserwiseactivity(user_id) {
        return this.http.get(this.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseOrgActivity?'
            + this.parameter + '&userid=' + user_id);
    }
    getAllActivity() {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mmst_org_act?'
            + this.parameter + '&'
            + '_selectedProperties=id,_identifier&');
    }
    getAllActivity1(organization) {
        //var organization="FFF20200116014527794456F33BFA57A,72FC68471F5B46DCB348CF5DFD598D61";
        //for(var i=0;i<=org.length;i++) 
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/Organization?'
            + this.parameter + '&'
            + '_selectedProperties= mmstOrgAct$_identifier,mmstOrgAct&'
            + '_where=id IN (' + organization + ')'
        //mmstOrgAct$_identifier,
        );
    }
    getuserorgwise(userid) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/MMSA_UserOrg?'
            + this.parameter + '&'
            + '_selectedProperties=organization,organization$_identifier&'
            + '_where=user=\'' + userid + '\'');
    }
    getexistcustmer(selectedactivity) {
        return this.http.get(this.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + this.parameter + '&'
            // + '_selectedProperties=id,_identifier&' 
            + '_where=scomplete=false and mmstOrgAct=\'' + selectedactivity + '\'');
    }
};
LoginauthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], LoginauthService);
export { LoginauthService };
//# sourceMappingURL=loginauth.service.js.map