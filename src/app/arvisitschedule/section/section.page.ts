import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ArvisitscheduleService as ChecklistService } from '../arvisitschedule.service';

import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Validator } from 'src/provider/validator-helper';
import { Message } from 'src/provider/message-helper';



@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {
  islast=false;
  myForm: FormGroup;
  sSection="Section"
  jsonSection;
  sectionIndex=0;
  curentquestionlist=[];
  questionJsonList;
  old: { this: any; };
  remove=false;
  barcode: any;
  constructor(private fb : FormBuilder
    ,public checklistservice:ChecklistService
    ,private val: Validator
    ,private msg:Message
    ,private router: Router
    ,private route: ActivatedRoute
    ,private barcodeScanner:BarcodeScanner) { 
    this.myForm = this.fb.group({});
    
    
  }
  ionViewWillEnter(){
    this.route.params.subscribe(params => {
      if(this.router.getCurrentNavigation())
      if (this.router.getCurrentNavigation().extras.state) {
        let currentques= this.router.getCurrentNavigation().extras.state.question;
        if(currentques.type==='SL' || currentques.type==='MET'){
          this.myForm.get(currentques.questionid).setValue(currentques.ans);
        }
      }
    });
   
  }

  backPress(event){
    //console.log('test');
    
    this.resetJsonAns();
    this.curentquestionlist=[];
    this.router.navigateByUrl('/arvisitschedule');

  }
  OnClickSelector(question,event){
    let navigationExtras: NavigationExtras = {
      state: {
        question:question
        
      }
    };
    this.router.navigate(['selectorsinglequestionframwork'], navigationExtras);
  }
  OnClickMultipleEntry(question,event){
    let navigationExtras: NavigationExtras = {
      state: {
        question:question
        
      }
    };
    this.router.navigate(['multipleentry'], navigationExtras);
  }
 
  ngOnInit() {
    //console.log('insdie');
    // this.sectionIndex=this.checklistservice.secIndex;
      this.jsonSection=this.checklistservice.selectedinspection.sections[this.sectionIndex];
      this.sSection=this.jsonSection.sectionname;
      this.questionJsonList=this.checklistservice.selectedinspection.sections[this.sectionIndex].questions;
      this.firstControlLoads(this.questionJsonList);
      this.showcontrol(this.questionJsonList);
      if(this.sectionIndex===this.checklistservice.selectedinspection.sections.length-1){
        this.islast=true;
      }else{
        this.islast=false;
      }
  }
 
  firstControlLoads(listOfQuestion) {
    this.curentquestionlist=[];
    for (let question of listOfQuestion){
      
      if(question.isfirst && !question.isload){
        this.createControls(question);
       
      }
    }
  }
resetJsonAns(){
  for(let section of this.checklistservice.selectedinspection.sections){
   for(let que of section.questions){
    que.isload=false;
    que.ans='';
     }
    }
}
 async createControls(jsonQuestion){
      this.curentquestionlist.push(jsonQuestion);
      this.setSequenceOfQuestion();
      const newFormControl = new FormControl();
      // add dynamic que no. sequence
    // console.log('validation',control.validation);
    
      if(jsonQuestion.validation==='emailValid' ){
            newFormControl.setAsyncValidators(this.val.emailValid);
      }
       if(jsonQuestion.validation==='pannoValid'){
            newFormControl.setAsyncValidators(this.val.pannoValid);
      }
       if(jsonQuestion.validation==='digit15Valid'){
            newFormControl.setAsyncValidators(this.val.digit15Valid);
      }
       if(jsonQuestion.validation==='digit10Valid' ){
            newFormControl.setAsyncValidators(this.val.digit10Valid);
      }
      if(jsonQuestion.validation==='gstnumberValid' ){
        newFormControl.setAsyncValidators(this.val.gstnumberValid);
        }
      if(jsonQuestion.validation==='numberValid' ){
        newFormControl.setAsyncValidators(this.val.numberValid);
        }
      if(jsonQuestion.validation==='positivenumberValid' ){
        newFormControl.setAsyncValidators(this.val.positivenumberValid);
        }
      if(jsonQuestion.validation==='vehiclenumberValid' ){
        newFormControl.setAsyncValidators(this.val.vehiclenumberValid);
        }
      if(jsonQuestion.required){
        newFormControl.setValidators(Validators.required);
      }
      
        newFormControl.setValue(jsonQuestion.ans);
      
        
      
      this.myForm.addControl(jsonQuestion.questionid,newFormControl);
      jsonQuestion.isload=true;
      this.remove=false;
     
      
   await   this.onCreateGroupFormValueChange();
  }
async  onCreateGroupFormValueChange(){
    this.old={...this.myForm.value};

    this.myForm.valueChanges.subscribe(value => {
      // console.log('remove',this.remove);
      // console.log('add',question);
      const queid=Object.keys(value).find(k=>value[k]!=this.old[k])
      if(queid && !this.remove){
       
        var question = this.getQueDetFromKey(queid);
        
        // update ans of it
        if(question.type==='DATE'){
         
          question.ans = value[queid].split('T')[0];
        }else if(question.type==='TIME'){
         if(value[queid]!=='')        
          question.ans = value[queid].split('T')[1].substring(0,8);
        }else if(question.type==='TUP'){
          
          question.ans = value[queid].toUpperCase();
        }else{
          question.ans=value[queid];
        }
        
        
         if(question){
          this.setQuestionColor(question);
        //   console.log(question);
          
          if(question.dependentque){
            this.removeDependentQuestionControl(question);
          }
          for( let s of question.dependentque.split(',')){
            
            
            const addque=this.getQueDetFromQueNo(s);

            if(addque){
              
             
              let v= addque.condition;

              let expression = this.iterateCondition(v);
              
              try {
                
              //   console.log(this.runExpression(expression));
                
                if(this.runExpression(expression)===true){
                  this.remove=true;
                  this.createControls(addque);
                }
              } catch (error) {
              //   console.log(error);
                
              }
              
             
            }
            
          this.remove=false;
         }
        }
        this.setSequenceOfQuestion();
        this.old={...this.myForm.value};
        
        
      }
      this.old={...this.myForm.value};
                        
    });
  }
  getQueDetFromKey(key){
  
    for (let question of this.questionJsonList)
    {
      if(key===question.questionid){
        //console.log('getQueDetFromKey',question);
        
        return question;

      }
        
    }

}
getQueDetFromQueNo(qno){
  
  for (let question of this.questionJsonList)
  {
    if(qno===question.questionno){
      //console.log('getQueDetFromKey',question);
      
      return question;

    }
      
  }

}
  setSequenceOfQuestion(){
    let xlist = this.curentquestionlist.sort((a, b) => (a.srno > b.srno ? 1 : -1));
   let i=1;
      for(let xx of xlist){
        xx.queno=i;
        i=i+1;
      }
  }
  async prevSection(event){
    if(this.sectionIndex>0){
      // first hide all current component
      this.hideControl();
      this.sectionIndex=this.sectionIndex-1;
      this.jsonSection=this.checklistservice.selectedinspection.sections[this.sectionIndex];
      this.sSection=this.jsonSection.sectionname;
      this.questionJsonList=this.checklistservice.selectedinspection.sections[this.sectionIndex].questions;
      this.firstControlLoads(this.questionJsonList);
      this.showcontrol(this.questionJsonList);
      // this.checklistservice.secIndex=this.sectionIndex;
      this.islast=false;
    }
  
  }
 async nextSection(event){
    if(this.sectionIndex<this.checklistservice.selectedinspection.sections.length-1){
      // first hide all current component
      this.hideControl();
      this.sectionIndex=this.sectionIndex+1;
      this.jsonSection=this.checklistservice.selectedinspection.sections[this.sectionIndex];
      this.sSection=this.jsonSection.sectionname;
      this.questionJsonList=this.checklistservice.selectedinspection.sections[this.sectionIndex].questions;
      this.firstControlLoads(this.questionJsonList);
      this.showcontrol(this.questionJsonList);
      // this.checklistservice.secIndex=this.sectionIndex;
    }
    if(this.sectionIndex===this.checklistservice.selectedinspection.sections.length-1){
      this.islast=true;
    }else{
      this.islast=false;
    }
 //   console.log(this.curentquestionlist);
   
  }
  async showcontrol(questionJsonList){
    for(let que of questionJsonList){
      que.ishide=false;
       
    }
    if(this.curentquestionlist.length===0){
      for(let que of questionJsonList){
        if(que.isload){
          this.curentquestionlist.push(que);
        }
         
      }
    }
  }
  async hideControl(){
    for(let que of this.curentquestionlist){
      que.ishide=true;
     
    }
  }
  removeDependentQuestionControl(control){
    
    let v =control.dependentque
   for(let tag of v.split(',')){
   
       //console.log(tag);
       
      // console.log(this.myForm.get(tag));
       this.remove=true;
       const f= this.curentquestionlist.find(({questionno})=>questionno===tag);
       const index = this.curentquestionlist.indexOf(f);
       
      // console.log(f);
       
       if(f===undefined || f===null){}else{
        
         this.curentquestionlist.splice(index,1);
         if(this.myForm.get(f.questionid)!==null){
          f.ans='';
          f.isload=false;
          this.myForm.removeControl(f.questionid);
        //   console.log('remove control',f);
          
        }
       }
    
       
       
     
   }

 this.setSequenceOfQuestion();
 
 //   console.log(this.curentquestionlist);
   
                 
   
 }
 
 iterateCondition(condition) {
   let expression="";
   expression=condition;
   const questionnos = this.extractQuestion(condition);
   for(let queno of questionnos){
    expression=expression.replace(queno,this.getFormControlNamefromQuestion(queno)).replace('[','').replace(']','');
   }

 //   console.log(expression);
   
    return expression;
}
getFormControlNamefromQuestion(qno){
  const que= this.curentquestionlist.find(({questionno})=>questionno===qno);
  if(que){
    return '\''+this.myForm.get(que.questionid).value+'\'';
  }else{
    return 'false';
  }
  
 }
 extractQuestion(str) {
  const words = [];
  for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === '[') {
          const stopIndex = str.indexOf(']', i);
          if (stopIndex !== -1)
              words.push(str.substring(i + 1, stopIndex));
      }
  }
 return words;
}
  
 runExpression(expression){
   return eval(expression);
 }
 submitForm(event){

   for(let section of this.checklistservice.selectedinspection.sections){
    ////   console.log('section',section);
    
    for(let que of section.questions){
      if(que.ans!=='' && que.isload){
        this.setQuestionColor(que);
       
      }
      
    }
    this.router.navigateByUrl('/sectionview');
 
   } 
   
  
   
 
  
}
public findInvalidControls() {
  const invalid = [];
  const controls = this.myForm.controls;
  for (const name in controls) {
      if (controls[name].invalid) {
          invalid.push(name);
      }
  }
  console.log(invalid);
   
}
setQuestionColor(question){
for(let color of question.colors){
  let istrue=false;
  if(color.operator==='EQ' && question.ans===color.value){
     istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
     
   }else if(color.operator==='NE' && question.ans!==color.value){
    istrue=true;
    question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
  }else if(color.operator==='CT' && question.ans.includes(color.value)){
    istrue=true;
    question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
  }else if(color.operator==='GT'){
    if(question.type==='DATE' && new Date(question.ans)>new Date(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }else if(question.type==='INPUT' && question.inputtype==="number" 
              && new Number(question.ans)>new Number(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }
    
  }else if(color.operator==='GTE'){
    if(question.type==='DATE' && new Date(question.ans)>=new Date(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }else if(question.type==='INPUT' && question.inputtype==="number" 
              && new Number(question.ans)>=new Number(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }
    
  }else if(color.operator==='LT'){
    if(question.type==='DATE' && new Date(question.ans)<new Date(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }else if(question.type==='INPUT' && question.inputtype==="number" 
              && new Number(question.ans)<new Number(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }
  }else if(color.operator==='LTE' ){
    if(question.type==='DATE' && new Date(question.ans)<=new Date(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }else if(question.type==='INPUT' && question.inputtype==="number" 
              && new Number(question.ans)<=new Number(color.value)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }
  }else if(color.operator==='BT' ){
    if(question.type==='DATE' && new Date(question.ans)>=new Date(color.fromvalue) && new Date(question.ans)<=new Date(color.tovalue)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }else if(question.type==='INPUT' && question.inputtype==="number" 
    && new Number(question.ans)>=new Number(color.fromvalue) && new Number(question.ans)<=new Number(color.tovalue)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }
  }else if(color.operator==='NBT'){
    if(question.type==='DATE' && new Date(question.ans)<new Date(color.fromvalue) && new Date(question.ans)>new Date(color.tovalue)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }else if(question.type==='INPUT' && question.inputtype==="number" 
    && new Number(question.ans)<new Number(color.fromvalue) || new Number(question.ans)>new Number(color.tovalue)){
      istrue=true;
      question.colorid=color.colorid;
      question.colorbackground=color.colorbackground;
      question.forecolor=color.forecolor;
      return;
    }
  }else{
    istrue=false;
    question.colorid='';
    question.colorbackground='';
    question.forecolor='';
  }
  
  
}
}
ScanQRcode(question){
  console.log(question)

  try {
    //console.log("ScanQRcode");
    this.barcodeScanner.scan().then(
      barcodeData=>{
        console.log(barcodeData.text)
        question.ans=barcodeData.text;
        console.log(question.queno)
       this.myForm.get(question.questionid).setValue(barcodeData.text);
      }
    );
  } catch (error) {      
    //console.log("ScanQRcode: error:",error)
  }
 }

}


