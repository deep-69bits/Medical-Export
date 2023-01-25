import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// src/ui/pages/LandingPage.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var slideWidth = 30;
var _items = [
  {
    player: {
      title: "Efren Reyes",
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg"
    }
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
    }
  },
  {
    player: {
      title: "Shane Van Boening",
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: "https://i.postimg.cc/cHdMJQKG/svb-slider.jpg"
    }
  },
  {
    player: {
      title: "Mike Sigel",
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg"
    }
  },
  {
    player: {
      title: "Willie Mosconi",
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: "https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg"
    }
  }
];
var length = _items.length;
_items.push(..._items);
var sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
var createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`
    },
    player: _items[idx].player
  };
  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }
  return item;
};
var CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "carousel__slide-item", style: item.styles, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel__slide-item-img-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.player.image, alt: item.player.title }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 77,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel-slide-item__body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: item.player.title }, void 0, false, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: item.player.desc }, void 0, false, {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 81,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 79,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 75,
    columnNumber: 9
  }, this);
};
var keys = Array.from(Array(_items.length).keys());
var Carousel = () => {
  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;
  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };
  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };
  const handleDotClick = (idx) => {
    if (idx < activeIdx)
      prevClick(activeIdx - idx);
    if (idx > activeIdx)
      nextClick(idx - activeIdx);
  };
  React.useEffect(() => {
    if (isTicking)
      sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);
  React.useEffect(() => {
    setActiveIdx((length - items[0] % length) % length);
  }, [items]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel__wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel__inner", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel__btn carousel__btn--prev", onClick: () => prevClick(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "carousel__btn-arrow carousel__btn-arrow--left" }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 130,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 129,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel__container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "carousel__slide-list", children: items.map((pos, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CarouselSlideItem, { idx: i, pos, activeIdx }, i, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 135,
      columnNumber: 29
    }, this)) }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 133,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 132,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "carousel__btn carousel__btn--next", onClick: () => nextClick(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "carousel__btn-arrow carousel__btn-arrow--right" }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 140,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 139,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "carousel__dots", children: items.slice(0, length).map((pos, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        onClick: () => handleDotClick(i),
        className: i === activeIdx ? "dot active" : "dot"
      },
      i,
      false,
      {
        fileName: "src/ui/pages/LandingPage.js",
        lineNumber: 144,
        columnNumber: 25
      },
      this
    )) }, void 0, false, {
      fileName: "src/ui/pages/LandingPage.js",
      lineNumber: 142,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 128,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 127,
    columnNumber: 9
  }, this);
};
var LandingPage_default = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-[100vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Carousel, {}, void 0, false, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 158,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/ui/pages/LandingPage.js",
    lineNumber: 157,
    columnNumber: 9
  }, this);
};

export {
  LandingPage_default
};
//# sourceMappingURL=/build/_shared/chunk-RPDIFXGF.js.map
