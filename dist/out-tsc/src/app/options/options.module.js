import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OptionsPage } from './options.page';
const routes = [
    {
        path: '',
        component: OptionsPage
    }
];
let OptionsPageModule = class OptionsPageModule {
};
OptionsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [OptionsPage]
    })
], OptionsPageModule);
export { OptionsPageModule };
//# sourceMappingURL=options.module.js.map