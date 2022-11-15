(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/@angular/elements/fesm2015/elements.js":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/elements/fesm2015/elements.js ***!
  \*************************************************************/
/*! exports provided: NgElement, VERSION, createCustomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgElement", function() { return NgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomElement", function() { return createCustomElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * @license Angular v12.2.12
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provide methods for scheduling the execution of a callback.
 */
const scheduler = {
    /**
     * Schedule a callback to be called after some delay.
     *
     * Returns a function that when executed will cancel the scheduled function.
     */
    schedule(taskFn, delay) {
        const id = setTimeout(taskFn, delay);
        return () => clearTimeout(id);
    },
    /**
     * Schedule a callback to be called before the next render.
     * (If `window.requestAnimationFrame()` is not available, use `scheduler.schedule()` instead.)
     *
     * Returns a function that when executed will cancel the scheduled function.
     */
    scheduleBeforeRender(taskFn) {
        // TODO(gkalpak): Implement a better way of accessing `requestAnimationFrame()`
        //                (e.g. accounting for vendor prefix, SSR-compatibility, etc).
        if (typeof window === 'undefined') {
            // For SSR just schedule immediately.
            return scheduler.schedule(taskFn, 0);
        }
        if (typeof window.requestAnimationFrame === 'undefined') {
            const frameMs = 16;
            return scheduler.schedule(taskFn, frameMs);
        }
        const id = window.requestAnimationFrame(taskFn);
        return () => window.cancelAnimationFrame(id);
    },
};
/**
 * Convert a camelCased string to kebab-cased.
 */
function camelToDashCase(input) {
    return input.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);
}
/**
 * Create a `CustomEvent` (even on browsers where `CustomEvent` is not a constructor).
 */
function createCustomEvent(doc, name, detail) {
    const bubbles = false;
    const cancelable = false;
    // On IE11, `CustomEvent` is not a constructor.
    if (typeof CustomEvent !== 'function') {
        const event = doc.createEvent('CustomEvent');
        event.initCustomEvent(name, bubbles, cancelable, detail);
        return event;
    }
    return new CustomEvent(name, { bubbles, cancelable, detail });
}
/**
 * Check whether the input is an `Element`.
 */
function isElement(node) {
    return !!node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Check whether the input is a function.
 */
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * Convert a kebab-cased string to camelCased.
 */
function kebabToCamelCase(input) {
    return input.replace(/-([a-z\d])/g, (_, char) => char.toUpperCase());
}
let _matches;
/**
 * Check whether an `Element` matches a CSS selector.
 * NOTE: this is duplicated from @angular/upgrade, and can
 * be consolidated in the future
 */
function matchesSelector(el, selector) {
    if (!_matches) {
        const elProto = Element.prototype;
        _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector ||
            elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
    }
    return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
}
/**
 * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
 */
function strictEquals(value1, value2) {
    return value1 === value2 || (value1 !== value1 && value2 !== value2);
}
/** Gets a map of default set of attributes to observe and the properties they affect. */
function getDefaultAttributeToPropertyInputs(inputs) {
    const attributeToPropertyInputs = {};
    inputs.forEach(({ propName, templateName }) => {
        attributeToPropertyInputs[camelToDashCase(templateName)] = propName;
    });
    return attributeToPropertyInputs;
}
/**
 * Gets a component's set of inputs. Uses the injector to get the component factory where the inputs
 * are defined.
 */
function getComponentInputs(component, injector) {
    const componentFactoryResolver = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]);
    const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
    return componentFactory.inputs;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function extractProjectableNodes(host, ngContentSelectors) {
    const nodes = host.childNodes;
    const projectableNodes = ngContentSelectors.map(() => []);
    let wildcardIndex = -1;
    ngContentSelectors.some((selector, i) => {
        if (selector === '*') {
            wildcardIndex = i;
            return true;
        }
        return false;
    });
    for (let i = 0, ii = nodes.length; i < ii; ++i) {
        const node = nodes[i];
        const ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);
        if (ngContentIndex !== -1) {
            projectableNodes[ngContentIndex].push(node);
        }
    }
    return projectableNodes;
}
function findMatchingIndex(node, selectors, defaultIndex) {
    let matchingIndex = defaultIndex;
    if (isElement(node)) {
        selectors.some((selector, i) => {
            if ((selector !== '*') && matchesSelector(node, selector)) {
                matchingIndex = i;
                return true;
            }
            return false;
        });
    }
    return matchingIndex;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Time in milliseconds to wait before destroying the component ref when disconnected. */
const DESTROY_DELAY = 10;
/**
 * Factory that creates new ComponentNgElementStrategy instance. Gets the component factory with the
 * constructor's injector's factory resolver and passes that factory to each strategy.
 *
 * @publicApi
 */
class ComponentNgElementStrategyFactory {
    constructor(component, injector) {
        this.componentFactory =
            injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]).resolveComponentFactory(component);
    }
    create(injector) {
        return new ComponentNgElementStrategy(this.componentFactory, injector);
    }
}
/**
 * Creates and destroys a component ref using a component factory and handles change detection
 * in response to input changes.
 *
 * @publicApi
 */
