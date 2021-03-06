export default function caseAddCart(state, action) {
  if (state.cartCount === 0) {
    return {
      ...state,
      Carts: [...state.Carts, { id: action.payload.id, quantity: 1 }],
      cartCount: state.Carts.reduce((acc, item) => acc + item.quantity, 1),
    };
  } else {
    let check = false;
    const tempCarts = state.Carts.map((item) => {
      if (item.id === action.payload.id) {
        check = true;
        return { ...item, quantity: item.quantity + 1 };
      }
      return { ...item };
    });
    if (!check) {
      const temp = [...state.Carts, { id: action.payload.id, quantity: 1 }];
      return {
        ...state,
        Carts: [...temp],
        cartCount: temp.reduce((acc, item) => acc + item.quantity, 0),
      };
    }
    return {
      ...state,
      Carts: [...tempCarts],
      cartCount: tempCarts.reduce((acc, item) => acc + item.quantity, 0),
    };
  }
}
