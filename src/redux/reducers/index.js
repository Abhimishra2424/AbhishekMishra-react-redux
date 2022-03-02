import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducers";

export const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default rootReducers;
