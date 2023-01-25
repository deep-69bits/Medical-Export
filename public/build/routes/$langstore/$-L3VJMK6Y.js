import {
  LandingPage_default
} from "/build/_shared/chunk-ZTHIPBN6.js";
import {
  AbstractStory_default
} from "/build/_shared/chunk-UTAPQUVP.js";
import {
  Category_default
} from "/build/_shared/chunk-VZSOL5VU.js";
import {
  FilteredProducts
} from "/build/_shared/chunk-OIEY5EXM.js";
import "/build/_shared/chunk-BOKYP2BS.js";
import "/build/_shared/chunk-X4I4C3QA.js";
import {
  Product_default
} from "/build/_shared/chunk-FQCQBM2C.js";
import "/build/_shared/chunk-7WTQV3VK.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-5SLK2DMJ.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-AWHSOKDC.js";
import "/build/_shared/chunk-BGMYITZX.js";
import "/build/_shared/chunk-5JZYWJTA.js";
import "/build/_shared/chunk-IAV27O4F.js";
import "/build/_shared/chunk-TQKLLVXH.js";
import "/build/_shared/chunk-QQPGKNZF.js";
import "/build/_shared/chunk-VI4E5GKD.js";
import {
  require_dist,
  require_storefront
} from "/build/_shared/chunk-YF7AINJB.js";
import "/build/_shared/chunk-J22I6NOK.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-MSUG4FUW.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

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
var import_node = __toESM(require_dist());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return buildMetas(data);
};
var __default = () => {
  return (0, import_node.redirect)("/" + availableLanguages[0] + "/shop" + params["*"], 301);
  const { data, shapeIdentifier } = useLoaderData();
  switch (shapeIdentifier) {
    case "product":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Product_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 57,
        columnNumber: 20
      }, this);
    case "category":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Category_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 59,
        columnNumber: 20
      }, this);
    case "abstract-story":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AbstractStory_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 61,
        columnNumber: 20
      }, this);
    case "_topic":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Topic_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 63,
        columnNumber: 20
      }, this);
    case "landing-page":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LandingPage_default, { data }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 65,
        columnNumber: 20
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "There is no renderer for that page" }, void 0, false, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 67,
        columnNumber: 20
      }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "hello" }, void 0, false, {
    fileName: "src/routes/$langstore/$.tsx",
    lineNumber: 69,
    columnNumber: 12
  }, this);
};
export {
  __default as default,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/$-L3VJMK6Y.js.map
