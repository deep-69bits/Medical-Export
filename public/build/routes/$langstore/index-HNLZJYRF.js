import {
  styles_default
} from "/build/_shared/chunk-LUFSLTAB.js";
import {
  CategoryList
} from "/build/_shared/chunk-XASCCY3D.js";
import {
  Grid,
  splide_default_min_default
} from "/build/_shared/chunk-OWZIUL5B.js";
import {
  require_dataFetcherForShapePage
} from "/build/_shared/chunk-7MFRY4AM.js";
import {
  buildMetas
} from "/build/_shared/chunk-JHVSQUXW.js";
import "/build/_shared/chunk-C5MQ4KT2.js";
import {
  require_dist
} from "/build/_shared/chunk-ZIMYLYGD.js";
import {
  Link_default
} from "/build/_shared/chunk-NTU3S4GL.js";
import "/build/_shared/chunk-HET3URE2.js";
import "/build/_shared/chunk-H52OJRFM.js";
import {
  require_storefront
} from "/build/_shared/chunk-XY3KWW5M.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/routes/$langstore/index.tsx
var import_storefront = __toESM(require_storefront());

// src/ui/pages/LandingPage.tsx
var import_reactjs_components = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var LandingPage_default = ({ shop }) => {
  const { path, _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    shop.hero && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { grid: shop.hero }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "2xl container mx-auto px-4 md:px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4 pt-20 mb-10  items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-medium text-md text-md w-full block", children: _t("browse") }, void 0, false, {
          fileName: "src/ui/pages/LandingPage.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        shop.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link_default,
          {
            to: path(category.path),
            prefetch: "intent",
            className: "w-auto bg-grey py-2 sm:px-6 px-4 rounded-md sm:text-lg text-md font-bold category-link",
            children: category.name
          },
          category.name,
          false,
          {
            fileName: "src/ui/pages/LandingPage.tsx",
            lineNumber: 22,
            columnNumber: 25
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "src/ui/pages/LandingPage.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: shop.categories.map((category) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-[#dfdfdf] py-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  flex-col sm:flex-row sm:items-center justify-between ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/4 sm:w-2/4 leading-[1.5em]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-2xl mb-3", children: category.name }, void 0, false, {
                fileName: "src/ui/pages/LandingPage.tsx",
                lineNumber: 37,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_components.ContentTransformer, { className: "leading-1", json: (_a = category.description) == null ? void 0 : _a.json }, void 0, false, {
                fileName: "src/ui/pages/LandingPage.tsx",
                lineNumber: 38,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "src/ui/pages/LandingPage.tsx",
              lineNumber: 36,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link_default,
              {
                to: path(category.path),
                prefetch: "intent",
                className: "w-auto bg-grey py-2 px-6 text-center rounded-md text-md font-bold hover:bg-black hover:text-white mt-6 sm:mt-0",
                children: [
                  _t("view"),
                  " ",
                  category.name.toLowerCase()
                ]
              },
              category.name,
              true,
              {
                fileName: "src/ui/pages/LandingPage.tsx",
                lineNumber: 40,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/pages/LandingPage.tsx",
            lineNumber: 35,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CategoryList, { products: category.products }, void 0, false, {
            fileName: "src/ui/pages/LandingPage.tsx",
            lineNumber: 49,
            columnNumber: 29
          }, this)
        ] }, category.path, true, {
          fileName: "src/ui/pages/LandingPage.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this);
      }) }, void 0, false, {
        fileName: "src/ui/pages/LandingPage.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/LandingPage.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/LandingPage.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/index.tsx
var import_dataFetcherForShapePage = __toESM(require_dataFetcherForShapePage());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  return buildMetas(data.data);
};
var links = () => {
  return [
    { rel: "stylesheet", href: splide_default_min_default },
    { rel: "stylesheet", href: styles_default }
  ];
};
var langstore_default = () => {
  const { data } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LandingPage_default, { data }, void 0, false, {
    fileName: "src/routes/$langstore/index.tsx",
    lineNumber: 40,
    columnNumber: 12
  }, this);
};
export {
  langstore_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$langstore/index-HNLZJYRF.js.map
