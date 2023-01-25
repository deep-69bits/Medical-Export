import {
  Shop_default
} from "/build/_shared/chunk-HQTNGI2Y.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-LO53PEJG.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-APRH63U7.js";
import "/build/_shared/chunk-NCDKWHWS.js";
import "/build/_shared/chunk-WIOVREQG.js";
import "/build/_shared/chunk-IX3OKAUK.js";
import "/build/_shared/chunk-HESTWH4A.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import "/build/_shared/chunk-ERLWENRC.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KQTXASIW.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

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
//# sourceMappingURL=/build/routes/$langstore/stories/index-DYQMEH6F.js.map
