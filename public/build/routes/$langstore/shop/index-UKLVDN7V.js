import {
  Shop_default
} from "/build/_shared/chunk-FI2MET73.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-DM2W4FZ7.js";
import "/build/_shared/chunk-35NHMYSV.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-TDJC5KJX.js";
import "/build/_shared/chunk-5X4BUK4H.js";
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
  console.log("fuck", shop);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shop_default, { shop }, void 0, false, {
    fileName: "src/routes/$langstore/shop/index.tsx",
    lineNumber: 42,
    columnNumber: 12
  }, this);
};
export {
  shop_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/shop/index-UKLVDN7V.js.map
