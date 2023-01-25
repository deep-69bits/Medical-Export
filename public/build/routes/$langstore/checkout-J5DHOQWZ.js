import {
  require_privateJson
} from "/build/_shared/chunk-3Q52FFO7.js";
import {
  useRemoteCart
} from "/build/_shared/chunk-LT4WDPBO.js";
import {
  Input,
  MagickLoginForm,
  require_authentication,
  useAuth
} from "/build/_shared/chunk-CDMXKC5N.js";
import "/build/_shared/chunk-ME52MYFA.js";
import {
  useNavigate_default
} from "/build/_shared/chunk-Q2CTFZ5R.js";
import {
  ServiceAPI
} from "/build/_shared/chunk-TCD3P7AQ.js";
import "/build/_shared/chunk-VLCTGKYL.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-NS5SBDDR.js";
import {
  CartItemPrice,
  require_image
} from "/build/_shared/chunk-HET3URE2.js";
import {
  Price
} from "/build/_shared/chunk-H52OJRFM.js";
import {
  useLocalCart
} from "/build/_shared/chunk-GFMYPENJ.js";
import {
  require_lib
} from "/build/_shared/chunk-4TFNJEYN.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js
var require_react_stripe_umd = __commonJS({
  "node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react()) : typeof define === "function" && define.amd ? define(["exports", "react"], factory) : (global = global || self, factory(global.ReactStripe = {}, global.React));
    })(exports, function(exports2, React) {
      "use strict";
      React = React && Object.prototype.hasOwnProperty.call(React, "default") ? React["default"] : React;
      function createCommonjsModule(fn, module2) {
        return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
      }
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      var ReactPropTypesSecret_1 = ReactPropTypesSecret;
      function emptyFunction() {
      }
      function emptyFunctionWithReset() {
      }
      emptyFunctionWithReset.resetWarningCache = emptyFunction;
      var factoryWithThrowingShims = function() {
        function shim(props, propName, componentName, location2, propFullName, secret) {
          if (secret === ReactPropTypesSecret_1) {
            return;
          }
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = "Invariant Violation";
          throw err;
        }
        shim.isRequired = shim;
        function getShim() {
          return shim;
        }
        var ReactPropTypes = {
          array: shim,
          bool: shim,
          func: shim,
          number: shim,
          object: shim,
          string: shim,
          symbol: shim,
          any: shim,
          arrayOf: getShim,
          element: shim,
          elementType: shim,
          instanceOf: getShim,
          node: shim,
          objectOf: getShim,
          oneOf: getShim,
          oneOfType: getShim,
          shape: getShim,
          exact: getShim,
          checkPropTypes: emptyFunctionWithReset,
          resetWarningCache: emptyFunction
        };
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
      var propTypes = createCommonjsModule(function(module2) {
        {
          module2.exports = factoryWithThrowingShims();
        }
      });
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var usePrevious = function usePrevious2(value) {
        var ref = React.useRef(value);
        React.useEffect(function() {
          ref.current = value;
        }, [value]);
        return ref.current;
      };
      var isUnknownObject = function isUnknownObject2(raw) {
        return raw !== null && _typeof(raw) === "object";
      };
      var isPromise = function isPromise2(raw) {
        return isUnknownObject(raw) && typeof raw.then === "function";
      };
      var isStripe = function isStripe2(raw) {
        return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
      };
      var PLAIN_OBJECT_STR = "[object Object]";
      var isEqual = function isEqual2(left, right) {
        if (!isUnknownObject(left) || !isUnknownObject(right)) {
          return left === right;
        }
        var leftArray = Array.isArray(left);
        var rightArray = Array.isArray(right);
        if (leftArray !== rightArray)
          return false;
        var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
        var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
        if (leftPlainObject !== rightPlainObject)
          return false;
        if (!leftPlainObject && !leftArray)
          return left === right;
        var leftKeys = Object.keys(left);
        var rightKeys = Object.keys(right);
        if (leftKeys.length !== rightKeys.length)
          return false;
        var keySet = {};
        for (var i = 0; i < leftKeys.length; i += 1) {
          keySet[leftKeys[i]] = true;
        }
        for (var _i = 0; _i < rightKeys.length; _i += 1) {
          keySet[rightKeys[_i]] = true;
        }
        var allKeys = Object.keys(keySet);
        if (allKeys.length !== leftKeys.length) {
          return false;
        }
        var l = left;
        var r = right;
        var pred = function pred2(key) {
          return isEqual2(l[key], r[key]);
        };
        return allKeys.every(pred);
      };
      var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
        if (!isUnknownObject(options)) {
          return null;
        }
        return Object.keys(options).reduce(function(newOptions, key) {
          var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
          if (immutableKeys.includes(key)) {
            if (isUpdated) {
              console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
            }
            return newOptions;
          }
          if (!isUpdated) {
            return newOptions;
          }
          return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
        }, null);
      };
      var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
      var validateStripe = function validateStripe2(maybeStripe) {
        if (maybeStripe === null || isStripe(maybeStripe)) {
          return maybeStripe;
        }
        throw new Error(INVALID_STRIPE_ERROR);
      };
      var parseStripeProp = function parseStripeProp2(raw) {
        if (isPromise(raw)) {
          return {
            tag: "async",
            stripePromise: Promise.resolve(raw).then(validateStripe)
          };
        }
        var stripe = validateStripe(raw);
        if (stripe === null) {
          return {
            tag: "empty"
          };
        }
        return {
          tag: "sync",
          stripe
        };
      };
      var ElementsContext = /* @__PURE__ */ React.createContext(null);
      ElementsContext.displayName = "ElementsContext";
      var parseElementsContext = function parseElementsContext2(ctx, useCase) {
        if (!ctx) {
          throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
        }
        return ctx;
      };
      var CartElementContext = /* @__PURE__ */ React.createContext(null);
      CartElementContext.displayName = "CartElementContext";
      var parseCartElementContext = function parseCartElementContext2(ctx, useCase) {
        if (!ctx) {
          throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
        }
        return ctx;
      };
      var Elements2 = function Elements3(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var parsed = React.useMemo(function() {
          return parseStripeProp(rawStripeProp);
        }, [rawStripeProp]);
        var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), cart = _React$useState2[0], setCart = _React$useState2[1];
        var _React$useState3 = React.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), cartState = _React$useState4[0], setCartState = _React$useState4[1];
        var _React$useState5 = React.useState(function() {
          return {
            stripe: parsed.tag === "sync" ? parsed.stripe : null,
            elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
          };
        }), _React$useState6 = _slicedToArray(_React$useState5, 2), ctx = _React$useState6[0], setContext = _React$useState6[1];
        React.useEffect(function() {
          var isMounted = true;
          var safeSetContext = function safeSetContext2(stripe) {
            setContext(function(ctx2) {
              if (ctx2.stripe)
                return ctx2;
              return {
                stripe,
                elements: stripe.elements(options)
              };
            });
          };
          if (parsed.tag === "async" && !ctx.stripe) {
            parsed.stripePromise.then(function(stripe) {
              if (stripe && isMounted) {
                safeSetContext(stripe);
              }
            });
          } else if (parsed.tag === "sync" && !ctx.stripe) {
            safeSetContext(parsed.stripe);
          }
          return function() {
            isMounted = false;
          };
        }, [parsed, ctx, options]);
        var prevStripe = usePrevious(rawStripeProp);
        React.useEffect(function() {
          if (prevStripe !== null && prevStripe !== rawStripeProp) {
            console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
          }
        }, [prevStripe, rawStripeProp]);
        var prevOptions = usePrevious(options);
        React.useEffect(function() {
          if (!ctx.elements) {
            return;
          }
          var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
          if (updates) {
            ctx.elements.update(updates);
          }
        }, [options, prevOptions, ctx.elements]);
        React.useEffect(function() {
          var anyStripe = ctx.stripe;
          if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
            return;
          }
          anyStripe._registerWrapper({
            name: "react-stripe-js",
            version: "1.16.2"
          });
          anyStripe.registerAppInfo({
            name: "react-stripe-js",
            version: "1.16.2",
            url: "https://stripe.com/docs/stripe-js/react"
          });
        }, [ctx.stripe]);
        return /* @__PURE__ */ React.createElement(ElementsContext.Provider, {
          value: ctx
        }, /* @__PURE__ */ React.createElement(CartElementContext.Provider, {
          value: {
            cart,
            setCart,
            cartState,
            setCartState
          }
        }, children));
      };
      Elements2.propTypes = {
        stripe: propTypes.any,
        options: propTypes.object
      };
      var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
        var ctx = React.useContext(ElementsContext);
        return parseElementsContext(ctx, useCaseMessage);
      };
      var useCartElementContextWithUseCase = function useCartElementContextWithUseCase2(useCaseMessage) {
        var ctx = React.useContext(CartElementContext);
        return parseCartElementContext(ctx, useCaseMessage);
      };
      var useElements2 = function useElements3() {
        var _useElementsContextWi = useElementsContextWithUseCase("calls useElements()"), elements = _useElementsContextWi.elements;
        return elements;
      };
      var useStripe2 = function useStripe3() {
        var _useElementsContextWi2 = useElementsContextWithUseCase("calls useStripe()"), stripe = _useElementsContextWi2.stripe;
        return stripe;
      };
      var useCartElement = function useCartElement2() {
        var _useCartElementContex = useCartElementContextWithUseCase("calls useCartElement()"), cart = _useCartElementContex.cart;
        return cart;
      };
      var useCartElementState = function useCartElementState2() {
        var _useCartElementContex2 = useCartElementContextWithUseCase("calls useCartElementState()"), cartState = _useCartElementContex2.cartState;
        return cartState;
      };
      var ElementsConsumer = function ElementsConsumer2(_ref2) {
        var children = _ref2.children;
        var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
        return children(ctx);
      };
      ElementsConsumer.propTypes = {
        children: propTypes.func.isRequired
      };
      var useCallbackReference = function useCallbackReference2(cb) {
        var ref = React.useRef(cb);
        React.useEffect(function() {
          ref.current = cb;
        }, [cb]);
        return function() {
          if (ref.current) {
            ref.current.apply(ref, arguments);
          }
        };
      };
      var noop = function noop2() {
      };
      var capitalized = function capitalized2(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      var createElementComponent = function createElementComponent2(type, isServer2) {
        var displayName = "".concat(capitalized(type), "Element");
        var ClientElement = function ClientElement2(_ref) {
          var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, _ref$onBlur = _ref.onBlur, onBlur = _ref$onBlur === void 0 ? noop : _ref$onBlur, _ref$onFocus = _ref.onFocus, onFocus = _ref$onFocus === void 0 ? noop : _ref$onFocus, _ref$onReady = _ref.onReady, onReady = _ref$onReady === void 0 ? noop : _ref$onReady, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop : _ref$onChange, _ref$onEscape = _ref.onEscape, onEscape = _ref$onEscape === void 0 ? noop : _ref$onEscape, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? noop : _ref$onClick, _ref$onLoadError = _ref.onLoadError, onLoadError = _ref$onLoadError === void 0 ? noop : _ref$onLoadError, _ref$onLoaderStart = _ref.onLoaderStart, onLoaderStart = _ref$onLoaderStart === void 0 ? noop : _ref$onLoaderStart, _ref$onNetworksChange = _ref.onNetworksChange, onNetworksChange = _ref$onNetworksChange === void 0 ? noop : _ref$onNetworksChange, _ref$onCheckout = _ref.onCheckout, onCheckout = _ref$onCheckout === void 0 ? noop : _ref$onCheckout, _ref$onLineItemClick = _ref.onLineItemClick, onLineItemClick = _ref$onLineItemClick === void 0 ? noop : _ref$onLineItemClick, _ref$onConfirm = _ref.onConfirm, onConfirm = _ref$onConfirm === void 0 ? noop : _ref$onConfirm, _ref$onCancel = _ref.onCancel, onCancel = _ref$onCancel === void 0 ? noop : _ref$onCancel, _ref$onShippingAddres = _ref.onShippingAddressChange, onShippingAddressChange = _ref$onShippingAddres === void 0 ? noop : _ref$onShippingAddres, _ref$onShippingRateCh = _ref.onShippingRateChange, onShippingRateChange = _ref$onShippingRateCh === void 0 ? noop : _ref$onShippingRateCh;
          var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")), elements = _useElementsContextWi.elements;
          var elementRef = React.useRef(null);
          var domNode = React.useRef(null);
          var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">")), setCart = _useCartElementContex.setCart, setCartState = _useCartElementContex.setCartState;
          var callOnReady = useCallbackReference(onReady);
          var callOnBlur = useCallbackReference(onBlur);
          var callOnFocus = useCallbackReference(onFocus);
          var callOnClick = useCallbackReference(onClick);
          var callOnChange = useCallbackReference(onChange);
          var callOnEscape = useCallbackReference(onEscape);
          var callOnLoadError = useCallbackReference(onLoadError);
          var callOnLoaderStart = useCallbackReference(onLoaderStart);
          var callOnNetworksChange = useCallbackReference(onNetworksChange);
          var callOnCheckout = useCallbackReference(onCheckout);
          var callOnLineItemClick = useCallbackReference(onLineItemClick);
          var callOnConfirm = useCallbackReference(onConfirm);
          var callOnCancel = useCallbackReference(onCancel);
          var callOnShippingAddressChange = useCallbackReference(onShippingAddressChange);
          var callOnShippingRateChange = useCallbackReference(onShippingRateChange);
          React.useLayoutEffect(function() {
            if (elementRef.current == null && elements && domNode.current != null) {
              var element = elements.create(type, options);
              if (type === "cart" && setCart) {
                setCart(element);
              }
              elementRef.current = element;
              element.mount(domNode.current);
              element.on("ready", function(event) {
                if (type === "cart") {
                  if (setCartState) {
                    setCartState(event);
                  }
                  callOnReady(event);
                } else if (type === "payButton") {
                  callOnReady(event);
                } else {
                  callOnReady(element);
                }
              });
              element.on("change", function(event) {
                if (type === "cart" && setCartState) {
                  setCartState(event);
                }
                callOnChange(event);
              });
              element.on("blur", callOnBlur);
              element.on("focus", callOnFocus);
              element.on("escape", callOnEscape);
              element.on("loaderror", callOnLoadError);
              element.on("loaderstart", callOnLoaderStart);
              element.on("networkschange", callOnNetworksChange);
              element.on("click", callOnClick);
              element.on("checkout", function(event) {
                if (type === "cart" && setCartState) {
                  setCartState(event);
                }
                callOnCheckout(event);
              });
              element.on("lineitemclick", callOnLineItemClick);
              element.on("confirm", callOnConfirm);
              element.on("cancel", callOnCancel);
              element.on("shippingaddresschange", callOnShippingAddressChange);
              element.on("shippingratechange", callOnShippingRateChange);
            }
          });
          var prevOptions = usePrevious(options);
          React.useEffect(function() {
            if (!elementRef.current) {
              return;
            }
            var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
            if (updates) {
              elementRef.current.update(updates);
            }
          }, [options, prevOptions]);
          React.useLayoutEffect(function() {
            return function() {
              if (elementRef.current) {
                elementRef.current.destroy();
                elementRef.current = null;
              }
            };
          }, []);
          return /* @__PURE__ */ React.createElement("div", {
            id,
            className,
            ref: domNode
          });
        };
        var ServerElement = function ServerElement2(props) {
          useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
          useCartElementContextWithUseCase("mounts <".concat(displayName, ">"));
          var id = props.id, className = props.className;
          return /* @__PURE__ */ React.createElement("div", {
            id,
            className
          });
        };
        var Element = isServer2 ? ServerElement : ClientElement;
        Element.propTypes = {
          id: propTypes.string,
          className: propTypes.string,
          onChange: propTypes.func,
          onBlur: propTypes.func,
          onFocus: propTypes.func,
          onReady: propTypes.func,
          onEscape: propTypes.func,
          onClick: propTypes.func,
          onLoadError: propTypes.func,
          onLoaderStart: propTypes.func,
          onNetworksChange: propTypes.func,
          onCheckout: propTypes.func,
          onLineItemClick: propTypes.func,
          onConfirm: propTypes.func,
          onCancel: propTypes.func,
          onShippingAddressChange: propTypes.func,
          onShippingRateChange: propTypes.func,
          options: propTypes.object
        };
        Element.displayName = displayName;
        Element.__elementType = type;
        return Element;
      };
      var isServer = typeof window === "undefined";
      var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
      var CardElement = createElementComponent("card", isServer);
      var CardNumberElement = createElementComponent("cardNumber", isServer);
      var CardExpiryElement = createElementComponent("cardExpiry", isServer);
      var CardCvcElement = createElementComponent("cardCvc", isServer);
      var FpxBankElement = createElementComponent("fpxBank", isServer);
      var IbanElement = createElementComponent("iban", isServer);
      var IdealBankElement = createElementComponent("idealBank", isServer);
      var P24BankElement = createElementComponent("p24Bank", isServer);
      var EpsBankElement = createElementComponent("epsBank", isServer);
      var PaymentElement2 = createElementComponent("payment", isServer);
      var PayButtonElement = createElementComponent("payButton", isServer);
      var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
      var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
      var AddressElement = createElementComponent("address", isServer);
      var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
      var CartElement = createElementComponent("cart", isServer);
      var PaymentMethodMessagingElement = createElementComponent("paymentMethodMessaging", isServer);
      var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
      var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);
      exports2.AddressElement = AddressElement;
      exports2.AffirmMessageElement = AffirmMessageElement;
      exports2.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
      exports2.AuBankAccountElement = AuBankAccountElement;
      exports2.CardCvcElement = CardCvcElement;
      exports2.CardElement = CardElement;
      exports2.CardExpiryElement = CardExpiryElement;
      exports2.CardNumberElement = CardNumberElement;
      exports2.CartElement = CartElement;
      exports2.Elements = Elements2;
      exports2.ElementsConsumer = ElementsConsumer;
      exports2.EpsBankElement = EpsBankElement;
      exports2.FpxBankElement = FpxBankElement;
      exports2.IbanElement = IbanElement;
      exports2.IdealBankElement = IdealBankElement;
      exports2.LinkAuthenticationElement = LinkAuthenticationElement;
      exports2.P24BankElement = P24BankElement;
      exports2.PayButtonElement = PayButtonElement;
      exports2.PaymentElement = PaymentElement2;
      exports2.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
      exports2.PaymentRequestButtonElement = PaymentRequestButtonElement;
      exports2.ShippingAddressElement = ShippingAddressElement;
      exports2.useCartElement = useCartElement;
      exports2.useCartElementState = useCartElementState;
      exports2.useElements = useElements2;
      exports2.useStripe = useStripe2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// src/routes/$langstore/checkout.tsx
