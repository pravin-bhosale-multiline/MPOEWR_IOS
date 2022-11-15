import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PlanMasterList, TravelExpenseService } from '../travel-expense/travel-expense.service';
import { Commonfun } from '../../provider/commonfun';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';
import { LoadingController,AlertController,Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {Message} from '../../provider/message-helper'

@Component({
  selector: 'app-addedit-travel-expense',
  templateUrl: './addedit-travel-expense.page.html',
  styleUrls: ['./addedit-travel-expense.page.scss'],
})
export class AddeditTravelExpensePage implements OnInit {
  travelExpenseFormedit:FormGroup;
  expenseList:any;
  selectedplan:any;
  expenseMasterList:any;
  selectedexpense:any;
  strfromdate:any;
  strtodate:any;
  planfromdate:any;
  plantodate:any;
  IsexpenseListlength=false;
  Supportingimg64:any='';
  IsSupportingimg64=false;
  IsSupportingrequired=false;
  isdesktop:boolean=false;
  constructor(private travelExpenseaddeditFromBuilder: FormBuilder,
    private travelExpenseService:TravelExpenseService,
    private commonfun:Commonfun,
    private router: Router,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    public camera:Camera,
    public msg:Message) {
      this.getrout();
      this.travelExpenseFormedit =  this.travelExpenseaddeditFromBuilder.group({ 
        fromdate:[,Validators.required],
        todate:[,Validators.required],
        selectableTravelExpenseUIControl: [,Validators.required],
        txtAmount:[,Validators.required],
        claimableamount:[,Validators.required]
      });

     }

  ngOnInit() {
    setTimeout( () => {
       
      this.checkplatform();
     
 
    },1500);
  }

dateyyyymmddT0000Z(dt){
  try {
    var dl1date=new Date(dt.substr(0,4),dt.substr(5,2)-1,dt.substr(8,2))
    var nmonth=dl1date.getMonth()+1;
    var dd1=(dl1date.getDate()<10?"0"+dl1date.getDate():dl1date.getDate())
    var mm1=(nmonth<10?"0"+nmonth:nmonth)
    var yyyy1=dl1date.getFullYear()
  // this.strfromdate=dd1+"-"+mm1+"-"+yyyy1
   return (yyyy1+"-"+mm1+"-"+dd1+"T00:00Z")
  } catch (error) {
    
  }
}

  public ondatechange(){
    let methodTAG = 'ondatechange';
    var isdateOk=true;
    try {
     
     
     var df=this.travelExpenseFormedit.controls["fromdate"].value;
     var dt=this.travelExpenseFormedit.controls["todate"].value;

var fromdate=new Date(this.dateyyyymmddT0000Z(df)).toISOString();
var todate=new Date(this.dateyyyymmddT0000Z(dt)).toISOString();

        //if((this.plantodate<=fromdate || this.plantodate>=todate || this.planfromdate<=fromdate || this.planfromdate>=todate))
        if(todate<this.planfromdate 
          || todate>this.plantodate
          || fromdate<this.planfromdate
          || fromdate>this.plantodate)
        {
          this.commonfun.presentAlert("Message", "Alert", "Expense Dates are must be in the range of Plan from date and Plan to date.");
          isdateOk=false;
         // return false;
        }
       else if(fromdate>todate)   
{
  this.commonfun.presentAlert("Message", "Alert", "From date must be less than To date.");
  isdateOk=false;
  
  //return false;
}
      
    } catch (error) {
     // isdateOk=false;

    //  console.log("Errorondatechange()",error)
    }
    return isdateOk;
  }


  checkplatform(){
    try {
  if(!this.msg.isplatformweb){ 
    
      //  if(!this.platform.is("desktop")){
       // 
        this.isdesktop = false;
        
      
      }
      else{
        this.isdesktop = true;
  
        
  
      }
    } catch (error) {
      
    }
  }

  getrout(){
    try {
      this.route.params.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state){
         this.expenseList= this.router.getCurrentNavigation().extras.state.expenseList;
         this.selectedplan= this.router.getCurrentNavigation().extras.state.selectedplan;
         this.expenseMasterList = this.router.getCurrentNavigation().extras.state.expenseMasterList;;
         var a1=this.selectedplan.fromdate.split("-");
         var dt=new Date(a1[2]+'-'+a1[1]+'-'+a1[0]+'T00:00Z');
         this.travelExpenseFormedit.controls["fromdate"].setValue(dt.toISOString());
         this.planfromdate=dt.toISOString();
         var a2=this.selectedplan.todate.split("-")
         var dt2=new Date(a2[2]+'-'+a2[1]+'-'+a2[0]+'T00:00Z');
         this.travelExpenseFormedit.controls["todate"].setValue(dt2.toISOString());
         this.plantodate=dt2.toISOString();


         this.chklength();
        }
      });
  
    } catch (error) {
 // console.log("addsublead()-ERROR:",error);
      
    }
  }
  chklength(){
    try {
      if(this.expenseList.length>0)
      this.IsexpenseListlength=true;
      else
      this.IsexpenseListlength=false;
    } catch (error) {
      this.IsexpenseListlength=false;
    }
  }


  uploadImage(str:any){
    try {
      
      var file:File=str.target.files[0]
     var myreader:FileReader = new FileReader();
     myreader.onloadend = (e)=> {
     var b64 = myreader.result.toString().replace(/^data:.+;base64,/, '');
     this.Supportingimg64=b64;
      this.IsSupportingimg64=false;
      

    };
  myreader.readAsDataURL(file);
    } catch (error) {
      
    }
  }
