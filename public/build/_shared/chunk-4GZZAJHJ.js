import {
  AddToCartBtn,
  ImageGallery,
  ParagraphCollection,
  VariantSelector,
  buildSchemaMarkup
} from "/build/_shared/chunk-RAX2SR4E.js";
import {
  Product
} from "/build/_shared/chunk-WLGJVYWN.js";
import {
  require_content_transformer
} from "/build/_shared/chunk-5DV7PF7Q.js";
import {
  Link_default
} from "/build/_shared/chunk-NTU3S4GL.js";
import {
  Price
} from "/build/_shared/chunk-QMFJ3HMQ.js";
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

// src/ui/pages/Product.tsx
var import_react2 = __toESM(require_react());

// src/assets/arrow.svg
var arrow_default = "/build/_assets/arrow-VBAUMBND.svg";

// src/ui/components/product/dimensions-table.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DimensionsTable = ({ dimensions }) => {
  const { _t } = useAppContext();
  if (Object.keys(dimensions).length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("details", { className: "border-t border-[#dfdfdf] hover:bg-[#fefefe] frntr-accordination", open: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("summary", { className: "font-bold text-2xl py-10 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: _t("dimensions") }, void 0, false, {
        fileName: "src/ui/components/product/dimensions-table.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `${arrow_default}`, alt: "Arrow", className: "frntr-accordination-arrow w-[20px] h-[20px] mr-4" }, void 0, false, {
        fileName: "src/ui/components/product/dimensions-table.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/product/dimensions-table.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md h-auto -mt-4 mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: Object.keys(dimensions).map((key, index) => {
      const dimension = dimensions[key];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between py-4 px-2 odd:bg-[#efefef]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-md", children: dimension.title }, void 0, false, {
          fileName: "src/ui/components/product/dimensions-table.tsx",
          lineNumber: 23,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-md", children: [
          dimension.value,
          dimension.unit
        ] }, void 0, true, {
          fileName: "src/ui/components/product/dimensions-table.tsx",
          lineNumber: 24,
          columnNumber: 33
        }, this)
      ] }, `${index}-${key}`, true, {
        fileName: "src/ui/components/product/dimensions-table.tsx",
        lineNumber: 22,
        columnNumber: 29
      }, this);
    }) }, void 0, false, {
      fileName: "src/ui/components/product/dimensions-table.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/components/product/dimensions-table.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/product/dimensions-table.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};

// src/ui/components/crystallize-components/properties-table.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var PropertiesTable = ({ table }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("details", { className: "border-t border-[#dfdfdf] mt-20 hover:bg-[#fefefe] frntr-accordination", open: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("summary", { className: "font-bold text-2xl py-10 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: table == null ? void 0 : table.title }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/properties-table.tsx",
        lineNumber: 8,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: `${arrow_default}`, alt: "Arrow", className: "frntr-accordination-arrow w-[20px] h-[20px] mr-4" }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/properties-table.tsx",
        lineNumber: 9,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    table.properties && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-md h-auto -mt-4 mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: Object.keys(table.properties).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between py-4 px-2 odd:bg-[#efefef]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-semibold text-md", children: key }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/properties-table.tsx",
        lineNumber: 16,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md", children: table.properties[key] }, void 0, false, {
        fileName: "src/ui/components/crystallize-components/properties-table.tsx",
        lineNumber: 17,
        columnNumber: 33
      }, this)
    ] }, key, true, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 15,
      columnNumber: 29
    }, this)) }, void 0, false, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 12,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/crystallize-components/properties-table.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
};

// src/assets/documentDownloadIcon.svg
var documentDownloadIcon_default = "/build/_assets/documentDownloadIcon-UENN33PL.svg";

