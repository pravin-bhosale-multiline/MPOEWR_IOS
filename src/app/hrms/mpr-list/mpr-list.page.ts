import { Commonfun } from 'src/provider/commonfun';
import { Component, OnInit } from '@angular/core';
import { MprFormService } from '../mpr-form.service';
import { FormBuilder } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mpr-list',
  templateUrl: './mpr-list.page.html',
  styleUrls: ['./mpr-list.page.scss'],
})
export class MprListPage implements OnInit {

  readonly TAG = "MPR List Page"
  MPRList: any;

  constructor(private MPRService: MprFormService,private fb: FormBuilder,public commonfun: Commonfun,
              private router: Router) { }

  ngOnInit() {
    
  }

  async ionViewWillEnter(){
    try {
          this.commonfun.loadingPresent();
          const result = await this.MPRService.getMPRList().toPromise();
          console.log(this.TAG,"Before",result);
          this.MPRList = result.jobtitlename.JobTitleList;
          console.log(this.TAG,this.MPRList);
          this.commonfun.loadingDismiss();
    } catch (error) {
          console.log(this.TAG,error);
          this.commonfun.loadingDismiss();
    }
  }
  public refreshPage(){
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
  public detailsClick(mpr){
    try {
          console.log(this.TAG,"Get Details IS Called",mpr);
          let navigationExtras: NavigationExtras = { queryParams: {special: JSON.stringify(mpr)}};
          this.router.navigate(['mpr-form'], navigationExtras);
    } catch (error) {
      console.log(this.TAG,error);
    }
  }

}
