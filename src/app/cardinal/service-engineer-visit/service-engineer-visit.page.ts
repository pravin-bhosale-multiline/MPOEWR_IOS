import { ServiceEngineerVisitService } from './service-engineer-visit.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-service-engineer-visit',
  templateUrl: './service-engineer-visit.page.html',
  styleUrls: ['./service-engineer-visit.page.scss'],
})
export class ServiceEngineerVisitPage implements OnInit {

  readonly TAG = "ServiceEngineerVisitPage";
  venderApprovalList:any;
 
  constructor(private router: Router,private serviceEngineerVisitService: ServiceEngineerVisitService) { }

  async ngOnInit() {
    this.venderApprovalList = await (this.serviceEngineerVisitService.getVenderApprovalList()).toPromise();
   // console.log(this.TAG,this.venderApprovalList);
  }
  async ionViewWillEnter() {
    this.venderApprovalList = await (this.serviceEngineerVisitService.getVenderApprovalList()).toPromise();
   // console.log(this.TAG,this.venderApprovalList);
  }

  public refreshPage(){
    try {
            this.ionViewWillEnter();
    } catch (error) {
      console.error(this.TAG,error);
    }
  }
  public detailsClick(service){
    try {
          let navigationExtras: NavigationExtras = { queryParams: {
            special: JSON.stringify(service)
          } };
          this.router.navigate(['service-engineer-visit-detail'], navigationExtras);
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }

}