// src/ui/components/product/files.tsx
var import_content_transformer = __toESM(require_content_transformer());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Files = ({ files }) => {
  const { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("details", { className: "border-t border-[#dfdfdf] hover:bg-[#fefefe] frntr-accordination min-h-fit", open: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("summary", { className: "font-bold text-2xl py-10 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: _t("specifications") }, void 0, false, {
        fileName: "src/ui/components/product/files.tsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: `${arrow_default}`, alt: "Arrow", className: "frntr-accordination-arrow w-[20px] h-[20px] mr-4" }, void 0, false, {
        fileName: "src/ui/components/product/files.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/product/files.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-5 grid-col-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 h-auto -mt-4 mb-10", children: files.map((file, index) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: "bg-[#efefef] p-6 min-h-[300px] flex h-full flex-col justify-between w-full rounded-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-2 gap-2 mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "img",
                {
                  className: "w-[25px] h-[25px] mb-2",
                  src: `${documentDownloadIcon_default}`,
                  width: "40",
                  height: "40",
                  alt: "User icon"
                },
                void 0,
                false,
                {
                  fileName: "src/ui/components/product/files.tsx",
                  lineNumber: 25,
                  columnNumber: 37
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-semibold text-md", children: file.title }, void 0, false, {
                fileName: "src/ui/components/product/files.tsx",
                lineNumber: 32,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-elipsis", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_content_transformer.ContentTransformer, { json: (_a = file.description) == null ? void 0 : _a.json }, void 0, false, {
                fileName: "src/ui/components/product/files.tsx",
                lineNumber: 34,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "src/ui/components/product/files.tsx",
                lineNumber: 33,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "src/ui/components/product/files.tsx",
              lineNumber: 24,
              columnNumber: 33
            }, this),
            files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex text-sm flex-col", children: file.files.map((file2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "mt-1 underline truncate", href: file2.url, children: [
              "\u279E ",
              file2.title
            ] }, file2.url, true, {
              fileName: "src/ui/components/product/files.tsx",
              lineNumber: 41,
              columnNumber: 45
            }, this)) }, void 0, false, {
              fileName: "src/ui/components/product/files.tsx",
              lineNumber: 39,
              columnNumber: 37
            }, this)
          ]
        },
        index,
        true,
        {
          fileName: "src/ui/components/product/files.tsx",
          lineNumber: 20,
          columnNumber: 29
        },
        this
      );
    }) }, void 0, false, {
      fileName: "src/ui/components/product/files.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/product/files.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

// src/ui/components/product/product-body.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var ProductBody = ({ story, dimensions, propertiesTable, downloads }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    story && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ParagraphCollection, { paragraphs: story }, void 0, false, {
      fileName: "src/ui/components/product/product-body.tsx",
      lineNumber: 18,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-20", children: [
      propertiesTable && propertiesTable.map((table, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PropertiesTable, { table }, index, false, {
        fileName: "src/ui/components/product/product-body.tsx",
        lineNumber: 22,
        columnNumber: 25
      }, this)),
      dimensions && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DimensionsTable, { dimensions }, void 0, false, {
        fileName: "src/ui/components/product/product-body.tsx",
        lineNumber: 24,
        columnNumber: 32
      }, this),
      downloads && downloads.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Files, { files: downloads }, void 0, false, {
        fileName: "src/ui/components/product/product-body.tsx",
        lineNumber: 25,
        columnNumber: 55
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/product/product-body.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/product/product-body.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
};

// src/assets/stockIcon.svg
var stockIcon_default = "/build/_assets/stockIcon-UYUXXPN5.svg";

// src/ui/components/product/stock-location.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var StockIndicators = ({ location }) => {
  const { _t } = useAppContext();
  const stock = location.stock || 0;
  if (stock < 1) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "w-[18px] h-[18px]", src: `${stockIcon_default}`, width: "20", height: "20", alt: "User icon" }, void 0, false, {
          fileName: "src/ui/components/product/stock-location.tsx",
          lineNumber: 13,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-semibold", children: location.name }, void 0, false, {
          fileName: "src/ui/components/product/stock-location.tsx",
          lineNumber: 14,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-[#F42C04]" }, void 0, false, {
          fileName: "src/ui/components/product/stock-location.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-medium text-black", children: _t("stock.outOfStock") }, void 0, false, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 17,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this);
  }
  if (stock > 0 && stock < 21) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "w-[18px] h-[18px]", src: `${stockIcon_default}`, width: "20", height: "20", alt: "User icon" }, void 0, false, {
          fileName: "src/ui/components/product/stock-location.tsx",
          lineNumber: 25,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-semibold", children: location.name }, void 0, false, {
          fileName: "src/ui/components/product/stock-location.tsx",
          lineNumber: 26,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-[#FFC60A]" }, void 0, false, {
          fileName: "src/ui/components/product/stock-location.tsx",
          lineNumber: 27,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-medium text-black", children: _t("stock.lowStock") }, void 0, false, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "w-[18px] h-[18px]", src: `${stockIcon_default}`, width: "20", height: "20", alt: "User icon" }, void 0, false, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-semibold", children: location.name }, void 0, false, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-green2" }, void 0, false, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "font-medium text-green2 text-right", children: _t("stock.inStock") }, void 0, false, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/product/stock-location.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
};
var StockLocations = ({ locations }) => {
  const [locationCountToShow, setLocationCountToShow] = (0, import_react.useState)(1);
  const { _t } = useAppContext();
  if (locations.length === 0)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    locations.slice(0, locationCountToShow).map((location) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex pt-2 items-center gap-2 justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(StockIndicators, { location }, void 0, false, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 53,
      columnNumber: 21
    }, this) }, location.identifier, false, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this)),
    locations.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        onClick: () => locationCountToShow == locations.length ? setLocationCountToShow(1) : setLocationCountToShow(locations.length),
        className: "text-[#000] font-regular text-xs ml-7 mt-1 opacity-[0.6] hover:opacity-[1] underline",
        children: locationCountToShow == locations.length ? _t("stock.showLessAvailability") : _t("stock.showMoreAvailability", { count: locations.length - 1 })
      },
      void 0,
      false,
      {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 57,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/ui/components/product/stock-location.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
};

