import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Commonfun } from 'src/provider/commonfun';
import { NeworderService } from '../neworder/neworder.service';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.page.html',
  styleUrls: ['./custom-alert.page.scss'],
})
export class CustomAlertPage implements OnInit {

  readonly TAG = "CustomAlertPage";
  alertFormGroup: FormGroup;
  templateData;
  response;
  showError = false;

  constructor(private formBuilder: FormBuilder,private modalCtrl: ModalController,private commonFunction: Commonfun,
              public neworderservice: NeworderService,navParams: NavParams) {
                this.templateData = navParams.get('templateData');
               }

  ngOnInit() {

    this.alertFormGroup = this.formBuilder.group({
      txtTemplateName:[,Validators.required]
     
    });
  }
  public cancel(){
    try {
          this.modalCtrl.dismiss();
    } catch (error) {
      console.log(error);
    }
  }
  public save(){
    try {
            this.showError = false;
            this.templateData.template_name= this.alertFormGroup.get('txtTemplateName').value ? this.alertFormGroup.get('txtTemplateName').value :'';
            console.log(this.TAG,this.templateData.template_name);    
            this.neworderservice.SaveTemplate(this.templateData).subscribe(data => {
             
              this.response = data;
              if (data != null) {
               if (data.resposemsg == "success") {
                  console.log(this.TAG,data.resposemsg); 
                  this.modalCtrl.dismiss(data);
               }
                else {
                  this.showError = true;
                //  this.commonFunction.presentAlert("message", "Fail", data.logmsg);
                }
              }
            }, error => {
              this.commonFunction.loadingDismiss();
              this.commonFunction.presentAlert("Message", "Error!", error.error.text);
            });
    } catch (error) {
      console.log(error);
    }
  }
}
