import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Products from "./components/product";
import Carts from "./components/cart";
import AddProduct from "./components/addproduct";
import { Td, Title } from "./styles/Styles";
import { GetCartCount } from "./actions";

function ShoppingCart({ state, GetCartCount }) {
  const { cartCount } = state;

  useEffect(() => {
    GetCartCount();
  }, [GetCartCount]);

  return (
    <Router>
      <table>
        <thead>
          <tr>
            <Td>
              <Link to="/">
                <Title color="white" size="1em">
                  Home
                </Title>
              </Link>
            </Td>
            <Td>
              <Link to="/components/product">
                <Title color="white" size="1em">
                  Products
                </Title>
              </Link>
            </Td>
            <Td>
              <Link to="/components/cart">
                <Title color="white" size="1em">
                  Carts
                  {` | ${cartCount} |`}
                </Title>
              </Link>
            </Td>
            <Td>
              <Link to="/components/addproduct">
                <Title color="white" size="1em">
                  Add Product
                </Title>
              </Link>
            </Td>
          </tr>
        </thead>
      </table>
      <div>
        <Switch>
          <Route path="/components/product">
            <Products />
          </Route>
          <Route path="/components/cart">
            <Carts />
          </Route>
          <Route path="/components/addproduct">
            <AddProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.shoppingCart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetCartCount: () => dispatch(GetCartCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
