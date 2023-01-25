import {
  Shop_default
} from "/build/_shared/chunk-MOL2HNSO.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-NV23HDDE.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-5Q4QMBTC.js";
import "/build/_shared/chunk-FD6IBUGV.js";
import "/build/_shared/chunk-LMPJGALX.js";
import "/build/_shared/chunk-WPI3ONKJ.js";
import "/build/_shared/chunk-YA5K6EMU.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import "/build/_shared/chunk-K5IR6CTD.js";
import {
  require_jsx_dev_runtime,
  useLoaderData2 as useLoaderData
} from "/build/_shared/chunk-GGWIPN5P.js";
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
//# sourceMappingURL=/build/routes/$langstore/shop/index-757RFLY2.js.map
