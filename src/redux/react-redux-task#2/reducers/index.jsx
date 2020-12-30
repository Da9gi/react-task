import {
  GET_ALL_PRODUCT,
  ADD_CART,
  GET_CART_COUNT,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_CART,
} from "../actions/index";

const initialState = {
  cartCount: 0,
  Carts: [],
  products: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_CART_COUNT:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.cartCount === 0) {
        const cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          price: action.payload.price,
        };
        return {
          ...state,
          cartCount: state.cartCount + 1,
          Carts: [...state.Carts, cart],
        };
      } else {
        let check = false;
        const tempCarts = state.Carts.map((item, key) => {
          if (item.id === action.payload.id) {
            check = true;
            let tempItem = { ...item, quantity: item.quantity + 1 };
            return tempItem;
          }
          return item;
        });
        if (!check) {
          const cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            price: action.payload.price,
          };
          // state.Carts.push(cart);
          return {
            ...state,
            cartCount: state.cartCount + 1,
            Carts: [...state.Carts, cart],
          };
        }
        return {
          ...state,
          cartCount: state.cartCount + 1,
          Carts: [...tempCarts],
        };
      }
    case INCREASE_QUANTITY:
      let tempCarts = [...state.Carts];
      tempCarts[action.payload] = {
        ...state.Carts[action.payload],
        quantity: state.Carts[action.payload].quantity + 1,
      };
      return {
        ...state,
        cartCount: state.cartCount + 1,
        Carts: [...tempCarts],
      };
    case DECREASE_QUANTITY:
      const quantity = state.Carts[action.payload].quantity;
      let Carts = [...state.Carts];
      if (quantity > 1) {
        Carts[action.payload] = {
          ...state.Carts[action.payload],
          quantity: state.Carts[action.payload].quantity - 1,
        };
      } else {
        Carts.splice(action.payload, 1);
      }
      return {
        ...state,
        cartCount: state.cartCount - 1,
        Carts: [...Carts],
      };
    case DELETE_CART:
      const quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        cartCount: state.cartCount - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id !== state.Carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
}
