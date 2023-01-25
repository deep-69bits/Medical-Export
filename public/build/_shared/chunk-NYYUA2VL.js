import {
  ParagraphCollection,
  buildSchemaMarkupForBlogPost
} from "/build/_shared/chunk-FVLNQUMT.js";
import {
  Product
} from "/build/_shared/chunk-C5MQ4KT2.js";
import {
  require_dist
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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/pages/Story.tsx
var import_reactjs_components = __toESM(require_dist());

// src/ui/components/related-document.tsx
var import_image = __toESM(require_image());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RelatedDocument = ({ document }) => {
  var _a, _b, _c, _d, _e, _f;
  const { path } = useAppContext();
  let title = (_b = (_a = document.components.find((component) => component.name === "Title")) == null ? void 0 : _a.content) == null ? void 0 : _b.text;
  let media = (_e = (_d = (_c = document.components.find((component) => component.name === "Media")) == null ? void 0 : _c.content) == null ? void 0 : _d.selectedComponent) == null ? void 0 : _e.content;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-5 img-cover-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { to: path(document.path), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "img-container img-cover rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_image.Image, { ...(_f = media == null ? void 0 : media.images) == null ? void 0 : _f[0], sizes: "200px", loading: "lazy", fallbackAlt: title }, void 0, false, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold mt-5", children: title }, void 0, false, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/related-document.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/related-document.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Story.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Story_default = ({ data: story }) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(buildSchemaMarkupForBlogPost(story))
        }
      },
      void 0,
      false,
      {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "2xl md:container md:px-6 px-4 mx-auto mt-20 mb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-[1000px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-4 text-md", children: new Date(story.createdAt).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-6xl font-semibold mb-2", children: story.title }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "md:w-3/4 w-full my-2 text-2xl leading-[1.8em]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_components.ContentTransformer, { json: story.description.json }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 28,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container 2xl mt-5 w-screen mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-[1200px] img-container overflow-hidden rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_components.Image, { ...(_b = (_a = story.medias) == null ? void 0 : _a.images) == null ? void 0 : _b[0], sizes: "100vw", fallbackAlt: story.title }, void 0, false, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "2xl container mx-auto frntr-story ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-[1000px] ", children: story.story && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ParagraphCollection, { paragraphs: story.story }, void 0, false, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 40,
      columnNumber: 66
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    story.relatedArticles && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "2xl container px-6 mx-auto w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-bold mt-40 mb-4 text-xl", children: "Read next" }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-5 lg:grid grid-cols-5 pb-5 flex flex-wrapl", children: (_c = story.relatedArticles) == null ? void 0 : _c.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RelatedDocument, { document: item }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 48,
        columnNumber: 33
      }, this) }, index, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 47,
        columnNumber: 29
      }, this)) }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this),
    story.featuredProducts && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "2xl container px-6 mx-auto w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-bold mt-20 mb-4 text-xl", children: "Featured products" }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gap-5 lg:grid grid-cols-5 pb-5 flex flex-wrap", children: (_d = story.featuredProducts) == null ? void 0 : _d.map((item, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Product, { item }, index, false, {
          fileName: "src/ui/pages/Story.tsx",
          lineNumber: 59,
          columnNumber: 36
        }, this);
      }) }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 55,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Story.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

export {
  Story_default
};
//# sourceMappingURL=/build/_shared/chunk-NYYUA2VL.js.map
