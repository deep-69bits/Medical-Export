import {
  useLocation_default
} from "/build/_shared/chunk-3JQVBZR2.js";
import {
  require_dist as require_dist2,
  require_dist2 as require_dist3
} from "/build/_shared/chunk-SEEC2NTB.js";
import {
  require_dist
} from "/build/_shared/chunk-CDCMOA3A.js";
import {
  Link_default
} from "/build/_shared/chunk-2AR2IWCB.js";
import {
  Price,
  searchProductToProductSlim_default
} from "/build/_shared/chunk-YGFEZCX4.js";
import "/build/_shared/chunk-K422RAHX.js";
import {
  useLocalCart
} from "/build/_shared/chunk-OU3A6Y3Z.js";
import "/build/_shared/chunk-L7NF5ES7.js";
import {
  AppContextProvider,
  buildLanguageMarketAwareLink,
  displayableLanguages,
  useAppContext
} from "/build/_shared/chunk-ZEXCMRG2.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import "/build/_shared/chunk-NPNOS4ZX.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-KJFXDTSR.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce;
  }
});

// node_modules/react-debounce-input/lib/Component.js
var require_Component = __commonJS({
  "node_modules/react-debounce-input/lib/Component.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DebounceInput = void 0;
    var _react = _interopRequireDefault(require_react());
    var _lodash = _interopRequireDefault(require_lodash());
    var _excluded = ["element", "onChange", "value", "minLength", "debounceTimeout", "forceNotifyByEnter", "forceNotifyOnBlur", "onKeyDown", "onBlur", "inputRef"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var DebounceInput2 = /* @__PURE__ */ function(_React$PureComponent) {
      _inherits(DebounceInput3, _React$PureComponent);
      var _super = _createSuper(DebounceInput3);
      function DebounceInput3(props) {
        var _this;
        _classCallCheck(this, DebounceInput3);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "onChange", function(event) {
          event.persist();
          var oldValue = _this.state.value;
          var minLength = _this.props.minLength;
          _this.setState({
            value: event.target.value
          }, function() {
            var value = _this.state.value;
            if (value.length >= minLength) {
              _this.notify(event);
              return;
            }
            if (oldValue.length > value.length) {
              _this.notify(_objectSpread(_objectSpread({}, event), {}, {
                target: _objectSpread(_objectSpread({}, event.target), {}, {
                  value: ""
                })
              }));
            }
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(event) {
          if (event.key === "Enter") {
            _this.forceNotify(event);
          }
          var onKeyDown = _this.props.onKeyDown;
          if (onKeyDown) {
            event.persist();
            onKeyDown(event);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function(event) {
          _this.forceNotify(event);
          var onBlur = _this.props.onBlur;
          if (onBlur) {
            event.persist();
            onBlur(event);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "createNotifier", function(debounceTimeout) {
          if (debounceTimeout < 0) {
            _this.notify = function() {
              return null;
            };
          } else if (debounceTimeout === 0) {
            _this.notify = _this.doNotify;
          } else {
            var debouncedChangeFunc = (0, _lodash["default"])(function(event) {
              _this.isDebouncing = false;
              _this.doNotify(event);
            }, debounceTimeout);
            _this.notify = function(event) {
              _this.isDebouncing = true;
              debouncedChangeFunc(event);
            };
            _this.flush = function() {
              return debouncedChangeFunc.flush();
            };
            _this.cancel = function() {
              _this.isDebouncing = false;
              debouncedChangeFunc.cancel();
            };
          }
        });
        _defineProperty(_assertThisInitialized(_this), "doNotify", function() {
          var onChange = _this.props.onChange;
          onChange.apply(void 0, arguments);
        });
        _defineProperty(_assertThisInitialized(_this), "forceNotify", function(event) {
          var debounceTimeout = _this.props.debounceTimeout;
          if (!_this.isDebouncing && debounceTimeout > 0) {
            return;
          }
          if (_this.cancel) {
            _this.cancel();
          }
          var value = _this.state.value;
          var minLength = _this.props.minLength;
          if (value.length >= minLength) {
            _this.doNotify(event);
          } else {
            _this.doNotify(_objectSpread(_objectSpread({}, event), {}, {
              target: _objectSpread(_objectSpread({}, event.target), {}, {
                value
              })
            }));
          }
        });
        _this.isDebouncing = false;
        _this.state = {
          value: typeof props.value === "undefined" || props.value === null ? "" : props.value
        };
        var _debounceTimeout2 = _this.props.debounceTimeout;
        _this.createNotifier(_debounceTimeout2);
        return _this;
      }
      _createClass(DebounceInput3, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.isDebouncing) {
            return;
          }
          var _this$props = this.props, value = _this$props.value, debounceTimeout = _this$props.debounceTimeout;
          var oldTimeout = prevProps.debounceTimeout, oldValue = prevProps.value;
          var stateValue = this.state.value;
          if (typeof value !== "undefined" && oldValue !== value && stateValue !== value) {
            this.setState({
              value
            });
          }
          if (debounceTimeout !== oldTimeout) {
            this.createNotifier(debounceTimeout);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.flush) {
            this.flush();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, element = _this$props2.element, _onChange = _this$props2.onChange, _value = _this$props2.value, _minLength = _this$props2.minLength, _debounceTimeout = _this$props2.debounceTimeout, forceNotifyByEnter = _this$props2.forceNotifyByEnter, forceNotifyOnBlur = _this$props2.forceNotifyOnBlur, onKeyDown = _this$props2.onKeyDown, onBlur = _this$props2.onBlur, inputRef = _this$props2.inputRef, props = _objectWithoutProperties(_this$props2, _excluded);
          var value = this.state.value;
          var maybeOnKeyDown;
          if (forceNotifyByEnter) {
            maybeOnKeyDown = {
              onKeyDown: this.onKeyDown
            };
          } else if (onKeyDown) {
            maybeOnKeyDown = {
              onKeyDown
            };
          } else {
            maybeOnKeyDown = {};
          }
          var maybeOnBlur;
          if (forceNotifyOnBlur) {
            maybeOnBlur = {
              onBlur: this.onBlur
            };
          } else if (onBlur) {
            maybeOnBlur = {
              onBlur
            };
          } else {
            maybeOnBlur = {};
          }
          var maybeRef = inputRef ? {
            ref: inputRef
          } : {};
          return /* @__PURE__ */ _react["default"].createElement(element, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, props), {}, {
            onChange: this.onChange,
            value
          }, maybeOnKeyDown), maybeOnBlur), maybeRef));
        }
      }]);
      return DebounceInput3;
    }(_react["default"].PureComponent);
    exports.DebounceInput = DebounceInput2;
    _defineProperty(DebounceInput2, "defaultProps", {
      element: "input",
      type: "text",
      onKeyDown: void 0,
      onBlur: void 0,
      value: void 0,
      minLength: 0,
      debounceTimeout: 100,
      forceNotifyByEnter: true,
      forceNotifyOnBlur: true,
      inputRef: void 0
    });
  }
});

