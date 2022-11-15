import * as tslib_1 from "tslib";
import { Component, NgZone } from '@angular/core';
let ReadertestPage = class ReadertestPage {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.window = window;
        this.message = null;
        this.barcodes = [];
        this.status = 'Initialization... Are you on device?';
    }
    ngOnInit() {
        this.listen();
    }
    scanPressed() {
        this.window.plugins.honeywell.softwareTriggerStart(data => {
            console.log('Software scan: ${data}');
            this.ngZone.run(() => {
                this.barcodes = ['${data} @ ${new Date().toISOString().replace(/[T,Z]/g, " ").split(\'.\')[0]}', ...this.barcodes];
            });
        }, error => {
            console.log(`Error occured: ${error}`);
            this.ngZone.run(() => {
                this.barcodes = ['${error} @ ${new Date().toISOString().replace(/[T,Z]/g, " ").split(\'.\')[0]}', ...this.barcodes];
            });
        });
    }
    scanReleased() {
        this.window.plugins.honeywell.softwareTriggerStop();
    }
    listen() {
        this.status = `enabled`;
        this.window.plugins.honeywell.listen(data => {
            console.log(`Scanned: ${data}`);
            this.ngZone.run(() => {
                this.barcodes = [`${data} @ ${new Date().toISOString().replace(/[T,Z]/g, ' ').split('.')[0]}`, ...this.barcodes];
            });
        }, error => {
            console.log(`Error occured: ${error}`);
            this.ngZone.run(() => {
                this.barcodes = [`${error} @ ${new Date().toISOString().replace(/[T,Z]/g, ' ').split('.')[0]}`, ...this.barcodes];
            });
        });
    }
    disable() {
        this.status = `disabled`;
        this.window.plugins.honeywell.release(success => {
            this.message = `DISABLE_SUCCESS: ${success}`;
        }, error => {
            this.message = `DISABLE_ERROR: ${error}`;
        });
    }
    enable() {
        this.status = 'enabled';
        this.window.plugins.honeywell.claim(success => {
            this.message = `ENABLE_SUCCESS: ${success}`;
            this.listen();
        }, error => {
            this.message = `ENABLE_ERROR ${error}`;
        });
    }
};
ReadertestPage = tslib_1.__decorate([
    Component({
        selector: 'app-readertest',
        templateUrl: './readertest.page.html',
        styleUrls: ['./readertest.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NgZone])
], ReadertestPage);
export { ReadertestPage };
//# sourceMappingURL=readertest.page.js.map