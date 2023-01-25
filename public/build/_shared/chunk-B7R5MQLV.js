import {
  require_component,
  require_image
} from "/build/_shared/chunk-7SKPND7M.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-HDCWY7SN.js";
import {
  require_react
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __commonJS
} from "/build/_shared/chunk-5KL4PAQL.js";

// node_modules/@crystallize/reactjs-components/dist/grid/grid-renderer-utils.js
var require_grid_renderer_utils = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/grid-renderer-utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPositionnablRowClassNames = exports.getPositionnableCellClassNames = exports.getGridDimensions = void 0;
    var getGridDimensions = (rows) => {
      return {
        rows: rows.length,
        cols: rows[0].columns.reduce((acc, col) => acc + col.layout.colspan, 0)
      };
    };
    exports.getGridDimensions = getGridDimensions;
    function getPositionnableCellClassNames(cell, { rows, cols }) {
      const { colspan, rowspan, rowIndex, colIndex } = cell.layout;
      const isLastRow = rowIndex + rowspan === rows;
      const isLastCol = colIndex + colspan === cols;
      return `cell-${rowIndex}-${colIndex} ${rowIndex == 0 ? "first-row" : ""} ${colIndex == 0 ? "first-col" : ""} ${isLastRow ? "last-row" : ""} ${isLastCol ? "last-col" : ""}`.replace(/\s+/g, " ");
    }
    exports.getPositionnableCellClassNames = getPositionnableCellClassNames;
    function getPositionnablRowClassNames({ rowIndex }, { rows }) {
      return `row-${rowIndex} ${rowIndex == 0 ? "first-row" : ""} ${rowIndex == rows - 1 ? "last-row" : ""}`.replace(/\s+/g, " ");
    }
    exports.getPositionnablRowClassNames = getPositionnablRowClassNames;
  }
});

// node_modules/@crystallize/reactjs-components/dist/grid/CSSGrid.js
var require_CSSGrid = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/CSSGrid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CSSGrid = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var grid_renderer_utils_1 = require_grid_renderer_utils();
    var CSSGrid = ({ cellComponent, cells, children, dimensions, style, styleForCell, ...props }) => {
      const CellComponent = cellComponent;
      return (0, jsx_runtime_1.jsxs)("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${dimensions.cols}, 1fr)`,
        ...style
      }, className: "crystallize-grid crystallize-grid--css-grid", ...props, children: [children && children({ cells, dimensions }), !children && cells.map((cell, i) => {
        const defaultStyles = {
          gridColumn: `span ${cell.layout.colspan}`,
          gridRow: `span ${cell.layout.rowspan}`
        };
        const cellStyles = styleForCell ? styleForCell(cell, defaultStyles) || defaultStyles : defaultStyles;
        return (0, jsx_runtime_1.jsx)("div", { className: `crystallize-grid__cell ${(0, grid_renderer_utils_1.getPositionnableCellClassNames)(cell, dimensions)}`, style: cellStyles, children: (0, jsx_runtime_1.jsx)(CellComponent, { cell, dimensions }) }, `cell-${i}`);
      })] });
    };
    exports.CSSGrid = CSSGrid;
  }
});

// node_modules/@crystallize/reactjs-components/dist/grid/RowCol.js
var require_RowCol = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/RowCol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RowCol = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var grid_renderer_utils_1 = require_grid_renderer_utils();
    var RowCol = ({ cellComponent, grid, children, dimensions, styleForCell, ...props }) => {
      const CellComponent = cellComponent;
      return (0, jsx_runtime_1.jsxs)("div", { className: "crystallize-grid crystallize-row-col-table", ...props, children: [children && children({ grid, dimensions }), !children && grid.map((row, rowIndex) => {
        return (0, jsx_runtime_1.jsx)("div", { className: `crystallize-grid-row row ${(0, grid_renderer_utils_1.getPositionnablRowClassNames)({ rowIndex }, dimensions)}`, children: row.columns.map((cell, cellIndex) => {
          const cellStyles = styleForCell ? styleForCell(cell, {}) || {} : {};
          const classes = (0, grid_renderer_utils_1.getPositionnableCellClassNames)(cell, dimensions);
          return (0, jsx_runtime_1.jsx)("div", { className: `crystallize-grid__cell col ${classes}`, style: cellStyles, children: (0, jsx_runtime_1.jsx)(CellComponent, { cell, dimensions }) }, `cell-${rowIndex}-${cellIndex}`);
        }) }, `row-${rowIndex}`);
      })] });
    };
    exports.RowCol = RowCol;
  }
});

