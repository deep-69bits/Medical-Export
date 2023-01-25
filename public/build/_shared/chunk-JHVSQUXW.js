// src/use-cases/MicrodataBuilder.ts
var buildMetas = (data) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K;
  const item = (data == null ? void 0 : data.product) || (data == null ? void 0 : data.folder) || (data == null ? void 0 : data.document) || (data == null ? void 0 : data.data) || data;
  const metaData = ((_c = (_b = (_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.content) == null ? void 0 : _b.chunks) == null ? void 0 : _c[0]) || ((_f = (_e = (_d = item == null ? void 0 : item.meta) == null ? void 0 : _d.content) == null ? void 0 : _e.chunks) == null ? void 0 : _f[0]) || ((_i = (_h = (_g = item == null ? void 0 : item.meta) == null ? void 0 : _g.content) == null ? void 0 : _h.chunks) == null ? void 0 : _i[0]);
  const title = (item == null ? void 0 : item.title) || ((_k = (_j = metaData == null ? void 0 : metaData.find((meta) => meta.id === "title")) == null ? void 0 : _j.content) == null ? void 0 : _k.text);
  const description = (item == null ? void 0 : item.description) || ((_n = (_m = (_l = metaData == null ? void 0 : metaData.find((meta) => meta.id === "description")) == null ? void 0 : _l.content) == null ? void 0 : _m.plainText) == null ? void 0 : _n[0]);
  const image = ((_p = (_o = item == null ? void 0 : item.defaultVariant) == null ? void 0 : _o.images[0]) == null ? void 0 : _p.url) || ((_s = (_r = (_q = metaData == null ? void 0 : metaData.find((meta) => meta.id === "image")) == null ? void 0 : _q.content) == null ? void 0 : _r.firstImage) == null ? void 0 : _s.url);
  const altDescription = (_w = (_v = (_u = (_t = item == null ? void 0 : item.components) == null ? void 0 : _t.find((comp) => comp.id === "description")) == null ? void 0 : _u.content) == null ? void 0 : _v.plainText) == null ? void 0 : _w[0];
  const altImage = ((_A = (_z = (_y = (_x = item == null ? void 0 : item.variants) == null ? void 0 : _x[0]) == null ? void 0 : _y.images) == null ? void 0 : _z[0]) == null ? void 0 : _A.url) || ((_H = (_G = (_F = (_E = (_D = (_C = (_B = item == null ? void 0 : item.components) == null ? void 0 : _B.find((comp) => comp.id === "shoppable-image")) == null ? void 0 : _C.content) == null ? void 0 : _D.images) == null ? void 0 : _E[0]) == null ? void 0 : _F.variants) == null ? void 0 : _G[0]) == null ? void 0 : _H.url);
  const seo = {
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

export {
  buildMetas
};
//# sourceMappingURL=/build/_shared/chunk-JHVSQUXW.js.map
