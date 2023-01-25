import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import {
  useLoaderData
} from "/build/_shared/chunk-RQMWC5LJ.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/routes/$langstore/$.tsx
var import_storefront = __toESM(require_storefront());
var import_dataFetcherForShapePage = __toESM(require_dataFetcherForShapePage());
var meta = ({ data }) => {
  return buildMetas(data);
};
var __default = () => {
  const { data, shapeIdentifier } = useLoaderData();
};
export {
  __default as default,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/$-QBPYTUUQ.js.map
