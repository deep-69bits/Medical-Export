import {
  LandingPage_default
} from "/build/_shared/chunk-H53RXVRL.js";
import {
  styles_default
} from "/build/_shared/chunk-LUFSLTAB.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-7DJE46GY.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-5SLK2DMJ.js";
import "/build/_shared/chunk-K7RZOPTS.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-DEL3LJMO.js";
import "/build/_shared/chunk-5JZYWJTA.js";
import "/build/_shared/chunk-TXWXPGP3.js";
import "/build/_shared/chunk-2275QL62.js";
import "/build/_shared/chunk-4RXEGKB4.js";
import "/build/_shared/chunk-CB7RP7O3.js";
import "/build/_shared/chunk-Y3Y77VXY.js";
import {
  require_storefront
} from "/build/_shared/chunk-AP3K5O7S.js";
import "/build/_shared/chunk-JRBIQKE5.js";
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
//# sourceMappingURL=/build/routes/$langstore/index-TSL2NPA3.js.map
