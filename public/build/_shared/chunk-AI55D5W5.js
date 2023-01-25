import {
  DataMapper,
  displayPriceFor
} from "/build/_shared/chunk-BBF5NTDB.js";
import {
  Price
} from "/build/_shared/chunk-43VCX53S.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/components/price.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DiscountedPrice = ({ price, size = "medium" }) => {
  const priceSize = {
    small: {
      default: "text-md font-semibold",
      previous: "line-through font-semibold pt-1 text-xs",
      discount: "text-md font-semibold text-green2",
      percentage: "text-sm py-1 px-2 h-[26px] rounded-md bg-[#efefef] font-medium"
    },
    medium: {
      default: "text-2xl font-bold",
      previous: "line-through font-semibold pt-1 text-sm",
      discount: "text-2xl font-bold text-green2",
      percentage: "text-sm py-1 px-2 h-[26px] rounded-md bg-[#efefef] font-bold"
    }
  };
  const { default: defaultPrice, discounted: discountPrice, percent: discountPercentage, currency } = price;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: discountPrice && discountPrice < defaultPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap  flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: priceSize[size].previous, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: currency.code, children: defaultPrice }, void 0, false, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 30,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: priceSize[size].discount, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: currency.code, children: discountPrice }, void 0, false, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 34,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: priceSize[size].percentage, children: [
        "-",
        discountPercentage,
        "%"
      ] }, void 0, true, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: priceSize[size].default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: currency.code, children: defaultPrice }, void 0, false, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 43,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 42,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
};
var Price2 = ({ variant, size = "medium" }) => {
  const { state } = useAppContext();
  const price = displayPriceFor(
    variant,
    {
      default: "default",
      discounted: "sales"
    },
    state.currency.code
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DiscountedPrice, { price, size }, void 0, false, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 60,
    columnNumber: 12
  }, this);
};
var CartItemPrice = ({
  item,
  saving,
  size = "small"
}) => {
  const mapper = DataMapper();
  const { state, _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price2, { variant: mapper.API.Object.APIProductVariantToProductVariant(item.variant), size }, void 0, false, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      _t("total"),
      ":",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: state.currency.code, children: item.price.gross }, void 0, false, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      saving && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("del", { className: "text-red mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price, { currencyCode: state.currency.code, children: item.price.net + saving.amount }, void 0, false, {
          fileName: "src/ui/components/price.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "src/ui/components/price.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: [
          "(",
          saving.quantity,
          " for free!)"
        ] }, void 0, true, {
          fileName: "src/ui/components/price.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this);
};

export {
  Price2 as Price,
  CartItemPrice
};
//# sourceMappingURL=/build/_shared/chunk-AI55D5W5.js.map
