export default function caseAddCart(state, action) {
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
}
