import {
  getCurrencyFromCode
} from "/build/_shared/chunk-CB7RP7O3.js";

// src/use-cases/mapper/api-mappers.ts
function stringForSingleLineComponentWithId(components, id) {
  var _a, _b;
  return (_b = (_a = components == null ? void 0 : components.find((component) => component.id === id)) == null ? void 0 : _a.content) == null ? void 0 : _b.text;
}
function stringForRichTextComponentWithId(components, id) {
  var _a, _b, _c;
  return (_c = (_b = (_a = components == null ? void 0 : components.find((component) => component.id === id)) == null ? void 0 : _a.content) == null ? void 0 : _b.plainText) == null ? void 0 : _c.join("\n");
}
function paragraphsForParagraphCollectionComponentWithId(components, id) {
  var _a, _b;
  return (_b = (_a = components.find((component) => component.id === id)) == null ? void 0 : _a.content) == null ? void 0 : _b.paragraphs;
}
function sectionsForPropertyTableComponentWithId(components, id) {
  var _a;
  const component = (_a = components.find((component2) => component2.id === id)) == null ? void 0 : _a.content;
  if (!component) {
    return void 0;
  }
  return component.sections.map((section) => {
    return {
      title: section.title,
      properties: section.properties.reduce((memo, property) => {
        return {
          ...memo,
          [property.key]: property.value
        };
      }, {})
    };
  });
}
function chunksForChunkComponentWithId(components, id) {
  var _a;
  const component = (_a = components.find((component2) => component2.id === id)) == null ? void 0 : _a.content;
  if (!component) {
    return void 0;
  }
  return component == null ? void 0 : component.chunks.map((chunk) => {
    return chunk.map((data) => {
      return {
        id: data.id,
        name: data.name,
        content: data.content,
        type: data.type
      };
    });
  });
}
function itemsForItemRelationComponentWithId(components, id) {
  var _a, _b;
  return (_b = (_a = components.find((component) => component.id === id)) == null ? void 0 : _a.content) == null ? void 0 : _b.items;
}
function choiceComponentWithId(components, id) {
  var _a, _b;
  const component = (_b = (_a = components.find((component2) => component2.id === id)) == null ? void 0 : _a.content) == null ? void 0 : _b.selectedComponent;
  if (!component) {
    return void 0;
  }
  return {
    id: component.id,
    content: component.content
  };
}
function numericValueForComponentWithId(components, id) {
  var _a, _b;
  const component = (_b = (_a = components.find((component2) => component2.id === id)) == null ? void 0 : _a.content) == null ? void 0 : _b.number;
  return component;
}
function flattenRichText(richText) {
  var _a, _b;
  return {
    plainText: (_a = richText == null ? void 0 : richText.plainText) == null ? void 0 : _a.join(""),
    json: richText == null ? void 0 : richText.json,
    html: (_b = richText == null ? void 0 : richText.html) == null ? void 0 : _b.join("")
  };
}

