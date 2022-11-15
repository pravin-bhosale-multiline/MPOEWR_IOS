import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-multipleentry',
  templateUrl: './multipleentry.page.html',
  styleUrls: ['./multipleentry.page.scss'],
})
export class MultipleentryPage implements OnInit {
  public myForm: FormGroup;
  private noofcontrol: number = 1;
  question: any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute
    ,private router: Router) { 
    this.myForm = formBuilder.group({
      control1: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.question= this.router.getCurrentNavigation().extras.state.question;
        
      }
    });
  }
  addControl(){
    this.noofcontrol=this.noofcontrol+1;
    this.myForm.addControl('control' + this.noofcontrol, new FormControl('', Validators.required));
  }
  removeControl(control){
    this.myForm.removeControl(control.key);
    this.noofcontrol=this.noofcontrol-1;
  }
  onSubmit(){
    let finalvalue='';
    Object.keys(this.myForm.controls).forEach(key => {
      finalvalue=finalvalue+','+this.myForm.get(key).value;
    });
    this.question.ans=finalvalue.substring(1);
    let navigationExtras: NavigationExtras = {
      state: {
        question:this.question
        
      }
    };
    this.router.navigate(['section'],navigationExtras);
  }
}
