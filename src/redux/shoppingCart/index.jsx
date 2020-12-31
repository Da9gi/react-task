import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Products from "./components/product";
import Carts from "./components/cart";
import { Td, Title } from "./styles/Styles";

export default function ShoppingCart() {
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
