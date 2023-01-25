import {
  require_dist
} from "/build/_shared/chunk-MJSFDQIK.js";
import {
  Link_default
} from "/build/_shared/chunk-NTU3S4GL.js";
import {
  DataMapper,
  choiceComponentWithId,
  chunksForChunkComponentWithId,
  itemsForItemRelationComponentWithId,
  numericValueForComponentWithId,
  stringForSingleLineComponentWithId
} from "/build/_shared/chunk-RKCQZDRT.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/components/item/document.tsx
var import_reactjs_components2 = __toESM(require_dist());

// src/ui/components/item/curated-product.tsx
var import_reactjs_components = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CuratedProduct = ({ item }) => {
  var _a;
  const { state: contextState, path } = useAppContext();
  const title = item.title;
  const description = item.description.plainText;
  const shoppableImage = (_a = item.medias.images) == null ? void 0 : _a[0];
  let merchandising = item.merchandising;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid min-h-[100%] w-full bg-[#F5F5F5] relative rounded-md border border-[#f5f5f5] hover:border-[#000]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-10 pt-20 pb-6 ", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: title }, void 0, false, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 22,
            columnNumber: 31
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "embed-text", children: description }, void 0, false, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 23,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/item/curated-product.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "img-container pl-10 w-full lg:col-span-3 self-start rounded-tl-lg relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute h-full w-full frntr-hotspot frntr-hotspot-microformat", children: merchandising.map((merch, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "span",
            {
              style: { left: merch.y + `%`, top: merch.y + "%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-sm shadow-sm px-2 pt-2 ", children: merch.products.map((product) => {
                var _a2;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "img-container img-cover w-[30px] h-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    import_reactjs_components.Image,
                    {
                      ...(_a2 = product.variant.images) == null ? void 0 : _a2[0],
                      sizes: "100px",
                      loading: "lazy",
                      fallbackAlt: product.name
                    },
                    void 0,
                    false,
                    {
                      fileName: "src/ui/components/item/curated-product.tsx",
                      lineNumber: 36,
                      columnNumber: 49
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "src/ui/components/item/curated-product.tsx",
                    lineNumber: 35,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs", children: product.name }, void 0, false, {
                      fileName: "src/ui/components/item/curated-product.tsx",
                      lineNumber: 44,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-bold", children: [
                      contextState.currency.code,
                      " ",
                      product.variant.priceVariants.default.value
                    ] }, void 0, true, {
                      fileName: "src/ui/components/item/curated-product.tsx",
                      lineNumber: 45,
                      columnNumber: 49
                    }, this)
                  ] }, void 0, true, {
                    fileName: "src/ui/components/item/curated-product.tsx",
                    lineNumber: 43,
                    columnNumber: 45
                  }, this)
                ] }, product.id, true, {
                  fileName: "src/ui/components/item/curated-product.tsx",
                  lineNumber: 34,
                  columnNumber: 41
                }, this);
              }) }, void 0, false, {
                fileName: "src/ui/components/item/curated-product.tsx",
                lineNumber: 32,
                columnNumber: 33
              }, this)
            },
            `hotspot-${merch.x}-${merch.y}`,
            false,
            {
              fileName: "src/ui/components/item/curated-product.tsx",
              lineNumber: 28,
              columnNumber: 29
            },
            this
          )) }, void 0, false, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_reactjs_components.Image, { ...shoppableImage, sizes: "50vw", fallbackAlt: title }, void 0, false, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 56,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/item/curated-product.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/item/curated-product.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/item/curated-product.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/item/document.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var DefaultDocument = ({ item }) => {
  var _a, _b, _c;
  const { path } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid min-h-[100%] bg-[#F5F5F5] rounded-md overflow-hidden border border-[#f5f5f5] hover:border-[#000]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full overflow-hidden w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-10 pt-20 h-1/3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: item.title }, void 0, false, {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "embed-text", children: (_a = item.description) == null ? void 0 : _a.plainText }, void 0, false, {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 29,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/item/document.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pl-10 pt-10 max-w-full h-full min-h-[400px] img-container overflow-hidden rounded-t-l-md img-cover grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_reactjs_components2.Image,
          {
            ...(_c = (_b = item.medias) == null ? void 0 : _b.images) == null ? void 0 : _c[0],
            sizes: "300px",
            loading: "lazy",
            className: "overflow-hidden rounded-tl-md "
          },
          void 0,
          false,
          {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 32,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "src/ui/components/item/document.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/item/document.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/item/document.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
};
var Document = ({ item }) => {
  if (item.type === "curated-product-story") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CuratedProduct, { item }, void 0, false, {
      fileName: "src/ui/components/item/document.tsx",
      lineNumber: 46,
      columnNumber: 16
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DefaultDocument, { item }, void 0, false, {
    fileName: "src/ui/components/item/document.tsx",
    lineNumber: 48,
    columnNumber: 12
  }, this);
};
var DocumentFromCell = ({ item }) => {
  var _a, _b, _c, _d;
  const mapper = DataMapper();
  const common = {
    name: item.name,
    path: item.path,
    title: stringForSingleLineComponentWithId(item.components, "title") || item.name
  };
  if (item.shape.identifier === "curated-product-story") {
    const intro2 = (_a = item.components.find((c) => c.id === "description")) == null ? void 0 : _a.content;
    const media2 = (_b = item.components.find((c) => c.id === "shoppable-image")) == null ? void 0 : _b.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Document,
      {
        item: {
          ...common,
          description: intro2,
          type: "curated-product-story",
          medias: {
            images: mapper.API.Object.APIImageToImage(media2.images),
            videos: []
          },
          merchandising: ((_c = chunksForChunkComponentWithId(item.components, "merchandising")) == null ? void 0 : _c.map((chunk) => {
            var _a2;
            return {
              products: ((_a2 = itemsForItemRelationComponentWithId(chunk, "products")) == null ? void 0 : _a2.map((product) => {
                return {
                  id: product.id,
                  name: product.name,
                  path: product.path,
                  variant: mapper.API.Object.APIProductVariantToProductVariant(
                    product.defaultVariant
                  ),
                  topics: []
                };
              })) || [],
              x: numericValueForComponentWithId(chunk, "hotspot-x") || 0,
              y: numericValueForComponentWithId(chunk, "hotspot-y") || 0
            };
          })) || []
        }
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/item/document.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    );
  }
  const intro = (_d = item.components.find((c) => c.id === "intro")) == null ? void 0 : _d.content;
  const media = choiceComponentWithId(item.components, "media");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Document,
    {
      item: {
        ...common,
        description: intro,
        type: "story",
        medias: {
          images: media ? mapper.API.Object.APIImageToImage(media.content.images) : [],
          videos: []
        }
      }
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/item/document.tsx",
      lineNumber: 99,
      columnNumber: 9
    },
    this
  );
};

export {
  Document,
  DocumentFromCell
};
//# sourceMappingURL=/build/_shared/chunk-CDYRURAA.js.map