// src/ui/components/product/topic-labels.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var TopicLabels = ({ topics }) => {
  const { path } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: topics.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link_default, { to: path(topic.path), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "rounded-md bg-[#efefef] border border-[transparent] hover:border-[#000] px-3 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xs font-bold", children: topic.name }, void 0, false, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 12,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 11,
    columnNumber: 21
  }, this) }, topic.name, false, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this)) }, void 0, false, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Product.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var Product_default = ({
  data
}) => {
  var _a;
  const { _t } = useAppContext();
  const { product, preSelectedSku } = data;
  const primaryVariant = (_a = product.variants.find((variant) => variant.sku === preSelectedSku)) != null ? _a : product.defaultVariant;
  let [selectedVariant, setSelectedVariant] = (0, import_react2.useState)(primaryVariant);
  const description = selectedVariant.description || product.description;
  (0, import_react2.useEffect)(() => {
    setSelectedVariant(primaryVariant);
  }, [product]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(buildSchemaMarkup(product))
        }
      },
      void 0,
      false,
      {
        fileName: "src/ui/pages/Product.tsx",
        lineNumber: 36,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pl-6 md:px-6 mx-auto xl:container full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex gap-20 lg:flex-row flex-col-reverse ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "lg:w-4/6 w-full pr-6 md:pr-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "img-container overflow-hidden rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ImageGallery, { images: selectedVariant.images }, void 0, false, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 46,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 45,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            ProductBody,
            {
              story: product == null ? void 0 : product.story,
              propertiesTable: product == null ? void 0 : product.specifications,
              dimensions: product == null ? void 0 : product.dimensions,
              downloads: product == null ? void 0 : product.downloads
            },
            void 0,
            false,
            {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 48,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "lg:w-2/6 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-2 sticky top-16 pb-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-2", children: product.topics && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TopicLabels, { topics: product.topics }, void 0, false, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 57,
            columnNumber: 70
          }, this) }, void 0, false, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "pr-6 md:pr-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "font-bold text-4xl mb-2", children: product.title }, void 0, false, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 59,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md font-normal", children: description }, void 0, false, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 60,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 58,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            VariantSelector,
            {
              variants: product.variants,
              selectedVariant,
              onVariantChange: (variant) => {
                const url = new URL(window.location.href);
                url.searchParams.set("sku", variant.sku);
                window.history.pushState({}, "", url);
                setSelectedVariant(variant);
              },
              renderingType: "default"
            },
            void 0,
            false,
            {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 62,
              columnNumber: 29
            },
            this
          ),
          selectedVariant && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between md:items-end sm:flex-row flex-col  sm:gap-1 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Price, { variant: selectedVariant }, void 0, false, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 75,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AddToCartBtn, { pack: [{ variant: selectedVariant, quantity: 1 }] }, void 0, false, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 76,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 74,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-[#dfdfdf] h-[1px] mt-5" }, void 0, false, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 79,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(StockLocations, { locations: Object.values(selectedVariant.stockLocations) }, void 0, false, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 80,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 56,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/Product.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      product.relatedItems && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full border-t border-[#dfdfdf] pr-6 sm:pr-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "font-bold mt-20 mb-4 text-xl", children: _t("relatedProducts") }, void 0, false, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 87,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid gap-5 grid-cols-2 grid md:grid-cols-4 lg:grid-cols-5 pb-5", children: product.relatedItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Product, { item }, `${item.path}-${index}`, false, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 90,
          columnNumber: 33
        }, this)) }, void 0, false, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/pages/Product.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/Product.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/Product.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
};

export {
  Product_default
};
//# sourceMappingURL=/build/_shared/chunk-4GZZAJHJ.js.map
