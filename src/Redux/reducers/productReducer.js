import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../types";

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
        // products: state.product.filter(
        //   (product) => product.id !== action.payload
        // ),
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};