// src/use-cases/mapper/API/fetchDocumentToStory.ts
var fetchDocumentToStory_default = (data) => {
  const mapper = DataMapper();
  if (data.shape.identifier === "curated-product-story") {
    return documentToCuratedStory(mapper, data);
  }
  return documentToStory(mapper, data);
};
var documentToStory = (mapper, data) => {
  var _a, _b;
  const media = choiceComponentWithId(data.components, "media");
  const firstSeoChunk = (_a = chunksForChunkComponentWithId(data.components, "meta")) == null ? void 0 : _a[0];
  const relatedArticles = itemsForItemRelationComponentWithId(data.components, "up-next") || [];
  const featuedProducts = itemsForItemRelationComponentWithId(data.components, "featured");
  const story = paragraphsForParagraphCollectionComponentWithId(data.components, "story");
  const dto = {
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
      var _a2;
      return {
        title: ((_a2 = paragraph.title) == null ? void 0 : _a2.text) || "",
        body: flattenRichText(paragraph.body),
        images: mapper.API.Object.APIImageToImage(paragraph.images)
      };
    })) || [],
    relatedArticles,
    featuredProducts: (featuedProducts == null ? void 0 : featuedProducts.map((item) => {
      return {
        id: item == null ? void 0 : item.id,
        name: item.name,
        path: item.path,
        topics: [],
        variant: mapper.API.Object.APIProductVariantToProductVariant(item.defaultVariant)
      };
    })) || [],
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk)
  };
  return dto;
};
var documentToCuratedStory = (mapper, data) => {
  var _a, _b, _c, _d;
  const intro = flattenRichText((_a = data.components.find((c) => c.id === "description")) == null ? void 0 : _a.content);
  const media = (_b = data.components.find((c) => c.id === "shoppable-image")) == null ? void 0 : _b.content;
  const story = paragraphsForParagraphCollectionComponentWithId(data.components, "story");
  const firstSeoChunk = (_c = chunksForChunkComponentWithId(data.components, "meta")) == null ? void 0 : _c[0];
  const dto = {
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
      var _a2;
      return {
        products: ((_a2 = itemsForItemRelationComponentWithId(chunk, "products")) == null ? void 0 : _a2.map((product) => {
          return {
            id: product.id,
            name: product.name,
            path: product.path,
            variant: mapper.API.Object.APIProductVariantToProductVariant(product.defaultVariant),
            variants: product.variants.map(mapper.API.Object.APIProductVariantToProductVariant),
            topics: []
          };
        })) || [],
        x: numericValueForComponentWithId(chunk, "hotspot-x") || 0,
        y: numericValueForComponentWithId(chunk, "hotspot-y") || 0
      };
    })) || [],
    story: (story == null ? void 0 : story.map((paragraph) => {
      var _a2;
      return {
        title: ((_a2 = paragraph.title) == null ? void 0 : _a2.text) || "",
        body: flattenRichText(paragraph.body),
        images: mapper.API.Object.APIImageToImage(paragraph.images)
      };
    })) || [],
    relatedArticles: [],
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk)
  };
  return dto;
};

// src/use-cases/mapper/API/fetchFolderToCategory.ts
var fetchFolderToCategory_default = (data) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const mapper = DataMapper();
  const hero = choiceComponentWithId(data.components, "hero-content");
  const grid = ((_b = (_a = hero == null ? void 0 : hero.content) == null ? void 0 : _a.grids) == null ? void 0 : _b[0]) || (((_c = hero == null ? void 0 : hero.content) == null ? void 0 : _c.items) ? mapper.API.Object.AnyItemToGrid((_d = hero == null ? void 0 : hero.content) == null ? void 0 : _d.items) : null);
  const firstSeoChunk = (_f = (_e = data == null ? void 0 : data.meta) == null ? void 0 : _e.content) == null ? void 0 : _f.chunks[0];
  const dto = {
    name: data == null ? void 0 : data.name,
    path: data == null ? void 0 : data.path,
    title: stringForSingleLineComponentWithId(data.components, "title") || data.name,
    description: stringForRichTextComponentWithId(data.components, "description") || data.name,
    hero: grid ? {
      id: `grid-${(_g = hero == null ? void 0 : hero.id) != null ? _g : data.id}`,
      ...grid
    } : void 0,
    seo: (_i = (_h = mapper == null ? void 0 : mapper.API) == null ? void 0 : _h.Object) == null ? void 0 : _i.APIMetaSEOComponentToSEO(firstSeoChunk)
  };
  return dto;
};

