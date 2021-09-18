// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2BYtI":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "119b23b9fa7c053f";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6Rhrs":[function(require,module,exports) {
var global = arguments[3];
var AFTER, BEFORE, COMMON_EVENTS, EventEmitter, FETCH, FIRE, FormData1, NativeFetch, NativeFormData, NativeXMLHttp, OFF, ON, READY_STATE, UPLOAD_EVENTS, WINDOW, XHookFetchRequest, XHookFormData, XHookHttpRequest, XMLHTTP, base, convertHeaders, depricatedProp, document, fakeEvent, mergeObjects, msie, nullify, proxyEvents, slice, useragent, xhook, indexOf = [].indexOf;
WINDOW = null;
if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) WINDOW = self;
else if (typeof global !== "undefined") WINDOW = global;
else WINDOW = window;
//for compression
document = WINDOW.document;
BEFORE = "before";
AFTER = "after";
READY_STATE = "readyState";
ON = "addEventListener";
OFF = "removeEventListener";
FIRE = "dispatchEvent";
XMLHTTP = "XMLHttpRequest";
FETCH = "fetch";
FormData1 = "FormData";
UPLOAD_EVENTS = [
    "load",
    "loadend",
    "loadstart"
];
COMMON_EVENTS = [
    "progress",
    "abort",
    "error",
    "timeout"
];
//parse IE version
useragent = typeof navigator !== "undefined" && navigator["useragent"] ? navigator.userAgent : "";
msie = parseInt((/msie (\d+)/.exec(useragent.toLowerCase()) || [])[1]);
if (isNaN(msie)) msie = parseInt((/trident\/.*; rv:(\d+)/.exec(useragent.toLowerCase()) || [])[1]);
//if required, add 'indexOf' method to Array
(base = Array.prototype).indexOf || (base.indexOf = function(item) {
    var i, j, len, ref, x;
    ref = this;
    for(i = j = 0, len = ref.length; j < len; i = ++j){
        x = ref[i];
        if (x === item) return i;
    }
    return -1;
});
slice = function(o, n) {
    return Array.prototype.slice.call(o, n);
};
depricatedProp = function(p) {
    return p === "returnValue" || p === "totalSize" || p === "position";
};
mergeObjects = function(src, dst) {
    var k, v;
    for(k in src){
        v = src[k];
        if (depricatedProp(k)) continue;
        try {
            dst[k] = src[k];
        } catch (error) {
        }
    }
    return dst;
};
nullify = function(res) {
    if (res === void 0) return null;
    return res;
};
//proxy events from one emitter to another
proxyEvents = function(events, src, dst) {
    var event, j, len, p;
    p = function(event1) {
        return function(e) {
            var clone, k, val;
            clone = {
            };
            //copies event, with dst emitter inplace of src
            for(k in e){
                if (depricatedProp(k)) continue;
                val = e[k];
                clone[k] = val === src ? dst : val;
            }
            //emits out the dst
            return dst[FIRE](event1, clone);
        };
    };
    //dont proxy manual events
    for(j = 0, len = events.length; j < len; j++){
        event = events[j];
        if (dst._has(event)) src[`on${event}`] = p(event);
    }
};
//create fake event
fakeEvent = function(type) {
    var msieEventObject;
    if (document && document.createEventObject != null) {
        msieEventObject = document.createEventObject();
        msieEventObject.type = type;
        return msieEventObject;
    } else try {
        // on some platforms like android 4.1.2 and safari on windows, it appears
        // that new Event is not allowed
        return new Event(type);
    } catch (error) {
        return {
            type
        };
    }
};
//tiny event emitter
EventEmitter = function(nodeStyle) {
    var emitter, events, listeners;
    //private
    events = {
    };
    listeners = function(event) {
        return events[event] || [];
    };
    //public
    emitter = {
    };
    emitter[ON] = function(event, callback, i) {
        events[event] = listeners(event);
        if (events[event].indexOf(callback) >= 0) return;
        i = i === undefined ? events[event].length : i;
        events[event].splice(i, 0, callback);
    };
    emitter[OFF] = function(event, callback) {
        var i;
        //remove all
        if (event === undefined) {
            events = {
            };
            return;
        }
        //remove all of type event
        if (callback === undefined) events[event] = [];
        //remove particular handler
        i = listeners(event).indexOf(callback);
        if (i === -1) return;
        listeners(event).splice(i, 1);
    };
    emitter[FIRE] = function() {
        var args, event, i, j, legacylistener, len, listener, ref;
        args = slice(arguments);
        event = args.shift();
        if (!nodeStyle) args[0] = mergeObjects(args[0], fakeEvent(event));
        legacylistener = emitter[`on${event}`];
        if (legacylistener) legacylistener.apply(emitter, args);
        ref = listeners(event).concat(listeners("*"));
        for(i = j = 0, len = ref.length; j < len; i = ++j){
            listener = ref[i];
            listener.apply(emitter, args);
        }
    };
    emitter._has = function(event) {
        return !!(events[event] || emitter[`on${event}`]);
    };
    //add extra aliases
    if (nodeStyle) {
        emitter.listeners = function(event) {
            return slice(listeners(event));
        };
        emitter.on = emitter[ON];
        emitter.off = emitter[OFF];
        emitter.fire = emitter[FIRE];
        emitter.once = function(e, fn) {
            var fire;
            fire = function() {
                emitter.off(e, fire);
                return fn.apply(null, arguments);
            };
            return emitter.on(e, fire);
        };
        emitter.destroy = function() {
            return events = {
            };
        };
    }
    return emitter;
};
//use event emitter to store hooks
xhook = EventEmitter(true);
xhook.EventEmitter = EventEmitter;
xhook[BEFORE] = function(handler, i) {
    if (handler.length < 1 || handler.length > 2) throw "invalid hook";
    return xhook[ON](BEFORE, handler, i);
};
xhook[AFTER] = function(handler, i) {
    if (handler.length < 2 || handler.length > 3) throw "invalid hook";
    return xhook[ON](AFTER, handler, i);
};
xhook.enable = function() {
    WINDOW[XMLHTTP] = XHookHttpRequest;
    if (typeof XHookFetchRequest === "function") WINDOW[FETCH] = XHookFetchRequest;
    if (NativeFormData) WINDOW[FormData1] = XHookFormData;
};
xhook.disable = function() {
    WINDOW[XMLHTTP] = xhook[XMLHTTP];
    WINDOW[FETCH] = xhook[FETCH];
    if (NativeFormData) WINDOW[FormData1] = NativeFormData;
};
//helper
convertHeaders = xhook.headers = function(h, dest = {
}) {
    var header, headers, j, k, len, name, ref, v, value;
    switch(typeof h){
        case "object":
            headers = [];
            for(k in h){
                v = h[k];
                name = k.toLowerCase();
                headers.push(`${name}:\t${v}`);
            }
            return headers.join("\n") + "\n";
        case "string":
            headers = h.split("\n");
            for(j = 0, len = headers.length; j < len; j++){
                header = headers[j];
                if (/([^:]+):\s*(.+)/.test(header)) {
                    name = (ref = RegExp.$1) != null ? ref.toLowerCase() : void 0;
                    value = RegExp.$2;
                    if (dest[name] == null) dest[name] = value;
                }
            }
            return dest;
    }
};
//patch FormData
// we can do this safely because all XHR
// is hooked, so we can ensure the real FormData
// object is used on send
NativeFormData = WINDOW[FormData1];
XHookFormData = function(form) {
    var entries;
    this.fd = form ? new NativeFormData(form) : new NativeFormData();
    this.form = form;
    entries = [];
    Object.defineProperty(this, "entries", {
        get: function() {
            var fentries;
            //extract form entries
            fentries = !form ? [] : slice(form.querySelectorAll("input,select")).filter(function(e) {
                var ref;
                return (ref = e.type) !== "checkbox" && ref !== "radio" || e.checked;
            }).map(function(e) {
                return [
                    e.name,
                    e.type === "file" ? e.files : e.value
                ];
            });
            //combine with js entries
            return fentries.concat(entries);
        }
    });
    this.append = ()=>{
        var args;
        args = slice(arguments);
        entries.push(args);
        return this.fd.append.apply(this.fd, args);
    };
};
if (NativeFormData) {
    //expose native formdata as xhook.FormData incase its needed
    xhook[FormData1] = NativeFormData;
    WINDOW[FormData1] = XHookFormData;
}
//patch XHR
NativeXMLHttp = WINDOW[XMLHTTP];
xhook[XMLHTTP] = NativeXMLHttp;
XHookHttpRequest = WINDOW[XMLHTTP] = function() {
    var ABORTED, currentState, emitFinal, emitReadyState, event, facade, hasError, hasErrorHandler, j, len, readBody, readHead, ref, request, response, setReadyState, status, transiting, writeBody, writeHead, xhr;
    ABORTED = -1;
    xhr = new xhook[XMLHTTP]();
    //==========================
    // Extra state
    request = {
    };
    status = null;
    hasError = void 0;
    transiting = void 0;
    response = void 0;
    //==========================
    // Private API
    //read results from real xhr into response
    readHead = function() {
        var key, name, ref1, val;
        // Accessing attributes on an aborted xhr object will
        // throw an 'c00c023f error' in IE9 and lower, don't touch it.
        response.status = status || xhr.status;
        if (!(status === ABORTED && msie < 10)) response.statusText = xhr.statusText;
        if (status !== ABORTED) {
            ref1 = convertHeaders(xhr.getAllResponseHeaders());
            for(key in ref1){
                val = ref1[key];
                if (!response.headers[key]) {
                    name = key.toLowerCase();
                    response.headers[name] = val;
                }
            }
        }
    };
    readBody = function() {
        if (!xhr.responseType || xhr.responseType === "text") {
            response.text = xhr.responseText;
            response.data = xhr.responseText;
            try {
                response.xml = xhr.responseXML;
            } catch (error) {
            }
        // unable to set responseXML due to response type, we attempt to assign responseXML
        // when the type is text even though it's against the spec due to several libraries
        // and browser vendors who allow this behavior. causing these requests to fail when
        // xhook is installed on a page.
        } else if (xhr.responseType === "document") {
            response.xml = xhr.responseXML;
            response.data = xhr.responseXML;
        } else response.data = xhr.response;
        //new in some browsers
        if ("responseURL" in xhr) response.finalUrl = xhr.responseURL;
    };
    //write response into facade xhr
    writeHead = function() {
        facade.status = response.status;
        facade.statusText = response.statusText;
    };
    writeBody = function() {
        if ("text" in response) facade.responseText = response.text;
        if ("xml" in response) facade.responseXML = response.xml;
        if ("data" in response) facade.response = response.data;
        if ("finalUrl" in response) facade.responseURL = response.finalUrl;
    };
    //ensure ready state 0 through 4 is handled
    emitReadyState = function(n) {
        while(n > currentState && currentState < 4){
            facade[READY_STATE] = ++currentState;
            // make fake events for libraries that actually check the type on
            // the event object
            if (currentState === 1) facade[FIRE]("loadstart", {
            });
            if (currentState === 2) writeHead();
            if (currentState === 4) {
                writeHead();
                writeBody();
            }
            facade[FIRE]("readystatechange", {
            });
            //delay final events incase of error
            if (currentState === 4) {
                if (request.async === false) emitFinal();
                else setTimeout(emitFinal, 0);
            }
        }
    };
    emitFinal = function() {
        if (!hasError) facade[FIRE]("load", {
        });
        facade[FIRE]("loadend", {
        });
        if (hasError) facade[READY_STATE] = 0;
    };
    //control facade ready state
    currentState = 0;
    setReadyState = function(n) {
        var hooks, process;
        //emit events until readyState reaches 4
        if (n !== 4) {
            emitReadyState(n);
            return;
        }
        //before emitting 4, run all 'after' hooks in sequence
        hooks = xhook.listeners(AFTER);
        process = function() {
            var hook;
            if (!hooks.length) return emitReadyState(4);
            hook = hooks.shift();
            if (hook.length === 2) {
                hook(request, response);
                return process();
            } else if (hook.length === 3 && request.async) return hook(request, response, process);
            else return process();
        };
        process();
    };
    //==========================
    // Facade XHR
    facade = request.xhr = EventEmitter();
    //==========================
    // Handle the underlying ready state
    xhr.onreadystatechange = function(event1) {
        try {
            //pull status and headers
            if (xhr[READY_STATE] === 2) readHead();
        } catch (error) {
        }
        //pull response data
        if (xhr[READY_STATE] === 4) {
            transiting = false;
            readHead();
            readBody();
        }
        setReadyState(xhr[READY_STATE]);
    };
    //mark this xhr as errored
    hasErrorHandler = function() {
        hasError = true;
    };
    facade[ON]("error", hasErrorHandler);
    facade[ON]("timeout", hasErrorHandler);
    facade[ON]("abort", hasErrorHandler);
    // progress means we're current downloading...
    facade[ON]("progress", function() {
        //progress events are followed by readystatechange for some reason...
        if (currentState < 3) setReadyState(3);
        else facade[FIRE]("readystatechange", {
        }); //TODO fake an XHR event
    });
    // initialise 'withCredentials' on facade xhr in browsers with it
    // or if explicitly told to do so
    if ("withCredentials" in xhr || xhook.addWithCredentials) facade.withCredentials = false;
    facade.status = 0;
    ref = COMMON_EVENTS.concat(UPLOAD_EVENTS);
    // initialise all possible event handlers
    for(j = 0, len = ref.length; j < len; j++){
        event = ref[j];
        facade[`on${event}`] = null;
    }
    facade.open = function(method, url, async, user, pass) {
        // Initailize empty XHR facade
        currentState = 0;
        hasError = false;
        transiting = false;
        request.headers = {
        };
        request.headerNames = {
        };
        request.status = 0;
        response = {
        };
        response.headers = {
        };
        request.method = method;
        request.url = url;
        request.async = async !== false;
        request.user = user;
        request.pass = pass;
        // openned facade xhr (not real xhr)
        setReadyState(1);
    };
    facade.send = function(body) {
        var hooks, k, l, len1, modk, process, ref1, send;
        ref1 = [
            "type",
            "timeout",
            "withCredentials"
        ];
        //read xhr settings before hooking
        for(l = 0, len1 = ref1.length; l < len1; l++){
            k = ref1[l];
            modk = k === "type" ? "responseType" : k;
            if (modk in facade) request[k] = facade[modk];
        }
        request.body = body;
        send = function() {
            var header, len2, m, ref2, ref3, value;
            //proxy all events from real xhr to facade
            proxyEvents(COMMON_EVENTS, xhr, facade);
            if (facade.upload) proxyEvents(COMMON_EVENTS.concat(UPLOAD_EVENTS), xhr.upload, facade.upload);
            //prepare request all at once
            transiting = true;
            //perform open
            xhr.open(request.method, request.url, request.async, request.user, request.pass);
            ref2 = [
                "type",
                "timeout",
                "withCredentials"
            ];
            //write xhr settings
            for(m = 0, len2 = ref2.length; m < len2; m++){
                k = ref2[m];
                modk = k === "type" ? "responseType" : k;
                if (k in request) xhr[modk] = request[k];
            }
            ref3 = request.headers;
            //insert headers
            for(header in ref3){
                value = ref3[header];
                if (header) xhr.setRequestHeader(header, value);
            }
            //extract real formdata
            if (request.body instanceof XHookFormData) request.body = request.body.fd;
            //real send!
            xhr.send(request.body);
        };
        hooks = xhook.listeners(BEFORE);
        //process hooks sequentially
        process = function() {
            var done, hook;
            if (!hooks.length) return send();
            //go to next hook OR optionally provide response
            done = function(userResponse) {
                //break chain - provide dummy response (readyState 4)
                if (typeof userResponse === "object" && (typeof userResponse.status === "number" || typeof response.status === "number")) {
                    mergeObjects(userResponse, response);
                    if (indexOf.call(userResponse, "data") < 0) userResponse.data = userResponse.response || userResponse.text;
                    setReadyState(4);
                    return;
                }
                //continue processing until no hooks left
                process();
            };
            //specifically provide headers (readyState 2)
            done.head = function(userResponse) {
                mergeObjects(userResponse, response);
                return setReadyState(2);
            };
            //specifically provide partial text (responseText  readyState 3)
            done.progress = function(userResponse) {
                mergeObjects(userResponse, response);
                return setReadyState(3);
            };
            hook = hooks.shift();
            //async or sync?
            if (hook.length === 1) return done(hook(request));
            else if (hook.length === 2 && request.async) //async handlers must use an async xhr
            return hook(request, done);
            else //skip async hook on sync requests
            return done();
        };
        //kick off
        process();
    };
    facade.abort = function() {
        status = ABORTED;
        if (transiting) xhr.abort(); //this will emit an 'abort' for us
        else facade[FIRE]("abort", {
        });
    };
    facade.setRequestHeader = function(header, value) {
        var lName, name;
        //the first header set is used for all future case-alternatives of 'name'
        lName = header != null ? header.toLowerCase() : void 0;
        name = request.headerNames[lName] = request.headerNames[lName] || header;
        //append header to any previous values
        if (request.headers[name]) value = request.headers[name] + ", " + value;
        request.headers[name] = value;
    };
    facade.getResponseHeader = function(header) {
        var name;
        name = header != null ? header.toLowerCase() : void 0;
        return nullify(response.headers[name]);
    };
    facade.getAllResponseHeaders = function() {
        return nullify(convertHeaders(response.headers));
    };
    //proxy call only when supported
    if (xhr.overrideMimeType) facade.overrideMimeType = function() {
        return xhr.overrideMimeType.apply(xhr, arguments);
    };
    //create emitter when supported
    if (xhr.upload) facade.upload = request.upload = EventEmitter();
    facade.UNSENT = 0;
    facade.OPENED = 1;
    facade.HEADERS_RECEIVED = 2;
    facade.LOADING = 3;
    facade.DONE = 4;
    // fill in default values for an empty XHR object according to the spec
    facade.response = "";
    facade.responseText = "";
    facade.responseXML = null;
    facade.readyState = 0;
    facade.statusText = "";
    return facade;
};
//patch Fetch
if (typeof WINDOW[FETCH] === "function") {
    NativeFetch = WINDOW[FETCH];
    xhook[FETCH] = NativeFetch;
    XHookFetchRequest = WINDOW[FETCH] = function(url, options = {
        headers: {
        }
    }) {
        var afterHooks, beforeHooks, request;
        options.url = url;
        request = null;
        beforeHooks = xhook.listeners(BEFORE);
        afterHooks = xhook.listeners(AFTER);
        return new Promise(function(resolve, reject) {
            var done, getRequest, processAfter, processBefore, send;
            getRequest = function() {
                if (options.body instanceof XHookFormData) options.body = options.body.fd;
                if (options.headers) options.headers = new Headers(options.headers);
                if (!request) request = new Request(options.url, options);
                return mergeObjects(options, request);
            };
            processAfter = function(response) {
                var hook;
                if (!afterHooks.length) return resolve(response);
                hook = afterHooks.shift();
                if (hook.length === 2) {
                    hook(getRequest(), response);
                    return processAfter(response);
                } else if (hook.length === 3) return hook(getRequest(), response, processAfter);
                else return processAfter(response);
            };
            done = function(userResponse) {
                var response;
                if (userResponse !== void 0) {
                    response = new Response(userResponse.body || userResponse.text, userResponse);
                    resolve(response);
                    processAfter(response);
                    return;
                }
                //continue processing until no hooks left
                processBefore();
            };
            processBefore = function() {
                var hook;
                if (!beforeHooks.length) {
                    send();
                    return;
                }
                hook = beforeHooks.shift();
                if (hook.length === 1) return done(hook(options));
                else if (hook.length === 2) return hook(getRequest(), done);
            };
            send = function() {
                return NativeFetch(getRequest()).then(function(response) {
                    return processAfter(response);
                }).catch(function(err) {
                    processAfter(err);
                    return reject(err);
                });
            };
            processBefore();
        });
    };
}
XHookHttpRequest.UNSENT = 0;
XHookHttpRequest.OPENED = 1;
XHookHttpRequest.HEADERS_RECEIVED = 2;
XHookHttpRequest.LOADING = 3;
XHookHttpRequest.DONE = 4;
if (typeof define === "function" && define.amd) define("xhook", [], function() {
    return xhook;
});
else if (typeof module === "object" && module.exports) module.exports = {
    xhook
};
else if (WINDOW) WINDOW.xhook = xhook;

},{}]},["2BYtI","6Rhrs"], "6Rhrs", "parcelRequire4e78")

//# sourceMappingURL=index.fa7c053f.js.map
