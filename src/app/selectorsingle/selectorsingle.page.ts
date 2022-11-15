import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Data, SelectorsingleserviceService  } from '../selectorsingle/selectorsingleservice.service';
import { LoginauthService  } from '../login/loginauth.service';

@Component({
  selector: 'app-selectorsingle',
  templateUrl: './selectorsingle.page.html',
  styleUrls: ['./selectorsingle.page.scss'],
})
export class SelectorsinglePage implements OnInit {
  selecteddata;

  data:Data[];
  filterdata:Data[];
 
  rptid: string;
  scontrolname: string;
  txtCaption:string;
  pagerow: number;
  totalrow: number;
  ismultiselect:boolean;
  controltype:string;

  constructor(private singleselservc:SelectorsingleserviceService,
    private route: ActivatedRoute, private loginservc: LoginauthService
    ,private router: Router) { }
    @ViewChild("id1", { static: false }) id1: IonicSelectableComponent;
  ngOnInit() {
    this.txtCaption='Select Value'
    this.route.params.subscribe(params => {
      this.rptid = params['rptid'];
      this.scontrolname=params['scontrolname'];
      this.controltype=params['controltype'];
      if(this.controltype==='LST'){
        this.ismultiselect=true;
      }else{
        this.ismultiselect=false;
      }
      this.singleselservc.json['scontrolname']= this.scontrolname;
      this.singleselservc.json['text']='';
      this.singleselservc.json['offset']=0;
      this.singleselservc.pageOffset=0;
            
      this.singleselservc.getData(this.singleselservc.json).subscribe(data=>{
        console.log('singleselect',data);
        this.data = data['data'];
        this.filterdata=data['data'];
        this.pagerow=this.getpagenofromlist(data['data']);
          this.totalrow = data['totalRows'];
          this.id1.open();
      });
    });
  }
  onSubmitSingleSelection(){
    if(this.ismultiselect){
      let strmultivaluedata='';
      for(let value of this.selecteddata){
        strmultivaluedata=strmultivaluedata+'\''+value.id+'\','
      }
      strmultivaluedata='('+strmultivaluedata.substring(0,strmultivaluedata.length-1)+')';
      this.singleselservc.json[this.scontrolname]=strmultivaluedata;
     // console.log(strmultivaluedata);
      
    }else{
      this.singleselservc.json[this.scontrolname]=this.selecteddata.id;
    }
   // console.log(this.singleselservc.json);
    
    this.router.navigate(['/report', this.rptid]);
    
  }
 
  onSearchChange(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase(); 
    this.singleselservc.json['offset']=0;
    // Reset items back to all of the items
   //this.filterdata = this.data;
  
    // if the value is an empty string don't filter the items
    if (text && text.trim() !== '') {
      if(text.length>2){
        this.singleselservc.json['text']=text;
        this.singleselservc.getData(this.singleselservc.json).subscribe(data=>{
         // this.data = data['data'];
          this.filterdata=data['data'];
          this.pagerow=this.getpagenofromlist(data['data']);
          this.totalrow = data['totalRows'];
        });
      }
      
    }else{
      this.singleselservc.json['text']=text;
      this.singleselservc.getData(this.singleselservc.json).subscribe(data=>{
        this.data = data['data'];
        this.filterdata=data['data'];
        this.pagerow=this.getpagenofromlist(data['data']);
          this.totalrow = data['totalRows'];
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
        if (text) {
          this.singleselservc.json['text']=text;
        }
        let tempData = await (await this.singleselservc.getData(this.singleselservc.json)).toPromise();
      
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
