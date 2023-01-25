import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-KWNTVCXY.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

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
};
var getSymbolFromCode = (code) => mapping[code];
var getCurrencyFromCode = (code) => {
  return {
    code: code.toUpperCase(),
    symbol: getSymbolFromCode(code.toUpperCase())
  };
};

// src/ui/lib/pricing/pricing-component.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Price = ({ children, className = "", currencyCode }) => {
  const currency = getCurrencyFromCode(currencyCode);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
    minimumFractionDigits: 2,
    maximumFractionDigits: 5
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `crystallize-price ${className}`, children: formatter.format(children) }, void 0, false, {
    fileName: "src/ui/lib/pricing/pricing-component.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
};

export {
  getCurrencyFromCode,
  Price
};
//# sourceMappingURL=/build/_shared/chunk-H52OJRFM.js.map
