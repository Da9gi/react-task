import {
  ADD_CART,
  GET_CART_COUNT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_CART,
} from "../actions/index";

import caseAddCart from "./cartActionHandlers/add";
import caseIncreaseQuantity from "./cartActionHandlers/increase";
import caseDecreaseQuantity from "./cartActionHandlers/decrease";
import caseDeleteCart from "./cartActionHandlers/delete";

const initialState = {
  cartCount: 0,
  Carts: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return caseAddCart(state, action);
    case INCREASE_QUANTITY:
      return caseIncreaseQuantity(state, action);
    case DECREASE_QUANTITY:
      return caseDecreaseQuantity(state, action);
    case DELETE_CART:
      return caseDeleteCart(state, action);
    case GET_CART_COUNT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
