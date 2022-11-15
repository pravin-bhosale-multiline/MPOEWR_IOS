import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JobtransferPage } from './jobtransfer.page';
const routes = [
    {
        path: '',
        component: JobtransferPage
    }
];
let JobtransferPageModule = class JobtransferPageModule {
};
JobtransferPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [JobtransferPage]
    })
], JobtransferPageModule);
export { JobtransferPageModule };
//# sourceMappingURL=jobtransfer.module.js.map