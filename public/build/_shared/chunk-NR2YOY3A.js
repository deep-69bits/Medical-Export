import {
  useSearchParams_default
} from "/build/_shared/chunk-IQZC274B.js";
import {
  useLocation_default
} from "/build/_shared/chunk-3JQVBZR2.js";
import {
  require_lib
} from "/build/_shared/chunk-L7NF5ES7.js";
import {
  useAppContext
} from "/build/_shared/chunk-CN7AHYTM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/core/authentication.server
var require_authentication = __commonJS({
  "empty-module:~/core/authentication.server"(exports, module) {
    module.exports = {};
  }
});

// src/ui/hooks/useAuth.ts
var import_local_storage = __toESM(require_lib());

// node_modules/jwt-decode/build/jwt-decode.esm.js
function e(e2) {
  this.message = e2;
}
e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";
var r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(r2) {
  var t2 = String(r2).replace(/=+$/, "");
  if (t2.length % 4 == 1)
    throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
  for (var n2, o2, a = 0, i = 0, c = ""; o2 = t2.charAt(i++); ~o2 && (n2 = a % 4 ? 64 * n2 + o2 : o2, a++ % 4) ? c += String.fromCharCode(255 & n2 >> (-2 * a & 6)) : 0)
    o2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o2);
  return c;
};
function t(e2) {
  var t2 = e2.replace(/-/g, "+").replace(/_/g, "/");
  switch (t2.length % 4) {
    case 0:
      break;
    case 2:
      t2 += "==";
      break;
    case 3:
      t2 += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return function(e3) {
      return decodeURIComponent(r(e3).replace(/(.)/g, function(e4, r2) {
        var t3 = r2.charCodeAt(0).toString(16).toUpperCase();
        return t3.length < 2 && (t3 = "0" + t3), "%" + t3;
      }));
    }(t2);
  } catch (e3) {
    return r(t2);
  }
}
function n(e2) {
  this.message = e2;
}
function o(e2, r2) {
  if ("string" != typeof e2)
    throw new n("Invalid token specified");
  var o2 = true === (r2 = r2 || {}).header ? 0 : 1;
  try {
    return JSON.parse(t(e2.split(".")[o2]));
  } catch (e3) {
    throw new n("Invalid token specified: " + e3.message);
  }
}
n.prototype = new Error(), n.prototype.name = "InvalidTokenError";
var jwt_decode_esm_default = o;

// src/ui/hooks/useAuth.ts
var import_react = __toESM(require_react());
function useAuth() {
  const [token] = (0, import_local_storage.useLocalStorage)("jwt", "");
  const [searchParams] = useSearchParams_default();
  const location = useLocation_default();
  (0, import_react.useEffect)(() => {
    if (searchParams.has("token")) {
      const urlToken = searchParams.get("token");
      searchParams.delete("token");
      try {
        const decoded = jwt_decode_esm_default(urlToken);
        if (decoded) {
          if (decoded.sub === "isSupposedToBeLoggedInOnServiceApi") {
            (0, import_local_storage.writeStorage)("jwt", urlToken);
          }
        }
      } catch (exception) {
        console.log(exception);
      }
      window.location.href = location.pathname;
    }
  });
  let userInfos = {};
  let isAuthenticated = false;
  try {
    const decoded = jwt_decode_esm_default(token);
    if (decoded && decoded.exp > Date.now() / 1e3) {
      isAuthenticated = true;
      userInfos = {
        email: decoded.email,
        firstname: decoded.firstname,
        lastname: decoded.lastname
      };
    }
  } catch (exception) {
  }
  return {
    login: (jwt) => {
      (0, import_local_storage.writeStorage)("jwt", jwt);
    },
    logout: () => {
      (0, import_local_storage.writeStorage)("jwt", "");
    },
    isAuthenticated,
    userInfos
  };
}

// src/ui/components/checkout-forms/magicklogin.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MagickLoginForm = ({ enabledGuest, title, actionTitle, onlyLogin = false }) => {
  const { state: appContextState, path, _t } = useAppContext();
  const { isAuthenticated, userInfos, logout } = useAuth();
  const [formData, updateFormData] = (0, import_react2.useState)({
    firstname: (userInfos == null ? void 0 : userInfos.firstname) || "",
    lastname: (userInfos == null ? void 0 : userInfos.lastname) || "",
    email: (userInfos == null ? void 0 : userInfos.email) || ""
  });
  const handleChange = (event) => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };
  const displayOnlyLogin = onlyLogin || isAuthenticated;
  console.log("check1");
  const [number, setNumber] = (0, import_react2.useState)("");
  const [location, setLocation] = (0, import_react2.useState)("");
  const [load, setLoad] = (0, import_react2.useState)(false);
  const handleNumber = (e2) => {
    setNumber(e2.target.value);
    console.log(number);
    setLoad(!load);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col mt-5 gap-2 w-full sm:min-w-[400px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-2xl mt-5 mb-3", children: "Inquiry form" }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 132,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-sm font-semibold", htmlFor: "phonenumber", children: "Phone Number" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 136,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { value: number, onChange: handleNumber, className: " w-[400px] p-4 rounded-sm block bg-grey h-[50px] ", type: "text", placeholder: "+91 9022xxxxxx" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 136,
          columnNumber: 108
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
        lineNumber: 135,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "location", className: "text-sm font-semibold", children: "Location" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 140,
          columnNumber: 25
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", value: location, onC: true, className: "w-[400px] p-4 rounded-sm block bg-grey h-[50px] w-fulll", placeholder: "Jaipur" }, void 0, false, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 140,
          columnNumber: 103
        }, this)
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
        lineNumber: 139,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 133,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", onClick: () => {
      console.log("hello");
    }, className: "bg-black text-white rounded-md px-6 py-3 mt-5 float-right", children: "Inquire" }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 144,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this);
};

export {
  require_authentication,
  useAuth,
  MagickLoginForm
};
//# sourceMappingURL=/build/_shared/chunk-NR2YOY3A.js.map
