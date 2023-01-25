import {
  useRemoteCart
} from "/build/_shared/chunk-PLMOFLLJ.js";
import "/build/_shared/chunk-C24SIDXL.js";
import {
  require_dist2 as require_dist
} from "/build/_shared/chunk-SEEC2NTB.js";
import {
  Link_default
} from "/build/_shared/chunk-2AR2IWCB.js";
import {
  CartItemPrice,
  require_image
} from "/build/_shared/chunk-YGFEZCX4.js";
import {
  Price
} from "/build/_shared/chunk-K422RAHX.js";
import {
  useLocalCart
} from "/build/_shared/chunk-OU3A6Y3Z.js";
import "/build/_shared/chunk-L7NF5ES7.js";
import {
  useAppContext
} from "/build/_shared/chunk-ZEXCMRG2.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import "/build/_shared/chunk-NPNOS4ZX.js";
import "/build/_shared/chunk-KJFXDTSR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/routes/$langstore/cart.tsx
var import_storefront = __toESM(require_storefront());

// src/ui/components/cart.tsx
var import_reactjs_hooks = __toESM(require_dist());
var import_image = __toESM(require_image());

// src/assets/trashIcon.svg
var trashIcon_default = "/build/_assets/trashIcon-25KBQRQZ.svg";

// src/ui/components/cart.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var HydratedCart = () => {
  var _a;
  const { remoteCart, loading } = useRemoteCart();
  const { isImmutable, isEmpty, add: addToCart, remove: removeFromCart, clone: cartClone } = useLocalCart();
  const { cart, total } = (remoteCart == null ? void 0 : remoteCart.cart) || { cart: null, total: null };
  const { savings } = ((_a = remoteCart == null ? void 0 : remoteCart.extra) == null ? void 0 : _a.discounts) || { lots: null, savings: null };
  const { state: contextState, path, _t } = useAppContext();
  if (isEmpty()) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[60vh] flex w-full flex-col gap-6 justify-center items-start ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-hidden w-[200px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-ml-[50px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { width: "300px", src: "https://embed.lottiefiles.com/animation/823" }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 67,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 66,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 65,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  pb-2 text-3xl font-semibold ", children: _t("cart.whoaempty") }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 71,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full", children: _t("cart.trylater") }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 72,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-grey mt-3 py-2 px-5 rounded-md text-center text-xl font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { to: path("/"), children: _t("back") }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 74,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 73,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 70,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 rounded p-10  mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex mb-4 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-2xl", children: "Cart" }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      loading && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pr-2", children: [
          _t("loading"),
          "..."
        ] }, void 0, true, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loader" }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 88,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 min-h-[200px] ", children: [
      isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500", children: _t("cart.immutable") }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 97,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 98,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 96,
        columnNumber: 25
      }, this),
      !cart && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OptimisticHydratedCart, {}, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 110,
        columnNumber: 31
      }, this),
      cart && cart.items.map((item, index) => {
        var _a2;
        const saving = ((_a2 = savings[item.variant.sku]) == null ? void 0 : _a2.quantity) > 0 ? savings[item.variant.sku] : null;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "flex justify-between bg-grey2 py-5 pr-10 pl-5 items-center rounded-lg ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_image.Image,
                  {
                    ...item.variant.firstImage,
                    sizes: "100px",
                    loading: "lazy",
                    alt: item.variant.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 120,
                    columnNumber: 41
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold w-full", children: item.variant.name }, void 0, false, {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 127,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartItemPrice, { item, saving }, void 0, false, {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 128,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/ui/components/cart.tsx",
                  lineNumber: 126,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "src/ui/components/cart.tsx",
                lineNumber: 119,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-[40px] items-center justify-center gap-3", children: [
                !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    className: "font-semibold w-[25px] h-[25px] rounded-sm",
                    onClick: () => {
                      addToCart({
                        sku: item.variant.sku,
                        name: item.variant.name,
                        price: item.variant.price
                      });
                    },
                    children: [
                      " ",
                      "+",
                      " "
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 133,
                    columnNumber: 45
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-bold ", children: item.quantity }, void 0, false, {
                  fileName: "src/ui/components/cart.tsx",
                  lineNumber: 148,
                  columnNumber: 41
                }, this),
                !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    className: "font-semibold w-[25px] h-[25px] rounded-sm",
                    onClick: () => {
                      removeFromCart(item.variant);
                    },
                    children: [
                      " ",
                      item.quantity === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: trashIcon_default, width: "25", height: "25", alt: "Trash icon" }, void 0, false, {
                        fileName: "src/ui/components/cart.tsx",
                        lineNumber: 158,
                        columnNumber: 53
                      }, this) : "-",
                      " "
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 150,
                    columnNumber: 45
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "src/ui/components/cart.tsx",
                lineNumber: 131,
                columnNumber: 37
              }, this)
            ]
          },
          index,
          true,
          {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 115,
            columnNumber: 33
          },
          this
        );
      }),
      total && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 border-b-2 border-grey4 py-4 items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.discount") }, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 171,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.discounts.reduce((memo, discount) => {
            return memo + (discount == null ? void 0 : discount.amount) || 0;
          }, 0) }, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 172,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 170,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 179,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.taxAmount }, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 180,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 178,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 185,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.gross }, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 186,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 184,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 169,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-grey py-2 px-5 rounded-md text-center font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { to: path("/"), children: _t("back") }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 195,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 194,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-[#000] px-10 py-3 rounded text-[#fff] font-bold hover:bg-black-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { to: path("/checkout"), children: _t("checkout") }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 198,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 197,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 193,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 84,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this);
};
var OptimisticHydratedCart = () => {
  const { cart, isImmutable } = useLocalCart();
  const { state: contextState, _t } = useAppContext();
  let total = 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    Object.keys(cart.items).map((sku, index) => {
      const item = cart.items[sku];
      total += item.quantity * item.price;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between bg-grey2 py-5 pr-10 pl-5 items-center rounded-lg ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_image.Image, {}, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 218,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold w-full", children: item.name }, void 0, false, {
              fileName: "src/ui/components/cart.tsx",
              lineNumber: 220,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: item.price }, void 0, false, {
              fileName: "src/ui/components/cart.tsx",
              lineNumber: 221,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 219,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 217,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-[40px] items-center justify-center gap-3", children: [
          !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "font-semibold w-[25px] h-[25px] rounded-sm", disabled: true, children: [
            " ",
            "+",
            " "
          ] }, void 0, true, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 228,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center font-bold ", children: item.quantity }, void 0, false, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 234,
            columnNumber: 29
          }, this),
          !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "font-semibold w-[25px] h-[25px] rounded-sm", disabled: true, children: [
            " ",
            item.quantity === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: trashIcon_default, width: "25", height: "25", alt: "Trash icon" }, void 0, false, {
              fileName: "src/ui/components/cart.tsx",
              lineNumber: 239,
              columnNumber: 41
            }, this) : "-",
            " "
          ] }, void 0, true, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 236,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 226,
          columnNumber: 25
        }, this)
      ] }, index, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 216,
        columnNumber: 21
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 border-b-2 border-grey4 py-4 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.discount") }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 251,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loader" }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 252,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 250,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 255,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "loader" }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 256,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 254,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60 items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 259,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 261,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 260,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 258,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 249,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 211,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Cart.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Cart_default = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:w-content mx-auto w-full min-h-[90vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HydratedCart, {}, void 0, false, {
    fileName: "src/ui/pages/Cart.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/Cart.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/cart.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var cart_default = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Cart_default, {}, void 0, false, {
    fileName: "src/routes/$langstore/cart.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};
export {
  cart_default as default
};
//# sourceMappingURL=/build/routes/$langstore/cart-H2QLBYQJ.js.map
