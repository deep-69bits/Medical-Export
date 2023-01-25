import {
  Splide2,
  SplideSlide
} from "/build/_shared/chunk-5S2Z7MRZ.js";
import {
  ProductFromCell
} from "/build/_shared/chunk-C5MQ4KT2.js";
import {
  require_dist,
  require_grid,
  require_video
} from "/build/_shared/chunk-ZIMYLYGD.js";
import {
  Link_default
} from "/build/_shared/chunk-NTU3S4GL.js";
import {
  DataMapper,
  choiceComponentWithId,
  chunksForChunkComponentWithId,
  itemsForItemRelationComponentWithId,
  numericValueForComponentWithId,
  require_image,
  stringForSingleLineComponentWithId
} from "/build/_shared/chunk-HET3URE2.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/lib/grid-tile/grid.tsx
var import_grid = __toESM(require_grid());

// src/ui/lib/grid-tile/generic-item.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var GenericItem = ({ item }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `crystallize-generic-item`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.path, children: (_a = item.name) != null ? _a : "" }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-item.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-item.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
};

// src/ui/lib/grid-tile/generic-tile-view.tsx
var import_video = __toESM(require_video());
var import_image = __toESM(require_image());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var GenericTileView = ({ tile, options }) => {
  const { title, description, content, ctas, styling } = tile;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      className: `crystallize-generic-tile-view view-${tile.view}`,
      style: { backgroundColor: styling == null ? void 0 : styling.background.color },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "crystallize-generic-tile-view-header", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: title }, void 0, false, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 14,
            columnNumber: 27
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: description }, void 0, false, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 15,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "crystallize-generic-tile-view-body", children: [
          content.images && content.images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GenericTileViewWithImage, { image: content.images[0] }, void 0, false, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 18,
            columnNumber: 65
          }, this),
          content.videos && content.videos.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GenericTileViewWithVideo, { video: content.videos[0] }, void 0, false, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 19,
            columnNumber: 65
          }, this),
          content.items && content.items.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GenericTileViewWithItems, { items: content.items }, void 0, false, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 20,
            columnNumber: 63
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        ctas && ctas.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "crystallize-generic-tile-view-ctas", children: ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "crystallize-generic-tile-view-cta", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: cta.link, children: cta.text }, void 0, false, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 27,
          columnNumber: 29
        }, this) }, cta.link, false, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this)) }, void 0, false, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  );
};
var GenericTileViewWithItems = ({ items }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "crystallize-generic-tile-view-body-items", children: items.map((item, index) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GenericTileViewWithEmbed, { item }, index, false, {
      fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
      lineNumber: 40,
      columnNumber: 24
    }, this);
  }) }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this);
};
var GenericTileViewWithEmbed = ({ item }) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "crystallize-generic-tile-view-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.path, children: (_a = item.name) != null ? _a : "" }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
    lineNumber: 49,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
};
var GenericTileViewWithImage = ({ image }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "crystallize-generic-tile-view-image ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_image.Image, { ...image, sizes: "(max-width: 500px) 300px, 700px", loading: "lazy" }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
    lineNumber: 57,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this);
};
var GenericTileViewWithVideo = ({ video }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "crystallize-generic-tile-view-video", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_video.Video, { ...video }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
    lineNumber: 65,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
    lineNumber: 64,
    columnNumber: 9
  }, this);
};

