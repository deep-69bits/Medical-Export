import {
  DocumentFromCell
} from "/build/_shared/chunk-FTXGAGT7.js";
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
  require_image
} from "/build/_shared/chunk-HET3URE2.js";
import {
  useAppContext
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_jsx_dev_runtime,
  require_react
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
  style: style2,
  styleForCell
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_grid.GridRenderer,
    {
      grid,
      type,
      styleForCell,
      style: style2,
      cellComponent: ({ cell, dimensions, children: children2 }) => {
        const cellItem = cell == null ? void 0 : cell.item;
        if (!cellItem) {
          return null;
        }
        const tile = normalizeTile(cellItem);
        if (tile == null ? void 0 : tile.view) {
          const Component2 = tileViewComponentMapping[tile.view] || GenericTileView;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tile, { tile, options, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Component2, { tile, options: { dimensions, layout: cell.layout }, children: children2 }, void 0, false, {
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
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: options == null ? void 0 : options.style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Component, { item: cellItem, options: { dimensions, layout: cell.layout }, children: children2 }, void 0, false, {
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
  children: children2,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { width: "100%", zIndex: 20 }, children: children2 }, void 0, false, {
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

// src/ui/components/grid/tiles/banner.tsx
var import_image3 = __toESM(require_image());

// src/ui/lib/grid-tile/linkRenderer.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var LinkRenderer = ({ link, text }) => {
  return link.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: text }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/linkRenderer.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link_default, { to: link, children: text }, void 0, false, {
    fileName: "src/ui/lib/grid-tile/linkRenderer.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/tiles/banner.tsx
var import_reactjs_components = __toESM(require_dist());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var Banner = ({ tile }) => {
  const { title, description, ctas, isFullWidth, content, styling } = tile;
  const { images, videos } = content;
  const { font, button } = styling || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: ` flex md:flex-row flex-col  w-full mx-auto  ${isFullWidth ? "px-8 lg:px-10 max-w-[1600px] w-full items-center pt-10  md:py-0 " : "pl-10 pt-20"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            className: `${!(images == null ? void 0 : images.length) ? "py-40" : isFullWidth ? "md:w-1/2" : "md:w-2/5"} items-center pr-8 flex-column relative z-10 `,
            children: [
              title && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
              description && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: `mt-2 mb-5 max-w-[400px] leading-[1.6em]`, children: description }, void 0, false, {
                fileName: "src/ui/components/grid/tiles/banner.tsx",
                lineNumber: 30,
                columnNumber: 33
              }, this),
              ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                "button",
                {
                  className: "px-8 py-4 rounded font-medium",
                  style: {
                    color: (button == null ? void 0 : button.color) ? button.color : "#fff",
                    backgroundColor: (button == null ? void 0 : button["background color"]) ? button["background color"] : "#000",
                    fontSize: (button == null ? void 0 : button["font size"]) ? button["font size"] : "1rem"
                  },
                  children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, false, {
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
        images && images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "self-end md:w-8/12 w-full pt-10 img-container img-contain md:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
        videos && videos.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "md:w-8/12 w-full img-container img-contain md:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_reactjs_components.Video, { ...videos[0], thumbnmailProps: { sizes: "(max-width: 700px) 90vw, 700px" } }, void 0, false, {
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
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var Embed = ({ tile }) => {
  var _a, _b, _c;
  const { path } = useAppContext();
  const { title, description, content, ctas } = tile;
  if (!content.items || content.items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Nothing has been embedded." }, void 0, false, {
      fileName: "src/ui/components/grid/tiles/embed.tsx",
      lineNumber: 11,
      columnNumber: 16
    }, this);
  }
  const firstItem = content.items[0];
  const firstItemImage = (_c = (_b = (_a = firstItem.components.find((component) => component.id === "media")) == null ? void 0 : _a.content) == null ? void 0 : _b.selectedComponent) == null ? void 0 : _c.content;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link_default, { to: path(firstItem.path), prefetch: "intent", className: "grid min-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full overflow-hidden w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-10 pt-20 md:h-1/3 ", children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: title }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 21,
        columnNumber: 31
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "embed-text", children: description }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 22,
        columnNumber: 37
      }, this),
      ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "bg-ctaBlue px-8 py-4 rounded font-medium", children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pl-10 pt-10 max-w-full h-full img-container overflow-hidden rounded-t-l-md img-cover grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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

// node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js
var import_react = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_react3 = __toESM(require_react());
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED,
  MOUNTED,
  IDLE,
  MOVING,
  SCROLLING,
  DRAGGING,
  DESTROYED
};
function empty(array) {
  array.length = 0;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop2() {
};
function raf(func) {
  return requestAnimationFrame(func);
}
function typeOf(type, subject) {
  return typeof subject === type;
}
function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
  return subject === null;
}
function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}
function toArray(value) {
  return isArray(value) ? value : [value];
}
function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}
function includes(array, value) {
  return array.indexOf(value) > -1;
}
function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}
function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function(name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}
function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children2) {
  forEach(children2, parent.appendChild.bind(parent));
}
function before(nodes, ref) {
  forEach(nodes, function(node) {
    var parent = (ref || node).parentNode;
    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}
function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function(child2) {
    return matches(child2, selector);
  }) : children2;
}
function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }
  return object;
}
function assign(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn(source, function(value, key) {
      object[key] = source[key];
    });
  });
  return object;
}
function merge(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn(source, function(value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}
function omit(object, keys) {
  forEach(keys || ownKeys(object), function(key) {
    delete object[key];
  });
}
function removeAttribute(elms, attrs) {
  forEach(elms, function(elm) {
    forEach(attrs, function(attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}
function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function(value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function(elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}
function create(tag, attrs, parent) {
  var elm = document.createElement(tag);
  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }
  parent && append(parent, elm);
  return elm;
}
function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }
  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}
function display(elm, display2) {
  style(elm, "display", display2);
}
function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}
function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}
function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}
function rect(target) {
  return target.getBoundingClientRect();
}
function remove(nodes) {
  forEach(nodes, function(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
  e.preventDefault();
  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}
function query(parent, selector) {
  return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}
function timeOf(e) {
  return e.timeStamp;
}
function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}
var min = Math.min;
var max = Math.max;
var floor = Math.floor;
var ceil = Math.ceil;
var abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}
function sign(x) {
  return +(x > 0) - +(x < 0);
}
function format(string, replacements) {
  forEach(replacements, function(replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}
function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
  var listeners = [];
  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function(target, event, namespace) {
      var isEventTarget = "addEventListener" in target;
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }
  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function(target, event, namespace) {
      listeners = listeners.filter(function(listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }
        return true;
      });
    });
  }
  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;
    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles,
        detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }
    target.dispatchEvent(e);
    return e;
  }
  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function(target) {
      target && forEach(events, function(events2) {
        events2.split(" ").forEach(function(eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }
  function destroy() {
    listeners.forEach(function(data) {
      data[4]();
    });
    empty(listeners);
  }
  return {
    bind,
    unbind,
    dispatch,
    destroy
  };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide22) {
  var bus = Splide22 ? Splide22.event.bus : document.createDocumentFragment();
  var binder = EventBinder();
  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function(e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }
  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }
  if (Splide22) {
    Splide22.event.on(EVENT_DESTROY, binder.destroy);
  }
  return assign(binder, {
    bus,
    on,
    off: apply(binder.unbind, bus),
    emit
  });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;
  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);
      if (rate >= 1) {
        onInterval();
        startTime = now();
        if (limit && ++count >= limit) {
          return pause();
        }
      }
      id = raf(update);
    }
  }
  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }
  function pause() {
    paused = true;
  }
  function rewind() {
    startTime = now();
    rate = 0;
    if (onUpdate) {
      onUpdate(rate);
    }
  }
  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }
  function set(time) {
    interval = time;
  }
  function isPaused() {
    return paused;
  }
  return {
    start,
    rewind,
    pause,
    cancel,
    set,
    isPaused
  };
}
function State(initialState) {
  var state = initialState;
  function set(value) {
    state = value;
  }
  function is(states) {
    return includes(toArray(states), state);
  }
  return {
    set,
    is
  };
}
function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function() {
    interval.isPaused() && interval.start();
  };
}
function Media(Splide22, Components2, options) {
  var state = Splide22.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];
  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function(n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function(key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }
  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }
  function register(options2, query2) {
    var queryList = matchMedia(query2);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }
  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function(merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);
    if (options.destroy) {
      Splide22.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide22.mount();
    } else {
      direction !== options.direction && Splide22.refresh();
    }
  }
  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }
  function set(opts, base, notify) {
    merge(options, opts);
    base && merge(Object.getPrototypeOf(options), opts);
    if (notify || !state.is(CREATED)) {
      Splide22.emit(EVENT_UPDATED, options);
    }
  }
  return {
    setup,
    destroy,
    reduce,
    set
  };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};
function Direction(Splide22, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }
  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }
  return {
    resolve,
    orient
  };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};
function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }
  var elm = from;
  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }
    elm = elm.parentElement;
  }
  return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide22, Components2, options) {
  var _EventInterface = EventInterface(Splide22), on = _EventInterface.on, bind = _EventInterface.bind;
  var root = Splide22.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;
  function setup() {
    collect();
    init();
    update();
  }
  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function() {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }
  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }
  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }
  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function(className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root,
      track,
      list,
      slides
    });
  }
  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";
    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }
    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }
  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }
  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }
  return assign(elements, {
    setup,
    mount,
    destroy
  });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide22, index, slideIndex, slide) {
  var event = EventInterface(Splide22);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Components = Splide22.Components, root = Splide22.root, options = Splide22.options;
  var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;
  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide22.length]));
    }
    listen();
  }
  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);
    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }
  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }
  function initNavigation() {
    var controls = Splide22.splides.map(function(target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }
  function onMove() {
    if (!destroyed) {
      update();
    }
  }
  function update() {
    if (!destroyed) {
      var curr = Splide22.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }
  function updateActivity() {
    var active = isActive();
    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }
  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);
    if (!Splide22.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }
    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }
    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }
    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide22.index);
      Slide2 && focus(Slide2.slide);
    }
  }
  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }
  function isActive() {
    var curr = Splide22.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }
  function isVisible() {
    if (Splide22.is(FADE)) {
      return isActive();
    }
    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }
  function isWithin(from, distance) {
    var diff = abs(from - index);
    if (!isClone && (options.rewind || Splide22.is(LOOP))) {
      diff = min(diff, Splide22.length - diff);
    }
    return diff <= distance;
  }
  var self = {
    index,
    slideIndex,
    slide,
    container,
    isClone,
    mount,
    destroy,
    update,
    style: style$1,
    isWithin
  };
  return self;
}
function Slides(Splide22, Components2, options) {
  var _EventInterface2 = EventInterface(Splide22), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
  var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
  var Slides2 = [];
  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }
  function init() {
    slides.forEach(function(slide, index) {
      register(slide, index, -1);
    });
  }
  function destroy() {
    forEach$1(function(Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }
  function update() {
    forEach$1(function(Slide2) {
      Slide2.update();
    });
  }
  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide22, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function(Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }
  function get(excludeClones) {
    return excludeClones ? filter(function(Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }
  function getIn(page) {
    var Controller2 = Components2.Controller;
    var index = Controller2.toIndex(page);
    var max2 = Controller2.hasFocus() ? 1 : options.perPage;
    return filter(function(Slide2) {
      return between(Slide2.index, index, index + max2 - 1);
    });
  }
  function getAt(index) {
    return filter(index)[0];
  }
  function add(items, index) {
    forEach(items, function(slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }
      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }
  function remove$1(matcher) {
    remove(filter(matcher).map(function(Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }
  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }
  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }
  function style2(prop, value, useContainer) {
    forEach$1(function(Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }
  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;
    if (length) {
      images.forEach(function(img) {
        bind(img, "load error", function() {
          if (!--length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }
  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }
  function isEnough() {
    return Slides2.length > options.perPage;
  }
  return {
    mount,
    destroy,
    update,
    register,
    get,
    getIn,
    getAt,
    add,
    remove: remove$1,
    forEach: forEach$1,
    filter,
    style: style2,
    getLength,
    isEnough
  };
}
function Layout(Splide22, Components2, options) {
  var _EventInterface3 = EventInterface(Splide22), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
  var Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
  var getAt = Slides2.getAt, styleSlides = Slides2.style;
  var vertical;
  var rootRect;
  var overflow;
  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }
  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }
  function resize(force) {
    var newRect = rect(root);
    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }
  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }
  function cssTrackHeight() {
    var height = "";
    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }
    return height;
  }
  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }
  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }
  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }
  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }
  function listSize() {
    return rect(list)[resolve("width")];
  }
  function slideSize(index, withoutGap) {
    var Slide2 = getAt(index || 0);
    return Slide2 ? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }
  function totalSize(index, withoutGap) {
    var Slide2 = getAt(index);
    if (Slide2) {
      var right = rect(Slide2.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }
    return 0;
  }
  function sliderSize(withoutGap) {
    return totalSize(Splide22.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }
  function getGap() {
    var Slide2 = getAt(0);
    return Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight"))) || 0;
  }
  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }
  function isOverflow() {
    return Splide22.is(FADE) || sliderSize(true) > listSize();
  }
  return {
    mount,
    resize,
    listSize,
    slideSize,
    sliderSize,
    totalSize,
    getPadding,
    isOverflow
  };
}
var MULTIPLIER = 2;
function Clones(Splide22, Components2, options) {
  var event = EventInterface(Splide22);
  var on = event.on;
  var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;
  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }
  function remount() {
    destroy();
    mount();
  }
  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }
  function observe() {
    var count = computeCloneCount();
    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }
  function generate(count) {
    var slides = Slides2.get().slice();
    var length = slides.length;
    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }
      push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide2.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements2.list, clone);
        push(clones, clone);
        Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
      });
    }
  }
  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide22.root.id + "-clone" + pad(index + 1);
    return clone;
  }
  function computeCloneCount() {
    var clones2 = options.clones;
    if (!Splide22.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide22.length || options.perPage * MULTIPLIER;
    }
    return clones2;
  }
  return {
    mount,
    destroy
  };
}
function Move(Splide22, Components2, options) {
  var _EventInterface4 = EventInterface(Splide22), on = _EventInterface4.on, emit = _EventInterface4.emit;
  var set = Splide22.state.set;
  var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
  var Transition;
  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }
  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide22.index);
      Components2.Slides.update();
    }
  }
  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }
    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function() {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }
  function jump(index) {
    translate(toPosition(index, true));
  }
  function translate(position, preventLoop) {
    if (!Splide22.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }
  function loop(position) {
    if (Splide22.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;
      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }
    return position;
  }
  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }
  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }
  function toIndex(position) {
    var Slides2 = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;
    for (var i = 0; i < Slides2.length; i++) {
      var slideIndex = Slides2[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);
      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }
    return index;
  }
  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }
  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }
  function trim(position) {
    if (options.trimSpace && Splide22.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }
    return position;
  }
  function offset(index) {
    var focus2 = options.focus;
    return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
  }
  function getLimit(max2) {
    return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }
  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }
  function exceededLimit(max2, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }
  return {
    mount,
    move,
    jump,
    translate,
    shift,
    cancel,
    toIndex,
    toPosition,
    getPosition,
    getLimit,
    exceededLimit,
    reposition
  };
}
function Controller(Splide22, Components2, options) {
  var _EventInterface5 = EventInterface(Splide22), on = _EventInterface5.on, emit = _EventInterface5.emit;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
  var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide22.is(LOOP);
  var isSlide = Splide22.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }
  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
    if (index !== currIndex) {
      currIndex = index;
      Move2.reposition();
    }
  }
  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }
  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);
      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move2.move(dest, index, prevIndex, callback);
      }
    }
  }
  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function() {
      var index = loop(Move2.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }
  function parse(control) {
    var index = currIndex;
    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }
    return index;
  }
  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }
    return destination ? dest : loop(dest);
  }
  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);
      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }
      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }
    return dest;
  }
  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();
      while (position === toPosition(dest, true) && between(dest, 0, Splide22.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }
    return dest;
  }
  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }
  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }
    return clamp(end, 0, slideCount - 1);
  }
  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }
  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }
  function toDest(destination) {
    var closest2 = Move2.toIndex(destination);
    return isSlide ? clamp(closest2, 0, endIndex) : closest2;
  }
  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }
  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }
  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }
  function isBusy() {
    return Splide22.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }
  return {
    mount,
    go,
    scroll,
    getNext,
    getPrev,
    getAdjacent,
    getEnd,
    setIndex,
    getIndex,
    toIndex,
    toPage,
    toDest,
    hasFocus,
    isBusy
  };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide22, Components2, options) {
  var event = EventInterface(Splide22);
  var on = event.on, bind = event.bind, emit = event.emit;
  var classes = options.classes, i18n = options.i18n;
  var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var placeholder = Elements2.arrows, track = Elements2.track;
  var wrapper = placeholder;
  var prev = Elements2.prev;
  var next = Elements2.next;
  var created;
  var wrapperClasses;
  var arrows = {};
  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }
  function remount() {
    destroy();
    mount();
  }
  function init() {
    var enabled = options.arrows;
    if (enabled && !(prev && next)) {
      createArrows();
    }
    if (prev && next) {
      assign(arrows, {
        prev,
        next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }
  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);
    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }
  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }
  function go(control) {
    Controller2.go(control, true);
  }
  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }
  function createArrow(prev2) {
    var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
    return parseHtml(arrow);
  }
  function update() {
    if (prev && next) {
      var index = Splide22.index;
      var prevIndex = Controller2.getPrev();
      var nextIndex = Controller2.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }
  return {
    arrows,
    mount,
    destroy,
    update
  };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide22, Components2, options) {
  var _EventInterface6 = EventInterface(Splide22), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
  var interval = RequestInterval(options.interval, Splide22.go.bind(Splide22, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";
  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
      stopped || play();
      update();
    }
  }
  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function(e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }
    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function(e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }
    if (toggle) {
      bind(toggle, "click", function() {
        stopped ? play() : pause(true);
      });
    }
    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }
  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }
  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }
    stopped = !!stop;
    update();
    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }
  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }
  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }
  function onAnimationFrame(rate) {
    var bar = Elements2.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }
  function onMove(index) {
    var Slide2 = Components2.Slides.getAt(index);
    interval.set(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }
  return {
    mount,
    destroy: interval.cancel,
    play,
    pause,
    isPaused
  };
}
function Cover(Splide22, Components2, options) {
  var _EventInterface7 = EventInterface(Splide22), on = _EventInterface7.on;
  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }
  function cover(cover2) {
    Components2.Slides.forEach(function(Slide2) {
      var img = child(Slide2.container || Slide2.slide, "img");
      if (img && img.src) {
        toggle(cover2, img, Slide2);
      }
    });
  }
  function toggle(cover2, img, Slide2) {
    Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
    display(img, cover2 ? "none" : "");
  }
  return {
    mount,
    destroy: apply(cover, false)
  };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide22, Components2, options) {
  var _EventInterface8 = EventInterface(Splide22), on = _EventInterface8.on, emit = _EventInterface8.emit;
  var set = Splide22.state.set;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
  var isSlide = Splide22.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;
  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }
  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();
    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }
    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }
  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }
  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);
    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;
      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }
  function clear() {
    if (interval) {
      interval.cancel();
    }
  }
  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }
  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }
  return {
    mount,
    destroy: clear,
    scroll,
    cancel
  };
}
var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};
function Drag(Splide22, Components2, options) {
  var _EventInterface9 = EventInterface(Splide22), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
  var state = Splide22.state;
  var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
  var getPosition = Move2.getPosition, exceededLimit = Move2.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;
  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }
  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }
  function onPointerDown(e) {
    clickPrevented = false;
    if (!disabled) {
      var isTouch = isTouchEvent(e);
      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller2.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move2.cancel();
          Scroll2.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }
  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }
    if (e.cancelable) {
      if (dragging) {
        Move2.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());
        if (expired || hasExceeded) {
          save(e);
        }
        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }
  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }
    if (dragging) {
      move(e);
      prevent(e);
    }
    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }
  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }
  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }
  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);
    if (isFree) {
      Controller2.scroll(destination, 0, options.snap);
    } else if (Splide22.is(FADE)) {
      Controller2.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide22.is(SLIDE) && exceeded && rewind) {
      Controller2.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller2.go(Controller2.toDest(destination), true);
    }
    reduce(true);
  }
  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }
  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }
  function computeVelocity(e) {
    if (Splide22.is(LOOP) || !exceeded) {
      var time = diffTime(e);
      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }
    return 0;
  }
  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }
  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }
  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }
  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }
  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }
  function constrain(diff) {
    return diff / (exceeded && Splide22.is(SLIDE) ? FRICTION : 1);
  }
  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }
  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }
  function isDragging() {
    return dragging;
  }
  function disable(value) {
    disabled = value;
  }
  return {
    mount,
    disable,
    isDragging
  };
}
var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};
function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide22, Components2, options) {
  var _EventInterface10 = EventInterface(Splide22), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
  var root = Splide22.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;
  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }
  function init() {
    var keyboard = options.keyboard;
    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }
  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }
  function disable(value) {
    disabled = value;
  }
  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function() {
      disabled = _disabled;
    });
  }
  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);
      if (key === resolve(ARROW_LEFT)) {
        Splide22.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide22.go(">");
      }
    }
  }
  return {
    mount,
    destroy,
    disable
  };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide22, Components2, options) {
  var _EventInterface11 = EventInterface(Splide22), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];
  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }
  function init() {
    empty(entries);
    register();
    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }
  function register() {
    Components2.Slides.forEach(function(Slide2) {
      queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function(img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide2, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }
  function check() {
    entries = entries.filter(function(data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide22.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }
  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }
  function onLoad(data, e) {
    var img = data[0], Slide2 = data[1];
    removeClass(Slide2.slide, CLASS_LOADING);
    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
      emit(EVENT_RESIZE);
    }
    isSequential && loadNext();
  }
  function loadNext() {
    entries.length && load(entries.shift());
  }
  return {
    mount,
    destroy: apply(empty, entries),
    check
  };
}
function Pagination(Splide22, Components2, options) {
  var event = EventInterface(Splide22);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements2.pagination;
  var items = [];
  var list;
  var paginationClasses;
  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");
    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list,
        items
      }, getAt(Splide22.index));
    }
  }
  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }
    event.destroy();
  }
  function createPagination() {
    var length = Splide22.length;
    var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
    var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements2.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
    for (var i = 0; i < max2; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides2.getIn(i).map(function(Slide2) {
        return Slide2.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));
      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }
      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li,
        button,
        page: i
      });
    }
  }
  function onClick(page) {
    go(">" + page, true);
  }
  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;
    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }
    var item = items[nextPage];
    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }
  function getDirection() {
    return options.paginationDirection || options.direction;
  }
  function getAt(index) {
    return items[Controller2.toPage(index)];
  }
  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());
    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }
    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }
    emit(EVENT_PAGINATION_UPDATED, {
      list,
      items
    }, prev, curr);
  }
  return {
    items,
    mount,
    destroy,
    getAt,
    update
  };
}
var TRIGGER_KEYS = [" ", "Enter"];
function Sync(Splide22, Components2, options) {
  var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
  var events = [];
  function mount() {
    Splide22.splides.forEach(function(target) {
      if (!target.isParent) {
        sync(Splide22, target.splide);
        sync(target.splide, Splide22);
      }
    });
    if (isNavigation) {
      navigate();
    }
  }
  function destroy() {
    events.forEach(function(event) {
      event.destroy();
    });
    empty(events);
  }
  function remount() {
    destroy();
    mount();
  }
  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function(index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }
  function navigate() {
    var event = EventInterface(Splide22);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide22.splides);
  }
  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }
  function onClick(Slide2) {
    Splide22.go(Slide2.index);
  }
  function onKeydown(Slide2, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide2);
      prevent(e);
    }
  }
  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount,
    destroy,
    remount
  };
}
function Wheel(Splide22, Components2, options) {
  var _EventInterface12 = EventInterface(Splide22), bind = _EventInterface12.bind;
  var lastTime = 0;
  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }
  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);
      var _min = options.wheelMinThreshold || 0;
      var sleep = options.wheelSleep || 0;
      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide22.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }
      shouldPrevent(backwards) && prevent(e);
    }
  }
  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide22.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }
  return {
    mount
  };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide22, Components2, options) {
  var _EventInterface13 = EventInterface(Splide22), on = _EventInterface13.on;
  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }
  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);
    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }
  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }
  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }
  return {
    mount,
    disable,
    destroy
  };
}
var ComponentConstructors = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Media,
  Direction,
  Elements,
  Slides,
  Layout,
  Clones,
  Move,
  Controller,
  Arrows,
  Autoplay,
  Cover,
  Scroll,
  Drag,
  Keyboard,
  LazyLoad,
  Pagination,
  Sync,
  Wheel,
  Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};
function Fade(Splide22, Components2, options) {
  var Slides2 = Components2.Slides;
  function mount() {
    EventInterface(Splide22).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }
  function init() {
    Slides2.forEach(function(Slide2) {
      Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
    });
  }
  function start(index, done) {
    Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }
  return {
    mount,
    start,
    cancel: noop
  };
}
function Slide(Splide22, Components2, options) {
  var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;
  function mount() {
    EventInterface(Splide22).bind(list, "transitionend", function(e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }
  function start(index, done) {
    var destination = Move2.toPosition(index, true);
    var position = Move2.getPosition();
    var speed = getSpeed(index);
    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll2.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move2.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move2.jump(index);
      done();
    }
  }
  function cancel() {
    transition("");
    Scroll2.cancel();
  }
  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;
    if (Splide22.is(SLIDE) && rewindSpeed) {
      var prev = Controller2.getIndex(true);
      var end = Controller2.getEnd();
      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }
    return options.speed;
  }
  return {
    mount,
    start,
    cancel
  };
}
var _Splide = /* @__PURE__ */ function() {
  function _Splide2(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide2.defaults, options || {});
    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }
    this._o = Object.create(merge({}, options));
  }
  var _proto = _Splide2.prototype;
  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;
    var state = this.state, Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function(Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function(component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };
  _proto.sync = function sync(splide) {
    this.splides.push({
      splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });
    if (this.state.is(IDLE)) {
      this._C.Sync.remount();
      splide.Components.Sync.remount();
    }
    return this;
  };
  _proto.go = function go(control) {
    this._C.Controller.go(control);
    return this;
  };
  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };
  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };
  _proto.emit = function emit(event) {
    var _this$event;
    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));
    return this;
  };
  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);
    return this;
  };
  _proto.remove = function remove2(matcher) {
    this._C.Slides.remove(matcher);
    return this;
  };
  _proto.is = function is(type) {
    return this._o.type === type;
  };
  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };
  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }
    var event = this.event, state = this.state;
    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function(component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }
    return this;
  };
  _createClass(_Splide2, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);
  return _Splide2;
}();
var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var EVENTS = [
  [EVENT_MOUNTED, "onMounted"],
  [EVENT_READY, "onReady"],
  [EVENT_MOVE, "onMove"],
  [EVENT_MOVED, "onMoved"],
  [EVENT_CLICK, "onClick"],
  [EVENT_ACTIVE, "onActive"],
  [EVENT_INACTIVE, "onInactive"],
  [EVENT_VISIBLE, "onVisible"],
  [EVENT_HIDDEN, "onHidden"],
  [EVENT_REFRESH, "onRefresh"],
  [EVENT_UPDATED, "onUpdated"],
  [EVENT_RESIZE, "onResize"],
  [EVENT_RESIZED, "onResized"],
  [EVENT_DRAG, "onDrag"],
  [EVENT_DRAGGING, "onDragging"],
  [EVENT_DRAGGED, "onDragged"],
  [EVENT_SCROLL, "onScroll"],
  [EVENT_SCROLLED, "onScrolled"],
  [EVENT_DESTROY, "onDestroy"],
  [EVENT_ARROWS_MOUNTED, "onArrowsMounted"],
  [EVENT_ARROWS_UPDATED, "onArrowsUpdated"],
  [EVENT_PAGINATION_MOUNTED, "onPaginationMounted"],
  [EVENT_PAGINATION_UPDATED, "onPaginationUpdated"],
  [EVENT_NAVIGATION_MOUNTED, "onNavigationMounted"],
  [EVENT_AUTOPLAY_PLAY, "onAutoplayPlay"],
  [EVENT_AUTOPLAY_PLAYING, "onAutoplayPlaying"],
  [EVENT_AUTOPLAY_PAUSE, "onAutoplayPause"],
  [EVENT_LAZYLOAD_LOADED, "onLazyLoadLoaded"]
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function isObject2(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject2(subject1) && isObject2(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function isEqualShallow(array1, array2) {
  return array1.length === array2.length && !array1.some((elm, index) => elm !== array2[index]);
}
function forOwn2(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function merge2(object, source) {
  const merged = object;
  forOwn2(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject2(value)) {
      merged[key] = merge2(isObject2(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
var SplideTrack = ({ children: children2, className, ...props }) => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: classNames("splide__track", className),
    ...props
  }, /* @__PURE__ */ import_react2.default.createElement("ul", {
    className: "splide__list"
  }, children2));
};
var Splide2 = class extends import_react.default.Component {
  constructor() {
    super(...arguments);
    this.splideRef = import_react.default.createRef();
    this.slides = [];
  }
  componentDidMount() {
    const { options, extensions, transition } = this.props;
    const { current } = this.splideRef;
    if (current) {
      this.splide = new Splide(current, options);
      this.bind(this.splide);
      this.splide.mount(extensions, transition);
      this.options = merge2({}, options || {});
      this.slides = this.getSlides();
    }
  }
  componentWillUnmount() {
    if (this.splide) {
      this.splide.destroy();
      this.splide = void 0;
    }
    this.options = void 0;
    this.slides.length = 0;
  }
  componentDidUpdate() {
    if (!this.splide) {
      return;
    }
    const { options } = this.props;
    if (options && !isEqualDeep(this.options, options)) {
      this.splide.options = options;
      this.options = merge2({}, options);
    }
    const newSlides = this.getSlides();
    if (!isEqualShallow(this.slides, newSlides)) {
      this.splide.refresh();
      this.slides = newSlides;
    }
  }
  sync(splide) {
    var _a;
    (_a = this.splide) == null ? void 0 : _a.sync(splide);
  }
  go(control) {
    var _a;
    (_a = this.splide) == null ? void 0 : _a.go(control);
  }
  getSlides() {
    var _a;
    if (this.splide) {
      const children2 = (_a = this.splide.Components.Elements) == null ? void 0 : _a.list.children;
      return children2 && Array.prototype.slice.call(children2) || [];
    }
    return [];
  }
  bind(splide) {
    EVENTS.forEach(([event, name]) => {
      const handler = this.props[name];
      if (typeof handler === "function") {
        splide.on(event, (...args) => {
          handler(splide, ...args);
        });
      }
    });
  }
  omit(props, keys) {
    keys.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(props, key)) {
        delete props[key];
      }
    });
    return props;
  }
  render() {
    const { className, tag: Root = "div", hasTrack = true, children: children2, ...props } = this.props;
    return /* @__PURE__ */ import_react.default.createElement(Root, {
      className: classNames("splide", className),
      ref: this.splideRef,
      ...this.omit(props, ["options", ...EVENTS.map((event) => event[1])])
    }, hasTrack ? /* @__PURE__ */ import_react.default.createElement(SplideTrack, null, children2) : children2);
  }
};
var SplideSlide = ({ children: children2, className, ...props }) => {
  return /* @__PURE__ */ import_react3.default.createElement("li", {
    className: classNames("splide__slide", className),
    ...props
  }, children2);
};

// src/ui/components/grid/tiles/slider.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `${isFullWidth ? "px-8 lg:px-10 max-w-[1650px] w-full mx-auto" : "w-full"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `pb-10  pt-20 ${setInnerPadding()}`, children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: `${colspan > 2 ? "text-3xl" : "text-2xl"} mb-3 font-bold`, children: title }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 30,
        columnNumber: 27
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: `embed-text ${colspan > 2 ? "w-2/4" : "w-5/5"}`, children: description }, void 0, false, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 31,
        columnNumber: 33
      }, this),
      ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "bg-ctaBlue px-8 py-4 rounded font-medium", children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: setInnerPadding(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
          return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SplideSlide, { className: "slide items-stretch pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Component, { item }, void 0, false, {
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
var import_reactjs_components2 = __toESM(require_dist());

// src/ui/components/grid/tiles/hero-slider.tsx
var import_image5 = __toESM(require_image());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var HeroSlider = ({ tile }) => {
  const { content } = tile;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full hero-slider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
        return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SplideSlide, { className: "slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "frntr-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    Grid,
    {
      grid,
      itemComponentMapping: itemMapping2,
      tileViewComponentMapping: tileMapping,
      type: import_reactjs_components2.GridRenderingType.Div,
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
  Splide2,
  SplideSlide,
  Grid2 as Grid
};
//# sourceMappingURL=/build/_shared/chunk-QU3EQJTM.js.map
