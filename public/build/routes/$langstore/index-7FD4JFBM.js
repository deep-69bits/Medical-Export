import {
  styles_default
} from "/build/_shared/chunk-LUFSLTAB.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import {
  Grid
} from "/build/_shared/chunk-QPJRUO77.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-C5MQ4KT2.js";
import "/build/_shared/chunk-ZIMYLYGD.js";
import "/build/_shared/chunk-NTU3S4GL.js";
import "/build/_shared/chunk-HET3URE2.js";
import "/build/_shared/chunk-H52OJRFM.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/routes/$langstore/index.tsx
var import_storefront = __toESM(require_storefront());

// src/ui/pages/LandingPage.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LandingPage_default = ({ data: landing }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[100vh]", children: (_a = landing == null ? void 0 : landing.grids) == null ? void 0 : _a.map((grid, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full test", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { grid }, void 0, false, {
    fileName: "src/ui/pages/LandingPage.tsx",
    lineNumber: 12,
    columnNumber: 21
  }, this) }, `${grid.id}-${index}`, false, {
    fileName: "src/ui/pages/LandingPage.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this)) }, void 0, false, {
    fileName: "src/ui/pages/LandingPage.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/index.tsx
var import_dataFetcherForShapePage = __toESM(require_dataFetcherForShapePage());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return buildMetas(data.data);
};
var links = () => {
  return [
    { rel: "stylesheet", href: splide_default_min_default },
    { rel: "stylesheet", href: styles_default }
  ];
};
var langstore_default = () => {
  const { data } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LandingPage_default, { data }, void 0, false, {
    fileName: "src/routes/$langstore/index.tsx",
    lineNumber: 40,
    columnNumber: 12
  }, this);
};
export {
  langstore_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/index-7FD4JFBM.js.map
