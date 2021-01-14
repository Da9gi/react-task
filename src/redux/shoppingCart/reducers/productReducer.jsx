import { GET_ALL_PRODUCT, ADD_PRODUCT } from "../actions/index";

const initialState = {
  products: [],
  total_count: 0,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: [...action.payload.products],
        total_count: action.payload.total_count
          ? action.payload.total_count
          : state.total_count,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return { ...state };
  }
}