var import_authentication = __toESM(require_authentication());
var import_privateJson = __toESM(require_privateJson());

// src/ui/pages/Checkout.tsx
var import_reactjs_hooks2 = __toESM(require_dist());
var import_react10 = __toESM(require_react());

// src/ui/components/checkout-forms/address.tsx
var import_react = __toESM(require_react());
var import_local_storage = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var AddressForm = ({ title, onValidSubmit }) => {
  const [isReadonly, setToReadonly] = (0, import_react.useState)(false);
  const { _t } = useAppContext();
  const { isAuthenticated, userInfos } = useAuth();
  const [customer] = (0, import_local_storage.useLocalStorage)("customer", {
    email: userInfos == null ? void 0 : userInfos.email,
    firstname: userInfos == null ? void 0 : userInfos.firstname,
    lastname: userInfos == null ? void 0 : userInfos.lastname
  });
  const handleChange = (event) => {
    (0, import_local_storage.writeStorage)("customer", {
      ...customer,
      [event.target.name]: event.target.value.trim()
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-2xl mt-5 mb-3", children: title }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/address.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    isAuthenticated && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      _t("hello"),
      " ",
      userInfos == null ? void 0 : userInfos.firstname,
      " ",
      userInfos == null ? void 0 : userInfos.lastname,
      " (",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: userInfos == null ? void 0 : userInfos.email }, void 0, false, {
        fileName: "src/ui/components/checkout-forms/address.tsx",
        lineNumber: 29,
        columnNumber: 81
      }, this),
      "),"
    ] }, void 0, true, {
      fileName: "src/ui/components/checkout-forms/address.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "form",
      {
        onSubmit: (event) => {
          event.preventDefault();
          setToReadonly(true);
          onValidSubmit();
          return false;
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                defaultValue: customer.firstname || (userInfos == null ? void 0 : userInfos.firstname),
                placeholder: "Frodo",
                label: _t("address.firstname"),
                name: "firstname",
                required: true,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 41,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                defaultValue: customer.lastname || (userInfos == null ? void 0 : userInfos.lastname),
                placeholder: "Baggins",
                label: _t("address.lastname"),
                name: "lastname",
                required: true,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 51,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Input,
            {
              defaultValue: customer.email || (userInfos == null ? void 0 : userInfos.email),
              label: _t("address.email"),
              placeholder: "Frodo.ringmaster@shireclub.com",
              name: "email",
              required: true,
              type: "email",
              onChange: handleChange,
              disabled: isReadonly
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 62,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Input,
            {
              defaultValue: customer.streetAddress,
              label: _t("address.streetAddress"),
              placeholder: "6th hole from the Brandybuck Family",
              name: "streetAddress",
              required: true,
              onChange: handleChange,
              disabled: isReadonly
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 74,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 gap-3 mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                defaultValue: customer.country,
                label: _t("address.country"),
                placeholder: "Middle Earth",
                name: "country",
                required: true,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 85,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                defaultValue: customer.city,
                label: _t("address.city"),
                placeholder: "Shire",
                name: "city",
                required: true,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 94,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Input,
              {
                defaultValue: customer.zipCode,
                label: _t("address.zipCode"),
                placeholder: "3130",
                name: "zipCode",
                required: true,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 103,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Input,
            {
              defaultValue: customer.additionalInfo,
              label: _t("address.additionalInfo"),
              placeholder: "Anything we should keep in mind before dispatching your order?",
              name: "additionalInfo",
              onChange: handleChange,
              disabled: isReadonly
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 114,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          !isReadonly && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "bg-black text-white rounded-md px-6 py-3 mt-5 float-right",
              disabled: isReadonly,
              type: "submit",
              children: _t("address.next")
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 124,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      true,
      {
        fileName: "src/ui/components/checkout-forms/address.tsx",
        lineNumber: 32,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/ui/components/checkout-forms/address.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this);
};

// src/ui/components/checkout-forms/cart.tsx
var import_image = __toESM(require_image());
var import_reactjs_hooks = __toESM(require_dist());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var CheckoutCart = () => {
  var _a;
  const { remoteCart } = useRemoteCart();
  const { cart, total } = (remoteCart == null ? void 0 : remoteCart.cart) || { cart: null, total: null };
  const { savings } = ((_a = remoteCart == null ? void 0 : remoteCart.extra) == null ? void 0 : _a.discounts) || { lots: null, savings: null };
  const { state: contextState, _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:w-2/5 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-bold text-2xl mt-10 mb-5", children: _t("cart.yourCart") }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/cart.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    !cart && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OptimisticHydratedCart, {}, void 0, false, {
      fileName: "src/ui/components/checkout-forms/cart.tsx",
      lineNumber: 18,
      columnNumber: 23
    }, this),
    cart && cart.items.map((item, index) => {
      var _a2;
      const saving = ((_a2 = savings[item.variant.sku]) == null ? void 0 : _a2.quantity) > 0 ? savings[item.variant.sku] : null;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "mt-2 min-h-[60px] rounded-md flex justify-between bg-grey2 p-2 items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "img-container img-contain w-[60px] h-[60px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              import_image.Image,
              {
                ...item == null ? void 0 : item.variant.firstImage,
                sizes: "100px",
                fallbackAlt: item.variant.name
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/cart.tsx",
                lineNumber: 29,
                columnNumber: 37
              },
              this
            ) }, void 0, false, {
              fileName: "src/ui/components/checkout-forms/cart.tsx",
              lineNumber: 28,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md font-regular w-full", children: [
                item.variant.name,
                " x ",
                item.quantity
              ] }, void 0, true, {
                fileName: "src/ui/components/checkout-forms/cart.tsx",
                lineNumber: 36,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CartItemPrice, { item, saving }, void 0, false, {
                fileName: "src/ui/components/checkout-forms/cart.tsx",
                lineNumber: 39,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "src/ui/components/checkout-forms/cart.tsx",
              lineNumber: 35,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/components/checkout-forms/cart.tsx",
            lineNumber: 27,
            columnNumber: 29
          }, this)
        },
        index,
        false,
        {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 23,
          columnNumber: 25
        },
        this
      );
    }),
    total && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-1  py-4 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: _t("cart.discount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.discounts.reduce((memo, discount) => {
          return memo + (discount == null ? void 0 : discount.amount) || 0;
        }, 0) }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 50,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 49,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.taxAmount }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 64,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.gross }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 66,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 65,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 63,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/checkout-forms/cart.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/checkout-forms/cart.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
};
var OptimisticHydratedCart = () => {
  const { cart } = useLocalCart();
  const { state: contextState, _t } = useAppContext();
  let total = 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    Object.keys(cart.items).map((sku, index) => {
      const item = cart.items[sku];
      total += item.quantity * item.price;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "div",
        {
          className: "mt-2 min-h-[60px] rounded-md flex justify-between bg-grey2 p-2 items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "img-container img-contain w-[60px] h-[60px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_image.Image, {}, void 0, false, {
              fileName: "src/ui/components/checkout-forms/cart.tsx",
              lineNumber: 92,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "src/ui/components/checkout-forms/cart.tsx",
              lineNumber: 91,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md font-regular w-full", children: item.name }, void 0, false, {
                fileName: "src/ui/components/checkout-forms/cart.tsx",
                lineNumber: 95,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: item.price }, void 0, false, {
                fileName: "src/ui/components/checkout-forms/cart.tsx",
                lineNumber: 96,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "src/ui/components/checkout-forms/cart.tsx",
              lineNumber: 94,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/components/checkout-forms/cart.tsx",
            lineNumber: 90,
            columnNumber: 29
          }, this)
        },
        index,
        false,
        {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 86,
          columnNumber: 25
        },
        this
      );
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-1  py-4 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: _t("cart.discount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 106,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "loader" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 107,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 105,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 110,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "loader" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 111,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 109,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 114,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 116,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 115,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 113,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/checkout-forms/cart.tsx",
      lineNumber: 104,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/checkout-forms/cart.tsx",
    lineNumber: 81,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/checkout-forms/cart.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, this);
};

// src/ui/components/payments/index.tsx
var import_react9 = __toESM(require_react());

// src/ui/components/payments/crystal/card.tsx
var import_react2 = __toESM(require_react());
var import_local_storage2 = __toESM(require_lib());

// src/assets/crystalcard-logo.svg
var crystalcard_logo_default = "/build/_assets/crystalcard-logo-6P24KHYU.svg";

// src/ui/components/payments/crystal/card.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var CrystalCardButton = ({
  paying = false,
  onClick
}) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "button",
    {
      className: "w-full h-[70px] text-white mt-2 rounded-md px-8 bg-grey flex flex-row justify-between items-center border border-transparent hover:border-black",
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick ? onClick : void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: " h-[35px]", src: `${crystalcard_logo_default}`, height: "35", alt: "Crystal Card" }, void 0, false, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, false, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, false, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/crystal/card.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
};
var CrystalCard = () => {
  const { cart, isEmpty, empty } = useLocalCart();
  const { state, path, _t } = useAppContext();
  const [paying, setPaying] = (0, import_react2.useState)(false);
  const [customer] = (0, import_local_storage2.useLocalStorage)("customer", {});
  const navigate = useNavigate_default();
  if (isEmpty()) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "form",
    {
      onSubmit: async (event) => {
        setPaying(true);
        event.preventDefault();
        const cardInfo = new FormData(event.target);
        await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).sendPaidOrderWithCrystalCard(cart, customer, Object.fromEntries(cardInfo.entries()));
        empty();
        navigate(path(`/order/cart/${cart.cartId}`), { replace: true });
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "number", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
              _t("payment.cardNumber"),
              "*"
            ] }, void 0, true, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 55,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                type: "text",
                id: "number",
                placeholder: "1234 1234 1234 1234",
                name: "number",
                required: true,
                className: "bg-grey"
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/payments/crystal/card.tsx",
                lineNumber: 56,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "expiration", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: _t("payment.expiration") }, void 0, false, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 66,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                type: "text",
                id: "expiration",
                placeholder: "MM / YY",
                name: "expiration",
                required: true,
                className: "bg-grey"
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/payments/crystal/card.tsx",
                lineNumber: 67,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "cvc", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "CVC*" }, void 0, false, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", id: "cvc", placeholder: "CVC", name: "cvc", required: true, className: "bg-grey" }, void 0, false, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 78,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-2 gap-3 mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "country", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
              _t("payment.country"),
              "*"
            ] }, void 0, true, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "input",
              {
                type: "text",
                id: "country",
                placeholder: "United States",
                name: "country",
                required: true,
                className: "bg-grey"
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/payments/crystal/card.tsx",
                lineNumber: 84,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "zip", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
              _t("payment.zipCode"),
              "*"
            ] }, void 0, true, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 94,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", id: "zip", placeholder: "94122", name: "zip", required: true, className: "bg-grey" }, void 0, false, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CrystalCardButton, { paying }, void 0, false, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/crystal/card.tsx",
      lineNumber: 40,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/payments/crystal/coin.tsx
