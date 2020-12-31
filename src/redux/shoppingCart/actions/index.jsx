import loadProducts from "../utilities/productsList";

export const INCREASE_QUANTITY = "product/increment";
export const DECREASE_QUANTITY = "product/decrement";
export const GET_ALL_PRODUCT = "products/get";
export const GET_CART_COUNT = "carts/getcount";
export const ADD_CART = "carts/add";
export const UPDATE_CART = "carts/update";
export const DELETE_CART = "cart/delete";

export function fetchProducts() {
  return (dispatch) => dispatch(GetAllProduct(loadProducts()));
}

export function GetAllProduct(payload) {
  return {
    type: GET_ALL_PRODUCT,
    payload,
  };
}

export function AddCart(payload) {
  return {
    type: ADD_CART,
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: UPDATE_CART,
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: DELETE_CART,
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
}

export function GetCartCount() {
  return {
    type: GET_CART_COUNT,
  };
}
