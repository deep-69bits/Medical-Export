import {
  Product
} from "/build/_shared/chunk-NLF3X7KI.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/components/search/filtered-products.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FilteredProducts = ({ products }) => {
  let [checked, setChecked] = (0, import_react.useState)(true);
  const { _t } = useAppContext();
  const displayableProducts = checked ? products : products.filter((product) => product.variant.isDefault === true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-medium text-md my-5", children: _t("search.foundResults", { count: products.length }) }, void 0, false, {
        fileName: "src/ui/components/search/filtered-products.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      products.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium text-md my-5", children: _t("search.showVariants") }, void 0, false, {
          fileName: "src/ui/components/search/filtered-products.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "relative inline-block w-[46px] h-[24px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "checkbox",
              className: "opacity-0 h-0 w-0",
              onChange: (e) => setChecked(e.target.checked),
              defaultChecked: checked
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/search/filtered-products.tsx",
              lineNumber: 18,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "slider" }, void 0, false, {
            fileName: "src/ui/components/search/filtered-products.tsx",
            lineNumber: 24,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/search/filtered-products.tsx",
          lineNumber: 17,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/search/filtered-products.tsx",
        lineNumber: 15,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/search/filtered-products.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6", children: displayableProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Product, { item: product }, index, false, {
      fileName: "src/ui/components/search/filtered-products.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this)) }, void 0, false, {
      fileName: "src/ui/components/search/filtered-products.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/search/filtered-products.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};

export {
  FilteredProducts
};
//# sourceMappingURL=/build/_shared/chunk-7YWCRWRA.js.map
