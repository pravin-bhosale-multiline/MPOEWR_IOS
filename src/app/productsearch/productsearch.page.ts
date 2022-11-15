import { Component, OnInit } from '@angular/core';
import { Product } from '../jobdetails/jobdetails.page';
import { LoginauthService } from '../login/loginauth.service';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.page.html',
  styleUrls: ['./productsearch.page.scss'],
})
export class ProductsearchPage implements OnInit {
  productlist: Product[];
  filterproductList: Product[];
  constructor(private loginservc: LoginauthService) { }

  ngOnInit() {
  }
  onSearchChange(ev: any) {
    // Reset items back to all of the items
    this.filterproductList = this.productlist;
    const val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.filterproductList = this.filterproductList.filter((product) => {
        return ((product.mmstMainprodname + product.mmstMainprodcode + product.attributeSetValue)
                .toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
