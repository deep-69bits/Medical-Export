import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
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

// src/routes/$langstore/stories/index.tsx
var import_storefront = __toESM(require_storefront());

// src/ui/pages/Stories.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Stories_default = ({ folder }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container 2xl md:px-6 mx-auto w-full p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-6xl font-bold mt-10 mb-4", children: folder.title }, void 0, false, {
      fileName: "src/ui/pages/Stories.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-5", children: folder.description }, void 0, false, {
      fileName: "src/ui/pages/Stories.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 grid-flow-row flex flex-wrap" }, void 0, false, {
      fileName: "src/ui/pages/Stories.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Stories.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/stories/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return buildMetas(data);
};
var stories_default = () => {
  const { folder } = useLoaderData();
  console.log(folder);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Stories_default, { folder }, void 0, false, {
    fileName: "src/routes/$langstore/stories/index.tsx",
    lineNumber: 35,
    columnNumber: 12
  }, this);
};
export {
  stories_default as default,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/stories/index-C4FU4QXI.js.map