// node_modules/@crystallize/reactjs-components/dist/grid/Table.js
var require_Table = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/Table.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Table = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var grid_renderer_utils_1 = require_grid_renderer_utils();
    var Table = ({ cellComponent, grid, children, dimensions, styleForCell, ...props }) => {
      const CellComponent = cellComponent;
      return (0, jsx_runtime_1.jsxs)("table", { className: "crystallize-grid crystallize-grid--table", ...props, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: new Array(dimensions.cols).fill(0).map((v, i) => (0, jsx_runtime_1.jsx)("th", {}, `th-${i}`)) }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [children && children({ grid, dimensions }), !children && grid.map((row, rowIndex) => {
        return (0, jsx_runtime_1.jsx)("tr", { className: (0, grid_renderer_utils_1.getPositionnablRowClassNames)({ rowIndex }, dimensions), children: row.columns.map((cell, cellIndex) => {
          const cellStyles = styleForCell ? styleForCell(cell, {}) || {} : {};
          const classes = (0, grid_renderer_utils_1.getPositionnableCellClassNames)(cell, dimensions);
          return (0, jsx_runtime_1.jsx)("td", { className: `crystallize-grid__cell ${classes}`, style: cellStyles, rowSpan: cell.layout.rowspan, colSpan: cell.layout.colspan, children: (0, jsx_runtime_1.jsx)(CellComponent, { cell, dimensions }) }, `cell-${rowIndex}-${cellIndex}`);
        }) }, `row-${rowIndex}`);
      })] })] });
    };
    exports.Table = Table;
  }
});

// node_modules/@crystallize/reactjs-components/dist/grid/types.js
var require_types = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GridRenderingType = void 0;
    var GridRenderingType;
    (function(GridRenderingType2) {
      GridRenderingType2["Table"] = "table";
      GridRenderingType2["Div"] = "div";
      GridRenderingType2["RowCol"] = "row-col";
      GridRenderingType2["CSSGrid"] = "CSSGrid";
    })(GridRenderingType = exports.GridRenderingType || (exports.GridRenderingType = {}));
  }
});

// node_modules/@crystallize/reactjs-components/dist/grid/GridRenderer.js
var require_GridRenderer = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/GridRenderer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GridRenderer = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var CSSGrid_1 = require_CSSGrid();
    var grid_renderer_utils_1 = require_grid_renderer_utils();
    var RowCol_1 = require_RowCol();
    var Table_1 = require_Table();
    var types_1 = require_types();
    var GridRenderer = ({ cellComponent, children, grid, type = types_1.GridRenderingType.Div, styleForCell, ...props }) => {
      if (!cellComponent && !children) {
        console.error("@crystallize/grid-renderer: missing \xB4cellComponent` or children function");
        return null;
      }
      if (!grid.rows.length)
        return null;
      const dimensions = (0, grid_renderer_utils_1.getGridDimensions)(grid.rows);
      if (type === types_1.GridRenderingType.Table) {
        return (0, jsx_runtime_1.jsx)(Table_1.Table, { cellComponent, grid: grid.rows, dimensions, styleForCell, ...props, children });
      }
      if (type === types_1.GridRenderingType.RowCol) {
        return (0, jsx_runtime_1.jsx)(RowCol_1.RowCol, { cellComponent, grid: grid.rows, dimensions, styleForCell, ...props, children });
      }
      const cells = grid.rows.reduce((memo, row) => memo.concat(row.columns), []);
      return (0, jsx_runtime_1.jsx)(CSSGrid_1.CSSGrid, { cellComponent, cells, dimensions, styleForCell, ...props, children });
    };
    exports.GridRenderer = GridRenderer;
  }
});

