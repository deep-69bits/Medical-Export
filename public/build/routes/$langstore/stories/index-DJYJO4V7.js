import {
  Shop_default
} from "/build/_shared/chunk-B5K5RD6J.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-BOKYP2BS.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-AWHSOKDC.js";
import "/build/_shared/chunk-BGMYITZX.js";
import "/build/_shared/chunk-5JZYWJTA.js";
import "/build/_shared/chunk-IAV27O4F.js";
import "/build/_shared/chunk-TQKLLVXH.js";
import {
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

// src/routes/$langstore/stories/index.tsx
var import_storefront = __toESM(require_storefront());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: splide_default_min_default }];
};
var meta = ({ data }) => {
  return buildMetas(data);
};
var stories_default = () => {
  const { shop } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shop_default, { shop }, void 0, false, {
    fileName: "src/routes/$langstore/stories/index.tsx",
    lineNumber: 42,
    columnNumber: 12
  }, this);
};
export {
  stories_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/stories/index-DJYJO4V7.js.map