// node_modules/react-debounce-input/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-debounce-input/lib/index.js"(exports, module) {
    "use strict";
    var _require = require_Component();
    var DebounceInput2 = _require.DebounceInput;
    DebounceInput2.DebounceInput = DebounceInput2;
    module.exports = DebounceInput2;
  }
});

// empty-module:./core/storefront.server
var require_storefront2 = __commonJS({
  "empty-module:./core/storefront.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/core/favicon.server
var require_favicon = __commonJS({
  "empty-module:~/core/favicon.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/core/services.server
var require_services = __commonJS({
  "empty-module:~/core/services.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./use-cases/fetchTranslations.server
var require_fetchTranslations = __commonJS({
  "empty-module:./use-cases/fetchTranslations.server"(exports, module) {
    module.exports = {};
  }
});

// src/assets/userIcon.svg
var userIcon_default = "/build/_assets/userIcon-IK2GULGQ.svg";

// src/ui/components/search/search-bar.tsx
var import_react = __toESM(require_react());

// src/assets/searchIcon.svg
var searchIcon_default = "/build/_assets/searchIcon-6EQLXFJK.svg";

// src/ui/components/search/search-bar.tsx
var import_react_debounce_input = __toESM(require_lib());
var import_reactjs_components = __toESM(require_dist());
var import_js_api_client = __toESM(require_dist2());

// src/use-cases/crystallize/read/search.ts
var search_default = async (apiClient, value, language) => {
  const data = await apiClient.searchApi(
    `#graphql
        query Search ($searchTerm: String!){
                        search(language:"${language}", first: 100, filter: { 
                            searchTerm: $searchTerm, 
                            type: PRODUCT, 
                            }){
                          edges {
                            node {
                              name
                              type
                              path
                              ... on Product {
                                matchingVariant {
                                  name
                                  price
                                  isDefault
                                  priceVariants {
                                    identifier
                                    name
                                    price
                                    currency
                                  }
                                  images {
                                    url
                                    variants {
                                      url
                                      width
                                      key
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
            `,
    {
      searchTerm: value
    }
  );
  return data.search.edges;
};

// src/ui/components/search/search-bar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SearchBar = () => {
  const ref = (0, import_react.useRef)(null);
  const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
  const [show, setShow] = (0, import_react.useState)(true);
  const [suggestions, setSuggestions] = (0, import_react.useState)([]);
  const { state: appContextState, path, _t } = useAppContext();
  const apiClient = (0, import_js_api_client.createClient)({ tenantIdentifier: appContextState.crystallize.tenantIdentifier });
  (0, import_react.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setShow(true);
    };
  }, [ref]);
  const handleChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    try {
      const rawResult = await search_default(apiClient, value, appContextState.language);
      setSuggestions(searchProductToProductSlim_default(rawResult));
    } catch (error) {
      console.error(error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.code == "Enter") {
      window.location.replace(path(`/search?q=${searchTerm}`));
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "xl:w-[340px] md:px-4 relative 270px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-30 flex items-center justify-between bg-grey h-10 rounded-full overflow-hidden focus-within:border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react_debounce_input.DebounceInput,
        {
          minLength: 2,
          placeholder: _t("search.placeholder"),
          debounceTimeout: 200,
          onChange: handleChange,
          className: "bg-grey rounded-full overflow-hidden focus:border-textBlack outline-none px-6 w-full placeholder:text-[14px] placeholder:italic ",
          onKeyDown: handleKeyPress,
          "aria-label": "Search"
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/search/search-bar.tsx",
          lineNumber: 54,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link_default,
        {
          to: path(`/search?q=${searchTerm}`),
          className: "w-10 p-4 h-full text-[#fff] flex justify-center items-center rounded-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `${searchIcon_default}`, alt: "search icon", width: "15", height: "15" }, void 0, false, {
            fileName: "src/ui/components/search/search-bar.tsx",
            lineNumber: 67,
            columnNumber: 21
          }, this)
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/search/search-bar.tsx",
          lineNumber: 63,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/ui/components/search/search-bar.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    suggestions.length > 0 && show ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        ref,
        className: "absolute rounded-xl bg-[#fff] -top-5 w-full pt-20 pb-2 border border-[#dfdfdf] left-0 overflow-y-scroll shadow-sm z-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-h-[400px] overflow-y-scroll", children: suggestions.map((suggestion, index) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link_default,
            {
              to: path(suggestion.path),
              onClick: () => {
                setSuggestions([]);
              },
              prefetch: "intent",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1 px-4 bg-[#fff] flex gap-2 items-center hover:bg-grey2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[25px] h-[35px] img-container rounded-sm img-cover border border-[#dfdfdf]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_reactjs_components.Image,
                  {
                    ...(_a = suggestion.variant) == null ? void 0 : _a.images[0],
                    sizes: "100px",
                    fallbackAlt: suggestion.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 87,
                    columnNumber: 45
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/ui/components/search/search-bar.tsx",
                  lineNumber: 86,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between w-full", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm ", children: suggestion.name }, void 0, false, {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 94,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { variant: suggestion.variant, size: "small" }, void 0, false, {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 96,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 95,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/ui/components/search/search-bar.tsx",
                  lineNumber: 93,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "src/ui/components/search/search-bar.tsx",
                lineNumber: 85,
                columnNumber: 37
              }, this)
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/search/search-bar.tsx",
              lineNumber: 78,
              columnNumber: 33
            },
            this
          ) }, index, false, {
            fileName: "src/ui/components/search/search-bar.tsx",
            lineNumber: 77,
            columnNumber: 29
          }, this);
        }) }, void 0, false, {
          fileName: "src/ui/components/search/search-bar.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/search/search-bar.tsx",
        lineNumber: 71,
        columnNumber: 17
      },
      this
    ) : null
  ] }, void 0, true, {
    fileName: "src/ui/components/search/search-bar.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this);
};

