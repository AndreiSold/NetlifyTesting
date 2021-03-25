import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '..';
import { Category, Product } from '../../models/product';
import { productsService } from '../../services/productsService';
import { ProductsState } from '../reducers/productsReducer';

export enum ProductsActionTypes {
  LOAD_ALL = 'Load all products',
  LOAD_BY_ID_SUCCESS = 'Load product by id success',
  LOAD_ALL_SUCCESS = 'Load all success',
  SET_LOADING = 'Products loading',
  SET_SELECTED_PRODUCT_CATEGORY = 'Set selected product category',
  CREATE_PRODUCT_SUCCESS = 'Create a new product success',
  UPDATE_PRODUCT_SUCCESS = 'Update a product success',
}

export interface LoadAllProductsAction {
  type: typeof ProductsActionTypes.LOAD_ALL;
}

export const loadAllProducts: ActionCreator<
  ThunkAction<Promise<any>, AppState, null, LoadAllProductsAction>
> = () => {
  return async (dispatch: Dispatch, getState) => {
    if (Object.keys(getState().products.products).length <= 1) {
      try {
        dispatch(setProductsLoading(true));
        const products = await productsService.getAllProducts();
        dispatch(loadAllProductsSuccess(products));
      } catch (err) {
        console.error(err);
      }
    }
  };
};

export interface LoadProductByIdSuccessAction {
  type: typeof ProductsActionTypes.LOAD_BY_ID_SUCCESS;
  data: Product;
}

export const loadProductByIdSuccess = (
  data: Product
): LoadProductByIdSuccessAction => ({
  type: ProductsActionTypes.LOAD_BY_ID_SUCCESS,
  data,
});

export interface CreateProductSuccessAction {
  type: typeof ProductsActionTypes.CREATE_PRODUCT_SUCCESS;
  data: Product;
}

export const createProductSuccess = (
  data: Product
): CreateProductSuccessAction => ({
  type: ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
  data,
});

export interface UpdateProductSuccessAction {
  type: typeof ProductsActionTypes.UPDATE_PRODUCT_SUCCESS;
  data: Product;
}

export const updateProductSuccess = (
  data: Product
): UpdateProductSuccessAction => ({
  type: ProductsActionTypes.UPDATE_PRODUCT_SUCCESS,
  data,
});

export const loadProductById: ActionCreator<
  ThunkAction<Promise<any>, ProductsState, null, LoadProductByIdSuccessAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setProductsLoading(true));
      const product = await productsService.getProductById(id);
      dispatch(loadProductByIdSuccess(product));
    } catch (err) {
      console.error(err);
    }
  };
};

export interface LoadAllProductsSuccessAction {
  type: typeof ProductsActionTypes.LOAD_ALL_SUCCESS;
  data: Product[];
}

export const loadAllProductsSuccess = (
  data: Product[]
): LoadAllProductsSuccessAction => ({
  type: ProductsActionTypes.LOAD_ALL_SUCCESS,
  data,
});

export interface SetProductsLoadingAction {
  type: typeof ProductsActionTypes.SET_LOADING;
  payload: boolean;
}

export const setProductsLoading = (loading: boolean) => ({
  type: ProductsActionTypes.SET_LOADING,
  payload: loading,
});

export interface SetSelectedProductCategoryAction {
  type: typeof ProductsActionTypes.SET_SELECTED_PRODUCT_CATEGORY;
  payload: Category;
}

export const SetSelectedProductCategory = (
  payload: Category
): SetSelectedProductCategoryAction => ({
  type: ProductsActionTypes.SET_SELECTED_PRODUCT_CATEGORY,
  payload,
});

export type ProductsActions =
  | LoadAllProductsAction
  | LoadProductByIdSuccessAction
  | LoadAllProductsSuccessAction
  | SetProductsLoadingAction
  | SetSelectedProductCategoryAction
  | CreateProductSuccessAction
  | UpdateProductSuccessAction;
