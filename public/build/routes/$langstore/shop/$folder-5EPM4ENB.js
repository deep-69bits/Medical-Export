import {
  styles_default
} from "/build/_shared/chunk-LUFSLTAB.js";
import {
  Category_default
} from "/build/_shared/chunk-GJO5O5S4.js";
import "/build/_shared/chunk-2VRHW7M3.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-U4OKM7PG.js";
import "/build/_shared/chunk-SEUAFLWG.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
import "/build/_shared/chunk-Y2AEM6CM.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-3IVKYXCY.js";
import "/build/_shared/chunk-2QYTND5B.js";
import "/build/_shared/chunk-K422RAHX.js";
import "/build/_shared/chunk-CN7AHYTM.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import {
  useLoaderData
} from "/build/_shared/chunk-EC77GNCO.js";
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
//# sourceMappingURL=/build/routes/$langstore/shop/$folder-5EPM4ENB.js.map
