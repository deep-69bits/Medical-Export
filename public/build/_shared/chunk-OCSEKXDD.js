import {
  AddToCartBtn,
  ParagraphCollection,
  VariantSelector,
  buildSchemaMarkupForBlogPost
} from "/build/_shared/chunk-W2MFTCA5.js";
import {
  Product
} from "/build/_shared/chunk-HZ4TJTAQ.js";
import {
  require_dist
} from "/build/_shared/chunk-Z3VKB4AZ.js";
import {
  Link_default
} from "/build/_shared/chunk-NTU3S4GL.js";
import {
  Price as Price2,
  require_image
} from "/build/_shared/chunk-JTTD7ZBJ.js";
import {
  Price
} from "/build/_shared/chunk-H52OJRFM.js";
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

// src/ui/pages/CuratedStory.tsx
var import_reactjs_components2 = __toESM(require_dist());

// src/ui/components/curated-product-item.tsx
var import_reactjs_components = __toESM(require_dist());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CuratedProductItem = ({ merch, pack, merchIndex, updatePack }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: merch.products.map((product, productIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Product2,
    {
      product,
      pack,
      updatePack,
      packKey: `${merchIndex}-${productIndex}`
    },
    productIndex,
    false,
    {
      fileName: "src/ui/components/curated-product-item.tsx",
      lineNumber: 18,
      columnNumber: 17
    },
    this
  )) }, void 0, false, {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
};
var Product2 = ({
  product,
  pack,
  updatePack,
  packKey
}) => {
  var _a, _b;
  if (!(product == null ? void 0 : product.variants)) {
    return null;
  }
  const selecedPackItem = pack.find((packItem) => packItem.key === packKey) || {
    variant: product.variants[0],
    quantity: 1
  };
  if (!selecedPackItem) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-[#dfdfdf] w-full py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full grid-cols-[0.35fr_1fr]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full img-container overflow-hidden rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_reactjs_components.Image,
      {
        sizes: "200px",
        ...(_b = (_a = selecedPackItem.variant) == null ? void 0 : _a.images) == null ? void 0 : _b[0],
        fallbackAlt: selecedPackItem.variant.name
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 58,
        columnNumber: 25
      },
      this
    ) }, void 0, false, {
      fileName: "src/ui/components/curated-product-item.tsx",
      lineNumber: 57,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "gap-2 pl-4 flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-1", children: selecedPackItem.variant.name }, void 0, false, {
            fileName: "src/ui/components/curated-product-item.tsx",
            lineNumber: 67,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Price2, { variant: selecedPackItem.variant, size: "small" }, void 0, false, {
            fileName: "src/ui/components/curated-product-item.tsx",
            lineNumber: 68,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/components/curated-product-item.tsx",
          lineNumber: 66,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col-reverse max-w-[40px] w-full items-center justify-end ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "py-1 w-full block text-sm rounded-md border-transparent hover:bg-[#efefef]",
              onClick: () => updatePack(selecedPackItem, {
                ...selecedPackItem,
                quantity: selecedPackItem.quantity - 1
              }),
              children: "-"
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/curated-product-item.tsx",
              lineNumber: 71,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              value: selecedPackItem.quantity,
              type: "text",
              className: "py-2  w-full w-full text-sm text-center hover:bg-[#efefef] active:bg-[#efefef]",
              onChange: (e) => updatePack(selecedPackItem, {
                ...selecedPackItem,
                quantity: parseInt(e.target.value)
              })
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/curated-product-item.tsx",
              lineNumber: 82,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              className: "py-1 w-full block text-sm rounded-md border-transparent hover:bg-[#efefef]",
              onClick: () => updatePack(selecedPackItem, {
                ...selecedPackItem,
                quantity: selecedPackItem.quantity + 1
              }),
              children: "+"
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/curated-product-item.tsx",
              lineNumber: 93,
              columnNumber: 33
            },
            this
          )
        ] }, void 0, true, {
          fileName: "src/ui/components/curated-product-item.tsx",
          lineNumber: 70,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 65,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pl-4 mt-2 max-w-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 grid-col-2 lg:grid-cols-1 xl:grid-cols-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        VariantSelector,
        {
          variants: product.variants,
          selectedVariant: selecedPackItem.variant,
          onVariantChange: (variant) => {
            updatePack(selecedPackItem, {
              variant,
              quantity: selecedPackItem.quantity
            });
          },
          renderingType: "dropdown"
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/curated-product-item.tsx",
          lineNumber: 108,
          columnNumber: 33
        },
        this
      ) }, void 0, false, {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 107,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 106,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/curated-product-item.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 56,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 55,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this);
};

