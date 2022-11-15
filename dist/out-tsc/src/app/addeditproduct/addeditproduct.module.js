import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddeditproductPage } from './addeditproduct.page';
const routes = [
    {
        path: '',
        component: AddeditproductPage
    }
];
let AddeditproductPageModule = class AddeditproductPageModule {
};
AddeditproductPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule, ReactiveFormsModule,
            RouterModule.forChild(routes),
        ],
        declarations: [AddeditproductPage]
    })
], AddeditproductPageModule);
export { AddeditproductPageModule };
//# sourceMappingURL=addeditproduct.module.js.map