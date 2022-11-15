import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
let Commonfun = class Commonfun {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    presentAlert(Header, SubHeader, Message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: Header,
                subHeader: SubHeader,
                message: Message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
Commonfun = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [AlertController])
], Commonfun);
export { Commonfun };
//# sourceMappingURL=commonfun.js.map