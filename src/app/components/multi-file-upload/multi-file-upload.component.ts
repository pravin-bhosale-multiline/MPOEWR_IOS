import { Component, ElementRef, HostListener, Input, OnChanges, Output, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject,FileItem } from 'ng2-file-upload';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {File, FileEntry,} from '@ionic-native/file/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Message } from 'src/provider/message-helper';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiFileUploadComponent,
      multi: true
    }
  ]
})


export class MultiFileUploadComponent implements ControlValueAccessor,OnInit{
  @Input() someInput: string;
  @Input() myform:FormGroup;
  @Input() controlID:string;
  @Input() isOnlyCamera=false;
  @Input() maxfile;
  obj;
  //maxfile=0;
  allowedFileTypeoption=["image","pdf"];
  public uploader: FileUploader ;
  public hasBaseDropZoneOver: boolean = false;
  isextrafiles=false;
  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };
  constructor(
    private camera: Camera,
    public file:File,
    public msg:Message,
    public crop: Crop,
    ) { 
  
     
      this.uploader= new FileUploader({queueLimit:this.maxfile!==undefined?this.maxfile:this.msg.maxfile  ,allowedFileType:this.allowedFileTypeoption});
       
        if(this.myform && this.controlID){
            this.uploader=this.myform.get(this.controlID).value;
        }
     
          this.uploader.onWhenAddingFileFailed = f => {
            if(this.msg.maxfile==this.uploader.queue.length || this.msg.maxfile<this.uploader.queue.length)
            this.isextrafiles=true;
          };
            
          this.uploader.onAfterAddingFile= f => {
              this.isextrafiles=false;
              //console.log('writevalue',this.uploader);
              
              this.writeValue(this.uploader);
              this.myform.get(this.controlID).setValue(this.uploader);
            
          };


  }
  ngOnInit(): void {
    if(this.myform && this.controlID){
     // console.log('inside',this.myform.get(this.controlID).value);
      if(this.myform.get(this.controlID).value){
        this.uploader=this.myform.get(this.controlID).value;
      }
      
  }
    if(this.maxfile!==undefined){
      this.uploader.setOptions({queueLimit:this.maxfile!==undefined?this.maxfile:this.msg.maxfile  ,allowedFileType:this.allowedFileTypeoption})
    }
  }
  
  onChange = (uploader) => { };
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

  
    removefiles(){
      this.uploader.clearQueue();
    }


 onfileuploadchange(){

 }
  // img1:[any];
  // onchangefile(){
  //    console.log("sada1");
  //    var that=this;
  //   // var reader = new FileReader();  
  //   // function readFile(index) {
  //   //   if( index >= files.length ) return;
  //   //   var file = files[index];
  //   //   reader.onload = function(e) {  
  //   //     // get file content  
  //   //     var bin=reader.result;
  //   //     if(index==0){
  //   //              that.img1=[bin];
  //   //            }
  //   //           else
  //   //           that.img1.push(bin);
  //   //     // do sth with bin
  //   //     readFile(index+1)
  //   //   }
  //   //   reader.readAsDataURL(file);
  //   // }
  //   // readFile(0);
    
  // ///////==================
  // // 
  // if(that.uploader.queue.length>0)
  // {
  // var reader = new FileReader();  
  // function readFile(index) {
  //   if( index >= that.uploader.queue.length ) return;
  //   var file = that.uploader.queue[index]._file;
  //   reader.onload = function(e) {  
  //     // get file content  
  //     var bin=reader.result;
  //     if(index==0){
  //       that.img1=[bin];
  //     }
  //     else
  //     that.img1.push(bin);
  //     // do sth with bin
  //     readFile(index+1)
  //   }
  //   reader.readAsDataURL(file);
  // }
  // readFile(0);
  // console.log("sada2");

  // }
  // ///////==================
  //   }
  
    removefile(i){
      
    //  console.log("this.uploader.queue[i]",this.uploader.queue[i]);
      this.uploader.queue[i].remove();
    }



  getFiles(): FileLikeObject[] {
   console.log("Component: getFiles()");
    return this.uploader.queue.map((fileItem) => {
     
      return fileItem.file;
    });
  }

  fileOverBase(ev): void {
    console.log("Component: fileOverBase()");

    this.hasBaseDropZoneOver = ev;
  }

  reorderFiles(reorderEvent: CustomEvent): void {
    console.log("Component: reorderFiles()");

    let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
    this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
  }

