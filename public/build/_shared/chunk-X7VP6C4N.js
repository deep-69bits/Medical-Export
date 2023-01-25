import {
  require_dist
} from "/build/_shared/chunk-TZRBUZHL.js";
import {
  DataMapper
} from "/build/_shared/chunk-2275QL62.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// src/use-cases/crystallize/read/fetchLandingPage.ts
var fetchLandingPage_default = async (apiClient, path, version, language) => {
  return (await apiClient.catalogueApi(
    `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(path: $path, language: $language, version: $version) {
      ... on Item {
        name
        path
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                type
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        grids: component(id: "grid") {
          content {
            ... on GridRelationsContent {
              grids {
                rows {
                  columns {
                    layout {
                      rowspan
                      colspan
                      colIndex
                      rowIndex
                    }
                    item {
                      name
                      path
                      type
                      shape {
                        identifier
                      }
                      ...on Product {
                        defaultVariant {
                          price
                          priceVariants {
                            identifier
                            name
                            price
                            currency
                          }
                          images {
                            variants {
                              url
                              width
                              height
                            }
                          }
                        }
                      }
                      components {
                        type
                        id
                        content {
                          ...on BooleanContent{
                            value
                          }
                          ... on SingleLineContent {
                            text
                          }
                          ... on RichTextContent {
                            plainText
                            json
                          }
                          ... on ImageContent {
                            images {
                              url
                              altText
                              variants {
                                url
                                width
                                height
                              }
                            }
                          }
                          ... on ComponentChoiceContent {
                            selectedComponent {
                              name
                              content {
                                ...on SingleLineContent {
                                  text
                                }
                                    ... on VideoContent {
                                    videos {
                                        title
                                        playlists
                                        id
                                        thumbnails {
                                            variants {
                                                url
                                                width
                                                height
                                            }
                                        }
                                    }
                                }
                                ... on ImageContent {
                                  images {
                                    url
                                    altText
                                    variants {
                                      url
                                      width
                                      height
                                    }
                                  }
                                }
                                ... on ItemRelationsContent {
                                  items {
                                    name
                                    type
                                    path
                                    components {
                                      id
                                      content {
                                        ...on SingleLineContent {
                                          text
                                        }
                                        ...on RichTextContent {
                                          plainText
                                        }
                                        ...on ComponentChoiceContent {
                                          selectedComponent {
                                            content {
                                              ...on ImageContent {
                                                firstImage {
                                                  url
                                                  altText
                                                  variants {
                                                    url
                                                    width
                                                    height
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ...on Product {
                                      id
                                      defaultVariant {
                                        price
                                        priceVariants {
                                          identifier
                                          name
                                          price
                                          currency
                                        }
                                        firstImage {
                                          url
                                          altText
                                          variants {
                                            url
                                            width
                                            height
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          ... on ContentChunkContent {
                            chunks {
                              id  
                              content {
                                ... on NumericContent {
                                  number
                                  unit
                                }
                                ...on SingleLineContent{
                                    text
                                }
                                ...on SelectionContent {
                                    options {
                                        key
                                        value
                                    }
                                }
                                ...on BooleanContent {
                                    value
                                }
                                ... on ItemRelationsContent {
                                  items {
                                    name
                                    type
                                    path
                                    ...on Product {
                                      id
                                      defaultVariant {
                                        price
                                        priceVariants {
                                          identifier
                                          name
                                          price
                                          currency
                                        }
                                        firstImage {
                                          url
                                          altText
                                          variants {
                                            url
                                            width
                                            height
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                ...on PropertiesTableContent {
                                    sections {
                                        title
                                        properties {
                                            key
                                            value
                                        }
                                    }
                                }
                              }
                            }
                          }
                          ... on SelectionContent {
                            options {
                              value
                              key
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
    {
      language,
      path,
      version: version === "draft" ? "draft" : "published"
    }
  )).catalogue;
};

// src/use-cases/crystallize/read/fetchDocument.ts
var fetchDocument_default = async (apiClient, path, version, language) => {
  return (await apiClient.catalogueApi(
    `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(path: $path, language: $language, version: $version) {
      ... on Item {
        name
        createdAt
        updatedAt
        path
        shape {
          identifier
        }
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        components {
          type
          id
          content {
            ...on SingleLineContent {
              text
            }
            ...on RichTextContent {
              json
              plainText
            }
            ...on ImageContent {
              images {
                variants {
                  url
                  width
                  height
                }
              }
            }
            ...on ContentChunkContent {
              chunks {
                id
                name
                type
                content {
                  ... on SingleLineContent {
                    text
                  }
                  ... on NumericContent {
                    number
                    unit
                  }
                  ... on ItemRelationsContent {
                    items {
                      name
                      type
                      path
                      ...on Product {
                        id
                        defaultVariant {
                            id
                            name
                            sku
                          priceVariants {
                            identifier
                            name
                            price
                            currency
                        }
                          firstImage {
                            url
                            altText
                            variants {
                              url
                              width
                              height
                            }
                          }
                        stockLocations {
                            identifier
                            name
                            stock
                          }
                        }
                        variants {
                          id
                          name
                          sku
                          price
                          priceVariants {
                            identifier
                            name
                            price
                            currency
                          }
                          attributes {
                            value
                            attribute
                          }
                          stockLocations {
                            identifier
                            name
                            stock
                          }
                          isDefault
                          images {
                            url
                            altText
                            key
                      
                            variants {
                              key
                              height
                              width
                              url
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ...on PropertiesTableContent {
              sections {
                properties {
                  key
                  value
                }
              }
            }
            ...on ComponentChoiceContent {
              selectedComponent {
                id
                content {
                  ...on ImageContent {
                    images {
                      variants {
                        url
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
            ... on ItemRelationsContent {
              items {
                name
                type
                path
                ...on Product {
                  defaultVariant {
                    priceVariants {
                        identifier
                        name
                        price
                        currency
                    }
                    images {
                      variants {
                        url
                        width
                      }
                    }
                    price
                  }
                }
                components {
                  name
                  content {
                    ... on SingleLineContent {
                      text
                    }
                     ...on ComponentChoiceContent {
                      selectedComponent {
                        content {
                          ...on ImageContent {
                            images {
                              variants {
                                url
                                width
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            ...on ParagraphCollectionContent {
              paragraphs {
                title {
                  text
                }
                body {
                  json
                }
                images {
                  url
                  variants {
                    url
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }`,
    {
      language,
      path,
      version: version === "draft" ? "draft" : "published"
    }
  )).catalogue;
};

// src/use-cases/crystallize/read/fetchFolder.ts
var fetchFolder_default = async (apiClient, path, version, language) => {
  return (await apiClient.catalogueApi(
    `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(language: $language, path: $path, version: $version) {
        id
        name
        path
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                type
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        components {
          type
          id
          content {
            ...on SingleLineContent {
              text
            }
            ...on RichTextContent {
              plainText
            }
            ... on ComponentChoiceContent {
              selectedComponent {
                name
                content {
                    ... on GridRelationsContent {
                        grids {
                          rows {
                            columns {
                              layout {
                                rowspan
                                colspan
                                colIndex
                                rowIndex
                              }
                              item {
                                name
                                path
                                type
                                shape {
                                  identifier
                                }
                                ...on Product {
                                  defaultVariant {
                                    price
                                    attributes {
                                        value
                                        attribute
                                    }
                                    priceVariants {
                                      identifier
                                      name
                                      price
                                      currency
                                    }
                                    images {
                                      variants {
                                        url
                                        height
                                        width
                                      }
                                    }
                                  }
                                }
                                components {
                                  type
                                  id
                                  content {
                                    ...on BooleanContent{
                                      value
                                    }
                                    ... on SingleLineContent {
                                      text
                                    }
                                    ... on RichTextContent {
                                      plainText
                                    }
                                    ... on ImageContent {
                                      images {
                                        url
                                        altText
                                        variants {
                                          url
                                          width
                                          height
                                        }
                                      }
                                    }
                                    ... on ComponentChoiceContent {
                                      selectedComponent {
                                        name
                                        content {
                                          ...on SingleLineContent {
                                            text
                                          }
                                          ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                          ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            }
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key 
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                  
                  ... on ItemRelationsContent {
                    items {
                      name
                      path
                      type
                      shape {
                        identifier
                      }
                      components {
                        type
                        id
                        content {
                            ...on BooleanContent{
                                value
                            }
                            ... on SingleLineContent {
                                text
                            }
                            ... on RichTextContent {
                                plainText
                            }
                            ... on ImageContent {
                                images {
                                    url
                                    altText
                                    variants {
                                      url
                                      width
                                      height
                                    }
                                }
                            }
                            ... on ComponentChoiceContent {
                                selectedComponent {
                                    name
                                    content {
                                        ...on SingleLineContent {
                                            text
                                        }
                                        ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                        ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            } 
                                        }
                                        ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                }
                             }
                          }
                       }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      language: "en",
      path,
      version: version === "draft" ? "draft" : "published"
    }
  )).catalogue;
};

// src/use-cases/crystallize/read/fetchHierarchy.ts
var import_js_api_client = __toESM(require_dist());
var fetchHierarchy_default = async (apiClient, path, language) => {
  const fetch = (0, import_js_api_client.createNavigationFetcher)(apiClient).byFolders;
  const builder = import_js_api_client.catalogueFetcherGraphqlBuilder;
  const response = await fetch(path, language, 3, {}, (level) => {
    switch (level) {
      case 0:
        return {
          __on: [
            builder.onItem({
              ...builder.onComponent("description", "RichText", {
                json: true
              })
            })
          ]
        };
      case 1:
        return {
          __on: [
            builder.onItem({
              ...builder.onComponent("description", "RichText", {
                json: true
              })
            }),
            builder.onFolder()
          ]
        };
      case 2:
        return {
          __on: [
            builder.onItem({
              ...builder.onComponent("description", "RichText", {
                json: true
              })
            }),
            builder.onProduct({
              defaultVariant: {
                price: true,
                priceVariants: {
                  price: true,
                  currency: true,
                  identifier: true,
                  name: true
                },
                attributes: {
                  attribute: true,
                  value: true
                },
                firstImage: {
                  altText: true,
                  variants: {
                    width: true,
                    url: true
                  }
                }
              }
            })
          ]
        };
      default:
        return {};
    }
  });
  return response;
};

// src/use-cases/crystallize/read/fetchNavigation.ts
var import_js_api_client2 = __toESM(require_dist());
var fetchNavigation_default = async (apiClient, path, language) => {
  const [folders, topics] = await Promise.all([
    (0, import_js_api_client2.createNavigationFetcher)(apiClient).byFolders(path, language, 3),
    (0, import_js_api_client2.createNavigationFetcher)(apiClient).byTopics(path, language, 2)
  ]);
  return {
    folders,
    topics
  };
};

// src/use-cases/crystallize/read/fetchPriceRangeAndAttributes.ts
var fetchPriceRangeAndAttributes_default = async (apiClient, path) => {
  return await apiClient.searchApi(
    `#graphql
        query GET_PRICE_RANGE($path: [String!]) {
        search(
          filter: {
            type: PRODUCT
            include: { paths: $path }
          }
        ) {
          aggregations {
            price: price {
              min
              max
            }
            attributes: variantAttributes {
              attribute
              value
            }
          }
        }
      }
      `,
    {
      path
    }
  );
};

// src/use-cases/crystallize/read/fetchProduct.ts
var fetchProduct_default = async (apiClient, path, version, language) => {
  const data = await apiClient.catalogueApi(
    `#graphql
    query ($language: String!, $path: String!, $version: VersionLabel!) {
      catalogue(language: $language, path: $path, version: $version) {
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      ...on Product {
        ...product
        topics {
          path
          name
        }
      }
    }
  }
  
  fragment content on ComponentContent {
    ...boolean
    ...singleLine
    ...richText
    ...imageContent
    ...paragraphCollection
    ...itemRelations
    ...gridRelations
    ...location
    ...propertiesTable
    ...dateTime
    ...videoContent
    ...numeric
    ...selection
    ...file
  }
  
  fragment component on Component {
    id
    name
    type
    content {
      ...content
      ...componentChoice
      ...contentChunk
    }
  }
  
  fragment dateTime on DatetimeContent {
    datetime
  }
    
  
  fragment gridRelations on GridRelationsContent {
    grids {
      id
      name
    }
  }
  
  fragment imageContent on ImageContent {
    images {
      ...image
    }
  }
  
  fragment image on Image {
    url
    altText
    key
    variants {
      url
      width
      height
      key
    }
  }
  
  fragment itemRelations on ItemRelationsContent {
    items {
      id
      name
      path
      ...on Product {
        defaultVariant {
          priceVariants {
            identifier
            name
            price
            currency
          }
          images {
            variants {
              url
              height
              width
            }
          }
        }
      }
    }
  }
  
  fragment location on LocationContent {
    lat
    long
  }
  
  fragment paragraphCollection on ParagraphCollectionContent {
    paragraphs {
      title {
        ...singleLine
      }
      body {
        ...richText
      }
      images {
        ...image
      }
    }
  }
  
  fragment product on Product {
    id
    name
    type
    language
    path
  
    components {
      ...component
    }
  
    variants {
      id
      name
      sku
      price
      priceVariants {
        identifier
        name
        price
        currency
      }
      description: component(id:"description") {
        content {
            ...on ComponentChoiceContent {
                selectedComponent {
                    id
                    content {
                        ...richText
                    }
                }
            }
        }
      }
      attributes {
        value
        attribute
      }
      stockLocations {
        identifier
        name
        stock
      }
      isDefault
      images {
        url
        altText
        key
  
        variants {
          key
          height
          width
          url
        }
      }
  
      subscriptionPlans {
        identifier
        name
        periods {
          id
          name
          initial {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
          recurring {
            priceVariants {
              identifier
              name
              price
              currency
            }
          }
        }
      }
    }
  
    vatType {
      name
      percent
    }
  }
  
  fragment propertiesTable on PropertiesTableContent {
    sections {
      ... on PropertiesTableSection {
        title
        properties {
          key
          value
        }
      }
    }
  }
  
  fragment richText on RichTextContent {
    json
    html
    plainText
  }
  
  fragment boolean on BooleanContent {
    value
  }
  
  fragment singleLine on SingleLineContent {
    text
  }
  
  fragment videoContent on VideoContent {
    videos {
      ...video
    }
  }
  
  fragment video on Video {
    id
    playlists
    title
    thumbnails {
      ...image
    }
  }
  
  fragment numeric on NumericContent {
    number
    unit
  }
  
  fragment componentChoice on ComponentChoiceContent {
    selectedComponent {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  
  fragment contentChunk on ContentChunkContent {
    chunks {
      id
      name
      type
      content {
        ...content
      }
    }
  }
  
  fragment selection on SelectionContent {
    options {
      key
      value
    }
  }
  
  
  fragment file on FileContent {
    files {
      url
      key
      title
      size
    }
  }  

`,
    {
      language,
      path,
      version: version === "draft" ? "draft" : "published"
    }
  );
  return data.catalogue;
};

// src/use-cases/crystallize/read/fetchTenantConfig.ts
var QUERY_FETCH_TENANT_CONFIG = `#graphql
query FETCH_TENANT_CONFIG ($identifier: String!) {
    tenant {
        get(identifier: $identifier) {
            id
            logo {
                key
                url
                variants {
                    ... on ImageVariant {
                        key
                        url
                        width
                        height
                    }
                }
            }
        }
    }
}`;
var fetchTenantConfig_default = async (apiClient, tenantIdentifier) => {
  var _a, _b, _c, _d, _e;
  try {
    const { tenant } = await apiClient.pimApi(QUERY_FETCH_TENANT_CONFIG, {
      identifier: tenantIdentifier
    });
    const tenantId = (_a = tenant == null ? void 0 : tenant.get) == null ? void 0 : _a.id;
    const currency = (_d = (_c = (_b = await apiClient.pimApi(
      `query { priceVariant{ get(identifier:"default", tenantId:"${tenantId}") { currency } } }`
    )) == null ? void 0 : _b.priceVariant) == null ? void 0 : _c.get) == null ? void 0 : _d.currency;
    return {
      currency,
      crystalPayments: ["card", "coin"],
      paymentImplementations: ["crystal"],
      logo: (_e = tenant == null ? void 0 : tenant.get) == null ? void 0 : _e.logo
    };
  } catch (error) {
    return {
      currency: "USD",
      crystalPayments: ["card", "coin"],
      paymentImplementations: ["crystal"]
    };
  }
};

// src/use-cases/crystallize/read/fetchTreeMap.ts
var import_js_api_client3 = __toESM(require_dist());
var fetchTreeMap_default = async (apiClient, language) => {
  const fetchByFolders = (0, import_js_api_client3.createNavigationFetcher)(apiClient).byFolders;
  const fetchByTopics = (0, import_js_api_client3.createNavigationFetcher)(apiClient).byTopics;
  const [folders, topics] = await Promise.all([
    fetchByFolders("/", language, 10, {}, () => {
      return {
        shape: {
          identifier: true
        }
      };
    }),
    fetchByTopics("/", language, 10)
  ]);
  const map = {};
  const browse = (node) => {
    map[node.path] = node;
    if (node.children) {
      node.children.forEach(browse);
    }
  };
  browse(folders.tree);
  topics.tree.forEach(browse);
  return map;
};

// src/use-cases/crystallize/read/fetchFooter.ts
var fetchFooter_default = async (apiClient, path, version, language) => {
  return (await apiClient.catalogueApi(
    `#graphql
            query ($language: String!, $path: String!, $version: VersionLabel) {
                catalogue(path: $path, language: $language, version: $version) {
                    name
                    components {
                        id
                        content {
                            ...on SingleLineContent {
                                text
                            }
                            ...on RichTextContent {
                                plainText
                                json
                                html
                            }
                            ...on ContentChunkContent {
                                chunks {
                                    id
                                    name
                                    type
                                    content {
                                    ...on ImageContent {
                                        images {
                                            altText
                                            url
                                            variants {
                                                url
                                                width
                                                height
                                            }
                                        }
                                    }
                                    ...on SingleLineContent {
                                        text
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`,
    {
      language,
      path,
      version: version === "draft" ? "draft" : "published"
    }
  )).catalogue;
};

// src/use-cases/crystallize/read/search.ts
var search_default = async (apiClient, value, language) => {
  const data = await apiClient.searchApi(
    `#graphql
        query Search ($searchTerm: String!){
                        search(language:"${language}", first: 100, filter: { 
                            searchTerm: $searchTerm, 
                            type: PRODUCT, 
                            }){
                          edges {
                            node {
                              name
                              type
                              path
                              ... on Product {
                                matchingVariant {
                                  name
                                  price
                                  isDefault
                                  priceVariants {
                                    identifier
                                    name
                                    price
                                    currency
                                  }
                                  images {
                                    url
                                    variants {
                                      url
                                      width
                                      key
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
            `,
    {
      searchTerm: value
    }
  );
  return data.search.edges;
};

// src/use-cases/crystallize/read/searchByTopic.ts
var searchByTopic_default = async (apiClient, value, language) => {
  return await apiClient.searchApi(
    `#graphql
        query SEARCH_BY_TOPIC($value: String!) {
      topics: search(language: "${language}"){
        aggregations {
          topics {
            path
            name
          }
        }
      }
          search(
            language: "${language}"
            first: 100,
            filter: {
              type: PRODUCT
              include: {
                topicPaths: {
                  sections: [
                    { fields: { value: $value } }
                  ]
                }
              }
            }
          ) {
            edges {
              node {
                id
                name
                path
                topics {
                  name
                  path
                }
                ... on Product {
                  matchingVariant {
                    name
                    isDefault
                    price
                    priceVariants {
                      identifier
                      name
                      currency
                      price
                    }
                    attributes {
                        attribute
                        value
                    }
                    images {
                      variants {
                        url
                        width
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    {
      value
    }
  );
};

// src/use-cases/crystallize/read/searchFilteredByPriceRange.ts
var searchFilteredByPriceRange_default = async (apiClient, path, language, min, max) => {
  return await apiClient.searchApi(
    `#graphql
        query SEARCH_ORDER_BY_PRICE_RANGE($path: [String!], $min: Float, $max: Float) {
        search(
          language: "${language}"  
          first: 100,
          filter: {
            type: PRODUCT
            include: { paths: $path }
            productVariants: { priceRange: { min: $min, max: $max } }
          }
        ) {
          edges {
            node {
              name
              path
              ... on Product {
                matchingVariant {
                  isDefault
                  price
                  priceVariants {
                    identifier
                    name
                    price
                    currency
                  }
                  images {
                    variants {
                      url
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      path,
      min,
      max
    }
  );
};

// src/use-cases/crystallize/read/searchOrderBy.ts
var searchOrderBy_default = async (apiClient, path, language, orderBy, fitlers, attributes) => {
  var _a;
  const field = (orderBy == null ? void 0 : orderBy.split("_")[0]) || "NAME";
  const direction = (orderBy == null ? void 0 : orderBy.split("_")[1]) || "ASC";
  const priceRangeParams = fitlers.price;
  attributes = attributes.map((attribute) => {
    return {
      attribute: attribute.split("_")[0],
      value: attribute.split("_")[1]
    };
  });
  const attributeFilters = attributes.reduce(
    (acc, { attribute, value }) => {
      var _a2;
      (_a2 = acc[attribute]) != null ? _a2 : acc[attribute] = { attribute, values: [] };
      acc[attribute].values.push(value);
      return acc;
    },
    []
  );
  const results = await apiClient.searchApi(
    `#graphql
        query SEARCH_ORDERBY(
        $path: [String!]
        $field: OrderField!
        $direction: OrderDirection!
        $min: Float
        $max: Float
        $attributes: [VariantAttributeFilter!]
      ) {
        search(
          language: "${language}"
          first: 100,
          orderBy: { field: $field, direction: $direction }
          filter: {
            type: PRODUCT
            productVariants: { priceRange: { min: $min, max: $max }, attributes: $attributes }
            include: { paths: $path }
          }
        ) {
          edges {
            node {
              name
              path
              ... on Product {
                  matchingVariant {
                  name
                  price
                  isDefault
                  sku
                  attributes {
                    attribute
                    value
                  }
                  priceVariants {
                    identifier
                    name
                    price
                    currency
                  }
                  images {
                    url
                    variants {
                      url
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }
      `,
    {
      path,
      field: field === "NAME" ? "ITEM_NAME" : field,
      direction,
      min: priceRangeParams.min ? parseFloat(priceRangeParams.min) : 0,
      max: priceRangeParams.max ? parseFloat(priceRangeParams.max) : 0,
      attributes: Object.values(attributeFilters)
    }
  );
  return ((_a = results == null ? void 0 : results.search) == null ? void 0 : _a.edges) || [];
};

// src/use-cases/crystallize/read/searchOrderByPriceRange.ts
var searchOrderByPriceRange_default = async (apiClient, path, language) => {
  return await apiClient.searchApi(
    `#graphql
        query SEARCH_ORDER_BY_PRICE_RANGE($path: [String!]) {
        search(
          language: "${language}"
          first: 100,  
          filter: {
            type: PRODUCT
            include: { paths: $path }
          }
        ) {
          edges {
            node {
              name
              path
              ... on Product {
                matchingVariant {
                  isDefault
                  price
                  priceVariants {
                    identifier
                    name
                    price
                    currency
                  }
                  images {
                    variants {
                      url
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    {
      path
    }
  );
};

// src/use-cases/crystallize/read/fetchFolderWithChildren.ts
var fetchFolderWithChildren_default = async (apiClient, path, version, language) => {
  return (await apiClient.catalogueApi(
    `#graphql
query ($language: String!, $path: String!, $version: VersionLabel) {
    catalogue(language: $language, path: $path, version: $version) {
        id
        name
        path
        meta: component(id:"meta"){
          content {
            ...on ContentChunkContent {
              chunks {
                id
                type
                content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on RichTextContent {
                    plainText
                  }
                  ...on ImageContent {
                    firstImage {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        components {
          type
          id
          content {
            ...on SingleLineContent {
              text
            }
            ...on RichTextContent {
              plainText
            }
            ... on ComponentChoiceContent {
              selectedComponent {
                name
                content {
                    ... on GridRelationsContent {
                        grids {
                          rows {
                            columns {
                              layout {
                                rowspan
                                colspan
                                colIndex
                                rowIndex
                              }
                              item {
                                name
                                path
                                type
                                shape {
                                  identifier
                                }
                                ...on Product {
                                  defaultVariant {
                                    price
                                    attributes {
                                        value
                                        attribute
                                    }
                                    priceVariants {
                                      identifier
                                      name
                                      price
                                      currency
                                    }
                                    images {
                                      variants {
                                        url
                                        height
                                        width
                                      }
                                    }
                                  }
                                }
                                components {
                                  type
                                  id
                                  content {
                                    ...on BooleanContent{
                                      value
                                    }
                                    ... on SingleLineContent {
                                      text
                                    }
                                    ... on RichTextContent {
                                      plainText
                                    }
                                    ... on ImageContent {
                                      images {
                                        url
                                        altText
                                        variants {
                                          url
                                          width
                                          height
                                        }
                                      }
                                    }
                                    ... on ComponentChoiceContent {
                                      selectedComponent {
                                        name
                                        content {
                                          ...on SingleLineContent {
                                            text
                                          }
                                          ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                          ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            }
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key 
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                  
                  ... on ItemRelationsContent {
                    items {
                      name
                      path
                      type
                      shape {
                        identifier
                      }
                      components {
                        type
                        id
                        content {
                            ...on BooleanContent{
                                value
                            }
                            ... on SingleLineContent {
                                text
                            }
                            ... on RichTextContent {
                                plainText
                            }
                            ... on ImageContent {
                                images {
                                    url
                                    altText
                                    variants {
                                      url
                                      width
                                      height
                                    }
                                }
                            }
                            ... on ComponentChoiceContent {
                                selectedComponent {
                                    name
                                    content {
                                        ...on SingleLineContent {
                                            text
                                        }
                                        ... on VideoContent {
                                            videos {
                                                title
                                                playlists
                                                id
                                                thumbnails {
                                                    variants {
                                                        url
                                                        width
                                                        height
                                                    }
                                                }
                                            }
                                        }
                                        ... on ImageContent {
                                            images {
                                              url
                                              altText
                                              variants {
                                                url
                                                width
                                                height
                                              }
                                            } 
                                        }
                                        ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              components {
                                                id
                                                content {
                                                  ...on SingleLineContent {
                                                    text
                                                  }
                                                  ...on RichTextContent {
                                                    plainText
                                                  }
                                                  ...on ComponentChoiceContent {
                                                    selectedComponent {
                                                      content {
                                                        ...on ImageContent {
                                                          firstImage {
                                                            url
                                                            altText
                                                            variants {
                                                              url
                                                              width
                                                              height
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                              ...on Product {
                                                defaultVariant {
                                                  price
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    ... on ContentChunkContent {
                                      chunks {
                                        id  
                                        content {
                                          ... on NumericContent {
                                            number
                                            unit
                                          }
                                          ...on SingleLineContent{
                                              text
                                          }
                                          ...on SelectionContent {
                                              options {
                                                  value
                                                  key
                                              }
                                          }
                                          ...on BooleanContent {
                                              value
                                          }
                                          ... on ItemRelationsContent {
                                            items {
                                              name
                                              type
                                              path
                                              ...on Product {
                                                id
                                                defaultVariant {
                                                  price
                                                  priceVariants {
                                                    identifier
                                                    name
                                                    price
                                                    currency
                                                  }
                                                  firstImage {
                                                    url
                                                    altText
                                                    variants {
                                                      url
                                                      width
                                                      height
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          ...on PropertiesTableContent {
                                              sections {
                                                  title
                                                  properties {
                                                      key
                                                      value
                                                  }
                                              }
                                          }
                                        }
                                      }
                                    }
                                    ... on SelectionContent {
                                      options {
                                        value
                                        key
                                }
                             }
                          }
                       }
                    }
                  }
                }
              }
            }
          }
        }
        children {
          name
          path
          type
          shape {
            identifier
          }
          ...on Document {
            name
            path
            components {
              id
              type
              content {
                ...on ContentChunkContent {
                  chunks {
                    id
                    content {
                      ... on SingleLineContent {
                        text
                      }
                      ... on NumericContent {
                        number
                        unit
                      }

                      
                      ... on ItemRelationsContent {
                        items {
                          name
                          type
                          path
                          ...on Product {
                            id
                            defaultVariant {
                              price
                              priceVariants {
                                identifier
                                name
                                price
                                currency
                              }
                              firstImage {
                                url
                                altText
                                variants {
                                  url
                                  width
                                  height
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ...on SingleLineContent {
                  text
                }
                ...on ImageContent {
                  images {
                    variants {
                      url
                      width
                      height
                    }
                  }
                }
                ...on RichTextContent {
                  plainText
                }
                ...on ComponentChoiceContent {
                  selectedComponent {
                    id
                    content {
                      ...on ImageContent {
                        images {
                          variants {
                            url
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          ...on Product {
            defaultVariant {
              price
              priceVariants {
                identifier
                name
                price
                currency
              }
              firstImage {
                url
                altText
              }
            }
          }
        }
      }
    }
  `,
    {
      language: "en",
      path,
      version: version === "draft" ? "draft" : "published"
    }
  )).catalogue;
};

// src/use-cases/crystallize/read/index.ts
var CrystallizeAPI = ({
  apiClient,
  language,
  locale = language,
  isPreview = false
}) => {
  const version = isPreview ? "draft" : "published";
  const mapper = DataMapper({ language, locale });
  return {
    fetchTenantConfig: (tenantIdentifier) => fetchTenantConfig_default(apiClient, tenantIdentifier),
    fetchNavigation: (path) => fetchNavigation_default(apiClient, path, language).then(mapper.API.Call.fetchNavigationToTree),
    fetchTreeMap: () => fetchTreeMap_default(apiClient, language),
    fetchLandingPage: (path) => fetchLandingPage_default(apiClient, path, version, language).then(mapper.API.Call.fetchLandingPageToLandingPage),
    fetchDocument: (path) => fetchDocument_default(apiClient, path, version, language).then(mapper.API.Call.fetchDocumentToStory),
    fetchProduct: (path) => fetchProduct_default(apiClient, path, version, language).then(mapper.API.Call.fetchProductToProduct),
    fetchFolder: (path) => fetchFolder_default(apiClient, path, version, language).then(mapper.API.Call.fetchFolderToCategory),
    fetchFolderWithChildren: (path) => fetchFolderWithChildren_default(apiClient, path, version, language).then(
      mapper.API.Call.fetchFolderToCategory(true)
    ),
    fetchShop: (path) => Promise.all([
      fetchFolder_default(apiClient, path, version, language),
      fetchHierarchy_default(apiClient, path, language)
    ]).then(mapper.API.Call.fetchShopToShop),
    fetchFooter: (path) => fetchFooter_default(apiClient, path, version, language).then(mapper.API.Call.fetchFooterToFooter),
    fetchPriceRangeAndAttributes: (path) => fetchPriceRangeAndAttributes_default(apiClient, path),
    search: (value) => search_default(apiClient, value, language).then(mapper.API.Call.searchProductToProductSlim),
    searchOrderBy: (path, orderBy, fitlers, attributes) => searchOrderBy_default(apiClient, path, language, orderBy, fitlers, attributes).then(
      mapper.API.Call.searchProductToProductSlim
    ),
    searchOrderByPriceRange: (path) => searchOrderByPriceRange_default(apiClient, path, language).then(mapper.API.Call.searchProductToProductSlim),
    searchFilteredByPriceRange: (path, min, max) => searchFilteredByPriceRange_default(apiClient, path, language, min, max).then(
      mapper.API.Call.searchProductToProductSlim
    ),
    searchByTopic: (value) => searchByTopic_default(apiClient, value, language).then(mapper.API.Call.searchByTopicProductToProductSlim)
  };
};

export {
  search_default,
  CrystallizeAPI
};
//# sourceMappingURL=/build/_shared/chunk-X7VP6C4N.js.map
