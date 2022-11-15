import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Validator } from '../../provider/validator-helper';
import { Router } from '@angular/router';
let AddeditproductPage = class AddeditproductPage {
    constructor(fb, val, router) {
        this.fb = fb;
        this.val = val;
        this.router = router;
        this.form = this.fb.group({
            product: ['', Validators.required],
            Quantity: ['', Validators.required]
        });
        this.form1 = this.fb.group({
            product: ['', Validators.required],
            Quantity: ['', Validators.required]
        });
        //   const name = this.form.controls.name;
        //   name.valueChanges.subscribe((value: string) => {
        //     console.log(`Entered name is ${value}`);
        //   });
    }
    ngOnInit() {
    }
    onSave(value) {
        this.router.navigateByUrl('/neworder');
    }
};
AddeditproductPage = tslib_1.__decorate([
    Component({
        selector: 'app-addeditproduct',
        templateUrl: './addeditproduct.page.html',
        styleUrls: ['./addeditproduct.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, Validator, Router])
], AddeditproductPage);
export { AddeditproductPage };
//# sourceMappingURL=addeditproduct.page.js.map