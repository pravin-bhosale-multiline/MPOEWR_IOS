import {  Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoginauthService } from 'src/app/login/loginauth.service';

@Component({
  selector: 'app-listcontrol',
  templateUrl: './listcontrol.component.html',
  styleUrls: ['./listcontrol.component.scss'],
  
})

export class ListcontrolComponent implements OnInit {
  @Input() listofitem;
  @Input() value;
  @Input() inpname;
  @Input() inpcaption;
 defaultvalue='';
 @Input() isall=false;
 
  constructor(private loginservc: LoginauthService) { }
 
  ngOnInit() {
    //console.log(this)

    this.listofitem =this.strToObj(this.listofitem);
    this.value =this.strToObj(this.value);
    this.defaultvalue=this.getListStringFormat(this.value);
    this.listofitem.map((litem)=>{
      this.value.map((item)=>{
        if(item.id===litem.id){
          //console.log(item,litem)
          litem.ischecked=true;
        }
      })
    });
    if(this.listofitem.length===this.value.length){
      this.isall=true;
    }else{
      this.isall=false;
    }
    
  }
  selectMember(item,event){
    item.ischecked=event.detail.checked;
    this.getAllSelectedmember();
    this.loginservc.reportjson[this.inpname]=this.getListStringFormat(this.value)
    this.defaultvalue=this.getListStringFormat(this.value);
  }
  selectAllMember(event){
    this.isall=event.detail.checked;
    //this.isall=!this.isall;
    this.value=this.listofitem;
    this.listofitem.map((litem)=>{
      litem.ischecked=this.isall;
    });
    
    this.loginservc.reportjson[this.inpname]=this.getListStringFormat(this.value);
    this.defaultvalue=this.getListStringFormat(this.value);
    //console.log(this.isall)
    
  }
  getAllSelectedmember(){
    this.value= this.listofitem.filter((item)=>item.ischecked);
   
  }
  getListStringFormat(list){
    let s = '';
    list.map((item)=>{
      s=s+'\''+item.id+'\','
    });
    if(s!==''){
      s='('+s.substring(0,s.length-1)+')';
    }
    return s;
  }
  strToObj(str){
    var obj = [];
    if(str&&typeof str ==='string'){
       // var objStr = str.match(/\[(.)+\]/g);
        eval("obj ="+str);
    }
    return obj
 }
}