class ComponentNgElementStrategy {
    constructor(componentFactory, injector) {
        this.componentFactory = componentFactory;
        this.injector = injector;
        // Subject of `NgElementStrategyEvent` observables corresponding to the component's outputs.
        this.eventEmitters = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        /** Merged stream of the component's output events. */
        this.events = this.eventEmitters.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(emitters => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...emitters)));
        /** Reference to the component that was created on connect. */
        this.componentRef = null;
        /** Reference to the component view's `ChangeDetectorRef`. */
        this.viewChangeDetectorRef = null;
        /**
         * Changes that have been made to component inputs since the last change detection run.
         * (NOTE: These are only recorded if the component implements the `OnChanges` interface.)
         */
        this.inputChanges = null;
        /** Whether changes have been made to component inputs since the last change detection run. */
        this.hasInputChanges = false;
        /** Whether the created component implements the `OnChanges` interface. */
        this.implementsOnChanges = false;
        /** Whether a change detection has been scheduled to run on the component. */
        this.scheduledChangeDetectionFn = null;
        /** Callback function that when called will cancel a scheduled destruction on the component. */
        this.scheduledDestroyFn = null;
        /** Initial input values that were set before the component was created. */
        this.initialInputValues = new Map();
        /**
         * Set of component inputs that have not yet changed, i.e. for which `recordInputChange()` has not
         * fired.
         * (This helps detect the first change of an input, even if it is explicitly set to `undefined`.)
         */
        this.unchangedInputs = new Set(this.componentFactory.inputs.map(({ propName }) => propName));
        /** Service for setting zone context. */
        this.ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]);
        /** The zone the element was created in or `null` if Zone.js is not loaded. */
        this.elementZone = (typeof Zone === 'undefined') ? null : this.ngZone.run(() => Zone.current);
    }
    /**
     * Initializes a new component if one has not yet been created and cancels any scheduled
     * destruction.
     */
    connect(element) {
        this.runInZone(() => {
            // If the element is marked to be destroyed, cancel the task since the component was
            // reconnected
            if (this.scheduledDestroyFn !== null) {
                this.scheduledDestroyFn();
                this.scheduledDestroyFn = null;
                return;
            }
            if (this.componentRef === null) {
                this.initializeComponent(element);
            }
        });
    }
    /**
     * Schedules the component to be destroyed after some small delay in case the element is just
     * being moved across the DOM.
     */
    disconnect() {
        this.runInZone(() => {
            // Return if there is no componentRef or the component is already scheduled for destruction
            if (this.componentRef === null || this.scheduledDestroyFn !== null) {
                return;
            }
            // Schedule the component to be destroyed after a small timeout in case it is being
            // moved elsewhere in the DOM
            this.scheduledDestroyFn = scheduler.schedule(() => {
                if (this.componentRef !== null) {
                    this.componentRef.destroy();
                    this.componentRef = null;
                    this.viewChangeDetectorRef = null;
                }
            }, DESTROY_DELAY);
        });
    }
    /**
     * Returns the component property value. If the component has not yet been created, the value is
     * retrieved from the cached initialization values.
     */
    getInputValue(property) {
        return this.runInZone(() => {
            if (this.componentRef === null) {
                return this.initialInputValues.get(property);
            }
            return this.componentRef.instance[property];
        });
    }
    /**
     * Sets the input value for the property. If the component has not yet been created, the value is
     * cached and set when the component is created.
     */
    setInputValue(property, value) {
        this.runInZone(() => {
            if (this.componentRef === null) {
                this.initialInputValues.set(property, value);
                return;
            }
            // Ignore the value if it is strictly equal to the current value, except if it is `undefined`
            // and this is the first change to the value (because an explicit `undefined` _is_ strictly
            // equal to not having a value set at all, but we still need to record this as a change).
            if (strictEquals(value, this.getInputValue(property)) &&
                !((value === undefined) && this.unchangedInputs.has(property))) {
                return;
            }
            // Record the changed value and update internal state to reflect the fact that this input has
            // changed.
            this.recordInputChange(property, value);
            this.unchangedInputs.delete(property);
            this.hasInputChanges = true;
            // Update the component instance and schedule change detection.
            this.componentRef.instance[property] = value;
            this.scheduleDetectChanges();
        });
    }
    /**
     * Creates a new component through the component factory with the provided element host and
     * sets up its initial inputs, listens for outputs changes, and runs an initial change detection.
     */
    initializeComponent(element) {
        const childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({ providers: [], parent: this.injector });
        const projectableNodes = extractProjectableNodes(element, this.componentFactory.ngContentSelectors);
        this.componentRef = this.componentFactory.create(childInjector, projectableNodes, element);
        this.viewChangeDetectorRef = this.componentRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]);
        this.implementsOnChanges = isFunction(this.componentRef.instance.ngOnChanges);
        this.initializeInputs();
        this.initializeOutputs(this.componentRef);
        this.detectChanges();
        const applicationRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        applicationRef.attachView(this.componentRef.hostView);
    }
    /** Set any stored initial inputs on the component's properties. */
    initializeInputs() {
        this.componentFactory.inputs.forEach(({ propName }) => {
            if (this.initialInputValues.has(propName)) {
                // Call `setInputValue()` now that the component has been instantiated to update its
                // properties and fire `ngOnChanges()`.
                this.setInputValue(propName, this.initialInputValues.get(propName));
            }
        });
        this.initialInputValues.clear();
    }
    /** Sets up listeners for the component's outputs so that the events stream emits the events. */
    initializeOutputs(componentRef) {
        const eventEmitters = this.componentFactory.outputs.map(({ propName, templateName }) => {
            const emitter = componentRef.instance[propName];
            return emitter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(value => ({ name: templateName, value })));
        });
        this.eventEmitters.next(eventEmitters);
    }
    /** Calls ngOnChanges with all the inputs that have changed since the last call. */
    callNgOnChanges(componentRef) {
        if (!this.implementsOnChanges || this.inputChanges === null) {
            return;
        }
        // Cache the changes and set inputChanges to null to capture any changes that might occur
        // during ngOnChanges.
        const inputChanges = this.inputChanges;
        this.inputChanges = null;
        componentRef.instance.ngOnChanges(inputChanges);
    }
    /**
     * Marks the component view for check, if necessary.
     * (NOTE: This is required when the `ChangeDetectionStrategy` is set to `OnPush`.)
     */
    markViewForCheck(viewChangeDetectorRef) {
        if (this.hasInputChanges) {
            this.hasInputChanges = false;
            viewChangeDetectorRef.markForCheck();
        }
    }
    /**
     * Schedules change detection to run on the component.
     * Ignores subsequent calls if already scheduled.
     */
    scheduleDetectChanges() {
        if (this.scheduledChangeDetectionFn) {
            return;
        }
        this.scheduledChangeDetectionFn = scheduler.scheduleBeforeRender(() => {
            this.scheduledChangeDetectionFn = null;
            this.detectChanges();
        });
    }
    /**
     * Records input changes so that the component receives SimpleChanges in its onChanges function.
     */
    recordInputChange(property, currentValue) {
        // Do not record the change if the component does not implement `OnChanges`.
        if (!this.implementsOnChanges) {
            return;
        }
        if (this.inputChanges === null) {
            this.inputChanges = {};
        }
        // If there already is a change, modify the current value to match but leave the values for
        // `previousValue` and `isFirstChange`.
        const pendingChange = this.inputChanges[property];
        if (pendingChange) {
            pendingChange.currentValue = currentValue;
            return;
        }
        const isFirstChange = this.unchangedInputs.has(property);
        const previousValue = isFirstChange ? undefined : this.getInputValue(property);
        this.inputChanges[property] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousValue, currentValue, isFirstChange);
    }
    /** Runs change detection on the component. */
    detectChanges() {
        if (this.componentRef === null) {
            return;
        }
        this.callNgOnChanges(this.componentRef);
        this.markViewForCheck(this.viewChangeDetectorRef);
        this.componentRef.changeDetectorRef.detectChanges();
    }
    /** Runs in the angular zone, if present. */
    runInZone(fn) {
        return (this.elementZone && Zone.current !== this.elementZone) ? this.ngZone.run(fn) : fn();
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Implements the functionality needed for a custom element.
 *
 * @publicApi
 */
class NgElement extends HTMLElement {
    constructor() {
        super(...arguments);
        /**
         * A subscription to change, connect, and disconnect events in the custom element.
         */
        this.ngElementEventsSubscription = null;
    }
}
/**
 *  @description Creates a custom element class based on an Angular component.
 *
 * Builds a class that encapsulates the functionality of the provided component and
 * uses the configuration information to provide more context to the class.
 * Takes the component factory's inputs and outputs to convert them to the proper
 * custom element API and add hooks to input changes.
 *
 * The configuration's injector is the initial injector set on the class,
 * and used by default for each created instance.This behavior can be overridden with the
 * static property to affect all newly created instances, or as a constructor argument for
 * one-off creations.
 *
 * @see [Angular Elements Overview](guide/elements "Turning Angular components into custom elements")
 *
 * @param component The component to transform.
 * @param config A configuration that provides initialization information to the created class.
 * @returns The custom-element construction class, which can be registered with
 * a browser's `CustomElementRegistry`.
 *
 * @publicApi
 */
function createCustomElement(component, config) {
    const inputs = getComponentInputs(component, config.injector);
    const strategyFactory = config.strategyFactory || new ComponentNgElementStrategyFactory(component, config.injector);
    const attributeToPropertyInputs = getDefaultAttributeToPropertyInputs(inputs);
    class NgElementImpl extends NgElement {
        constructor(injector) {
            super();
            this.injector = injector;
        }
        get ngElementStrategy() {
            // NOTE:
            // Some polyfills (e.g. `document-register-element`) do not call the constructor, therefore
            // it is not safe to set `ngElementStrategy` in the constructor and assume it will be
            // available inside the methods.
            //
            // TODO(andrewseguin): Add e2e tests that cover cases where the constructor isn't called. For
            // now this is tested using a Google internal test suite.
            if (!this._ngElementStrategy) {
                const strategy = this._ngElementStrategy =
                    strategyFactory.create(this.injector || config.injector);
                // Re-apply pre-existing input values (set as properties on the element) through the
                // strategy.
                inputs.forEach(({ propName }) => {
                    if (!this.hasOwnProperty(propName)) {
                        // No pre-existing value for `propName`.
                        return;
                    }
                    // Delete the property from the instance and re-apply it through the strategy.
                    const value = this[propName];
                    delete this[propName];
                    strategy.setInputValue(propName, value);
                });
            }
            return this._ngElementStrategy;
        }
        attributeChangedCallback(attrName, oldValue, newValue, namespace) {
            const propName = attributeToPropertyInputs[attrName];
            this.ngElementStrategy.setInputValue(propName, newValue);
        }
        connectedCallback() {
            // For historical reasons, some strategies may not have initialized the `events` property
            // until after `connect()` is run. Subscribe to `events` if it is available before running
            // `connect()` (in order to capture events emitted during initialization), otherwise subscribe
            // afterwards.
            //
            // TODO: Consider deprecating/removing the post-connect subscription in a future major version
            //       (e.g. v11).
            let subscribedToEvents = false;
            if (this.ngElementStrategy.events) {
                // `events` are already available: Subscribe to it asap.
                this.subscribeToEvents();
                subscribedToEvents = true;
            }
            this.ngElementStrategy.connect(this);
            if (!subscribedToEvents) {
                // `events` were not initialized before running `connect()`: Subscribe to them now.
                // The events emitted during the component initialization have been missed, but at least
                // future events will be captured.
                this.subscribeToEvents();
            }
        }
        disconnectedCallback() {
            // Not using `this.ngElementStrategy` to avoid unnecessarily creating the `NgElementStrategy`.
            if (this._ngElementStrategy) {
                this._ngElementStrategy.disconnect();
            }
            if (this.ngElementEventsSubscription) {
                this.ngElementEventsSubscription.unsubscribe();
                this.ngElementEventsSubscription = null;
            }
        }
        subscribeToEvents() {
            // Listen for events from the strategy and dispatch them as custom events.
            this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(e => {
                const customEvent = createCustomEvent(this.ownerDocument, e.name, e.value);
                this.dispatchEvent(customEvent);
            });
        }
    }
    // Work around a bug in closure typed optimizations(b/79557487) where it is not honoring static
    // field externs. So using quoted access to explicitly prevent renaming.
    NgElementImpl['observedAttributes'] = Object.keys(attributeToPropertyInputs);
    // Add getters and setters to the prototype for each property input.
    inputs.forEach(({ propName }) => {
        Object.defineProperty(NgElementImpl.prototype, propName, {
            get() {
                return this.ngElementStrategy.getInputValue(propName);
            },
            set(newValue) {
                this.ngElementStrategy.setInputValue(propName, newValue);
            },
            configurable: true,
            enumerable: true,
        });
    });
    return NgElementImpl;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @publicApi
 */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('12.2.12');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=elements.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/report/report.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/report/report.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{txtTitle}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"reportcategory\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-text color=\"danger\">{{txterror}}</ion-text>\n  <ion-text color=\"warning\">{{txtmessage}}</ion-text>\n</ion-header>\n\n<ion-content>\n  <div [innerHTML]=\"innerhtml\"></div>\n  <ion-row>\n    <ion-col class=\"ion-text-right\">\n      <ion-button expand=\"full\" (click)=\"onClickEmail()\">\n          Email\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-text-left\">\n      <ion-button expand=\"full\" (click)=\"onClickExcelPDF()\">\n          {{btnName}}\n      </ion-button>\n    </ion-col>\n    <ion-col *ngIf=\"isview\" class=\"ion-text-right\">\n      <ion-button expand=\"full\" (click)=\"onClickView()\">\n          View\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-card *ngIf=\"onclick\">\n    <ngx-datatable\n        class=\"bootstrap resizeable\" style=\"height: 820px; overflow-y:visible\"\n        [rows]=\"rows\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [columns]=\"columns\"\n        [columnMode]=\"ColumnMode.force\"\n        [headerHeight]=\"headerHeight\"\n        [rowHeight]=\"rowHeight\"\n        [footerHeight]=\"50\"\n        [columnMode]=\"'froce'\"\n        [scrollbarH]=\"true\"\n        [scrollbarV]=\"true\"\n        [selectionType]=\"SelectionType.single\"\n        [reorderable]=\"reorderable\"\n        (scroll)=\"onScroll($event.offsetY)\"\n        [swapColumns]=\"true\">\n      </ngx-datatable>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/report/report-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function() { return ReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.page */ "./src/app/report/report.page.ts");




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/report/report-routing.module.ts");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report.page */ "./src/app/report/report.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");









let ReportPageModule = class ReportPageModule {
};
ReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReportPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_7__["ReportPage"]]
    })
], ReportPageModule);



