import {
  Grid
} from "/build/_shared/chunk-OWZIUL5B.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/pages/LandingPage.tsx
var import_storefront = __toESM(require_storefront());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LandingPage_default = ({ data: landing }) => {
  var _a;
  const { shop } = useLoaderData();
  console.log(shop);
  console.log(dta);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[100vh]", children: [
    (_a = landing == null ? void 0 : landing.grids) == null ? void 0 : _a.map((grid, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full test", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { grid }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this) }, `${grid.id}-${index}`, false, {
      fileName: "src/ui/pages/LandingPage.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this)),
    "fuck"
  ] }, void 0, true, {
    fileName: "src/ui/pages/LandingPage.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
};

export {
  LandingPage_default
};
//# sourceMappingURL=/build/_shared/chunk-6LFPHCBZ.js.map
