export default function caseDeleteCart(state, action) {
  const quantity_ = state.Carts[action.payload].quantity;
  return {
    ...state,
    cartCount: state.cartCount - quantity_,
    Carts: state.Carts.filter((item) => {
      return item.id !== state.Carts[action.payload].id;
    }),
  };
}
