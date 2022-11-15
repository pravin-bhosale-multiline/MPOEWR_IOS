'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var IOSFilePicker = /** @class */ (function (_super) {
    tslib.__extends(IOSFilePicker, _super);
    function IOSFilePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IOSFilePicker.prototype.pickFile = function (utis, position) { return core.cordova(this, "pickFile", { "callbackOrder": "reverse" }, arguments); };
    IOSFilePicker.pluginName = "iOS File Picker";
    IOSFilePicker.plugin = "cordova-plugin-filepicker";
    IOSFilePicker.pluginRef = "FilePicker";
    IOSFilePicker.repo = "https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin";
    IOSFilePicker.platforms = ["iOS"];
    IOSFilePicker.decorators = [
        { type: core$1.Injectable }
    ];
    return IOSFilePicker;
}(core.IonicNativePlugin));

exports.IOSFilePicker = IOSFilePicker;
