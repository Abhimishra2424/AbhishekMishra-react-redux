import { createStore } from "redux";
import reducers from "./reducers/index";

// This take the reducers and combines them into one reducer
const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
