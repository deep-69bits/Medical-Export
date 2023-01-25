import {
  useSearchParams_default
} from "/build/_shared/chunk-IQZC274B.js";
import {
  ServiceAPI
} from "/build/_shared/chunk-SIM2ZLJC.js";
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

// src/ui/components/input.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Input = ({ placeholder, defaultValue, name, onChange, label, required, disabled = false, type = "text" }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: name, className: "flex flex-col frntr-input", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      label,
      required && "*"
    ] }, void 0, true, {
      fileName: "src/ui/components/input.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
      false,
      {
        fileName: "src/ui/components/input.tsx",
        lineNumber: 19,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/ui/components/input.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this);
};

// src/ui/components/checkout-forms/magicklogin.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col mt-5 gap-2 w-full sm:min-w-[400px]", children: [
    (userInfos == null ? void 0 : userInfos.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-grey2 px-4 py-2 rounded", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          className: "float-right bg-[#000] text-[#fff] px-4 py-2 rounded mt-2",
          onClick: () => logout(),
          children: _t("logout")
        },
        void 0,
        false,
        {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 34,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "clear", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("em", { children: [
          _t("hello"),
          " ",
          userInfos == null ? void 0 : userInfos.firstname,
          " ",
          userInfos == null ? void 0 : userInfos.lastname,
          " (",
          userInfos == null ? void 0 : userInfos.email,
          ")"
        ] }, void 0, true, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 41,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
          fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
          lineNumber: 44,
          columnNumber: 29
        }, this),
        _t("stillYourSession")
      ] }, void 0, true, {
        fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 33,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-bold text-2xl", children: title.replace("Register", isAuthenticated ? _t("login") : _t("register")) }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-5  text-lg", children: _t("willSendYouMagickLink") }, void 0, false, {
      fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "form",
      {
        onSubmit: async (event) => {
          event.preventDefault();
          const api = ServiceAPI({
            language: appContextState.language,
            serviceApiUrl: appContextState.serviceApiUrl
          });
          if (onlyLogin) {
            await api.sendMagickLink(formData.email, path("/orders"));
          } else {
            await api.registerAndSendMagickLink(formData);
          }
          alert("We sent you a magick link, check your email.");
        },
        children: [
          !displayOnlyLogin && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid md:grid-cols-2 grid-cols-1 w-full gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Input,
              {
                defaultValue: formData.firstname || (userInfos == null ? void 0 : userInfos.firstname),
                label: _t("address.firstname"),
                placeholder: "Luke",
                name: "firstname",
                required: true,
                onChange: handleChange
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
                lineNumber: 71,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              Input,
              {
                defaultValue: formData.lastname || (userInfos == null ? void 0 : userInfos.lastname),
                placeholder: "Skywalker",
                label: _t("address.lastname"),
                name: "lastname",
                required: true,
                onChange: handleChange
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
                lineNumber: 80,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, true, {
            fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
            lineNumber: 70,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Input,
            {
              defaultValue: formData.email || (userInfos == null ? void 0 : userInfos.email),
              placeholder: "luke.skywalker@rebellion.inc",
              label: _t("address.email"),
              name: "email",
              required: true,
              onChange: handleChange
            },
            void 0,
            false,
            {
              fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
              lineNumber: 91,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-start", children: [
            enabledGuest && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                type: "button",
                className: "underline px-5 py-2 ml-2 rounded mt-5 w-full",
                onClick: () => {
                  if (enabledGuest) {
                    enabledGuest();
                  }
                },
                children: _t("guestCheckout")
              },
              void 0,
              false,
              {
                fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
                lineNumber: 102,
                columnNumber: 25
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "bg-[#000] text-[#fff] px-8 py-4 rounded mt-5 w-full", children: actionTitle.replace("Register", isAuthenticated ? _t("login") : _t("register")) }, void 0, false, {
              fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
        lineNumber: 54,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "src/ui/components/checkout-forms/magicklogin.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this);
};

export {
  require_authentication,
  useAuth,
  Input,
  MagickLoginForm
};
//# sourceMappingURL=/build/_shared/chunk-KDXS23MS.js.map