// src/assets/basketIcon.svg
var basketIcon_default = "/build/_assets/basketIcon-DXTNOZGC.svg";

// src/ui/components/layout/basket-button.tsx
var import_reactjs_hooks = __toESM(require_dist3());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var BasketButton = ({}) => {
  const { cart, isEmpty } = useLocalCart();
  const { path } = useAppContext();
  let quantity = 0;
  if (!isEmpty()) {
    quantity = Object.keys(cart.items).reduce((acc, key) => acc + cart.items[key].quantity, 0);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link_default, { to: path("/cart"), className: "p-2 rounded-md hover:bg-[#efefef] relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "w-[30px] h-[30px]", src: `${basketIcon_default}`, width: "25", height: "25", alt: "Basket icon" }, void 0, false, {
      fileName: "src/ui/components/layout/basket-button.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute -top-2 -right-2 flex text-center items-center border-[4px] border-[#fff] justify-center rounded-sm bg-[#efefef] w-[24px] h-[24px]   text-600 text-[10px]", children: quantity }, void 0, false, {
      fileName: "src/ui/components/layout/basket-button.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/components/layout/basket-button.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/layout/basket-button.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
};

// src/ui/components/layout/topic-navigation.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var TopicNavigation = ({ navigation }) => {
  const { path } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: navigation.map((topic) => {
    var _a;
    const numberOfTopics = topic.children.length;
    const calculateColumns = numberOfTopics / 8;
    const numberOfCols = calculateColumns <= 1 ? 1 : Math.round(calculateColumns);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-anchor ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-lg lg:text-[16px] block hover:underline", children: topic.name }, void 0, false, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 15,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden lg:flex text-[11px] caret", children: "\u25BC" }, void 0, false, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 16,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "nav-dropdown", style: { gridTemplateColumns: `repeat(${numberOfCols}, 1fr)` }, children: (_a = topic.children) == null ? void 0 : _a.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link_default, { to: path(child.path), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "hover:bg-grey text h-full text-sm w-full", children: child.name }, void 0, false, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 20,
        columnNumber: 37
      }, this) }, child.path, false, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 19,
        columnNumber: 33
      }, this)) }, void 0, false, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 17,
        columnNumber: 25
      }, this)
    ] }, topic.path, true, {
      fileName: "src/ui/components/layout/topic-navigation.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this);
  }) }, void 0, false, {
    fileName: "src/ui/components/layout/topic-navigation.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
};

