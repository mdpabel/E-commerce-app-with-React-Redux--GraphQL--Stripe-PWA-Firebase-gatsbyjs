import { createSelector } from "reselect";

// const MAP_COLLECTION_ID = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

const selectShopData = createSelector([selectShop], (shop) => shop.shopData);

export const selectShopDataForCollections = createSelector(
  [selectShopData],
  (shopData) =>
    shopData ? Object.keys(shopData).map((keys) => shopData[keys]) : []
);

export const selectCollection = (collectionURLParams) =>
  createSelector(
    [selectShopData],
    // shopData.find((item) => item.id === MAP_COLLECTION_ID[collectionURLParams])
    (shopData) => shopData[collectionURLParams]
  );

export const selectSpinner = createSelector(
  [selectShop],
  (shop) => shop.loading
);

export const shopDataIsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.shopData
);

export default selectShopData;
