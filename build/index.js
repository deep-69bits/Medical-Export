var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) : handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext);
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 30,
      columnNumber: 56
    }, this), {
      onAllReady() {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html");
        let http2PushLinksHeaders = remixContext.matches.flatMap(({ route: { module: module2, imports } }) => [module2, ...imports || []]).filter(Boolean).concat([
          remixContext.manifest.url,
          remixContext.manifest.entry.module,
          ...remixContext.manifest.entry.imports
        ]);
        responseHeaders.set(
          "Link",
          (responseHeaders.has("Link") ? responseHeaders.get("Link") + "," : "") + http2PushLinksHeaders.map((link) => `<${link}>; rel=preload; as=script; crossorigin=anonymous`).join(",")
        ), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 84,
      columnNumber: 56
    }, this), {
      onShellReady() {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(err) {
        reject(err);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// src/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  headers: () => headers,
  links: () => links,
  loader: () => loader2,
  meta: () => meta
});
var import_react7 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// src/assets/userIcon.svg
var userIcon_default = "/build/_assets/userIcon-IK2GULGQ.svg";

// src/ui/bridge/Link.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Link_default = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { ...props, children: props.children }, void 0, !1, {
  fileName: "src/ui/bridge/Link.tsx",
  lineNumber: 4,
  columnNumber: 12
}, this);

// src/ui/components/search/search-bar.tsx
var import_react4 = require("react");

// src/assets/searchIcon.svg
var searchIcon_default = "/build/_assets/searchIcon-6EQLXFJK.svg";

// src/ui/components/search/search-bar.tsx
var import_react_debounce_input = require("react-debounce-input");
var import_reactjs_components = require("@crystallize/reactjs-components");

// src/ui/app-context/provider.tsx
var import_react3 = require("react");

// src/use-cases/LanguageAndMarket.ts
var displayableLanguages = [
  {
    code: "en",
    name: "EN"
  },
  {
    code: "no",
    name: "NO"
  }
], availableLanguages = [
  "en",
  "no",
  "fr",
  "de",
  "es",
  "it",
  "sv",
  "da",
  "nl",
  "pt",
  "pl",
  "ru",
  "ja",
  "zh",
  "ko",
  "ar",
  "tr",
  "th",
  "cs",
  "hu",
  "fi",
  "el",
  "he",
  "id",
  "ro",
  "sk",
  "uk",
  "vi",
  "bg",
  "hr",
  "lt",
  "lv",
  "sr",
  "sl",
  "et",
  "ka",
  "ms",
  "hi",
  "bn",
  "ta",
  "te",
  "ml",
  "ur",
  "fa",
  "ps",
  "sw",
  "am",
  "km",
  "lo",
  "my",
  "ne",
  "si",
  "pa",
  "gu",
  "mr",
  "sa",
  "kn",
  "sd",
  "or",
  "as",
  "ml",
  "cy",
  "is",
  "mk",
  "sq",
  "bs",
  "mt",
  "af",
  "az",
  "be",
  "bn",
  "bs",
  "ca",
  "cs",
  "cy",
  "da",
  "de",
  "el",
  "en",
  "es",
  "et",
  "fa",
  "fi",
  "fr",
  "gu",
  "he",
  "hi",
  "hr",
  "hu",
  "hy",
  "id",
  "is",
  "it",
  "ja",
  "ka",
  "km",
  "kn",
  "ko",
  "lt",
  "lv",
  "mk",
  "ml",
  "mr",
  "ms",
  "ne",
  "nl",
  "no",
  "or",
  "pa",
  "pl",
  "ps",
  "pt",
  "ro",
  "ru",
  "sa",
  "sd",
  "si",
  "sk",
  "sl",
  "sq",
  "sr",
  "sv",
  "sw",
  "ta",
  "te",
  "th",
  "tr",
  "uk",
  "ur",
  "vi",
  "zh"
], availableMarkets = [], isValidLanguage = (language) => availableLanguages.includes(language), isValidMarket = (market) => !market || availableMarkets.length === 0 ? !0 : availableMarkets.includes(market), isValidLanguageMarket = (language, market) => !(!isValidLanguage(language) || !isValidMarket(market)), buildLanguageMarketAwareLink = (path, language, market) => {
  if (!isValidLanguageMarket(language, market))
    throw new Error(`Invalid language (${language}) or market (${market})`);
  return market && market.length > 0 ? `/${language}-${market}${path}` : `/${language}${path}`;
};

// src/ui/app-context/reducer.ts
function Reducer(state, action15) {
  switch (action15.type) {
    case "ADD_ITEMS_TO_CART":
      return {
        ...state,
        latestAddedCartItems: action15.items
      };
    case "RESET_LAST_ADDED_ITEMS":
      return {
        ...state,
        latestAddedCartItems: []
      };
    default:
      throw new Error("AppContext - Unhandled action type");
  }
}
function mapToReducerActions(dispatch) {
  return {
    addItemsToCart: (items) => dispatch({ type: "ADD_ITEMS_TO_CART", items }),
    resetLastAddedItems() {
      dispatch({ type: "RESET_LAST_ADDED_ITEMS" });
    }
  };
}

// src/ui/app-context/provider.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), StateContext = (0, import_react3.createContext)(void 0), DispatchContext = (0, import_react3.createContext)(void 0), TranslationsContext = (0, import_react3.createContext)(void 0), initiateState = (initialState) => ({
  ...initialState,
  latestAddedCartItems: []
}), AppContextProvider = ({ children, initialState, translations }) => {
  let [state, dispatch] = (0, import_react3.useReducer)(Reducer, initiateState(initialState));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TranslationsContext.Provider, { value: translations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StateContext.Provider, { value: state, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DispatchContext.Provider, { value: dispatch, children }, void 0, !1, {
    fileName: "src/ui/app-context/provider.tsx",
    lineNumber: 29,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/app-context/provider.tsx",
    lineNumber: 28,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/app-context/provider.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
};
function useAppContextState() {
  let context = (0, import_react3.useContext)(StateContext);
  if (context === void 0)
    throw new Error("useAppContextState must be used within the AppContextProvider.");
  return context;
}
function useAppContextDispatch() {
  let context = (0, import_react3.useContext)(DispatchContext);
  if (context === void 0)
    throw new Error("useAppContextDispatch must be used within the AppContextProvider.");
  return context;
}
function useAppContext() {
  let translationContext = (0, import_react3.useContext)(TranslationsContext), actions = mapToReducerActions(useAppContextDispatch()), state = useAppContextState();
  return {
    state,
    dispatch: actions,
    _t: (key, options) => {
      if (!translationContext)
        return key;
      let translated = translationContext[key] || key;
      return options ? Object.entries(options).reduce((acc, [key2, value]) => acc.replace(`{{${key2}}}`, value), translated) : translated;
    },
    path: (path) => buildLanguageMarketAwareLink(path, state.language, state.market)
  };
}

// src/ui/components/search/search-bar.tsx
var import_js_api_client = require("@crystallize/js-api-client");

// src/use-cases/contracts/Currency.ts
var mapping = {
  AED: "\u062F.\u0625",
  AFN: "\u060B",
  ALL: "L",
  AMD: "\u058F",
  ANG: "\u0192",
  AOA: "Kz",
  ARS: "$",
  AUD: "$",
  AWG: "\u0192",
  AZN: "\u20BC",
  BAM: "KM",
  BBD: "$",
  BDT: "\u09F3",
  BGN: "\u043B\u0432",
  BHD: ".\u062F.\u0628",
  BIF: "FBu",
  BMD: "$",
  BND: "$",
  BOB: "$b",
  BRL: "R$",
  BSD: "$",
  BTC: "\u20BF",
  BTN: "Nu.",
  BWP: "P",
  BYR: "Br",
  BYN: "Br",
  BZD: "BZ$",
  CAD: "$",
  CDF: "FC",
  CHF: "CHF",
  CLP: "$",
  CNY: "\xA5",
  COP: "$",
  CRC: "\u20A1",
  CUC: "$",
  CUP: "\u20B1",
  CVE: "$",
  CZK: "K\u010D",
  DJF: "Fdj",
  DKK: "kr",
  DOP: "RD$",
  DZD: "\u062F\u062C",
  EEK: "kr",
  EGP: "\xA3",
  ERN: "Nfk",
  ETB: "Br",
  ETH: "\u039E",
  EUR: "\u20AC",
  FJD: "$",
  FKP: "\xA3",
  GBP: "\xA3",
  GEL: "\u20BE",
  GGP: "\xA3",
  GHC: "\u20B5",
  GHS: "GH\u20B5",
  GIP: "\xA3",
  GMD: "D",
  GNF: "FG",
  GTQ: "Q",
  GYD: "$",
  HKD: "$",
  HNL: "L",
  HRK: "kn",
  HTG: "G",
  HUF: "Ft",
  IDR: "Rp",
  ILS: "\u20AA",
  IMP: "\xA3",
  INR: "\u20B9",
  IQD: "\u0639.\u062F",
  IRR: "\uFDFC",
  ISK: "kr",
  JEP: "\xA3",
  JMD: "J$",
  JOD: "JD",
  JPY: "\xA5",
  KES: "KSh",
  KGS: "\u043B\u0432",
  KHR: "\u17DB",
  KMF: "CF",
  KPW: "\u20A9",
  KRW: "\u20A9",
  KWD: "KD",
  KYD: "$",
  KZT: "\u043B\u0432",
  LAK: "\u20AD",
  LBP: "\xA3",
  LKR: "\u20A8",
  LRD: "$",
  LSL: "M",
  LTC: "\u0141",
  LTL: "Lt",
  LVL: "Ls",
  LYD: "LD",
  MAD: "MAD",
  MDL: "lei",
  MGA: "Ar",
  MKD: "\u0434\u0435\u043D",
  MMK: "K",
  MNT: "\u20AE",
  MOP: "MOP$",
  MRO: "UM",
  MRU: "UM",
  MUR: "\u20A8",
  MVR: "Rf",
  MWK: "MK",
  MXN: "$",
  MYR: "RM",
  MZN: "MT",
  NAD: "$",
  NGN: "\u20A6",
  NIO: "C$",
  NOK: "kr",
  NPR: "\u20A8",
  NZD: "$",
  OMR: "\uFDFC",
  PAB: "B/.",
  PEN: "S/",
  PGK: "K",
  PHP: "\u20B1",
  PKR: "\u20A8",
  PLN: "z\u0142",
  PYG: "Gs",
  QAR: "\uFDFC",
  RMB: "\uFFE5",
  RON: "lei",
  RSD: "\u0414\u0438\u043D.",
  RUB: "\u20BD",
  RWF: "R\u20A3",
  SAR: "\uFDFC",
  SBD: "$",
  SCR: "\u20A8",
  SDG: "\u062C.\u0633.",
  SEK: "kr",
  SGD: "S$",
  SHP: "\xA3",
  SLL: "Le",
  SOS: "S",
  SRD: "$",
  SSP: "\xA3",
  STD: "Db",
  STN: "Db",
  SVC: "$",
  SYP: "\xA3",
  SZL: "E",
  THB: "\u0E3F",
  TJS: "SM",
  TMT: "T",
  TND: "\u062F.\u062A",
  TOP: "T$",
  TRL: "\u20A4",
  TRY: "\u20BA",
  TTD: "TT$",
  TVD: "$",
  TWD: "NT$",
  TZS: "TSh",
  UAH: "\u20B4",
  UGX: "USh",
  USD: "$",
  UYU: "$U",
  UZS: "so'm",
  VEF: "Bs",
  VND: "\u20AB",
  VUV: "VT",
  WST: "WS$",
  XAF: "FCFA",
  XBT: "\u0243",
  XCD: "$",
  XOF: "CFA",
  XPF: "\u20A3",
  YER: "\uFDFC",
  ZAR: "R",
  ZMK: "ZK",
  ZWD: "Z$"
}, getSymbolFromCode = (code) => mapping[code];
var getCurrencyFromCode = (code) => ({
  code: code.toUpperCase(),
  symbol: getSymbolFromCode(code.toUpperCase())
});

// src/use-cases/checkout/pricing.ts
function displayPriceFor(variant, identifiers = {
  default: "default",
  discounted: "sales"
}, currencyCode, discount) {
  let priceVariants = variant == null ? void 0 : variant.priceVariants, currency = getCurrencyFromCode(currencyCode);
  if (!priceVariants)
    return {
      default: 0,
      percent: 0,
      currency
    };
  let defaultPrice = priceVariants[identifiers.default] && priceVariants[identifiers.default].currency.code === currency.code ? priceVariants[identifiers.default].value : 0, discountedPrice = (discount == null ? void 0 : discount.amount) || priceVariants[identifiers.discounted] && priceVariants[identifiers.discounted].currency.code === currency.code ? priceVariants[identifiers.discounted].value : void 0;
  return discountedPrice ? {
    default: defaultPrice,
    discounted: discountedPrice,
    percent: defaultPrice > 0 ? Math.round((defaultPrice - discountedPrice) / defaultPrice * 100) : 0,
    currency
  } : {
    default: defaultPrice,
    percent: 0,
    currency
  };
}

// src/ui/lib/pricing/pricing-component.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Price = ({ children, className = "", currencyCode }) => {
  let currency = getCurrencyFromCode(currencyCode), formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 5
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `crystallize-price ${className}`, children: formatter.format(children) }, void 0, !1, {
    fileName: "src/ui/lib/pricing/pricing-component.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};

// src/use-cases/mapper/api-mappers.ts
function stringForSingleLineComponentWithId(components, id) {
  var _a3, _b;
  return (_b = (_a3 = components == null ? void 0 : components.find((component) => component.id === id)) == null ? void 0 : _a3.content) == null ? void 0 : _b.text;
}
function stringForRichTextComponentWithId(components, id) {
  var _a3, _b, _c;
  return (_c = (_b = (_a3 = components == null ? void 0 : components.find((component) => component.id === id)) == null ? void 0 : _a3.content) == null ? void 0 : _b.plainText) == null ? void 0 : _c.join(`
`);
}
function paragraphsForParagraphCollectionComponentWithId(components, id) {
  var _a3, _b;
  return (_b = (_a3 = components.find((component) => component.id === id)) == null ? void 0 : _a3.content) == null ? void 0 : _b.paragraphs;
}
function sectionsForPropertyTableComponentWithId(components, id) {
  var _a3;
  let component = (_a3 = components.find((component2) => component2.id === id)) == null ? void 0 : _a3.content;
  if (!!component)
    return component.sections.map((section) => ({
      title: section.title,
      properties: section.properties.reduce((memo, property) => ({
        ...memo,
        [property.key]: property.value
      }), {})
    }));
}
function chunksForChunkComponentWithId(components, id) {
  var _a3;
  let component = (_a3 = components.find((component2) => component2.id === id)) == null ? void 0 : _a3.content;
  if (!!component)
    return component == null ? void 0 : component.chunks.map((chunk) => chunk.map((data) => ({
      id: data.id,
      name: data.name,
      content: data.content,
      type: data.type
    })));
}
function itemsForItemRelationComponentWithId(components, id) {
  var _a3, _b;
  return (_b = (_a3 = components.find((component) => component.id === id)) == null ? void 0 : _a3.content) == null ? void 0 : _b.items;
}
function choiceComponentWithId(components, id) {
  var _a3, _b;
  let component = (_b = (_a3 = components.find((component2) => component2.id === id)) == null ? void 0 : _a3.content) == null ? void 0 : _b.selectedComponent;
  if (!!component)
    return {
      id: component.id,
      content: component.content
    };
}
function numericValueForComponentWithId(components, id) {
  var _a3, _b;
  return (_b = (_a3 = components.find((component2) => component2.id === id)) == null ? void 0 : _a3.content) == null ? void 0 : _b.number;
}
function flattenRichText(richText) {
  var _a3, _b;
  return {
    plainText: (_a3 = richText == null ? void 0 : richText.plainText) == null ? void 0 : _a3.join(""),
    json: richText == null ? void 0 : richText.json,
    html: (_b = richText == null ? void 0 : richText.html) == null ? void 0 : _b.join("")
  };
}

// src/use-cases/mapper/API/fetchDocumentToStory.ts
var fetchDocumentToStory_default = (data) => {
  let mapper = DataMapper();
  return data.shape.identifier === "curated-product-story" ? documentToCuratedStory(mapper, data) : documentToStory(mapper, data);
}, documentToStory = (mapper, data) => {
  var _a3, _b;
  let media = choiceComponentWithId(data.components, "media"), firstSeoChunk = (_a3 = chunksForChunkComponentWithId(data.components, "meta")) == null ? void 0 : _a3[0], relatedArticles = itemsForItemRelationComponentWithId(data.components, "up-next") || [], featuedProducts = itemsForItemRelationComponentWithId(data.components, "featured"), story = paragraphsForParagraphCollectionComponentWithId(data.components, "story");
  return {
    type: "story",
    path: data.path,
    name: data.name,
    title: stringForSingleLineComponentWithId(data.components, "title") || data.name,
    description: flattenRichText((_b = data.components.find((c) => c.id === "intro")) == null ? void 0 : _b.content),
    createdAt: data.createdAt,
    medias: {
      images: (media == null ? void 0 : media.id) === "image" ? mapper.API.Object.APIImageToImage(media.content.images) : [],
      videos: (media == null ? void 0 : media.id) === "video" ? [] : []
    },
    story: (story == null ? void 0 : story.map((paragraph) => {
      var _a4;
      return {
        title: ((_a4 = paragraph.title) == null ? void 0 : _a4.text) || "",
        body: flattenRichText(paragraph.body),
        images: mapper.API.Object.APIImageToImage(paragraph.images)
      };
    })) || [],
    relatedArticles,
    featuredProducts: (featuedProducts == null ? void 0 : featuedProducts.map((item) => ({
      id: item == null ? void 0 : item.id,
      name: item.name,
      path: item.path,
      topics: [],
      variant: mapper.API.Object.APIProductVariantToProductVariant(item.defaultVariant)
    }))) || [],
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk)
  };
}, documentToCuratedStory = (mapper, data) => {
  var _a3, _b, _c, _d;
  let intro = flattenRichText((_a3 = data.components.find((c) => c.id === "description")) == null ? void 0 : _a3.content), media = (_b = data.components.find((c) => c.id === "shoppable-image")) == null ? void 0 : _b.content, story = paragraphsForParagraphCollectionComponentWithId(data.components, "story"), firstSeoChunk = (_c = chunksForChunkComponentWithId(data.components, "meta")) == null ? void 0 : _c[0];
  return {
    type: "curated-product-story",
    title: stringForSingleLineComponentWithId(data.components, "title") || data.name,
    description: intro,
    path: data.path,
    name: data.name,
    medias: {
      images: mapper.API.Object.APIImageToImage(media.images),
      videos: []
    },
    merchandising: ((_d = chunksForChunkComponentWithId(data.components, "merchandising")) == null ? void 0 : _d.map((chunk) => {
      var _a4;
      return {
        products: ((_a4 = itemsForItemRelationComponentWithId(chunk, "products")) == null ? void 0 : _a4.map((product) => ({
          id: product.id,
          name: product.name,
          path: product.path,
          variant: mapper.API.Object.APIProductVariantToProductVariant(product.defaultVariant),
          variants: product.variants.map(mapper.API.Object.APIProductVariantToProductVariant),
          topics: []
        }))) || [],
        x: numericValueForComponentWithId(chunk, "hotspot-x") || 0,
        y: numericValueForComponentWithId(chunk, "hotspot-y") || 0
      };
    })) || [],
    story: (story == null ? void 0 : story.map((paragraph) => {
      var _a4;
      return {
        title: ((_a4 = paragraph.title) == null ? void 0 : _a4.text) || "",
        body: flattenRichText(paragraph.body),
        images: mapper.API.Object.APIImageToImage(paragraph.images)
      };
    })) || [],
    relatedArticles: [],
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk)
  };
};

// src/use-cases/mapper/API/fetchFolderToCategory.ts
var fetchFolderToCategory_default = (data) => {
  var _a3, _b, _c, _d, _e, _f, _g, _h;
  let mapper = DataMapper(), hero = choiceComponentWithId(data.components, "hero-content"), grid = ((_b = (_a3 = hero == null ? void 0 : hero.content) == null ? void 0 : _a3.grids) == null ? void 0 : _b[0]) || ((_c = hero == null ? void 0 : hero.content) != null && _c.items ? mapper.API.Object.AnyItemToGrid((_d = hero == null ? void 0 : hero.content) == null ? void 0 : _d.items) : null), firstSeoChunk = (_f = (_e = data == null ? void 0 : data.meta) == null ? void 0 : _e.content) == null ? void 0 : _f.chunks[0];
  return {
    name: data == null ? void 0 : data.name,
    path: data == null ? void 0 : data.path,
    title: stringForSingleLineComponentWithId(data.components, "title") || data.name,
    description: stringForRichTextComponentWithId(data.components, "description") || data.name,
    hero: grid ? {
      id: `grid-${(hero == null ? void 0 : hero.id) ?? data.id}`,
      ...grid
    } : void 0,
    seo: (_h = (_g = mapper == null ? void 0 : mapper.API) == null ? void 0 : _g.Object) == null ? void 0 : _h.APIMetaSEOComponentToSEO(firstSeoChunk)
  };
};

// src/use-cases/mapper/API/fetchFolderWithChildrenToCategoryWithChildren.ts
var fetchFolderWithChildrenToCategoryWithChildren_default = (data) => {
  var _a3;
  let mapper = DataMapper();
  return {
    ...fetchFolderToCategory_default(data),
    children: (_a3 = data.children) == null ? void 0 : _a3.map((child) => {
      var _a4, _b, _c, _d;
      let common = {
        name: child.name,
        path: child.path
      };
      if (child.shape.identifier === "curated-product-story") {
        let title = stringForSingleLineComponentWithId(child.components, "title") || child.name, intro = (_a4 = child.components.find((c) => c.id === "description")) == null ? void 0 : _a4.content, media = (_b = child.components.find((c) => c.id === "shoppable-image")) == null ? void 0 : _b.content;
        return {
          ...common,
          title,
          description: intro,
          type: "curated-product-story",
          medias: {
            images: mapper.API.Object.APIImageToImage(media.images),
            videos: []
          },
          merchandising: ((_c = chunksForChunkComponentWithId(child.components, "merchandising")) == null ? void 0 : _c.map((chunk) => {
            var _a5;
            return {
              products: ((_a5 = itemsForItemRelationComponentWithId(chunk, "products")) == null ? void 0 : _a5.map((product) => ({
                id: product.id,
                name: product.name,
                path: product.path,
                variant: mapper.API.Object.APIProductVariantToProductVariant(
                  product.defaultVariant
                ),
                topics: []
              }))) || [],
              x: numericValueForComponentWithId(chunk, "hotspot-x") || 0,
              y: numericValueForComponentWithId(chunk, "hotspot-y") || 0
            };
          })) || []
        };
      }
      if (child.shape.identifier === "product")
        return {
          id: child.id,
          ...common,
          topics: [],
          variant: mapper.API.Object.APIProductVariantToProductVariant(child.defaultVariant)
        };
      if (child.shape.identifier === "story") {
        let title = stringForSingleLineComponentWithId(child.components, "title") || child.name, intro = (_d = child.components.find((c) => c.id === "intro")) == null ? void 0 : _d.content, media = choiceComponentWithId(child.components, "media");
        return {
          ...common,
          title,
          description: intro,
          type: "story",
          medias: {
            images: (media == null ? void 0 : media.id) === "image" ? mapper.API.Object.APIImageToImage(media.content.images) : [],
            videos: (media == null ? void 0 : media.id) === "video" ? [] : []
          }
        };
      }
    })
  };
};

// src/use-cases/mapper/API/fetchFooterToFooter.ts
var fetchFooterToFooter_default = (data) => {
  var _a3, _b;
  let mapper = DataMapper();
  if (data === null)
    return {
      copyright: "",
      contact: {
        plainText: "",
        html: ""
      },
      links: {
        plainText: "",
        html: ""
      },
      socialLinks: [],
      promotions: {
        heading: "",
        cards: []
      }
    };
  let socialLinks = chunksForChunkComponentWithId(data.components, "social"), promotionCards = chunksForChunkComponentWithId(data.components, "promotion-cards");
  return {
    copyright: stringForSingleLineComponentWithId(data.components, "copyright") || "",
    contact: flattenRichText((_a3 = data.components.find((c) => c.id === "contact-information")) == null ? void 0 : _a3.content),
    links: (_b = data.components.find((c) => c.id === "links")) == null ? void 0 : _b.content,
    socialLinks: (socialLinks == null ? void 0 : socialLinks.map((socialLink) => {
      var _a4;
      let logo = (_a4 = socialLink.find((c) => c.id === "logo")) == null ? void 0 : _a4.content;
      return {
        logo: mapper.API.Object.APIImageToImage(logo.images),
        link: stringForSingleLineComponentWithId(socialLink, "link") || ""
      };
    })) || [],
    promotions: {
      heading: stringForSingleLineComponentWithId(data.components, "promotion-section-heading") || "",
      cards: (promotionCards == null ? void 0 : promotionCards.map((card) => {
        var _a4;
        let image = (_a4 = card.find((c) => c.id === "image")) == null ? void 0 : _a4.content;
        return {
          title: stringForSingleLineComponentWithId(card, "title") || "",
          link: stringForSingleLineComponentWithId(card, "link") || "",
          image: mapper.API.Object.APIImageToImage(image.images)
        };
      })) || []
    }
  };
};

// src/use-cases/mapper/API/fetchLandingPageToLandingPage.ts
var fetchLandingPageToLandingPage_default = (data) => {
  var _a3, _b, _c, _d, _e, _f, _g, _h;
  let mapper = DataMapper(), firstSeoChunk = (_c = (_b = (_a3 = data == null ? void 0 : data.meta) == null ? void 0 : _a3.content) == null ? void 0 : _b.chunks) == null ? void 0 : _c[0];
  return {
    name: data == null ? void 0 : data.name,
    path: data == null ? void 0 : data.path,
    seo: (_e = (_d = mapper == null ? void 0 : mapper.API) == null ? void 0 : _d.Object) == null ? void 0 : _e.APIMetaSEOComponentToSEO(firstSeoChunk),
    grids: (_h = (_g = (_f = data == null ? void 0 : data.grids) == null ? void 0 : _f.content) == null ? void 0 : _g.grids) == null ? void 0 : _h.map((grid) => ({
      id: grid == null ? void 0 : grid.id,
      rows: grid == null ? void 0 : grid.rows
    }))
  };
};

// src/use-cases/mapper/API/fetchNavigationToTree.ts
var recursiveMap = (level, defaultType) => {
  var _a3;
  return {
    id: level.id,
    name: level.name,
    path: level.path,
    type: level.__typename ?? defaultType,
    children: ((_a3 = level.children) == null ? void 0 : _a3.map((child) => recursiveMap(child, defaultType))) ?? []
  };
}, fetchNavigationToTree_default = (navigation) => ({
  folders: navigation.folders.tree.children.map((tree) => recursiveMap(tree, "folder")),
  topics: navigation.topics.tree.map((tree) => recursiveMap(tree, "_topic"))
});

// src/use-cases/mapper/API/fetchProductToProduct.ts
var fetchProductToProduct_default = (data) => {
  var _a3, _b, _c, _d, _e, _f;
  let mapper = DataMapper(), story = paragraphsForParagraphCollectionComponentWithId(data.components, "story"), sections = sectionsForPropertyTableComponentWithId(data.components, "properties"), firstDimensionsChunk = (_a3 = chunksForChunkComponentWithId(data.components, "dimensions")) == null ? void 0 : _a3[0], firstSeoChunk = (_b = chunksForChunkComponentWithId(data.components, "meta")) == null ? void 0 : _b[0], downloads = chunksForChunkComponentWithId(data.components, "downloads"), relatedItems = itemsForItemRelationComponentWithId(data.components, "related-items"), productDescription = stringForRichTextComponentWithId(data.components, "description") || data.name, variants = ((_c = data == null ? void 0 : data.variants) == null ? void 0 : _c.map((variant) => {
    var _a4, _b2, _c2, _d2, _e2, _f2, _g, _h;
    let mappedVariant = mapper.API.Object.APIProductVariantToProductVariant(variant), description = productDescription, variantDescription = (_e2 = (_d2 = (_c2 = (_b2 = (_a4 = variant == null ? void 0 : variant.description) == null ? void 0 : _a4.content) == null ? void 0 : _b2.selectedComponent) == null ? void 0 : _c2.content) == null ? void 0 : _d2.plainText) == null ? void 0 : _e2.join(""), variantDescriptionType = (_h = (_g = (_f2 = variant == null ? void 0 : variant.description) == null ? void 0 : _f2.content) == null ? void 0 : _g.selectedComponent) == null ? void 0 : _h.id;
    return variantDescriptionType && (description = variantDescriptionType === "extra" ? productDescription + " " + variantDescription : variantDescription), {
      ...mappedVariant,
      description
    };
  })) || [], defaultVariant = variants.find((variant) => variant.isDefault) || variants[0];
  return {
    id: data.id,
    path: data.path,
    name: data.name,
    title: stringForSingleLineComponentWithId(data.components, "title") || data.name,
    description: productDescription,
    story: (story == null ? void 0 : story.map((paragraph) => {
      var _a4;
      return {
        title: ((_a4 = paragraph.title) == null ? void 0 : _a4.text) || "",
        body: flattenRichText(paragraph.body),
        images: mapper.API.Object.APIImageToImage(paragraph.images)
      };
    })) || [],
    specifications: (sections == null ? void 0 : sections.map((section) => ({
      title: section.title || "",
      properties: section.properties || {}
    }))) || [],
    dimensions: firstDimensionsChunk ? firstDimensionsChunk.reduce(
      (memo, data2) => {
        var _a4, _b2;
        return {
          ...memo,
          [data2.id]: {
            title: data2.name,
            value: ((_a4 = data2 == null ? void 0 : data2.content) == null ? void 0 : _a4.number) || 0,
            unit: ((_b2 = data2 == null ? void 0 : data2.content) == null ? void 0 : _b2.unit) || ""
          }
        };
      },
      {}
    ) : [],
    downloads: (downloads == null ? void 0 : downloads.map((chunk) => {
      let mapped = chunk.reduce((memo, data2) => {
        var _a4, _b2, _c2, _d2;
        let value;
        switch (data2.type) {
          case "singleLine":
            value = ((_a4 = data2.content) == null ? void 0 : _a4.text) || "";
            break;
          case "richText":
            value = ((_b2 = data2.content) == null ? void 0 : _b2.json) || "";
            break;
          case "files":
            value = ((_d2 = (_c2 = data2.content) == null ? void 0 : _c2.files) == null ? void 0 : _d2.map((file) => ({
              url: file.url,
              title: file.title || ""
            }))) || [];
            break;
        }
        return {
          ...memo,
          [data2.id]: value
        };
      }, {});
      return {
        title: mapped.title || "",
        description: {
          json: mapped.description
        },
        files: mapped.files
      };
    })) || [],
    relatedItems: (relatedItems == null ? void 0 : relatedItems.map((item) => ({
      id: item.id,
      name: item.name,
      path: item.path,
      topics: [],
      variant: mapper.API.Object.APIProductVariantToProductVariant(item.defaultVariant)
    }))) || [],
    topics: ((_d = data.topics) == null ? void 0 : _d.map((topic) => ({
      name: topic.name,
      path: topic.path
    }))) || [],
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk),
    vat: {
      name: ((_e = data.vatType) == null ? void 0 : _e.name) || "Exempt.",
      rate: ((_f = data.vatType) == null ? void 0 : _f.percent) || 0
    },
    variants,
    defaultVariant
  };
};

// src/use-cases/mapper/API/fetchShopToShop.ts
var fetchShopToShop_default = (data) => {
  var _a3, _b, _c, _d, _e, _f, _g;
  let mapper = DataMapper(), [folder, hierarchy] = data, hero = choiceComponentWithId(folder.components, "hero-content"), grid = ((_b = (_a3 = hero == null ? void 0 : hero.content) == null ? void 0 : _a3.grids) == null ? void 0 : _b[0]) || ((_c = hero == null ? void 0 : hero.content) != null && _c.items ? mapper.API.Object.AnyItemToGrid((_d = hero == null ? void 0 : hero.content) == null ? void 0 : _d.items) : null), firstSeoChunk = (_f = (_e = folder.meta) == null ? void 0 : _e.content) == null ? void 0 : _f.chunks[0];
  return {
    name: folder.name,
    title: stringForSingleLineComponentWithId(folder.components, "title") || data.name,
    path: folder.path,
    description: stringForRichTextComponentWithId(folder.components, "description") || data.name,
    hero: grid ? {
      id: `grid-${(hero == null ? void 0 : hero.id) ?? folder.id}`,
      ...grid
    } : void 0,
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk),
    categories: (_g = hierarchy.tree) == null ? void 0 : _g.children.map((child) => {
      var _a4, _b2;
      return {
        name: child.name,
        path: child.path,
        description: (_a4 = child.description) == null ? void 0 : _a4.content,
        products: (_b2 = child == null ? void 0 : child.children) == null ? void 0 : _b2.map((product) => ({
          id: product.id,
          name: product.name,
          path: product.path,
          variant: mapper.API.Object.APIProductVariantToProductVariant(product.defaultVariant),
          topics: []
        }))
      };
    })
  };
};

// src/use-cases/mapper/API/searchByTopicProductToProductSlim.ts
var searchByTopicProductToProductSlim_default = (data) => {
  var _a3, _b;
  return {
    products: DataMapper().API.Call.searchProductToProductSlim(data.search.edges),
    topics: ((_b = (_a3 = data == null ? void 0 : data.topics) == null ? void 0 : _a3.aggregations) == null ? void 0 : _b.topics.map((topic) => ({
      name: topic.name,
      path: topic.path
    }))) || []
  };
};

// src/use-cases/mapper/API/searchProductToProductSlim.ts
var searchProductToProductSlim_default = (data) => {
  let mapper = DataMapper();
  return data.map(({ node }) => {
    var _a3;
    return {
      id: node.id,
      name: node.name,
      path: node.path,
      variant: mapper.API.Object.APIProductVariantToProductVariant(node.matchingVariant),
      topics: ((_a3 = node.topics) == null ? void 0 : _a3.map((topic) => ({
        name: topic.name,
        path: topic.path
      }))) ?? []
    };
  }) || [];
};

// src/use-cases/mapper/Object/AnyIemToGrid.ts
var AnyIemToGrid_default = (items) => items.length === 0 ? {
  id: "",
  rows: []
} : {
  id: "",
  rows: items.map((item, index) => ({
    columns: [
      {
        layout: {
          rowspan: 1,
          colspan: 3,
          colIndex: 0,
          rowIndex: index
        },
        item
      }
    ]
  }))
};

// src/use-cases/mapper/Object/APIImageToImage.ts
var APIImageToImage_default = (images) => (images == null ? void 0 : images.map((image) => {
  var _a3;
  return {
    key: image.key,
    url: image.url,
    altText: image.altText || "",
    variants: ((_a3 = image.variants) == null ? void 0 : _a3.map((variant) => ({
      key: variant.key,
      url: variant.url,
      width: variant.width,
      height: variant.height
    }))) || []
  };
})) || [];

// src/use-cases/mapper/Object/APIMetaSEOComponentToSEO.ts
var APIMetaSEOComponentToSEO_default = (chunk) => chunk ? chunk.reduce(
  (memo, data) => {
    var _a3, _b, _c, _d, _e, _f, _g, _h;
    let value;
    switch (data.type) {
      case "singleLine":
        value = ((_a3 = data.content) == null ? void 0 : _a3.text) || "";
        break;
      case "richText":
        value = (_c = (_b = data.content) == null ? void 0 : _b.plainText) == null ? void 0 : _c.join(" ");
        break;
      case "images":
        value = (_f = (_e = (_d = data.content) == null ? void 0 : _d.images) == null ? void 0 : _e[0]) == null ? void 0 : _f.url, value || (value = (_h = (_g = data.content) == null ? void 0 : _g.firstImage) == null ? void 0 : _h.url);
        break;
    }
    return {
      ...memo,
      [data.id]: value
    };
  },
  {
    title: ""
  }
) : {
  title: ""
};

// src/use-cases/mapper/Object/APIPriceVariantsToPriceVariant.ts
var APIPriceVariantsToPriceVariant_default = (variants) => variants.reduce((memo, priceVariant) => ({
  ...memo,
  [priceVariant.identifier]: {
    identifier: priceVariant.identifier,
    value: priceVariant.price || 0,
    currency: getCurrencyFromCode(priceVariant.currency || "EUR"),
    name: priceVariant.name || "Unkonwn"
  }
}), {});

// src/use-cases/mapper/Object/APIProductVariantToProductVariant.ts
var APIProductVariantToProductVariant_default = (variant) => {
  var _a3, _b;
  let mapper = DataMapper(), priceVariants = mapper.API.Object.APIPriceVariantsToPriceVariant(variant.priceVariants ?? []), images = variant.images ?? (variant.firstImage ? [variant.firstImage] : []);
  return {
    id: variant.id,
    isDefault: !!variant.isDefault,
    name: variant.name || "Unknow",
    sku: variant.sku,
    priceVariants,
    stockLocations: ((_a3 = variant.stockLocations) == null ? void 0 : _a3.reduce(
      (memo, stockLocation) => ({
        ...memo,
        [stockLocation.identifier]: {
          identifier: stockLocation.identifier,
          name: stockLocation.name || "Unknown",
          stock: stockLocation.stock || 0
        }
      }),
      {}
    )) || {},
    images: mapper.API.Object.APIImageToImage(images),
    attributes: ((_b = variant.attributes) == null ? void 0 : _b.reduce((memo, attribute) => ({
      ...memo,
      [attribute.attribute]: attribute.value || ""
    }), {})) || {}
  };
};

// src/use-cases/mapper/index.ts
var DataMapper = (context) => ({
  API: {
    Call: {
      fetchDocumentToStory: fetchDocumentToStory_default,
      fetchFolderToCategory: (withChildren = !1) => withChildren ? fetchFolderWithChildrenToCategoryWithChildren_default : fetchFolderToCategory_default,
      fetchFooterToFooter: fetchFooterToFooter_default,
      fetchLandingPageToLandingPage: fetchLandingPageToLandingPage_default,
      fetchProductToProduct: fetchProductToProduct_default,
      fetchShopToShop: fetchShopToShop_default,
      fetchNavigationToTree: fetchNavigationToTree_default,
      searchByTopicProductToProductSlim: searchByTopicProductToProductSlim_default,
      searchProductToProductSlim: searchProductToProductSlim_default
    },
    Object: {
      AnyItemToGrid: AnyIemToGrid_default,
      APIImageToImage: APIImageToImage_default,
      APIMetaSEOComponentToSEO: APIMetaSEOComponentToSEO_default,
      APIPriceVariantsToPriceVariant: APIPriceVariantsToPriceVariant_default,
      APIProductVariantToProductVariant: APIProductVariantToProductVariant_default
    }
  }
});

// src/ui/components/price.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), DiscountedPrice = ({ price, size = "medium" }) => {
  let priceSize = {
    small: {
      default: "text-md font-semibold",
      previous: "line-through font-semibold pt-1 text-xs",
      discount: "text-md font-semibold text-green2",
      percentage: "text-sm py-1 px-2 h-[26px] rounded-md bg-[#efefef] font-medium"
    },
    medium: {
      default: "text-2xl font-bold",
      previous: "line-through font-semibold pt-1 text-sm",
      discount: "text-2xl font-bold text-green2",
      percentage: "text-sm py-1 px-2 h-[26px] rounded-md bg-[#efefef] font-bold"
    }
  }, { default: defaultPrice, discounted: discountPrice, percent: discountPercentage, currency } = price;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: discountPrice && discountPrice < defaultPrice ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-wrap  flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: priceSize[size].previous, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price, { currencyCode: currency.code, children: defaultPrice }, void 0, !1, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 30,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex gap-2 items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: priceSize[size].discount, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price, { currencyCode: currency.code, children: discountPrice }, void 0, !1, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 34,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: priceSize[size].percentage, children: [
        "-",
        discountPercentage,
        "%"
      ] }, void 0, !0, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 36,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: priceSize[size].default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price, { currencyCode: currency.code, children: defaultPrice }, void 0, !1, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 43,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 42,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}, Price2 = ({ variant, size = "medium" }) => {
  let { state } = useAppContext(), price = displayPriceFor(
    variant,
    {
      default: "default",
      discounted: "sales"
    },
    state.currency.code
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DiscountedPrice, { price, size }, void 0, !1, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 60,
    columnNumber: 12
  }, this);
}, CartItemPrice = ({
  item,
  saving,
  size = "small"
}) => {
  let mapper = DataMapper(), { state, _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price2, { variant: mapper.API.Object.APIProductVariantToProductVariant(item.variant), size }, void 0, !1, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      _t("total"),
      ":",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price, { currencyCode: state.currency.code, children: item.price.gross }, void 0, !1, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      saving && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("del", { className: "text-red mx-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Price, { currencyCode: state.currency.code, children: item.price.net + saving.amount }, void 0, !1, {
          fileName: "src/ui/components/price.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/price.tsx",
          lineNumber: 78,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("small", { children: [
          "(",
          saving.quantity,
          " for free!)"
        ] }, void 0, !0, {
          fileName: "src/ui/components/price.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/price.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/price.tsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/price.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this);
};

// src/use-cases/crystallize/read/search.ts
var search_default = async (apiClient, value, language) => (await apiClient.searchApi(
  `#graphql
        query Search ($searchTerm: String!){
                        search(language:"${language}", first: 100, filter: { 
                            searchTerm: $searchTerm, 
                            type: PRODUCT, 
                            }){
                          edges {
                            node {
                              name
                              type
                              path
                              ... on Product {
                                matchingVariant {
                                  name
                                  price
                                  isDefault
                                  priceVariants {
                                    identifier
                                    name
                                    price
                                    currency
                                  }
                                  images {
                                    url
                                    variants {
                                      url
                                      width
                                      key
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
            `,
  {
    searchTerm: value
  }
)).search.edges;

// src/ui/components/search/search-bar.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), SearchBar = () => {
  let ref = (0, import_react4.useRef)(null), [searchTerm, setSearchTerm] = (0, import_react4.useState)(""), [show, setShow] = (0, import_react4.useState)(!0), [suggestions, setSuggestions] = (0, import_react4.useState)([]), { state: appContextState, path, _t } = useAppContext(), apiClient = (0, import_js_api_client.createClient)({ tenantIdentifier: appContextState.crystallize.tenantIdentifier });
  (0, import_react4.useEffect)(() => {
    let handleClickOutside = (event) => {
      ref.current && !ref.current.contains(event.target) && setShow(!1);
    };
    return document.addEventListener("mousedown", handleClickOutside), () => {
      document.removeEventListener("mousedown", handleClickOutside), setShow(!0);
    };
  }, [ref]);
  let handleChange = async (event) => {
    let value = event.target.value;
    setSearchTerm(value);
    try {
      let rawResult = await search_default(apiClient, value, appContextState.language);
      setSuggestions(searchProductToProductSlim_default(rawResult));
    } catch (error) {
      console.error(error);
    }
  }, handleKeyPress = (event) => {
    event.code == "Enter" && window.location.replace(path(`/search?q=${searchTerm}`));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "xl:w-[340px] md:px-4 relative 270px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative z-30 flex items-center justify-between bg-grey h-10 rounded-full overflow-hidden focus-within:border", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_react_debounce_input.DebounceInput,
        {
          minLength: 2,
          placeholder: _t("search.placeholder"),
          debounceTimeout: 200,
          onChange: handleChange,
          className: "bg-grey rounded-full overflow-hidden focus:border-textBlack outline-none px-6 w-full placeholder:text-[14px] placeholder:italic ",
          onKeyDown: handleKeyPress,
          "aria-label": "Search"
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/search/search-bar.tsx",
          lineNumber: 54,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        Link_default,
        {
          to: path(`/search?q=${searchTerm}`),
          className: "w-10 p-4 h-full text-[#fff] flex justify-center items-center rounded-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: `${searchIcon_default}`, alt: "search icon", width: "15", height: "15" }, void 0, !1, {
            fileName: "src/ui/components/search/search-bar.tsx",
            lineNumber: 67,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/search/search-bar.tsx",
          lineNumber: 63,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/ui/components/search/search-bar.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    suggestions.length > 0 && show ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "div",
      {
        ref,
        className: "absolute rounded-xl bg-[#fff] -top-5 w-full pt-20 pb-2 border border-[#dfdfdf] left-0 overflow-y-scroll shadow-sm z-20",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-h-[400px] overflow-y-scroll", children: suggestions.map((suggestion, index) => {
          var _a3;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            Link_default,
            {
              to: path(suggestion.path),
              onClick: () => {
                setSuggestions([]);
              },
              prefetch: "intent",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "py-1 px-4 bg-[#fff] flex gap-2 items-center hover:bg-grey2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-[25px] h-[35px] img-container rounded-sm img-cover border border-[#dfdfdf]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                  import_reactjs_components.Image,
                  {
                    ...(_a3 = suggestion.variant) == null ? void 0 : _a3.images[0],
                    sizes: "100px",
                    fallbackAlt: suggestion.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 87,
                    columnNumber: 45
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "src/ui/components/search/search-bar.tsx",
                  lineNumber: 86,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between w-full", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-sm ", children: suggestion.name }, void 0, !1, {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 94,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-sm font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Price2, { variant: suggestion.variant, size: "small" }, void 0, !1, {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 96,
                    columnNumber: 49
                  }, this) }, void 0, !1, {
                    fileName: "src/ui/components/search/search-bar.tsx",
                    lineNumber: 95,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/ui/components/search/search-bar.tsx",
                  lineNumber: 93,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "src/ui/components/search/search-bar.tsx",
                lineNumber: 85,
                columnNumber: 37
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/search/search-bar.tsx",
              lineNumber: 78,
              columnNumber: 33
            },
            this
          ) }, index, !1, {
            fileName: "src/ui/components/search/search-bar.tsx",
            lineNumber: 77,
            columnNumber: 29
          }, this);
        }) }, void 0, !1, {
          fileName: "src/ui/components/search/search-bar.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/search/search-bar.tsx",
        lineNumber: 71,
        columnNumber: 17
      },
      this
    ) : null
  ] }, void 0, !0, {
    fileName: "src/ui/components/search/search-bar.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this);
};

// src/assets/basketIcon.svg
var basketIcon_default = "/build/_assets/basketIcon-DXTNOZGC.svg";

// src/ui/hooks/useLocalCart.ts
var import_local_storage = require("@rehooks/local-storage"), InitializeEmptyLocalCart = () => ({
  items: {},
  cartId: "",
  state: "cart"
});
function useLocalCart() {
  let [cart] = (0, import_local_storage.useLocalStorage)("cart", InitializeEmptyLocalCart()), update = (cart2) => {
    (0, import_local_storage.writeStorage)("cart", {
      ...cart2
    });
  }, isImmutable = () => cart.state === "placed" || cart.state === "paid";
  return {
    cart,
    setWrappingData: (cartId, cartState) => {
      update({
        ...cart,
        cartId,
        state: cartState
      });
    },
    empty: () => {
      update({
        ...cart,
        ...InitializeEmptyLocalCart()
      });
    },
    isImmutable,
    isEmpty: () => Object.keys(cart.items).length === 0,
    clone: () => {
      update({
        ...cart,
        cartId: ""
      });
    },
    add: (item, quantity = 1) => {
      isImmutable() || (cart.items[item.sku] ? cart.items[item.sku].quantity = cart.items[item.sku].quantity + quantity : cart.items[item.sku] = {
        sku: item.sku,
        name: item.name,
        price: item.price,
        quantity
      }, update(cart));
    },
    remove: (item) => {
      if (isImmutable())
        return;
      cart.items[item.sku] && cart.items[item.sku].quantity >= 1 && cart.items[item.sku].quantity--;
      let items = Object.keys(cart.items).reduce((accumulator, key) => {
        let item2 = cart.items[key];
        return item2.quantity > 0 && (accumulator[item2.sku] = item2), accumulator;
      }, {});
      update({
        ...cart,
        items
      });
    }
  };
}

// src/ui/components/layout/basket-button.tsx
var import_reactjs_hooks = require("@crystallize/reactjs-hooks");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), BasketButton = ({}) => {
  let { cart, isEmpty } = useLocalCart(), { path } = useAppContext(), quantity = 0;
  return isEmpty() || (quantity = Object.keys(cart.items).reduce((acc, key) => acc + cart.items[key].quantity, 0)), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link_default, { to: path("/cart"), className: "p-2 rounded-md hover:bg-[#efefef] relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { className: "w-[30px] h-[30px]", src: `${basketIcon_default}`, width: "25", height: "25", alt: "Basket icon" }, void 0, !1, {
      fileName: "src/ui/components/layout/basket-button.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_reactjs_hooks.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "absolute -top-2 -right-2 flex text-center items-center border-[4px] border-[#fff] justify-center rounded-sm bg-[#efefef] w-[24px] h-[24px]   text-600 text-[10px]", children: quantity }, void 0, !1, {
      fileName: "src/ui/components/layout/basket-button.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/layout/basket-button.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/layout/basket-button.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
};

// src/ui/components/layout/topic-navigation.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), TopicNavigation = ({ navigation }) => {
  let { path } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: navigation.map((topic) => {
    var _a3;
    let calculateColumns = topic.children.length / 8, numberOfCols = calculateColumns <= 1 ? 1 : Math.round(calculateColumns);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "nav-anchor ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-lg lg:text-[16px] block hover:underline", children: topic.name }, void 0, !1, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 15,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "hidden lg:flex text-[11px] caret", children: "\u25BC" }, void 0, !1, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 16,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "nav-dropdown", style: { gridTemplateColumns: `repeat(${numberOfCols}, 1fr)` }, children: (_a3 = topic.children) == null ? void 0 : _a3.map((child) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Link_default, { to: path(child.path), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "hover:bg-grey text h-full text-sm w-full", children: child.name }, void 0, !1, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 20,
        columnNumber: 37
      }, this) }, child.path, !1, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 19,
        columnNumber: 33
      }, this)) }, void 0, !1, {
        fileName: "src/ui/components/layout/topic-navigation.tsx",
        lineNumber: 17,
        columnNumber: 25
      }, this)
    ] }, topic.path, !0, {
      fileName: "src/ui/components/layout/topic-navigation.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this);
  }) }, void 0, !1, {
    fileName: "src/ui/components/layout/topic-navigation.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
};

// src/ui/components/layout/header.tsx
var import_react6 = require("react");
var import_reactjs_components3 = require("@crystallize/reactjs-components");

// src/ui/lib/tenant-logo.tsx
var import_reactjs_components2 = require("@crystallize/reactjs-components"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function TenantLogo({ identifier, logo }) {
  return logo.key === "superfast-originated-logo" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "img",
    {
      src: logo.url,
      width: "150",
      height: "30",
      alt: identifier + " logo",
      style: {
        width: "auto",
        height: "100%"
      },
      loading: "eager"
    },
    void 0,
    !1,
    {
      fileName: "src/ui/lib/tenant-logo.tsx",
      lineNumber: 6,
      columnNumber: 13
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    import_reactjs_components2.Image,
    {
      ...logo,
      sizes: "150px",
      alt: identifier + " logo",
      className: "w-auto h-full",
      width: 170,
      height: 30,
      style: {
        width: "auto",
        height: "100%"
      },
      loading: "eager"
    },
    void 0,
    !1,
    {
      fileName: "src/ui/lib/tenant-logo.tsx",
      lineNumber: 20,
      columnNumber: 9
    },
    this
  );
}

// src/ui/bridge/useLocation.ts
var import_react5 = require("@remix-run/react"), useLocation_default = () => (0, import_react5.useLocation)();

// src/ui/components/layout/header.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), Header = ({ navigation }) => {
  let { state: appContextState, dispatch: appContextDispatch, path } = useAppContext(), checkoutFlow = ["/cart", "/checkout", "/confirmation"], [isOpen, setIsOpen] = (0, import_react6.useState)(!1), location2 = useLocation_default(), paths = [
    { path: "/cart", name: "Cart" },
    { path: "/checkout", name: "Checkout" },
    { path: "/confirmation", name: "Confirmation" }
  ];
  return (0, import_react6.useEffect)(() => {
    setIsOpen(!1);
  }, [location2.pathname]), (0, import_react6.useEffect)(() => {
    if (appContextState.latestAddedCartItems.length === 0)
      return;
    let timeout;
    return setTimeout(() => {
      appContextDispatch.resetLastAddedItems();
    }, 3e3), () => clearTimeout(timeout);
  }, [appContextState.latestAddedCartItems]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("header", { className: "2xl w-full lg:p-8 lg:px-6", children: [
    appContextState.latestAddedCartItems.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "border-[#dfdfdf] border rounded-md shadow fixed max-w-full sm:top-2 sm:right-2 bg-[#fff]  z-[60]  p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "font-bold text-md mb-3 pb-2", children: "Added product(s) to cart" }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this),
      appContextState.latestAddedCartItems.map((item, index) => {
        var _a3;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex p-3 mt-1 items-center bg-grey2 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "max-w-[35px] max-h-[50px] img-container img-contain", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_reactjs_components3.Image, { ...(_a3 = item.images) == null ? void 0 : _a3[0], sizes: "100px", fallbackAlt: item.name }, void 0, !1, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 56,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 55,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-sm", children: item.name }, void 0, !1, {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 59,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-sm font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Price2, { variant: item, size: "small" }, void 0, !1, {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 61,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 60,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 58,
            columnNumber: 33
          }, this)
        ] }, index, !0, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 54,
          columnNumber: 29
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex gap-3 mt-3 items-center border-t pt-2 border-t-[#dfdfdf]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "bg-grey text-sm text-[#000] font-bold py-2 px-4 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link_default, { to: path("/cart"), children: "Go to cart" }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 69,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 68,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "lg:mb-5 mb-20", children: checkoutFlow.includes(location2.pathname) ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("nav", { className: "flex container px-4 mx-auto gap-20 flex-auto items-center justify-between mb-5 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-auto justify-between items-center w-1/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link_default, { to: path("/"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "max-h-[80px] h-[30px] max-w-[100%] img-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        TenantLogo,
        {
          logo: appContextState.logo,
          identifier: appContextState.crystallize.tenantIdentifier
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 80,
          columnNumber: 37
        },
        this
      ) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 79,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 78,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex w-3/4 gap-5 justify-end", children: paths.map((urlPath) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "div",
        {
          className: `w-1/4 border-b-4 pb-2 ${location2.pathname === urlPath.path ? "border-b-[#000] text-[#000]" : "border-b-grey5 text-grey5"}`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link_default, { to: path(urlPath.path), prefetch: "intent", className: "text-sm font-medium", children: urlPath.name }, void 0, !1, {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 97,
            columnNumber: 37
          }, this)
        },
        urlPath.path,
        !1,
        {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 89,
          columnNumber: 33
        },
        this
      )) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 87,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 76,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "justify-between-full fixed z-40 bg-[#fff] w-full left-0 top-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-auto items-center mx-auto px-2 xl:container pt-3 pb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex mx-auto flex-auto justify-between items-center relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link_default, { to: path("/"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "max-h-[80px] h-[30px] max-w-[100%] img-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          TenantLogo,
          {
            logo: appContextState.logo,
            identifier: appContextState.crystallize.tenantIdentifier
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 111,
            columnNumber: 45
          },
          this
        ) }, void 0, !1, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 110,
          columnNumber: 41
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 109,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "div",
          {
            className: `flex gap-10 lg:flex lg:items-center lg:flex-row flex-col lg:w-auto lg:h-auto lg:relative lg:px-0 lg:py-0 lg:mt-0 lg:top-0 ${isOpen ? "block" : "hidden"} top-10 mt-5 bg-[#fff] w-full right-0 left-0 z-50 h-screen fixed left-0 bottom-0 px-10 py-10`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SearchBar, {}, void 0, !1, {
                fileName: "src/ui/components/layout/header.tsx",
                lineNumber: 122,
                columnNumber: 41
              }, this),
              navigation.folders.filter((item) => item.type === "folder" && item.children.length >= 0 && !item.name.startsWith("_")).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                Link_default,
                {
                  to: path(item.path),
                  prefetch: "intent",
                  className: "hover:underline text-[1.2rem]",
                  children: item.name
                },
                item.path,
                !1,
                {
                  fileName: "src/ui/components/layout/header.tsx",
                  lineNumber: 133,
                  columnNumber: 53
                },
                this
              )),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TopicNavigation, { navigation: navigation.topics }, void 0, !1, {
                fileName: "src/ui/components/layout/header.tsx",
                lineNumber: 143,
                columnNumber: 41
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 117,
            columnNumber: 37
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 108,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 107,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-auto items-center justify-end h-[40px] w-[100px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Link_default, { to: path("/orders"), className: "p-2 rounded-md hover:bg-[#efefef]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "img",
          {
            className: "w-[30px] h-[30px]",
            src: `${userIcon_default}`,
            width: "25",
            height: "25",
            alt: "User icon"
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/layout/header.tsx",
            lineNumber: 150,
            columnNumber: 37
          },
          this
        ) }, void 0, !1, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 149,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(BasketButton, {}, void 0, !1, {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 158,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 148,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "z-50 p-[10px] h-[40px] text-center rounded-md cursor-pointer hover:bg-[#efefef] lg:hidden block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          type: "button",
          className: "focus:outline-none",
          "aria-controls": "mobile-menu",
          "aria-label": "Mobile Menu",
          title: "Mobile Menu",
          "aria-expanded": "false",
          children: isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "svg",
            {
              className: "block h-6 w-6",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                },
                void 0,
                !1,
                {
                  fileName: "src/ui/components/layout/header.tsx",
                  lineNumber: 195,
                  columnNumber: 45
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 187,
              columnNumber: 41
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "svg",
            {
              className: "block h-6 w-6",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                },
                void 0,
                !1,
                {
                  fileName: "src/ui/components/layout/header.tsx",
                  lineNumber: 179,
                  columnNumber: 45
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/layout/header.tsx",
              lineNumber: 171,
              columnNumber: 41
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/layout/header.tsx",
          lineNumber: 161,
          columnNumber: 33
        },
        this
      ) }, void 0, !1, {
        fileName: "src/ui/components/layout/header.tsx",
        lineNumber: 160,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 106,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 105,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/layout/header.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/layout/header.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
};

// src/assets/crystallizeLogo.svg
var crystallizeLogo_default = "/build/_assets/crystallizeLogo-FXYQ5ZN6.svg";

// src/ui/components/layout/footer.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Footer = ({ footer }) => {
  let { state: appContextState } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("footer", { className: "2xl w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mx-auto flex items-center  mb-5 border-t border-grey pt-3 justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { src: `${crystallizeLogo_default}`, alt: "Crystallize logo", width: "38", height: "31" }, void 0, !1, {
      fileName: "src/ui/components/layout/footer.tsx",
      lineNumber: 19,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: [
      "Powered by",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: "https://crystallize.com", className: "underline", children: "Crystallize" }, void 0, !1, {
        fileName: "src/ui/components/layout/footer.tsx",
        lineNumber: 22,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/layout/footer.tsx",
      lineNumber: 20,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 18,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 17,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/layout/footer.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
};

// src/styles/tailwind.default.css
var tailwind_default_default = "/build/_assets/tailwind.default-V56UPCWY.css";

// src/styles/tailwind.dark.css
var tailwind_dark_default = "/build/_assets/tailwind.dark-ZEQBRK26.css";

// src/styles/tailwind.rainbow.css
var tailwind_rainbow_default = "/build/_assets/tailwind.rainbow-JOWBGRID.css";

// src/core/storefront.server.ts
var import_fs = __toESM(require("fs")), import_js_storefrontaware_utils = require("@crystallize/js-storefrontaware-utils");

// src/core/storage.server.ts
var redis = __toESM(require("redis"));
function createRedisStorageEngine(dsn, options = {}) {
  let prefix = (options == null ? void 0 : options.prefix) ?? "", redisDSN = `${dsn || "redis://127.0.0.1:6379"}`, config = require("platformsh-config").config();
  if (config.isValidPlatform()) {
    let credentials = config.credentials("redis");
    redisDSN = `redis://${credentials.host}:${credentials.port}`;
  }
  let client = redis.createClient({ url: redisDSN });
  return client.connect(), {
    get: async (key) => await client.get(`${prefix}${key}`),
    set: async (key, value, ttl) => {
      await client.set(`${prefix}${key}`, value), ttl && client.expireAt(`${prefix}${key}`, Math.floor(Date.now() / 1e3) + ttl);
    }
  };
}
function createMemoryStorageEngine(dsn, options = {}) {
  let prefix = (options == null ? void 0 : options.prefix) ?? "", store = /* @__PURE__ */ new Map();
  return {
    get: async (key) => {
      let hit = store.get(`${prefix}${key}`);
      if (!hit)
        return;
      let { value, ttl } = hit;
      return !ttl || ttl > Date.now() / 1e3 ? value : void 0;
    },
    set: async (key, value, ttl) => {
      store.set(`${prefix}${key}`, {
        value,
        ttl: ttl && Math.floor(Date.now() / 1e3) + ttl
      });
    }
  };
}
function configureStorage(dsn, options = {}) {
  var _a3;
  return (_a3 = dsn == null ? void 0 : dsn.startsWith) != null && _a3.call(dsn, "memory://") ? createMemoryStorageEngine(dsn, options) : createRedisStorageEngine(dsn, options);
}

// src/core/storefront.server.ts
var _a, storage = configureStorage((_a = process.env) == null ? void 0 : _a.STORAGE_DSN, {
  prefix: "superfast-"
}), getStoreFront = async (hostname) => {
  let adapter = (() => {
    var _a3, _b;
    if ((_a3 = process.env) != null && _a3.STOREFRONT_CONFIG_FILE)
      try {
        if (import_fs.default.existsSync(process.env.STOREFRONT_CONFIG_FILE))
          return (0, import_js_storefrontaware_utils.createFilesystemAdapter)(process.env.STOREFRONT_CONFIG_FILE);
      } catch {
      }
    return (_b = process.env) != null && _b.SUPERFAST_ACCESS_TOKEN_SECRET ? (0, import_js_storefrontaware_utils.createSuperFastAdapter)(
      hostname,
      {
        tenantIdentifier: `${process.env.SUPERFAST_TENANT_IDENTIFIER}`,
        accessTokenId: process.env.SUPERFAST_ACCESS_TOKEN_ID,
        accessTokenSecret: process.env.SUPERFAST_ACCESS_TOKEN_SECRET
      },
      storage,
      600
    ) : (0, import_js_storefrontaware_utils.createMemoryAdapter)({
      identifier: `${process.env.STOREFRONT_IDENTIFIER}`,
      tenantIdentifier: `${process.env.CRYSTALLIZE_TENANT_IDENTIFIER}`,
      language: `${process.env.STOREFRONT_LANGUAGE}`,
      storefront: "",
      logo: `${process.env.STOREFRONT_STATIC_LOGO_URL}`,
      theme: `${process.env.STOREFRONT_THEME}`,
      configuration: {
        ACCESS_TOKEN_ID: `${process.env.CRYSTALLIZE_ACCESS_TOKEN_ID}`,
        ACCESS_TOKEN_SECRET: `${process.env.CRYSTALLIZE_ACCESS_TOKEN_SECRET}`
      }
    });
  })(), [shared, secret] = await Promise.all([(0, import_js_storefrontaware_utils.createStoreFront)(adapter, !1), (0, import_js_storefrontaware_utils.createStoreFront)(adapter, !0)]);
  return { shared, secret };
}, buildStoreFrontConfiguration = (locale, serviceApiUrl, storeFrontConfig, tenantConfig) => {
  var _a3;
  return {
    crystallize: {
      tenantIdentifier: process.env.CRYSTALLIZE_TENANT_IDENTIFIER ?? storeFrontConfig.tenantIdentifier
    },
    language: locale.split("-")[0],
    locale,
    theme: process.env.STOREFRONT_THEME ?? storeFrontConfig.theme,
    currency: getCurrencyFromCode((process.env.STOREFRONT_CURRENCY ?? tenantConfig.currency).toUpperCase()),
    logo: tenantConfig.logo ?? {
      key: "superfast-originated-logo",
      url: process.env.STOREFRONT_STATIC_LOGO_URL ?? storeFrontConfig.logo,
      variants: []
    },
    serviceApiUrl,
    crystalPayments: (_a3 = process.env) != null && _a3.CRYSTAL_PAYMENTS ? process.env.CRYSTAL_PAYMENTS.split(",") : tenantConfig.crystalPayments,
    paymentImplementations: ["crystal", "stripe", "quickpay", "klarna", "razorpay", "montonio"],
    paymentImplementationVariables: {
      stripe: {
        PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY ?? storeFrontConfig.configuration.PUBLIC_KEY
      },
      razorpay: {
        RAZORPAY_ID: process.env.RAZORPAY_ID ?? storeFrontConfig.configuration.razorpay_key_id
      }
    }
  };
};

// src/use-cases/crystallize/read/fetchLandingPage.ts
var fetchLandingPage_default = async (apiClient, path, version, language) => (await apiClient.catalogueApi(
  `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(path: $path, language: $language, version: $version) {
      ... on Item {
        name
        path
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                type
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        grids: component(id: "grid") {
          content {
            ... on GridRelationsContent {
              grids {
                rows {
                  columns {
                    layout {
                      rowspan
                      colspan
                      colIndex
                      rowIndex
                    }
                    item {
                      name
                      path
                      type
                      shape {
                        identifier
                      }
                      ...on Product {
                        defaultVariant {
                          price
                          priceVariants {
                            identifier
                            name
                            price
                            currency
                          }
                          images {
                            variants {
                              url
                              width
                              height
                            }
                          }
                        }
                      }
                      components {
                        type
                        id
                        content {
                          ...on BooleanContent{
                            value
                          }
                          ... on SingleLineContent {
                            text
                          }
                          ... on RichTextContent {
                            plainText
                            json
                          }
                          ... on ImageContent {
                            images {
                              url
                              altText
                              variants {
                                url
                                width
                                height
                              }
                            }
                          }
                          ... on ComponentChoiceContent {
                            selectedComponent {
                              name
                              content {
                                ...on SingleLineContent {
                                  text
                                }
                                    ... on VideoContent {
                                    videos {
                                        title
                                        playlists
                                        id
                                        thumbnails {
                                            variants {
                                                url
                                                width
                                                height
                                            }
                                        }
                                    }
                                }
                                ... on ImageContent {
                                  images {
                                    url
                                    altText
                                    variants {
                                      url
                                      width
                                      height
                                    }
                                  }
                                }
                                ... on ItemRelationsContent {
                                  items {
                                    name
                                    type
                                    path
                                    components {
                                      id
                                      content {
                                        ...on SingleLineContent {
                                          text
                                        }
                                        ...on RichTextContent {
                                          plainText
                                        }
                                        ...on ComponentChoiceContent {
                                          selectedComponent {
                                            content {
                                              ...on ImageContent {
                                                firstImage {
                                                  url
                                                  altText
                                                  variants {
                                                    url
                                                    width
                                                    height
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ...on Product {
                                      id
                                      defaultVariant {
                                        price
                                        priceVariants {
                                          identifier
                                          name
                                          price
                                          currency
                                        }
                                        firstImage {
                                          url
                                          altText
                                          variants {
                                            url
                                            width
                                            height
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          ... on ContentChunkContent {
                            chunks {
                              id  
                              content {
                                ... on NumericContent {
                                  number
                                  unit
                                }
                                ...on SingleLineContent{
                                    text
                                }
                                ...on SelectionContent {
                                    options {
                                        key
                                        value
                                    }
                                }
                                ...on BooleanContent {
                                    value
                                }
                                ... on ItemRelationsContent {
                                  items {
                                    name
                                    type
                                    path
                                    ...on Product {
                                      id
                                      defaultVariant {
                                        price
                                        priceVariants {
                                          identifier
                                          name
                                          price
                                          currency
                                        }
                                        firstImage {
                                          url
                                          altText
                                          variants {
                                            url
                                            width
                                            height
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                ...on PropertiesTableContent {
                                    sections {
                                        title
                                        properties {
                                            key
                                            value
                                        }
                                    }
                                }
                              }
                            }
                          }
                          ... on SelectionContent {
                            options {
                              value
                              key
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
  {
    language,
    path,
    version: version === "draft" ? "draft" : "published"
  }
)).catalogue;

// src/use-cases/crystallize/read/fetchDocument.ts
var fetchDocument_default = async (apiClient, path, version, language) => (await apiClient.catalogueApi(
  `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(path: $path, language: $language, version: $version) {
      ... on Item {
        name
        createdAt
        updatedAt
        path
        shape {
          identifier
        }
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        components {
          type
          id
          content {
            ...on SingleLineContent {
              text
            }
            ...on RichTextContent {
              json
              plainText
            }
            ...on ImageContent {
              images {
                variants {
                  url
                  width
                  height
                }
              }
            }
            ...on ContentChunkContent {
              chunks {
                id
                name
                type
                content {
                  ... on SingleLineContent {
                    text
                  }
                  ... on NumericContent {
                    number
                    unit
                  }
                  ... on ItemRelationsContent {
                    items {
                      name
                      type
                      path
                      ...on Product {
                        id
                        defaultVariant {
                            id
                            name
                            sku
                          priceVariants {
                            identifier
                            name
                            price
                            currency
                        }
                          firstImage {
                            url
                            altText
                            variants {
                              url
                              width
                              height
                            }
                          }
                        stockLocations {
                            identifier
                            name
                            stock
                          }
                        }
                        variants {
                          id
                          name
                          sku
                          price
                          priceVariants {
                            identifier
                            name
                            price
                            currency
                          }
                          attributes {
                            value
                            attribute
                          }
                          stockLocations {
                            identifier
                            name
                            stock
                          }
                          isDefault
                          images {
                            url
                            altText
                            key
                      
                            variants {
                              key
                              height
                              width
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ...on PropertiesTableContent {
              sections {
                properties {
                  key
                  value
                }
              }
            }
            ...on ComponentChoiceContent {
              selectedComponent {
                id
                content {
                  ...on ImageContent {
                    images {
                      variants {
                        url
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
            ... on ItemRelationsContent {
              items {
                name
                type
                path
                ...on Product {
                  defaultVariant {
                    priceVariants {
                        identifier
                        name
                        price
                        currency
                    }
                    images {
                      variants {
                        url
                        width
                      }
                    }
                    price
                  }
                }
                components {
                  name
                  content {
                    ... on SingleLineContent {
                      text
                    }
                     ...on ComponentChoiceContent {
                      selectedComponent {
                        content {
                          ...on ImageContent {
                            images {
                              variants {
                                url
                                width
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ...on ParagraphCollectionContent {
              paragraphs {
                title {
                  text
                }
                body {
                  json
                }
                images {
                  url
                  variants {
                    url
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
  {
    language,
    path,
    version: version === "draft" ? "draft" : "published"
  }
)).catalogue;

// src/use-cases/crystallize/read/fetchFolder.ts
var fetchFolder_default = async (apiClient, path, version, language) => (await apiClient.catalogueApi(
  `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(language: $language, path: $path, version: $version) {
        id
        name
        path
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                type
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        components {
          type
          id
          content {
            ...on SingleLineContent {
              text
            }
            ...on RichTextContent {
              plainText
            }
            ... on ComponentChoiceContent {
              selectedComponent {
                name
                content {
                    ... on GridRelationsContent {
                        grids {
                          rows {
                            columns {
                              layout {
                                rowspan
                                colspan
                                colIndex
                                rowIndex
                              }
                              item {
                                name
                                path
                                type
                                shape {
                                  identifier
                                }
                                ...on Product {
                                  defaultVariant {
                                    price
                                    attributes {
                                        value
                                        attribute
                                    }
                                    priceVariants {
                                      identifier
                                      name
                                      price
                                      currency
                                    }
                                    images {
                                      variants {
                                        url
                                        height
                                        width
                                      }
                                    }
                                  }
                                }
                                components {
                                  type
                                  id
                                  content {
                                    ...on BooleanContent{
                                      value
                                    }
                                    ... on SingleLineContent {
                                      text
                                    }
                                    ... on RichTextContent {
                                      plainText
                                    }
                                    ... on ImageContent {
                                      images {
                                        url
                                        altText
                                        variants {
                                          url
                                          width
                                          height
                                        }
                                      }
                                    }
                                    ... on ComponentChoiceContent {
                                      selectedComponent {
                                        name
                                        content {
                                          ...on SingleLineContent {
                                            text
                                          }
                                          ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                          ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            }
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key 
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                  
                  ... on ItemRelationsContent {
                    items {
                      name
                      path
                      type
                      shape {
                        identifier
                      }
                      components {
                        type
                        id
                        content {
                            ...on BooleanContent{
                                value
                            }
                            ... on SingleLineContent {
                                text
                            }
                            ... on RichTextContent {
                                plainText
                            }
                            ... on ImageContent {
                                images {
                                    url
                                    altText
                                    variants {
                                      url
                                      width
                                      height
                                    }
                                }
                            }
                            ... on ComponentChoiceContent {
                                selectedComponent {
                                    name
                                    content {
                                        ...on SingleLineContent {
                                            text
                                        }
                                        ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                        ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            } 
                                        }
                                        ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                }
                             }
                          }
                       }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
  {
    language: "en",
    path,
    version: version === "draft" ? "draft" : "published"
  }
)).catalogue;

// src/use-cases/crystallize/read/fetchHierarchy.ts
var import_js_api_client2 = require("@crystallize/js-api-client"), fetchHierarchy_default = async (apiClient, path, language) => {
  let fetch2 = (0, import_js_api_client2.createNavigationFetcher)(apiClient).byFolders, builder = import_js_api_client2.catalogueFetcherGraphqlBuilder;
  return await fetch2(path, language, 3, {}, (level) => {
    switch (level) {
      case 0:
        return {
          __on: [
            builder.onItem({
              ...builder.onComponent("description", "RichText", {
                json: !0
              })
            })
          ]
        };
      case 1:
        return {
          __on: [
            builder.onItem({
              ...builder.onComponent("description", "RichText", {
                json: !0
              })
            }),
            builder.onFolder()
          ]
        };
      case 2:
        return {
          __on: [
            builder.onItem({
              ...builder.onComponent("description", "RichText", {
                json: !0
              })
            }),
            builder.onProduct({
              defaultVariant: {
                price: !0,
                priceVariants: {
                  price: !0,
                  currency: !0,
                  identifier: !0,
                  name: !0
                },
                attributes: {
                  attribute: !0,
                  value: !0
                },
                firstImage: {
                  altText: !0,
                  variants: {
                    width: !0,
                    url: !0
                  }
                }
              }
            })
          ]
        };
      default:
        return {};
    }
  });
};

// src/use-cases/crystallize/read/fetchNavigation.ts
var import_js_api_client3 = require("@crystallize/js-api-client"), fetchNavigation_default = async (apiClient, path, language) => {
  let [folders, topics] = await Promise.all([
    (0, import_js_api_client3.createNavigationFetcher)(apiClient).byFolders(path, language, 3),
    (0, import_js_api_client3.createNavigationFetcher)(apiClient).byTopics(path, language, 2)
  ]);
  return {
    folders,
    topics
  };
};

// src/use-cases/crystallize/read/fetchPriceRangeAndAttributes.ts
var fetchPriceRangeAndAttributes_default = async (apiClient, path) => await apiClient.searchApi(
  `#graphql
        query GET_PRICE_RANGE($path: [String!]) {
        search(
          filter: {
            type: PRODUCT
            include: { paths: $path }
          }
        ) {
          aggregations {
            price: price {
              min
              max
            }
            attributes: variantAttributes {
              attribute
              value
            }
          }
        }
      }
      `,
  {
    path
  }
);

// src/use-cases/crystallize/read/fetchProduct.ts
var fetchProduct_default = async (apiClient, path, version, language) => (await apiClient.catalogueApi(
  `#graphql
    query ($language: String!, $path: String!, $version: VersionLabel!) {
      catalogue(language: $language, path: $path, version: $version) {
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      ...on Product {
        ...product
        topics {
          path
          name
        }
      }
    }
  }
  
  fragment content on ComponentContent {
    ...boolean
    ...singleLine
    ...richText
    ...imageContent
    ...paragraphCollection
    ...itemRelations
    ...gridRelations
    ...location
    ...propertiesTable
    ...dateTime
    ...videoContent
    ...numeric
    ...selection
    ...file
  }
  
  fragment component on Component {
    id
    name
    type
    content {
      ...content
      ...componentChoice
      ...contentChunk
    }
  }
  
  fragment dateTime on DatetimeContent {
    datetime
  }
    
  
  fragment gridRelations on GridRelationsContent {
    grids {
      id
      name
    }
  }
  
  fragment imageContent on ImageContent {
    images {
      ...image
    }
  }
  
  fragment image on Image {
    url
    altText
    key
    variants {
      url
      width
      height
      key
    }
  }
  
  fragment itemRelations on ItemRelationsContent {
    items {
      id
      name
      path
      ...on Product {
        defaultVariant {
          priceVariants {
            identifier
            name
            price
            currency
          }
          images {
            variants {
              url
              height
              width
            }
          }
        }
      }
    }
  }
  
  fragment location on LocationContent {
    lat
    long
  }
  
  fragment paragraphCollection on ParagraphCollectionContent {
    paragraphs {
      title {
        ...singleLine
      }
      body {
        ...richText
      }
      images {
        ...image
      }
    }
  }
  
  fragment product on Product {
    id
    name
    type
    language
    path
  
    components {
      ...component
    }
  
    variants {
      id
      name
      sku
      price
      priceVariants {
        identifier
        name
        price
        currency
      }
      description: component(id:"description") {
        content {
            ...on ComponentChoiceContent {
                selectedComponent {
                    id
                    content {
                        ...richText
                    }
                }
            }
        }
      }
      attributes {
        value
        attribute
      }
      stockLocations {
        identifier
        name
        stock
      }
      isDefault
      images {
        url
        altText
        key
  
        variants {
          key
          height
          width
          url
        }
      }
  
      subscriptionPlans {
        identifier
        name
        periods {
          id
          name
          initial {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
          recurring {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
        }
      }
    }
  
    vatType {
      name
      percent
    }
  }
  
  fragment propertiesTable on PropertiesTableContent {
    sections {
      ... on PropertiesTableSection {
        title
        properties {
          key
          value
        }
      }
    }
  }
  
  fragment richText on RichTextContent {
    json
    html
    plainText
  }
  
  fragment boolean on BooleanContent {
    value
  }
  
  fragment singleLine on SingleLineContent {
    text
  }
  
  fragment videoContent on VideoContent {
    videos {
      ...video
    }
  }
  
  fragment video on Video {
    id
    playlists
    title
    thumbnails {
      ...image
    }
  }
  
  fragment numeric on NumericContent {
    number
    unit
  }
  
  fragment componentChoice on ComponentChoiceContent {
    selectedComponent {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  
  fragment contentChunk on ContentChunkContent {
    chunks {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  
  fragment selection on SelectionContent {
    options {
      key
      value
    }
  }
  
  
  fragment file on FileContent {
    files {
      url
      key
      title
      size
    }
  }  

`,
  {
    language,
    path,
    version: version === "draft" ? "draft" : "published"
  }
)).catalogue;

// src/use-cases/crystallize/read/fetchTenantConfig.ts
var QUERY_FETCH_TENANT_CONFIG = `#graphql
query FETCH_TENANT_CONFIG ($identifier: String!) {
    tenant {
        get(identifier: $identifier) {
            id
            logo {
                key
                url
                variants {
                    ... on ImageVariant {
                        key
                        url
                        width
                        height
                    }
                }
            }
        }
    }
}`, fetchTenantConfig_default = async (apiClient, tenantIdentifier) => {
  var _a3, _b, _c, _d, _e;
  try {
    let { tenant } = await apiClient.pimApi(QUERY_FETCH_TENANT_CONFIG, {
      identifier: tenantIdentifier
    }), tenantId = (_a3 = tenant == null ? void 0 : tenant.get) == null ? void 0 : _a3.id;
    return {
      currency: (_d = (_c = (_b = await apiClient.pimApi(
        `query { priceVariant{ get(identifier:"default", tenantId:"${tenantId}") { currency } } }`
      )) == null ? void 0 : _b.priceVariant) == null ? void 0 : _c.get) == null ? void 0 : _d.currency,
      crystalPayments: ["card", "coin"],
      paymentImplementations: ["crystal"],
      logo: (_e = tenant == null ? void 0 : tenant.get) == null ? void 0 : _e.logo
    };
  } catch {
    return {
      currency: "USD",
      crystalPayments: ["card", "coin"],
      paymentImplementations: ["crystal"]
    };
  }
};

// src/use-cases/crystallize/read/fetchTreeMap.ts
var import_js_api_client4 = require("@crystallize/js-api-client"), fetchTreeMap_default = async (apiClient, language) => {
  let fetchByFolders = (0, import_js_api_client4.createNavigationFetcher)(apiClient).byFolders, fetchByTopics = (0, import_js_api_client4.createNavigationFetcher)(apiClient).byTopics, [folders, topics] = await Promise.all([
    fetchByFolders("/", language, 10, {}, () => ({
      shape: {
        identifier: !0
      }
    })),
    fetchByTopics("/", language, 10)
  ]), map = {}, browse = (node) => {
    map[node.path] = node, node.children && node.children.forEach(browse);
  };
  return browse(folders.tree), topics.tree.forEach(browse), map;
};

// src/use-cases/crystallize/read/fetchFooter.ts
var fetchFooter_default = async (apiClient, path, version, language) => (await apiClient.catalogueApi(
  `#graphql
            query ($language: String!, $path: String!, $version: VersionLabel) {
                catalogue(path: $path, language: $language, version: $version) {
                    name
                    components {
                        id
                        content {
                            ...on SingleLineContent {
                                text
                            }
                            ...on RichTextContent {
                                plainText
                                json
                                html
                            }
                            ...on ContentChunkContent {
                                chunks {
                                    id
                                    name
                                    type
                                    content {
                                    ...on ImageContent {
                                        images {
                                            altText
                                            url
                                            variants {
                                                url
                                                width
                                                height
                                            }
                                        }
                                    }
                                    ...on SingleLineContent {
                                        text
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`,
  {
    language,
    path,
    version: version === "draft" ? "draft" : "published"
  }
)).catalogue;

// src/use-cases/crystallize/read/searchByTopic.ts
var searchByTopic_default = async (apiClient, value, language) => await apiClient.searchApi(
  `#graphql
        query SEARCH_BY_TOPIC($value: String!) {
      topics: search(language: "${language}"){
        aggregations {
          topics {
            path
            name
          }
        }
      }
          search(
            language: "${language}"
            first: 100,
            filter: {
              type: PRODUCT
              include: {
                topicPaths: {
                  sections: [
                    { fields: { value: $value } }
                  ]
                }
              }
            }
          ) {
            edges {
              node {
                id
                name
                path
                topics {
                  name
                  path
                }
                ... on Product {
                  matchingVariant {
                    name
                    isDefault
                    price
                    priceVariants {
                      identifier
                      name
                      currency
                      price
                    }
                    attributes {
                        attribute
                        value
                    }
                    images {
                      variants {
                        url
                        width
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
  {
    value
  }
);

// src/use-cases/crystallize/read/searchFilteredByPriceRange.ts
var searchFilteredByPriceRange_default = async (apiClient, path, language, min, max) => await apiClient.searchApi(
  `#graphql
        query SEARCH_ORDER_BY_PRICE_RANGE($path: [String!], $min: Float, $max: Float) {
        search(
          language: "${language}"  
          first: 100,
          filter: {
            type: PRODUCT
            include: { paths: $path }
            productVariants: { priceRange: { min: $min, max: $max } }
          }
        ) {
          edges {
            node {
              name
              path
              ... on Product {
                matchingVariant {
                  isDefault
                  price
                  priceVariants {
                    identifier
                    name
                    price
                    currency
                  }
                  images {
                    variants {
                      url
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
  {
    path,
    min,
    max
  }
);

// src/use-cases/crystallize/read/searchOrderBy.ts
var searchOrderBy_default = async (apiClient, path, language, orderBy, fitlers, attributes) => {
  var _a3;
  let field = (orderBy == null ? void 0 : orderBy.split("_")[0]) || "NAME", direction = (orderBy == null ? void 0 : orderBy.split("_")[1]) || "ASC", priceRangeParams = fitlers.price;
  attributes = attributes.map((attribute) => ({
    attribute: attribute.split("_")[0],
    value: attribute.split("_")[1]
  }));
  let attributeFilters = attributes.reduce(
    (acc, { attribute, value }) => (acc[attribute] ?? (acc[attribute] = { attribute, values: [] }), acc[attribute].values.push(value), acc),
    []
  ), results = await apiClient.searchApi(
    `#graphql
        query SEARCH_ORDERBY(
        $path: [String!]
        $field: OrderField!
        $direction: OrderDirection!
        $min: Float
        $max: Float
        $attributes: [VariantAttributeFilter!]
      ) {
        search(
          language: "${language}"
          first: 100,
          orderBy: { field: $field, direction: $direction }
          filter: {
            type: PRODUCT
            productVariants: { priceRange: { min: $min, max: $max }, attributes: $attributes }
            include: { paths: $path }
          }
        ) {
          edges {
            node {
              name
              path
              ... on Product {
                  matchingVariant {
                  name
                  price
                  isDefault
                  sku
                  attributes {
                    attribute
                    value
                  }
                  priceVariants {
                    identifier
                    name
                    price
                    currency
                  }
                  images {
                    url
                    variants {
                      url
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      path,
      field: field === "NAME" ? "ITEM_NAME" : field,
      direction,
      min: priceRangeParams.min ? parseFloat(priceRangeParams.min) : 0,
      max: priceRangeParams.max ? parseFloat(priceRangeParams.max) : 0,
      attributes: Object.values(attributeFilters)
    }
  );
  return ((_a3 = results == null ? void 0 : results.search) == null ? void 0 : _a3.edges) || [];
};

// src/use-cases/crystallize/read/searchOrderByPriceRange.ts
var searchOrderByPriceRange_default = async (apiClient, path, language) => await apiClient.searchApi(
  `#graphql
        query SEARCH_ORDER_BY_PRICE_RANGE($path: [String!]) {
        search(
          language: "${language}"
          first: 100,  
          filter: {
            type: PRODUCT
            include: { paths: $path }
          }
        ) {
          edges {
            node {
              name
              path
              ... on Product {
                matchingVariant {
                  isDefault
                  price
                  priceVariants {
                    identifier
                    name
                    price
                    currency
                  }
                  images {
                    variants {
                      url
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }`,
  {
    path
  }
);

// src/use-cases/crystallize/read/fetchFolderWithChildren.ts
var fetchFolderWithChildren_default = async (apiClient, path, version, language) => (await apiClient.catalogueApi(
  `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(language: $language, path: $path, version: $version) {
        id
        name
        path
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                type
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        components {
          type
          id
          content {
            ...on SingleLineContent {
              text
            }
            ...on RichTextContent {
              plainText
            }
            ... on ComponentChoiceContent {
              selectedComponent {
                name
                content {
                    ... on GridRelationsContent {
                        grids {
                          rows {
                            columns {
                              layout {
                                rowspan
                                colspan
                                colIndex
                                rowIndex
                              }
                              item {
                                name
                                path
                                type
                                shape {
                                  identifier
                                }
                                ...on Product {
                                  defaultVariant {
                                    price
                                    attributes {
                                        value
                                        attribute
                                    }
                                    priceVariants {
                                      identifier
                                      name
                                      price
                                      currency
                                    }
                                    images {
                                      variants {
                                        url
                                        height
                                        width
                                      }
                                    }
                                  }
                                }
                                components {
                                  type
                                  id
                                  content {
                                    ...on BooleanContent{
                                      value
                                    }
                                    ... on SingleLineContent {
                                      text
                                    }
                                    ... on RichTextContent {
                                      plainText
                                    }
                                    ... on ImageContent {
                                      images {
                                        url
                                        altText
                                        variants {
                                          url
                                          width
                                          height
                                        }
                                      }
                                    }
                                    ... on ComponentChoiceContent {
                                      selectedComponent {
                                        name
                                        content {
                                          ...on SingleLineContent {
                                            text
                                          }
                                          ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                          ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            }
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key 
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                  
                  ... on ItemRelationsContent {
                    items {
                      name
                      path
                      type
                      shape {
                        identifier
                      }
                      components {
                        type
                        id
                        content {
                            ...on BooleanContent{
                                value
                            }
                            ... on SingleLineContent {
                                text
                            }
                            ... on RichTextContent {
                                plainText
                            }
                            ... on ImageContent {
                                images {
                                    url
                                    altText
                                    variants {
                                      url
                                      width
                                      height
                                    }
                                }
                            }
                            ... on ComponentChoiceContent {
                                selectedComponent {
                                    name
                                    content {
                                        ...on SingleLineContent {
                                            text
                                        }
                                        ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                        ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            } 
                                        }
                                        ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                }
                             }
                          }
                       }
                    }
                  }
                }
              }
            }
          }
        }
        children {
          name
          path
          type
          shape {
            identifier
          }
          ...on Document {
            name
            path
            components {
              id
              type
              content {
                ...on ContentChunkContent {
                  chunks {
                    id
                    content {
                      ... on SingleLineContent {
                        text
                      }
                      ... on NumericContent {
                        number
                        unit
                      }

                      
                      ... on ItemRelationsContent {
                        items {
                          name
                          type
                          path
                          ...on Product {
                            id
                            defaultVariant {
                              price
                              priceVariants {
                                identifier
                                name
                                price
                                currency
                              }
                              firstImage {
                                url
                                altText
                                variants {
                                  url
                                  width
                                  height
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ...on SingleLineContent {
                  text
                }
                ...on ImageContent {
                  images {
                    variants {
                      url
                      width
                      height
                    }
                  }
                }
                ...on RichTextContent {
                  plainText
                }
                ...on ComponentChoiceContent {
                  selectedComponent {
                    id
                    content {
                      ...on ImageContent {
                        images {
                          variants {
                            url
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ...on Product {
            defaultVariant {
              price
              priceVariants {
                identifier
                name
                price
                currency
              }
              firstImage {
                url
                altText
              }
            }
          }
        }
      }
    }
  `,
  {
    language: "en",
    path,
    version: version === "draft" ? "draft" : "published"
  }
)).catalogue;

// src/use-cases/crystallize/read/index.ts
var CrystallizeAPI = ({
  apiClient,
  language,
  locale = language,
  isPreview = !1
}) => {
  let version = isPreview ? "draft" : "published", mapper = DataMapper({ language, locale });
  return {
    fetchTenantConfig: (tenantIdentifier) => fetchTenantConfig_default(apiClient, tenantIdentifier),
    fetchNavigation: (path) => fetchNavigation_default(apiClient, path, language).then(mapper.API.Call.fetchNavigationToTree),
    fetchTreeMap: () => fetchTreeMap_default(apiClient, language),
    fetchLandingPage: (path) => fetchLandingPage_default(apiClient, path, version, language).then(mapper.API.Call.fetchLandingPageToLandingPage),
    fetchDocument: (path) => fetchDocument_default(apiClient, path, version, language).then(mapper.API.Call.fetchDocumentToStory),
    fetchProduct: (path) => fetchProduct_default(apiClient, path, version, language).then(mapper.API.Call.fetchProductToProduct),
    fetchFolder: (path) => fetchFolder_default(apiClient, path, version, language).then(mapper.API.Call.fetchFolderToCategory),
    fetchFolderWithChildren: (path) => fetchFolderWithChildren_default(apiClient, path, version, language).then(
      mapper.API.Call.fetchFolderToCategory(!0)
    ),
    fetchShop: (path) => Promise.all([
      fetchFolder_default(apiClient, path, version, language),
      fetchHierarchy_default(apiClient, path, language)
    ]).then(mapper.API.Call.fetchShopToShop),
    fetchFooter: (path) => fetchFooter_default(apiClient, path, version, language).then(mapper.API.Call.fetchFooterToFooter),
    fetchPriceRangeAndAttributes: (path) => fetchPriceRangeAndAttributes_default(apiClient, path),
    search: (value) => search_default(apiClient, value, language).then(mapper.API.Call.searchProductToProductSlim),
    searchOrderBy: (path, orderBy, fitlers, attributes) => searchOrderBy_default(apiClient, path, language, orderBy, fitlers, attributes).then(
      mapper.API.Call.searchProductToProductSlim
    ),
    searchOrderByPriceRange: (path) => searchOrderByPriceRange_default(apiClient, path, language).then(mapper.API.Call.searchProductToProductSlim),
    searchFilteredByPriceRange: (path, min, max) => searchFilteredByPriceRange_default(apiClient, path, language, min, max).then(
      mapper.API.Call.searchProductToProductSlim
    ),
    searchByTopic: (value) => searchByTopic_default(apiClient, value, language).then(mapper.API.Call.searchByTopicProductToProductSlim)
  };
};

// src/root.tsx
var import_reactjs_hooks2 = require("@crystallize/reactjs-hooks");

// src/use-cases/http/cache.ts
var parse = (duration, format) => {
  let durationRegexp = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu, ratios = {
    nanosecond: 1e-6,
    ns: 1e-6,
    \u00B5s: 1e-3,
    us: 1e-3,
    microsecond: 1e-3,
    millisecond: 1,
    ms: 1,
    second: 1e3,
    sec: 1e3,
    s: 1e3,
    minute: 6e4,
    min: 6e4,
    m: 6e4,
    hour: 36e5,
    hr: 36e5,
    h: 36e5,
    day: 864e5,
    d: 864e5,
    week: 6048e5,
    wk: 6048e5,
    w: 6048e5,
    month: 26298e5,
    b: 26298e5,
    year: 315576e5,
    yr: 315576e5,
    y: 315576e5
  };
  function unit(str2) {
    return ratios[str2] || ratios[str2.toLowerCase().replace(/s$/, "")] || null;
  }
  let result = 0, str = duration.replace(/(\d)[,_](\d)/g, "$1$2").replace(durationRegexp, (_, n, units) => {
    let convertedUnits = unit(units);
    return convertedUnits && (result = (result || 0) + parseFloat(n) * convertedUnits), "";
  });
  return result && result / (unit(format) || 1);
};
function HttpCacheHeaderTaggerFromLoader(loader26) {
  return process.env.HTTP_CACHE_SERVICE === "fastly" ? {
    headers: {
      "Cache-Control": loader26.get("Cache-Control"),
      "Surrogate-Control": loader26.get("Surrogate-Control"),
      "Surrogate-Key": loader26.get("Surrogate-Key")
    }
  } : process.env.HTTP_CACHE_SERVICE === "varnish" ? {
    headers: {
      "Cache-Control": loader26.get("Cache-Control"),
      xkey: loader26.get("xkey")
    }
  } : {
    headers: {
      "Cache-Control": loader26.get("Cache-Control")
    }
  };
}
function HttpCacheHeaderTagger(maxAge, sharedMaxAge, tags) {
  let clean = (tag) => {
    let w = tag.replace(/\//g, "-");
    return w[0] === "-" && (w = w.substring(1)), w;
  };
  return process.env.HTTP_CACHE_SERVICE === "fastly" ? {
    headers: {
      "Cache-Control": `public, max-age=${parse(maxAge, "s")}, s-maxage=${parse(
        sharedMaxAge,
        "s"
      )}, stale-while-revalidate=${parse(maxAge, "s")}, stale-if-error=${parse(sharedMaxAge, "s")}`,
      "Surrogate-Control": `max-age=${parse(sharedMaxAge, "s")}, stale-while-revalidate=${parse(
        sharedMaxAge,
        "s"
      )}`,
      "Surrogate-Key": "all " + tags.map(clean).join(" ")
    }
  } : process.env.HTTP_CACHE_SERVICE === "varnish" ? {
    headers: {
      "Cache-Control": `public, max-age=${parse(maxAge, "s")}, s-maxage=${parse(
        sharedMaxAge,
        "s"
      )}, stale-while-revalidate=${parse(maxAge, "s")}`,
      xkey: "all " + tags.map(clean).join(" ")
    }
  } : {
    headers: {
      "Cache-Control": `public, max-age=${parse(maxAge, "s")}, s-maxage=${parse(
        sharedMaxAge,
        "s"
      )}, stale-while-revalidate=${parse(maxAge, "s")}`
    }
  };
}
function StoreFrontAwaretHttpCacheHeaderTagger(maxAge, sharedMaxAge, tags, prefix = "") {
  return HttpCacheHeaderTagger(
    maxAge,
    sharedMaxAge,
    tags.map((tag) => `${prefix}-${tag}`)
  );
}

// src/use-cases/http/utils.ts
function isSecure(request) {
  return request.headers.get("x-forwarded-proto") === "https" || request.url.startsWith("https");
}
function getHost(request) {
  var _a3;
  if ((_a3 = process.env) != null && _a3.SUPERFAST_HOST)
    return process.env.SUPERFAST_HOST;
  if (!request.headers.has("Host") || request.headers.get("Host") === "")
    throw new Error("Runtime Fatal: Host is not found on the Request.");
  return request.headers.get("Host");
}
function getContext(request) {
  var _a3;
  let url = new URL(request.url), language = (url.pathname.split("/")[1] ?? "").split("-")[0] ?? availableLanguages[0], isHttps = isSecure(request), host = getHost(request);
  return {
    locale: `${language}-${language.toUpperCase()}`,
    language,
    isSecure: isHttps,
    host,
    isPreview: Boolean((_a3 = url.searchParams) == null ? void 0 : _a3.has("preview")),
    url,
    callbackPath: url.searchParams.get("callbackPath") || "",
    baseUrl: `${isHttps ? "https" : "http"}://${host}`
  };
}
function validatePayload(payload, schema) {
  return schema ? schema.parse(payload) : payload;
}

// src/routes/$langstore/favicon/$size[.png].ts
var size_png_exports = {};
__export(size_png_exports, {
  FAVICON_VARIANTS: () => FAVICON_VARIANTS,
  loader: () => loader
});

// src/core/favicon.server.tsx
var import_sharp = __toESM(require("sharp")), QUERY_TENANT_LOGO = `query TENANT_LOGO ($identifier: String!) {
    tenant {
        get(identifier: $identifier) {
            logo {
                url
                mimeType
            }
        }
    }
}`, getLogoForRequestTenant = async (storeFront) => {
  var _a3, _b, _c;
  let result = await storeFront.apiClient.pimApi(QUERY_TENANT_LOGO, {
    identifier: storeFront.config.tenantIdentifier
  });
  return (_c = (_b = (_a3 = result == null ? void 0 : result.tenant) == null ? void 0 : _a3.get) == null ? void 0 : _b.logo) == null ? void 0 : _c.url;
}, fetchImageBuffer = async (url) => fetch(url).then(async (res) => res.arrayBuffer()), generateFavicon = async (original, options) => {
  var _a3;
  if (!((_a3 = options == null ? void 0 : options.hasOwnProperty) != null && _a3.call(options, "size")))
    throw new Error("Must pass size");
  let opts = {
    compressionLevel: 8,
    quality: 80,
    ...options
  };
  return original.resize({
    width: opts.size,
    height: opts.size,
    fit: import_sharp.default.fit.contain,
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  }).png({
    compressionLevel: opts.compressionLevel,
    quality: opts.quality
  }).toBuffer();
};
function sharpFromImageBuffer(buffer) {
  return (0, import_sharp.default)(buffer);
}

// src/routes/$langstore/favicon/$size[.png].ts
var FAVICON_VARIANTS = {
  16: {
    size: 16,
    rel: "icon",
    extra: {}
  },
  32: {
    size: 32,
    rel: "icon",
    extra: {}
  },
  "apple-touch-icon": {
    size: 180,
    rel: "apple-touch-icon",
    extra: {}
  },
  "safari-pinned-tab": {
    size: 16,
    rel: "mask-icon",
    extra: {
      color: "#5bbad5"
    }
  }
}, loader = async ({ request, params }) => {
  let requestContext = getContext(request), size = Number(params.size);
  if (![100, 192, 256, 150].includes(size) && !FAVICON_VARIANTS.hasOwnProperty(size))
    return new Response("Not found", { status: 404 });
  let { shared, secret } = await getStoreFront(requestContext.host), logoUrl = await getLogoForRequestTenant(secret);
  if (!logoUrl)
    return new Response("Not found", { status: 404 });
  let arrayBuffer = await fetchImageBuffer(logoUrl);
  if (!arrayBuffer)
    return new Response("Not found", { status: 404 });
  let original = sharpFromImageBuffer(Buffer.from(arrayBuffer)), resizedPngIcon = await generateFavicon(original, { size });
  return new Response(resizedPngIcon, {
    status: 200,
    headers: {
      ...StoreFrontAwaretHttpCacheHeaderTagger("1d", "1w", ["favicon"], shared.config.tenantIdentifier).headers,
      "Content-Length": `${resizedPngIcon.byteLength}`,
      "Content-Type": "image/png"
    }
  });
};

// src/core/services.server.ts
var import_node_service_api_request_handlers = require("@crystallize/node-service-api-request-handlers"), import_nodemailer = __toESM(require("nodemailer"));
var _a2, storage2 = configureStorage((_a2 = process.env) == null ? void 0 : _a2.STORAGE_DSN), memoryStorage = configureStorage("memory://"), cartWrapperRepository = (0, import_node_service_api_request_handlers.createRepository)(storage2);
function createMailer(dsn) {
  if (dsn.startsWith("sendgrid://")) {
    let sgMail = require("@sendgrid/mail"), key = dsn.split("://")[1];
    return sgMail.setApiKey(key), (subject, to, from, html) => sgMail.send({
      from,
      to,
      subject,
      html
    });
  }
  let realDSN = dsn;
  require("platformsh-config").config().isValidPlatform() && (realDSN = `smtp://${process.env.PLATFORM_SMTP_HOST}:25/?pool=true`);
  let transporter = import_nodemailer.default.createTransport(realDSN);
  return transporter.verify((error, success) => {
    success || console.log(`DSN ${realDSN}: ${error}`);
  }), (subject, to, from, html) => transporter.sendMail({
    from,
    to,
    subject,
    html
  });
}

// src/use-cases/fetchTranslations.server.ts
var import_fs2 = __toESM(require("fs")), fs2 = import_fs2.default.promises, toFlatPropertyMap = (obj, keySeparator = ".") => {
  let flattenRecursive = (obj2, parentProperty, propertyMap = {}) => {
    for (let [key, value] of Object.entries(obj2)) {
      let property = parentProperty ? `${parentProperty}${keySeparator}${key}` : key;
      value && typeof value == "object" ? flattenRecursive(value, property, propertyMap) : propertyMap[property] = value;
    }
    return propertyMap;
  };
  return flattenRecursive(obj);
}, fetchTranslations_server_default = async (storage3, memoryStorage2, language) => {
  let key = `translations-${language}`, memoryCachedFlat = await memoryStorage2.get(key);
  if (!memoryCachedFlat) {
    let cachedFlat = await storage3.get(key);
    if (!cachedFlat) {
      let raw = await fs2.readFile(`./src/translations/${language}.json`, { encoding: "utf8" }), flat = toFlatPropertyMap(JSON.parse(raw));
      return memoryStorage2.set(key, JSON.stringify(flat), 3600 * 4), storage3.set(key, JSON.stringify(flat), 3600 * 4), flat;
    }
    return memoryStorage2.set(key, cachedFlat, 3600 * 4), JSON.parse(cachedFlat);
  }
  return JSON.parse(memoryCachedFlat);
};

// src/ui/components/error.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), ErrorComponent = ({ text = "Not Found", code = 404 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "flex items-center h-screen p-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "container flex flex-col items-center justify-center px-5 mx-auto my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "max-w-md text-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "mb-8 font-extrabold text-9xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("span", { className: "sr-only", children: text }, void 0, !1, {
      fileName: "src/ui/components/error.tsx",
      lineNumber: 7,
      columnNumber: 25
    }, this),
    code
  ] }, void 0, !0, {
    fileName: "src/ui/components/error.tsx",
    lineNumber: 6,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "text-2xl font-semibold md:text-3xl mb-10", children: [
    "Sorry, we couldn't ",
    code === 404 ? "find" : "load",
    " this page."
  ] }, void 0, !0, {
    fileName: "src/ui/components/error.tsx",
    lineNumber: 10,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("a", { rel: "noopener noreferrer", href: "/", className: "px-8 py-3 font-semibold rounded bg-buttonBg2", children: "Back to homepage" }, void 0, !1, {
    fileName: "src/ui/components/error.tsx",
    lineNumber: 13,
    columnNumber: 21
  }, this)
] }, void 0, !0, {
  fileName: "src/ui/components/error.tsx",
  lineNumber: 5,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "src/ui/components/error.tsx",
  lineNumber: 4,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "src/ui/components/error.tsx",
  lineNumber: 3,
  columnNumber: 9
}, this);

// src/root.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Crystallize - Superfast",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default_default
  }
];
function getTailwindThemeForConfig(theme) {
  switch (theme) {
    case "dark":
      return tailwind_dark_default;
    case "rainbow":
      return tailwind_rainbow_default;
    default:
      return tailwind_default_default;
  }
}
var headers = ({ loaderHeaders }) => ({
  Link: `<${getTailwindThemeForConfig(
    loaderHeaders.get("X-SuperFast-Theme")
  )}>; rel=preload; as=style; crossorigin=anonymous`
}), loader2 = async ({ request }) => {
  let requestContext = getContext(request);
  if (!isValidLanguageMarket(requestContext.language, requestContext.market))
    return (0, import_node2.redirect)("/" + availableLanguages[0] + requestContext.url.pathname, 301);
  let { shared, secret } = await getStoreFront(requestContext.host), api = CrystallizeAPI({
    apiClient: secret.apiClient,
    language: requestContext.language
  }), [navigation, tenantConfig, translations, footer] = await Promise.all([
    api.fetchNavigation("/"),
    api.fetchTenantConfig(secret.config.tenantIdentifier),
    fetchTranslations_server_default(storage2, memoryStorage, requestContext.language),
    api.fetchFooter("/footer")
  ]), apiPath = buildLanguageMarketAwareLink("/api", requestContext.language, requestContext.market), frontConfiguration = buildStoreFrontConfiguration(
    requestContext.locale,
    `http${requestContext.isSecure ? "s" : ""}://${request.headers.get("Host")}${apiPath}`,
    shared.config,
    tenantConfig
  );
  return (0, import_node2.json)(
    {
      isHTTPS: requestContext.isSecure,
      host: requestContext.host,
      frontConfiguration,
      navigation,
      baseUrl: requestContext.baseUrl,
      translations,
      footer
    },
    {
      headers: {
        ...StoreFrontAwaretHttpCacheHeaderTagger("30s", "30s", ["shop"], shared.config.tenantIdentifier).headers,
        "X-SuperFast-Theme": shared.config.theme
      }
    }
  );
}, Document = ({ children }) => {
  let { isHTTPS, frontConfiguration, translations, baseUrl } = (0, import_react7.useLoaderData)(), location2 = (0, import_react7.useLocation)(), path = "/" + location2.pathname.split("/").slice(2).join("/");
  return typeof window < "u" && window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(
      function(registration) {
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      },
      function(err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_reactjs_hooks2.CrystallizeProvider,
    {
      language: frontConfiguration.language,
      tenantIdentifier: frontConfiguration.crystallize.tenantIdentifier,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AppContextProvider, { initialState: frontConfiguration, translations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("html", { lang: frontConfiguration.language, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("head", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 168,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 169,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { name: "apple-mobile-web-app-capable", content: "yes" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 170,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { name: "mobile-web-app-capable", content: "yes" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 171,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Favicons, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 172,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("link", { rel: "manifest", href: "/manifest.json" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 173,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { name: "msapplication-TileColor", content: "#da532c" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 174,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("meta", { name: "theme-color", content: "#ffffff" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 175,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("link", { href: `${baseUrl}${location2 == null ? void 0 : location2.pathname}`, rel: "canonical" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 176,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 177,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Links, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 178,
            columnNumber: 25
          }, this),
          displayableLanguages.map((lang) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            "link",
            {
              rel: "alternate",
              hrefLang: lang.code,
              href: `${baseUrl}${buildLanguageMarketAwareLink(path, lang.code)}`
            },
            lang.code,
            !1,
            {
              fileName: "src/root.tsx",
              lineNumber: 180,
              columnNumber: 29
            },
            this
          )),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("script", { suppressHydrationWarning: !0, type: "text/css", children: '*,:after,:before{box-sizing:border-box;border:0 solid}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{margin:0;line-height:inherit}h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}figure,h2,p{margin:0}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (max-width:1024px){#grid-item{grid-column:span 3!important}}.absolute{position:absolute}.relative{position:relative}.-right-2{right:-.5rem}.-top-2{top:-.5rem}.z-10{z-index:10}.mx-auto{margin-left:auto;margin-right:auto}.mt-4{margin-top:1rem}.flex{display:flex}.h-80{height:20rem}.h-full{height:100%}.h-5{height:1.25rem}.w-full{width:100%}.w-60{width:15rem}.w-5{width:1.25rem}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-evenly{justify-content:space-evenly}.gap-5{gap:1.25rem}.gap-1{gap:.25rem}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:1000px}.rounded-r-xl{border-top-right-radius:.75rem;border-bottom-right-radius:.75rem}.bg-primary{--tw-bg-opacity:1;background-color:rgb(255 247 240/var(--tw-bg-opacity))}.bg-background1{--tw-bg-opacity:1;background-color:rgb(240 239 235/var(--tw-bg-opacity))}.bg-grey{background-color:#00000008}.bg-text{--tw-bg-opacity:1;background-color:rgb(55 53 103/var(--tw-bg-opacity))}.p-8{padding:2rem}.p-5{padding:1.25rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-7{padding-top:1.75rem;padding-bottom:1.75rem}.py-20{padding-top:5rem;padding-bottom:5rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.text-primary{--tw-text-opacity:1;color:rgb(255 247 240/var(--tw-text-opacity))}' }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 187,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("script", { defer: !0, src: "https://pim.crystallize.com/static/frontend-preview-listener.js" }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 192,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("link", { rel: "stylesheet", href: getTailwindThemeForConfig(frontConfiguration.theme) }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 193,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "src/root.tsx",
          lineNumber: 167,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("body", { "data-theme": frontConfiguration.theme, children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.ScrollRestoration, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 197,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 198,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.LiveReload, { port: isHTTPS ? 443 : void 0 }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 199,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "src/root.tsx",
          lineNumber: 195,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/root.tsx",
        lineNumber: 166,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/root.tsx",
      lineNumber: 161,
      columnNumber: 9
    },
    this
  );
}, Favicons = () => {
  let { path } = useAppContext(), linkTags = Object.entries(FAVICON_VARIANTS).map(([variant, meta9]) => {
    let extra = meta9.extra ?? {};
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      "link",
      {
        rel: meta9.rel,
        sizes: `${meta9.size}x${meta9.size}`,
        href: path(`/favicon/${variant}.png`),
        ...extra
      },
      `/favicon/${variant}.png`,
      !1,
      {
        fileName: "src/root.tsx",
        lineNumber: 212,
        columnNumber: 13
      },
      this
    );
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: linkTags }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 222,
    columnNumber: 12
  }, this);
}, Layout = ({ children }) => {
  let { navigation, footer } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Header, { navigation }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 230,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 231,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Footer, { footer }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 232,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 229,
    columnNumber: 9
  }, this);
}, root_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
  fileName: "src/root.tsx",
  lineNumber: 241,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "src/root.tsx",
  lineNumber: 240,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "src/root.tsx",
  lineNumber: 239,
  columnNumber: 9
}, this), ErrorBoundary = ({ error }) => (console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("html", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 252,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 253,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Links, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 254,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 251,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("body", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ErrorComponent, { text: error.message, code: 500 }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 257,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 259,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 256,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "src/root.tsx",
  lineNumber: 250,
  columnNumber: 9
}, this)), CatchBoundary = () => {
  let caught = (0, import_react7.useCatch)();
  return caught.data !== null ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ErrorComponent, { text: caught.statusText, code: caught.status }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 271,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 270,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 269,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("title", { children: "Oh no!" }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 280,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Meta, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 281,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Links, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 282,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 279,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ErrorComponent, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 285,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react7.Scripts, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 286,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 284,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 278,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/api/shipping/$provider.pickup-points.ts
var provider_pickup_points_exports = {};
__export(provider_pickup_points_exports, {
  loader: () => loader3
});
var import_node3 = require("@remix-run/node");

// src/use-cases/payments/montonio/fetchPickupPoints.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken")), fetchPickupPoints_default = async () => {
  let payload = {
    access_key: `${process.env.MONTONIO_SHIPPING_ACCESS_KEY}`
  }, token = import_jsonwebtoken.default.sign(payload, `${process.env.MONTONIO_SHIPPING_SECRET_KEY}`, {
    algorithm: "HS256",
    expiresIn: "1h"
  });
  return await (await fetch(`https://${process.env.MONTONIO_SHIPPING_ORIGIN}/pickup-points`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })).json();
};

// src/routes/$langstore/api/shipping/$provider.pickup-points.ts
var loader3 = async ({ params }) => {
  if (params.provider !== "montonio")
    return (0, import_node3.json)({ error: "Provider not supported" }, { status: 400 });
  let cached = await storage2.get("montonio-pickup-points");
  if (cached)
    return (0, import_node3.json)(JSON.parse(cached));
  let points = await fetchPickupPoints_default();
  return storage2.set("montonio-pickup-points", JSON.stringify(points), 86400), (0, import_node3.json)(points);
};

// src/routes/$langstore/api/payment/crystal.$type.confirmed.tsx
var crystal_type_confirmed_exports = {};
__export(crystal_type_confirmed_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");

// src/use-cases/crystallize/write/pushOrder.ts
var import_js_api_client6 = require("@crystallize/js-api-client");

// src/use-cases/crystallize/write/pushCustomerIfMissing.ts
var import_js_api_client5 = require("@crystallize/js-api-client"), pushCustomerIfMissing_default = async (apiClient, orderCustomer) => {
  if ((orderCustomer == null ? void 0 : orderCustomer.identifier) === "")
    return;
  let idResponse = await apiClient.catalogueApi("query { tenant { id } }");
  await (0, import_js_api_client5.createCustomerManager)(apiClient).create({
    tenantId: idResponse.tenant.id,
    firstName: (orderCustomer == null ? void 0 : orderCustomer.firstName) || "",
    lastName: (orderCustomer == null ? void 0 : orderCustomer.lastName) || "",
    identifier: orderCustomer == null ? void 0 : orderCustomer.identifier,
    addresses: orderCustomer == null ? void 0 : orderCustomer.addresses,
    email: (orderCustomer == null ? void 0 : orderCustomer.identifier) || ""
  });
};

// src/use-cases/crystallize/write/pushOrder.ts
var buildCustomer = (cartWrapper) => {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  let firstName = ((_a3 = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _a3.firstname) || "", lastName = ((_b = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _b.lastname) || "";
  return {
    identifier: ((_c = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _c.customerIdentifier) || ((_d = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _d.email) || "",
    firstName,
    lastName,
    addresses: [
      {
        type: "billing",
        firstName,
        lastName,
        email: ((_e = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _e.email) || "",
        street: ((_f = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _f.streetAddress) || "",
        city: ((_g = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _g.city) || "",
        country: ((_h = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _h.country) || "",
        postalCode: ((_i = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _i.zipCode) || ""
      },
      {
        type: "delivery",
        firstName,
        lastName,
        email: ((_j = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _j.email) || "",
        street: ((_k = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _k.streetAddress) || "",
        city: ((_l = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _l.city) || "",
        country: ((_m = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _m.country) || "",
        postalCode: ((_n = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _n.zipCode) || ""
      }
    ]
  };
}, pushOrder_default = async (cartWrapperRepository2, apiClient, cartWrapper, payment, metadata) => {
  var _a3, _b, _c;
  let customer = buildCustomer(cartWrapper);
  pushCustomerIfMissing_default(apiClient, customer).catch(console.error);
  let cart = cartWrapper.cart;
  if ((_a3 = cartWrapper == null ? void 0 : cartWrapper.extra) != null && _a3.orderId)
    throw {
      message: `Order '${cartWrapper.extra.orderId}' already exists.`,
      status: 403
    };
  let extendedMetaData = {
    "Additional info": ((_b = cartWrapper == null ? void 0 : cartWrapper.customer) == null ? void 0 : _b.additionalInfo) || "",
    ...metadata
  }, pusher = (0, import_js_api_client6.createOrderPusher)(apiClient), orderIntent = {
    customer,
    cart: cart.cart.items.map((item) => {
      var _a4, _b2;
      return {
        sku: item.variant.sku,
        name: item.variant.name || item.variant.sku,
        quantity: item.quantity,
        imageUrl: ((_a4 = item.variant.firstImage) == null ? void 0 : _a4.url) || "",
        price: {
          gross: item.price.gross,
          net: item.price.net,
          currency: item.price.currency,
          discounts: ((_b2 = item.price.discounts) == null ? void 0 : _b2.map((discount) => ({
            percent: (discount == null ? void 0 : discount.percent) || 0
          }))) || [],
          tax: {
            name: "VAT",
            percent: item.price.gross > 0 ? (item.price.net / item.price.gross - 1) * 100 : 0
          }
        }
      };
    }),
    total: {
      currency: cart.total.currency,
      gross: cart.total.gross,
      net: cart.total.net,
      discounts: ((_c = cart.total.discounts) == null ? void 0 : _c.map((discount) => ({
        percent: (discount == null ? void 0 : discount.percent) || 0
      }))) || [],
      tax: {
        name: "VAT",
        percent: (cart.total.net / cart.total.gross - 1) * 100
      }
    },
    payment: [payment],
    meta: Object.keys(extendedMetaData).map((key) => ({ key, value: extendedMetaData[key] ?? "" }))
  }, orderCreatedConfirmation = await pusher(orderIntent);
  return cartWrapperRepository2.attachOrderId(cartWrapper, orderCreatedConfirmation.id), orderCreatedConfirmation;
};

// src/use-cases/crystallize/write/pushCrystalPaidOrder.ts
var pushCrystalPaidOrder_default = async (cartWrapperRepository2, apiClient, cartWrapper, type, card) => {
  var _a3;
  let properties = [
    {
      property: "amount",
      value: cartWrapper.cart.total.gross.toFixed(2)
    },
    {
      property: "cartId",
      value: cartWrapper.cartId
    }
  ], isCoin = type === "coin", isCard = type === "card";
  return !isCoin && !isCard && properties.push({
    property: "payment_method",
    value: "Unknown Payment Method"
  }), isCoin && properties.push({
    property: "payment_method",
    value: "Crystallize Coin"
  }), isCard && properties.push(
    {
      property: "payment_method",
      value: "Crystallize Card"
    },
    {
      property: "payment_card",
      value: ((_a3 = card == null ? void 0 : card.number) == null ? void 0 : _a3.replace(/.(?=.{4,}$)/g, "*")) || "xxxx-xxxx-xxxx-xxxx"
    },
    {
      property: "payment_card_expiration",
      value: (card == null ? void 0 : card.expiration) || "xx/xx"
    },
    {
      property: "payment_card_country",
      value: (card == null ? void 0 : card.country) || "Unknown"
    },
    {
      property: "payment_card_zip",
      value: (card == null ? void 0 : card.zip) || "xxxxx"
    }
  ), await pushOrder_default(cartWrapperRepository2, apiClient, cartWrapper, {
    provider: "custom",
    custom: {
      properties
    }
  });
};

// src/routes/$langstore/api/payment/crystal.$type.confirmed.tsx
var action = async ({ request, params }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), body = await request.json(), cartId = body.cartId, cartWrapper = await cartWrapperRepository.find(cartId);
  if (!cartWrapper)
    throw {
      message: `Cart '${cartId}' does not exist.`,
      status: 404
    };
  let orderCreatedConfirmation = await pushCrystalPaidOrder_default(
    cartWrapperRepository,
    storefront.apiClient,
    cartWrapper,
    params.type,
    body.card
  );
  return (0, import_node4.json)(orderCreatedConfirmation);
};

// src/routes/$langstore/api/magicklink/confirm.$token.tsx
var confirm_token_exports = {};
__export(confirm_token_exports, {
  loader: () => loader4
});
var import_node6 = require("@remix-run/node");

// src/core/cookies.server.ts
var import_node5 = require("@remix-run/node"), authCookie = (0, import_node5.createCookie)("authentication", {
  maxAge: 604800
});

// src/use-cases/user/handleMagickLink.ts
var import_node_service_api_request_handlers2 = require("@crystallize/node-service-api-request-handlers");
var handleMagickLink_default = async (frontendUrl, context, token) => {
  let backLinkPath = context.callbackPath !== "" ? context.callbackPath : buildLanguageMarketAwareLink("/checkout", context.language, context.market), cookie = {};
  return {
    redirectUrl: await (0, import_node_service_api_request_handlers2.handleMagickLinkConfirmationRequestPayload)(null, {
      token,
      host: context.host,
      jwtSecret: `${process.env.JWT_SECRET}`,
      backLinkPath: `${frontendUrl}${backLinkPath}?token=:token`,
      setCookie: (name, value) => {
        cookie = {
          ...cookie,
          [name]: value
        };
      }
    }),
    cookie
  };
};

// src/routes/$langstore/api/magicklink/confirm.$token.tsx
var loader4 = async ({ request, params }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), config = require("platformsh-config").config(), frontendURL = config.isValidPlatform() ? config.getRoute("frontapp").url.replace(/\/$/, "").replace("*", storefront.config.identifier) : requestContext.baseUrl, { redirectUrl, cookie } = await handleMagickLink_default(frontendURL, requestContext, params.token || "");
  return (0, import_node6.redirect)(redirectUrl, {
    headers: {
      "Set-Cookie": await authCookie.serialize(cookie)
    }
  });
};

// src/routes/$langstore/api/payment/$provider.create.tsx
var provider_create_exports = {};
__export(provider_create_exports, {
  action: () => action2
});
var import_node7 = require("@remix-run/node");

// src/use-cases/payments/klarna/initiatePayment.ts
var import_node_service_api_request_handlers3 = require("@crystallize/node-service-api-request-handlers");

// src/use-cases/payments/klarna/utils.ts
var getKlarnaVariables = (currency, storefrontConfig) => {
  var _a3;
  let klarnaLocale = {
    locale: "en-US",
    country: "US",
    currency: "USD"
  }, origin = process.env.KLARNA_ORIGIN ?? ((_a3 = storefrontConfig == null ? void 0 : storefrontConfig.configuration) == null ? void 0 : _a3.KLARNA_ORIGIN) ?? "api.playground.klarna.com";
  return origin !== "api-na.playground.klarna.com" && (klarnaLocale = {
    locale: currency === "NOK" ? "en-NO" : currency === "USD" ? "en-US" : "en-FR",
    country: currency === "NOK" ? "NO" : currency === "USD" ? "US" : "FR",
    currency
  }), {
    locale: klarnaLocale,
    origin
  };
}, getKlarnaOrderInfos = (cart) => {
  let currency = cart.total.currency.toUpperCase(), { locale } = getKlarnaVariables(currency);
  return {
    amount: cart.total.gross * 100,
    currency: locale.currency,
    order_lines: cart.cart.items.map((item) => {
      var _a3;
      let discountAmount = ((_a3 = item.price.discounts) == null ? void 0 : _a3.map((discount) => discount.amount).reduce((a, b) => a + b, 0)) ?? 0;
      return {
        name: item.variant.name || item.variant.sku,
        quantity: item.quantity,
        total_amount: item.price.gross * 100,
        total_discount_amount: discountAmount * 100,
        unit_price: (item.price.gross / item.quantity + discountAmount) * 100
      };
    })
  };
};

// src/use-cases/payments/klarna/initiatePayment.ts
var initiatePayment_default = async (cartWrapper, context, payload, storeFrontConfig) => {
  var _a3, _b;
  let currency = cartWrapper.cart.total.currency.toUpperCase(), { locale, origin } = getKlarnaVariables(currency);
  return await (0, import_node_service_api_request_handlers3.handleKlarnaInitiatePaymentRequestPayload)(validatePayload(payload, import_node_service_api_request_handlers3.klarnaInitiatePaymentPayload), {
    origin,
    country: locale.country,
    locale: locale.locale,
    credentials: {
      username: process.env.KLARNA_USERNAME ?? ((_a3 = storeFrontConfig == null ? void 0 : storeFrontConfig.configuration) == null ? void 0 : _a3.KLARNA_USERNAME) ?? "",
      password: process.env.KLARNA_PASSWORD ?? ((_b = storeFrontConfig == null ? void 0 : storeFrontConfig.configuration) == null ? void 0 : _b.KLARNA_PASSWORD) ?? ""
    },
    fetchCart: async () => cartWrapper.cart,
    initiatePaymentArguments: (cart) => {
      let orderCartLink = buildLanguageMarketAwareLink(
        `/order/cart/${cartWrapper.cartId}`,
        context.language,
        context.market
      );
      return {
        ...getKlarnaOrderInfos(cart),
        urls: {
          confirmation: `${context.baseUrl}${orderCartLink}`,
          authorization: `${context.baseUrl}/api/webhook/payment/klarna/${cartWrapper.cartId}`
        }
      };
    }
  });
};

// src/use-cases/payments/stripe/initiatePayment.ts
var import_node_service_api_request_handlers4 = require("@crystallize/node-service-api-request-handlers");
var initiatePayment_default2 = async (cartWrapper, context, payload, storeFrontConfig) => {
  var _a3;
  return await (0, import_node_service_api_request_handlers4.handleStripeCreatePaymentIntentRequestPayload)(validatePayload(payload, import_node_service_api_request_handlers4.stripePaymentIntentPayload), {
    secret_key: process.env.STRIPE_SECRET_KEY ?? ((_a3 = storeFrontConfig == null ? void 0 : storeFrontConfig.configuration) == null ? void 0 : _a3.SECRET_KEY) ?? "",
    fetchCart: async () => cartWrapper.cart,
    createIntentArguments: (cart) => ({
      amount: cart.total.gross * 100,
      currency: cart.total.currency
    })
  });
};

// src/use-cases/payments/quickpay/initiatePayment.ts
var import_node_service_api_request_handlers5 = require("@crystallize/node-service-api-request-handlers");
var initiatePayment_default3 = async (cartWrapper, context, payload, storeFrontConfig) => {
  var _a3;
  return await (0, import_node_service_api_request_handlers5.handleQuickPayCreatePaymentLinkRequestPayload)(
    validatePayload(payload, import_node_service_api_request_handlers5.quickPayCreatePaymentLinkPayload),
    {
      api_key: process.env.QUICKPAY_API_KEY ?? ((_a3 = storeFrontConfig.configuration) == null ? void 0 : _a3.QUICKPAY_API_KEY) ?? "",
      fetchCart: async () => cartWrapper.cart,
      createPaymentArguments: (cart) => {
        let orderCartLink = buildLanguageMarketAwareLink(
          `/order/cart/${cartWrapper.cartId}`,
          context.language,
          context.market
        );
        return {
          amount: cart.total.gross * 100,
          currency: cart.total.currency,
          urls: {
            continue: `${context.baseUrl}${orderCartLink}`,
            cancel: `${context.baseUrl}${orderCartLink}`,
            callback: `${context.baseUrl}/api/webhook/payment/quickpay`
          }
        };
      }
    }
  );
};

// src/use-cases/payments/razorpay/initiatePayment.ts
var import_node_service_api_request_handlers6 = require("@crystallize/node-service-api-request-handlers");
var initiatePayment_default4 = async (cartWrapper, context, payload, storeFrontConfig) => {
  var _a3, _b;
  return await (0, import_node_service_api_request_handlers6.handleRazorPayOrderPayload)(validatePayload(payload, import_node_service_api_request_handlers6.razorPayPaymentPayload), {
    currency: cartWrapper.cart.total.currency.toUpperCase(),
    credentials: {
      key_id: process.env.RAZORPAY_ID ?? ((_a3 = storeFrontConfig == null ? void 0 : storeFrontConfig.configuration) == null ? void 0 : _a3.razorpay_key_id) ?? "",
      key_secret: process.env.RAZORPAY_SECRET ?? ((_b = storeFrontConfig == null ? void 0 : storeFrontConfig.configuration) == null ? void 0 : _b.razorpay_key_secret) ?? ""
    },
    fetchCart: async () => cartWrapper.cart
  });
};

// src/use-cases/payments/montonio/initiatePayment.ts
var import_node_service_api_request_handlers7 = require("@crystallize/node-service-api-request-handlers");
var initiatePayment_default5 = async (cartWrapper, context, payload, storeFrontConfig) => {
  var _a3, _b, _c;
  return await (0, import_node_service_api_request_handlers7.handleMontonioCreatePaymentLinkRequestPayload)(
    validatePayload(payload, import_node_service_api_request_handlers7.montonioCreatePaymentLinkPayload),
    {
      origin: process.env.MONTONIO_ORIGIN ?? ((_a3 = storeFrontConfig.configuration) == null ? void 0 : _a3.MONTONIO_ORIGIN) ?? "",
      access_key: process.env.MONTONIO_ACCESS_KEY ?? ((_b = storeFrontConfig.configuration) == null ? void 0 : _b.MONTONIO_ACCESS_KEY) ?? "",
      secret_key: process.env.MONTONIO_SECRET_KEY ?? ((_c = storeFrontConfig.configuration) == null ? void 0 : _c.MONTONIO_SECRET_KEY) ?? "",
      fetchCart: async () => cartWrapper.cart,
      createPaymentArguments: (cart) => {
        let orderCartLink = buildLanguageMarketAwareLink(
          `/order/cart/${cartWrapper.cartId}`,
          context.language,
          context.market
        );
        return {
          amount: cart.total.gross,
          currency: cart.total.currency,
          urls: {
            return: `${context.baseUrl}${orderCartLink}`,
            notification: `${context.baseUrl}/api/webhook/payment/montonio`
          },
          customer: {
            email: cartWrapper.customer.email,
            firstName: cartWrapper.customer.firstName,
            lastName: cartWrapper.customer.lastName
          }
        };
      }
    }
  );
};

// src/routes/$langstore/api/payment/$provider.create.tsx
var action2 = async ({ request, params }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), body = await request.json(), cartId = body.cartId, cartWrapper = await cartWrapperRepository.find(cartId);
  if (!cartWrapper)
    throw {
      message: `Cart '${cartId}' does not exist.`,
      status: 404
    };
  let data = await {
    klarna: initiatePayment_default,
    stripe: initiatePayment_default2,
    quickpay: initiatePayment_default3,
    razorpay: initiatePayment_default4,
    montonio: initiatePayment_default5
  }[params.provider](
    cartWrapper,
    requestContext,
    body,
    storefront.config
  );
  return (0, import_node7.json)(data);
};

// src/routes/$langstore/shop/$folder.$product[.]pdf.tsx
var folder_product_pdf_exports = {};
__export(folder_product_pdf_exports, {
  loader: () => loader5
});
var import_node8 = require("@remix-run/node"), import_renderer4 = __toESM(require("@react-pdf/renderer"));

// src/ui/components/pdf/single-product.tsx
var import_renderer3 = require("@react-pdf/renderer");

// src/ui/components/pdf/styles.js
var import_renderer = require("@react-pdf/renderer"), styles = import_renderer.StyleSheet.create({
  productPage: {
    fontFamily: "Helvetica"
  },
  tablePage: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover"
  },
  title: {
    marginBottom: 15,
    fontWeight: 700,
    color: "#fff",
    fontSize: 24
  },
  productDescriptionContainer: {
    width: "50%",
    position: "absolute",
    right: "0%",
    top: "50%",
    padding: 25,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: "#000"
  },
  productDescription: {
    color: "#fff",
    fontSize: 10,
    lineHeight: 1.5
  },
  price: {
    color: "#fff",
    marginTop: 15,
    fontStyle: "bold",
    borderRadius: 8,
    fontSize: 16,
    textAlign: "left"
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 12
  },
  table: {
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "10%"
  },
  tableRow: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dfdfdf"
  },
  tableCell: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 4
  },
  tableCellImage: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  tableCellName: {
    color: "#000",
    fontSize: 10,
    minWidth: "35%",
    paddingTop: 15,
    paddingBottom: 15,
    fontWeight: 900
  },
  tableHeader: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10
  },
  tableHeaderName: {
    fontSize: 8,
    color: "#333"
  }
});

// src/ui/components/pdf/single-product.tsx
var import_content_transformer = require("@crystallize/reactjs-components/dist/content-transformer");

// src/ui/components/pdf/shared.tsx
var import_renderer2 = require("@react-pdf/renderer"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), Price3 = ({ children, currencyCode }) => {
  let currency = getCurrencyFromCode(currencyCode), formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 5
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_renderer2.Text, { children: formatter.format(children) }, void 0, !1, {
    fileName: "src/ui/components/pdf/shared.tsx",
    lineNumber: 19,
    columnNumber: 12
  }, this);
};

// src/ui/components/pdf/single-product.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), overrides = {
  link: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Link, { src: props.metadata.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_content_transformer.NodeContent, { ...props }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this),
  div: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_content_transformer.NodeContent, { ...props }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this),
  span: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_content_transformer.NodeContent, { ...props }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this),
  paragraph: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 12 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_content_transformer.NodeContent, { ...props }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this),
  quote: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 16, padding: 15 }, children: [
    '"',
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_content_transformer.NodeContent, { ...props }, void 0, !1, {
      fileName: "src/ui/components/pdf/single-product.tsx",
      lineNumber: 32,
      columnNumber: 14
    }, this),
    '""'
  ] }, void 0, !0, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this),
  "line-break": (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 16, width: "100%", display: "block", height: 10 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_content_transformer.NodeContent, { ...props }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this)
}, SingleProduct = ({ product }) => {
  var _a3;
  let primaryVariant = product.defaultVariant, description = primaryVariant.description || product.description, currency = primaryVariant.priceVariants.default.currency, price = displayPriceFor(
    primaryVariant,
    {
      default: "default",
      discounted: "sales"
    },
    currency.code
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Page, { style: styles.productPage, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_renderer3.View,
        {
          style: {
            width: "100%",
            height: "100%",
            position: "relative",
            borderRadius: 6,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#dfdfdf",
            overflow: "hidden"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Image, { style: styles.image, src: product.defaultVariant.images[0].url }, void 0, !1, {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 71,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/pdf/single-product.tsx",
          lineNumber: 59,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { style: styles.productDescriptionContainer, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: styles.title, children: product.name }, void 0, !1, {
          fileName: "src/ui/components/pdf/single-product.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: styles.productDescription, children: !!(description != null && description.length) && ((description == null ? void 0 : description[0].length) < 152 ? description[0] : `${description == null ? void 0 : description[0].slice(0, 152)} ...`) }, void 0, !1, {
          fileName: "src/ui/components/pdf/single-product.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: styles.price, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Price3, { currencyCode: currency.code, children: price.default }, void 0, !1, {
          fileName: "src/ui/components/pdf/single-product.tsx",
          lineNumber: 81,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/pdf/single-product.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/single-product.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/pdf/single-product.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    product.story && product.story.map((paragraph, storyIndex) => {
      var _a4;
      let images = paragraph.images;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Page, { style: { height: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { style: { flexDirection: "row", height: "100%" }, children: [
        images && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_renderer3.View,
          {
            style: {
              minWidth: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            },
            children: images == null ? void 0 : images.map((img, imgIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_renderer3.Image,
              {
                src: img.url,
                style: {
                  height: "100%",
                  width: "100%",
                  maxHeight: `${100 / images.length}%`,
                  overflow: "hidden",
                  objectFit: "cover"
                }
              },
              `story-paragraph-#${storyIndex}-image-#${imgIndex}-${img.url}`,
              !1,
              {
                fileName: "src/ui/components/pdf/single-product.tsx",
                lineNumber: 102,
                columnNumber: 45
              },
              this
            ))
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 93,
            columnNumber: 37
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { style: { padding: images ? 35 : 100, width: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 18, marginBottom: 15 }, children: paragraph.title }, void 0, !1, {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 118,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 14, lineHeight: 1.6 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_content_transformer.ContentTransformer, { json: (_a4 = paragraph.body) == null ? void 0 : _a4.json, overrides }, void 0, !1, {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 120,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 119,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/pdf/single-product.tsx",
          lineNumber: 117,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/single-product.tsx",
        lineNumber: 91,
        columnNumber: 29
      }, this) }, `story-paragraph-#${storyIndex}`, !1, {
        fileName: "src/ui/components/pdf/single-product.tsx",
        lineNumber: 90,
        columnNumber: 25
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Page, { style: styles.tablePage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { style: styles.table, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { style: styles.tableHeader, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_renderer3.Text,
          {
            style: {
              ...styles.tableHeaderName,
              minWidth: "43%",
              paddingLeft: 40
            },
            children: "Name"
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 130,
            columnNumber: 25
          },
          this
        ),
        Object.keys(product.defaultVariant.attributes).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_renderer3.Text,
          {
            style: { ...styles.tableHeaderName, width: "20%" },
            children: product.defaultVariant.attributes[key]
          },
          `variants-attribute-header-${key}`,
          !1,
          {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 140,
            columnNumber: 29
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_renderer3.Text,
          {
            style: {
              ...styles.tableHeaderName,
              paddingLeft: "5%"
            },
            children: "Price"
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 147,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, {}, void 0, !1, {
          fileName: "src/ui/components/pdf/single-product.tsx",
          lineNumber: 155,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/single-product.tsx",
        lineNumber: 129,
        columnNumber: 21
      }, this),
      (_a3 = product == null ? void 0 : product.variants) == null ? void 0 : _a3.map((variant, i) => {
        var _a4;
        let variantPrice = displayPriceFor(
          variant,
          {
            default: "default",
            discounted: "sales"
          },
          currency.code
        );
        return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_renderer3.View,
          {
            style: {
              ...styles.tableRow,
              backgroundColor: `${i % 2 ? "transparent" : "#f7f7f7"}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Image, { style: styles.tableCellImage, src: (_a4 = variant == null ? void 0 : variant.images[0]) == null ? void 0 : _a4.url }, void 0, !1, {
                fileName: "src/ui/components/pdf/single-product.tsx",
                lineNumber: 175,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { style: { ...styles.tableCellName, display: "flex", flexDirection: "column" }, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 8, display: "block" }, children: variant == null ? void 0 : variant.name }, void 0, !1, {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 177,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 8, display: "block" }, children: variant == null ? void 0 : variant.sku }, void 0, !1, {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 178,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "src/ui/components/pdf/single-product.tsx",
                lineNumber: 176,
                columnNumber: 33
              }, this),
              Object.keys(variant.attributes).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                import_renderer3.Text,
                {
                  style: { fontSize: 10, color: "#000", width: "20%" },
                  children: variant.attributes[key]
                },
                `attribute-value-${variant.sku}-${key}`,
                !1,
                {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 182,
                  columnNumber: 37
                },
                this
              )),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { style: { marginTop: 5, width: "30%", textAlign: "right", marginRight: 10 }, children: variantPrice.discounted && variantPrice.discounted < variantPrice.default ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 10, fontWeight: 600 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Price3, { currencyCode: variantPrice.currency.code, children: variantPrice.discounted }, void 0, !1, {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 194,
                  columnNumber: 49
                }, this) }, void 0, !1, {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 193,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.View, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 8, textDecoration: "line-through" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Price3, { currencyCode: variantPrice.currency.code, children: variantPrice.default }, void 0, !1, {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 200,
                  columnNumber: 53
                }, this) }, void 0, !1, {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 199,
                  columnNumber: 49
                }, this) }, void 0, !1, {
                  fileName: "src/ui/components/pdf/single-product.tsx",
                  lineNumber: 198,
                  columnNumber: 45
                }, this)
              ] }, void 0, !0, {
                fileName: "src/ui/components/pdf/single-product.tsx",
                lineNumber: 192,
                columnNumber: 41
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_renderer3.Text, { style: { fontSize: 10, fontWeight: 600 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Price3, { currencyCode: variantPrice.currency.code, children: variantPrice.default }, void 0, !1, {
                fileName: "src/ui/components/pdf/single-product.tsx",
                lineNumber: 208,
                columnNumber: 45
              }, this) }, void 0, !1, {
                fileName: "src/ui/components/pdf/single-product.tsx",
                lineNumber: 207,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "src/ui/components/pdf/single-product.tsx",
                lineNumber: 190,
                columnNumber: 33
              }, this)
            ]
          },
          i,
          !0,
          {
            fileName: "src/ui/components/pdf/single-product.tsx",
            lineNumber: 168,
            columnNumber: 29
          },
          this
        );
      })
    ] }, void 0, !0, {
      fileName: "src/ui/components/pdf/single-product.tsx",
      lineNumber: 128,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/pdf/single-product.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/pdf/single-product.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this);
};

// src/core/dataFetcherForShapePage.server.ts
var dataFetcherForShapePage_server_default = async (shapeIdentifier, path, request, params) => {
  let { secret } = await getStoreFront(request.host), api = CrystallizeAPI({
    apiClient: secret.apiClient,
    language: request.language,
    isPreview: request.isPreview
  }), url = request.url;
  switch (shapeIdentifier) {
    case "product":
      let product = await api.fetchProduct(path);
      if (!product)
        throw new Response("Product Not Found", {
          status: 404,
          statusText: "Product Not Found"
        });
      return {
        product,
        preSelectedSku: request.url.searchParams.get("sku") ?? ""
      };
    case "category":
      let searchParams = {
        orderBy: url.searchParams.get("orderBy"),
        filters: {
          price: {
            min: url.searchParams.get("min"),
            max: url.searchParams.get("max")
          }
        },
        attributes: url.searchParams.getAll("attr")
      };
      url.searchParams.delete("preview");
      let [category, products, priceRangeAndAttributes] = await Promise.all([
        api.fetchFolderWithChildren(path),
        api.searchOrderBy(path, searchParams.orderBy, searchParams.filters, searchParams.attributes),
        api.fetchPriceRangeAndAttributes(path)
      ]);
      if (!category)
        throw new Response("Category Not Found", {
          status: 404,
          statusText: "Category Not Found"
        });
      return { category, products, priceRangeAndAttributes };
    case "abstract-story":
      let story = await api.fetchDocument(path);
      if (!story)
        throw new Response("Story Mot Found", {
          status: 404,
          statusText: "Story Not Found"
        });
      return story;
    case "_topic":
      let { products: topicProducts, topics } = await api.searchByTopic(path), topic = topics.find((topic2) => topic2.path === path);
      return {
        products: topicProducts,
        topics,
        topic
      };
    case "landing-page":
      return await api.fetchLandingPage(path);
  }
  throw new Error(`No page renderer found for shape ${shapeIdentifier}`);
};

// src/routes/$langstore/shop/$folder.$product[.]pdf.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader5 = async ({ request, params }) => {
  let requestContext = getContext(request), path = `/shop/${params.folder}/${params.product}`, { shared } = await getStoreFront(requestContext.host), data = await dataFetcherForShapePage_server_default("product", path, requestContext, params);
  console.log(data);
  let pdf = await import_renderer4.default.renderToStream(/* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SingleProduct, { product: data.product }, void 0, !1, {
    fileName: "src/routes/$langstore/shop/$folder.$product[.]pdf.tsx",
    lineNumber: 18,
    columnNumber: 47
  }, this));
  return new import_node8.Response(pdf, {
    headers: {
      ...StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier).headers,
      "Content-Type": "application/pdf"
    }
  });
};

// src/routes/api/webhook/payment/razorpay.verify.tsx
var razorpay_verify_exports = {};
__export(razorpay_verify_exports, {
  action: () => action3
});
var import_node9 = require("@remix-run/node");

// src/use-cases/payments/razorpay/receivePaymentEvent.ts
var import_node_service_api_request_handlers8 = require("@crystallize/node-service-api-request-handlers");
var receivePaymentEvent_default = async (cartWrapper, apiClient, payload, storeFrontConfig) => {
  var _a3, _b;
  return await (0, import_node_service_api_request_handlers8.handleRazorPayPaymentVerificationPayload)(payload, {
    orderCreationId: payload.orderCreationId,
    razorpayPaymentId: payload.razorpayPaymentId,
    razorpayOrderId: payload.razorpayOrderId,
    razorpaySignature: payload.razorpaySignature,
    key_secret: process.env.RAZORPAY_SECRET || ((_a3 = storeFrontConfig.configuration) == null ? void 0 : _a3.RAZORPAY_SECRET) || "",
    key_id: process.env.RAZORPAY_ID || ((_b = storeFrontConfig.configuration) == null ? void 0 : _b.RAZORPAY_ID) || "",
    handleEvent: async (eventName, event) => {
      let cartId = event.notes.cartId, cartWrapper2 = await cartWrapperRepository.find(cartId);
      if (!cartWrapper2)
        throw {
          message: `Cart '${cartId}' does not exist.`,
          status: 404
        };
      switch (eventName) {
        case "success":
          return await pushOrder_default(cartWrapperRepository, apiClient, cartWrapper2, {
            provider: "custom",
            custom: {
              properties: [
                { property: "razorpay_order_id", value: event.id },
                { property: "razorpay_receipt", value: event.receipt }
              ]
            }
          });
      }
    }
  });
};

// src/routes/api/webhook/payment/razorpay.verify.tsx
var action3 = async ({ request, params }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), body = await request.json(), cartId = body.cartId;
  if (!await cartWrapperRepository.find(cartId))
    throw {
      message: `Cart '${cartId}' does not exist.`,
      status: 404
    };
  let data = await receivePaymentEvent_default(cartWrapperRepository, storefront.apiClient, body, storefront.config);
  return (0, import_node9.json)(data);
};

// src/routes/$langstore/api/magicklink/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action4
});
var import_node10 = require("@remix-run/node");

// src/use-cases/user/sendMagickLink.ts
var import_node_service_api_request_handlers9 = require("@crystallize/node-service-api-request-handlers"), import_mjml = __toESM(require("mjml"));
var sendMagickLink_default = async (context, storefrontConfig, payload, mailer) => {
  let confirmPath = buildLanguageMarketAwareLink(
    "/api/magicklink/confirm/:token",
    context.language,
    context.market
  );
  return await (0, import_node_service_api_request_handlers9.handleMagickLinkRegisterPayload)(
    validatePayload(payload, import_node_service_api_request_handlers9.magickLinkUserInfosPayload),
    {
      mailer,
      jwtSecret: `${process.env.JWT_SECRET}`,
      confirmLinkUrl: `${context.baseUrl}${confirmPath}` + (context.callbackPath !== "" ? `?callbackPath=${context.callbackPath}` : ""),
      subject: `[Crystallize - ${storefrontConfig.identifier}] - Magic link login`,
      from: "hello@crystallize.com",
      buildHtml: (request, link) => (0, import_mjml.default)(
        `<mjml>
                        <mj-body>
                        <mj-section>
                            <mj-column>
                            <mj-text>Hi there ${request.email}! Simply follow the link below to login.</mj-text>
                            <mj-button href="${link}" align="left">Click here to login</mj-button>
                            </mj-column>
                        </mj-section>
                        </mj-body>
                    </mjml>`
      ).html,
      host: context.host
    }
  );
};

// src/routes/$langstore/api/magicklink/register.tsx
var action4 = async ({ request, params }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), mailer = createMailer(`${process.env.MAILER_DSN}`), body = await request.json(), data = await sendMagickLink_default(requestContext, storefront.config, body, mailer);
  return (0, import_node10.json)(data);
};

// src/routes/$langstore/order/invoice.$id[.]pdf.tsx
var invoice_id_pdf_exports = {};
__export(invoice_id_pdf_exports, {
  loader: () => loader6
});
var import_node11 = require("@remix-run/node"), import_renderer6 = __toESM(require("@react-pdf/renderer"));

// src/ui/components/pdf/order-invoice.tsx
var import_renderer5 = require("@react-pdf/renderer"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), styles2 = import_renderer5.StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  tablePage: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  image: {
    height: "70px",
    width: "70px"
  },
  title: {
    marginBottom: 15,
    fontWeight: "bold",
    color: "#434343",
    fontSize: 20
  },
  productDescription: {
    color: "#373567",
    width: "60%",
    fontSize: 16,
    textAlign: "center",
    lineHeight: "140%"
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 12
  },
  table: {
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingTop: 80
  },
  tableRow: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#434343",
    borderBottomWidth: 1,
    borderBottomColor: "#434343"
  },
  tableCell: {
    flexDirection: "row"
  },
  tableCellImage: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  tableCellName: {
    color: "#434343",
    fontSize: 12,
    minWidth: "35%",
    paddingTop: 15,
    paddingBottom: 15
  },
  tableHeader: {
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 10
  },
  tableHeaderName: {
    fontSize: 12,
    color: "#434343"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "80px",
    paddingTop: 10
  },
  address: {
    textAlign: "right",
    fontSize: 12,
    color: "#434343"
  },
  lineContainer: {
    borderBottom: "1px solid black"
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    width: "50%",
    paddingBottom: 10
  },
  infoFields: {
    color: "#7D7D7D",
    fontWeight: "bold"
  },
  infoDetails: {
    color: "#434343"
  },
  totals: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 20,
    fontWeight: "bold",
    paddingRight: 30
  },
  priceInfo: {
    width: "200px"
  }
}), Invoice = (data) => {
  var _a3, _b;
  let order = data.data, creationDate = new Date(order.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: order.total.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Page, { style: styles2.page, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.lineContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { style: styles2.title, children: "Receipt" }, void 0, !1, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 146,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 145,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.lineContainer, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.infoContainer, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.infoFields, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: "Order Number:" }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 151,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: "Date of Issue:" }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 152,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: "Due Date:" }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 153,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: "Email:" }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 154,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/order-invoice.tsx",
        lineNumber: 150,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.infoDetails, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: order.id }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 157,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: creationDate }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 158,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: creationDate }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 159,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: (_a3 = order == null ? void 0 : order.customer) == null ? void 0 : _a3.identifier }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 160,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/order-invoice.tsx",
        lineNumber: 156,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 149,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 148,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.table, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.tableHeader, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_renderer5.Text,
          {
            style: {
              ...styles2.tableHeaderName,
              minWidth: "40%"
            },
            children: "Name"
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/pdf/order-invoice.tsx",
            lineNumber: 166,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { style: { ...styles2.tableHeaderName, width: "38%" }, children: "Quantity" }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 175,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_renderer5.Text,
          {
            style: {
              ...styles2.tableHeaderName,
              paddingLeft: "5%"
            },
            children: "Price"
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/pdf/order-invoice.tsx",
            lineNumber: 177,
            columnNumber: 25
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/order-invoice.tsx",
        lineNumber: 165,
        columnNumber: 21
      }, this),
      (_b = order == null ? void 0 : order.cart) == null ? void 0 : _b.map((item, index) => {
        var _a4;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_renderer5.View,
          {
            style: {
              ...styles2.tableRow,
              backgroundColor: `${index % 2 ? "transparent" : "#fff"}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { style: { width: "40%" }, children: item == null ? void 0 : item.name }, void 0, !1, {
                fileName: "src/ui/components/pdf/order-invoice.tsx",
                lineNumber: 194,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { style: { width: "40%" }, children: item == null ? void 0 : item.quantity }, void 0, !1, {
                fileName: "src/ui/components/pdf/order-invoice.tsx",
                lineNumber: 196,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                import_renderer5.Text,
                {
                  style: {
                    marginTop: 0,
                    padding: 5,
                    marginLeft: "3%"
                  },
                  children: formatter.format((_a4 = item.price) == null ? void 0 : _a4.gross)
                },
                void 0,
                !1,
                {
                  fileName: "src/ui/components/pdf/order-invoice.tsx",
                  lineNumber: 198,
                  columnNumber: 29
                },
                this
              )
            ]
          },
          index,
          !0,
          {
            fileName: "src/ui/components/pdf/order-invoice.tsx",
            lineNumber: 187,
            columnNumber: 25
          },
          this
        );
      })
    ] }, void 0, !0, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 164,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.totals, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { style: styles2.priceInfo, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: [
          "Tax (",
          order.total.tax.percent,
          "%)"
        ] }, void 0, !0, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 213,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { style: { marginTop: 5 }, children: "Total:" }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 214,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/order-invoice.tsx",
        lineNumber: 212,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.View, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { children: formatter.format(order.total.gross - order.total.net) }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 217,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { style: { marginTop: 5 }, children: formatter.format(order.total.gross) }, void 0, !1, {
          fileName: "src/ui/components/pdf/order-invoice.tsx",
          lineNumber: 218,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/pdf/order-invoice.tsx",
        lineNumber: 216,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 211,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 210,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_renderer5.Text, { style: { marginTop: 200, textAlign: "center" }, children: "Thank you for your purchase!" }, void 0, !1, {
      fileName: "src/ui/components/pdf/order-invoice.tsx",
      lineNumber: 222,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/pdf/order-invoice.tsx",
    lineNumber: 144,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/pdf/order-invoice.tsx",
    lineNumber: 143,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/order/invoice.$id[.]pdf.tsx
var import_js_api_client7 = require("@crystallize/js-api-client");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), loader6 = async ({ context, params, request }) => {
  let requestContext = getContext(request), { secret } = await getStoreFront(requestContext.host), response = await (0, import_js_api_client7.createOrderFetcher)(secret.apiClient).byId(`${params.id}`), pdf = await import_renderer6.default.renderToStream(/* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Invoice, { data: response }, void 0, !1, {
    fileName: "src/routes/$langstore/order/invoice.$id[.]pdf.tsx",
    lineNumber: 12,
    columnNumber: 45
  }, this));
  return new import_node11.Response(pdf, {
    headers: {
      "Content-Type": "application/pdf"
    }
  });
};

// src/routes/api/webhook/payment/klarna.$cartId.tsx
var klarna_cartId_exports = {};
__export(klarna_cartId_exports, {
  action: () => action5
});
var import_node12 = require("@remix-run/node");

// src/use-cases/payments/klarna/receivePaymentEvent.ts
var import_node_service_api_request_handlers10 = require("@crystallize/node-service-api-request-handlers");
var receivePaymentEvent_default2 = async (cartWrapperRepository2, apiClient, cartId, payload, storeFrontConfig) => {
  var _a3, _b;
  let cartWrapper = await cartWrapperRepository2.find(cartId);
  if (!cartWrapper)
    throw {
      message: `Cart '${cartId}' does not exist.`,
      status: 404
    };
  let currency = cartWrapper.cart.total.currency.toUpperCase(), { locale, origin } = getKlarnaVariables(currency), data = await (0, import_node_service_api_request_handlers10.handleKlarnaPaymentWebhookRequestPayload)(payload, {
    cartId,
    origin,
    country: locale.country,
    locale: locale.locale,
    credentials: {
      username: process.env.KLARNA_USERNAME ?? ((_a3 = storeFrontConfig.configuration) == null ? void 0 : _a3.KLARNA_USERNAME) ?? "",
      password: process.env.KLARNA_PASSWORD ?? ((_b = storeFrontConfig.configuration) == null ? void 0 : _b.KLARNA_PASSWORD) ?? ""
    },
    fetchCart: async () => cartWrapper.cart,
    handleEvent: async (orderResponse) => await pushOrder_default(cartWrapperRepository2, apiClient, cartWrapper, {
      provider: "klarna",
      klarna: {
        orderId: orderResponse.order_id,
        merchantReference1: cartId
      }
    }),
    confirmPaymentArguments: (cart) => ({
      ...getKlarnaOrderInfos(cart)
    })
  });
};

// src/routes/api/webhook/payment/klarna.$cartId.tsx
var action5 = async ({ request, params }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), cartId = params.cartId, body = await request.json(), data = await receivePaymentEvent_default2(
    cartWrapperRepository,
    storefront.apiClient,
    cartId,
    body,
    storefront.config
  );
  return (0, import_node12.json)(data);
};

// src/routes/$langstore/shop/$folder.$product.tsx
var folder_product_exports = {};
__export(folder_product_exports, {
  default: () => folder_product_default,
  headers: () => headers2,
  loader: () => loader7,
  meta: () => meta2
});
var import_node13 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// src/use-cases/MicrodataBuilder.ts
var buildMetas = (data) => {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K;
  let item = (data == null ? void 0 : data.product) || (data == null ? void 0 : data.folder) || (data == null ? void 0 : data.document) || (data == null ? void 0 : data.data) || data, metaData = ((_c = (_b = (_a3 = item == null ? void 0 : item.meta) == null ? void 0 : _a3.content) == null ? void 0 : _b.chunks) == null ? void 0 : _c[0]) || ((_f = (_e = (_d = item == null ? void 0 : item.meta) == null ? void 0 : _d.content) == null ? void 0 : _e.chunks) == null ? void 0 : _f[0]) || ((_i = (_h = (_g = item == null ? void 0 : item.meta) == null ? void 0 : _g.content) == null ? void 0 : _h.chunks) == null ? void 0 : _i[0]), title = (item == null ? void 0 : item.title) || ((_k = (_j = metaData == null ? void 0 : metaData.find((meta9) => meta9.id === "title")) == null ? void 0 : _j.content) == null ? void 0 : _k.text), description = (item == null ? void 0 : item.description) || ((_n = (_m = (_l = metaData == null ? void 0 : metaData.find((meta9) => meta9.id === "description")) == null ? void 0 : _l.content) == null ? void 0 : _m.plainText) == null ? void 0 : _n[0]), image = ((_p = (_o = item == null ? void 0 : item.defaultVariant) == null ? void 0 : _o.images[0]) == null ? void 0 : _p.url) || ((_s = (_r = (_q = metaData == null ? void 0 : metaData.find((meta9) => meta9.id === "image")) == null ? void 0 : _q.content) == null ? void 0 : _r.firstImage) == null ? void 0 : _s.url), altDescription = (_w = (_v = (_u = (_t = item == null ? void 0 : item.components) == null ? void 0 : _t.find((comp) => comp.id === "description")) == null ? void 0 : _u.content) == null ? void 0 : _v.plainText) == null ? void 0 : _w[0], altImage = ((_A = (_z = (_y = (_x = item == null ? void 0 : item.variants) == null ? void 0 : _x[0]) == null ? void 0 : _y.images) == null ? void 0 : _z[0]) == null ? void 0 : _A.url) || ((_H = (_G = (_F = (_E = (_D = (_C = (_B = item == null ? void 0 : item.components) == null ? void 0 : _B.find((comp) => comp.id === "shoppable-image")) == null ? void 0 : _C.content) == null ? void 0 : _D.images) == null ? void 0 : _E[0]) == null ? void 0 : _F.variants) == null ? void 0 : _G[0]) == null ? void 0 : _H.url), seo = {
    title: ((_I = item == null ? void 0 : item.seo) == null ? void 0 : _I.title) || title || (item == null ? void 0 : item.name),
    description: ((_J = item == null ? void 0 : item.seo) == null ? void 0 : _J.description) || (description == null ? void 0 : description.plainText) || description || altDescription,
    image: ((_K = item == null ? void 0 : item.seo) == null ? void 0 : _K.image) || image || altImage
  };
  return {
    title: seo.title,
    "og:title": seo.title,
    description: seo.description,
    "og:description": seo.description,
    "og:image": seo.image,
    "twitter:image": seo.image,
    "twitter:card": "summary_large_image",
    "twitter:description": seo.description
  };
};

// src/ui/pages/Product.tsx
var import_react10 = require("react");

// src/ui/components/add-to-cart-button.tsx
var import_react8 = require("react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), AddToCartBtn = ({ pack, label = "addToCart" }) => {
  let [showTada, setShowTada] = (0, import_react8.useState)(!1), { path, dispatch: contextDispatch, _t } = useAppContext(), { add } = useLocalCart(), handleClick = () => {
    setShowTada(!0), contextDispatch.addItemsToCart(pack.map((packitem) => packitem.variant)), pack.forEach((packitem) => {
      add(
        {
          name: packitem.variant.name,
          sku: packitem.variant.sku,
          price: packitem.variant.priceVariants.default.value
        },
        packitem.quantity
      );
    }), setTimeout(() => {
      setShowTada(!1);
    }, 1500);
  }, defaultStock = pack.reduce((memo, packitem) => {
    var _a3, _b;
    let defaultStockLocation = (_b = (_a3 = packitem.variant) == null ? void 0 : _a3.stockLocations) == null ? void 0 : _b.default;
    return memo + ((defaultStockLocation == null ? void 0 : defaultStockLocation.stock) || 0);
  }, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "button",
    {
      className: "bg-[#000] border px-10 py-3 relative overflow-hidden h-[50px] rounded-md text-[#fff] w-[200px] font-bold hover:bg-black-100 disabled:opacity-50 disabled:cursor-not-allowed",
      onClick: () => {
        handleClick();
      },
      disabled: defaultStock < 1,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Link_default, { to: path("/checkout"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "span",
        {
          className: `w-[200] transition-all left-0 top-0 h-full w-full flex items-center justify-center absolute
                    ${showTada ? "scale-0" : "scale-100"}`,
          children: "inquire"
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/add-to-cart-button.tsx",
          lineNumber: 57,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "src/ui/components/add-to-cart-button.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/add-to-cart-button.tsx",
      lineNumber: 49,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/components/add-to-cart-button.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this);
};

// src/ui/components/image-gallery.tsx
var import_image = require("@crystallize/reactjs-components/dist/image"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), ImageGallery = ({ images }) => {
  let galleryHasOddNubmer = (images == null ? void 0 : images.length) % 2 || !1;
  return !images || images.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "frntr-img-gallery ", children: images.map((img, i) => {
    if (img.variants.length === 0)
      return null;
    let isPortraitImg = img.variants[0].height > img.variants[0].width;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: `${isPortraitImg ? "portrait" : "landscape"} frntr-img`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_image.Image,
      {
        ...img,
        sizes: `${i < 1 || i === (images == null ? void 0 : images.length) && !galleryHasOddNubmer ? "50vw" : "33vw"}`,
        loading: "lazy"
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/image-gallery.tsx",
        lineNumber: 16,
        columnNumber: 25
      },
      this
    ) }, i, !1, {
      fileName: "src/ui/components/image-gallery.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this);
  }) }, void 0, !1, {
    fileName: "src/ui/components/image-gallery.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

// src/ui/components/item/product.tsx
var import_reactjs_components4 = require("@crystallize/reactjs-components");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), Product = ({ item }) => {
  let { state, path } = useAppContext(), { percent: discountPercentage } = displayPriceFor(
    item.variant,
    {
      default: "default",
      discounted: "sales"
    },
    state.currency.code
  ), attributesKeys = Object.keys(item.variant.attributes ?? {});
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid grid-rows-[1fr_minmax(25px_50px)_40px] place-items-stretch w-full min-h-full justify-stretch items-stretch relative product-link",
      children: [
        discountPercentage > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute top-3 right-2 bg-green2 items-center flex z-[20] justify-center rounded-full w-[45px] h-[45px] text-[#fff] text-sm", children: [
          "-",
          discountPercentage,
          "%"
        ] }, void 0, !0, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "img-container img-contain img-border border-solid border border-[#dfdfdf] aspect-[3/4] bg-[#fff] rounded-md h-full overflow-hidden grow-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_reactjs_components4.Image, { ...item.variant.images[0], sizes: "300px", loading: "lazy", fallbackAlt: item.name }, void 0, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "pl-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-md line-clamp-2 overflow-hidden", children: item.name }, void 0, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        attributesKeys.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex gap-3 my-2", children: attributesKeys.map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-xs bg-grey py-1 px-3 rounded", children: item.variant.attributes[key] }, key, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 40,
          columnNumber: 25
        }, this)) }, void 0, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "pl-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Price2, { variant: item.variant, size: "small" }, void 0, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/item/product.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/item/product.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}, ProductFromCell = ({ item }) => {
  let productVariant = DataMapper().API.Object.APIProductVariantToProductVariant(item.defaultVariant);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    Product,
    {
      item: {
        id: item.id,
        name: item.name,
        path: item.path,
        variant: productVariant,
        topics: []
      }
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/item/product.tsx",
      lineNumber: 58,
      columnNumber: 9
    },
    this
  );
};

// src/assets/arrow.svg
var arrow_default = "/build/_assets/arrow-VBAUMBND.svg";

// src/ui/components/product/dimensions-table.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), DimensionsTable = ({ dimensions }) => {
  let { _t } = useAppContext();
  return Object.keys(dimensions).length === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("details", { className: "border-t border-[#dfdfdf] hover:bg-[#fefefe] frntr-accordination", open: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("summary", { className: "font-bold text-2xl py-10 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { children: _t("dimensions") }, void 0, !1, {
        fileName: "src/ui/components/product/dimensions-table.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("img", { src: `${arrow_default}`, alt: "Arrow", className: "frntr-accordination-arrow w-[20px] h-[20px] mr-4" }, void 0, !1, {
        fileName: "src/ui/components/product/dimensions-table.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/product/dimensions-table.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "rounded-md h-auto -mt-4 mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { children: Object.keys(dimensions).map((key, index) => {
      let dimension = dimensions[key];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex justify-between py-4 px-2 odd:bg-[#efefef]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "font-semibold text-md", children: dimension.title }, void 0, !1, {
          fileName: "src/ui/components/product/dimensions-table.tsx",
          lineNumber: 23,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "text-md", children: [
          dimension.value,
          dimension.unit
        ] }, void 0, !0, {
          fileName: "src/ui/components/product/dimensions-table.tsx",
          lineNumber: 24,
          columnNumber: 33
        }, this)
      ] }, `${index}-${key}`, !0, {
        fileName: "src/ui/components/product/dimensions-table.tsx",
        lineNumber: 22,
        columnNumber: 29
      }, this);
    }) }, void 0, !1, {
      fileName: "src/ui/components/product/dimensions-table.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/product/dimensions-table.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/product/dimensions-table.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};

// src/ui/components/crystallize-components/paragraph-collection.tsx
var import_content_transformer2 = require("@crystallize/reactjs-components/dist/content-transformer");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), ParagraphCollection = ({ paragraphs }) => paragraphs.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: paragraphs.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-10 md:mt-10 lg:mx-10 mb-20 pt-5 max-w-[800px] frntr-paragraph mx-2 w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "my-10 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "font-bold mt-10 text-3xl", children: paragraph.title }, void 0, !1, {
      fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
      lineNumber: 15,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "frntr-content-transformer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_content_transformer2.ContentTransformer, { json: paragraph.body.json }, void 0, !1, {
      fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
      lineNumber: 17,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
      lineNumber: 16,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
    lineNumber: 14,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
    lineNumber: 13,
    columnNumber: 21
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ImageGallery, { images: paragraph == null ? void 0 : paragraph.images }, void 0, !1, {
    fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
    lineNumber: 21,
    columnNumber: 21
  }, this)
] }, index, !0, {
  fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
  lineNumber: 12,
  columnNumber: 17
}, this)) }, void 0, !1, {
  fileName: "src/ui/components/crystallize-components/paragraph-collection.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this);

// src/ui/components/crystallize-components/properties-table.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), PropertiesTable = ({ table }) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("details", { className: "border-t border-[#dfdfdf] mt-20 hover:bg-[#fefefe] frntr-accordination", open: !0, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("summary", { className: "font-bold text-2xl py-10 flex items-center justify-between w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { children: table == null ? void 0 : table.title }, void 0, !1, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 8,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("img", { src: `${arrow_default}`, alt: "Arrow", className: "frntr-accordination-arrow w-[20px] h-[20px] mr-4" }, void 0, !1, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 9,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/crystallize-components/properties-table.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this),
  table.properties && /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "rounded-md h-auto -mt-4 mb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: Object.keys(table.properties).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex justify-between py-4 px-2 odd:bg-[#efefef]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "font-semibold text-md", children: key }, void 0, !1, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 16,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "text-md", children: table.properties[key] }, void 0, !1, {
      fileName: "src/ui/components/crystallize-components/properties-table.tsx",
      lineNumber: 17,
      columnNumber: 33
    }, this)
  ] }, key, !0, {
    fileName: "src/ui/components/crystallize-components/properties-table.tsx",
    lineNumber: 15,
    columnNumber: 29
  }, this)) }, void 0, !1, {
    fileName: "src/ui/components/crystallize-components/properties-table.tsx",
    lineNumber: 13,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/crystallize-components/properties-table.tsx",
    lineNumber: 12,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "src/ui/components/crystallize-components/properties-table.tsx",
  lineNumber: 6,
  columnNumber: 9
}, this);

// src/assets/documentDownloadIcon.svg
var documentDownloadIcon_default = "/build/_assets/documentDownloadIcon-UENN33PL.svg";

// src/ui/components/product/files.tsx
var import_content_transformer3 = require("@crystallize/reactjs-components/dist/content-transformer");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), Files = ({ files }) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("details", { className: "border-t border-[#dfdfdf] hover:bg-[#fefefe] frntr-accordination min-h-fit", open: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("summary", { className: "font-bold text-2xl py-10 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { children: _t("specifications") }, void 0, !1, {
        fileName: "src/ui/components/product/files.tsx",
        lineNumber: 12,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("img", { src: `${arrow_default}`, alt: "Arrow", className: "frntr-accordination-arrow w-[20px] h-[20px] mr-4" }, void 0, !1, {
        fileName: "src/ui/components/product/files.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/product/files.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "grid gap-5 grid-col-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 h-auto -mt-4 mb-10", children: files.map((file, index) => {
      var _a3;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "div",
        {
          className: "bg-[#efefef] p-6 min-h-[300px] flex h-full flex-col justify-between w-full rounded-md",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mt-2 gap-2 mb-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                "img",
                {
                  className: "w-[25px] h-[25px] mb-2",
                  src: `${documentDownloadIcon_default}`,
                  width: "40",
                  height: "40",
                  alt: "User icon"
                },
                void 0,
                !1,
                {
                  fileName: "src/ui/components/product/files.tsx",
                  lineNumber: 25,
                  columnNumber: 37
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "font-semibold text-md", children: file.title }, void 0, !1, {
                fileName: "src/ui/components/product/files.tsx",
                lineNumber: 32,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-sm text-elipsis", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_content_transformer3.ContentTransformer, { json: (_a3 = file.description) == null ? void 0 : _a3.json }, void 0, !1, {
                fileName: "src/ui/components/product/files.tsx",
                lineNumber: 34,
                columnNumber: 41
              }, this) }, void 0, !1, {
                fileName: "src/ui/components/product/files.tsx",
                lineNumber: 33,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "src/ui/components/product/files.tsx",
              lineNumber: 24,
              columnNumber: 33
            }, this),
            files.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex text-sm flex-col", children: file.files.map((file2) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("a", { className: "mt-1 underline truncate", href: file2.url, children: [
              "\u279E ",
              file2.title
            ] }, file2.url, !0, {
              fileName: "src/ui/components/product/files.tsx",
              lineNumber: 41,
              columnNumber: 45
            }, this)) }, void 0, !1, {
              fileName: "src/ui/components/product/files.tsx",
              lineNumber: 39,
              columnNumber: 37
            }, this)
          ]
        },
        index,
        !0,
        {
          fileName: "src/ui/components/product/files.tsx",
          lineNumber: 20,
          columnNumber: 29
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "src/ui/components/product/files.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/product/files.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

// src/ui/components/product/product-body.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), ProductBody = ({ story, dimensions, propertiesTable, downloads }) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: [
  story && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(ParagraphCollection, { paragraphs: story }, void 0, !1, {
    fileName: "src/ui/components/product/product-body.tsx",
    lineNumber: 18,
    columnNumber: 23
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "mt-20", children: [
    propertiesTable && propertiesTable.map((table, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(PropertiesTable, { table }, index, !1, {
      fileName: "src/ui/components/product/product-body.tsx",
      lineNumber: 22,
      columnNumber: 25
    }, this)),
    dimensions && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(DimensionsTable, { dimensions }, void 0, !1, {
      fileName: "src/ui/components/product/product-body.tsx",
      lineNumber: 24,
      columnNumber: 32
    }, this),
    downloads && downloads.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Files, { files: downloads }, void 0, !1, {
      fileName: "src/ui/components/product/product-body.tsx",
      lineNumber: 25,
      columnNumber: 55
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/product/product-body.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "src/ui/components/product/product-body.tsx",
  lineNumber: 17,
  columnNumber: 9
}, this);

// src/assets/stockIcon.svg
var stockIcon_default = "/build/_assets/stockIcon-UYUXXPN5.svg";

// src/ui/components/product/stock-location.tsx
var import_react9 = require("react");
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), StockIndicators = ({ location: location2 }) => {
  let { _t } = useAppContext(), stock = location2.stock || 0;
  return stock < 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("img", { className: "w-[18px] h-[18px]", src: `${stockIcon_default}`, width: "20", height: "20", alt: "User icon" }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 13,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "font-semibold", children: location2.name }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-[#F42C04]" }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 15,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 12,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "font-medium text-black", children: _t("stock.outOfStock") }, void 0, !1, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 17,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/product/stock-location.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this) : stock > 0 && stock < 21 ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("img", { className: "w-[18px] h-[18px]", src: `${stockIcon_default}`, width: "20", height: "20", alt: "User icon" }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 25,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "font-semibold", children: location2.name }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-[#FFC60A]" }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "font-medium text-black", children: _t("stock.lowStock") }, void 0, !1, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/product/stock-location.tsx",
    lineNumber: 23,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_jsx_dev_runtime27.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("img", { className: "w-[18px] h-[18px]", src: `${stockIcon_default}`, width: "20", height: "20", alt: "User icon" }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "font-semibold", children: location2.name }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "w-2.5 h-2.5 rounded-full bg-green2" }, void 0, !1, {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "font-medium text-green2 text-right", children: _t("stock.inStock") }, void 0, !1, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/product/stock-location.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
}, StockLocations = ({ locations }) => {
  let [locationCountToShow, setLocationCountToShow] = (0, import_react9.useState)(1), { _t } = useAppContext();
  return locations.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { children: [
    locations.slice(0, locationCountToShow).map((location2) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "flex pt-2 items-center gap-2 justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(StockIndicators, { location: location2 }, void 0, !1, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 53,
      columnNumber: 21
    }, this) }, location2.identifier, !1, {
      fileName: "src/ui/components/product/stock-location.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this)),
    locations.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      "button",
      {
        onClick: () => locationCountToShow == locations.length ? setLocationCountToShow(1) : setLocationCountToShow(locations.length),
        className: "text-[#000] font-regular text-xs ml-7 mt-1 opacity-[0.6] hover:opacity-[1] underline",
        children: locationCountToShow == locations.length ? _t("stock.showLessAvailability") : _t("stock.showMoreAvailability", { count: locations.length - 1 })
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/product/stock-location.tsx",
        lineNumber: 57,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/ui/components/product/stock-location.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
};

// src/ui/components/product/topic-labels.tsx
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime"), TopicLabels = ({ topics }) => {
  let { path } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: topics.map((topic) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Link_default, { to: path(topic.path), children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "rounded-md bg-[#efefef] border border-[transparent] hover:border-[#000] px-3 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("p", { className: "text-xs font-bold", children: topic.name }, void 0, !1, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 12,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 11,
    columnNumber: 21
  }, this) }, topic.name, !1, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this)) }, void 0, !1, {
    fileName: "src/ui/components/product/topic-labels.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
};

// src/ui/components/variant-selector.tsx
var import_image2 = require("@crystallize/reactjs-components/dist/image"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function reduceAttributes(variants) {
  return variants.reduce((acc, variant) => (Object.keys(variant.attributes).forEach((key) => {
    let value = variant.attributes[key];
    acc[key] || (acc[key] = []), acc[key].includes(value) || acc[key].push(value);
  }), acc), {});
}
function findMostSuitableVariant(variants, attributes) {
  return variants.find((variant) => Object.keys(attributes).every((key) => variant.attributes[key] === attributes[key]));
}
var VariantSelector = ({ variants, selectedVariant, onVariantChange, renderingType = "default" }) => {
  let attributes = reduceAttributes(variants);
  function onAttributeSelect(key, value) {
    let variant = findMostSuitableVariant(variants, {
      ...selectedVariant.attributes,
      [key]: value
    });
    variant || (variant = variants.find(
      (variant2) => Object.keys(variant2.attributes).some((vkey) => vkey === key && variant2.attributes[vkey] === value)
    )), variant || (variant = variants.find((variant2) => Object.keys(variant2.attributes).some((vkey) => vkey === key))), onVariantChange(variant);
  }
  return {
    default: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { children: Object.keys(attributes).map((key) => {
      let values = attributes[key];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "border-[#dfdfdf]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-2 text-sm  font-semibold", children: key }, void 0, !1, {
          fileName: "src/ui/components/variant-selector.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "flex mb-5 flex-nowrap md:flex-wrap gap-2 overflow-x-scroll py-2 px-1", children: values.map((value) => {
          var _a3;
          let mostSuitableVariant = findMostSuitableVariant(variants, {
            ...selectedVariant.attributes,
            [key]: value
          });
          return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "button",
            {
              onClick: (e) => onAttributeSelect(key, value),
              type: "button",
              className: "w-2/6 md:w-1/6 md:py-2 py-4 rounded-lg text-text flex flex-col items-center text-xs font-medium overflow-hidden variant-option",
              style: {
                opacity: mostSuitableVariant ? 1 : 0.2,
                border: value === selectedVariant.attributes[key] ? "1px solid #000" : "1px solid #efefef"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "img-container p-3 w-[80px] img-contain", children: ((_a3 = mostSuitableVariant == null ? void 0 : mostSuitableVariant.images) == null ? void 0 : _a3[0]) && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                  import_image2.Image,
                  {
                    ...mostSuitableVariant.images[0],
                    sizes: "100px",
                    fallbackAlt: mostSuitableVariant.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/ui/components/variant-selector.tsx",
                    lineNumber: 83,
                    columnNumber: 53
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "src/ui/components/variant-selector.tsx",
                  lineNumber: 81,
                  columnNumber: 45
                }, this),
                value
              ]
            },
            value,
            !0,
            {
              fileName: "src/ui/components/variant-selector.tsx",
              lineNumber: 68,
              columnNumber: 41
            },
            this
          );
        }) }, void 0, !1, {
          fileName: "src/ui/components/variant-selector.tsx",
          lineNumber: 61,
          columnNumber: 29
        }, this)
      ] }, key, !0, {
        fileName: "src/ui/components/variant-selector.tsx",
        lineNumber: 59,
        columnNumber: 25
      }, this);
    }) }, void 0, !1, {
      fileName: "src/ui/components/variant-selector.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    dropdown: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: Object.keys(attributes).map((key) => {
      let values = attributes[key];
      return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("label", { className: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
        "select",
        {
          onChange: (e) => onAttributeSelect(key, e.target.value),
          className: "py-2 min-w-full w-full px-4 bg-[#efefef] grow-0  text-sm rounded-md min-w-[150px] ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("optgroup", { label: key, children: values.map((value) => {
            let mostSuitableVariant = findMostSuitableVariant(variants, {
              ...selectedVariant.attributes,
              [key]: value
            });
            return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("option", { disabled: !mostSuitableVariant, value, children: value }, value, !1, {
              fileName: "src/ui/components/variant-selector.tsx",
              lineNumber: 117,
              columnNumber: 45
            }, this);
          }) }, void 0, !1, {
            fileName: "src/ui/components/variant-selector.tsx",
            lineNumber: 110,
            columnNumber: 33
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/variant-selector.tsx",
          lineNumber: 106,
          columnNumber: 29
        },
        this
      ) }, key, !1, {
        fileName: "src/ui/components/variant-selector.tsx",
        lineNumber: 105,
        columnNumber: 25
      }, this);
    }) }, void 0, !1, {
      fileName: "src/ui/components/variant-selector.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  }[renderingType] || null;
};

// src/use-cases/SchemaMarkupBuilder.ts
var buildSchemaMarkup = (product) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  name: product.seo.title,
  image: product.seo.image,
  description: product.seo.description,
  sku: product.defaultVariant.sku
}), buildSchemaMarkupForBlogPost = (data, url) => {
  let title = data.seo.title, description = data.seo.description, altDescription = data.seo.description;
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

// src/ui/pages/Product.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), Product_default = ({
  data
}) => {
  let { _t } = useAppContext(), { product, preSelectedSku } = data;
  console.log(data);
  let primaryVariant = product.variants.find((variant) => variant.sku === preSelectedSku) ?? product.defaultVariant, [selectedVariant, setSelectedVariant] = (0, import_react10.useState)(primaryVariant), description = selectedVariant.description || product.description;
  return console.log(product), (0, import_react10.useEffect)(() => {
    setSelectedVariant(primaryVariant);
  }, [product]), /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(buildSchemaMarkup(product))
        }
      },
      void 0,
      !1,
      {
        fileName: "src/ui/pages/Product.tsx",
        lineNumber: 37,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "pl-6 md:px-6 mx-auto xl:container full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex gap-20 lg:flex-row flex-col-reverse ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "lg:w-4/6 w-full pr-6 md:pr-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "img-container overflow-hidden rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ImageGallery, { images: selectedVariant.images }, void 0, !1, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 47,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 46,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            ProductBody,
            {
              story: product == null ? void 0 : product.story,
              propertiesTable: product == null ? void 0 : product.specifications,
              dimensions: product == null ? void 0 : product.dimensions,
              downloads: product == null ? void 0 : product.downloads
            },
            void 0,
            !1,
            {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 49,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "lg:w-2/6 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-col gap-2 sticky top-16 pb-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mb-2", children: product.topics && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TopicLabels, { topics: product.topics }, void 0, !1, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 58,
            columnNumber: 70
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 58,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "pr-6 md:pr-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h1", { className: "font-bold text-4xl mb-2", children: product.title }, void 0, !1, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 60,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "text-md font-normal", children: description }, void 0, !1, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 61,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 59,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            VariantSelector,
            {
              variants: product.variants,
              selectedVariant,
              onVariantChange: (variant) => {
                let url = new URL(window.location.href);
                url.searchParams.set("sku", variant.sku), window.history.pushState({}, "", url), setSelectedVariant(variant);
              },
              renderingType: "default"
            },
            void 0,
            !1,
            {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 63,
              columnNumber: 29
            },
            this
          ),
          selectedVariant && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex justify-between md:items-end sm:flex-row flex-col  sm:gap-1 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Price2, { variant: selectedVariant }, void 0, !1, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 76,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(AddToCartBtn, { pack: [{ variant: selectedVariant, quantity: 1 }] }, void 0, !1, {
              fileName: "src/ui/pages/Product.tsx",
              lineNumber: 77,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 75,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "bg-[#dfdfdf] h-[1px] mt-5" }, void 0, !1, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 80,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StockLocations, { locations: Object.values(selectedVariant.stockLocations) }, void 0, !1, {
            fileName: "src/ui/pages/Product.tsx",
            lineNumber: 81,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 57,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/Product.tsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      product.relatedItems && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-full border-t border-[#dfdfdf] pr-6 sm:pr-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "font-bold mt-20 mb-4 text-xl", children: _t("relatedProducts") }, void 0, !1, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 88,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "grid gap-5 grid-cols-2 grid md:grid-cols-4 lg:grid-cols-5 pb-5", children: product.relatedItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Product, { item }, `${item.path}-${index}`, !1, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 91,
          columnNumber: 33
        }, this)) }, void 0, !1, {
          fileName: "src/ui/pages/Product.tsx",
          lineNumber: 89,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/Product.tsx",
        lineNumber: 87,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Product.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Product.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/shop/$folder.$product.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), headers2 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, meta2 = ({ data }) => buildMetas(data.data), loader7 = async ({ request, params }) => {
  let requestContext = getContext(request), path = `/shop/${params.folder}/${params.product}`, { shared } = await getStoreFront(requestContext.host), data = await dataFetcherForShapePage_server_default("product", path, requestContext, params);
  return (0, import_node13.json)({ data }, StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier));
}, folder_product_default = () => {
  let { data } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Product_default, { data }, void 0, !1, {
    fileName: "src/routes/$langstore/shop/$folder.$product.tsx",
    lineNumber: 28,
    columnNumber: 12
  }, this);
};

// src/routes/api/webhook/order/stage/changed.tsx
var changed_exports = {};
__export(changed_exports, {
  action: () => action6
});
var import_node14 = require("@remix-run/node"), action6 = async ({ request }) => (0, import_node14.json)({
  message: "Order Pipleline Stage Change Webhook received",
  payload: await request.json()
});

// src/routes/$langstore/shop/$folder[.]pdf.tsx
var folder_pdf_exports = {};
__export(folder_pdf_exports, {
  loader: () => loader8
});
var import_node15 = require("@remix-run/node"), import_renderer8 = __toESM(require("@react-pdf/renderer"));

// src/ui/components/pdf/folder.tsx
var import_renderer7 = require("@react-pdf/renderer");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), Folder = ({ category, products }) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Document, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Page, { style: { ...styles.productPage, alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_renderer7.View,
    {
      style: {
        backgroundColor: "#000",
        borderRadius: 2,
        maxWidth: "50%",
        padding: 35
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { color: "#fff", marginBottom: 15 }, children: category.title }, void 0, !1, {
          fileName: "src/ui/components/pdf/folder.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { color: "#fff", fontSize: 12, lineHeight: 1.4 }, children: category.description }, void 0, !1, {
          fileName: "src/ui/components/pdf/folder.tsx",
          lineNumber: 21,
          columnNumber: 21
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/pdf/folder.tsx",
      lineNumber: 12,
      columnNumber: 17
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/components/pdf/folder.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Page, { style: { ...styles.productPage }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_renderer7.View,
    {
      style: {
        flexWrap: "wrap",
        paddingVertical: 20,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#dfdfdf",
        borderStyle: "solid"
      },
      children: products.map((product, index) => {
        var _a3;
        if (!product)
          return null;
        let variant = product.variant, name = variant.name, image = (_a3 = variant.images) == null ? void 0 : _a3[0].url, sku = variant.sku, defaultPriceCurrency = variant.priceVariants.default.currency, price = displayPriceFor(
          variant,
          {
            default: "default",
            discounted: "sales"
          },
          defaultPriceCurrency.code
        );
        return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          import_renderer7.View,
          {
            wrap: !1,
            style: {
              width: "100%",
              display: "flex",
              padding: 10,
              paddingHorizontal: 20,
              overflow: "hidden",
              flexDirection: "row",
              borderTopWidth: 1,
              borderColor: "#dfdfdf",
              borderStyle: "solid",
              backgroundColor: `${index % 2 ? "#f7f7f7" : "transparent"}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                import_renderer7.View,
                {
                  style: {
                    borderRadius: 4,
                    minWidth: "102px",
                    maxWidth: "102px",
                    height: "135px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: "#dfdfdf",
                    borderStyle: "solid"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                    import_renderer7.Image,
                    {
                      src: image,
                      style: {
                        borderRadius: 4,
                        minWidth: "100px",
                        maxWidth: "100px",
                        height: "125px",
                        objectFit: "contain"
                      }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "src/ui/components/pdf/folder.tsx",
                      lineNumber: 85,
                      columnNumber: 37
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "src/ui/components/pdf/folder.tsx",
                  lineNumber: 72,
                  columnNumber: 33
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                import_renderer7.View,
                {
                  style: {
                    marginLeft: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.View, { style: { width: "70%" }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { marginTop: 5, fontSize: 16, fontWeight: "bold" }, children: name }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 106,
                        columnNumber: 41
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { marginTop: 5, fontSize: 10 }, children: sku }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 107,
                        columnNumber: 41
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.View, { style: { flexDirection: "column", marginTop: 10 }, children: Object.keys(variant.attributes).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { fontSize: 10, marginTop: 5 }, children: [
                        key,
                        ": ",
                        variant.attributes[key]
                      ] }, `${sku}-${key}`, !0, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 110,
                        columnNumber: 49
                      }, this)) }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 108,
                        columnNumber: 41
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "src/ui/components/pdf/folder.tsx",
                      lineNumber: 105,
                      columnNumber: 37
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.View, { style: { marginTop: 5, width: "30%", textAlign: "right" }, children: price.discounted && price.discounted < price.default ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.View, { style: { marginRight: 15 }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { fontSize: 14, fontWeight: 600 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Price3, { currencyCode: price.currency.code, children: price.discounted }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 121,
                        columnNumber: 53
                      }, this) }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 120,
                        columnNumber: 49
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.View, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { fontSize: 10, textDecoration: "line-through" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Price3, { currencyCode: price.currency.code, children: price.default }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 125,
                        columnNumber: 57
                      }, this) }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 124,
                        columnNumber: 53
                      }, this) }, void 0, !1, {
                        fileName: "src/ui/components/pdf/folder.tsx",
                        lineNumber: 123,
                        columnNumber: 49
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "src/ui/components/pdf/folder.tsx",
                      lineNumber: 119,
                      columnNumber: 45
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_renderer7.Text, { style: { fontSize: 14, fontWeight: 600 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Price3, { currencyCode: price.currency.code, children: price.default }, void 0, !1, {
                      fileName: "src/ui/components/pdf/folder.tsx",
                      lineNumber: 133,
                      columnNumber: 49
                    }, this) }, void 0, !1, {
                      fileName: "src/ui/components/pdf/folder.tsx",
                      lineNumber: 132,
                      columnNumber: 45
                    }, this) }, void 0, !1, {
                      fileName: "src/ui/components/pdf/folder.tsx",
                      lineNumber: 117,
                      columnNumber: 37
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "src/ui/components/pdf/folder.tsx",
                  lineNumber: 97,
                  columnNumber: 33
                },
                this
              )
            ]
          },
          `${sku}`,
          !0,
          {
            fileName: "src/ui/components/pdf/folder.tsx",
            lineNumber: 55,
            columnNumber: 29
          },
          this
        );
      })
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/pdf/folder.tsx",
      lineNumber: 25,
      columnNumber: 17
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/components/pdf/folder.tsx",
    lineNumber: 24,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "src/ui/components/pdf/folder.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this);

// src/routes/$langstore/shop/$folder[.]pdf.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), loader8 = async ({ request, params }) => {
  let requestContext = getContext(request), path = `/shop/${params.folder}`, { shared } = await getStoreFront(requestContext.host), data = await dataFetcherForShapePage_server_default("category", path, requestContext, params), { products, category } = data, pdf = await import_renderer8.default.renderToStream(/* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Folder, { category, products }, void 0, !1, {
    fileName: "src/routes/$langstore/shop/$folder[.]pdf.tsx",
    lineNumber: 20,
    columnNumber: 47
  }, this));
  return new import_node15.Response(pdf, {
    headers: {
      ...StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier).headers,
      "Content-Type": "application/pdf"
    }
  });
};

// src/routes/api/webhook/payment/montonio.tsx
var montonio_exports = {};
__export(montonio_exports, {
  action: () => action7
});
var import_node16 = require("@remix-run/node");

// src/use-cases/payments/montonio/receivePaymentEvent.ts
var import_node_service_api_request_handlers11 = require("@crystallize/node-service-api-request-handlers");

// src/use-cases/payments/montonio/createShipment.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken")), createShipment_default = async (cartWrapper) => {
  var _a3, _b, _c;
  let pickupPoint = (_a3 = cartWrapper == null ? void 0 : cartWrapper.extra) == null ? void 0 : _a3.pickupPoint, payload = {
    access_key: `${process.env.MONTONIO_SHIPPING_ACCESS_KEY}`
  }, token = import_jsonwebtoken2.default.sign(payload, `${process.env.MONTONIO_SHIPPING_SECRET_KEY}`, {
    algorithm: "HS256",
    expiresIn: "1h"
  }), shipment = {
    merchant_reference: cartWrapper.cartId,
    sender_name: "Crystallize Boilerplate Store Front - Montonio Showcase",
    sender_phone_country: "372",
    sender_phone_number: "55512345",
    sender_street_address_1: "Kai 1, Tallinn",
    sender_locality: "Harjumaa",
    sender_postal_code: "10111",
    sender_country: "EE",
    shipping_first_name: ((_b = cartWrapper.customer) == null ? void 0 : _b.firstname) || "Unknown",
    shipping_last_name: ((_c = cartWrapper.customer) == null ? void 0 : _c.lastname) || "Unknown",
    shipping_phone_country: "372",
    shipping_phone_number: "55512345",
    shipping_country: "EE",
    currency: cartWrapper.cart.total.currency,
    total: cartWrapper.cart.total.gross,
    parcels: [
      {
        weight: 1
      }
    ]
  };
  return pickupPoint && (shipment = {
    ...shipment,
    pickup_point_uuid: pickupPoint.uuid,
    shipping_method: `${pickupPoint == null ? void 0 : pickupPoint.provider_name}_${pickupPoint == null ? void 0 : pickupPoint.type}s`
  }), await (await fetch(`https://${process.env.MONTONIO_SHIPPING_ORIGIN}/shipments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(shipment)
  })).json();
};

// src/use-cases/payments/montonio/fetchShipmentLabelUrl.ts
var import_jsonwebtoken3 = __toESM(require("jsonwebtoken")), fetchShipmentLabelUrl_default = async (cartWrapper) => {
  let payload = {
    access_key: `${process.env.MONTONIO_SHIPPING_ACCESS_KEY}`
  }, token = import_jsonwebtoken3.default.sign(payload, `${process.env.MONTONIO_SHIPPING_SECRET_KEY}`, {
    algorithm: "HS256",
    expiresIn: "1h"
  });
  return (await (await fetch(`https://${process.env.MONTONIO_SHIPPING_ORIGIN}/shipments/label-from-store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      merchant_references: [cartWrapper.cartId]
    })
  })).json()).url;
};

// src/use-cases/payments/montonio/receivePaymentEvent.ts
var receivePaymentEvent_default3 = async (cartWrapperRepository2, apiClient, token, storeFrontConfig) => {
  var _a3;
  return await (0, import_node_service_api_request_handlers11.handleMontonioPaymentUpdateWebhookRequestPayload)(
    {},
    {
      secret_key: process.env.MONTONIO_SECRET_KEY ?? ((_a3 = storeFrontConfig.configuration) == null ? void 0 : _a3.MONTONIO_SECRET_KEY) ?? "",
      token,
      handleEvent: async (event) => {
        let cartId = event.merchant_reference;
        switch (event.status) {
          case "finalized":
            let cartWrapper = await cartWrapperRepository2.find(cartId);
            if (!cartWrapper)
              throw {
                message: `Cart '${cartId}' does not exist.`,
                status: 404
              };
            let shipment = await createShipment_default(cartWrapper).catch(console.log), shipmentLabelUrl = await fetchShipmentLabelUrl_default(cartWrapper).catch(console.log), properties = [
              {
                property: "payment_method",
                value: "Montonio"
              },
              {
                property: "MontonioPaymentUuid",
                value: `${event.payment_uuid}`
              },
              {
                property: "MontonioPaymentMethod",
                value: `${event.payment_method_name}`
              },
              {
                property: "MontonioIBAN",
                value: `${event.customer_iban}`
              }
            ];
            return await pushOrder_default(
              cartWrapperRepository2,
              apiClient,
              cartWrapper,
              {
                provider: "custom",
                custom: {
                  properties
                }
              },
              {
                "Shipment UUID": shipment.uuid,
                "Shipment Label": shipmentLabelUrl
              }
            );
        }
      }
    }
  );
};

// src/routes/api/webhook/payment/montonio.tsx
var action7 = async ({ request }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), token = new URL(request.url).searchParams.get("payment_token") || "", data = await receivePaymentEvent_default3(cartWrapperRepository, storefront.apiClient, token, storefront.config);
  return (0, import_node16.json)(data);
};

// src/routes/api/webhook/payment/quickpay.tsx
var quickpay_exports = {};
__export(quickpay_exports, {
  action: () => action8
});
var import_node17 = require("@remix-run/node");

// src/use-cases/payments/quickpay/receivePaymentEvent.ts
var import_node_service_api_request_handlers12 = require("@crystallize/node-service-api-request-handlers");
var receivePaymentEvent_default4 = async (cartWrapperRepository2, apiClient, signature, payload, storeFrontConfig) => {
  var _a3;
  return await (0, import_node_service_api_request_handlers12.handleQuickPayPaymentUpdateWebhookRequestPayload)(payload, {
    private_key: process.env.QUICKPAY_PRIVATE_KEY ?? ((_a3 = storeFrontConfig.configuration) == null ? void 0 : _a3.QUICKPAY_PRIVATE_KEY) ?? "",
    signature,
    rawBody: payload,
    handleEvent: async (event) => {
      var _a4;
      let cartId = event.variables.cartId;
      switch ((_a4 = event.type) == null ? void 0 : _a4.toLowerCase()) {
        case "payment":
          let cartWrapper = await cartWrapperRepository2.find(cartId);
          if (!cartWrapper)
            throw {
              message: `Cart '${cartId}' does not exist.`,
              status: 404
            };
          let properties = [
            {
              property: "payment_method",
              value: "QuickPay"
            },
            {
              property: "QuickPayPaymentId",
              value: `${event.id}`
            },
            {
              property: "QuickPayOrderId",
              value: `${event.order_id}`
            },
            {
              property: "QuickPayAccepted",
              value: event.accepted ? "ACCEPTED" : "REFUSED"
            }
          ];
          return await pushOrder_default(cartWrapperRepository2, apiClient, cartWrapper, {
            provider: "custom",
            custom: {
              properties
            }
          });
      }
    }
  });
};

// src/routes/api/webhook/payment/quickpay.tsx
var action8 = async ({ request }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), body = await request.json(), data = await receivePaymentEvent_default4(
    cartWrapperRepository,
    storefront.apiClient,
    request.headers.get("Quickpay-Checksum-Sha256"),
    body,
    storefront.config
  );
  return (0, import_node17.json)(data);
};

// src/routes/$langstore/api/orders/index.tsx
var orders_exports = {};
__export(orders_exports, {
  loader: () => loader9
});
var import_js_api_client8 = require("@crystallize/js-api-client"), import_node_service_api_request_handlers13 = require("@crystallize/node-service-api-request-handlers");

// src/core/authentication.server.ts
var import_jsonwebtoken4 = __toESM(require("jsonwebtoken"));
async function authenticate(request) {
  let unauthorized = (code) => {
    throw new Error("Unauthorized. Error code: " + code);
  }, cookieHeader = request.headers.get("Cookie"), token = (await authCookie.parse(cookieHeader) || {}).jwt;
  token === void 0 && unauthorized(1);
  try {
    if (import_jsonwebtoken4.default.verify(token, `${process.env.JWT_SECRET}`).sub === "isLoggedInOnServiceApiToken")
      return {
        user: import_jsonwebtoken4.default.decode(token)
      };
    unauthorized(3);
  } catch (exception) {
    console.log(exception.message), unauthorized(2);
  }
  unauthorized(4);
}
async function isAuthenticated(request) {
  try {
    return await authenticate(request), !0;
  } catch {
    return !1;
  }
}

// src/core/bridge/privateJson.server.ts
var import_node18 = require("@remix-run/node");
function privateJson(data, init) {
  let responseInit = typeof init == "number" ? {
    status: init
  } : init, headers15 = new Headers(responseInit == null ? void 0 : responseInit.headers);
  return (0, import_node18.json)(data, {
    headers: {
      "Cache-Control": "private"
    },
    ...headers15
  });
}

// src/routes/$langstore/api/orders/index.tsx
var loader9 = async ({ request }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host);
  try {
    let auth = await authenticate(request);
    return privateJson(
      await (0, import_node_service_api_request_handlers13.handleOrdersRequestPayload)(null, {
        fetcherByCustomerIdentifier: (0, import_js_api_client8.createOrderFetcher)(storefront.apiClient).byCustomerIdentifier,
        user: auth.user.aud
      })
    );
  } catch (exception) {
    return privateJson({ message: exception.message }, 401);
  }
};

// src/routes/api/webhook/payment/intent.tsx
var intent_exports = {};
__export(intent_exports, {
  action: () => action10
});

// src/routes/api/webhook/payment/stripe.tsx
var stripe_exports = {};
__export(stripe_exports, {
  action: () => action9
});
var import_node19 = require("@remix-run/node");

// src/use-cases/payments/stripe/receivePaymentEvent.ts
var import_node_service_api_request_handlers14 = require("@crystallize/node-service-api-request-handlers");
var receivePaymentEvent_default5 = async (cartWrapperRepository2, apiClient, signature, payload, storeFrontConfig) => {
  var _a3, _b;
  return await (0, import_node_service_api_request_handlers14.handleStripePaymentIntentWebhookRequestPayload)(payload, {
    secret_key: process.env.STRIPE_SECRET_KEY ?? ((_a3 = storeFrontConfig.configuration) == null ? void 0 : _a3.SECRET_KEY) ?? "",
    endpointSecret: process.env.STRIPE_SECRET_PAYMENT_INTENT_WEBHOOK_ENDPOINT_SECRET ?? ((_b = storeFrontConfig.configuration) == null ? void 0 : _b.SECRET_PAYMENT_INTENT_WEBHOOK_ENDPOINT_SECRET) ?? "",
    signature,
    rawBody: payload,
    handleEvent: async (eventName, event) => {
      let cartId = event.data.object.metadata.cartId, cartWrapper = await cartWrapperRepository2.find(cartId);
      if (!cartWrapper)
        throw {
          message: `Cart '${cartId}' does not exist.`,
          status: 404
        };
      switch (eventName) {
        case "payment_intent.succeeded":
          return await pushOrder_default(cartWrapperRepository2, apiClient, cartWrapper, {
            provider: "stripe",
            stripe: {
              paymentIntentId: event.data.object.id,
              paymentMethod: event.data.object.charges.data[0].payment_method_details.type,
              stripe: `eventId:${event.id}`,
              metadata: event.data.object.charges.data[0].receipt_url
            }
          });
      }
    }
  });
};

// src/routes/api/webhook/payment/stripe.tsx
var action9 = async ({ request }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), body = await request.json(), data = await receivePaymentEvent_default5(
    cartWrapperRepository,
    storefront.apiClient,
    request.headers.get("stripe-signature"),
    body,
    storefront.config
  );
  return (0, import_node19.json)(data);
};

// src/routes/api/webhook/payment/intent.tsx
var action10 = action9;

// src/routes/$langstore/api/cart/index.tsx
var cart_exports = {};
__export(cart_exports, {
  action: () => action11
});

// src/use-cases/checkout/cart.ts
var import_node_service_api_request_handlers15 = require("@crystallize/node-service-api-request-handlers");

// src/use-cases/checkout/discount.ts
var XforYRegexp = /^([0-9]){1,} for ([0-9]){1,}$/i, indexProductsPerDiscount = (items) => {
  let candidates = {};
  return items.forEach((item) => {
    var _a3;
    (((_a3 = item.product.topics) == null ? void 0 : _a3.filter((topic) => topic.name.match(XforYRegexp))) || []).map(
      (topic) => topic.name
    ).forEach((discount) => {
      if (item.quantity > 0) {
        candidates[discount] || (candidates[discount] = []);
        for (let i = 0; i < item.quantity; i++)
          candidates[discount].push({
            price: item.variantPrice.price || 0,
            sku: item.variant.sku,
            quantity: 1
          });
      }
    });
  }), candidates;
}, extractDisountLotFromItemsBasedOnXForYTopic = (cartItems) => {
  let lots = [], lot = extractFirstDisountLotFromItemsBasedOnXForYTopic(cartItems), remainingItems = cartItems, memorySafety = 0;
  for (; lot !== null && memorySafety < 100; )
    lots.push(lot), remainingItems = remainingItems.map((item) => lot.appliedOn[item.variant.sku] ? {
      ...item,
      quantity: Math.max(0, item.quantity - lot.appliedOn[item.variant.sku])
    } : {
      ...item
    }), lot = extractFirstDisountLotFromItemsBasedOnXForYTopic(remainingItems), memorySafety++;
  return memorySafety >= 100 && console.error("Memory safety triggered"), lots;
}, extractFirstDisountLotFromItemsBasedOnXForYTopic = (cartItems) => {
  let discountProductIndex = indexProductsPerDiscount(cartItems), discounts = Object.keys(discountProductIndex).map((discount2) => {
    let results = XforYRegexp.exec(discount2);
    return {
      treshold: parseInt(results[2]),
      pack: parseInt(results[1]),
      extra: parseInt(results[1]) - parseInt(results[2]),
      identifier: discount2
    };
  }).sort((a, b) => a.treshold - b.treshold).filter((discount2) => discountProductIndex[discount2.identifier].length >= discount2.pack);
  if (discounts.length === 0)
    return null;
  let discount = discounts[0], sortedProducts = discountProductIndex[discount.identifier].sort(
    (a, b) => a.price - b.price
  ), discountedProductsAggregate = sortedProducts.slice(0, discount.extra).reduce(
    (accumulator, item) => {
      var _a3;
      return accumulator[item.sku] = {
        ...item,
        quantity: (((_a3 = accumulator[item.sku]) == null ? void 0 : _a3.quantity) || 0) + item.quantity
      }, accumulator;
    },
    {}
  );
  return {
    appliedOn: sortedProducts.slice(0, discount.pack).reduce(
      (accumulator, item) => (accumulator[item.sku] = (accumulator[item.sku] || 0) + item.quantity, accumulator),
      {}
    ),
    items: discountedProductsAggregate,
    discount
  };
}, groupSavingsPerSkus = (lots) => lots.reduce((accumulator, lot) => (Object.keys(lot.items).forEach((sku) => {
  var _a3, _b;
  let item = lot.items[sku];
  accumulator[sku] = {
    quantity: (((_a3 = accumulator[sku]) == null ? void 0 : _a3.quantity) || 0) + item.quantity,
    amount: (((_b = accumulator[sku]) == null ? void 0 : _b.amount) || 0) + item.price
  };
}), accumulator), {});

// src/use-cases/checkout/cart.ts
var import_uuid = require("uuid");
var import_js_api_client9 = require("@crystallize/js-api-client");
function alterCartBasedOnDiscounts(wrapper) {
  let { cart, total } = wrapper.cart, lots = extractDisountLotFromItemsBasedOnXForYTopic(cart.items), savings = groupSavingsPerSkus(lots), existingDiscounts = total.discounts || [], newTotals = {
    gross: 0,
    currency: total.currency,
    net: 0,
    taxAmount: 0,
    discounts: [
      {
        amount: 0,
        percent: 0
      }
    ]
  }, alteredItems = cart.items.map((item) => {
    var _a3, _b, _c;
    let saving = ((_a3 = savings[item.variant.sku]) == null ? void 0 : _a3.quantity) > 0 ? savings[item.variant.sku] : null, netAmount = item.price.net - ((saving == null ? void 0 : saving.amount) || 0), taxAmount = netAmount * (((_c = (_b = item.product) == null ? void 0 : _b.vatType) == null ? void 0 : _c.percent) || 0) / 100, grossAmount = netAmount + taxAmount, discount = {
      amount: (saving == null ? void 0 : saving.amount) || 0,
      percent: ((saving == null ? void 0 : saving.amount) || 0) / (netAmount + ((saving == null ? void 0 : saving.amount) || 0)) * 100
    };
    return newTotals.taxAmount += taxAmount, newTotals.gross += grossAmount, newTotals.net += netAmount, newTotals.discounts[0].amount += discount.amount, {
      ...item,
      price: {
        gross: grossAmount,
        net: netAmount,
        currency: item.price.currency,
        taxAmount,
        discounts: item.price.discounts ? [...item.price.discounts, discount] : [discount]
      }
    };
  });
  return {
    ...wrapper,
    cart: {
      total: {
        ...newTotals,
        discounts: [
          ...existingDiscounts,
          {
            amount: newTotals.discounts[0].amount,
            percent: (1 - (newTotals.net + newTotals.discounts[0].amount) / newTotals.net) * 100
          }
        ]
      },
      cart: {
        items: alteredItems
      }
    },
    extra: {
      ...wrapper.extra,
      discounts: {
        lots,
        savings
      }
    }
  };
}
async function handleAndPlaceCart(cart, customer, providedCartId, options) {
  let cartWrapper = await handleAndSaveCart(cart, providedCartId);
  return cartWrapper.customer = customer, cartWrapper.extra = {
    ...cartWrapper.extra,
    pickupPoint: options == null ? void 0 : options.pickupPoint
  }, cartWrapperRepository.place(cartWrapper), cartWrapper;
}
async function handleAndSaveCart(cart, providedCartId) {
  let cartId = providedCartId, cartWrapper = null, storedCartWrapper = null;
  return cartId ? storedCartWrapper = await cartWrapperRepository.find(cartId) : cartId = (0, import_uuid.v4)(), storedCartWrapper ? (cartWrapper = { ...storedCartWrapper }, cartWrapper.cart = cart) : cartWrapper = cartWrapperRepository.create(cart, cartId), cartWrapper = alterCartBasedOnDiscounts(cartWrapper), cartWrapperRepository.save(cartWrapper) ? cartWrapper : storedCartWrapper || cartWrapper;
}
async function hydrateCart(apiClient, language, body) {
  let currency = (await CrystallizeAPI({
    apiClient,
    language
  }).fetchTenantConfig(apiClient.config.tenantIdentifier)).currency, pickStandardPrice = (product, selectedVariant, currency2) => {
    var _a3, _b;
    return ((_a3 = selectedVariant == null ? void 0 : selectedVariant.priceVariants) == null ? void 0 : _a3.find(
      (price) => {
        var _a4;
        return (price == null ? void 0 : price.identifier) === "default" && ((_a4 = price == null ? void 0 : price.currency) == null ? void 0 : _a4.toLocaleLowerCase()) === currency2.toLocaleLowerCase();
      }
    )) ?? ((_b = selectedVariant == null ? void 0 : selectedVariant.priceVariants) == null ? void 0 : _b[0]) ?? {
      price: selectedVariant == null ? void 0 : selectedVariant.price,
      identifier: "undefined"
    };
  };
  return await (0, import_node_service_api_request_handlers15.handleCartRequestPayload)(validatePayload(body, import_node_service_api_request_handlers15.cartPayload), {
    hydraterBySkus: (0, import_js_api_client9.createProductHydrater)(apiClient).bySkus,
    currency,
    perProduct: () => ({
      topics: {
        name: !0
      }
    }),
    perVariant: () => ({
      firstImage: {
        url: !0,
        variants: {
          url: !0,
          height: !0,
          width: !0
        }
      }
    }),
    selectPriceVariant: (product, selectedVariant, currency2) => {
      var _a3;
      let variant = (_a3 = selectedVariant == null ? void 0 : selectedVariant.priceVariants) == null ? void 0 : _a3.find(
        (price) => {
          var _a4;
          return (price == null ? void 0 : price.identifier) === "sales" && ((_a4 = price == null ? void 0 : price.currency) == null ? void 0 : _a4.toLowerCase()) === currency2.toLocaleLowerCase();
        }
      ), standardPrice = pickStandardPrice(product, selectedVariant, currency2);
      return !variant || !(variant != null && variant.price) ? standardPrice : variant;
    },
    basePriceVariant: (product, selectedVariant, currency2) => pickStandardPrice(product, selectedVariant, currency2)
  });
}

// src/use-cases/checkout/handleSaveCart.ts
var handleSaveCart_default = async (apiClient, context, body) => {
  let cart = await hydrateCart(apiClient, context.language, body);
  return await handleAndSaveCart(cart, body.cartId);
};

// src/routes/$langstore/api/cart/index.tsx
var action11 = async ({ request }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), body = await request.json();
  return privateJson(await handleSaveCart_default(storefront.apiClient, requestContext, body));
};

// src/routes/$langstore/api/cart/place.tsx
var place_exports = {};
__export(place_exports, {
  action: () => action12
});

// src/use-cases/checkout/handlePlaceCart.ts
var handlePlaceCart_default = async (apiClient, context, body, customer) => {
  let cart = await hydrateCart(apiClient, context.language, body);
  return await handleAndPlaceCart(cart, customer, body.cartId, body.options);
};

// src/routes/$langstore/api/cart/place.tsx
var action12 = async ({ request }) => {
  var _a3, _b, _c, _d, _e;
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), isAuthenticated2 = await isAuthenticated(request), authUser = isAuthenticated2 ? (_a3 = await authenticate(request)) == null ? void 0 : _a3.user : null, body = await request.json(), customerIdentifier = (authUser == null ? void 0 : authUser.aud) || ((_b = body.customer) == null ? void 0 : _b.email) || "unknow@unknown.com", customer = {
    ...body.customer,
    email: ((_c = body.customer) == null ? void 0 : _c.email) || (authUser == null ? void 0 : authUser.aud) || "unknow@unknown.com",
    firstname: ((_d = body.customer) == null ? void 0 : _d.firstname) || authUser.firstname,
    lastname: ((_e = body.customer) == null ? void 0 : _e.lastname) || authUser.lastname,
    customerIdentifier,
    isGuest: !isAuthenticated2
  };
  return privateJson(await handlePlaceCart_default(storefront.apiClient, requestContext, body, customer));
};

// src/routes/$langstore/api/orders/$id.tsx
var id_exports = {};
__export(id_exports, {
  loader: () => loader10
});
var import_js_api_client10 = require("@crystallize/js-api-client"), import_node_service_api_request_handlers16 = require("@crystallize/node-service-api-request-handlers");
var loader10 = async ({ request, params }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), auth = await authenticate(request);
  return privateJson(
    await (0, import_node_service_api_request_handlers16.handleOrderRequestPayload)(null, {
      fetcherById: (0, import_js_api_client10.createOrderFetcher)(storefront.apiClient).byId,
      user: auth.user.aud,
      orderId: params.id
    })
  );
};

// src/routes/$langstore/order/cart.$id.tsx
var cart_id_exports = {};
__export(cart_id_exports, {
  default: () => cart_id_default,
  headers: () => headers3,
  loader: () => loader11
});
var import_node20 = require("@remix-run/node"), import_react14 = require("@remix-run/react");

// src/ui/pages/OrderPlacedCart.tsx
var import_react13 = require("react");

// src/use-cases/service-api/index.ts
var import_reactjs_hooks4 = require("@crystallize/reactjs-hooks");

// src/use-cases/service-api/payments/crystal.ts
var import_reactjs_hooks3 = require("@crystallize/reactjs-hooks");
async function sendPaidOrderWithCrystalCoin(serviceApiUrl, language, cart, customer) {
  let cartWrapper = await placeCart(serviceApiUrl, language, cart, customer);
  return await (0, import_reactjs_hooks3.postJson)(serviceApiUrl + "/payment/crystal/coin/confirmed", {
    cartId: cartWrapper.cartId
  });
}
async function sendPaidOrderWithCrystalCard(serviceApiUrl, language, cart, customer, card) {
  let cartWrapper = await placeCart(serviceApiUrl, language, cart, customer);
  return await (0, import_reactjs_hooks3.postJson)(serviceApiUrl + "/payment/crystal/card/confirmed", {
    cartId: cartWrapper.cartId,
    card
  });
}

// src/use-cases/service-api/index.ts
function placeCart(serviceApiUrl, language, cart, customer, options) {
  return (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/cart/place", {
    cartId: cart.cartId,
    locale: language,
    items: Object.values(cart.items),
    customer,
    options
  });
}
var ServiceAPI = ({ locale, language, serviceApiUrl }) => ({
  stripe: {
    fetchPaymentIntent: (cart) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/payment/stripe/create", { cartId: cart.cartId })
  },
  quickpay: {
    fetchPaymentLink: (cart) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/payment/quickpay/create", { cartId: cart.cartId })
  },
  montonio: {
    fetchPaymentLink: (cart) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/payment/montonio/create", { cartId: cart.cartId }),
    fetchPickupPoints: () => (0, import_reactjs_hooks4.getJson)(serviceApiUrl + "/shipping/montonio/pickup-points")
  },
  klarna: {
    initiatePayment: (cart) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/payment/klarna/create", { cartId: cart.cartId })
  },
  razorpay: {
    initiatePayment: (cart) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/payment/razorpay/create", { cartId: cart.cartId }),
    receivePayment: (baseUrl, payload) => (0, import_reactjs_hooks4.postJson)(baseUrl + "/api/webhook/payment/razorpay/verify", payload)
  },
  fetchOrders: () => (0, import_reactjs_hooks4.getJson)(serviceApiUrl + "/orders"),
  fetchOrder: (orderId) => (0, import_reactjs_hooks4.getJson)(serviceApiUrl + "/orders/" + orderId),
  placeCart: (cart, customer, options) => placeCart(serviceApiUrl, language, cart, customer, options),
  registerAndSendMagickLink: (userInfos) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/magicklink/register", userInfos),
  sendMagickLink: (email, callbackPath) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/magicklink/register?callbackPath=" + callbackPath, {
    email,
    firstname: "",
    lastname: ""
  }),
  fetchCart: (cartId) => (0, import_reactjs_hooks4.getJson)(serviceApiUrl + "/cart/" + cartId),
  fetchRemoteCart: (cart) => (0, import_reactjs_hooks4.postJson)(serviceApiUrl + "/cart", {
    locale: language,
    items: Object.values(cart.items),
    cartId: cart.cartId,
    withImages: !0
  }),
  sendPaidOrderWithCrystalCoin: (cart, customer) => sendPaidOrderWithCrystalCoin(serviceApiUrl, language, cart, customer),
  sendPaidOrderWithCrystalCard: (cart, customer, card) => sendPaidOrderWithCrystalCard(serviceApiUrl, language, cart, customer, card)
});

// src/ui/bridge/useNavigate.ts
var import_react12 = require("@remix-run/react"), useNavigate_default = () => (0, import_react12.useNavigate)();

// src/ui/pages/OrderPlacedCart.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), OrderPlacedCart_default = ({ cartId }) => {
  let { cart: localCart, empty } = useLocalCart(), [tryCount, setTryCount] = (0, import_react13.useState)(0), { state: appContextState, path } = useAppContext(), navigate = useNavigate_default(), [orderGuestId, setOrderGuestId] = (0, import_react13.useState)("");
  return (0, import_react13.useEffect)(() => {
    let timeout;
    return (async () => {
      var _a3, _b;
      try {
        localCart.cartId === cartId && empty();
        let cart = await ServiceAPI({
          language: appContextState.language,
          serviceApiUrl: appContextState.serviceApiUrl
        }).fetchCart(cartId);
        (_a3 = cart == null ? void 0 : cart.extra) != null && _a3.orderId ? ((_b = cart == null ? void 0 : cart.customer) == null ? void 0 : _b.isGuest) === !0 ? setOrderGuestId(cart.extra.orderId) : navigate(path("/order/" + cart.extra.orderId)) : timeout = setTimeout(() => {
          setTryCount(tryCount + 1);
        }, 500 * tryCount);
      } catch {
        timeout = setTimeout(() => {
          setTryCount(tryCount + 1);
        }, 500 * tryCount);
      }
    })(), () => clearTimeout(timeout);
  }, [cartId, tryCount]), orderGuestId !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "min-h-[80vh] items-center flex lg:w-content mx-auto w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "w-2/4 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h1", { className: "font-bold text-3xl mb-2", children: "Order Placed!" }, void 0, !1, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 50,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { children: "Your order has been placed successfully, as it is a Guest Order you won't see the details here." }, void 0, !1, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 53,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { className: "mt-4 text-[#6D6B69]", children: [
        "Order id: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "font-italic", children: orderGuestId }, void 0, !1, {
          fileName: "src/ui/pages/OrderPlacedCart.tsx",
          lineNumber: 58,
          columnNumber: 43
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 57,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 52,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/OrderPlacedCart.tsx",
    lineNumber: 49,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/OrderPlacedCart.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "min-h-[80vh] items-center flex lg:w-content mx-auto w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "w-2/4 mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("h1", { className: "font-bold text-3xl mb-2", children: "Cart Placed!" }, void 0, !1, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { children: "Your cart has been placed successfully, we're waiting for payment confirmation." }, void 0, !1, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 73,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("p", { className: "mt-4 text-[#6D6B69]", children: [
        "Id: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { className: "font-italic", children: cartId }, void 0, !1, {
          fileName: "src/ui/pages/OrderPlacedCart.tsx",
          lineNumber: 75,
          columnNumber: 33
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 74,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mt-4 flex gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "loader " }, void 0, !1, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 78,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "src/ui/pages/OrderPlacedCart.tsx",
        lineNumber: 77,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 72,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/OrderPlacedCart.tsx",
      lineNumber: 71,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/OrderPlacedCart.tsx",
    lineNumber: 69,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/OrderPlacedCart.tsx",
    lineNumber: 68,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/order/cart.$id.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), headers3 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader11 = async ({ request, params }) => {
  let requestContext = getContext(request), { shared } = await getStoreFront(requestContext.host);
  return (0, import_node20.json)(
    { cartId: params.id },
    StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", ["cart" + params.id], shared.config.tenantIdentifier)
  );
}, cart_id_default = () => {
  let { cartId } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(OrderPlacedCart_default, { cartId }, void 0, !1, {
    fileName: "src/routes/$langstore/order/cart.$id.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/stories/$story.tsx
var story_exports = {};
__export(story_exports, {
  default: () => story_default,
  headers: () => headers4,
  loader: () => loader12,
  meta: () => meta3
});
var import_node21 = require("@remix-run/node"), import_react16 = require("@remix-run/react");

// src/ui/pages/CuratedStory.tsx
var import_reactjs_components6 = require("@crystallize/reactjs-components");

// src/ui/components/curated-product-item.tsx
var import_reactjs_components5 = require("@crystallize/reactjs-components");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), CuratedProductItem = ({ merch, pack, merchIndex, updatePack }) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: merch.products.map((product, productIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
  Product3,
  {
    product,
    pack,
    updatePack,
    packKey: `${merchIndex}-${productIndex}`
  },
  productIndex,
  !1,
  {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 18,
    columnNumber: 17
  },
  this
)) }, void 0, !1, {
  fileName: "src/ui/components/curated-product-item.tsx",
  lineNumber: 16,
  columnNumber: 9
}, this), Product3 = ({
  product,
  pack,
  updatePack,
  packKey
}) => {
  var _a3, _b;
  if (!(product != null && product.variants))
    return null;
  let selecedPackItem = pack.find((packItem) => packItem.key === packKey) || {
    variant: product.variants[0],
    quantity: 1
  };
  return selecedPackItem ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "border-b border-[#dfdfdf] w-full py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid w-full grid-cols-[0.35fr_1fr]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-full img-container overflow-hidden rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      import_reactjs_components5.Image,
      {
        sizes: "200px",
        ...(_b = (_a3 = selecedPackItem.variant) == null ? void 0 : _a3.images) == null ? void 0 : _b[0],
        fallbackAlt: selecedPackItem.variant.name
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 58,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "src/ui/components/curated-product-item.tsx",
      lineNumber: 57,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "gap-2 pl-4 flex ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: " w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pb-1", children: selecedPackItem.variant.name }, void 0, !1, {
            fileName: "src/ui/components/curated-product-item.tsx",
            lineNumber: 67,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Price2, { variant: selecedPackItem.variant, size: "small" }, void 0, !1, {
            fileName: "src/ui/components/curated-product-item.tsx",
            lineNumber: 68,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/curated-product-item.tsx",
          lineNumber: 66,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col-reverse max-w-[40px] w-full items-center justify-end ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
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
            !1,
            {
              fileName: "src/ui/components/curated-product-item.tsx",
              lineNumber: 71,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
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
            !1,
            {
              fileName: "src/ui/components/curated-product-item.tsx",
              lineNumber: 82,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
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
            !1,
            {
              fileName: "src/ui/components/curated-product-item.tsx",
              lineNumber: 93,
              columnNumber: 33
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "src/ui/components/curated-product-item.tsx",
          lineNumber: 70,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 65,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pl-4 mt-2 max-w-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "grid grid-cols-1 grid-col-2 lg:grid-cols-1 xl:grid-cols-2 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
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
        !1,
        {
          fileName: "src/ui/components/curated-product-item.tsx",
          lineNumber: 108,
          columnNumber: 33
        },
        this
      ) }, void 0, !1, {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 107,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/curated-product-item.tsx",
        lineNumber: 106,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/curated-product-item.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 56,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 55,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/curated-product-item.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, this) : null;
};

// src/ui/pages/CuratedStory.tsx
var import_react15 = require("react");
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), CuratedStory_default = ({ data: story }) => {
  var _a3, _b, _c;
  let [activePoint, setActivePoint] = (0, import_react15.useState)(""), { state: appContextState } = useAppContext(), defaultPack = (0, import_react15.useMemo)(
    () => story.merchandising.reduce((memo, merch, merchIndex) => (merch.products.forEach((product, productIndex) => {
      memo.push({
        variant: product.variant,
        quantity: 1,
        key: `${merchIndex}-${productIndex}`
      });
    }), memo), []),
    [story.merchandising]
  ), [pack, setPack] = (0, import_react15.useState)(defaultPack), totalAmountToPay = pack.reduce((memo, packitem) => {
    var _a4, _b2, _c2, _d;
    let price = ((_b2 = (_a4 = packitem.variant.priceVariants) == null ? void 0 : _a4.sales) == null ? void 0 : _b2.value) || ((_d = (_c2 = packitem.variant.priceVariants) == null ? void 0 : _c2.default) == null ? void 0 : _d.value);
    return memo + (price || 0) * packitem.quantity;
  }, 0), updatePack = (previous, next) => {
    setPack(
      pack.map((packitem) => previous.key === packitem.key ? {
        ...packitem,
        quantity: next.quantity,
        variant: next.variant
      } : packitem)
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex flex-col-reverse lg:flex-row gap-8 min-h-full container px-6 mx-auto mt-20 mb-40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "lg:w-7/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "img-container overflow-hidden self-start rounded-lg relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "absolute h-full w-full frntr-hotspot frntr-hotspot-microformat", children: story.merchandising.map((merch, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          "span",
          {
            onMouseOver: () => setActivePoint(`hotspot-point-${i}`),
            onMouseLeave: () => setActivePoint(""),
            style: { left: merch.x + "%", top: merch.y + "%" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "rounded-sm overflow-hidden shadow-sm px-2 pt-2 ", children: merch.products.map((product, index) => {
              var _a4;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex items-center gap-2 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "img-container img-cover w-[30px] h-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
                  import_reactjs_components6.Image,
                  {
                    ...(_a4 = product.variant.images) == null ? void 0 : _a4[0],
                    sizes: "100px",
                    loading: "lazy",
                    fallbackAlt: product.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/ui/pages/CuratedStory.tsx",
                    lineNumber: 66,
                    columnNumber: 49
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "src/ui/pages/CuratedStory.tsx",
                  lineNumber: 65,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "text-xs", children: product.name }, void 0, !1, {
                    fileName: "src/ui/pages/CuratedStory.tsx",
                    lineNumber: 74,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "text-xs font-bold", children: [
                    appContextState.currency.code,
                    " ",
                    product.variant.priceVariants.default.value
                  ] }, void 0, !0, {
                    fileName: "src/ui/pages/CuratedStory.tsx",
                    lineNumber: 75,
                    columnNumber: 49
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/ui/pages/CuratedStory.tsx",
                  lineNumber: 73,
                  columnNumber: 45
                }, this)
              ] }, index, !0, {
                fileName: "src/ui/pages/CuratedStory.tsx",
                lineNumber: 64,
                columnNumber: 41
              }, this);
            }) }, void 0, !1, {
              fileName: "src/ui/pages/CuratedStory.tsx",
              lineNumber: 62,
              columnNumber: 33
            }, this)
          },
          `hotspot-${merch.x}-${merch.y}`,
          !1,
          {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 56,
            columnNumber: 29
          },
          this
        )) }, void 0, !1, {
          fileName: "src/ui/pages/CuratedStory.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_reactjs_components6.Image, { ...(_b = (_a3 = story == null ? void 0 : story.medias) == null ? void 0 : _a3.images) == null ? void 0 : _b[0], sizes: "50vw", fallbackAlt: story.title }, void 0, !1, {
          fileName: "src/ui/pages/CuratedStory.tsx",
          lineNumber: 86,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "max-w-[1000px] ", children: story.story && /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ParagraphCollection, { paragraphs: story.story }, void 0, !1, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 88,
        columnNumber: 66
      }, this) }, void 0, !1, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/CuratedStory.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "px-6 lg:w-5/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "text-3xl font-semibold mb-2", children: story.title }, void 0, !1, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "border-b pb-4 mb-4 border-[#dfdfdf] text-1xl leading-[1.4em] mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_reactjs_components6.ContentTransformer, { json: (_c = story.description) == null ? void 0 : _c.json }, void 0, !1, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 94,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "sticky top-20", children: [
        story.merchandising.map((merch, merchIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          "div",
          {
            className: "px-2 overflow-hidden rounded-md my-2",
            style: {
              border: activePoint === `hotspot-point-${merchIndex}` ? "1px solid #000" : "1px solid transparent"
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
              CuratedProductItem,
              {
                merch,
                updatePack,
                pack,
                merchIndex
              },
              void 0,
              !1,
              {
                fileName: "src/ui/pages/CuratedStory.tsx",
                lineNumber: 109,
                columnNumber: 33
              },
              this
            )
          },
          `merch-container-${merch.x}-${merch.y}`,
          !1,
          {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 99,
            columnNumber: 29
          },
          this
        )),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex pt-5 mt-5 items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "text-2xl font-bold text-green2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Price, { currencyCode: appContextState.currency.code, children: totalAmountToPay }, void 0, !1, {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 120,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(AddToCartBtn, { pack }, void 0, !1, {
            fileName: "src/ui/pages/CuratedStory.tsx",
            lineNumber: 122,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/CuratedStory.tsx",
          lineNumber: 118,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/CuratedStory.tsx",
        lineNumber: 96,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/CuratedStory.tsx",
      lineNumber: 91,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/CuratedStory.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Story.tsx
var import_reactjs_components7 = require("@crystallize/reactjs-components");

// src/ui/components/related-document.tsx
var import_image3 = require("@crystallize/reactjs-components/dist/image");
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime"), RelatedDocument = ({ document: document2 }) => {
  var _a3, _b, _c, _d, _e, _f;
  let { path } = useAppContext(), title = (_b = (_a3 = document2.components.find((component) => component.name === "Title")) == null ? void 0 : _a3.content) == null ? void 0 : _b.text, media = (_e = (_d = (_c = document2.components.find((component) => component.name === "Media")) == null ? void 0 : _c.content) == null ? void 0 : _d.selectedComponent) == null ? void 0 : _e.content;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "pb-5 img-cover-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Link_default, { to: path(document2.path), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "img-container img-cover rounded-md overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_image3.Image, { ...(_f = media == null ? void 0 : media.images) == null ? void 0 : _f[0], sizes: "200px", loading: "lazy", fallbackAlt: title }, void 0, !1, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 14,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h4", { className: "font-semibold mt-5", children: title }, void 0, !1, {
      fileName: "src/ui/components/related-document.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/related-document.tsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/related-document.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Story.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), Story_default = ({ data: story }) => {
  var _a3, _b, _c, _d;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(buildSchemaMarkupForBlogPost(story))
        }
      },
      void 0,
      !1,
      {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "2xl md:container md:px-6 px-4 mx-auto mt-20 mb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "max-w-[1000px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("p", { className: "mb-4 text-md", children: new Date(story.createdAt).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }) }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h1", { className: "text-6xl font-semibold mb-2", children: story.title }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "md:w-3/4 w-full my-2 text-2xl leading-[1.8em]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_reactjs_components7.ContentTransformer, { json: story.description.json }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 28,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 18,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "container 2xl mt-5 w-screen mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "max-w-[1200px] img-container overflow-hidden rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_reactjs_components7.Image, { ...(_b = (_a3 = story.medias) == null ? void 0 : _a3.images) == null ? void 0 : _b[0], sizes: "100vw", fallbackAlt: story.title }, void 0, !1, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "2xl container mx-auto frntr-story ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "max-w-[1000px] ", children: story.story && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ParagraphCollection, { paragraphs: story.story }, void 0, !1, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 40,
      columnNumber: 66
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    story.relatedArticles && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "2xl container px-6 mx-auto w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h3", { className: "font-bold mt-40 mb-4 text-xl", children: "Read next" }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "gap-5 lg:grid grid-cols-5 pb-5 flex flex-wrapl", children: (_c = story.relatedArticles) == null ? void 0 : _c.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(RelatedDocument, { document: item }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 48,
        columnNumber: 33
      }, this) }, index, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 47,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this),
    story.featuredProducts && /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "2xl container px-6 mx-auto w-full mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h3", { className: "font-bold mt-20 mb-4 text-xl", children: "Featured products" }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "gap-5 lg:grid grid-cols-5 pb-5 flex flex-wrap", children: (_d = story.featuredProducts) == null ? void 0 : _d.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(Product, { item }, index, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 59,
        columnNumber: 36
      }, this)) }, void 0, !1, {
        fileName: "src/ui/pages/Story.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Story.tsx",
      lineNumber: 55,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Story.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
};

// src/ui/pages/AbstractStory.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), AbstractStory_default = ({ data: story }) => story.type === "curated-product-story" ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(CuratedStory_default, { data: story }, void 0, !1, {
  fileName: "src/ui/pages/AbstractStory.tsx",
  lineNumber: 7,
  columnNumber: 16
}, this) : story.type === "story" ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Story_default, { data: story }, void 0, !1, {
  fileName: "src/ui/pages/AbstractStory.tsx",
  lineNumber: 10,
  columnNumber: 16
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { children: " No renderer for type" }, void 0, !1, {
  fileName: "src/ui/pages/AbstractStory.tsx",
  lineNumber: 12,
  columnNumber: 12
}, this);

// src/routes/$langstore/stories/$story.tsx
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), headers4 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, meta3 = ({ data }) => buildMetas(data), loader12 = async ({ request, params }) => {
  let requestContext = getContext(request), path = `/stories/${params.story}`, { shared } = await getStoreFront(requestContext.host), data = await dataFetcherForShapePage_server_default("abstract-story", path, requestContext, params);
  return (0, import_node21.json)({ data }, StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier));
}, story_default = () => {
  let { data } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(AbstractStory_default, { data }, void 0, !1, {
    fileName: "src/routes/$langstore/stories/$story.tsx",
    lineNumber: 28,
    columnNumber: 12
  }, this);
};

// src/routes/api/webhook/order/created.tsx
var created_exports = {};
__export(created_exports, {
  action: () => action13
});
var import_node22 = require("@remix-run/node");

// src/use-cases/user/sendOrderCreatedReceipt.ts
var import_mjml2 = __toESM(require("mjml")), sendOrderCreatedReceipt_default = async (mailer, apiClient, order) => {
  var _a3, _b, _c;
  let creationDate = new Date(order.createdAt).toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" }), tenantConfig = await CrystallizeAPI({
    apiClient,
    language: availableLanguages[0]
  }).fetchTenantConfig(apiClient.config.tenantIdentifier), formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: order.total.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), mail = (0, import_mjml2.default)(`<mjml>
        <mj-head>
          <mj-title>Order confirmation - FRNTR Boilerplate</mj-title>
          <mj-attributes>
            <mj-all font-family="Roboto, Helvetica, sans-serif" line-height="28px" font-size="15px" color="#0E0E0E"></mj-all>
          </mj-attributes>
          <mj-style>
            .product-img {
            max-width: 40px;
            }
            .order-summary td, .order-summary th {
            height: 100px;
            vertical-align: middle;
            text-align: center;
            border-bottom: 1px solid #ddd;
            }
            .order-summary td.item-image,
            .order-summary th.item-image {
            width: 40px;
            }
            .order-summary th {
            background-color: #E2ECE9;
            }
            @media only screen and (max-width: 600px) {
            .order-summary td.item-image,
            .order-summary th.item-image {
            display: none;
            width: 0;
            }
            .order-summary td.item-name {
            text-align: center;
            }
            }
          </mj-style>
        </mj-head>
        <mj-body>
          <mj-section>
            <mj-column>
              <mj-image width="150px" align="center" src=${(_a3 = tenantConfig.logo) == null ? void 0 : _a3.url}></mj-image>
            </mj-column>
          </mj-section>
          <mj-section>
            <mj-column>
              <mj-text line-height="38px" font-size="28px" font-weight="bold" align="center">Order Confirmed!</mj-text>
              <mj-text align="center" font-size="20px" line-height="38px">Hey ${order.customer.firstName}, thank you for your order.</mj-text>
              <mj-text font-size="17px" align="center" line-height="38px">We've received your order and will contact you as soon as it is shipped. You can find your order details below.</mj-text>
            </mj-column>
          </mj-section>

          <mj-section border-bottom="1px solid #0e0e0e" border-top="1px solid #0e0e0e">
            <mj-column>
              <mj-table>
                <tr align="center">
                  <th style="padding: 0 15px 0 0;">Date</th>
                  <th style="padding: 0 15px">Order</th>

                  <th style="padding: 0 0 0 15px;">Payment</th>
                </tr>
                <tr align="center">
                  <td style="padding: 0 15px 0 0;">${creationDate}</td>
                  <td style="padding: 0 15px;">#${order.id}</td>
                  <td style="padding: 0 0 0 15px; text-transform: capitalize">${(_c = (_b = order == null ? void 0 : order.payment) == null ? void 0 : _b[0]) == null ? void 0 : _c.provider}</td>
                </tr>
              </mj-table>
            </mj-column>
          </mj-section>

          <mj-section>
            <mj-column>
              <mj-spacer></mj-spacer>
              <!-- Shopping order summary -->
              <mj-table css-class="order-summary" width="100%">
              ${order.cart.map(
    (item) => `<tr>
                  <td class="item-image"><img src=${item.imageUrl} class="product-img" /></td>
                  <td class="item-name">${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>${formatter.format(item.price.gross)}</td>
                </tr>`
  )}
              </mj-table>
            </mj-column>
          </mj-section>
          <mj-section padding="0">
            <mj-group>
              <mj-column>
                <!-- Blank Column -->
              </mj-column>
              <mj-column>
                <mj-text font-size="17px" align="right">Subtotal: <span style="color:black; font-weight:500;">${formatter.format(
    order.total.net
  )}</span></mj-text>
              </mj-column>
          </mj-section>


          <mj-section padding="0">
            <mj-column>
              <!-- Blank Column -->
            </mj-column>
            <mj-column>
              <mj-text font-size="17px" align="right">Tax: <span style="color:black; font-weight:500;">${formatter.format(
    order.total.gross - order.total.net
  )}</span></mj-text>
            </mj-column>
          </mj-section>
          <mj-section padding="0">
            <mj-column>
              <!-- Blank Column -->
            </mj-column>
            <mj-column>
              <mj-text align="right" font-size="20px">Total: <span style="color:black; font-weight:500;">${formatter.format(
    order.total.gross
  )}</span></mj-text>
            </mj-column>
          </mj-section>
          </mj-section>
          <mj-section>
            <mj-column border-top="1px solid #0e0e0e" border-bottom="1px solid #0e0e0e">
              <mj-text align="center" font-size="20px" font-weight="bold" padding="30px 0">Thank you for shopping with us!</mj-text>
            </mj-column>
          </mj-section>
          <mj-section background-color="#0e0e0e">
          	<mj-column>
            	<mj-text color="#ffffff">In you've any queries or require any assistance regarding your order, please contact us at hello@crystallize.com.</mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>`).html;
  return await mailer(
    "Crystallize - Your order has been placed",
    `${order.customer.identifier}`,
    "hello@crystallize.com",
    `${mail}`
  );
};

// src/routes/api/webhook/order/created.tsx
var action13 = async ({ request }) => {
  if (request.method !== "POST")
    return (0, import_node22.json)({ message: "Method not allowed" }, 405);
  let mailer = createMailer(`${process.env.MAILER_DSN}`), requestContext = getContext(request), { secret } = await getStoreFront(requestContext.host), payload = await request.json();
  return await sendOrderCreatedReceipt_default(mailer, secret.apiClient, payload.order.get), (0, import_node22.json)({ success: !0, payload }, 200);
};

// src/routes/$langstore/stories/index.tsx
var stories_exports = {};
__export(stories_exports, {
  default: () => stories_default,
  headers: () => headers5,
  links: () => links2,
  loader: () => loader13,
  meta: () => meta4
});
var import_node23 = require("@remix-run/node"), import_react17 = require("@remix-run/react");

// node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css
var splide_default_min_default = "/build/_assets/splide-default.min-XMMIHRMW.css";

// src/ui/components/category-list.tsx
var import_react_splide = require("@splidejs/react-splide");
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), CategoryList = ({ products }) => {
  var _a3;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "my-10 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_react_splide.Splide,
    {
      options: {
        rewind: !0,
        perPage: 5,
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
        pagination: !1,
        gap: 10
      },
      className: "splide ",
      children: (_a3 = products == null ? void 0 : products.slice(0, 12)) == null ? void 0 : _a3.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react_splide.SplideSlide, { className: "slide items-stretch pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Product, { item: product }, void 0, !1, {
        fileName: "src/ui/components/category-list.tsx",
        lineNumber: 32,
        columnNumber: 33
      }, this) }, `${product.name}-${product.path}`, !1, {
        fileName: "src/ui/components/category-list.tsx",
        lineNumber: 31,
        columnNumber: 29
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/category-list.tsx",
      lineNumber: 9,
      columnNumber: 17
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/components/category-list.tsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/category-list.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
};

// src/ui/lib/grid-tile/grid.tsx
var import_grid = require("@crystallize/reactjs-components/dist/grid");

// src/ui/lib/grid-tile/generic-item.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), GenericItem = ({ item }) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "crystallize-generic-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("a", { href: item.path, children: item.name ?? "" }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-item.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-item.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this);

// src/ui/lib/grid-tile/generic-tile-view.tsx
var import_video = require("@crystallize/reactjs-components/dist/video"), import_image4 = require("@crystallize/reactjs-components/dist/image"), import_jsx_dev_runtime44 = require("react/jsx-dev-runtime"), GenericTileView = ({ tile, options }) => {
  let { title, description, content, ctas, styling } = tile;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
    "div",
    {
      className: `crystallize-generic-tile-view view-${tile.view}`,
      style: { backgroundColor: styling == null ? void 0 : styling.background.color },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "crystallize-generic-tile-view-header", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h2", { children: title }, void 0, !1, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 14,
            columnNumber: 27
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { children: description }, void 0, !1, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 15,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "crystallize-generic-tile-view-body", children: [
          content.images && content.images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(GenericTileViewWithImage, { image: content.images[0] }, void 0, !1, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 18,
            columnNumber: 65
          }, this),
          content.videos && content.videos.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(GenericTileViewWithVideo, { video: content.videos[0] }, void 0, !1, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 19,
            columnNumber: 65
          }, this),
          content.items && content.items.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(GenericTileViewWithItems, { items: content.items }, void 0, !1, {
            fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
            lineNumber: 20,
            columnNumber: 63
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        ctas && ctas.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "crystallize-generic-tile-view-ctas", children: ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("button", { className: "crystallize-generic-tile-view-cta", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("a", { href: cta.link, children: cta.text }, void 0, !1, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 27,
          columnNumber: 29
        }, this) }, cta.link, !1, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 26,
          columnNumber: 25
        }, this)) }, void 0, !1, {
          fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  );
}, GenericTileViewWithItems = ({ items }) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "crystallize-generic-tile-view-body-items", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(GenericTileViewWithEmbed, { item }, index, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 40,
  columnNumber: 24
}, this)) }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 38,
  columnNumber: 9
}, this), GenericTileViewWithEmbed = ({ item }) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "crystallize-generic-tile-view-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("a", { href: item.path, children: item.name ?? "" }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 49,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 48,
  columnNumber: 9
}, this), GenericTileViewWithImage = ({ image }) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "crystallize-generic-tile-view-image ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_image4.Image, { ...image, sizes: "(max-width: 500px) 300px, 700px", loading: "lazy" }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 57,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 56,
  columnNumber: 9
}, this), GenericTileViewWithVideo = ({ video }) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "crystallize-generic-tile-view-video", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_video.Video, { ...video }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 65,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/generic-tile-view.tsx",
  lineNumber: 64,
  columnNumber: 9
}, this);

// src/ui/lib/grid-tile/grid.tsx
var import_video2 = require("@crystallize/reactjs-components/dist/video"), import_image5 = require("@crystallize/reactjs-components/dist/image"), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), Grid = ({
  grid,
  tileViewComponentMapping,
  itemComponentMapping,
  type = import_grid.GridRenderingType.RowCol,
  options,
  style,
  styleForCell
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
  import_grid.GridRenderer,
  {
    grid,
    type,
    styleForCell,
    style,
    cellComponent: ({ cell, dimensions, children }) => {
      let cellItem = cell == null ? void 0 : cell.item;
      if (!cellItem)
        return null;
      let tile = normalizeTile(cellItem);
      if (tile != null && tile.view) {
        let Component2 = tileViewComponentMapping[tile.view] || GenericTileView;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Tile, { tile, options, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Component2, { tile, options: { dimensions, layout: cell.layout }, children }, void 0, !1, {
          fileName: "src/ui/lib/grid-tile/grid.tsx",
          lineNumber: 45,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "src/ui/lib/grid-tile/grid.tsx",
          lineNumber: 44,
          columnNumber: 25
        }, this);
      }
      let Component = itemComponentMapping[cellItem.type.toLowerCase()] || GenericItem;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { style: options == null ? void 0 : options.style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Component, { item: cellItem, options: { dimensions, layout: cell.layout }, children }, void 0, !1, {
        fileName: "src/ui/lib/grid-tile/grid.tsx",
        lineNumber: 54,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "src/ui/lib/grid-tile/grid.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this);
    }
  },
  void 0,
  !1,
  {
    fileName: "src/ui/lib/grid-tile/grid.tsx",
    lineNumber: 29,
    columnNumber: 9
  },
  this
), Tile = ({
  tile,
  children,
  options
}) => {
  var _a3, _b, _c, _d, _e, _f, _g, _h;
  let backgroundElement = null, { background } = tile;
  return background.images && background.images.length > 0 && (backgroundElement = /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "crystallize-background-image", style: (_a3 = options == null ? void 0 : options.background) == null ? void 0 : _a3.style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
    import_image5.Image,
    {
      ...background.images[0],
      ...(_b = options == null ? void 0 : options.background) == null ? void 0 : _b.imageProps,
      size: "100vw",
      fallbackAlt: tile.title
    },
    void 0,
    !1,
    {
      fileName: "src/ui/lib/grid-tile/grid.tsx",
      lineNumber: 74,
      columnNumber: 17
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/lib/grid-tile/grid.tsx",
    lineNumber: 73,
    columnNumber: 13
  }, this)), background.videos && background.videos.length > 0 && (backgroundElement = /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "crystallize-background-video", style: (_c = options == null ? void 0 : options.background) == null ? void 0 : _c.style, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
    import_video2.Video,
    {
      ...background.videos[0],
      ...(_d = options == null ? void 0 : options.background) == null ? void 0 : _d.imageProps,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      controls: !1
    },
    void 0,
    !1,
    {
      fileName: "src/ui/lib/grid-tile/grid.tsx",
      lineNumber: 86,
      columnNumber: 17
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/lib/grid-tile/grid.tsx",
    lineNumber: 85,
    columnNumber: 13
  }, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
    "div",
    {
      className: `crystallize-tile crystallize-tile-view-${tile.view} ${tile.cssPreset ? "crystallize-tile-preset-" + tile.cssPreset : ""}`,
      style: {
        ...options == null ? void 0 : options.style,
        background: ((_f = (_e = tile.styling) == null ? void 0 : _e.background) == null ? void 0 : _f.color) ?? null,
        color: ((_h = (_g = tile.styling) == null ? void 0 : _g.font) == null ? void 0 : _h.color) ?? null
      },
      children: [
        backgroundElement,
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { style: { width: "100%", zIndex: 20 }, children }, void 0, !1, {
          fileName: "src/ui/lib/grid-tile/grid.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/lib/grid-tile/grid.tsx",
      lineNumber: 98,
      columnNumber: 9
    },
    this
  );
}, componentContent = (cellItem, id, fallbackValue = void 0) => {
  let component = cellItem.components.find((component2) => component2.id === id);
  return (component == null ? void 0 : component.content) || fallbackValue;
}, componentChoiceContent = (cellItem, id, choiceId, fallbackValue = void 0) => {
  var _a3, _b;
  let component = cellItem.components.find((component2) => component2.id === id);
  return ((_b = (_a3 = component == null ? void 0 : component.content) == null ? void 0 : _a3.selectedComponent) == null ? void 0 : _b.content[choiceId]) || fallbackValue;
}, componentChunkContent = (cellItem, id, chunkId, fallbackValue = void 0) => {
  var _a3, _b;
  let component = cellItem.components.find((component2) => component2.id === id), chunk = (_b = (_a3 = component == null ? void 0 : component.content) == null ? void 0 : _a3.chunks[0]) == null ? void 0 : _b.find((chunk2) => chunk2.id === chunkId);
  return (chunk == null ? void 0 : chunk.content) || fallbackValue;
}, normalizeTile = (cellItem) => {
  var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  if (!cellItem.components)
    return null;
  let styling = (_b = (_a3 = componentChunkContent(cellItem, "styling", "properties", [])) == null ? void 0 : _a3.sections) == null ? void 0 : _b.reduce(
    (result, section) => {
      let sectionName = section.title.toLowerCase();
      return section.properties.forEach((property) => {
        result[sectionName] || (result[sectionName] = {}), result[sectionName][property.key.toLowerCase()] = property.value;
      }), result;
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
      var _a4, _b2;
      return {
        text: (_a4 = cta[0].content) == null ? void 0 : _a4.text,
        link: (_b2 = cta[1].content) == null ? void 0 : _b2.text
      };
    })) || [],
    background: {
      images: componentChoiceContent(cellItem, "background", "images") || void 0,
      videos: componentChoiceContent(cellItem, "background", "videos") || void 0
    },
    styling,
    isFullWidth: ((_h = componentChunkContent(cellItem, "styling", "use-full-width")) == null ? void 0 : _h.value) || !1,
    cssPreset: (_l = (_k = (_j = (_i = componentChunkContent(cellItem, "styling", "css-preset")) == null ? void 0 : _i.options) == null ? void 0 : _j[0]) == null ? void 0 : _k.key) == null ? void 0 : _l.toLowerCase()
  };
};

// src/ui/components/item/document.tsx
var import_reactjs_components9 = require("@crystallize/reactjs-components");

// src/ui/components/item/curated-product.tsx
var import_reactjs_components8 = require("@crystallize/reactjs-components");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), CuratedProduct = ({ item }) => {
  var _a3;
  let { state: contextState, path } = useAppContext(), title = item.title, description = item.description.plainText, shoppableImage = (_a3 = item.medias.images) == null ? void 0 : _a3[0], merchandising = item.merchandising;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid min-h-[100%] w-full bg-[#F5F5F5] relative rounded-md border border-[#f5f5f5] hover:border-[#000]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "px-10 pt-20 pb-6 ", children: [
          title && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: title }, void 0, !1, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 22,
            columnNumber: 31
          }, this),
          description && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("p", { className: "embed-text", children: description }, void 0, !1, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 23,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/item/curated-product.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "img-container pl-10 w-full lg:col-span-3 self-start rounded-tl-lg relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "absolute h-full w-full frntr-hotspot frntr-hotspot-microformat", children: merchandising.map((merch, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
            "span",
            {
              style: { left: merch.y + "%", top: merch.y + "%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "rounded-sm shadow-sm px-2 pt-2 ", children: merch.products.map((product) => {
                var _a4;
                return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "flex items-center gap-2 pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "img-container img-cover w-[30px] h-[40px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                    import_reactjs_components8.Image,
                    {
                      ...(_a4 = product.variant.images) == null ? void 0 : _a4[0],
                      sizes: "100px",
                      loading: "lazy",
                      fallbackAlt: product.name
                    },
                    void 0,
                    !1,
                    {
                      fileName: "src/ui/components/item/curated-product.tsx",
                      lineNumber: 36,
                      columnNumber: 49
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "src/ui/components/item/curated-product.tsx",
                    lineNumber: 35,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "text-xs", children: product.name }, void 0, !1, {
                      fileName: "src/ui/components/item/curated-product.tsx",
                      lineNumber: 44,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "text-xs font-bold", children: [
                      contextState.currency.code,
                      " ",
                      product.variant.priceVariants.default.value
                    ] }, void 0, !0, {
                      fileName: "src/ui/components/item/curated-product.tsx",
                      lineNumber: 45,
                      columnNumber: 49
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "src/ui/components/item/curated-product.tsx",
                    lineNumber: 43,
                    columnNumber: 45
                  }, this)
                ] }, product.id, !0, {
                  fileName: "src/ui/components/item/curated-product.tsx",
                  lineNumber: 34,
                  columnNumber: 41
                }, this);
              }) }, void 0, !1, {
                fileName: "src/ui/components/item/curated-product.tsx",
                lineNumber: 32,
                columnNumber: 33
              }, this)
            },
            `hotspot-${merch.x}-${merch.y}`,
            !1,
            {
              fileName: "src/ui/components/item/curated-product.tsx",
              lineNumber: 28,
              columnNumber: 29
            },
            this
          )) }, void 0, !1, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_reactjs_components8.Image, { ...shoppableImage, sizes: "50vw", fallbackAlt: title }, void 0, !1, {
            fileName: "src/ui/components/item/curated-product.tsx",
            lineNumber: 56,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/item/curated-product.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/item/curated-product.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/item/curated-product.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/item/document.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), DefaultDocument = ({ item }) => {
  var _a3, _b, _c;
  let { path } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
    Link_default,
    {
      to: path(item.path),
      prefetch: "intent",
      className: "grid min-h-[100%] bg-[#F5F5F5] rounded-md overflow-hidden border border-[#f5f5f5] hover:border-[#000]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full overflow-hidden w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "px-10 pt-20 h-1/3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: item.title }, void 0, !1, {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { className: "embed-text", children: (_a3 = item.description) == null ? void 0 : _a3.plainText }, void 0, !1, {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 29,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/item/document.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "pl-10 pt-10 max-w-full h-full min-h-[400px] img-container overflow-hidden rounded-t-l-md img-cover grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          import_reactjs_components9.Image,
          {
            ...(_c = (_b = item.medias) == null ? void 0 : _b.images) == null ? void 0 : _c[0],
            sizes: "300px",
            loading: "lazy",
            className: "overflow-hidden rounded-tl-md "
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/item/document.tsx",
            lineNumber: 32,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "src/ui/components/item/document.tsx",
          lineNumber: 31,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/item/document.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/item/document.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}, Document5 = ({ item }) => item.type === "curated-product-story" ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(CuratedProduct, { item }, void 0, !1, {
  fileName: "src/ui/components/item/document.tsx",
  lineNumber: 46,
  columnNumber: 16
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DefaultDocument, { item }, void 0, !1, {
  fileName: "src/ui/components/item/document.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this), DocumentFromCell = ({ item }) => {
  var _a3, _b, _c, _d;
  let mapper = DataMapper(), common = {
    name: item.name,
    path: item.path,
    title: stringForSingleLineComponentWithId(item.components, "title") || item.name
  };
  if (item.shape.identifier === "curated-product-story") {
    let intro2 = (_a3 = item.components.find((c) => c.id === "description")) == null ? void 0 : _a3.content, media2 = (_b = item.components.find((c) => c.id === "shoppable-image")) == null ? void 0 : _b.content;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      Document5,
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
            var _a4;
            return {
              products: ((_a4 = itemsForItemRelationComponentWithId(chunk, "products")) == null ? void 0 : _a4.map((product) => ({
                id: product.id,
                name: product.name,
                path: product.path,
                variant: mapper.API.Object.APIProductVariantToProductVariant(
                  product.defaultVariant
                ),
                topics: []
              }))) || [],
              x: numericValueForComponentWithId(chunk, "hotspot-x") || 0,
              y: numericValueForComponentWithId(chunk, "hotspot-y") || 0
            };
          })) || []
        }
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/item/document.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    );
  }
  let intro = (_d = item.components.find((c) => c.id === "intro")) == null ? void 0 : _d.content, media = choiceComponentWithId(item.components, "media");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
    Document5,
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
    !1,
    {
      fileName: "src/ui/components/item/document.tsx",
      lineNumber: 99,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/grid/tiles/banner.tsx
var import_image6 = require("@crystallize/reactjs-components/dist/image");

// src/ui/lib/grid-tile/linkRenderer.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), LinkRenderer = ({ link, text }) => link.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: text }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/linkRenderer.tsx",
  lineNumber: 8,
  columnNumber: 9
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Link_default, { to: link, children: text }, void 0, !1, {
  fileName: "src/ui/lib/grid-tile/linkRenderer.tsx",
  lineNumber: 12,
  columnNumber: 9
}, this);

// src/ui/components/grid/tiles/banner.tsx
var import_reactjs_components10 = require("@crystallize/reactjs-components"), import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), Banner = ({ tile }) => {
  let { title, description, ctas, isFullWidth, content, styling } = tile, { images, videos } = content, { font, button } = styling || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
    "div",
    {
      className: ` flex md:flex-row flex-col  w-full mx-auto  ${isFullWidth ? "px-8 lg:px-10 max-w-[1600px] w-full items-center pt-10  md:py-0 " : "pl-10 pt-20"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          "div",
          {
            className: `${images != null && images.length ? isFullWidth ? "md:w-1/2" : "md:w-2/5" : "py-40"} items-center pr-8 flex-column relative z-10 `,
            children: [
              title && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
                "h1",
                {
                  className: "text-[1em] leading-[1.2em] font-bold mb-3",
                  style: { fontSize: font ? font.size : "2rem" },
                  children: title
                },
                void 0,
                !1,
                {
                  fileName: "src/ui/components/grid/tiles/banner.tsx",
                  lineNumber: 23,
                  columnNumber: 21
                },
                this
              ),
              description && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("p", { className: "mt-2 mb-5 max-w-[400px] leading-[1.6em]", children: description }, void 0, !1, {
                fileName: "src/ui/components/grid/tiles/banner.tsx",
                lineNumber: 30,
                columnNumber: 33
              }, this),
              ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
                "button",
                {
                  className: "px-8 py-4 rounded font-medium",
                  style: {
                    color: button != null && button.color ? button.color : "#fff",
                    backgroundColor: button != null && button["background color"] ? button["background color"] : "#000",
                    fontSize: button != null && button["font size"] ? button["font size"] : "1rem"
                  },
                  children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, !1, {
                    fileName: "src/ui/components/grid/tiles/banner.tsx",
                    lineNumber: 42,
                    columnNumber: 41
                  }, this) : cta.text
                },
                cta.text,
                !1,
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
          !0,
          {
            fileName: "src/ui/components/grid/tiles/banner.tsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        images && images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "self-end md:w-8/12 w-full pt-10 img-container img-contain md:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          import_image6.Image,
          {
            ...images[0],
            sizes: "(max-width: 500px) 300px, 700px",
            loading: "lazy",
            className: "max-w-none w-full"
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/grid/tiles/banner.tsx",
            lineNumber: 48,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "src/ui/components/grid/tiles/banner.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        videos && videos.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("div", { className: "md:w-8/12 w-full img-container img-contain md:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_reactjs_components10.Video, { ...videos[0], thumbnmailProps: { sizes: "(max-width: 700px) 90vw, 700px" } }, void 0, !1, {
          fileName: "src/ui/components/grid/tiles/banner.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/grid/tiles/banner.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/grid/tiles/banner.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/grid/tiles/embed.tsx
var import_image7 = require("@crystallize/reactjs-components/dist/image");
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), Embed = ({ tile }) => {
  var _a3, _b, _c;
  let { path } = useAppContext(), { title, description, content, ctas } = tile;
  if (!content.items || content.items.length === 0)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { children: "Nothing has been embedded." }, void 0, !1, {
      fileName: "src/ui/components/grid/tiles/embed.tsx",
      lineNumber: 11,
      columnNumber: 16
    }, this);
  let firstItem = content.items[0], firstItemImage = (_c = (_b = (_a3 = firstItem.components.find((component) => component.id === "media")) == null ? void 0 : _a3.content) == null ? void 0 : _b.selectedComponent) == null ? void 0 : _c.content;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(Link_default, { to: path(firstItem.path), prefetch: "intent", className: "grid min-h-[100%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "flex flex-col justify-between items-stretch h-full overflow-hidden w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "px-10 pt-20 md:h-1/3 ", children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { className: "text-2xl font-bold mb-3", children: title }, void 0, !1, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 21,
        columnNumber: 31
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "embed-text", children: description }, void 0, !1, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 22,
        columnNumber: 37
      }, this),
      ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("button", { className: "bg-ctaBlue px-8 py-4 rounded font-medium", children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, !1, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 26,
        columnNumber: 45
      }, this) : cta.text }, cta.link, !1, {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 25,
        columnNumber: 29
      }, this))
    ] }, void 0, !0, {
      fileName: "src/ui/components/grid/tiles/embed.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "pl-10 pt-10 max-w-full h-full img-container overflow-hidden rounded-t-l-md img-cover grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      import_image7.Image,
      {
        ...firstItemImage == null ? void 0 : firstItemImage.firstImage,
        sizes: "300px",
        loading: "lazy",
        className: "overflow-hidden rounded-tl-md "
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/grid/tiles/embed.tsx",
        lineNumber: 31,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "src/ui/components/grid/tiles/embed.tsx",
      lineNumber: 30,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/grid/tiles/embed.tsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/grid/tiles/embed.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/tiles/slider.tsx
var import_react_splide2 = require("@splidejs/react-splide");
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime"), itemMapping = {
  product: ProductFromCell,
  document: DocumentFromCell
}, Slider = ({ tile, options }) => {
  let { dimensions, layout } = options, colspan = layout.colspan, { title, description, content, ctas, styling } = tile, spansOverAllColumns = layout.colspan === dimensions.cols, hasBackgroundColor = styling == null ? void 0 : styling.background.color, isFullWidth = tile.isFullWidth, setInnerPadding = () => {
    if (!spansOverAllColumns)
      return "pl-10";
    if (spansOverAllColumns && !isFullWidth && hasBackgroundColor)
      return "px-10";
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: `${isFullWidth ? "px-8 lg:px-10 max-w-[1650px] w-full mx-auto" : "w-full"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: `pb-10  pt-20 ${setInnerPadding()}`, children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h2", { className: `${colspan > 2 ? "text-3xl" : "text-2xl"} mb-3 font-bold`, children: title }, void 0, !1, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 30,
        columnNumber: 27
      }, this),
      description && /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: `embed-text ${colspan > 2 ? "w-2/4" : "w-5/5"}`, children: description }, void 0, !1, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 31,
        columnNumber: 33
      }, this),
      ctas && ctas.map((cta) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("button", { className: "bg-ctaBlue px-8 py-4 rounded font-medium", children: cta.link ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(LinkRenderer, { link: cta.link, text: cta.text }, void 0, !1, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 35,
        columnNumber: 41
      }, this) : cta.text }, cta.link, !1, {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 34,
        columnNumber: 25
      }, this))
    ] }, void 0, !0, {
      fileName: "src/ui/components/grid/tiles/slider.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: setInnerPadding(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      import_react_splide2.Splide,
      {
        options: {
          rewind: !0,
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
          pagination: !1,
          gap: 10
        },
        className: "splide ",
        children: content.items && content.items.map((item) => {
          let Component = itemMapping[item.type];
          return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_react_splide2.SplideSlide, { className: "slide items-stretch pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Component, { item }, void 0, !1, {
            fileName: "src/ui/components/grid/tiles/slider.tsx",
            lineNumber: 66,
            columnNumber: 37
          }, this) }, item.name, !1, {
            fileName: "src/ui/components/grid/tiles/slider.tsx",
            lineNumber: 65,
            columnNumber: 33
          }, this);
        })
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/grid/tiles/slider.tsx",
        lineNumber: 41,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "src/ui/components/grid/tiles/slider.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/grid/tiles/slider.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/grid.tsx
var import_reactjs_components11 = require("@crystallize/reactjs-components");

// src/ui/components/grid/tiles/hero-slider.tsx
var import_react_splide3 = require("@splidejs/react-splide"), import_image8 = require("@crystallize/reactjs-components/dist/image"), import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), HeroSlider = ({ tile }) => {
  let { content } = tile;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "w-full hero-slider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
    import_react_splide3.Splide,
    {
      options: {
        perPage: 1,
        autoplay: !0,
        interval: 4e3,
        pagination: !0,
        arrows: !1,
        gap: 0
      },
      children: content.images && content.images.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react_splide3.SplideSlide, { className: "slide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        import_image8.Image,
        {
          ...image,
          loading: "eager",
          sizes: "(max-width: 500px) 300px, 700px",
          className: "h-[300px] sm:h-[400px] lg:h-[700px] [&>picture>img]:w-full [&>picture>img]:h-full [&>picture>img]:object-cover"
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
          lineNumber: 24,
          columnNumber: 33
        },
        this
      ) }, image.url, !1, {
        fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
        lineNumber: 23,
        columnNumber: 29
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
      lineNumber: 10,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/components/grid/tiles/hero-slider.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// src/ui/components/grid/grid.tsx
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), tileMapping = {
  banner: Banner,
  embed: Embed,
  slider: Slider,
  heroslider: HeroSlider
}, itemMapping2 = {
  product: ProductFromCell,
  document: DocumentFromCell
}, Grid2 = ({ grid }) => {
  var _a3;
  if ((((_a3 = grid == null ? void 0 : grid.rows) == null ? void 0 : _a3.length) || 0) === 0)
    return null;
  let totalColumns = grid.rows[0].columns.reduce((acc, col) => acc + col.layout.colspan, 0), colWidth = Math.round(1530 / totalColumns), styleForCell = (cell, styles3) => {
    var _a4, _b, _c, _d;
    if (!(cell != null && cell.item))
      return styles3;
    let component = cell.item.components.find((component2) => component2.id === "styling");
    return component ? ((_d = (_c = (_b = (_a4 = component == null ? void 0 : component.content) == null ? void 0 : _a4.chunks[0]) == null ? void 0 : _b.find((chunk) => chunk.id === "use-full-width")) == null ? void 0 : _c.content) == null ? void 0 : _d.value) ? {
      ...styles3,
      gridColumn: `1 / span ${totalColumns + 2}`,
      gridRow: `auto / span ${cell.layout.rowspan}`
    } : {
      ...styles3,
      gridColumn: `${cell.layout.colIndex + 2} / span ${cell.layout.colspan}`,
      gridRow: `${cell.layout.rowIndex + 1} / span ${cell.layout.rowspan}`
    } : {
      ...styles3,
      gridColumn: `${cell.layout.colIndex + 2} / span ${cell.layout.colspan}`,
      gridRow: `${cell.layout.rowIndex + 1} / span ${cell.layout.rowspan}`
    };
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { className: "frntr-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
    Grid,
    {
      grid,
      itemComponentMapping: itemMapping2,
      tileViewComponentMapping: tileMapping,
      type: import_reactjs_components11.GridRenderingType.Div,
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
    !1,
    {
      fileName: "src/ui/components/grid/grid.tsx",
      lineNumber: 61,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "src/ui/components/grid/grid.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Shop.tsx
var import_reactjs_components12 = require("@crystallize/reactjs-components");
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), Shop_default = ({ shop }) => {
  let { path, _t } = useAppContext();
  return shop == null ? /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { children: "undifiend" }, void 0, !1, {
    fileName: "src/ui/pages/Shop.tsx",
    lineNumber: 10,
    columnNumber: 33
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_jsx_dev_runtime54.Fragment, { children: [
    shop.hero && /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "w-full mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(Grid2, { grid: shop.hero }, void 0, !1, {
      fileName: "src/ui/pages/Shop.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Shop.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "2xl container mx-auto px-4 md:px-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex flex-wrap gap-4 pt-20 mb-10  items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("h2", { className: "font-medium text-md text-md w-full block", children: _t("browse") }, void 0, !1, {
          fileName: "src/ui/pages/Shop.tsx",
          lineNumber: 20,
          columnNumber: 21
        }, this),
        shop.categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
          Link_default,
          {
            to: path(category.path),
            prefetch: "intent",
            className: "w-auto bg-grey py-2 sm:px-6 px-4 rounded-md sm:text-lg text-md font-bold category-link",
            children: category.name
          },
          category.name,
          !1,
          {
            fileName: "src/ui/pages/Shop.tsx",
            lineNumber: 22,
            columnNumber: 25
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "src/ui/pages/Shop.tsx",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { children: shop.categories.map((category) => {
        var _a3;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "border-t border-[#dfdfdf] py-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "flex  flex-col sm:flex-row sm:items-center justify-between ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "w-3/4 sm:w-2/4 leading-[1.5em]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("h2", { className: "font-bold text-2xl mb-3", children: category.name }, void 0, !1, {
                fileName: "src/ui/pages/Shop.tsx",
                lineNumber: 37,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_reactjs_components12.ContentTransformer, { className: "leading-1", json: (_a3 = category.description) == null ? void 0 : _a3.json }, void 0, !1, {
                fileName: "src/ui/pages/Shop.tsx",
                lineNumber: 38,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "src/ui/pages/Shop.tsx",
              lineNumber: 36,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
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
              !0,
              {
                fileName: "src/ui/pages/Shop.tsx",
                lineNumber: 40,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/ui/pages/Shop.tsx",
            lineNumber: 35,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(CategoryList, { products: category.products }, void 0, !1, {
            fileName: "src/ui/pages/Shop.tsx",
            lineNumber: 49,
            columnNumber: 29
          }, this)
        ] }, category.path, !0, {
          fileName: "src/ui/pages/Shop.tsx",
          lineNumber: 34,
          columnNumber: 25
        }, this);
      }) }, void 0, !1, {
        fileName: "src/ui/pages/Shop.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Shop.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Shop.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/stories/index.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: splide_default_min_default }], meta4 = ({ data }) => buildMetas(data), headers5 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader13 = async ({ request, params }) => {
  let requestContext = getContext(request), path = "/stories", { shared, secret } = await getStoreFront(requestContext.host), shop = await CrystallizeAPI({
    apiClient: secret.apiClient,
    language: requestContext.language,
    isPreview: requestContext.isPreview
  }).fetchShop(path);
  return (0, import_node23.json)({ shop }, StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier));
}, stories_default = () => {
  let { shop } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(Shop_default, { shop }, void 0, !1, {
    fileName: "src/routes/$langstore/stories/index.tsx",
    lineNumber: 42,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/api/cart/$id.tsx
var id_exports2 = {};
__export(id_exports2, {
  loader: () => loader14
});
var loader14 = async ({ params }) => {
  let cartWrapper = await cartWrapperRepository.find(params.id);
  if (!cartWrapper)
    throw {
      message: `Cart '${params.id}' does not exist.`,
      status: 404
    };
  return privateJson(cartWrapper);
};

// src/routes/$langstore/shop/$folder.tsx
var folder_exports = {};
__export(folder_exports, {
  default: () => folder_default,
  headers: () => headers6,
  links: () => links3,
  loader: () => loader15,
  meta: () => meta5
});
var import_node24 = require("@remix-run/node"), import_react25 = require("@remix-run/react");

// node_modules/rc-slider/assets/index.css
var assets_default = "/build/_assets/index-NXU3OAQ7.css";

// node_modules/@crystallize/reactjs-components/assets/video/styles.css
var styles_default = "/build/_assets/styles-CPN6OTPG.css";

// src/ui/components/search/index.tsx
var import_react22 = require("@remix-run/react"), import_react23 = require("react");

// src/ui/components/search/attribute-filter.tsx
var import_react19 = require("react");

// src/assets/filterIcon.svg
var filterIcon_default = "/build/_assets/filterIcon-K53QUPVR.svg";

// src/ui/bridge/useSearchParams.ts
var import_react18 = require("@remix-run/react"), useSearchParams_default = () => (0, import_react18.useSearchParams)();

// src/ui/components/search/attribute-filter.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), AttributeFilter = ({ attributes }) => {
  let [show, setShow] = (0, import_react19.useState)(!1), { _t } = useAppContext(), [searchParams] = useSearchParams_default(), selectedAttributes = searchParams.getAll("attr");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_jsx_dev_runtime56.Fragment, { children: Object.keys(attributes).length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      "div",
      {
        className: "relative flex justify-between items-center w-60 bg-grey py-2 px-6 rounded-md hover:cursor-pointer",
        onClick: () => setShow(!show),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("p", { className: "text-md font-bold", children: _t("search.filterByAttributes") }, void 0, !1, {
            fileName: "src/ui/components/search/attribute-filter.tsx",
            lineNumber: 19,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("img", { src: filterIcon_default, alt: "" }, void 0, !1, {
            fileName: "src/ui/components/search/attribute-filter.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/ui/components/search/attribute-filter.tsx",
        lineNumber: 15,
        columnNumber: 21
      },
      this
    ),
    show && /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "absolute w-60 z-50", children: Object.keys(attributes).map((key) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "bg-grey px-5 py-2 border-bottom-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("p", { className: "font-semibold", children: key }, void 0, !1, {
        fileName: "src/ui/components/search/attribute-filter.tsx",
        lineNumber: 26,
        columnNumber: 37
      }, this),
      attributes[key].map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
          "input",
          {
            type: "checkbox",
            value: `${key}_${item.value}`,
            name: "attr",
            defaultChecked: selectedAttributes.includes(`${key}_${item.value}`)
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/search/attribute-filter.tsx",
            lineNumber: 29,
            columnNumber: 45
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("label", { htmlFor: item.value, children: item.value }, void 0, !1, {
          fileName: "src/ui/components/search/attribute-filter.tsx",
          lineNumber: 35,
          columnNumber: 45
        }, this)
      ] }, index, !0, {
        fileName: "src/ui/components/search/attribute-filter.tsx",
        lineNumber: 28,
        columnNumber: 41
      }, this))
    ] }, key, !0, {
      fileName: "src/ui/components/search/attribute-filter.tsx",
      lineNumber: 25,
      columnNumber: 33
    }, this)) }, void 0, !1, {
      fileName: "src/ui/components/search/attribute-filter.tsx",
      lineNumber: 23,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/search/attribute-filter.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/search/attribute-filter.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
};

// src/ui/components/search/price-range-filter.tsx
var import_react20 = require("react"), import_rc_slider = __toESM(require("rc-slider")), import_react21 = require("@remix-run/react");
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime"), PriceRangeFilter = ({
  min,
  max,
  formRef
}) => {
  let submit = (0, import_react21.useSubmit)(), { state: contextState, _t } = useAppContext(), [showSlider, setShowSlider] = (0, import_react20.useState)(!1), [priceValue, setPriceValue] = (0, import_react20.useState)({ min, max });
  function onRangeChange(newValue) {
    setPriceValue({ min: newValue[0], max: newValue[1] });
  }
  let minInput = (0, import_react20.useRef)(null), maxInput = (0, import_react20.useRef)(null);
  function onRangeDone(newValue) {
    minInput.current.value = newValue[0], maxInput.current.value = newValue[1], submit(formRef.current);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "relative bg-grey filter-container rounded-md text-md w-60 font-bold hover:cursor-pointer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("input", { type: "hidden", name: "min", defaultValue: min, ref: minInput }, void 0, !1, {
      fileName: "src/ui/components/search/price-range-filter.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("input", { type: "hidden", name: "max", defaultValue: max, ref: maxInput }, void 0, !1, {
      fileName: "src/ui/components/search/price-range-filter.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("p", { onClick: () => setShowSlider(!showSlider), className: "text-textBlack px-4 py-2", children: _t("search.price.range") }, void 0, !1, {
      fileName: "src/ui/components/search/price-range-filter.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    showSlider && /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "absolute w-full bg-grey  px-4 py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
        import_rc_slider.default,
        {
          range: !0,
          min,
          max,
          defaultValue: [priceValue.min, priceValue.max],
          allowCross: !1,
          onChange: onRangeChange,
          onAfterChange: onRangeDone,
          marks: {},
          handleStyle: {
            backgroundColor: "#000",
            border: "1px solid #000"
          },
          trackStyle: {
            backgroundColor: "#000"
          }
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/search/price-range-filter.tsx",
          lineNumber: 38,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("div", { className: "flex justify-between mt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("p", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: priceValue.min }, void 0, !1, {
          fileName: "src/ui/components/search/price-range-filter.tsx",
          lineNumber: 57,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/search/price-range-filter.tsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)("p", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: priceValue.max }, void 0, !1, {
          fileName: "src/ui/components/search/price-range-filter.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/search/price-range-filter.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/search/price-range-filter.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/search/price-range-filter.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/search/price-range-filter.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this);
};

// src/ui/components/search/index.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime"), Filter = ({ aggregations }) => {
  let submit = (0, import_react22.useSubmit)(), navigate = (0, import_react22.useNavigate)(), location2 = (0, import_react22.useLocation)(), formRef = (0, import_react23.useRef)(null), transition = (0, import_react22.useTransition)(), { _t } = useAppContext(), price = aggregations.search.aggregations.price, attributes = aggregations.search.aggregations.attributes;
  function handleChange(event) {
    submit(event.currentTarget, { replace: !0 });
  }
  let grouped = attributes.reduce(
    (memo, item) => (memo[item.attribute] || (memo[item.attribute] = []), memo[item.attribute].push(item), memo),
    {}
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("div", { className: "flex gap-5 mb-10 flex-wrap items-center justify-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
      import_react22.Form,
      {
        method: "get",
        action: location2.pathname,
        onChange: handleChange,
        ref: formRef,
        className: "flex gap-4 flex-wrap",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
            "select",
            {
              name: "orderBy",
              className: "w-60 bg-grey py-2 px-6 rounded-md text-md font-bold ",
              defaultValue: "NAME_ASC",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("option", { disabled: !0, value: "", className: "text-textBlack", children: _t("search.sort") }, void 0, !1, {
                  fileName: "src/ui/components/search/index.tsx",
                  lineNumber: 49,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("option", { value: "PRICE_ASC", children: _t("search.price.lowToHigh") }, void 0, !1, {
                  fileName: "src/ui/components/search/index.tsx",
                  lineNumber: 52,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("option", { value: "PRICE_DESC", children: _t("search.price.highToLow") }, void 0, !1, {
                  fileName: "src/ui/components/search/index.tsx",
                  lineNumber: 53,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("option", { value: "NAME_ASC", children: _t("search.name.ascending") }, void 0, !1, {
                  fileName: "src/ui/components/search/index.tsx",
                  lineNumber: 54,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("option", { value: "NAME_DESC", children: _t("search.name.descending") }, void 0, !1, {
                  fileName: "src/ui/components/search/index.tsx",
                  lineNumber: 55,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("option", { value: "STOCK_ASC", children: _t("search.stock.ascending") }, void 0, !1, {
                  fileName: "src/ui/components/search/index.tsx",
                  lineNumber: 56,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("option", { value: "STOCK_DESC", children: _t("search.stock.descending") }, void 0, !1, {
                  fileName: "src/ui/components/search/index.tsx",
                  lineNumber: 57,
                  columnNumber: 25
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "src/ui/components/search/index.tsx",
              lineNumber: 44,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "src/ui/components/search/index.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(PriceRangeFilter, { min: price.min, max: price.max, formRef }, void 0, !1, {
            fileName: "src/ui/components/search/index.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(AttributeFilter, { attributes: grouped }, void 0, !1, {
            fileName: "src/ui/components/search/index.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/ui/components/search/index.tsx",
        lineNumber: 36,
        columnNumber: 13
      },
      this
    ),
    transition.state === "submitting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("p", { children: [
      _t("loading"),
      "..."
    ] }, void 0, !0, {
      fileName: "src/ui/components/search/index.tsx",
      lineNumber: 64,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)("button", { onClick: () => navigate(location2.pathname), children: _t("search.removeAllFilters") }, void 0, !1, {
      fileName: "src/ui/components/search/index.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/search/index.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
};

// src/ui/components/search/filtered-products.tsx
var import_react24 = require("react");
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime"), FilteredProducts = ({ products }) => {
  let [checked, setChecked] = (0, import_react24.useState)(!0), { _t } = useAppContext(), displayableProducts = checked ? products : products.filter((product) => product.variant.isDefault === !0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("h2", { className: "font-medium text-md my-5", children: _t("search.foundResults", { count: products.length }) }, void 0, !1, {
        fileName: "src/ui/components/search/filtered-products.tsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      products.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("span", { className: "font-medium text-md my-5", children: _t("search.showVariants") }, void 0, !1, {
          fileName: "src/ui/components/search/filtered-products.tsx",
          lineNumber: 16,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("label", { className: "relative inline-block w-[46px] h-[24px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
            "input",
            {
              type: "checkbox",
              className: "opacity-0 h-0 w-0",
              onChange: (e) => setChecked(e.target.checked),
              defaultChecked: checked
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/search/filtered-products.tsx",
              lineNumber: 18,
              columnNumber: 29
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("span", { className: "slider" }, void 0, !1, {
            fileName: "src/ui/components/search/filtered-products.tsx",
            lineNumber: 24,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/search/filtered-products.tsx",
          lineNumber: 17,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/search/filtered-products.tsx",
        lineNumber: 15,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/search/filtered-products.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6", children: displayableProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Product, { item: product }, index, !1, {
      fileName: "src/ui/components/search/filtered-products.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "src/ui/components/search/filtered-products.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/search/filtered-products.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Category.tsx
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime"), Category_default = ({
  data
}) => {
  let { category, products, priceRangeAndAttributes } = data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_jsx_dev_runtime60.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "container 2xl px-5 mx-auto w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("h1", { className: "text-3xl font-bold mt-10 mb-4", children: category.title }, void 0, !1, {
        fileName: "src/ui/pages/Category.tsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("p", { className: "w-3/5 mb-10", children: category.description }, void 0, !1, {
        fileName: "src/ui/pages/Category.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Category.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    category.hero && /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "w-full mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(Grid2, { grid: category.hero }, void 0, !1, {
      fileName: "src/ui/pages/Category.tsx",
      lineNumber: 26,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Category.tsx",
      lineNumber: 25,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: `container 2xl mt-2 px-5 mx-auto w-full ${category.hero ? "mt-20 pt-10" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(Filter, { aggregations: priceRangeAndAttributes }, void 0, !1, {
        fileName: "src/ui/pages/Category.tsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(FilteredProducts, { products }, void 0, !1, {
        fileName: "src/ui/pages/Category.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Category.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Category.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/shop/$folder.tsx
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: assets_default },
  { rel: "stylesheet", href: splide_default_min_default },
  { rel: "stylesheet", href: styles_default }
], headers6 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, meta5 = ({ data }) => buildMetas(data), loader15 = async ({ request, params }) => {
  let requestContext = getContext(request), path = `/shop/${params.folder}`, { shared } = await getStoreFront(requestContext.host), data = await dataFetcherForShapePage_server_default("category", path, requestContext, params);
  return (0, import_node24.json)({ data }, StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier));
}, folder_default = () => {
  let { data } = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(Category_default, { data }, void 0, !1, {
    fileName: "src/routes/$langstore/shop/$folder.tsx",
    lineNumber: 40,
    columnNumber: 12
  }, this);
};

// src/routes/api/webhook/cache/purge.tsx
var purge_exports = {};
__export(purge_exports, {
  action: () => action14
});
var import_node25 = require("@remix-run/node");

// src/use-cases/http/fastly/purgeKeys.ts
var purgeKeys_default = async (keys) => await (await fetch(`https://api.fastly.com/service/${process.env.FASTLY_SERVICE_ID}/purge`, {
  method: "POST",
  headers: {
    "fastly-soft-purge": "1",
    "Fastly-Key": `${process.env.FASTLY_API_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
    "surrogate-key": keys.join(" ")
  }
})).json();

// src/routes/api/webhook/cache/purge.tsx
var action14 = async ({ request }) => {
  let requestContext = getContext(request), { secret: storefront } = await getStoreFront(requestContext.host), keys = [storefront.config.tenantIdentifier], keyPurged = await purgeKeys_default(keys);
  return (0, import_node25.json)({
    message: `${Object.keys(keyPurged).length} key(s) soft purged.`,
    keys: keyPurged
  });
};

// src/routes/$langstore/shop/index.tsx
var shop_exports = {};
__export(shop_exports, {
  default: () => shop_default,
  headers: () => headers7,
  links: () => links4,
  loader: () => loader16,
  meta: () => meta6
});
var import_node26 = require("@remix-run/node"), import_react26 = require("@remix-run/react");
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime"), links4 = () => [{ rel: "stylesheet", href: splide_default_min_default }], meta6 = ({ data }) => buildMetas(data), headers7 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader16 = async ({ request, params }) => {
  let requestContext = getContext(request), path = "/shop", { shared, secret } = await getStoreFront(requestContext.host), shop = await CrystallizeAPI({
    apiClient: secret.apiClient,
    language: requestContext.language,
    isPreview: requestContext.isPreview
  }).fetchShop(path);
  return (0, import_node26.json)({ shop }, StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier));
}, shop_default = () => {
  let { shop } = (0, import_react26.useLoaderData)();
  return console.log("fuck", shop), /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Shop_default, { shop }, void 0, !1, {
    fileName: "src/routes/$langstore/shop/index.tsx",
    lineNumber: 42,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/order/$id.tsx
var id_exports3 = {};
__export(id_exports3, {
  default: () => id_default,
  headers: () => headers8,
  loader: () => loader17
});
var import_node27 = require("@remix-run/node"), import_react30 = require("@remix-run/react");

// src/ui/pages/Order.tsx
var import_react29 = require("react");

// src/ui/hooks/useAuth.ts
var import_local_storage2 = require("@rehooks/local-storage"), import_jwt_decode = __toESM(require("jwt-decode")), import_react27 = require("react");
function useAuth() {
  let [token] = (0, import_local_storage2.useLocalStorage)("jwt", ""), [searchParams] = useSearchParams_default(), location2 = useLocation_default();
  (0, import_react27.useEffect)(() => {
    if (searchParams.has("token")) {
      let urlToken = searchParams.get("token");
      searchParams.delete("token");
      try {
        let decoded = (0, import_jwt_decode.default)(urlToken);
        decoded && decoded.sub === "isSupposedToBeLoggedInOnServiceApi" && (0, import_local_storage2.writeStorage)("jwt", urlToken);
      } catch (exception) {
        console.log(exception);
      }
      window.location.href = location2.pathname;
    }
  });
  let userInfos = {}, isAuthenticated2 = !1;
  try {
    let decoded = (0, import_jwt_decode.default)(token);
    decoded && decoded.exp > Date.now() / 1e3 && (isAuthenticated2 = !0, userInfos = {
      email: decoded.email,
      firstname: decoded.firstname,
      lastname: decoded.lastname
    });
  } catch {
  }
  return {
    login: (jwt5) => {
      (0, import_local_storage2.writeStorage)("jwt", jwt5);
    },
    logout: () => {
      (0, import_local_storage2.writeStorage)("jwt", "");
    },
    isAuthenticated: isAuthenticated2,
    userInfos
  };
}

// src/ui/components/checkout-forms/magicklogin.tsx
var import_react28 = require("react");
var import_axios = __toESM(require("axios")), import_jsx_dev_runtime63 = require("react/jsx-dev-runtime"), MagickLoginForm = ({ enabledGuest, title, actionTitle, onlyLogin = !1 }) => {
  let { state: appContextState, path, _t } = useAppContext(), { isAuthenticated: isAuthenticated2, userInfos, logout } = useAuth(), [formData, updateFormData] = (0, import_react28.useState)({
    firstname: (userInfos == null ? void 0 : userInfos.firstname) || "",
    lastname: (userInfos == null ? void 0 : userInfos.lastname) || "",
    email: (userInfos == null ? void 0 : userInfos.email) || ""
  }), handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  }, displayOnlyLogin = onlyLogin || isAuthenticated2;
  console.log("check1");
  let [number, setNumber] = (0, import_react28.useState)(""), [location2, setLocation] = (0, import_react28.useState)(""), [load, setLoad] = (0, import_react28.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "flex flex-col mt-5 gap-2 w-full sm:min-w-[400px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("h1", { className: "font-bold text-2xl mt-5 mb-3", children: "Inquiry form" }, void 0, !1, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 148,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "flex ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "m-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("label", { className: "text-sm font-semibold", htmlFor: "phonenumber", children: "Phone Number" }, void 0, !1, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 152,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("input", { value: number, onChange: (e) => {
          setNumber(e.target.value), setLoad(!load);
        }, className: " w-[400px] p-4 rounded-sm block bg-grey h-[50px] ", type: "text", placeholder: "+91 9022xxxxxx" }, void 0, !1, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 152,
          columnNumber: 108
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
        lineNumber: 151,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "m-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("label", { htmlFor: "location", className: "text-sm font-semibold", children: "Location" }, void 0, !1, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 156,
          columnNumber: 25
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("input", { type: "text", value: location2, onChange: (e) => {
          setLocation(e.target.value), setLoad(!load);
        }, className: "w-[400px] p-4 rounded-sm block bg-grey h-[50px] w-fulll", placeholder: "Jaipur" }, void 0, !1, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 156,
          columnNumber: 103
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
        lineNumber: 155,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 149,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("button", { type: "submit", onClick: () => {
      console.log(number, location2);
      let data = {
        Number: number,
        Location: location2
      };
      import_axios.default.post("https://sheet.best/api/sheets/0f279ea2-12b0-483a-b42e-14190f671b7f", data).then((response) => {
        console.log(response), setNumber(""), setLocation(""), setLoad("");
      });
    }, className: "bg-black text-white rounded-md px-6 py-3 mt-5 float-right w-1/4", children: "Inquire" }, void 0, !1, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 160,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Order.tsx
var import_reactjs_hooks5 = require("@crystallize/reactjs-hooks"), import_jsx_dev_runtime64 = require("react/jsx-dev-runtime"), Order_default = ({ id, isServerSideAuthenticated }) => {
  let [tryCount, setTryCount] = (0, import_react29.useState)(0), [order, setOrder] = (0, import_react29.useState)(null), { state: contextState } = useAppContext(), { isAuthenticated: isAuthenticated2 } = useAuth();
  return (0, import_react29.useEffect)(() => {
    let timeout;
    return (async () => {
      try {
        setOrder(
          await ServiceAPI({
            language: contextState.language,
            serviceApiUrl: contextState.serviceApiUrl
          }).fetchOrder(id)
        );
      } catch {
        timeout = setTimeout(() => {
          setTryCount(tryCount + 1);
        }, 500 * tryCount);
      }
    })(), () => clearTimeout(timeout);
  }, [id, tryCount]), /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "min-h-[70vh] items-center flex lg:w-content mx-auto w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_reactjs_hooks5.ClientOnly, { children: order && isAuthenticated2 && isServerSideAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "w-3/4 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("h1", { className: "font-bold text-3xl", children: "Order Confirmation" }, void 0, !1, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 40,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { className: "mt-4", children: "We've received your order." }, void 0, !1, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 41,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: [
      " The order ID is: #",
      order.id,
      "."
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 42,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "mt-2", children: [
      order.cart.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "bg-grey2 px-3 py-2 mb-2 gap-2 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "img-container overflow-hidden rounded-md img-contain w-[50px] h-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("img", { src: item.imageUrl }, void 0, !1, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 48,
          columnNumber: 49
        }, this) }, void 0, !1, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 47,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex w-full justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { className: "font-semibold", children: [
            item.name,
            " x ",
            item.quantity
          ] }, void 0, !0, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 52,
            columnNumber: 53
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 51,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: item.price.gross }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 57,
            columnNumber: 53
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 56,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 50,
          columnNumber: 45
        }, this)
      ] }, index, !0, {
        fileName: "src/ui/pages/Order.tsx",
        lineNumber: 46,
        columnNumber: 41
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex flex-col gap-4 border-t-2 border-grey4 py-4 items-end px-4 mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex text-grey3 justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: "Net" }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 67,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: order.total.net }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 69,
            columnNumber: 45
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 68,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 66,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex text-grey3 justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: "Tax amount" }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 73,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: order.total.gross - order.total.net }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 75,
            columnNumber: 45
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 74,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 72,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex font-bold text-xl justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: "Paid" }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 81,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: order.total.gross }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 83,
            columnNumber: 45
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Order.tsx",
            lineNumber: 82,
            columnNumber: 41
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Order.tsx",
          lineNumber: 80,
          columnNumber: 37
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/Order.tsx",
        lineNumber: 65,
        columnNumber: 33
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/Order.tsx",
      lineNumber: 43,
      columnNumber: 29
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 39,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 38,
    columnNumber: 21
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "min-h-[70vh] items-center justify-center flex max-w-[500px] mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "mx-auto items-center justify-center flex w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(MagickLoginForm, { title: "Login", onlyLogin: !0, actionTitle: "Login" }, void 0, !1, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 93,
    columnNumber: 29
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 92,
    columnNumber: 25
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 91,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Order.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/order/$id.tsx
var import_jsx_dev_runtime65 = require("react/jsx-dev-runtime"), headers8 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader17 = async ({ request, params }) => {
  let requestContext = getContext(request), { shared } = await getStoreFront(requestContext.host);
  return (0, import_node27.json)(
    { orderId: params.id, isServerSideAuthenticated: await isAuthenticated(request) },
    StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", ["order" + params.id], shared.config.tenantIdentifier)
  );
}, id_default = () => {
  let { orderId, isServerSideAuthenticated } = (0, import_react30.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(Order_default, { id: orderId, isServerSideAuthenticated }, void 0, !1, {
    fileName: "src/routes/$langstore/order/$id.tsx",
    lineNumber: 25,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => checkout_default,
  headers: () => headers9,
  loader: () => loader18
});
var import_react41 = require("@remix-run/react");

// src/ui/pages/Checkout.tsx
var import_reactjs_hooks6 = require("@crystallize/reactjs-hooks"), import_react40 = require("react");

// src/ui/components/checkout-forms/address.tsx
var import_react31 = require("react"), import_local_storage3 = require("@rehooks/local-storage");

// src/ui/components/input.tsx
var import_jsx_dev_runtime66 = require("react/jsx-dev-runtime"), Input = ({ placeholder, defaultValue, name, onChange, label, required, disabled = !1, type = "text" }) => /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("label", { htmlFor: name, className: "flex flex-col frntr-input", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("span", { children: [
    label,
    required && "*"
  ] }, void 0, !0, {
    fileName: "src/ui/components/input.tsx",
    lineNumber: 15,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
    "input",
    {
      defaultValue,
      type,
      id: name,
      placeholder,
      name,
      onChange,
      required,
      className: "bg-grey",
      disabled
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/input.tsx",
      lineNumber: 19,
      columnNumber: 13
    },
    this
  )
] }, void 0, !0, {
  fileName: "src/ui/components/input.tsx",
  lineNumber: 14,
  columnNumber: 9
}, this);

// src/ui/components/checkout-forms/address.tsx
var import_jsx_dev_runtime67 = require("react/jsx-dev-runtime"), AddressForm = ({ title, onValidSubmit }) => {
  let [isReadonly, setToReadonly] = (0, import_react31.useState)(!1), { _t } = useAppContext(), { isAuthenticated: isAuthenticated2, userInfos } = useAuth(), [customer] = (0, import_local_storage3.useLocalStorage)("customer", {
    email: userInfos == null ? void 0 : userInfos.email,
    firstname: userInfos == null ? void 0 : userInfos.firstname,
    lastname: userInfos == null ? void 0 : userInfos.lastname
  }), handleChange = (event) => {
    (0, import_local_storage3.writeStorage)("customer", {
      ...customer,
      [event.target.name]: event.target.value.trim()
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("h1", { className: "font-bold text-2xl mt-5 mb-3", children: title }, void 0, !1, {
      fileName: "src/ui/components/checkout-forms/address.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    isAuthenticated2 && /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("p", { children: [
      _t("hello"),
      " ",
      userInfos == null ? void 0 : userInfos.firstname,
      " ",
      userInfos == null ? void 0 : userInfos.lastname,
      " (",
      /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("strong", { children: userInfos == null ? void 0 : userInfos.email }, void 0, !1, {
        fileName: "src/ui/components/checkout-forms/address.tsx",
        lineNumber: 29,
        columnNumber: 81
      }, this),
      "),"
    ] }, void 0, !0, {
      fileName: "src/ui/components/checkout-forms/address.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
      "form",
      {
        onSubmit: (event) => (event.preventDefault(), setToReadonly(!0), onValidSubmit(), !1),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
              Input,
              {
                defaultValue: customer.firstname || (userInfos == null ? void 0 : userInfos.firstname),
                placeholder: "Frodo",
                label: _t("address.firstname"),
                name: "firstname",
                required: !0,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 41,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
              Input,
              {
                defaultValue: customer.lastname || (userInfos == null ? void 0 : userInfos.lastname),
                placeholder: "Baggins",
                label: _t("address.lastname"),
                name: "lastname",
                required: !0,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 51,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
            Input,
            {
              defaultValue: customer.email || (userInfos == null ? void 0 : userInfos.email),
              label: _t("address.email"),
              placeholder: "Frodo.ringmaster@shireclub.com",
              name: "email",
              required: !0,
              type: "email",
              onChange: handleChange,
              disabled: isReadonly
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 62,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
            Input,
            {
              defaultValue: customer.streetAddress,
              label: _t("address.streetAddress"),
              placeholder: "6th hole from the Brandybuck Family",
              name: "streetAddress",
              required: !0,
              onChange: handleChange,
              disabled: isReadonly
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 74,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: "grid grid-cols-3 gap-3 mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
              Input,
              {
                defaultValue: customer.country,
                label: _t("address.country"),
                placeholder: "Middle Earth",
                name: "country",
                required: !0,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 85,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
              Input,
              {
                defaultValue: customer.city,
                label: _t("address.city"),
                placeholder: "Shire",
                name: "city",
                required: !0,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 94,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
              Input,
              {
                defaultValue: customer.zipCode,
                label: _t("address.zipCode"),
                placeholder: "3130",
                name: "zipCode",
                required: !0,
                onChange: handleChange,
                disabled: isReadonly
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/checkout-forms/address.tsx",
                lineNumber: 103,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
            Input,
            {
              defaultValue: customer.additionalInfo,
              label: _t("address.additionalInfo"),
              placeholder: "Anything we should keep in mind before dispatching your order?",
              name: "additionalInfo",
              onChange: handleChange,
              disabled: isReadonly
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 114,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "src/ui/components/checkout-forms/address.tsx",
            lineNumber: 113,
            columnNumber: 17
          }, this),
          !isReadonly && /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
            "button",
            {
              className: "bg-black text-white rounded-md px-6 py-3 mt-5 float-right",
              disabled: isReadonly,
              type: "submit",
              children: _t("address.next")
            },
            void 0,
            !1,
            {
              fileName: "src/ui/components/checkout-forms/address.tsx",
              lineNumber: 124,
              columnNumber: 21
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "src/ui/components/checkout-forms/address.tsx",
        lineNumber: 32,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/ui/components/checkout-forms/address.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this);
};

// src/ui/components/payments/index.tsx
var import_react39 = require("react");

// src/ui/components/payments/crystal/card.tsx
var import_react32 = require("react"), import_local_storage4 = require("@rehooks/local-storage");

// src/assets/crystalcard-logo.svg
var crystalcard_logo_default = "/build/_assets/crystalcard-logo-6P24KHYU.svg";

// src/ui/components/payments/crystal/card.tsx
var import_jsx_dev_runtime68 = require("react/jsx-dev-runtime"), CrystalCardButton = ({
  paying = !1,
  onClick
}) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
    "button",
    {
      className: "w-full h-[70px] text-white mt-2 rounded-md px-8 bg-grey flex flex-row justify-between items-center border border-transparent hover:border-black",
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick || void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("img", { className: " h-[35px]", src: `${crystalcard_logo_default}`, height: "35", alt: "Crystal Card" }, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/crystal/card.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
}, CrystalCard = () => {
  let { cart, isEmpty, empty } = useLocalCart(), { state, path, _t } = useAppContext(), [paying, setPaying] = (0, import_react32.useState)(!1), [customer] = (0, import_local_storage4.useLocalStorage)("customer", {}), navigate = useNavigate_default();
  return isEmpty() ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
    "form",
    {
      onSubmit: async (event) => {
        setPaying(!0), event.preventDefault();
        let cardInfo = new FormData(event.target);
        await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).sendPaidOrderWithCrystalCard(cart, customer, Object.fromEntries(cardInfo.entries())), empty(), navigate(path(`/order/cart/${cart.cartId}`), { replace: !0 });
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("label", { htmlFor: "number", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("span", { children: [
              _t("payment.cardNumber"),
              "*"
            ] }, void 0, !0, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 55,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
              "input",
              {
                type: "text",
                id: "number",
                placeholder: "1234 1234 1234 1234",
                name: "number",
                required: !0,
                className: "bg-grey"
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/payments/crystal/card.tsx",
                lineNumber: 56,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("label", { htmlFor: "expiration", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("span", { children: _t("payment.expiration") }, void 0, !1, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 66,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
              "input",
              {
                type: "text",
                id: "expiration",
                placeholder: "MM / YY",
                name: "expiration",
                required: !0,
                className: "bg-grey"
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/payments/crystal/card.tsx",
                lineNumber: 67,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("label", { htmlFor: "cvc", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("span", { children: "CVC*" }, void 0, !1, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("input", { type: "text", id: "cvc", placeholder: "CVC", name: "cvc", required: !0, className: "bg-grey" }, void 0, !1, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 78,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("div", { className: "grid grid-cols-2 gap-3 mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("label", { htmlFor: "country", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("span", { children: [
              _t("payment.country"),
              "*"
            ] }, void 0, !0, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 83,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
              "input",
              {
                type: "text",
                id: "country",
                placeholder: "United States",
                name: "country",
                required: !0,
                className: "bg-grey"
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/payments/crystal/card.tsx",
                lineNumber: 84,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("label", { htmlFor: "zip", className: "flex flex-col frntr-input", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("span", { children: [
              _t("payment.zipCode"),
              "*"
            ] }, void 0, !0, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 94,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("input", { type: "text", id: "zip", placeholder: "94122", name: "zip", required: !0, className: "bg-grey" }, void 0, !1, {
              fileName: "src/ui/components/payments/crystal/card.tsx",
              lineNumber: 95,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "src/ui/components/payments/crystal/card.tsx",
            lineNumber: 93,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("br", {}, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(CrystalCardButton, { paying }, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/card.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/crystal/card.tsx",
      lineNumber: 40,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/payments/crystal/coin.tsx
var import_react33 = require("react"), import_local_storage5 = require("@rehooks/local-storage");

// src/assets/crystalcoin-logo.svg
var crystalcoin_logo_default = "/build/_assets/crystalcoin-logo-V3GCFWW7.svg";

// src/ui/components/payments/crystal/coin.tsx
var import_jsx_dev_runtime69 = require("react/jsx-dev-runtime"), CrystalCoinButton = ({
  paying = !1,
  onClick
}) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
    "button",
    {
      className: "crystal-coin w-full text-white h-[70px] mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      disabled: paying,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("img", { className: "h-[35px]", src: `${crystalcoin_logo_default}`, height: "35", alt: "Crystal Coin" }, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/coin.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/coin.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, !1, {
          fileName: "src/ui/components/payments/crystal/coin.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/crystal/coin.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
}, CrystalCoin = () => {
  let { cart, isEmpty, empty } = useLocalCart(), [paying, setPaying] = (0, import_react33.useState)(!1), { state, path } = useAppContext(), [customer] = (0, import_local_storage5.useLocalStorage)("customer", {}), navigate = useNavigate_default();
  return isEmpty() ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
    CrystalCoinButton,
    {
      paying,
      onClick: async () => {
        setPaying(!0), await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).sendPaidOrderWithCrystalCoin(cart, customer), empty(), navigate(path(`/order/cart/${cart.cartId}`), { replace: !0 });
      }
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/payments/crystal/coin.tsx",
      lineNumber: 38,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/payments/klarna.tsx
var import_local_storage6 = __toESM(require("@rehooks/local-storage")), import_react34 = require("react");

// src/assets/klarnaLogo.svg
var klarnaLogo_default = "/build/_assets/klarnaLogo-63FD3QBS.svg";

// src/ui/components/payments/klarna.tsx
var import_jsx_dev_runtime70 = require("react/jsx-dev-runtime"), KlarnaButton = ({
  paying = !1,
  onClick
}) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
    "button",
    {
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick || void 0,
      className: "w-full text-white h-[70px] mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("img", { className: "h-[50px] px-1", src: `${klarnaLogo_default}`, height: "50", alt: "Klarna" }, void 0, !1, {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("span", { id: "button-text", className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, !1, {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, !1, {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/klarna.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
}, Klarna = () => {
  let { state, path } = useAppContext(), { cart, isEmpty, empty } = useLocalCart(), navigate = useNavigate_default(), [customer] = (0, import_local_storage6.default)("customer", {});
  if (isEmpty())
    return null;
  let [methodsChoices, setMethodsChoices] = (0, import_react34.useState)([]), triggerKlarna = async (method) => {
    window.Klarna.Payments.load(
      {
        container: "#klarna-payments-container",
        payment_method_category: method.identifier
      },
      async () => {
        await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
          cart,
          customer
        ), window.Klarna.Payments.authorize(
          {
            payment_method_category: method.identifier
          },
          {},
          function(res) {
            res.approved && (empty(), navigate(path(`/order/cart/${cart.cartId}`), { replace: !0 }));
          }
        );
      }
    );
  };
  return (0, import_react34.useEffect)(() => {
    (async () => {
      if (!isEmpty()) {
        let klarnaJS = document.createElement("script");
        klarnaJS.src = "https://x.klarnacdn.net/kp/lib/v1/api.js", klarnaJS.onload = async () => {
          let data = await ServiceAPI({
            language: state.language,
            serviceApiUrl: state.serviceApiUrl
          }).klarna.initiatePayment(cart), methods = data.payment_method_categories;
          window.Klarna.Payments.init({
            client_token: data.client_token
          }), methods.length === 1 ? triggerKlarna(methods[0]) : setMethodsChoices(methods);
        }, document.head.appendChild(klarnaJS);
      }
    })();
  }, [cart.items]), /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_jsx_dev_runtime70.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { id: "klarna-payments-container" }, void 0, !1, {
      fileName: "src/ui/components/payments/klarna.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this),
    methodsChoices.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_jsx_dev_runtime70.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("p", { children: "Klarna Payment Methods: " }, void 0, !1, {
        fileName: "src/ui/components/payments/klarna.tsx",
        lineNumber: 111,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex flex-row flex-wrap", children: methodsChoices.map((method) => /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
        "button",
        {
          onClick: () => triggerKlarna(method),
          className: "bg-[#000] text-[#fff] rounded-md px-8 py-4 flex flex-row items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
              "img",
              {
                className: "h-[30px] px-3",
                src: method.asset_urls.standard,
                height: "30",
                alt: `Klarna - ${method.name}`
              },
              void 0,
              !1,
              {
                fileName: "src/ui/components/payments/klarna.tsx",
                lineNumber: 119,
                columnNumber: 37
              },
              this
            ),
            " ",
            method.name
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/ui/components/payments/klarna.tsx",
          lineNumber: 115,
          columnNumber: 33
        },
        this
      ) }, method.identifier, !1, {
        fileName: "src/ui/components/payments/klarna.tsx",
        lineNumber: 114,
        columnNumber: 29
      }, this)) }, void 0, !1, {
        fileName: "src/ui/components/payments/klarna.tsx",
        lineNumber: 112,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/payments/klarna.tsx",
      lineNumber: 110,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/payments/klarna.tsx",
    lineNumber: 107,
    columnNumber: 9
  }, this);
};

// src/assets/montonioLogo.svg
var montonioLogo_default = "/build/_assets/montonioLogo-LYSWCOAO.svg";

// src/ui/components/payments/montonio.tsx
var import_react35 = require("react"), import_local_storage7 = __toESM(require("@rehooks/local-storage"));
var import_jsx_dev_runtime71 = require("react/jsx-dev-runtime"), MontonioButton = ({ paying = !1, disabled = !1, onClick }) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
    "button",
    {
      className: "w-full h-[70px] text-white mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      disabled: paying || disabled,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("img", { className: "px-1 h-[25px]", src: `${montonioLogo_default}`, height: "35", alt: "Montonio" }, void 0, !1, {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, !1, {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, !1, {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 17,
      columnNumber: 9
    },
    this
  );
}, Montonio = () => {
  let { cart, isEmpty } = useLocalCart(), [paying, setPaying] = (0, import_react35.useState)(!1), { state, _t } = useAppContext(), [customer] = (0, import_local_storage7.default)("customer", {}), [pickupPoints, setPickupPoints] = (0, import_react35.useState)(), [pickupPoint, setPickupPoint] = (0, import_react35.useState)(), API = ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl });
  return isEmpty() ? null : ((0, import_react35.useEffect)(() => {
    (async () => {
      let pickupPoints2 = await API.montonio.fetchPickupPoints(), points = Object.keys(pickupPoints2).reduce((memo, country) => {
        if (country !== "EE")
          return memo;
        let types = pickupPoints2[country].providers.omniva;
        return {
          ...memo,
          [country]: Object.keys(types).reduce((memo2, type) => type !== "parcel_machine" ? memo2 : [...memo2, ...types[type]], [])
        };
      }, {});
      setPickupPoints(points);
    })();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(import_jsx_dev_runtime71.Fragment, { children: [
    pickupPoints && /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("div", { className: "flex flex-col gap-2 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("p", { className: "text-sm font-semibold mb-3", children: _t("payment.montonio.shippingConstraint") }, void 0, !1, {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
        "select",
        {
          defaultValue: "",
          onChange: (event) => {
            let [country, uuid] = event.target.value.split(":");
            setPickupPoint(pickupPoints[country].find((point) => point.uuid === uuid));
          },
          className: "px-4 py-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("option", { disabled: !0, value: "", children: _t("payment.montonio.selectPickupPoint") }, void 0, !1, {
              fileName: "src/ui/components/payments/montonio.tsx",
              lineNumber: 79,
              columnNumber: 25
            }, this),
            Object.keys(pickupPoints).map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("optgroup", { label: country, children: pickupPoints[country].map((point) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("option", { value: `${point.country}:${point.uuid}`, children: point.name }, point.uuid, !1, {
              fileName: "src/ui/components/payments/montonio.tsx",
              lineNumber: 87,
              columnNumber: 45
            }, this)) }, country, !1, {
              fileName: "src/ui/components/payments/montonio.tsx",
              lineNumber: 84,
              columnNumber: 33
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "src/ui/components/payments/montonio.tsx",
          lineNumber: 71,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 69,
      columnNumber: 17
    }, this),
    pickupPoint && /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("div", { className: "bg-[#fff] p-3 px-4 flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("p", { children: [
        pickupPoint.address,
        " ",
        pickupPoint.country
      ] }, void 0, !0, {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 101,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("p", { children: [
        pickupPoint.locality,
        ", ",
        pickupPoint.region
      ] }, void 0, !0, {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 104,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 100,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
      MontonioButton,
      {
        paying,
        disabled: !pickupPoint,
        onClick: async () => {
          setPaying(!0);
          try {
            await API.placeCart(cart, customer, {
              pickupPoint
            });
            let link = await ServiceAPI({
              language: state.language,
              serviceApiUrl: state.serviceApiUrl
            }).montonio.fetchPaymentLink(cart);
            window.location.href = link.url;
          } catch (exception) {
            console.log(exception);
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "src/ui/components/payments/montonio.tsx",
        lineNumber: 110,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("p", { className: "text-xs mt-4 text-grey6", children: [
      "Note: ",
      _t("payment.montonio.shippingFeature")
    ] }, void 0, !0, {
      fileName: "src/ui/components/payments/montonio.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/payments/montonio.tsx",
    lineNumber: 67,
    columnNumber: 9
  }, this));
};

// src/ui/components/payments/quickpaylink.tsx
var import_react36 = require("react"), import_local_storage8 = require("@rehooks/local-storage");

// src/assets/quickpayLogo.svg
var quickpayLogo_default = "/build/_assets/quickpayLogo-NL6VSXM7.svg";

// src/ui/components/payments/quickpaylink.tsx
var import_jsx_dev_runtime72 = require("react/jsx-dev-runtime"), QuickPayLinkButton = ({
  paying = !1,
  onClick
}) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
    "button",
    {
      className: "w-full h-[70px] text-white mt-2 rounded-md px-8 bg-grey py-4 flex flex-row justify-between items-center border border-transparent hover:border-black",
      disabled: paying,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("img", { className: "px-1 h-[35px]", src: `${quickpayLogo_default}`, height: "35", alt: "Quickpay" }, void 0, !1, {
          fileName: "src/ui/components/payments/quickpaylink.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, !1, {
          fileName: "src/ui/components/payments/quickpaylink.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, !1, {
          fileName: "src/ui/components/payments/quickpaylink.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/quickpaylink.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  );
}, QuickPayLink = () => {
  let { cart, isEmpty } = useLocalCart(), [paying, setPaying] = (0, import_react36.useState)(!1), { state } = useAppContext(), [customer] = (0, import_local_storage8.useLocalStorage)("customer", {});
  return isEmpty() ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
    QuickPayLinkButton,
    {
      paying,
      onClick: async () => {
        setPaying(!0);
        try {
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
            cart,
            customer
          );
          let link = await ServiceAPI({
            language: state.language,
            serviceApiUrl: state.serviceApiUrl
          }).quickpay.fetchPaymentLink(cart);
          window.location.href = link.url;
        } catch (exception) {
          console.log(exception);
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "src/ui/components/payments/quickpaylink.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  );
};

// src/ui/components/payments/razorpay.tsx
var import_local_storage9 = __toESM(require("@rehooks/local-storage")), import_react37 = require("react");

// src/assets/razorpayLogo.svg
var razorpayLogo_default = "/build/_assets/razorpayLogo-MEUEZKAG.svg";

// src/ui/components/payments/razorpay.tsx
var import_jsx_dev_runtime73 = require("react/jsx-dev-runtime"), RazorPayButton = ({
  paying = !1,
  onClick
}) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
    "button",
    {
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick || void 0,
      className: "w-full text-white mt-2 h-[70px] rounded-md px-8 bg-grey flex flex-row justify-between items-center border border-transparent hover:border-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("img", { className: "h-[40px]", src: `${razorpayLogo_default}`, height: "50", alt: "Razorpay" }, void 0, !1, {
          fileName: "src/ui/components/payments/razorpay.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("span", { id: "button-text", className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, !1, {
          fileName: "src/ui/components/payments/razorpay.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, !1, {
          fileName: "src/ui/components/payments/razorpay.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/razorpay.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  );
}, RazorPay = () => {
  let { state, path } = useAppContext(), { cart, isEmpty, empty } = useLocalCart(), [customer] = (0, import_local_storage9.default)("customer", {}), navigate = useNavigate_default(), variables = state.paymentImplementationVariables ? state.paymentImplementationVariables.razorpay : {};
  if (!variables || !variables.RAZORPAY_ID)
    return null;
  let triggerRazorpay = async () => {
    let data = await ServiceAPI({
      language: state.language,
      serviceApiUrl: state.serviceApiUrl
    }).razorpay.initiatePayment(cart), { amount, id: order_id, currency } = data.data, options = {
      key: variables.RAZORPAY_ID,
      amount: amount.toString(),
      currency,
      name: "FRNTR",
      description: "",
      image: { logo: razorpayLogo_default },
      order_id,
      handler: async function(response) {
        let data2 = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature
        };
        (await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).razorpay.receivePayment(window.location.origin, data2)).id && (empty(), navigate(path(`/order/cart/${cart.cartId}`), { replace: !0 }));
      },
      prefill: {
        name: customer.firstname,
        email: customer.email
      },
      theme: {
        color: "#61dafb"
      }
    };
    new window.Razorpay(options).open();
  };
  return (0, import_react37.useEffect)(() => {
    (async () => {
      if (!isEmpty()) {
        try {
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
            cart,
            customer
          );
        } catch (exception) {
          console.log(exception);
        }
        let razorpayJS = document.createElement("script");
        razorpayJS.src = "https://checkout.razorpay.com/v1/checkout.js", document.head.appendChild(razorpayJS), triggerRazorpay();
      }
    })();
  }, [cart.items]), /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(RazorPayButton, {}, void 0, !1, {
    fileName: "src/ui/components/payments/razorpay.tsx",
    lineNumber: 108,
    columnNumber: 12
  }, this);
};

// src/ui/components/payments/stripe.tsx
var import_local_storage10 = __toESM(require("@rehooks/local-storage")), import_react_stripe_js = require("@stripe/react-stripe-js"), import_stripe_js = require("@stripe/stripe-js"), import_react38 = require("react");

// src/assets/stripeLogo.svg
var stripeLogo_default = "/build/_assets/stripeLogo-ETZ3XN45.svg";

// src/ui/components/payments/stripe.tsx
var import_jsx_dev_runtime74 = require("react/jsx-dev-runtime"), StripeButton = ({
  paying = !1,
  onClick
}) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(
    "button",
    {
      type: onClick ? "button" : "submit",
      disabled: paying,
      onClick: onClick || void 0,
      className: "w-full text-white mt-2 h-[70px] rounded-md px-8 bg-grey flex flex-row justify-between items-center border border-transparent hover:border-black",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("img", { className: "h-[50px]", src: `${stripeLogo_default}`, height: "50", alt: "Stripe" }, void 0, !1, {
          fileName: "src/ui/components/payments/stripe.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("span", { id: "button-text", className: "text-textBlack", children: paying ? _t("payment.processing") : "" }, void 0, !1, {
          fileName: "src/ui/components/payments/stripe.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("span", { className: "text-black text-2xl", children: " \u203A" }, void 0, !1, {
          fileName: "src/ui/components/payments/stripe.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  );
}, Stripe = () => {
  let { state } = useAppContext(), [clientSecret, setClientSecret] = (0, import_react38.useState)(""), { cart, isEmpty } = useLocalCart(), [customer] = (0, import_local_storage10.default)("customer", {}), variables = state.paymentImplementationVariables ? state.paymentImplementationVariables.stripe : {};
  if (!variables || !variables.PUBLIC_KEY)
    return null;
  let stripePromise = (0, import_stripe_js.loadStripe)(variables.PUBLIC_KEY);
  return (0, import_react38.useEffect)(() => {
    (async () => {
      if (!isEmpty()) {
        try {
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).placeCart(
            cart,
            customer
          );
        } catch (exception) {
          console.log(exception);
        }
        let data = await ServiceAPI({
          language: state.language,
          serviceApiUrl: state.serviceApiUrl
        }).stripe.fetchPaymentIntent(cart);
        setClientSecret(data.key);
      }
    })();
  }, [cart.items]), clientSecret ? /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(import_react_stripe_js.Elements, { options: { clientSecret }, stripe: stripePromise, children: /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(StripCheckoutForm, {}, void 0, !1, {
    fileName: "src/ui/components/payments/stripe.tsx",
    lineNumber: 72,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/payments/stripe.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this) : null;
}, StripCheckoutForm = () => {
  let { cart, empty } = useLocalCart(), { path } = useAppContext(), stripe = (0, import_react_stripe_js.useStripe)(), elements = (0, import_react_stripe_js.useElements)(), navigate = useNavigate_default(), [state, setState] = (0, import_react38.useState)({ succeeded: !1, error: null, processing: !1 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("form", { id: "stripe-payment-form", onSubmit: async (event) => {
    if (event.preventDefault(), !stripe || !elements)
      return;
    setState({
      ...state,
      processing: !0
    });
    let payload = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://" + location.host + "/order/cart/" + cart.cartId
      },
      redirect: "if_required"
    });
    payload.error ? setState({
      ...state,
      error: `Payment failed ${payload.error.message}`,
      processing: !1
    }) : (setState({
      ...state,
      error: null,
      processing: !1,
      succeeded: !0
    }), empty(), navigate(path(`/order/cart/${cart.cartId}`), { replace: !0 }));
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(import_react_stripe_js.PaymentElement, { id: "payment-element" }, void 0, !1, {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("br", {}, void 0, !1, {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 128,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)(StripeButton, { paying: state.processing || !stripe || !elements }, void 0, !1, {
      fileName: "src/ui/components/payments/stripe.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/payments/stripe.tsx",
    lineNumber: 126,
    columnNumber: 9
  }, this);
};

// src/ui/components/payments/index.tsx
var import_jsx_dev_runtime75 = require("react/jsx-dev-runtime"), Payments = () => {
  let { state, _t } = useAppContext(), { cart, isImmutable, clone: cartClone } = useLocalCart(), paymentMethods = state.crystalPayments, paymentMethodImplementations = {
    crystalCoin: {
      name: "Crystal Coin",
      component: CrystalCoin,
      button: CrystalCoinButton,
      renderOnLoad: !0,
      enabled: state.paymentImplementations.includes("crystal") && paymentMethods.includes("coin")
    },
    crystalCard: {
      name: "Crystal Card",
      component: CrystalCard,
      button: CrystalCardButton,
      renderOnLoad: !1,
      enabled: state.paymentImplementations.includes("crystal") && paymentMethods.includes("card")
    },
    montonio: {
      name: "Montonio",
      component: Montonio,
      button: MontonioButton,
      renderOnLoad: !1,
      enabled: state.paymentImplementations.includes("montonio")
    },
    quickPayLink: {
      name: "QuickPay",
      component: QuickPayLink,
      button: QuickPayLinkButton,
      renderOnLoad: !0,
      enabled: state.paymentImplementations.includes("quickpay")
    },
    stripe: {
      name: "Stripe",
      component: Stripe,
      button: StripeButton,
      renderOnLoad: !1,
      enabled: state.paymentImplementations.includes("stripe")
    },
    klarna: {
      name: "Klarna",
      component: Klarna,
      button: KlarnaButton,
      renderOnLoad: !1,
      enabled: state.paymentImplementations.includes("klarna")
    },
    razorPay: {
      name: "RazorPay",
      component: RazorPay,
      button: RazorPayButton,
      renderOnLoad: !1,
      enabled: state.paymentImplementations.includes("razorpay")
    }
  }, [selectedPaymentMethodImplementation, setSelectedPaymentMethodImplementation] = (0, import_react39.useState)(null);
  if (selectedPaymentMethodImplementation) {
    let implementation = paymentMethodImplementations[selectedPaymentMethodImplementation];
    return /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "payment-method mb-4 bg-grey mt-5 rounded p-6 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(implementation.component, {}, void 0, !1, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(import_jsx_dev_runtime75.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("h2", { className: "font-bold text-2xl mt-5 mb-1", children: _t("payment.title") }, void 0, !1, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this),
    isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(import_jsx_dev_runtime75.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("p", { className: "text-red-500", children: _t("cart.immutable") }, void 0, !1, {
        fileName: "src/ui/components/payments/index.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(
        "a",
        {
          className: "text-red-500",
          href: "#",
          onClick: (event) => {
            event.preventDefault(), cartClone();
          },
          children: _t("cart.clone")
        },
        void 0,
        !1,
        {
          fileName: "src/ui/components/payments/index.tsx",
          lineNumber: 87,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("br", {}, void 0, !1, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 99,
      columnNumber: 13
    }, this),
    !cart.cartId && /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "loader" }, void 0, !1, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 101,
      columnNumber: 30
    }, this),
    !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "grid grid-cols-1 gap-1", children: Object.keys(paymentMethodImplementations).map((implementationKey) => {
      let implementation = paymentMethodImplementations[implementationKey];
      return implementation.enabled ? implementation.renderOnLoad ? /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(implementation.component, {}, implementationKey, !1, {
        fileName: "src/ui/components/payments/index.tsx",
        lineNumber: 113,
        columnNumber: 36
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(
        implementation.button,
        {
          onClick: () => setSelectedPaymentMethodImplementation(implementationKey)
        },
        implementationKey,
        !1,
        {
          fileName: "src/ui/components/payments/index.tsx",
          lineNumber: 116,
          columnNumber: 29
        },
        this
      ) : null;
    }) }, void 0, !1, {
      fileName: "src/ui/components/payments/index.tsx",
      lineNumber: 103,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/payments/index.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Checkout.tsx
var import_jsx_dev_runtime76 = require("react/jsx-dev-runtime"), Checkout_default = ({ isServerSideAuthenticated }) => {
  let { isAuthenticated: isAuthenticated2 } = useAuth(), [isGuestCheckout, setIsGuestCheckout] = (0, import_react40.useState)(!1), [showPayments, setShowPayments] = (0, import_react40.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)("div", { className: "2xl lg:container lg:px-6 px-2 mx-auto min-h-[100vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)("div", { className: "flex gap-20 lg:flex-row flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)("div", { className: "rounded pt-5 lg:px-10 lg:w-3/5 w-full px-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(import_reactjs_hooks6.ClientOnly, { children: (() => !isServerSideAuthenticated || !isAuthenticated2 ? isGuestCheckout ? /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(import_jsx_dev_runtime76.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(
      AddressForm,
      {
        title: "Guest Checkout",
        onValidSubmit: () => setShowPayments(!0)
      },
      void 0,
      !1,
      {
        fileName: "src/ui/pages/Checkout.tsx",
        lineNumber: 25,
        columnNumber: 41
      },
      this
    ),
    showPayments && /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(Payments, {}, void 0, !1, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 29,
      columnNumber: 58
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 24,
    columnNumber: 37
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(
    MagickLoginForm,
    {
      enabledGuest: () => setIsGuestCheckout(!0),
      actionTitle: "Register",
      title: "Register or continue as guest?"
    },
    void 0,
    !1,
    {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 32,
      columnNumber: 37
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(import_jsx_dev_runtime76.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(AddressForm, { title: "Address", onValidSubmit: () => setShowPayments(!0) }, void 0, !1, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 41,
      columnNumber: 37
    }, this),
    showPayments && /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(Payments, {}, void 0, !1, {
      fileName: "src/ui/pages/Checkout.tsx",
      lineNumber: 42,
      columnNumber: 54
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 40,
    columnNumber: 33
  }, this))() }, void 0, !1, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 20,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 19,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/pages/Checkout.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/checkout.tsx
var import_jsx_dev_runtime77 = require("react/jsx-dev-runtime"), headers9 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader18 = async ({ request }) => privateJson({ isServerSideAuthenticated: await isAuthenticated(request) }), checkout_default = () => {
  let { isServerSideAuthenticated } = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(Checkout_default, { isServerSideAuthenticated }, void 0, !1, {
    fileName: "src/routes/$langstore/checkout.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/orders.tsx
var orders_exports2 = {};
__export(orders_exports2, {
  default: () => orders_default,
  headers: () => headers10,
  loader: () => loader19
});
var import_react43 = require("@remix-run/react");

// src/ui/pages/Orders.tsx
var import_react42 = require("react");

// src/assets/defaultImage.svg
var defaultImage_default = "/build/_assets/defaultImage-S5J2GVEV.svg";

// src/ui/pages/Orders.tsx
var import_reactjs_hooks7 = require("@crystallize/reactjs-hooks");

// src/assets/downloadIcon.svg
var downloadIcon_default = "/build/_assets/downloadIcon-SHB4MF6F.svg";

// src/ui/pages/Orders.tsx
var import_jsx_dev_runtime78 = require("react/jsx-dev-runtime"), Orders_default = ({ isServerSideAuthenticated }) => {
  let { isAuthenticated: isAuthenticated2 } = useAuth(), [orders, setOrders] = (0, import_react42.useState)(null), { state } = useAppContext(), orderDate = (date) => new Date(date).toLocaleString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return (0, import_react42.useEffect)(() => {
    (async () => {
      try {
        setOrders(
          await ServiceAPI({ language: state.language, serviceApiUrl: state.serviceApiUrl }).fetchOrders()
        );
      } catch (exception) {
        console.log(exception);
      }
    })();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "container 2xl px-6 mx-auto w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("h1", { className: "text-2xl font-semibold my-10", children: "Your Orders" }, void 0, !1, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_reactjs_hooks7.ClientOnly, { children: isAuthenticated2 && isServerSideAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_jsx_dev_runtime78.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { children: orders && orders.map((order, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "border-2 border-grey my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "w-full h-30 bg-[#F0F2F2] px-5 py-2 flex flex-wrap justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "order-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("span", { children: "Order placed" }, void 0, !1, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 45,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "text-grey6", children: orderDate(order.createdAt) }, void 0, !1, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 46,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 44,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "order-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("span", { children: "Order ID" }, void 0, !1, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 49,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "text-grey6", children: order.id }, void 0, !1, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 50,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 48,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "order-item", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("span", { children: "Total" }, void 0, !1, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 53,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "text-grey6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(Price, { currencyCode: order.total.currency, children: order.total.gross }, void 0, !1, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 55,
            columnNumber: 53
          }, this) }, void 0, !1, {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 54,
            columnNumber: 49
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 52,
          columnNumber: 45
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 43,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "p-5 flex flex-col gap-5", children: order.cart.map((item, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
        "div",
        {
          className: "flex justify-between items-center order-item",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "flex gap-3 items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
                "img",
                {
                  src: item.imageUrl ? item.imageUrl : defaultImage_default,
                  width: "40px",
                  height: "40px",
                  alt: "product"
                },
                void 0,
                !1,
                {
                  fileName: "src/ui/pages/Orders.tsx",
                  lineNumber: 68,
                  columnNumber: 57
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "w-40", children: item.name }, void 0, !1, {
                fileName: "src/ui/pages/Orders.tsx",
                lineNumber: 74,
                columnNumber: 57
              }, this)
            ] }, void 0, !0, {
              fileName: "src/ui/pages/Orders.tsx",
              lineNumber: 67,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "w-20", children: item.quantity }, void 0, !1, {
              fileName: "src/ui/pages/Orders.tsx",
              lineNumber: 76,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "w-20 text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
              Price,
              {
                currencyCode: item.price.currency || state.currency.code || "USD",
                children: item.price.gross
              },
              void 0,
              !1,
              {
                fileName: "src/ui/pages/Orders.tsx",
                lineNumber: 79,
                columnNumber: 57
              },
              this
            ) }, void 0, !1, {
              fileName: "src/ui/pages/Orders.tsx",
              lineNumber: 77,
              columnNumber: 53
            }, this)
          ]
        },
        index2,
        !0,
        {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 63,
          columnNumber: 49
        },
        this
      )) }, void 0, !1, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 61,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "w-full flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "bg-textBlack py-3 px-4 text-[#fff] rounded-sm flex align-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("a", { href: `/order/invoice/${order.id}.pdf`, children: "Download invoice" }, void 0, !1, {
          fileName: "src/ui/pages/Orders.tsx",
          lineNumber: 92,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          "img",
          {
            src: `${downloadIcon_default}`,
            alt: "Download icon",
            width: "18",
            height: "18"
          },
          void 0,
          !1,
          {
            fileName: "src/ui/pages/Orders.tsx",
            lineNumber: 93,
            columnNumber: 49
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 91,
        columnNumber: 45
      }, this) }, void 0, !1, {
        fileName: "src/ui/pages/Orders.tsx",
        lineNumber: 90,
        columnNumber: 41
      }, this)
    ] }, order.id, !0, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 42,
      columnNumber: 37
    }, this)) }, void 0, !1, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 39,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "min-h-[70vh] items-center justify-center flex max-w-[500px] mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "mx-auto items-center justify-center flex w-full ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(MagickLoginForm, { title: "Login", onlyLogin: !0, actionTitle: "Login" }, void 0, !1, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 108,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 107,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 106,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Orders.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Orders.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/orders.tsx
var import_jsx_dev_runtime79 = require("react/jsx-dev-runtime"), headers10 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader19 = async ({ request }) => privateJson({ isServerSideAuthenticated: await isAuthenticated(request) }), orders_default = () => {
  let { isServerSideAuthenticated } = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(Orders_default, { isServerSideAuthenticated }, void 0, !1, {
    fileName: "src/routes/$langstore/orders.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => search_default2,
  headers: () => headers11,
  loader: () => loader20
});
var import_node28 = require("@remix-run/node"), import_react44 = require("@remix-run/react");

// src/ui/pages/Search.tsx
var import_jsx_dev_runtime80 = require("react/jsx-dev-runtime"), Search_default = ({ products }) => {
  let { _t } = useAppContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("div", { className: "container px-6 mx-auto w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("h1", { className: "font-bold text-4xl mt-10", children: _t("search.label") }, void 0, !1, {
      fileName: "src/ui/pages/Search.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(FilteredProducts, { products }, void 0, !1, {
      fileName: "src/ui/pages/Search.tsx",
      lineNumber: 13,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "src/ui/pages/Search.tsx",
      lineNumber: 12,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("div", { className: "mt-10", children: _t("search.noResults") }, void 0, !1, {
      fileName: "src/ui/pages/Search.tsx",
      lineNumber: 16,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Search.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/search.tsx
var import_jsx_dev_runtime81 = require("react/jsx-dev-runtime"), headers11 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader20 = async ({ request }) => {
  let requestContext = getContext(request), { shared, secret } = await getStoreFront(requestContext.host), params = requestContext.url.searchParams.get("q"), data = await CrystallizeAPI({
    apiClient: secret.apiClient,
    language: requestContext.language
  }).search(params || "");
  return (0, import_node28.json)(
    { data },
    StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", ["search"], shared.config.tenantIdentifier)
  );
}, search_default2 = () => {
  let { data } = (0, import_react44.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(Search_default, { products: data }, void 0, !1, {
    fileName: "src/routes/$langstore/search.tsx",
    lineNumber: 30,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/index.tsx
var langstore_exports = {};
__export(langstore_exports, {
  default: () => langstore_default,
  headers: () => headers12,
  links: () => links5,
  loader: () => loader21,
  meta: () => meta7
});
var import_node29 = require("@remix-run/node");
var import_react45 = require("@remix-run/react");

// src/ui/pages/LandingPage.js
var import_Carousel = require("react-bootstrap/Carousel"), import_jsx_dev_runtime82 = require("react/jsx-dev-runtime"), cards = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
  {
    id: 9
  },
  {
    id: 10
  }
], LandingPage_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(import_jsx_dev_runtime82.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "carousel   w-full mt-2 flex  overflow-x-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { id: "slide1", className: "carousel-item flex-none relative  w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("img", { src: "https://c1.wallpaperflare.com/preview/530/348/918/houseplant-plant-monstera-calm.jpg", className: "w-full h-[900px]" }, void 0, !1, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide4", className: "btn btn-circle text-white text-4xl", children: "	\u2B9C" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "text-white w-[60%] m-auto text-center text-6xl text-semibold", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa." }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 47,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide2", className: "btn btn-circle text-white text-4xl", children: "\u2B9E" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 48,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 45,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 43,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { id: "slide2", className: "carousel-item  flex-none relative w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1493673272479-a20888bcee10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80", className: "w-full h-[900px]" }, void 0, !1, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 52,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide1", className: "btn btn-circle text-white text-4xl", children: "	\u2B9C" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 54,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "text-white w-[60%] m-auto text-center text-6xl text-semibold", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa." }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 55,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide3", className: "btn btn-circle text-white text-4xl", children: "\u2B9E" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 53,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 51,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { id: "slide3", className: "carousel-item flex-none relative w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("img", { src: "https://c4.wallpaperflare.com/wallpaper/706/529/203/vaporwave-plants-hd-wallpaper-preview.jpg", className: "w-full h-[900px]" }, void 0, !1, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 60,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide2", className: "btn btn-circle text-white text-4xl", children: "	\u2B9C" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 62,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "text-white w-[60%] m-auto text-center text-6xl text-semibold", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa." }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 63,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide4", className: "btn btn-circle text-white text-4xl", children: "\u2B9E" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 64,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 61,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 59,
      columnNumber: 3
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { id: "slide4", className: "carousel-item flex-none relative w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("img", { src: "https://c0.wallpaperflare.com/preview/667/601/289/grayscale-photo-of-succulent-plants.jpg", className: "w-full h-[900px]" }, void 0, !1, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 68,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide3", className: "btn btn-circle text-white text-4xl", children: "	\u2B9C" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "text-white w-[60%] m-auto text-center text-6xl text-semibold", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa." }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 71,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("a", { href: "#slide1", className: "btn btn-circle text-white text-4xl", children: "\u2B9E" }, void 0, !1, {
          fileName: "src/ui/pages/LandingPage.js",
          lineNumber: 72,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 69,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 67,
      columnNumber: 3
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 42,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("h1", { className: "mt-10 mb-10 font-bold text-4xl m-auto w-[75%]", children: " Plants" }, void 0, !1, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 77,
    columnNumber: 12
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: " w-[75%] m-auto h-[350px] w-full mt-2 flex  overflow-x-auto scrollbar-thin scrollbar-thumb-[#0099ff]   scrollbar-track-transparent ", children: cards.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "flex-none w-[300px] h-[300px]  mx-10 md:pb-4   ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("img", { src: "https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=YUsWUtmmiNtJ0AmhT3mC0sgNfcK9c0DPnyoVFnXNChI=", className: "w-full h-[90%]", alt: "" }, void 0, !1, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 83,
      columnNumber: 26
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("h3", { className: "text-black font-semibold", children: "Product Name " }, void 0, !1, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 84,
      columnNumber: 26
    }, this)
  ] }, item.id, !0, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 82,
    columnNumber: 25
  }, this)) }, void 0, !1, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 78,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "src/ui/pages/LandingPage.js",
  lineNumber: 41,
  columnNumber: 9
}, this);

// src/routes/$langstore/index.tsx
var import_jsx_dev_runtime83 = require("react/jsx-dev-runtime"), meta7 = ({ data }) => buildMetas(data.data), headers12 = ({ parentHeaders, loaderHeaders }) => ({
  ...HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers,
  Link: parentHeaders.get("Link")
}), links5 = () => [
  { rel: "stylesheet", href: splide_default_min_default },
  { rel: "stylesheet", href: styles_default }
], loader21 = async ({ request, params }) => {
  let requestContext = getContext(request), path = "/frontpage", { shared } = await getStoreFront(requestContext.host), data = await dataFetcherForShapePage_server_default("landing-page", path, requestContext, params);
  return (0, import_node29.json)({ data }, StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier));
}, langstore_default = () => {
  let { data } = (0, import_react45.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(LandingPage_default, { data }, void 0, !1, {
    fileName: "src/routes/$langstore/index.tsx",
    lineNumber: 40,
    columnNumber: 12
  }, this);
};

// src/routes/$langstore/cart.tsx
var cart_exports2 = {};
__export(cart_exports2, {
  default: () => cart_default,
  headers: () => headers13,
  loader: () => loader22
});
var import_node30 = require("@remix-run/node");

// src/ui/hooks/useRemoteCart.ts
var import_react46 = require("react");
function useRemoteCart() {
  let { cart, setWrappingData } = useLocalCart(), { state: appContextState } = useAppContext(), [state, setState] = (0, import_react46.useState)({
    loading: !0,
    hydratedCart: null
  });
  return (0, import_react46.useEffect)(() => {
    (async () => {
      setState({
        ...state,
        loading: !0
      });
      let cartWrapper = await ServiceAPI({
        language: appContextState.language,
        serviceApiUrl: appContextState.serviceApiUrl
      }).fetchRemoteCart(cart);
      (cart.cartId !== cartWrapper.cartId || cart.state !== cartWrapper.state) && setWrappingData(cartWrapper.cartId, cartWrapper.state), setState({
        ...state,
        loading: !1,
        hydratedCart: cartWrapper
      });
    })();
  }, [cart]), {
    loading: state.loading,
    remoteCart: state.hydratedCart
  };
}

// src/ui/components/cart.tsx
var import_reactjs_hooks8 = require("@crystallize/reactjs-hooks");
var import_image9 = require("@crystallize/reactjs-components/dist/image");

// src/assets/trashIcon.svg
var trashIcon_default = "/build/_assets/trashIcon-25KBQRQZ.svg";

// src/ui/components/cart.tsx
var import_jsx_dev_runtime84 = require("react/jsx-dev-runtime");
var HydratedCart = () => {
  var _a3;
  let { remoteCart, loading } = useRemoteCart(), { isImmutable, isEmpty, add: addToCart, remove: removeFromCart, clone: cartClone } = useLocalCart(), { cart, total } = (remoteCart == null ? void 0 : remoteCart.cart) || { cart: null, total: null }, { savings } = ((_a3 = remoteCart == null ? void 0 : remoteCart.extra) == null ? void 0 : _a3.discounts) || { lots: null, savings: null }, { state: contextState, path, _t } = useAppContext();
  return isEmpty() ? /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_reactjs_hooks8.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "min-h-[60vh] flex w-full flex-col gap-6 justify-center items-start ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "w-full flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "overflow-hidden w-[200px] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "-ml-[50px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("iframe", { width: "300px", src: "https://embed.lottiefiles.com/animation/823" }, void 0, !1, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 67,
      columnNumber: 33
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 66,
      columnNumber: 29
    }, this) }, void 0, !1, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 65,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex  pb-2 text-3xl font-semibold ", children: _t("cart.whoaempty") }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 71,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex w-full", children: _t("cart.trylater") }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 72,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("button", { className: "bg-grey mt-3 py-2 px-5 rounded-md text-center text-xl font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Link_default, { to: path("/"), children: _t("back") }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 74,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 73,
        columnNumber: 29
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 70,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 64,
    columnNumber: 21
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 63,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 62,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_reactjs_hooks8.ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "mt-10 rounded p-10  mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex mb-4 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("h1", { className: "font-bold text-2xl", children: "Cart" }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      loading && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("span", { className: "pr-2", children: [
          _t("loading"),
          "..."
        ] }, void 0, !0, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "loader" }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 88,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-col gap-3 min-h-[200px] ", children: [
      isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_jsx_dev_runtime84.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: "text-red-500", children: _t("cart.immutable") }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 97,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "a",
          {
            className: "text-red-500",
            href: "#",
            onClick: (event) => {
              event.preventDefault(), cartClone();
            },
            children: _t("cart.clone")
          },
          void 0,
          !1,
          {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 98,
            columnNumber: 29
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 96,
        columnNumber: 25
      }, this),
      !cart && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(OptimisticHydratedCart, {}, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 110,
        columnNumber: 31
      }, this),
      cart && cart.items.map((item, index) => {
        var _a4;
        let saving = ((_a4 = savings[item.variant.sku]) == null ? void 0 : _a4.quantity) > 0 ? savings[item.variant.sku] : null;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "div",
          {
            className: "flex justify-between bg-grey2 py-5 pr-10 pl-5 items-center rounded-lg ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
                  import_image9.Image,
                  {
                    ...item.variant.firstImage,
                    sizes: "100px",
                    loading: "lazy",
                    alt: item.variant.name
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 120,
                    columnNumber: 41
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: "text-xl font-semibold w-full", children: item.variant.name }, void 0, !1, {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 127,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(CartItemPrice, { item, saving }, void 0, !1, {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 128,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "src/ui/components/cart.tsx",
                  lineNumber: 126,
                  columnNumber: 41
                }, this)
              ] }, void 0, !0, {
                fileName: "src/ui/components/cart.tsx",
                lineNumber: 119,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-col w-[40px] items-center justify-center gap-3", children: [
                !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
                  "button",
                  {
                    className: "font-semibold w-[25px] h-[25px] rounded-sm",
                    onClick: () => {
                      addToCart({
                        sku: item.variant.sku,
                        name: item.variant.name,
                        price: item.variant.price
                      });
                    },
                    children: [
                      " ",
                      "+",
                      " "
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 133,
                    columnNumber: 45
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: "text-center font-bold ", children: item.quantity }, void 0, !1, {
                  fileName: "src/ui/components/cart.tsx",
                  lineNumber: 148,
                  columnNumber: 41
                }, this),
                !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
                  "button",
                  {
                    className: "font-semibold w-[25px] h-[25px] rounded-sm",
                    onClick: () => {
                      removeFromCart(item.variant);
                    },
                    children: [
                      " ",
                      item.quantity === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("img", { src: trashIcon_default, width: "25", height: "25", alt: "Trash icon" }, void 0, !1, {
                        fileName: "src/ui/components/cart.tsx",
                        lineNumber: 158,
                        columnNumber: 53
                      }, this) : "-",
                      " "
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "src/ui/components/cart.tsx",
                    lineNumber: 150,
                    columnNumber: 45
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "src/ui/components/cart.tsx",
                lineNumber: 131,
                columnNumber: 37
              }, this)
            ]
          },
          index,
          !0,
          {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 115,
            columnNumber: 33
          },
          this
        );
      }),
      total && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-col gap-2 border-b-2 border-grey4 py-4 items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { children: _t("cart.discount") }, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 171,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.discounts.reduce((memo, discount) => memo + (discount == null ? void 0 : discount.amount) || 0, 0) }, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 172,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 170,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 179,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.taxAmount }, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 180,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 178,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60 items-end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 185,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total.gross }, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 186,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 184,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 169,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex justify-between mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("button", { className: "bg-grey py-2 px-5 rounded-md text-center font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Link_default, { to: path("/"), children: _t("back") }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 195,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 194,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("button", { className: "bg-[#000] px-10 py-3 rounded text-[#fff] font-bold hover:bg-black-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Link_default, { to: path("/checkout"), children: _t("checkout") }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 198,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 197,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 193,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 84,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this);
}, OptimisticHydratedCart = () => {
  let { cart, isImmutable } = useLocalCart(), { state: contextState, _t } = useAppContext(), total = 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_jsx_dev_runtime84.Fragment, { children: [
    Object.keys(cart.items).map((sku, index) => {
      let item = cart.items[sku];
      return total += item.quantity * item.price, /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex justify-between bg-grey2 py-5 pr-10 pl-5 items-center rounded-lg ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex cart-item gap-3 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_image9.Image, {}, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 218,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: "text-xl font-semibold w-full", children: item.name }, void 0, !1, {
              fileName: "src/ui/components/cart.tsx",
              lineNumber: 220,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: item.price }, void 0, !1, {
              fileName: "src/ui/components/cart.tsx",
              lineNumber: 221,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 219,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 217,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-col w-[40px] items-center justify-center gap-3", children: [
          !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("button", { className: "font-semibold w-[25px] h-[25px] rounded-sm", disabled: !0, children: [
            " ",
            "+",
            " "
          ] }, void 0, !0, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 228,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: "text-center font-bold ", children: item.quantity }, void 0, !1, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 234,
            columnNumber: 29
          }, this),
          !isImmutable() && /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("button", { className: "font-semibold w-[25px] h-[25px] rounded-sm", disabled: !0, children: [
            " ",
            item.quantity === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("img", { src: trashIcon_default, width: "25", height: "25", alt: "Trash icon" }, void 0, !1, {
              fileName: "src/ui/components/cart.tsx",
              lineNumber: 239,
              columnNumber: 41
            }, this) : "-",
            " "
          ] }, void 0, !0, {
            fileName: "src/ui/components/cart.tsx",
            lineNumber: 236,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 226,
          columnNumber: 25
        }, this)
      ] }, index, !0, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 216,
        columnNumber: 21
      }, this);
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-col gap-2 border-b-2 border-grey4 py-4 items-end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { children: _t("cart.discount") }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 251,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "loader" }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 252,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 250,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex text-grey3 text-sm justify-between w-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { children: _t("cart.taxAmount") }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 255,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "loader" }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 256,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 254,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex font-bold mt-2 text-lg justify-between w-60 items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { children: _t("cart.toPay") }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 259,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(Price, { currencyCode: contextState.currency.code, children: total }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 261,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "src/ui/components/cart.tsx",
          lineNumber: 260,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "src/ui/components/cart.tsx",
        lineNumber: 258,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "src/ui/components/cart.tsx",
      lineNumber: 249,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/components/cart.tsx",
    lineNumber: 211,
    columnNumber: 9
  }, this);
};

// src/ui/pages/Cart.tsx
var import_jsx_dev_runtime85 = require("react/jsx-dev-runtime"), Cart_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("div", { className: "lg:w-content mx-auto w-full min-h-[90vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(HydratedCart, {}, void 0, !1, {
  fileName: "src/ui/pages/Cart.tsx",
  lineNumber: 6,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "src/ui/pages/Cart.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this);

// src/routes/$langstore/cart.tsx
var import_jsx_dev_runtime86 = require("react/jsx-dev-runtime"), headers13 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, loader22 = async ({ request }) => {
  let requestContext = getContext(request), { shared } = await getStoreFront(requestContext.host);
  return (0, import_node30.json)({}, StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", ["cart"], shared.config.tenantIdentifier));
}, cart_default = () => /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(Cart_default, {}, void 0, !1, {
  fileName: "src/routes/$langstore/cart.tsx",
  lineNumber: 18,
  columnNumber: 12
}, this);

// src/routes/$langstore/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default,
  headers: () => headers14,
  loader: () => loader23,
  meta: () => meta8
});
var import_node31 = require("@remix-run/node");
var import_react47 = require("@remix-run/react");

// src/ui/pages/Topic.tsx
var import_jsx_dev_runtime87 = require("react/jsx-dev-runtime"), Topic_default = ({ data }) => {
  let { products, topics, topic } = data, topicName = (topic == null ? void 0 : topic.name) || (topic == null ? void 0 : topic.path);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("div", { className: "container 2xl mx-auto px-6 mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("h1", { className: "capitalize font-bold text-4xl", children: topicName }, void 0, !1, {
      fileName: "src/ui/pages/Topic.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(FilteredProducts, { products }, void 0, !1, {
      fileName: "src/ui/pages/Topic.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "src/ui/pages/Topic.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
};

// src/routes/$langstore/$.tsx
var import_jsx_dev_runtime88 = require("react/jsx-dev-runtime"), headers14 = ({ loaderHeaders }) => HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers, meta8 = ({ data }) => buildMetas(data), loader23 = async ({ request, params }) => {
  var _a3, _b;
  let requestContext = getContext(request), { shared, secret } = await getStoreFront(requestContext.host), path = "/" + params["*"], crystallizePath = path.replace(".pdf", ""), map = await CrystallizeAPI({
    apiClient: secret.apiClient,
    language: requestContext.language,
    isPreview: requestContext.isPreview
  }).fetchTreeMap(), mappedKey = Object.keys(map).find((key) => key === crystallizePath);
  if (!mappedKey)
    throw new import_node31.Response("Not Found", {
      status: 404
    });
  let shapeIdentifier = ((_b = (_a3 = map[mappedKey]) == null ? void 0 : _a3.shape) == null ? void 0 : _b.identifier) || "_topic", data = await dataFetcherForShapePage_server_default(shapeIdentifier, path, requestContext, params);
  return (0, import_node31.json)(
    { shapeIdentifier, data },
    StoreFrontAwaretHttpCacheHeaderTagger("15s", "1w", [path], shared.config.tenantIdentifier)
  );
}, __default = () => {
  let { data, shapeIdentifier } = (0, import_react47.useLoaderData)();
  switch (shapeIdentifier) {
    case "product":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(Product_default, { data }, void 0, !1, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 54,
        columnNumber: 20
      }, this);
    case "category":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(Category_default, { data }, void 0, !1, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 56,
        columnNumber: 20
      }, this);
    case "abstract-story":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(AbstractStory_default, { data }, void 0, !1, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 58,
        columnNumber: 20
      }, this);
    case "_topic":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(Topic_default, { data }, void 0, !1, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 60,
        columnNumber: 20
      }, this);
    case "landing-page":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(LandingPage_default, { data }, void 0, !1, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 62,
        columnNumber: 20
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("p", { children: "There is no renderer for that page" }, void 0, !1, {
        fileName: "src/routes/$langstore/$.tsx",
        lineNumber: 64,
        columnNumber: 20
      }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("h1", { children: "hello" }, void 0, !1, {
    fileName: "src/routes/$langstore/$.tsx",
    lineNumber: 66,
    columnNumber: 12
  }, this);
};

// src/routes/contactform.tsx
var contactform_exports = {};
__export(contactform_exports, {
  default: () => contactform_default
});
var import_jsx_dev_runtime89 = require("react/jsx-dev-runtime"), contactform = () => /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)("div", { children: "hello" }, void 0, !1, {
  fileName: "src/routes/contactform.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this), contactform_default = contactform;

// src/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader24
});
var import_node32 = require("@remix-run/node");
var loader24 = async () => (0, import_node32.redirect)("/" + availableLanguages[0], 301);

// src/routes/$.tsx
var __exports2 = {};
__export(__exports2, {
  loader: () => loader25
});
var import_node33 = require("@remix-run/node");
var loader25 = async ({ params }) => (0, import_node33.redirect)("/" + availableLanguages[0] + "/" + params["*"], 301);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "784d6e78", entry: { module: "/build/entry.client-M463EFPK.js", imports: ["/build/_shared/chunk-EC77GNCO.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NUBUE557.js", imports: ["/build/_shared/chunk-C7AG6ZHD.js", "/build/_shared/chunk-2CBRMZKH.js", "/build/_shared/chunk-3IVKYXCY.js", "/build/_shared/chunk-2QYTND5B.js", "/build/_shared/chunk-K422RAHX.js", "/build/_shared/chunk-OU3A6Y3Z.js", "/build/_shared/chunk-L7NF5ES7.js", "/build/_shared/chunk-CN7AHYTM.js", "/build/_shared/chunk-XY3KWW5M.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-PIBUPWSW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/$": { id: "routes/$langstore/$", parentId: "root", path: ":langstore/*", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/$-RGSZE67A.js", imports: ["/build/_shared/chunk-TKXXDPPC.js", "/build/_shared/chunk-H5WZLDPR.js", "/build/_shared/chunk-GJO5O5S4.js", "/build/_shared/chunk-2VRHW7M3.js", "/build/_shared/chunk-U4OKM7PG.js", "/build/_shared/chunk-SEUAFLWG.js", "/build/_shared/chunk-OOP2YEQ7.js", "/build/_shared/chunk-LOZTA2TZ.js", "/build/_shared/chunk-7MFRY4AM.js", "/build/_shared/chunk-Y2AEM6CM.js", "/build/_shared/chunk-JHVSQUXW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/cart/$id": { id: "routes/$langstore/api/cart/$id", parentId: "root", path: ":langstore/api/cart/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/cart/$id-ILK2XNGD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/cart/index": { id: "routes/$langstore/api/cart/index", parentId: "root", path: ":langstore/api/cart", index: !0, caseSensitive: void 0, module: "/build/routes/$langstore/api/cart/index-O2PIW5QK.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/cart/place": { id: "routes/$langstore/api/cart/place", parentId: "root", path: ":langstore/api/cart/place", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/cart/place-7O4XC26S.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/magicklink/confirm.$token": { id: "routes/$langstore/api/magicklink/confirm.$token", parentId: "root", path: ":langstore/api/magicklink/confirm/:token", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/magicklink/confirm.$token-U7P3H4L6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/magicklink/register": { id: "routes/$langstore/api/magicklink/register", parentId: "root", path: ":langstore/api/magicklink/register", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/magicklink/register-RVJVFT37.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/orders/$id": { id: "routes/$langstore/api/orders/$id", parentId: "root", path: ":langstore/api/orders/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/orders/$id-EVEOAEWQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/orders/index": { id: "routes/$langstore/api/orders/index", parentId: "root", path: ":langstore/api/orders", index: !0, caseSensitive: void 0, module: "/build/routes/$langstore/api/orders/index-SLBIU6JL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/payment/$provider.create": { id: "routes/$langstore/api/payment/$provider.create", parentId: "root", path: ":langstore/api/payment/:provider/create", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/payment/$provider.create-NEOUK322.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/payment/crystal.$type.confirmed": { id: "routes/$langstore/api/payment/crystal.$type.confirmed", parentId: "root", path: ":langstore/api/payment/crystal/:type/confirmed", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/payment/crystal.$type.confirmed-TJ4C2KMF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/api/shipping/$provider.pickup-points": { id: "routes/$langstore/api/shipping/$provider.pickup-points", parentId: "root", path: ":langstore/api/shipping/:provider/pickup-points", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/api/shipping/$provider.pickup-points-KAN2MEEM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/cart": { id: "routes/$langstore/cart", parentId: "root", path: ":langstore/cart", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/cart-QPAMV62I.js", imports: ["/build/_shared/chunk-SIM2ZLJC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/checkout": { id: "routes/$langstore/checkout", parentId: "root", path: ":langstore/checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/checkout-J2V6EFS3.js", imports: ["/build/_shared/chunk-3Q52FFO7.js", "/build/_shared/chunk-MBK3F5HA.js", "/build/_shared/chunk-SEUAFLWG.js", "/build/_shared/chunk-YWRVUOCS.js", "/build/_shared/chunk-SIM2ZLJC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/favicon/$size[.png]": { id: "routes/$langstore/favicon/$size[.png]", parentId: "root", path: ":langstore/favicon/:size.png", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/favicon/$size[.png]-JZ26RVBY.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/index": { id: "routes/$langstore/index", parentId: "root", path: ":langstore", index: !0, caseSensitive: void 0, module: "/build/routes/$langstore/index-L7JUBTEZ.js", imports: ["/build/_shared/chunk-TKXXDPPC.js", "/build/_shared/chunk-LUFSLTAB.js", "/build/_shared/chunk-3CHZUQSG.js", "/build/_shared/chunk-7MFRY4AM.js", "/build/_shared/chunk-JHVSQUXW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/order/$id": { id: "routes/$langstore/order/$id", parentId: "root", path: ":langstore/order/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/order/$id-P6X5NI2Y.js", imports: ["/build/_shared/chunk-MBK3F5HA.js", "/build/_shared/chunk-SEUAFLWG.js", "/build/_shared/chunk-SIM2ZLJC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/order/cart.$id": { id: "routes/$langstore/order/cart.$id", parentId: "root", path: ":langstore/order/cart/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/order/cart.$id-AWRTL5I6.js", imports: ["/build/_shared/chunk-YWRVUOCS.js", "/build/_shared/chunk-SIM2ZLJC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/order/invoice.$id[.]pdf": { id: "routes/$langstore/order/invoice.$id[.]pdf", parentId: "root", path: ":langstore/order/invoice/:id.pdf", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/order/invoice.$id[.]pdf-ODYUTPQX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/orders": { id: "routes/$langstore/orders", parentId: "root", path: ":langstore/orders", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/orders-QJ6ETXGE.js", imports: ["/build/_shared/chunk-3Q52FFO7.js", "/build/_shared/chunk-MBK3F5HA.js", "/build/_shared/chunk-SEUAFLWG.js", "/build/_shared/chunk-SIM2ZLJC.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/search": { id: "routes/$langstore/search", parentId: "root", path: ":langstore/search", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/search-WWRB5L3G.js", imports: ["/build/_shared/chunk-2VRHW7M3.js", "/build/_shared/chunk-Y2AEM6CM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/shop/$folder": { id: "routes/$langstore/shop/$folder", parentId: "root", path: ":langstore/shop/:folder", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/shop/$folder-5EPM4ENB.js", imports: ["/build/_shared/chunk-LUFSLTAB.js", "/build/_shared/chunk-GJO5O5S4.js", "/build/_shared/chunk-2VRHW7M3.js", "/build/_shared/chunk-3CHZUQSG.js", "/build/_shared/chunk-U4OKM7PG.js", "/build/_shared/chunk-SEUAFLWG.js", "/build/_shared/chunk-7MFRY4AM.js", "/build/_shared/chunk-Y2AEM6CM.js", "/build/_shared/chunk-JHVSQUXW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/shop/$folder.$product": { id: "routes/$langstore/shop/$folder.$product", parentId: "root", path: ":langstore/shop/:folder/:product", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/shop/$folder.$product-QEDVRPXS.js", imports: ["/build/_shared/chunk-OOP2YEQ7.js", "/build/_shared/chunk-LOZTA2TZ.js", "/build/_shared/chunk-7MFRY4AM.js", "/build/_shared/chunk-Y2AEM6CM.js", "/build/_shared/chunk-JHVSQUXW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/shop/$folder.$product[.]pdf": { id: "routes/$langstore/shop/$folder.$product[.]pdf", parentId: "root", path: ":langstore/shop/:folder/:product.pdf", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/shop/$folder.$product[.]pdf-7V6YLAXZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/shop/$folder[.]pdf": { id: "routes/$langstore/shop/$folder[.]pdf", parentId: "root", path: ":langstore/shop/:folder.pdf", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/shop/$folder[.]pdf-4PT2BAXZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/shop/index": { id: "routes/$langstore/shop/index", parentId: "root", path: ":langstore/shop", index: !0, caseSensitive: void 0, module: "/build/routes/$langstore/shop/index-O6AVO3FN.js", imports: ["/build/_shared/chunk-YLC4YTU5.js", "/build/_shared/chunk-3CHZUQSG.js", "/build/_shared/chunk-U4OKM7PG.js", "/build/_shared/chunk-Y2AEM6CM.js", "/build/_shared/chunk-JHVSQUXW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/stories/$story": { id: "routes/$langstore/stories/$story", parentId: "root", path: ":langstore/stories/:story", index: void 0, caseSensitive: void 0, module: "/build/routes/$langstore/stories/$story-TYRKIX4O.js", imports: ["/build/_shared/chunk-H5WZLDPR.js", "/build/_shared/chunk-LOZTA2TZ.js", "/build/_shared/chunk-7MFRY4AM.js", "/build/_shared/chunk-Y2AEM6CM.js", "/build/_shared/chunk-JHVSQUXW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$langstore/stories/index": { id: "routes/$langstore/stories/index", parentId: "root", path: ":langstore/stories", index: !0, caseSensitive: void 0, module: "/build/routes/$langstore/stories/index-WLO5SC4K.js", imports: ["/build/_shared/chunk-YLC4YTU5.js", "/build/_shared/chunk-3CHZUQSG.js", "/build/_shared/chunk-U4OKM7PG.js", "/build/_shared/chunk-Y2AEM6CM.js", "/build/_shared/chunk-JHVSQUXW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/cache/purge": { id: "routes/api/webhook/cache/purge", parentId: "root", path: "api/webhook/cache/purge", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/cache/purge-HKG7KQU7.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/order/created": { id: "routes/api/webhook/order/created", parentId: "root", path: "api/webhook/order/created", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/order/created-A5BGVWRF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/order/stage/changed": { id: "routes/api/webhook/order/stage/changed", parentId: "root", path: "api/webhook/order/stage/changed", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/order/stage/changed-PTLP32TB.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/payment/intent": { id: "routes/api/webhook/payment/intent", parentId: "root", path: "api/webhook/payment/intent", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/payment/intent-BEADEPQO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/payment/klarna.$cartId": { id: "routes/api/webhook/payment/klarna.$cartId", parentId: "root", path: "api/webhook/payment/klarna/:cartId", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/payment/klarna.$cartId-4Z62UUE2.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/payment/montonio": { id: "routes/api/webhook/payment/montonio", parentId: "root", path: "api/webhook/payment/montonio", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/payment/montonio-ZEN3TNBE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/payment/quickpay": { id: "routes/api/webhook/payment/quickpay", parentId: "root", path: "api/webhook/payment/quickpay", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/payment/quickpay-K2BLP2VX.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/payment/razorpay.verify": { id: "routes/api/webhook/payment/razorpay.verify", parentId: "root", path: "api/webhook/payment/razorpay/verify", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/payment/razorpay.verify-4N7WQ76S.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/webhook/payment/stripe": { id: "routes/api/webhook/payment/stripe", parentId: "root", path: "api/webhook/payment/stripe", index: void 0, caseSensitive: void 0, module: "/build/routes/api/webhook/payment/stripe-67DXUH2S.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contactform": { id: "routes/contactform", parentId: "root", path: "contactform", index: void 0, caseSensitive: void 0, module: "/build/routes/contactform-A7VHX6PU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IBPJR7UM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-784D6E78.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$langstore/api/shipping/$provider.pickup-points": {
    id: "routes/$langstore/api/shipping/$provider.pickup-points",
    parentId: "root",
    path: ":langstore/api/shipping/:provider/pickup-points",
    index: void 0,
    caseSensitive: void 0,
    module: provider_pickup_points_exports
  },
  "routes/$langstore/api/payment/crystal.$type.confirmed": {
    id: "routes/$langstore/api/payment/crystal.$type.confirmed",
    parentId: "root",
    path: ":langstore/api/payment/crystal/:type/confirmed",
    index: void 0,
    caseSensitive: void 0,
    module: crystal_type_confirmed_exports
  },
  "routes/$langstore/api/magicklink/confirm.$token": {
    id: "routes/$langstore/api/magicklink/confirm.$token",
    parentId: "root",
    path: ":langstore/api/magicklink/confirm/:token",
    index: void 0,
    caseSensitive: void 0,
    module: confirm_token_exports
  },
  "routes/$langstore/api/payment/$provider.create": {
    id: "routes/$langstore/api/payment/$provider.create",
    parentId: "root",
    path: ":langstore/api/payment/:provider/create",
    index: void 0,
    caseSensitive: void 0,
    module: provider_create_exports
  },
  "routes/$langstore/shop/$folder.$product[.]pdf": {
    id: "routes/$langstore/shop/$folder.$product[.]pdf",
    parentId: "root",
    path: ":langstore/shop/:folder/:product.pdf",
    index: void 0,
    caseSensitive: void 0,
    module: folder_product_pdf_exports
  },
  "routes/api/webhook/payment/razorpay.verify": {
    id: "routes/api/webhook/payment/razorpay.verify",
    parentId: "root",
    path: "api/webhook/payment/razorpay/verify",
    index: void 0,
    caseSensitive: void 0,
    module: razorpay_verify_exports
  },
  "routes/$langstore/api/magicklink/register": {
    id: "routes/$langstore/api/magicklink/register",
    parentId: "root",
    path: ":langstore/api/magicklink/register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/$langstore/order/invoice.$id[.]pdf": {
    id: "routes/$langstore/order/invoice.$id[.]pdf",
    parentId: "root",
    path: ":langstore/order/invoice/:id.pdf",
    index: void 0,
    caseSensitive: void 0,
    module: invoice_id_pdf_exports
  },
  "routes/api/webhook/payment/klarna.$cartId": {
    id: "routes/api/webhook/payment/klarna.$cartId",
    parentId: "root",
    path: "api/webhook/payment/klarna/:cartId",
    index: void 0,
    caseSensitive: void 0,
    module: klarna_cartId_exports
  },
  "routes/$langstore/shop/$folder.$product": {
    id: "routes/$langstore/shop/$folder.$product",
    parentId: "root",
    path: ":langstore/shop/:folder/:product",
    index: void 0,
    caseSensitive: void 0,
    module: folder_product_exports
  },
  "routes/api/webhook/order/stage/changed": {
    id: "routes/api/webhook/order/stage/changed",
    parentId: "root",
    path: "api/webhook/order/stage/changed",
    index: void 0,
    caseSensitive: void 0,
    module: changed_exports
  },
  "routes/$langstore/favicon/$size[.png]": {
    id: "routes/$langstore/favicon/$size[.png]",
    parentId: "root",
    path: ":langstore/favicon/:size.png",
    index: void 0,
    caseSensitive: void 0,
    module: size_png_exports
  },
  "routes/$langstore/shop/$folder[.]pdf": {
    id: "routes/$langstore/shop/$folder[.]pdf",
    parentId: "root",
    path: ":langstore/shop/:folder.pdf",
    index: void 0,
    caseSensitive: void 0,
    module: folder_pdf_exports
  },
  "routes/api/webhook/payment/montonio": {
    id: "routes/api/webhook/payment/montonio",
    parentId: "root",
    path: "api/webhook/payment/montonio",
    index: void 0,
    caseSensitive: void 0,
    module: montonio_exports
  },
  "routes/api/webhook/payment/quickpay": {
    id: "routes/api/webhook/payment/quickpay",
    parentId: "root",
    path: "api/webhook/payment/quickpay",
    index: void 0,
    caseSensitive: void 0,
    module: quickpay_exports
  },
  "routes/$langstore/api/orders/index": {
    id: "routes/$langstore/api/orders/index",
    parentId: "root",
    path: ":langstore/api/orders",
    index: !0,
    caseSensitive: void 0,
    module: orders_exports
  },
  "routes/api/webhook/payment/intent": {
    id: "routes/api/webhook/payment/intent",
    parentId: "root",
    path: "api/webhook/payment/intent",
    index: void 0,
    caseSensitive: void 0,
    module: intent_exports
  },
  "routes/api/webhook/payment/stripe": {
    id: "routes/api/webhook/payment/stripe",
    parentId: "root",
    path: "api/webhook/payment/stripe",
    index: void 0,
    caseSensitive: void 0,
    module: stripe_exports
  },
  "routes/$langstore/api/cart/index": {
    id: "routes/$langstore/api/cart/index",
    parentId: "root",
    path: ":langstore/api/cart",
    index: !0,
    caseSensitive: void 0,
    module: cart_exports
  },
  "routes/$langstore/api/cart/place": {
    id: "routes/$langstore/api/cart/place",
    parentId: "root",
    path: ":langstore/api/cart/place",
    index: void 0,
    caseSensitive: void 0,
    module: place_exports
  },
  "routes/$langstore/api/orders/$id": {
    id: "routes/$langstore/api/orders/$id",
    parentId: "root",
    path: ":langstore/api/orders/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/$langstore/order/cart.$id": {
    id: "routes/$langstore/order/cart.$id",
    parentId: "root",
    path: ":langstore/order/cart/:id",
    index: void 0,
    caseSensitive: void 0,
    module: cart_id_exports
  },
  "routes/$langstore/stories/$story": {
    id: "routes/$langstore/stories/$story",
    parentId: "root",
    path: ":langstore/stories/:story",
    index: void 0,
    caseSensitive: void 0,
    module: story_exports
  },
  "routes/api/webhook/order/created": {
    id: "routes/api/webhook/order/created",
    parentId: "root",
    path: "api/webhook/order/created",
    index: void 0,
    caseSensitive: void 0,
    module: created_exports
  },
  "routes/$langstore/stories/index": {
    id: "routes/$langstore/stories/index",
    parentId: "root",
    path: ":langstore/stories",
    index: !0,
    caseSensitive: void 0,
    module: stories_exports
  },
  "routes/$langstore/api/cart/$id": {
    id: "routes/$langstore/api/cart/$id",
    parentId: "root",
    path: ":langstore/api/cart/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/$langstore/shop/$folder": {
    id: "routes/$langstore/shop/$folder",
    parentId: "root",
    path: ":langstore/shop/:folder",
    index: void 0,
    caseSensitive: void 0,
    module: folder_exports
  },
  "routes/api/webhook/cache/purge": {
    id: "routes/api/webhook/cache/purge",
    parentId: "root",
    path: "api/webhook/cache/purge",
    index: void 0,
    caseSensitive: void 0,
    module: purge_exports
  },
  "routes/$langstore/shop/index": {
    id: "routes/$langstore/shop/index",
    parentId: "root",
    path: ":langstore/shop",
    index: !0,
    caseSensitive: void 0,
    module: shop_exports
  },
  "routes/$langstore/order/$id": {
    id: "routes/$langstore/order/$id",
    parentId: "root",
    path: ":langstore/order/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports3
  },
  "routes/$langstore/checkout": {
    id: "routes/$langstore/checkout",
    parentId: "root",
    path: ":langstore/checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/$langstore/orders": {
    id: "routes/$langstore/orders",
    parentId: "root",
    path: ":langstore/orders",
    index: void 0,
    caseSensitive: void 0,
    module: orders_exports2
  },
  "routes/$langstore/search": {
    id: "routes/$langstore/search",
    parentId: "root",
    path: ":langstore/search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/$langstore/index": {
    id: "routes/$langstore/index",
    parentId: "root",
    path: ":langstore",
    index: !0,
    caseSensitive: void 0,
    module: langstore_exports
  },
  "routes/$langstore/cart": {
    id: "routes/$langstore/cart",
    parentId: "root",
    path: ":langstore/cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports2
  },
  "routes/$langstore/$": {
    id: "routes/$langstore/$",
    parentId: "root",
    path: ":langstore/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/contactform": {
    id: "routes/contactform",
    parentId: "root",
    path: "contactform",
    index: void 0,
    caseSensitive: void 0,
    module: contactform_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
