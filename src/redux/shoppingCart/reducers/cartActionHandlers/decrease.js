export default function caseDecreaseQuantity(state, action) {
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
    Carts: [...Carts],
    cartCount: Carts.reduce((acc, item) => acc + item.quantity, 0),
  };
}
