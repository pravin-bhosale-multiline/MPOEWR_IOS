import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoginauthService } from '../login/loginauth.service';
/*get BOM */
export interface Bom {
  _identifier: string;
  id: string;
}

@Component({
  selector: 'app-bom',
  templateUrl: './bom.page.html',
  styleUrls: ['./bom.page.scss'],
})
export class BomPage implements OnInit {
  bom: Bom;
  bomlist: Bom[];
  filterbomList: Bom[];
   constructor(private loginservc: LoginauthService, private loadingCtrl: LoadingController) {
     this.loginservc.getbomlist().subscribe(data => {
      const response = data['response'];
      this.bomlist = response['data'];
      this.filterbomList = this.bomlist;
    });
  }

  ngOnInit() {
  }
  onSearchChange(ev: any) {
    // Reset items back to all of the items
    this.filterbomList = this.bomlist;
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.filterbomList = this.filterbomList.filter((bom) => {
        return (bom._identifier.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
