import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Products from "./components/product";
import Carts from "./components/cart";
import { Td, Title } from "./styles/Styles";
import { GetCartCount } from "./actions";

function ShoppingCart({ products, GetCartCount }) {
  const { cartCount } = products;
  useEffect(() => {
    GetCartCount();
  }, [cartCount, GetCartCount]);

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
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetCartCount: () => dispatch(GetCartCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
