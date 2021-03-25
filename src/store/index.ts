import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import { productsReducer, ProductsState } from './reducers/productsReducer';

export interface AppState {
  products: ProductsState;
}

export const publicUrl = process.env.PUBLIC_URL || '';

const createRootReducer = () =>
  combineReducers<AppState>({
    products: productsReducer,
  });

const configureStore = (initialState?: AppState): Store<AppState, any> => {
  const composeEnhancer: typeof compose = compose;

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};

export const store = configureStore();

export default store;
