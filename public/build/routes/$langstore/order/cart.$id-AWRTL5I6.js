import {
  useNavigate_default
} from "/build/_shared/chunk-YWRVUOCS.js";
import {
  ServiceAPI
} from "/build/_shared/chunk-SIM2ZLJC.js";
import "/build/_shared/chunk-2CBRMZKH.js";
import {
  useLocalCart
} from "/build/_shared/chunk-OU3A6Y3Z.js";
import "/build/_shared/chunk-L7NF5ES7.js";
import {
  useAppContext
} from "/build/_shared/chunk-CN7AHYTM.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import {
  useLoaderData
} from "/build/_shared/chunk-EC77GNCO.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/routes/$langstore/order/cart.$id.tsx
var import_storefront = __toESM(require_storefront());

// src/ui/pages/OrderPlacedCart.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var OrderPlacedCart_default = ({ cartId }) => {
  const { cart: localCart, empty } = useLocalCart();
  const [tryCount, setTryCount] = (0, import_react.useState)(0);
  const { state: appContextState, path } = useAppContext();
  const navigate = useNavigate_default();
  const [orderGuestId, setOrderGuestId] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    let timeout;
    (async () => {
      var _a, _b;
      try {
        if (localCart.cartId === cartId) {
          empty();
        }
        const cart = await ServiceAPI({
          language: appContextState.language,
          serviceApiUrl: appContextState.serviceApiUrl
        }).fetchCart(cartId);
        if ((_a = cart == null ? void 0 : cart.extra) == null ? void 0 : _a.orderId) {
          if (((_b = cart == null ? void 0 : cart.customer) == null ? void 0 : _b.isGuest) === true) {
            setOrderGuestId(cart.extra.orderId);
          } else {
            navigate(path("/order/" + cart.extra.orderId));
          }
        } else {
          timeout = setTimeout(() => {
            setTryCount(tryCount + 1);
          }, 500 * tryCount);
        }
      } catch (exception) {
        timeout = setTimeout(() => {
          setTryCount(tryCount + 1);
        }, 500 * tryCount);
      }
    })();
    return () => clearTimeout(timeout);
  }, [cartId, tryCount]);
  if (orderGuestId !== "") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[80vh] items-center flex lg:w-content mx-auto w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2/4 mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-3xl mb-2", children: "Order Placed!" }, void 0, false, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your order has been placed successfully, as it is a Guest Order you won't see the details here." }, void 0, false, {
          fileName: "src/ui/pages/OrderPlacedCart.tsx",
          lineNumber: 53,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-[#6D6B69]", children: [
          "Order id: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-italic", children: orderGuestId }, void 0, false, {
            fileName: "src/ui/pages/OrderPlacedCart.tsx",
            lineNumber: 58,
            columnNumber: 43
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/OrderPlacedCart.tsx",
          lineNumber: 57,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 52,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[80vh] items-center flex lg:w-content mx-auto w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-2/4 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-3xl mb-2", children: "Cart Placed!" }, void 0, false, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your cart has been placed successfully, we're waiting for payment confirmation." }, void 0, false, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 73,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-[#6D6B69]", children: [
        "Id: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-italic", children: cartId }, void 0, false, {
          fileName: "src/ui/pages/OrderPlacedCart.tsx",
          lineNumber: 75,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 74,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loader " }, void 0, false, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 78,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 72,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/OrderPlacedCart.tsx",
    lineNumber: 69,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/OrderPlacedCart.tsx",
    lineNumber: 68,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/order/cart.$id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var cart_id_default = () => {
  const { cartId } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OrderPlacedCart_default, { cartId }, void 0, false, {
    fileName: "src/routes/$langstore/order/cart.$id.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
};
export {
  cart_id_default as default
};
//# sourceMappingURL=/build/routes/$langstore/order/cart.$id-AWRTL5I6.js.map
