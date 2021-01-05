import loadProducts from "../utilities/productsList";

let flag = true;

export const INCREASE_QUANTITY = "product/increment";
export const DECREASE_QUANTITY = "product/decrement";
export const GET_ALL_PRODUCT = "products/get";
export const ADD_PRODUCT = "products/add";
export const GET_CART_COUNT = "carts/getcount";
export const ADD_CART = "carts/add";
export const DELETE_CART = "carts/remove";

export function fetchProducts(products) {
  return (dispatch) => {
    if (flag) {
      flag = false;
      return dispatch(GetAllProduct(loadProducts()));
    }
    return GetAllProduct(products);
  };
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
