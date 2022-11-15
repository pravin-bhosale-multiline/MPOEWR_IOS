import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewcustomerPage } from './newcustomer.page';
import { IonicSelectableModule } from 'ionic-selectable';
const routes = [
    {
        path: '',
        component: NewcustomerPage
    }
];
let NewcustomerPageModule = class NewcustomerPageModule {
};
NewcustomerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule, IonicSelectableModule,
            IonicModule, ReactiveFormsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NewcustomerPage]
    })
], NewcustomerPageModule);
export { NewcustomerPageModule };
//# sourceMappingURL=newcustomer.module.js.map