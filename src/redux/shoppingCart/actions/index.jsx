import loadProducts from "../utilities/productsList";

export const INCREASE_QUANTITY = "quantity/increment";
export const DECREASE_QUANTITY = "quantity/decrement";
export const GET_ALL_PRODUCT = "product/get";
export const GET_CART_COUNT = "cart/getcount";
export const ADD_CART = "cart/add";
export const UPDATE_CART = "cart/update";
export const DELETE_CART = "cart/delete";

export function fetchProducts() {
  return (dispatch) => dispatch(GetAllProduct(loadProducts()));
}

export function GetAllProduct(payload) {
  return {
    type: "product/get",
    payload,
  };
}

export function AddCart(payload) {
  return {
    type: "cart/add",
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: "cart/update",
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: "cart/delete",
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: "quantity/increment",
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: "quantity/decrement",
    payload,
  };
}

export function GetCartCount() {
  return {
    type: "cart/getcount",
  };
}
