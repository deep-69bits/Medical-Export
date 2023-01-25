import {
  styles_default
} from "/build/_shared/chunk-LUFSLTAB.js";
import {
  Category_default
} from "/build/_shared/chunk-XJNLOI4E.js";
import "/build/_shared/chunk-CHNWWHWB.js";
import {
  splide_default_min_default
} from "/build/_shared/chunk-3CHZUQSG.js";
import "/build/_shared/chunk-NV23HDDE.js";
import "/build/_shared/chunk-QCTIKFWS.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
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
//# sourceMappingURL=/build/routes/$langstore/shop/$folder-DUNG27IL.js.map