var import_react3 = __toESM(require_react());
var import_local_storage3 = __toESM(require_lib());

// src/assets/crystalcoin-logo.svg
var crystalcoin_logo_default = "/build/_assets/crystalcoin-logo-V3GCFWW7.svg";

// src/ui/components/payments/crystal/coin.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var CrystalCoinButton = ({
  paying = false,
  onClick
}) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "button",
    {
      className: "crystal-coin w-full text-white h-[70px] mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      disabled: paying,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "h-[35px]", src: `${crystalcoin_logo_default}`, height: "35", alt: "Crystal Coin" }, void 0, false, {
          fileName: "src/ui/components/payments/crystal/coin.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, false, {
          fileName: "src/ui/components/payments/crystal/coin.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, false, {
          fileName: "src/ui/components/payments/crystal/coin.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/crystal/coin.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
};
var CrystalCoin = () => {
  const { cart, isEmpty, empty } = useLocalCart();
  const [paying, setPaying] = (0, import_react3.useState)(false);
  const { state, path } = useAppContext();
  const [customer] = (0, import_local_storage3.useLocalStorage)("customer", {});
  const navigate = useNavigate_default();
  if (isEmpty()) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    CrystalCoinButton,
    {
      paying,
      onClick: async () => {
        setPaying(true);
        await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).sendPaidOrderWithCrystalCoin(cart, customer);
        empty();
        navigate(path(`/order/cart/${cart.cartId}`), { replace: true });
      }
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/payments/crystal/coin.tsx",
      lineNumber: 38,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/payments/klarna.tsx
var import_local_storage4 = __toESM(require_lib());
var import_react4 = __toESM(require_react());

// src/assets/klarnaLogo.svg
var klarnaLogo_default = "/build/_assets/klarnaLogo-63FD3QBS.svg";

// src/ui/components/payments/klarna.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var KlarnaButton = ({
  paying = false,
  onClick
}) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "button",
    {
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick ? onClick : void 0,
      className: "w-full text-white h-[70px] mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "h-[50px] px-1", src: `${klarnaLogo_default}`, height: "50", alt: "Klarna" }, void 0, false, {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { id: "button-text", className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, false, {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, false, {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/klarna.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
};
var Klarna = () => {
  const { state, path } = useAppContext();
  const { cart, isEmpty, empty } = useLocalCart();
  const navigate = useNavigate_default();
  const [customer] = (0, import_local_storage4.default)("customer", {});
  if (isEmpty()) {
    return null;
  }
  const [methodsChoices, setMethodsChoices] = (0, import_react4.useState)([]);
  const triggerKlarna = async (method) => {
    window.Klarna.Payments.load(
      {
        container: "#klarna-payments-container",
        payment_method_category: method.identifier
      },
      async () => {
        await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
          cart,
          customer
        );
        window.Klarna.Payments.authorize(
          {
            payment_method_category: method.identifier
          },
          {},
          function(res) {
            const approved = res.approved;
            if (approved) {
              empty();
              navigate(path(`/order/cart/${cart.cartId}`), { replace: true });
            }
          }
        );
      }
    );
  };
  (0, import_react4.useEffect)(() => {
    (async () => {
      if (!isEmpty()) {
        const klarnaJS = document.createElement("script");
        klarnaJS.src = "https://x.klarnacdn.net/kp/lib/v1/api.js";
        klarnaJS.onload = async () => {
          const api = ServiceAPI({
            language: state.language,
            serviceApiUrl: state.serviceApiUrl
          });
          const data = await api.klarna.initiatePayment(cart);
          const methods = data.payment_method_categories;
          window.Klarna.Payments.init({
            client_token: data.client_token
          });
          if (methods.length === 1) {
            triggerKlarna(methods[0]);
          } else {
            setMethodsChoices(methods);
          }
        };
        document.head.appendChild(klarnaJS);
      }
    })();
  }, [cart.items]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "klarna-payments-container" }, void 0, false, {
      fileName: "src/ui/components/payments/klarna.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this),
    methodsChoices.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Klarna Payment Methods: " }, void 0, false, {
        fileName: "src/ui/components/payments/klarna.tsx",
        lineNumber: 111,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row flex-wrap", children: methodsChoices.map((method) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "button",
        {
          onClick: () => triggerKlarna(method),
          className: "bg-[#000] text-[#fff] rounded-md px-8 py-4 flex flex-row items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "img",
              {
                className: "h-[30px] px-3",
                src: method.asset_urls.standard,
                height: "30",
                alt: `Klarna - ${method.name}`
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/payments/klarna.tsx",
                lineNumber: 119,
                columnNumber: 37
              },
              this
            ),
            " ",
            method.name
          ]
        },
        void 0,
        true,
        {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 115,
          columnNumber: 33
        },
        this
      ) }, method.identifier, false, {
        fileName: "src/ui/components/payments/klarna.tsx",
        lineNumber: 114,
        columnNumber: 29
      }, this)) }, void 0, false, {
        fileName: "src/ui/components/payments/klarna.tsx",
        lineNumber: 112,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/payments/klarna.tsx",
      lineNumber: 110,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/payments/klarna.tsx",
    lineNumber: 107,
    columnNumber: 9
  }, this);
};

