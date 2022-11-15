import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExistingcustomerPage } from './existingcustomer.page';
import { IonicSelectableModule } from 'ionic-selectable';
const routes = [
    {
        path: '',
        component: ExistingcustomerPage
    }
];
let ExistingcustomerPageModule = class ExistingcustomerPageModule {
};
ExistingcustomerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule, IonicSelectableModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ExistingcustomerPage]
    })
], ExistingcustomerPageModule);
export { ExistingcustomerPageModule };
//# sourceMappingURL=existingcustomer.module.js.map