import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReadertestPage } from './readertest.page';
const routes = [
    {
        path: '',
        component: ReadertestPage
    }
];
let ReadertestPageModule = class ReadertestPageModule {
};
ReadertestPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ReadertestPage]
    })
], ReadertestPageModule);
export { ReadertestPageModule };
//# sourceMappingURL=readertest.module.js.map