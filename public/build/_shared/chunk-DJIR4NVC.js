import {
  require_dist
} from "/build/_shared/chunk-TZRBUZHL.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-Y3Y77VXY.js";
import {
  require_react
} from "/build/_shared/chunk-MSUG4FUW.js";
import {
  __commonJS
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@crystallize/reactjs-hooks/dist/core/MainProvider/Reducer.js
var require_Reducer = __commonJS({
  "node_modules/@crystallize/reactjs-hooks/dist/core/MainProvider/Reducer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapToReducerActions = exports.Reducer = void 0;
    function Reducer(state, action) {
      switch (action.type) {
        case "LOADING": {
          return {
            ...state,
            loading: action.state
          };
        }
        case "CHANGE_LANGUAGE": {
          return {
            ...state,
            language: action.language
          };
        }
        case "UPDATE_CONFIGURATION": {
          return {
            ...state,
            configuration: action.configuration
          };
        }
        default: {
          throw new Error("Main Provider - Unhandled action type");
        }
      }
    }
    exports.Reducer = Reducer;
    function mapToReducerActions(dispatch) {
      return {
        loading: (state) => dispatch({ type: "LOADING", state }),
        changeLanguage: (language) => dispatch({ type: "CHANGE_LANGUAGE", language }),
        updateConfiguration: (configuration) => dispatch({ type: "UPDATE_CONFIGURATION", configuration })
      };
    }
    exports.mapToReducerActions = mapToReducerActions;
  }
});

// node_modules/@crystallize/reactjs-hooks/dist/core/MainProvider/MainProvider.js
var require_MainProvider = __commonJS({
  "node_modules/@crystallize/reactjs-hooks/dist/core/MainProvider/MainProvider.js"(exports) {
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
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCrystallize = exports.CrystallizeProvider = void 0;
    var jsx_runtime_1 = require_jsx_runtime();
    var React = __importStar(require_react());
    var Reducer_1 = require_Reducer();
    var js_api_client_1 = require_dist();
    var StateContext = React.createContext(void 0);
    var DispatchContext = React.createContext(void 0);
    var initialState = (configuration, language) => {
      return {
        loading: false,
        language,
        configuration
      };
    };
    var CrystallizeProvider = ({ tenantIdentifier, accessTokenId, accessTokenSecret, language, children }) => {
      const [state, dispatch] = React.useReducer(Reducer_1.Reducer, initialState({ tenantIdentifier, accessTokenId, accessTokenSecret }, language));
      return (0, jsx_runtime_1.jsx)(StateContext.Provider, { value: state, children: (0, jsx_runtime_1.jsx)(DispatchContext.Provider, { value: dispatch, children }) });
    };
    exports.CrystallizeProvider = CrystallizeProvider;
    function useCrystallizeState() {
      const context = React.useContext(StateContext);
      if (context === void 0) {
        throw new Error("useCrystallizeState must be used within the MainProvider.");
      }
      return context;
    }
    function useCrystallizeDispatch() {
      const context = React.useContext(DispatchContext);
      if (context === void 0) {
        throw new Error("useCrystallizeDispatch must be used within the MainProvider.");
      }
      return context;
    }
    function useCrystallize() {
      const actions = (0, Reducer_1.mapToReducerActions)(useCrystallizeDispatch());
      const state = useCrystallizeState();
      const apiClient = (0, js_api_client_1.createClient)({
        tenantIdentifier: state.configuration.tenantIdentifier
      });
      const helpers = React.useMemo(() => {
        return {
          catalogueFetcher: (0, js_api_client_1.createCatalogueFetcher)(apiClient),
          navigationFetcher: {
            byFolders: (path, depth = 1, extraQuery, perLevel) => (0, js_api_client_1.createNavigationFetcher)(apiClient).byFolders(path, state.language, depth, extraQuery, perLevel),
            byTopics: (path, depth = 1, extraQuery, perLevel) => (0, js_api_client_1.createNavigationFetcher)(apiClient).byTopics(path, state.language, depth, extraQuery, perLevel)
          },
          productHydrater: {
            byPaths: (paths, extraQuery, perProduct) => (0, js_api_client_1.createProductHydrater)(apiClient).byPaths(paths, state.language, extraQuery, perProduct),
            bySkus: (skus, extraQuery, perProduct) => (0, js_api_client_1.createProductHydrater)(apiClient).bySkus(skus, state.language, extraQuery, perProduct)
          },
          orderFetcher: (0, js_api_client_1.createOrderFetcher)(apiClient)
        };
      }, [apiClient, state.language]);
      return {
        helpers,
        apiClient,
        state,
        dispatch: actions
      };
    }
    exports.useCrystallize = useCrystallize;
  }
});

// node_modules/@crystallize/reactjs-hooks/dist/core/hooks/useFetch.js
var require_useFetch = __commonJS({
  "node_modules/@crystallize/reactjs-hooks/dist/core/hooks/useFetch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFetchResult = exports.postJson = exports.getJson = void 0;
    var fetchResult = async (url, init) => {
      const response = await fetch(url, {
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json"
        },
        ...init
      });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}. Response NOT OK.`);
      }
      const json = await response.json();
      if (json.errors) {
        throw new Error(`Could not fetch ${url}. Response contains errors.`);
      }
      return json;
    };
    var jsonRequest = async (input, method, init) => {
      return fetchResult(input, {
        method,
        ...init
      });
    };
    var getJson = async (input, init) => jsonRequest(input, "GET", init);
    exports.getJson = getJson;
    var postJson = async (input, body, init) => jsonRequest(input, "POST", {
      body: JSON.stringify(body),
      ...init
    });
    exports.postJson = postJson;
    var useFetchResult = () => {
      const abortController = new AbortController();
      const abort = () => {
        abortController.abort();
      };
      const signalInit = {
        signal: abortController.signal
      };
      const get = async (url, init) => {
        return await (0, exports.getJson)(url, {
          ...signalInit,
          ...init
        });
      };
      const post = async (url, body, init) => {
        return await (0, exports.postJson)(url, body, {
          ...signalInit,
          ...init
        });
      };
      return { get, post, abort };
    };
    exports.useFetchResult = useFetchResult;
  }
});

// node_modules/@crystallize/reactjs-hooks/dist/core/hooks/useHydrated.js
var require_useHydrated = __commonJS({
  "node_modules/@crystallize/reactjs-hooks/dist/core/hooks/useHydrated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientOnly = exports.useHydrated = void 0;
    var react_1 = require_react();
    var hydrating = true;
    function useHydrated() {
      let [hydrated, setHydrated] = (0, react_1.useState)(() => !hydrating);
      (0, react_1.useEffect)(() => {
        hydrating = false;
        setHydrated(true);
      }, []);
      return hydrated;
    }
    exports.useHydrated = useHydrated;
    var ClientOnly = ({ children, fallback = null }) => {
      const hydrated = useHydrated();
      if (hydrated) {
        return children;
      }
      return fallback;
    };
    exports.ClientOnly = ClientOnly;
  }
});

// node_modules/@crystallize/reactjs-hooks/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@crystallize/reactjs-hooks/dist/index.js"(exports) {
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
    __exportStar(require_MainProvider(), exports);
    __exportStar(require_Reducer(), exports);
    __exportStar(require_useFetch(), exports);
    __exportStar(require_useHydrated(), exports);
  }
});

export {
  require_dist2 as require_dist
};
//# sourceMappingURL=/build/_shared/chunk-DJIR4NVC.js.map