// src/ui/lib/grid-tile/grid.tsx
var import_video2 = __toESM(require_video());
var import_image2 = __toESM(require_image());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Grid = ({
  grid,
  tileViewComponentMapping,
  itemComponentMapping,
  type = import_grid.GridRenderingType.RowCol,
  options,
  style,
  styleForCell
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_grid.GridRenderer,
    {
      grid,
      type,
      styleForCell,
      style,
      cellComponent: ({ cell, dimensions, children }) => {
        const cellItem = cell == null ? void 0 : cell.item;
        if (!cellItem) {
          return null;
        }
        const tile = normalizeTile(cellItem);
        if (tile == null ? void 0 : tile.view) {
          const Component2 = tileViewComponentMapping[tile.view] || GenericTileView;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tile, { tile, options, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Component2, { tile, options: { dimensions, layout: cell.layout }, children }, void 0, false, {
            fileName: "src/ui/lib/grid-tile/grid.tsx",
            lineNumber: 45,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "src/ui/lib/grid-tile/grid.tsx",
            lineNumber: 44,
            columnNumber: 25
          }, this);
        }
        const Component = itemComponentMapping[cellItem.type.toLowerCase()] || GenericItem;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: options == null ? void 0 : options.style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Component, { item: cellItem, options: { dimensions, layout: cell.layout }, children }, void 0, false, {
          fileName: "src/ui/lib/grid-tile/grid.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "src/ui/lib/grid-tile/grid.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this);
      }
    },
    void 0,
    false,
    {
      fileName: "src/ui/lib/grid-tile/grid.tsx",
      lineNumber: 29,
      columnNumber: 9
    },
    this
  );
};
var Tile = ({
  tile,
  children,
  options
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let backgroundElement = null;
  const { background } = tile;
  if (background.images && background.images.length > 0) {
    backgroundElement = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "crystallize-background-image", style: (_a = options == null ? void 0 : options.background) == null ? void 0 : _a.style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_image2.Image,
      {
        ...background.images[0],
        ...(_b = options == null ? void 0 : options.background) == null ? void 0 : _b.imageProps,
        size: "100vw",
        fallbackAlt: tile.title
      },
      void 0,
      false,
      {
        fileName: "src/ui/lib/grid-tile/grid.tsx",
        lineNumber: 74,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "src/ui/lib/grid-tile/grid.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this);
  }
  if (background.videos && background.videos.length > 0) {
    backgroundElement = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "crystallize-background-video", style: (_c = options == null ? void 0 : options.background) == null ? void 0 : _c.style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_video2.Video,
      {
        ...background.videos[0],
        ...(_d = options == null ? void 0 : options.background) == null ? void 0 : _d.imageProps,
        autoPlay: true,
        loop: true,
        muted: true,
        controls: false
      },
      void 0,
      false,
      {
        fileName: "src/ui/lib/grid-tile/grid.tsx",
        lineNumber: 86,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "src/ui/lib/grid-tile/grid.tsx",
      lineNumber: 85,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      className: `crystallize-tile crystallize-tile-view-${tile.view} ${tile.cssPreset ? "crystallize-tile-preset-" + tile.cssPreset : ""}`,
      style: {
        ...options == null ? void 0 : options.style,
        background: (_g = (_f = (_e = tile.styling) == null ? void 0 : _e.background) == null ? void 0 : _f.color) != null ? _g : null,
        color: (_j = (_i = (_h = tile.styling) == null ? void 0 : _h.font) == null ? void 0 : _i.color) != null ? _j : null
      },
      children: [
        backgroundElement,
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { width: "100%", zIndex: 20 }, children }, void 0, false, {
          fileName: "src/ui/lib/grid-tile/grid.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/lib/grid-tile/grid.tsx",
      lineNumber: 98,
      columnNumber: 9
    },
    this
  );
};
var componentContent = (cellItem, id, fallbackValue = void 0) => {
  const component = cellItem.components.find((component2) => component2.id === id);
  return (component == null ? void 0 : component.content) || fallbackValue;
};
var componentChoiceContent = (cellItem, id, choiceId, fallbackValue = void 0) => {
  var _a, _b;
  const component = cellItem.components.find((component2) => component2.id === id);
  return ((_b = (_a = component == null ? void 0 : component.content) == null ? void 0 : _a.selectedComponent) == null ? void 0 : _b.content[choiceId]) || fallbackValue;
};
var componentChunkContent = (cellItem, id, chunkId, fallbackValue = void 0) => {
  var _a, _b;
  const component = cellItem.components.find((component2) => component2.id === id);
  const chunk = (_b = (_a = component == null ? void 0 : component.content) == null ? void 0 : _a.chunks[0]) == null ? void 0 : _b.find((chunk2) => chunk2.id === chunkId);
  return (chunk == null ? void 0 : chunk.content) || fallbackValue;
};
var normalizeTile = (cellItem) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const components = cellItem.components;
  if (!components) {
    return null;
  }
  const styling = (_b = (_a = componentChunkContent(cellItem, "styling", "properties", [])) == null ? void 0 : _a.sections) == null ? void 0 : _b.reduce(
    (result, section) => {
      const sectionName = section.title.toLowerCase();
      section.properties.forEach((property) => {
        if (!result[sectionName]) {
          result[sectionName] = {};
        }
        result[sectionName][property.key.toLowerCase()] = property.value;
      });
      return result;
    },
    {}
  );
  return {
    view: (_d = (_c = componentContent(cellItem, "view")) == null ? void 0 : _c.options[0]) == null ? void 0 : _d.value.toLowerCase(),
    title: (_e = componentContent(cellItem, "title")) == null ? void 0 : _e.text,
    description: (_f = componentContent(cellItem, "description")) == null ? void 0 : _f.plainText.join(" "),
    content: {
      images: componentChoiceContent(cellItem, "content", "images") || void 0,
      videos: componentChoiceContent(cellItem, "content", "videos") || void 0,
      items: componentChoiceContent(cellItem, "content", "items") || void 0
    },
    ctas: ((_g = componentContent(cellItem, "ctas")) == null ? void 0 : _g.chunks.map((cta) => {
      var _a2, _b2;
      return {
        text: (_a2 = cta[0].content) == null ? void 0 : _a2.text,
        link: (_b2 = cta[1].content) == null ? void 0 : _b2.text
      };
    })) || [],
    background: {
      images: componentChoiceContent(cellItem, "background", "images") || void 0,
      videos: componentChoiceContent(cellItem, "background", "videos") || void 0
    },
    styling,
    isFullWidth: ((_h = componentChunkContent(cellItem, "styling", "use-full-width")) == null ? void 0 : _h.value) || false,
    cssPreset: (_l = (_k = (_j = (_i = componentChunkContent(cellItem, "styling", "css-preset")) == null ? void 0 : _i.options) == null ? void 0 : _j[0]) == null ? void 0 : _k.key) == null ? void 0 : _l.toLowerCase()
  };
};

// src/ui/components/item/document.tsx
var import_reactjs_components2 = __toESM(require_dist());

// src/ui/components/item/curated-product.tsx
var import_reactjs_components = __toESM(require_dist());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var CuratedProduct = ({ item }) => {
  var _a;
  const { state: contextState, path } = useAppContext();
  const title = item.title;
  const description = item.description.plainText;
  const shoppableImage = (_a = item.medias.images) == null ? void 0 : _a[0];
  let merchandising = item.merchandising;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid min-h-[100%] w-full bg-[#F5F5F5] relative rounded-md border border-[#f5f5f5] hover:border-[#000]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-10 pt-20 pb-6 ", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: title }, void 0, false, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 22,
            columnNumber: 31
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "embed-text", children: description }, void 0, false, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 23,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/item/curated-product.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "img-container pl-10 w-full lg:col-span-3 self-start rounded-tl-lg relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute h-full w-full frntr-hotspot frntr-hotspot-microformat", children: merchandising.map((merch, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "span",
            {
              style: { left: merch.y + `%`, top: merch.y + "%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-sm shadow-sm px-2 pt-2 ", children: merch.products.map((product) => {
                var _a2;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-2 pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "img-container img-cover w-[30px] h-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-xs", children: product.name }, void 0, false, {
                      fileName: "src/ui/components/item/curated-product.tsx",
                      lineNumber: 44,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-xs font-bold", children: [
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactjs_components.Image, { ...shoppableImage, sizes: "50vw", fallbackAlt: title }, void 0, false, {
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
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var DefaultDocument = ({ item }) => {
  var _a, _b, _c;
  const { path } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid min-h-[100%] bg-[#F5F5F5] rounded-md overflow-hidden border border-[#f5f5f5] hover:border-[#000]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full overflow-hidden w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "px-10 pt-20 h-1/3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: item.title }, void 0, false, {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "embed-text", children: (_a = item.description) == null ? void 0 : _a.plainText }, void 0, false, {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 29,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/item/document.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pl-10 pt-10 max-w-full h-full min-h-[400px] img-container overflow-hidden rounded-t-l-md img-cover grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CuratedProduct, { item }, void 0, false, {
      fileName: "src/ui/components/item/document.tsx",
      lineNumber: 46,
      columnNumber: 16
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DefaultDocument, { item }, void 0, false, {
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
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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

// src/ui/components/grid/tiles/banner.tsx
var import_image3 = __toESM(require_image());

// src/ui/lib/grid-tile/linkRenderer.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var LinkRenderer = ({ link, text }) => {
  return link.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: text }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/linkRenderer.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link_default, { to: link, children: text }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/linkRenderer.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/tiles/banner.tsx
var import_reactjs_components3 = __toESM(require_dist());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var Banner = ({ tile }) => {
  const { title, description, ctas, isFullWidth, content, styling } = tile;
  const { images, videos } = content;
  const { font, button } = styling || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "div",
    {
      className: ` flex md:flex-row flex-col  w-full mx-auto  ${isFullWidth ? "px-8 lg:px-10 max-w-[1600px] w-full items-center pt-10  md:py-0 " : "pl-10 pt-20"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            className: `${!(images == null ? void 0 : images.length) ? "py-40" : isFullWidth ? "md:w-1/2" : "md:w-2/5"} items-center pr-8 flex-column relative z-10 `,
            children: [
              title && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "h1",
                {
                  className: `text-[1em] leading-[1.2em] font-bold mb-3`,
                  style: { fontSize: font ? font.size : "2rem" },
                  children: title
                },
                void 0,
                false,
                {
                  fileName: "src/ui/components/grid/tiles/banner.tsx",
                  lineNumber: 23,
                  columnNumber: 21
                },
                this
              ),
              description && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: `mt-2 mb-5 max-w-[400px] leading-[1.6em]`, children: description }, void 0, false, {
                fileName: "src/ui/components/grid/tiles/banner.tsx",
                lineNumber: 30,
                columnNumber: 33
              }, this),
              ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "button",
                {
                  className: "px-8 py-4 rounded font-medium",
                  style: {
                    color: (button == null ? void 0 : button.color) ? button.color : "#fff",
                    backgroundColor: (button == null ? void 0 : button["background color"]) ? button["background color"] : "#000",
                    fontSize: (button == null ? void 0 : button["font size"]) ? button["font size"] : "1rem"
                  },
                  children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, false, {
                    fileName: "src/ui/components/grid/tiles/banner.tsx",
                    lineNumber: 42,
                    columnNumber: 41
                  }, this) : cta.text
                },
                cta.text,
                false,
                {
                  fileName: "src/ui/components/grid/tiles/banner.tsx",
                  lineNumber: 33,
                  columnNumber: 25
                },
                this
              ))
            ]
          },
          void 0,
          true,
          {
            fileName: "src/ui/components/grid/tiles/banner.tsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        images && images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "self-end md:w-8/12 w-full pt-10 img-container img-contain md:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_image3.Image,
          {
            ...images[0],
            sizes: "(max-width: 500px) 300px, 700px",
            loading: "lazy",
            className: "max-w-none w-full"
          },
          void 0,
          false,
          {
            fileName: "src/ui/components/grid/tiles/banner.tsx",
            lineNumber: 48,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "src/ui/components/grid/tiles/banner.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        videos && videos.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "md:w-8/12 w-full img-container img-contain md:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_reactjs_components3.Video, { ...videos[0], thumbnmailProps: { sizes: "(max-width: 700px) 90vw, 700px" } }, void 0, false, {
          fileName: "src/ui/components/grid/tiles/banner.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "src/ui/components/grid/tiles/banner.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/grid/tiles/banner.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/grid/tiles/embed.tsx
var import_image4 = __toESM(require_image());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var Embed = ({ tile }) => {
  var _a, _b, _c;
  const { path } = useAppContext();
  const { title, description, content, ctas } = tile;
  if (!content.items || content.items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Nothing has been embedded." }, void 0, false, {
      fileName: "src/ui/components/grid/tiles/embed.tsx",
      lineNumber: 11,
      columnNumber: 16
    }, this);
  }
  const firstItem = content.items[0];
  const firstItemImage = (_c = (_b = (_a = firstItem.components.find((component) => component.id === "media")) == null ? void 0 : _a.content) == null ? void 0 : _b.selectedComponent) == null ? void 0 : _c.content;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Link_default, { to: path(firstItem.path), prefetch: "intent", className: "grid min-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full overflow-hidden w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "px-10 pt-20 md:h-1/3 ", children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: title }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 21,
        columnNumber: 31
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "embed-text", children: description }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 22,
        columnNumber: 37
      }, this),
      ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { className: "bg-ctaBlue px-8 py-4 rounded font-medium", children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 26,
        columnNumber: 45
      }, this) : cta.text }, cta.link, false, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 25,
        columnNumber: 29
      }, this))
    ] }, void 0, true, {
      fileName: "src/ui/components/grid/tiles/embed.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "pl-10 pt-10 max-w-full h-full img-container overflow-hidden rounded-t-l-md img-cover grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_image4.Image,
      {
        ...firstItemImage == null ? void 0 : firstItemImage.firstImage,
        sizes: "300px",
        loading: "lazy",
        className: "overflow-hidden rounded-tl-md "
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 31,
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "src/ui/components/grid/tiles/embed.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/grid/tiles/embed.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/grid/tiles/embed.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/tiles/slider.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var itemMapping = {
  product: ProductFromCell,
  document: DocumentFromCell
};
var Slider = ({ tile, options }) => {
  const { dimensions, layout } = options;
  let colspan = layout.colspan;
  const { title, description, content, ctas, styling } = tile;
  const spansOverAllColumns = layout.colspan === dimensions.cols;
  const hasBackgroundColor = styling == null ? void 0 : styling.background.color;
  const isFullWidth = tile.isFullWidth;
  const setInnerPadding = () => {
    if (!spansOverAllColumns) {
      return "pl-10";
    }
    if (spansOverAllColumns && !isFullWidth && hasBackgroundColor) {
      return "px-10";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: `${isFullWidth ? "px-8 lg:px-10 max-w-[1650px] w-full mx-auto" : "w-full"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: `pb-10  pt-20 ${setInnerPadding()}`, children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: `${colspan > 2 ? "text-3xl" : "text-2xl"} mb-3 font-bold`, children: title }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 30,
        columnNumber: 27
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: `embed-text ${colspan > 2 ? "w-2/4" : "w-5/5"}`, children: description }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 31,
        columnNumber: 33
      }, this),
      ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "bg-ctaBlue px-8 py-4 rounded font-medium", children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 35,
        columnNumber: 41
      }, this) : cta.text }, cta.link, false, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 34,
        columnNumber: 25
      }, this))
    ] }, void 0, true, {
      fileName: "src/ui/components/grid/tiles/slider.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: setInnerPadding(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      Splide2,
      {
        options: {
          rewind: true,
          perPage: spansOverAllColumns ? 5 : 2,
          breakpoints: {
            1200: {
              perPage: 4
            },
            940: {
              perPage: 3
            },
            480: {
              perPage: 2
            }
          },
          pagination: false,
          gap: 10
        },
        className: "splide ",
        children: content.items && content.items.map((item) => {
          const Component = itemMapping[item.type];
          return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SplideSlide, { className: "slide items-stretch pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Component, { item }, void 0, false, {
            fileName: "src/ui/components/grid/tiles/slider.tsx",
            lineNumber: 66,
            columnNumber: 37
          }, this) }, item.name, false, {
            fileName: "src/ui/components/grid/tiles/slider.tsx",
            lineNumber: 65,
            columnNumber: 33
          }, this);
        })
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 41,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "src/ui/components/grid/tiles/slider.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/grid/tiles/slider.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/grid.tsx
var import_reactjs_components4 = __toESM(require_dist());

// src/ui/components/grid/tiles/hero-slider.tsx
var import_image5 = __toESM(require_image());
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
var HeroSlider = ({ tile }) => {
  const { content } = tile;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "w-full hero-slider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    Splide2,
    {
      options: {
        perPage: 1,
        autoplay: true,
        interval: 4e3,
        pagination: true,
        arrows: false,
        gap: 0
      },
      children: content.images && content.images.map((image) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SplideSlide, { className: "slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_image5.Image,
          {
            ...image,
            loading: "eager",
            sizes: "(max-width: 500px) 300px, 700px",
            className: "h-[300px] sm:h-[400px] lg:h-[700px] [&>picture>img]:w-full [&>picture>img]:h-full [&>picture>img]:object-cover"
          },
          void 0,
          false,
          {
            fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
            lineNumber: 24,
            columnNumber: 33
          },
          this
        ) }, image.url, false, {
          fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
          lineNumber: 23,
          columnNumber: 29
        }, this);
      })
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
      lineNumber: 10,
      columnNumber: 13
    },
    this
  ) }, void 0, false, {
    fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/grid.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime());
