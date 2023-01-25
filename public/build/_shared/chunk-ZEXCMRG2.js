import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

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
];
var availableLanguages = [
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
];
var availableMarkets = [];
var isValidLanguage = (language) => availableLanguages.includes(language);
var isValidMarket = (market) => {
  if (!market) {
    return true;
  }
  if (availableMarkets.length === 0) {
    return true;
  }
  return availableMarkets.includes(market);
};
var isValidLanguageMarket = (language, market) => {
  if (!isValidLanguage(language)) {
    return false;
  }
  if (!isValidMarket(market)) {
    return false;
  }
  return true;
};
var buildLanguageMarketAwareLink = (path, language, market) => {
  if (!isValidLanguageMarket(language, market)) {
    throw new Error(`Invalid language (${language}) or market (${market})`);
  }
  if (market && market.length > 0) {
    return `/${language}-${market}${path}`;
  }
  return `/${language}${path}`;
};

// src/ui/app-context/provider.tsx
var import_react = __toESM(require_react());

// src/ui/app-context/reducer.ts
function Reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEMS_TO_CART": {
      return {
        ...state,
        latestAddedCartItems: action.items
      };
    }
    case "RESET_LAST_ADDED_ITEMS": {
      return {
        ...state,
        latestAddedCartItems: []
      };
    }
    default: {
      throw new Error("AppContext - Unhandled action type");
    }
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var StateContext = (0, import_react.createContext)(void 0);
var DispatchContext = (0, import_react.createContext)(void 0);
var TranslationsContext = (0, import_react.createContext)(void 0);
var initiateState = (initialState) => {
  return {
    ...initialState,
    latestAddedCartItems: []
  };
};
var AppContextProvider = ({ children, initialState, translations }) => {
  const [state, dispatch] = (0, import_react.useReducer)(Reducer, initiateState(initialState));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TranslationsContext.Provider, { value: translations, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StateContext.Provider, { value: state, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DispatchContext.Provider, { value: dispatch, children }, void 0, false, {
    fileName: "src/ui/app-context/provider.tsx",
    lineNumber: 29,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "src/ui/app-context/provider.tsx",
    lineNumber: 28,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/app-context/provider.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this);
};
function useAppContextState() {
  const context = (0, import_react.useContext)(StateContext);
  if (context === void 0) {
    throw new Error("useAppContextState must be used within the AppContextProvider.");
  }
  return context;
}
function useAppContextDispatch() {
  const context = (0, import_react.useContext)(DispatchContext);
  if (context === void 0) {
    throw new Error("useAppContextDispatch must be used within the AppContextProvider.");
  }
  return context;
}
function useAppContext() {
  const translationContext = (0, import_react.useContext)(TranslationsContext);
  const actions = mapToReducerActions(useAppContextDispatch());
  const state = useAppContextState();
  const translate = (key, options) => {
    if (!translationContext) {
      return key;
    }
    const translated = translationContext[key] || key;
    if (!options) {
      return translated;
    }
    return Object.entries(options).reduce((acc, [key2, value]) => {
      return acc.replace(`{{${key2}}}`, value);
    }, translated);
  };
  return {
    state,
    dispatch: actions,
    _t: translate,
    path: (path) => buildLanguageMarketAwareLink(path, state.language, state.market)
  };
}

export {
  displayableLanguages,
  buildLanguageMarketAwareLink,
  AppContextProvider,
  useAppContext
};
//# sourceMappingURL=/build/_shared/chunk-ZEXCMRG2.js.map
