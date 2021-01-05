export default function caseIncreaseQuantity(state, action) {
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
}