// src/ui/pages/CuratedStory.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var CuratedStory_default = ({ data: story }) => {
  var _a, _b, _c;
  const [activePoint, setActivePoint] = (0, import_react.useState)("");
  const { state: appContextState } = useAppContext();
  const defaultPack = (0, import_react.useMemo)(
    () => story.merchandising.reduce((memo, merch, merchIndex) => {
      merch.products.forEach((product, productIndex) => {
        memo.push({
          variant: product.variant,
          quantity: 1,
          key: `${merchIndex}-${productIndex}`
        });
      });
      return memo;
    }, []),
    [story.merchandising]
  );
  const [pack, setPack] = (0, import_react.useState)(defaultPack);
  const totalAmountToPay = pack.reduce((memo, packitem) => {
    var _a2, _b2, _c2, _d;
    const price = ((_b2 = (_a2 = packitem.variant.priceVariants) == null ? void 0 : _a2.sales) == null ? void 0 : _b2.value) || ((_d = (_c2 = packitem.variant.priceVariants) == null ? void 0 : _c2.default) == null ? void 0 : _d.value);
    return memo + (price || 0) * packitem.quantity;
  }, 0);
  const updatePack = (previous, next) => {
    setPack(
      pack.map((packitem) => {
        if (previous.key === packitem.key) {
          return {
            ...packitem,
            quantity: next.quantity,
            variant: next.variant
          };
        }
        return packitem;
      })
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col-reverse lg:flex-row gap-8 min-h-full container px-6 mx-auto mt-20 mb-40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:w-7/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "img-container overflow-hidden self-start rounded-lg relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute h-full w-full frntr-hotspot frntr-hotspot-microformat", children: story.merchandising.map((merch, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "span",
          {
            onMouseOver: () => setActivePoint(`hotspot-point-${i}`),
            onMouseLeave: () => setActivePoint(""),
            style: { left: merch.x + `%`, top: merch.y + "%" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-sm overflow-hidden shadow-sm px-2 pt-2 ", children: merch.products.map((product, index) => {
              var _a2;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "img-container img-cover w-[30px] h-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  import_reactjs_components2.Image,
                  {
                    ...(_a2 = product.variant.images) == null ? void 0 : _a2[0],
                    sizes: "100px",
                    loading: "lazy",
                    fallbackAlt: product.name
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/ui/pages/CuratedStory.tsx",
                    lineNumber: 66,
                    columnNumber: 49
                  },
                  this
                ) }, void 0, false, {
                  fileName: "src/ui/pages/CuratedStory.tsx",
                  lineNumber: 65,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs", children: product.name }, void 0, false, {
                    fileName: "src/ui/pages/CuratedStory.tsx",
                    lineNumber: 74,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs font-bold", children: [
                    appContextState.currency.code,
                    " ",
                    product.variant.priceVariants.default.value
                  ] }, void 0, true, {
                    fileName: "src/ui/pages/CuratedStory.tsx",
                    lineNumber: 75,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "src/ui/pages/CuratedStory.tsx",
                  lineNumber: 73,
                  columnNumber: 45
                }, this)
              ] }, index, true, {
                fileName: "src/ui/pages/CuratedStory.tsx",
                lineNumber: 64,
                columnNumber: 41
              }, this);
            }) }, void 0, false, {
              fileName: "src/ui/pages/CuratedStory.tsx",
              lineNumber: 62,
              columnNumber: 33
            }, this)
          },
          `hotspot-${merch.x}-${merch.y}`,
          false,
          {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 56,
            columnNumber: 29
          },
          this
        )) }, void 0, false, {
          fileName: "src/ui/pages/CuratedStory.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_components2.Image, { ...(_b = (_a = story == null ? void 0 : story.medias) == null ? void 0 : _a.images) == null ? void 0 : _b[0], sizes: "50vw", fallbackAlt: story.title }, void 0, false, {
          fileName: "src/ui/pages/CuratedStory.tsx",
          lineNumber: 86,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-[1000px] ", children: story.story && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ParagraphCollection, { paragraphs: story.story }, void 0, false, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 88,
        columnNumber: 66
      }, this) }, void 0, false, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/CuratedStory.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-6 lg:w-5/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-semibold mb-2", children: story.title }, void 0, false, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b pb-4 mb-4 border-[#dfdfdf] text-1xl leading-[1.4em] mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_reactjs_components2.ContentTransformer, { json: (_c = story.description) == null ? void 0 : _c.json }, void 0, false, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 94,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky top-20", children: [
        story.merchandising.map((merch, merchIndex) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "div",
            {
              className: "px-2 overflow-hidden rounded-md my-2",
              style: {
                border: activePoint === `hotspot-point-${merchIndex}` ? "1px solid #000" : "1px solid transparent"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                CuratedProductItem,
                {
                  merch,
                  updatePack,
                  pack,
                  merchIndex
                },
                void 0,
                false,
                {
                  fileName: "src/ui/pages/CuratedStory.tsx",
                  lineNumber: 109,
                  columnNumber: 33
                },
                this
              )
            },
            `merch-container-${merch.x}-${merch.y}`,
            false,
            {
              fileName: "src/ui/pages/CuratedStory.tsx",
              lineNumber: 99,
              columnNumber: 29
            },
            this
          );
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex pt-5 mt-5 items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-2xl font-bold text-green2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { currencyCode: appContextState.currency.code, children: totalAmountToPay }, void 0, false, {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 120,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AddToCartBtn, { pack }, void 0, false, {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 122,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/CuratedStory.tsx",
          lineNumber: 118,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/CuratedStory.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/CuratedStory.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Story.tsx
var import_reactjs_components3 = __toESM(require_dist());

// src/ui/components/related-document.tsx
var import_image = __toESM(require_image());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var RelatedDocument = ({ document }) => {
  var _a, _b, _c, _d, _e, _f;
  const { path } = useAppContext();
  let title = (_b = (_a = document.components.find((component) => component.name === "Title")) == null ? void 0 : _a.content) == null ? void 0 : _b.text;
  let media = (_e = (_d = (_c = document.components.find((component) => component.name === "Media")) == null ? void 0 : _c.content) == null ? void 0 : _d.selectedComponent) == null ? void 0 : _e.content;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pb-5 img-cover-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link_default, { to: path(document.path), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "img-container img-cover rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_image.Image, { ...(_f = media == null ? void 0 : media.images) == null ? void 0 : _f[0], sizes: "200px", loading: "lazy", fallbackAlt: title }, void 0, false, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h4", { className: "font-semibold mt-5", children: title }, void 0, false, {
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
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var Story_default = ({ data: story }) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "2xl md:container md:px-6 px-4 mx-auto mt-20 mb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-[1000px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mb-4 text-md", children: new Date(story.createdAt).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-6xl font-semibold mb-2", children: story.title }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "md:w-3/4 w-full my-2 text-2xl leading-[1.8em]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactjs_components3.ContentTransformer, { json: story.description.json }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container 2xl mt-5 w-screen mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-[1200px] img-container overflow-hidden rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_reactjs_components3.Image, { ...(_b = (_a = story.medias) == null ? void 0 : _a.images) == null ? void 0 : _b[0], sizes: "100vw", fallbackAlt: story.title }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "2xl container mx-auto frntr-story ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "max-w-[1000px] ", children: story.story && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ParagraphCollection, { paragraphs: story.story }, void 0, false, {
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
    story.relatedArticles && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "2xl container px-6 mx-auto w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "font-bold mt-40 mb-4 text-xl", children: "Read next" }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "gap-5 lg:grid grid-cols-5 pb-5 flex flex-wrapl", children: (_c = story.relatedArticles) == null ? void 0 : _c.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RelatedDocument, { document: item }, void 0, false, {
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
    story.featuredProducts && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "2xl container px-6 mx-auto w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "font-bold mt-20 mb-4 text-xl", children: "Featured products" }, void 0, false, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "gap-5 lg:grid grid-cols-5 pb-5 flex flex-wrap", children: (_d = story.featuredProducts) == null ? void 0 : _d.map((item, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Product, { item }, index, false, {
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

// src/ui/pages/AbstractStory.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var AbstractStory_default = ({ data: story }) => {
  if (story.type === "curated-product-story") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CuratedStory_default, { data: story }, void 0, false, {
      fileName: "src/ui/pages/AbstractStory.tsx",
      lineNumber: 7,
      columnNumber: 16
    }, this);
  }
  if (story.type === "story") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Story_default, { data: story }, void 0, false, {
      fileName: "src/ui/pages/AbstractStory.tsx",
      lineNumber: 10,
      columnNumber: 16
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: " No renderer for type" }, void 0, false, {
    fileName: "src/ui/pages/AbstractStory.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
};

export {
  AbstractStory_default
};
//# sourceMappingURL=/build/_shared/chunk-OCSEKXDD.js.map
