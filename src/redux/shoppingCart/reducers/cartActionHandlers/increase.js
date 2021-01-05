export default function caseIncreaseQuantity(state, action) {
  let tempCarts = [...state.Carts];
  tempCarts[action.payload] = {
    ...state.Carts[action.payload],
    quantity: state.Carts[action.payload].quantity + 1,
  };
  return {
    ...state,
    Carts: [...tempCarts],
    cartCount: tempCarts.reduce((acc, item) => acc + item.quantity, 0),
  };
}
