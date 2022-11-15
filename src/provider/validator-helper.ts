import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class Validator {

  constructor() { }
  emailValid(control: FormControl){
    return new Promise(resolve => {
      
      const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,7})$/
      const regex = new RegExp(emailPattern);

      if (!regex.test(control.value) ){
        //console.log("control.value",control.value);
        resolve({ emailValid : true });
      }else{
        resolve(null);
      }
      
      });
    }
    digit15Valid(control: FormControl){
      return new Promise(resolve =>{
        
        const pattern = /^(?=.{15}$)[0-9]*/;
        const regex = new RegExp(pattern);
        if (!regex.test(control.value) ){
          resolve({ digit15Valid : true });
        }
        resolve(null);
    });
  }
  digit10Valid(control: FormControl){
    return new Promise(resolve =>{
      
      const pattern = /^(?=.{10}$)[0-9]*/;
      const regex = new RegExp(pattern);
      if (!regex.test(control.value) ){
        resolve({ digit15Valid : true });
      }
      resolve(null);
  });
}
    nameValid(control: FormControl){
        return new Promise(resolve =>{
          const pattern = /[0-9]/;
          if (pattern.test(control.value)) {
            resolve({ nameValid : true });
          }
          resolve(null);
      });
    }
    positivenumberValid(control: FormControl){
      return new Promise(resolve =>{
        const pattern = /(^\d*\.?\d*[1-9]+\d*$)|(^[1-9]+\d*\.\d*$)/;
        if (!pattern.test(control.value) && !((control.value=='')|| (control.value==null))) {
          resolve({ positivenumberValid : true });
        }
        else{
          resolve(null);
        }
        
    });
  }

  integernumberValid(control: FormControl){
    return new Promise(resolve =>{
    //  const pattern = /\b(?<!\.)\d+(?!\.)\b/
      const pattern = /^[0-9]*$/
     
      if (!pattern.test(control.value)) {
        resolve({ integernumberValid : true });
      }
      resolve(null);
  });
}

vehiclenumberValid(control: FormControl){
  return new Promise(resolve =>{
  //  const pattern = /\b(?<!\.)\d+(?!\.)\b/
    const pattern = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/
 
   if(control.value==null || control.value==undefined || control.value==""){
    resolve(null);
  }
    else{
    if (!pattern.test(control.value.toUpperCase())) {
      resolve({ vehiclenumberValid : true });
    }
  }
  resolve(null);
});
}


//Phone No. Validation
    numberValid(control: FormControl){
      return new Promise(resolve =>{
        const pattern = /^[1-9]{1}[0-9]{9}$/;
        if (!pattern.test(control.value) && !((control.value=='')|| (control.value==null))) {
         
          resolve({ numberValid : true });
        }
        else
        resolve(null);
    });

   

  }

  pincodeValid(control: FormControl){
    return new Promise(resolve =>{
      const pattern = /^\d{6}$/;
      if (!pattern.test(control.value) && !(control.value=='')) {
      
        resolve({ pincodeValid : true });
      }
      resolve(null);
  });

 

}

  gstnumberValid(control: FormControl){
    return new Promise(resolve =>{
      const pattern = /\d{2}[A-Za-z]{5}\d{4}[A-Za-z\d]{4}$/;
      if (!pattern.test(control.value) && !((control.value=='')|| (control.value==null))) {
        resolve({ gstnumberValid : true });
      }
      resolve(null);
  });
}

  pannoValid(control: FormControl){
    return new Promise(resolve =>{
      const pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
      const regex = new RegExp(pattern);
      if (!regex.test(control.value)) {
       
        resolve({ pannoValid : true });
      }else{
        resolve(null);
      }
     
  });
}

}