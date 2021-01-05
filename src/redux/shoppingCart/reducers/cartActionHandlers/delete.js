export default function caseDeleteCart(state, action) {
  const Carts = state.Carts.filter((item) => {
    return item.id !== state.Carts[action.payload].id;
  });
  return {
    ...state,
    Carts: [...Carts],
    cartCount: Carts.reduce((acc, item) => acc + item.quantity, 0),
  };
}
