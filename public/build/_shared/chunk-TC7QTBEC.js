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
var LandingPage_default = () => {
  const { shop } = useLoaderData();
  console.log(shop);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "hello",
    shop.title
  ] }, void 0, true, {
    fileName: "src/ui/pages/LandingPage.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
};

export {
  LandingPage_default
};
//# sourceMappingURL=/build/_shared/chunk-TC7QTBEC.js.map
