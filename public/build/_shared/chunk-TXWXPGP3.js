import {
  DataMapper
} from "/build/_shared/chunk-2275QL62.js";
import {
  Price
} from "/build/_shared/chunk-4RXEGKB4.js";
import {
  getCurrencyFromCode
} from "/build/_shared/chunk-CB7RP7O3.js";
import {
  require_jsx_runtime,
  useAppContext
} from "/build/_shared/chunk-Y3Y77VXY.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-MSUG4FUW.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@crystallize/reactjs-components/dist/image/component.js
var require_component = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/image/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Image = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    function getVariantSrc(variant) {
      return `${variant.url} ${variant.width}w`;
    }
    var Image = ({ children, ...restOfAllProps }) => {
      const { src, url, sizes, variants, altText, alt: altPassed, fallbackAlt, caption, className, media, _availableSizes, _availableFormats, width, height, ...rest } = restOfAllProps;
      let vars = (variants || []).filter((v) => !!v);
      const alt = altPassed || altText || fallbackAlt || "";
      if (url && _availableSizes && _availableFormats) {
        vars = [];
        const urlWithoutFileExtension = url.replace(/\.[^/]+$/, "");
        const match = urlWithoutFileExtension.match(/(.+)(\/)([^/]+)$/);
        if (match) {
          const [, base, , filename] = match;
          _availableSizes.forEach((size) => {
            _availableFormats.forEach((format) => {
              vars.push({
                url: `${base}/@${size}/${filename}.${format}`,
                key: `${size}.${format}`,
                width: size
              });
            });
          });
        }
      }
      const hasVariants = vars.length > 0;
      let biggestImage = vars[0];
      if (hasVariants) {
        biggestImage = vars.reduce(function(acc, v) {
          if (!acc.width || v.width > acc.width) {
            return v;
          }
          return acc;
        }, vars[0]);
      }
      const std = vars.filter((v) => v.url && !v.url.endsWith(".webp") && !v.url.endsWith(".avif"));
      const webp = vars.filter((v) => v.url && v.url.endsWith(".webp"));
      const avif = vars.filter((v) => v.url && v.url.endsWith(".avif"));
      const srcSet = std.map(getVariantSrc).join(", ");
      const srcSetWebp = webp.map(getVariantSrc).join(", ");
      const srcSetAvif = avif.map(getVariantSrc).join(", ");
      let originalFileExtension = "jpeg";
      if (std.length > 0) {
        const match = std[0].url.match(/\.(?<name>[^.]+)$/);
        originalFileExtension = match?.groups?.name || "jpeg";
        if (originalFileExtension === "jpg") {
          originalFileExtension = "jpeg";
        }
      }
      const commonProps = {
        src: src || url || (hasVariants ? std[0].url : void 0),
        alt,
        caption,
        width: width ?? biggestImage?.width,
        height: height ?? biggestImage?.height
      };
      let useWebP = srcSetWebp.length > 0;
      let useAvif = srcSetAvif.length > 0;
      if (useWebP && useAvif) {
        const [firstWebp] = webp;
        const [firstAvif] = avif;
        if (firstWebp.size && firstAvif.size) {
          useAvif = firstWebp.size > firstAvif.size;
        }
      }
      if (children) {
        return children({
          srcSet,
          srcSetWebp,
          srcSetAvif,
          useAvif,
          useWebP,
          className,
          sizes,
          media,
          ...commonProps,
          ...rest,
          originalFileExtension
        });
      }
      const captionString = caption?.html?.[0] || caption?.plainText?.[0] || "";
      return (0, jsx_runtime_1.jsxs)("figure", { className, children: [(0, jsx_runtime_1.jsxs)("picture", { children: [useAvif && (0, jsx_runtime_1.jsx)("source", { srcSet: srcSetAvif, type: "image/avif", sizes, media }), useWebP && (0, jsx_runtime_1.jsx)("source", { srcSet: srcSetWebp, type: "image/webp", sizes, media }), srcSet.length > 0 && (0, jsx_runtime_1.jsx)("source", { srcSet, type: `image/${originalFileExtension}`, sizes, media }), (0, jsx_runtime_1.jsx)("img", { ...commonProps, ...rest })] }), captionString && (0, jsx_runtime_1.jsx)("figcaption", { dangerouslySetInnerHTML: { __html: captionString } })] });
    };
    exports.Image = Image;
  }
});

// node_modules/@crystallize/reactjs-components/dist/image/types.js
var require_types = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/image/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@crystallize/reactjs-components/dist/image/index.js
var require_image = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/image/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_component(), exports);
    __exportStar(require_types(), exports);
  }
});

// src/use-cases/checkout/pricing.ts
function displayPriceFor(variant, identifiers = {
  default: "default",
  discounted: "sales"
}, currencyCode, discount) {
  const priceVariants = variant == null ? void 0 : variant.priceVariants;
  const currency = getCurrencyFromCode(currencyCode);
  if (!priceVariants) {
    return {
      default: 0,
      percent: 0,
      currency
    };
  }
  const defaultPrice = priceVariants[identifiers.default] && priceVariants[identifiers.default].currency.code === currency.code ? priceVariants[identifiers.default].value : 0;
  const discountedPrice = (discount == null ? void 0 : discount.amount) || priceVariants[identifiers.discounted] && priceVariants[identifiers.discounted].currency.code === currency.code ? priceVariants[identifiers.discounted].value : void 0;
  if (!discountedPrice) {
    return {
      default: defaultPrice,
      percent: 0,
      currency
    };
  }
  return {
    default: defaultPrice,
    discounted: discountedPrice,
    percent: defaultPrice > 0 ? Math.round((defaultPrice - discountedPrice) / defaultPrice * 100) : 0,
    currency
  };
}

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
  require_component,
  require_image,
  displayPriceFor,
  Price2 as Price,
  CartItemPrice
};
//# sourceMappingURL=/build/_shared/chunk-TXWXPGP3.js.map
