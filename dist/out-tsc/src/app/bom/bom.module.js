import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BomPage } from './bom.page';
const routes = [
    {
        path: '',
        component: BomPage
    }
];
let BomPageModule = class BomPageModule {
};
BomPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BomPage]
    })
], BomPageModule);
export { BomPageModule };
//# sourceMappingURL=bom.module.js.map