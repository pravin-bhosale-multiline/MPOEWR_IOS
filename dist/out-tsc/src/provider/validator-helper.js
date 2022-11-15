import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let Validator = class Validator {
    constructor() { }
    emailValid(control) {
        return new Promise(resolve => {
            const emailPattern = /[^@]+@[^\.]+\..+/g;
            if (!emailPattern.test(control.value) && !(control.value == '')) {
                resolve({ InvalidEmail: true });
            }
            resolve(null);
        });
    }
    nameValid(control) {
        return new Promise(resolve => {
            const pattern = /[0-9]/;
            if (pattern.test(control.value)) {
                resolve({ InvalidName: true });
            }
            resolve(null);
        });
    }
    numberValid(control) {
        return new Promise(resolve => {
            const pattern = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
            if (!pattern.test(control.value)) {
                resolve({ InvalidNumber: true });
            }
            resolve(null);
        });
    }
    gstnumberValid(control) {
        return new Promise(resolve => {
            const pattern = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/;
            if (!pattern.test(control.value) && !(control.value == '')) {
                resolve({ InvalidgstNumber: true });
            }
            resolve(null);
        });
    }
    pannoValid(control) {
        return new Promise(resolve => {
            const pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            console.log("control.value", control.value);
            if (!pattern.test(control.value) && !(control.value == '')) {
                console.log('INNNNN');
                resolve({ InvalidPanno: true });
            }
            resolve(null);
        });
    }
};
Validator = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], Validator);
export { Validator };
//# sourceMappingURL=validator-helper.js.map