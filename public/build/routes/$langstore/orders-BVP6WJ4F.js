import {
  require_privateJson
} from "/build/_shared/chunk-3Q52FFO7.js";
import {
  MagickLoginForm,
  require_authentication,
  useAuth
} from "/build/_shared/chunk-IFVGLC3D.js";
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

// src/routes/$langstore/orders.tsx
var import_authentication = __toESM(require_authentication());
var import_privateJson = __toESM(require_privateJson());

// src/ui/pages/Orders.tsx
var import_react = __toESM(require_react());

// src/assets/defaultImage.svg
var defaultImage_default = "/build/_assets/defaultImage-S5J2GVEV.svg";

// src/ui/pages/Orders.tsx
var import_reactjs_hooks = __toESM(require_dist());

// src/assets/downloadIcon.svg
var downloadIcon_default = "/build/_assets/downloadIcon-SHB4MF6F.svg";

// src/ui/pages/Orders.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Orders_default = ({ isServerSideAuthenticated: isServerSideAuthenticated2 }) => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = (0, import_react.useState)(null);
  const { state } = useAppContext();
  let orderDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };
  (0, import_react.useEffect)(() => {
    (async () => {
      try {
        setOrders(
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).fetchOrders()
        );
      } catch (exception) {
        console.log(exception);
      }
    })();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container 2xl px-6 mx-auto w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold my-10", children: "Your Orders" }, void 0, false, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: isAuthenticated && isServerSideAuthenticated2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: orders && orders.map((order, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-2 border-grey my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-30 bg-[#F0F2F2] px-5 py-2 flex flex-wrap justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Order placed" }, void 0, false, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 45,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-grey6", children: orderDate(order.createdAt) }, void 0, false, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 46,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 44,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Order ID" }, void 0, false, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 49,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-grey6", children: order.id }, void 0, false, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 50,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 48,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Total" }, void 0, false, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 53,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-grey6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: order.total.currency, children: order.total.gross }, void 0, false, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 55,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 54,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 52,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 43,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-5 flex flex-col gap-5", children: order.cart.map((item, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "flex justify-between items-center order-item",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  src: item.imageUrl ? item.imageUrl : defaultImage_default,
                  width: "40px",
                  height: "40px",
                  alt: "product"
                },
                void 0,
                false,
                {
                  fileName: "src/ui/pages/Orders.tsx",
                  lineNumber: 68,
                  columnNumber: 57
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-40", children: item.name }, void 0, false, {
                fileName: "src/ui/pages/Orders.tsx",
                lineNumber: 74,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "src/ui/pages/Orders.tsx",
              lineNumber: 67,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-20", children: item.quantity }, void 0, false, {
              fileName: "src/ui/pages/Orders.tsx",
              lineNumber: 76,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-20 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Price,
              {
                currencyCode: item.price.currency || state.currency.code || "USD",
                children: item.price.gross
              },
              void 0,
              false,
              {
                fileName: "src/ui/pages/Orders.tsx",
                lineNumber: 79,
                columnNumber: 57
              },
              this
            ) }, void 0, false, {
              fileName: "src/ui/pages/Orders.tsx",
              lineNumber: 77,
              columnNumber: 53
            }, this)
          ]
        },
        index2,
        true,
        {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 63,
          columnNumber: 49
        },
        this
      )) }, void 0, false, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 61,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-textBlack py-3 px-4 text-[#fff] rounded-sm flex align-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/order/invoice/${order.id}.pdf`, children: "Download invoice" }, void 0, false, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 92,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: `${downloadIcon_default}`,
            alt: "Download icon",
            width: "18",
            height: "18"
          },
          void 0,
          false,
          {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 93,
            columnNumber: 49
          },
          this
        )
      ] }, void 0, true, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 91,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 90,
        columnNumber: 41
      }, this)
    ] }, order.id, true, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 42,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 39,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[70vh] items-center justify-center flex max-w-[500px] mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto items-center justify-center flex w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MagickLoginForm, { title: "Login", onlyLogin: true, actionTitle: "Login" }, void 0, false, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 108,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 107,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 106,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Orders.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/orders.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var orders_default = () => {
  const { isServerSideAuthenticated: isServerSideAuthenticated2 } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Orders_default, { isServerSideAuthenticated: isServerSideAuthenticated2 }, void 0, false, {
    fileName: "src/routes/$langstore/orders.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};
export {
  orders_default as default
};
//# sourceMappingURL=/build/routes/$langstore/orders-BVP6WJ4F.js.map
