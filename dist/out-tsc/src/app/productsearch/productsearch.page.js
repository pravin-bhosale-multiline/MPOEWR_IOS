import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginauthService } from '../login/loginauth.service';
let ProductsearchPage = class ProductsearchPage {
    constructor(loginservc) {
        this.loginservc = loginservc;
    }
    ngOnInit() {
    }
    onSearchChange(ev) {
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
};
ProductsearchPage = tslib_1.__decorate([
    Component({
        selector: 'app-productsearch',
        templateUrl: './productsearch.page.html',
        styleUrls: ['./productsearch.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LoginauthService])
], ProductsearchPage);
export { ProductsearchPage };
//# sourceMappingURL=productsearch.page.js.map