import {
  LandingPage_default
} from "/build/_shared/chunk-3KHI5J4W.js";
import {
  styles_default
} from "/build/_shared/chunk-LUFSLTAB.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-MMJXXGBG.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-5SLK2DMJ.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-D7DWWPZJ.js";
import "/build/_shared/chunk-D5LNGH6K.js";
import "/build/_shared/chunk-5JZYWJTA.js";
import "/build/_shared/chunk-XIWNVYJD.js";
import "/build/_shared/chunk-TQKLLVXH.js";
import {
  require_storefront
} from "/build/_shared/chunk-YF7AINJB.js";
import "/build/_shared/chunk-6ZN7ZAXO.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-MSUG4FUW.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// src/routes/$langstore/index.tsx
var import_storefront = __toESM(require_storefront());
var import_dataFetcherForShapePage = __toESM(require_dataFetcherForShapePage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LandingPage_default, { data }, void 0, false, {
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
//# sourceMappingURL=/build/routes/$langstore/index-4PECFF2J.js.map