public onChangeAmount(){
  try {
    var amt=this.travelExpenseFormedit.controls["txtAmount"].value;
    var claimableamount=this.travelExpenseFormedit.controls["claimableamount"].value;

    if(amt>claimableamount){
      this.commonfun.presentAlert("Message", "Alert!","Entered amount is greater than claimbal amount.")
      this.travelExpenseFormedit.controls["txtAmount"].setValue('');
    }
  } catch (error) {
   // console.log("Error: onChangeAmount: ",error);
  }
}
  public onAdd(val){
    console.log("onAdd");
    let methodTAG = 'onAdd';
    try {
     if(this.ondatechange()==false){
return
     }

    
      this.strfromdate=this.commonfun.Dateconversionddmmyyyy(val.fromdate);
      this.strtodate=this.commonfun.Dateconversionddmmyyyy(val.todate);
      if(this.expenseList.length>0)
      {
       
         var slitem={"fromdate":this.strfromdate,"todate":this.strtodate,"travelexpense":val.selectableTravelExpenseUIControl,"amount":val.txtAmount,"claimableamount":val.claimableamount,"Supporting":this.Supportingimg64};
         let objOne ={"fromdate":this.strfromdate,"todate":this.strtodate,"travelexpense":val.selectableTravelExpenseUIControl.sname};
         try {
               
                var checkAlreadyAdded = false;
                this.expenseList.forEach(obj=>{
                  let objTwo = {"fromdate":obj.fromdate,"todate":obj.todate,"travelexpense":obj.travelexpense.sname};
                  if(JSON.stringify(objOne) === JSON.stringify(objTwo)){
                    console.log("True");
                    checkAlreadyAdded = true;
                  } else {
                    console.log("False");
                    checkAlreadyAdded = false;
                  }
                  
                })
                if(checkAlreadyAdded ==false){
                  this.expenseList.push(slitem);
                } else {
                 this.commonfun.presentAlert("Add Expense","Validation","You can not add same expense");
                }
         } catch (error) {
          console.log("True",error);
         }
         


        
       
     }	
    // if(this.expenseList)
    //   {
       
    //      var slitem={"fromdate":this.strfromdate,"todate":this.strtodate,"travelexpense":val.selectableTravelExpenseUIControl,"amount":val.txtAmount,"claimableamount":val.claimableamount,"Supporting":this.Supportingimg64};
       
    //        this.expenseList.push(slitem);
       
    //  }	

     else{	
         
         var slitem1=[{"fromdate":this.strfromdate,"todate":this.strtodate,"travelexpense":val.selectableTravelExpenseUIControl,"amount":val.txtAmount,"claimableamount":val.claimableamount,"Supporting":this.Supportingimg64}];	
         
           this.expenseList=slitem1;	
         
     }

     this.Resetpage();
     
    } catch (error) {
      
    }
  }
