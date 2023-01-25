import {
  LandingPage_default
} from "/build/_shared/chunk-5BVZ3XTV.js";
import {
  AbstractStory_default
} from "/build/_shared/chunk-7C4FX5QP.js";
import {
  Category_default
} from "/build/_shared/chunk-JGJHP3PB.js";
import {
  FilteredProducts
} from "/build/_shared/chunk-7YWCRWRA.js";
import "/build/_shared/chunk-R4ZUM34S.js";
import "/build/_shared/chunk-ME52MYFA.js";
import {
  Product_default
} from "/build/_shared/chunk-E4E3GKD3.js";
import "/build/_shared/chunk-MQYZHLMU.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-NLF3X7KI.js";
import "/build/_shared/chunk-AI55D5W5.js";
import "/build/_shared/chunk-JRTIHIB2.js";
import "/build/_shared/chunk-NTU3S4GL.js";
import "/build/_shared/chunk-BBF5NTDB.js";
import "/build/_shared/chunk-43VCX53S.js";
import "/build/_shared/chunk-CB7RP7O3.js";
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
        lineNumber: 55,
        columnNumber: 20
      }, this);
    case "category":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Category_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 57,
        columnNumber: 20
      }, this);
    case "abstract-story":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AbstractStory_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 59,
        columnNumber: 20
      }, this);
    case "_topic":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Topic_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 61,
        columnNumber: 20
      }, this);
    case "landing-page":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LandingPage_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 63,
        columnNumber: 20
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "There is no renderer for that page" }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 65,
        columnNumber: 20
      }, this);
  }
};
export {
  __default as default,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/$-77XXOFCJ.js.map
