import {
  LandingPage_default
} from "/build/_shared/chunk-H53RXVRL.js";
import {
  AbstractStory_default
} from "/build/_shared/chunk-JKX5SWBL.js";
import {
  Category_default
} from "/build/_shared/chunk-4WZ5V2GJ.js";
import {
  FilteredProducts
} from "/build/_shared/chunk-OOU2P7LR.js";
import "/build/_shared/chunk-7DJE46GY.js";
import "/build/_shared/chunk-X4I4C3QA.js";
import {
  Product_default
} from "/build/_shared/chunk-BPQ623GE.js";
import "/build/_shared/chunk-CC7CQPHO.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-5SLK2DMJ.js";
import "/build/_shared/chunk-K7RZOPTS.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import {
  CrystallizeAPI
} from "/build/_shared/chunk-X7VP6C4N.js";
import "/build/_shared/chunk-TZRBUZHL.js";
import "/build/_shared/chunk-DEL3LJMO.js";
import "/build/_shared/chunk-5JZYWJTA.js";
import "/build/_shared/chunk-TXWXPGP3.js";
import "/build/_shared/chunk-2275QL62.js";
import "/build/_shared/chunk-4RXEGKB4.js";
import "/build/_shared/chunk-CB7RP7O3.js";
import "/build/_shared/chunk-QQPGKNZF.js";
import "/build/_shared/chunk-VI4E5GKD.js";
import "/build/_shared/chunk-Y3Y77VXY.js";
import {
  getContext,
  require_dist,
  require_storefront
} from "/build/_shared/chunk-AP3K5O7S.js";
import {
  StoreFrontAwaretHttpCacheHeaderTagger
} from "/build/_shared/chunk-JRBIQKE5.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-MSUG4FUW.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// src/routes/$langstore/$.tsx
var import_node = __toESM(require_dist());
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
var loader = async ({ request, params }) => {
  var _a, _b;
  const requestContext = getContext(request);
  const { shared, secret } = await (0, import_storefront.getStoreFront)(requestContext.host);
  const path = "/" + params["*"];
  const crystallizePath = path.replace(".pdf", "");
  const api = CrystallizeAPI({
    apiClient: secret.apiClient,
    language: requestContext.language,
    isPreview: requestContext.isPreview
  });
  const map = await api.fetchTreeMap();
  const mappedKey = Object.keys(map).find((key) => key === crystallizePath);
  if (!mappedKey) {
    throw new import_node.Response("Not Found", {
      status: 404
    });
  }
  const shapeIdentifier = ((_b = (_a = map[mappedKey]) == null ? void 0 : _a.shape) == null ? void 0 : _b.identifier) || "_topic";
  const data = await (0, import_dataFetcherForShapePage.default)(shapeIdentifier, path, requestContext, params);
  return (0, import_node.json)(
    { shapeIdentifier, data },
    StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier)
  );
};
console.log(loader);
var __default = () => {
  const { data, shapeIdentifier } = useLoaderData();
  console.log(data, shapeIdentifier);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "hello" }, void 0, false, {
    fileName: "src/routes/$langstore/$.tsx",
    lineNumber: 67,
    columnNumber: 12
  }, this);
};
export {
  __default as default,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/$-FLR6FXBU.js.map