var tileMapping = {
  banner: Banner,
  embed: Embed,
  slider: Slider,
  heroslider: HeroSlider
};
var itemMapping2 = {
  product: ProductFromCell,
  document: DocumentFromCell
};
var Grid2 = ({ grid }) => {
  var _a;
  if ((((_a = grid == null ? void 0 : grid.rows) == null ? void 0 : _a.length) || 0) === 0) {
    return null;
  }
  const totalColumns = grid.rows[0].columns.reduce((acc, col) => acc + col.layout.colspan, 0);
  const colWidth = Math.round(1530 / totalColumns);
  const styleForCell = (cell, styles) => {
    var _a2, _b, _c, _d;
    if (!(cell == null ? void 0 : cell.item)) {
      return styles;
    }
    const component = cell.item.components.find((component2) => component2.id === "styling");
    if (!component) {
      return {
        ...styles,
        gridColumn: `${cell.layout.colIndex + 2} / span ${cell.layout.colspan}`,
        gridRow: `${cell.layout.rowIndex + 1} / span ${cell.layout.rowspan}`
      };
    }
    const isFullWidth = (_d = (_c = (_b = (_a2 = component == null ? void 0 : component.content) == null ? void 0 : _a2.chunks[0]) == null ? void 0 : _b.find((chunk) => chunk.id === "use-full-width")) == null ? void 0 : _c.content) == null ? void 0 : _d.value;
    if (!isFullWidth) {
      return {
        ...styles,
        gridColumn: `${cell.layout.colIndex + 2} / span ${cell.layout.colspan}`,
        gridRow: `${cell.layout.rowIndex + 1} / span ${cell.layout.rowspan}`
      };
    }
    return {
      ...styles,
      gridColumn: `1 / span ${totalColumns + 2}`,
      gridRow: `auto / span ${cell.layout.rowspan}`
    };
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "frntr-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    Grid,
    {
      grid,
      itemComponentMapping: itemMapping2,
      tileViewComponentMapping: tileMapping,
      type: import_reactjs_components4.GridRenderingType.Div,
      styleForCell,
      style: {
        gridTemplateColumns: `minmax(15px, 1fr) repeat(${totalColumns}, minmax(0, ${colWidth}px)) minmax(15px, 1fr)`,
        gridAutoRows: "minmax(300px, auto)"
      },
      options: {
        background: {
          style: {
            objectFit: "cover"
          },
          imageProps: {
            sizes: "(max-width: 500px) 500px, 100vw",
            loading: "lazy"
          }
        },
        style: {
          position: "relative",
          width: "100%",
          zIndex: 20,
          minHeight: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "stretch"
        }
      }
    },
    void 0,
    false,
    {
      fileName: "src/ui/components/grid/grid.tsx",
      lineNumber: 61,
      columnNumber: 13
    },
    this
  ) }, void 0, false, {
    fileName: "src/ui/components/grid/grid.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this);
};

export {
  Grid2 as Grid
};
//# sourceMappingURL=/build/_shared/chunk-CM5RBGZU.js.map
