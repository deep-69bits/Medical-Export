import {
  require_content_transformer
} from "/build/_shared/chunk-WGE3VKLD.js";
import {
  require_image
} from "/build/_shared/chunk-X6776P5R.js";
import {
  useLocalCart
} from "/build/_shared/chunk-GFMYPENJ.js";
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

// src/ui/components/add-to-cart-button.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var AddToCartBtn = ({ pack, label = "addToCart" }) => {
  const [showTada, setShowTada] = (0, import_react.useState)(false);
  const { dispatch: contextDispatch, _t } = useAppContext();
  const { add } = useLocalCart();
  const handleClick = () => {
    setShowTada(true);
    contextDispatch.addItemsToCart(pack.map((packitem) => packitem.variant));
    pack.forEach((packitem) => {
      add(
        {
          name: packitem.variant.name,
          sku: packitem.variant.sku,
          price: packitem.variant.priceVariants.default.value
        },
        packitem.quantity
      );
    });
    setTimeout(() => {
      setShowTada(false);
    }, 1500);
  };
  let defaultStock = pack.reduce((memo, packitem) => {
    var _a, _b;
    const defaultStockLocation = (_b = (_a = packitem.variant) == null ? void 0 : _a.stockLocations) == null ? void 0 : _b.default;
    return memo + ((defaultStockLocation == null ? void 0 : defaultStockLocation.stock) || 0);
  }, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      className: "bg-[#000] border px-10 py-3 relative overflow-hidden h-[50px] rounded-md text-[#fff] w-[200px] font-bold hover:bg-black-100 disabled:opacity-50 disabled:cursor-not-allowed",
      onClick: () => {
        handleClick();
      },
      disabled: defaultStock < 1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "span",
          {
            className: `w-[200] transition-all left-0 top-0 h-full w-full flex items-center justify-center absolute
                    ${showTada ? "scale-0" : "scale-100"}`,
            children: _t(label)
          },
          void 0,
          false,
          {
            fileName: "src/ui/components/add-to-cart-button.tsx",
            lineNumber: 55,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "span",
          {
            className: `w-[200] text-3xl transition-all	left-0 top-0 h-full w-full flex items-center justify-center absolute ${showTada ? "scale-100" : "scale-0"}`,
            children: "\u{1F389}"
          },
          void 0,
          false,
          {
            fileName: "src/ui/components/add-to-cart-button.tsx",
            lineNumber: 61,
            columnNumber: 17
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "src/ui/components/add-to-cart-button.tsx",
      lineNumber: 48,
      columnNumber: 13
    },
    this
  ) }, void 0, false, {
    fileName: "src/ui/components/add-to-cart-button.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
};

