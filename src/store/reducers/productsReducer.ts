import { mapKeys, set } from 'lodash';
import { Reducer } from 'redux';
import { Category, Product } from '../../models/product';
import {
  ProductsActions,
  ProductsActionTypes,
} from '../actions/productsActions';

export interface ProductsState {
  products: { [id: string]: Product };
  loading: boolean;
  selectedProductCategory: Category;
}

const initialState: ProductsState = {
  products: {},
  loading: false,
  selectedProductCategory: Category.ALL_PRODUCTS,
};

export const productsReducer: Reducer<ProductsState, ProductsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      const newProduct = (action.data as unknown) as Product;
      state.products[newProduct.id] = newProduct;
      return {
        ...state,
      };
    }
    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const updatedProduct = (action.data as unknown) as Product;
      state.products[updatedProduct.id] = updatedProduct;
      return {
        ...state,
      };
    }
    case ProductsActionTypes.LOAD_ALL_SUCCESS: {
      return {
        ...state,
        products: mapKeys(action.data, 'id'),
        loading: false,
      };
    }
    case ProductsActionTypes.LOAD_BY_ID_SUCCESS: {
      return {
        ...state,
        products: set(state.products, action.data.id, action.data),
        loading: false,
      };
    }
    case ProductsActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: (action.payload as unknown) as boolean,
      };
    }
    case ProductsActionTypes.SET_SELECTED_PRODUCT_CATEGORY: {
      return {
        ...state,
        selectedProductCategory: action.payload,
      };
    }
    default:
      return state;
  }
};
