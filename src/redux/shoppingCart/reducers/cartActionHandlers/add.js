export default function caseAddCart(state, action) {
  if (state.cartCount === 0) {
    const cart = {
      id: action.payload.id,
      quantity: 1,
    };
    return {
      ...state,
      Carts: [...state.Carts, cart],
      cartCount: state.Carts.reduce((acc, item) => acc + item.quantity, 1),
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
      };
      const temp = [...state.Carts, cart];
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
