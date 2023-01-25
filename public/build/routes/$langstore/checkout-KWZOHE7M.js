import {
  require_privateJson
} from "/build/_shared/chunk-3Q52FFO7.js";
import {
  useRemoteCart
} from "/build/_shared/chunk-FWTFVG4E.js";
import {
  require_authentication,
  useAuth
} from "/build/_shared/chunk-F5DOTTCU.js";
import "/build/_shared/chunk-IQZC274B.js";
import "/build/_shared/chunk-SIM2ZLJC.js";
import "/build/_shared/chunk-3JQVBZR2.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-2CBRMZKH.js";
import {
  CartItemPrice,
  require_image
} from "/build/_shared/chunk-5JA6TDFQ.js";
import {
  Price
} from "/build/_shared/chunk-K422RAHX.js";
import {
  useLocalCart
} from "/build/_shared/chunk-OU3A6Y3Z.js";
import "/build/_shared/chunk-L7NF5ES7.js";
import {
  useAppContext
} from "/build/_shared/chunk-CN7AHYTM.js";
import {
  useLoaderData
} from "/build/_shared/chunk-KJFXDTSR.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/routes/$langstore/checkout.tsx
var import_authentication = __toESM(require_authentication());
var import_privateJson = __toESM(require_privateJson());

// src/ui/pages/Checkout.tsx
var import_reactjs_hooks2 = __toESM(require_dist());
var import_react = __toESM(require_react());

// src/ui/components/checkout-forms/cart.tsx
var import_image = __toESM(require_image());
var import_reactjs_hooks = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CheckoutCart = () => {
  var _a;
  const { remoteCart } = useRemoteCart();
  const { cart, total } = (remoteCart == null ? void 0 : remoteCart.cart) || { cart: null, total: null };
  const { savings } = ((_a = remoteCart == null ? void 0 : remoteCart.extra) == null ? void 0 : _a.discounts) || { lots: null, savings: null };
  const { state: contextState, _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:w-2/5 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-2xl mt-10 mb-5", children: _t("cart.yourCart") }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/cart.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    !cart && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OptimisticHydratedCart, {}, void 0, false, {
      fileName: "src/ui/components/checkout-forms/cart.tsx",
      lineNumber: 18,
      columnNumber: 23
    }, this),
    cart && cart.items.map((item, index) => {
      var _a2;
      const saving = ((_a2 = savings[item.variant.sku]) == null ? void 0 : _a2.quantity) > 0 ? savings[item.variant.sku] : null;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "mt-2 min-h-[60px] rounded-md flex justify-between bg-grey2 p-2 items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "img-container img-contain w-[60px] h-[60px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-regular w-full", children: [
                item.variant.name,
                " x ",
                item.quantity
              ] }, void 0, true, {
                fileName: "src/ui/components/checkout-forms/cart.tsx",
                lineNumber: 36,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartItemPrice, { item, saving }, void 0, false, {
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
    total && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-1  py-4 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.discount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.discounts.reduce((memo, discount) => {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.taxAmount }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 64,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.gross }, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    Object.keys(cart.items).map((sku, index) => {
      const item = cart.items[sku];
      total += item.quantity * item.price;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "mt-2 min-h-[60px] rounded-md flex justify-between bg-grey2 p-2 items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "img-container img-contain w-[60px] h-[60px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_image.Image, {}, void 0, false, {
              fileName: "src/ui/components/checkout-forms/cart.tsx",
              lineNumber: 92,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "src/ui/components/checkout-forms/cart.tsx",
              lineNumber: 91,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md font-regular w-full", children: item.name }, void 0, false, {
                fileName: "src/ui/components/checkout-forms/cart.tsx",
                lineNumber: 95,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: item.price }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-1  py-4 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.discount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 106,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loader" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 107,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 105,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 110,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loader" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 111,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/cart.tsx",
        lineNumber: 109,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/cart.tsx",
          lineNumber: 114,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total }, void 0, false, {
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

// src/ui/pages/Checkout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Checkout_default = ({ isServerSideAuthenticated: isServerSideAuthenticated2 }) => {
  const { isAuthenticated } = useAuth();
  const [isGuestCheckout, setIsGuestCheckout] = (0, import_react.useState)(false);
  const [showPayments, setShowPayments] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "2xl lg:container lg:px-6 px-2 mx-auto min-h-[100vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex gap-20 lg:flex-row flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckoutCart, {}, void 0, false, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded pt-5 lg:px-10 lg:w-3/5 w-full px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_hooks2.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Inquiry form" }, void 0, false, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 44,
      columnNumber: 25
    }, this) }, void 0, false, {
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
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var checkout_default = () => {
  const { isServerSideAuthenticated: isServerSideAuthenticated2 } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Checkout_default, { isServerSideAuthenticated: isServerSideAuthenticated2 }, void 0, false, {
    fileName: "src/routes/$langstore/checkout.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};
export {
  checkout_default as default
};
//# sourceMappingURL=/build/routes/$langstore/checkout-KWZOHE7M.js.map
