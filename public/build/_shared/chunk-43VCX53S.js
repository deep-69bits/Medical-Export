import {
  getCurrencyFromCode
} from "/build/_shared/chunk-CB7RP7O3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/lib/pricing/pricing-component.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Price = ({ children, className = "", currencyCode }) => {
  const currency = getCurrencyFromCode(currencyCode);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 5
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `crystallize-price ${className}`, children: formatter.format(children) }, void 0, false, {
    fileName: "src/ui/lib/pricing/pricing-component.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};

export {
  Price
};
//# sourceMappingURL=/build/_shared/chunk-43VCX53S.js.map