// src/assets/montonioLogo.svg
var montonioLogo_default = "/build/_assets/montonioLogo-LYSWCOAO.svg";

// src/ui/components/payments/montonio.tsx
var import_react5 = __toESM(require_react());
var import_local_storage5 = __toESM(require_lib());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var MontonioButton = ({ paying = false, disabled = false, onClick }) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "button",
    {
      className: "w-full h-[70px] text-white mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      disabled: paying || disabled,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "px-1 h-[25px]", src: `${montonioLogo_default}`, height: "35", alt: "Montonio" }, void 0, false, {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, false, {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, false, {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 17,
      columnNumber: 9
    },
    this
  );
};
var Montonio = () => {
  const { cart, isEmpty } = useLocalCart();
  const [paying, setPaying] = (0, import_react5.useState)(false);
  const { state, _t } = useAppContext();
  const [customer] = (0, import_local_storage5.default)("customer", {});
  const [pickupPoints, setPickupPoints] = (0, import_react5.useState)();
  const [pickupPoint, setPickupPoint] = (0, import_react5.useState)();
  const API = ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl });
  if (isEmpty()) {
    return null;
  }
  (0, import_react5.useEffect)(() => {
    (async () => {
      const pickupPoints2 = await API.montonio.fetchPickupPoints();
      const points = Object.keys(pickupPoints2).reduce((memo, country) => {
        if (country !== "EE") {
          return memo;
        }
        const types = pickupPoints2[country].providers.omniva;
        return {
          ...memo,
          [country]: Object.keys(types).reduce((memo2, type) => {
            if (type !== "parcel_machine") {
              return memo2;
            }
            return [...memo2, ...types[type]];
          }, [])
        };
      }, {});
      setPickupPoints(points);
    })();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    pickupPoints && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-2 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-semibold mb-3", children: _t("payment.montonio.shippingConstraint") }, void 0, false, {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "select",
        {
          defaultValue: "",
          onChange: (event) => {
            const [country, uuid] = event.target.value.split(":");
            setPickupPoint(pickupPoints[country].find((point) => point.uuid === uuid));
          },
          className: "px-4 py-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { disabled: true, value: "", children: _t("payment.montonio.selectPickupPoint") }, void 0, false, {
              fileName: "src/ui/components/payments/montonio.tsx",
              lineNumber: 79,
              columnNumber: 25
            }, this),
            Object.keys(pickupPoints).map((country) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("optgroup", { label: country, children: pickupPoints[country].map((point) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: `${point.country}:${point.uuid}`, children: point.name }, point.uuid, false, {
                  fileName: "src/ui/components/payments/montonio.tsx",
                  lineNumber: 87,
                  columnNumber: 45
                }, this);
              }) }, country, false, {
                fileName: "src/ui/components/payments/montonio.tsx",
                lineNumber: 84,
                columnNumber: 33
              }, this);
            })
          ]
        },
        void 0,
        true,
        {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 71,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this),
    pickupPoint && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-[#fff] p-3 px-4 flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
        pickupPoint.address,
        " ",
        pickupPoint.country
      ] }, void 0, true, {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 101,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
        pickupPoint.locality,
        ", ",
        pickupPoint.region
      ] }, void 0, true, {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 104,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 100,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      MontonioButton,
      {
        paying,
        disabled: !pickupPoint,
        onClick: async () => {
          setPaying(true);
          try {
            await API.placeCart(cart, customer, {
              pickupPoint
            });
            const link = await ServiceAPI({
              language: state.language,
              serviceApiUrl: state.serviceApiUrl
            }).montonio.fetchPaymentLink(cart);
            window.location.href = link.url;
          } catch (exception) {
            console.log(exception);
          }
        }
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 110,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xs mt-4 text-grey6", children: [
      "Note: ",
      _t("payment.montonio.shippingFeature")
    ] }, void 0, true, {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/payments/montonio.tsx",
    lineNumber: 67,
    columnNumber: 9
  }, this);
};

