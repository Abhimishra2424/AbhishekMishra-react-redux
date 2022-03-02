import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "This is product 1",
      category: "Category 1",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
