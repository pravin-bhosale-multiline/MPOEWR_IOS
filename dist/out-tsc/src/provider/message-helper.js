import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
let Message = class Message {
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
Message = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [AlertController])
], Message);
export { Message };
//# sourceMappingURL=message-helper.js.map