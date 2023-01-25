import {
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __commonJS
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/@rehooks/local-storage/lib/is-browser.js
var require_is_browser = __commonJS({
  "node_modules/@rehooks/local-storage/lib/is-browser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = void 0;
    exports.isBrowser = function() {
      return typeof window !== "undefined" && typeof window.document !== "undefined";
    };
  }
});

// node_modules/@rehooks/local-storage/lib/storage.js
var require_storage = __commonJS({
  "node_modules/@rehooks/local-storage/lib/storage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.storage = exports.MemoryStorageProxy = exports.LocalStorageProxy = exports.localStorageAvailable = void 0;
    var is_browser_1 = require_is_browser();
    function localStorageAvailable() {
      try {
        var x = "@rehooks/local-storage:" + new Date().toISOString();
        localStorage.setItem(x, x);
        localStorage.removeItem(x);
        return true;
      } catch (e) {
        return is_browser_1.isBrowser() && e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") && (localStorage && localStorage.length !== 0);
      }
    }
    exports.localStorageAvailable = localStorageAvailable;
    var LocalStorageProxy = function() {
      function LocalStorageProxy2() {
      }
      LocalStorageProxy2.prototype.getItem = function(key) {
        return localStorage.getItem(key);
      };
      LocalStorageProxy2.prototype.setItem = function(key, value) {
        localStorage.setItem(key, value);
      };
      LocalStorageProxy2.prototype.removeItem = function(key) {
        localStorage.removeItem(key);
      };
      return LocalStorageProxy2;
    }();
    exports.LocalStorageProxy = LocalStorageProxy;
    var MemoryStorageProxy = function() {
      function MemoryStorageProxy2() {
        this._memoryStorage = /* @__PURE__ */ new Map();
      }
      MemoryStorageProxy2.prototype.getItem = function(key) {
        var _a;
        return (_a = this._memoryStorage.get(key)) !== null && _a !== void 0 ? _a : null;
      };
      MemoryStorageProxy2.prototype.setItem = function(key, value) {
        this._memoryStorage.set(key, value);
      };
      MemoryStorageProxy2.prototype.removeItem = function(key) {
        this._memoryStorage.delete(key);
      };
      return MemoryStorageProxy2;
    }();
    exports.MemoryStorageProxy = MemoryStorageProxy;
    var proxyStorageFrom = function(isAvailable) {
      return isAvailable ? new LocalStorageProxy() : new MemoryStorageProxy();
    };
    exports.storage = proxyStorageFrom(localStorageAvailable());
  }
});

// node_modules/@rehooks/local-storage/lib/local-storage-events.js
var require_local_storage_events = __commonJS({
  "node_modules/@rehooks/local-storage/lib/local-storage-events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deleteFromStorage = exports.writeStorage = exports.isTypeOfLocalStorageChanged = exports.LOCAL_STORAGE_CHANGE_EVENT_NAME = void 0;
    var storage_1 = require_storage();
    var is_browser_1 = require_is_browser();
    exports.LOCAL_STORAGE_CHANGE_EVENT_NAME = "onLocalStorageChange";
    (function() {
      if (!is_browser_1.isBrowser()) {
        return;
      }
      if (typeof globalThis.window.CustomEvent === "function") {
        return;
      }
      function CustomEvent2(typeArg, params) {
        var _a, _b;
        if (params === void 0) {
          params = { bubbles: false, cancelable: false };
        }
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(typeArg, (_a = params === null || params === void 0 ? void 0 : params.bubbles) !== null && _a !== void 0 ? _a : false, (_b = params === null || params === void 0 ? void 0 : params.cancelable) !== null && _b !== void 0 ? _b : false, params === null || params === void 0 ? void 0 : params.detail);
        return evt;
      }
      window.CustomEvent = CustomEvent2;
    })();
    function isTypeOfLocalStorageChanged(evt) {
      return !!evt && evt.type === exports.LOCAL_STORAGE_CHANGE_EVENT_NAME;
    }
    exports.isTypeOfLocalStorageChanged = isTypeOfLocalStorageChanged;
    function writeStorage(key, value) {
      if (!is_browser_1.isBrowser()) {
        return;
      }
      try {
        storage_1.storage.setItem(key, typeof value === "object" ? JSON.stringify(value) : "" + value);
        window.dispatchEvent(new CustomEvent(exports.LOCAL_STORAGE_CHANGE_EVENT_NAME, {
          detail: { key, value }
        }));
      } catch (err) {
        if (err instanceof TypeError && err.message.includes("circular structure")) {
          throw new TypeError("The object that was given to the writeStorage function has circular references.\nFor more information, check here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value");
        }
        throw err;
      }
    }
    exports.writeStorage = writeStorage;
    function deleteFromStorage(key) {
      if (!is_browser_1.isBrowser()) {
        return;
      }
      storage_1.storage.removeItem(key);
      window.dispatchEvent(new CustomEvent(exports.LOCAL_STORAGE_CHANGE_EVENT_NAME, {
        detail: { key, value: null }
      }));
    }
    exports.deleteFromStorage = deleteFromStorage;
  }
});

