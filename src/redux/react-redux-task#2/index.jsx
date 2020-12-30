import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Products from "./components/product";
import Carts from "./components/cart";
import { Title } from "./styles/Styles";

export default function ShoppingCart() {
  return (
    <Router>
      <Link to="/components/product">
        <Title color="white" size="1em">
          Products
        </Title>
      </Link>
      <Link to="/components/cart">
        <Title color="white" size="1em">
          Carts
        </Title>
      </Link>
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
