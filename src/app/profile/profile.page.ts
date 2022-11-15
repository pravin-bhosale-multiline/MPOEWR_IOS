import { Component, OnInit } from '@angular/core';
import { LoginauthService, RolelistFinal, UserOrglistFinal, Warehouse, Profilefinalresponse } from '../login/loginauth.service';
import { Profileinterface } from './profileinterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  defaultprofile: Profileinterface[];
  rolelist: RolelistFinal[];
  txtmsg: string;
  selectedRole: RolelistFinal;
  selectedOrg: UserOrglistFinal;
  orgwarehouselist: Warehouse[];
  selectedwarehouse: Warehouse;
  userorglist;
  
  constructor(private loginservc: LoginauthService, private router: Router) { }
 ngOnInit() {
    this.loginservc.getdefaultprofile().subscribe((data: Profilefinalresponse) => {
     // this.defaultprofile = data['response'];
      this.defaultprofile = [data.response.data[0]];
     // console.log('default profile',this.defaultprofile);
      // console.log(data.response.data[0].defaultClient);
     
      this.loginservc.getrolelist(this.defaultprofile[0].id).subscribe(data => {
        const response = data['response'];
        this.rolelist = response['data'];
        if(this.defaultprofile){
          //set default role
          let role = this.rolelist.filter((role)=>role.role===this.defaultprofile[0].defaultRole)[0];
          // let role ={role:this.defaultprofile[0].defaultRole,role$_identifier:this.defaultprofile[0].defaultRole$_identifier,mmsaSecurerule: '',userContact: ''};
          // //this.rolelist=[role];
          this.selectedRole=role;
          let organization={organization:this.defaultprofile[0].defaultOrganization,organization$_identifier:this.defaultprofile[0].defaultOrganization$_identifier};
          this.userorglist=[organization];
          this.selectedOrg=organization;
          let warehouse={id:this.defaultprofile[0].defaultWarehouse,_identifier:this.defaultprofile[0].defaultWarehouse$_identifier};
          this.orgwarehouselist=[warehouse];
          this.selectedwarehouse=warehouse;
          //apply auto if all values available
          if(this.rolelist.length===1 && organization.organization && warehouse.id ){
            this.onClick();
          }
          
        }
        // if(this.rolelist.length===1){
        //   this.selectedRole=this.rolelist[0];
        //   this.onChange(this.selectedRole);
        // }
        // console.log('rolelist', this.rolelist);
      } );
    });
  }

  onChange(roleValue: RolelistFinal) {
    this.selectedRole = roleValue;
   // console.log(this.selectedRole.role$_identifier);
      this.loginservc.getuserorg(this.selectedRole.userContact, this.selectedRole.mmsaSecurerule).subscribe(data => {
      let response = data['response'];
     // console.log("Before Sort",response);
    
      let tempresponse = response['data'].sort((a, b) => (a._identifier < b._identifier ? -1 : 1));
      
      
     // this.userorglist = response['data'];

     this.userorglist = tempresponse;

   //  this.userorglist = response['data'].sort(this.sortByProperty("organization$_identifie"));
  // console.log("adad",response['data']);
     //this.userorglist= this.sortByKey(response, 'organization$_identifie');
     //this.userorglist = this.userorglist.map(arr => arr.organization$_identifier..sort((a,b) => a > b));
      if(this.userorglist.length===1){
        this.selectedOrg=this.userorglist[0];
        this.onOrgChange(this.selectedOrg);
      }
      // else{
      //   this.selectedOrg = undefined;
      //   this.selectedwarehouse = undefined;
      // }
      // console.log('userorglist', this.userorglist);
    });
  
  }
  onOrgChange(orgValue: UserOrglistFinal) {
    this.selectedOrg = orgValue;
    this.loginservc.getorgwarehouse(this.selectedOrg.organization).subscribe(data => {
      const response = data['response'];
      this.orgwarehouselist = response['data'];
      this.selectedwarehouse= this.orgwarehouselist.filter(e => e._identifier.includes('01'))[0];
    });
  //  console.log('selected org', this.selectedOrg.organization);
  }
  onWarehouseChange(warehouse: Warehouse) {
    this.selectedwarehouse = warehouse;
    if(this.rolelist.length===1 && this.selectedOrg.organization && warehouse.id ){
      this.onClick();
    }
    //console.log('warehouse selected: ', this.selectedwarehouse._identifier);
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
  //   if (this.selectedwarehouse === undefined) {
  //     this.txtmsg = 'Please Select Warehouse';
  //     return;
  // }
    //console.log('Proceed for BOM Page.', this.selectedwarehouse.id);
    this.loginservc.selectedprof = {
      user: this.defaultprofile[0].id,
      role: this.selectedRole.role,
      organization: this.selectedOrg.organization,
      client: this.defaultprofile[0].defaultClient,
      warehouse: this.selectedwarehouse!==undefined?this.selectedwarehouse.id:''
    };
    this.loginservc.setdefaultprofile(this.loginservc.selectedprof);
    this.router.navigateByUrl('/reportcategory');
   /* this.txtmsg = 'Selected Organization Are User: ' + this.defaultprofile[0].name + ' Role: '
    + this.selectedRole.role$_identifier + ' Org: ' + this.selectedOrg.organization$_identifier;
    
    // console.log('Proceed for BOM Page.');*/
  }
  onLogout(){
    this.router.navigateByUrl('/login');
  }
}

