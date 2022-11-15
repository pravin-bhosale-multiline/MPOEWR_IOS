(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-6826f2f6.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-6826f2f6.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-ca0488fc.js */ "./node_modules/@ionic/core/dist/esm/core-ca0488fc.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-071bd421-js */ "ios-transition-071bd421-js").then(__webpack_require__.bind(null, /*! ./ios.transition-071bd421.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-071bd421.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-15a81b08-js */ "md-transition-15a81b08-js").then(__webpack_require__.bind(null, /*! ./md.transition-15a81b08.js */ "./node_modules/@ionic/core/dist/esm/md.transition-15a81b08.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    let trans;
    try {
        const mod = await __webpack_require__.e(/*! import() | index-69c37885-js */ "index-69c37885-js").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "./node_modules/@ionic/core/dist/esm/index-69c37885.js"));
        trans = await mod.create(animationBuilder, opts.baseEl, opts);
    }
    catch (err) {
        trans = animationBuilder(opts.baseEl, opts);
    }
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
};




/***/ }),

/***/ "./src/app/actual-travel-plan/actual-travel-plan.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/actual-travel-plan/actual-travel-plan.service.ts ***!
  \******************************************************************/
/*! exports provided: ActualTravelPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualTravelPlanService", function() { return ActualTravelPlanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





let ActualTravelPlanService = class ActualTravelPlanService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
        this.TAG = 'ActualTravelPlanService';
    }
    getWMobileUserWisePlanData(istravelclosure, mexp_visitplan_id) {
        if (mexp_visitplan_id) {
            return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWisePlanData?'
                + 'user_id=' + this.loginauth.userid
                + '&istravelclosure=' + istravelclosure
                + '&mexp_visitplan_id=' + mexp_visitplan_id);
        }
        else {
            return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWisePlanData?'
                + 'user_id=' + this.loginauth.userid
                + '&istravelclosure=' + istravelclosure);
        }
    }
    SaveActualPlan(template) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVisitActualPlan', template, httpOptions);
    }
};
ActualTravelPlanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
ActualTravelPlanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], ActualTravelPlanService);



/***/ }),

/***/ "./src/app/business-partner-address/business-partner-address.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/business-partner-address/business-partner-address.service.ts ***!
  \******************************************************************************/
/*! exports provided: BusinessPartnerAddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPartnerAddressService", function() { return BusinessPartnerAddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let BusinessPartnerAddressService = class BusinessPartnerAddressService {
    constructor(platform, http, loginauth, genericHTTP) {
        this.platform = platform;
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    getaddressbycustid(bp_id) {
        //  businessPartner_id="FFF20190328042044745CEDE4F2E670B";
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileBPartnerAddList?'
            + 'bp_id=' + bp_id);
    }
    getexistcustmerapi(searchkey) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileBPatnerAddCust?'
            + 'user_id=' + this.loginauth.userid
            + '&strsearch=' + searchkey
            + '&activity_id=' + this.loginauth.selectedactivity.id);
    }
    SaveAddress(addressjson) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileCustomerAddInsert', addressjson, httpOptions);
    }
};
BusinessPartnerAddressService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
BusinessPartnerAddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], BusinessPartnerAddressService);



/***/ }),

