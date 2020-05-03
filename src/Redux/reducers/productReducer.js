import { CREATE_PRODUCT, DELETE_PRODUCT } from "../types";

const initState = {
  products: [],
};

export const productReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