// src/ui/components/layout/header.tsx
var import_react2 = __toESM(require_react());
var import_reactjs_components3 = __toESM(require_dist());

// src/ui/lib/tenant-logo.tsx
var import_reactjs_components2 = __toESM(require_dist());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function TenantLogo({ identifier, logo }) {
  if (logo.key === "superfast-originated-logo") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: logo.url,
        width: "150",
        height: "30",
        alt: identifier + ` logo`,
        style: {
          width: "auto",
          height: "100%"
        },
        loading: "eager"
      },
      void 0,
      false,
      {
        fileName: "src/ui/lib/tenant-logo.tsx",
        lineNumber: 6,
        columnNumber: 13
      },
      this
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_reactjs_components2.Image,
    {
      ...logo,
      sizes: "150px",
      alt: identifier + ` logo`,
      className: "w-auto h-full",
      width: 170,
      height: 30,
      style: {
        width: "auto",
        height: "100%"
      },
      loading: "eager"
    },
    void 0,
    false,
    {
      fileName: "src/ui/lib/tenant-logo.tsx",
      lineNumber: 20,
      columnNumber: 9
    },
    this
  );
}

// src/ui/components/layout/header.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var Header = ({ navigation }) => {
  const { state: appContextState, dispatch: appContextDispatch, path } = useAppContext();
  let checkoutFlow = ["/cart", "/checkout", "/confirmation"];
  let [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  let location = useLocation_default();
  let paths = [
    { path: "/cart", name: "Cart" },
    { path: "/checkout", name: "Checkout" },
    { path: "/confirmation", name: "Confirmation" }
  ];
  (0, import_react2.useEffect)(() => {
    setIsOpen(false);
  }, [location.pathname]);
  (0, import_react2.useEffect)(() => {
    if (appContextState.latestAddedCartItems.length === 0) {
      return;
    }
    let timeout;
    setTimeout(() => {
      appContextDispatch.resetLastAddedItems();
    }, 3e3);
    return () => clearTimeout(timeout);
  }, [appContextState.latestAddedCartItems]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "2xl w-full lg:p-8 lg:px-6", children: [
    appContextState.latestAddedCartItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-[#dfdfdf] border rounded-md shadow fixed max-w-full sm:top-2 sm:right-2 bg-[#fff]  z-[60]  p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-bold text-md mb-3 pb-2", children: "Added product(s) to cart" }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this),
      appContextState.latestAddedCartItems.map((item, index) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex p-3 mt-1 items-center bg-grey2 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-[35px] max-h-[50px] img-container img-contain", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_reactjs_components3.Image, { ...(_a = item.images) == null ? void 0 : _a[0], sizes: "100px", fallbackAlt: item.name }, void 0, false, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 56,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 55,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm", children: item.name }, void 0, false, {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 59,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-sm font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price, { variant: item, size: "small" }, void 0, false, {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 61,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 60,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 58,
            columnNumber: 33
          }, this)
        ] }, index, true, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 54,
          columnNumber: 29
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-3 mt-3 items-center border-t pt-2 border-t-[#dfdfdf]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "bg-grey text-sm text-[#000] font-bold py-2 px-4 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link_default, { to: path("/cart"), children: "Go to cart" }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 69,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 68,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "lg:mb-5 mb-20", children: checkoutFlow.includes(location.pathname) ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("nav", { className: "flex container px-4 mx-auto gap-20 flex-auto items-center justify-between mb-5 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-auto justify-between items-center w-1/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link_default, { to: path("/"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-h-[80px] h-[30px] max-w-[100%] img-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        TenantLogo,
        {
          logo: appContextState.logo,
          identifier: appContextState.crystallize.tenantIdentifier
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 80,
          columnNumber: 37
        },
        this
      ) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 79,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 78,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex w-3/4 gap-5 justify-end", children: paths.map((urlPath) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "div",
        {
          className: `w-1/4 border-b-4 pb-2 ${location.pathname === urlPath.path ? "border-b-[#000] text-[#000]" : "border-b-grey5 text-grey5"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link_default, { to: path(urlPath.path), prefetch: "intent", className: "text-sm font-medium", children: urlPath.name }, void 0, false, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 97,
            columnNumber: 37
          }, this)
        },
        urlPath.path,
        false,
        {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 89,
          columnNumber: 33
        },
        this
      )) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 87,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 76,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "justify-between-full fixed z-40 bg-[#fff] w-full left-0 top-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-auto items-center mx-auto px-2 xl:container pt-3 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex mx-auto flex-auto justify-between items-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link_default, { to: path("/"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-h-[80px] h-[30px] max-w-[100%] img-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          TenantLogo,
          {
            logo: appContextState.logo,
            identifier: appContextState.crystallize.tenantIdentifier
          },
          void 0,
          false,
          {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 111,
            columnNumber: 45
          },
          this
        ) }, void 0, false, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 110,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 109,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            className: `flex gap-10 lg:flex lg:items-center lg:flex-row flex-col lg:w-auto lg:h-auto lg:relative lg:px-0 lg:py-0 lg:mt-0 lg:top-0 ${isOpen ? "block" : "hidden"} top-10 mt-5 bg-[#fff] w-full right-0 left-0 z-50 h-screen fixed left-0 bottom-0 px-10 py-10`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SearchBar, {}, void 0, false, {
                fileName: "src/ui/components/layout/header.tsx",
                lineNumber: 122,
                columnNumber: 41
              }, this),
              navigation.folders.filter((item) => {
                return item.type === "folder" && item.children.length >= 0 && !item.name.startsWith("_");
              }).map((item) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  Link_default,
                  {
                    to: path(item.path),
                    prefetch: "intent",
                    className: "hover:underline text-[1.2rem]",
                    children: item.name
                  },
                  item.path,
                  false,
                  {
                    fileName: "src/ui/components/layout/header.tsx",
                    lineNumber: 133,
                    columnNumber: 53
                  },
                  this
                );
              }),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TopicNavigation, { navigation: navigation.topics }, void 0, false, {
                fileName: "src/ui/components/layout/header.tsx",
                lineNumber: 143,
                columnNumber: 41
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 117,
            columnNumber: 37
          },
          this
        )
      ] }, void 0, true, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 108,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 107,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-auto items-center justify-end h-[40px] w-[100px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link_default, { to: path("/orders"), className: "p-2 rounded-md hover:bg-[#efefef]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "img",
          {
            className: "w-[30px] h-[30px]",
            src: `${userIcon_default}`,
            width: "25",
            height: "25",
            alt: "User icon"
          },
          void 0,
          false,
          {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 150,
            columnNumber: 37
          },
          this
        ) }, void 0, false, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 149,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BasketButton, {}, void 0, false, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 158,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 148,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "z-50 p-[10px] h-[40px] text-center rounded-md cursor-pointer hover:bg-[#efefef] lg:hidden block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          type: "button",
          className: "focus:outline-none",
          "aria-controls": "mobile-menu",
          "aria-label": "Mobile Menu",
          title: "Mobile Menu",
          "aria-expanded": "false",
          children: !isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "svg",
            {
              className: "block h-6 w-6",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                },
                void 0,
                false,
                {
                  fileName: "src/ui/components/layout/header.tsx",
                  lineNumber: 179,
                  columnNumber: 45
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 171,
              columnNumber: 41
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "svg",
            {
              className: "block h-6 w-6",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                },
                void 0,
                false,
                {
                  fileName: "src/ui/components/layout/header.tsx",
                  lineNumber: 195,
                  columnNumber: 45
                },
                this
              )
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 187,
              columnNumber: 41
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 161,
          columnNumber: 33
        },
        this
      ) }, void 0, false, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 160,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 106,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 105,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/layout/header.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
};

