export default function caseDecreaseQuantity(state, action) {
  let Carts = [...state.Carts];
  if (state.Carts[action.payload].quantity > 1) {
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