// src/use-cases/mapper/API/fetchFolderWithChildrenToCategoryWithChildren.ts
var fetchFolderWithChildrenToCategoryWithChildren_default = (data) => {
  var _a;
  const mapper = DataMapper();
  return {
    ...fetchFolderToCategory_default(data),
    children: (_a = data.children) == null ? void 0 : _a.map((child) => {
      var _a2, _b, _c, _d;
      const common = {
        name: child.name,
        path: child.path
      };
      if (child.shape.identifier === "curated-product-story") {
        const title = stringForSingleLineComponentWithId(child.components, "title") || child.name;
        const intro = (_a2 = child.components.find((c) => c.id === "description")) == null ? void 0 : _a2.content;
        const media = (_b = child.components.find((c) => c.id === "shoppable-image")) == null ? void 0 : _b.content;
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
            var _a3;
            return {
              products: ((_a3 = itemsForItemRelationComponentWithId(chunk, "products")) == null ? void 0 : _a3.map((product) => {
                return {
                  id: product.id,
                  name: product.name,
                  path: product.path,
                  variant: mapper.API.Object.APIProductVariantToProductVariant(
                    product.defaultVariant
                  ),
                  topics: []
                };
              })) || [],
              x: numericValueForComponentWithId(chunk, "hotspot-x") || 0,
              y: numericValueForComponentWithId(chunk, "hotspot-y") || 0
            };
          })) || []
        };
      }
      if (child.shape.identifier === "product") {
        return {
          id: child.id,
          ...common,
          topics: [],
          variant: mapper.API.Object.APIProductVariantToProductVariant(child.defaultVariant)
        };
      }
      if (child.shape.identifier === "story") {
        const title = stringForSingleLineComponentWithId(child.components, "title") || child.name;
        const intro = (_d = child.components.find((c) => c.id === "intro")) == null ? void 0 : _d.content;
        const media = choiceComponentWithId(child.components, "media");
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
  var _a, _b;
  const mapper = DataMapper();
  if (data === null) {
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
  }
  const socialLinks = chunksForChunkComponentWithId(data.components, "social");
  const promotionCards = chunksForChunkComponentWithId(data.components, "promotion-cards");
  const dto = {
    copyright: stringForSingleLineComponentWithId(data.components, "copyright") || "",
    contact: flattenRichText((_a = data.components.find((c) => c.id === "contact-information")) == null ? void 0 : _a.content),
    links: (_b = data.components.find((c) => c.id === "links")) == null ? void 0 : _b.content,
    socialLinks: (socialLinks == null ? void 0 : socialLinks.map((socialLink) => {
      var _a2;
      const logo = (_a2 = socialLink.find((c) => c.id === "logo")) == null ? void 0 : _a2.content;
      return {
        logo: mapper.API.Object.APIImageToImage(logo.images),
        link: stringForSingleLineComponentWithId(socialLink, "link") || ""
      };
    })) || [],
    promotions: {
      heading: stringForSingleLineComponentWithId(data.components, "promotion-section-heading") || "",
      cards: (promotionCards == null ? void 0 : promotionCards.map((card) => {
        var _a2;
        const image = (_a2 = card.find((c) => c.id === "image")) == null ? void 0 : _a2.content;
        return {
          title: stringForSingleLineComponentWithId(card, "title") || "",
          link: stringForSingleLineComponentWithId(card, "link") || "",
          image: mapper.API.Object.APIImageToImage(image.images)
        };
      })) || []
    }
  };
  return dto;
};

// src/use-cases/mapper/API/fetchLandingPageToLandingPage.ts
var fetchLandingPageToLandingPage_default = (data) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const mapper = DataMapper();
  const firstSeoChunk = (_c = (_b = (_a = data == null ? void 0 : data.meta) == null ? void 0 : _a.content) == null ? void 0 : _b.chunks) == null ? void 0 : _c[0];
  return {
    name: data == null ? void 0 : data.name,
    path: data == null ? void 0 : data.path,
    seo: (_e = (_d = mapper == null ? void 0 : mapper.API) == null ? void 0 : _d.Object) == null ? void 0 : _e.APIMetaSEOComponentToSEO(firstSeoChunk),
    grids: (_h = (_g = (_f = data == null ? void 0 : data.grids) == null ? void 0 : _f.content) == null ? void 0 : _g.grids) == null ? void 0 : _h.map((grid) => {
      return {
        id: grid == null ? void 0 : grid.id,
        rows: grid == null ? void 0 : grid.rows
      };
    })
  };
};

// src/use-cases/mapper/API/fetchNavigationToTree.ts
var recursiveMap = (level, defaultType) => {
  var _a, _b, _c;
  return {
    id: level.id,
    name: level.name,
    path: level.path,
    type: (_a = level.__typename) != null ? _a : defaultType,
    children: (_c = (_b = level.children) == null ? void 0 : _b.map((child) => recursiveMap(child, defaultType))) != null ? _c : []
  };
};
var fetchNavigationToTree_default = (navigation) => {
  return {
    folders: navigation.folders.tree.children.map((tree) => recursiveMap(tree, "folder")),
    topics: navigation.topics.tree.map((tree) => recursiveMap(tree, "_topic"))
  };
};

