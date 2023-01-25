import {
  Shop_default
} from "/build/_shared/chunk-ZCKXF7WA.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-MMJXXGBG.js";
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
//# sourceMappingURL=/build/routes/$langstore/stories/index-QWM6C3JR.js.map
