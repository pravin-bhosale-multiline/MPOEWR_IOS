import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JoblistPage } from './joblist.page';
const routes = [
    {
        path: '',
        component: JoblistPage
    }
];
let JoblistPageModule = class JoblistPageModule {
};
JoblistPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [JoblistPage]
    })
], JoblistPageModule);
export { JoblistPageModule };
//# sourceMappingURL=joblist.module.js.map