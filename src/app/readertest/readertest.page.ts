import { Component, OnInit, NgZone } from '@angular/core';
@Component({
  selector: 'app-readertest',
  templateUrl: './readertest.page.html',
  styleUrls: ['./readertest.page.scss'],
})

export class ReadertestPage implements OnInit {
  window: any = window;
  constructor(public ngZone: NgZone) {}

  message: string = null;
  barcodes = [];
  status = 'Initialization... Are you on device?';
  ngOnInit() {
    this.listen();
  }
  scanPressed() {
    this.window.plugins.honeywell.softwareTriggerStart(data => {
      
      this.ngZone.run(() => {
        this.barcodes = ['${data} @ ${new Date().toISOString().replace(/[T,Z]/g, " ").split(\'.\')[0]}', ...this.barcodes];
      });
    }, error => {
      
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
      
      this.ngZone.run(() => {
        this.barcodes = [`${data} @ ${new Date().toISOString().replace(/[T,Z]/g, ' ' ).split('.')[0]}`, ...this.barcodes];
      });
    }, error => {
      
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
}