/***/ "./src/app/cardinal/customer-service/customer-service.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cardinal/customer-service/customer-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServiceService", function() { return CustomerServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let CustomerServiceService = class CustomerServiceService {
    constructor(genericHttpClientService, loginService, commonFunction, loginAuthService, httpClient) {
        this.genericHttpClientService = genericHttpClientService;
        this.loginService = loginService;
        this.commonFunction = commonFunction;
        this.loginAuthService = loginAuthService;
        this.httpClient = httpClient;
        /**
         *
         */
        this.TAG = "CustomerServiceService";
    }
    getDocumentList() {
        try {
            let URL = this.loginService.commonurl + 'org.openbravo.service.json.jsonrest/DocumentType?' + this.loginService.ReadOnlyparameter + '&' + '_where=EM_Mdts_Docnature=\'SRV\'';
            //console.log(this.TAG,"Doc Type Service",URL);
            return this.genericHttpClientService.get(URL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getErrorCodeList() {
        try {
            let errorCodeURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvalues?' +
                this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
                '&type=EC';
            return this.genericHttpClientService.get(errorCodeURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getSerialNumberFromBase(serialNumberTemp) {
        try {
            let serialNumerURL;
            return this.genericHttpClientService.get(serialNumerURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getDesignationOfComplainerList() {
        try {
            //return this.httpClient.get('assets/data/designation.json');
            let designationOfComplainerListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvalues?' +
                this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
                '&type=DC';
            return this.genericHttpClientService.get(designationOfComplainerListURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getContractTypeList() {
        try {
            let contractTypeListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
                this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
                '&refname=MSNR%20Contract%20Type';
            return this.genericHttpClientService.get(contractTypeListURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    checkSerialNumber(serialNo, date) {
        try {
            let serialNumberCheckURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInstallationBase?' +
                this.loginAuthService.parameter + '&user_id=' + this.loginAuthService.userid +
                '&serialno=' + serialNo + '&activity=' + this.loginService.selectedactivity.id;
            //  console.log("Insta base Url",serialNumberCheckURL);
            return this.genericHttpClientService.get(serialNumberCheckURL);
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    saveComplain(complain) {
        try {
            let login = this.loginAuthService.user;
            let password = this.loginAuthService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let data = {
                'complaintno': complain.complaint_no,
                'complaintid': complain.complaintid ? complain.complaintid : '',
                'doctype': complain.doctype,
                'nameofcomplainer': complain.nameofcomplainer,
                'desofcomplnr': complain.desofcomplnr,
                'contnumber': complain.contnumber,
                'email': complain.email,
                'eventdate': complain.eventdate,
                'serialno': complain.serialno,
                "srnoequipment": complain.srnoequipment,
                "contracttype": complain.contracttype,
                'invoiceno': complain.invoiceno,
                "invoicedate": complain.invoicedate,
                "errorcode": complain.errorcode,
                "dealername": complain.dealername,
                "installationdate": complain.installationdate,
                "skucode": complain.skucode,
                "skuname": complain.skuname,
                "brandname": complain.brandname,
                "producttobereturn": complain.producttobereturn,
                "custname": complain.custname,
                "add1": complain.add1,
                "add2": complain.add2,
                "add3": complain.add3,
                "pincode": complain.pincode,
                "area": complain.area,
                "city": complain.city,
                "state": complain.state,
                "country": complain.country,
                "description": complain.description,
                "lotno": complain.lotno ? complain.lotno : '',
                "appcomplaint": complain.appcomplaint,
                "assigntoservvendor": complain.assigntoservvendor,
                "salesrepresentative": complain.salesrepresentative ? complain.salesrepresentative : '',
                "newdealername": complain.newdealername,
                "serviceengname": complain.serviceengname,
                "serviceengcontact": complain.serviceengcontact,
                "servicevendor": complain.servicevendor,
                "visitdate": complain.visitdate,
                "servicevendorremark": complain.servicevendorremark,
                "assigntoservmg": complain.assigntoservmg,
                "activity": this.loginService.selectedactivity.id,
                "Appect": complain.Appect,
                "reject": complain.reject
            };
            //  console.log(this.TAG,"SALES SAERVICE FINAL",data);
            let complain_url = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceInsert?';
            return this.genericHttpClientService.post(complain_url, data, httpOptions);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
};
CustomerServiceService.ctorParameters = () => [
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_2__["GenericHttpClientService"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_1__["LoginauthService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_1__["LoginauthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
CustomerServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_2__["GenericHttpClientService"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_1__["LoginauthService"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_1__["LoginauthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
], CustomerServiceService);



/***/ }),

/***/ "./src/app/cardinal/service-manager/service-manager.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cardinal/service-manager/service-manager.service.ts ***!
  \*********************************************************************/
/*! exports provided: ServiceManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagerService", function() { return ServiceManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");






let ServiceManagerService = class ServiceManagerService {
    constructor(genericHTTP, loginService, httpClient) {
        this.genericHTTP = genericHTTP;
        this.loginService = loginService;
        this.httpClient = httpClient;
        /**
         *
         */
        this.TAG = "ServiceManagerService";
    }
    getComplaintList(screen) {
        try {
            let complainListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceDetails?' +
                'userid=' + this.loginService.userid
                + '&appcomplaint=' + 'N'
                + '&servmanager=' + 'Y'
                + '&serveng=' + 'N'
                + '&sparesku=' + 'N'
                + '&activity=' + this.loginService.selectedactivity.id;
            ;
            //  console.log("getComplaintList",complainListURL);
            return this.genericHTTP.get(complainListURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getDealerList() {
        try {
            let dealerListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.BusinessPartnerAsPerCategory?' +
                'activityid=' + this.loginService.selectedactivity.id +
                '&c_bgroup_id=' + this.loginService.dealer_id;
            //  console.log(this.TAG,"Dealer List URL",dealerListURL);
            return this.genericHTTP.get(dealerListURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getVenderList() {
        try {
            let venderListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.BusinessPartnerAsPerCategory?' +
                'activityid=' + this.loginService.selectedactivity.id +
                '&c_bgroup_id=' + this.loginService.vender_id;
            //  console.log(this.TAG,"Vender List URL",venderListURL);
            return this.genericHTTP.get(venderListURL);
        }
        catch (error) {
            // console.log(this.TAG,error);
        }
    }
    getSalesRepresentativeList(bid) {
        try {
            let salesRepresentativeListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceSalesRep?' +
                'user_id=' + this.loginService.userid +
                '&bpid=' + bid;
            //  console.log(this.TAG,"Sales Representative List URL",salesRepresentativeListURL);
            return this.genericHTTP.get(salesRepresentativeListURL);
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    }
    getDesignationOfComplainerList() {
        try {
            let designationOfComplainerListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvalues?' +
                'user_id=' + this.loginService.userid +
                '&type=DC';
            return this.genericHTTP.get(designationOfComplainerListURL);
        }
        catch (error) {
            //  console.error(this.TAG,error);
        }
    }
};
ServiceManagerService.ctorParameters = () => [
    { type: src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ServiceManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"],
        src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ServiceManagerService);



/***/ }),

/***/ "./src/app/cardinal/vender-approval/vender-approval.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cardinal/vender-approval/vender-approval.service.ts ***!
  \*********************************************************************/
/*! exports provided: VenderApprovalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenderApprovalService", function() { return VenderApprovalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/login/loginauth.service */ "./src/app/login/loginauth.service.ts");






let VenderApprovalService = class VenderApprovalService {
    constructor(genericHTTP, loginService, httpClient) {
        this.genericHTTP = genericHTTP;
        this.loginService = loginService;
        this.httpClient = httpClient;
        this.TAG = "VenderApprovalService";
    }
    getVenderApprovalList() {
        try {
            let venderApprovalListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerServiceDetails?' +
                'userid=' + this.loginService.userid
                + '&appcomplaint=' + 'Y'
                + '&servmanager=' + 'N'
                + '&serveng=' + 'N'
                + '&sparesku=' + 'N'
                + '&activity=' + this.loginService.selectedactivity.id;
            //  console.log(this.TAG,"GET Vender Approval List",venderApprovalListURL)
            return this.genericHTTP.get(venderApprovalListURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
    getServiceEngList() {
        try {
            let serviceEngListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.BusinessPartnerVendor?' +
                this.loginService.parameter + '&userid=' + this.loginService.userid +
                '&activityid=' + this.loginService.selectedactivity.id;
            //  console.log(this.TAG,"Service Eng URL",serviceEngListURL);
            return this.genericHTTP.get(serviceEngListURL);
        }
        catch (error) {
            console.error(this.TAG, error);
        }
    }
};
VenderApprovalService.ctorParameters = () => [
    { type: src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] },
    { type: src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
VenderApprovalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"],
        src_app_login_loginauth_service__WEBPACK_IMPORTED_MODULE_5__["LoginauthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], VenderApprovalService);



/***/ }),

/***/ "./src/app/hrms/mpr-form.service.ts":
/*!******************************************!*\
  !*** ./src/app/hrms/mpr-form.service.ts ***!
  \******************************************/
/*! exports provided: MprFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MprFormService", function() { return MprFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");







let MprFormService = class MprFormService {
    constructor(genericHttpClientService, loginService, commonFunction, httpClient) {
        this.genericHttpClientService = genericHttpClientService;
        this.loginService = loginService;
        this.commonFunction = commonFunction;
        this.httpClient = httpClient;
        this.TAG = "Mpr Form Service";
        this.activity_name = loginService.selectedactivity.name;
    }
    getOrganizationList() {
        let getOrganizationListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.WMobileUserWiseOrgActivity?' +
            this.loginService.parameter + '&userid=' + this.loginService.userid + '&activityid=' + this.loginService.selectedactivity.id;
        //   console.log(this.TAG,"get Organization List",getOrganizationListURL);
        return this.genericHttpClientService.get(getOrganizationListURL);
    }
    getReasonForMPRList() {
        let getReasonForMPRListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
            this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20Reason%20for%20MRP%20list';
        //console.log(this.TAG,"Doc Type Service",URL);
        return this.genericHttpClientService.get(getReasonForMPRListURL);
    }
    getJobListingList() {
        let getReasonForMPRListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
            this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20job%20list';
        //console.log(this.TAG,"Doc Type Service",URL);
        return this.genericHttpClientService.get(getReasonForMPRListURL);
    }
    getQualificationList() {
        let getQualificationListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvalues?' +
            this.loginService.parameter + '&user_id=' + this.loginService.userid + '&type=QLFC';
        //console.log(this.TAG,"Doc Type Service",URL);
        return this.genericHttpClientService.get(getQualificationListURL);
    }
    getMPRMasterDataList(selectedOrganization) {
        let getMPRMasterDataListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.MPRDetails?' +
            this.loginService.parameter + '&ad_org_id=' + selectedOrganization.id;
        // console.log(this.TAG,"Doc Type Service",getMPRMasterDataListURL);
        return this.genericHttpClientService.get(getMPRMasterDataListURL);
    }
    getResourceRequirementMasterList() {
        let getResourceRequirementMasterListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
            this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20Employee%20Requirement';
        //console.log(this.TAG,"Doc Type Service",URL);
        return this.genericHttpClientService.get(getResourceRequirementMasterListURL);
    }
    getResourceDepartmentMasterList() {
        let getResourceDepartmentMasterListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.ListOfvaluesReference?' +
            this.loginService.parameter + '&user_id=' + this.loginService.userid + '&refname=HRMS%20Department';
        //console.log(this.TAG,"Doc Type Service",URL);
        return this.genericHttpClientService.get(getResourceDepartmentMasterListURL);
    }
    getMPRList() {
        let getMPRListURL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.MPRDetails?' +
            this.loginService.parameter + '&ad_user_id=' + this.loginService.userid;
        // console.log(this.TAG,"Doc Type Service",getMPRListURL);
        return this.genericHttpClientService.get(getMPRListURL);
    }
    postMPRForm(data) {
        let login = this.loginService.user;
        let password = this.loginService.pass;
        const auth = btoa(login + ":" + password);
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Basic ' + auth }) };
        let MPR_FORM_SAVE_URL;
        if (data.is_approve == 'true' || data.is_approve == 'false') {
            MPR_FORM_SAVE_URL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.MPRDetailsUpdate?';
        }
        else {
            MPR_FORM_SAVE_URL = _common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.MPRDetailsInsert?';
        }
        return this.genericHttpClientService.post(MPR_FORM_SAVE_URL, data, httpOptions);
    }
};
MprFormService.ctorParameters = () => [
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MprFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_5__["GenericHttpClientService"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_6__["LoginauthService"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_3__["Commonfun"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MprFormService);



/***/ }),

/***/ "./src/app/newcustomer/newcustomer.service.ts":
/*!****************************************************!*\
  !*** ./src/app/newcustomer/newcustomer.service.ts ***!
  \****************************************************/
/*! exports provided: NewcustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcustomerService", function() { return NewcustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





let NewcustomerService = class NewcustomerService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    getBPCategory(activityid) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerCategory?'
            + '_selectedProperties=id,_identifier&'
            + '_where=active=true%20and%20EM_Mmst_Org_Act=\'' + activityid + '\'', false, !this.loginauth.isloginactive);
    }
    getBPartner(activityid) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartner?'
            + '_selectedProperties=id,_identifier&'
            + '_where=EM_Mmst_Org_Act=\'' + activityid + '\'', false, !this.loginauth.isloginactive);
    }
    getPincode(pincode) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_post_off?'
            + '_where=active=true%20and%20spincode=\'' + pincode + '\'', false, !this.loginauth.isloginactive);
    }
    getregion(pincode) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/Region?'
            + '_selectedProperties=mmstRegioncode,name&'
            + '_where=active=true%20and%20id=\'' + pincode + '\'', false, !this.loginauth.isloginactive);
    }
    getarea(area_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_post_off_val?'
            + '_where=active=true%20and%20Mmst_Post_Off_ID=\'' + area_id + '\'', false, !this.loginauth.isloginactive);
    }
    geteditcustmerheader(Cust_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + '_where=id=\'' + Cust_id + '\'', false, !this.loginauth.isloginactive);
    }
    geteditcustmerdetailapi(Cust_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileCustomerDetails?'
            + 'cust_id=' + Cust_id, false, !this.loginauth.isloginactive);
    }
    checkmobileno(mobile) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + '_where=smobile=\'' + mobile + '\'', false, !this.loginauth.isloginactive);
    }
    geteditcustmerbilling(Cust_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer_billing?'
            + '_where=mmstCustomer=\'' + Cust_id + '\'', false, !this.loginauth.isloginactive);
    }
    geteditcustmercompliance(Cust_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_cust_compilance?'
            + '_where=mmstCustomer=\'' + Cust_id + '\'', false, !this.loginauth.isloginactive);
    }
    getreferalcustmer(selectedactivity) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_customer?'
            + '_where=mmstOrgAct=\'' + selectedactivity + '\'', false, !this.loginauth.isloginactive);
    }
    LeadComplete(leadcomplete) {
        let login = '';
        let password = '';
        if (!this.loginauth.isloginactive) {
            login = 'ionic.appuser'; //"P2admin";
            password = 'ionic.appuser'; //"Pass2020";
        }
        else {
            login = this.loginauth.user;
            password = this.loginauth.pass;
        }
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Basic ' + auth
            })
        };
        var specificHeader = { 'Authorization': 'Basic ' + auth };
        return this.genericHTTP.postformdata(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileNewLeadComplete', leadcomplete, specificHeader, httpOptions);
    }
    getCompilanceDataapi(bpc_id, Cust_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileComplianceData?'
            + 'bpc_id=' + bpc_id + '&cust_id=' + Cust_id, false, !this.loginauth.isloginactive);
    }
    getCompilanceData(bpc_id) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mmst_compliance_details?'
            + '_where=bpGroup=\'' + bpc_id + '\'', false, !this.loginauth.isloginactive);
    }
    getsalesarea(user_id, searchtext) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileSalesAreaUserWise?'
            + 'user_id=' + user_id
            + '&activity_id=' + this.loginauth.selectedactivity.id
            + '&strsearch=' + searchtext, false, !this.loginauth.isloginactive);
    }
    getUserActivityAgreementStatus() {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserActivityAgreementStatus?'
            + 'newregistration=Y', false, !this.loginauth.isloginactive);
    }
    getPreferredTransportModes() {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.BusinessPartnerVendor?'
            + 'transport=true');
    }
};
NewcustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
NewcustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], NewcustomerService);



/***/ }),

/***/ "./src/app/product-list/product-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/product-list/product-list.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list.page */ "./src/app/product-list/product-list.page.ts");






let ProductListPageModule = class ProductListPageModule {
};
ProductListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_5__["ProductListPage"]],
    })
], ProductListPageModule);



/***/ }),

/***/ "./src/app/quotation/customer-quotation/customer-quotation.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/quotation/customer-quotation/customer-quotation.service.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerQuotationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuotationService", function() { return CustomerQuotationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/Constants */ "./src/app/common/Constants.ts");
/* harmony import */ var src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/provider/commonfun */ "./src/provider/commonfun.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../login/loginauth.service */ "./src/app/login/loginauth.service.ts");








let CustomerQuotationService = class CustomerQuotationService {
    constructor(genericHttpClientService, loginService, commonFunction, platform, http) {
        this.genericHttpClientService = genericHttpClientService;
        this.loginService = loginService;
        this.commonFunction = commonFunction;
        this.platform = platform;
        this.http = http;
        this.TAG = "Customer Quotation Service";
    }
    getCustomer(strsearch) {
        try {
            if (!!strsearch) {
                strsearch = strsearch.replace(/ /g, "%20");
            }
            else {
                strsearch = "";
            }
            let getCustomerURL = this.loginService.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseCustomer?'
                + this.loginService.parameter
                + '&user_id=' + this.loginService.userid
                + '&strsearch=' + strsearch
                + '&activity_id=' + this.loginService.selectedactivity.id;
            +'&ordertypeionic=' + "";
            //  console.log(this.TAG,"getCustomer",getCustomerURL);
            //  return this.genericHttpClientService.get(getCustomerURL).map(response =>response.slice(0.9));
            return this.genericHttpClientService.get(getCustomerURL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getcustmerbillingaddress(businessPartner_id) {
        try {
            return this.genericHttpClientService.get(this.loginService.commonurl + 'org.openbravo.service.json.jsonrest/BusinessPartnerLocation?'
                + this.loginService.ReadOnlyparameter + '&'
                + '_selectedProperties=id,name,shipToAddress,invoiceToAddress&'
                + '_where=active=true%20and%20businessPartner=\'' + businessPartner_id + '\'');
        }
        catch (error) {
            throw error;
        }
    }
    getServiceProduct(strsearch, bpid) {
        try {
            let getServiceProductURL;
            if (!!strsearch) {
                getServiceProductURL = this.loginService.commonurl + '/ws/in.mbs.webservice.ActivityContractTypeWiseProd?'
                    + this.loginService.parameter
                    + '&user_id=' + this.loginService.userid
                    + '&activity_id=' + this.loginService.selectedactivity.id
                    + '&strsearch=' + strsearch
                    + '&bpid=' + bpid;
            }
            else {
                getServiceProductURL = this.loginService.commonurl + '/ws/in.mbs.webservice.ActivityContractTypeWiseProd?'
                    + this.loginService.parameter
                    + '&user_id=' + this.loginService.userid
                    + '&activity_id=' + this.loginService.selectedactivity.id
                    + '&strsearch=' + ""
                    + '&bpid=' + bpid;
            }
            //  console.log(this.TAG,"getServiceProductURL",getServiceProductURL);
            return this.genericHttpClientService.get(getServiceProductURL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getSerialNoProductList(m_product_id, searchchar) {
        try {
            if (this.platform.is('android')) {
                return this.http.get(this.loginService.commonurl + 'ws/in.mbs.webservice.SerialnoProdContracttypeWise?'
                    + this.loginService.parameter
                    + '&m_product_id=' + m_product_id
                    + '&activityid=' + this.loginService.selectedactivity.id
                    + '&strsearch=' + searchchar);
            }
            else if (this.platform.is('ios')) {
                return this.genericHttpClientService.get(this.loginService.commonurl + 'ws/in.mbs.webservice.SerialnoProdContracttypeWise?'
                    + this.loginService.parameter
                    + '&m_product_id=' + m_product_id
                    + '&activityid=' + this.loginService.selectedactivity.id
                    + '&strsearch=' + searchchar);
            }
            else {
                let url = this.loginService.commonurl + 'ws/in.mbs.webservice.SerialnoProdContracttypeWise?'
                    + this.loginService.parameter
                    + '&m_product_id=' + m_product_id
                    + '&activityid=' + this.loginService.selectedactivity.id
                    + '&strsearch=' + searchchar;
                //   console.log(this.TAG,"Serial Number list url",url);
                return this.http.get(url);
            }
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getSerialNoProductDetail(bpid, m_product_id, shippadd, billadd) {
        try {
            let getSerialNoProductDetailURL = this.loginService.commonurl + 'ws/in.mbs.webservice.customerproductwiserate?'
                + this.loginService.parameter
                + '&activity_id=' + this.loginService.selectedactivity.id
                + '&bpid=' + bpid
                + '&m_product_id=' + m_product_id
                + '&shipid=' + shippadd
                + '&billid=' + billadd;
            //  console.log(this.TAG,"getSerialNoProductDetailURL",getSerialNoProductDetailURL);
            return this.genericHttpClientService.get(getSerialNoProductDetailURL);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    saveQuotation(form, serialNumberList) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let data = {
                "userid": this.loginService.userid,
                "bpid": form.bpid ? form.bpid : "",
                "billid": form.billid ? form.billid : "",
                "shipid": form.shipid ? form.shipid : "",
                "orderdate": form.orderdate ? form.orderdate : "",
                "m_product_id": form.m_product_id ? form.m_product_id : "",
                "complaintno": form.complaintno ? form.complaintno : "",
                "quatationline": serialNumberList ? serialNumberList : ""
            };
            //  console.log(this.TAG,"Save Quotation Final Data",data);
            let save_quotation = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerQuotationInsert?';
            return this.genericHttpClientService.post(save_quotation, data, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    getQuotationList() {
        try {
            let getQuotationListURL = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerQuotationDetails?' +
                this.loginService.parameter + '&userid=' + this.loginService.userid
                + '&activity=' + this.loginService.selectedactivity.id;
            //  console.log(this.TAG,"GET Vender Approval List",getQuotationListURL)
            return this.genericHttpClientService.get(getQuotationListURL, {});
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
    approveQuotation(complaintno, approve, reject) {
        try {
            let login = this.loginService.user;
            let password = this.loginService.pass;
            const auth = btoa(login + ":" + password);
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Basic ' + auth
                })
            };
            let data = {
                "userid": this.loginService.userid,
                "msnr_quotationreq_id": complaintno.msnr_quotationreq_id,
                "approve": approve,
                "reject": reject,
            };
            //  console.log(this.TAG,"Approve Quotation Final Data",data);
            let save_quotation = src_app_common_Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].DOMAIN_URL + '/openbravo' + '/ws/in.mbs.webservice.CustomerQuotationApproval?';
            return this.genericHttpClientService.post(save_quotation, data, httpOptions);
        }
        catch (error) {
            //  console.log(this.TAG,error);
        }
    }
};
CustomerQuotationService.ctorParameters = () => [
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_6__["GenericHttpClientService"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"] },
    { type: src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CustomerQuotationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_6__["GenericHttpClientService"],
        _login_loginauth_service__WEBPACK_IMPORTED_MODULE_7__["LoginauthService"],
        src_provider_commonfun__WEBPACK_IMPORTED_MODULE_5__["Commonfun"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CustomerQuotationService);



/***/ }),

/***/ "./src/app/selectorsingle/selectorsingleservice.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/selectorsingle/selectorsingleservice.service.ts ***!
  \*****************************************************************/
/*! exports provided: SelectorsingleserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorsingleserviceService", function() { return SelectorsingleserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





let SelectorsingleserviceService = class SelectorsingleserviceService {
    constructor(loginservc, http, genericHTTP) {
        this.loginservc = loginservc;
        this.http = http;
        this.genericHTTP = genericHTTP;
        this.json = {};
        this.pageOffset = 0;
    }
    getData(jsonreport) {
        let login = this.loginservc.user; //"P2admin";
        let password = this.loginservc.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginservc.commonurl + 'ws/in.mbs.exportdata.MEXDGetSingleSelector', jsonreport, httpOptions);
    }
};
SelectorsingleserviceService.ctorParameters = () => [
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
SelectorsingleserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], SelectorsingleserviceService);



/***/ }),

/***/ "./src/app/travel-expense/travel-expense.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/travel-expense/travel-expense.service.ts ***!
  \**********************************************************/
/*! exports provided: TravelExpenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelExpenseService", function() { return TravelExpenseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let TravelExpenseService = class TravelExpenseService {
    constructor(http, genericHTTP, loginauth) {
        this.http = http;
        this.genericHTTP = genericHTTP;
        this.loginauth = loginauth;
        this.TAG = 'Travel Expense Service';
    }
    getPlan(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let methodTAG = 'getPlan';
            try {
                return yield this.genericHTTP.get('assets/data/planMaster.json');
            }
            catch (error) {
            }
        });
    }
    getWMobileTravelExpenseList(mexp_visitplan_id) {
        if (mexp_visitplan_id) {
            return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileTravelExpenseList?'
                + 'user_id=' + this.loginauth.userid + '&mexp_visitplan_id=' + mexp_visitplan_id);
        }
        else {
            return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileTravelExpenseList?'
                + 'user_id=' + this.loginauth.userid);
        }
        // console.log("API FOR Travel Plan",url);
    }
    SaveWMobileTravelExpense(template) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileTravelExpense', template, httpOptions);
    }
};
TravelExpenseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_2__["GenericHttpClientService"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] }
];
TravelExpenseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_2__["GenericHttpClientService"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"]])
], TravelExpenseService);



/***/ }),

/***/ "./src/app/travel-plan/travel-plan.service.ts":
/*!****************************************************!*\
  !*** ./src/app/travel-plan/travel-plan.service.ts ***!
  \****************************************************/
/*! exports provided: TravelPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlanService", function() { return TravelPlanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





let TravelPlanService = class TravelPlanService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
        this.TAG = 'TravelPlanService';
    }
    getUserWiseSalesPerson(offset, strsearch, ondatechange, lat, long, outstation) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileUserWiseSalesPerson?'
            + 'user_id=' + this.loginauth.userid
            + '&strsearch=' + strsearch
            + '&offset=' + offset
            + '&ondatechange=' + ondatechange
            + '&lat=' + lat
            + '&long=' + long
            + '&outstation=' + outstation);
    }
    getSearchNearestPersoni(bpcutadd_id, offset, strsearch, outstation) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileSearchNearestPerson?'
            + 'userid=' + this.loginauth.userid
            + '&strsearch=' + strsearch
            + '&bpcutadd_id=' + bpcutadd_id
            + '&offset=' + offset
            + '&outstation=' + outstation);
    }
    getPlan(planname) {
        planname = planname.replace(/ /g, "%20");
        return this.genericHTTP.get(this.loginauth.commonurl + 'org.openbravo.service.json.jsonrest/mexp_visitplan?'
            + '_where=Planname=\'' + planname + '\'', false, false);
    }
    SavePlan(template) {
        let login = this.loginauth.user; //"P2admin";
        let password = this.loginauth.pass; //"Pass2020";
        const auth = btoa(login + ":" + password);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + auth
            })
        };
        return this.genericHTTP.post(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVisitPlan', template, httpOptions);
    }
};
TravelPlanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
TravelPlanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], TravelPlanService);



/***/ }),

/***/ "./src/app/use-vetcoins/use-vetcoins.service.ts":
/*!******************************************************!*\
  !*** ./src/app/use-vetcoins/use-vetcoins.service.ts ***!
  \******************************************************/
/*! exports provided: UseVetcoinsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseVetcoinsService", function() { return UseVetcoinsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/loginauth.service */ "./src/app/login/loginauth.service.ts");
/* harmony import */ var _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/generic-http-client.service */ "./src/app/common/generic-http-client.service.ts");





let UseVetcoinsService = class UseVetcoinsService {
    constructor(http, loginauth, genericHTTP) {
        this.http = http;
        this.loginauth = loginauth;
        this.genericHTTP = genericHTTP;
    }
    getWMobileVetCoinCustDetailsapi(mobno, mytransaction) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVetCoinCustDetails?'
            + 'mobno=' + mobno
            + '&mytransaction=' + mytransaction
            + '&userid=' + this.loginauth.userid
            + '&loginmobno=' + this.loginauth.user);
    }
    VetCoinRewardTranstn(tocust, fromcust, description, bal, rewardlimit, rewardtransfer, redeemlimit, ordvalue) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVetCoinRewardTranstn?'
            + 'tocust=' + tocust
            + '&fromcust=' + fromcust
            + '&description=' + description
            + '&bal=' + bal
            + '&rewardlimit=' + rewardlimit
            + '&rewardtransfer=' + rewardtransfer
            + '&redeemlimit=' + redeemlimit
            + '&ordvalue=' + ordvalue);
    }
    getWMobileSendSmsViaIonic(mobno) {
        return this.genericHTTP.get(this.loginauth.commonurl + 'ws/in.mbs.webservice.WMobileVetcoinSmsOpt?'
            + 'mobno=' + mobno //this.loginauth.user
            + '&userid=' + this.loginauth.userid);
    }
};
UseVetcoinsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"] },
    { type: _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"] }
];
UseVetcoinsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_loginauth_service__WEBPACK_IMPORTED_MODULE_3__["LoginauthService"], _common_generic_http_client_service__WEBPACK_IMPORTED_MODULE_4__["GenericHttpClientService"]])
], UseVetcoinsService);



/***/ }),

/***/ "./src/assets/model/complain.ts":
/*!**************************************!*\
  !*** ./src/assets/model/complain.ts ***!
  \**************************************/
/*! exports provided: Complain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Complain", function() { return Complain; });
class Complain {
    constructor() {
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map