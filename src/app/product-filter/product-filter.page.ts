import { ProductFilterService } from './product-filter.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Commonfun } from 'src/provider/commonfun';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

export interface iFilter {
  catid: string,
  catname: string,
  catvalues: [{ subcatid: string, subcatname: string, columnname: string, checked: boolean }]
}



@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.page.html',
  styleUrls: ['./product-filter.page.scss'],
})
export class ProductFilterPage implements OnInit {

  readonly TAG = "Product Filter Page"
  sideMenuList;
  active = 0;
  selectedFilter: iFilter[];
  tempSelectedFilter: iFilter[];
  subDataList;
  selectedMainItem;
  selectedMainIndex = 0;
  applyButton = false;
  isDataAvailable = false;
  searchText;
  business_partner;

  constructor(private modalCtrl: ModalController, private productFilterService: ProductFilterService,
    private commonFunction: Commonfun,
    public alertController: AlertController, navParams: NavParams) {
    console.log(this.TAG, "Prev Filter Data", this.selectedFilter);
    this.tempSelectedFilter = navParams.get('selectedPreviousFilter');
    this.business_partner = navParams.get('business_partner');
    //console.log(this.TAG, "BP",this.business_partner);
  }

  async ngOnInit() {

  }
  async ionViewWillEnter() {
    //console.log(this.TAG,"ionViewWillEnter");

    this.commonFunction.loadingPresent();
    this.sideMenuList = await this.productFilterService.getSubFilterList(this.business_partner).toPromise();

    // if(!!this.selectedFilter){
    //   this.sideMenuList = this.sideMenuList.concat(this.selectedFilter);

    //   console.log(this.TAG,"Side Menu list After Merge",this.selectedFilter);
    // }

    if (!!this.tempSelectedFilter) {


      // this.sideMenuList = [ ...this.sideMenuList, ...this.selectedFilter];
      // console.log(this.TAG,"Side Menu list After Merge",this.sideMenuList);

      // this.tempSelectedFilter = this.selectedFilter;
      this.tempSelectedFilter.forEach((element, index) => {
        this.sideMenuList.forEach((side_element, sub_menu_main_index) => {
          if (element.catid == side_element.catid) {
            element.catvalues.forEach(cat_ele => {
              side_element.catvalues.forEach((cat_sub_element, cat_index) => {
                if (cat_ele.subcatid == cat_sub_element.subcatid) {
                  this.sideMenuList[sub_menu_main_index].catvalues[cat_index].checked = true;
                  console.log("Find");
                }
              });
            })
          }
        });
      });

      if (!!this.tempSelectedFilter && this.tempSelectedFilter.length > 0) {
        this.selectedFilter = this.tempSelectedFilter;
        this.tempSelectedFilter = [];
      }

    }



    //  console.log(this.TAG,this.sideMenuList);
    if (!!this.sideMenuList) {
      this.selectedMainItem = this.sideMenuList[0];
      this.isDataAvailable = true;
    }
    this.commonFunction.loadingDismiss();

  }
  public async clearFilter() {
    try {
      const alert = await this.alertController.create({

        header: 'Confirm!',
        message: 'Would you like to clear the all filters?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
              this.selectedFilter = [];
              this.tempSelectedFilter = [];
              this.ionViewWillEnter();

            }
          }
        ]
      });

      await alert.present();
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public applyFilter() {
    try {

      if (Array.isArray(this.selectedFilter) && this.selectedFilter.length) {
        this.modalCtrl.dismiss(this.selectedFilter);
      } else {
        this.commonFunction.presentAlert("Product Filter", "Validation", "Please select at least one filter");
      }
    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public async menuItemClick(selectedItem, index) {
    try {
      //console.log(this.TAG,selectedItem);
      this.selectedMainItem = selectedItem;
      this.active = index;
      this.selectedMainIndex = index;

    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public chkSubSelectFilter(subData, checked, event) {
    try {
      //console.log(this.TAG,subData);
      if (!!this.tempSelectedFilter && this.tempSelectedFilter.length > 0) {
        this.selectedFilter = this.tempSelectedFilter;
        this.tempSelectedFilter = [];
      }
      console.log(this.TAG, checked);
      if (checked == undefined || checked == null) {
        checked = true;
      } else {
        checked = false;
      }

      if (!!this.selectedFilter) {
        if (checked) {
          this.applyButton = true;
          let data = this.selectedFilter.find(ob => ob.catid === this.selectedMainItem.catid);
          if (data === null || data === undefined) {
            this.selectedFilter.push({ catid: this.selectedMainItem.catid, catname: this.selectedMainItem.catname, catvalues: [{ "subcatid": subData.subcatid, "subcatname": subData.subcatname, columnname: subData.columnname, "checked": true }] });
          } else {
            let index = this.selectedFilter.findIndex(ob => ob.catid === this.selectedMainItem.catid);
            this.selectedFilter[index].catvalues.push({ "subcatid": subData.subcatid, "subcatname": subData.subcatname, columnname: subData.columnname, "checked": true });
          }
        } else {
          let main_index = this.selectedFilter.findIndex(ob => ob.catid === this.selectedMainItem.catid);
          this.selectedFilter[main_index].catvalues.forEach((value, index) => {
            if (value.subcatid == subData.subcatid) {
              //console.log("selected",this.selectedFilter[index]);
              if (this.selectedFilter[main_index].catvalues.length == 1) {
                this.selectedFilter.splice(main_index, 1);
              } else {
                this.selectedFilter[main_index].catvalues.splice(index, 1);
              }

            }
          });
        }
      } else {
        let temp: any = [{ catid: this.selectedMainItem.catid, catname: this.selectedMainItem.catname, catvalues: [{ "subcatid": subData.subcatid, "subcatname": subData.subcatname, columnname: subData.columnname, "checked": true }] }];
        this.selectedFilter = temp;
        this.applyButton = true;
      }
      //console.log(this.TAG,"Filter List IS Updated",this.selectedFilter);

    } catch (error) {
      console.log(this.TAG, error);
    }
  }
  public dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss(this.selectedFilter);
  }
  public onFilterSearch() {
    try {
      
    } catch (error) {
      console.log(this.TAG,error);
    }
  }
}
