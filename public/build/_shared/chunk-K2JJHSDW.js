import {
  require_dist
} from "/build/_shared/chunk-QEROJR5T.js";
import {
  Link_default
} from "/build/_shared/chunk-NTU3S4GL.js";
import {
  DataMapper,
  Price,
  displayPriceFor
} from "/build/_shared/chunk-3X4WXSLH.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/components/item/product.tsx
var import_reactjs_components = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Product = ({ item }) => {
  var _a;
  const { state, path } = useAppContext();
  const { percent: discountPercentage } = displayPriceFor(
    item.variant,
    {
      default: "default",
      discounted: "sales"
    },
    state.currency.code
  );
  const attributesKeys = Object.keys((_a = item.variant.attributes) != null ? _a : {});
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid grid-rows-[1fr_minmax(25px_50px)_40px] place-items-stretch w-full min-h-full justify-stretch items-stretch relative product-link",
      children: [
        discountPercentage > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-3 right-2 bg-green2 items-center flex z-[20] justify-center rounded-full w-[45px] h-[45px] text-[#fff] text-sm", children: [
          "-",
          discountPercentage,
          "%"
        ] }, void 0, true, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "img-container img-contain img-border border-solid border border-[#dfdfdf] aspect-[3/4] bg-[#fff] rounded-md h-full overflow-hidden grow-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_components.Image, { ...item.variant.images[0], sizes: "300px", loading: "lazy", fallbackAlt: item.name }, void 0, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md line-clamp-2 overflow-hidden", children: item.name }, void 0, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        attributesKeys.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 my-2", children: attributesKeys.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs bg-grey py-1 px-3 rounded", children: item.variant.attributes[key] }, key, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this)) }, void 0, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { variant: item.variant, size: "small" }, void 0, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/item/product.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
};
var ProductFromCell = ({ item }) => {
  const mapper = DataMapper();
  const productVariant = mapper.API.Object.APIProductVariantToProductVariant(item.defaultVariant);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Product,
    {
      item: {
        id: item.id,
        name: item.name,
        path: item.path,
        variant: productVariant,
        topics: []
      }
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/item/product.tsx",
      lineNumber: 58,
      columnNumber: 9
    },
    this
  );
};

export {
  Product,
  ProductFromCell
};
//# sourceMappingURL=/build/_shared/chunk-K2JJHSDW.js.map