// src/use-cases/mapper/API/fetchProductToProduct.ts
var fetchProductToProduct_default = (data) => {
  var _a, _b, _c, _d, _e, _f;
  const mapper = DataMapper();
  const story = paragraphsForParagraphCollectionComponentWithId(data.components, "story");
  const sections = sectionsForPropertyTableComponentWithId(data.components, "properties");
  const firstDimensionsChunk = (_a = chunksForChunkComponentWithId(data.components, "dimensions")) == null ? void 0 : _a[0];
  const firstSeoChunk = (_b = chunksForChunkComponentWithId(data.components, "meta")) == null ? void 0 : _b[0];
  const downloads = chunksForChunkComponentWithId(data.components, "downloads");
  const relatedItems = itemsForItemRelationComponentWithId(data.components, "related-items");
  const productDescription = stringForRichTextComponentWithId(data.components, "description") || data.name;
  const variants = ((_c = data == null ? void 0 : data.variants) == null ? void 0 : _c.map((variant) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h;
    const mappedVariant = mapper.API.Object.APIProductVariantToProductVariant(variant);
    let description = productDescription;
    const variantDescription = (_e2 = (_d2 = (_c2 = (_b2 = (_a2 = variant == null ? void 0 : variant.description) == null ? void 0 : _a2.content) == null ? void 0 : _b2.selectedComponent) == null ? void 0 : _c2.content) == null ? void 0 : _d2.plainText) == null ? void 0 : _e2.join("");
    const variantDescriptionType = (_h = (_g = (_f2 = variant == null ? void 0 : variant.description) == null ? void 0 : _f2.content) == null ? void 0 : _g.selectedComponent) == null ? void 0 : _h.id;
    if (variantDescriptionType) {
      description = variantDescriptionType === "extra" ? productDescription + " " + variantDescription : variantDescription;
    }
    return {
      ...mappedVariant,
      description
    };
  })) || [];
  const defaultVariant = variants.find((variant) => variant.isDefault) || variants[0];
  const dto = {
    id: data.id,
    path: data.path,
    name: data.name,
    title: stringForSingleLineComponentWithId(data.components, "title") || data.name,
    description: productDescription,
    story: (story == null ? void 0 : story.map((paragraph) => {
      var _a2;
      return {
        title: ((_a2 = paragraph.title) == null ? void 0 : _a2.text) || "",
        body: flattenRichText(paragraph.body),
        images: mapper.API.Object.APIImageToImage(paragraph.images)
      };
    })) || [],
    specifications: (sections == null ? void 0 : sections.map((section) => {
      return {
        title: section.title || "",
        properties: section.properties || {}
      };
    })) || [],
    dimensions: !firstDimensionsChunk ? [] : firstDimensionsChunk.reduce(
      (memo, data2) => {
        var _a2, _b2;
        return {
          ...memo,
          [data2.id]: {
            title: data2.name,
            value: ((_a2 = data2 == null ? void 0 : data2.content) == null ? void 0 : _a2.number) || 0,
            unit: ((_b2 = data2 == null ? void 0 : data2.content) == null ? void 0 : _b2.unit) || ""
          }
        };
      },
      {}
    ),
    downloads: (downloads == null ? void 0 : downloads.map((chunk) => {
      const mapped = chunk.reduce((memo, data2) => {
        var _a2, _b2, _c2, _d2;
        let value = void 0;
        switch (data2.type) {
          case "singleLine":
            value = ((_a2 = data2.content) == null ? void 0 : _a2.text) || "";
            break;
          case "richText":
            value = ((_b2 = data2.content) == null ? void 0 : _b2.json) || "";
            break;
          case "files":
            value = ((_d2 = (_c2 = data2.content) == null ? void 0 : _c2.files) == null ? void 0 : _d2.map((file) => {
              return {
                url: file.url,
                title: file.title || ""
              };
            })) || [];
            break;
        }
        return {
          ...memo,
          [data2.id]: value
        };
      }, {});
      return {
        title: mapped["title"] || "",
        description: {
          json: mapped["description"]
        },
        files: mapped["files"]
      };
    })) || [],
    relatedItems: (relatedItems == null ? void 0 : relatedItems.map((item) => {
      return {
        id: item.id,
        name: item.name,
        path: item.path,
        topics: [],
        variant: mapper.API.Object.APIProductVariantToProductVariant(item.defaultVariant)
      };
    })) || [],
    topics: ((_d = data.topics) == null ? void 0 : _d.map((topic) => {
      return {
        name: topic.name,
        path: topic.path
      };
    })) || [],
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk),
    vat: {
      name: ((_e = data.vatType) == null ? void 0 : _e.name) || "Exempt.",
      rate: ((_f = data.vatType) == null ? void 0 : _f.percent) || 0
    },
    variants,
    defaultVariant
  };
  return dto;
};

