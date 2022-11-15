import { async } from '@angular/core/testing';
import { ServiceManagerService } from './service-manager.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Commonfun } from 'src/provider/commonfun';

@Component({
  selector: 'app-service-manager',
  templateUrl: './service-manager.page.html',
  styleUrls: ['./service-manager.page.scss'],
})
export class ServiceManagerPage implements OnInit {
  /*
   * 
   */
  readonly TAG = "ServiceManagerPage";
  /**
   *This variable is type of list will hold all the compliant request by consumer. 
   */
  complaintList:any;

  constructor(public serviceManagerService: ServiceManagerService,
              private router: Router,private commonFunction: Commonfun) { }

  ngOnInit() {
    console.log(this.TAG,"ngOnInit Fired");
  }
  async ionViewWillEnter(){
   console.log(this.TAG,"ionViewWillEnter Fired");
   try{
          this.complaintList = await(await this.serviceManagerService.getComplaintList()).toPromise();
          console.log(this.TAG,this.complaintList);
   } catch (error) {
     this.commonFunction.presentAlert("Compliant Report","Error",error.error);
     console.error(this.TAG,error);
   }
  }
  public refreshPage(){
    try {
           this.ionViewWillEnter();
    } catch (error) {
      console.error();
    }
  }

  public detailsClick(complaint){
    try {
          console.log(this.TAG,"Get Details IS Called",complaint);
          let navigationExtras: NavigationExtras = { queryParams: {
            special: JSON.stringify(complaint)
          } };
          this.router.navigate(['service-manager-details'], navigationExtras);

    } catch (error) {
      console.error(this.TAG,error);
    }
  }

}
