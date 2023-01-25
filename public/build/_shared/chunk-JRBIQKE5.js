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

// src/use-cases/http/cache.ts
var parse = (duration, format) => {
  const durationRegexp = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu;
  const ms = 1;
  const sec = 1e3 * ms;
  const min = 60 * sec;
  const hour = 60 * min;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 365.25 / 12 * day;
  const year = 365.25 * day;
  const ratios = {
    nanosecond: ms / 1e6,
    ns: ms / 1e6,
    \u00B5s: ms / 1e3,
    us: ms / 1e3,
    microsecond: ms / 1e3,
    millisecond: ms,
    ms,
    second: sec,
    sec,
    s: sec,
    minute: min,
    min,
    m: min,
    hour,
    hr: hour,
    h: hour,
    day,
    d: day,
    week,
    wk: week,
    w: week,
    month,
    b: month,
    year,
    yr: year,
    y: year
  };
  function unit(str2) {
    return ratios[str2] || ratios[str2.toLowerCase().replace(/s$/, "")] || null;
  }
  let result = 0;
  const str = duration.replace(/(\d)[,_](\d)/g, "$1$2").replace(durationRegexp, (_, n, units) => {
    const convertedUnits = unit(units);
    if (convertedUnits) {
      result = (result || 0) + parseFloat(n) * convertedUnits;
    }
    return "";
  });
  return result && result / (unit(format) || 1);
};
function HttpCacheHeaderTagger(maxAge, sharedMaxAge, tags) {
  const clean = (tag) => {
    let w = tag.replace(/\//g, "-");
    if (w[0] === "-") {
      w = w.substring(1);
    }
    return w;
  };
  if (process.env.HTTP_CACHE_SERVICE === "fastly") {
    return {
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
    };
  }
  if (process.env.HTTP_CACHE_SERVICE === "varnish") {
    return {
      headers: {
        "Cache-Control": `public, max-age=${parse(maxAge, "s")}, s-maxage=${parse(
          sharedMaxAge,
          "s"
        )}, stale-while-revalidate=${parse(maxAge, "s")}`,
        xkey: "all " + tags.map(clean).join(" ")
      }
    };
  }
  return {
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

export {
  displayableLanguages,
  availableLanguages,
  buildLanguageMarketAwareLink,
  StoreFrontAwaretHttpCacheHeaderTagger
};
//# sourceMappingURL=/build/_shared/chunk-JRBIQKE5.js.map