// node_modules/@crystallize/reactjs-components/dist/grid/component.js
var require_component2 = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/component.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_CSSGrid(), exports);
    __exportStar(require_Table(), exports);
    __exportStar(require_RowCol(), exports);
  }
});

// node_modules/@crystallize/reactjs-components/dist/grid/index.js
var require_grid = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/grid/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_GridRenderer(), exports);
    __exportStar(require_component2(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_grid_renderer_utils(), exports);
  }
});

// node_modules/@crystallize/reactjs-components/dist/content-transformer/component.js
var require_component3 = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/content-transformer/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentTransformer = exports.ContentTransformerNode = exports.renderTextContent = exports.NodeContent = exports.OverridesContext = exports.Renderers = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = require_react();
    exports.Renderers = {
      link: (props) => (0, jsx_runtime_1.jsx)("a", { href: props.metadata?.href, children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      "unordered-list": (props) => (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      "ordered-list": (props) => (0, jsx_runtime_1.jsx)("ol", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      list: (props) => (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      "list-item": (props) => (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      quote: (props) => {
        if (props.kind === "block") {
          return (0, jsx_runtime_1.jsx)("blockquote", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) });
        }
        return (0, jsx_runtime_1.jsx)("q", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) });
      },
      paragraph: (props) => (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      preformatted: (props) => (0, jsx_runtime_1.jsx)("pre", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      code: (props) => (0, jsx_runtime_1.jsx)("code", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      underlined: (props) => (0, jsx_runtime_1.jsx)("u", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      strong: (props) => (0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      emphasized: (props) => (0, jsx_runtime_1.jsx)("em", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      div: (props) => (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }) }),
      span: (props) => (0, jsx_runtime_1.jsx)(exports.NodeContent, { ...props }),
      "line-break": () => (0, jsx_runtime_1.jsx)("br", {})
    };
    exports.OverridesContext = (0, react_1.createContext)(null);
    var NodeContent = (props) => {
      const { textContent } = props;
      if (textContent) {
        return renderTextContent(textContent);
      }
      if (props.children) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: props.children.map((child, i) => (0, jsx_runtime_1.jsx)(exports.ContentTransformerNode, { ...child }, i)) });
      }
      return null;
    };
    exports.NodeContent = NodeContent;
    function renderTextContent(text) {
      const partsBetweenLineBreaks = text.split(/\n/g);
      if (partsBetweenLineBreaks.length === 1) {
        return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: text });
      }
      return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: partsBetweenLineBreaks.map((part, index) => {
        const key = index.toString();
        if (index === partsBetweenLineBreaks.length - 1) {
          return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: "part" }, key);
        }
        return (0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [part, (0, jsx_runtime_1.jsx)("br", {})] }, key);
      }) });
    }
    exports.renderTextContent = renderTextContent;
    var ContentTransformerNode = (props) => {
      let Renderer = exports.Renderers.span;
      const overrides = (0, react_1.useContext)(exports.OverridesContext);
      const { type, kind, textContent } = props;
      if (type) {
        const t = type;
        const override = overrides?.[t];
        Renderer = override || exports.Renderers[type];
      }
      if (!Renderer) {
        Renderer = exports.Renderers.span;
        if (type === "container" && kind === "block") {
          Renderer = exports.Renderers.div;
        } else if (type === null && textContent) {
          return renderTextContent(textContent);
        }
      }
      return (0, jsx_runtime_1.jsx)(Renderer, { ...props });
    };
    exports.ContentTransformerNode = ContentTransformerNode;
    var ContentTransformer = ({ overrides = null, json }) => {
      if (!json) {
        return null;
      }
      if (Array.isArray(json)) {
        const nodes = json;
        return (0, jsx_runtime_1.jsx)(exports.OverridesContext.Provider, { value: overrides, children: nodes.map((j, i) => (0, jsx_runtime_1.jsx)(exports.ContentTransformerNode, { ...j }, i)) });
      }
      const node = json;
      return (0, jsx_runtime_1.jsx)(exports.OverridesContext.Provider, { value: overrides, children: (0, jsx_runtime_1.jsx)(exports.ContentTransformerNode, { ...node }) });
    };
    exports.ContentTransformer = ContentTransformer;
  }
});

