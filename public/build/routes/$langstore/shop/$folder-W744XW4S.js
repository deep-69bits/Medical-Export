import {
  styles_default
} from "/build/_shared/chunk-LUFSLTAB.js";
import {
  Category_default
} from "/build/_shared/chunk-F643HUEK.js";
import "/build/_shared/chunk-4DWMQY2G.js";
import "/build/_shared/chunk-FXIJPGLV.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-A3223WB7.js";
import "/build/_shared/chunk-IQZC274B.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
import "/build/_shared/chunk-5VVI5M2I.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-GWWWGTTF.js";
import "/build/_shared/chunk-2AR2IWCB.js";
import "/build/_shared/chunk-5JA6TDFQ.js";
import "/build/_shared/chunk-K422RAHX.js";
import "/build/_shared/chunk-CN7AHYTM.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import {
  useLoaderData
} from "/build/_shared/chunk-KJFXDTSR.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/rc-slider/assets/index.css
var assets_default = "/build/_assets/index-NXU3OAQ7.css";

// src/routes/$langstore/shop/$folder.tsx
var import_storefront = __toESM(require_storefront());
var import_dataFetcherForShapePage = __toESM(require_dataFetcherForShapePage());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    { rel: "stylesheet", href: assets_default },
    { rel: "stylesheet", href: splide_default_min_default },
    { rel: "stylesheet", href: styles_default }
  ];
};
var meta = ({ data }) => {
  return buildMetas(data);
};
var folder_default = () => {
  const { data } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Category_default, { data }, void 0, false, {
    fileName: "src/routes/$langstore/shop/$folder.tsx",
    lineNumber: 40,
    columnNumber: 12
  }, this);
};
export {
  folder_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/shop/$folder-W744XW4S.js.map
