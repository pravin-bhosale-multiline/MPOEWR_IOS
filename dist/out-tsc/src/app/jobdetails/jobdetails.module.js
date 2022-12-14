import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JobdetailsPage } from './jobdetails.page';
const routes = [
    {
        path: '',
        component: JobdetailsPage
    }
];
let JobdetailsPageModule = class JobdetailsPageModule {
};
JobdetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [JobdetailsPage]
    })
], JobdetailsPageModule);
export { JobdetailsPageModule };
//# sourceMappingURL=jobdetails.module.js.map