// node_modules/@crystallize/reactjs-components/dist/content-transformer/types.js
var require_types2 = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/content-transformer/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@crystallize/reactjs-components/dist/content-transformer/index.js
var require_content_transformer = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/content-transformer/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_component3(), exports);
    __exportStar(require_types2(), exports);
  }
});

// node_modules/@crystallize/reactjs-components/dist/video/dash.js
var require_dash = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/video/dash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getDash = exports.supportsDash = void 0;
    function supportsMediaSource() {
      let hasWebKit = "WebKitMediaSource" in window;
      let hasMediaSource = "MediaSource" in window;
      return hasWebKit || hasMediaSource;
    }
    exports.supportsDash = supportsMediaSource;
    var added = false;
    function getDash() {
      return new Promise((resolve) => {
        if (!added) {
          const hlsCore = document.createElement("script");
          hlsCore.src = "https://cdn.dashjs.org/latest/dash.all.min.js";
          hlsCore.defer = true;
          document.head.appendChild(hlsCore);
          added = true;
        }
        (function checkForLibraryExistence() {
          if ("dashjs" in window) {
            resolve(window.dashjs);
          } else {
            setTimeout(checkForLibraryExistence, 10);
          }
        })();
      });
    }
    exports.getDash = getDash;
  }
});

// node_modules/@crystallize/reactjs-components/dist/video/hls.js
var require_hls = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/video/hls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHls = void 0;
    var added = false;
    function getHls() {
      return new Promise((resolve) => {
        if (!added) {
          const hlsCore = document.createElement("script");
          hlsCore.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
          hlsCore.defer = true;
          document.head.appendChild(hlsCore);
          added = true;
        }
        (function checkForLibraryExistence() {
          if ("Hls" in window) {
            resolve(new window.Hls({
              testBandwidth: false,
              abrEwmaDefaultEstimate: 1e6,
              abrMaxWithRealBitrate: true
            }));
          } else {
            setTimeout(checkForLibraryExistence, 10);
          }
        })();
      });
    }
    exports.getHls = getHls;
  }
});

