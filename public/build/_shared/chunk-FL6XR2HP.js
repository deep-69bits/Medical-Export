import {
  useAuth
} from "/build/_shared/chunk-F5DOTTCU.js";
import {
  ServiceAPI
} from "/build/_shared/chunk-SIM2ZLJC.js";
import {
  useAppContext
} from "/build/_shared/chunk-CN7AHYTM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/components/checkout-forms/magicklogin.tsx
var import_react = __toESM(require_react());

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
  const [formData, updateFormData] = (0, import_react.useState)({
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
  MagickLoginForm
};
//# sourceMappingURL=/build/_shared/chunk-FL6XR2HP.js.map
