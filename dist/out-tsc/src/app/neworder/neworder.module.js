import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';
import { NeworderPage } from './neworder.page';
const routes = [
    {
        path: '',
        component: NeworderPage
    }
];
let NeworderPageModule = class NeworderPageModule {
};
NeworderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule, IonicSelectableModule,
            IonicModule, ReactiveFormsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NeworderPage]
    })
], NeworderPageModule);
export { NeworderPageModule };
//# sourceMappingURL=neworder.module.js.map