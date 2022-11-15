import { Component, OnInit } from '@angular/core';
import { UseVetcoinsService } from '../use-vetcoins/use-vetcoins.service';
import { Commonfun } from '../../provider/commonfun';
@Component({
  selector: 'app-use-vetcoins-transaction',
  templateUrl: './use-vetcoins-transaction.page.html',
  styleUrls: ['./use-vetcoins-transaction.page.scss'],
})
export class UseVetcoinsTransactionPage implements OnInit {
  transactiondata:any;
  balamount:any;
  constructor(
    private usevetcoinsservice:UseVetcoinsService,
    public commonfun: Commonfun
  ) { }

  ngOnInit() {
    this.transdata();
  }

  transdata(){
    try {
       this.usevetcoinsservice.getWMobileVetCoinCustDetailsapi("","Y").subscribe(data => {
       
         if(data!=null){
          
          
          
this.balamount=data["Balance"].balamount;

          this.transactiondata=data["Transactions"]; 
         }
         else{
           this.commonfun.presentAlert("Message", "Error", "Mobile No. is not valid.")
         }
       },error=>{
         this.commonfun.presentAlert("Message", "Error", error.error.text)
       });
     } catch (error) {
       
       this.commonfun.presentAlert("Message", "Error", error)
     }
   }


  Resetpage(){
    
  }
}
