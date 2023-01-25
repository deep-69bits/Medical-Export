import {
  MagickLoginForm,
  require_authentication,
  useAuth
} from "/build/_shared/chunk-SRPCYVJ2.js";
import "/build/_shared/chunk-IQZC274B.js";
import {
  ServiceAPI
} from "/build/_shared/chunk-SIM2ZLJC.js";
import "/build/_shared/chunk-3JQVBZR2.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-2CBRMZKH.js";
import {
  Price
} from "/build/_shared/chunk-K422RAHX.js";
import "/build/_shared/chunk-L7NF5ES7.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
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

// src/routes/$langstore/order/$id.tsx
var import_storefront = __toESM(require_storefront());
var import_authentication = __toESM(require_authentication());

// src/ui/pages/Order.tsx
var import_react = __toESM(require_react());
var import_reactjs_hooks = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Order_default = ({ id, isServerSideAuthenticated: isServerSideAuthenticated2 }) => {
  const [tryCount, setTryCount] = (0, import_react.useState)(0);
  const [order, setOrder] = (0, import_react.useState)(null);
  const { state: contextState } = useAppContext();
  const { isAuthenticated } = useAuth();
  (0, import_react.useEffect)(() => {
    let timeout;
    (async () => {
      try {
        setOrder(
          await ServiceAPI({
            language: contextState.language,
            serviceApiUrl: contextState.serviceApiUrl
          }).fetchOrder(id)
        );
      } catch (exception) {
        timeout = setTimeout(() => {
          setTryCount(tryCount + 1);
        }, 500 * tryCount);
      }
    })();
    return () => clearTimeout(timeout);
  }, [id, tryCount]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[70vh] items-center flex lg:w-content mx-auto w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: order && isAuthenticated && isServerSideAuthenticated2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/4 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-3xl", children: "Order Confirmation" }, void 0, false, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 40,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4", children: "We've received your order." }, void 0, false, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 41,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      " The order ID is: #",
      order.id,
      "."
    ] }, void 0, true, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 42,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: [
      order.cart.map((item, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-grey2 px-3 py-2 mb-2 gap-2 flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "img-container overflow-hidden rounded-md img-contain w-[50px] h-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.imageUrl }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 48,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 47,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: [
              item.name,
              " x ",
              item.quantity
            ] }, void 0, true, {
              fileName: "src/ui/pages/Order.tsx",
              lineNumber: 52,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "src/ui/pages/Order.tsx",
              lineNumber: 51,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: item.price.gross }, void 0, false, {
              fileName: "src/ui/pages/Order.tsx",
              lineNumber: 57,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "src/ui/pages/Order.tsx",
              lineNumber: 56,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 50,
            columnNumber: 45
          }, this)
        ] }, index, true, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 46,
          columnNumber: 41
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 border-t-2 border-grey4 py-4 items-end px-4 mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Net" }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 67,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: order.total.net }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 69,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 68,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 66,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Tax amount" }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 73,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: order.total.gross - order.total.net }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 75,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 74,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 72,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex font-bold text-xl justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Paid" }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 81,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: order.total.gross }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 83,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 82,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 80,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/Order.tsx",
        lineNumber: 65,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 43,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 39,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 38,
    columnNumber: 21
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[70vh] items-center justify-center flex max-w-[500px] mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto items-center justify-center flex w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MagickLoginForm, { title: "Login", onlyLogin: true, actionTitle: "Login" }, void 0, false, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 93,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 92,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 91,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/order/$id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var id_default = () => {
  const { orderId, isServerSideAuthenticated: isServerSideAuthenticated2 } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Order_default, { id: orderId, isServerSideAuthenticated: isServerSideAuthenticated2 }, void 0, false, {
    fileName: "src/routes/$langstore/order/$id.tsx",
    lineNumber: 25,
    columnNumber: 12
  }, this);
};
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/$langstore/order/$id-F4BGLI5V.js.map
