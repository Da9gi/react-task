import React from "react";
import { connect } from "react-redux";

import {
  IncreaseQuantity,
  DeleteCart,
  DecreaseQuantity,
} from "../actions/index";
import {
  Td,
  ButtonReset,
  ButtonDefault,
  ButtonSubmit,
  Heading,
} from "../styles/Styles";

function Cart({ state, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
  const { Carts } = state;
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(Carts).forEach((index) => {
    TotalCart += Number(Carts[index].quantity) * Number(Carts[index].price);
    ListCart.push(Carts[index]);
  });
  const TotalPrice = (price, quantity) => {
    return Number(price * quantity);
  };

  return (
    <table>
      <thead>
        <tr>
          <Heading>Product</Heading>
          <Heading>Price</Heading>
          <Heading>Quantity</Heading>
          <Heading>Total Price</Heading>
          <Heading></Heading>
        </tr>
      </thead>
      <tbody>
        {ListCart.map((item, key) => {
          return (
            <tr key={key}>
              <Td>{item.title}</Td>
              <Td>{item.price} $</Td>
              <Td>
                <ButtonSubmit
                  type="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => DecreaseQuantity(key)}
                >
                  -
                </ButtonSubmit>
                <ButtonDefault>{item.quantity}</ButtonDefault>
                <ButtonSubmit
                  type="button"
                  style={{ cursor: "pointer" }}
                  onClick={() => IncreaseQuantity(key)}
                >
                  +
                </ButtonSubmit>
              </Td>
              <Td>{TotalPrice(item.price, item.quantity)} $</Td>
              <Td>
                <ButtonReset
                  type="reset"
                  style={{ cursor: "pointer" }}
                  onClick={() => DeleteCart(key)}
                >
                  Remove
                </ButtonReset>
              </Td>
            </tr>
          );
        })}
        <tr></tr>
        <tr>
          <Heading color="royalblue">Total Amount</Heading>
          <Td></Td>
          <Td></Td>
          <Td>{Number(TotalCart).toLocaleString("en-US")} $</Td>
        </tr>
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => {
  console.log("Carts: ", state.rootReducer.cartReducer);
  return {
    state: state.rootReducer.cartReducer,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DeleteCart,
  DecreaseQuantity,
})(Cart);
