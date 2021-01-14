export const INCREASE_QUANTITY = "product/increment";
export const DECREASE_QUANTITY = "product/decrement";
export const GET_ALL_PRODUCT = "products/get";
export const ADD_PRODUCT = "products/add";
export const GET_CART_COUNT = "carts/getcount";
export const ADD_CART = "carts/add";
export const DELETE_CART = "carts/remove";
export const FETCHED_PRODUCTS = "products/fetched";

export function GetAllProduct(payload) {
  return {
    type: GET_ALL_PRODUCT,
    payload,
  };
}
export function fetchedProducts({ page, perPage }) {
  return {
    type: FETCHED_PRODUCTS,
    page: page,
    perPage,
  };
}
export function AddCart(payload) {
  return {
    type: ADD_CART,
    payload,
  };
}
export function AddProduct(payload) {
  return {
    type: ADD_PRODUCT,
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
