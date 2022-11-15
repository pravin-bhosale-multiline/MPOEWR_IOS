import { ArvisitscheduleService as ChecklistService } from './../arvisitschedule.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/provider/message-helper';
import { Commonfun } from 'src/provider/commonfun';


@Component({
  selector: 'app-sectionview',
  templateUrl: './sectionview.page.html',
  styleUrls: ['./sectionview.page.scss'],
})
export class SectionviewPage implements OnInit {
  sectionlist=[];
  constructor(public checklistservice: ChecklistService ,private router: Router ,private msg:Message,private commonfn:Commonfun) { }

  ngOnInit() {
   
   
    for(let section of this.checklistservice.selectedinspection.sections){
      let secjson ={}
      var questionlist=[];
     for(let que of section.questions){
      let quejson ={}
       if(que.ans!=='' && que.isload){
         if(que.type==='IMAGE' || que.type==='IMAGEC'){
          
          quejson["queno"]=que.queno;
          //console.log('queansImage',que.ans);
          
          let fileField=que.ans;
          let imageFile;
          for(let item of fileField.queue){
            imageFile=item;
          }
   //       console.log('queansImage',imageFile);
          quejson["ans"]=imageFile;
          quejson["question"]=que.question;
          quejson["colorbackground"]=que.colorbackground;
          quejson["forecolor"]=que.forecolor;
          quejson["type"]=que.type;
         }else if(que.type==='DTIME'){
          quejson["queno"]=que.queno;
          let datetime=que.ans.split('T');
          let sdate=datetime[0];
          let stime= datetime[1].substring(0,8);
          quejson["ans"]=(sdate+' '+stime);
          quejson["question"]=que.question;
          quejson["colorbackground"]=que.colorbackground;
          quejson["forecolor"]=que.forecolor;
          quejson["type"]=que.type;
       }else{
         
          quejson["queno"]=que.queno;
          quejson["ans"]=que.ans;
          quejson["question"]=que.question;
          quejson["colorbackground"]=que.colorbackground;
          quejson["forecolor"]=que.forecolor;
          quejson["type"]=que.type;
         }
        questionlist.push(quejson);
       }
     }
     secjson["sectionname"]=section.sectionname;
     secjson["questions"]=questionlist;
     this.sectionlist.push(secjson);
    }
  }

  backPress(event){
    this.router.navigateByUrl('/deshboard');
  }
  submitForm(event){
    this.commonfn.loadingPresent();
    var body = {};
    var questionlist=[];
     let formData = new FormData();
     
      for(let section of this.checklistservice.selectedinspection.sections){
        //console.log('section',section);
       
       for(let que of section.questions){
         let quesjson={};
         if(que.ans!=='' && que.isload){
           if(que.type==='IMAGE'  || que.type==='IMAGEC'){
             quesjson["questionid"]=que.questionid;
             quesjson["sectionid"]=section.sectionid;
             quesjson["colorid"]=que.colorid;
             quesjson["type"]=que.type;
             let fileField=que.ans;
             let files =fileField.queue;
             let i=0;
             files.forEach((fileItem) => {
               var ext=	fileItem.file.name.substr(fileItem.file.name.lastIndexOf('.') + 1);
               var filename = que.questionid+'.'+ext;
               formData.append(que.questionid, fileItem.file.rawFile, filename);
               i++;
             });
             quesjson["ans"]='';
           }else if(que.type==='DTIME'){
              quesjson["questionid"]=que.questionid;
              let datetime=que.ans.split('T');
              let sdate=datetime[0];
              let stime= datetime[1].substring(0,8);
              quesjson["ans"]=(sdate+' '+stime);
              quesjson["sectionid"]=section.sectionid;
              quesjson["colorid"]=que.colorid;
              quesjson["type"]=que.type;
           }else{
             quesjson["questionid"]=que.questionid;
             quesjson["ans"]=que.ans;
             quesjson["sectionid"]=section.sectionid;
             quesjson["colorid"]=que.colorid;
             quesjson["type"]=que.type;
           }
          
           questionlist.push(quesjson);
         
         }
         
       }
       
    
      }
      body["questionlist"]=questionlist;
      body["orgid"]='0';
      body["arplanid"]=this.checklistservice.visitplanforchecklist.arplanid;
      body["checklisttrxid"]=this.checklistservice.visitplanforchecklist.checklisttrxid;
      body["inspectionid"]=this.checklistservice.selectedinspection.inspectionid;
      formData.append('jsonpara', JSON.stringify(body));
      
      this.checklistservice.onSaveSectionQuestion(formData).subscribe(data => {
       this.commonfn.loadingDismiss();
   
       var response = data['response'];
      
       if (response.hasOwnProperty('messageType')) {
         if (response.messageType == 'success')
       {
         
           this.msg.presentAlert("Message", "Success", "Data saved successfully.");
           this.router.navigateByUrl('/arvisitschedule');
           
         }
         
       }
       if (response.error)
         this.msg.presentAlert("Message", "Error", response.error.message);
   
   
   
     });
    
     
   }
}
