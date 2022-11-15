import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { VenderApprovalService } from './vender-approval.service';

@Component({
  selector: 'app-vender-approval',
  templateUrl: './vender-approval.page.html',
  styleUrls: ['./vender-approval.page.scss'],
})
export class VenderApprovalPage implements OnInit {

  readonly TAG = "VenderApprovalPage";
  venderApprovalList:any;
  constructor(private venderApprovalService: VenderApprovalService,private router: Router) { }

  async ngOnInit() {
  this.venderApprovalList = await (this.venderApprovalService.getVenderApprovalList()).toPromise();
  }
  async ionViewWillEnter(){
    this.venderApprovalList = await (this.venderApprovalService.getVenderApprovalList()).toPromise();
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
          this.router.navigate(['vender-approval-details'], navigationExtras);
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }

}
