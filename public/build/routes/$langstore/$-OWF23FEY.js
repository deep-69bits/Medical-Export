import {
  LandingPage_default
} from "/build/_shared/chunk-SOQOPQWF.js";
import {
  AbstractStory_default
} from "/build/_shared/chunk-XAD7YZNH.js";
import {
  Category_default
} from "/build/_shared/chunk-7XA4GLC6.js";
import {
  FilteredProducts
} from "/build/_shared/chunk-J6442DTQ.js";
import "/build/_shared/chunk-2LLUEYBB.js";
import "/build/_shared/chunk-K43BMRIQ.js";
import "/build/_shared/chunk-ME52MYFA.js";
import {
  Product_default
} from "/build/_shared/chunk-KD53I2L4.js";
import "/build/_shared/chunk-FWMSQRYU.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-F4QSKMR5.js";
import "/build/_shared/chunk-U7QX5U3F.js";
import "/build/_shared/chunk-NTU3S4GL.js";
import "/build/_shared/chunk-4GXS5Z4K.js";
import "/build/_shared/chunk-H52OJRFM.js";
import "/build/_shared/chunk-GFMYPENJ.js";
import "/build/_shared/chunk-4TFNJEYN.js";
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

// src/routes/$langstore/$.tsx
var import_storefront = __toESM(require_storefront());

// src/ui/pages/Topic.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Topic_default = ({ data }) => {
  const { products, topics, topic } = data;
  let topicName = (topic == null ? void 0 : topic.name) || (topic == null ? void 0 : topic.path);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container 2xl mx-auto px-6 mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "capitalize font-bold text-4xl", children: topicName }, void 0, false, {
      fileName: "src/ui/pages/Topic.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilteredProducts, { products }, void 0, false, {
      fileName: "src/ui/pages/Topic.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Topic.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/$.tsx
var import_dataFetcherForShapePage = __toESM(require_dataFetcherForShapePage());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return buildMetas(data);
};
var __default = () => {
  const { data, shapeIdentifier } = useLoaderData();
  switch (shapeIdentifier) {
    case "product":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Product_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 54,
        columnNumber: 20
      }, this);
    case "category":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Category_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 56,
        columnNumber: 20
      }, this);
    case "abstract-story":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AbstractStory_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 58,
        columnNumber: 20
      }, this);
    case "_topic":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Topic_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 60,
        columnNumber: 20
      }, this);
    case "landing-page":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LandingPage_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 62,
        columnNumber: 20
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "There is no renderer for that page" }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 64,
        columnNumber: 20
      }, this);
  }
};
export {
  __default as default,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/$-OWF23FEY.js.map
