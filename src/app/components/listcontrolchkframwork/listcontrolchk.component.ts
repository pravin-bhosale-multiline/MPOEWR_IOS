import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import {  Component, Input, OnInit } from '@angular/core';
import { ArvisitscheduleService as ChecklistService } from '../../arvisitschedule/arvisitschedule.service';

@Component({
  selector: 'app-listcontrolchk',
  templateUrl: './listcontrolchk.component.html',
  styleUrls: ['./listcontrolchk.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ListcontrolComponentChk,
      multi: true
    }
  ]
})

export class ListcontrolComponentChk implements ControlValueAccessor,OnInit {
  listofitem=[];
  @Input() question;
  @Input() myform:FormGroup;
 defaultvalue='';
 @Input() isall=false;
  public value: any;
 
  constructor(private checklistservice:ChecklistService) {
    
   }
 
  async ngOnInit() {
    //console.log(this)

   // this.listofitem =this.strToObj(this.listofitem);
   let body ={
    action:"getallselctordata",
    queid:this.question.questionid,
    quemaster:this.checklistservice.selectedinspection,
    orgid:"0"
  }
  this.checklistservice.getRequest(body).subscribe(data => {
      
   var response = data;
   this.listofitem = response.data;
   //console.log(this.listofitem);
   
  });
    
  }
  obj;
  onChange = (value) => { };
  writeValue(obj: any): void {
    this.obj=obj;
    
    //this.file = null;
   // this.uploader.clearQueue();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

  selectMember(item,event){
    item.ischecked=event.detail.checked;
    this.getAllSelectedmember();
    this.question.ans=this.getListStringFormat(this.value);
    this.defaultvalue=this.getListStringFormat(this.value);
    this.writeValue(this.defaultvalue);
    this.myform.get(this.question.questionid).setValue(this.defaultvalue);
  }
  selectAllMember(event){
    this.isall=event.detail.checked;
    //this.isall=!this.isall;
    this.value=this.listofitem;
    this.listofitem.map((litem)=>{
      litem.ischecked=this.isall;
    });
    if(this.isall===false){
      this.value=[];
    }
    this.question.ans=this.getListStringFormat(this.value);
    this.defaultvalue=this.getListStringFormat(this.value);
    this.writeValue(this.defaultvalue);
    this.myform.get(this.question.questionid).setValue(this.defaultvalue);
    //console.log(this.isall)
    
  }
  getAllSelectedmember(){
    this.value= this.listofitem.filter((item)=>item.ischecked);
    if(this.value){
    }else{
      this.value='';
    }
   
  }
  getListStringFormat(list){
    let s = '';
    list.map((item)=>{
      s=s+'\''+item.name+'\','
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