// src/ui/components/image-gallery.tsx
var import_image = __toESM(require_image());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ImageGallery = ({ images }) => {
  const galleryHasOddNubmer = (images == null ? void 0 : images.length) % 2 || false;
  if (!images || images.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "frntr-img-gallery ", children: images.map((img, i) => {
    if (img.variants.length === 0)
      return null;
    const isPortraitImg = img.variants[0].height > img.variants[0].width;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${isPortraitImg ? "portrait" : "landscape"} frntr-img`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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

// src/ui/components/variant-selector.tsx
var import_image2 = __toESM(require_image());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function reduceAttributes(variants) {
  return variants.reduce((acc, variant) => {
    Object.keys(variant.attributes).forEach((key) => {
      const value = variant.attributes[key];
      if (!acc[key]) {
        acc[key] = [];
      }
      if (!acc[key].includes(value)) {
        acc[key].push(value);
      }
    });
    return acc;
  }, {});
}
function findMostSuitableVariant(variants, attributes) {
  return variants.find((variant) => {
    return Object.keys(attributes).every((key) => {
      return variant.attributes[key] === attributes[key];
    });
  });
}
var VariantSelector = ({ variants, selectedVariant, onVariantChange, renderingType = "default" }) => {
  const attributes = reduceAttributes(variants);
  function onAttributeSelect(key, value) {
    let variant = findMostSuitableVariant(variants, {
      ...selectedVariant.attributes,
      [key]: value
    });
    if (!variant) {
      variant = variants.find(
        (variant2) => Object.keys(variant2.attributes).some((vkey) => vkey === key && variant2.attributes[vkey] === value)
      );
    }
    if (!variant) {
      variant = variants.find((variant2) => Object.keys(variant2.attributes).some((vkey) => vkey === key));
    }
    onVariantChange(variant);
  }
  const renderingTypes = {
    default: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: Object.keys(attributes).map((key) => {
      const values = attributes[key];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-[#dfdfdf]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-2 text-sm  font-semibold", children: key }, void 0, false, {
          fileName: "src/ui/components/variant-selector.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex mb-5 flex-nowrap md:flex-wrap gap-2 overflow-x-scroll py-2 px-1", children: values.map((value) => {
          var _a;
          const mostSuitableVariant = findMostSuitableVariant(variants, {
            ...selectedVariant.attributes,
            [key]: value
          });
          return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "button",
            {
              onClick: (e) => onAttributeSelect(key, value),
              type: "button",
              className: "w-2/6 md:w-1/6 md:py-2 py-4 rounded-lg text-text flex flex-col items-center text-xs font-medium overflow-hidden variant-option",
              style: {
                opacity: !mostSuitableVariant ? 0.2 : 1,
                border: value === selectedVariant.attributes[key] ? "1px solid #000" : "1px solid #efefef"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "img-container p-3 w-[80px] img-contain", children: ((_a = mostSuitableVariant == null ? void 0 : mostSuitableVariant.images) == null ? void 0 : _a[0]) && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  import_image2.Image,
                  {
                    ...mostSuitableVariant.images[0],
                    sizes: "100px",
                    fallbackAlt: mostSuitableVariant.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/ui/components/variant-selector.tsx",
                    lineNumber: 83,
                    columnNumber: 53
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/ui/components/variant-selector.tsx",
                  lineNumber: 81,
                  columnNumber: 45
                }, this),
                value
              ]
            },
            value,
            true,
            {
              fileName: "src/ui/components/variant-selector.tsx",
              lineNumber: 68,
              columnNumber: 41
            },
            this
          );
        }) }, void 0, false, {
          fileName: "src/ui/components/variant-selector.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this)
      ] }, key, true, {
        fileName: "src/ui/components/variant-selector.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this);
    }) }, void 0, false, {
      fileName: "src/ui/components/variant-selector.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    dropdown: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: Object.keys(attributes).map((key) => {
      const values = attributes[key];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "select",
        {
          onChange: (e) => onAttributeSelect(key, e.target.value),
          className: "py-2 min-w-full w-full px-4 bg-[#efefef] grow-0  text-sm rounded-md min-w-[150px] ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("optgroup", { label: key, children: values.map((value) => {
            const mostSuitableVariant = findMostSuitableVariant(variants, {
              ...selectedVariant.attributes,
              [key]: value
            });
            return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { disabled: !mostSuitableVariant, value, children: value }, value, false, {
              fileName: "src/ui/components/variant-selector.tsx",
              lineNumber: 117,
              columnNumber: 45
            }, this);
          }) }, void 0, false, {
            fileName: "src/ui/components/variant-selector.tsx",
            lineNumber: 110,
            columnNumber: 33
          }, this)
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/variant-selector.tsx",
          lineNumber: 106,
          columnNumber: 29
        },
        this
      ) }, key, false, {
        fileName: "src/ui/components/variant-selector.tsx",
        lineNumber: 105,
        columnNumber: 25
      }, this);
    }) }, void 0, false, {
      fileName: "src/ui/components/variant-selector.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  };
  return renderingTypes[renderingType] || null;
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

// src/ui/components/crystallize-components/paragraph-collection.tsx
var import_content_transformer = __toESM(require_content_transformer());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var ParagraphCollection = ({ paragraphs }) => {
  if (paragraphs.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: paragraphs.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 md:mt-10 lg:mx-10 mb-20 pt-5 max-w-[800px] frntr-paragraph mx-2 w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "my-10 mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "font-bold mt-10 text-3xl", children: paragraph.title }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
        lineNumber: 15,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "frntr-content-transformer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_content_transformer.ContentTransformer, { json: paragraph.body.json }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ImageGallery, { images: paragraph == null ? void 0 : paragraph.images }, void 0, false, {
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

export {
  AddToCartBtn,
  ImageGallery,
  ParagraphCollection,
  VariantSelector,
  buildSchemaMarkup,
  buildSchemaMarkupForBlogPost
};
//# sourceMappingURL=/build/_shared/chunk-HYIOXLAS.js.map
