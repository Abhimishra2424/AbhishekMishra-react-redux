import { combineReducers } from "redux";
import { productReducer } from "./productReducers";

export const rootReducers = combineReducers({
  allProducts: productReducer,
});

export default rootReducers;