// src/use-cases/mapper/API/fetchShopToShop.ts
var fetchShopToShop_default = (data) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const mapper = DataMapper();
  const [folder, hierarchy] = data;
  const hero = choiceComponentWithId(folder.components, "hero-content");
  const grid = ((_b = (_a = hero == null ? void 0 : hero.content) == null ? void 0 : _a.grids) == null ? void 0 : _b[0]) || (((_c = hero == null ? void 0 : hero.content) == null ? void 0 : _c.items) ? mapper.API.Object.AnyItemToGrid((_d = hero == null ? void 0 : hero.content) == null ? void 0 : _d.items) : null);
  const firstSeoChunk = (_f = (_e = folder.meta) == null ? void 0 : _e.content) == null ? void 0 : _f.chunks[0];
  const dto = {
    name: folder.name,
    title: stringForSingleLineComponentWithId(folder.components, "title") || data.name,
    path: folder.path,
    description: stringForRichTextComponentWithId(folder.components, "description") || data.name,
    hero: grid ? {
      id: `grid-${(_g = hero == null ? void 0 : hero.id) != null ? _g : folder.id}`,
      ...grid
    } : void 0,
    seo: mapper.API.Object.APIMetaSEOComponentToSEO(firstSeoChunk),
    categories: (_h = hierarchy.tree) == null ? void 0 : _h.children.map((child) => {
      var _a2, _b2;
      return {
        name: child.name,
        path: child.path,
        description: (_a2 = child.description) == null ? void 0 : _a2.content,
        products: (_b2 = child == null ? void 0 : child.children) == null ? void 0 : _b2.map((product) => {
          return {
            id: product.id,
            name: product.name,
            path: product.path,
            variant: mapper.API.Object.APIProductVariantToProductVariant(product.defaultVariant),
            topics: []
          };
        })
      };
    })
  };
  return dto;
};

// src/use-cases/mapper/API/searchByTopicProductToProductSlim.ts
var searchByTopicProductToProductSlim_default = (data) => {
  var _a, _b;
  const mapper = DataMapper();
  return {
    products: mapper.API.Call.searchProductToProductSlim(data.search.edges),
    topics: ((_b = (_a = data == null ? void 0 : data.topics) == null ? void 0 : _a.aggregations) == null ? void 0 : _b.topics.map((topic) => {
      return {
        name: topic.name,
        path: topic.path
      };
    })) || []
  };
};

// src/use-cases/mapper/API/searchProductToProductSlim.ts
var searchProductToProductSlim_default = (data) => {
  const mapper = DataMapper();
  return data.map(({ node }) => {
    var _a, _b;
    return {
      id: node.id,
      name: node.name,
      path: node.path,
      variant: mapper.API.Object.APIProductVariantToProductVariant(node.matchingVariant),
      topics: (_b = (_a = node.topics) == null ? void 0 : _a.map((topic) => {
        return {
          name: topic.name,
          path: topic.path
        };
      })) != null ? _b : []
    };
  }) || [];
};