/***/ }),

/***/ "./src/app/report/report.page.scss":
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #F39E20 !important;\n}\n\n@media only screen and (min-width: 481px) {\n  ::ng-deep.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n    padding-left: 0.75rem !important;\n    padding-right: 0.25rem !important;\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n}\n\n@media (min-width: 1281px) {\n  ::ng-deep.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n    padding: 0.75rem !important;\n  }\n}\n\n::ng-deep.ngx-datatable.bootstrap .datatable-header {\n  font-weight: bold !important;\n  background-color: #F39E20 !important;\n}\n\n@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n\n  .mobile-hidden {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n\n  .mobile-hidden {\n    display: initial;\n  }\n}\n\n@media only screen and (min-height: 768px) and (min-width: 768px) {\n  .sc-ion-modal-ios-h {\n    --width: 900px !important;\n    --height: 626px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMjIwMTg0L0RvY3VtZW50cy9NX1BPV0VSX0xJVkUvUHJpc21CYWNrVXAvc3JjL2FwcC9yZXBvcnQvcmVwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVwb3J0L3JlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFFSSxnQ0FBQTtJQUNBLGlDQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQ0FBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFFSTtJQUVBLDJCQUFBO0VDSEY7QUFDRjs7QURRQTtFQUNFLDRCQUFBO0VBQ0Esb0NBQUE7QUNORjs7QURVQTtFQUNJO0lBQ0UsZ0JBQUE7RUNQSjs7RURTRTtJQUNFLGFBQUE7RUNOSjtBQUNGOztBRFFFO0VBQ0U7SUFDRSxhQUFBO0VDTko7O0VEUUU7SUFDRSxnQkFBQTtFQ0xKO0FBQ0Y7O0FET0U7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsMEJBQUE7RUNMSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3JlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQ4MXB4KSB7XG4gICAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG5cbiAgICAgICAgcGFkZGluZy1sZWZ0OjAuNzVyZW0gIWltcG9ydGFudDsgXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOjEyODFweCkgeyAgXG4gICAgXG4gICAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGx7XG5cbiAgICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAvLyB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBcbiBcbiB9fVxuXG46Om5nLWRlZXAubmd4LWRhdGF0YWJsZS5ib290c3RyYXAgLmRhdGF0YWJsZS1oZWFkZXJ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMzlFMjAgIWltcG9ydGFudDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cbiAgICAubW9iaWxlLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICAgIC5kZXNrdG9wLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9iaWxlLWhpZGRlbiB7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAuc2MtaW9uLW1vZGFsLWlvcy1oe1xuICAgICAgLS13aWR0aDogOTAwcHggIWltcG9ydGFudDtcbiAgICAgIC0taGVpZ2h0OiA2MjZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfSIsIjo6bmctZGVlcC5uZ3gtZGF0YXRhYmxlLmJvb3RzdHJhcCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM5RTIwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gIWltcG9ydGFudDtcbiAgfVxufVxuOjpuZy1kZWVwLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzOUUyMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGVza3RvcC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cblxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNjLWlvbi1tb2RhbC1pb3MtaCB7XG4gICAgLS13aWR0aDogOTAwcHggIWltcG9ydGFudDtcbiAgICAtLWhlaWdodDogNjI2cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/report/report.page.ts":
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.service */ "./src/app/report/report.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selectorsingle/selectorsingleservice.service */ "./src/app/selectorsingle/selectorsingleservice.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_provider_message_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/provider/message-helper */ "./src/provider/message-helper.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/elements */ "./node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _components_listcontrol_listcontrol_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/listcontrol/listcontrol.component */ "./src/app/components/listcontrol/listcontrol.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");


















