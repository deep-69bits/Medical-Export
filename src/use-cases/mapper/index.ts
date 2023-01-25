import fetchDocumentToStory from './API/fetchDocumentToStory';
import fetchFolderToCategory from './API/fetchFolderToCategory';
import fetchFolderWithChildrenToCategoryWithChildren from './API/fetchFolderWithChildrenToCategoryWithChildren';
import fetchFooterToFooter from './API/fetchFooterToFooter';
import fetchLandingPageToLandingPage from './API/fetchLandingPageToLandingPage';
import fetchNavigationToTree from './API/fetchNavigationToTree';
import fetchProductToProduct from './API/fetchProductToProduct';
import fetchShopToShop from './API/fetchShopToShop';
import searchByTopicProductToProductSlim from './API/searchByTopicProductToProductSlim';
import searchProductToProductSlim from './API/searchProductToProductSlim';
import AnyIemToGrid from './Object/AnyIemToGrid';
import APIImageToImage from './Object/APIImageToImage';
import APIMetaSEOComponentToSEO from './Object/APIMetaSEOComponentToSEO';
import APIPriceVariantsToPriceVariant from './Object/APIPriceVariantsToPriceVariant';
import APIProductVariantToProductVariant from './Object/APIProductVariantToProductVariant';

export type DataMapperContext = {
    locale?: string;
    language: string;
};

export const DataMapper = (context?: DataMapperContext) => {
    return {
        API: {
            Call: {
                fetchDocumentToStory: fetchDocumentToStory,
                fetchFolderToCategory: (withChildren: boolean = false) => {
                    if (withChildren) {
                        return fetchFolderWithChildrenToCategoryWithChildren;
                    }
                    return fetchFolderToCategory;
                },
                fetchFooterToFooter: fetchFooterToFooter,
                fetchLandingPageToLandingPage: fetchLandingPageToLandingPage,
                fetchProductToProduct: fetchProductToProduct,
                fetchShopToShop: fetchShopToShop,
                fetchNavigationToTree: fetchNavigationToTree,
                searchByTopicProductToProductSlim: searchByTopicProductToProductSlim,
                searchProductToProductSlim: searchProductToProductSlim,
            },
            Object: {
                AnyItemToGrid: AnyIemToGrid,
                APIImageToImage: APIImageToImage,
                APIMetaSEOComponentToSEO: APIMetaSEOComponentToSEO,
                APIPriceVariantsToPriceVariant: APIPriceVariantsToPriceVariant,
                APIProductVariantToProductVariant: APIProductVariantToProductVariant,
            },
        },
    };
};

export type DataMapperInterface = ReturnType<typeof DataMapper>;