//Select Image from library
getimage() {
  try {
  const options: CameraOptions = {
  quality: 50,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  targetWidth:1500,
  targetHeight:1500
  };
  this.camera.getPicture(options).then((imageData) => {
  this.Supportingimg64 =  imageData;
  this.IsSupportingimg64=false;

  }, (err) => {
    this.commonfun.presentAlert("Message", "Error", err);
    });
  } catch (error) {
    this.commonfun.presentAlert("Message", "Error", error);
  }
}
  async getSupportingImage() {
    try {
    const alert = await this.alertCtrl.create({
      header: 'Select Option',
      message: "Select Option to get Picture.",
      buttons: [
        {
          text: 'Gallery',
          handler: data => {
            this.getimage();
          }
        },
        {
          text: 'Camera',
          handler: data => {
           this.takePicture();
          }
        }
      ]
    });
  
    await alert.present();
  } catch (error) {
    this.commonfun.presentAlert("Message", "Error", error);
      }
  }
  //Capture Image from Camera
  takePicture() {
    try {
    
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth:1500,
      targetHeight:1500
    };
    this.camera.getPicture(options).then((imageData) => {
        this.Supportingimg64 =  imageData;
        this.IsSupportingimg64=false;
      
    }, (err) => {
    this.commonfun.presentAlert("Message", "Error", err);
  
    });
  } catch (error) {
    this.commonfun.presentAlert("Message", "Error", error);
      
  }
  }

  async ImageViewr(img:any) {
    const alert = await this.alertCtrl.create({
      message: '<div>' +
      '<img class="viewImagecss" src="data:image/jpeg;base64,'+img+'">' +
      '</div>',
      buttons: [
      {text:'Remove',
      handler: data => {
       this.Supportingimg64=null
       this.IsSupportingimg64=this.IsSupportingrequired;

      }
    },
    {text:'OK'}
    ],
    });
    await alert.present();
  }

  public Resetpage()
  {
    let methodTAG = 'onChangeExpense';
   // console.log(methodTAG)
    try {
     // this.travelExpenseFormedit.reset();
     this.travelExpenseFormedit.controls["selectableTravelExpenseUIControl"].setValue("");
     this.travelExpenseFormedit.controls["txtAmount"].setValue("");
     this.travelExpenseFormedit.controls["claimableamount"].setValue("");
this.Supportingimg64="";
this.IsSupportingimg64=this.IsSupportingrequired;

     this.chklength();

    } catch (error) {
      
    }
  }

  removerow(post) {
    try {
     // console.log("removerow")
      
       
        const result = this.expenseList.filter(item => item!=post);
        this.expenseList=result;
      
        this.chklength();

      } catch (error) {
        this.commonfun.presentAlert("Message", "Error", error)
      }
      }
public onChangeExpense(){
  let methodTAG = 'onChangeExpense';
    try {
      
    //  console.log(methodTAG);
   
      this.selectedexpense= this.travelExpenseFormedit.controls["selectableTravelExpenseUIControl"].value;

      this.travelExpenseFormedit.controls["claimableamount"].setValue(this.selectedexpense.claimableamount);
      this.IsSupportingrequired=this.selectedexpense.isproof
      this.IsSupportingimg64=this.IsSupportingrequired;



    } catch (error) {
     // console.log("Error",error);
    }
}

  public onAddTravelExpense(){
    let methodTAG = 'onSaveTravelExpense';
    try {
      let navigationExtras: NavigationExtras = {
        state: {
          expenseList: this.expenseList
         
        }
      };
      this.router.navigate(['travel-expense'],navigationExtras); 
    } catch (error) {
      
    }
  }
}
