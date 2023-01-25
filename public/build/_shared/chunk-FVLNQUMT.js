import {
  require_content_transformer
} from "/build/_shared/chunk-ZIMYLYGD.js";
import {
  require_image
} from "/build/_shared/chunk-HET3URE2.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/components/image-gallery.tsx
var import_image = __toESM(require_image());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ImageGallery = ({ images }) => {
  const galleryHasOddNubmer = (images == null ? void 0 : images.length) % 2 || false;
  if (!images || images.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "frntr-img-gallery ", children: images.map((img, i) => {
    if (img.variants.length === 0)
      return null;
    const isPortraitImg = img.variants[0].height > img.variants[0].width;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `${isPortraitImg ? "portrait" : "landscape"} frntr-img`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_image.Image,
      {
        ...img,
        sizes: `${i < 1 || i === (images == null ? void 0 : images.length) && !galleryHasOddNubmer ? "50vw" : "33vw"}`,
        loading: "lazy"
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/image-gallery.tsx",
        lineNumber: 16,
        columnNumber: 25
      },
      this
    ) }, i, false, {
      fileName: "src/ui/components/image-gallery.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this);
  }) }, void 0, false, {
    fileName: "src/ui/components/image-gallery.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

// src/ui/components/crystallize-components/paragraph-collection.tsx
var import_content_transformer = __toESM(require_content_transformer());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ParagraphCollection = ({ paragraphs }) => {
  if (paragraphs.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: paragraphs.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-10 md:mt-10 lg:mx-10 mb-20 pt-5 max-w-[800px] frntr-paragraph mx-2 w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "my-10 mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "font-bold mt-10 text-3xl", children: paragraph.title }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
        lineNumber: 15,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "frntr-content-transformer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_content_transformer.ContentTransformer, { json: paragraph.body.json }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
        lineNumber: 17,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
        lineNumber: 16,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
      lineNumber: 14,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImageGallery, { images: paragraph == null ? void 0 : paragraph.images }, void 0, false, {
      fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
      lineNumber: 21,
      columnNumber: 21
    }, this)
  ] }, index, true, {
    fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this)) }, void 0, false, {
    fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

// src/use-cases/SchemaMarkupBuilder.ts
var buildSchemaMarkup = (product) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.seo.title,
    image: product.seo.image,
    description: product.seo.description,
    sku: product.defaultVariant.sku
  };
};
var buildSchemaMarkupForBlogPost = (data, url) => {
  const title = data.seo.title;
  const description = data.seo.description;
  const altDescription = data.seo.description;
  return {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": ""
    },
    headline: title || data.name,
    datePublished: data.createdAt,
    dateModified: new Date(data.updatedAt),
    description: description || altDescription
  };
};

export {
  ImageGallery,
  ParagraphCollection,
  buildSchemaMarkup,
  buildSchemaMarkupForBlogPost
};
//# sourceMappingURL=/build/_shared/chunk-FVLNQUMT.js.map