// src/assets/crystallizeLogo.svg
var crystallizeLogo_default = "/build/_assets/crystallizeLogo-FXYQ5ZN6.svg";

// src/ui/components/layout/footer.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var Footer = ({ footer }) => {
  const { state: appContextState } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("footer", { className: "2xl w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto flex items-center  mb-5 border-t border-grey pt-3 justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: `${crystallizeLogo_default}`, alt: "Crystallize logo", width: "38", height: "31" }, void 0, false, {
      fileName: "src/ui/components/layout/footer.tsx",
      lineNumber: 19,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      "Powered by",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "https://crystallize.com", className: "underline", children: "Crystallize" }, void 0, false, {
        fileName: "src/ui/components/layout/footer.tsx",
        lineNumber: 22,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/layout/footer.tsx",
      lineNumber: 20,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 18,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 17,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
};

// src/styles/tailwind.default.css
var tailwind_default_default = "/build/_assets/tailwind.default-H5WLYLV2.css";

// src/styles/tailwind.dark.css
var tailwind_dark_default = "/build/_assets/tailwind.dark-NGHWWJP3.css";

// src/styles/tailwind.rainbow.css
var tailwind_rainbow_default = "/build/_assets/tailwind.rainbow-65IBPKKE.css";

// src/root.tsx
var import_storefront2 = __toESM(require_storefront2());
var import_reactjs_hooks2 = __toESM(require_dist3());

// src/routes/$langstore/favicon/$size[.png].ts
var import_storefront = __toESM(require_storefront());
var import_favicon = __toESM(require_favicon());
var FAVICON_VARIANTS = {
  "16": {
    size: 16,
    rel: "icon",
    extra: {}
  },
  "32": {
    size: 32,
    rel: "icon",
    extra: {}
  },
  "apple-touch-icon": {
    size: 180,
    rel: "apple-touch-icon",
    extra: {}
  },
  "safari-pinned-tab": {
    size: 16,
    rel: "mask-icon",
    extra: {
      color: "#5bbad5"
    }
  }
};

// src/root.tsx
var import_services = __toESM(require_services());
var import_fetchTranslations = __toESM(require_fetchTranslations());

// src/ui/components/error.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var ErrorComponent = ({ text = "Not Found", code = 404 }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "flex items-center h-screen p-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container flex flex-col items-center justify-center px-5 mx-auto my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "mb-8 font-extrabold text-9xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "sr-only", children: text }, void 0, false, {
        fileName: "src/ui/components/error.tsx",
        lineNumber: 7,
        columnNumber: 25
      }, this),
      code
    ] }, void 0, true, {
      fileName: "src/ui/components/error.tsx",
      lineNumber: 6,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-2xl font-semibold md:text-3xl mb-10", children: [
      "Sorry, we couldn't ",
      code === 404 ? "find" : "load",
      " this page."
    ] }, void 0, true, {
      fileName: "src/ui/components/error.tsx",
      lineNumber: 10,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { rel: "noopener noreferrer", href: "/", className: "px-8 py-3 font-semibold rounded bg-buttonBg2", children: "Back to homepage" }, void 0, false, {
      fileName: "src/ui/components/error.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/error.tsx",
    lineNumber: 5,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "src/ui/components/error.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/error.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
};

// src/root.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    charset: "utf-8",
    title: `Crystallize - Superfast`,
    viewport: "width=device-width,initial-scale=1"
  };
};
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default_default
    }
  ];
};
function getTailwindThemeForConfig(theme) {
  switch (theme) {
    case "dark":
      return tailwind_dark_default;
    case "rainbow":
      return tailwind_rainbow_default;
    default:
      return tailwind_default_default;
  }
}
var Document = ({ children }) => {
  const { isHTTPS, frontConfiguration, translations, baseUrl } = useLoaderData();
  let location = useLocation();
  const path = "/" + location.pathname.split("/").slice(2).join("/");
  if (typeof window !== "undefined") {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("/sw.js").then(
        function(registration) {
          console.log("ServiceWorker registration successful with scope: ", registration.scope);
        },
        function(err) {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_reactjs_hooks2.CrystallizeProvider,
    {
      language: frontConfiguration.language,
      tenantIdentifier: frontConfiguration.crystallize.tenantIdentifier,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AppContextProvider, { initialState: frontConfiguration, translations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { lang: frontConfiguration.language, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 168,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 169,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "apple-mobile-web-app-capable", content: "yes" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 170,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "mobile-web-app-capable", content: "yes" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 171,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Favicons, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 172,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("link", { rel: "manifest", href: "/manifest.json" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 173,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "msapplication-TileColor", content: "#da532c" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 174,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("meta", { name: "theme-color", content: "#ffffff" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 175,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("link", { href: `${baseUrl}${location == null ? void 0 : location.pathname}`, rel: "canonical" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 176,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 177,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Links, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 178,
            columnNumber: 25
          }, this),
          displayableLanguages.map((lang) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "link",
            {
              rel: "alternate",
              hrefLang: lang.code,
              href: `${baseUrl}${buildLanguageMarketAwareLink(path, lang.code)}`
            },
            lang.code,
            false,
            {
              fileName: "src/root.tsx",
              lineNumber: 180,
              columnNumber: 29
            },
            this
          )),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("script", { suppressHydrationWarning: true, type: "text/css", children: '*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{margin:0;line-height:inherit}h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}figure,h2,p{margin:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (max-width:1024px){#grid-item{grid-column:span 3!important}}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mt-4{margin-top:1rem}.flex{display:flex}.h-80{height:20rem}.h-full{height:100%}.h-5{height:1.25rem}.w-full{width:100%}.w-60{width:15rem}.w-5{width:1.25rem}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-5{gap:1.25rem}.gap-1{gap:.25rem}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:1000px}.rounded-r-xl{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}.bg-primary{--tw-bg-opacity:1;background-color:rgb(255 247 240/var(--tw-bg-opacity))}.bg-background1{--tw-bg-opacity:1;background-color:rgb(240 239 235/var(--tw-bg-opacity))}.bg-grey{background-color:#00000008}.bg-text{--tw-bg-opacity:1;background-color:rgb(55 53 103/var(--tw-bg-opacity))}.p-8{padding:2rem}.p-5{padding:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-primary{--tw-text-opacity:1;color:rgb(255 247 240/var(--tw-text-opacity))}' }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 187,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("script", { defer: true, src: "https://pim.crystallize.com/static/frontend-preview-listener.js" }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 192,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("link", { rel: "stylesheet", href: getTailwindThemeForConfig(frontConfiguration.theme) }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 193,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/root.tsx",
          lineNumber: 167,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { "data-theme": frontConfiguration.theme, children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 197,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 198,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LiveReload, { port: isHTTPS ? 443 : void 0 }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 199,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/root.tsx",
          lineNumber: 195,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 166,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "src/root.tsx",
      lineNumber: 161,
      columnNumber: 9
    },
    this
  );
};
var Favicons = () => {
  const { path } = useAppContext();
  const linkTags = Object.entries(FAVICON_VARIANTS).map(([variant, meta2]) => {
    var _a;
    const extra = (_a = meta2.extra) != null ? _a : {};
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "link",
      {
        rel: meta2.rel,
        sizes: `${meta2.size}x${meta2.size}`,
        href: path(`/favicon/${variant}.png`),
        ...extra
      },
      `/favicon/${variant}.png`,
      false,
      {
        fileName: "src/root.tsx",
        lineNumber: 212,
        columnNumber: 13
      },
      this
    );
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: linkTags }, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 222,
    columnNumber: 12
  }, this);
};
var Layout = ({ children }) => {
  const { navigation, footer } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Header, { navigation }, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 230,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children }, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 231,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Footer, { footer }, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 232,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 229,
    columnNumber: 9
  }, this);
};
var root_default = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 241,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 240,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 239,
    columnNumber: 9
  }, this);
};
var ErrorBoundary = ({ error }) => {
  console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("title", { children: "Oh no!" }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 252,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 253,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Links, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 254,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/root.tsx",
      lineNumber: 251,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ErrorComponent, { text: error.message, code: 500 }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 257,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 259,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/root.tsx",
      lineNumber: 256,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 250,
    columnNumber: 9
  }, this);
};
var CatchBoundary = () => {
  const caught = useCatch();
  if (caught.data !== null) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ErrorComponent, { text: caught.statusText, code: caught.status }, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 271,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 270,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 269,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("title", { children: "Oh no!" }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 280,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 281,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Links, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 282,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/root.tsx",
      lineNumber: 279,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ErrorComponent, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 285,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 286,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/root.tsx",
      lineNumber: 284,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 278,
    columnNumber: 9
  }, this);
};
export {
  CatchBoundary,
  ErrorBoundary,
  root_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-XHWDG4NK.js.map
