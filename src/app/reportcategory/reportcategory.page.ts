import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginauthService } from '../login/loginauth.service';
import { ReportPara } from '../report/report.page';
import { Storage } from '@ionic/storage';
//import { ViewWillEnter } from '@ionic/angular';


/*Interface reportdet */
export interface Reportdet {
  id: string;
  _identifier: string;
}
@Component({
  selector: 'app-reportcategory',
  templateUrl: './reportcategory.page.html',
  styleUrls: ['./reportcategory.page.scss'],
})
export class ReportcategoryPage implements OnInit {
  readonly TAG ="Report Category Page";
  selectedReportcat:Reportdet;
  selectedSubCat:Reportdet;
  selectedreport:Reportdet;
  reportcatlist:Reportdet[];
  reportsubcatlist:Reportdet[];
  reportlist:Reportdet[];
  rptparalist: ReportPara[];

constructor(private loginservc: LoginauthService, private router: Router,public storage: Storage) { 

}
  ionViewWillEnter(): void {
    this.selectedReportcat=undefined;
    this.selectedSubCat=undefined;
    this.selectedreport=undefined;
    this.loginservc.getreportdet(this.loginservc.selectedprof.role,'category','','').subscribe(data=>{
      this.reportcatlist=data['data'];
      if(this.reportcatlist.length===1){
        this.selectedReportcat=this.reportcatlist[0];
      }
     // console.log(this.TAG,"getreportdet",this.reportcatlist);
  
    });

  }

  ngOnInit() {
    this.loginservc.getreportdet(this.loginservc.selectedprof.role,'category','','').subscribe(data=>{
      this.reportcatlist=data['data'];
      if(this.reportcatlist.length===1){
        this.selectedReportcat=this.reportcatlist[0];
      }
     // console.log(this.TAG,"getreportdet",this.reportcatlist);
  
    });
  }
  
  onChangeReportcat(reportcat:Reportdet){
    this.selectedReportcat=reportcat;
    this.loginservc.getreportdet(this.loginservc.selectedprof.role,'subcategory',this.selectedReportcat.id,'').subscribe(data=>{
      this.reportsubcatlist=data['data'];
      if(this.reportsubcatlist.length===1){
        this.selectedSubCat=this.reportsubcatlist[0];
      }
      //console.log(this.TAG,"onChangeReportcat",this.reportsubcatlist);
      // this.selectedSubCat=undefined;
      // this.selectedreport=undefined;
    });
  }
  onChangeSubcat(reportsubcat:Reportdet){
    this.selectedSubCat=reportsubcat;
    this.loginservc.getreportdet(this.loginservc.selectedprof.role,'report','',this.selectedSubCat.id).subscribe(data=>{
      this.reportlist=data['data'];
      if(this.reportlist.length===1){
        this.selectedreport=this.reportlist[0];
      }
    //  console.log(this.TAG,"onChangeSubcat",this.reportlist);

    });
  }
  onChangeReport(report:Reportdet){
    this.selectedreport=report;
   // console.log(this.TAG,"onChangeReport",this.selectedreport);
  }
  onClick(){
     this.loginservc.reportjson={};
     this.loginservc.selectedreport=this.selectedreport;
      this.router.navigate(['/report', this.selectedreport.id]);
  }

}
