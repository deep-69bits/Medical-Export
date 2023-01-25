import {
  Shop_default
} from "/build/_shared/chunk-S536TJWM.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-CROVDKTE.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-WMKZH3EJ.js";
import "/build/_shared/chunk-PAAR2D64.js";
import "/build/_shared/chunk-NTU3S4GL.js";
import "/build/_shared/chunk-2EXSZD6Q.js";
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

// src/routes/$langstore/shop/index.tsx
var import_storefront = __toESM(require_storefront());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: splide_default_min_default }];
};
var meta = ({ data }) => {
  return buildMetas(data);
};
var shop_default = () => {
  const { shop } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shop_default, { shop }, void 0, false, {
    fileName: "src/routes/$langstore/shop/index.tsx",
    lineNumber: 41,
    columnNumber: 12
  }, this);
};
export {
  shop_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/shop/index-URPTFCWH.js.map