let ReportPage = class ReportPage {
    constructor(route, sanitizer, loginservc, router, storage, singleselservc, iab, androidPermissions, msg, nativefile, platform, fileOpener, commonFunction, alertCtrl, injector, reportService, el) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.loginservc = loginservc;
        this.router = router;
        this.storage = storage;
        this.singleselservc = singleselservc;
        this.iab = iab;
        this.androidPermissions = androidPermissions;
        this.msg = msg;
        this.nativefile = nativefile;
        this.platform = platform;
        this.fileOpener = fileOpener;
        this.commonFunction = commonFunction;
        this.alertCtrl = alertCtrl;
        this.injector = injector;
        this.reportService = reportService;
        this.el = el;
        this.TAG = "Report Page";
        this.txtTitle = 'Report';
        this.btnName = "Excel";
        this.loadingIndicator = true;
        this.reorderable = true;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__["ColumnMode"];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_17__["SelectionType"];
        this.headerHeight = 50;
        this.rowHeight = 50;
        this.pageLimit = 50;
        this.options = {
            location: 'no',
            hidden: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.options1 = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.isview = false;
        this.onclick = false;
    }
    ngOnInit() {
        this.isview = false;
        this.route.params.subscribe(params => {
            this.rptid = params['rptid'];
            this.loginservc.getReportPara(this.rptid).subscribe(data => {
                this.rptparalist = data['data'];
                this.loginservc.reportjson['org'] = this.loginservc.selectedprof.organization;
                this.loginservc.reportjson['user'] = this.loginservc.selectedprof.user;
                this.loginservc.reportjson['role'] = this.loginservc.selectedprof.role;
                this.loginservc.reportjson['client'] = this.loginservc.selectedprof.client;
                this.loginservc.reportjson['wh'] = this.loginservc.selectedprof.warehouse;
                this.loginservc.reportjson['rptid'] = this.rptid;
                for (let rptpara of this.rptparalist) {
                    //console.log(rptpara);
                    if (this.loginservc.reportjson[rptpara.inppara] === undefined)
                        this.loginservc.reportjson[rptpara.inppara] = rptpara[rptpara.inppara];
                    if (!this.loginservc.iscutsomdefined && rptpara.issamepagemultiselect) {
                        const element = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_15__["createCustomElement"])(_components_listcontrol_listcontrol_component__WEBPACK_IMPORTED_MODULE_16__["ListcontrolComponent"], { injector: this.injector });
                        customElements.define('app-listcontrol', element);
                        this.loginservc.iscutsomdefined = true;
                    }
                    if (rptpara["isview"] && rptpara["scontroltype"] === 'BTNVIEW') {
                        this.isview = true;
                    }
                }
                this.loginservc.GetReportPage(this.loginservc.reportjson).subscribe(data => {
                    // console.log("Report Page", data);
                    this.file_name = data['report_name'];
                    this.txtTitle = this.file_name.substring(0, this.file_name.lastIndexOf("."));
                    this.fileType = this.file_name.substring(this.file_name.lastIndexOf(".") + 1);
                    if (this.fileType == 'pdf') {
                        this.btnName = "PDF";
                    }
                    this.innerhtml = this.sanitizer.bypassSecurityTrustHtml(data['data']);
                    this.loginservc.getReportPara(this.rptid).subscribe(data => {
                        this.rptparalist = data['data'];
                        //console.log(this.TAG,"File To Be Downlaoded ",data,this.file_name);
                        for (let rptpara of this.rptparalist) {
                            //console.log('para ' + rptpara.inppara);
                            var e = document.getElementById(rptpara.inppara);
                            if (e) {
                                if (rptpara.isdependend) {
                                    if (rptpara.scontroltype === 'LST' && rptpara.issamepagemultiselect) {
                                        //console.log('reload',e);
                                        e.addEventListener("click", this.onReload.bind(this, rptpara));
                                    }
                                    else {
                                        e.addEventListener("focusin", this.onReload.bind(this, rptpara));
                                    }
                                }
                                else {
                                    e.addEventListener("focusin", this.onChange.bind(this, rptpara));
                                }
                                if (rptpara.scontroltype === 'SLS'
                                    || (rptpara.scontroltype === 'LST' && !rptpara.issamepagemultiselect)) {
                                    e.addEventListener("click", this.onSLSClick.bind(this, rptpara.scontroltype));
                                }
                            }
                        }
                        //console.log(this.loginservc.reportjson);
                    });
                });
            });
        });
    }
    onClickEmail() {
        this.loginservc.reportjson["inpexcel"] = 'N';
        //console.log("On email Click", this.loginservc.reportjson);
        this.loginservc.sendEmailReport(this.loginservc.reportjson).subscribe(data => {
            this.response = data['response'];
            if (this.response.messageType !== undefined) {
                if (this.response.messageType === 'success') {
                    this.txtmessage = this.response.messageText;
                    this.txterror = undefined;
                }
            }
            else {
                this.txterror = this.response.error.message;
                this.txtmessage = undefined;
                this.txterror = this.txterror.split("Where")[0];
            }
        }, error => {
            this.txterror = error.message;
            this.txterror = this.txterror.split("Where")[0];
            this.txtmessage = undefined;
        });
    }
    onClickExcelPDF() {
        // 
        this.loginservc.reportjson["inpexcel"] = 'Y';
        this.commonFunction.loadingPresent();
        // console.log("On excel/pdf Click", this.loginservc.reportjson);
        this.loginservc.downloadExcelPDF(this.loginservc.reportjson).subscribe((response) => {
            this.commonFunction.loadingDismiss();
            // console.log(response);
            if (response.size != 0) {
                let stype = response.type;
                let blob = new Blob([response], { type: stype });
                let fileName = 'mydoc';
                if (this.btnName === 'Excel') {
                    fileName = this.loginservc.selectedreport._identifier + '.csv';
                    stype = 'text/csv';
                }
                else if (this.btnName === 'PDF') {
                    fileName = this.loginservc.selectedreport._identifier + '.pdf';
                    stype = 'application/pdf';
                }
                else {
                    this.commonFunction.presentAlert("Error", "Error", "Error On Downloading Report");
                    return;
                }
                this.commonFunction.presentAlert("Message", "Success", "Downloaded Complete.");
                //   if(!this.platform.is('cordova')){
                if (this.msg.isplatformweb) {
                    const url = window.URL.createObjectURL(blob);
                    let a = document.createElement("a");
                    document.body.appendChild(a);
                    a.href = url;
                    a.download = fileName;
                    a.click();
                    window.URL.revokeObjectURL(url);
                }
                let pathFile;
                if (this.platform.is('ios')) {
                    pathFile = this.nativefile.documentsDirectory;
                }
                if (this.platform.is('android')) {
                    pathFile = this.nativefile.externalDataDirectory;
                }
                //  if(this.platform.is('android')|| this.platform.is('ios')){
                if (!this.msg.isplatformweb) {
                    this.nativefile.writeFile(pathFile, fileName, blob, {
                        replace: true,
                    }).then((res) => {
                        //console.log('inside');
                        return this.fileOpener.open(pathFile + fileName, stype).catch((err) => {
                            console.log(err);
                        });
                    })
                        .catch((error) => {
                        this.commonFunction.presentAlert("Message", "Alert", error);
                        //console.log(error);
                    });
                    ;
                }
            }
            else {
                this.commonFunction.presentAlert("Message", "Alert", "File not Downloaded.");
            }
        }, error => {
            this.txterror = error.message;
            this.txterror = this.txterror.split("Where")[0];
            this.txtmessage = undefined;
        });
    }
    onClickView() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.onclick = true;
                this.commonFunction.loadingPresent();
                this.loginservc.reportjson["offset"] = 0;
                let data = yield this.reportService.getViewData(this.loginservc.reportjson).toPromise();
                this.columns = data[0].colum_names;
                this.rows = data[0].colum_data;
                this.loadingIndicator = false;
                this.commonFunction.loadingDismiss();
            }
            catch (error) {
                this.commonFunction.loadingDismiss();
                this.commonFunction.presentAlert("Report", "Error", error.error);
            }
        });
    }
    // onClickExcel() {
    //   try {
    //     this.loginservc.reportjson["inpexcel"] = 'Y';
    //     console.log("On Click Excel Click", this.loginservc.reportjson);
    //     // let fileDownloadURL = this.loginService.commonurl + 'ws/in.mbs.exportdata.MEXDEmailAction?'
    //     //   + this.loginService.parameter + '&user_id=' + this.loginService.userid + '&param=' + JSON.stringify(this.loginservc.reportjson);
    //     // if (this.msg.isplatformweb == false) {
    //     //   this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    //     //   .then(status => {
    //     //     if (status.hasPermission) {
    //     //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    //     //       .then(status => {
    //     //         if(status.hasPermission) {
    //     //           this.downloadFile(fileDownloadURL);
    //     //         }
    //     //       });
    //     //     } 
    //     //     else {
    //     //       this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    //     //         .then(status => {
    //     //           if(status.hasPermission) {
    //     //             this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    //     //               .then(status => {
    //     //                 if(status.hasPermission) {
    //     //                   this.downloadFile(fileDownloadURL);
    //     //                 }
    //     //               });
    //     //           }
    //     //         });
    //     //     }
    //     //   });
    //     // }else {
    //     //   this.downloadFile(fileDownloadURL);
    //     // }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    onReload(reportpara, event) {
        if (this.loginservc.reportjson[event.target.id] !== event.target.value || reportpara.scontroltype === 'LST') {
            this.loginservc.reportjson[event.target.id] = event.target.value === undefined ? '' : event.target.value;
            if (event.target.value !== undefined && event.target.value !== '') {
                //   this.prevControl=reportpara;
                // if(event.target.id==='child')
                // if(event.target.parentElement.parentElement.parentElement.id===reportpara.inppara){
                //   return;
                // }
                // console.log('reload inside',event.target.value);
                this.loginservc.reportjson[event.target.id] = event.target.value;
                this.loginservc.GetReportPage(this.loginservc.reportjson).subscribe(data1 => {
                    this.innerhtml = this.sanitizer.bypassSecurityTrustHtml(data1['data']);
                    this.loginservc.getReportPara(this.rptid).subscribe(data => {
                        this.rptparalist = data['data'];
                        //console.log(this.innerhtml);
                        for (let rptpara of this.rptparalist) {
                            //console.log('para ' + rptpara.inppara);
                            var e = document.getElementById(rptpara.inppara);
                            if (e) {
                                if (rptpara.isdependend) {
                                    if (rptpara.scontroltype === 'LST' && rptpara.issamepagemultiselect) {
                                        //console.log('reload',e);
                                        e.addEventListener("click", this.onReload.bind(this, rptpara));
                                    }
                                    else {
                                        e.addEventListener("focusin", this.onReload.bind(this, rptpara));
                                    }
                                }
                                else {
                                    e.addEventListener("focusin", this.onChange.bind(this, rptpara));
                                }
                                if (rptpara.scontroltype === 'SLS'
                                    || (rptpara.scontroltype === 'LST' && !rptpara.issamepagemultiselect)) {
                                    e.addEventListener("click", this.onSLSClick.bind(this, rptpara.scontroltype));
                                }
                            }
                        }
                    });
                });
            }
        }
    }
    onChange(reportpara, event) {
        // console.log('onchange',this.prevControl);
        // if(this.prevControl)
        // if(this.prevControl.scontroltype==='LST' && this.prevControl.issamepagemultiselect ){
        //   this.onReload(reportpara,event);
        // }
        // console.log('onchangecurr',this.loginservc.reportjson);
        // this.prevControl=reportpara;
        this.txtmessage = undefined;
        this.txterror = undefined;
        //this.loginservc.reportjson[event.target.id]= event.target.value;
        if (event.target.value !== undefined) {
            this.loginservc.reportjson[event.target.id] = event.target.value;
        }
    }
    onSLSClick(controltype, event) {
        // console.log(event);
        //console.log(controltype);
        this.singleselservc.json = this.loginservc.reportjson;
        this.router.navigate(['/selectorsingle', this.rptid, event.target.id, controltype]);
    }
    // public async downloadFile(fileDownloadURL) {
    //   try {
    //     // if (this.msg.isplatformweb == false) {
    //       this.commonFunction.loadingPresent();
    //       let path;
    //       if (this.platform.is('android')) {
    //         path = this.filePlugin.externalRootDirectory + '/Download/';
    //       } else if (this.platform.is('ios')) {
    //         path = this.filePlugin.documentsDirectory;
    //       }else if (!this.platform.is('cordova')){
    //         path='';
    //       }
    //       const fileTransfer: FileTransferObject = this.transfer.create();
    //       fileTransfer.download(encodeURI(fileDownloadURL), path+this.file_name).then((entry) => {
    //         console.log('download complete: ' + entry);
    //         this.commonFunction.loadingDismiss();
    //         this.presentAlert("Report","Confirm!","File stored in the download folder of your device do you want to open it?",entry);
    //        // this.commonFunction.presentAlert("Report","Download",entry.toURL());
    //       }, (error) => {
    //       console.log('error download complete: ', error);
    //       this.commonFunction.loadingDismiss();
    //       this.commonFunction.presentAlert("Report","Download",error);
    //     }); 
    //     // } else {
    //     //   let target = "_blank";
    //     //   if(this.fileType=='pdf'){
    //     //     //this.iab.create(fileDownloadURL, target, this.options1);
    //     //     this.iab.create(fileDownloadURL, target, this.options);
    //     //   } else {
    //     //     this.iab.create(fileDownloadURL, target, this.options);
    //     //   }
    //     //   // let formData = new FormData();
    //     //   // formData.append('param', JSON.stringify(this.loginservc.reportjson));
    //     //   // formData.append('user_id', this.loginservc.userid);
    //     //   // let fileDownloadURL = this.loginService.commonurl + 'ws/in.mbs.exportdata.MEXDEmailAction?'
    //     //   // this.singleselservc.Downloaddata(formData,fileDownloadURL).subscribe((response:any)=>{
    //     //   //    console.log('response download NEW complete: ', response);
    //     //   // })
    //     // }
    //   } catch (error) {
    //     console.log(this.TAG, error);
    //   }
    // }
    onScroll(offsetY) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;
            if (!this.loadingIndicator && offsetY + viewHeight >= this.rows.length * this.rowHeight) {
                let limit = this.pageLimit;
                if (this.rows.length === 0) {
                    // calculate the number of rows that fit within viewport
                    const pageSize = Math.ceil(viewHeight / this.rowHeight);
                    // change the limit to pageSize such that we fill the first page entirely
                    // (otherwise, we won't be able to scroll past it)
                    limit = Math.max(pageSize, this.pageLimit);
                }
                this.loadPage(limit);
            }
        });
    }
    loadPage(limit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingIndicator = true;
            this.loginservc.reportjson["offset"] = limit;
            let results = yield this.reportService.getViewData(this.loginservc.reportjson).toPromise();
            const rows = [...this.rows, ...results[0].colum_data];
            this.rows = rows;
            this.loadingIndicator = false;
        });
    }
    presentAlert(Header, SubHeader, Message, entry) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: Header,
                subHeader: SubHeader,
                message: Message,
                buttons: [{
                        text: 'Cancel',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }, {
                        text: "Okay",
                        handler: (ok) => {
                            let openType;
                            if (this.fileType == 'pdf') {
                                openType = "application/pdf";
                            }
                            else {
                                openType = "text/csv";
                            }
                            this.fileOpener.open(entry.toURL(), openType)
                                .then(() => console.log("File is opened"))
                                .catch(e => console.log("Error opening file", e));
                        }
                    }]
            });
            alert.dismiss(() => console.log('The alert has been closed.'));
            yield alert.present();
        });
    }
};
ReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_7__["SelectorsingleserviceService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"] },
    { type: src_provider_message_helper__WEBPACK_IMPORTED_MODULE_9__["Message"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_14__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
ReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-report',
        template: __webpack_require__(/*! raw-loader!./report.page.html */ "./node_modules/raw-loader/index.js!./src/app/report/report.page.html"),
        styles: [__webpack_require__(/*! ./report.page.scss */ "./src/app/report/report.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _selectorsingle_selectorsingleservice_service__WEBPACK_IMPORTED_MODULE_7__["SelectorsingleserviceService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"],
        src_provider_message_helper__WEBPACK_IMPORTED_MODULE_9__["Message"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_14__["Commonfun"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
        _report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
], ReportPage);



/***/ }),

/***/ "./src/app/report/report.service.ts":
/*!******************************************!*\
  !*** ./src/app/report/report.service.ts ***!
  \******************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");





let ReportService = class ReportService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    getViewData(body) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.exportdata.MEXDGetReportView', body, httpOptions);
    }
};
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"] },
    { type: src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_1__["GenericHttpClientService"] }
];
ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_4__["LoginauthService"], src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_1__["GenericHttpClientService"]])
], ReportService);



/***/ })

}]);
//# sourceMappingURL=report-report-module-es2015.js.map