// src/ui/components/payments/quickpaylink.tsx
var import_react6 = __toESM(require_react());
var import_local_storage6 = __toESM(require_lib());

// src/assets/quickpayLogo.svg
var quickpayLogo_default = "/build/_assets/quickpayLogo-NL6VSXM7.svg";

// src/ui/components/payments/quickpaylink.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var QuickPayLinkButton = ({
  paying = false,
  onClick
}) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "button",
    {
      className: "w-full h-[70px] text-white mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      disabled: paying,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "px-1 h-[35px]", src: `${quickpayLogo_default}`, height: "35", alt: "Quickpay" }, void 0, false, {
          fileName: "src/ui/components/payments/quickpaylink.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, false, {
          fileName: "src/ui/components/payments/quickpaylink.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, false, {
          fileName: "src/ui/components/payments/quickpaylink.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/quickpaylink.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
};
var QuickPayLink = () => {
  const { cart, isEmpty } = useLocalCart();
  const [paying, setPaying] = (0, import_react6.useState)(false);
  const { state } = useAppContext();
  const [customer] = (0, import_local_storage6.useLocalStorage)("customer", {});
  if (isEmpty()) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    QuickPayLinkButton,
    {
      paying,
      onClick: async () => {
        setPaying(true);
        try {
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
            cart,
            customer
          );
          const link = await ServiceAPI({
            language: state.language,
            serviceApiUrl: state.serviceApiUrl
          }).quickpay.fetchPaymentLink(cart);
          window.location.href = link.url;
        } catch (exception) {
          console.log(exception);
        }
      }
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/payments/quickpaylink.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/payments/razorpay.tsx
var import_local_storage7 = __toESM(require_lib());
var import_react7 = __toESM(require_react());

// src/assets/razorpayLogo.svg
var razorpayLogo_default = "/build/_assets/razorpayLogo-MEUEZKAG.svg";

// src/ui/components/payments/razorpay.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var RazorPayButton = ({
  paying = false,
  onClick
}) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "button",
    {
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick ? onClick : void 0,
      className: "w-full text-white mt-2 h-[70px] rounded-md px-8 bg-grey flex flex-row justify-between items-center border border-transparent hover:border-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { className: "h-[40px]", src: `${razorpayLogo_default}`, height: "50", alt: "Razorpay" }, void 0, false, {
          fileName: "src/ui/components/payments/razorpay.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "button-text", className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, false, {
          fileName: "src/ui/components/payments/razorpay.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, false, {
          fileName: "src/ui/components/payments/razorpay.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/razorpay.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
};
var RazorPay = () => {
  const { state, path } = useAppContext();
  const { cart, isEmpty, empty } = useLocalCart();
  const [customer] = (0, import_local_storage7.default)("customer", {});
  let navigate = useNavigate_default();
  const variables = state.paymentImplementationVariables ? state.paymentImplementationVariables["razorpay"] : {};
  if (!variables || !variables.RAZORPAY_ID) {
    return null;
  }
  const triggerRazorpay = async () => {
    const data = await ServiceAPI({
      language: state.language,
      serviceApiUrl: state.serviceApiUrl
    }).razorpay.initiatePayment(cart);
    const { amount, id: order_id, currency } = data.data;
    const options = {
      key: variables.RAZORPAY_ID,
      amount: amount.toString(),
      currency,
      name: "FRNTR",
      description: "",
      image: { logo: razorpayLogo_default },
      order_id,
      handler: async function(response) {
        const data2 = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature
        };
        const result = await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).razorpay.receivePayment(window.location.origin, data2);
        if (result.id) {
          empty();
          navigate(path(`/order/cart/${cart.cartId}`), { replace: true });
        }
      },
      prefill: {
        name: customer.firstname,
        email: customer.email
      },
      theme: {
        color: "#61dafb"
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  (0, import_react7.useEffect)(() => {
    (async () => {
      if (!isEmpty()) {
        try {
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
            cart,
            customer
          );
        } catch (exception) {
          console.log(exception);
        }
        const razorpayJS = document.createElement("script");
        razorpayJS.src = "https://checkout.razorpay.com/v1/checkout.js";
        document.head.appendChild(razorpayJS);
        triggerRazorpay();
      }
    })();
  }, [cart.items]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(RazorPayButton, {}, void 0, false, {
    fileName: "src/ui/components/payments/razorpay.tsx",
    lineNumber: 108,
    columnNumber: 12
  }, this);
};

// src/ui/components/payments/stripe.tsx
var import_local_storage8 = __toESM(require_lib());
var import_react_stripe_js = __toESM(require_react_stripe_umd());

// node_modules/@stripe/stripe-js/dist/stripe.esm.js
var V3_URL = "https://js.stripe.com/v3";
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
var findScript = function findScript2() {
  var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }
    return script;
  }
  return null;
};
var injectScript = function injectScript2(params) {
  var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
  var script = document.createElement("script");
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;
  if (!headOrBody) {
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  }
  headOrBody.appendChild(script);
  return script;
};
var registerWrapper = function registerWrapper2(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }
  stripe._registerWrapper({
    name: "stripe-js",
    version: "1.46.0",
    startTime
  });
};
var stripePromise = null;
var loadScript = function loadScript2(params) {
  if (stripePromise !== null) {
    return stripePromise;
  }
  stripePromise = new Promise(function(resolve, reject) {
    if (typeof window === "undefined") {
      resolve(null);
      return;
    }
    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }
    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }
    try {
      var script = findScript();
      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }
      script.addEventListener("load", function() {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error("Stripe.js not available"));
        }
      });
      script.addEventListener("error", function() {
        reject(new Error("Failed to load Stripe.js"));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe2(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }
  var stripe = maybeStripe.apply(void 0, args);
  registerWrapper(stripe, startTime);
  return stripe;
};
var stripePromise$1 = Promise.resolve().then(function() {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function(err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function(maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

// src/ui/components/payments/stripe.tsx
var import_react8 = __toESM(require_react());

// src/assets/stripeLogo.svg
var stripeLogo_default = "/build/_assets/stripeLogo-ETZ3XN45.svg";

// src/ui/components/payments/stripe.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var StripeButton = ({
  paying = false,
  onClick
}) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "button",
    {
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick ? onClick : void 0,
      className: "w-full text-white mt-2 h-[70px] rounded-md px-8 bg-grey flex flex-row justify-between items-center border border-transparent hover:border-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { className: "h-[50px]", src: `${stripeLogo_default}`, height: "50", alt: "Stripe" }, void 0, false, {
          fileName: "src/ui/components/payments/stripe.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { id: "button-text", className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, false, {
          fileName: "src/ui/components/payments/stripe.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, false, {
          fileName: "src/ui/components/payments/stripe.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  );
};
var Stripe = () => {
  const { state } = useAppContext();
  const [clientSecret, setClientSecret] = (0, import_react8.useState)("");
  const { cart, isEmpty } = useLocalCart();
  const [customer] = (0, import_local_storage8.default)("customer", {});
  const variables = state.paymentImplementationVariables ? state.paymentImplementationVariables["stripe"] : {};
  if (!variables || !variables.PUBLIC_KEY) {
    return null;
  }
  const stripePromise2 = loadStripe(variables.PUBLIC_KEY);
  (0, import_react8.useEffect)(() => {
    (async () => {
      if (!isEmpty()) {
        try {
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
            cart,
            customer
          );
        } catch (exception) {
          console.log(exception);
        }
        const data = await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).stripe.fetchPaymentIntent(cart);
        setClientSecret(data.key);
      }
    })();
  }, [cart.items]);
  if (!clientSecret) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_stripe_js.Elements, { options: { clientSecret }, stripe: stripePromise2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(StripCheckoutForm, {}, void 0, false, {
    fileName: "src/ui/components/payments/stripe.tsx",
    lineNumber: 72,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/payments/stripe.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this);
};
var StripCheckoutForm = () => {
  const { cart, empty } = useLocalCart();
  const { path } = useAppContext();
  const stripe = (0, import_react_stripe_js.useStripe)();
  const elements = (0, import_react_stripe_js.useElements)();
  const navigate = useNavigate_default();
  const [state, setState] = (0, import_react8.useState)({ succeeded: false, error: null, processing: false });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setState({
      ...state,
      processing: true
    });
    const payload = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://" + location.host + "/order/cart/" + cart.cartId
      },
      redirect: "if_required"
    });
    if (payload.error) {
      setState({
        ...state,
        error: `Payment failed ${payload.error.message}`,
        processing: false
      });
    } else {
      setState({
        ...state,
        error: null,
        processing: false,
        succeeded: true
      });
      empty();
      navigate(path(`/order/cart/${cart.cartId}`), { replace: true });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { id: "stripe-payment-form", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react_stripe_js.PaymentElement, { id: "payment-element" }, void 0, false, {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("br", {}, void 0, false, {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 128,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(StripeButton, { paying: state.processing || !stripe || !elements }, void 0, false, {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/payments/stripe.tsx",
    lineNumber: 126,
    columnNumber: 9
  }, this);
};

// src/ui/components/payments/index.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var Payments = () => {
  const { state, _t } = useAppContext();
  const { cart, isImmutable, clone: cartClone } = useLocalCart();
  const paymentMethods = state.crystalPayments;
  const paymentMethodImplementations = {
    crystalCoin: {
      name: "Crystal Coin",
      component: CrystalCoin,
      button: CrystalCoinButton,
      renderOnLoad: true,
      enabled: state.paymentImplementations.includes("crystal") && paymentMethods.includes("coin")
    },
    crystalCard: {
      name: "Crystal Card",
      component: CrystalCard,
      button: CrystalCardButton,
      renderOnLoad: false,
      enabled: state.paymentImplementations.includes("crystal") && paymentMethods.includes("card")
    },
    montonio: {
      name: "Montonio",
      component: Montonio,
      button: MontonioButton,
      renderOnLoad: false,
      enabled: state.paymentImplementations.includes("montonio")
    },
    quickPayLink: {
      name: "QuickPay",
      component: QuickPayLink,
      button: QuickPayLinkButton,
      renderOnLoad: true,
      enabled: state.paymentImplementations.includes("quickpay")
    },
    stripe: {
      name: "Stripe",
      component: Stripe,
      button: StripeButton,
      renderOnLoad: false,
      enabled: state.paymentImplementations.includes("stripe")
    },
    klarna: {
      name: "Klarna",
      component: Klarna,
      button: KlarnaButton,
      renderOnLoad: false,
      enabled: state.paymentImplementations.includes("klarna")
    },
    razorPay: {
      name: "RazorPay",
      component: RazorPay,
      button: RazorPayButton,
      renderOnLoad: false,
      enabled: state.paymentImplementations.includes("razorpay")
    }
  };
  const [selectedPaymentMethodImplementation, setSelectedPaymentMethodImplementation] = (0, import_react9.useState)(null);
  if (selectedPaymentMethodImplementation) {
    const implementation = paymentMethodImplementations[selectedPaymentMethodImplementation];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "payment-method mb-4 bg-grey mt-5 rounded p-6 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(implementation.component, {}, void 0, false, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "font-bold text-2xl mt-5 mb-1", children: _t("payment.title") }, void 0, false, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this),
    isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-red-500", children: _t("cart.immutable") }, void 0, false, {
        fileName: "src/ui/components/payments/index.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "a",
        {
          className: "text-red-500",
          href: "#",
          onClick: (event) => {
            event.preventDefault();
            cartClone();
          },
          children: _t("cart.clone")
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/payments/index.tsx",
          lineNumber: 87,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("br", {}, void 0, false, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this),
    !cart.cartId && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "loader" }, void 0, false, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 101,
      columnNumber: 30
    }, this),
    !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-1 gap-1", children: Object.keys(paymentMethodImplementations).map((implementationKey) => {
      const implementation = paymentMethodImplementations[implementationKey];
      if (!implementation.enabled) {
        return null;
      }
      if (implementation.renderOnLoad) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(implementation.component, {}, implementationKey, false, {
          fileName: "src/ui/components/payments/index.tsx",
          lineNumber: 113,
          columnNumber: 36
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        implementation.button,
        {
          onClick: () => setSelectedPaymentMethodImplementation(implementationKey)
        },
        implementationKey,
        false,
        {
          fileName: "src/ui/components/payments/index.tsx",
          lineNumber: 116,
          columnNumber: 29
        },
        this
      );
    }) }, void 0, false, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 103,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/payments/index.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Checkout.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var Checkout_default = ({ isServerSideAuthenticated: isServerSideAuthenticated2 }) => {
  const { isAuthenticated } = useAuth();
  const [isGuestCheckout, setIsGuestCheckout] = (0, import_react10.useState)(false);
  const [showPayments, setShowPayments] = (0, import_react10.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "2xl lg:container lg:px-6 px-2 mx-auto min-h-[100vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex gap-20 lg:flex-row flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(CheckoutCart, {}, void 0, false, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rounded pt-5 lg:px-10 lg:w-3/5 w-full px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_reactjs_hooks2.ClientOnly, { children: (() => {
      if (!isServerSideAuthenticated2 || !isAuthenticated) {
        return isGuestCheckout ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
            AddressForm,
            {
              title: "Guest Checkout",
              onValidSubmit: () => setShowPayments(true)
            },
            void 0,
            false,
            {
              fileName: "src/ui/pages/Checkout.tsx",
              lineNumber: 23,
              columnNumber: 41
            },
            this
          ),
          showPayments && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Payments, {}, void 0, false, {
            fileName: "src/ui/pages/Checkout.tsx",
            lineNumber: 27,
            columnNumber: 58
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Checkout.tsx",
          lineNumber: 22,
          columnNumber: 37
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          MagickLoginForm,
          {
            enabledGuest: () => setIsGuestCheckout(true),
            actionTitle: "Register",
            title: "Register or continue as guest?"
          },
          void 0,
          false,
          {
            fileName: "src/ui/pages/Checkout.tsx",
            lineNumber: 30,
            columnNumber: 37
          },
          this
        );
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(AddressForm, { title: "Address", onValidSubmit: () => setShowPayments(true) }, void 0, false, {
          fileName: "src/ui/pages/Checkout.tsx",
          lineNumber: 39,
          columnNumber: 37
        }, this),
        showPayments && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Payments, {}, void 0, false, {
          fileName: "src/ui/pages/Checkout.tsx",
          lineNumber: 40,
          columnNumber: 54
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/Checkout.tsx",
        lineNumber: 38,
        columnNumber: 33
      }, this);
    })() }, void 0, false, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 18,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 15,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/checkout.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime());
var checkout_default = () => {
  const { isServerSideAuthenticated: isServerSideAuthenticated2 } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Checkout_default, { isServerSideAuthenticated: isServerSideAuthenticated2 }, void 0, false, {
    fileName: "src/routes/$langstore/checkout.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};
export {
  checkout_default as default
};
//# sourceMappingURL=/build/routes/$langstore/checkout-J5DHOQWZ.js.map