// node_modules/@crystallize/reactjs-components/dist/video/component.js
var require_component4 = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/video/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Video = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var react_1 = require_react();
    var dash_1 = require_dash();
    var hls_1 = require_hls();
    var component_1 = require_component();
    function getPoster(thumbnails) {
      if (thumbnails && thumbnails.length > 0) {
        const [firstThumbnail] = thumbnails;
        if (firstThumbnail._availableSizes && firstThumbnail._availableFormats) {
          return firstThumbnail.url;
        }
        const allVariants = firstThumbnail.variants;
        const variantsNoFancyStuff = allVariants.filter((v) => !v.url.endsWith(".webp") && !v.url.endsWith(".avif"));
        return variantsNoFancyStuff.filter((v) => v.width > 500).sort((a, b) => a.width - b.width)[0].url || variantsNoFancyStuff[0].url;
      }
      return void 0;
    }
    var Video = ({ playlists, thumbnails, thumbnailProps, videoProps, autoPlay, loop = false, muted = false, controls = true, poster, playButtonText = "Play video", className }) => {
      const [showThumbnail, setShowThumbnail] = (0, react_1.useState)(true);
      const [playVideo, setPlayVideo] = (0, react_1.useState)(false);
      const [initiated, setInitiated] = (0, react_1.useState)(false);
      const ref = (0, react_1.useRef)(null);
      (0, react_1.useEffect)(() => {
        if (autoPlay) {
          const connection = navigator.connection;
          if (!connection || !connection.saveData) {
            setPlayVideo(true);
          }
        }
      }, []);
      (0, react_1.useEffect)(() => {
        if (!playVideo) {
          return;
        }
        if (initiated) {
          return;
        }
        const video = ref.current;
        if (!video) {
          throw new Error("Cannot initialize video. Unable to find the video HTML node");
        }
        video.addEventListener("playing", () => setShowThumbnail(false), {
          once: true
        });
        const startWithHighQualityVideo = function() {
          try {
            const connection = navigator.connection;
            return connection.downlink >= 5 && !connection.saveData;
          } catch (e) {
            return false;
          }
        }();
        const m3u8Src = playlists.find((p) => p.endsWith(".m3u8"));
        if (m3u8Src) {
          if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.autoplay = true;
            video.src = m3u8Src;
            setInitiated(true);
          } else {
            (0, hls_1.getHls)().then((hls) => {
              hls.loadSource(m3u8Src);
              hls.attachMedia(video);
              hls.on("hlsMediaAttached", function() {
                video.muted = true;
                video.play();
              });
              setInitiated(true);
            });
          }
        } else if ((0, dash_1.supportsDash)()) {
          (0, dash_1.getDash)().then((dashjs) => {
            const src = playlists.find((p) => p.endsWith(".mpd"));
            if (!src) {
              throw new Error("Cannot find a valid Dash source for video");
            }
            const player = dashjs.MediaPlayer().create();
            player.initialize();
            player.updateSettings({
              debug: {
                logLevel: dashjs.Debug.LOG_LEVEL_NONE
              },
              streaming: {
                abr: {
                  initialBitrate: {
                    audio: -1,
                    video: startWithHighQualityVideo ? 1e4 : -1
                  },
                  autoSwitchBitrate: { audio: true, video: true }
                }
              }
            });
            player.setAutoPlay(true);
            player.attachView(video);
            player.attachSource(src);
            setInitiated(true);
          });
        }
      }, [playVideo]);
      function onPlayClick(event) {
        event.preventDefault();
        setPlayVideo(true);
      }
      const thumbnailStyle = {
        zIndex: showThumbnail ? 2 : 1,
        opacity: showThumbnail ? 1 : 0
      };
      const posterUrl = poster || getPoster(thumbnails);
      return (0, jsx_runtime_1.jsxs)("div", { className: `react-video${className ? ` ${className}` : ""}`, style: { position: "relative" }, children: [thumbnails && thumbnails.length > 0 ? (0, jsx_runtime_1.jsx)(component_1.Image, { ...thumbnails[0], className: "react-video__thumbnail", ...thumbnailProps, style: thumbnailStyle }) : (0, jsx_runtime_1.jsx)("div", { className: "react-video__thumbnail-placeholder", style: thumbnailStyle }), !playVideo && (0, jsx_runtime_1.jsxs)("button", { className: "react-video__play-btn", onClick: onPlayClick, children: [playButtonText, (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 100 100", className: "react-video__play-icon", children: (0, jsx_runtime_1.jsx)("path", { d: "M78.158 51.843L25.842 82.048c-1.418.819-3.191-.205-3.191-1.843v-60.41c0-1.638 1.773-2.661 3.191-1.843l52.317 30.205c1.418.819 1.418 2.867-.001 3.686z" }) })] }), (0, jsx_runtime_1.jsx)("video", { className: "react-video__video", ref, controls, playsInline: true, muted, loop, poster: posterUrl, style: { opacity: initiated ? 1 : 0, zIndex: showThumbnail ? 1 : 2 }, ...videoProps })] });
    };
    exports.Video = Video;
  }
});

// node_modules/@crystallize/reactjs-components/dist/video/types.js
var require_types3 = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/video/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@crystallize/reactjs-components/dist/video/index.js
var require_video = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/video/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_component4(), exports);
    __exportStar(require_types3(), exports);
  }
});

// node_modules/@crystallize/reactjs-components/dist/index.js
var require_dist = __commonJS({
  "node_modules/@crystallize/reactjs-components/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_image(), exports);
    __exportStar(require_grid(), exports);
    __exportStar(require_content_transformer(), exports);
    __exportStar(require_video(), exports);
  }
});

export {
  require_grid,
  require_content_transformer,
  require_video,
  require_dist
};
//# sourceMappingURL=/build/_shared/chunk-B7R5MQLV.js.map