// src/use-cases/mapper/Object/AnyIemToGrid.ts
var AnyIemToGrid_default = (items) => {
  if (items.length === 0) {
    return {
      id: "",
      rows: []
    };
  }
  return {
    id: "",
    rows: items.map((item, index) => {
      return {
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
      };
    })
  };
};

// src/use-cases/mapper/Object/APIImageToImage.ts
var APIImageToImage_default = (images) => {
  return (images == null ? void 0 : images.map((image) => {
    var _a;
    return {
      key: image.key,
      url: image.url,
      altText: image.altText || "",
      variants: ((_a = image.variants) == null ? void 0 : _a.map((variant) => {
        return {
          key: variant.key,
          url: variant.url,
          width: variant.width,
          height: variant.height
        };
      })) || []
    };
  })) || [];
};

// src/use-cases/mapper/Object/APIMetaSEOComponentToSEO.ts
var APIMetaSEOComponentToSEO_default = (chunk) => {
  return !chunk ? {
    title: ""
  } : chunk.reduce(
    (memo, data) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      let value = void 0;
      switch (data.type) {
        case "singleLine":
          value = ((_a = data.content) == null ? void 0 : _a.text) || "";
          break;
        case "richText":
          value = (_c = (_b = data.content) == null ? void 0 : _b.plainText) == null ? void 0 : _c.join(" ");
          break;
        case "images":
          value = (_f = (_e = (_d = data.content) == null ? void 0 : _d.images) == null ? void 0 : _e[0]) == null ? void 0 : _f.url;
          if (!value) {
            value = (_h = (_g = data.content) == null ? void 0 : _g.firstImage) == null ? void 0 : _h.url;
          }
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
  );
};

// src/use-cases/mapper/Object/APIPriceVariantsToPriceVariant.ts
var APIPriceVariantsToPriceVariant_default = (variants) => {
  return variants.reduce((memo, priceVariant) => {
    return {
      ...memo,
      [priceVariant.identifier]: {
        identifier: priceVariant.identifier,
        value: priceVariant.price || 0,
        currency: getCurrencyFromCode(priceVariant.currency || "EUR"),
        name: priceVariant.name || "Unkonwn"
      }
    };
  }, {});
};

// src/use-cases/mapper/Object/APIProductVariantToProductVariant.ts
var APIProductVariantToProductVariant_default = (variant) => {
  var _a, _b, _c, _d;
  const mapper = DataMapper();
  const priceVariants = mapper.API.Object.APIPriceVariantsToPriceVariant((_a = variant.priceVariants) != null ? _a : []);
  const images = (_b = variant.images) != null ? _b : variant.firstImage ? [variant.firstImage] : [];
  return {
    id: variant.id,
    isDefault: !!variant.isDefault,
    name: variant.name || "Unknow",
    sku: variant.sku,
    priceVariants,
    stockLocations: ((_c = variant.stockLocations) == null ? void 0 : _c.reduce(
      (memo, stockLocation) => {
        return {
          ...memo,
          [stockLocation.identifier]: {
            identifier: stockLocation.identifier,
            name: stockLocation.name || "Unknown",
            stock: stockLocation.stock || 0
          }
        };
      },
      {}
    )) || {},
    images: mapper.API.Object.APIImageToImage(images),
    attributes: ((_d = variant.attributes) == null ? void 0 : _d.reduce((memo, attribute) => {
      return {
        ...memo,
        [attribute.attribute]: attribute.value || ""
      };
    }, {})) || {}
  };
};

// src/use-cases/mapper/index.ts
var DataMapper = (context) => {
  return {
    API: {
      Call: {
        fetchDocumentToStory: fetchDocumentToStory_default,
        fetchFolderToCategory: (withChildren = false) => {
          if (withChildren) {
            return fetchFolderWithChildrenToCategoryWithChildren_default;
          }
          return fetchFolderToCategory_default;
        },
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
  };
};

export {
  stringForSingleLineComponentWithId,
  chunksForChunkComponentWithId,
  itemsForItemRelationComponentWithId,
  choiceComponentWithId,
  numericValueForComponentWithId,
  searchProductToProductSlim_default,
  DataMapper
};
//# sourceMappingURL=/build/_shared/chunk-2275QL62.js.map
