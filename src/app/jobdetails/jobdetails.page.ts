import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginauthService } from '../login/loginauth.service';
import { Joblist } from '../joblist/joblist.page';
import { LoadingController } from '@ionic/angular';
import { Loginresponse } from '../login/login.page';
/* get Product ID */
export interface Product {
  mmstMainprodcode: string;
  mmstMainprodname: string;
  attributeSetValue: string;
  id: string;
}
@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.page.html',
  styleUrls: ['./jobdetails.page.scss'],
})
export class JobdetailsPage implements OnInit {
  activeelement;
  jobid;
  job: Joblist[];
  movementtye: string;
  scanbatchproductsku: string;
  skucode: string;
  skuname: string;
  qty: string;
  binno: string;
  tobinno: string;
  window: any = window;
  message: string = null;
  status = 'Initialization...';
  nextelement;
  istobinview;
  isfrombinview;
  productlist: Product[];
  selectedproduct: Product;
  txterror: string;
  response: Loginresponse;
  constructor(private route: ActivatedRoute, private loginservc: LoginauthService
            , private loadingController: LoadingController
            , private router: Router) { }
  ngOnInit() {
    this.listen();
    this.route.params.subscribe(params => {
      this.jobid = params['jobid'];
      
      this.loginservc.getjob(this.jobid).subscribe(data => {
        const response = data['response'];
        this.job = response['data'];
        if (this.job[0].mwmsJobtype$_identifier ===  'GRN') {
          this.istobinview = true;
          this.isfrombinview = false;
        } else if (this.job[0].mwmsJobtype$_identifier === 'Physical Stock') {
            this.isfrombinview = true;
            this.istobinview = true;
        } else {
            this.isfrombinview = true;
            this.istobinview = false;
        }
        
        });
    });
    this.movementtye = 'Product';
    this.qty = '1';
  }
  onFocusBatch(currentelement, nextElement) {
    this.activeelement = currentelement;
    this.nextelement = nextElement;
  }
  moveFocus(currentelement, nextElement) {
    
    this.activeelement = currentelement;
    this.nextelement = nextElement;
    if (this.activeelement.el.id === 'batchid') {
      this.productlist = [];
      this.loadingController.create({
        duration: 7000,
        spinner: 'circles',
        message: 'Please Wait...'}).then((res) => {
          res.present(); });
      this.loginservc.getProductlistFromBatch(this.activeelement.value).subscribe(data => {
        this.productlist = data['data'];
        this.skucode = this.productlist[0].mmstMainprodcode;
        
        
        this.loadingController.dismiss();
      });
  } else {
    this.nextelement.setFocus();
  }
  }
  onNext(nextElement) {
     if (this.scanbatchproductsku === undefined) {
        this.txterror = 'Please Scan Batch.';
    } else if (this.skucode === undefined) {
        this.txterror = 'Please Select SKU';
    }  else if (this.tobinno === undefined) {
      this.txterror = 'Please Enter Bin No.';
    } else {
      this.loginservc.insertJobDetails(this.jobid, this.movementtye,
        this.scanbatchproductsku, this.selectedproduct.id, this.qty
        , this.binno, this.tobinno, this.selectedproduct.attributeSetValue, 'N').subscribe( data => {
          this.response = data['response'];
          if (this.response.messageType !== undefined) {
            if (this.response.messageType === 'success') {
              this.scanbatchproductsku = '';
              this.productlist = [];
              this.qty = '1';
              this.txterror = 'Success!';
              nextElement.setFocus();
            }
          } else {
            this.txterror = this.response.error.message;
          }
        }, error => {
          this.txterror = error.message;
        });
    }
  }
  onComplete() {
    this.loginservc.insertJobDetails(this.jobid, this.movementtye,
      this.scanbatchproductsku, this.selectedproduct.id, this.qty
      , this.binno, this.tobinno, this.selectedproduct.attributeSetValue, 'Y').subscribe( data => {
        this.response = data['response'];
        if (this.response.messageType !== undefined) {
          if (this.response.messageType === 'success') {
            this.scanbatchproductsku = '';
            this.qty = '1';
            this.txterror = 'Success!';
            this.router.navigateByUrl('/joblist');
          }
        } else {
          this.txterror = this.response.error.message;
        }
      }, error => {
        this.txterror = error.message;
      });
  }
  onCancel() {
    this.router.navigateByUrl('/joblist');
  }
  onChangeProduct(product: Product, qtyelement) {
      this.selectedproduct = product;
      this.skuname = product.mmstMainprodname;
      qtyelement.setFocus();
  }
  listen() {
    this.status = `enabled`;
    this.window.plugins.honeywell.listen(data => {
      this.activeelement.value = `${data}`;
      
      if (this.activeelement.el.id === 'batchid') {
          this.productlist = [];
          this.loadingController.create({
            duration: 7000,
            spinner: 'circles',
            message: 'Please Wait...'}).then((res) => {
              res.present(); });
          this.loginservc.getProductlistFromBatch(this.activeelement.value).subscribe(data => {
            this.productlist = data['data'];
            this.skucode = this.productlist[0].mmstMainprodcode;
            
            
            this.loadingController.dismiss();
          }, error => {
            this.txterror = error.message;
          });
      } else {
        this.activeelement = null;
        this.nextelement.setFocus();
      }
    }, error => {
      this.activeelement.setFocus();
      
    });
  }
  disable() {
    this.status = `disabled`;
    this.window.plugins.honeywell.release(success => {
      this.message = `DISABLE_SUCCESS: ${success}`;
    }, error => {
      this.message = `DISABLE_ERROR: ${error}`;
    });
  }

  enable() {
    this.status = 'enabled';
    this.window.plugins.honeywell.claim(success => {
      this.message = `ENABLE_SUCCESS: ${success}`;
      this.listen();
    }, error => {
      this.message = `ENABLE_ERROR ${error}`;
    });
  }
}
