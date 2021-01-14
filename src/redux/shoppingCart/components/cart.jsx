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
  const { Carts } = state.cart;
  const { products } = state.product;
  const Dict = {};
  products.map((product, index) => (Dict[product.id] = { ...product }));
  let TotalCart = 0;
  Object.keys(Carts).forEach((index) => {
    TotalCart +=
      Number(Carts[index].quantity) * Number(Dict[Carts[index].id].price);
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
        {Carts.map((item, key) => {
          return (
            <tr key={key}>
              <Td>{Dict[item.id].title}</Td>
              <Td>{Dict[item.id].price} $</Td>
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
              <Td>{TotalPrice(Dict[item.id].price, item.quantity)} $</Td>
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
  return {
    state: state,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DeleteCart,
  DecreaseQuantity,
})(Cart);
