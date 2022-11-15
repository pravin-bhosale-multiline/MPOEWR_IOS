import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsearchPage } from './productsearch.page';
const routes = [
    {
        path: '',
        component: ProductsearchPage
    }
];
let ProductsearchPageModule = class ProductsearchPageModule {
};
ProductsearchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductsearchPage]
    })
], ProductsearchPageModule);
export { ProductsearchPageModule };
//# sourceMappingURL=productsearch.module.js.map