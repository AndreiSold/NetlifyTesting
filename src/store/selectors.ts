import { AppState } from "./index";

// Product selectors
export const productsSelector = (state: AppState) => state.products.products;
export const productSelector = (id: string, state: AppState) => {
  return id ? state.products.products[id] : undefined;
};
export const productsLoadingSelector = (state: AppState) =>
  state.products.loading;
export const selectedProductCategorySelector = (state: AppState) =>
  state.products.selectedProductCategory;