// node_modules/@rehooks/local-storage/lib/use-localstorage.js
var require_use_localstorage = __commonJS({
  "node_modules/@rehooks/local-storage/lib/use-localstorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useLocalStorage = void 0;
    var local_storage_events_1 = require_local_storage_events();
    var is_browser_1 = require_is_browser();
    var storage_1 = require_storage();
    var react_1 = require_react();
    function tryParse(value) {
      try {
        return JSON.parse(value);
      } catch (_a) {
        return value;
      }
    }
    function useLocalStorage(key, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }
      var _a = react_1.useState(storage_1.storage.getItem(key) === null ? defaultValue : tryParse(storage_1.storage.getItem(key))), localState = _a[0], updateLocalState = _a[1];
      var onLocalStorageChange = react_1.useCallback(function(event) {
        if (local_storage_events_1.isTypeOfLocalStorageChanged(event)) {
          if (event.detail.key === key) {
            updateLocalState(event.detail.value);
          }
        } else {
          if (event.key === key) {
            updateLocalState(event.newValue === null ? null : tryParse(event.newValue));
          }
        }
      }, [updateLocalState, key]);
      react_1.useEffect(function() {
        if (!is_browser_1.isBrowser()) {
          return;
        }
        var listener = function(e) {
          onLocalStorageChange(e);
        };
        window.addEventListener(local_storage_events_1.LOCAL_STORAGE_CHANGE_EVENT_NAME, listener);
        window.addEventListener("storage", listener);
        if (storage_1.storage.getItem(key) === null && defaultValue !== null) {
          local_storage_events_1.writeStorage(key, defaultValue);
        }
        return function() {
          window.removeEventListener(local_storage_events_1.LOCAL_STORAGE_CHANGE_EVENT_NAME, listener);
          window.removeEventListener("storage", listener);
        };
      }, [key, defaultValue, onLocalStorageChange]);
      var writeState = react_1.useCallback(function(value) {
        return local_storage_events_1.writeStorage(key, value);
      }, [key]);
      var deleteState = react_1.useCallback(function() {
        return local_storage_events_1.deleteFromStorage(key);
      }, [key]);
      var state = localState !== null && localState !== void 0 ? localState : defaultValue;
      return [state, writeState, deleteState];
    }
    exports.useLocalStorage = useLocalStorage;
  }
});

// node_modules/@rehooks/local-storage/lib/index.js
var require_lib = __commonJS({
  "node_modules/@rehooks/local-storage/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useLocalStorage = void 0;
    var use_localstorage_1 = require_use_localstorage();
    Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function() {
      return use_localstorage_1.useLocalStorage;
    } });
    var local_storage_events_1 = require_local_storage_events();
    Object.defineProperty(exports, "writeStorage", { enumerable: true, get: function() {
      return local_storage_events_1.writeStorage;
    } });
    Object.defineProperty(exports, "deleteFromStorage", { enumerable: true, get: function() {
      return local_storage_events_1.deleteFromStorage;
    } });
    exports.default = use_localstorage_1.useLocalStorage;
  }
});

export {
  require_lib
};
//# sourceMappingURL=/build/_shared/chunk-L7NF5ES7.js.map