imagelist;
imgfile;
    //Capture Image from Camera
  async takePicture() {
var that=this;
  //  console.log("this.uploader.queue[0]._file",this.uploader.queue[0]._file);
   // this.imgfile=this.uploader.queue[0]._file;

    console.log("Component: takePicture()");

      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        targetWidth:1500,
        targetHeight:1500
      };
      
    this.camera.getPicture(options).then((imageData) => {  
      
      this.cropImage(imageData);
      
  



      }, (err) => {
        console.log("err",err)
        // Handle error
       });
    //  console.log("File from camera:",varimageData);
    //  this.uploader.queue.push(FileItem)


 //var 
  
//  var fileEntry= await this.file.resolveLocalFilesystemUrl(varimageData).then((entry:FileEntry) => 
//        {

      

//        entry.file(file=> {
//         console.log("sdfsdf",file);
//         this.uploader.addToQueue([file], { autoUpload: false });
//         console.log("  this.uploader.addToQueue",  this.uploader.addToQueue);

//       });
 

   
          

//         return entry;
//       });

    //   var varfile= new Promise<any>((resolve) => {
    //     fileEntry.file(
    //         meta =>
    //             resolve({
    //              meta

                 
    //             })
    //     );
    // });
      // console.log("varentry:",varentry);
      //  const varfile = await varentry.file(file=> {
      //      console.log("sdfsdf",file);
      //     return file;
      
      //    });
//       var filen={
//         'end': 12885,
//         'lastModified': 1614917601000,
// 'lastModifiedDate': 1614917601000,
// 'localURL': "cdvfile://localhost/cache-external/1614917601312.jpg",
// name: "1614917601312.jpg",
// size: 12885,
// start: 0,
// type: "image/jpeg",
//       }
          
      // console.log("varfile:",varfile);
        
      
      
     
   
     


    }

    private getBlob(b64Data:string, contentType:string, sliceSize:number= 512) {
      contentType = contentType || '';
      sliceSize = sliceSize || 512;
      b64Data = b64Data.replace(/data\:image\/(jpeg|jpg|png)\;base64\,/gi,'');
      let byteCharacters = atob(b64Data);
      let byteArrays = [];
  
      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          let slice = byteCharacters.slice(offset, offset + sliceSize);
  
          let byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
          }
  
          let byteArray = new Uint8Array(byteNumbers);
  
          byteArrays.push(byteArray);
      }
      let blob = new Blob(byteArrays, {type: contentType});
      return blob;
  }


   blobToFile(theBlob, fileName){
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
}
cropImage(fileUrl) {

  this.crop.crop(fileUrl, { quality: 50 })
 .then(
 newPath => {
 this.showCroppedImage(newPath.split('?')[0])
 },
 error => {
 //alert('Error cropping image' + error);
 });
 
 }
 showCroppedImage(ImagePath) {
  this.isLoading = true;
  var copyPath = ImagePath;
  var splitPath = copyPath.split('/');
  var imageName = splitPath[splitPath.length - 1];
  var filePath = ImagePath.split(imageName)[0];

  this.file.readAsDataURL(filePath, imageName).then(base64 => {
    this.croppedImagepath = base64;
   // console.log('cropped path',base64);
    
    let blob = this.getBlob(this.croppedImagepath, ".jpg")
      console.log("blob",blob)
     
      var filename=new Date().toISOString()+'.jpg'
      const file = this.blobToFile(blob,filename)
      this.uploader.addToQueue([file], { autoUpload: false });
    this.isLoading = false;
  }, error => {
    alert('Error in showing image' + error);
    this.isLoading = false;
  });
}
  

}
