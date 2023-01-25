import {
  Splide2,
  SplideSlide
} from "/build/_shared/chunk-OWZIUL5B.js";
import {
  Product
} from "/build/_shared/chunk-C5MQ4KT2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

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

export {
  CategoryList
};
//# sourceMappingURL=/build/_shared/chunk-XASCCY3D.js.map
