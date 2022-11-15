import { FormGroup, FormBuilder } from '@angular/forms';
import { ArvisitscheduleService as ChecklistService } from './../arvisitschedule/arvisitschedule.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Data, SelectorsingleserviceService  } from '../selectorsingle/selectorsingleservice.service';


@Component({
  selector: 'app-selectorsingle',
  templateUrl: './selectorsingle.page.html',
  styleUrls: ['./selectorsingle.page.scss'],
})
export class SelectorsinglePage implements OnInit {
  selecteddata;
  data:Data[];
  filterdata:Data[];
  txtCaption:string;
  pagerow: number;
  totalrow: number;
  ismultiselect:boolean;
  question: any;
  
  myForm: FormGroup;
  constructor(private singleselservc:SelectorsingleserviceService,
    private route: ActivatedRoute
    ,private router: Router,private checklistservice:ChecklistService) { 
      
    }
    @ViewChild("id1", { static: false }) id1: IonicSelectableComponent;
  ngOnInit() {
    this.txtCaption='Select Value'
    this.route.params.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.question= this.router.getCurrentNavigation().extras.state.question;
        
      if(this.question.type==='MSL'){
        this.ismultiselect=true;
      }else{
        this.ismultiselect=false;
      }
      this.singleselservc.json['action']= 'getselctordata';
      this.singleselservc.json['queid']= this.question.questionid;
      this.singleselservc.json['orgid']= '0';
      this.singleselservc.json['text']='';
      this.singleselservc.json['offset']=0;
      this.singleselservc.json['quemaster']=this.checklistservice.selectedinspection;
      this.singleselservc.pageOffset=0;
            
      this.checklistservice.getRequest(this.singleselservc.json).subscribe(data => {
       
        var response = data;
        this.filterdata = response.data;
        this.pagerow=this.getpagenofromlist(data['data']);
        this.totalrow = response.totalRows;
        this.id1.open();
        console.log("filterdata", this.filterdata);
       // 
  
      });
    }
    });
  
  }
  onSubmitSingleSelection(){
    if(this.ismultiselect){
      let strmultivaluedata='';
      for(let value of this.selecteddata){
        strmultivaluedata=strmultivaluedata+'\''+value.name+'\','
      }
      strmultivaluedata='('+strmultivaluedata.substring(0,strmultivaluedata.length-1)+')';
      this.question.ans=strmultivaluedata;
     // console.log(strmultivaluedata);
      
    }else{
      //let que = this.getQueDetFromQueID(this.question.questionid)
      this.question.ans=this.selecteddata.name;
    }
    console.log(this.checklistservice.selectedinspection);
    let navigationExtras: NavigationExtras = {
      state: {
        question:this.question
        
      }
    };
    this.router.navigate(['section'],navigationExtras);
    
  }
  getQueDetFromQueID(key){
  
    for(let section of this.checklistservice.selectedinspection.sections){
      //  console.log('section',section);
      
      for(let que of section.questions){
        if(key===que.questionid){
          return que;
        }
      }
    }
  
  }
  onSearchChange(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase(); 
    this.singleselservc.json['offset']=0;
    this.singleselservc.json['quemaster']=this.checklistservice.selectedinspection;
    this.singleselservc.json['action']= 'getselctordata';
        this.singleselservc.json['queid']= this.question.questionid;
        this.singleselservc.json['orgid']= '0';
    // Reset items back to all of the items
   //this.filterdata = this.data;
  
    // if the value is an empty string don't filter the items
    if (text && text.trim() !== '') {
      if(text.length>2){
       
        this.singleselservc.json['text']=text;
        this.checklistservice.getRequest(this.singleselservc.json).subscribe(data => {
          var response = data;
          this.filterdata = response.data;
          this.pagerow=this.getpagenofromlist(data['data']);
          this.totalrow = response.totalRows;
          console.log("searchdata", this.filterdata);
         // 
    
        });
  
      }
      
    }else{
      this.singleselservc.json['text']=text;
      this.checklistservice.getRequest(this.singleselservc.json).subscribe(data => {
        var response = data;
        this.filterdata = response.data;
        this.pagerow=this.getpagenofromlist(data['data']);
        this.totalrow = response.totalRows;
        console.log("searchdata", this.filterdata);
       // 
  
      });
    }

  }
  getpagenofromlist=function(jolist){
    let pagerow=0;
    for (let item of jolist) {
      pagerow=pagerow+1;
    }
    return pagerow;
  }
  public async doInfinite(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    try {
      //Set this initial 0 at top 
    
    
     let text = (event.text || '').trim().toLowerCase();
     if(this.pagerow===20 && this.totalrow>20){
        this.singleselservc.pageOffset = this.singleselservc.pageOffset + 20;
        this.singleselservc.json['offset']=this.singleselservc.pageOffset;
        this.singleselservc.json['quemaster']=this.checklistservice.selectedinspection;
        this.singleselservc.json['action']= 'getselctordata';
        this.singleselservc.json['queid']= this.question.questionid;
        this.singleselservc.json['orgid']= '0';
        if (text) {
          this.singleselservc.json['text']=text;
        }
        let tempData = await (await this.checklistservice.getRequest(this.singleselservc.json)).toPromise();
      
        if (!!tempData) {
          // This is your page varible where you bind data
          this.data = this.data.concat(tempData['data']);
          this.pagerow=this.getpagenofromlist(tempData['data']);
        this.filterdata=this.filterdata.concat(tempData['data']);
        this.totalrow = tempData['totalRows'];
        event.component.endInfiniteScroll();
       
      
        }
            // console.log(this.filterjoblist.length+'  '+this.totalrow);
       
     }
   
     
     if(this.filterdata.length===this.totalrow){
      event.component.disableInfiniteScroll();
      return;
      
    }
      
    } catch (error) {
      
    }
    
  
  
  
  }
}
