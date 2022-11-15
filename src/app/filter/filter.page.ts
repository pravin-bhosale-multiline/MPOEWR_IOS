import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { OrderApprovalServiceService } from '../order-approval/order-approval-service.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  readonly TAG = "FilterPage";
  filterList:any;
  active = 0;
  mainMenuId =0;
  checkedIdx;
  checkedOrgIdx;
  checked_Doc_TypeIdx;
  checked_Business_Type_Idx;
  tab = true;
  org = false;
  doc_type = false;
  business_type = false;
  isChecked:boolean;
  tabSelected=[];
  orgSelected=[];
  docTypeSelected=[];
  businessParterSelected;
  showSide = false;
  BusinessPartnerlist: any;
  selectedBusinessPartner: any;
  reftextcount = 0;

  test = true;
  constructor(public alertController: AlertController,
              public storage: Storage,
              private router: Router,
              private orderApprovalServiceService: OrderApprovalServiceService,
              private http: HttpClient) { }
 
  async ngOnInit() {
  
  
  }
  async ionViewWillEnter()
  {
   // console.log("ionViewWillEnter");
    this.filterList =  await ( await this.orderApprovalServiceService.getFilterData()).toPromise();
    if(!!this.filterList){
      this.showSide = true;
    }
    this.test = false;
    this.tabSelected=this.orderApprovalServiceService.filterTab;
    this.orgSelected=this.orderApprovalServiceService.filterOrg;
    this.docTypeSelected=this.orderApprovalServiceService.filterDocType;
    this.businessParterSelected = this.orderApprovalServiceService.filterBusinessPartner;
    this.selectedBusinessPartner= this.orderApprovalServiceService.filterselectedBusinessPartner;

    this.filterList[0].subData.forEach((item) => {
       //console.log(this.TAG,"clearFilterInnerMethod",item);
        var istabchecked=false;
       for(var i=0;i<this.tabSelected.length;i++)
       {
         if(this.tabSelected[i]==item.id){
          istabchecked=true;
         }
       }
       item.checked = istabchecked;
     });
     this.filterList[1].subData.forEach((item) => {
      var isorgchecked=false;
      for(var i=0;i<this.orgSelected.length;i++)
      {
        if(this.orgSelected[i]==item.id){
          isorgchecked=true;
        }
      }
      item.checked = isorgchecked;

    });
    this.filterList[2].subData.forEach((item) => {
     // console.log(this.TAG,"clearFilterInnerMethod",item);
     var isdocTypechecked=false;
      for(var i=0;i<this.docTypeSelected.length;i++)
      {
        if(this.docTypeSelected[i]==item.id){
          isdocTypechecked=true;
        }
      }
      item.checked = isdocTypechecked;

    });
    this.filterList[3].subData.forEach((item) => {
      // console.log(this.TAG,"clearFilterInnerMethod",item);
      item.checked = false;

    });

  }
  // async ionViewWillEnter()
  // {
  //   this.test = false;
  //   this.tabSelected=this.orderApprovalServiceService.filterTab;
  //   this.orgSelected=this.orderApprovalServiceService.filterOrg;
  //   this.docTypeSelected=this.orderApprovalServiceService.filterDocType;
  //   this.businessParterSelected = this.orderApprovalServiceService.filterBusinessPartner;

  //   this.isChecked = false;
  //                   this.test = false;
  //                   this.tabSelected=[];
  //                   this.orgSelected=[];
  //                   this.docTypeSelected=[];
  //                   this.businessParterSelected = "";
          
  //                   this.orderApprovalServiceService.filterTab=[];
  //                   this.orderApprovalServiceService.filterOrg=[];
  //                   this.orderApprovalServiceService.filterDocType=[];
  //                   this.orderApprovalServiceService.filterBusinessPartner='';
  //                  // this.selectedBusinessPartner = ""
  //                   this.clearFilterInnerMethod();

  // }
  public menuItemClick(index){
    let methodTAG = "menuItemClick"
    try {
         // console.log(this.TAG,methodTAG,index);
          this.active = index;
          this.mainMenuId = index;

          if(index==0){
            this.tab = true;
            this.org = false;
            this.doc_type = false;
            this.business_type = false;
          }
          if(index==1){
            this.tab = false;
            this.org = true;
            this.doc_type = false;
            this.business_type = false;
          }
          if(index==2){
            this.tab = false;
            this.org = false;
            this.doc_type = true;
            this.business_type = false;
          }
          if(index==3){
            this.tab = false;
            this.org = false;
            this.doc_type = false;
            this.business_type = true;
          }

          
    } catch (error) {
      
    }
  }
  public async clearFilter(){
    let methodTAG = "clearFilter";
    try {
          // console.log(this,methodTAG);
         
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'Filters',
              subHeader: 'Clear Filters',
              message: 'Would you like to clear all filters?',
              buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                   // console.log('Confirm Cancel: blah');
                  }
                }, {
                  text: 'Ok',
                  handler:  (data) => {
                   // console.log('Confirm Okay');
                    this.isChecked = false;
                    this.test = false;
                    this.tabSelected=[];
                    this.orgSelected=[];
                    this.docTypeSelected=[];
                    this.businessParterSelected = "";
          
                    this.orderApprovalServiceService.filterTab=[];
                    this.orderApprovalServiceService.filterOrg=[];
                    this.orderApprovalServiceService.filterDocType=[];
                    this.orderApprovalServiceService.filterBusinessPartner='';
                    this.orderApprovalServiceService.filterselectedBusinessPartner='';
                   // this.selectedBusinessPartner = ""
                    this.clearFilterInnerMethod();
                   
                  }
                }
              ]
            });
        
            await alert.present();
          
        
    } catch (error) {
     // console.log(this.TAG,methodTAG,error);
    }
  } 
  public chkTabSelect(selectedData,id,i,event){
  //  console.log(this.TAG,"chkTabSelect",selectedData,id);
    try {     

          if(event.detail.checked){
            var isnew=true; 
            for( let i = 0; i < this.tabSelected.length; i++){ 
              if ( this.tabSelected[i] === id) { 
                isnew=false;
              }
            }
            if (isnew==true) { 
              this.tabSelected.push(id);
                }
           // console.log(this.TAG,"Pravin1",this.tabSelected);
          } else if(event.detail.checked == false){
            for( let i = 0; i < this.tabSelected.length; i++){ 
              if ( this.tabSelected[i] === id) { 
                this.tabSelected.splice(i, 1); 
              }
            }
          //  console.log(this.TAG,"Pravin2",this.tabSelected);
          }
                 
    } catch (error) {
     // console.log(this.TAG,"chkTabSelect",error);
    }
  }
  public chkOrgSelect(selectedData,id,event){
    let methodTAG = "chkOrgSelect";
    try {
         // console.log(this.TAG,methodTAG,selectedData,id);
          if(event.detail.checked){
            var isnew=true; 
            for( let i = 0; i < this.orgSelected.length; i++){ 
              if ( this.orgSelected[i] === id) { 
                isnew=false;
              }
            }
            if (isnew==true) { 
            this.orgSelected.push(id);
          }
          } else if(event.detail.checked == false){
            for( let i = 0; i < this.orgSelected.length; i++){ 
              if ( this.orgSelected[i] === id) { 
                this.orgSelected.splice(i, 1); 
              }
            }
          }
        //  console.log("this.orgSelected",this.orgSelected);

    } catch (error) {
    //  console.log(this.TAG,methodTAG,error);
    }
  }
  public chkDocTypeSelect(selectedData,id,event){
    let methodTAG = "chkDocTypeSelect";
    try {
         // console.log(this.TAG,methodTAG,selectedData,id);
          if(event.detail.checked){
            var isnew=true; 
            for( let i = 0; i < this.docTypeSelected.length; i++){ 
              if ( this.docTypeSelected[i] === id) { 
                isnew=false;
              }
            }
            if (isnew==true) { 
            this.docTypeSelected.push(id);
          }
          }  else if(event.detail.checked == false){
            for( let i = 0; i < this.docTypeSelected.length; i++){ 
              if ( this.docTypeSelected[i] === id) { 
                this.docTypeSelected.splice(i, 1); 
              }
            }
          }
    } catch (error) {
    //  console.log(this.TAG,methodTAG,error);
    }
  }
  public async clearFilterInnerMethod(){
   // console.log(this.TAG,"clearFilterInnerMethod");
    try {
         

      this.isChecked = false;
      this.test = false;
     // this.tabSelected.slice(0,this.tabSelected.length)
      //this.orgSelected.slice(0,this.orgSelected.length);
      //this.docTypeSelected.slice(0,this.docTypeSelected.length);
      this.businessParterSelected = "";
      this.selectedBusinessPartner = "";

          this.orderApprovalServiceService.filterTab;
          this.orderApprovalServiceService.filterOrg;
          this.orderApprovalServiceService.filterDocType;
          this.orderApprovalServiceService.filterBusinessPartner;
          this.orderApprovalServiceService.pageOffset = 0;

         // this.cdRef.detectChanges(); 
      
           this.filterList[0].subData.forEach((item) => {
              // console.log(this.TAG,"clearFilterInnerMethod",item);
               item.checked = false;
 
             });
             this.filterList[1].subData.forEach((item) => {
             // console.log(this.TAG,"clearFilterInnerMethod",item);
              item.checked = false;

            });
            this.filterList[2].subData.forEach((item) => {
             // console.log(this.TAG,"clearFilterInnerMethod",item);
              item.checked = false;

            });
            this.filterList[3].subData.forEach((item) => {
              // console.log(this.TAG,"clearFilterInnerMethod",item);
              item.checked = false;

            });

      this.businessParterSelected = "";
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public applyFilter(){
    let methodTAG = "applyFilter";
    try {
          this.orderApprovalServiceService.filterTab = this.tabSelected;
          this.orderApprovalServiceService.filterOrg = this.orgSelected;
          this.orderApprovalServiceService.filterDocType = this.docTypeSelected;
          if(!!this.selectedBusinessPartner){
            this.orderApprovalServiceService.filterBusinessPartner = this.selectedBusinessPartner.id ? this.selectedBusinessPartner.id:'CLEAR';
            this.orderApprovalServiceService.filterselectedBusinessPartner = this.selectedBusinessPartner ? this.selectedBusinessPartner:'';

          }
          
         let obj ={
            "tab":this.tabSelected,
            "org":this.orgSelected,
            "doc_Type":this.docTypeSelected,
            "business_Par":this.businessParterSelected
          }

           this.router.navigateByUrl('/order-approval',{state: {tab: obj}}); 
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }
  public onBusinessPartnerchange(event){
    try {
      
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public onBusinessPartnerClose(event:{
    component: IonicSelectableComponent,
    text: any
  }){
event.component.searchText="";
this.BusinessPartnerlist=null;
  }
    
   
  public onBusinessPartnerSearch(event: {component: IonicSelectableComponent,text: any}){
    try {
            this.reftextcount++;
            var custsearchtext = event.text;
            if(custsearchtext.length % 3==0) {
              this.bindBusinessPartnerFromApi(custsearchtext);
              this.reftextcount = 0;
            }
            
    } catch (error) {
     // console.log(this.TAG,error);
    }
  }
  public bindBusinessPartnerFromApi(searchkey){
    try {
          if(searchkey) {
            this.orderApprovalServiceService.getBusinessPartnerData(searchkey).subscribe(businessPartnerList=>{
              this.BusinessPartnerlist = businessPartnerList;
            //  console.log("BusinessPartnerlist",this.BusinessPartnerlist)
            });
          }
    } catch (error) {
    //  console.log(this.TAG,error);
    }
  }

  public async getFilterData(){
    try {


      let url = "http://192.168.43.158:8080/openbravo/ws/in.mbs.webservice.Filter?user=hardik.pandya&password=pass&user_id=FFF202001310332122424C1A38AB7A41&action=all";
      
      return  this.http.get(url, {});
    } catch (error) {
      
    }
  }
}
