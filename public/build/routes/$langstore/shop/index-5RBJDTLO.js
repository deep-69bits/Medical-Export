import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import {
  Grid,
  Splide2,
  SplideSlide
} from "/build/_shared/chunk-CG35OWCB.js";
import "/build/_shared/chunk-GNKIOHM4.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import {
  Product
} from "/build/_shared/chunk-DPLKHWYC.js";
import {
  require_dist
} from "/build/_shared/chunk-E6XQFFI4.js";
import {
  Link_default
} from "/build/_shared/chunk-NTU3S4GL.js";
import "/build/_shared/chunk-EKXTT52G.js";
import "/build/_shared/chunk-H52OJRFM.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/routes/$langstore/shop/index.tsx
var import_storefront = __toESM(require_storefront());

// src/ui/components/category-list.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CategoryList = ({ products }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-10 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Splide2,
    {
      options: {
        rewind: true,
        perPage: 5,
        breakpoints: {
          1200: {
            perPage: 4
          },
          940: {
            perPage: 3
          },
          480: {
            perPage: 2
          }
        },
        pagination: false,
        gap: 10
      },
      className: "splide ",
      children: (_a = products == null ? void 0 : products.slice(0, 12)) == null ? void 0 : _a.map((product) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SplideSlide, { className: "slide items-stretch pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Product, { item: product }, void 0, false, {
          fileName: "src/ui/components/category-list.tsx",
          lineNumber: 32,
          columnNumber: 33
        }, this) }, `${product.name}-${product.path}`, false, {
          fileName: "src/ui/components/category-list.tsx",
          lineNumber: 31,
          columnNumber: 29
        }, this);
      })
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/category-list.tsx",
      lineNumber: 9,
      columnNumber: 17
    },
    this
  ) }, void 0, false, {
    fileName: "src/ui/components/category-list.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/category-list.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Shop.tsx
var import_reactjs_components = __toESM(require_dist());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Shop_default = ({ shop }) => {
  const { path, _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    shop.hero && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { grid: shop.hero }, void 0, false, {
      fileName: "src/ui/pages/Shop.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Shop.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "2xl container mx-auto px-4 md:px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap gap-4 pt-20 mb-10  items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "font-medium text-md text-md w-full block", children: _t("browse") }, void 0, false, {
          fileName: "src/ui/pages/Shop.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        shop.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link_default,
          {
            to: path(category.path),
            prefetch: "intent",
            className: "w-auto bg-grey py-2 sm:px-6 px-4 rounded-md sm:text-lg text-md font-bold category-link",
            children: category.name
          },
          category.name,
          false,
          {
            fileName: "src/ui/pages/Shop.tsx",
            lineNumber: 22,
            columnNumber: 25
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "src/ui/pages/Shop.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: shop.categories.map((category) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-[#dfdfdf] py-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex  flex-col sm:flex-row sm:items-center justify-between ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-3/4 sm:w-2/4 leading-[1.5em]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "font-bold text-2xl mb-3", children: category.name }, void 0, false, {
                fileName: "src/ui/pages/Shop.tsx",
                lineNumber: 37,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_components.ContentTransformer, { className: "leading-1", json: (_a = category.description) == null ? void 0 : _a.json }, void 0, false, {
                fileName: "src/ui/pages/Shop.tsx",
                lineNumber: 38,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "src/ui/pages/Shop.tsx",
              lineNumber: 36,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Link_default,
              {
                to: path(category.path),
                prefetch: "intent",
                className: "w-auto bg-grey py-2 px-6 text-center rounded-md text-md font-bold hover:bg-black hover:text-white mt-6 sm:mt-0",
                children: [
                  _t("view"),
                  " ",
                  category.name.toLowerCase()
                ]
              },
              category.name,
              true,
              {
                fileName: "src/ui/pages/Shop.tsx",
                lineNumber: 40,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/pages/Shop.tsx",
            lineNumber: 35,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CategoryList, { products: category.products }, void 0, false, {
            fileName: "src/ui/pages/Shop.tsx",
            lineNumber: 49,
            columnNumber: 29
          }, this)
        ] }, category.path, true, {
          fileName: "src/ui/pages/Shop.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this);
      }) }, void 0, false, {
        fileName: "src/ui/pages/Shop.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/Shop.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Shop.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/shop/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: splide_default_min_default }];
};
var meta = ({ data }) => {
  return buildMetas(data);
};
var shop_default = () => {
  const { shop } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Shop_default, { shop }, void 0, false, {
    fileName: "src/routes/$langstore/shop/index.tsx",
    lineNumber: 41,
    columnNumber: 12
  }, this);
};
export {
  shop_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/shop/index-5RBJDTLO.js.map
